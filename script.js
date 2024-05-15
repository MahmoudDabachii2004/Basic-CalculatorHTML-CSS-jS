const button = document.getElementsByClassName('chiffre');



const affichage = document.getElementById("calcul")

var operation1 = ""
var symbole = ""
var operation2 = ""
var resultat = ""
var PosiNega = false
var peuxEcrire = true;


//permet dassigner a chaque button un evenement quand on click dessus
for (var i = 0; i< button.length; i++) {
    button[i].addEventListener("click", function(){

        const touche = this.textContent
        afficherEcran(touche)

    })
    
}


//cette fonction permet d afficher les information sur lecran et darreter si ca arriver a 19 caractere (a ajouter les operation la confirmation et le point)

function afficherEcran(touche) {
    affichage.style.color = "white"

    if (!PosiNega) {
        document.getElementById('moin').style.visibility = 'hidden';
    }

    if (affichage.textContent.length >= 19){
        console.log('stop')
        peuxEcrire = false
    }


    if (!isNaN(parseInt(touche)) && peuxEcrire) {

        if (resultat != '') {
            resultat = ''
            affichage.textContent = 0;
            affichage.style.color = "white"
    
        }

        checkSpace(affichage)
        
        if(affichage.textContent === '0') {
            affichage.textContent = '';
         } 
        
        affichage.textContent = affichage.textContent+touche;
    }

    if (touche === '.' && !(affichage.textContent.includes('.'))) {
        console.log('Point')
        if (parseInt(affichage.textContent)== 0) {
        affichage.textContent = affichage.textContent+".";
            
        } else {
            affichage.textContent = affichage.textContent+".";
        }
    }


    Operation(touche, affichage.textContent)

}



function Operation(operateur, nombre){
    if (operation1 != '' && operation2 == '') {
        if (operateur === '=') {
            if (PosiNega == false) {
                operation2 = nombre
            } else (
                operation2 = -parseFloat(nombre)
                )
            console.log('Egale')
            if (operation1 && operation2 && symbole) {
                operation1 = parseFloat(operation1)
                operation2 = parseFloat(operation2)

                console.log(operation1)
                console.log(operation2)

                switch (symbole) {
                    case "+":
                        console.log(operation1+operation2)
                        resultat = operation1+operation2
                        break
                    case "-":
                        console.log(operation1-operation2)
                        resultat = operation1-operation2
                        break
                    case "÷":
                        console.log(operation1/operation2)
                        resultat = operation1/operation2
                        break
                    case "x":
                        console.log(operation1*operation2)
                        resultat = operation1*operation2
                        break
                    default:
                        console.log("Erreur");
                }
                reset()
                affichage.textContent = resultat
                affichage.style.color = "#4ddd4d"

            }
            else {
                console.log('rien')
            }
        }
    
    }


    if (operateur === 'AC') {
        reset()
        console.log('AC')

    }
    if (operateur === 'DEL') {

            var clone = affichage.textContent.slice(1);

            if (clone == "") {
                
                affichage.textContent = 0;
                
            } 
            
            else {
                
                affichage.textContent = clone

                if (affichage.textContent.length <= 7) {
                    affichage.style.fontSize = 75 + 'px';
                    affichage.style.top = 200 + 'px';
                }

            }


    }

        if (operateur === '+') {
            symbole = '+'
            if (operation1 == '') {
                if (PosiNega == false) {
                    operation1 = nombre
                } else (
                    operation1 = -parseFloat(nombre)
                    )
            }
            PosiNega = false
            document.getElementById('moin').style.visibility = 'hidden';
            affichage.textContent = 0;
            console.log('Addition')
        }
        if (operateur === '-') {
            symbole = '-'
            if (operation1 == '') {
                if (PosiNega == false) {
                    operation1 = nombre
                } else (
                    operation1 = -parseFloat(nombre)
                    )
            }
            PosiNega = false
            document.getElementById('moin').style.visibility = 'hidden';
            affichage.textContent = 0;
            console.log('Soustraction')
        }
        if (operateur === '÷') {
            symbole = '÷'
            if (operation1 == '') {
                if (PosiNega == false) {
                    operation1 = nombre
                } else (
                    operation1 = -parseFloat(nombre)
                    )
            }
            PosiNega = false
            document.getElementById('moin').style.visibility = 'hidden';
            affichage.textContent = 0;
            console.log('Division')
        }
        if (operateur === 'x') {
            symbole = 'x'
            if (operation1 == '') {
                if (PosiNega == false) {
                    operation1 = nombre
                } else (
                    operation1 = -parseFloat(nombre)
                    )
            }
            PosiNega = false
            document.getElementById('moin').style.visibility = 'hidden';
            affichage.textContent = 0;
            console.log('Multiplication')
        }

        if (operateur === "+/-") {
            if (PosiNega === false) {
                PosiNega = true;
                document.getElementById('moin').style.visibility = 'visible';
            } else {
                PosiNega = false;
                document.getElementById('moin').style.visibility = 'hidden';
            }
            console.log(PosiNega);
        }
        



}

function reset() {
    PosiNega = false
    operation1 = "";
    operation2 = "";
    symbole = "";
    peuxEcrire = true;
    affichage.textContent = 0;
    affichage.style.fontSize = 75 + 'px';
    affichage.style.top = 200 + 'px';
}

//Cette fonction permet de verifier a l"aide de l"affichage si quelque chose deborde si cest le cas ca avertit ca fait aussi desencdre le texte
function checkSpace(affichage) {

    try {
        var DepaseHori = affichage.scrollWidth > affichage.offsetWidth;
    
    
        if (DepaseHori) {
            affichage.style.fontSize = (parseInt(window.getComputedStyle(affichage).fontSize) - 10) + 'px';
            affichage.style.top = (parseInt(window.getComputedStyle(affichage).top)+10) + 'px';
            return true
       } else {
          return false
        }
        
    } catch (error) {
        console.log('une erreur' + error)
    }

  }