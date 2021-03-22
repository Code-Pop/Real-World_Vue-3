import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {id: 'abc123', name: 'Bro Broski'},
    categories: [
        'Sustainability',
        'Commerce',
        'Role Playing',
        'Scuba Diving',
        'Soccer'
      ],
      todos: [
        {id:1, text:"...", done:true},
        {id:1, text:"...", done:true},
        {id:1, text:"...", done:false}
      ],
      events: [
        {id: 1, title:'...', organizer:'...'},
        {id: 2, title:'...', organizer:'...'},
        {id: 3, title:'...', organizer:'...'},
        {id: 4, title:'...', organizer:'...'},
      ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    categoryLen: state=> {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo=>todo.done)
    },
    activeTodosCount:(state) => {
      return state.todos.filter(todo=>!todo.done)
    },
    activeTodosCountDoubleGetterexample: (state, getters) =>{ 
      // This is just an example of using a getter inside a getter
      return state.todos.length - getters.doneTodos.length
    },
    getEventById: (state) => (id) => {// Dynamic Getter example
      return state.events.find(event=> event.id === id)
    },

  } // Getters sometimes are better than accessing directly the propert
  // In application
})
