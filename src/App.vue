<template>
  <div class="wrapper">
    <base-header></base-header>
    <div class="mx-4">
      <div class="flex justify-center items-center my-4">
        <img :src="mainImg" alt="main" style="width: 90vw" />
      </div>
      <h3 class="my-4 xl:mt-96 text-2xl">Создаем цифровые продукты, которые покоряют с первого клика.</h3>
      <button class="flex gap-3 py-3 mt-2 border-b-[1.5px]">
        Обсудить ваш проект
        <img :src="iconArrowRight" alt="arrow right" />
      </button>
      <div class="mt-20" ref="wrapperEl">
        <div ref="elVideo" class="absolute top-[124px] w-[300px] ease-linear duration-300">
          <video class="rounded-lg" autoplay loop muted playsinline >
            <source src="https://download-video.akamaized.net/v3-1/playback/7b5f11b5-19b7-4096-b971-b1422ff988cb/6992667f-4e6b67a3?__token__=st=1708768124~exp=1708782524~acl=%2Fv3-1%2Fplayback%2F7b5f11b5-19b7-4096-b971-b1422ff988cb%2F6992667f-4e6b67a3%2A~hmac=3bdca1513e447e1e1adcda60dc0ade95b614258f9dc3d6bb7e79ced62e1af961&r=dXMtd2VzdDE%3D">
          </video>
          <h5>Showreel 2024</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { usePointer, useWindowSize, useElementSize, useWindowScroll } from '@vueuse/core';

import BaseHeader from './components/BaseHeader.vue'
import mainImg from '@/components/icons/main.svg'
import iconArrowRight from '@/components/icons/arrow-right.svg'

const elVideo = ref();
const wrapperEl = ref();

const point = usePointer();
const { width } = useWindowSize();
const { width: elWidth, height: elHeight } = useElementSize(elVideo)
const { width: wrapperWidth } = useElementSize(wrapperEl)
const { y: scrollY } = useWindowScroll();

const updateElement = (cursorX: number, scrollY: number) => {
  let x = cursorX;
  if (x > width.value - elWidth.value / 2 - 32) {
    x = width.value - elWidth.value / 2 - 32;
  } else if (x < elWidth.value / 2 + 16) {
    x = elWidth.value / 2 + 16;
  }
  x -= elWidth.value / 2;
  elVideo.value.style.left = `${x}px`;
  elVideo.value.style.top = `${124 + scrollY}px`;
  
  let resWidth = 300 + scrollY * 2;
  if (resWidth > wrapperWidth.value) {
    resWidth = wrapperWidth.value;
  }
  
  elVideo.value.style.width = `${resWidth}px`;
} 

watch(point.x, (newval: number) => {
  updateElement(newval, scrollY.value);
})
watch(scrollY, (newval) => {
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
