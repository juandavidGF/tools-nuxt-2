<template>
  <NuxtLayout>
    <div class="mx-auto w-[500px]">
      <div class="relative mx-auto my-3 w-[400px] h-[400px] border border-black rounded-md" 
      :class="{'cursor-pointer': !imageUrl}"
      @click="handleNewImg">
        <input type="file" ref="fileUploaded" @change="handleImgUploaded" hidden>
        <img v-if="imageUrl" :src="imageUrl" class="object-contain m-auto h-full" />
        <button v-if="imageUrl" @click.stop="removeImage" class="absolute top-1 right-2">X</button>
      </div>
      <button class="btn btn-neutral m-auto flex">Remove Background</button>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null,
    }
  },
  methods: {
    handleNewImg() {
      this.$refs.fileUploaded.click();
    },
    handleImgUploaded(event) {
      const image = event.target.files[0];
      this.imageUrl = URL.createObjectURL(image);
    },
    removeImage() {
      URL.revokeObjectURL(this.imageUrl);
      this.imageUrl = null;
    }
  }
}
</script>