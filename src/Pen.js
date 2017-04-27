// Generated by CoffeeScript 2.0.0-alpha1
(function(window) {
  var Pendef, error, log, type;
  type = (function() {
    var classToType, i, j, len, name, ref;
    classToType = {};
    ref = "Boolean Number String Function Array Date RegExp Undefined Null Element Document Window".split(/\s+/);
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      name = ref[i];
      classToType[`[object ${name}]`] = name.toLowerCase();
    }
    return function(obj) {
      var strType;
      strType = Object.prototype.toString.call(obj);
      return classToType[strType] || "object";
    };
  })();
  log = console.log, error = console.error;
  Pendef = function() {
    var accpro, pen;
    accpro = (el) => {
      return el.__proto__.__proto__.__proto__;
    };
    pen = function(el) {
      var err, func, j, len, srm;
      err = new Error(`parameter in main function can't be a ${type(el)}`);
      if (type(el) === 'null') {
        throw err;
      } else if (type(el) === 'undefined') {
        throw err;
      } else if (type(el) === 'number') {
        throw err;
      } else if (type(el) === 'boolean') {
        throw err;
      } else if (type(el) === 'function') {
        throw err;
      }
      srm = "Html Css Attr On Append AppendTo Href Value Id Class Click Remove".split(/\s+/);
      pen.cre = {};
      if (pen.options["to selector"] === true) {
        if (type(el) === 'string') {
          pen.cre["el"] = document.querySelector(el);
        } else {
          pen.cre["el"] = el;
        }
      } else {
        if (type(el) === 'string') {
          pen.cre["el"] = document.createElement(el);
        } else {
          pen.cre["el"] = el;
        }
      }
      for (j = 0, len = srm.length; j < len; j++) {
        func = srm[j];
        if (accpro(pen.cre["el"])[func] === null || type(accpro(pen.cre["el"])[func]) === 'undefined') {
          accpro(pen.cre["el"])[func] = pen[func];
        }
      }
      pen.accesel = function() {
        return pen.cre["el"];
      };
      if (pen.options["auto append"] === true) {
        if (pen.options["normally append to"] === "body") {
          document.body.appendChild(pen.cre["el"]);
        } else {
          document.head.appendChild(pen.cre["el"]);
        }
      }
      return pen.cre["el"];
    };
    pen.Attr = function(stroobj, str) {
      var attr, el;
      el = pen.accesel();
      if (stroobj !== null) {
        if (type(stroobj) === 'string') {
          if (str !== null) {
            el.setAttribute(stroobj, str);
            return el;
          } else {
            return el.getAttribute(stroobj);
          }
        } else {
          for (attr in stroobj) {
            el.setAttribute(attr, stroobj[attr]);
          }
        }
      } else {
        return el.attributes;
      }
      return el;
    };
    pen.Class = function(nm) {
      var el;
      el = pen.accesel();
      el.setAttribute("class", nm);
      return el;
    };
    pen.Id = function(nm) {
      var el;
      el = pen.accesel();
      el.setAttribute("id", nm);
      return el;
    };
    pen.Html = function(str, app = false) {
      var el;
      el = pen.accesel();
      if (str !== null) {
        if (app === false) {
          el.innerHTML = str;
        } else {
          el.innerHTML += str;
        }
        return el;
      } else {
        return el.innerHTML;
      }
      return el;
    };
    pen.Remove = function() {
      var el, par;
      el = pen.accesel();
      par = el.parentElement;
      par.removeElement(el);
      return el;
    };
    pen.Value = function(str, app = false) {
      var el;
      el = pen.accesel();
      if (str !== null) {
        if (app === false) {
          el.value = str;
        } else {
          el.value += str;
        }
        return el;
      } else {
        return el.value;
      }
      return el;
    };
    pen.Css = function(rules, str) {
      var el, err, rule;
      el = pen.accesel();
      if (type(rules) === 'object') {
        for (rule in rules) {
          el.style[rule] = rules[rule];
        }
      } else if (type(rules) === 'string') {
        el.style[rules] = str;
      } else {
        err = new Error(`parameter 1 can't be ${type(el)}`);
        throw err;
      }
      return el;
    };
    pen.On = function(type, func, cp = false) {
      var el;
      el = pen.accesel();
      el.addEventListener(type, func, cp);
      return el;
    };
    pen.Click = function(func, cp = false) {
      var el;
      el = pen.accesel();
      el.addEventListener("click", func, cp);
      return el;
    };
    pen.Append = function(...elems) {
      var el, elem, index, j, len;
      el = pen.accesel();
      for (index = j = 0, len = elems.length; j < len; index = ++j) {
        elem = elems[index];
        el.appendChild(elem);
      }
      return el;
    };
    pen.AppendTo = function(elem) {
      var el;
      el = pen.accesel();
      elem.appendChild(el);
      return el;
    };
    pen.Href = function(hr) {
      var el, err;
      el = pen.accesel();
      if (type(hr) === 'string') {
        el.setAttribute("href", hr);
        return el;
      } else {
        err = new Error("main parameter 1, can only be a string");
        throw err;
      }
    };
    pen.options = {};
    pen.options["auto append"] = false;
    pen.options["to selector"] = false;
    pen.options["normally append to"] = "body";
    pen.setOptions = function(optionname, val) {
      var err, ops, option;
      ops = {
        "auto append": "auto append",
        "to selector": "to selector",
        "normally append to": "normally append to"
      };
      if (val !== null) {
        if (optionname === ops[optionname]) {
          pen.options[optionname] = val;
        } else {
          err = new Error(`unrecgonized option ${optionname}`);
          throw err;
        }
      } else {
        for (option in optionname) {
          pen.options[option] = optionname[option];
        }
      }
      return void 0;
    };
    pen.GetOpitions = function(option) {
      if (option != null) {
        return pen.options[option];
      } else {
        return pen.options;
      }
    };
    pen.Type = (param) => {
      return type(param);
    };
    pen.Select = (el) => {
      return document.querySelector(el);
    };
    pen.SelectAll = (el) => {
      return document.querySelectorAll(el);
    };
    return pen;
  };
  if (typeof pen === 'undefined') {
    window.pen = Pendef();
  }
})(window);
