<template>
    <q-page>
        <q-select v-model="model" :options="options" label="Pengiriman" />
        <q-btn to="utama" flat>Simpan</q-btn>
        <q-btn to="utama" flat>Batal</q-btn>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      model: null,
      options: [
         'Wahana', 'JNT', 'JNE'
      ]
    }
  }
}
</script>
