const app = Vue.createApp({
	data() {
		return {
			name: '',
			nameEnter: '',
		}
	},
	methods: {
		alert() {
			window.alert('This is a alert')
		},
		userInput(event) {
			this.name = event.target.value;
		},
		userInputEnter(event) {
			this.nameEnter = event.target.value
		},
	},
})
app.mount('#assignment')