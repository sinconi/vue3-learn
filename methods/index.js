const app = Vue.createApp({
  data() {
    return {
      showAnswer: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer
    }
  },
});
app.mount("#app");