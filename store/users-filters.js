export const state = () => ({
	lastName: null,
	firstName: null,
})

export const getters = {
	getLastName(state) {
		return state.lastName;
	},

	getFirstName(state) {
		return state.firstName;
	},
}

export const mutations = {
	setLastName(state, value) {
		state.lastName = value;
	},

	setFirstName(state, value) {
		state.firstName = value;
	},

	reset(state) {
		state.lastName = null;
		state.firstName = null;
	}
}
