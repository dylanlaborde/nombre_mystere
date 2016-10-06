$(document).ready(main);
// Fonction principale
function main(){
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	// va stocker le nombre "aléatoire" mystère.
	// Récupérer le contenu de mon input
	// Créer la fonction 'clickValider'
	// == Fonction clickValider == 
	function clickValider(){
	
	
	var valinput3 =$("#input3").val();
	var tentatives = $('#tent').text();
	var Over = "0";





	// var dim = tentatives--;
	//  var incrementation = "tentatives : " + (dim);
	var rand = Math.round(Math.random()* 9 + 1);
	console.log(tentatives);
	// Comparer ce contenu au nombre mystère.
		//Si le contenu est égal : 
		if (valinput3 == rand) {
		//- afficher une alert Gagné
		 	alert("Gagné")
		//- démarrer une nouvelle partie
			// Sinon s'il est supérieur
		 }else if(valinput3 > rand ){
			// Afficher une alert Perdu, votre nombre est trop grand
			alert("Perdu votre nombre est trop grand")
			$("#tent").text(--tentatives)
			// Sinon s'il est inférieur
		}else if (valinput3 < rand) {
			// Afficher une alert Perdu, votre nombre est trop petit
			alert("Perdu, votre nombre est trop petit")
			$("#tent").text(--tentatives)
		}//else if (tentatives <= 1) {
		// 	alert("Game Over")
		// };


		
	};
	// /Fin == Fonction clickValider == 
		$("#val3").click(function(){
			var tentatives = $('#tent').text();
			clickValider();
			//$("#tent").text(--tentatives)

		});

}
	 
			// Dans les cas où c'est perdu, diminuer le nombre de tentatives
			// Actualiser la zone html affichant le nombre de tentatives
			/* 
				Si le nb de tentatives est égal à "0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/			
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	/*







		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/