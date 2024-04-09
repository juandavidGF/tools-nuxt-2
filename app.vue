<template>
  <NuxtLayout>
    <div class="mx-auto w-[500px]">
      <div class="flex mx-auto my-3 w-[400px] h-[400px] border border-black rounded-md
      cursor-pointer"
      @click="handleNewImg">
        <input type="file" accept="image/*"ref="fileUploaded" @change="handleImgUploaded" hidden>
        <div v-if="!imageUrl" class="m-auto">Upload an Image</div>
        <img v-if="imageUrl" :src="imageUrl" class="object-contain m-auto h-full" />
      </div>
      <button class="flex btn btn-neutral m-auto">Remove Background</button>
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
      if(this.imageUrl) this.removeImage();
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