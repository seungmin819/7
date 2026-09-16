/**
 * 댕냥지킴이 - 클라이언트 웹 어플리케이션 스크립트 (Vanilla ES6+)
 */

// Fallback seed data in case running via file:// without Python server
const SEED_DATA = {
  shelters: [
    {
      id: 1,
      name: "마포 사랑보호소",
      lat: 37.5583,
      lng: 126.9244,
      address: "서울 마포구 월드컵북로 120",
      phone: "02-3142-8820",
      distance: "850m",
      animalCount: 18,
      urgentNeed: "주말 산책 봉사자 4명 모집 중",
      urgentCategory: "#주말산책봉사",
      categories: ["#주말산책봉사", "#견사청소"],
      color: "orange"
    },
    {
      id: 2,
      name: "연남 댕냥쉼터",
      lat: 37.5632,
      lng: 126.9215,
      address: "서울 마포구 동교로 210",
      phone: "02-332-1577",
      distance: "1.2km",
      animalCount: 12,
      urgentNeed: "배변패드 및 시니어 고양이 건식 사료 후원 필요",
      urgentCategory: "#물품후원필요",
      categories: ["#물품후원필요", "#임시보호"],
      color: "green"
    },
    {
      id: 3,
      name: "서교 희망동물센터",
      lat: 37.5539,
      lng: 126.9189,
      address: "서울 마포구 양화로 11길 45",
      phone: "02-325-9901",
      distance: "1.8km",
      animalCount: 24,
      urgentNeed: "대형견사 물청소 및 묘사 소독 봉사자 모집",
      urgentCategory: "#견사청소",
      categories: ["#견사청소", "#주말산책봉사"],
      color: "orange"
    },
    {
      id: 4,
      name: "망원 나눔반려쉼터",
      lat: 37.5562,
      lng: 126.9078,
      address: "서울 마포구 포은로 78",
      phone: "02-392-4114",
      distance: "2.1km",
      animalCount: 16,
      urgentNeed: "지방 보호소 동물 서울 이동 봉사자 (차량 지원)",
      urgentCategory: "#이동봉사",
      categories: ["#이동봉사", "#임시보호"],
      color: "green"
    },
    {
      id: 5,
      name: "상암 햇살동물구호소",
      lat: 37.5765,
      lng: 126.8982,
      address: "서울 마포구 월드컵로 240",
      phone: "02-300-2451",
      distance: "3.4km",
      animalCount: 31,
      urgentNeed: "치료 중인 유기견 단기 임시보호 가정 급구",
      urgentCategory: "#임시보호",
      categories: ["#임시보호", "#물품후원필요", "#주말산책봉사"],
      color: "orange"
    }
  ],
  stories: [
    {
      id: 1,
      petName: "복순이",
      title: "입양 100일 차, 털빛이 윤기나요! ✨",
      desc: "처음엔 철창 구석에서 벌벌 떨기만 하던 아이가 이제는 매일 산책 가자고 먼저 현관문 앞을 지켜요. 온 가족의 비타민이 되었습니다.",
      beforeImg: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=80",
      afterImg: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop&q=80",
      tags: ["#진도믹스", "#마포사랑보호소", "#입양100일차"],
      likes: 1248,
      liked: false,
      author: "복순이엄마",
      date: "2026.09.12"
    },
    {
      id: 2,
      petName: "초코",
      title: "겁쟁이에서 산책 대장으로 변신! 🦁",
      desc: "작은 발소리에도 구석에 숨던 초코가 이제는 무릎 위에서 골골송을 부르고 마당 산책도 씩씩하게 다니는 애교 만점 고양이가 되었어요.",
      beforeImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=80",
      afterImg: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=80",
      tags: ["#코리안숏헤어", "#연남댕냥쉼터", "#무릎냥이"],
      likes: 982,
      liked: false,
      author: "초코집사",
      date: "2026.09.14"
    },
    {
      id: 3,
      petName: "뭉치",
      title: "피부병 완치! 털 미남 등극 🐶",
      desc: "안락사 위기에서 구조되었던 뭉치, 병원 치료와 따뜻한 보살핌 덕에 풍성한 황금빛 털을 되찾고 도그파크의 인기 스타가 되었어요.",
      beforeImg: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=80",
      afterImg: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=80",
      tags: ["#리트리버믹스", "#서교희망동물센터", "#완치성공"],
      likes: 2105,
      liked: false,
      author: "뭉치형아",
      date: "2026.09.10"
    }
  ],
  mbtiQuestions: [
    {
      step: 1,
      question: "주말이나 쉬는 날, 당신의 힐링 방식은?",
      options: [
        { text: "공원이나 자연으로 나가 활기차게 산책하기 🌳", trait: "E" },
        { text: "아늑한 방에서 음악 듣고 OTT 보며 뒹굴뒹굴 ☕", trait: "I" }
      ]
    },
    {
      step: 2,
      question: "반려동물과 교감할 때 더 선호하는 스타일은?",
      options: [
        { text: "꼬리 흔들며 온몸으로 사랑을 표현하는 적극적인 교감 💛", trait: "A" },
        { text: "곁에 조용히 머물며 은근하게 체온을 나누는 편안한 교감 🌿", trait: "C" }
      ]
    },
    {
      step: 3,
      question: "현재 주거 환경 및 하루 집을 비우는 시간은?",
      options: [
        { text: "재택근무/가족이 늘 함께 있어 케어할 시간이 많아요 🏠", trait: "H" },
        { text: "출퇴근 일정이 있어 독립적인 성향이 잘 맞아요 🏢", trait: "W" }
      ]
    },
    {
      step: 4,
      question: "어떤 매력에 더 마음이 끌리나요?",
      options: [
        { text: "눈빛만 봐도 씩 웃음 짓게 하는 충성스럽고 든든한 댕댕이 🐶", trait: "D" },
        { text: "새침하지만 한번 마음 열면 무한 꾹꾹이 해주는 냥이 🐱", trait: "K" }
      ]
    }
  ],
  mbtiResults: {
    "E-A-H-D": {
      type: "햇살 같은 활력왕 믹스견",
      targetPet: "복순이 (마포 사랑보호소)",
      badge: "찰떡 매칭 99%",
      desc: "당신의 풍부한 에너지와 따뜻한 시간을 온전히 나눌 수 있는 복순이가 운명의 짝꿍입니다! 매일 함께 산책하며 세상에서 가장 행복한 견생을 선물해 줄 수 있어요.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop&q=80",
      hashTags: ["#활력왕", "#산책메이트", "#진도믹스", "#미소천사"]
    },
    "I-C-W-K": {
      type: "조용하고 다정한 집순이 냥이",
      targetPet: "초코 (연남 댕냥쉼터)",
      badge: "찰떡 매칭 98%",
      desc: "조용하고 아늑한 휴식을 사랑하는 당신에게 초코는 최고의 단짝이에요. 독립적이면서도 퇴근 후 무릎 위에서 들려주는 골골송이 하루의 피로를 싹 씻어줄 거예요.",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=80",
      hashTags: ["#무릎냥", "#차분한성격", "#골골송장인", "#코숏"]
    },
    "DEFAULT_DOG": {
      type: "충직하고 사랑스러운 든든 댕댕이",
      targetPet: "뭉치 (서교 희망동물센터)",
      badge: "찰떡 매칭 96%",
      desc: "보호자만 바라보는 해바라기 뭉치가 당신을 기다리고 있습니다. 따뜻한 사랑으로 서로의 든든한 가족이 되어보세요.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=80",
      hashTags: ["#교감왕", "#듬직한강아지", "#리트리버믹스"]
    },
    "DEFAULT_CAT": {
      type: "은근한 애정표현의 달인 냥이",
      targetPet: "호랑이 (연남 댕냥쉼터)",
      badge: "찰떡 매칭 95%",
      desc: "겉은 도도하지만 알면 알수록 애교 만점인 치즈냥이 호랑이와 마음을 나눠보세요. 곁을 지키는 묵묵한 따스함을 느낄 수 있습니다.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=80",
      hashTags: ["#치즈태비", "#힐링요정", "#다정한동반자"]
    }
  }
};

