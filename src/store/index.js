import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'

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
      events: [  ]
  },
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    },
  },
  actions: {
    createEvent({commit}, event){
       return EventService.postEvent(event).then(()=>{  // Acctually posts the event
            commit('ADD_EVENT', event) // Then commits the created event locallu
       }) 
        // The commit above is not even necessary beacause we GET the events from the server
        // So there is really NO NEED for us to manually put it in the store
      }
  },
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
