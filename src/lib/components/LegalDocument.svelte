<script lang="ts">
  import type { Snippet } from 'svelte';
  import { company, formatLegalDate } from '$lib/legal';

  interface Section {
    id: string;
    title: string;
  }

  interface Props {
    title: string;
    description: string;
    lastUpdated: string;
    sections: Section[];
    children: Snippet;
  }

  let { title, description, lastUpdated, sections, children }: Props = $props();
</script>

<svelte:head>
  <title>{title} | {company.shortName}</title>
  <meta name="description" content={description} />
</svelte:head>

<header class="doc-header">
  <p class="eyebrow">Legal</p>
  <h1>{title}</h1>
  <p class="doc-meta mono">Last updated {formatLegalDate(lastUpdated)}</p>
</header>

<div class="doc-layout">
  <nav class="toc" aria-label="Table of contents">
    <p class="toc-label">Contents</p>
    <ol>
      {#each sections as section}
        <li><a href="#{section.id}">{section.title}</a></li>
      {/each}
    </ol>
  </nav>

  <article class="doc">
    {@render children()}
  </article>
</div>

<style>
  .doc-header {
    padding: 9rem 0 3rem;
    border-bottom: 1px solid var(--border);
    margin-bottom: 3.5rem;
  }

  .doc-header h1 {
    font-size: clamp(2.25rem, 4vw, 3rem);
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
  }

  .doc-meta {
    color: var(--text-muted);
    font-size: var(--text-xs);
    letter-spacing: 0.05em;
    margin: 0;
  }

  .doc-layout {
    display: grid;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 5rem;
    align-items: start;
    padding-bottom: 6rem;
  }

  .toc {
    position: sticky;
    top: 6rem;
  }

  .toc-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  .toc ol {
    list-style: none;
    counter-reset: toc;
    margin: 0;
    padding: 0;
  }

  .toc li {
    counter-increment: toc;
    display: flex;
    gap: 0.75rem;
    align-items: baseline;
    margin-bottom: 0.55rem;
    font-size: var(--text-sm);
    line-height: 1.4;
  }

  .toc li::before {
    content: counter(toc, decimal-leading-zero);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--accent-dim);
    flex-shrink: 0;
  }

  .toc a {
    color: var(--text-secondary);
    transition: color 0.2s ease;
  }

  .toc a:hover {
    color: var(--accent);
  }

  @media (max-width: 900px) {
    .doc-header {
      padding-top: 7rem;
    }

    .doc-layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .toc {
      position: static;
      padding: 1.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--bg-elevated);
    }
  }
</style>
