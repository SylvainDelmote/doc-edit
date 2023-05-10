import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'myStore',
  state: () => ({
    content: sessionStorage.getItem('content') || ''
  }),
  actions: {
    updateContent(newContent) {
      this.content = newContent
      sessionStorage.setItem('content', newContent)
    }
  }
})