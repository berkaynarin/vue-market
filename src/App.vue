<template>
  <div>
    <router-link to="/"><BaseHeader>Vue Market</BaseHeader></router-link>
    <router-view :key="$route.fullPath" />
  </div>
</template>
