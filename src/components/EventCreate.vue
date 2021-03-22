<template>
  <h1>Create an Event {{ user.name }}</h1>
  <p> This is event creation 800831S</p>

  <ul>
        <li v-for="cat in categories" :key="cat">{{ cat }}</li>
  </ul>
  <p> there are {{categoryLen}} categories </p>
  <!-- <p> {{getEvent(1)}} </p>  this is WHAT WAs before mapping getEvent using mapGetters-->
  <p> {{getEventById(1)}} </p>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

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
    }
}
</script>

<style>

</style>