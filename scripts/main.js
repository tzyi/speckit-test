// 精選集數資料
const episodes = [
  {
    id: 'ep1',
    title: '科技新知大解密',
    description: '深入剖析最新科技趨勢與幕後故事。',
    coverImage: 'assets/images/ep1.jpg',
    detailPage: 'episode-1.html'
  },
  {
    id: 'ep2',
    title: '創業者的真心話',
    description: '邀請創業家分享心路歷程與失敗經驗。',
    coverImage: 'assets/images/ep2.jpg',
    detailPage: 'episode-2.html'
  },
  {
    id: 'ep3',
    title: '生活美學研究所',
    description: '探索生活美學、設計與品味的日常靈感。',
    coverImage: 'assets/images/ep3.jpg',
    detailPage: 'episode-3.html'
  }
];

function renderEpisodes() {
  const container = document.getElementById('episodes');
  if (!container) return;
  container.innerHTML = '';
  episodes.forEach(ep => {
    const card = document.createElement('div');
    card.className = 'episode-card';
    card.innerHTML = `
      <img src="${ep.coverImage}" alt="${ep.title}" onerror="this.src='assets/images/default.jpg'">
      <h2>${ep.title}</h2>
      <p>${ep.description}</p>
      <a href="${ep.detailPage}">查看詳情</a>
    `;
    card.querySelector('a').addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = ep.detailPage;
    });
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderEpisodes);
