<script lang="ts">
  import { company, legalDocuments } from '$lib/legal';

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Expertise', href: '/#expertise' },
    { label: 'Contact', href: '/#contact' }
  ];

  const legalLinks = [legalDocuments.terms, legalDocuments.privacy];
</script>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="footer-logo">
          <span class="logo-mark">//</span> {company.shortName}
        </span>
        <p>Architecting the future of distributed systems.</p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          {#each navLinks as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li>
            <a href={company.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="mailto:{company.contactEmail}">Email</a>
          </li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          {#each legalLinks as doc}
            <li><a href={doc.path}>{doc.title}</a></li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
      <ul class="footer-legal">
        {#each legalLinks as doc}
          <li><a href={doc.path}>{doc.title}</a></li>
        {/each}
      </ul>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 5rem 0 2rem;
    border-top: 1px solid var(--border);
    margin-top: auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem 2rem;
    flex-wrap: wrap;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    color: var(--text-muted);
    font-size: var(--text-xs);
  }

  .footer-bottom p {
    margin: 0;
  }

  .footer-legal {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.5rem;
  }

  .footer-legal a {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .footer-legal a:hover {
    color: var(--accent);
  }

  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .footer-brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 640px) {
    footer {
      padding: 3rem 0 1.5rem;
    }

    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
