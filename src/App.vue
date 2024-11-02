<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-red-600 shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex space-x-4 items-center">
            <router-link to="/" class="text-white font-bold text-xl">ExAlert</router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/ex-boyfriend" class="text-white hover:bg-red-700 px-3 py-2 rounded-md">Ex-Boyfriend</router-link>
            <router-link to="/ex-girlfriend" class="text-white hover:bg-red-700 px-3 py-2 rounded-md">Ex-Girlfriend</router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>