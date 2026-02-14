<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';

  // Cipher matrix
  const HEX = '0123456789ABCDEF';
  const CIPHER_COLS = 22;
  const CIPHER_ROWS = 11;
  const TOTAL = CIPHER_COLS * CIPHER_ROWS;

  let cipherCells = $state<string[]>(
    Array.from({ length: TOTAL }, () => HEX[Math.floor(Math.random() * 16)])
  );
  let tick = $state(0);

  const rowIndices = Array.from({ length: CIPHER_ROWS }, (_, i) => i);
  const colIndices = Array.from({ length: CIPHER_COLS }, (_, i) => i);

  $effect(() => {
    const cellInterval = setInterval(() => {
      for (let i = 0; i < 4; i++) {
        const idx = Math.floor(Math.random() * TOTAL);
        cipherCells[idx] = HEX[Math.floor(Math.random() * 16)];
      }
    }, 120);

    const tickInterval = setInterval(() => {
      tick++;
    }, 2000);

    return () => {
      clearInterval(cellInterval);
      clearInterval(tickInterval);
    };
  });

  // Contact form
  let email = $state('');
  let message = $state('');

  function handleSubmit(event: Event) {
    event.preventDefault();
    const subject = 'Inquiry from Website';
    const body = `From: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:contact@cyphermeister.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const services = [
    {
      number: '01',
      title: 'Blockchain & Web3',
      description: 'End-to-end blockchain consulting from protocol design to smart contract development and security auditing.',
      features: ['Smart Contracts', 'DeFi Solutions', 'Security Audits', 'Protocol Design']
    },
    {
      number: '02',
      title: 'Distributed Systems',
      description: 'Design and implementation of fault-tolerant, scalable distributed architectures for mission-critical applications.',
      features: ['Consensus Protocols', 'Microservices', 'High Availability', 'Event Sourcing']
    },
    {
      number: '03',
      title: 'Cryptography',
      description: 'Applied cryptographic solutions for security-critical applications and privacy-preserving systems.',
      features: ['Protocol Design', 'Key Management', 'Zero-Knowledge', 'Encryption Systems']
    }
  ];

  const techCategories = [
    {
      label: 'Languages',
      items: ['Rust', 'TypeScript', 'Solidity', 'Haskell', 'Python', 'Nix']
    },
    {
      label: 'Platforms',
      items: ['Ethereum', 'Solana', 'PostgreSQL']
    },
    {
      label: 'Infrastructure',
      items: ['AWS', 'Kubernetes', 'Docker']
    }
  ];
</script>

<svelte:head>
  <title>Cyphermeister | Blockchain & Distributed Systems Consulting</title>
  <meta name="description" content="Expert consulting in blockchain, Web3, distributed systems, and cryptography. We architect the future of decentralized infrastructure." />
</svelte:head>

<AnimatedBackground />
<Navigation />

<main>
  <!-- Hero -->
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <p class="eyebrow hero-anim hero-anim-1">Blockchain & Distributed Systems Consulting</p>
          <h1 class="hero-anim hero-anim-2">
            Architecting the <span class="accent-text">Future</span> of Decentralized Infrastructure
          </h1>
          <p class="hero-sub hero-anim hero-anim-3">
            We help organizations build secure, scalable, and resilient systems
            at the intersection of distributed computing and cryptography.
          </p>
          <div class="hero-actions hero-anim hero-anim-4">
            <a href="#contact" class="btn-primary">Start a Project</a>
            <a href="#services" class="btn-secondary">Our Services</a>
          </div>
        </div>
        <div class="cipher-matrix" aria-hidden="true">
          {#each rowIndices as r}
            <div class="cipher-row">
              {#each colIndices as c}
                {@const idx = r * CIPHER_COLS + c}
                {@const isHighlight = (idx + tick) % 13 === 0 || (idx + tick * 3) % 23 === 0}
                <span class="cipher-cell" class:highlight={isHighlight}>
                  {cipherCells[idx]}
                </span>
              {/each}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="services" id="services">
    <div class="container">
      <ScrollReveal>
        <div class="section-header">
          <p class="eyebrow">What We Do</p>
          <h2>Specialized Consulting Services</h2>
          <p class="section-sub">
            Deep expertise in building the next generation of decentralized systems
          </p>
        </div>
      </ScrollReveal>
      <div class="services-grid">
        {#each services as service, i}
          <ScrollReveal delay={i * 150}>
            <ServiceCard
              number={service.number}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          </ScrollReveal>
        {/each}
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="about" id="about">
    <div class="container">
      <ScrollReveal>
        <div class="about-layout">
          <div class="about-content">
            <p class="eyebrow">About Cyphermeister</p>
            <h2>Bridging <span class="accent-text">Theory</span> and Practice</h2>
            <p>
              Cyphermeister is a specialized consulting firm at the forefront of distributed systems
              and blockchain technology. We combine deep theoretical knowledge with practical implementation
              experience to deliver solutions that are not just functional, but future-proof.
            </p>
            <p>
              Our team brings expertise from both academic research and production systems,
              ensuring your infrastructure is built on solid foundations while remaining adaptable
              to the rapidly evolving landscape of decentralized technology.
            </p>
          </div>
          <div class="about-values">
            <div class="value-card">
              <span class="value-marker">I</span>
              <div>
                <h4>Research-Driven</h4>
                <p>Academic rigor meets production-grade engineering</p>
              </div>
            </div>
            <div class="value-card">
              <span class="value-marker">II</span>
              <div>
                <h4>Security-First</h4>
                <p>Every system built with adversarial thinking</p>
              </div>
            </div>
            <div class="value-card">
              <span class="value-marker">III</span>
              <div>
                <h4>Future-Proof</h4>
                <p>Architecture that evolves with the ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>

  <!-- Expertise -->
  <section class="expertise" id="expertise">
    <div class="container">
      <ScrollReveal>
        <div class="section-header">
          <p class="eyebrow">Our Stack</p>
          <h2>Technologies & Expertise</h2>
        </div>
      </ScrollReveal>
      <div class="tech-categories">
        {#each techCategories as category, i}
          <ScrollReveal delay={i * 100}>
            <div class="tech-category">
              <h3 class="tech-category-label">{category.label}</h3>
              <ul class="tech-list">
                {#each category.items as tech}
                  <li class="tech-item">{tech}</li>
                {/each}
              </ul>
            </div>
          </ScrollReveal>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <ScrollReveal>
          <div class="contact-info">
            <p class="eyebrow">Get in Touch</p>
            <h2>Let's Build Together</h2>
            <p>
              Have a project in mind? We'd love to hear about it.
              Reach out and let's discuss how we can help bring your vision to life.
            </p>
            <div class="contact-email">
              <span class="mono">contact@cyphermeister.com</span>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <form onsubmit={handleSubmit} class="contact-form">
            <div class="form-group">
              <label for="email">Your Email</label>
              <input
                type="email"
                id="email"
                bind:value={email}
                placeholder="name@example.com"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                bind:value={message}
                rows="5"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn-primary">Send Message</button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="footer-logo">
          <span class="logo-mark">//</span> Cyphermeister
        </span>
        <p>Architecting the future of distributed systems.</p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li>
            <a href="https://github.com/cyphermeister" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:contact@cyphermeister.com">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Cyphermeister LLC. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  /* ═══════════════════════════
     Hero
     ═══════════════════════════ */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 8rem 0 4rem;
    overflow: hidden;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero h1 {
    font-size: clamp(2.5rem, 5vw, var(--text-5xl));
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 1.5rem;
    letter-spacing: -0.03em;
  }

  .hero-sub {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    max-width: 480px;
    margin-bottom: 2.5rem;
    line-height: 1.7;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  /* Hero entrance animation */
  .hero-anim {
    opacity: 0;
    transform: translateY(20px);
    animation: hero-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .hero-anim-1 { animation-delay: 0.1s; }
  .hero-anim-2 { animation-delay: 0.2s; }
  .hero-anim-3 { animation-delay: 0.35s; }
  .hero-anim-4 { animation-delay: 0.5s; }

  @keyframes hero-enter {
    to {
      opacity: 1;
      transform: none;
    }
  }

  /* Cipher matrix */
  .cipher-matrix {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    line-height: 1.8;
    color: var(--text-dim);
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    opacity: 0;
    animation: hero-enter 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    transform: perspective(800px) rotateY(-5deg);
    mask-image: radial-gradient(
      ellipse 85% 75% at 50% 50%,
      black 25%,
      transparent 70%
    );
    -webkit-mask-image: radial-gradient(
      ellipse 85% 75% at 50% 50%,
      black 25%,
      transparent 70%
    );
  }

  @keyframes cipher-enter {
    to {
      opacity: 1;
      transform: perspective(800px) rotateY(-5deg);
    }
  }

  .cipher-row {
    display: flex;
    gap: 0.35rem;
    white-space: nowrap;
  }

  .cipher-cell {
    width: 1.1em;
    text-align: center;
    transition: color 0.4s ease;
  }

  .cipher-cell.highlight {
    color: var(--accent);
    text-shadow: 0 0 10px var(--accent-glow);
  }

  /* ═══════════════════════════
     Services
     ═══════════════════════════ */
  .services {
    padding: 8rem 0;
  }

  .section-header {
    max-width: 560px;
    margin-bottom: 4rem;
  }

  .section-header h2 {
    font-size: clamp(2rem, 4vw, var(--text-4xl));
    margin-bottom: 1rem;
  }

  .section-sub {
    color: var(--text-secondary);
    font-size: var(--text-lg);
    margin: 0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  /* Stagger middle card on desktop */
  @media (min-width: 901px) {
    .services-grid > :global(:nth-child(2)) {
      margin-top: 2rem;
    }
  }

  /* ═══════════════════════════
     About
     ═══════════════════════════ */
  .about {
    padding: 8rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .about-layout {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 5rem;
    align-items: start;
  }

  .about-content h2 {
    font-size: clamp(2rem, 4vw, var(--text-4xl));
    margin-bottom: 1.5rem;
  }

  .about-content p {
    color: var(--text-secondary);
    font-size: var(--text-lg);
    line-height: 1.8;
  }

  .about-values {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-top: 1rem;
  }

  .value-card {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    padding: 1.25rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .value-card:hover {
    border-color: var(--border-accent);
    background: var(--accent-subtle);
  }

  .value-marker {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--accent);
    padding: 0.3rem 0.55rem;
    border: 1px solid var(--border-accent);
    border-radius: 2px;
    flex-shrink: 0;
    letter-spacing: 0.05em;
    line-height: 1;
  }

  .value-card h4 {
    font-family: var(--font-display);
    font-size: var(--text-base);
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .value-card p {
    color: var(--text-secondary);
    font-size: var(--text-sm);
    margin: 0;
    line-height: 1.5;
  }

  /* ═══════════════════════════
     Expertise
     ═══════════════════════════ */
  .expertise {
    padding: 6rem 0;
  }

  .tech-categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  .tech-category-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent);
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border);
    font-weight: 400;
  }

  .tech-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .tech-item {
    font-size: var(--text-base);
    color: var(--text-secondary);
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    transition: all 0.2s ease;
    cursor: default;
  }

  .tech-item:last-child {
    border-bottom: none;
  }

  .tech-item:hover {
    color: var(--text-primary);
    padding-left: 0.5rem;
  }

  /* ═══════════════════════════
     Contact
     ═══════════════════════════ */
  .contact {
    padding: 8rem 0;
    border-top: 1px solid var(--border);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
  }

  .contact-info h2 {
    font-size: clamp(2rem, 4vw, var(--text-4xl));
    margin-bottom: 1.5rem;
  }

  .contact-info > p {
    color: var(--text-secondary);
    font-size: var(--text-lg);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .contact-email {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1rem;
    border: 1px solid var(--border);
    border-radius: 3px;
    color: var(--accent);
    font-size: var(--text-sm);
  }

  .contact-form {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 2.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }

  .contact-form .btn-primary {
    width: 100%;
  }

  /* ═══════════════════════════
     Footer
     ═══════════════════════════ */
  footer {
    padding: 5rem 0 2rem;
    border-top: 1px solid var(--border);
    margin-top: auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .footer-logo {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--text-primary);
  }

  .footer-logo .logo-mark {
    font-family: var(--font-mono);
    color: var(--accent);
  }

  .footer-brand p {
    color: var(--text-muted);
    margin-top: 0.75rem;
    font-size: var(--text-sm);
  }

  .footer-col h4 {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
    font-weight: 400;
  }

  .footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-col li {
    margin-bottom: 0.6rem;
  }

  .footer-col a {
    color: var(--text-secondary);
    font-size: var(--text-sm);
    transition: color 0.2s ease;
  }

  .footer-col a:hover {
    color: var(--accent);
  }

  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    color: var(--text-muted);
    font-size: var(--text-xs);
  }

  .footer-bottom p {
    margin: 0;
  }

  /* ═══════════════════════════
     Responsive
     ═══════════════════════════ */
  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .cipher-matrix {
      display: none;
    }

    .services-grid {
      grid-template-columns: 1fr;
      max-width: 480px;
    }

    .about-layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .tech-categories {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding-top: 6rem;
      min-height: auto;
      padding-bottom: 3rem;
    }

    .services, .about, .contact {
      padding: 5rem 0;
    }

    .expertise {
      padding: 4rem 0;
    }

    .tech-categories {
      grid-template-columns: 1fr;
      max-width: 280px;
    }

    .contact-form {
      padding: 1.5rem;
    }

    footer {
      padding: 3rem 0 1.5rem;
    }
  }
</style>
