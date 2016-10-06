$(document).ready(pied);
// Fonction principale
function pied(){
// Créer la fonction 'clickValider'
	function clickValider(){
// Récupérer le contenu de mon input
		var valinput=$("#input2").val()
// Stocker un nombre ENTIER généré "aléatoirement"
		var random=Math.round(Math.random() * 9 ) +1
		console.log(random);
// Comparer ce contenu à ce nombre
// Si le contenu est égal
		// Afficher une alert Gagné
		if (valinput == random) {
			alert("Gagné");
// Sinon s'il est supérieur
		// Afficher une alert Perdu, votre nombre est trop grand			
		}else if(valinput > random){
			alert("Perdu votre nombre est trop grand")
// Sinon s'il est inférieur
// Afficher une alert Perdu, votre nombre est trop petit
		}else if(valinput < random){
			alert("Perdu votre nombre est trop petit")

		};
// /Fin == Fonction clickValider == 
	};
// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus

	$("#val2").click(clickValider);
	
};








			
					
			
