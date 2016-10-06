$(document).ready(main);
// Fonction principale
var globale = {	
	valinput3:$("#input3").val(),
	tentatives: 3,
	rand: Math.round(Math.random()* 9 + 1)
	};
function main(){
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	// va stocker le nombre "aléatoire" mystère.
	// Récupérer le contenu de mon input
	
	// Créer la fonction 'clickValider'
	// == Fonction clickValider == 
	function clickValider(){
		//console.log("test");
	// Comparer ce contenu au nombre mystère.
		// if (rand == valinput3) {
		// 	alert("Gagné")
		// }
		console.log(valinput3);
		//console.log(globale["rand"]);
	};
		$("#val3").click(clickValider);

}
	 
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
				*/
			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand
			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			// Dans les cas où c'est perdu, diminuer le nombre de tentatives
			// Actualiser la zone html affichant le nombre de tentatives
			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/			
	// /Fin == Fonction clickValider == 
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/