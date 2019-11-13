var button1 = document.getElementById('button1');

function one(){
    var node = document.createElement('LI');
    var textnode = document.createTextNode("Flowers");
    node.appendChild(textnode);
    document.getElementById('basket').appendChild(node);
}
button1.addEventListener('click', one);