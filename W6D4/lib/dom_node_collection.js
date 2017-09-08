class DOMNodeCollection {
  constructor(array) {
    this.array = array;

  }

  html(string) {
    // get the value from the element since we didn't pass in anything
    if (!string) {
      return this.array[0].textContent;
    // add stuff on
    } else {
      this.array.forEach(el => {
          el.innerHTML = string;
      });
    }
  }

  empty() {
    this.array.forEach(el=> {
      el.innerHTML = "";
    });
  }

  append(arg) {
    if (typeof arg === 'string') {
      this.array.forEach((el) => {
        el.innerHTML += arg;
      });
      return;
    }
    const arg_array = arg.toArray();
    this.array.forEach((el) => {
      arg_array.forEach((arg_el) => {
        el.innerHTML += arg_el.outerHTML;
      });
    });
  }

  attr(attrName, value) {
    if (typeof value === 'undefined')  {
      return this.array[0].getAttribute(attrName);
    }
    else {
      return this.array.forEach((el)=>{
        el.setAttribute(attrName, value);
      });
    }
  }

  addClass(classname) {
    this.array.forEach( (el) => {
      if ( !el.className.split(" ").includes(classname) ) {
        el.className += ` ${classname}`;
      }
    });
    return this;

  }

  removeClass(classname) {
    this.array.forEach( (el) => {
      if ( el.className.split(" ").includes(classname) ) {
        el.className = el.className.replace(classname, "");
      }
    });
    return this;
  }

  children() {
    let childNode = [];
    this.array.forEach( (el) => {
      childNode.push(el.children);
    });
    return new DOMNodeCollection(childNode);
  }

  parent() {
    let parentNode = [];
    this.array.forEach( (el) => {
      if (!parentNode.includes(el.parentNode))
        parentNode.push(el.parentNode);
    });
    return new DOMNodeCollection(parentNode);
  }

  find(selector) {
    let foundNodes = [];
    this.array.forEach(ele => {
      const nodelist = ele.querySelectorAll(selector);
      foundNodes = foundNodes.concat(Array.from(nodelist));
    });
    return new DOMNodeCollection(foundNodes);
  }

  on(type, callback) {
    this.array.forEach((el)=> {
      el.addEventListener(type, callback);
    });
  }







}

// let found = [];
// let allQueried = document.querySelectorAll(selector);
// let allChildren = this.children();
// allChildren.forEach( child => {
//   allQueried.forEach((nodelist)=> {
//   for (let i = 0; i < child.array.length; i++) {
//     if (child.array[i] === nodelist) {
//       found.push(child.array[i]);
//     }
//   }
//     // console.log(nodelist);
//   });
// });
// return new DOMNodeCollection(found);


module.exports = DOMNodeCollection;
