<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading .....</div>
      <div v-else>Api Result {{ apiRes }}</div>
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      error: "",
      loading: false,
      apiRes: ""
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get("http://localhost:3000/health")
        .then(res => {
          this.apiRes = res.data;
        })
        .catch(res => {
          this.error = res.error;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>
