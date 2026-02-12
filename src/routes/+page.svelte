<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';

  let email = $state('');
  let message = $state('');
  let subject = 'Inquiry from Website';

  function handleSubmit(event: Event) {
    event.preventDefault();
    const body = `From: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:contact@cyphermeister.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const services = [
    {
      title: 'Blockchain & Web3',
      description: 'End-to-end blockchain consulting from protocol design to smart contract development and security auditing.',
      features: ['Smart Contracts', 'DeFi Solutions', 'Security Audits', 'Protocol Design']
    },
    {
      title: 'Distributed Systems',
      description: 'Design and implementation of fault-tolerant, scalable distributed architectures for mission-critical applications.',
      features: ['Consensus Protocols', 'Microservices', 'High Availability', 'Event Sourcing']
    },
    {
      title: 'Cryptography',
      description: 'Applied cryptographic solutions for security-critical applications and privacy-preserving systems.',
      features: ['Protocol Design', 'Key Management', 'Zero-Knowledge', 'Encryption Systems']
    }
  ];

  const technologies = [
    'Rust', 'TypeScript', 'Solidity', 'Haskell',
    'Python', 'Nix', 'Ethereum', 'Solana',
    'PostgreSQL', 'AWS', 'Kubernetes', 'Docker'
  ];
</script>

<svelte:head>
  <title>CypherMeister | Blockchain & Distributed Systems Consulting</title>
  <meta name="description" content="Expert consulting in blockchain, Web3, distributed systems, and cryptography. We architect the future of decentralized infrastructure." />
</svelte:head>

<AnimatedBackground />
<Navigation />

<main>
  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-content">
        <p class="hero-eyebrow">Blockchain & Distributed Systems Consulting</p>
        <h1>Architecting the <span class="gradient-text">Future</span> of Decentralized Infrastructure</h1>
        <p class="hero-description">
          We help organizations build secure, scalable, and resilient systems
          at the intersection of distributed computing and cryptography.
        </p>
        <div class="hero-cta">
          <a href="#contact" class="btn-primary">Start a Project</a>
          <a href="#services" class="btn-secondary">Our Services</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services" id="services">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">What We Do</p>
        <h2>Specialized <span class="gradient-text">Consulting</span> Services</h2>
        <p class="section-description">
          Deep expertise in building the next generation of decentralized systems
        </p>
      </div>
      <div class="services-grid">
        {#each services as service, i}
          <ServiceCard
            title={service.title}
            description={service.description}
            features={service.features}
          >
            {#snippet icon()}
              {#if i === 0}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              {:else if i === 1}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              {/if}
            {/snippet}
          </ServiceCard>
        {/each}
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <p class="section-eyebrow">About CypherMeister</p>
          <h2>Bridging <span class="gradient-text">Theory</span> and Practice</h2>
          <p>
            CypherMeister is a specialized consulting firm at the forefront of distributed systems
            and blockchain technology. We combine deep theoretical knowledge with practical implementation
            experience to deliver solutions that are not just functional, but future-proof.
          </p>
          <p>
            Our team brings expertise from both academic research and production systems,
            ensuring your infrastructure is built on solid foundations while remaining adaptable
            to the rapidly evolving landscape of decentralized technology.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Expertise Section -->
  <section class="expertise" id="expertise">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">Our Stack</p>
        <h2>Technologies & <span class="gradient-text">Expertise</span></h2>
      </div>
      <div class="tech-grid">
        {#each technologies as tech}
          <span class="tech-badge">{tech}</span>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <p class="section-eyebrow">Get in Touch</p>
          <h2>Let's Build <span class="gradient-text">Together</span></h2>
          <p>
            Have a project in mind? We'd love to hear about it.
            Reach out and let's discuss how we can help bring your vision to life.
          </p>
        </div>
        <form onsubmit={handleSubmit} class="contact-form glass-panel">
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
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="logo-text">CypherMeister</span>
        <p>Architecting the future of distributed systems.</p>
      </div>
      <div class="footer-links">
        <a href="https://github.com/cyphermeister" target="_blank" rel="noopener noreferrer" class="github-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} CypherMeister LLC. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  /* Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 8rem 0 4rem;
  }

  .hero-content {
    max-width: 800px;
  }

  .hero-eyebrow {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--accent-blue);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .hero h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .hero-description {
    font-size: var(--text-xl);
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    max-width: 600px;
    line-height: 1.7;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  /* Services Section */
  .services {
    padding: 8rem 0;
  }

  .section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 4rem;
  }

  .section-eyebrow {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent-purple);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .section-header h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .section-description {
    color: var(--text-secondary);
    font-size: var(--text-lg);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  /* About Section */
  .about {
    padding: 8rem 0;
    background: var(--bg-secondary);
  }

  .about-grid {
    max-width: 800px;
  }

  .about-content h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin-bottom: 1.5rem;
  }

  .about-content p {
    color: var(--text-secondary);
    font-size: var(--text-lg);
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }

  /* Expertise Section */
  .expertise {
    padding: 6rem 0;
  }

  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .tech-badge {
    padding: 0.75rem 1.5rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .tech-badge:hover {
    border-color: var(--accent-blue);
    color: var(--text-primary);
    background: var(--accent-gradient-subtle);
  }

  /* Contact Section */
  .contact {
    padding: 8rem 0;
    background: var(--bg-secondary);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-info h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin-bottom: 1.5rem;
  }

  .contact-info p {
    color: var(--text-secondary);
    font-size: var(--text-lg);
    line-height: 1.7;
  }

  .contact-form {
    padding: 2.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-secondary);
    font-size: var(--text-sm);
  }

  .contact-form .btn-primary {
    width: 100%;
  }

  /* Footer */
  footer {
    padding: 4rem 0 2rem;
    border-top: 1px solid var(--glass-border);
    margin-top: auto;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 3rem;
  }

  .footer-brand .logo-text {
    font-size: var(--text-xl);
    font-weight: 700;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .footer-brand p {
    color: var(--text-muted);
    margin-top: 0.5rem;
    font-size: var(--text-sm);
  }

  .footer-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: var(--text-sm);
    transition: color 0.3s ease;
  }

  .footer-links a:hover {
    color: var(--text-primary);
  }

  .footer-bottom {
    text-align: center;
    color: var(--text-muted);
    font-size: var(--text-sm);
  }

  .footer-bottom p {
    margin: 0;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding-top: 6rem;
    }

    .services, .about, .contact {
      padding: 5rem 0;
    }

    .footer-content {
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
