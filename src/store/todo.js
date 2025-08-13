import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      items: [],
    }
  },

  getters: {
    getItems: (state) => state.items,
  },

  actions: {
    addItem(item) {
      this.items.push(item)
      console.log('list of item:', item)
      localStorage.setItem('todoItems', JSON.stringify(this.items))
    },
removeTodoByIndex(index) {
  if (index > -1 && index < this.items.length) {
    this.items.splice(index, 1)          // ← هذا يحذف فعليًا
    localStorage.setItem('todoItems', JSON.stringify(this.items))
  }
},
    loadTodos() {
      const saved = localStorage.getItem('todoItems')
      if (saved) {
        this.items = JSON.parse(saved)
      }
    }
  },

})