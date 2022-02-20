const css = require("../css/style.css");

let playerO = []; // jogadas do player O

let playerX = []; // jogadas do player X

let jogadasGanhadas = [

	[0, 1, 2],

	[3, 4, 5],

	[6, 7, 8],

	[0, 4, 8],

	[2, 4, 6],

	[0, 3, 6],

	[2, 5, 8],

	[1, 4, 7],

]; // jogadas para ganhar o jogo

let rodada = "O"; // rodada

const botoes = document.querySelectorAll(".boxBtn > .button > button");


document.getElementById("restart").addEventListener("click", function (e) {
	restart();
});


botoes.forEach(function (button, indice) {

	button.addEventListener("click", function (evento) {

		if (evento.target.value.length > 0) {

			console.log("Negado");

		} else {


			// rodada === "O"? playerO.push(indice): playerX.push(indice);

			if (rodada === "O") {
				playerO.push(indice);
				button.value = rodada;
				button.innerText = rodada;
				win(playerO, "O");
				rodada === "O"? rodada = "X": rodada = "O";
			} else {
				playerX.push(indice);
				button.value = rodada;
				button.innerText = rodada;
				win(playerX, "X");
				rodada === "O"? rodada = "X": rodada = "O";
			}

		}

	});

});



function win (array, player) {
	for (let i = 0, c = 0; i < jogadasGanhadas.length; i++) {
		array.forEach(function (elements) {
			if (jogadasGanhadas[i].includes(elements)) {
				c += 1;
			}
		});

		if (c === 3) {
			alert(`${player} ganhou`);

			botoes.forEach((btn) => {
				btn.classList.add("fim");
			});


			break;
		}

		c = 0;
	}
}


function restart () {
	botoes.forEach((elements) => {
		elements.classList.remove("fim");
		elements.innerText = "";
		elements.value = "";
	});

	rodada = "O";

	playerO.splice(0);
	playerX.splice(0);


	console.log(playerX);
	console.log("====================");
	console.log(playerO);


}