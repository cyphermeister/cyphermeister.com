<script lang="ts">
  interface Props {
    number: string;
    title: string;
    description: string;
    features?: string[];
  }

  let { number, title, description, features = [] }: Props = $props();
</script>

<article class="card">
  <span class="card-number">{number}</span>
  <h3>{title}</h3>
  <div class="card-rule"></div>
  <p>{description}</p>
  {#if features.length > 0}
    <ul class="features">
      {#each features as feature}
        <li>{feature}</li>
      {/each}
    </ul>
  {/if}
</article>

<style>
  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
  }

  .card:hover {
    border-color: var(--border-accent);
    background: var(--bg-card-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .card-number {
    font-family: var(--font-mono);
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--accent);
    opacity: 0.4;
    line-height: 1;
    display: block;
    margin-bottom: 1.25rem;
  }

  .card:hover .card-number {
    opacity: 0.7;
  }

  h3 {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  .card-rule {
    width: 32px;
    height: 1px;
    background: var(--accent);
    margin-bottom: 1rem;
    opacity: 0.5;
    transition: width 0.3s ease, opacity 0.3s ease;
  }

  .card:hover .card-rule {
    width: 48px;
    opacity: 0.8;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: var(--text-sm);
  }

  .features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .features li {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--text-muted);
    padding: 0.3rem 0.65rem;
    border: 1px solid var(--border);
    border-radius: 2px;
    transition: all 0.2s ease;
    letter-spacing: 0.02em;
  }

  .features li:hover {
    color: var(--accent);
    border-color: var(--border-accent);
  }
</style>
