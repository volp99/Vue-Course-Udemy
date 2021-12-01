const app = Vue.createApp({
	data() {
		return {
			name: 'Stefano',
			age: 22,
			image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Ve8s2wOzcP0qpU37-wQKlAHaEK%26pid%3DApi&f=1',
		}
	},
	methods: {
		favouriteNumber() {
			const randomNumber = Math.random()
			return randomNumber
		},
	},

})
app.mount('#assignment')