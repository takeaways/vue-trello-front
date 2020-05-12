<template>
  <div>
    <div v-if="loading">Loaing card ...</div>
    <div else>
      Card
      {{ cid }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0,
      loading: false
    };
  },
  watch: {
    $route: {
      handler: "fetchData",
      immediate: true
    }
  },
  created() {},
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.cid = this.$route.params.cid;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>
