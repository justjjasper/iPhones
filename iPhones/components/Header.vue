<!-- Header -->
<template>
  <div class="header-container border-2 text-white bg-black border-black h-[75px] flex items-center">
    <div class="header-padding px-5 lg:px-20">
      <span class="title font-bold text-3xl cursor-pointer">iPhones</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradientAnimation {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.title {
  background: linear-gradient(90deg, #666666, #f4f4f4, #666666);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradientAnimation 12s linear infinite; /* Adjust the duration as needed */
}
</style>