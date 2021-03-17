<template>
	<div>
		<Header />
		<Nuxt />
		<Footer />
	</div>
</template>

<style>

:root{
	--color-white: #F2F2F2;
	--color-black: #0D0D0D;
	--color-orange: #F25922;
	--color-mandarine: #F27127;
	--color-pink: #F29979;
	--color-light-pink: #FBC4B1;
}

html {
	font-family:
		'Source Sans Pro',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		'Helvetica Neue',
		Arial,
		sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	background: var(--color-white);
	color: var(--color-black);
}

main {
	box-sizing: border-box;
	min-height: calc(100vh - 10.2rem);
	padding-top: 2rem;
	padding-bottom: 2rem;
}

.wrapper {
	width: 100%;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 20px;
	padding-right: 20px;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}

.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}

.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}

@keyframes rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
}
</style>
