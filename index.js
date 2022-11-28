const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate(){
    let pass1 , pass2
    let button=document.querySelector(".large-button")
    let p1b=document.getElementById("pass1-box")
    let p2b=document.getElementById("pass2-box")
    pass1=passwordGenerator()
    pass2=passwordGenerator()
    p1b.textContent=pass1
    p2b.textContent=pass2
}



//functions

function rand(){
    return Math.floor(Math.random()*(characters.length))
}
function passwordGenerator(){
let pass=""
for(let i=0;i<15;i+=1){
    pass+=characters[rand()]
}
return pass
}

