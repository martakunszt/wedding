//first product variables
var button1 = document.getElementById('button1');
var name1 = document.getElementById('product1');

//seccond product variables
var button2 = document.getElementById('button2');
var name2 = document.getElementById('product2');

//third product variables
var button3 = document.getElementById('button3');
var name3 = document.getElementById('product3');

//fourth product variables
var button4 = document.getElementById('button4');
var name4 = document.getElementById('product4');

function one(){
    var node = document.createElement('LI');
    var textnode = document.createTextNode(name1.textContent);
    node.appendChild(textnode);
    document.getElementById('basket').appendChild(node);
}
function two(){
    var node = document.createElement('LI');
    var textnode = document.createTextNode(name2.textContent);
    node.appendChild(textnode);
    document.getElementById('basket').appendChild(node);
}
function three(){
    var node = document.createElement('LI');
    var textnode = document.createTextNode(name3.textContent);
    node.appendChild(textnode);
    document.getElementById('basket').appendChild(node);
}
function four(){
    var node = document.createElement('LI');
    var textnode = document.createTextNode(name4.textContent);
    node.appendChild(textnode);
    document.getElementById('basket').appendChild(node);
}

button1.addEventListener('click', one);
button2.addEventListener('click', two);
button3.addEventListener('click', three);
button4.addEventListener('click', four);