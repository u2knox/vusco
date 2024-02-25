<template>
  <div class="wrapper h-[10000px]">
    <base-header></base-header>
    <div class="mx-4 lg:mx-16">
      <div class="flex justify-center items-center my-4">
        <img :src="mainImg" alt="main" style="width: 90vw" />
      </div>
      <h3 class="my-4 xl:mt-96 text-2xl">Создаем цифровые продукты, которые покоряют с первого клика.</h3>
      <button class="flex gap-3 py-3 mt-2 border-b-[1.5px]">
        Обсудить ваш проект
        <img :src="iconArrowRight" alt="arrow right" />
      </button>
      <div class="mt-20" ref="wrapperEl">
        <div ref="elVideo" class="md:absolute top-[132px] w-[300px] ease-linear duration-200 cursor-pointer">
          <video class="rounded-lg" autoplay loop muted playsinline >
            <source src="/public/vusco.mp4">
          </video>
          <h5>Showreel 2024</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { usePointer, useWindowSize, useElementSize, useElementBounding, useWindowScroll } from '@vueuse/core';

import BaseHeader from './components/BaseHeader.vue'
import mainImg from '@/components/icons/main.svg'
import iconArrowRight from '@/components/icons/arrow-right.svg'

const elVideo = ref();
const wrapperEl = ref();

const point = usePointer();
const { width } = useWindowSize();
const { width: elWidth, height: elHeight } = useElementSize(elVideo)
const { width: wrapperWidth, y: wrapperY } = useElementBounding(wrapperEl)
const { y: winScrollY } = useWindowScroll();

const updateElement = (cursorX: number, scrollY: number) => {
  const padding = width.value >= 960 ? 60 : 16;

  let x = cursorX;
  if (x > width.value - elWidth.value / 2 - padding * 2) {
    x = width.value - elWidth.value / 2 - padding * 2;
  } else if (x < elWidth.value / 2 + padding) {
    x = elWidth.value / 2 + padding;
  }

  if (wrapperY.value < 0) {
    scrollY -= -wrapperY.value;
    x = elWidth.value / 2 + padding;
  }
  x -= elWidth.value / 2;
  elVideo.value.style.left = `${x}px`;
  elVideo.value.style.top = `${132 + scrollY}px`;
  
  let resWidth = 300 + scrollY * 1.5;
  if (resWidth > wrapperWidth.value) {
    resWidth = wrapperWidth.value;
  }
  
  elVideo.value.style.width = `${resWidth}px`;
} 

watch(point.x, (newval: number) => {
  updateElement(newval, winScrollY.value);
})
watch(winScrollY, (newval) => {
  updateElement(point.x.value, newval);
})
watch(elHeight, newval => wrapperEl.value.style.height = `${newval}px`)

onMounted(() => {
  elVideo.value.style.left = `${width.value - elWidth.value - 32}px`;
})
</script>

<style scoped>
.wrapper {
  background: #000;
  color: #fff;
  min-height: 100vh;
}
</style>
