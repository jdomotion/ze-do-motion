import type { Ref } from 'vue'
import type { Author } from './authors.data'
import { useData, useRoute } from 'vitepress'
import { computed, ref } from 'vue'
import { data } from './authors.data'

export default () => {
  const { site } = useData()

  const allAuthors: Ref<Author[]> = ref(data)

  const route = useRoute()

  const path = route.path

  function findByName(name: string): Author | undefined {
    return allAuthors.value.find(p => p.name === name)
  }

  function findCurrentIndex() {
    return allAuthors.value.findIndex(p => `${site.value.base}blog${p.href}` === route.path)
  }

  const currentAuthor = computed(() => allAuthors.value[findCurrentIndex()] || null)
  const nextAuthor = computed(() => allAuthors.value[findCurrentIndex() - 1] || null)
  const prevAuthor = computed(() => allAuthors.value[findCurrentIndex() + 1] || null)

  return { allAuthors, currentAuthor, nextAuthor, prevAuthor, findByName, path }
}
