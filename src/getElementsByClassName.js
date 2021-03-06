// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {


    var nodeList = [];

    function hasClass(node) {

        if (node.classList) {
            if (node.classList.contains(className)) {
                nodeList.push(node);
            }
        }

        for (var i = 0; i < node.childNodes.length; i++) {
            if (node.hasChildNodes());
            hasClass(node.childNodes[i])
        }
    }
    hasClass(document.body)
    return nodeList;
}

