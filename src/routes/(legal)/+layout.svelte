<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<AnimatedBackground />
<Navigation />

<main>
  <div class="container">
    {@render children()}
  </div>
</main>

<Footer />