// Application State
const appState = {
  shelters: [],
  stories: [],
  mbtiQuestions: [],
  mbtiResults: {},
  activeFilter: '전체',
  currentQuizStep: 0,
  quizAnswers: [],
  map: null,
  markersLayer: null,
  myVolunteers: []
};

// Toast notification
function showToast(text, icon = '🐾') {
  const toast = document.getElementById('appToast');
  if (!toast) return;
  toast.innerHTML = `<span>${icon}</span> <span>${text}</span>`;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  await loadInitialData();
  initLeafletMap();
  renderFilterChips();
  renderStoriesFeed();
  initSubPages();
});

// Load Data from API or Fallback
async function loadInitialData() {
  try {
    const resShelters = await fetch('/api/shelters');
    if (resShelters.ok) {
      const data = await resShelters.json();
      appState.shelters = data.shelters || [];
    } else {
      throw new Error('Fallback to local data');
    }

    const resStories = await fetch('/api/stories');
    if (resStories.ok) {
      const data = await resStories.json();
      appState.stories = data.stories || [];
    }

    const resMbti = await fetch('/api/mbti');
    if (resMbti.ok) {
      const data = await resMbti.json();
      appState.mbtiQuestions = data.questions || [];
      appState.mbtiResults = data.results || {};
    }
  } catch (err) {
    console.log('[Info] Using offline seed data:', err.message);
    appState.shelters = SEED_DATA.shelters;
    appState.stories = SEED_DATA.stories;
    appState.mbtiQuestions = SEED_DATA.mbtiQuestions;
    appState.mbtiResults = SEED_DATA.mbtiResults;
  }
}

