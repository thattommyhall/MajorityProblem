var e = null, g = this;
function i(a, b) {
  var c = a.split("."), d = g;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && void 0 !== b ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function j(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
Math.floor(2147483648 * Math.random()).toString(36);
function k(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, p, D, q, E, F) {
    if("%" == q) {
      return"%"
    }
    var r = c.shift();
    if("undefined" == typeof r) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = r;
    return k.a[q].apply(e, arguments)
  })
}
k.a = {};
k.a.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
k.a.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = h + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - h.length;
  return d = 0 <= b.indexOf("-", 0) ? h + d + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
k.a.d = function(a, b, c, d, f, h, B, p) {
  return k.a.f(parseInt(a, 10), b, c, d, 0, h, B, p)
};
k.a.i = k.a.d;
k.a.u = k.a.d;
i("cljs.core.set_print_fn_BANG_", function(a) {
  return a
});
function l(a) {
  var b = "string" == typeof a;
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function m(a) {
  var b = n;
  return b[j(a == e ? e : a)] ? !0 : b._ ? !0 : !1
}
function s(a) {
  var b = a == e ? e : a.constructor, b = (b != e && !1 !== b ? b.k : b) != e && !1 !== (b != e && !1 !== b ? b.k : b) ? b.l : j(a);
  return Error(["No protocol method ILookup.-lookup defined for type ", b, ": ", a].join(""))
}
var n = {}, t, u = e;
function v(a, b) {
  if(a ? a.e : a) {
    return a.e(a, b)
  }
  var c;
  c = t[j(a == e ? e : a)];
  if(!c && (c = t._, !c)) {
    throw s(a);
  }
  return c.call(e, a, b)
}
function w(a, b, c) {
  if(a ? a.g : a) {
    return a.g(a, b, c)
  }
  var d;
  d = t[j(a == e ? e : a)];
  if(!d && (d = t._, !d)) {
    throw s(a);
  }
  return d.call(e, a, b, c)
}
u = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return v.call(this, a, b);
    case 3:
      return w.call(this, a, b, c)
  }
  throw Error("Invalid arity: " + arguments.length);
};
u.b = v;
u.c = w;
t = u;
var x, y = e;
function z(a, b) {
  var c;
  if(a == e) {
    c = e
  }else {
    if(c = a) {
      c = (c = a.j & 256) ? c : a.h
    }
    c = c ? a.e(a, b) : a instanceof Array ? b < a.length ? a[b] : e : l(a) ? b < a.length ? a[b] : e : m(a) ? t.b(a, b) : e
  }
  return c
}
function A(a, b, c) {
  if(a != e) {
    var d;
    if(d = a) {
      d = (d = a.j & 256) ? d : a.h
    }
    a = d ? a.g(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : l(a) ? b < a.length ? a[b] : c : m(a) ? t.c(a, b, c) : c
  }else {
    a = c
  }
  return a
}
y = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return z.call(this, a, b);
    case 3:
      return A.call(this, a, b, c)
  }
  throw Error("Invalid arity: " + arguments.length);
};
y.b = z;
y.c = A;
x = y;
var C = e, C = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return x.b(b, this.toString());
    case 3:
      return x.c(b, this.toString(), c)
  }
  throw Error("Invalid arity: " + arguments.length);
};
String.prototype.call = C;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? x.b(b[0], a) : x.c(b[0], a, b[1])
};
i("ca_vote.utils.now", function() {
  return(new Date).getTime()
});
