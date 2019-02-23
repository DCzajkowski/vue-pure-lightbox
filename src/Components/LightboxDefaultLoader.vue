<template>
  <div class="lightbox__default-loader">
    <div class="lightbox__default-loader__element"></div>
  </div>
</template>

<script>
  export default {
    //
  }
</script>

<style>
  .lightbox__default-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .lightbox__default-loader__element {
    animation: LightboxDefaultLoaderAnimation 1s linear infinite;
    border: 3px solid #292929;
    border-top: 3px solid #fff;
    border-radius: 50%;
    height: 75px;
    width: 75px;
  }

  @keyframes LightboxDefaultLoaderAnimation {
    to {
      border-top-color: #fff;
      transform: rotate(360deg);
    }
  }
</style>
