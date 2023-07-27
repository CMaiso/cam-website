<script setup>
import {useAsyncData} from "#app";

const { path } = useRoute();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
})
</script>

<template>
  <ContentDoc />
</template>

<style scoped>

</style>