$(document).ready(main);
function main(){
	var valprompt = prompt("choisiser un nombre de tentative:","");
	var tentative = $("#insertent").text();
	var rand = Math.round(Math.random()* 100 + 1);

	function clickValider(){
		console.log(rand);


	};





	$("#val4").click(function(){
		clickValider();
	});
};

