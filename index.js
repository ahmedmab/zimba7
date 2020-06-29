const zimba7 = ["<i class=\"fa fa-hand-paper-o\" aria-hidden=\"true\"></i>",
 "<i class=\"fa fa-hand-rock-o\" aria-hidden=\"true\"></i>", 
 "<i class=\"fa fa-hand-scissors-o\" aria-hidden=\"true\"></i>"];
let paperWin = "<i class=\"fa fa-hand-rock-o\" aria-hidden=\"true\"></i>";
let rockWin = "<i class=\"fa fa-hand-scissors-o\" aria-hidden=\"true\"></i>";
let scissorWin = "<i class=\"fa fa-hand-paper-o\" aria-hidden=\"true\"></i>";

let paper = document.querySelector('#paper');
let rock = document.querySelector('#rock');
let scissor = document.querySelector('#scissor');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let scoreP = [];
let scoreC = [];
/*--------------declaration des fonctions--------*/

let affichePaper = function () {
	let random = zimba7[Math.floor(Math.random()*3)];
	let newResult = document.createElement('p');
	let newDefi = document.createElement('p');
	if (random == zimba7[0]) 
		{newResult.innerHTML = zimba7[0] + " Egalité";
	newDefi.innerHTML = random + " Egalité";} 
	else if (random == paperWin) 
		{newResult.innerHTML = zimba7[0] + " Gagné";
	newDefi.innerHTML = random + " Perdu";
	scoreP.push(1);
	playerScore.innerHTML = scoreP.length;
	}
	else{newResult.innerHTML = zimba7[0] + " Perdu";
	newDefi.innerHTML = random + " Gagné";
	scoreC.push(1);
	computerScore.innerHTML = scoreC.length;

	}
	document.querySelector('#player').appendChild(newResult);
	document.querySelector('#computer').appendChild(newDefi);
}; 
let afficheRock = function () {
	let random = zimba7[Math.floor(Math.random()*3)];
	let newResult = document.createElement('p');
	let newDefi = document.createElement('p');
	if (random == zimba7[1]) 
		{newResult.innerHTML = zimba7[1] + " Egalité";
	newDefi.innerHTML = random + " Egalité";} 
	else if (random == rockWin) 
		{newResult.innerHTML = zimba7[1] + " Gagné";
	newDefi.innerHTML = random + " Perdu";
	scoreP.push(1);
	playerScore.innerHTML = scoreP.length;
	}
	else{newResult.innerHTML = zimba7[1] + " Perdu";
	newDefi.innerHTML = random + " Gagné";
	scoreC.push(1);
	computerScore.innerHTML = scoreC.length;
	}
	document.querySelector('#player').appendChild(newResult);
	document.querySelector('#computer').appendChild(newDefi);
};
let afficheScissor = function () {
	let random = zimba7[Math.floor(Math.random()*3)];
	let newResult = document.createElement('p');
	let newDefi = document.createElement('p');
	if (random == zimba7[2]) 
		{newResult.innerHTML = zimba7[2] + " Egalité";
	newDefi.innerHTML = random + " Egalité";} 
	else if (random == scissorWin) 
		{newResult.innerHTML = zimba7[2] + " Gagné";
	newDefi.innerHTML = random + " Perdu";
	scoreP.push(1);
	playerScore.innerHTML = scoreP.length;
	}
	else{newResult.innerHTML = zimba7[2] + " Perdu";
	newDefi.innerHTML = random + " Gagné";
	scoreC.push(1);
	computerScore.innerHTML = scoreC.length;
	}
	document.querySelector('#player').appendChild(newResult);
	document.querySelector('#computer').appendChild(newDefi);
};

/*----*/

paper.addEventListener('click',affichePaper);
rock.addEventListener('click',afficheRock);
scissor.addEventListener('click',afficheScissor);
