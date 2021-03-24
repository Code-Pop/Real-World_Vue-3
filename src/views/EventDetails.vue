<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  props: ['id'],
  created() {
    this.fetchEvent(this.id)
  },
  computed: mapState({
    event: state => state.event.event
  }),
  methods: mapActions('event',['fetchEvent']) //namespace,[actions to map]

}
</script>
