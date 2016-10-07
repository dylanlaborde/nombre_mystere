$(document).ready(main);
function main(){
	var rand = Math.round(Math.random()* 9 + 1);
	var tentatives =$('#tent').text();
	function clickValider(){
		var valinput3 =$("#input3").val();
		var Over= true;
		if (valinput3 == rand) {
			alert("Gagné")
			restart();
		}else if(valinput3 > rand ){
			alert("Perdu votre nombre est trop grand")
			$("#tent").text(--tentatives)
			FinduGame();
		}else if (valinput3 < rand) {
			alert("Perdu, votre nombre est trop petit")
			$("#tent").text(--tentatives)
			FinduGame()
		}
		function FinduGame(){
			if (tentatives === 0) {
				Over = false;

			}if (Over == false) {
				
				alert("Game over");
				restart();
			};
		};
		function restart(){
			rand = Math.round(Math.random()* 9 + 1);
			tentatives = 3;
			var ResetTent =$('#tent').text(+tentatives);
		};
};
$("#val3").click(function(){
	var tentatives =$("tent").text();
	clickValider();
});
$("#reset").click(function(){
		rand = Math.round(Math.random()* 9 + 1);
		console.log(rand);
		tentatives = 3;
		console.log(tentatives);
		var ResetTent =$('#tent').text(+tentatives);
		console.log(ResetTent);
	})
};	


		// Concernant la 'refactorisation' : 
		// - créer une fonction 'demarrerPartie'
		// - créer une fonction 'partieGagnee'
		// - créer une fonction 'partiePerdue'
		
