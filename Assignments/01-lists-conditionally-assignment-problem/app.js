const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskListIsVisible: true,
      enteredTaskValue: "",
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = "";
    },
    toggleTask() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});
app.mount("#assignment");
