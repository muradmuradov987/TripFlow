<template>
  <!--Hero section-->
  <div class="h-lvh bg-slate-300 dark:bg-slate-700 duration-300 ">
    <div class="container px-4  h-full  md:pt-20 flex gap-10 md:gap-20 flex-col md:flex-row">
      <div class=" md:w-1/2   flex items-center pt-20 md:pt-0">
        <div
          class="w-80  md:w-96 rounded-3xl overflow-hidden md:border-10 border-4 border-white shadow-xl shadow-slate-500  ">
          <img src="~/assets/images/hero1.jpg" class="w-full h-full object-cover hover:scale-110 duration-300">
        </div>
        <div
          class="w-56 md:w-60 md:h-80 rounded-3xl overflow-hidden md:border-10 border-4 border-white md:-ml-10 md:-mb-20 -ml-10 shadow-xl shadow-slate-500 group z-10">
          <img src="~/assets/images/hero2.jpg" class="w-full h-full object-cover hover:scale-110 duration-300">
        </div>
      </div>
      <div class="md:w-1/2   flex items-center">
        <div>

          <a href="" class="text-sky-600 dark:text-sky-400 text-2xl font-bold ">Book Now</a>
          <h1 class="lg:text-6xl text-4xl font-bold mt-5 dark:text-white">The Smiling 😊agent for travel</h1>
          <p class="mt-5 text-xl dark:text-white">Make your travel more enjoyable with us. We are the best
            travel agency and
            we are providing the
            best
            travel services for our clients.</p>
          <div class="mt-5 flex gap-5 items-center">
            <a href=""
              class="w-32 h-10 flex justify-center items-center  bg-sky-600 text-white rounded-xl hover:bg-sky-700 duration-300">
              Plan a Trip</a>
            <a href="" class="flex items-center gap-5">
              <div class="relative">
                <img src="~/assets/images/story.jpg" class="rounded-full w-16  ">
                <iconsPlay class="absolute top-3 -right-3" />
              </div>
              <span class="font-bold dark:text-teal-500"> Watch our story</span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!--Hero section end-->

  <!--Destination-->
  <div id="destination" class="container px-4 py-10 md:py-20 ">
    <div class="flex flex-col md:flex-row md:items-center gap-4 md:justify-between mb-10">
      <div>
        <h2 class="font-bold text-3xl mb-3 dark:text-white">Explore top destinations</h2>
        <p class="w-2/3 dark:text-white">Explore your suitable and dream places around the world. Here you can
          find your right
          destination.</p>
      </div>
      <a href="" class="flex items-center whitespace-nowrap text-sky-600 hover:text-sky-700  font-medium ">See
        more
        <iconsRightChevron />
      </a>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10 ">
      <div class=" md:h-120 bg-slate-500 overflow-hidden rounded-2xl group relative cursor-pointer">
        <img src="~/assets/images/destination-1.jpg"
          class="w-full h-full object-cover group-hover:scale-110 duration-300">
        <div
          class="absolute left-10 -bottom-28 group-hover:bottom-5 duration-300 bg-white/20 backdrop-blur w-3/4 p-3 rounded-xl">
          <p class="text-center text-white mb-2">Banff</p>
          <p class="text-center text-white font-bold text-xl">Canada</p>
        </div>
      </div>
      <div class=" md:h-120 bg-slate-500 overflow-hidden rounded-2xl group relative cursor-pointer">
        <img src="~/assets/images/destination-2.jpg"
          class="w-full h-full object-cover group-hover:scale-110 duration-300">
        <div
          class="absolute left-10 -bottom-28 group-hover:bottom-5 duration-300 bg-white/20 backdrop-blur w-3/4 p-3 rounded-xl">
          <p class="text-center text-white mb-2">Machu Picchu</p>
          <p class="text-center text-white font-bold text-xl">Peru</p>
        </div>
      </div>
      <div class=" md:h-120 bg-slate-500 overflow-hidden rounded-2xl group relative cursor-pointer">
        <img src="~/assets/images/destination-3.jpg"
          class="w-full h-full object-cover group-hover:scale-110 duration-300">
        <div
          class="absolute left-10 -bottom-28 group-hover:bottom-5 duration-300 bg-white/20 backdrop-blur w-3/4 p-3 rounded-xl">
          <p class="text-center text-white mb-2">Lauterbrunnen</p>
          <p class="text-center text-white font-bold text-xl">Switzerland</p>
        </div>
      </div>
      <div class=" md:h-120 bg-slate-500 overflow-hidden rounded-2xl group relative cursor-pointer">
        <img src="~/assets/images/destination-4.jpg"
          class="w-full h-full object-cover group-hover:scale-110 duration-300">
        <div
          class="absolute left-10 -bottom-28 group-hover:bottom-5 duration-300 bg-white/20 backdrop-blur w-3/4 p-3 rounded-xl">
          <p class="text-center text-white mb-2">Zhangjiajie</p>
          <p class="text-center text-white font-bold text-xl">China</p>
        </div>
      </div>
    </div>
  </div>
  <!--Destination end-->

  <!--Pricing-->
  <section id="pricing" class="py-10 md:py-20 bg-slate-300 dark:bg-slate-700 duration-300">
    <div class="container px-4">
      <h1 class="text-center font-bold text-3xl mb-3 dark:text-white">Best trip package</h1>
      <p class="text-center md:w-1/3 mx-auto dark:text-white">Explore your suitable and dream places around the
        world. Here
        you can find your right destination.</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 md:mt-10">
        <div class=" bg-white rounded-xl overflow-hidden shadow-xl shadow-slate-500">
          <img class="w-full h-80" src="~/assets/images/trip-1.jpg">
          <div class=" p-4 flex flex-col justify-between gap-1">
            <h3 class="font-bold text-xl">Wasserwerk Frelberg, Germany</h3>
            <p class="text-t-melon  font-medium flex items-center gap-2">
              <iconsStar /> 4.2
            </p>
            <div class="flex items-center justify-between">
              <span class="text-t-grey">From <span class="text-t-text font-bold">$300</span></span>
              <a href=""
                class="border border-sky-600 hover:bg-sky-700 hover:text-white  px-5 py-1 rounded-2xl duration-300">Book
                Now</a>
            </div>
          </div>
        </div>
        <div class=" bg-white rounded-xl overflow-hidden shadow-xl shadow-slate-500">
          <img class="w-full h-80" src="~/assets/images/trip-2.jpg">
          <div class=" p-4 flex flex-col justify-between gap-1">
            <h3 class="font-bold text-xl">Patagonia, Argentina and Chile</h3>
            <p class="text-t-melon  font-medium flex items-center gap-2">
              <iconsStar /> 4.2
            </p>
            <div class="flex items-center justify-between">
              <span class="text-t-grey">From <span class="text-t-text font-bold">$450</span></span>
              <a href=""
                class="border border-sky-600 hover:bg-sky-700 hover:text-white  px-5 py-1 rounded-2xl duration-300">Book
                Now</a>
            </div>
          </div>
        </div>
        <div class=" bg-white rounded-xl overflow-hidden shadow-xl shadow-slate-500">
          <img class="w-full h-80" src="~/assets/images/trip-3.jpg">
          <div class=" p-4 flex flex-col justify-between gap-1">
            <h3 class="font-bold text-xl">The Dolomites, Italy</h3>
            <p class="text-t-melon  font-medium flex items-center gap-2">
              <iconsStar /> 4.2
            </p>
            <div class="flex items-center justify-between">
              <span class="text-t-grey">From <span class="text-t-text font-bold">$400</span></span>
              <a href=""
                class="border border-sky-600 hover:bg-sky-700 hover:text-white  px-5 py-1 rounded-2xl duration-300">Book
                Now</a>
            </div>
          </div>
        </div>
      </div>
      <a href=""
        class="mt-10 mx-auto w-32 h-10 flex justify-center items-center  bg-sky-600 text-white rounded-xl hover:bg-sky-700 duration-300">
        View All</a>
    </div>

  </section>
  <!--Pricing end-->

  <!--Subscribe-->
  <section class="py-10 md:py-20  dark:bg-slate-700 duration-300">
    <div class="container px-4 flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-20">
      <div class="md:w-1/2">
        <h1 class=" font-bold text-3xl mb-3 dark:text-white">Subscribe to get special prize</h1>
        <p class=" dark:text-white">Explore your suitable and dream places around the world. Here you
          can find your right destination.</p>
      </div>
      <div class="md:w-1/2">
        <div class="w-full bg-white border border-sky-500 rounded-xl overflow-hidden flex">
          <input type="text" class="h-10 w-full px-5 border-0 focus:outline-none" placeholder="Your email here">
          <a href=""
            class=" w-32 h-10 flex justify-center items-center  bg-sky-600 text-white rounded-xl hover:bg-sky-700 duration-300">
            Send</a>
        </div>
      </div>
    </div>
  </section>
  <!--Subscribe end-->

</template>


<script setup>
</script>

<style lang="scss" scoped></style>
