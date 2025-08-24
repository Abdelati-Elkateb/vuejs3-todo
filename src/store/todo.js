import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      items: [],
      active: [],
      completed: [],
      itemTodo: false,
    }
  },

  getters: {
    getItems: (state) => state.items,
    isEmpty: (state) => state.items.length === 0,
    totalIndex: (state) => state.items.length
  },

  actions: {
    addItem(item) {
      this.items.push(item)
      console.log('list of item:', item)
      localStorage.setItem('todoItems', JSON.stringify(this.items))
    },
    activeItem(item) {
      this.active.push(item)
      console.log('active item:', item)
      localStorage.setItem('activeItems', JSON.stringify(this.active))
      console.log('active items:', this.active)
    },

    completedItem(item) {
      this.completed.push(item)
      localStorage.setItem('itemsCompleted', JSON.stringify(this.completed))
      console.log('completed item')
    },

    removeTodoByIndex(index) {
      if (index > -1 && index < this.items.length) {
        this.items.splice(index, 1)
        localStorage.setItem('todoItems', JSON.stringify(this.items))
      }
    },
    loadTodos() {
      const savedAddItem = localStorage.getItem('todoItems')
      if (savedAddItem) {
        this.items = JSON.parse(savedAddItem)
      }
      const savedCompleted = localStorage.getItem('itemsCompleted')
      if (savedCompleted) {
        this.Completed = JSON.parse(savedCompleted)
      }

    },
    clearAllTodos() {
      this.items = []
      localStorage.removeItem('todoItems')
      itemTodo = false

    }
  },

})