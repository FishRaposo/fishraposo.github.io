/* Vinícius Raposo — systems that work while you don't
 * Main JavaScript file
 */

(function () {
  'use strict';

  // Detail pages live one level deep (projects/<repo>.html); prefix root links
  // and icon sprite references accordingly so they resolve from any depth.
  var rootPrefix = /\/projects\/[^/]+$/.test(window.location.pathname) ? '../' : '';

  // Shared HTML templates
  var headerHTML = [
    '<header class="header">',
    '  <div class="header-content">',
    '    <a href="' + rootPrefix + 'index.html" class="brand">',
    '      <p class="brand-name">Vinícius Raposo</p>',
    '      <p class="brand-title">AI reliability, systems engineering, and serious AI-assisted development.</p>',
    '      <p class="brand-tagline">I build the systems that work while you don&rsquo;t.</p>',
    '    </a>',
    '    <button class="btn-hamburger" aria-label="Toggle navigation" aria-expanded="false">',
    '      <span class="hamburger-line"></span>',
    '      <span class="hamburger-line"></span>',
    '      <span class="hamburger-line"></span>',
    '    </button>',
    '    <nav class="nav">',
    '      <a href="' + rootPrefix + 'index.html" class="nav-link">Home</a>',
    '      <a href="' + rootPrefix + 'projects.html" class="nav-link">Projects</a>',
    '      <a href="https://github.com/FishRaposo" class="nav-link" target="_blank" rel="noopener">',
    '        GitHub',
    '        <svg class="nav-icon"><use href="' + rootPrefix + 'icons.svg#icon-github"></use></svg>',
    '      </a>',
    '      <a href="https://x.com/FishRaposo" class="nav-link" target="_blank" rel="noopener">',
    '        <svg class="nav-icon"><use href="' + rootPrefix + 'icons.svg#icon-x"></use></svg>',
    '      </a>',
    '    </nav>',
    '  </div>',
    '</header>'
  ].join('');

  var ctaHTML = [
    '<section class="cta-section">',
    '  <div class="cta-inner">',
    '    <div class="cta-bg"></div>',
    '    <div class="cta-content">',
    '      <div class="cta-left">',
    '        <div class="cta-icon">',
    '          <svg><use href="' + rootPrefix + 'icons.svg#icon-lightning"></use></svg>',
    '        </div>',
    '        <div>',
    '          <h2 class="cta-title">{{title}}</h2>',
    '          <p class="cta-subtitle">{{subtitle}}</p>',
    '        </div>',
    '      </div>',
    '      <a href="{{url}}" class="btn-primary" target="_blank" rel="noopener">',
    '        {{button}}',
    '        <svg width="20" height="20"><use href="' + rootPrefix + 'icons.svg#icon-external"></use></svg>',
    '      </a>',
    '    </div>',
    '  </div>',
    '</section>'
  ].join('');

  var footerHTML = [
    '<footer class="footer">',
    '  <div class="footer-content">',
    '    <div>',
    '      <p class="footer-brand-name">Vinícius Raposo</p>',
    '      <p class="footer-brand-title">I build the systems that work while you don&rsquo;t.</p>',
    '      <p class="footer-brand-tagline">AI reliability, systems engineering, and serious AI-assisted development.</p>',
    '    </div>',
    '    <nav class="footer-nav">',
    '      <a href="' + rootPrefix + 'index.html">Home</a>',
    '      <a href="' + rootPrefix + 'projects.html">Projects</a>',
    '      <a href="https://github.com/FishRaposo" target="_blank" rel="noopener">GitHub</a>',
    '      <a href="https://x.com/FishRaposo" target="_blank" rel="noopener">X</a>',
    '    </nav>',
    '  </div>',
    '  <p class="footer-copyright">&copy; 2026 Vinícius Raposo. All rights reserved.</p>',
    '</footer>'
  ].join('');

  function injectSharedBlocks() {
    var container = document.querySelector('.container');
    var main = document.querySelector('main');
    if (!container || !main) return;

    // Remove any hardcoded header so the injected one (with hamburger) takes over
    var existingHeader = document.querySelector('.header');
    if (existingHeader) existingHeader.remove();

    // Inject header before <main>
    var headerWrap = document.createElement('div');
    headerWrap.innerHTML = headerHTML;
    container.insertBefore(headerWrap.firstElementChild, main);

    // Init hamburger toggle
    var hamburger = document.querySelector('.btn-hamburger');
    var nav = document.querySelector('.nav');
    if (hamburger && nav) {
      hamburger.addEventListener('click', function () {
        var expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('nav--open');
        hamburger.classList.toggle('btn-hamburger--active');
      });

      // Close nav on Escape, return focus to hamburger
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
          nav.classList.remove('nav--open');
          hamburger.classList.remove('btn-hamburger--active');
          hamburger.setAttribute('aria-expanded', 'false');
          hamburger.focus();
        }
      });

      // Close nav when focus leaves the last nav link
      var navLinks = nav.querySelectorAll('.nav-link');
      if (navLinks.length > 0) {
        var lastLink = navLinks[navLinks.length - 1];
        lastLink.addEventListener('blur', function (e) {
          // Small timeout to check if focus moved outside the nav
          setTimeout(function () {
            if (nav.classList.contains('nav--open') && !nav.contains(document.activeElement)) {
              nav.classList.remove('nav--open');
              hamburger.classList.remove('btn-hamburger--active');
              hamburger.setAttribute('aria-expanded', 'false');
            }
          }, 50);
        });
      }
    }

    // Build CTA from data attributes on <main>
    var ctaTitle = main.getAttribute('data-cta-title') || '';
    var ctaSubtitle = main.getAttribute('data-cta-subtitle') || '';
    var ctaButton = main.getAttribute('data-cta-button') || '';
    var ctaUrl = main.getAttribute('data-cta-url') || 'https://github.com/FishRaposo';

    var ctaWrap = document.createElement('div');
    ctaWrap.innerHTML = ctaHTML
      .replace('{{title}}', ctaTitle)
      .replace('{{subtitle}}', ctaSubtitle)
      .replace('{{button}}', ctaButton)
      .replace('{{url}}', ctaUrl);
    container.insertBefore(ctaWrap.firstElementChild, null);

    // Inject footer at end
    var footerWrap = document.createElement('div');
    footerWrap.innerHTML = footerHTML;
    container.appendChild(footerWrap.firstElementChild);
  }

  function setActiveNav() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var href = link.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  }

  // Tag filter for projects.html
  function initTagFilter() {
    var filterBar = document.getElementById('filter-bar');
    var grid = document.getElementById('projects-grid');
    if (!filterBar || !grid) return;

    var cards = grid.querySelectorAll('.project-card');
    var totalCards = cards.length;

    // Initialize counter on load
    var counterEl = document.createElement('p');
    counterEl.className = 'filter-counter filter-counter--visible';
    counterEl.textContent = 'Showing ' + totalCards + ' of ' + totalCards + ' projects';
    filterBar.parentNode.insertBefore(counterEl, grid);

    function applyFilter(filter) {
      var visible = 0;
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var tags = (card.dataset.tags || '').split(' ');
        var match = filter === 'all' || tags.indexOf(filter) !== -1;
        if (match) {
          card.classList.remove('card-hiding');
          card.style.display = '';
          card.style.opacity = '';
          visible++;
        } else {
          card.classList.add('card-hiding');
          // Safety: ensure display:none even if transitionend never fires
          clearTimeout(card._hideTimer);
          card._hideTimer = setTimeout(function(c) {
            if (c.classList.contains('card-hiding')) {
              c.style.display = 'none';
            }
          }, 200, card);
        }
      }

      counterEl.textContent = 'Showing ' + visible + ' of ' + totalCards + ' projects';
      if (filter === 'all') {
        counterEl.classList.remove('filter-counter--visible');
      } else {
        counterEl.classList.add('filter-counter--visible');
      }

      var emptyState = grid.querySelector('.projects-empty');
      if (visible === 0) {
        if (!emptyState) {
          emptyState = document.createElement('div');
          emptyState.className = 'projects-empty';
          emptyState.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p class="projects-empty-title">No projects match this filter</p><p class="projects-empty-sub">Try a different tag or view all projects.</p>';
          grid.appendChild(emptyState);
        }
        emptyState.style.display = '';
      } else if (emptyState) {
        emptyState.style.display = 'none';
      }
    }

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      var filter = btn.dataset.filter;

      var buttons = filterBar.querySelectorAll('.filter-btn');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
      }
      btn.classList.add('active');

      applyFilter(filter);
    });
  }

  // Initialize
  injectSharedBlocks();
  setActiveNav();
  initTagFilter();
  initScrollReveal();

  // Scroll-reveal for sections below the hero
  function initScrollReveal() {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    var targets = document.querySelectorAll('.section, .cta-section, .footer');
    targets.forEach(function (el) {
      observer.observe(el);
    });

    // Card-level stagger
    var cardObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add('reveal-up');
          }, i * 60);
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    var cards = document.querySelectorAll('.project-card, .product-card');
    cards.forEach(function (el) {
      cardObserver.observe(el);
    });
  }
})();
