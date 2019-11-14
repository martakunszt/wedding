var button1 = document.getElementById('button1');
var name1 = document.getElementById('product1')
function one(){
    var node = document.createElement('LI');
    var textnode = document.createTextNode(name1.textContent);
    node.appendChild(textnode);
    document.getElementById('basket').appendChild(node);
}
button1.addEventListener('click', one);