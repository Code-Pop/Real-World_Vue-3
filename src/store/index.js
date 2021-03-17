import { createStore } from 'vuex'

export default createStore({
  state: {
		count: 0,
		user: { id: 'abc123', name: 'Adam Jahr'},
		categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
		todos: [
			{ id: 1, text: '...', done: true },
			{ id: 2, text: '...', done: false },
			{ id: 3, text: '...', done: true },
			{ id: 4, text: '...', done: false }
		],
		events: [
			{ id: 1, title: '...', organizer: '...' },
			{ id: 2, title: '...', organizer: '...' },
			{ id: 3, title: '...', organizer: '...' },
			{ id: 4, title: '...', organizer: '...' },
		]
	},
  mutations: {
		INCREMENT_COUNT(state){
			state.count += 1
		}
	},
  actions: {},
  modules: {},
	getters: {
		catLength: state => {
			return state.categories.length
		},
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		// here is an example of passing a getter to a getter, just pass the entire getters object as a parameter!
		activeTodosCount: (state, getters) => {
			return state.todos.length - getters.doneTodos.length

			//Or we could do this, if we didnt pass in the getters parameter
			// return state.todos.filter(todo => !todo.done).length
		},
		getEventById: state => id => {
			return state.events.find(event => event.id === id)
		}
		// The above is the same as
	
		// getEventsById: function (state) {
		// 	return function (id) {
		// 		return state.events.find(event => event.id === id)
		// 	}
		//}
	}
})
