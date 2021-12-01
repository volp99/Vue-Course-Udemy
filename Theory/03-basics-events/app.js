const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			counterArg: 0,
			name: '',
			confirmedName: '',
		};
	},
	methods: {
		confirmInput() {
			this.confirmedName = this.name
		},
		setName(event, lastName) {
			this.name = event.target.value + ' ' + lastName;
		},
		add() {
			this.counter++
		},
		reduce() {
			this.counter--
		},
		addArg(num) {
			this.counterArg = this.counterArg + num
		},
		reduceArg(num) {
			this.counterArg = this.counterArg - num
		},
	},
});

app.mount('#events');
