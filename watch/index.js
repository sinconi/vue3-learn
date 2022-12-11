const app = Vue.createApp({
  data() {
    return {
      showAnswer: false,
      countDown: 5,
      timer: null //保存定時器，清除定時器用
    };
  },
  watch: {
    // 屬性變化 前／後 值
    // 監聽名字要跟監聽的屬性名字保持一致
    showAnswer(newVal, oldVal) {
      if (newVal) {
        console.log(newVal)
        this.countDown = 5
        if (this.timer) {
          clearInterval(this.timer)
          this.timer = null
        }
        this.timer = setInterval(() => {
          this.countDown -= 1
          if (this.countDown === 0) {
            this.showAnswer = false;
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }
  },
  computed: {
    label() {
      return this.showAnswer
        ? "隱藏" + this.countDown
        : "顯示"
    }
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer
    }
  },
});
app.mount("#app");