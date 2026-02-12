<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    description: string;
    features?: string[];
    icon?: Snippet;
  }

  let { title, description, features = [], icon }: Props = $props();
</script>

<article class="service-card">
  {#if icon}
    <div class="icon-wrapper">
      {@render icon()}
    </div>
  {/if}
  <h3>{title}</h3>
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
  .service-card {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-4px);
    border-color: rgba(79, 110, 247, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: var(--accent-gradient-subtle);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: var(--accent-blue);
  }

  .icon-wrapper :global(svg) {
    width: 28px;
    height: 28px;
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.25rem;
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
    font-size: 0.8rem;
    color: var(--text-muted);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    padding: 0.35rem 0.75rem;
    border-radius: 100px;
    transition: all 0.2s ease;
  }

  .features li:hover {
    color: var(--text-secondary);
    border-color: rgba(79, 110, 247, 0.2);
  }
</style>
