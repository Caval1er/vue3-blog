import { defineStore } from 'pinia'

export const useStore = defineStore('pinia', {
  state: () => ({
    couter: 1,
  }),
  getters: {
    doubleCount(): number {
      return this.couter * 2
    },
  },
  actions: {
    increment() {
      this.couter++
    },
  },
})
