// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    modules: ['@nuxthq/ui', '@nuxt/content'],
    content: {
        highlight: {
            theme: 'github-light',
        }
    }
})
