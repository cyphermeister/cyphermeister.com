<script lang="ts">
  // Pure CSS animated background - no JS needed
</script>

<div class="animated-bg" aria-hidden="true">
  <div class="gradient-orb orb-1"></div>
  <div class="gradient-orb orb-2"></div>
  <div class="gradient-orb orb-3"></div>
</div>

<style>
  .animated-bg {
    position: fixed;
    inset: 0;
    overflow: hidden;
    z-index: -1;
    pointer-events: none;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.4;
  }

  .orb-1 {
    width: 600px;
    height: 600px;
    background: var(--accent-blue);
    top: -200px;
    right: -100px;
    animation: float 20s ease-in-out infinite;
  }

  .orb-2 {
    width: 500px;
    height: 500px;
    background: var(--accent-purple);
    bottom: 10%;
    left: -150px;
    animation: float 25s ease-in-out infinite reverse;
  }

  .orb-3 {
    width: 400px;
    height: 400px;
    background: var(--accent-cyan);
    top: 40%;
    right: 20%;
    animation: float 30s ease-in-out infinite;
    opacity: 0.25;
  }
</style>
