//coder la sortie de la boucle si le mot est trouvé


var word=["b","i","e","n","v","e","n","u","e"];
var wordhide=["b","*","*","*","*","*","*","*","e"];
console.log(wordhide);

function search(w){
	if(word!=w){
		for(var j=0; j<10;j++){
			j;
			var askletter= prompt("Find a letter !");
			for(i=0; i<word.length; i++){
				if(word[i]==askletter){
					w.splice(word.indexOf(word[i]),1,askletter);
					w.splice(word.indexOf(word[i],i),1,askletter);
				}	
			}
		console.log(w);
			// if(w=!word){
			// 	console.log(w);
			// 	console.log("Try again ! You have "+j+" turns left");
			// }
			// else if(w==word){console.log("You won in "+j+" chances");}
		}	
	}
	else if(word==w) {
		console.log("You won !!");
	}
}

search(wordhide);