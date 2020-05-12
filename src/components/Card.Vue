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
