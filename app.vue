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
      <button class="flex btn btn-neutral m-auto" @click="removeBG">Remove Background</button>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null,
      imageFile: null,
      newImageUrl: null,
    }
  },
  methods: {
    handleNewImg() {
      this.$refs.fileUploaded.click();
    },
    handleImgUploaded(event) {
      if(this.imageUrl) this.removeImage();
      const image = event.target.files[0];
      this.imageFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(image);
    },
    removeImage() {
      URL.revokeObjectURL(this.imageUrl);
      this.imageUrl = null;
      this.imageFile = null;
    },
    async removeBG() {
      if(!this.imageUrl) {
        alert('please upload the image');
        return;
      }
      const newImage = await this.removeBgService();
      // renderNewImage(newImage);
    },
    async removeBgService() {
      const formData = new FormData();
      formData.append('image', this.imageFile);
      
      const response = await fetch('/api/remove-bg', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      if(!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const resultData = await response.json(); // Assuming the server responds with JSON
      console.log(resultData);
      this.resultUrl = resultData.newImageUrl;
    }
  }
}
</script>