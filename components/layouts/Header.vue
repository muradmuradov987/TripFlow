<template>
  <!--Header-->
  <header
    class="z-20 fixed w-full bg-slate-300 dark:bg-slate-800 duration-300 h-14 md:h-20 flex items-center shadow-sm shadow-slate-400">
    <div class="container px-4">
      <!--Navbar-->
      <nav class="w-100 flex items-center justify-between">
        <!--Logo-->
        <NuxtLink to="/" class="text-2xl md:text-3xl font-bold">
          <span class="dark:text-t-melon">Trip</span><span class="text-teal-500">Flow</span>
        </NuxtLink>
        <!--Nav links-->
        <div :class="{ hidden: !mobileMenu }"
          class="bg-slate-400 dark:bg-slate-800 absolute right-0 top-14  flex md:flex flex-col gap-2 p-2 md:relative md:right-auto md:top-auto top-inherit md:bg-transparent md:flex-row md:items-center md:p-0 md:gap-3.5">
          <NuxtLink to="/" class="nav__link">Home</NuxtLink>
          <NuxtLink to="/" class="nav__link">About</NuxtLink>
          <NuxtLink to="/" class="nav__link">Destinations</NuxtLink>
          <NuxtLink to="/" class="nav__link">Pricing</NuxtLink>
          <NuxtLink to="/" class="nav__link">Contact</NuxtLink>
        </div>
        <!--Nav items-->
        <div class="flex items-center gap-3">
          <!--Dark mode-->
          <iconsSun @click="toggleDarkMode" :class="{ hidden: !darkMode }" />
          <iconsMoon @click="toggleDarkMode" :class="{ hidden: darkMode }" />
          <!--Language-->
          <div class="relative">
            <iconsLanguage @click="showLangMenu()" />
            <div v-if="langMenu"
              class="absolute top-9 -left-3 md:-left-1.5 w-12 bg-slate-50 rounded-lg shadow-md flex flex-col overflow-hidden ">
              <a href="" class="p-1.5 text-center hover:bg-teal-500 hover:text-teal-50 hover:font-bold">En</a>
              <a href="" class="p-1.5 text-center hover:bg-teal-500 hover:text-teal-50 hover:font-bold">Ru</a>
            </div>
          </div>
          <!--Mobile menu-->
          <iconsMenu @click="showMobileMenu" class="md:hidden" :class="{ hidden: mobileMenu }" />
          <iconsClose @click="showMobileMenu" class="md:hidden" :class="{ hidden: !mobileMenu }" />
        </div>
      </nav>
      <!--Navbar end-->
    </div>
  </header>
  <!--Header end-->
</template>

<script setup>

//Dark Mode
const darkMode = ref(false)
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

//Language Menu
const langMenu = ref(false)
const showLangMenu = () => {
  langMenu.value = !langMenu.value
}

//Mobile Menu
const mobileMenu = ref(false)
const showMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value
}


</script>

<style lang="scss" scoped></style>
