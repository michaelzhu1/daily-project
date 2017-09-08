const DOMNodeCollection = require("./dom_node_collection.js");


window.$l =  (selector) => {
  const nodelist = document.querySelectorAll(selector);
  if (selector instanceof HTMLElement || nodelist[0] instanceof HTMLElement) {
    let arr = [];
    for (let i = 0; i < nodelist.length; i++) {
      arr.push(nodelist[i]);
    }
    return new DOMNodeCollection(arr);
  }
};
