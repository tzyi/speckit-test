
// 精選集數資料
const episodes = [
  {
    id: 'ep1',
    title: '科技新知大解密',
    sub: '單集：Tech Action',
    description: '深入剖析最新科技趨勢與幕後故事。',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    detailPage: 'episode-1.html'
  },
  {
    id: 'ep2',
    title: '創業者的真心話',
    sub: '單集：創業新聲帶',
    description: '邀請創業家分享心路歷程與失敗經驗。',
    coverImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    detailPage: 'episode-2.html'
  },
  {
    id: 'ep3',
    title: '生活美學研究所',
    sub: '單集：生活美學研究所',
    description: '探索生活美學、設計與品味的日常靈感。',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
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
      <img src="${ep.coverImage}" alt="${ep.title}">
      <div class="ep-title">${ep.title}</div>
      <div class="ep-sub">${ep.sub}</div>
      <div class="ep-desc">${ep.description}</div>
      <a href="${ep.detailPage}">查看詳情</a>
    `;
    const img = card.querySelector('img');
    img.addEventListener('error', function() {
      img.src = 'assets/images/default.jpg';
      img.classList.add('broken');
    });
    card.querySelector('a').addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = ep.detailPage;
    });
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderEpisodes);
