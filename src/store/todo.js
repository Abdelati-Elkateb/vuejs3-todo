import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoId', {

  state: () => {
    return {
      items: [],
      nextId: 1,
      active: [],
      completed: [],
    }
  },

  getters: {
    getItems: (state) => state.items,
    isEmpty: (state) => state.items.length === 0,
    totalIndex: (state) => state.items.length,
    updateActive() {
      if (!this.completed || this.completed.length === 0) {
        this.active = [...this.items]
      } else {

        this.active = this.items.filter(el => !this.completed.includes(el))
      }
    }


  },


  actions: {
    addItem(todo) {
      const newItem = { id: this.nextId, todo, }
      this.items.push(newItem)
      this.active.push(newItem)
      localStorage.setItem('todoItems', JSON.stringify(this.items))
      this.nextId++;
    },
    toggleState(item) {
      if (this.completed.includes(item)) {

        this.completed = this.completed.filter(el => el !== item)

        if (!this.active.includes(item)) {
          this.active.push(item)
        }
      } else {
        this.completed.push(item)
        this.active = this.active.filter(el => el !== item)
      }
    },
    removeTodoByIndex(index) {
      if (index > -1 && index < this.items.length) {
        this.items.splice(index, 1)
        this.active.splice(index, 1)
        localStorage.setItem('todoItems', JSON.stringify(this.items, this.active))
      }
    },
    selectItem(item) {

      console.log("slice", this.items.slice(item))

    },
    loadTodos() {
      const savedAddItem = localStorage.getItem('todoItems')
      if (savedAddItem) this.items = JSON.parse(savedAddItem)

      const savedCompleted = localStorage.getItem('itemsCompleted')
      if (savedCompleted) this.completed = JSON.parse(savedCompleted) // تصحيح this.Completed
    },

    clearAllTodos() {
      this.items = []
      this.completed = []
      this.active = []
      localStorage.removeItem('todoItems')

    }
  },

})