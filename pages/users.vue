<template>
	<main class="wrapper">
		<h2>Liste des utilisateurs</h2>
		<template v-if="isReady">
			<label>
				Prénom
				<input type="text" v-model="filterFirstName">
			</label>
			<label>
				Nom
				<input type="text" v-model="filterLastName">
			</label>
			<button @click="resetFilters">Réinitialiser</button>
			<ul>
				<UserCard tag="li" v-for="user in filteredUsers" :key="`user-${user.id}`" :data="user" />
			</ul>
		</template>
		<div class="loader" v-else>
			<img src="~/assets/loader.png">
			<p>Chargement des données ...</p>
		</div>
	</main>

</template>

<style scoped>
	h2 {
		margin-bottom: 2rem;
	}
	.loader {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		padding: 5rem;
	}
	.loader img {
		width: 5rem;
		height: auto;
		animation: rotation 1s infinite linear;
	}

	label {
		display: inline-block;
		width: 15rem;
		margin-right: 1rem;
		color: var(--color-mandarine);
	}

	label input {
		border: .1rem solid var(--color-black);
		border-radius: .5rem;
		outline: none;
		width: 100%;
		height: 1rem;
		padding: 1rem .5rem;
		transition: .3s all ease-in-out;
	}

	label input:focus {
		border-color: var(--color-orange);
	}

	button {
		background: var(--color-mandarine);
		transition: .3s all ease-in-out;
		color: var(--color-white);
		border: .1rem solid var(--color-mandarine);
		height: 2rem;
		width: 10rem;
		cursor: pointer;
		border-radius: .5rem;
	}

	button:hover {
		background: var(--color-black);
		color: var(--color-white);
		border-color: var(--color-orange);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 2rem 0;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 2rem;
	}

	@media all and (min-width: 500px) {
		ul {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media all and (min-width: 800px) {
		ul {
			grid-template-columns: repeat(4, 1fr);
		}
	}

</style>

<script>
	import { mapGetters, mapMutations } from "vuex"

	export default {
		data() {
			return {
				users: null,
			};
		},
		computed: {
			filterLastName: {
				...mapGetters('users-filters', { get: 'getLastName' }),
				...mapMutations('users-filters', { set: 'setLastName' }),
			},
			filterFirstName: {
				...mapGetters('users-filters', { get: 'getFirstName' }),
				...mapMutations('users-filters', { set: 'setFirstName' }),
			},
			isReady() {
				return this.users !== null;
			},
			filteredUsers() {
				return this.users.filter(u => (this.filterLastName === null || u.last_name.includes(this.filterLastName)) && (this.filterFirstName === null || u.first_name.includes(this.filterFirstName)))
			},
		},
		watch: {
			isReady: {
				immediate: true,
				handler(n, o) {
					this.loadUsers();
				}
			}
		},
		methods: {
			...mapMutations('users-filters', { resetFilters: 'reset' }),
			async loadUsers() {
				let resp = await this.$axios.$get('https://reqres.in/api/users?per_page=100');
				this.users = resp.data
			}
		},
	}
</script>