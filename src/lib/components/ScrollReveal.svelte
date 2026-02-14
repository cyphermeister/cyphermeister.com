<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    delay?: number;
  }

  let { children, delay = 0 }: Props = $props();
  let visible = $state(false);
  let el: HTMLDivElement;

  $effect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={el}
  class="reveal"
  class:visible
  style:transition-delay="{delay}ms"
>
  {@render children()}
</div>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: visible;
  }

  .reveal.visible {
    opacity: 1;
    transform: none;
  }
</style>
