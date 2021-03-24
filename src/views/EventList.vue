<template>
  <h1>Events for {{user.user.name}}</h1>
  <div class="events">
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page!=1">
      <router-link :to="{name:'EventList',query: {page: page-1}}" rel="prev">
        Previous Page 
      </router-link> 
    </template>
    <router-link :to="{name:'EventList',query: {page: page+1}}" rel="next">
      Next Page 
    </router-link>
    <!-- You could also use this: 
    <a :href="$router.resolve({name:'EventList',query: {page: page-1}}).href" >Previous Page</a>  -->

  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import {mapState} from 'vuex'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('event/fetchEvents',{
      perPage:4,
      page: this.page,
    })
  },
  computed:{ page(){
    return parseInt(this.$route.query.page) || 1
  },
  ...mapState(['event', 'user'])
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