// Leaflet Map Init
function initLeafletMap() {
  const mapElement = document.getElementById('leafletMap');
  if (!mapElement) return;

  // Seoul Mapo-gu center
  appState.map = L.map('leafletMap', {
    zoomControl: false,
    attributionControl: false
  }).setView([37.5583, 126.9200], 13);

  // Clean pastel map tiles (CartoDB Positron / OSM style)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    subdomains: 'abcd'
  }).addTo(appState.map);

  appState.markersLayer = L.layerGroup().addTo(appState.map);
  renderMapMarkers();
}

// Render Map Markers based on active filter
function renderMapMarkers() {
  if (!appState.map || !appState.markersLayer) return;
  appState.markersLayer.clearLayers();

  const filtered = appState.activeFilter === '전체'
    ? appState.shelters
    : appState.shelters.filter(s => s.categories.includes(appState.activeFilter));

  filtered.forEach(shelter => {
    const isOrange = shelter.color === 'orange';
    const pinClass = isOrange ? 'orange' : 'green';
    const iconColor = isOrange ? '#FF7A45' : '#4E9F76';

    const customIcon = L.divIcon({
      className: 'custom-leaflet-pin',
      html: `
        <div class="custom-paw-marker">
          <div class="paw-pin ${pinClass}">
            <svg viewBox="0 0 24 24">
              <path d="M12 14c-1.66 0-3 1.34-3 3 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm-5.5-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM9 7.5c-.83 0-1.5-.67-1.5-1.5S8.17 4.5 9 4.5s1.5.67 1.5 1.5S9.83 7.5 9 7.5zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </div>
          <div class="paw-marker-label">${shelter.name}</div>
        </div>
      `,
      iconSize: [80, 56],
      iconAnchor: [40, 52]
    });

    const marker = L.marker([shelter.lat, shelter.lng], { icon: customIcon });

    marker.bindPopup(`
      <div style="font-family: Pretendard, sans-serif; padding: 4px; min-width: 170px;">
        <strong style="font-size: 14px; color: #2D2A26;">${shelter.name}</strong>
        <div style="font-size: 11.5px; color: ${iconColor}; font-weight: 700; margin: 4px 0;">
          🚨 ${shelter.urgentNeed}
        </div>
        <div style="font-size: 11px; color: #7A756D; margin-bottom: 8px;">
          📍 ${shelter.address} (${shelter.distance})
        </div>
        <button onclick="openVolunteerModal('${shelter.name}', '${shelter.urgentCategory}')" 
          style="width: 100%; background: #FF7A45; color: #FFF; border: none; padding: 7px; border-radius: 20px; font-size: 12px; font-weight: 700; cursor: pointer;">
          봉사 신청하기
        </button>
      </div>
    `);

    appState.markersLayer.addLayer(marker);
  });
}

