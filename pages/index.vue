<template>
	<main class="wrapper">
		<h2>Test de Simon Trichereau</h2>
		<h3>Énoncé</h3>
		<p>L'objectif est de créer une liste d'utilisateurs filtrable. Cette liste affiche des utilisateurs issus d'une API (https://reqres.in/api/users). Un champ texte permet de filtrer l'affichage des utilisateurs via le nom ou prénom (au choix). Dès que je tape des caractères dans le champ, la liste se filtre automatiquement. Un bouton me permet également de vider le champ.</p>
		<h3>Attentes</h3>
		<p>L'attention sera principalement portée sur la qualité du code et sur les points suivants :</p>
		<ul>
			<li>Conformité fonctionne</li>
			<li>Conception, organisation et architecture du code.</li>
			<li>Expérience utilisateur et style (évidemment, il n’y a pas de jugement sur la "beauté").</li>
			<li>Accessibilité et sémantique.</li>
			<li>Explication du code et justification des choix techniques.</li>
		</ul>
		<p>En cas de manque de temps, il est important de ne pas rendre un brouillon mais a minima une version dégradée fonctionnelle (exemple : la liste sans le filtrage).</p>
		<h3>Pour terminer</h3>
		<p>En cas de blocage, il est important de demander de l'aide. Le but du test technique n'est pas de pose une colle mais d'avoir un aperçu du travail réalisable dans des conditions réelles.</p>
		<p>Le seul choix technique imposé est d'utiliser Vue.js ou Nuxt.js. Aucun autre framework (JavaScript ou CSS) n’est à utiliser.</p>
		<p>Le ou la candidat(e) dispose d’une semaine pour réaliser ce test. Le résultat du test est à envoyer au moins 2 jours avant l’entretien. Idéalement, le code est disponible sur Github, GitL</p>
		<p class="link">
			<nuxt-link to="/users">Voir le travail</nuxt-link>
		</p>
	</main>
</template>

<script>
export default {}
</script>

<style>
	h2 {
		margin-bottom: 2rem;
	}
	h3 {
		margin: 2rem 0 1rem 0;
	}
	p {
		margin: .5rem 0;
	}

	p.link { margin-top:5rem; text-align: center }
	p.link a { color: var(--color-black); }
	p.link a:hover { color: var(--color-orange); }
</style>
