<template>
	<component :is="tag" v-if="Object.keys(data).length" class="user-card">
		<img :src="data.avatar">
		<h3>{{ data.first_name }} {{ data.last_name }}</h3>
		<a :href="`mailto:${data.email}`">{{ data.email }}</a>
	</component>
</template>

<style scoped>
	.user-card {
		border: .1rem solid var(--color-pink);
		text-align: center;
		padding:.5rem .75rem;
		border-radius: .5rem;
		transition: .3s all ease-in-out;
		transform: scale(1, 1);
	}
	img {
		height: 8rem;
		width: 8rem;
		object-fit: cover;
		border-radius: 50px;
	}
	h3 {
		margin: .5rem 0;
	}

	a {
		color: var(--color-orange);
		transition: .3s all ease-in-out;
	}

	a:hover {
		color: var(--color-black);
	}

	.user-card:hover {
		transform: scale(1.05, 1.05);
		border-color: var(--color-orange);
		background: var(--color-light-pink);
	}
</style>

<script>
	export default {
		props: {
			data: {
				type: Object,
			},
			tag: {
				type: String,
				default: "div",
			}
		},
		data() {
			return {
			};
		},
		computed: {
		},
		watch: {
		},
		methods: {
		},
	}
</script>