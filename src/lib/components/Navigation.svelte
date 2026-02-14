<script lang="ts">
  let scrolled = $state(false);
  let mobileOpen = $state(false);

  $effect(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  $effect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  function closeMobile() {
    mobileOpen = false;
  }

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Contact', href: '#contact' }
  ];
</script>

<nav class:scrolled>
  <div class="nav-inner">
    <a href="/" class="logo">
      <span class="logo-mark">//</span>
      <span class="logo-text">Cyphermeister</span>
    </a>

    <ul class="nav-links">
      {#each navItems as item}
        <li><a href={item.href}>{item.label}</a></li>
      {/each}
    </ul>

    <a href="#contact" class="nav-cta">Start a Project</a>

    <button
      class="hamburger"
      onclick={() => mobileOpen = !mobileOpen}
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
    >
      <span class="hamburger-line" class:open={mobileOpen}></span>
      <span class="hamburger-line" class:open={mobileOpen}></span>
    </button>
  </div>
</nav>

<!-- Mobile overlay -->
<div
  class="overlay"
  class:open={mobileOpen}
  onclick={closeMobile}
  onkeydown={(e) => e.key === 'Escape' && closeMobile()}
  role="button"
  tabindex="-1"
  aria-label="Close menu"
></div>

<!-- Mobile drawer -->
<aside class="drawer" class:open={mobileOpen}>
  <ul class="drawer-nav">
    {#each navItems as item}
      <li><a href={item.href} onclick={closeMobile}>{item.label}</a></li>
    {/each}
  </ul>
  <a href="#contact" class="btn-primary drawer-cta" onclick={closeMobile}>
    Start a Project
  </a>
</aside>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1.25rem 0;
    transition: all 0.3s ease;
  }

  nav.scrolled {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-bottom: 1px solid var(--border);
    padding: 0.75rem 0;
  }

  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 4vw, 2.5rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.15rem;
    flex-shrink: 0;
  }

  .logo-mark {
    font-family: var(--font-mono);
    color: var(--accent);
    font-weight: 700;
    font-size: 1.25rem;
  }

  .logo-text {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: var(--text-sm);
    transition: color 0.2s ease;
    text-decoration: none;
  }

  .nav-links a:hover {
    color: var(--text-primary);
  }

  .nav-cta {
    font-family: var(--font-body);
    font-size: var(--text-xs);
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-accent);
    border-radius: 3px;
    transition: all 0.2s ease;
  }

  .nav-cta:hover {
    background: var(--accent-subtle);
    color: var(--accent-bright);
  }

  /* Hamburger */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    z-index: 250;
  }

  .hamburger-line {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--text-primary);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  .hamburger-line.open:first-child {
    transform: translateY(3.75px) rotate(45deg);
  }

  .hamburger-line.open:last-child {
    transform: translateY(-3.75px) rotate(-45deg);
  }

  /* Overlay */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 150;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  /* Drawer */
  .drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    background: var(--bg-elevated);
    border-left: 1px solid var(--border);
    z-index: 200;
    padding: 6rem 2rem 2rem;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
  }

  .drawer.open {
    transform: translateX(0);
  }

  .drawer-nav {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
  }

  .drawer-nav li {
    border-bottom: 1px solid var(--border);
  }

  .drawer-nav a {
    display: block;
    padding: 1rem 0;
    color: var(--text-secondary);
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .drawer-nav a:hover {
    color: var(--accent);
  }

  .drawer-cta {
    margin-top: auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    .nav-links,
    .nav-cta {
      display: none;
    }

    .hamburger {
      display: flex;
    }
  }
</style>
