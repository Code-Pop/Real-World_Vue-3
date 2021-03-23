<template>
  <h1>Create an Event {{ user.name }}</h1>
        <form @submit.prevent="createEvent">
          <label>Select a category</label>
          <select v-model="event.category">
            <option v-for="cat in categories" :key="cat">{{ cat }}</option>
          </select>
          <h3>Name & describe your event</h3>
          <div class="field">
            <label>Title</label>
            <input v-model="event.title" type="text" placeholder="Add an event title"/>
          </div>
          <div class="field">
            <label>Description</label>
            <input v-model="event.description" type="text" placeholder="Add a description"/>
          </div>
          <h3>Where is your event?</h3>
          <div class="field">
            <label>Location</label>
            <input v-model="event.location" type="text" placeholder="Add a location"/>
          </div>
          <h3>When is your event?</h3>
          <div class="field">
            <label>Date</label>
            <!-- IN THE EXAMPLE they used a datepicker type. But it is not compatibçe
            with vue3. SO i decided to just use another text input to make it easear
            to follow the example -->
            <input v-model="event.date" type="text"  placeholder="Select a date"/>
          </div>
          <div class="field">
            <label>Select a time</label>
            <select v-model="event.time">
              <option v-for="time in times" :key="time">{{ time }}</option>
            </select>
          </div>
          <input type="submit" class="button -fill-gradient" value="Submit"/>
        </form>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

/*
  <!-- <p> This is event creation 800831S</p>

  <ul>
        <li v-for="cat in categories" :key="cat">{{ cat }}</li>
  </ul>
  <p> there are {{categoryLen}} categories </p>
  <!-- <p> {{getEvent(1)}} </p>  this is WHAT WAs before mapping getEvent using mapGetters-->
  <!-- <p> {{getEventById(1)}} </p>

    REMOVED  from template
   -->
   */
export default {
    computed:{
        categoryLen(){
            return this.$store.getters.categoryLen
        },
        // getEvent(){
        //     return this.$store.getters.getEventById
        // },
        // We will use the mapgetters instead of the above! (easier simpler beutifuller)
        ...mapGetters(['getEventById']),
        ...mapState(['user','categories']) // Maps computed propreties to state
        // The ... is object spread operator (JS sintax)
        // Same as mapState({user:'user', categories: 'categories'})
        //If you want different names could also do:
        //  mapState({
        //   userName: state=> state.user.name,
        //   userId: state => state.user.id 
        // })
        //
        //
    },
    data() {
        const times = [];
        for (let i = 1; i<=24; i++){
            times.push(i+':00')
        }
        return {
            times,
            event: this.createFreshEventObject(),
        }
        
    },
    methods:{
        createEvent() {
            this.$store.dispatch('createEvent', this.event)
            .then(() => {
                // this.$router.push({
                //     name: 'EventDetails',
                //     params: {id:this.event.id}
                // });
                this.event = this.createFreshEventObject()
            })
            .catch(() => {
                console.log('There was a problem creating your event')
            })
        },
        createFreshEventObject(){
            const user = this.$store.state.user
            const id = Math.floor(Math.random() * 100000000000000000)

            return {
                id: id,
                user: user,
                category: '',
                organizer: user,
                title: 'Default Tile',
                description: '',
                location: '',
                date: '',
                time: '',
                // atendees: [],
            }
        }
    }
}
</script>

<style scoped>
.field {
    margin-bottom: 24px;
}
</style> 