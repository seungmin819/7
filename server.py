#!/usr/bin/env python3
"""
댕냥지킴이 - 경량 웹 서버 및 REST API
Python 3 표준 라이브러리(http.server, json, urllib)만으로 동작하는 무설치 서버
"""

import http.server
import socketserver
import json
import os
import sys
import urllib.parse
from datetime import datetime

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "data.json")

def load_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            try:
                return json.load(f)
            except Exception as e:
                print(f"[Error] data.json load failed: {e}")
    return {"shelters": [], "stories": [], "mbtiQuestions": [], "mbtiResults": {}, "volunteers": []}

def save_data(data):
    try:
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"[Error] data.json save failed: {e}")
        return False

class DangnyangHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def _send_json(self, status_code, data_obj):
        body = json.dumps(data_obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path.startswith("/api/"):
            data = load_data()
            if path == "/api/shelters":
                self._send_json(200, {"success": True, "shelters": data.get("shelters", [])})
                return
            elif path == "/api/stories":
                self._send_json(200, {"success": True, "stories": data.get("stories", [])})
                return
            elif path == "/api/mbti":
                self._send_json(200, {
                    "success": True,
                    "questions": data.get("mbtiQuestions", []),
                    "results": data.get("mbtiResults", {})
                })
                return
            elif path == "/api/volunteers":
                self._send_json(200, {"success": True, "volunteers": data.get("volunteers", [])})
                return
            else:
                self._send_json(404, {"error": "API 엔드포인트를 찾을 수 없습니다."})
                return

        # Default static file handler
        if path == "/":
            self.path = "/index.html"
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)
        payload = {}
        if body:
            try:
                payload = json.loads(body.decode("utf-8"))
            except Exception:
                pass

        data = load_data()

        if path == "/api/stories/like":
            story_id = payload.get("storyId")
            for story in data.get("stories", []):
                if story.get("id") == story_id:
                    liked = story.get("liked", False)
                    story["liked"] = not liked
                    story["likes"] = story.get("likes", 0) + (1 if not liked else -1)
                    save_data(data)
                    self._send_json(200, {"success": True, "story": story})
                    return
            self._send_json(404, {"error": "스토리를 찾을 수 없습니다."})
            return

        elif path == "/api/stories":
            new_id = max([s.get("id", 0) for s in data.get("stories", [])], default=0) + 1
            new_story = {
                "id": new_id,
                "petName": payload.get("petName", "댕냥이"),
                "title": payload.get("title", "행복한 입양 근황"),
                "desc": payload.get("desc", ""),
                "beforeImg": payload.get("beforeImg", "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=80"),
                "afterImg": payload.get("afterImg", "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop&q=80"),
                "tags": payload.get("tags", ["#입양후기", "#견생역전"]),
                "likes": 1,
                "liked": True,
                "author": payload.get("author", "따뜻한반려인"),
                "date": datetime.now().strftime("%Y.%m.%d")
            }
            data.setdefault("stories", []).insert(0, new_story)
            save_data(data)
            self._send_json(201, {"success": True, "story": new_story})
            return

        elif path == "/api/volunteers/apply":
            new_id = len(data.get("volunteers", [])) + 1
            new_volunteer = {
                "id": new_id,
                "shelterName": payload.get("shelterName", "마포 사랑보호소"),
                "applicant": payload.get("applicant", "익명"),
                "phone": payload.get("phone", ""),
                "category": payload.get("category", "주말 산책 봉사"),
                "date": payload.get("date", datetime.now().strftime("%Y-%m-%d")),
                "message": payload.get("message", ""),
                "status": "접수완료"
            }
            data.setdefault("volunteers", []).append(new_volunteer)
            save_data(data)
            self._send_json(200, {"success": True, "volunteer": new_volunteer, "message": "봉사활동 신청이 완료되었습니다!"})
            return

        elif path == "/api/mbti/calculate":
            answers = payload.get("answers", [])
            key = "-".join(answers)
            results = data.get("mbtiResults", {})
            result = results.get(key)
            if not result:
                if "D" in answers or len(answers) == 0:
                    result = results.get("DEFAULT_DOG", results.get("E-A-H-D"))
                else:
                    result = results.get("DEFAULT_CAT", results.get("I-C-W-K"))
            self._send_json(200, {"success": True, "result": result})
            return

        else:
            self._send_json(404, {"error": "API 엔드포인트를 찾을 수 없습니다."})

def run(port=PORT):
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), DangnyangHandler) as httpd:
        print(f"==================================================", flush=True)
        print(f"🐾 댕냥지킴이 웹 서버가 성공적으로 시작되었습니다!", flush=True)
        print(f"📍 접속 주소: http://localhost:{port}", flush=True)
        print(f"📁 정적 리소스 디렉토리: {BASE_DIR}", flush=True)
        print(f"==================================================", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n서버를 종료합니다.", flush=True)
            httpd.server_close()

if __name__ == "__main__":
    port = PORT
    if len(sys.argv) > 1:
        for i, arg in enumerate(sys.argv):
            if arg in ("--port", "-p") and i + 1 < len(sys.argv):
                port = int(sys.argv[i + 1])
    run(port)
