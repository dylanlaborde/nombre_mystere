$(document).ready(main);

// Fonction principale
function main(){
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
// Récupérer le contenu de mon input
	var  valInput1 =$("#input1").val();
	console.log(valInput1);
// Comparer ce contenu à un nombre que vous choisissez
	if (valInput1 === "7") {
		alert("Gagné");
	}else{
		alert("Perdu")
	};
// Si le contenu est égal
// Afficher une alert Gagné
			// Sinon,
			// Afficher une alert Perdu

	// /Fin == Fonction clickValider == 
};
	$("#val").click(clickValider);
	console.log("click");
// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
// Et qui appelle la fonction 'clickValider' défini ci-dessus

};