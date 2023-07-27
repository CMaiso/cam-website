<script setup>
import {useAsyncData} from "#app";

const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find();
})
</script>

<template>
<div v-for="blogPost in blogPostList" :key="blogPost._path">
  <NuxtLink :to="blogPostList._path">Je suis un lien</NuxtLink>
</div>
</template>

<style scoped>

</style>