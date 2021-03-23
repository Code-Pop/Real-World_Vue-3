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
      events: [  ],
      event: {}
  },
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    },
    SET_EVENTS(state, events){
      state.events = events
    },
    SET_EVENT(state,event) {
      state.event = event
    }
  },
  actions: {
    createEvent({commit}, event){
       return EventService.postEvent(event).then(()=>{  
            commit('ADD_EVENT', event) 
       }) 
      },
      fetchEvents({commit},{perPage,page}){ // commit=> context object
        EventService.getEvents(perPage,page)
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
      },
      fetchEvent({commit}, id){
        let event = this.getters.getEventById(id)
        if (event) {
          commit('SET_EVENT', event)
        } else  {
          EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT',response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
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
      return state.events.find(event=> event.id == id)
    },

  } // Getters sometimes are better than accessing directly the propert
  // In application
})
