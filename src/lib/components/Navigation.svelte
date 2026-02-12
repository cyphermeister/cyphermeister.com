<script lang="ts">
  let scrolled = $state(false);

  $effect(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Contact', href: '#contact' }
  ];
</script>

<nav class:scrolled>
  <div class="nav-container">
    <a href="/" class="logo">
      <span class="logo-text">CypherMeister</span>
    </a>
    <ul class="nav-links">
      {#each navItems as item}
        <li><a href={item.href}>{item.label}</a></li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1rem 0;
    transition: all 0.3s ease;
  }

  nav.scrolled {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-bottom: 1px solid var(--glass-border);
    padding: 0.75rem 0;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    text-decoration: none;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    font-size: 0.95rem;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  .nav-links a:hover {
    color: var(--text-primary);
  }

  @media (max-width: 640px) {
    .nav-links {
      gap: 1.5rem;
    }

    .nav-links a {
      font-size: 0.875rem;
    }
  }
</style>
