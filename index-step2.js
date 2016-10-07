*$(document).ready(pied);
function pied(){
	function clickValider(){
		var valinput=$("#input2").val()
		var random=Math.round(Math.random() * 9 ) +1
		console.log(random);
		if (valinput == random) {
			alert("Gagné");
		}else if(valinput > random){
			alert("Perdu votre nombre est trop grand")
		}else if(valinput < random){
			alert("Perdu votre nombre est trop petit")
		};

	};
	$("#val2").click(clickValider);	
};











