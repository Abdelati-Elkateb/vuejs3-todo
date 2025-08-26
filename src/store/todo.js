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
    totalIndex: (state) => state.items.length,
    // getId:(state) => state.id  + 1
  },

  actions: {
    addItem(item) {
      this.items.push(item)
      this.active.push(item)
      console.log('list of item:', item)
      localStorage.setItem('todoItems', JSON.stringify(this.items))
    },
    toggleState(item) {
      if (this.completed.includes(item)) {
        // لو ايتم موحودة في كومليتد هذا فهمته 


        
        this.completed = this.completed.filter(el => el !== item)
        //  مامعني هذا 
        if (!this.active.includes(item)) {
          // لو هذا مش موجود في اكتف
          this.active.push(item)
          // ضيف ايتم علي اكتف
        }
      } else {
        this.completed.push(item)
        this.active = this.active.filter(el => el !== item)
      }
      console.log('Before:', this.active, this.completed)
      console.log('After:', this.active, this.completed)

    },
    removeTodoByIndex(index) {
      if (index > -1 && index < this.items.length) {
        this.items.splice(index, 1)
        localStorage.setItem('todoItems', JSON.stringify(this.items))
      }
    },
    loadTodos() {
      const savedAddItem = localStorage.getItem('todoItems')
      if (savedAddItem) this.items = JSON.parse(savedAddItem)

      const savedCompleted = localStorage.getItem('itemsCompleted')
      if (savedCompleted) this.completed = JSON.parse(savedCompleted) // تصحيح this.Completed
    },

    clearAllTodos() {
      this.items = []
      localStorage.removeItem('todoItems')
      itemTodo = false

    }
  },

})