// Filter Chips
function renderFilterChips() {
  const container = document.getElementById('filterChipsWrap');
  if (!container) return;

  const chips = [
    { label: '전체보기', tag: '전체' },
    { label: '#주말산책봉사 🦮', tag: '#주말산책봉사' },
    { label: '#물품후원필요 📦', tag: '#물품후원필요' },
    { label: '#견사청소 🧹', tag: '#견사청소' },
    { label: '#이동봉사 🚗', tag: '#이동봉사' },
    { label: '#임시보호 🏡', tag: '#임시보호' }
  ];

  container.innerHTML = chips.map(chip => `
    <button class="filter-chip ${appState.activeFilter === chip.tag ? 'active' : ''}" 
      onclick="selectFilter('${chip.tag}')">
      ${chip.label}
    </button>
  `).join('');
}

function selectFilter(tag) {
  appState.activeFilter = tag;
  renderFilterChips();
  renderMapMarkers();
  showToast(`'${tag}' 필터가 적용되었습니다`, '🔍');
}

// Render Stories Feed
function renderStoriesFeed() {
  const container = document.getElementById('storiesFeed');
  if (!container) return;

  container.innerHTML = appState.stories.map(story => `
    <div class="story-card-item" id="story-card-${story.id}">
      <div class="split-img-box">
        <div class="split-half">
          <img src="${story.beforeImg}" alt="${story.petName} 보호소 시절" loading="lazy" />
          <div class="tag-label before">Before</div>
        </div>
        <div class="split-line"></div>
        <div class="vs-badge">VS</div>
        <div class="split-half">
          <img src="${story.afterImg}" alt="${story.petName} 입양 후" loading="lazy" />
          <div class="tag-label after">After 💛</div>
        </div>
      </div>
      <div class="story-content">
        <h3 class="story-title">
          <span class="pet-name">${story.petName}</span> : ${story.title}
        </h3>
        <p class="story-text">${story.desc}</p>
        <div class="story-footer">
          <div class="story-tags">
            ${story.tags.map(t => `<span class="story-tag-pill">${t}</span>`).join('')}
          </div>
          <button class="btn-like ${story.liked ? 'liked' : ''}" onclick="toggleStoryLike(${story.id})">
            <svg viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span class="like-count">${story.likes.toLocaleString()}</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Like toggle action
async function toggleStoryLike(storyId) {
  const story = appState.stories.find(s => s.id === storyId);
  if (!story) return;

  story.liked = !story.liked;
  story.likes += story.liked ? 1 : -1;
  renderStoriesFeed();

  if (story.liked) {
    showToast('따뜻한 응원 하트를 보냈어요! ❤️', '💖');
  }

  try {
    await fetch('/api/stories/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString({ storyId })
    });
  } catch (e) {
    // Offline mode graceful continue
  }
}

function jsonString(obj) {
  return JSON.stringify(obj);
}

// Real-time Shelters Status Bottom Sheet Modal
function openShelterStatusModal() {
  const modal = document.getElementById('shelterStatusModal');
  const list = document.getElementById('shelterStatusList');
  if (!modal || !list) return;

  list.innerHTML = appState.shelters.map(s => `
    <div style="background: var(--bg-cream); padding: 14px 16px; border-radius: var(--radius-md); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <strong style="font-size: 14.5px; color: var(--text-main);">${s.name}</strong>
          <span style="font-size: 11px; background: #FFF; padding: 2px 7px; border-radius: 10px; border: 1px solid var(--border-soft); font-weight: 700;">
            동물 ${s.animalCount}마리
          </span>
        </div>
        <div style="font-size: 12.5px; color: ${s.color === 'orange' ? 'var(--primary-orange)' : 'var(--accent-green)'}; font-weight: 700; margin-top: 3px;">
          ${s.urgentNeed}
        </div>
        <div style="font-size: 11px; color: var(--text-sub); margin-top: 2px;">
          📍 ${s.address} (${s.distance})
        </div>
      </div>
      <button onclick="openVolunteerModal('${s.name}', '${s.urgentCategory}')" 
        style="background: var(--primary-orange); color: #FFF; border: none; padding: 8px 14px; border-radius: var(--radius-full); font-size: 12px; font-weight: 700; cursor: pointer; white-space: nowrap;">
        신청하기
      </button>
    </div>
  `).join('');

  modal.classList.add('open');
}

function closeShelterStatusModal() {
  const modal = document.getElementById('shelterStatusModal');
  if (modal) modal.classList.remove('open');
}

// Volunteer Application Modal
function openVolunteerModal(shelterName, category) {
  closeShelterStatusModal();
  const modal = document.getElementById('volunteerApplyModal');
  if (!modal) return;

  document.getElementById('volShelterName').value = shelterName || '마포 사랑보호소';
  if (category) {
    const select = document.getElementById('volCategory');
    for (let opt of select.options) {
      if (opt.value.includes(category) || category.includes(opt.value)) {
        select.value = opt.value;
        break;
      }
    }
  }
  modal.classList.add('open');
}

function closeVolunteerModal() {
  const modal = document.getElementById('volunteerApplyModal');
  if (modal) modal.classList.remove('open');
}

async function submitVolunteerForm(e) {
  e.preventDefault();
  const shelterName = document.getElementById('volShelterName').value;
  const applicant = document.getElementById('volApplicant').value;
  const phone = document.getElementById('volPhone').value;
  const category = document.getElementById('volCategory').value;
  const date = document.getElementById('volDate').value;
  const message = document.getElementById('volMessage').value;

  const appData = { shelterName, applicant, phone, category, date, message };
  appState.myVolunteers.push(appData);

  try {
    await fetch('/api/volunteers/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString(appData)
    });
  } catch (err) {}

  closeVolunteerModal();
  showToast(`[${shelterName}] ${category} 봉사 신청이 완료되었습니다! 👏`, '🎉');
}

// MBTI Matching Test Quiz Modal
function startMbtiQuizModal() {
  appState.currentQuizStep = 0;
  appState.quizAnswers = [];
  const modal = document.getElementById('mbtiQuizModal');
  if (!modal) return;
  modal.classList.add('open');
  renderQuizStep();
}

function closeMbtiQuizModal() {
  const modal = document.getElementById('mbtiQuizModal');
  if (modal) modal.classList.remove('open');
}

function renderQuizStep() {
  const questions = appState.mbtiQuestions.length > 0 ? appState.mbtiQuestions : SEED_DATA.mbtiQuestions;
  const total = questions.length;
  const curIdx = appState.currentQuizStep;

  const container = document.getElementById('quizStepContainer');
  const progressFill = document.getElementById('quizProgressFill');

  if (curIdx >= total) {
    // Show Result
    renderQuizResult();
    return;
  }

  const q = questions[curIdx];
  const percent = ((curIdx + 1) / total) * 100;
  progressFill.style.width = `${percent}%`;

  container.innerHTML = `
    <div style="font-size: 12px; font-weight: 800; color: var(--accent-green); margin-bottom: 6px;">
      QUESTION ${curIdx + 1} / ${total}
    </div>
    <div class="quiz-question-box">${q.question}</div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      ${q.options.map(opt => `
        <button class="quiz-option-btn" onclick="selectQuizOption('${opt.trait}')">
          ${opt.text}
        </button>
      `).join('')}
    </div>
  `;
}

function selectQuizOption(trait) {
  appState.quizAnswers.push(trait);
  appState.currentQuizStep++;
  renderQuizStep();
}

function renderQuizResult() {
  const progressFill = document.getElementById('quizProgressFill');
  progressFill.style.width = `100%`;

  const key = appState.quizAnswers.join('-');
  const results = Object.keys(appState.mbtiResults).length > 0 ? appState.mbtiResults : SEED_DATA.mbtiResults;
  let res = results[key];

  if (!res) {
    if (appState.quizAnswers.includes('D')) {
      res = results['DEFAULT_DOG'] || results['E-A-H-D'];
    } else {
      res = results['DEFAULT_CAT'] || results['I-C-W-K'];
    }
  }

  const container = document.getElementById('quizStepContainer');
  container.innerHTML = `
    <div style="text-align: center; padding: 10px 0;">
      <div style="display: inline-block; background: var(--accent-green-light); color: var(--accent-green); font-size: 12px; font-weight: 800; padding: 5px 14px; border-radius: 20px; margin-bottom: 8px;">
        ${res.badge}
      </div>
      <h3 style="font-size: 20px; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">
        ${res.type}
      </h3>
      <div style="font-size: 14px; font-weight: 700; color: var(--primary-orange); margin-bottom: 14px;">
        운명의 댕냥이 : <strong>${res.targetPet}</strong>
      </div>
      
      <div style="width: 100%; height: 180px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 14px; box-shadow: var(--shadow-sm);">
        <img src="${res.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${res.targetPet}" />
      </div>

      <p style="font-size: 13px; color: var(--text-sub); line-height: 1.5; margin-bottom: 14px; text-align: left; background: var(--bg-cream); padding: 12px 14px; border-radius: 12px;">
        ${res.desc}
      </p>

      <div style="display: flex; justify-content: center; gap: 6px; margin-bottom: 16px;">
        ${res.hashTags.map(t => `<span style="font-size: 11px; background: var(--bg-cream-soft); padding: 4px 8px; border-radius: 6px; font-weight: 600;">${t}</span>`).join('')}
      </div>

      <button class="btn-primary-full" onclick="showToast('[${res.targetPet}] 입양 상담 신청이 접수되었습니다! 담당 보호소에서 곧 연락드립니다 💌', '🐾'); closeMbtiQuizModal();">
        ${res.targetPet} 입양 상담 신청하기 💌
      </button>
      <button onclick="startMbtiQuizModal()" style="margin-top: 8px; background: none; border: none; color: var(--text-sub); font-size: 13px; font-weight: 600; cursor: pointer; text-decoration: underline;">
        테스트 다시 하기
      </button>
    </div>
  `;
}

// Tab Switching
function switchTab(tabKey) {
  // Update nav UI
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const activeNav = document.getElementById(`nav-btn-${tabKey}`);
  if (activeNav) activeNav.classList.add('active');

  // Switch views
  const mainScroll = document.getElementById('mainHomeView');
  const subViews = document.querySelectorAll('.sub-page-view');
  subViews.forEach(v => v.classList.remove('active'));

  if (tabKey === 'home') {
    mainScroll.style.display = 'block';
  } else {
    mainScroll.style.display = 'none';
    const targetSub = document.getElementById(`view-${tabKey}`);
    if (targetSub) {
      targetSub.classList.add('active');
      if (tabKey === 'map') {
        renderFullMapList();
      } else if (tabKey === 'gallery') {
        renderFullGallery();
      } else if (tabKey === 'my') {
        renderMyPageView();
      }
    }
  }

  showToast(`[${getTabName(tabKey)}] 탭으로 전환`, '📱');
}

function getTabName(key) {
  const map = { home: '홈', map: '지도/봉사', mbti: '매칭테스트', gallery: '역전갤러리', my: '마이' };
  return map[key] || key;
}

// Subpage renderers
function renderFullMapList() {
  const container = document.getElementById('fullShelterList');
  if (!container) return;
  container.innerHTML = appState.shelters.map(s => `
    <div style="background: #FFF; border: 1px solid var(--border-soft); border-radius: var(--radius-md); padding: 14px; margin-bottom: 12px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
        <div>
          <strong style="font-size: 15px; color: var(--text-main);">${s.name}</strong>
          <div style="font-size: 12px; color: var(--text-sub); margin-top: 2px;">📍 ${s.address}</div>
        </div>
        <span style="font-size: 12px; font-weight: 700; color: var(--accent-green); background: var(--accent-green-light); padding: 3px 8px; border-radius: 6px;">
          ${s.distance}
        </span>
      </div>
      <div style="font-size: 12.5px; color: ${s.color === 'orange' ? 'var(--primary-orange)' : 'var(--accent-green)'}; font-weight: 700; margin-bottom: 10px;">
        📢 ${s.urgentNeed}
      </div>
      <div style="display: flex; gap: 8px;">
        <button onclick="openVolunteerModal('${s.name}', '${s.urgentCategory}')" style="flex: 1; background: var(--primary-orange); color: #FFF; border: none; padding: 9px; border-radius: var(--radius-full); font-size: 13px; font-weight: 700; cursor: pointer;">
          봉사 참여하기
        </button>
        <a href="tel:${s.phone}" style="padding: 9px 14px; background: var(--bg-cream); border: 1px solid var(--border-soft); border-radius: var(--radius-full); font-size: 13px; font-weight: 700; color: var(--text-main); text-decoration: none; display: flex; align-items: center;">
          전화문의
        </a>
      </div>
    </div>
  `).join('');
}

function renderFullGallery() {
  const container = document.getElementById('fullGalleryList');
  if (!container) return;
  container.innerHTML = appState.stories.map(s => `
    <div style="background: #FFF; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-soft); margin-bottom: 16px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; height: 160px; position: relative;">
        <div style="flex: 1; position: relative;">
          <img src="${s.beforeImg}" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="tag-label before">Before</div>
        </div>
        <div class="split-line"></div>
        <div class="vs-badge">VS</div>
        <div style="flex: 1; position: relative;">
          <img src="${s.afterImg}" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="tag-label after">After 💛</div>
        </div>
      </div>
      <div style="padding: 14px;">
        <strong style="font-size: 15px; color: var(--text-main);">${s.petName} : ${s.title}</strong>
        <p style="font-size: 13px; color: var(--text-sub); margin: 6px 0 10px; line-height: 1.4;">${s.desc}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--bg-cream-soft); padding-top: 8px;">
          <span style="font-size: 11px; color: var(--text-muted);">${s.date} · 작성자 ${s.author}</span>
          <span style="font-size: 12px; font-weight: 700; color: #FF4757;">❤️ ${s.likes.toLocaleString()}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderMyPageView() {
  const list = document.getElementById('myVolunteerHistory');
  if (!list) return;

  if (appState.myVolunteers.length === 0) {
    list.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 13px; padding: 20px;">아직 신청한 봉사활동 내역이 없습니다.</div>`;
  } else {
    list.innerHTML = appState.myVolunteers.map(v => `
      <div style="background: #FFF; border: 1px solid var(--border-soft); padding: 12px 14px; border-radius: var(--radius-md); margin-bottom: 8px;">
        <div style="display: flex; justify-content: space-between;">
          <strong style="font-size: 14px;">${v.shelterName}</strong>
          <span style="font-size: 11px; color: var(--accent-green); font-weight: 700;">접수완료</span>
        </div>
        <div style="font-size: 12px; color: var(--text-sub); margin-top: 4px;">활동분야: ${v.category} | 희망일: ${v.date}</div>
      </div>
    `).join('');
  }
}

// Device View Switcher (Desktop phone frame toggle)
function switchDeviceView(isFull) {
  const frame = document.getElementById('phoneFrame');
  const btnPhone = document.getElementById('btnPhone');
  const btnFull = document.getElementById('btnFull');

  if (isFull) {
    frame.classList.add('full-mode');
    btnFull.classList.add('active');
    btnPhone.classList.remove('active');
  } else {
    frame.classList.remove('full-mode');
    btnPhone.classList.add('active');
    btnFull.classList.remove('active');
  }

  // Leaflet map resize trigger
  if (appState.map) {
    setTimeout(() => appState.map.invalidateSize(), 350);
  }
}

function initSubPages() {
  // Ready
}
