<template>

	<p>Current count of state: {{ count }}</p>
	<button @click="incrementCount">Increase Count State</button>

	<h1>Create Event, {{ user.name }}</h1>
	<p>This event was created by {{ user.name}} </p>
	
	
	<p>{{ getEventById(2) }}</p>
	<p>The length of Categories is {{ catLength }}</p>
	<ul>
		<li v-for="cat in categories" :key="cat">{{ cat }}</li>
	</ul>

	<p>There are {{ doneTodos.length }} done todos.</p>
	<p>There are {{ activeTodosCount }} todos left to complete.</p>
	<ul>
		<li v-for="todo in todos" :key="todo">{{ todo }}</li>
	</ul>

	<p>There are {{events.length}} events!</p>
	<ul>
		<li v-for="event in events" :key="event">{{ event }}</li>
	</ul>

	<p>There is 1 event that has the id of 1</p>
	<ul>
		<li>{{getEventById(1)}}</li>
	</ul>


</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	
	export default {

		// FIRST KNOWN WAY FOR COMPUTED VALUES!

		// computed: {
		// 	username() {
		// 		return this.$store.state.user.name
		// 	},
		// 	userID(){
		// 		return this.$store.state.user.id
		// 	},
		// }

		// USING MAPSTATE({}) to reduce functions!

		// computed: mapState({
		// 	username: state => state.user.name,
		// 	userID: state => state.user.id,
		// 	categories: state => state.categories
		// })

		// Using mapstate({}) with abbreviations for state => state.user etc, the abbreviations accessing top level values.

		// computed: mapState({
		// 	user: 'user',
		// 	categories: 'categories'
		// })

		// we can also Name our mapState like user and categories, or not like mapState(['user', 'categories']) this will do the same
		// mapState(['user','categories'])

		//What if we wanted to have additional computed properties and not just the mapState object
		//computed: mapState({
			//this takes up the whole computed property!
		//})

		//We can get around computed getting taken up by mapState({}) by spreading mapState!
		// computed: {
			// localComputation() {
				//return someValue;
		//	},
		// ...mapState(['user', 'categories'])
		//}

		computed: {
			catLength(){
				//Heres one way to access a value, but its only going to work within this component's computed property,
				
					//return this.$store.categories.length

				//if we wanted to access this value from anywhere in the application we could use a getter
						return this.$store.getters.catLength
			},
			...mapState(['user', 'categories', 'todos', 'events', 'count']),
			...mapGetters(['doneTodos', 'catLength', 'activeTodosCount', 'getEventById'])
		},
		methods: {
			incrementCount(){
				this.$store.commit('INCREMENT_COUNT')
			}
		}
	}
</script>