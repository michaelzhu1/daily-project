/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);


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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);