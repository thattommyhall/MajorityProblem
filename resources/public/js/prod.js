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
var s, ca = this;
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
function da(a) {
  return"string" == typeof a
}
var ea = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), fa = 0;
function ga(a, b) {
  var c = a.split("."), d = ca;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && b !== aa ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
;function ha(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function ia(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, r, q, t) {
    if("%" == r) {
      return"%"
    }
    var z = c.shift();
    "undefined" == typeof z && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = z;
    return ia.aa[r].apply(l, arguments)
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
var la;
ga("cljs.core.set_print_fn_BANG_", ba());
function ma() {
  var a = ["\ufdd0:flush-on-newline", g, "\ufdd0:readably", g, "\ufdd0:meta", m, "\ufdd0:dup", m];
  return new na(l, a.length / 2, a, l)
}
function v(a) {
  return a != l && a !== m
}
function oa(a) {
  var b = da(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function w(a, b) {
  return a[u(b == l ? l : b)] ? g : a._ ? g : m
}
function x(a, b) {
  var c = b == l ? l : b.constructor, c = v(v(c) ? c.eb : c) ? c.qb : u(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var pa = {}, qa = {};
function y(a) {
  if(a ? a.B : a) {
    return a.B(a)
  }
  var b;
  var c = y[u(a == l ? l : a)];
  c ? b = c : (c = y._) ? b = c : e(x("ICounted.-count", a));
  return b.call(l, a)
}
function ra(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var d = ra[u(a == l ? l : a)];
  d ? c = d : (d = ra._) ? c = d : e(x("ICollection.-conj", a));
  return c.call(l, a, b)
}
var sa = {}, A, ta = l;
function ua(a, b) {
  if(a ? a.v : a) {
    return a.v(a, b)
  }
  var c;
  var d = A[u(a == l ? l : a)];
  d ? c = d : (d = A._) ? c = d : e(x("IIndexed.-nth", a));
  return c.call(l, a, b)
}
function va(a, b, c) {
  if(a ? a.L : a) {
    return a.L(a, b, c)
  }
  var d;
  var f = A[u(a == l ? l : a)];
  f ? d = f : (f = A._) ? d = f : e(x("IIndexed.-nth", a));
  return d.call(l, a, b, c)
}
ta = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ua.call(this, a, b);
    case 3:
      return va.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ta.a = ua;
ta.e = va;
A = ta;
var wa = {};
function B(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = B[u(a == l ? l : a)];
  c ? b = c : (c = B._) ? b = c : e(x("ISeq.-first", a));
  return b.call(l, a)
}
function C(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  var c = C[u(a == l ? l : a)];
  c ? b = c : (c = C._) ? b = c : e(x("ISeq.-rest", a));
  return b.call(l, a)
}
var xa = {}, ya, za = l;
function Aa(a, b) {
  if(a ? a.M : a) {
    return a.M(a, b)
  }
  var c;
  var d = ya[u(a == l ? l : a)];
  d ? c = d : (d = ya._) ? c = d : e(x("ILookup.-lookup", a));
  return c.call(l, a, b)
}
function Ba(a, b, c) {
  if(a ? a.D : a) {
    return a.D(a, b, c)
  }
  var d;
  var f = ya[u(a == l ? l : a)];
  f ? d = f : (f = ya._) ? d = f : e(x("ILookup.-lookup", a));
  return d.call(l, a, b, c)
}
za = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Aa.call(this, a, b);
    case 3:
      return Ba.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
za.a = Aa;
za.e = Ba;
ya = za;
function Ca(a, b, c) {
  if(a ? a.da : a) {
    return a.da(a, b, c)
  }
  var d;
  var f = Ca[u(a == l ? l : a)];
  f ? d = f : (f = Ca._) ? d = f : e(x("IAssociative.-assoc", a));
  return d.call(l, a, b, c)
}
var Da = {}, Ea = {};
function Fa(a) {
  if(a ? a.Za : a) {
    return a.Za(a)
  }
  var b;
  var c = Fa[u(a == l ? l : a)];
  c ? b = c : (c = Fa._) ? b = c : e(x("IMapEntry.-key", a));
  return b.call(l, a)
}
function Ga(a) {
  if(a ? a.$a : a) {
    return a.$a(a)
  }
  var b;
  var c = Ga[u(a == l ? l : a)];
  c ? b = c : (c = Ga._) ? b = c : e(x("IMapEntry.-val", a));
  return b.call(l, a)
}
var Ha = {};
function Ia(a) {
  if(a ? a.jb : a) {
    return a.state
  }
  var b;
  var c = Ia[u(a == l ? l : a)];
  c ? b = c : (c = Ia._) ? b = c : e(x("IDeref.-deref", a));
  return b.call(l, a)
}
var Ka = {};
function La(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  var c = La[u(a == l ? l : a)];
  c ? b = c : (c = La._) ? b = c : e(x("IMeta.-meta", a));
  return b.call(l, a)
}
var Ma = {};
function Na(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  var d = Na[u(a == l ? l : a)];
  d ? c = d : (d = Na._) ? c = d : e(x("IWithMeta.-with-meta", a));
  return c.call(l, a, b)
}
var Oa = {}, Pa, Qa = l;
function Ra(a, b) {
  if(a ? a.ma : a) {
    return a.ma(a, b)
  }
  var c;
  var d = Pa[u(a == l ? l : a)];
  d ? c = d : (d = Pa._) ? c = d : e(x("IReduce.-reduce", a));
  return c.call(l, a, b)
}
function Sa(a, b, c) {
  if(a ? a.na : a) {
    return a.na(a, b, c)
  }
  var d;
  var f = Pa[u(a == l ? l : a)];
  f ? d = f : (f = Pa._) ? d = f : e(x("IReduce.-reduce", a));
  return d.call(l, a, b, c)
}
Qa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ra.call(this, a, b);
    case 3:
      return Sa.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qa.a = Ra;
Qa.e = Sa;
Pa = Qa;
function Ta(a, b) {
  if(a ? a.C : a) {
    return a.C(a, b)
  }
  var c;
  var d = Ta[u(a == l ? l : a)];
  d ? c = d : (d = Ta._) ? c = d : e(x("IEquiv.-equiv", a));
  return c.call(l, a, b)
}
function Ua(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = Ua[u(a == l ? l : a)];
  c ? b = c : (c = Ua._) ? b = c : e(x("IHash.-hash", a));
  return b.call(l, a)
}
function Va(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = Va[u(a == l ? l : a)];
  c ? b = c : (c = Va._) ? b = c : e(x("ISeqable.-seq", a));
  return b.call(l, a)
}
var Wa = {};
function D(a, b) {
  if(a ? a.cb : a) {
    return a.cb(0, b)
  }
  var c;
  var d = D[u(a == l ? l : a)];
  d ? c = d : (d = D._) ? c = d : e(x("IWriter.-write", a));
  return c.call(l, a, b)
}
function Xa(a) {
  if(a ? a.ob : a) {
    return l
  }
  var b;
  var c = Xa[u(a == l ? l : a)];
  c ? b = c : (c = Xa._) ? b = c : e(x("IWriter.-flush", a));
  return b.call(l, a)
}
function Ya(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  var f = Ya[u(a == l ? l : a)];
  f ? d = f : (f = Ya._) ? d = f : e(x("IWatchable.-notify-watches", a));
  return d.call(l, a, b, c)
}
function Za(a) {
  if(a ? a.ta : a) {
    return a.ta(a)
  }
  var b;
  var c = Za[u(a == l ? l : a)];
  c ? b = c : (c = Za._) ? b = c : e(x("IEditableCollection.-as-transient", a));
  return b.call(l, a)
}
function $a(a, b) {
  if(a ? a.va : a) {
    return a.va(a, b)
  }
  var c;
  var d = $a[u(a == l ? l : a)];
  d ? c = d : (d = $a._) ? c = d : e(x("ITransientCollection.-conj!", a));
  return c.call(l, a, b)
}
function ab(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  var c = ab[u(a == l ? l : a)];
  c ? b = c : (c = ab._) ? b = c : e(x("ITransientCollection.-persistent!", a));
  return b.call(l, a)
}
function bb(a, b, c) {
  if(a ? a.oa : a) {
    return a.oa(a, b, c)
  }
  var d;
  var f = bb[u(a == l ? l : a)];
  f ? d = f : (f = bb._) ? d = f : e(x("ITransientAssociative.-assoc!", a));
  return d.call(l, a, b, c)
}
function cb(a) {
  if(a ? a.Xa : a) {
    return a.Xa()
  }
  var b;
  var c = cb[u(a == l ? l : a)];
  c ? b = c : (c = cb._) ? b = c : e(x("IChunk.-drop-first", a));
  return b.call(l, a)
}
function db(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  var c = db[u(a == l ? l : a)];
  c ? b = c : (c = db._) ? b = c : e(x("IChunkedSeq.-chunked-first", a));
  return b.call(l, a)
}
function eb(a) {
  if(a ? a.za : a) {
    return a.za(a)
  }
  var b;
  var c = eb[u(a == l ? l : a)];
  c ? b = c : (c = eb._) ? b = c : e(x("IChunkedSeq.-chunked-rest", a));
  return b.call(l, a)
}
function fb(a) {
  this.sb = a;
  this.t = 0;
  this.j = 1073741824
}
fb.prototype.cb = function(a, b) {
  return this.sb.append(b)
};
fb.prototype.ob = p(l);
function E(a) {
  var b = new ja, c = new fb(b);
  a.H(a, c, ma());
  Xa(c);
  return"" + F(b)
}
function gb(a, b, c, d, f) {
  this.ra = a;
  this.name = b;
  this.ja = c;
  this.ya = d;
  this.fb = f;
  this.t = 0;
  this.j = 2154168321
}
s = gb.prototype;
s.H = function(a, b) {
  return D(b, this.ja)
};
s.ab = g;
s.G = function() {
  -1 === this.ya && (this.ya = hb.a ? hb.a(H.c ? H.c(this.ra) : H.call(l, this.ra), H.c ? H.c(this.name) : H.call(l, this.name)) : hb.call(l, H.c ? H.c(this.ra) : H.call(l, this.ra), H.c ? H.c(this.name) : H.call(l, this.name)));
  return this.ya
};
s.J = function(a, b) {
  return new gb(this.ra, this.name, this.ja, this.ya, b)
};
s.I = n("fb");
var ib = l, ib = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ya.e(b, this, l);
    case 3:
      return ya.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
gb.prototype.call = ib;
gb.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
gb.prototype.C = function(a, b) {
  return b instanceof gb ? this.ja === b.ja : m
};
gb.prototype.toString = n("ja");
function J(a) {
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
  if(a instanceof Array || oa(a)) {
    return 0 === a.length ? l : new jb(a, 0)
  }
  if(w(xa, a)) {
    return Va(a)
  }
  e(Error([F(a), F("is not ISeqable")].join("")))
}
function K(a) {
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
  a = J(a);
  return a == l ? l : B(a)
}
function L(a) {
  if(a != l) {
    var b;
    if(b = a) {
      b = (b = a.j & 64) ? b : a.Sa
    }
    if(b) {
      return a.P(a)
    }
    a = J(a);
    return a != l ? C(a) : kb
  }
  return kb
}
function N(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    if(b = a) {
      b = (b = a.j & 128) ? b : a.yb
    }
    a = b ? a.ea(a) : J(L(a))
  }
  return a
}
var lb, mb = l;
function nb(a, b) {
  var c = a === b;
  return c ? c : Ta(a, b)
}
function ob(a, b, c) {
  for(;;) {
    if(v(mb.a(a, b))) {
      if(N(c)) {
        a = b, b = K(c), c = N(c)
      }else {
        return mb.a(b, K(c))
      }
    }else {
      return m
    }
  }
}
function pb(a, b, c) {
  var d = l;
  2 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return ob.call(this, a, b, d)
}
pb.q = 2;
pb.l = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return ob(b, c, a)
};
pb.h = ob;
mb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return g;
    case 2:
      return nb.call(this, a, b);
    default:
      return pb.h(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
mb.q = 2;
mb.l = pb.l;
mb.c = p(g);
mb.a = nb;
mb.h = pb.h;
lb = mb;
Ua["null"] = p(0);
qa["null"] = g;
y["null"] = p(0);
Ta["null"] = function(a, b) {
  return b == l
};
Ma["null"] = g;
Na["null"] = p(l);
Ka["null"] = g;
La["null"] = p(l);
Da["null"] = g;
Date.prototype.C = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
Ua.number = function(a) {
  return Math.floor(a) % 2147483647
};
Ta.number = function(a, b) {
  return a === b
};
Ua["boolean"] = function(a) {
  return a === g ? 1 : 0
};
Ka["function"] = g;
La["function"] = p(l);
pa["function"] = g;
Ua._ = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
var qb, rb = l;
function sb(a, b) {
  var c = y(a);
  if(0 === c) {
    return b.r ? b.r() : b.call(l)
  }
  for(var d = A.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, A.a(a, f)) : b.call(l, d, A.a(a, f)), f += 1
    }else {
      return d
    }
  }
}
function tb(a, b, c) {
  for(var d = y(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, A.a(a, f)) : b.call(l, c, A.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function ub(a, b, c, d) {
  for(var f = y(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, A.a(a, d)) : b.call(l, c, A.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
rb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return sb.call(this, a, b);
    case 3:
      return tb.call(this, a, b, c);
    case 4:
      return ub.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rb.a = sb;
rb.e = tb;
rb.o = ub;
qb = rb;
var vb, wb = l;
function xb(a, b) {
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
function yb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(l, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function zb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(l, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
wb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return xb.call(this, a, b);
    case 3:
      return yb.call(this, a, b, c);
    case 4:
      return zb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wb.a = xb;
wb.e = yb;
wb.o = zb;
vb = wb;
function Ab(a) {
  if(a) {
    var b = a.j & 2, a = (b ? b : a.Ea) ? g : a.j ? m : w(qa, a)
  }else {
    a = w(qa, a)
  }
  return a
}
function Bb(a) {
  if(a) {
    var b = a.j & 16, a = (b ? b : a.ua) ? g : a.j ? m : w(sa, a)
  }else {
    a = w(sa, a)
  }
  return a
}
function jb(a, b) {
  this.b = a;
  this.n = b;
  this.t = 0;
  this.j = 166199550
}
s = jb.prototype;
s.G = function(a) {
  return Cb.c ? Cb.c(a) : Cb.call(l, a)
};
s.ea = function() {
  return this.n + 1 < this.b.length ? new jb(this.b, this.n + 1) : l
};
s.F = function(a, b) {
  return Q.a ? Q.a(b, a) : Q.call(l, b, a)
};
s.toString = function() {
  return E(this)
};
s.ma = function(a, b) {
  return vb.o(this.b, b, this.b[this.n], this.n + 1)
};
s.na = function(a, b, c) {
  return vb.o(this.b, b, c, this.n)
};
s.w = ba();
s.B = function() {
  return this.b.length - this.n
};
s.O = function() {
  return this.b[this.n]
};
s.P = function() {
  return this.n + 1 < this.b.length ? new jb(this.b, this.n + 1) : Db.r ? Db.r() : Db.call(l)
};
s.C = function(a, b) {
  return Eb.a ? Eb.a(a, b) : Eb.call(l, a, b)
};
s.v = function(a, b) {
  var c = b + this.n;
  return c < this.b.length ? this.b[c] : l
};
s.L = function(a, b, c) {
  a = b + this.n;
  return a < this.b.length ? this.b[a] : c
};
var Fb, Gb = l;
function Hb(a) {
  return Gb.a(a, 0)
}
function Ib(a, b) {
  return b < a.length ? new jb(a, b) : l
}
Gb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Hb.call(this, a);
    case 2:
      return Ib.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gb.c = Hb;
Gb.a = Ib;
Fb = Gb;
var O, Jb = l;
function Kb(a) {
  return Fb.a(a, 0)
}
function Lb(a, b) {
  return Fb.a(a, b)
}
Jb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Kb.call(this, a);
    case 2:
      return Lb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jb.c = Kb;
Jb.a = Lb;
O = Jb;
qa.array = g;
y.array = function(a) {
  return a.length
};
Ta._ = function(a, b) {
  return a === b
};
var Mb, Nb = l;
function Ob(a, b) {
  return a != l ? ra(a, b) : Db.c ? Db.c(b) : Db.call(l, b)
}
function Pb(a, b, c) {
  for(;;) {
    if(v(c)) {
      a = Nb.a(a, b), b = K(c), c = N(c)
    }else {
      return Nb.a(a, b)
    }
  }
}
function Qb(a, b, c) {
  var d = l;
  2 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return Pb.call(this, a, b, d)
}
Qb.q = 2;
Qb.l = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return Pb(b, c, a)
};
Qb.h = Pb;
Nb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ob.call(this, a, b);
    default:
      return Qb.h(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nb.q = 2;
Nb.l = Qb.l;
Nb.a = Ob;
Nb.h = Qb.h;
Mb = Nb;
function R(a) {
  if(Ab(a)) {
    a = y(a)
  }else {
    a: {
      for(var a = J(a), b = 0;;) {
        if(Ab(a)) {
          a = b + y(a);
          break a
        }
        a = N(a);
        b += 1
      }
      a = aa
    }
  }
  return a
}
var Rb, Sb = l;
function Tb(a, b) {
  for(;;) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(J(a)) {
        return K(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Bb(a)) {
      return A.a(a, b)
    }
    if(J(a)) {
      var c = N(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function Ub(a, b, c) {
  for(;;) {
    if(a == l) {
      return c
    }
    if(0 === b) {
      return J(a) ? K(a) : c
    }
    if(Bb(a)) {
      return A.e(a, b, c)
    }
    if(J(a)) {
      a = N(a), b -= 1
    }else {
      return c
    }
  }
}
Sb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Tb.call(this, a, b);
    case 3:
      return Ub.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sb.a = Tb;
Sb.e = Ub;
Rb = Sb;
var Vb, Wb = l;
function Xb(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 16) ? c : a.ua
    }
    c = c ? a.v(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : l : oa(a) ? b < a.length ? a[b] : l : Rb.a(a, Math.floor(b))
  }
  return c
}
function Yb(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 16) ? d : a.ua
    }
    a = d ? a.L(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : oa(a) ? b < a.length ? a[b] : c : Rb.e(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
Wb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Xb.call(this, a, b);
    case 3:
      return Yb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wb.a = Xb;
Wb.e = Yb;
Vb = Wb;
var Zb, $b = l;
function ac(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 256) ? c : a.kb
    }
    c = c ? a.M(a, b) : a instanceof Array ? b < a.length ? a[b] : l : oa(a) ? b < a.length ? a[b] : l : w(xa, a) ? ya.a(a, b) : l
  }
  return c
}
function bc(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 256) ? d : a.kb
    }
    a = d ? a.D(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : oa(a) ? b < a.length ? a[b] : c : w(xa, a) ? ya.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
$b = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ac.call(this, a, b);
    case 3:
      return bc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$b.a = ac;
$b.e = bc;
Zb = $b;
function dc(a) {
  var b = "function" == u(a);
  return b ? b : a ? v(v(l) ? l : a.gb) ? g : a.Cb ? m : w(pa, a) : w(pa, a)
}
var gc = function ec(b, c) {
  var d;
  if(d = dc(b)) {
    d = b ? ((d = b.j & 262144) ? d : b.Bb) || (b.j ? 0 : w(Ma, b)) : w(Ma, b), d = !d
  }
  if(d) {
    if(aa === la) {
      la = {};
      la = function(b, c, d, f) {
        this.m = b;
        this.Va = c;
        this.vb = d;
        this.rb = f;
        this.t = 0;
        this.j = 393217
      };
      la.eb = g;
      la.qb = "cljs.core/t5519";
      la.pb = function(b) {
        return D(b, "cljs.core/t5519")
      };
      var f = function(b, c) {
        return fc.a ? fc.a(b.Va, c) : fc.call(l, b.Va, c)
      };
      d = function(b, c) {
        var b = this, d = l;
        1 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.q = 1;
      d.l = function(b) {
        var c = K(b), b = L(b);
        return f(c, b)
      };
      d.h = f;
      la.prototype.call = d;
      la.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      la.prototype.gb = g;
      la.prototype.I = n("rb");
      la.prototype.J = function(b, c) {
        return new la(this.m, this.Va, this.vb, c)
      }
    }
    d = new la(c, b, ec, l);
    d = ec(d, c)
  }else {
    d = Na(b, c)
  }
  return d
};
function hc(a) {
  var b;
  b = a ? ((b = a.j & 131072) ? b : a.mb) || (a.j ? 0 : w(Ka, a)) : w(Ka, a);
  return b ? La(a) : l
}
var ic = {}, jc = 0, H, kc = l;
function lc(a) {
  return kc.a(a, g)
}
function mc(a, b) {
  var c = da(a);
  (c ? b : c) ? (255 < jc && (ic = {}, jc = 0), c = ic[a], "number" !== typeof c && (c = ha(a), ic[a] = c, jc += 1)) : c = Ua(a);
  return c
}
kc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return lc.call(this, a);
    case 2:
      return mc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
kc.c = lc;
kc.a = mc;
H = kc;
function nc(a) {
  if(a) {
    var b = a.j & 16384, a = (b ? b : a.Ab) ? g : a.j ? m : w(Ha, a)
  }else {
    a = w(Ha, a)
  }
  return a
}
function oc(a) {
  var b = a instanceof pc;
  return b ? b : a instanceof qc
}
function rc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
function sc(a) {
  var b = da(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function tc(a, b) {
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
var uc, vc = l;
function wc(a, b) {
  var c = R(a), d = R(b);
  return c < d ? -1 : c > d ? 1 : vc.o(a, b, c, 0)
}
function xc(a, b, c, d) {
  for(;;) {
    var f = tc(Vb.a(a, d), Vb.a(b, d)), h = 0 === f;
    if(h ? d + 1 < c : h) {
      d += 1
    }else {
      return f
    }
  }
}
vc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return wc.call(this, a, b);
    case 4:
      return xc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
vc.a = wc;
vc.o = xc;
uc = vc;
var yc, zc = l;
function Ac(a, b) {
  var c = J(b);
  return c ? Bc.e ? Bc.e(a, K(c), N(c)) : Bc.call(l, a, K(c), N(c)) : a.r ? a.r() : a.call(l)
}
function Cc(a, b, c) {
  for(c = J(c);;) {
    if(c) {
      b = a.a ? a.a(b, K(c)) : a.call(l, b, K(c)), c = N(c)
    }else {
      return b
    }
  }
}
zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ac.call(this, a, b);
    case 3:
      return Cc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
zc.a = Ac;
zc.e = Cc;
yc = zc;
var Bc, Dc = l;
function Ec(a, b) {
  var c;
  if(c = b) {
    c = (c = b.j & 524288) ? c : b.nb
  }
  return c ? b.ma(b, a) : b instanceof Array ? vb.a(b, a) : oa(b) ? vb.a(b, a) : w(Oa, b) ? Pa.a(b, a) : yc.a(a, b)
}
function Fc(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.j & 524288) ? d : c.nb
  }
  return d ? c.na(c, a, b) : c instanceof Array ? vb.e(c, a, b) : oa(c) ? vb.e(c, a, b) : w(Oa, c) ? Pa.e(c, a, b) : yc.e(a, b, c)
}
Dc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ec.call(this, a, b);
    case 3:
      return Fc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dc.a = Ec;
Dc.e = Fc;
Bc = Dc;
function Gc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(l, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(l, a)
}
var Hc, Ic = l;
function Jc() {
  return Math.random.r ? Math.random.r() : Math.random.call(l)
}
function Kc(a) {
  return a * Ic.r()
}
Ic = function(a) {
  switch(arguments.length) {
    case 0:
      return Jc.call(this);
    case 1:
      return Kc.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ic.r = Jc;
Ic.c = Kc;
Hc = Ic;
function Lc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Mc, Nc = l;
function Oc(a) {
  return a == l ? "" : a.toString()
}
function Pc(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append(Nc.c(K(b))), h = N(b), a = f, b = h
      }else {
        return Nc.c(a)
      }
    }
  }.call(l, new ja(Nc.c(a)), b)
}
function Qc(a, b) {
  var c = l;
  1 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Pc.call(this, a, c)
}
Qc.q = 1;
Qc.l = function(a) {
  var b = K(a), a = L(a);
  return Pc(b, a)
};
Qc.h = Pc;
Nc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Oc.call(this, a);
    default:
      return Qc.h(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nc.q = 1;
Nc.l = Qc.l;
Nc.r = p("");
Nc.c = Oc;
Nc.h = Qc.h;
Mc = Nc;
var F, Rc = l;
function Sc(a) {
  return sc(a) ? Mc.h(":", O([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
}
function Tc(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append(Rc.c(K(b))), h = N(b), a = f, b = h
      }else {
        return Mc.c(a)
      }
    }
  }.call(l, new ja(Rc.c(a)), b)
}
function Uc(a, b) {
  var c = l;
  1 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Tc.call(this, a, c)
}
Uc.q = 1;
Uc.l = function(a) {
  var b = K(a), a = L(a);
  return Tc(b, a)
};
Uc.h = Tc;
Rc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Sc.call(this, a);
    default:
      return Uc.h(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rc.q = 1;
Rc.l = Uc.l;
Rc.r = p("");
Rc.c = Sc;
Rc.h = Uc.h;
F = Rc;
var Vc, Wc = l, Wc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wc.a = function(a, b) {
  return a.substring(b)
};
Wc.e = function(a, b, c) {
  return a.substring(b, c)
};
Vc = Wc;
function Eb(a, b) {
  var c;
  c = b ? ((c = b.j & 16777216) ? c : b.zb) || (b.j ? 0 : w(Wa, b)) : w(Wa, b);
  if(c) {
    a: {
      c = J(a);
      for(var d = J(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && lb.a(K(c), K(d))) {
          c = N(c), d = N(d)
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
function hb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Cb(a) {
  return Bc.e(function(a, c) {
    return hb(a, H.a(c, m))
  }, H.a(K(a), m), N(a))
}
function Xc(a) {
  for(var b = 0, a = J(a);;) {
    if(a) {
      var c = K(a), b = (b + (H.c(S.c ? S.c(c) : S.call(l, c)) ^ H.c(T.c ? T.c(c) : T.call(l, c)))) % 4503599627370496, a = N(a)
    }else {
      return b
    }
  }
}
function Yc(a, b, c, d, f) {
  this.m = a;
  this.wa = b;
  this.ca = c;
  this.count = d;
  this.k = f;
  this.t = 0;
  this.j = 65413358
}
s = Yc.prototype;
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.ea = function() {
  return 1 === this.count ? l : this.ca
};
s.F = function(a, b) {
  return new Yc(this.m, b, a, this.count + 1, l)
};
s.toString = function() {
  return E(this)
};
s.w = ba();
s.B = n("count");
s.O = n("wa");
s.P = function() {
  return 1 === this.count ? kb : this.ca
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new Yc(b, this.wa, this.ca, this.count, this.k)
};
s.I = n("m");
function Zc(a) {
  this.m = a;
  this.t = 0;
  this.j = 65413326
}
s = Zc.prototype;
s.G = p(0);
s.ea = p(l);
s.F = function(a, b) {
  return new Yc(this.m, b, l, 1, l)
};
s.toString = function() {
  return E(this)
};
s.w = p(l);
s.B = p(0);
s.O = p(l);
s.P = function() {
  return kb
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new Zc(b)
};
s.I = n("m");
var kb = new Zc(l), Db;
function $c(a) {
  var b;
  if(a instanceof jb) {
    b = a.b
  }else {
    a: {
      for(b = [];;) {
        if(a != l) {
          b.push(a.O(a)), a = a.ea(a)
        }else {
          break a
        }
      }
      b = aa
    }
  }
  for(var a = b.length, c = kb;;) {
    if(0 < a) {
      var d = a - 1, c = c.F(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function ad(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return $c.call(this, b)
}
ad.q = 0;
ad.l = function(a) {
  a = J(a);
  return $c(a)
};
ad.h = $c;
Db = ad;
function bd(a, b, c, d) {
  this.m = a;
  this.wa = b;
  this.ca = c;
  this.k = d;
  this.t = 0;
  this.j = 65405164
}
s = bd.prototype;
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.ea = function() {
  return this.ca == l ? l : Va(this.ca)
};
s.F = function(a, b) {
  return new bd(l, b, a, this.k)
};
s.toString = function() {
  return E(this)
};
s.w = ba();
s.O = n("wa");
s.P = function() {
  return this.ca == l ? kb : this.ca
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new bd(b, this.wa, this.ca, this.k)
};
s.I = n("m");
function Q(a, b) {
  var c = b == l;
  if(!c && (c = b)) {
    c = (c = b.j & 64) ? c : b.Sa
  }
  return c ? new bd(l, a, b, l) : new bd(l, a, J(b), l)
}
qa.string = g;
y.string = function(a) {
  return a.length
};
Ua.string = function(a) {
  return ha(a)
};
function cd(a) {
  this.Ua = a;
  this.t = 0;
  this.j = 1
}
var dd = l, dd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == l) {
        d = l
      }else {
        var f = b.ka;
        d = f == l ? ya.e(b, d.Ua, l) : f[d.Ua]
      }
      return d;
    case 3:
      return b == l ? c : ya.e(b, this.Ua, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cd.prototype.call = dd;
cd.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var ed = l, ed = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Zb.a(b, this.toString());
    case 3:
      return Zb.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = ed;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? Zb.a(b[0], a) : Zb.e(b[0], a, b[1])
};
function fd(a) {
  var b = a.x;
  if(a.Wa) {
    return b
  }
  a.x = b.r ? b.r() : b.call(l);
  a.Wa = g;
  return a.x
}
function U(a, b, c, d) {
  this.m = a;
  this.Wa = b;
  this.x = c;
  this.k = d;
  this.t = 0;
  this.j = 31850700
}
s = U.prototype;
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.ea = function(a) {
  return Va(a.P(a))
};
s.F = function(a, b) {
  return Q(b, a)
};
s.toString = function() {
  return E(this)
};
s.w = function(a) {
  return J(fd(a))
};
s.O = function(a) {
  return K(fd(a))
};
s.P = function(a) {
  return L(fd(a))
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new U(b, this.Wa, this.x, this.k)
};
s.I = n("m");
function gd(a, b) {
  this.Ca = a;
  this.end = b;
  this.t = 0;
  this.j = 2
}
gd.prototype.B = n("end");
gd.prototype.add = function(a) {
  this.Ca[this.end] = a;
  return this.end += 1
};
gd.prototype.ha = function() {
  var a = new hd(this.Ca, 0, this.end);
  this.Ca = l;
  return a
};
function hd(a, b, c) {
  this.b = a;
  this.A = b;
  this.end = c;
  this.t = 0;
  this.j = 524306
}
s = hd.prototype;
s.ma = function(a, b) {
  return vb.o(this.b, b, this.b[this.A], this.A + 1)
};
s.na = function(a, b, c) {
  return vb.o(this.b, b, c, this.A)
};
s.Xa = function() {
  this.A === this.end && e(Error("-drop-first of empty chunk"));
  return new hd(this.b, this.A + 1, this.end)
};
s.v = function(a, b) {
  return this.b[this.A + b]
};
s.L = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.A : a) ? this.b[this.A + b] : c
};
s.B = function() {
  return this.end - this.A
};
var id, jd = l;
function kd(a) {
  return new hd(a, 0, a.length)
}
function ld(a, b) {
  return new hd(a, b, a.length)
}
function md(a, b, c) {
  return new hd(a, b, c)
}
jd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return kd.call(this, a);
    case 2:
      return ld.call(this, a, b);
    case 3:
      return md.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
jd.c = kd;
jd.a = ld;
jd.e = md;
id = jd;
function pc(a, b, c, d) {
  this.ha = a;
  this.ga = b;
  this.m = c;
  this.k = d;
  this.j = 31850604;
  this.t = 1536
}
s = pc.prototype;
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.F = function(a, b) {
  return Q(b, a)
};
s.toString = function() {
  return E(this)
};
s.w = ba();
s.O = function() {
  return A.a(this.ha, 0)
};
s.P = function() {
  return 1 < y(this.ha) ? new pc(cb(this.ha), this.ga, this.m, l) : this.ga == l ? kb : this.ga
};
s.Ya = function() {
  return this.ga == l ? l : this.ga
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new pc(this.ha, this.ga, b, this.k)
};
s.I = n("m");
s.Da = n("ha");
s.za = function() {
  return this.ga == l ? kb : this.ga
};
function nd(a, b) {
  return 0 === y(a) ? b : new pc(a, b, l, l)
}
function od(a) {
  for(var b = [];;) {
    if(J(a)) {
      b.push(K(a)), a = N(a)
    }else {
      return b
    }
  }
}
function pd(a, b) {
  if(Ab(a)) {
    return R(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? J(c) : h;
    if(v(h)) {
      c = N(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var rd = function qd(b) {
  return b == l ? l : N(b) == l ? J(K(b)) : Q(K(b), qd(N(b)))
}, sd, td = l;
function ud() {
  return new U(l, m, p(l), l)
}
function vd(a) {
  return new U(l, m, function() {
    return a
  }, l)
}
function wd(a, b) {
  return new U(l, m, function() {
    var c = J(a);
    return c ? oc(c) ? nd(db(c), td.a(eb(c), b)) : Q(K(c), td.a(L(c), b)) : b
  }, l)
}
function xd(a, b, c) {
  return function f(a, b) {
    return new U(l, m, function() {
      var c = J(a);
      return c ? oc(c) ? nd(db(c), f(eb(c), b)) : Q(K(c), f(L(c), b)) : v(b) ? f(K(b), N(b)) : l
    }, l)
  }(td.a(a, b), c)
}
function yd(a, b, c) {
  var d = l;
  2 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return xd.call(this, a, b, d)
}
yd.q = 2;
yd.l = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return xd(b, c, a)
};
yd.h = xd;
td = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return ud.call(this);
    case 1:
      return vd.call(this, a);
    case 2:
      return wd.call(this, a, b);
    default:
      return yd.h(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
td.q = 2;
td.l = yd.l;
td.r = ud;
td.c = vd;
td.a = wd;
td.h = yd.h;
sd = td;
var zd, Ad = l;
function Bd(a, b, c) {
  return Q(a, Q(b, c))
}
function Cd(a, b, c, d) {
  return Q(a, Q(b, Q(c, d)))
}
function Ed(a, b, c, d, f) {
  return Q(a, Q(b, Q(c, Q(d, rd(f)))))
}
function Fd(a, b, c, d, f) {
  var h = l;
  4 < arguments.length && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return Ed.call(this, a, b, c, d, h)
}
Fd.q = 4;
Fd.l = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = L(a);
  return Ed(b, c, d, f, a)
};
Fd.h = Ed;
Ad = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return J(a);
    case 2:
      return Q(a, b);
    case 3:
      return Bd.call(this, a, b, c);
    case 4:
      return Cd.call(this, a, b, c, d);
    default:
      return Fd.h(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ad.q = 4;
Ad.l = Fd.l;
Ad.c = function(a) {
  return J(a)
};
Ad.a = function(a, b) {
  return Q(a, b)
};
Ad.e = Bd;
Ad.o = Cd;
Ad.h = Fd.h;
zd = Ad;
function Gd(a, b, c) {
  var d = J(c);
  if(0 === b) {
    return a.r ? a.r() : a.call(l)
  }
  var c = B(d), f = C(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(l, c)
  }
  var d = B(f), h = C(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(l, c, d)
  }
  var f = B(h), i = C(h);
  if(3 === b) {
    return a.e ? a.e(c, d, f) : a.e ? a.e(c, d, f) : a.call(l, c, d, f)
  }
  var h = B(i), j = C(i);
  if(4 === b) {
    return a.o ? a.o(c, d, f, h) : a.o ? a.o(c, d, f, h) : a.call(l, c, d, f, h)
  }
  i = B(j);
  j = C(j);
  if(5 === b) {
    return a.Z ? a.Z(c, d, f, h, i) : a.Z ? a.Z(c, d, f, h, i) : a.call(l, c, d, f, h, i)
  }
  var a = B(j), k = C(j);
  if(6 === b) {
    return a.$ ? a.$(c, d, f, h, i, a) : a.$ ? a.$(c, d, f, h, i, a) : a.call(l, c, d, f, h, i, a)
  }
  var j = B(k), r = C(k);
  if(7 === b) {
    return a.la ? a.la(c, d, f, h, i, a, j) : a.la ? a.la(c, d, f, h, i, a, j) : a.call(l, c, d, f, h, i, a, j)
  }
  var k = B(r), q = C(r);
  if(8 === b) {
    return a.Qa ? a.Qa(c, d, f, h, i, a, j, k) : a.Qa ? a.Qa(c, d, f, h, i, a, j, k) : a.call(l, c, d, f, h, i, a, j, k)
  }
  var r = B(q), t = C(q);
  if(9 === b) {
    return a.Ra ? a.Ra(c, d, f, h, i, a, j, k, r) : a.Ra ? a.Ra(c, d, f, h, i, a, j, k, r) : a.call(l, c, d, f, h, i, a, j, k, r)
  }
  var q = B(t), z = C(t);
  if(10 === b) {
    return a.Fa ? a.Fa(c, d, f, h, i, a, j, k, r, q) : a.Fa ? a.Fa(c, d, f, h, i, a, j, k, r, q) : a.call(l, c, d, f, h, i, a, j, k, r, q)
  }
  var t = B(z), G = C(z);
  if(11 === b) {
    return a.Ga ? a.Ga(c, d, f, h, i, a, j, k, r, q, t) : a.Ga ? a.Ga(c, d, f, h, i, a, j, k, r, q, t) : a.call(l, c, d, f, h, i, a, j, k, r, q, t)
  }
  var z = B(G), I = C(G);
  if(12 === b) {
    return a.Ha ? a.Ha(c, d, f, h, i, a, j, k, r, q, t, z) : a.Ha ? a.Ha(c, d, f, h, i, a, j, k, r, q, t, z) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z)
  }
  var G = B(I), M = C(I);
  if(13 === b) {
    return a.Ia ? a.Ia(c, d, f, h, i, a, j, k, r, q, t, z, G) : a.Ia ? a.Ia(c, d, f, h, i, a, j, k, r, q, t, z, G) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z, G)
  }
  var I = B(M), P = C(M);
  if(14 === b) {
    return a.Ja ? a.Ja(c, d, f, h, i, a, j, k, r, q, t, z, G, I) : a.Ja ? a.Ja(c, d, f, h, i, a, j, k, r, q, t, z, G, I) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z, G, I)
  }
  var M = B(P), X = C(P);
  if(15 === b) {
    return a.Ka ? a.Ka(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M) : a.Ka ? a.Ka(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z, G, I, M)
  }
  var P = B(X), ka = C(X);
  if(16 === b) {
    return a.La ? a.La(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P) : a.La ? a.La(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P)
  }
  var X = B(ka), Ja = C(ka);
  if(17 === b) {
    return a.Ma ? a.Ma(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X) : a.Ma ? a.Ma(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X)
  }
  var ka = B(Ja), cc = C(Ja);
  if(18 === b) {
    return a.Na ? a.Na(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka) : a.Na ? a.Na(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka)
  }
  Ja = B(cc);
  cc = C(cc);
  if(19 === b) {
    return a.Oa ? a.Oa(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka, Ja) : a.Oa ? a.Oa(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka, Ja) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka, Ja)
  }
  var Dd = B(cc);
  C(cc);
  if(20 === b) {
    return a.Pa ? a.Pa(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka, Ja, Dd) : a.Pa ? a.Pa(c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka, Ja, Dd) : a.call(l, c, d, f, h, i, a, j, k, r, q, t, z, G, I, M, P, X, ka, Ja, Dd)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var fc, Hd = l;
function Id(a, b) {
  var c = a.q;
  if(a.l) {
    var d = pd(b, c + 1);
    return d <= c ? Gd(a, d, b) : a.l(b)
  }
  return a.apply(a, od(b))
}
function Jd(a, b, c) {
  b = zd.a(b, c);
  c = a.q;
  if(a.l) {
    var d = pd(b, c + 1);
    return d <= c ? Gd(a, d, b) : a.l(b)
  }
  return a.apply(a, od(b))
}
function Kd(a, b, c, d) {
  b = zd.e(b, c, d);
  c = a.q;
  return a.l ? (d = pd(b, c + 1), d <= c ? Gd(a, d, b) : a.l(b)) : a.apply(a, od(b))
}
function Ld(a, b, c, d, f) {
  b = zd.o(b, c, d, f);
  c = a.q;
  return a.l ? (d = pd(b, c + 1), d <= c ? Gd(a, d, b) : a.l(b)) : a.apply(a, od(b))
}
function Md(a, b, c, d, f, h) {
  b = Q(b, Q(c, Q(d, Q(f, rd(h)))));
  c = a.q;
  return a.l ? (d = pd(b, c + 1), d <= c ? Gd(a, d, b) : a.l(b)) : a.apply(a, od(b))
}
function Nd(a, b, c, d, f, h) {
  var i = l;
  5 < arguments.length && (i = O(Array.prototype.slice.call(arguments, 5), 0));
  return Md.call(this, a, b, c, d, f, i)
}
Nd.q = 5;
Nd.l = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = N(a), h = K(a), a = L(a);
  return Md(b, c, d, f, h, a)
};
Nd.h = Md;
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
      return Nd.h(a, b, c, d, f, O(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hd.q = 5;
Hd.l = Nd.l;
Hd.a = Id;
Hd.e = Jd;
Hd.o = Kd;
Hd.Z = Ld;
Hd.h = Nd.h;
fc = Hd;
function Od(a, b) {
  for(;;) {
    if(J(b) == l) {
      return g
    }
    if(v(a.c ? a.c(K(b)) : a.call(l, K(b)))) {
      var c = a, d = N(b), a = c, b = d
    }else {
      return m
    }
  }
}
function Pd(a) {
  return a
}
var Qd, V = l;
function Rd(a, b) {
  return new U(l, m, function() {
    var c = J(b);
    if(c) {
      if(oc(c)) {
        for(var d = db(c), f = R(d), h = new gd(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.c ? a.c(A.a(d, i)) : a.call(l, A.a(d, i));
            h.add(j);
            i += 1
          }else {
            break
          }
        }
        return nd(h.ha(), V.a(a, eb(c)))
      }
      return Q(a.c ? a.c(K(c)) : a.call(l, K(c)), V.a(a, L(c)))
    }
    return l
  }, l)
}
function Sd(a, b, c) {
  return new U(l, m, function() {
    var d = J(b), f = J(c);
    return(d ? f : d) ? Q(a.a ? a.a(K(d), K(f)) : a.call(l, K(d), K(f)), V.e(a, L(d), L(f))) : l
  }, l)
}
function Td(a, b, c, d) {
  return new U(l, m, function() {
    var f = J(b), h = J(c), i = J(d);
    return(f ? h ? i : h : f) ? Q(a.e ? a.e(K(f), K(h), K(i)) : a.call(l, K(f), K(h), K(i)), V.o(a, L(f), L(h), L(i))) : l
  }, l)
}
function Ud(a, b, c, d, f) {
  return V.a(function(b) {
    return fc.a(a, b)
  }, function i(a) {
    return new U(l, m, function() {
      var b = V.a(J, a);
      return Od(Pd, b) ? Q(V.a(K, b), i(V.a(L, b))) : l
    }, l)
  }(Mb.h(f, d, O([c, b], 0))))
}
function Vd(a, b, c, d, f) {
  var h = l;
  4 < arguments.length && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return Ud.call(this, a, b, c, d, h)
}
Vd.q = 4;
Vd.l = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = L(a);
  return Ud(b, c, d, f, a)
};
Vd.h = Ud;
V = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Rd.call(this, a, b);
    case 3:
      return Sd.call(this, a, b, c);
    case 4:
      return Td.call(this, a, b, c, d);
    default:
      return Vd.h(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
V.q = 4;
V.l = Vd.l;
V.a = Rd;
V.e = Sd;
V.o = Td;
V.h = Vd.h;
Qd = V;
var Xd = function Wd(b, c) {
  return new U(l, m, function() {
    if(0 < b) {
      var d = J(c);
      return d ? Q(K(d), Wd(b - 1, L(d))) : l
    }
    return l
  }, l)
}, Yd, Zd = l;
function $d(a) {
  return new U(l, m, function() {
    return Q(a, Zd.c(a))
  }, l)
}
function ae(a, b) {
  return Xd(a, Zd.c(b))
}
Zd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return $d.call(this, a);
    case 2:
      return ae.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zd.c = $d;
Zd.a = ae;
Yd = Zd;
var be, ce = l;
function de(a, b) {
  return new U(l, m, function() {
    var c = J(a), d = J(b);
    return(c ? d : c) ? Q(K(c), Q(K(d), ce.a(L(c), L(d)))) : l
  }, l)
}
function ee(a, b, c) {
  return new U(l, m, function() {
    var d = Qd.a(J, Mb.h(c, b, O([a], 0)));
    return Od(Pd, d) ? sd.a(Qd.a(K, d), fc.a(ce, Qd.a(L, d))) : l
  }, l)
}
function fe(a, b, c) {
  var d = l;
  2 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return ee.call(this, a, b, d)
}
fe.q = 2;
fe.l = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return ee(b, c, a)
};
fe.h = ee;
ce = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return de.call(this, a, b);
    default:
      return fe.h(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ce.q = 2;
ce.l = fe.l;
ce.a = de;
ce.h = fe.h;
be = ce;
function ge(a, b) {
  var c = be.a(Yd.c(a), b);
  return new U(l, m, function() {
    var a;
    a: {
      a = 1;
      for(var b = c;;) {
        var b = J(b), h = 0 < a;
        if(v(h ? b : h)) {
          a -= 1, b = L(b)
        }else {
          a = b;
          break a
        }
      }
      a = aa
    }
    return a
  }, l)
}
function he(a, b) {
  var c;
  if(a != l) {
    if(c = a) {
      c = (c = a.t & 4) ? c : a.wb
    }
    c ? (c = Bc.e($a, Za(a), b), c = ab(c)) : c = Bc.e(ra, a, b)
  }else {
    c = Bc.e(Mb, kb, b)
  }
  return c
}
function ie(a, b) {
  this.p = a;
  this.b = b
}
function je(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function ke(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new ie(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var me = function le(b, c, d, f) {
  var h = new ie(d.p, d.b.slice()), i = b.g - 1 >>> c & 31;
  5 === c ? h.b[i] = f : (d = d.b[i], b = d != l ? le(b, c - 5, d, f) : ke(l, c - 5, f), h.b[i] = b);
  return h
};
function ne(a, b) {
  var c = 0 <= b;
  if(c ? b < a.g : c) {
    if(b >= je(a)) {
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
    e(Error([F("No item "), F(b), F(" in vector of length "), F(a.g)].join("")))
  }
}
var pe = function oe(b, c, d, f, h) {
  var i = new ie(d.p, d.b.slice());
  if(0 === c) {
    i.b[f & 31] = h
  }else {
    var j = f >>> c & 31, b = oe(b, c - 5, d.b[j], f, h);
    i.b[j] = b
  }
  return i
};
function W(a, b, c, d, f, h) {
  this.m = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.K = f;
  this.k = h;
  this.t = 4;
  this.j = 167668511
}
s = W.prototype;
s.ta = function() {
  return new qe(this.g, this.shift, re.c ? re.c(this.root) : re.call(l, this.root), se.c ? se.c(this.K) : se.call(l, this.K))
};
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.M = function(a, b) {
  return a.L(a, b, l)
};
s.D = function(a, b, c) {
  return a.L(a, b, c)
};
s.da = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.g : d) {
    return je(a) <= b ? (a = this.K.slice(), a[b & 31] = c, new W(this.m, this.g, this.shift, this.root, a, l)) : new W(this.m, this.g, this.shift, pe(a, this.shift, this.root, b, c), this.K, l)
  }
  if(b === this.g) {
    return a.F(a, c)
  }
  e(Error([F("Index "), F(b), F(" out of bounds  [0,"), F(this.g), F("]")].join("")))
};
var te = l, te = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = W.prototype;
s.call = te;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.F = function(a, b) {
  if(32 > this.g - je(a)) {
    var c = this.K.slice();
    c.push(b);
    return new W(this.m, this.g + 1, this.shift, this.root, c, l)
  }
  var d = this.g >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new ie(l, Array(32));
    d.b[0] = this.root;
    var f = ke(l, this.shift, new ie(l, this.K));
    d.b[1] = f
  }else {
    d = me(a, this.shift, this.root, new ie(l, this.K))
  }
  return new W(this.m, this.g + 1, c, d, [b], l)
};
s.Za = function(a) {
  return a.v(a, 0)
};
s.$a = function(a) {
  return a.v(a, 1)
};
s.toString = function() {
  return E(this)
};
s.ma = function(a, b) {
  return qb.a(a, b)
};
s.na = function(a, b, c) {
  return qb.e(a, b, c)
};
s.w = function(a) {
  return 0 === this.g ? l : 32 > this.g ? O.c(this.K) : Y.e ? Y.e(a, 0, 0) : Y.call(l, a, 0, 0)
};
s.B = n("g");
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new W(b, this.g, this.shift, this.root, this.K, this.k)
};
s.I = n("m");
s.v = function(a, b) {
  return ne(a, b)[b & 31]
};
s.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.v(a, b) : c
};
var ue = new ie(l, Array(32)), ve = new W(l, 0, 5, ue, [], 0);
function we(a) {
  var b = a.length;
  if(32 > b) {
    return new W(l, b, 5, ue, a, l)
  }
  for(var c = a.slice(0, 32), d = 32, f = Za(new W(l, 32, 5, ue, c, l));;) {
    if(d < b) {
      c = d + 1, f = $a(f, a[d]), d = c
    }else {
      return ab(f)
    }
  }
}
function xe(a) {
  return ab(Bc.e($a, Za(ve), a))
}
function ye(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return xe(b)
}
ye.q = 0;
ye.l = function(a) {
  a = J(a);
  return xe(a)
};
ye.h = function(a) {
  return xe(a)
};
function qc(a, b, c, d, f, h) {
  this.T = a;
  this.S = b;
  this.n = c;
  this.A = d;
  this.m = f;
  this.k = h;
  this.j = 31719660;
  this.t = 1536
}
s = qc.prototype;
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.ea = function(a) {
  return this.A + 1 < this.S.length ? (a = Y.o ? Y.o(this.T, this.S, this.n, this.A + 1) : Y.call(l, this.T, this.S, this.n, this.A + 1), a == l ? l : a) : a.Ya(a)
};
s.F = function(a, b) {
  return Q(b, a)
};
s.toString = function() {
  return E(this)
};
s.w = ba();
s.O = function() {
  return this.S[this.A]
};
s.P = function(a) {
  return this.A + 1 < this.S.length ? (a = Y.o ? Y.o(this.T, this.S, this.n, this.A + 1) : Y.call(l, this.T, this.S, this.n, this.A + 1), a == l ? kb : a) : a.za(a)
};
s.Ya = function() {
  var a = this.S.length, a = this.n + a < y(this.T) ? Y.e ? Y.e(this.T, this.n + a, 0) : Y.call(l, this.T, this.n + a, 0) : l;
  return a == l ? l : a
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return Y.Z ? Y.Z(this.T, this.S, this.n, this.A, b) : Y.call(l, this.T, this.S, this.n, this.A, b)
};
s.Da = function() {
  return id.a(this.S, this.A)
};
s.za = function() {
  var a = this.S.length, a = this.n + a < y(this.T) ? Y.e ? Y.e(this.T, this.n + a, 0) : Y.call(l, this.T, this.n + a, 0) : l;
  return a == l ? kb : a
};
var Y, ze = l;
function Ae(a, b, c) {
  return new qc(a, ne(a, b), b, c, l, l)
}
function Be(a, b, c, d) {
  return new qc(a, b, c, d, l, l)
}
function Ce(a, b, c, d, f) {
  return new qc(a, b, c, d, f, l)
}
ze = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Ae.call(this, a, b, c);
    case 4:
      return Be.call(this, a, b, c, d);
    case 5:
      return Ce.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ze.e = Ae;
ze.o = Be;
ze.Z = Ce;
Y = ze;
function re(a) {
  return new ie({}, a.b.slice())
}
function se(a) {
  var b = Array(32);
  rc(a, 0, b, 0, a.length);
  return b
}
var Ee = function De(b, c, d, f) {
  var d = b.root.p === d.p ? d : new ie(b.root.p, d.b.slice()), h = b.g - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.b[h], b = i != l ? De(b, c - 5, i, f) : ke(b.root.p, c - 5, f)
  }
  d.b[h] = b;
  return d
};
function qe(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.K = d;
  this.j = 275;
  this.t = 88
}
var Fe = l, Fe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = qe.prototype;
s.call = Fe;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.M = function(a, b) {
  return a.L(a, b, l)
};
s.D = function(a, b, c) {
  return a.L(a, b, c)
};
s.v = function(a, b) {
  if(this.root.p) {
    return ne(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
s.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.v(a, b) : c
};
s.B = function() {
  if(this.root.p) {
    return this.g
  }
  e(Error("count after persistent!"))
};
s.oa = function(a, b, c) {
  var d;
  a: {
    if(a.root.p) {
      var f = 0 <= b;
      if(f ? b < a.g : f) {
        je(a) <= b ? a.K[b & 31] = c : (d = function i(d, f) {
          var r = a.root.p === f.p ? f : new ie(a.root.p, f.b.slice());
          if(0 === d) {
            r.b[b & 31] = c
          }else {
            var q = b >>> d & 31, t = i(d - 5, r.b[q]);
            r.b[q] = t
          }
          return r
        }.call(l, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.g) {
        d = a.va(a, c);
        break a
      }
      e(Error([F("Index "), F(b), F(" out of bounds for TransientVector of length"), F(a.g)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
s.va = function(a, b) {
  if(this.root.p) {
    if(32 > this.g - je(a)) {
      this.K[this.g & 31] = b
    }else {
      var c = new ie(this.root.p, this.K), d = Array(32);
      d[0] = b;
      this.K = d;
      if(this.g >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = ke(this.root.p, this.shift, c);
        this.root = new ie(this.root.p, d);
        this.shift = f
      }else {
        this.root = Ee(a, this.shift, this.root, c)
      }
    }
    this.g += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
s.Aa = function(a) {
  if(this.root.p) {
    this.root.p = l;
    var a = this.g - je(a), b = Array(a);
    rc(this.K, 0, b, 0, a);
    return new W(l, this.g, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
function Ge() {
  this.t = 0;
  this.j = 2097152
}
Ge.prototype.C = p(m);
var He = new Ge;
function Ie(a, b) {
  var c;
  c = b == l ? 0 : b ? ((c = b.j & 1024) ? c : b.xb) || (b.j ? 0 : w(Da, b)) : w(Da, b);
  c = c ? R(a) === R(b) ? Od(Pd, Qd.a(function(a) {
    return lb.a(Zb.e(b, K(a), He), K(N(a)))
  }, a)) : l : l;
  return v(c) ? g : m
}
function Je(a, b) {
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
function Ke(a, b) {
  var c = H.c(a), d = H.c(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Le(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.ka, a = hc(a), i = 0, j = Za(Me);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = bb(j, k, h[k])
    }else {
      return d = gc, b = bb(j, b, c), b = ab(b), d(b, a)
    }
  }
}
function Ne(a, b) {
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
function Oe(a, b, c, d, f) {
  this.m = a;
  this.keys = b;
  this.ka = c;
  this.Ba = d;
  this.k = f;
  this.t = 4;
  this.j = 16123663
}
s = Oe.prototype;
s.ta = function(a) {
  a = he(Pe.r ? Pe.r() : Pe.call(l), a);
  return Za(a)
};
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Xc(a)
};
s.M = function(a, b) {
  return a.D(a, b, l)
};
s.D = function(a, b, c) {
  return((a = da(b)) ? Je(b, this.keys) != l : a) ? this.ka[b] : c
};
s.da = function(a, b, c) {
  if(da(b)) {
    var d = this.Ba > Qe;
    if(d ? d : this.keys.length >= Qe) {
      return Le(a, b, c)
    }
    if(Je(b, this.keys) != l) {
      return a = Ne(this.ka, this.keys), a[b] = c, new Oe(this.m, this.keys, a, this.Ba + 1, l)
    }
    a = Ne(this.ka, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Oe(this.m, d, a, this.Ba + 1, l)
  }
  return Le(a, b, c)
};
var Re = l, Re = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = Oe.prototype;
s.call = Re;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.F = function(a, b) {
  return nc(b) ? a.da(a, A.a(b, 0), A.a(b, 1)) : Bc.e(ra, a, b)
};
s.toString = function() {
  return E(this)
};
s.w = function() {
  var a = this;
  return 0 < a.keys.length ? Qd.a(function(b) {
    return ye.h(O([b, a.ka[b]], 0))
  }, a.keys.sort(Ke)) : l
};
s.B = function() {
  return this.keys.length
};
s.C = function(a, b) {
  return Ie(a, b)
};
s.J = function(a, b) {
  return new Oe(b, this.keys, this.ka, this.Ba, this.k)
};
s.I = n("m");
var Se = new Oe(l, [], {}, 0, 0), Qe = 8;
function Te(a, b) {
  var c = a.b, d = da(b);
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
    if(b instanceof gb) {
      a: {
        for(var d = c.length, f = b.ja, h = 0;;) {
          if(d <= h) {
            c = -1;
            break a
          }
          var i = c[h], j = i instanceof gb;
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
            if(lb.a(b, c[f])) {
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
function na(a, b, c, d) {
  this.m = a;
  this.g = b;
  this.b = c;
  this.k = d;
  this.t = 4;
  this.j = 16123663
}
s = na.prototype;
s.ta = function() {
  return new Ue({}, this.b.length, this.b.slice())
};
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Xc(a)
};
s.M = function(a, b) {
  return a.D(a, b, l)
};
s.D = function(a, b, c) {
  a = Te(a, b);
  return-1 === a ? c : this.b[a + 1]
};
s.da = function(a, b, c) {
  var d = Te(a, b);
  if(-1 === d) {
    if(this.g < Ve) {
      for(var d = a.b, a = d.length, f = Array(a + 2), h = 0;;) {
        if(h < a) {
          f[h] = d[h], h += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new na(this.m, this.g + 1, f, l)
    }
    return Na(Ca(he(Me, a), b, c), this.m)
  }
  if(c === this.b[d + 1]) {
    return a
  }
  b = this.b.slice();
  b[d + 1] = c;
  return new na(this.m, this.g, b, l)
};
var We = l, We = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = na.prototype;
s.call = We;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.F = function(a, b) {
  return nc(b) ? a.da(a, A.a(b, 0), A.a(b, 1)) : Bc.e(ra, a, b)
};
s.toString = function() {
  return E(this)
};
s.w = function() {
  var a = this, b;
  if(0 < a.g) {
    var c = a.b.length;
    b = function f(b) {
      return new U(l, m, function() {
        return b < c ? Q(we([a.b[b], a.b[b + 1]]), f(b + 2)) : l
      }, l)
    }(0)
  }else {
    b = l
  }
  return b
};
s.B = n("g");
s.C = function(a, b) {
  return Ie(a, b)
};
s.J = function(a, b) {
  return new na(b, this.g, this.b, this.k)
};
s.I = n("m");
var Ve = 8;
function Ue(a, b, c) {
  this.pa = a;
  this.ba = b;
  this.b = c;
  this.t = 56;
  this.j = 258
}
s = Ue.prototype;
s.oa = function(a, b, c) {
  if(v(this.pa)) {
    var d = Te(a, b);
    if(-1 === d) {
      if(this.ba + 2 <= 2 * Ve) {
        return this.ba += 2, this.b.push(b), this.b.push(c), a
      }
      a = Xe.a ? Xe.a(this.ba, this.b) : Xe.call(l, this.ba, this.b);
      return bb(a, b, c)
    }
    c !== this.b[d + 1] && (this.b[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
s.va = function(a, b) {
  if(v(this.pa)) {
    var c;
    c = b ? ((c = b.j & 2048) ? c : b.lb) || (b.j ? 0 : w(Ea, b)) : w(Ea, b);
    if(c) {
      return a.oa(a, S.c ? S.c(b) : S.call(l, b), T.c ? T.c(b) : T.call(l, b))
    }
    c = J(b);
    for(var d = a;;) {
      var f = K(c);
      if(v(f)) {
        c = N(c), d = d.oa(d, S.c ? S.c(f) : S.call(l, f), T.c ? T.c(f) : T.call(l, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
s.Aa = function() {
  if(v(this.pa)) {
    return this.pa = m, new na(l, Gc((this.ba - this.ba % 2) / 2), this.b, l)
  }
  e(Error("persistent! called twice"))
};
s.M = function(a, b) {
  return a.D(a, b, l)
};
s.D = function(a, b, c) {
  if(v(this.pa)) {
    return a = Te(a, b), -1 === a ? c : this.b[a + 1]
  }
  e(Error("lookup after persistent!"))
};
s.B = function() {
  if(v(this.pa)) {
    return Gc((this.ba - this.ba % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function Xe(a, b) {
  for(var c = Za(Se), d = 0;;) {
    if(d < a) {
      c = bb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Ye() {
  this.Y = m
}
function Ze(a, b) {
  return da(a) ? a === b : lb.a(a, b)
}
var $e, af = l;
function bf(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function cf(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
af = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return bf.call(this, a, b, c);
    case 5:
      return cf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
af.e = bf;
af.Z = cf;
$e = af;
var df, ef = l;
function ff(a, b, c, d) {
  a = a.qa(b);
  a.b[c] = d;
  return a
}
function gf(a, b, c, d, f, h) {
  a = a.qa(b);
  a.b[c] = d;
  a.b[f] = h;
  return a
}
ef = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 4:
      return ff.call(this, a, b, c, d);
    case 6:
      return gf.call(this, a, b, c, d, f, h)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ef.o = ff;
ef.$ = gf;
df = ef;
function hf(a, b, c) {
  this.p = a;
  this.z = b;
  this.b = c
}
s = hf.prototype;
s.V = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = Lc(this.z & i - 1);
  if(0 === (this.z & i)) {
    var k = Lc(this.z);
    if(2 * k < this.b.length) {
      a = this.qa(a);
      b = a.b;
      h.Y = g;
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
      j[c >>> b & 31] = jf.V(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.z >>> d & 1) && (j[d] = this.b[f] != l ? jf.V(a, b + 5, H.c(this.b[f]), this.b[f], this.b[f + 1], h) : this.b[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new kf(a, k + 1, j)
    }
    b = Array(2 * (k + 4));
    rc(this.b, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    rc(this.b, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    h.Y = g;
    a = this.qa(a);
    a.b = b;
    a.z |= i;
    return a
  }
  k = this.b[2 * j];
  i = this.b[2 * j + 1];
  if(k == l) {
    return k = i.V(a, b + 5, c, d, f, h), k === i ? this : df.o(this, a, 2 * j + 1, k)
  }
  if(Ze(d, k)) {
    return f === i ? this : df.o(this, a, 2 * j + 1, f)
  }
  h.Y = g;
  return df.$(this, a, 2 * j, l, 2 * j + 1, lf.la ? lf.la(a, b + 5, k, i, c, d, f) : lf.call(l, a, b + 5, k, i, c, d, f))
};
s.xa = function() {
  return mf.c ? mf.c(this.b) : mf.call(l, this.b)
};
s.qa = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Lc(this.z), c = Array(0 > b ? 4 : 2 * (b + 1));
  rc(this.b, 0, c, 0, 2 * b);
  return new hf(a, this.z, c)
};
s.U = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = Lc(this.z & h - 1);
  if(0 === (this.z & h)) {
    var j = Lc(this.z);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = jf.U(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.z >>> c & 1) && (i[c] = this.b[d] != l ? jf.U(a + 5, H.c(this.b[d]), this.b[d], this.b[d + 1], f) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new kf(l, j + 1, i)
    }
    a = Array(2 * (j + 1));
    rc(this.b, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    rc(this.b, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.Y = g;
    return new hf(l, this.z | h, a)
  }
  j = this.b[2 * i];
  h = this.b[2 * i + 1];
  if(j == l) {
    return j = h.U(a + 5, b, c, d, f), j === h ? this : new hf(l, this.z, $e.e(this.b, 2 * i + 1, j))
  }
  if(Ze(c, j)) {
    return d === h ? this : new hf(l, this.z, $e.e(this.b, 2 * i + 1, d))
  }
  f.Y = g;
  return new hf(l, this.z, $e.Z(this.b, 2 * i, l, 2 * i + 1, lf.$ ? lf.$(a + 5, j, h, b, c, d) : lf.call(l, a + 5, j, h, b, c, d)))
};
s.ia = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.z & f)) {
    return d
  }
  var h = Lc(this.z & f - 1), f = this.b[2 * h], h = this.b[2 * h + 1];
  return f == l ? h.ia(a + 5, b, c, d) : Ze(c, f) ? h : d
};
var jf = new hf(l, 0, []);
function kf(a, b, c) {
  this.p = a;
  this.g = b;
  this.b = c
}
s = kf.prototype;
s.V = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.b[i];
  if(j == l) {
    return a = df.o(this, a, i, jf.V(a, b + 5, c, d, f, h)), a.g += 1, a
  }
  b = j.V(a, b + 5, c, d, f, h);
  return b === j ? this : df.o(this, a, i, b)
};
s.xa = function() {
  return nf.c ? nf.c(this.b) : nf.call(l, this.b)
};
s.qa = function(a) {
  return a === this.p ? this : new kf(a, this.g, this.b.slice())
};
s.U = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.b[h];
  if(i == l) {
    return new kf(l, this.g + 1, $e.e(this.b, h, jf.U(a + 5, b, c, d, f)))
  }
  a = i.U(a + 5, b, c, d, f);
  return a === i ? this : new kf(l, this.g, $e.e(this.b, h, a))
};
s.ia = function(a, b, c, d) {
  var f = this.b[b >>> a & 31];
  return f != l ? f.ia(a + 5, b, c, d) : d
};
function of(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Ze(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function pf(a, b, c, d) {
  this.p = a;
  this.fa = b;
  this.g = c;
  this.b = d
}
s = pf.prototype;
s.V = function(a, b, c, d, f, h) {
  if(c === this.fa) {
    b = of(this.b, this.g, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.g) {
        return a = df.$(this, a, 2 * this.g, d, 2 * this.g + 1, f), h.Y = g, a.g += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      rc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.Y = g;
      h = this.g + 1;
      a === this.p ? (this.b = b, this.g = h, a = this) : a = new pf(this.p, this.fa, h, b);
      return a
    }
    return this.b[b + 1] === f ? this : df.o(this, a, b + 1, f)
  }
  return(new hf(a, 1 << (this.fa >>> b & 31), [l, this, l, l])).V(a, b, c, d, f, h)
};
s.xa = function() {
  return mf.c ? mf.c(this.b) : mf.call(l, this.b)
};
s.qa = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Array(2 * (this.g + 1));
  rc(this.b, 0, b, 0, 2 * this.g);
  return new pf(a, this.fa, this.g, b)
};
s.U = function(a, b, c, d, f) {
  return b === this.fa ? (a = of(this.b, this.g, c), -1 === a ? (a = this.b.length, b = Array(a + 2), rc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.Y = g, new pf(l, this.fa, this.g + 1, b)) : lb.a(this.b[a], d) ? this : new pf(l, this.fa, this.g, $e.e(this.b, a + 1, d))) : (new hf(l, 1 << (this.fa >>> a & 31), [l, this])).U(a, b, c, d, f)
};
s.ia = function(a, b, c, d) {
  a = of(this.b, this.g, c);
  return 0 > a ? d : Ze(c, this.b[a]) ? this.b[a + 1] : d
};
var lf, qf = l;
function rf(a, b, c, d, f, h) {
  var i = H.c(b);
  if(i === d) {
    return new pf(l, i, 2, [b, c, f, h])
  }
  var j = new Ye;
  return jf.U(a, i, b, c, j).U(a, d, f, h, j)
}
function sf(a, b, c, d, f, h, i) {
  var j = H.c(c);
  if(j === f) {
    return new pf(l, j, 2, [c, d, h, i])
  }
  var k = new Ye;
  return jf.V(a, b, j, c, d, k).V(a, b, f, h, i, k)
}
qf = function(a, b, c, d, f, h, i) {
  switch(arguments.length) {
    case 6:
      return rf.call(this, a, b, c, d, f, h);
    case 7:
      return sf.call(this, a, b, c, d, f, h, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qf.$ = rf;
qf.la = sf;
lf = qf;
function tf(a, b, c, d, f) {
  this.m = a;
  this.W = b;
  this.n = c;
  this.X = d;
  this.k = f;
  this.t = 0;
  this.j = 31850572
}
s = tf.prototype;
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.F = function(a, b) {
  return Q(b, a)
};
s.toString = function() {
  return E(this)
};
s.w = ba();
s.O = function() {
  return this.X == l ? we([this.W[this.n], this.W[this.n + 1]]) : K(this.X)
};
s.P = function() {
  return this.X == l ? mf.e ? mf.e(this.W, this.n + 2, l) : mf.call(l, this.W, this.n + 2, l) : mf.e ? mf.e(this.W, this.n, N(this.X)) : mf.call(l, this.W, this.n, N(this.X))
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new tf(b, this.W, this.n, this.X, this.k)
};
s.I = n("m");
var mf, uf = l;
function vf(a) {
  return uf.e(a, 0, l)
}
function wf(a, b, c) {
  if(c == l) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != l) {
          return new tf(l, a, b, l, l)
        }
        var d = a[b + 1];
        if(v(d) && (d = d.xa(), v(d))) {
          return new tf(l, a, b + 2, d, l)
        }
        b += 2
      }else {
        return l
      }
    }
  }else {
    return new tf(l, a, b, c, l)
  }
}
uf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return vf.call(this, a);
    case 3:
      return wf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
uf.c = vf;
uf.e = wf;
mf = uf;
function xf(a, b, c, d, f) {
  this.m = a;
  this.W = b;
  this.n = c;
  this.X = d;
  this.k = f;
  this.t = 0;
  this.j = 31850572
}
s = xf.prototype;
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.F = function(a, b) {
  return Q(b, a)
};
s.toString = function() {
  return E(this)
};
s.w = ba();
s.O = function() {
  return K(this.X)
};
s.P = function() {
  return nf.o ? nf.o(l, this.W, this.n, N(this.X)) : nf.call(l, l, this.W, this.n, N(this.X))
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new xf(b, this.W, this.n, this.X, this.k)
};
s.I = n("m");
var nf, yf = l;
function zf(a) {
  return yf.o(l, a, 0, l)
}
function Af(a, b, c, d) {
  if(d == l) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(v(f) && (f = f.xa(), v(f))) {
          return new xf(a, b, c + 1, f, l)
        }
        c += 1
      }else {
        return l
      }
    }
  }else {
    return new xf(a, b, c, d, l)
  }
}
yf = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return zf.call(this, a);
    case 4:
      return Af.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yf.c = zf;
yf.o = Af;
nf = yf;
function Bf(a, b, c, d, f, h) {
  this.m = a;
  this.g = b;
  this.root = c;
  this.Q = d;
  this.R = f;
  this.k = h;
  this.t = 4;
  this.j = 16123663
}
s = Bf.prototype;
s.ta = function() {
  return new Cf({}, this.root, this.g, this.Q, this.R)
};
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Xc(a)
};
s.M = function(a, b) {
  return a.D(a, b, l)
};
s.D = function(a, b, c) {
  return b == l ? this.Q ? this.R : c : this.root == l ? c : this.root.ia(0, H.c(b), b, c)
};
s.da = function(a, b, c) {
  if(b == l) {
    var d = this.Q;
    return(d ? c === this.R : d) ? a : new Bf(this.m, this.Q ? this.g : this.g + 1, this.root, g, c, l)
  }
  d = new Ye;
  c = (this.root == l ? jf : this.root).U(0, H.c(b), b, c, d);
  return c === this.root ? a : new Bf(this.m, d.Y ? this.g + 1 : this.g, c, this.Q, this.R, l)
};
var Df = l, Df = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = Bf.prototype;
s.call = Df;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.F = function(a, b) {
  return nc(b) ? a.da(a, A.a(b, 0), A.a(b, 1)) : Bc.e(ra, a, b)
};
s.toString = function() {
  return E(this)
};
s.w = function() {
  if(0 < this.g) {
    var a = this.root != l ? this.root.xa() : l;
    return this.Q ? Q(we([l, this.R]), a) : a
  }
  return l
};
s.B = n("g");
s.C = function(a, b) {
  return Ie(a, b)
};
s.J = function(a, b) {
  return new Bf(b, this.g, this.root, this.Q, this.R, this.k)
};
s.I = n("m");
var Me = new Bf(l, 0, l, m, l, 0);
function Cf(a, b, c, d, f) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.R = f;
  this.t = 56;
  this.j = 258
}
s = Cf.prototype;
s.oa = function(a, b, c) {
  return Ef(a, b, c)
};
s.va = function(a, b) {
  var c;
  a: {
    if(a.p) {
      c = b ? ((c = b.j & 2048) ? c : b.lb) || (b.j ? 0 : w(Ea, b)) : w(Ea, b);
      if(c) {
        c = Ef(a, S.c ? S.c(b) : S.call(l, b), T.c ? T.c(b) : T.call(l, b));
        break a
      }
      c = J(b);
      for(var d = a;;) {
        var f = K(c);
        if(v(f)) {
          c = N(c), d = Ef(d, S.c ? S.c(f) : S.call(l, f), T.c ? T.c(f) : T.call(l, f))
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
s.Aa = function(a) {
  var b;
  a.p ? (a.p = l, b = new Bf(l, a.count, a.root, a.Q, a.R, l)) : e(Error("persistent! called twice"));
  return b
};
s.M = function(a, b) {
  return b == l ? this.Q ? this.R : l : this.root == l ? l : this.root.ia(0, H.c(b), b)
};
s.D = function(a, b, c) {
  return b == l ? this.Q ? this.R : c : this.root == l ? c : this.root.ia(0, H.c(b), b, c)
};
s.B = function() {
  if(this.p) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Ef(a, b, c) {
  if(a.p) {
    if(b == l) {
      a.R !== c && (a.R = c), a.Q || (a.count += 1, a.Q = g)
    }else {
      var d = new Ye, b = (a.root == l ? jf : a.root).V(a.p, 0, H.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Y && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var Pe;
function Ff(a) {
  for(var b = J(a), c = Za(Me);;) {
    if(b) {
      var a = N(N(b)), d = K(b), b = K(N(b)), c = bb(c, d, b), b = a
    }else {
      return ab(c)
    }
  }
}
function Gf(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return Ff.call(this, b)
}
Gf.q = 0;
Gf.l = function(a) {
  a = J(a);
  return Ff(a)
};
Gf.h = Ff;
Pe = Gf;
function S(a) {
  return Fa(a)
}
function T(a) {
  return Ga(a)
}
function Hf(a) {
  if(a && v(v(l) ? l : a.ab)) {
    return a.name
  }
  if(oa(a)) {
    return a
  }
  if(sc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? Vc.a(a, 2) : Vc.a(a, b + 1)
  }
  e(Error([F("Doesn't support name: "), F(a)].join("")))
}
function If(a) {
  if(a && v(v(l) ? l : a.ab)) {
    return a.ra
  }
  if(sc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? Vc.e(a, 2, b) : l
  }
  e(Error([F("Doesn't support namespace: "), F(a)].join("")))
}
function Jf(a, b, c, d, f) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.k = f;
  this.t = 0;
  this.j = 32375006
}
s = Jf.prototype;
s.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Cb(a)
};
s.ea = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Jf(this.m, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Jf(this.m, this.start + this.step, this.end, this.step, l) : l
};
s.F = function(a, b) {
  return Q(b, a)
};
s.toString = function() {
  return E(this)
};
s.ma = function(a, b) {
  return qb.a(a, b)
};
s.na = function(a, b, c) {
  return qb.e(a, b, c)
};
s.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
s.B = function(a) {
  a = a.w(a);
  return!v(a) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
s.O = n("start");
s.P = function(a) {
  return a.w(a) != l ? new Jf(this.m, this.start + this.step, this.end, this.step, l) : kb
};
s.C = function(a, b) {
  return Eb(a, b)
};
s.J = function(a, b) {
  return new Jf(b, this.start, this.end, this.step, this.k)
};
s.I = n("m");
s.v = function(a, b) {
  if(b < a.B(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
s.L = function(a, b, c) {
  c = b < a.B(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
var Kf, Lf = l;
function Mf() {
  return Lf.e(0, Number.MAX_VALUE, 1)
}
function Nf(a) {
  return Lf.e(0, a, 1)
}
function Of(a, b) {
  return Lf.e(a, b, 1)
}
function Pf(a, b, c) {
  return new Jf(l, a, b, c, l)
}
Lf = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Mf.call(this);
    case 1:
      return Nf.call(this, a);
    case 2:
      return Of.call(this, a, b);
    case 3:
      return Pf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Lf.r = Mf;
Lf.c = Nf;
Lf.a = Of;
Lf.e = Pf;
Kf = Lf;
function Z(a, b, c, d, f, h, i) {
  D(a, c);
  J(i) && (b.e ? b.e(K(i), a, h) : b.call(l, K(i), a, h));
  for(var c = J(N(i)), i = l, j = 0, k = 0;;) {
    if(k < j) {
      var r = i.v(i, k);
      D(a, d);
      b.e ? b.e(r, a, h) : b.call(l, r, a, h);
      k += 1
    }else {
      if(c = J(c)) {
        i = c, oc(i) ? (c = db(i), k = eb(i), i = c, j = R(c), c = k) : (c = K(i), D(a, d), b.e ? b.e(c, a, h) : b.call(l, c, a, h), c = N(i), i = l, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return D(a, f)
}
function Qf(a, b) {
  for(var c = J(b), d = l, f = 0, h = 0;;) {
    if(h < f) {
      var i = d.v(d, h);
      D(a, i);
      h += 1
    }else {
      if(c = J(c)) {
        d = c, oc(d) ? (c = db(d), f = eb(d), d = c, i = R(c), c = f, f = i) : (i = K(d), D(a, i), c = N(d), d = l, f = 0), h = 0
      }else {
        return l
      }
    }
  }
}
function Rf(a, b) {
  var c = l;
  1 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Qf.call(this, a, c)
}
Rf.q = 1;
Rf.l = function(a) {
  var b = K(a), a = L(a);
  return Qf(b, a)
};
Rf.h = Qf;
var Sf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, $ = function Tf(b, c, d) {
  if(b == l) {
    return D(c, "nil")
  }
  if(aa === b) {
    return D(c, "#<undefined>")
  }
  var f;
  f = Zb.a(d, "\ufdd0:meta");
  v(f) && (f = b ? ((f = b.j & 131072) ? f : b.mb) ? g : b.j ? m : w(Ka, b) : w(Ka, b), f = v(f) ? hc(b) : f);
  v(f) && (D(c, "^"), Tf(hc(b), c, d), D(c, " "));
  if(b == l) {
    return D(c, "nil")
  }
  if(b.eb) {
    return b.pb(c)
  }
  if(f = b) {
    f = (f = b.j & 2147483648) ? f : b.N
  }
  return f ? b.H(b, c, d) : ((f = (b == l ? l : b.constructor) === Boolean) ? f : "number" === typeof b) ? D(c, "" + F(b)) : b instanceof Array ? Z(c, Tf, "#<Array [", ", ", "]>", d, b) : da(b) ? sc(b) ? (D(c, ":"), d = If(b), v(d) && Rf.h(c, O(["" + F(d), "/"], 0)), D(c, Hf(b))) : b instanceof gb ? (d = If(b), v(d) && Rf.h(c, O(["" + F(d), "/"], 0)), D(c, Hf(b))) : v((new cd("\ufdd0:readably")).call(l, d)) ? D(c, [F('"'), F(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Sf[b]
  })), F('"')].join("")) : D(c, b) : dc(b) ? Rf.h(c, O(["#<", "" + F(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + F(b);;) {
      if(R(d) < c) {
        d = [F("0"), F(d)].join("")
      }else {
        return d
      }
    }
  }, Rf.h(c, O(['#inst "', "" + F(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(b instanceof RegExp) ? Rf.h(c, O(['#"', b.source, '"'], 0)) : Rf.h(c, O(["#<", "" + F(b), ">"], 0))
};
function Uf(a) {
  var b = ma(), c = a == l;
  c || (c = J(a), c = v(c) ? m : g);
  if(c) {
    b = ""
  }else {
    var c = F, d = new ja, f = new fb(d);
    a: {
      $(K(a), f, b);
      for(var a = J(N(a)), h = l, i = 0, j = 0;;) {
        if(j < i) {
          var k = h.v(h, j);
          D(f, " ");
          $(k, f, b);
          j += 1
        }else {
          if(a = J(a)) {
            h = a, oc(h) ? (a = db(h), i = eb(h), h = a, k = R(a), a = i, i = k) : (k = K(h), D(f, " "), $(k, f, b), a = N(h), h = l, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    Xa(f);
    b = "" + c(d)
  }
  return b
}
function Vf(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return Uf(b)
}
Vf.q = 0;
Vf.l = function(a) {
  a = J(a);
  return Uf(a)
};
Vf.h = function(a) {
  return Uf(a)
};
jb.prototype.N = g;
jb.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
pc.prototype.N = g;
pc.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
na.prototype.N = g;
na.prototype.H = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
U.prototype.N = g;
U.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
tf.prototype.N = g;
tf.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
qc.prototype.N = g;
qc.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Bf.prototype.N = g;
Bf.prototype.H = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
W.prototype.N = g;
W.prototype.H = function(a, b, c) {
  return Z(b, $, "[", " ", "]", c, a)
};
Yc.prototype.N = g;
Yc.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Zc.prototype.N = g;
Zc.prototype.H = function(a, b) {
  return D(b, "()")
};
bd.prototype.N = g;
bd.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Jf.prototype.N = g;
Jf.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
xf.prototype.N = g;
xf.prototype.H = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Oe.prototype.N = g;
Oe.prototype.H = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
W.prototype.hb = g;
W.prototype.ib = function(a, b) {
  return uc.a(a, b)
};
function Wf(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.tb = c;
  this.ub = d;
  this.j = 2153938944;
  this.t = 2
}
s = Wf.prototype;
s.G = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
s.bb = function(a, b, c) {
  for(var d = J(this.ub), f = l, h = 0, i = 0;;) {
    if(i < h) {
      var j = f.v(f, i), k = Vb.e(j, 0, l), j = Vb.e(j, 1, l);
      j.o ? j.o(k, a, b, c) : j.call(l, k, a, b, c);
      i += 1
    }else {
      if(d = J(d)) {
        oc(d) ? (f = db(d), d = eb(d), k = f, h = R(f), f = k) : (f = K(d), k = Vb.e(f, 0, l), j = Vb.e(f, 1, l), j.o ? j.o(k, a, b, c) : j.call(l, k, a, b, c), d = N(d), f = l, h = 0), i = 0
      }else {
        return l
      }
    }
  }
};
s.H = function(a, b, c) {
  D(b, "#<Atom: ");
  $(this.state, b, c);
  return D(b, ">")
};
s.I = n("m");
s.jb = n("state");
s.C = function(a, b) {
  return a === b
};
var Xf, Yf = l;
function Zf(a) {
  return new Wf(a, l, l, l)
}
function $f(a, b) {
  var c;
  c = b == l ? m : b ? ((c = b.j & 64) ? c : b.Sa) ? g : b.j ? m : w(wa, b) : w(wa, b);
  var d = c ? fc.a(Pe, b) : b;
  c = Zb.a(d, "\ufdd0:validator");
  d = Zb.a(d, "\ufdd0:meta");
  return new Wf(a, d, c, l)
}
function ag(a, b) {
  var c = l;
  1 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return $f.call(this, a, c)
}
ag.q = 1;
ag.l = function(a) {
  var b = K(a), a = L(a);
  return $f(b, a)
};
ag.h = $f;
Yf = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Zf.call(this, a);
    default:
      return ag.h(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yf.q = 1;
Yf.l = ag.l;
Yf.c = Zf;
Yf.h = ag.h;
Xf = Yf;
var bg = l;
function cg() {
  return bg.c(1)
}
function dg(a) {
  return(Math.random.r ? Math.random.r() : Math.random.call(l)) * a
}
bg = function(a) {
  switch(arguments.length) {
    case 0:
      return cg.call(this);
    case 1:
      return dg.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bg.r = cg;
bg.c = dg;
Hc = bg;
function eg() {
  for(var a = Array(101), b = J(Kf.c(101)), c = l, d = 0, f = 0;;) {
    if(f < d) {
      var h = c.v(c, f);
      a[h] = 0.5 > Hc.r();
      f += 1
    }else {
      if(b = J(b)) {
        c = b, oc(c) ? (b = db(c), f = eb(c), c = b, d = R(b), b = f) : (b = K(c), a[b] = 0.5 > Hc.r(), b = N(c), c = l, d = 0), f = 0
      }else {
        break
      }
    }
  }
  return a
}
;var fg, gg, hg, ig;
function jg() {
  return ca.navigator ? ca.navigator.userAgent : l
}
ig = hg = gg = fg = m;
var kg;
if(kg = jg()) {
  var lg = ca.navigator;
  fg = 0 == kg.indexOf("Opera");
  gg = !fg && -1 != kg.indexOf("MSIE");
  hg = !fg && -1 != kg.indexOf("WebKit");
  ig = !fg && !hg && "Gecko" == lg.product
}
var mg = fg, ng = gg, og = ig, pg = hg, qg;
a: {
  var rg = "", sg;
  if(mg && ca.opera) {
    var tg = ca.opera.version, rg = "function" == typeof tg ? tg() : tg
  }else {
    if(og ? sg = /rv\:([^\);]+)(\)|;)/ : ng ? sg = /MSIE\s+([^\);]+)(\)|;)/ : pg && (sg = /WebKit\/(\S+)/), sg) {
      var ug = sg.exec(jg()), rg = ug ? ug[1] : ""
    }
  }
  if(ng) {
    var vg, wg = ca.document;
    vg = wg ? wg.documentMode : aa;
    if(vg > parseFloat(rg)) {
      qg = String(vg);
      break a
    }
  }
  qg = rg
}
var xg = {};
function yg(a) {
  var b;
  if(!(b = xg[a])) {
    b = 0;
    for(var c = String(qg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), h = 0;0 == b && h < f;h++) {
      var i = c[h] || "", j = d[h] || "", k = RegExp("(\\d*)(\\D*)", "g"), r = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = k.exec(i) || ["", "", ""], t = r.exec(j) || ["", "", ""];
        if(0 == q[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == t[2].length) ? -1 : (0 == q[2].length) > (0 == t[2].length) ? 1 : 0) || (q[2] < t[2] ? -1 : q[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = xg[a] = 0 <= b
  }
  return b
}
var zg = {};
function Ag() {
  return zg[9] || (zg[9] = ng && !!document.documentMode && 9 <= document.documentMode)
}
;!ng || Ag();
!ng || Ag();
ng && yg("8");
!pg || yg("528");
og && yg("1.9b") || ng && yg("8") || mg && yg("9.5") || pg && yg("528");
og && !yg("8") || ng && yg("9");
!ng || Ag();
!og && !ng || ng && Ag() || og && yg("1.9.1");
ng && yg("9");
var Bg = document.createElement("div");
Bg.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
lb.a(Bg.firstChild.nodeType, 3);
lb.a(Bg.getElementsByTagName("tbody").length, 0);
lb.a(Bg.getElementsByTagName("link").length, 0);
var Cg, Dg = l;
function Eg(a) {
  return fc.a(F, a)
}
function Fg(a, b) {
  return fc.a(F, ge(a, b))
}
Dg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Eg.call(this, a);
    case 2:
      return Fg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dg.c = Eg;
Dg.a = Fg;
Cg = Dg;
var Gg = we([1, "<select multiple='multiple'>", "</select>"]), Hg = we([1, "<table>", "</table>"]), Ig = we([3, "<table><tbody><tr>", "</tr></tbody></table>"]);
a: {
  for(var Jg = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), Kg = [we([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), we([0, "", ""]), Hg, Hg, Gg, we([1, "<fieldset>", "</fieldset>"]), we([1, "<map>", "</map>"]), Ig, Hg, Ig, Gg, Hg, we([2, "<table><tbody>", "</tbody></table>"]), Hg], Lg = Jg.length, Mg = 0, Ng = Za(Me);;) {
    if(Mg < Lg) {
      var Og = Mg + 1, Pg = bb(Ng, Jg[Mg], Kg[Mg]), Mg = Og, Ng = Pg
    }else {
      ab(Ng);
      break a
    }
  }
}
var Qg, Rg = l;
function Sg(a) {
  return Rg.a(a, 0)
}
function Tg(a, b) {
  return b < a.length ? new U(l, m, function() {
    return Q(a.item(b), Rg.a(a, b + 1))
  }, l) : l
}
Rg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Sg.call(this, a);
    case 2:
      return Tg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rg.c = Sg;
Rg.a = Tg;
Qg = Rg;
var Ug, Vg = l;
function Wg(a) {
  return Vg.a(a, 0)
}
function Xg(a, b) {
  return b < a.length ? new U(l, m, function() {
    return Q(a[b], Vg.a(a, b + 1))
  }, l) : l
}
Vg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Wg.call(this, a);
    case 2:
      return Xg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vg.c = Wg;
Vg.a = Xg;
Ug = Vg;
function Yg(a) {
  return v(a.item) ? Qg.c(a) : Ug.c(a)
}
v("undefined" != typeof NodeList) && (s = NodeList.prototype, s.Ta = g, s.w = function(a) {
  return Yg(a)
}, s.ua = g, s.v = function(a, b) {
  return a.item(b)
}, s.L = function(a, b, c) {
  return a.length <= b ? c : Vb.a(a, b)
}, s.Ea = g, s.B = function(a) {
  return a.length
});
v("undefined" != typeof StaticNodeList) && (s = StaticNodeList.prototype, s.Ta = g, s.w = function(a) {
  return Yg(a)
}, s.ua = g, s.v = function(a, b) {
  return a.item(b)
}, s.L = function(a, b, c) {
  return a.length <= b ? c : Vb.a(a, b)
}, s.Ea = g, s.B = function(a) {
  return a.length
});
v("undefined" != typeof HTMLCollection) && (s = HTMLCollection.prototype, s.Ta = g, s.w = function(a) {
  return Yg(a)
}, s.ua = g, s.v = function(a, b) {
  return a.item(b)
}, s.L = function(a, b, c) {
  return a.length <= b ? c : Vb.a(a, b)
}, s.Ea = g, s.B = function(a) {
  return a.length
});
function Zg() {
  return(new Date).getTime()
}
ga("ca_vote.display.now", Zg);
function $g(a) {
  return console.log(Cg.a(" ", a))
}
function ah(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return $g.call(this, b)
}
ah.q = 0;
ah.l = function(a) {
  a = J(a);
  return $g(a)
};
ah.h = $g;
var bh = Xf.c(0);
function ch(a, b, c, d) {
  d.fillStyle = c;
  d.strokeStyle = c;
  d.fillRect(a * Ia(bh) + 0, b * Ia(bh) + 0, Ia(bh), Ia(bh));
  d.strokeRect(a * Ia(bh) + 0, b * Ia(bh) + 0, Ia(bh), Ia(bh))
}
function dh(a) {
  var b, c = Hf("voting");
  b = da(c) ? document.getElementById(c) : c;
  c = b.getContext("2d");
  b = (b.width - 0) / 101;
  var d = bh.tb;
  v(d) && !v(d.c ? d.c(b) : d.call(l, b)) && e(Error([F("Assert failed: "), F("Validator rejected reference state"), F("\n"), F(Vf.h(O([gc(Db(new gb(l, "validate", "validate", 1233162959, l), new gb(l, "new-value", "new-value", 972165309, l)), Pe("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  d = bh.state;
  bh.state = b;
  Ya(bh, d, b);
  for(var d = J(Kf.c(101)), f = l, h = 0, i = 0;;) {
    if(i < h) {
      b = f.v(f, i);
      for(var j = J(Kf.c(101)), k = l, r = 0, q = 0;;) {
        if(q < r) {
          var t = k.v(k, q);
          v(a[t][b]) ? ch(b, t, "#666", c) : ch(b, t, "#eee", c);
          q += 1
        }else {
          if(j = J(j)) {
            k = j, oc(k) ? (j = db(k), q = eb(k), k = j, r = R(j), j = q) : (j = K(k), v(a[j][b]) ? ch(b, j, "#666", c) : ch(b, j, "#eee", c), j = N(k), k = l, r = 0), q = 0
          }else {
            break
          }
        }
      }
      i += 1
    }else {
      if(b = J(d)) {
        d = b;
        if(oc(d)) {
          f = db(d), d = eb(d), b = f, h = R(f), f = b
        }else {
          b = K(d);
          f = J(Kf.c(101));
          h = l;
          for(j = i = 0;;) {
            if(j < i) {
              k = h.v(h, j), v(a[k][b]) ? ch(b, k, "#666", c) : ch(b, k, "#eee", c), j += 1
            }else {
              if(f = J(f)) {
                h = f, oc(h) ? (f = db(h), j = eb(h), h = f, i = R(f), f = j) : (f = K(h), v(a[f][b]) ? ch(b, f, "#666", c) : ch(b, f, "#eee", c), f = N(h), h = l, i = 0), j = 0
              }else {
                break
              }
            }
          }
          d = N(d);
          f = l;
          h = 0
        }
        i = 0
      }else {
        return l
      }
    }
  }
}
ga("ca_vote.display.draw_grid", dh);
function eh(a) {
  var b = Zg();
  a.r ? a.r() : a.call(l);
  return ah.h(O(["took", Zg() - b], 0))
}
ga("ca_vote.display.draw", function() {
  var a = R(eg());
  console.log(a);
  eg();
  eh(function() {
    return kb
  });
  return eh(function() {
    return dh(kb)
  })
});
