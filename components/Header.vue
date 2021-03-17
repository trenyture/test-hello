<template>
	<header>
		<div class="wrapper">
			<h1>Hello Asso</h1>
			<nav>
				<ul>
					<li>
						<nuxt-link to="/">Accueil</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/users">Utilisateurs</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style scoped>
	header {
		background: var(--color-pink);
	}
	h1 {
		text-indent: -9999px;
		background: transparent url(~/assets/logo.svg) no-repeat;
		background-size: contain;
		background-position: center;
		display: inline-block;
		width: 15rem;
		height: 5rem;
		margin: .75rem 0;
		vertical-align: middle;
	}

	nav {
		display: inline-block;
		vertical-align: middle;
		width: calc(100% - 20rem);
		text-align: right;
	}

	nav ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	nav ul li {
		display: inline-block;
		margin-left: 1rem;
	}
	nav ul li a{
		display: inline-block;
		padding: .5rem .75rem;
		font-size: 1.4rem;
		text-decoration: none;
		color: var(--color-mandarine);
		transition: .3s all ease-in-out;
		border-bottom: .1rem solid transparent;
		outline: none; 
	}
	nav ul li a:hover, nav ul li a.nuxt-link-exact-active {
		color: var(--color-orange);
		border-bottom-color: var(--color-orange);
	}
</style>

<script></script>