<script lang="ts">
  // Refined background: dot grid pattern + subtle gradient accents
</script>

<div class="bg" aria-hidden="true">
  <div class="grid-pattern"></div>
  <div class="glow glow-1"></div>
  <div class="glow glow-2"></div>
</div>

<style>
  .bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
  }

  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    );
    background-size: 48px 48px;
    mask-image: radial-gradient(
      ellipse 80% 50% at 50% 30%,
      black 20%,
      transparent 70%
    );
    -webkit-mask-image: radial-gradient(
      ellipse 80% 50% at 50% 30%,
      black 20%,
      transparent 70%
    );
  }

  .glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
  }

  .glow-1 {
    width: 500px;
    height: 500px;
    background: rgba(201, 168, 76, 0.035);
    top: -10%;
    right: 10%;
    animation: drift 30s ease-in-out infinite;
  }

  .glow-2 {
    width: 400px;
    height: 400px;
    background: rgba(90, 125, 154, 0.03);
    bottom: 10%;
    left: -5%;
    animation: drift 25s ease-in-out infinite reverse;
  }

  @keyframes drift {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(20px, -30px); }
    50% { transform: translate(-10px, 20px); }
    75% { transform: translate(15px, 10px); }
  }
</style>
