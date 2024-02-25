<template>
  <div class="flex justify-between items-center p-4 sm:p-7 lg:px-16">
    <div>
      <a href="/">
        <img :src="logo" alt="logo" class="hover:opacity-85" />
      </a>
    </div>
    <div class="md:order-last flex gap-3 lg:gap-5 cursor-pointer">
      <img :src="telegram" alt="telegram" class="hidden md:block hover:opacity-85" />
      <button
        class="text-[#BFE72C] md:text-black md:bg-[#BFE72C] md:px-4 md:py-2 md:rounded-3xl cursor-pointer hover:opacity-85"
      >
        Обсудить проект
      </button>
    </div>
    <div>
      <nav class="hidden md:block">
        <ul class="flex text-[#767676] gap-4">
          <li><a href="#" class="hover:text-white duration-200">Проекты</a></li>
          <li><a href="#" class="hover:text-white duration-200">Услуги</a></li>
          <li><a href="#" class="hover:text-white duration-200">Наш подход</a></li>
          <li><a href="#" class="hover:text-white duration-200">Контакты</a></li>
        </ul>
      </nav>
      <button class="md:hidden">Меню</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/components/icons/logo.svg'
import telegram from '@/components/icons/telegram.svg'
</script>

<style scoped></style>
