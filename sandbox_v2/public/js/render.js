async function loadJson(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

function published(items) {
  return (items || []).filter((x) => x.status === 'published');
}

function byDateDesc(a, b) {
  return new Date(b.date) - new Date(a.date);
}

function qs(id) {
  return document.getElementById(id);
}

async function renderNews() {
  const root = qs('list');
  const data = await loadJson('/sandbox_v2/content/news.json');
  const items = published(data.items).sort(byDateDesc);
  if (!items.length) {
    root.innerHTML = '<p class="empty">公開済みニュースはありません。</p>';
    return;
  }
  root.innerHTML = items.map((n) => `
    <article class="card">
      <div class="meta">${n.date}</div>
      <h3>${n.title}</h3>
      <p>${n.body || ''}</p>
      ${n.link ? `<p><a href="${n.link}" target="_blank" rel="noopener">関連リンク</a></p>` : ''}
    </article>
  `).join('');
}

async function renderResources() {
  const root = qs('list');
  const data = await loadJson('/sandbox_v2/content/resources.json');
  const items = published(data.items).sort(byDateDesc);
  if (!items.length) {
    root.innerHTML = '<p class="empty">公開済み資料はありません。</p>';
    return;
  }
  root.innerHTML = items.map((r) => `
    <article class="card">
      <div class="meta">${r.date}</div>
      <h3>${r.title}</h3>
      <p>${r.description || ''}</p>
      ${r.file ? `<p><a href="${r.file}" target="_blank" rel="noopener">添付ファイルを開く</a></p>` : ''}
      ${r.link ? `<p><a href="${r.link}" target="_blank" rel="noopener">関連リンク</a></p>` : ''}
    </article>
  `).join('');
}

async function renderMembers() {
  const root = qs('list');
  const data = await loadJson('/sandbox_v2/content/members.json');
  const items = published(data.items).sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  if (!items.length) {
    root.innerHTML = '<p class="empty">公開済みメンバーはありません。</p>';
    return;
  }
  root.innerHTML = items.map((m) => `
    <article class="card">
      <div class="meta">表示順: ${m.order ?? '-'}</div>
      <h3>${m.name}（${m.role}）</h3>
      ${m.photo ? `<p><img src="${m.photo}" alt="${m.name}" style="max-width:160px;height:auto;"></p>` : ''}
      <p>${m.bio || ''}</p>
      ${m.link ? `<p><a href="${m.link}" target="_blank" rel="noopener">プロフィールリンク</a></p>` : ''}
    </article>
  `).join('');
}

window.sandboxRenderer = { renderNews, renderResources, renderMembers };
