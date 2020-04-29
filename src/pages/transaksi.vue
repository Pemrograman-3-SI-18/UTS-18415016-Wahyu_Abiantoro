<template>
    <q-page>
        <div>Kode Belanja</div>
        <q-input>kode belanja</q-input><template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Nama Barang" />

      <q-input filled v-model="text" label="Harga Barang" />

      <q-input outlined v-model="text" label="Total Harga" />

      <q-input standout v-model="text" label="Bayar" />

      <q-btn to="utama" flat>Simpan</q-btn>
        <q-btn to="utama" flat>Batal</q-btn>

    </div>
  </div>
</template>
    </q-page>
</template>