
var occult = document.createElement('IMG');
occult.setAttribute('src','Images/occult.png');
document.body.appendChild(occult);

//nesting
var places = document.createElement('DIV');
places.setAttribute('style','background-color:red');
var words = document.createElement('P');
var word2 = document.createTextNode('This is confusing and i cant help it');
//attaching eachother
words.appendChild(word2);
places.appendChild(words);
document.body.appendChild(places);

var score = document.createElement('IMG');
score.src = "Images/occult2.png";
document.body.appendChild(score);

function changer(){
    document.getElementById('titles').innerHTML = "wrench"
    document.getElementById('pictures').src = 'images/wrenchjr.png'
    document.getElementById('words').innerHTML = 'wrench jr. is the best robot anyone can ask for. Made and named by wrench, a dedsec member.'
}