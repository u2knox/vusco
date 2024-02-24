<template>
  <div class="flex justify-between items-center p-4 sm:p-7">
    <div>
      <img :src="logo" alt="logo" />
    </div>
    <button class="text-[#BFE72C] md:order-last">Обсудить проект</button>
    <div>
      <nav class="hidden md:block">
        <ul class="flex text-[#767676] gap-4">
          <li><a href="#">Проекты</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Наш подход</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <button class="md:hidden">Меню</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/components/icons/logo.svg'
</script>

<style scoped></style>
