const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);

      // set the input field empty after you add the element
      this.enteredGoalValue = "";
    },
    removeGoal(idx) {
      // find the element of this index and remove it from the array
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
