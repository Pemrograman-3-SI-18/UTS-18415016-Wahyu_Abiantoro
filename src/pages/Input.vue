<template>
  <q-page class="bg-purple">
    <div>
    <q-card class="my-card bg-green text-white align-fixed-center">
      <q-card-section>
        <q-input
        @input="val => { files = val }"
        multiple
        filled
        type="file"
        hint="Native file (multiple)"
      />
        <div><q-input v-model="text" label="Nama Barang" /></div>
        <div><q-input v-model="text" label="Harga Barang" /></div>
       
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn to="utama" flat>submit</q-btn>
        <q-btn to="utama" flat>back</q-btn>
      </q-card-actions>
    </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  
}
</script>