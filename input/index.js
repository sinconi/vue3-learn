const app = Vue.createApp({
  data() {
    return {
      username: ''
    };
  },
  watch: {

  },
  computed: {

  },
  methods: {
    handleInput(e) {
      this.username = e.target.value
    },
    clear() {
      this.username = ""
    }
  },
});
app.mount("#app");