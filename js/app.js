// ── SHARED NAV & FOOTER RENDERER ──────────────────────────────────────────

function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'blog.html',  label: 'Blog' },
    { href: 'about.html', label: 'About' },
  ];
  return `
  <nav>
    <a href="index.html" class="nav-logo">Ava <span>Soleil</span></a>
    <ul class="nav-links">
      ${pages.map(p => `<li><a href="${p.href}" ${p.label === activePage ? 'class="active"' : ''}>${p.label}</a></li>`).join('')}
    </ul>
    <a href="#newsletter" class="nav-cta">Join the Community</a>
  </nav>`;
}

function renderTicker() {
  const items = [
    'Biohacking for Women','Morning Rituals That Work','Longevity Science Made Simple',
    'Supplement Reviews','Cold Plunge & Recovery','Hormonal Health',
    'Gut Microbiome Deep Dives','Sleep Optimization'
  ];
  const doubled = [...items, ...items];
  return `<div class="ticker"><div class="ticker-track">${doubled.map(i => `<span class="ticker-item">${i}</span>`).join('')}</div></div>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="footer-top">
      <div>
        <a href="index.html" class="footer-logo">Ava <span>Soleil</span></a>
        <p class="footer-desc">Science-backed wellness, biohacking, and longevity insights for women who want to thrive at every age.</p>
        <div class="footer-social">
          <a href="#" class="social-icon">📸</a>
          <a href="#" class="social-icon">▶️</a>
          <a href="#" class="social-icon">✉️</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Explore</div>
        <ul class="footer-links">
          <li><a href="blog.html">All Articles</a></li>
          <li><a href="blog.html?cat=Biohacking">Biohacking</a></li>
          <li><a href="blog.html?cat=Sleep">Sleep</a></li>
          <li><a href="blog.html?cat=Nutrition">Nutrition</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Ava</div>
        <ul class="footer-links">
          <li><a href="about.html">About</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
          <li><a href="about.html#work-with-me">Work With Me</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Connect</div>
        <ul class="footer-links">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Pinterest</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Ava Soleil. All rights reserved.</span>
      <p class="footer-disclaimer">Ava Soleil is an AI wellness persona. Content is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider.</p>
    </div>
  </footer>`;
}

function renderEmailSection() {
  return `
  <section class="email-section" id="newsletter">
    <div class="email-inner">
      <div class="email-eyebrow">The Sunday Ritual</div>
      <h2 class="email-title">Wellness that lands<br>in your <em>inbox</em></h2>
      <p class="email-sub">Every Sunday — one science-backed ritual, one supplement deep-dive, and one thing I'm obsessing over that week. No fluff. Just what works.</p>
      <div class="email-form">
        <input type="email" class="email-input" placeholder="your@email.com">
        <button class="email-btn" onclick="handleSubscribe(this)">Subscribe</button>
      </div>
      <p class="email-note">Join thousands of women already reading. Unsubscribe anytime.</p>
    </div>
  </section>`;
}

function handleSubscribe(btn) {
  const input = btn.parentElement.querySelector('.email-input');
  if (input.value && input.value.includes('@')) {
    btn.textContent = '✓ You\'re in!';
    btn.style.background = '#8C9E89';
    input.value = '';
    input.placeholder = 'Welcome to the community ✨';
  }
}

// ── POST LOADER ────────────────────────────────────────────────────────────

async function loadPosts() {
  const res = await fetch('data/posts.json');
  return res.json();
}

function formatCard(post, featured = false) {
  return `
  <a href="post.html?slug=${post.slug}" class="blog-card ${featured ? 'featured' : ''}">
    <div class="card-img" style="background: ${post.gradient}; ${featured ? 'height:280px' : ''}">
      <span class="card-img-emoji">${post.emoji}</span>
      <span class="card-category">${post.category}</span>
    </div>
    <div class="card-body">
      <div class="card-meta">${post.date} · ${post.readTime}</div>
      <div class="card-title" style="${featured ? 'font-size:26px' : ''}">${post.title}</div>
      <p class="card-excerpt">${post.excerpt}</p>
      <span class="card-link">Read Article →</span>
    </div>
  </a>`;
}
