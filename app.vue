<template>
  <NuxtLayout>
    <div class="my-3">
      <h1 class="text-3xl font-bold text-red-300">
        Hello world!
      </h1>
      <button class="btn btn-outline">Start</button>
      <button class="btn btn-outline" 
        @click="count++">{{ count }}
      </button>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
}
</script>