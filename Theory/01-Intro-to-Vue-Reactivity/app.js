const app = Vue.createApp({
  data() {
    return {
      /* Vue keep track of the data define here and turn these data in a reactive data object
       * using a JavaScript feature called Proxy.
       * */
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// Create a second App

const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

// Understanding Proxy.

const data = {
  message: "Hello",
  longMessage: "Hello World",
};

const handler = {
  set(target, key, value) {
    // Tracking one property (message property)
    if (key === "message") {
      // Updating property longMessage when message property changes
      target.longMessage = value + " World";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!";

console.log(proxy.longMessage); // longMessage is updated when we set message

/* That is what Vue does under the hood; it keeps track of all your data properties here
 * and whenever such a property changes, it updates the part of your app where the property
 * was used.
 * */
