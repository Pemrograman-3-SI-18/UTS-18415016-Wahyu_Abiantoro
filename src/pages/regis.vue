<template>
  <q-page class="bg-purple">
    <div class="fixed-center">
    <q-card class="my-card bg-green text-white align-fixed-center">
      <q-card-section>
        <div class=""><q-icon name="warning" class="text-red" style="font-size: 4rem;" /></div>
        <div><q-input v-model="text" label="Username" /></div>
        <div><q-input v-model="text" label="Password" /></div>
        <div><q-input v-model="text" label="Email" /></div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn to="login" flat>submit</q-btn>
        <q-btn to="login" flat>back</q-btn>
      </q-card-actions>
    </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  
}
</script>