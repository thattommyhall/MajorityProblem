function e(a) {
  throw a;
}
var aa = void 0, g = !0, l = null, m = !1;
function ba() {
  return function(a) {
    return a
  }
}
function n(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var r, ca = this;
function da(a, b) {
  var c = a.split("."), d = ca;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && b !== aa ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function u(a) {
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
function ea(a) {
  return"string" == typeof a
}
var fa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ga = 0;
function ha(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function ia(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, s, q, t) {
    if("%" == s) {
      return"%"
    }
    var z = c.shift();
    "undefined" == typeof z && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = z;
    return ia.aa[s].apply(l, arguments)
  })
}
ia.aa = {};
ia.aa.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
ia.aa.f = function(a, b, c, d, f) {
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
ia.aa.d = function(a, b, c, d, f, h, i, j) {
  return ia.aa.f(parseInt(a, 10), b, c, d, 0, h, i, j)
};
ia.aa.i = ia.aa.d;
ia.aa.u = ia.aa.d;
function ja(a, b) {
  a != l && this.append.apply(this, arguments)
}
ja.prototype.sa = "";
ja.prototype.append = function(a, b, c) {
  this.sa += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.sa += arguments[d]
    }
  }
  return this
};
ja.prototype.toString = n("sa");
var ka;
da("cljs.core.set_print_fn_BANG_", ba());
function la() {
  var a = ["\ufdd0:flush-on-newline", g, "\ufdd0:readably", g, "\ufdd0:meta", m, "\ufdd0:dup", m];
  return new ma(l, a.length / 2, a, l)
}
function v(a) {
  return a != l && a !== m
}
function na(a) {
  return v(a) ? m : g
}
function pa(a) {
  var b = ea(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function w(a, b) {
  return a[u(b == l ? l : b)] ? g : a._ ? g : m
}
function x(a, b) {
  var c = b == l ? l : b.constructor, c = v(v(c) ? c.eb : c) ? c.qb : u(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var qa = {}, ra = {};
function sa(a) {
  if(a ? a.B : a) {
    return a.B(a)
  }
  var b;
  var c = sa[u(a == l ? l : a)];
  c ? b = c : (c = sa._) ? b = c : e(x("ICounted.-count", a));
  return b.call(l, a)
}
function ta(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var d = ta[u(a == l ? l : a)];
  d ? c = d : (d = ta._) ? c = d : e(x("ICollection.-conj", a));
  return c.call(l, a, b)
}
var ua = {}, y, va = l;
function wa(a, b) {
  if(a ? a.v : a) {
    return a.v(a, b)
  }
  var c;
  var d = y[u(a == l ? l : a)];
  d ? c = d : (d = y._) ? c = d : e(x("IIndexed.-nth", a));
  return c.call(l, a, b)
}
function xa(a, b, c) {
  if(a ? a.L : a) {
    return a.L(a, b, c)
  }
  var d;
  var f = y[u(a == l ? l : a)];
  f ? d = f : (f = y._) ? d = f : e(x("IIndexed.-nth", a));
  return d.call(l, a, b, c)
}
va = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return wa.call(this, a, b);
    case 3:
      return xa.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
va.a = wa;
va.e = xa;
y = va;
var ya = {};
function A(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = A[u(a == l ? l : a)];
  c ? b = c : (c = A._) ? b = c : e(x("ISeq.-first", a));
  return b.call(l, a)
}
function B(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  var c = B[u(a == l ? l : a)];
  c ? b = c : (c = B._) ? b = c : e(x("ISeq.-rest", a));
  return b.call(l, a)
}
var za = {}, Aa, Ba = l;
function Ca(a, b) {
  if(a ? a.M : a) {
    return a.M(a, b)
  }
  var c;
  var d = Aa[u(a == l ? l : a)];
  d ? c = d : (d = Aa._) ? c = d : e(x("ILookup.-lookup", a));
  return c.call(l, a, b)
}
function Da(a, b, c) {
  if(a ? a.D : a) {
    return a.D(a, b, c)
  }
  var d;
  var f = Aa[u(a == l ? l : a)];
  f ? d = f : (f = Aa._) ? d = f : e(x("ILookup.-lookup", a));
  return d.call(l, a, b, c)
}
Ba = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ca.call(this, a, b);
    case 3:
      return Da.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ba.a = Ca;
Ba.e = Da;
Aa = Ba;
function Ea(a, b, c) {
  if(a ? a.ea : a) {
    return a.ea(a, b, c)
  }
  var d;
  var f = Ea[u(a == l ? l : a)];
  f ? d = f : (f = Ea._) ? d = f : e(x("IAssociative.-assoc", a));
  return d.call(l, a, b, c)
}
var Fa = {}, Ga = {};
function Ha(a) {
  if(a ? a.Za : a) {
    return a.Za(a)
  }
  var b;
  var c = Ha[u(a == l ? l : a)];
  c ? b = c : (c = Ha._) ? b = c : e(x("IMapEntry.-key", a));
  return b.call(l, a)
}
function Ia(a) {
  if(a ? a.$a : a) {
    return a.$a(a)
  }
  var b;
  var c = Ia[u(a == l ? l : a)];
  c ? b = c : (c = Ia._) ? b = c : e(x("IMapEntry.-val", a));
  return b.call(l, a)
}
var Ja = {};
function C(a) {
  if(a ? a.jb : a) {
    return a.state
  }
  var b;
  var c = C[u(a == l ? l : a)];
  c ? b = c : (c = C._) ? b = c : e(x("IDeref.-deref", a));
  return b.call(l, a)
}
var La = {};
function Ma(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  var c = Ma[u(a == l ? l : a)];
  c ? b = c : (c = Ma._) ? b = c : e(x("IMeta.-meta", a));
  return b.call(l, a)
}
var Na = {};
function Oa(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  var d = Oa[u(a == l ? l : a)];
  d ? c = d : (d = Oa._) ? c = d : e(x("IWithMeta.-with-meta", a));
  return c.call(l, a, b)
}
var Pa = {}, Qa, Ra = l;
function Sa(a, b) {
  if(a ? a.ma : a) {
    return a.ma(a, b)
  }
  var c;
  var d = Qa[u(a == l ? l : a)];
  d ? c = d : (d = Qa._) ? c = d : e(x("IReduce.-reduce", a));
  return c.call(l, a, b)
}
function Ta(a, b, c) {
  if(a ? a.na : a) {
    return a.na(a, b, c)
  }
  var d;
  var f = Qa[u(a == l ? l : a)];
  f ? d = f : (f = Qa._) ? d = f : e(x("IReduce.-reduce", a));
  return d.call(l, a, b, c)
}
Ra = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Sa.call(this, a, b);
    case 3:
      return Ta.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ra.a = Sa;
Ra.e = Ta;
Qa = Ra;
function Ua(a, b) {
  if(a ? a.C : a) {
    return a.C(a, b)
  }
  var c;
  var d = Ua[u(a == l ? l : a)];
  d ? c = d : (d = Ua._) ? c = d : e(x("IEquiv.-equiv", a));
  return c.call(l, a, b)
}
function Va(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = Va[u(a == l ? l : a)];
  c ? b = c : (c = Va._) ? b = c : e(x("IHash.-hash", a));
  return b.call(l, a)
}
function Wa(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = Wa[u(a == l ? l : a)];
  c ? b = c : (c = Wa._) ? b = c : e(x("ISeqable.-seq", a));
  return b.call(l, a)
}
var Xa = {};
function D(a, b) {
  if(a ? a.cb : a) {
    return a.cb(0, b)
  }
  var c;
  var d = D[u(a == l ? l : a)];
  d ? c = d : (d = D._) ? c = d : e(x("IWriter.-write", a));
  return c.call(l, a, b)
}
function Ya(a) {
  if(a ? a.ob : a) {
    return l
  }
  var b;
  var c = Ya[u(a == l ? l : a)];
  c ? b = c : (c = Ya._) ? b = c : e(x("IWriter.-flush", a));
  return b.call(l, a)
}
function Za(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  var f = Za[u(a == l ? l : a)];
  f ? d = f : (f = Za._) ? d = f : e(x("IWatchable.-notify-watches", a));
  return d.call(l, a, b, c)
}
function $a(a) {
  if(a ? a.ta : a) {
    return a.ta(a)
  }
  var b;
  var c = $a[u(a == l ? l : a)];
  c ? b = c : (c = $a._) ? b = c : e(x("IEditableCollection.-as-transient", a));
  return b.call(l, a)
}
function ab(a, b) {
  if(a ? a.va : a) {
    return a.va(a, b)
  }
  var c;
  var d = ab[u(a == l ? l : a)];
  d ? c = d : (d = ab._) ? c = d : e(x("ITransientCollection.-conj!", a));
  return c.call(l, a, b)
}
function bb(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  var c = bb[u(a == l ? l : a)];
  c ? b = c : (c = bb._) ? b = c : e(x("ITransientCollection.-persistent!", a));
  return b.call(l, a)
}
function cb(a, b, c) {
  if(a ? a.oa : a) {
    return a.oa(a, b, c)
  }
  var d;
  var f = cb[u(a == l ? l : a)];
  f ? d = f : (f = cb._) ? d = f : e(x("ITransientAssociative.-assoc!", a));
  return d.call(l, a, b, c)
}
function db(a) {
  if(a ? a.Xa : a) {
    return a.Xa()
  }
  var b;
  var c = db[u(a == l ? l : a)];
  c ? b = c : (c = db._) ? b = c : e(x("IChunk.-drop-first", a));
  return b.call(l, a)
}
function eb(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  var c = eb[u(a == l ? l : a)];
  c ? b = c : (c = eb._) ? b = c : e(x("IChunkedSeq.-chunked-first", a));
  return b.call(l, a)
}
function fb(a) {
  if(a ? a.za : a) {
    return a.za(a)
  }
  var b;
  var c = fb[u(a == l ? l : a)];
  c ? b = c : (c = fb._) ? b = c : e(x("IChunkedSeq.-chunked-rest", a));
  return b.call(l, a)
}
function gb(a) {
  this.sb = a;
  this.t = 0;
  this.j = 1073741824
}
gb.prototype.cb = function(a, b) {
  return this.sb.append(b)
};
gb.prototype.ob = p(l);
function hb(a) {
  var b = new ja, c = new gb(b);
  a.H(a, c, la());
  Ya(c);
  return"" + E(b)
}
function ib(a, b, c, d, f) {
  this.ra = a;
  this.name = b;
  this.ja = c;
  this.ya = d;
  this.fb = f;
  this.t = 0;
  this.j = 2154168321
}
r = ib.prototype;
r.H = function(a, b) {
  return D(b, this.ja)
};
r.ab = g;
r.G = function() {
  -1 === this.ya && (this.ya = jb.a ? jb.a(G.c ? G.c(this.ra) : G.call(l, this.ra), G.c ? G.c(this.name) : G.call(l, this.name)) : jb.call(l, G.c ? G.c(this.ra) : G.call(l, this.ra), G.c ? G.c(this.name) : G.call(l, this.name)));
  return this.ya
};
r.J = function(a, b) {
  return new ib(this.ra, this.name, this.ja, this.ya, b)
};
r.I = n("fb");
var kb = l, kb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Aa.e(b, this, l);
    case 3:
      return Aa.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ib.prototype.call = kb;
ib.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
ib.prototype.C = function(a, b) {
  return b instanceof ib ? this.ja === b.ja : m
};
ib.prototype.toString = n("ja");
function H(a) {
  if(a == l) {
    return l
  }
  var b;
  if(b = a) {
    b = (b = a.j & 8388608) ? b : a.Ta
  }
  if(b) {
    return a.w(a)
  }
  if(a instanceof Array || pa(a)) {
    return 0 === a.length ? l : new lb(a, 0)
  }
  if(w(za, a)) {
    return Wa(a)
  }
  e(Error([E(a), E("is not ISeqable")].join("")))
}
function I(a) {
  if(a == l) {
    return l
  }
  var b;
  if(b = a) {
    b = (b = a.j & 64) ? b : a.Sa
  }
  if(b) {
    return a.O(a)
  }
  a = H(a);
  return a == l ? l : A(a)
}
function K(a) {
  if(a != l) {
    var b;
    if(b = a) {
      b = (b = a.j & 64) ? b : a.Sa
    }
    if(b) {
      return a.P(a)
    }
    a = H(a);
    return a != l ? B(a) : mb
  }
  return mb
}
function L(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    if(b = a) {
      b = (b = a.j & 128) ? b : a.yb
    }
    a = b ? a.fa(a) : H(K(a))
  }
  return a
}
var nb, ob = l;
function pb(a, b) {
  var c = a === b;
  return c ? c : Ua(a, b)
}
function qb(a, b, c) {
  for(;;) {
    if(v(ob.a(a, b))) {
      if(L(c)) {
        a = b, b = I(c), c = L(c)
      }else {
        return ob.a(b, I(c))
      }
    }else {
      return m
    }
  }
}
function rb(a, b, c) {
  var d = l;
  2 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return qb.call(this, a, b, d)
}
rb.q = 2;
rb.m = function(a) {
  var b = I(a), a = L(a), c = I(a), a = K(a);
  return qb(b, c, a)
};
rb.h = qb;
ob = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return g;
    case 2:
      return pb.call(this, a, b);
    default:
      return rb.h(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ob.q = 2;
ob.m = rb.m;
ob.c = p(g);
ob.a = pb;
ob.h = rb.h;
nb = ob;
Va["null"] = p(0);
ra["null"] = g;
sa["null"] = p(0);
Ua["null"] = function(a, b) {
  return b == l
};
Na["null"] = g;
Oa["null"] = p(l);
La["null"] = g;
Ma["null"] = p(l);
Fa["null"] = g;
Date.prototype.C = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
Va.number = function(a) {
  return Math.floor(a) % 2147483647
};
Ua.number = function(a, b) {
  return a === b
};
Va["boolean"] = function(a) {
  return a === g ? 1 : 0
};
La["function"] = g;
Ma["function"] = p(l);
qa["function"] = g;
Va._ = function(a) {
  return a[fa] || (a[fa] = ++ga)
};
var sb, tb = l;
function ub(a, b) {
  var c = sa(a);
  if(0 === c) {
    return b.r ? b.r() : b.call(l)
  }
  for(var d = y.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, y.a(a, f)) : b.call(l, d, y.a(a, f)), f += 1
    }else {
      return d
    }
  }
}
function vb(a, b, c) {
  for(var d = sa(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, y.a(a, f)) : b.call(l, c, y.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function wb(a, b, c, d) {
  for(var f = sa(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, y.a(a, d)) : b.call(l, c, y.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
tb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return ub.call(this, a, b);
    case 3:
      return vb.call(this, a, b, c);
    case 4:
      return wb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
tb.a = ub;
tb.e = vb;
tb.k = wb;
sb = tb;
var xb, yb = l;
function zb(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.r ? b.r() : b.call(l)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, a[f]) : b.call(l, d, a[f]), f += 1
    }else {
      return d
    }
  }
}
function Ab(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(l, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function Bb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(l, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
yb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return zb.call(this, a, b);
    case 3:
      return Ab.call(this, a, b, c);
    case 4:
      return Bb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yb.a = zb;
yb.e = Ab;
yb.k = Bb;
xb = yb;
function Cb(a) {
  if(a) {
    var b = a.j & 2, a = (b ? b : a.Ea) ? g : a.j ? m : w(ra, a)
  }else {
    a = w(ra, a)
  }
  return a
}
function Db(a) {
  if(a) {
    var b = a.j & 16, a = (b ? b : a.ua) ? g : a.j ? m : w(ua, a)
  }else {
    a = w(ua, a)
  }
  return a
}
function lb(a, b) {
  this.b = a;
  this.o = b;
  this.t = 0;
  this.j = 166199550
}
r = lb.prototype;
r.G = function(a) {
  return Eb.c ? Eb.c(a) : Eb.call(l, a)
};
r.fa = function() {
  return this.o + 1 < this.b.length ? new lb(this.b, this.o + 1) : l
};
r.F = function(a, b) {
  return O.a ? O.a(b, a) : O.call(l, b, a)
};
r.toString = function() {
  return hb(this)
};
r.ma = function(a, b) {
  return xb.k(this.b, b, this.b[this.o], this.o + 1)
};
r.na = function(a, b, c) {
  return xb.k(this.b, b, c, this.o)
};
r.w = ba();
r.B = function() {
  return this.b.length - this.o
};
r.O = function() {
  return this.b[this.o]
};
r.P = function() {
  return this.o + 1 < this.b.length ? new lb(this.b, this.o + 1) : Fb.r ? Fb.r() : Fb.call(l)
};
r.C = function(a, b) {
  return Gb.a ? Gb.a(a, b) : Gb.call(l, a, b)
};
r.v = function(a, b) {
  var c = b + this.o;
  return c < this.b.length ? this.b[c] : l
};
r.L = function(a, b, c) {
  a = b + this.o;
  return a < this.b.length ? this.b[a] : c
};
var Hb, Ib = l;
function Jb(a) {
  return Ib.a(a, 0)
}
function Kb(a, b) {
  return b < a.length ? new lb(a, b) : l
}
Ib = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Jb.call(this, a);
    case 2:
      return Kb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ib.c = Jb;
Ib.a = Kb;
Hb = Ib;
var M, Lb = l;
function Mb(a) {
  return Hb.a(a, 0)
}
function Nb(a, b) {
  return Hb.a(a, b)
}
Lb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Mb.call(this, a);
    case 2:
      return Nb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Lb.c = Mb;
Lb.a = Nb;
M = Lb;
ra.array = g;
sa.array = function(a) {
  return a.length
};
Ua._ = function(a, b) {
  return a === b
};
var Ob, Pb = l;
function Qb(a, b) {
  return a != l ? ta(a, b) : Fb.c ? Fb.c(b) : Fb.call(l, b)
}
function Rb(a, b, c) {
  for(;;) {
    if(v(c)) {
      a = Pb.a(a, b), b = I(c), c = L(c)
    }else {
      return Pb.a(a, b)
    }
  }
}
function Sb(a, b, c) {
  var d = l;
  2 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return Rb.call(this, a, b, d)
}
Sb.q = 2;
Sb.m = function(a) {
  var b = I(a), a = L(a), c = I(a), a = K(a);
  return Rb(b, c, a)
};
Sb.h = Rb;
Pb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Qb.call(this, a, b);
    default:
      return Sb.h(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pb.q = 2;
Pb.m = Sb.m;
Pb.a = Qb;
Pb.h = Sb.h;
Ob = Pb;
function Q(a) {
  if(Cb(a)) {
    a = sa(a)
  }else {
    a: {
      for(var a = H(a), b = 0;;) {
        if(Cb(a)) {
          a = b + sa(a);
          break a
        }
        a = L(a);
        b += 1
      }
      a = aa
    }
  }
  return a
}
var Tb, Ub = l;
function Vb(a, b) {
  for(;;) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(H(a)) {
        return I(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Db(a)) {
      return y.a(a, b)
    }
    if(H(a)) {
      var c = L(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function Wb(a, b, c) {
  for(;;) {
    if(a == l) {
      return c
    }
    if(0 === b) {
      return H(a) ? I(a) : c
    }
    if(Db(a)) {
      return y.e(a, b, c)
    }
    if(H(a)) {
      a = L(a), b -= 1
    }else {
      return c
    }
  }
}
Ub = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Vb.call(this, a, b);
    case 3:
      return Wb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ub.a = Vb;
Ub.e = Wb;
Tb = Ub;
var R, Xb = l;
function Yb(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 16) ? c : a.ua
    }
    c = c ? a.v(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : l : pa(a) ? b < a.length ? a[b] : l : Tb.a(a, Math.floor(b))
  }
  return c
}
function Zb(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 16) ? d : a.ua
    }
    a = d ? a.L(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : pa(a) ? b < a.length ? a[b] : c : Tb.e(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
Xb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Yb.call(this, a, b);
    case 3:
      return Zb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xb.a = Yb;
Xb.e = Zb;
R = Xb;
var $b, ac = l;
function bc(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 256) ? c : a.kb
    }
    c = c ? a.M(a, b) : a instanceof Array ? b < a.length ? a[b] : l : pa(a) ? b < a.length ? a[b] : l : w(za, a) ? Aa.a(a, b) : l
  }
  return c
}
function cc(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 256) ? d : a.kb
    }
    a = d ? a.D(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : pa(a) ? b < a.length ? a[b] : c : w(za, a) ? Aa.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
ac = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return bc.call(this, a, b);
    case 3:
      return cc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ac.a = bc;
ac.e = cc;
$b = ac;
var dc, ec = l;
function fc(a, b, c) {
  return a != l ? Ea(a, b, c) : hc.a ? hc.a(b, c) : hc.call(l, b, c)
}
function ic(a, b, c, d) {
  for(;;) {
    if(a = ec.e(a, b, c), v(d)) {
      b = I(d), c = I(L(d)), d = L(L(d))
    }else {
      return a
    }
  }
}
function jc(a, b, c, d) {
  var f = l;
  3 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 3), 0));
  return ic.call(this, a, b, c, f)
}
jc.q = 3;
jc.m = function(a) {
  var b = I(a), a = L(a), c = I(a), a = L(a), d = I(a), a = K(a);
  return ic(b, c, d, a)
};
jc.h = ic;
ec = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return fc.call(this, a, b, c);
    default:
      return jc.h(a, b, c, M(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ec.q = 3;
ec.m = jc.m;
ec.e = fc;
ec.h = jc.h;
dc = ec;
function kc(a) {
  var b = "function" == u(a);
  return b ? b : a ? v(v(l) ? l : a.gb) ? g : a.Cb ? m : w(qa, a) : w(qa, a)
}
var nc = function lc(b, c) {
  var d;
  if(d = kc(b)) {
    d = b ? ((d = b.j & 262144) ? d : b.Bb) || (b.j ? 0 : w(Na, b)) : w(Na, b), d = !d
  }
  if(d) {
    if(aa === ka) {
      ka = {};
      ka = function(b, c, d, f) {
        this.n = b;
        this.Va = c;
        this.vb = d;
        this.rb = f;
        this.t = 0;
        this.j = 393217
      };
      ka.eb = g;
      ka.qb = "cljs.core/t5519";
      ka.pb = function(b) {
        return D(b, "cljs.core/t5519")
      };
      var f = function(b, c) {
        return mc.a ? mc.a(b.Va, c) : mc.call(l, b.Va, c)
      };
      d = function(b, c) {
        var b = this, d = l;
        1 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.q = 1;
      d.m = function(b) {
        var c = I(b), b = K(b);
        return f(c, b)
      };
      d.h = f;
      ka.prototype.call = d;
      ka.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      ka.prototype.gb = g;
      ka.prototype.I = n("rb");
      ka.prototype.J = function(b, c) {
        return new ka(this.n, this.Va, this.vb, c)
      }
    }
    d = new ka(c, b, lc, l);
    d = lc(d, c)
  }else {
    d = Oa(b, c)
  }
  return d
};
function oc(a) {
  var b;
  b = a ? ((b = a.j & 131072) ? b : a.mb) || (a.j ? 0 : w(La, a)) : w(La, a);
  return b ? Ma(a) : l
}
var pc = {}, qc = 0, G, rc = l;
function sc(a) {
  return rc.a(a, g)
}
function tc(a, b) {
  var c = ea(a);
  (c ? b : c) ? (255 < qc && (pc = {}, qc = 0), c = pc[a], "number" !== typeof c && (c = ha(a), pc[a] = c, qc += 1)) : c = Va(a);
  return c
}
rc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return sc.call(this, a);
    case 2:
      return tc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rc.c = sc;
rc.a = tc;
G = rc;
function uc(a) {
  if(a) {
    var b = a.j & 16384, a = (b ? b : a.Ab) ? g : a.j ? m : w(Ja, a)
  }else {
    a = w(Ja, a)
  }
  return a
}
function vc(a) {
  var b = a instanceof wc;
  return b ? b : a instanceof xc
}
function yc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
function zc(a) {
  return a === g
}
function Ac(a) {
  var b = ea(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Bc(a, b) {
  if(a === b) {
    return 0
  }
  if(a == l) {
    return-1
  }
  if(b == l) {
    return 1
  }
  if((a == l ? l : a.constructor) === (b == l ? l : b.constructor)) {
    var c;
    if(c = a) {
      c = (c = a.t & 2048) ? c : a.hb
    }
    return c ? a.ib(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Cc, Dc = l;
function Ec(a, b) {
  var c = Q(a), d = Q(b);
  return c < d ? -1 : c > d ? 1 : Dc.k(a, b, c, 0)
}
function Fc(a, b, c, d) {
  for(;;) {
    var f = Bc(R.a(a, d), R.a(b, d)), h = 0 === f;
    if(h ? d + 1 < c : h) {
      d += 1
    }else {
      return f
    }
  }
}
Dc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Ec.call(this, a, b);
    case 4:
      return Fc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dc.a = Ec;
Dc.k = Fc;
Cc = Dc;
var Gc, Hc = l;
function Ic(a, b) {
  var c = H(b);
  return c ? Jc.e ? Jc.e(a, I(c), L(c)) : Jc.call(l, a, I(c), L(c)) : a.r ? a.r() : a.call(l)
}
function Kc(a, b, c) {
  for(c = H(c);;) {
    if(c) {
      b = a.a ? a.a(b, I(c)) : a.call(l, b, I(c)), c = L(c)
    }else {
      return b
    }
  }
}
Hc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ic.call(this, a, b);
    case 3:
      return Kc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hc.a = Ic;
Hc.e = Kc;
Gc = Hc;
var Jc, Lc = l;
function Mc(a, b) {
  var c;
  if(c = b) {
    c = (c = b.j & 524288) ? c : b.nb
  }
  return c ? b.ma(b, a) : b instanceof Array ? xb.a(b, a) : pa(b) ? xb.a(b, a) : w(Pa, b) ? Qa.a(b, a) : Gc.a(a, b)
}
function Nc(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.j & 524288) ? d : c.nb
  }
  return d ? c.na(c, a, b) : c instanceof Array ? xb.e(c, a, b) : pa(c) ? xb.e(c, a, b) : w(Pa, c) ? Qa.e(c, a, b) : Gc.e(a, b, c)
}
Lc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Mc.call(this, a, b);
    case 3:
      return Nc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Lc.a = Mc;
Lc.e = Nc;
Jc = Lc;
function Oc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(l, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(l, a)
}
var Pc, Qc = l;
function Rc() {
  return Math.random.r ? Math.random.r() : Math.random.call(l)
}
function Sc(a) {
  return a * Qc.r()
}
Qc = function(a) {
  switch(arguments.length) {
    case 0:
      return Rc.call(this);
    case 1:
      return Sc.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qc.r = Rc;
Qc.c = Sc;
Pc = Qc;
function Tc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Uc, Vc = l;
function Wc(a) {
  return a == l ? "" : a.toString()
}
function Xc(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append(Vc.c(I(b))), h = L(b), a = f, b = h
      }else {
        return Vc.c(a)
      }
    }
  }.call(l, new ja(Vc.c(a)), b)
}
function Yc(a, b) {
  var c = l;
  1 < arguments.length && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return Xc.call(this, a, c)
}
Yc.q = 1;
Yc.m = function(a) {
  var b = I(a), a = K(a);
  return Xc(b, a)
};
Yc.h = Xc;
Vc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Wc.call(this, a);
    default:
      return Yc.h(a, M(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vc.q = 1;
Vc.m = Yc.m;
Vc.r = p("");
Vc.c = Wc;
Vc.h = Yc.h;
Uc = Vc;
var E, Zc = l;
function $c(a) {
  return Ac(a) ? Uc.h(":", M([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
}
function ad(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append(Zc.c(I(b))), h = L(b), a = f, b = h
      }else {
        return Uc.c(a)
      }
    }
  }.call(l, new ja(Zc.c(a)), b)
}
function bd(a, b) {
  var c = l;
  1 < arguments.length && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return ad.call(this, a, c)
}
bd.q = 1;
bd.m = function(a) {
  var b = I(a), a = K(a);
  return ad(b, a)
};
bd.h = ad;
Zc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return $c.call(this, a);
    default:
      return bd.h(a, M(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zc.q = 1;
Zc.m = bd.m;
Zc.r = p("");
Zc.c = $c;
Zc.h = bd.h;
E = Zc;
var cd, dd = l, dd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
dd.a = function(a, b) {
  return a.substring(b)
};
dd.e = function(a, b, c) {
  return a.substring(b, c)
};
cd = dd;
function Gb(a, b) {
  var c;
  c = b ? ((c = b.j & 16777216) ? c : b.zb) || (b.j ? 0 : w(Xa, b)) : w(Xa, b);
  if(c) {
    a: {
      c = H(a);
      for(var d = H(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && nb.a(I(c), I(d))) {
          c = L(c), d = L(d)
        }else {
          c = m;
          break a
        }
      }
      c = aa
    }
  }else {
    c = l
  }
  return v(c) ? g : m
}
function jb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Eb(a) {
  return Jc.e(function(a, c) {
    return jb(a, G.a(c, m))
  }, G.a(I(a), m), L(a))
}
function ed(a) {
  for(var b = 0, a = H(a);;) {
    if(a) {
      var c = I(a), b = (b + (G.c(S.c ? S.c(c) : S.call(l, c)) ^ G.c(T.c ? T.c(c) : T.call(l, c)))) % 4503599627370496, a = L(a)
    }else {
      return b
    }
  }
}
function fd(a, b, c, d, f) {
  this.n = a;
  this.wa = b;
  this.ca = c;
  this.count = d;
  this.l = f;
  this.t = 0;
  this.j = 65413358
}
r = fd.prototype;
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.fa = function() {
  return 1 === this.count ? l : this.ca
};
r.F = function(a, b) {
  return new fd(this.n, b, a, this.count + 1, l)
};
r.toString = function() {
  return hb(this)
};
r.w = ba();
r.B = n("count");
r.O = n("wa");
r.P = function() {
  return 1 === this.count ? mb : this.ca
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new fd(b, this.wa, this.ca, this.count, this.l)
};
r.I = n("n");
function gd(a) {
  this.n = a;
  this.t = 0;
  this.j = 65413326
}
r = gd.prototype;
r.G = p(0);
r.fa = p(l);
r.F = function(a, b) {
  return new fd(this.n, b, l, 1, l)
};
r.toString = function() {
  return hb(this)
};
r.w = p(l);
r.B = p(0);
r.O = p(l);
r.P = function() {
  return mb
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new gd(b)
};
r.I = n("n");
var mb = new gd(l), Fb;
function hd(a) {
  var b;
  if(a instanceof lb) {
    b = a.b
  }else {
    a: {
      for(b = [];;) {
        if(a != l) {
          b.push(a.O(a)), a = a.fa(a)
        }else {
          break a
        }
      }
      b = aa
    }
  }
  for(var a = b.length, c = mb;;) {
    if(0 < a) {
      var d = a - 1, c = c.F(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function id(a) {
  var b = l;
  0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return hd.call(this, b)
}
id.q = 0;
id.m = function(a) {
  a = H(a);
  return hd(a)
};
id.h = hd;
Fb = id;
function jd(a, b, c, d) {
  this.n = a;
  this.wa = b;
  this.ca = c;
  this.l = d;
  this.t = 0;
  this.j = 65405164
}
r = jd.prototype;
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.fa = function() {
  return this.ca == l ? l : Wa(this.ca)
};
r.F = function(a, b) {
  return new jd(l, b, a, this.l)
};
r.toString = function() {
  return hb(this)
};
r.w = ba();
r.O = n("wa");
r.P = function() {
  return this.ca == l ? mb : this.ca
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new jd(b, this.wa, this.ca, this.l)
};
r.I = n("n");
function O(a, b) {
  var c = b == l;
  if(!c && (c = b)) {
    c = (c = b.j & 64) ? c : b.Sa
  }
  return c ? new jd(l, a, b, l) : new jd(l, a, H(b), l)
}
ra.string = g;
sa.string = function(a) {
  return a.length
};
Va.string = function(a) {
  return ha(a)
};
function kd(a) {
  this.Ua = a;
  this.t = 0;
  this.j = 1
}
var ld = l, ld = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == l) {
        d = l
      }else {
        var f = b.ka;
        d = f == l ? Aa.e(b, d.Ua, l) : f[d.Ua]
      }
      return d;
    case 3:
      return b == l ? c : Aa.e(b, this.Ua, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
kd.prototype.call = ld;
kd.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var md = l, md = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return $b.a(b, this.toString());
    case 3:
      return $b.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = md;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? $b.a(b[0], a) : $b.e(b[0], a, b[1])
};
function nd(a) {
  var b = a.x;
  if(a.Wa) {
    return b
  }
  a.x = b.r ? b.r() : b.call(l);
  a.Wa = g;
  return a.x
}
function U(a, b, c, d) {
  this.n = a;
  this.Wa = b;
  this.x = c;
  this.l = d;
  this.t = 0;
  this.j = 31850700
}
r = U.prototype;
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.fa = function(a) {
  return Wa(a.P(a))
};
r.F = function(a, b) {
  return O(b, a)
};
r.toString = function() {
  return hb(this)
};
r.w = function(a) {
  return H(nd(a))
};
r.O = function(a) {
  return I(nd(a))
};
r.P = function(a) {
  return K(nd(a))
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new U(b, this.Wa, this.x, this.l)
};
r.I = n("n");
function od(a, b) {
  this.Ca = a;
  this.end = b;
  this.t = 0;
  this.j = 2
}
od.prototype.B = n("end");
od.prototype.add = function(a) {
  this.Ca[this.end] = a;
  return this.end += 1
};
od.prototype.da = function() {
  var a = new pd(this.Ca, 0, this.end);
  this.Ca = l;
  return a
};
function pd(a, b, c) {
  this.b = a;
  this.A = b;
  this.end = c;
  this.t = 0;
  this.j = 524306
}
r = pd.prototype;
r.ma = function(a, b) {
  return xb.k(this.b, b, this.b[this.A], this.A + 1)
};
r.na = function(a, b, c) {
  return xb.k(this.b, b, c, this.A)
};
r.Xa = function() {
  this.A === this.end && e(Error("-drop-first of empty chunk"));
  return new pd(this.b, this.A + 1, this.end)
};
r.v = function(a, b) {
  return this.b[this.A + b]
};
r.L = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.A : a) ? this.b[this.A + b] : c
};
r.B = function() {
  return this.end - this.A
};
var qd, rd = l;
function sd(a) {
  return new pd(a, 0, a.length)
}
function td(a, b) {
  return new pd(a, b, a.length)
}
function ud(a, b, c) {
  return new pd(a, b, c)
}
rd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return sd.call(this, a);
    case 2:
      return td.call(this, a, b);
    case 3:
      return ud.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rd.c = sd;
rd.a = td;
rd.e = ud;
qd = rd;
function wc(a, b, c, d) {
  this.da = a;
  this.ha = b;
  this.n = c;
  this.l = d;
  this.j = 31850604;
  this.t = 1536
}
r = wc.prototype;
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.F = function(a, b) {
  return O(b, a)
};
r.toString = function() {
  return hb(this)
};
r.w = ba();
r.O = function() {
  return y.a(this.da, 0)
};
r.P = function() {
  return 1 < sa(this.da) ? new wc(db(this.da), this.ha, this.n, l) : this.ha == l ? mb : this.ha
};
r.Ya = function() {
  return this.ha == l ? l : this.ha
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new wc(this.da, this.ha, b, this.l)
};
r.I = n("n");
r.Da = n("da");
r.za = function() {
  return this.ha == l ? mb : this.ha
};
function vd(a, b) {
  return 0 === sa(a) ? b : new wc(a, b, l, l)
}
function wd(a) {
  for(var b = [];;) {
    if(H(a)) {
      b.push(I(a)), a = L(a)
    }else {
      return b
    }
  }
}
function xd(a, b) {
  if(Cb(a)) {
    return Q(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? H(c) : h;
    if(v(h)) {
      c = L(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var zd = function yd(b) {
  return b == l ? l : L(b) == l ? H(I(b)) : O(I(b), yd(L(b)))
}, Ad, Bd = l;
function Cd(a, b, c) {
  return O(a, O(b, c))
}
function Dd(a, b, c, d) {
  return O(a, O(b, O(c, d)))
}
function Ed(a, b, c, d, f) {
  return O(a, O(b, O(c, O(d, zd(f)))))
}
function Fd(a, b, c, d, f) {
  var h = l;
  4 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 4), 0));
  return Ed.call(this, a, b, c, d, h)
}
Fd.q = 4;
Fd.m = function(a) {
  var b = I(a), a = L(a), c = I(a), a = L(a), d = I(a), a = L(a), f = I(a), a = K(a);
  return Ed(b, c, d, f, a)
};
Fd.h = Ed;
Bd = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return H(a);
    case 2:
      return O(a, b);
    case 3:
      return Cd.call(this, a, b, c);
    case 4:
      return Dd.call(this, a, b, c, d);
    default:
      return Fd.h(a, b, c, d, M(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bd.q = 4;
Bd.m = Fd.m;
Bd.c = function(a) {
  return H(a)
};
Bd.a = function(a, b) {
  return O(a, b)
};
Bd.e = Cd;
Bd.k = Dd;
Bd.h = Fd.h;
Ad = Bd;
function Gd(a, b, c) {
  var d = H(c);
  if(0 === b) {
    return a.r ? a.r() : a.call(l)
  }
  var c = A(d), f = B(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(l, c)
  }
  var d = A(f), h = B(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(l, c, d)
  }
  var f = A(h), i = B(h);
  if(3 === b) {
    return a.e ? a.e(c, d, f) : a.e ? a.e(c, d, f) : a.call(l, c, d, f)
  }
  var h = A(i), j = B(i);
  if(4 === b) {
    return a.k ? a.k(c, d, f, h) : a.k ? a.k(c, d, f, h) : a.call(l, c, d, f, h)
  }
  i = A(j);
  j = B(j);
  if(5 === b) {
    return a.Y ? a.Y(c, d, f, h, i) : a.Y ? a.Y(c, d, f, h, i) : a.call(l, c, d, f, h, i)
  }
  var a = A(j), k = B(j);
  if(6 === b) {
    return a.$ ? a.$(c, d, f, h, i, a) : a.$ ? a.$(c, d, f, h, i, a) : a.call(l, c, d, f, h, i, a)
  }
  var j = A(k), s = B(k);
  if(7 === b) {
    return a.la ? a.la(c, d, f, h, i, a, j) : a.la ? a.la(c, d, f, h, i, a, j) : a.call(l, c, d, f, h, i, a, j)
  }
  var k = A(s), q = B(s);
  if(8 === b) {
    return a.Qa ? a.Qa(c, d, f, h, i, a, j, k) : a.Qa ? a.Qa(c, d, f, h, i, a, j, k) : a.call(l, c, d, f, h, i, a, j, k)
  }
  var s = A(q), t = B(q);
  if(9 === b) {
    return a.Ra ? a.Ra(c, d, f, h, i, a, j, k, s) : a.Ra ? a.Ra(c, d, f, h, i, a, j, k, s) : a.call(l, c, d, f, h, i, a, j, k, s)
  }
  var q = A(t), z = B(t);
  if(10 === b) {
    return a.Fa ? a.Fa(c, d, f, h, i, a, j, k, s, q) : a.Fa ? a.Fa(c, d, f, h, i, a, j, k, s, q) : a.call(l, c, d, f, h, i, a, j, k, s, q)
  }
  var t = A(z), F = B(z);
  if(11 === b) {
    return a.Ga ? a.Ga(c, d, f, h, i, a, j, k, s, q, t) : a.Ga ? a.Ga(c, d, f, h, i, a, j, k, s, q, t) : a.call(l, c, d, f, h, i, a, j, k, s, q, t)
  }
  var z = A(F), J = B(F);
  if(12 === b) {
    return a.Ha ? a.Ha(c, d, f, h, i, a, j, k, s, q, t, z) : a.Ha ? a.Ha(c, d, f, h, i, a, j, k, s, q, t, z) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z)
  }
  var F = A(J), N = B(J);
  if(13 === b) {
    return a.Ia ? a.Ia(c, d, f, h, i, a, j, k, s, q, t, z, F) : a.Ia ? a.Ia(c, d, f, h, i, a, j, k, s, q, t, z, F) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z, F)
  }
  var J = A(N), P = B(N);
  if(14 === b) {
    return a.Ja ? a.Ja(c, d, f, h, i, a, j, k, s, q, t, z, F, J) : a.Ja ? a.Ja(c, d, f, h, i, a, j, k, s, q, t, z, F, J) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z, F, J)
  }
  var N = A(P), $ = B(P);
  if(15 === b) {
    return a.Ka ? a.Ka(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N) : a.Ka ? a.Ka(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z, F, J, N)
  }
  var P = A($), oa = B($);
  if(16 === b) {
    return a.La ? a.La(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P) : a.La ? a.La(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P)
  }
  var $ = A(oa), Ka = B(oa);
  if(17 === b) {
    return a.Ma ? a.Ma(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $) : a.Ma ? a.Ma(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $)
  }
  var oa = A(Ka), gc = B(Ka);
  if(18 === b) {
    return a.Na ? a.Na(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa) : a.Na ? a.Na(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa)
  }
  Ka = A(gc);
  gc = B(gc);
  if(19 === b) {
    return a.Oa ? a.Oa(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa, Ka) : a.Oa ? a.Oa(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa, Ka) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa, Ka)
  }
  var Md = A(gc);
  B(gc);
  if(20 === b) {
    return a.Pa ? a.Pa(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa, Ka, Md) : a.Pa ? a.Pa(c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa, Ka, Md) : a.call(l, c, d, f, h, i, a, j, k, s, q, t, z, F, J, N, P, $, oa, Ka, Md)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var mc, Hd = l;
function Id(a, b) {
  var c = a.q;
  if(a.m) {
    var d = xd(b, c + 1);
    return d <= c ? Gd(a, d, b) : a.m(b)
  }
  return a.apply(a, wd(b))
}
function Jd(a, b, c) {
  b = Ad.a(b, c);
  c = a.q;
  if(a.m) {
    var d = xd(b, c + 1);
    return d <= c ? Gd(a, d, b) : a.m(b)
  }
  return a.apply(a, wd(b))
}
function Kd(a, b, c, d) {
  b = Ad.e(b, c, d);
  c = a.q;
  return a.m ? (d = xd(b, c + 1), d <= c ? Gd(a, d, b) : a.m(b)) : a.apply(a, wd(b))
}
function Ld(a, b, c, d, f) {
  b = Ad.k(b, c, d, f);
  c = a.q;
  return a.m ? (d = xd(b, c + 1), d <= c ? Gd(a, d, b) : a.m(b)) : a.apply(a, wd(b))
}
function Nd(a, b, c, d, f, h) {
  b = O(b, O(c, O(d, O(f, zd(h)))));
  c = a.q;
  return a.m ? (d = xd(b, c + 1), d <= c ? Gd(a, d, b) : a.m(b)) : a.apply(a, wd(b))
}
function Od(a, b, c, d, f, h) {
  var i = l;
  5 < arguments.length && (i = M(Array.prototype.slice.call(arguments, 5), 0));
  return Nd.call(this, a, b, c, d, f, i)
}
Od.q = 5;
Od.m = function(a) {
  var b = I(a), a = L(a), c = I(a), a = L(a), d = I(a), a = L(a), f = I(a), a = L(a), h = I(a), a = K(a);
  return Nd(b, c, d, f, h, a)
};
Od.h = Nd;
Hd = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return Id.call(this, a, b);
    case 3:
      return Jd.call(this, a, b, c);
    case 4:
      return Kd.call(this, a, b, c, d);
    case 5:
      return Ld.call(this, a, b, c, d, f);
    default:
      return Od.h(a, b, c, d, f, M(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hd.q = 5;
Hd.m = Od.m;
Hd.a = Id;
Hd.e = Jd;
Hd.k = Kd;
Hd.Y = Ld;
Hd.h = Od.h;
mc = Hd;
function Pd(a, b) {
  for(;;) {
    if(H(b) == l) {
      return g
    }
    if(v(a.c ? a.c(I(b)) : a.call(l, I(b)))) {
      var c = a, d = L(b), a = c, b = d
    }else {
      return m
    }
  }
}
function Qd(a) {
  return a
}
var Rd, V = l;
function Sd(a, b) {
  return new U(l, m, function() {
    var c = H(b);
    if(c) {
      if(vc(c)) {
        for(var d = eb(c), f = Q(d), h = new od(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.c ? a.c(y.a(d, i)) : a.call(l, y.a(d, i));
            h.add(j);
            i += 1
          }else {
            break
          }
        }
        return vd(h.da(), V.a(a, fb(c)))
      }
      return O(a.c ? a.c(I(c)) : a.call(l, I(c)), V.a(a, K(c)))
    }
    return l
  }, l)
}
function Td(a, b, c) {
  return new U(l, m, function() {
    var d = H(b), f = H(c);
    return(d ? f : d) ? O(a.a ? a.a(I(d), I(f)) : a.call(l, I(d), I(f)), V.e(a, K(d), K(f))) : l
  }, l)
}
function Ud(a, b, c, d) {
  return new U(l, m, function() {
    var f = H(b), h = H(c), i = H(d);
    return(f ? h ? i : h : f) ? O(a.e ? a.e(I(f), I(h), I(i)) : a.call(l, I(f), I(h), I(i)), V.k(a, K(f), K(h), K(i))) : l
  }, l)
}
function Vd(a, b, c, d, f) {
  return V.a(function(b) {
    return mc.a(a, b)
  }, function i(a) {
    return new U(l, m, function() {
      var b = V.a(H, a);
      return Pd(Qd, b) ? O(V.a(I, b), i(V.a(K, b))) : l
    }, l)
  }(Ob.h(f, d, M([c, b], 0))))
}
function Wd(a, b, c, d, f) {
  var h = l;
  4 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 4), 0));
  return Vd.call(this, a, b, c, d, h)
}
Wd.q = 4;
Wd.m = function(a) {
  var b = I(a), a = L(a), c = I(a), a = L(a), d = I(a), a = L(a), f = I(a), a = K(a);
  return Vd(b, c, d, f, a)
};
Wd.h = Vd;
V = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Sd.call(this, a, b);
    case 3:
      return Td.call(this, a, b, c);
    case 4:
      return Ud.call(this, a, b, c, d);
    default:
      return Wd.h(a, b, c, d, M(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
V.q = 4;
V.m = Wd.m;
V.a = Sd;
V.e = Td;
V.k = Ud;
V.h = Wd.h;
Rd = V;
var Yd = function Xd(b, c) {
  return new U(l, m, function() {
    if(0 < b) {
      var d = H(c);
      return d ? O(I(d), Xd(b - 1, K(d))) : l
    }
    return l
  }, l)
}, Zd, $d = l;
function ae(a) {
  return new U(l, m, function() {
    return O(a, $d.c(a))
  }, l)
}
function be(a, b) {
  return Yd(a, $d.c(b))
}
$d = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ae.call(this, a);
    case 2:
      return be.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$d.c = ae;
$d.a = be;
Zd = $d;
var ce, de = l;
function ee(a) {
  return new U(l, m, function() {
    return O(a.r ? a.r() : a.call(l), de.c(a))
  }, l)
}
function fe(a, b) {
  return Yd(a, de.c(b))
}
de = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ee.call(this, a);
    case 2:
      return fe.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
de.c = ee;
de.a = fe;
ce = de;
var he = function ge(b, c) {
  return new U(l, m, function() {
    var d = H(c);
    if(d) {
      if(vc(d)) {
        for(var f = eb(d), h = Q(f), i = new od(Array(h), 0), j = 0;;) {
          if(j < h) {
            if(v(b.c ? b.c(y.a(f, j)) : b.call(l, y.a(f, j)))) {
              var k = y.a(f, j);
              i.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return vd(i.da(), ge(b, fb(d)))
      }
      f = I(d);
      d = K(d);
      return v(b.c ? b.c(f) : b.call(l, f)) ? O(f, ge(b, d)) : ge(b, d)
    }
    return l
  }, l)
};
function ie(a, b) {
  var c;
  if(a != l) {
    if(c = a) {
      c = (c = a.t & 4) ? c : a.wb
    }
    c ? (c = Jc.e(ab, $a(a), b), c = bb(c)) : c = Jc.e(ta, a, b)
  }else {
    c = Jc.e(Ob, mb, b)
  }
  return c
}
var ke = function je(b, c, d) {
  var f = R.e(c, 0, l), h;
  a: {
    h = 1;
    for(c = H(c);;) {
      var i = c;
      if(v(i ? 0 < h : i)) {
        h -= 1, c = L(c)
      }else {
        h = c;
        break a
      }
    }
    h = aa
  }
  return v(h) ? dc.e(b, f, je($b.a(b, f), h, d)) : dc.e(b, f, d)
};
function le(a, b) {
  this.p = a;
  this.b = b
}
function me(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function ne(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new le(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var pe = function oe(b, c, d, f) {
  var h = new le(d.p, d.b.slice()), i = b.g - 1 >>> c & 31;
  5 === c ? h.b[i] = f : (d = d.b[i], b = d != l ? oe(b, c - 5, d, f) : ne(l, c - 5, f), h.b[i] = b);
  return h
};
function qe(a, b) {
  var c = 0 <= b;
  if(c ? b < a.g : c) {
    if(b >= me(a)) {
      return a.K
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.b[b >>> d & 31], d = f
      }else {
        return c.b
      }
    }
  }else {
    e(Error([E("No item "), E(b), E(" in vector of length "), E(a.g)].join("")))
  }
}
var se = function re(b, c, d, f, h) {
  var i = new le(d.p, d.b.slice());
  if(0 === c) {
    i.b[f & 31] = h
  }else {
    var j = f >>> c & 31, b = re(b, c - 5, d.b[j], f, h);
    i.b[j] = b
  }
  return i
};
function te(a, b, c, d, f, h) {
  this.n = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.K = f;
  this.l = h;
  this.t = 4;
  this.j = 167668511
}
r = te.prototype;
r.ta = function() {
  return new ue(this.g, this.shift, ve.c ? ve.c(this.root) : ve.call(l, this.root), we.c ? we.c(this.K) : we.call(l, this.K))
};
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.M = function(a, b) {
  return a.L(a, b, l)
};
r.D = function(a, b, c) {
  return a.L(a, b, c)
};
r.ea = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.g : d) {
    return me(a) <= b ? (a = this.K.slice(), a[b & 31] = c, new te(this.n, this.g, this.shift, this.root, a, l)) : new te(this.n, this.g, this.shift, se(a, this.shift, this.root, b, c), this.K, l)
  }
  if(b === this.g) {
    return a.F(a, c)
  }
  e(Error([E("Index "), E(b), E(" out of bounds  [0,"), E(this.g), E("]")].join("")))
};
var xe = l, xe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = te.prototype;
r.call = xe;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  if(32 > this.g - me(a)) {
    var c = this.K.slice();
    c.push(b);
    return new te(this.n, this.g + 1, this.shift, this.root, c, l)
  }
  var d = this.g >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new le(l, Array(32));
    d.b[0] = this.root;
    var f = ne(l, this.shift, new le(l, this.K));
    d.b[1] = f
  }else {
    d = pe(a, this.shift, this.root, new le(l, this.K))
  }
  return new te(this.n, this.g + 1, c, d, [b], l)
};
r.Za = function(a) {
  return a.v(a, 0)
};
r.$a = function(a) {
  return a.v(a, 1)
};
r.toString = function() {
  return hb(this)
};
r.ma = function(a, b) {
  return sb.a(a, b)
};
r.na = function(a, b, c) {
  return sb.e(a, b, c)
};
r.w = function(a) {
  return 0 === this.g ? l : 32 > this.g ? M.c(this.K) : W.e ? W.e(a, 0, 0) : W.call(l, a, 0, 0)
};
r.B = n("g");
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new te(b, this.g, this.shift, this.root, this.K, this.l)
};
r.I = n("n");
r.v = function(a, b) {
  return qe(a, b)[b & 31]
};
r.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.v(a, b) : c
};
var ye = new le(l, Array(32)), ze = new te(l, 0, 5, ye, [], 0);
function X(a) {
  var b = a.length;
  if(32 > b) {
    return new te(l, b, 5, ye, a, l)
  }
  for(var c = a.slice(0, 32), d = 32, f = $a(new te(l, 32, 5, ye, c, l));;) {
    if(d < b) {
      c = d + 1, f = ab(f, a[d]), d = c
    }else {
      return bb(f)
    }
  }
}
function Ae(a) {
  return bb(Jc.e(ab, $a(ze), a))
}
function Be(a) {
  var b = l;
  0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return Ae(b)
}
Be.q = 0;
Be.m = function(a) {
  a = H(a);
  return Ae(a)
};
Be.h = function(a) {
  return Ae(a)
};
function xc(a, b, c, d, f, h) {
  this.T = a;
  this.S = b;
  this.o = c;
  this.A = d;
  this.n = f;
  this.l = h;
  this.j = 31719660;
  this.t = 1536
}
r = xc.prototype;
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.fa = function(a) {
  return this.A + 1 < this.S.length ? (a = W.k ? W.k(this.T, this.S, this.o, this.A + 1) : W.call(l, this.T, this.S, this.o, this.A + 1), a == l ? l : a) : a.Ya(a)
};
r.F = function(a, b) {
  return O(b, a)
};
r.toString = function() {
  return hb(this)
};
r.w = ba();
r.O = function() {
  return this.S[this.A]
};
r.P = function(a) {
  return this.A + 1 < this.S.length ? (a = W.k ? W.k(this.T, this.S, this.o, this.A + 1) : W.call(l, this.T, this.S, this.o, this.A + 1), a == l ? mb : a) : a.za(a)
};
r.Ya = function() {
  var a = this.S.length, a = this.o + a < sa(this.T) ? W.e ? W.e(this.T, this.o + a, 0) : W.call(l, this.T, this.o + a, 0) : l;
  return a == l ? l : a
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return W.Y ? W.Y(this.T, this.S, this.o, this.A, b) : W.call(l, this.T, this.S, this.o, this.A, b)
};
r.Da = function() {
  return qd.a(this.S, this.A)
};
r.za = function() {
  var a = this.S.length, a = this.o + a < sa(this.T) ? W.e ? W.e(this.T, this.o + a, 0) : W.call(l, this.T, this.o + a, 0) : l;
  return a == l ? mb : a
};
var W, Ce = l;
function De(a, b, c) {
  return new xc(a, qe(a, b), b, c, l, l)
}
function Ee(a, b, c, d) {
  return new xc(a, b, c, d, l, l)
}
function Fe(a, b, c, d, f) {
  return new xc(a, b, c, d, f, l)
}
Ce = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return De.call(this, a, b, c);
    case 4:
      return Ee.call(this, a, b, c, d);
    case 5:
      return Fe.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ce.e = De;
Ce.k = Ee;
Ce.Y = Fe;
W = Ce;
function ve(a) {
  return new le({}, a.b.slice())
}
function we(a) {
  var b = Array(32);
  yc(a, 0, b, 0, a.length);
  return b
}
var He = function Ge(b, c, d, f) {
  var d = b.root.p === d.p ? d : new le(b.root.p, d.b.slice()), h = b.g - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.b[h], b = i != l ? Ge(b, c - 5, i, f) : ne(b.root.p, c - 5, f)
  }
  d.b[h] = b;
  return d
};
function ue(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.K = d;
  this.j = 275;
  this.t = 88
}
var Ie = l, Ie = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = ue.prototype;
r.call = Ie;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.M = function(a, b) {
  return a.L(a, b, l)
};
r.D = function(a, b, c) {
  return a.L(a, b, c)
};
r.v = function(a, b) {
  if(this.root.p) {
    return qe(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.v(a, b) : c
};
r.B = function() {
  if(this.root.p) {
    return this.g
  }
  e(Error("count after persistent!"))
};
r.oa = function(a, b, c) {
  var d;
  a: {
    if(a.root.p) {
      var f = 0 <= b;
      if(f ? b < a.g : f) {
        me(a) <= b ? a.K[b & 31] = c : (d = function i(d, f) {
          var s = a.root.p === f.p ? f : new le(a.root.p, f.b.slice());
          if(0 === d) {
            s.b[b & 31] = c
          }else {
            var q = b >>> d & 31, t = i(d - 5, s.b[q]);
            s.b[q] = t
          }
          return s
        }.call(l, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.g) {
        d = a.va(a, c);
        break a
      }
      e(Error([E("Index "), E(b), E(" out of bounds for TransientVector of length"), E(a.g)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.va = function(a, b) {
  if(this.root.p) {
    if(32 > this.g - me(a)) {
      this.K[this.g & 31] = b
    }else {
      var c = new le(this.root.p, this.K), d = Array(32);
      d[0] = b;
      this.K = d;
      if(this.g >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = ne(this.root.p, this.shift, c);
        this.root = new le(this.root.p, d);
        this.shift = f
      }else {
        this.root = He(a, this.shift, this.root, c)
      }
    }
    this.g += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
r.Aa = function(a) {
  if(this.root.p) {
    this.root.p = l;
    var a = this.g - me(a), b = Array(a);
    yc(this.K, 0, b, 0, a);
    return new te(l, this.g, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
function Je() {
  this.t = 0;
  this.j = 2097152
}
Je.prototype.C = p(m);
var Ke = new Je;
function Le(a, b) {
  var c;
  c = b == l ? 0 : b ? ((c = b.j & 1024) ? c : b.xb) || (b.j ? 0 : w(Fa, b)) : w(Fa, b);
  c = c ? Q(a) === Q(b) ? Pd(Qd, Rd.a(function(a) {
    return nb.a($b.e(b, I(a), Ke), I(L(a)))
  }, a)) : l : l;
  return v(c) ? g : m
}
function Me(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return l
    }
  }
}
function Ne(a, b) {
  var c = G.c(a), d = G.c(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Oe(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.ka, a = oc(a), i = 0, j = $a(Pe);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = cb(j, k, h[k])
    }else {
      return d = nc, b = cb(j, b, c), b = bb(b), d(b, a)
    }
  }
}
function Qe(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function Re(a, b, c, d, f) {
  this.n = a;
  this.keys = b;
  this.ka = c;
  this.Ba = d;
  this.l = f;
  this.t = 4;
  this.j = 16123663
}
r = Re.prototype;
r.ta = function(a) {
  a = ie(hc.r ? hc.r() : hc.call(l), a);
  return $a(a)
};
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = ed(a)
};
r.M = function(a, b) {
  return a.D(a, b, l)
};
r.D = function(a, b, c) {
  return((a = ea(b)) ? Me(b, this.keys) != l : a) ? this.ka[b] : c
};
r.ea = function(a, b, c) {
  if(ea(b)) {
    var d = this.Ba > Se;
    if(d ? d : this.keys.length >= Se) {
      return Oe(a, b, c)
    }
    if(Me(b, this.keys) != l) {
      return a = Qe(this.ka, this.keys), a[b] = c, new Re(this.n, this.keys, a, this.Ba + 1, l)
    }
    a = Qe(this.ka, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Re(this.n, d, a, this.Ba + 1, l)
  }
  return Oe(a, b, c)
};
var Te = l, Te = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Re.prototype;
r.call = Te;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return uc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Jc.e(ta, a, b)
};
r.toString = function() {
  return hb(this)
};
r.w = function() {
  var a = this;
  return 0 < a.keys.length ? Rd.a(function(b) {
    return Be.h(M([b, a.ka[b]], 0))
  }, a.keys.sort(Ne)) : l
};
r.B = function() {
  return this.keys.length
};
r.C = function(a, b) {
  return Le(a, b)
};
r.J = function(a, b) {
  return new Re(b, this.keys, this.ka, this.Ba, this.l)
};
r.I = n("n");
var Ue = new Re(l, [], {}, 0, 0), Se = 8;
function Ve(a, b) {
  var c = a.b, d = ea(b);
  if(d ? d : "number" === typeof b) {
    a: {
      for(var d = c.length, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        if(b === c[f]) {
          c = f;
          break a
        }
        f += 2
      }
      c = aa
    }
  }else {
    if(b instanceof ib) {
      a: {
        for(var d = c.length, f = b.ja, h = 0;;) {
          if(d <= h) {
            c = -1;
            break a
          }
          var i = c[h], j = i instanceof ib;
          if(j ? f === i.ja : j) {
            c = h;
            break a
          }
          h += 2
        }
        c = aa
      }
    }else {
      if(b == l) {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(c[f] == l) {
              c = f;
              break a
            }
            f += 2
          }
          c = aa
        }
      }else {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(nb.a(b, c[f])) {
              c = f;
              break a
            }
            f += 2
          }
          c = aa
        }
      }
    }
  }
  return c
}
function ma(a, b, c, d) {
  this.n = a;
  this.g = b;
  this.b = c;
  this.l = d;
  this.t = 4;
  this.j = 16123663
}
r = ma.prototype;
r.ta = function() {
  return new We({}, this.b.length, this.b.slice())
};
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = ed(a)
};
r.M = function(a, b) {
  return a.D(a, b, l)
};
r.D = function(a, b, c) {
  a = Ve(a, b);
  return-1 === a ? c : this.b[a + 1]
};
r.ea = function(a, b, c) {
  var d = Ve(a, b);
  if(-1 === d) {
    if(this.g < Xe) {
      for(var d = a.b, a = d.length, f = Array(a + 2), h = 0;;) {
        if(h < a) {
          f[h] = d[h], h += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new ma(this.n, this.g + 1, f, l)
    }
    return Oa(Ea(ie(Pe, a), b, c), this.n)
  }
  if(c === this.b[d + 1]) {
    return a
  }
  b = this.b.slice();
  b[d + 1] = c;
  return new ma(this.n, this.g, b, l)
};
var Ye = l, Ye = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = ma.prototype;
r.call = Ye;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return uc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Jc.e(ta, a, b)
};
r.toString = function() {
  return hb(this)
};
r.w = function() {
  var a = this, b;
  if(0 < a.g) {
    var c = a.b.length;
    b = function f(b) {
      return new U(l, m, function() {
        return b < c ? O(X([a.b[b], a.b[b + 1]]), f(b + 2)) : l
      }, l)
    }(0)
  }else {
    b = l
  }
  return b
};
r.B = n("g");
r.C = function(a, b) {
  return Le(a, b)
};
r.J = function(a, b) {
  return new ma(b, this.g, this.b, this.l)
};
r.I = n("n");
var Xe = 8;
function We(a, b, c) {
  this.pa = a;
  this.ba = b;
  this.b = c;
  this.t = 56;
  this.j = 258
}
r = We.prototype;
r.oa = function(a, b, c) {
  if(v(this.pa)) {
    var d = Ve(a, b);
    if(-1 === d) {
      if(this.ba + 2 <= 2 * Xe) {
        return this.ba += 2, this.b.push(b), this.b.push(c), a
      }
      a = Ze.a ? Ze.a(this.ba, this.b) : Ze.call(l, this.ba, this.b);
      return cb(a, b, c)
    }
    c !== this.b[d + 1] && (this.b[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.va = function(a, b) {
  if(v(this.pa)) {
    var c;
    c = b ? ((c = b.j & 2048) ? c : b.lb) || (b.j ? 0 : w(Ga, b)) : w(Ga, b);
    if(c) {
      return a.oa(a, S.c ? S.c(b) : S.call(l, b), T.c ? T.c(b) : T.call(l, b))
    }
    c = H(b);
    for(var d = a;;) {
      var f = I(c);
      if(v(f)) {
        c = L(c), d = d.oa(d, S.c ? S.c(f) : S.call(l, f), T.c ? T.c(f) : T.call(l, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.Aa = function() {
  if(v(this.pa)) {
    return this.pa = m, new ma(l, Oc((this.ba - this.ba % 2) / 2), this.b, l)
  }
  e(Error("persistent! called twice"))
};
r.M = function(a, b) {
  return a.D(a, b, l)
};
r.D = function(a, b, c) {
  if(v(this.pa)) {
    return a = Ve(a, b), -1 === a ? c : this.b[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.B = function() {
  if(v(this.pa)) {
    return Oc((this.ba - this.ba % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function Ze(a, b) {
  for(var c = $a(Ue), d = 0;;) {
    if(d < a) {
      c = cb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function $e() {
  this.Z = m
}
function af(a, b) {
  return ea(a) ? a === b : nb.a(a, b)
}
var bf, cf = l;
function df(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function ef(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
cf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return df.call(this, a, b, c);
    case 5:
      return ef.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cf.e = df;
cf.Y = ef;
bf = cf;
var ff, gf = l;
function hf(a, b, c, d) {
  a = a.qa(b);
  a.b[c] = d;
  return a
}
function jf(a, b, c, d, f, h) {
  a = a.qa(b);
  a.b[c] = d;
  a.b[f] = h;
  return a
}
gf = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 4:
      return hf.call(this, a, b, c, d);
    case 6:
      return jf.call(this, a, b, c, d, f, h)
  }
  e(Error("Invalid arity: " + arguments.length))
};
gf.k = hf;
gf.$ = jf;
ff = gf;
function kf(a, b, c) {
  this.p = a;
  this.z = b;
  this.b = c
}
r = kf.prototype;
r.V = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = Tc(this.z & i - 1);
  if(0 === (this.z & i)) {
    var k = Tc(this.z);
    if(2 * k < this.b.length) {
      a = this.qa(a);
      b = a.b;
      h.Z = g;
      a: {
        c = 2 * (k - j);
        h = 2 * j + (c - 1);
        for(k = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[k] = b[h];
          k -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.z |= i;
      return a
    }
    if(16 <= k) {
      j = Array(32);
      j[c >>> b & 31] = lf.V(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.z >>> d & 1) && (j[d] = this.b[f] != l ? lf.V(a, b + 5, G.c(this.b[f]), this.b[f], this.b[f + 1], h) : this.b[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new mf(a, k + 1, j)
    }
    b = Array(2 * (k + 4));
    yc(this.b, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    yc(this.b, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    h.Z = g;
    a = this.qa(a);
    a.b = b;
    a.z |= i;
    return a
  }
  k = this.b[2 * j];
  i = this.b[2 * j + 1];
  if(k == l) {
    return k = i.V(a, b + 5, c, d, f, h), k === i ? this : ff.k(this, a, 2 * j + 1, k)
  }
  if(af(d, k)) {
    return f === i ? this : ff.k(this, a, 2 * j + 1, f)
  }
  h.Z = g;
  return ff.$(this, a, 2 * j, l, 2 * j + 1, nf.la ? nf.la(a, b + 5, k, i, c, d, f) : nf.call(l, a, b + 5, k, i, c, d, f))
};
r.xa = function() {
  return of.c ? of.c(this.b) : of.call(l, this.b)
};
r.qa = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Tc(this.z), c = Array(0 > b ? 4 : 2 * (b + 1));
  yc(this.b, 0, c, 0, 2 * b);
  return new kf(a, this.z, c)
};
r.U = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = Tc(this.z & h - 1);
  if(0 === (this.z & h)) {
    var j = Tc(this.z);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = lf.U(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.z >>> c & 1) && (i[c] = this.b[d] != l ? lf.U(a + 5, G.c(this.b[d]), this.b[d], this.b[d + 1], f) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new mf(l, j + 1, i)
    }
    a = Array(2 * (j + 1));
    yc(this.b, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    yc(this.b, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.Z = g;
    return new kf(l, this.z | h, a)
  }
  j = this.b[2 * i];
  h = this.b[2 * i + 1];
  if(j == l) {
    return j = h.U(a + 5, b, c, d, f), j === h ? this : new kf(l, this.z, bf.e(this.b, 2 * i + 1, j))
  }
  if(af(c, j)) {
    return d === h ? this : new kf(l, this.z, bf.e(this.b, 2 * i + 1, d))
  }
  f.Z = g;
  return new kf(l, this.z, bf.Y(this.b, 2 * i, l, 2 * i + 1, nf.$ ? nf.$(a + 5, j, h, b, c, d) : nf.call(l, a + 5, j, h, b, c, d)))
};
r.ia = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.z & f)) {
    return d
  }
  var h = Tc(this.z & f - 1), f = this.b[2 * h], h = this.b[2 * h + 1];
  return f == l ? h.ia(a + 5, b, c, d) : af(c, f) ? h : d
};
var lf = new kf(l, 0, []);
function mf(a, b, c) {
  this.p = a;
  this.g = b;
  this.b = c
}
r = mf.prototype;
r.V = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.b[i];
  if(j == l) {
    return a = ff.k(this, a, i, lf.V(a, b + 5, c, d, f, h)), a.g += 1, a
  }
  b = j.V(a, b + 5, c, d, f, h);
  return b === j ? this : ff.k(this, a, i, b)
};
r.xa = function() {
  return pf.c ? pf.c(this.b) : pf.call(l, this.b)
};
r.qa = function(a) {
  return a === this.p ? this : new mf(a, this.g, this.b.slice())
};
r.U = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.b[h];
  if(i == l) {
    return new mf(l, this.g + 1, bf.e(this.b, h, lf.U(a + 5, b, c, d, f)))
  }
  a = i.U(a + 5, b, c, d, f);
  return a === i ? this : new mf(l, this.g, bf.e(this.b, h, a))
};
r.ia = function(a, b, c, d) {
  var f = this.b[b >>> a & 31];
  return f != l ? f.ia(a + 5, b, c, d) : d
};
function qf(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(af(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function rf(a, b, c, d) {
  this.p = a;
  this.ga = b;
  this.g = c;
  this.b = d
}
r = rf.prototype;
r.V = function(a, b, c, d, f, h) {
  if(c === this.ga) {
    b = qf(this.b, this.g, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.g) {
        return a = ff.$(this, a, 2 * this.g, d, 2 * this.g + 1, f), h.Z = g, a.g += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      yc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.Z = g;
      h = this.g + 1;
      a === this.p ? (this.b = b, this.g = h, a = this) : a = new rf(this.p, this.ga, h, b);
      return a
    }
    return this.b[b + 1] === f ? this : ff.k(this, a, b + 1, f)
  }
  return(new kf(a, 1 << (this.ga >>> b & 31), [l, this, l, l])).V(a, b, c, d, f, h)
};
r.xa = function() {
  return of.c ? of.c(this.b) : of.call(l, this.b)
};
r.qa = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Array(2 * (this.g + 1));
  yc(this.b, 0, b, 0, 2 * this.g);
  return new rf(a, this.ga, this.g, b)
};
r.U = function(a, b, c, d, f) {
  return b === this.ga ? (a = qf(this.b, this.g, c), -1 === a ? (a = this.b.length, b = Array(a + 2), yc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.Z = g, new rf(l, this.ga, this.g + 1, b)) : nb.a(this.b[a], d) ? this : new rf(l, this.ga, this.g, bf.e(this.b, a + 1, d))) : (new kf(l, 1 << (this.ga >>> a & 31), [l, this])).U(a, b, c, d, f)
};
r.ia = function(a, b, c, d) {
  a = qf(this.b, this.g, c);
  return 0 > a ? d : af(c, this.b[a]) ? this.b[a + 1] : d
};
var nf, sf = l;
function tf(a, b, c, d, f, h) {
  var i = G.c(b);
  if(i === d) {
    return new rf(l, i, 2, [b, c, f, h])
  }
  var j = new $e;
  return lf.U(a, i, b, c, j).U(a, d, f, h, j)
}
function uf(a, b, c, d, f, h, i) {
  var j = G.c(c);
  if(j === f) {
    return new rf(l, j, 2, [c, d, h, i])
  }
  var k = new $e;
  return lf.V(a, b, j, c, d, k).V(a, b, f, h, i, k)
}
sf = function(a, b, c, d, f, h, i) {
  switch(arguments.length) {
    case 6:
      return tf.call(this, a, b, c, d, f, h);
    case 7:
      return uf.call(this, a, b, c, d, f, h, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sf.$ = tf;
sf.la = uf;
nf = sf;
function vf(a, b, c, d, f) {
  this.n = a;
  this.W = b;
  this.o = c;
  this.X = d;
  this.l = f;
  this.t = 0;
  this.j = 31850572
}
r = vf.prototype;
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.F = function(a, b) {
  return O(b, a)
};
r.toString = function() {
  return hb(this)
};
r.w = ba();
r.O = function() {
  return this.X == l ? X([this.W[this.o], this.W[this.o + 1]]) : I(this.X)
};
r.P = function() {
  return this.X == l ? of.e ? of.e(this.W, this.o + 2, l) : of.call(l, this.W, this.o + 2, l) : of.e ? of.e(this.W, this.o, L(this.X)) : of.call(l, this.W, this.o, L(this.X))
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new vf(b, this.W, this.o, this.X, this.l)
};
r.I = n("n");
var of, wf = l;
function xf(a) {
  return wf.e(a, 0, l)
}
function yf(a, b, c) {
  if(c == l) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != l) {
          return new vf(l, a, b, l, l)
        }
        var d = a[b + 1];
        if(v(d) && (d = d.xa(), v(d))) {
          return new vf(l, a, b + 2, d, l)
        }
        b += 2
      }else {
        return l
      }
    }
  }else {
    return new vf(l, a, b, c, l)
  }
}
wf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return xf.call(this, a);
    case 3:
      return yf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wf.c = xf;
wf.e = yf;
of = wf;
function zf(a, b, c, d, f) {
  this.n = a;
  this.W = b;
  this.o = c;
  this.X = d;
  this.l = f;
  this.t = 0;
  this.j = 31850572
}
r = zf.prototype;
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.F = function(a, b) {
  return O(b, a)
};
r.toString = function() {
  return hb(this)
};
r.w = ba();
r.O = function() {
  return I(this.X)
};
r.P = function() {
  return pf.k ? pf.k(l, this.W, this.o, L(this.X)) : pf.call(l, l, this.W, this.o, L(this.X))
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new zf(b, this.W, this.o, this.X, this.l)
};
r.I = n("n");
var pf, Af = l;
function Bf(a) {
  return Af.k(l, a, 0, l)
}
function Cf(a, b, c, d) {
  if(d == l) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(v(f) && (f = f.xa(), v(f))) {
          return new zf(a, b, c + 1, f, l)
        }
        c += 1
      }else {
        return l
      }
    }
  }else {
    return new zf(a, b, c, d, l)
  }
}
Af = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Bf.call(this, a);
    case 4:
      return Cf.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Af.c = Bf;
Af.k = Cf;
pf = Af;
function Df(a, b, c, d, f, h) {
  this.n = a;
  this.g = b;
  this.root = c;
  this.Q = d;
  this.R = f;
  this.l = h;
  this.t = 4;
  this.j = 16123663
}
r = Df.prototype;
r.ta = function() {
  return new Ef({}, this.root, this.g, this.Q, this.R)
};
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = ed(a)
};
r.M = function(a, b) {
  return a.D(a, b, l)
};
r.D = function(a, b, c) {
  return b == l ? this.Q ? this.R : c : this.root == l ? c : this.root.ia(0, G.c(b), b, c)
};
r.ea = function(a, b, c) {
  if(b == l) {
    var d = this.Q;
    return(d ? c === this.R : d) ? a : new Df(this.n, this.Q ? this.g : this.g + 1, this.root, g, c, l)
  }
  d = new $e;
  c = (this.root == l ? lf : this.root).U(0, G.c(b), b, c, d);
  return c === this.root ? a : new Df(this.n, d.Z ? this.g + 1 : this.g, c, this.Q, this.R, l)
};
var Ff = l, Ff = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Df.prototype;
r.call = Ff;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return uc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Jc.e(ta, a, b)
};
r.toString = function() {
  return hb(this)
};
r.w = function() {
  if(0 < this.g) {
    var a = this.root != l ? this.root.xa() : l;
    return this.Q ? O(X([l, this.R]), a) : a
  }
  return l
};
r.B = n("g");
r.C = function(a, b) {
  return Le(a, b)
};
r.J = function(a, b) {
  return new Df(b, this.g, this.root, this.Q, this.R, this.l)
};
r.I = n("n");
var Pe = new Df(l, 0, l, m, l, 0);
function Ef(a, b, c, d, f) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.R = f;
  this.t = 56;
  this.j = 258
}
r = Ef.prototype;
r.oa = function(a, b, c) {
  return Gf(a, b, c)
};
r.va = function(a, b) {
  var c;
  a: {
    if(a.p) {
      c = b ? ((c = b.j & 2048) ? c : b.lb) || (b.j ? 0 : w(Ga, b)) : w(Ga, b);
      if(c) {
        c = Gf(a, S.c ? S.c(b) : S.call(l, b), T.c ? T.c(b) : T.call(l, b));
        break a
      }
      c = H(b);
      for(var d = a;;) {
        var f = I(c);
        if(v(f)) {
          c = L(c), d = Gf(d, S.c ? S.c(f) : S.call(l, f), T.c ? T.c(f) : T.call(l, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = aa
  }
  return c
};
r.Aa = function(a) {
  var b;
  a.p ? (a.p = l, b = new Df(l, a.count, a.root, a.Q, a.R, l)) : e(Error("persistent! called twice"));
  return b
};
r.M = function(a, b) {
  return b == l ? this.Q ? this.R : l : this.root == l ? l : this.root.ia(0, G.c(b), b)
};
r.D = function(a, b, c) {
  return b == l ? this.Q ? this.R : c : this.root == l ? c : this.root.ia(0, G.c(b), b, c)
};
r.B = function() {
  if(this.p) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Gf(a, b, c) {
  if(a.p) {
    if(b == l) {
      a.R !== c && (a.R = c), a.Q || (a.count += 1, a.Q = g)
    }else {
      var d = new $e, b = (a.root == l ? lf : a.root).V(a.p, 0, G.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Z && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var hc;
function Hf(a) {
  for(var b = H(a), c = $a(Pe);;) {
    if(b) {
      var a = L(L(b)), d = I(b), b = I(L(b)), c = cb(c, d, b), b = a
    }else {
      return bb(c)
    }
  }
}
function If(a) {
  var b = l;
  0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return Hf.call(this, b)
}
If.q = 0;
If.m = function(a) {
  a = H(a);
  return Hf(a)
};
If.h = Hf;
hc = If;
function S(a) {
  return Ha(a)
}
function T(a) {
  return Ia(a)
}
function Jf(a) {
  if(a && v(v(l) ? l : a.ab)) {
    return a.name
  }
  if(pa(a)) {
    return a
  }
  if(Ac(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? cd.a(a, 2) : cd.a(a, b + 1)
  }
  e(Error([E("Doesn't support name: "), E(a)].join("")))
}
function Kf(a) {
  if(a && v(v(l) ? l : a.ab)) {
    return a.ra
  }
  if(Ac(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? cd.e(a, 2, b) : l
  }
  e(Error([E("Doesn't support namespace: "), E(a)].join("")))
}
function Lf(a, b, c, d, f) {
  this.n = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.t = 0;
  this.j = 32375006
}
r = Lf.prototype;
r.G = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Eb(a)
};
r.fa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Lf(this.n, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Lf(this.n, this.start + this.step, this.end, this.step, l) : l
};
r.F = function(a, b) {
  return O(b, a)
};
r.toString = function() {
  return hb(this)
};
r.ma = function(a, b) {
  return sb.a(a, b)
};
r.na = function(a, b, c) {
  return sb.e(a, b, c)
};
r.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
r.B = function(a) {
  return na(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.O = n("start");
r.P = function(a) {
  return a.w(a) != l ? new Lf(this.n, this.start + this.step, this.end, this.step, l) : mb
};
r.C = function(a, b) {
  return Gb(a, b)
};
r.J = function(a, b) {
  return new Lf(b, this.start, this.end, this.step, this.l)
};
r.I = n("n");
r.v = function(a, b) {
  if(b < a.B(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
r.L = function(a, b, c) {
  c = b < a.B(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
var Mf, Nf = l;
function Of() {
  return Nf.e(0, Number.MAX_VALUE, 1)
}
function Pf(a) {
  return Nf.e(0, a, 1)
}
function Qf(a, b) {
  return Nf.e(a, b, 1)
}
function Rf(a, b, c) {
  return new Lf(l, a, b, c, l)
}
Nf = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Of.call(this);
    case 1:
      return Pf.call(this, a);
    case 2:
      return Qf.call(this, a, b);
    case 3:
      return Rf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nf.r = Of;
Nf.c = Pf;
Nf.a = Qf;
Nf.e = Rf;
Mf = Nf;
function Y(a, b, c, d, f, h, i) {
  D(a, c);
  H(i) && (b.e ? b.e(I(i), a, h) : b.call(l, I(i), a, h));
  for(var c = H(L(i)), i = l, j = 0, k = 0;;) {
    if(k < j) {
      var s = i.v(i, k);
      D(a, d);
      b.e ? b.e(s, a, h) : b.call(l, s, a, h);
      k += 1
    }else {
      if(c = H(c)) {
        i = c, vc(i) ? (c = eb(i), k = fb(i), i = c, j = Q(c), c = k) : (c = I(i), D(a, d), b.e ? b.e(c, a, h) : b.call(l, c, a, h), c = L(i), i = l, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return D(a, f)
}
function Sf(a, b) {
  for(var c = H(b), d = l, f = 0, h = 0;;) {
    if(h < f) {
      var i = d.v(d, h);
      D(a, i);
      h += 1
    }else {
      if(c = H(c)) {
        d = c, vc(d) ? (c = eb(d), f = fb(d), d = c, i = Q(c), c = f, f = i) : (i = I(d), D(a, i), c = L(d), d = l, f = 0), h = 0
      }else {
        return l
      }
    }
  }
}
function Tf(a, b) {
  var c = l;
  1 < arguments.length && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return Sf.call(this, a, c)
}
Tf.q = 1;
Tf.m = function(a) {
  var b = I(a), a = K(a);
  return Sf(b, a)
};
Tf.h = Sf;
var Uf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, Z = function Vf(b, c, d) {
  if(b == l) {
    return D(c, "nil")
  }
  if(aa === b) {
    return D(c, "#<undefined>")
  }
  var f;
  f = $b.a(d, "\ufdd0:meta");
  v(f) && (f = b ? ((f = b.j & 131072) ? f : b.mb) ? g : b.j ? m : w(La, b) : w(La, b), f = v(f) ? oc(b) : f);
  v(f) && (D(c, "^"), Vf(oc(b), c, d), D(c, " "));
  if(b == l) {
    return D(c, "nil")
  }
  if(b.eb) {
    return b.pb(c)
  }
  if(f = b) {
    f = (f = b.j & 2147483648) ? f : b.N
  }
  return f ? b.H(b, c, d) : ((f = (b == l ? l : b.constructor) === Boolean) ? f : "number" === typeof b) ? D(c, "" + E(b)) : b instanceof Array ? Y(c, Vf, "#<Array [", ", ", "]>", d, b) : ea(b) ? Ac(b) ? (D(c, ":"), d = Kf(b), v(d) && Tf.h(c, M(["" + E(d), "/"], 0)), D(c, Jf(b))) : b instanceof ib ? (d = Kf(b), v(d) && Tf.h(c, M(["" + E(d), "/"], 0)), D(c, Jf(b))) : v((new kd("\ufdd0:readably")).call(l, d)) ? D(c, [E('"'), E(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Uf[b]
  })), E('"')].join("")) : D(c, b) : kc(b) ? Tf.h(c, M(["#<", "" + E(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + E(b);;) {
      if(Q(d) < c) {
        d = [E("0"), E(d)].join("")
      }else {
        return d
      }
    }
  }, Tf.h(c, M(['#inst "', "" + E(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(b instanceof RegExp) ? Tf.h(c, M(['#"', b.source, '"'], 0)) : Tf.h(c, M(["#<", "" + E(b), ">"], 0))
};
function Wf(a) {
  var b = la(), c = a == l;
  if(c ? c : na(H(a))) {
    b = ""
  }else {
    var c = E, d = new ja, f = new gb(d);
    a: {
      Z(I(a), f, b);
      for(var a = H(L(a)), h = l, i = 0, j = 0;;) {
        if(j < i) {
          var k = h.v(h, j);
          D(f, " ");
          Z(k, f, b);
          j += 1
        }else {
          if(a = H(a)) {
            h = a, vc(h) ? (a = eb(h), i = fb(h), h = a, k = Q(a), a = i, i = k) : (k = I(h), D(f, " "), Z(k, f, b), a = L(h), h = l, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    Ya(f);
    b = "" + c(d)
  }
  return b
}
function Xf(a) {
  var b = l;
  0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return Wf(b)
}
Xf.q = 0;
Xf.m = function(a) {
  a = H(a);
  return Wf(a)
};
Xf.h = function(a) {
  return Wf(a)
};
lb.prototype.N = g;
lb.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
wc.prototype.N = g;
wc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
ma.prototype.N = g;
ma.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
U.prototype.N = g;
U.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
vf.prototype.N = g;
vf.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
xc.prototype.N = g;
xc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Df.prototype.N = g;
Df.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
te.prototype.N = g;
te.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, a)
};
fd.prototype.N = g;
fd.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
gd.prototype.N = g;
gd.prototype.H = function(a, b) {
  return D(b, "()")
};
jd.prototype.N = g;
jd.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Lf.prototype.N = g;
Lf.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
zf.prototype.N = g;
zf.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Re.prototype.N = g;
Re.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
te.prototype.hb = g;
te.prototype.ib = function(a, b) {
  return Cc.a(a, b)
};
function Yf(a, b, c, d) {
  this.state = a;
  this.n = b;
  this.tb = c;
  this.ub = d;
  this.j = 2153938944;
  this.t = 2
}
r = Yf.prototype;
r.G = function(a) {
  return a[fa] || (a[fa] = ++ga)
};
r.bb = function(a, b, c) {
  for(var d = H(this.ub), f = l, h = 0, i = 0;;) {
    if(i < h) {
      var j = f.v(f, i), k = R.e(j, 0, l), j = R.e(j, 1, l);
      j.k ? j.k(k, a, b, c) : j.call(l, k, a, b, c);
      i += 1
    }else {
      if(d = H(d)) {
        vc(d) ? (f = eb(d), d = fb(d), k = f, h = Q(f), f = k) : (f = I(d), k = R.e(f, 0, l), j = R.e(f, 1, l), j.k ? j.k(k, a, b, c) : j.call(l, k, a, b, c), d = L(d), f = l, h = 0), i = 0
      }else {
        return l
      }
    }
  }
};
r.H = function(a, b, c) {
  D(b, "#<Atom: ");
  Z(this.state, b, c);
  return D(b, ">")
};
r.I = n("n");
r.jb = n("state");
r.C = function(a, b) {
  return a === b
};
var Zf, $f = l;
function ag(a) {
  return new Yf(a, l, l, l)
}
function bg(a, b) {
  var c;
  c = b == l ? m : b ? ((c = b.j & 64) ? c : b.Sa) ? g : b.j ? m : w(ya, b) : w(ya, b);
  var d = c ? mc.a(hc, b) : b;
  c = $b.a(d, "\ufdd0:validator");
  d = $b.a(d, "\ufdd0:meta");
  return new Yf(a, d, c, l)
}
function cg(a, b) {
  var c = l;
  1 < arguments.length && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return bg.call(this, a, c)
}
cg.q = 1;
cg.m = function(a) {
  var b = I(a), a = K(a);
  return bg(b, a)
};
cg.h = bg;
$f = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ag.call(this, a);
    default:
      return cg.h(a, M(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
$f.q = 1;
$f.m = cg.m;
$f.c = ag;
$f.h = cg.h;
Zf = $f;
function dg(a, b) {
  var c = a.tb;
  v(c) && !v(c.c ? c.c(b) : c.call(l, b)) && e(Error([E("Assert failed: "), E("Validator rejected reference state"), E("\n"), E(Xf.h(M([nc(Fb(new ib(l, "validate", "validate", 1233162959, l), new ib(l, "new-value", "new-value", 972165309, l)), hc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  Za(a, c, b);
  return b
}
var eg, fg = l;
function gg(a, b) {
  return dg(a, b.c ? b.c(a.state) : b.call(l, a.state))
}
function hg(a, b, c) {
  return dg(a, b.a ? b.a(a.state, c) : b.call(l, a.state, c))
}
function ig(a, b, c, d) {
  return dg(a, b.e ? b.e(a.state, c, d) : b.call(l, a.state, c, d))
}
function jg(a, b, c, d, f) {
  return dg(a, b.k ? b.k(a.state, c, d, f) : b.call(l, a.state, c, d, f))
}
function kg(a, b, c, d, f, h) {
  return dg(a, mc.h(b, a.state, c, d, f, M([h], 0)))
}
function lg(a, b, c, d, f, h) {
  var i = l;
  5 < arguments.length && (i = M(Array.prototype.slice.call(arguments, 5), 0));
  return kg.call(this, a, b, c, d, f, i)
}
lg.q = 5;
lg.m = function(a) {
  var b = I(a), a = L(a), c = I(a), a = L(a), d = I(a), a = L(a), f = I(a), a = L(a), h = I(a), a = K(a);
  return kg(b, c, d, f, h, a)
};
lg.h = kg;
fg = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return gg.call(this, a, b);
    case 3:
      return hg.call(this, a, b, c);
    case 4:
      return ig.call(this, a, b, c, d);
    case 5:
      return jg.call(this, a, b, c, d, f);
    default:
      return lg.h(a, b, c, d, f, M(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
fg.q = 5;
fg.m = lg.m;
fg.a = gg;
fg.e = hg;
fg.k = ig;
fg.Y = jg;
fg.h = lg.h;
eg = fg;
var mg = l;
function ng() {
  return mg.c(1)
}
function og(a) {
  return(Math.random.r ? Math.random.r() : Math.random.call(l)) * a
}
mg = function(a) {
  switch(arguments.length) {
    case 0:
      return ng.call(this);
    case 1:
      return og.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
mg.r = ng;
mg.c = og;
Pc = mg;
var pg, qg, rg, sg;
function tg() {
  return ca.navigator ? ca.navigator.userAgent : l
}
sg = rg = qg = pg = m;
var ug;
if(ug = tg()) {
  var vg = ca.navigator;
  pg = 0 == ug.indexOf("Opera");
  qg = !pg && -1 != ug.indexOf("MSIE");
  rg = !pg && -1 != ug.indexOf("WebKit");
  sg = !pg && !rg && "Gecko" == vg.product
}
var wg = pg, xg = qg, yg = sg, zg = rg, Ag;
a: {
  var Bg = "", Cg;
  if(wg && ca.opera) {
    var Dg = ca.opera.version, Bg = "function" == typeof Dg ? Dg() : Dg
  }else {
    if(yg ? Cg = /rv\:([^\);]+)(\)|;)/ : xg ? Cg = /MSIE\s+([^\);]+)(\)|;)/ : zg && (Cg = /WebKit\/(\S+)/), Cg) {
      var Eg = Cg.exec(tg()), Bg = Eg ? Eg[1] : ""
    }
  }
  if(xg) {
    var Fg, Gg = ca.document;
    Fg = Gg ? Gg.documentMode : aa;
    if(Fg > parseFloat(Bg)) {
      Ag = String(Fg);
      break a
    }
  }
  Ag = Bg
}
var Hg = {};
function Ig(a) {
  var b;
  if(!(b = Hg[a])) {
    b = 0;
    for(var c = String(Ag).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), h = 0;0 == b && h < f;h++) {
      var i = c[h] || "", j = d[h] || "", k = RegExp("(\\d*)(\\D*)", "g"), s = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = k.exec(i) || ["", "", ""], t = s.exec(j) || ["", "", ""];
        if(0 == q[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == t[2].length) ? -1 : (0 == q[2].length) > (0 == t[2].length) ? 1 : 0) || (q[2] < t[2] ? -1 : q[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Hg[a] = 0 <= b
  }
  return b
}
var Jg = {};
function Kg() {
  return Jg[9] || (Jg[9] = xg && !!document.documentMode && 9 <= document.documentMode)
}
;!xg || Kg();
!xg || Kg();
xg && Ig("8");
!zg || Ig("528");
yg && Ig("1.9b") || xg && Ig("8") || wg && Ig("9.5") || zg && Ig("528");
yg && !Ig("8") || xg && Ig("9");
!xg || Kg();
!yg && !xg || xg && Kg() || yg && Ig("1.9.1");
xg && Ig("9");
var Lg = document.createElement("div");
Lg.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
nb.a(Lg.firstChild.nodeType, 3);
nb.a(Lg.getElementsByTagName("tbody").length, 0);
nb.a(Lg.getElementsByTagName("link").length, 0);
var Mg = X([1, "<select multiple='multiple'>", "</select>"]), Ng = X([1, "<table>", "</table>"]), Og = X([3, "<table><tbody><tr>", "</tr></tbody></table>"]);
a: {
  for(var Pg = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), Qg = [X([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), X([0, "", ""]), Ng, Ng, Mg, X([1, "<fieldset>", "</fieldset>"]), X([1, "<map>", "</map>"]), Og, Ng, Og, Mg, Ng, X([2, "<table><tbody>", "</tbody></table>"]), Ng], Rg = Pg.length, Sg = 0, Tg = $a(Pe);;) {
    if(Sg < Rg) {
      var Ug = Sg + 1, Vg = cb(Tg, Pg[Sg], Qg[Sg]), Sg = Ug, Tg = Vg
    }else {
      bb(Tg);
      break a
    }
  }
}
var Wg, Xg = l;
function Yg(a) {
  return Xg.a(a, 0)
}
function Zg(a, b) {
  return b < a.length ? new U(l, m, function() {
    return O(a.item(b), Xg.a(a, b + 1))
  }, l) : l
}
Xg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Yg.call(this, a);
    case 2:
      return Zg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xg.c = Yg;
Xg.a = Zg;
Wg = Xg;
var $g, ah = l;
function bh(a) {
  return ah.a(a, 0)
}
function ch(a, b) {
  return b < a.length ? new U(l, m, function() {
    return O(a[b], ah.a(a, b + 1))
  }, l) : l
}
ah = function(a, b) {
  switch(arguments.length) {
    case 1:
      return bh.call(this, a);
    case 2:
      return ch.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ah.c = bh;
ah.a = ch;
$g = ah;
function dh(a) {
  return v(a.item) ? Wg.c(a) : $g.c(a)
}
v("undefined" != typeof NodeList) && (r = NodeList.prototype, r.Ta = g, r.w = function(a) {
  return dh(a)
}, r.ua = g, r.v = function(a, b) {
  return a.item(b)
}, r.L = function(a, b, c) {
  return a.length <= b ? c : R.a(a, b)
}, r.Ea = g, r.B = function(a) {
  return a.length
});
v("undefined" != typeof StaticNodeList) && (r = StaticNodeList.prototype, r.Ta = g, r.w = function(a) {
  return dh(a)
}, r.ua = g, r.v = function(a, b) {
  return a.item(b)
}, r.L = function(a, b, c) {
  return a.length <= b ? c : R.a(a, b)
}, r.Ea = g, r.B = function(a) {
  return a.length
});
v("undefined" != typeof HTMLCollection) && (r = HTMLCollection.prototype, r.Ta = g, r.w = function(a) {
  return dh(a)
}, r.ua = g, r.v = function(a, b) {
  return a.item(b)
}, r.L = function(a, b, c) {
  return a.length <= b ? c : R.a(a, b)
}, r.Ea = g, r.B = function(a) {
  return a.length
});
function eh() {
  return(new Date).getTime()
}
da("ca_vote.display.now", eh);
function fh(a) {
  return console.log("" + E(a))
}
function gh(a) {
  var b = l;
  0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return fh.call(this, b)
}
gh.q = 0;
gh.m = function(a) {
  a = H(a);
  return fh(a)
};
gh.h = fh;
var hh = Zf.c(0), ih = Zf.c(l);
Zf.c(l);
function jh(a) {
  if(0 > a) {
    a += 301
  }else {
    var b = Oc((a - a % 301) / 301), a = a - 301 * b
  }
  return a
}
function kh(a, b) {
  var c = $b.a(b, a), c = na(c) ? X([0, -1, -3]) : X([0, 1, 3]), c = Rd.a(function(c) {
    return R.a(b, jh(a + c))
  }, c);
  return 2 <= Q(he(zc, c))
}
function lh(a, b, c, d) {
  d.fillStyle = c;
  d.strokeStyle = c;
  d.fillRect(a * C(hh) + 0, b * C(hh) + 0, C(hh), C(hh));
  d.strokeRect(a * C(hh) + 0, b * C(hh) + 0, C(hh), C(hh))
}
da("ca_vote.display.draw", function() {
  dg(ih, eh());
  var a, b = Jf("voting");
  a = ea(b) ? document.getElementById(b) : b;
  var b = a.getContext("2d"), c = a.width;
  a = Zf.c(Ae(Yd(301, ce.c(function() {
    return Ae(Yd(301, Zd.c(l)))
  }))));
  dg(hh, (c - 0) / 301);
  for(var c = H(Mf.c(301)), d = l, f = 0, h = 0;;) {
    if(h < f) {
      var i = d.v(d, h);
      0.5 < Pc.r() ? (lh(i, 0, "#666", b), eg.k(a, ke, X([0, i]), g)) : (lh(i, 0, "#eee", b), eg.k(a, ke, X([0, i]), m));
      h += 1
    }else {
      if(c = H(c)) {
        d = c, vc(d) ? (c = eb(d), h = fb(d), d = c, f = Q(c), c = h) : (c = I(d), 0.5 < Pc.r() ? (lh(c, 0, "#666", b), eg.k(a, ke, X([0, c]), g)) : (lh(c, 0, "#eee", b), eg.k(a, ke, X([0, c]), m)), c = L(d), d = l, f = 0), h = 0
      }else {
        break
      }
    }
  }
  c = H(Mf.a(1, 301));
  d = l;
  for(h = f = 0;;) {
    if(h < f) {
      for(var i = d.v(d, h), j = H(Mf.c(301)), k = l, s = 0, q = 0;;) {
        if(q < s) {
          var t = k.v(k, q);
          v(kh(t, R.a(C(a), i - 1))) ? (eg.k(a, ke, X([i, t]), g), lh(t, i, "#666", b)) : (eg.k(a, ke, X([i, t]), m), lh(t, i, "#eee", b));
          q += 1
        }else {
          if(j = H(j)) {
            k = j, vc(k) ? (j = eb(k), q = fb(k), k = j, s = Q(j), j = q) : (j = I(k), v(kh(j, R.a(C(a), i - 1))) ? (eg.k(a, ke, X([i, j]), g), lh(j, i, "#666", b)) : (eg.k(a, ke, X([i, j]), m), lh(j, i, "#eee", b)), j = L(k), k = l, s = 0), q = 0
          }else {
            break
          }
        }
      }
      h += 1
    }else {
      if(c = H(c)) {
        if(vc(c)) {
          f = eb(c), c = fb(c), d = f, f = Q(f)
        }else {
          d = I(c);
          f = H(Mf.c(301));
          h = l;
          for(j = i = 0;;) {
            if(j < i) {
              k = h.v(h, j), v(kh(k, R.a(C(a), d - 1))) ? (eg.k(a, ke, X([d, k]), g), lh(k, d, "#666", b)) : (eg.k(a, ke, X([d, k]), m), lh(k, d, "#eee", b)), j += 1
            }else {
              if(f = H(f)) {
                h = f, vc(h) ? (f = eb(h), j = fb(h), h = f, i = Q(f), f = j) : (f = I(h), v(kh(f, R.a(C(a), d - 1))) ? (eg.k(a, ke, X([d, f]), g), lh(f, d, "#666", b)) : (eg.k(a, ke, X([d, f]), m), lh(f, d, "#eee", b)), f = L(h), h = l, i = 0), j = 0
              }else {
                break
              }
            }
          }
          c = L(c);
          d = l;
          f = 0
        }
        h = 0
      }else {
        break
      }
    }
  }
  return gh.h(M([eh() - C(ih)], 0))
});
