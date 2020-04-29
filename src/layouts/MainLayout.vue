<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="bg-indigo-9">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          My Aplication
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <q-item clicklable active-class="active" exact v-ripple to="/utama">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            Dashboard
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple to="/Input">
          <q-item-section avatar>
            <q-icon name="input" />
          </q-item-section>
          <q-item-section>
            Input Barang
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple to="/stok">
          <q-item-section avatar>
            <q-icon name="agenda" />
          </q-item-section>
          <q-item-section>
            Stok Barang
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple to="/transaksi">
          <q-item-section avatar>
            <q-icon name="transaksi" />
          </q-item-section>
          <q-item-section>
            transaksi
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple to="/pengiriman">
          <q-item-section avatar>
            <q-icon name="pengiriman" />
          </q-item-section>
          <q-item-section>
            pengiriman
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
