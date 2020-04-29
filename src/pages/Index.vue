<template>
  <q-page class="row">
    <q-card class="my-card">
      <img src="statics/hoodie beauty1.jpg" >

      <q-card-section>
        <div class="text-h6">Jaket Hoodie</div>
        <div class="text-subtitle2">180 000</div>
        <div><q-btn>Beli Sekarang</q-btn></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <img src="statics/waw2.jpg" >

      <q-card-section>
        <div class="text-h6">Jaket Hoodie</div>
        <div class="text-subtitle2">180 000</div>
        <div><q-btn>Beli Sekarang</q-btn></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
        <q-card class="my-card">
      <img src="statics/waw3.jpg" >

      <q-card-section>
        <div class="text-h6">Jaket Hoodie</div>
        <div class="text-subtitle2">180 000</div>
        <div><q-btn>Beli Sekarang</q-btn></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/CompositionComponent.vue'
import { Todo, Meta } from 'components/models'

export default {
  name: 'PageIndex',
  components: { ExampleComponent },
  data () {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]
    const meta: Meta = {
      totalCount: 1200
    }
    return { todos, meta }
  }
}
</script>
