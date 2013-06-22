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
function t(a) {
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
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, s, q, u) {
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
ga("cljs.core.set_print_fn_BANG_", ba());
function la() {
  var a = ["\ufdd0:flush-on-newline", g, "\ufdd0:readably", g, "\ufdd0:meta", m, "\ufdd0:dup", m];
  return new na(l, a.length / 2, a, l)
}
function v(a) {
  return a != l && a !== m
}
function oa(a) {
  return v(a) ? m : g
}
function pa(a) {
  var b = da(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function w(a, b) {
  return a[t(b == l ? l : b)] ? g : a._ ? g : m
}
function x(a, b) {
  var c = b == l ? l : b.constructor, c = v(v(c) ? c.eb : c) ? c.qb : t(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var qa = {}, ra = {};
function sa(a) {
  if(a ? a.B : a) {
    return a.B(a)
  }
  var b;
  var c = sa[t(a == l ? l : a)];
  c ? b = c : (c = sa._) ? b = c : e(x("ICounted.-count", a));
  return b.call(l, a)
}
function ta(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var d = ta[t(a == l ? l : a)];
  d ? c = d : (d = ta._) ? c = d : e(x("ICollection.-conj", a));
  return c.call(l, a, b)
}
var ua = {}, y, va = l;
function wa(a, b) {
  if(a ? a.v : a) {
    return a.v(a, b)
  }
  var c;
  var d = y[t(a == l ? l : a)];
  d ? c = d : (d = y._) ? c = d : e(x("IIndexed.-nth", a));
  return c.call(l, a, b)
}
function xa(a, b, c) {
  if(a ? a.L : a) {
    return a.L(a, b, c)
  }
  var d;
  var f = y[t(a == l ? l : a)];
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
  var c = A[t(a == l ? l : a)];
  c ? b = c : (c = A._) ? b = c : e(x("ISeq.-first", a));
  return b.call(l, a)
}
function B(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  var c = B[t(a == l ? l : a)];
  c ? b = c : (c = B._) ? b = c : e(x("ISeq.-rest", a));
  return b.call(l, a)
}
var za = {}, Aa, Ba = l;
function Ca(a, b) {
  if(a ? a.M : a) {
    return a.M(a, b)
  }
  var c;
  var d = Aa[t(a == l ? l : a)];
  d ? c = d : (d = Aa._) ? c = d : e(x("ILookup.-lookup", a));
  return c.call(l, a, b)
}
function Da(a, b, c) {
  if(a ? a.D : a) {
    return a.D(a, b, c)
  }
  var d;
  var f = Aa[t(a == l ? l : a)];
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
  var f = Ea[t(a == l ? l : a)];
  f ? d = f : (f = Ea._) ? d = f : e(x("IAssociative.-assoc", a));
  return d.call(l, a, b, c)
}
var Fa = {}, Ga = {};
function Ha(a) {
  if(a ? a.Za : a) {
    return a.Za(a)
  }
  var b;
  var c = Ha[t(a == l ? l : a)];
  c ? b = c : (c = Ha._) ? b = c : e(x("IMapEntry.-key", a));
  return b.call(l, a)
}
function Ia(a) {
  if(a ? a.$a : a) {
    return a.$a(a)
  }
  var b;
  var c = Ia[t(a == l ? l : a)];
  c ? b = c : (c = Ia._) ? b = c : e(x("IMapEntry.-val", a));
  return b.call(l, a)
}
var Ka = {};
function La(a) {
  if(a ? a.jb : a) {
    return a.state
  }
  var b;
  var c = La[t(a == l ? l : a)];
  c ? b = c : (c = La._) ? b = c : e(x("IDeref.-deref", a));
  return b.call(l, a)
}
var Ma = {};
function Na(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  var c = Na[t(a == l ? l : a)];
  c ? b = c : (c = Na._) ? b = c : e(x("IMeta.-meta", a));
  return b.call(l, a)
}
var Oa = {};
function Pa(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  var d = Pa[t(a == l ? l : a)];
  d ? c = d : (d = Pa._) ? c = d : e(x("IWithMeta.-with-meta", a));
  return c.call(l, a, b)
}
var Qa = {}, Ra, Sa = l;
function Ta(a, b) {
  if(a ? a.ma : a) {
    return a.ma(a, b)
  }
  var c;
  var d = Ra[t(a == l ? l : a)];
  d ? c = d : (d = Ra._) ? c = d : e(x("IReduce.-reduce", a));
  return c.call(l, a, b)
}
function Ua(a, b, c) {
  if(a ? a.na : a) {
    return a.na(a, b, c)
  }
  var d;
  var f = Ra[t(a == l ? l : a)];
  f ? d = f : (f = Ra._) ? d = f : e(x("IReduce.-reduce", a));
  return d.call(l, a, b, c)
}
Sa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ta.call(this, a, b);
    case 3:
      return Ua.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sa.a = Ta;
Sa.e = Ua;
Ra = Sa;
function Va(a, b) {
  if(a ? a.C : a) {
    return a.C(a, b)
  }
  var c;
  var d = Va[t(a == l ? l : a)];
  d ? c = d : (d = Va._) ? c = d : e(x("IEquiv.-equiv", a));
  return c.call(l, a, b)
}
function Wa(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = Wa[t(a == l ? l : a)];
  c ? b = c : (c = Wa._) ? b = c : e(x("IHash.-hash", a));
  return b.call(l, a)
}
function Xa(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = Xa[t(a == l ? l : a)];
  c ? b = c : (c = Xa._) ? b = c : e(x("ISeqable.-seq", a));
  return b.call(l, a)
}
var Ya = {};
function C(a, b) {
  if(a ? a.cb : a) {
    return a.cb(0, b)
  }
  var c;
  var d = C[t(a == l ? l : a)];
  d ? c = d : (d = C._) ? c = d : e(x("IWriter.-write", a));
  return c.call(l, a, b)
}
function Za(a) {
  if(a ? a.ob : a) {
    return l
  }
  var b;
  var c = Za[t(a == l ? l : a)];
  c ? b = c : (c = Za._) ? b = c : e(x("IWriter.-flush", a));
  return b.call(l, a)
}
function $a(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  var f = $a[t(a == l ? l : a)];
  f ? d = f : (f = $a._) ? d = f : e(x("IWatchable.-notify-watches", a));
  return d.call(l, a, b, c)
}
function ab(a) {
  if(a ? a.ta : a) {
    return a.ta(a)
  }
  var b;
  var c = ab[t(a == l ? l : a)];
  c ? b = c : (c = ab._) ? b = c : e(x("IEditableCollection.-as-transient", a));
  return b.call(l, a)
}
function bb(a, b) {
  if(a ? a.va : a) {
    return a.va(a, b)
  }
  var c;
  var d = bb[t(a == l ? l : a)];
  d ? c = d : (d = bb._) ? c = d : e(x("ITransientCollection.-conj!", a));
  return c.call(l, a, b)
}
function cb(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  var c = cb[t(a == l ? l : a)];
  c ? b = c : (c = cb._) ? b = c : e(x("ITransientCollection.-persistent!", a));
  return b.call(l, a)
}
function db(a, b, c) {
  if(a ? a.oa : a) {
    return a.oa(a, b, c)
  }
  var d;
  var f = db[t(a == l ? l : a)];
  f ? d = f : (f = db._) ? d = f : e(x("ITransientAssociative.-assoc!", a));
  return d.call(l, a, b, c)
}
function eb(a) {
  if(a ? a.Xa : a) {
    return a.Xa()
  }
  var b;
  var c = eb[t(a == l ? l : a)];
  c ? b = c : (c = eb._) ? b = c : e(x("IChunk.-drop-first", a));
  return b.call(l, a)
}
function D(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  var c = D[t(a == l ? l : a)];
  c ? b = c : (c = D._) ? b = c : e(x("IChunkedSeq.-chunked-first", a));
  return b.call(l, a)
}
function E(a) {
  if(a ? a.za : a) {
    return a.za(a)
  }
  var b;
  var c = E[t(a == l ? l : a)];
  c ? b = c : (c = E._) ? b = c : e(x("IChunkedSeq.-chunked-rest", a));
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
function gb(a) {
  var b = new ja, c = new fb(b);
  a.H(a, c, la());
  Za(c);
  return"" + F(b)
}
function hb(a, b, c, d, f) {
  this.ra = a;
  this.name = b;
  this.ja = c;
  this.ya = d;
  this.fb = f;
  this.t = 0;
  this.j = 2154168321
}
r = hb.prototype;
r.H = function(a, b) {
  return C(b, this.ja)
};
r.ab = g;
r.G = function() {
  -1 === this.ya && (this.ya = ib.a ? ib.a(H.c ? H.c(this.ra) : H.call(l, this.ra), H.c ? H.c(this.name) : H.call(l, this.name)) : ib.call(l, H.c ? H.c(this.ra) : H.call(l, this.ra), H.c ? H.c(this.name) : H.call(l, this.name)));
  return this.ya
};
r.J = function(a, b) {
  return new hb(this.ra, this.name, this.ja, this.ya, b)
};
r.I = n("fb");
var jb = l, jb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Aa.e(b, this, l);
    case 3:
      return Aa.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
hb.prototype.call = jb;
hb.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
hb.prototype.C = function(a, b) {
  return b instanceof hb ? this.ja === b.ja : m
};
hb.prototype.toString = n("ja");
function I(a) {
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
    return 0 === a.length ? l : new kb(a, 0)
  }
  if(w(za, a)) {
    return Xa(a)
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
  a = I(a);
  return a == l ? l : A(a)
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
    a = I(a);
    return a != l ? B(a) : lb
  }
  return lb
}
function M(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    if(b = a) {
      b = (b = a.j & 128) ? b : a.yb
    }
    a = b ? a.fa(a) : I(L(a))
  }
  return a
}
var mb, nb = l;
function ob(a, b) {
  var c = a === b;
  return c ? c : Va(a, b)
}
function pb(a, b, c) {
  for(;;) {
    if(v(nb.a(a, b))) {
      if(M(c)) {
        a = b, b = K(c), c = M(c)
      }else {
        return nb.a(b, K(c))
      }
    }else {
      return m
    }
  }
}
function qb(a, b, c) {
  var d = l;
  2 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return pb.call(this, a, b, d)
}
qb.q = 2;
qb.l = function(a) {
  var b = K(a), a = M(a), c = K(a), a = L(a);
  return pb(b, c, a)
};
qb.h = pb;
nb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return g;
    case 2:
      return ob.call(this, a, b);
    default:
      return qb.h(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
nb.q = 2;
nb.l = qb.l;
nb.c = p(g);
nb.a = ob;
nb.h = qb.h;
mb = nb;
Wa["null"] = p(0);
ra["null"] = g;
sa["null"] = p(0);
Va["null"] = function(a, b) {
  return b == l
};
Oa["null"] = g;
Pa["null"] = p(l);
Ma["null"] = g;
Na["null"] = p(l);
Fa["null"] = g;
Date.prototype.C = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
Wa.number = function(a) {
  return Math.floor(a) % 2147483647
};
Va.number = function(a, b) {
  return a === b
};
Wa["boolean"] = function(a) {
  return a === g ? 1 : 0
};
Ma["function"] = g;
Na["function"] = p(l);
qa["function"] = g;
Wa._ = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
var rb, sb = l;
function tb(a, b) {
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
function ub(a, b, c) {
  for(var d = sa(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, y.a(a, f)) : b.call(l, c, y.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function vb(a, b, c, d) {
  for(var f = sa(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, y.a(a, d)) : b.call(l, c, y.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
sb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return tb.call(this, a, b);
    case 3:
      return ub.call(this, a, b, c);
    case 4:
      return vb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sb.a = tb;
sb.e = ub;
sb.o = vb;
rb = sb;
var wb, xb = l;
function yb(a, b) {
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
function zb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(l, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function Ab(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(l, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
xb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return yb.call(this, a, b);
    case 3:
      return zb.call(this, a, b, c);
    case 4:
      return Ab.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xb.a = yb;
xb.e = zb;
xb.o = Ab;
wb = xb;
function Bb(a) {
  if(a) {
    var b = a.j & 2, a = (b ? b : a.Ea) ? g : a.j ? m : w(ra, a)
  }else {
    a = w(ra, a)
  }
  return a
}
function Cb(a) {
  if(a) {
    var b = a.j & 16, a = (b ? b : a.ua) ? g : a.j ? m : w(ua, a)
  }else {
    a = w(ua, a)
  }
  return a
}
function kb(a, b) {
  this.b = a;
  this.n = b;
  this.t = 0;
  this.j = 166199550
}
r = kb.prototype;
r.G = function(a) {
  return Db.c ? Db.c(a) : Db.call(l, a)
};
r.fa = function() {
  return this.n + 1 < this.b.length ? new kb(this.b, this.n + 1) : l
};
r.F = function(a, b) {
  return P.a ? P.a(b, a) : P.call(l, b, a)
};
r.toString = function() {
  return gb(this)
};
r.ma = function(a, b) {
  return wb.o(this.b, b, this.b[this.n], this.n + 1)
};
r.na = function(a, b, c) {
  return wb.o(this.b, b, c, this.n)
};
r.w = ba();
r.B = function() {
  return this.b.length - this.n
};
r.O = function() {
  return this.b[this.n]
};
r.P = function() {
  return this.n + 1 < this.b.length ? new kb(this.b, this.n + 1) : Eb.r ? Eb.r() : Eb.call(l)
};
r.C = function(a, b) {
  return Fb.a ? Fb.a(a, b) : Fb.call(l, a, b)
};
r.v = function(a, b) {
  var c = b + this.n;
  return c < this.b.length ? this.b[c] : l
};
r.L = function(a, b, c) {
  a = b + this.n;
  return a < this.b.length ? this.b[a] : c
};
var Gb, Hb = l;
function Ib(a) {
  return Hb.a(a, 0)
}
function Jb(a, b) {
  return b < a.length ? new kb(a, b) : l
}
Hb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ib.call(this, a);
    case 2:
      return Jb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hb.c = Ib;
Hb.a = Jb;
Gb = Hb;
var O, Kb = l;
function Lb(a) {
  return Gb.a(a, 0)
}
function Mb(a, b) {
  return Gb.a(a, b)
}
Kb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Lb.call(this, a);
    case 2:
      return Mb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kb.c = Lb;
Kb.a = Mb;
O = Kb;
ra.array = g;
sa.array = function(a) {
  return a.length
};
Va._ = function(a, b) {
  return a === b
};
var Nb, Ob = l;
function Pb(a, b) {
  return a != l ? ta(a, b) : Eb.c ? Eb.c(b) : Eb.call(l, b)
}
function Qb(a, b, c) {
  for(;;) {
    if(v(c)) {
      a = Ob.a(a, b), b = K(c), c = M(c)
    }else {
      return Ob.a(a, b)
    }
  }
}
function Rb(a, b, c) {
  var d = l;
  2 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return Qb.call(this, a, b, d)
}
Rb.q = 2;
Rb.l = function(a) {
  var b = K(a), a = M(a), c = K(a), a = L(a);
  return Qb(b, c, a)
};
Rb.h = Qb;
Ob = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Pb.call(this, a, b);
    default:
      return Rb.h(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ob.q = 2;
Ob.l = Rb.l;
Ob.a = Pb;
Ob.h = Rb.h;
Nb = Ob;
function R(a) {
  if(Bb(a)) {
    a = sa(a)
  }else {
    a: {
      for(var a = I(a), b = 0;;) {
        if(Bb(a)) {
          a = b + sa(a);
          break a
        }
        a = M(a);
        b += 1
      }
      a = aa
    }
  }
  return a
}
var Sb, Tb = l;
function Ub(a, b) {
  for(;;) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(I(a)) {
        return K(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Cb(a)) {
      return y.a(a, b)
    }
    if(I(a)) {
      var c = M(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function Vb(a, b, c) {
  for(;;) {
    if(a == l) {
      return c
    }
    if(0 === b) {
      return I(a) ? K(a) : c
    }
    if(Cb(a)) {
      return y.e(a, b, c)
    }
    if(I(a)) {
      a = M(a), b -= 1
    }else {
      return c
    }
  }
}
Tb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ub.call(this, a, b);
    case 3:
      return Vb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Tb.a = Ub;
Tb.e = Vb;
Sb = Tb;
var Wb, Xb = l;
function Yb(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 16) ? c : a.ua
    }
    c = c ? a.v(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : l : pa(a) ? b < a.length ? a[b] : l : Sb.a(a, Math.floor(b))
  }
  return c
}
function Zb(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 16) ? d : a.ua
    }
    a = d ? a.L(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : pa(a) ? b < a.length ? a[b] : c : Sb.e(a, Math.floor(b), c)
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
Wb = Xb;
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
function dc(a) {
  var b = "function" == t(a);
  return b ? b : a ? v(v(l) ? l : a.gb) ? g : a.Cb ? m : w(qa, a) : w(qa, a)
}
var hc = function fc(b, c) {
  var d;
  if(d = dc(b)) {
    d = b ? ((d = b.j & 262144) ? d : b.Bb) || (b.j ? 0 : w(Oa, b)) : w(Oa, b), d = !d
  }
  if(d) {
    if(aa === ka) {
      ka = {};
      ka = function(b, c, d, f) {
        this.m = b;
        this.Va = c;
        this.vb = d;
        this.rb = f;
        this.t = 0;
        this.j = 393217
      };
      ka.eb = g;
      ka.qb = "cljs.core/t5519";
      ka.pb = function(b) {
        return C(b, "cljs.core/t5519")
      };
      var f = function(b, c) {
        return gc.a ? gc.a(b.Va, c) : gc.call(l, b.Va, c)
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
      ka.prototype.call = d;
      ka.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      ka.prototype.gb = g;
      ka.prototype.I = n("rb");
      ka.prototype.J = function(b, c) {
        return new ka(this.m, this.Va, this.vb, c)
      }
    }
    d = new ka(c, b, fc, l);
    d = fc(d, c)
  }else {
    d = Pa(b, c)
  }
  return d
};
function ic(a) {
  var b;
  b = a ? ((b = a.j & 131072) ? b : a.mb) || (a.j ? 0 : w(Ma, a)) : w(Ma, a);
  return b ? Na(a) : l
}
var jc = {}, kc = 0, H, lc = l;
function mc(a) {
  return lc.a(a, g)
}
function nc(a, b) {
  var c = da(a);
  (c ? b : c) ? (255 < kc && (jc = {}, kc = 0), c = jc[a], "number" !== typeof c && (c = ha(a), jc[a] = c, kc += 1)) : c = Wa(a);
  return c
}
lc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return mc.call(this, a);
    case 2:
      return nc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
lc.c = mc;
lc.a = nc;
H = lc;
function oc(a) {
  if(a) {
    var b = a.j & 16384, a = (b ? b : a.Ab) ? g : a.j ? m : w(Ka, a)
  }else {
    a = w(Ka, a)
  }
  return a
}
function pc(a) {
  var b = a instanceof qc;
  return b ? b : a instanceof rc
}
function sc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
function tc(a) {
  return a === g
}
function uc(a) {
  var b = da(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function vc(a, b) {
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
var wc, xc = l;
function yc(a, b) {
  var c = R(a), d = R(b);
  return c < d ? -1 : c > d ? 1 : xc.o(a, b, c, 0)
}
function zc(a, b, c, d) {
  for(;;) {
    var f = vc(Wb.a(a, d), Wb.a(b, d)), h = 0 === f;
    if(h ? d + 1 < c : h) {
      d += 1
    }else {
      return f
    }
  }
}
xc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return yc.call(this, a, b);
    case 4:
      return zc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xc.a = yc;
xc.o = zc;
wc = xc;
var Ac, Bc = l;
function Cc(a, b) {
  var c = I(b);
  return c ? Dc.e ? Dc.e(a, K(c), M(c)) : Dc.call(l, a, K(c), M(c)) : a.r ? a.r() : a.call(l)
}
function Ec(a, b, c) {
  for(c = I(c);;) {
    if(c) {
      b = a.a ? a.a(b, K(c)) : a.call(l, b, K(c)), c = M(c)
    }else {
      return b
    }
  }
}
Bc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Cc.call(this, a, b);
    case 3:
      return Ec.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bc.a = Cc;
Bc.e = Ec;
Ac = Bc;
var Dc, Fc = l;
function Gc(a, b) {
  var c;
  if(c = b) {
    c = (c = b.j & 524288) ? c : b.nb
  }
  return c ? b.ma(b, a) : b instanceof Array ? wb.a(b, a) : pa(b) ? wb.a(b, a) : w(Qa, b) ? Ra.a(b, a) : Ac.a(a, b)
}
function Hc(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.j & 524288) ? d : c.nb
  }
  return d ? c.na(c, a, b) : c instanceof Array ? wb.e(c, a, b) : pa(c) ? wb.e(c, a, b) : w(Qa, c) ? Ra.e(c, a, b) : Ac.e(a, b, c)
}
Fc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Gc.call(this, a, b);
    case 3:
      return Hc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fc.a = Gc;
Fc.e = Hc;
Dc = Fc;
function Ic(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(l, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(l, a)
}
var Jc, Kc = l;
function Lc() {
  return Math.random.r ? Math.random.r() : Math.random.call(l)
}
function Mc(a) {
  return a * Kc.r()
}
Kc = function(a) {
  switch(arguments.length) {
    case 0:
      return Lc.call(this);
    case 1:
      return Mc.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kc.r = Lc;
Kc.c = Mc;
Jc = Kc;
function Nc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Oc, Pc = l;
function Qc(a) {
  return a == l ? "" : a.toString()
}
function Rc(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append(Pc.c(K(b))), h = M(b), a = f, b = h
      }else {
        return Pc.c(a)
      }
    }
  }.call(l, new ja(Pc.c(a)), b)
}
function Sc(a, b) {
  var c = l;
  1 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Rc.call(this, a, c)
}
Sc.q = 1;
Sc.l = function(a) {
  var b = K(a), a = L(a);
  return Rc(b, a)
};
Sc.h = Rc;
Pc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Qc.call(this, a);
    default:
      return Sc.h(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pc.q = 1;
Pc.l = Sc.l;
Pc.r = p("");
Pc.c = Qc;
Pc.h = Sc.h;
Oc = Pc;
var F, Tc = l;
function Uc(a) {
  return uc(a) ? Oc.h(":", O([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
}
function Vc(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append(Tc.c(K(b))), h = M(b), a = f, b = h
      }else {
        return Oc.c(a)
      }
    }
  }.call(l, new ja(Tc.c(a)), b)
}
function Wc(a, b) {
  var c = l;
  1 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Vc.call(this, a, c)
}
Wc.q = 1;
Wc.l = function(a) {
  var b = K(a), a = L(a);
  return Vc(b, a)
};
Wc.h = Vc;
Tc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Uc.call(this, a);
    default:
      return Wc.h(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Tc.q = 1;
Tc.l = Wc.l;
Tc.r = p("");
Tc.c = Uc;
Tc.h = Wc.h;
F = Tc;
var Xc, Yc = l, Yc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yc.a = function(a, b) {
  return a.substring(b)
};
Yc.e = function(a, b, c) {
  return a.substring(b, c)
};
Xc = Yc;
function Fb(a, b) {
  var c;
  c = b ? ((c = b.j & 16777216) ? c : b.zb) || (b.j ? 0 : w(Ya, b)) : w(Ya, b);
  if(c) {
    a: {
      c = I(a);
      for(var d = I(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && mb.a(K(c), K(d))) {
          c = M(c), d = M(d)
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
function ib(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Db(a) {
  return Dc.e(function(a, c) {
    return ib(a, H.a(c, m))
  }, H.a(K(a), m), M(a))
}
function Zc(a) {
  for(var b = 0, a = I(a);;) {
    if(a) {
      var c = K(a), b = (b + (H.c(S.c ? S.c(c) : S.call(l, c)) ^ H.c(T.c ? T.c(c) : T.call(l, c)))) % 4503599627370496, a = M(a)
    }else {
      return b
    }
  }
}
function $c(a, b, c, d, f) {
  this.m = a;
  this.wa = b;
  this.ca = c;
  this.count = d;
  this.k = f;
  this.t = 0;
  this.j = 65413358
}
r = $c.prototype;
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
};
r.fa = function() {
  return 1 === this.count ? l : this.ca
};
r.F = function(a, b) {
  return new $c(this.m, b, a, this.count + 1, l)
};
r.toString = function() {
  return gb(this)
};
r.w = ba();
r.B = n("count");
r.O = n("wa");
r.P = function() {
  return 1 === this.count ? lb : this.ca
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new $c(b, this.wa, this.ca, this.count, this.k)
};
r.I = n("m");
function ad(a) {
  this.m = a;
  this.t = 0;
  this.j = 65413326
}
r = ad.prototype;
r.G = p(0);
r.fa = p(l);
r.F = function(a, b) {
  return new $c(this.m, b, l, 1, l)
};
r.toString = function() {
  return gb(this)
};
r.w = p(l);
r.B = p(0);
r.O = p(l);
r.P = function() {
  return lb
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new ad(b)
};
r.I = n("m");
var lb = new ad(l), Eb;
function bd(a) {
  var b;
  if(a instanceof kb) {
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
  for(var a = b.length, c = lb;;) {
    if(0 < a) {
      var d = a - 1, c = c.F(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function cd(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return bd.call(this, b)
}
cd.q = 0;
cd.l = function(a) {
  a = I(a);
  return bd(a)
};
cd.h = bd;
Eb = cd;
function dd(a, b, c, d) {
  this.m = a;
  this.wa = b;
  this.ca = c;
  this.k = d;
  this.t = 0;
  this.j = 65405164
}
r = dd.prototype;
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
};
r.fa = function() {
  return this.ca == l ? l : Xa(this.ca)
};
r.F = function(a, b) {
  return new dd(l, b, a, this.k)
};
r.toString = function() {
  return gb(this)
};
r.w = ba();
r.O = n("wa");
r.P = function() {
  return this.ca == l ? lb : this.ca
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new dd(b, this.wa, this.ca, this.k)
};
r.I = n("m");
function P(a, b) {
  var c = b == l;
  if(!c && (c = b)) {
    c = (c = b.j & 64) ? c : b.Sa
  }
  return c ? new dd(l, a, b, l) : new dd(l, a, I(b), l)
}
ra.string = g;
sa.string = function(a) {
  return a.length
};
Wa.string = function(a) {
  return ha(a)
};
function ed(a) {
  this.Ua = a;
  this.t = 0;
  this.j = 1
}
var fd = l, fd = function(a, b, c) {
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
ed.prototype.call = fd;
ed.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var gd = l, gd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return $b.a(b, this.toString());
    case 3:
      return $b.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = gd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? $b.a(b[0], a) : $b.e(b[0], a, b[1])
};
function hd(a) {
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
r = U.prototype;
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
};
r.fa = function(a) {
  return Xa(a.P(a))
};
r.F = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return gb(this)
};
r.w = function(a) {
  return I(hd(a))
};
r.O = function(a) {
  return K(hd(a))
};
r.P = function(a) {
  return L(hd(a))
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new U(b, this.Wa, this.x, this.k)
};
r.I = n("m");
function id(a, b) {
  this.Ca = a;
  this.end = b;
  this.t = 0;
  this.j = 2
}
id.prototype.B = n("end");
id.prototype.add = function(a) {
  this.Ca[this.end] = a;
  return this.end += 1
};
id.prototype.da = function() {
  var a = new jd(this.Ca, 0, this.end);
  this.Ca = l;
  return a
};
function jd(a, b, c) {
  this.b = a;
  this.A = b;
  this.end = c;
  this.t = 0;
  this.j = 524306
}
r = jd.prototype;
r.ma = function(a, b) {
  return wb.o(this.b, b, this.b[this.A], this.A + 1)
};
r.na = function(a, b, c) {
  return wb.o(this.b, b, c, this.A)
};
r.Xa = function() {
  this.A === this.end && e(Error("-drop-first of empty chunk"));
  return new jd(this.b, this.A + 1, this.end)
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
var kd, ld = l;
function md(a) {
  return new jd(a, 0, a.length)
}
function nd(a, b) {
  return new jd(a, b, a.length)
}
function od(a, b, c) {
  return new jd(a, b, c)
}
ld = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return md.call(this, a);
    case 2:
      return nd.call(this, a, b);
    case 3:
      return od.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ld.c = md;
ld.a = nd;
ld.e = od;
kd = ld;
function qc(a, b, c, d) {
  this.da = a;
  this.ha = b;
  this.m = c;
  this.k = d;
  this.j = 31850604;
  this.t = 1536
}
r = qc.prototype;
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
};
r.F = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return gb(this)
};
r.w = ba();
r.O = function() {
  return y.a(this.da, 0)
};
r.P = function() {
  return 1 < sa(this.da) ? new qc(eb(this.da), this.ha, this.m, l) : this.ha == l ? lb : this.ha
};
r.Ya = function() {
  return this.ha == l ? l : this.ha
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new qc(this.da, this.ha, b, this.k)
};
r.I = n("m");
r.Da = n("da");
r.za = function() {
  return this.ha == l ? lb : this.ha
};
function pd(a, b) {
  return 0 === sa(a) ? b : new qc(a, b, l, l)
}
function qd(a) {
  for(var b = [];;) {
    if(I(a)) {
      b.push(K(a)), a = M(a)
    }else {
      return b
    }
  }
}
function rd(a, b) {
  if(Bb(a)) {
    return R(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? I(c) : h;
    if(v(h)) {
      c = M(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var td = function sd(b) {
  return b == l ? l : M(b) == l ? I(K(b)) : P(K(b), sd(M(b)))
}, ud, vd = l;
function wd() {
  return new U(l, m, p(l), l)
}
function xd(a) {
  return new U(l, m, function() {
    return a
  }, l)
}
function yd(a, b) {
  return new U(l, m, function() {
    var c = I(a);
    return c ? pc(c) ? pd(D(c), vd.a(E(c), b)) : P(K(c), vd.a(L(c), b)) : b
  }, l)
}
function zd(a, b, c) {
  return function f(a, b) {
    return new U(l, m, function() {
      var c = I(a);
      return c ? pc(c) ? pd(D(c), f(E(c), b)) : P(K(c), f(L(c), b)) : v(b) ? f(K(b), M(b)) : l
    }, l)
  }(vd.a(a, b), c)
}
function Ad(a, b, c) {
  var d = l;
  2 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return zd.call(this, a, b, d)
}
Ad.q = 2;
Ad.l = function(a) {
  var b = K(a), a = M(a), c = K(a), a = L(a);
  return zd(b, c, a)
};
Ad.h = zd;
vd = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return wd.call(this);
    case 1:
      return xd.call(this, a);
    case 2:
      return yd.call(this, a, b);
    default:
      return Ad.h(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
vd.q = 2;
vd.l = Ad.l;
vd.r = wd;
vd.c = xd;
vd.a = yd;
vd.h = Ad.h;
ud = vd;
var Bd, Cd = l;
function Dd(a, b, c) {
  return P(a, P(b, c))
}
function Ed(a, b, c, d) {
  return P(a, P(b, P(c, d)))
}
function Gd(a, b, c, d, f) {
  return P(a, P(b, P(c, P(d, td(f)))))
}
function Hd(a, b, c, d, f) {
  var h = l;
  4 < arguments.length && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return Gd.call(this, a, b, c, d, h)
}
Hd.q = 4;
Hd.l = function(a) {
  var b = K(a), a = M(a), c = K(a), a = M(a), d = K(a), a = M(a), f = K(a), a = L(a);
  return Gd(b, c, d, f, a)
};
Hd.h = Gd;
Cd = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return I(a);
    case 2:
      return P(a, b);
    case 3:
      return Dd.call(this, a, b, c);
    case 4:
      return Ed.call(this, a, b, c, d);
    default:
      return Hd.h(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cd.q = 4;
Cd.l = Hd.l;
Cd.c = function(a) {
  return I(a)
};
Cd.a = function(a, b) {
  return P(a, b)
};
Cd.e = Dd;
Cd.o = Ed;
Cd.h = Hd.h;
Bd = Cd;
function Id(a, b, c) {
  var d = I(c);
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
    return a.o ? a.o(c, d, f, h) : a.o ? a.o(c, d, f, h) : a.call(l, c, d, f, h)
  }
  i = A(j);
  j = B(j);
  if(5 === b) {
    return a.Z ? a.Z(c, d, f, h, i) : a.Z ? a.Z(c, d, f, h, i) : a.call(l, c, d, f, h, i)
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
  var s = A(q), u = B(q);
  if(9 === b) {
    return a.Ra ? a.Ra(c, d, f, h, i, a, j, k, s) : a.Ra ? a.Ra(c, d, f, h, i, a, j, k, s) : a.call(l, c, d, f, h, i, a, j, k, s)
  }
  var q = A(u), z = B(u);
  if(10 === b) {
    return a.Fa ? a.Fa(c, d, f, h, i, a, j, k, s, q) : a.Fa ? a.Fa(c, d, f, h, i, a, j, k, s, q) : a.call(l, c, d, f, h, i, a, j, k, s, q)
  }
  var u = A(z), G = B(z);
  if(11 === b) {
    return a.Ga ? a.Ga(c, d, f, h, i, a, j, k, s, q, u) : a.Ga ? a.Ga(c, d, f, h, i, a, j, k, s, q, u) : a.call(l, c, d, f, h, i, a, j, k, s, q, u)
  }
  var z = A(G), J = B(G);
  if(12 === b) {
    return a.Ha ? a.Ha(c, d, f, h, i, a, j, k, s, q, u, z) : a.Ha ? a.Ha(c, d, f, h, i, a, j, k, s, q, u, z) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z)
  }
  var G = A(J), N = B(J);
  if(13 === b) {
    return a.Ia ? a.Ia(c, d, f, h, i, a, j, k, s, q, u, z, G) : a.Ia ? a.Ia(c, d, f, h, i, a, j, k, s, q, u, z, G) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z, G)
  }
  var J = A(N), Q = B(N);
  if(14 === b) {
    return a.Ja ? a.Ja(c, d, f, h, i, a, j, k, s, q, u, z, G, J) : a.Ja ? a.Ja(c, d, f, h, i, a, j, k, s, q, u, z, G, J) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z, G, J)
  }
  var N = A(Q), Z = B(Q);
  if(15 === b) {
    return a.Ka ? a.Ka(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N) : a.Ka ? a.Ka(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z, G, J, N)
  }
  var Q = A(Z), ma = B(Z);
  if(16 === b) {
    return a.La ? a.La(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q) : a.La ? a.La(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q)
  }
  var Z = A(ma), Ja = B(ma);
  if(17 === b) {
    return a.Ma ? a.Ma(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z) : a.Ma ? a.Ma(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z)
  }
  var ma = A(Ja), ec = B(Ja);
  if(18 === b) {
    return a.Na ? a.Na(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma) : a.Na ? a.Na(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma)
  }
  Ja = A(ec);
  ec = B(ec);
  if(19 === b) {
    return a.Oa ? a.Oa(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma, Ja) : a.Oa ? a.Oa(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma, Ja) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma, Ja)
  }
  var Fd = A(ec);
  B(ec);
  if(20 === b) {
    return a.Pa ? a.Pa(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma, Ja, Fd) : a.Pa ? a.Pa(c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma, Ja, Fd) : a.call(l, c, d, f, h, i, a, j, k, s, q, u, z, G, J, N, Q, Z, ma, Ja, Fd)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var gc, Jd = l;
function Kd(a, b) {
  var c = a.q;
  if(a.l) {
    var d = rd(b, c + 1);
    return d <= c ? Id(a, d, b) : a.l(b)
  }
  return a.apply(a, qd(b))
}
function Ld(a, b, c) {
  b = Bd.a(b, c);
  c = a.q;
  if(a.l) {
    var d = rd(b, c + 1);
    return d <= c ? Id(a, d, b) : a.l(b)
  }
  return a.apply(a, qd(b))
}
function Md(a, b, c, d) {
  b = Bd.e(b, c, d);
  c = a.q;
  return a.l ? (d = rd(b, c + 1), d <= c ? Id(a, d, b) : a.l(b)) : a.apply(a, qd(b))
}
function Nd(a, b, c, d, f) {
  b = Bd.o(b, c, d, f);
  c = a.q;
  return a.l ? (d = rd(b, c + 1), d <= c ? Id(a, d, b) : a.l(b)) : a.apply(a, qd(b))
}
function Od(a, b, c, d, f, h) {
  b = P(b, P(c, P(d, P(f, td(h)))));
  c = a.q;
  return a.l ? (d = rd(b, c + 1), d <= c ? Id(a, d, b) : a.l(b)) : a.apply(a, qd(b))
}
function Pd(a, b, c, d, f, h) {
  var i = l;
  5 < arguments.length && (i = O(Array.prototype.slice.call(arguments, 5), 0));
  return Od.call(this, a, b, c, d, f, i)
}
Pd.q = 5;
Pd.l = function(a) {
  var b = K(a), a = M(a), c = K(a), a = M(a), d = K(a), a = M(a), f = K(a), a = M(a), h = K(a), a = L(a);
  return Od(b, c, d, f, h, a)
};
Pd.h = Od;
Jd = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return Kd.call(this, a, b);
    case 3:
      return Ld.call(this, a, b, c);
    case 4:
      return Md.call(this, a, b, c, d);
    case 5:
      return Nd.call(this, a, b, c, d, f);
    default:
      return Pd.h(a, b, c, d, f, O(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jd.q = 5;
Jd.l = Pd.l;
Jd.a = Kd;
Jd.e = Ld;
Jd.o = Md;
Jd.Z = Nd;
Jd.h = Pd.h;
gc = Jd;
function Qd(a, b) {
  for(;;) {
    if(I(b) == l) {
      return g
    }
    if(v(a.c ? a.c(K(b)) : a.call(l, K(b)))) {
      var c = a, d = M(b), a = c, b = d
    }else {
      return m
    }
  }
}
function Rd(a) {
  return a
}
var Sd, V = l;
function Td(a, b) {
  return new U(l, m, function() {
    var c = I(b);
    if(c) {
      if(pc(c)) {
        for(var d = D(c), f = R(d), h = new id(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.c ? a.c(y.a(d, i)) : a.call(l, y.a(d, i));
            h.add(j);
            i += 1
          }else {
            break
          }
        }
        return pd(h.da(), V.a(a, E(c)))
      }
      return P(a.c ? a.c(K(c)) : a.call(l, K(c)), V.a(a, L(c)))
    }
    return l
  }, l)
}
function Ud(a, b, c) {
  return new U(l, m, function() {
    var d = I(b), f = I(c);
    return(d ? f : d) ? P(a.a ? a.a(K(d), K(f)) : a.call(l, K(d), K(f)), V.e(a, L(d), L(f))) : l
  }, l)
}
function Vd(a, b, c, d) {
  return new U(l, m, function() {
    var f = I(b), h = I(c), i = I(d);
    return(f ? h ? i : h : f) ? P(a.e ? a.e(K(f), K(h), K(i)) : a.call(l, K(f), K(h), K(i)), V.o(a, L(f), L(h), L(i))) : l
  }, l)
}
function Wd(a, b, c, d, f) {
  return V.a(function(b) {
    return gc.a(a, b)
  }, function i(a) {
    return new U(l, m, function() {
      var b = V.a(I, a);
      return Qd(Rd, b) ? P(V.a(K, b), i(V.a(L, b))) : l
    }, l)
  }(Nb.h(f, d, O([c, b], 0))))
}
function Xd(a, b, c, d, f) {
  var h = l;
  4 < arguments.length && (h = O(Array.prototype.slice.call(arguments, 4), 0));
  return Wd.call(this, a, b, c, d, h)
}
Xd.q = 4;
Xd.l = function(a) {
  var b = K(a), a = M(a), c = K(a), a = M(a), d = K(a), a = M(a), f = K(a), a = L(a);
  return Wd(b, c, d, f, a)
};
Xd.h = Wd;
V = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Td.call(this, a, b);
    case 3:
      return Ud.call(this, a, b, c);
    case 4:
      return Vd.call(this, a, b, c, d);
    default:
      return Xd.h(a, b, c, d, O(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
V.q = 4;
V.l = Xd.l;
V.a = Td;
V.e = Ud;
V.o = Vd;
V.h = Xd.h;
Sd = V;
var Zd = function Yd(b, c) {
  return new U(l, m, function() {
    if(0 < b) {
      var d = I(c);
      return d ? P(K(d), Yd(b - 1, L(d))) : l
    }
    return l
  }, l)
}, $d, ae = l;
function be(a) {
  return new U(l, m, function() {
    return P(a, ae.c(a))
  }, l)
}
function ce(a, b) {
  return Zd(a, ae.c(b))
}
ae = function(a, b) {
  switch(arguments.length) {
    case 1:
      return be.call(this, a);
    case 2:
      return ce.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ae.c = be;
ae.a = ce;
$d = ae;
var de, ee = l;
function fe(a, b) {
  return new U(l, m, function() {
    var c = I(a), d = I(b);
    return(c ? d : c) ? P(K(c), P(K(d), ee.a(L(c), L(d)))) : l
  }, l)
}
function ge(a, b, c) {
  return new U(l, m, function() {
    var d = Sd.a(I, Nb.h(c, b, O([a], 0)));
    return Qd(Rd, d) ? ud.a(Sd.a(K, d), gc.a(ee, Sd.a(L, d))) : l
  }, l)
}
function he(a, b, c) {
  var d = l;
  2 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 2), 0));
  return ge.call(this, a, b, d)
}
he.q = 2;
he.l = function(a) {
  var b = K(a), a = M(a), c = K(a), a = L(a);
  return ge(b, c, a)
};
he.h = ge;
ee = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return fe.call(this, a, b);
    default:
      return he.h(a, b, O(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ee.q = 2;
ee.l = he.l;
ee.a = fe;
ee.h = he.h;
de = ee;
function ie(a, b) {
  var c = de.a($d.c(a), b);
  return new U(l, m, function() {
    var a;
    a: {
      a = 1;
      for(var b = c;;) {
        var b = I(b), h = 0 < a;
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
var ke = function je(b, c) {
  return new U(l, m, function() {
    var d = I(c);
    if(d) {
      if(pc(d)) {
        for(var f = D(d), h = R(f), i = new id(Array(h), 0), j = 0;;) {
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
        return pd(i.da(), je(b, E(d)))
      }
      f = K(d);
      d = L(d);
      return v(b.c ? b.c(f) : b.call(l, f)) ? P(f, je(b, d)) : je(b, d)
    }
    return l
  }, l)
};
function le(a, b) {
  var c;
  if(a != l) {
    if(c = a) {
      c = (c = a.t & 4) ? c : a.wb
    }
    c ? (c = Dc.e(bb, ab(a), b), c = cb(c)) : c = Dc.e(ta, a, b)
  }else {
    c = Dc.e(Nb, lb, b)
  }
  return c
}
function me(a, b) {
  this.p = a;
  this.b = b
}
function ne(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function oe(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new me(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var qe = function pe(b, c, d, f) {
  var h = new me(d.p, d.b.slice()), i = b.g - 1 >>> c & 31;
  5 === c ? h.b[i] = f : (d = d.b[i], b = d != l ? pe(b, c - 5, d, f) : oe(l, c - 5, f), h.b[i] = b);
  return h
};
function re(a, b) {
  var c = 0 <= b;
  if(c ? b < a.g : c) {
    if(b >= ne(a)) {
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
var te = function se(b, c, d, f, h) {
  var i = new me(d.p, d.b.slice());
  if(0 === c) {
    i.b[f & 31] = h
  }else {
    var j = f >>> c & 31, b = se(b, c - 5, d.b[j], f, h);
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
r = W.prototype;
r.ta = function() {
  return new ue(this.g, this.shift, ve.c ? ve.c(this.root) : ve.call(l, this.root), we.c ? we.c(this.K) : we.call(l, this.K))
};
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
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
    return ne(a) <= b ? (a = this.K.slice(), a[b & 31] = c, new W(this.m, this.g, this.shift, this.root, a, l)) : new W(this.m, this.g, this.shift, te(a, this.shift, this.root, b, c), this.K, l)
  }
  if(b === this.g) {
    return a.F(a, c)
  }
  e(Error([F("Index "), F(b), F(" out of bounds  [0,"), F(this.g), F("]")].join("")))
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
r = W.prototype;
r.call = xe;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  if(32 > this.g - ne(a)) {
    var c = this.K.slice();
    c.push(b);
    return new W(this.m, this.g + 1, this.shift, this.root, c, l)
  }
  var d = this.g >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new me(l, Array(32));
    d.b[0] = this.root;
    var f = oe(l, this.shift, new me(l, this.K));
    d.b[1] = f
  }else {
    d = qe(a, this.shift, this.root, new me(l, this.K))
  }
  return new W(this.m, this.g + 1, c, d, [b], l)
};
r.Za = function(a) {
  return a.v(a, 0)
};
r.$a = function(a) {
  return a.v(a, 1)
};
r.toString = function() {
  return gb(this)
};
r.ma = function(a, b) {
  return rb.a(a, b)
};
r.na = function(a, b, c) {
  return rb.e(a, b, c)
};
r.w = function(a) {
  return 0 === this.g ? l : 32 > this.g ? O.c(this.K) : X.e ? X.e(a, 0, 0) : X.call(l, a, 0, 0)
};
r.B = n("g");
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new W(b, this.g, this.shift, this.root, this.K, this.k)
};
r.I = n("m");
r.v = function(a, b) {
  return re(a, b)[b & 31]
};
r.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.v(a, b) : c
};
var ye = new me(l, Array(32)), ze = new W(l, 0, 5, ye, [], 0);
function Ae(a) {
  var b = a.length;
  if(32 > b) {
    return new W(l, b, 5, ye, a, l)
  }
  for(var c = a.slice(0, 32), d = 32, f = ab(new W(l, 32, 5, ye, c, l));;) {
    if(d < b) {
      c = d + 1, f = bb(f, a[d]), d = c
    }else {
      return cb(f)
    }
  }
}
function Be(a) {
  return cb(Dc.e(bb, ab(ze), a))
}
function Ce(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return Be(b)
}
Ce.q = 0;
Ce.l = function(a) {
  a = I(a);
  return Be(a)
};
Ce.h = function(a) {
  return Be(a)
};
function rc(a, b, c, d, f, h) {
  this.T = a;
  this.S = b;
  this.n = c;
  this.A = d;
  this.m = f;
  this.k = h;
  this.j = 31719660;
  this.t = 1536
}
r = rc.prototype;
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
};
r.fa = function(a) {
  return this.A + 1 < this.S.length ? (a = X.o ? X.o(this.T, this.S, this.n, this.A + 1) : X.call(l, this.T, this.S, this.n, this.A + 1), a == l ? l : a) : a.Ya(a)
};
r.F = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return gb(this)
};
r.w = ba();
r.O = function() {
  return this.S[this.A]
};
r.P = function(a) {
  return this.A + 1 < this.S.length ? (a = X.o ? X.o(this.T, this.S, this.n, this.A + 1) : X.call(l, this.T, this.S, this.n, this.A + 1), a == l ? lb : a) : a.za(a)
};
r.Ya = function() {
  var a = this.S.length, a = this.n + a < sa(this.T) ? X.e ? X.e(this.T, this.n + a, 0) : X.call(l, this.T, this.n + a, 0) : l;
  return a == l ? l : a
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return X.Z ? X.Z(this.T, this.S, this.n, this.A, b) : X.call(l, this.T, this.S, this.n, this.A, b)
};
r.Da = function() {
  return kd.a(this.S, this.A)
};
r.za = function() {
  var a = this.S.length, a = this.n + a < sa(this.T) ? X.e ? X.e(this.T, this.n + a, 0) : X.call(l, this.T, this.n + a, 0) : l;
  return a == l ? lb : a
};
var X, De = l;
function Ee(a, b, c) {
  return new rc(a, re(a, b), b, c, l, l)
}
function Fe(a, b, c, d) {
  return new rc(a, b, c, d, l, l)
}
function Ge(a, b, c, d, f) {
  return new rc(a, b, c, d, f, l)
}
De = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Ee.call(this, a, b, c);
    case 4:
      return Fe.call(this, a, b, c, d);
    case 5:
      return Ge.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
De.e = Ee;
De.o = Fe;
De.Z = Ge;
X = De;
function ve(a) {
  return new me({}, a.b.slice())
}
function we(a) {
  var b = Array(32);
  sc(a, 0, b, 0, a.length);
  return b
}
var Ie = function He(b, c, d, f) {
  var d = b.root.p === d.p ? d : new me(b.root.p, d.b.slice()), h = b.g - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.b[h], b = i != l ? He(b, c - 5, i, f) : oe(b.root.p, c - 5, f)
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
var Je = l, Je = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = ue.prototype;
r.call = Je;
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
    return re(a, b)[b & 31]
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
        ne(a) <= b ? a.K[b & 31] = c : (d = function i(d, f) {
          var s = a.root.p === f.p ? f : new me(a.root.p, f.b.slice());
          if(0 === d) {
            s.b[b & 31] = c
          }else {
            var q = b >>> d & 31, u = i(d - 5, s.b[q]);
            s.b[q] = u
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
      e(Error([F("Index "), F(b), F(" out of bounds for TransientVector of length"), F(a.g)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.va = function(a, b) {
  if(this.root.p) {
    if(32 > this.g - ne(a)) {
      this.K[this.g & 31] = b
    }else {
      var c = new me(this.root.p, this.K), d = Array(32);
      d[0] = b;
      this.K = d;
      if(this.g >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = oe(this.root.p, this.shift, c);
        this.root = new me(this.root.p, d);
        this.shift = f
      }else {
        this.root = Ie(a, this.shift, this.root, c)
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
    var a = this.g - ne(a), b = Array(a);
    sc(this.K, 0, b, 0, a);
    return new W(l, this.g, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
function Ke() {
  this.t = 0;
  this.j = 2097152
}
Ke.prototype.C = p(m);
var Le = new Ke;
function Me(a, b) {
  var c;
  c = b == l ? 0 : b ? ((c = b.j & 1024) ? c : b.xb) || (b.j ? 0 : w(Fa, b)) : w(Fa, b);
  c = c ? R(a) === R(b) ? Qd(Rd, Sd.a(function(a) {
    return mb.a($b.e(b, K(a), Le), K(M(a)))
  }, a)) : l : l;
  return v(c) ? g : m
}
function Ne(a, b) {
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
function Oe(a, b) {
  var c = H.c(a), d = H.c(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Pe(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.ka, a = ic(a), i = 0, j = ab(Qe);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = db(j, k, h[k])
    }else {
      return d = hc, b = db(j, b, c), b = cb(b), d(b, a)
    }
  }
}
function Re(a, b) {
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
function Se(a, b, c, d, f) {
  this.m = a;
  this.keys = b;
  this.ka = c;
  this.Ba = d;
  this.k = f;
  this.t = 4;
  this.j = 16123663
}
r = Se.prototype;
r.ta = function(a) {
  a = le(Te.r ? Te.r() : Te.call(l), a);
  return ab(a)
};
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Zc(a)
};
r.M = function(a, b) {
  return a.D(a, b, l)
};
r.D = function(a, b, c) {
  return((a = da(b)) ? Ne(b, this.keys) != l : a) ? this.ka[b] : c
};
r.ea = function(a, b, c) {
  if(da(b)) {
    var d = this.Ba > Ue;
    if(d ? d : this.keys.length >= Ue) {
      return Pe(a, b, c)
    }
    if(Ne(b, this.keys) != l) {
      return a = Re(this.ka, this.keys), a[b] = c, new Se(this.m, this.keys, a, this.Ba + 1, l)
    }
    a = Re(this.ka, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Se(this.m, d, a, this.Ba + 1, l)
  }
  return Pe(a, b, c)
};
var Ve = l, Ve = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Se.prototype;
r.call = Ve;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return oc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Dc.e(ta, a, b)
};
r.toString = function() {
  return gb(this)
};
r.w = function() {
  var a = this;
  return 0 < a.keys.length ? Sd.a(function(b) {
    return Ce.h(O([b, a.ka[b]], 0))
  }, a.keys.sort(Oe)) : l
};
r.B = function() {
  return this.keys.length
};
r.C = function(a, b) {
  return Me(a, b)
};
r.J = function(a, b) {
  return new Se(b, this.keys, this.ka, this.Ba, this.k)
};
r.I = n("m");
var We = new Se(l, [], {}, 0, 0), Ue = 8;
function Xe(a, b) {
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
    if(b instanceof hb) {
      a: {
        for(var d = c.length, f = b.ja, h = 0;;) {
          if(d <= h) {
            c = -1;
            break a
          }
          var i = c[h], j = i instanceof hb;
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
            if(mb.a(b, c[f])) {
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
r = na.prototype;
r.ta = function() {
  return new Ye({}, this.b.length, this.b.slice())
};
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Zc(a)
};
r.M = function(a, b) {
  return a.D(a, b, l)
};
r.D = function(a, b, c) {
  a = Xe(a, b);
  return-1 === a ? c : this.b[a + 1]
};
r.ea = function(a, b, c) {
  var d = Xe(a, b);
  if(-1 === d) {
    if(this.g < Ze) {
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
    return Pa(Ea(le(Qe, a), b, c), this.m)
  }
  if(c === this.b[d + 1]) {
    return a
  }
  b = this.b.slice();
  b[d + 1] = c;
  return new na(this.m, this.g, b, l)
};
var $e = l, $e = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = na.prototype;
r.call = $e;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return oc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Dc.e(ta, a, b)
};
r.toString = function() {
  return gb(this)
};
r.w = function() {
  var a = this, b;
  if(0 < a.g) {
    var c = a.b.length;
    b = function f(b) {
      return new U(l, m, function() {
        return b < c ? P(Ae([a.b[b], a.b[b + 1]]), f(b + 2)) : l
      }, l)
    }(0)
  }else {
    b = l
  }
  return b
};
r.B = n("g");
r.C = function(a, b) {
  return Me(a, b)
};
r.J = function(a, b) {
  return new na(b, this.g, this.b, this.k)
};
r.I = n("m");
var Ze = 8;
function Ye(a, b, c) {
  this.pa = a;
  this.ba = b;
  this.b = c;
  this.t = 56;
  this.j = 258
}
r = Ye.prototype;
r.oa = function(a, b, c) {
  if(v(this.pa)) {
    var d = Xe(a, b);
    if(-1 === d) {
      if(this.ba + 2 <= 2 * Ze) {
        return this.ba += 2, this.b.push(b), this.b.push(c), a
      }
      a = af.a ? af.a(this.ba, this.b) : af.call(l, this.ba, this.b);
      return db(a, b, c)
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
    c = I(b);
    for(var d = a;;) {
      var f = K(c);
      if(v(f)) {
        c = M(c), d = d.oa(d, S.c ? S.c(f) : S.call(l, f), T.c ? T.c(f) : T.call(l, f))
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
    return this.pa = m, new na(l, Ic((this.ba - this.ba % 2) / 2), this.b, l)
  }
  e(Error("persistent! called twice"))
};
r.M = function(a, b) {
  return a.D(a, b, l)
};
r.D = function(a, b, c) {
  if(v(this.pa)) {
    return a = Xe(a, b), -1 === a ? c : this.b[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.B = function() {
  if(v(this.pa)) {
    return Ic((this.ba - this.ba % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function af(a, b) {
  for(var c = ab(We), d = 0;;) {
    if(d < a) {
      c = db(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function bf() {
  this.Y = m
}
function cf(a, b) {
  return da(a) ? a === b : mb.a(a, b)
}
var df, ef = l;
function ff(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function gf(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
ef = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return ff.call(this, a, b, c);
    case 5:
      return gf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ef.e = ff;
ef.Z = gf;
df = ef;
var hf, jf = l;
function kf(a, b, c, d) {
  a = a.qa(b);
  a.b[c] = d;
  return a
}
function lf(a, b, c, d, f, h) {
  a = a.qa(b);
  a.b[c] = d;
  a.b[f] = h;
  return a
}
jf = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 4:
      return kf.call(this, a, b, c, d);
    case 6:
      return lf.call(this, a, b, c, d, f, h)
  }
  e(Error("Invalid arity: " + arguments.length))
};
jf.o = kf;
jf.$ = lf;
hf = jf;
function mf(a, b, c) {
  this.p = a;
  this.z = b;
  this.b = c
}
r = mf.prototype;
r.V = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = Nc(this.z & i - 1);
  if(0 === (this.z & i)) {
    var k = Nc(this.z);
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
      j[c >>> b & 31] = nf.V(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.z >>> d & 1) && (j[d] = this.b[f] != l ? nf.V(a, b + 5, H.c(this.b[f]), this.b[f], this.b[f + 1], h) : this.b[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new of(a, k + 1, j)
    }
    b = Array(2 * (k + 4));
    sc(this.b, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    sc(this.b, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    h.Y = g;
    a = this.qa(a);
    a.b = b;
    a.z |= i;
    return a
  }
  k = this.b[2 * j];
  i = this.b[2 * j + 1];
  if(k == l) {
    return k = i.V(a, b + 5, c, d, f, h), k === i ? this : hf.o(this, a, 2 * j + 1, k)
  }
  if(cf(d, k)) {
    return f === i ? this : hf.o(this, a, 2 * j + 1, f)
  }
  h.Y = g;
  return hf.$(this, a, 2 * j, l, 2 * j + 1, pf.la ? pf.la(a, b + 5, k, i, c, d, f) : pf.call(l, a, b + 5, k, i, c, d, f))
};
r.xa = function() {
  return qf.c ? qf.c(this.b) : qf.call(l, this.b)
};
r.qa = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Nc(this.z), c = Array(0 > b ? 4 : 2 * (b + 1));
  sc(this.b, 0, c, 0, 2 * b);
  return new mf(a, this.z, c)
};
r.U = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = Nc(this.z & h - 1);
  if(0 === (this.z & h)) {
    var j = Nc(this.z);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = nf.U(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.z >>> c & 1) && (i[c] = this.b[d] != l ? nf.U(a + 5, H.c(this.b[d]), this.b[d], this.b[d + 1], f) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new of(l, j + 1, i)
    }
    a = Array(2 * (j + 1));
    sc(this.b, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    sc(this.b, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.Y = g;
    return new mf(l, this.z | h, a)
  }
  j = this.b[2 * i];
  h = this.b[2 * i + 1];
  if(j == l) {
    return j = h.U(a + 5, b, c, d, f), j === h ? this : new mf(l, this.z, df.e(this.b, 2 * i + 1, j))
  }
  if(cf(c, j)) {
    return d === h ? this : new mf(l, this.z, df.e(this.b, 2 * i + 1, d))
  }
  f.Y = g;
  return new mf(l, this.z, df.Z(this.b, 2 * i, l, 2 * i + 1, pf.$ ? pf.$(a + 5, j, h, b, c, d) : pf.call(l, a + 5, j, h, b, c, d)))
};
r.ia = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.z & f)) {
    return d
  }
  var h = Nc(this.z & f - 1), f = this.b[2 * h], h = this.b[2 * h + 1];
  return f == l ? h.ia(a + 5, b, c, d) : cf(c, f) ? h : d
};
var nf = new mf(l, 0, []);
function of(a, b, c) {
  this.p = a;
  this.g = b;
  this.b = c
}
r = of.prototype;
r.V = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.b[i];
  if(j == l) {
    return a = hf.o(this, a, i, nf.V(a, b + 5, c, d, f, h)), a.g += 1, a
  }
  b = j.V(a, b + 5, c, d, f, h);
  return b === j ? this : hf.o(this, a, i, b)
};
r.xa = function() {
  return rf.c ? rf.c(this.b) : rf.call(l, this.b)
};
r.qa = function(a) {
  return a === this.p ? this : new of(a, this.g, this.b.slice())
};
r.U = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.b[h];
  if(i == l) {
    return new of(l, this.g + 1, df.e(this.b, h, nf.U(a + 5, b, c, d, f)))
  }
  a = i.U(a + 5, b, c, d, f);
  return a === i ? this : new of(l, this.g, df.e(this.b, h, a))
};
r.ia = function(a, b, c, d) {
  var f = this.b[b >>> a & 31];
  return f != l ? f.ia(a + 5, b, c, d) : d
};
function sf(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(cf(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function tf(a, b, c, d) {
  this.p = a;
  this.ga = b;
  this.g = c;
  this.b = d
}
r = tf.prototype;
r.V = function(a, b, c, d, f, h) {
  if(c === this.ga) {
    b = sf(this.b, this.g, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.g) {
        return a = hf.$(this, a, 2 * this.g, d, 2 * this.g + 1, f), h.Y = g, a.g += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      sc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.Y = g;
      h = this.g + 1;
      a === this.p ? (this.b = b, this.g = h, a = this) : a = new tf(this.p, this.ga, h, b);
      return a
    }
    return this.b[b + 1] === f ? this : hf.o(this, a, b + 1, f)
  }
  return(new mf(a, 1 << (this.ga >>> b & 31), [l, this, l, l])).V(a, b, c, d, f, h)
};
r.xa = function() {
  return qf.c ? qf.c(this.b) : qf.call(l, this.b)
};
r.qa = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Array(2 * (this.g + 1));
  sc(this.b, 0, b, 0, 2 * this.g);
  return new tf(a, this.ga, this.g, b)
};
r.U = function(a, b, c, d, f) {
  return b === this.ga ? (a = sf(this.b, this.g, c), -1 === a ? (a = this.b.length, b = Array(a + 2), sc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.Y = g, new tf(l, this.ga, this.g + 1, b)) : mb.a(this.b[a], d) ? this : new tf(l, this.ga, this.g, df.e(this.b, a + 1, d))) : (new mf(l, 1 << (this.ga >>> a & 31), [l, this])).U(a, b, c, d, f)
};
r.ia = function(a, b, c, d) {
  a = sf(this.b, this.g, c);
  return 0 > a ? d : cf(c, this.b[a]) ? this.b[a + 1] : d
};
var pf, uf = l;
function vf(a, b, c, d, f, h) {
  var i = H.c(b);
  if(i === d) {
    return new tf(l, i, 2, [b, c, f, h])
  }
  var j = new bf;
  return nf.U(a, i, b, c, j).U(a, d, f, h, j)
}
function wf(a, b, c, d, f, h, i) {
  var j = H.c(c);
  if(j === f) {
    return new tf(l, j, 2, [c, d, h, i])
  }
  var k = new bf;
  return nf.V(a, b, j, c, d, k).V(a, b, f, h, i, k)
}
uf = function(a, b, c, d, f, h, i) {
  switch(arguments.length) {
    case 6:
      return vf.call(this, a, b, c, d, f, h);
    case 7:
      return wf.call(this, a, b, c, d, f, h, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
uf.$ = vf;
uf.la = wf;
pf = uf;
function xf(a, b, c, d, f) {
  this.m = a;
  this.W = b;
  this.n = c;
  this.X = d;
  this.k = f;
  this.t = 0;
  this.j = 31850572
}
r = xf.prototype;
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
};
r.F = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return gb(this)
};
r.w = ba();
r.O = function() {
  return this.X == l ? Ae([this.W[this.n], this.W[this.n + 1]]) : K(this.X)
};
r.P = function() {
  return this.X == l ? qf.e ? qf.e(this.W, this.n + 2, l) : qf.call(l, this.W, this.n + 2, l) : qf.e ? qf.e(this.W, this.n, M(this.X)) : qf.call(l, this.W, this.n, M(this.X))
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new xf(b, this.W, this.n, this.X, this.k)
};
r.I = n("m");
var qf, yf = l;
function zf(a) {
  return yf.e(a, 0, l)
}
function Af(a, b, c) {
  if(c == l) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != l) {
          return new xf(l, a, b, l, l)
        }
        var d = a[b + 1];
        if(v(d) && (d = d.xa(), v(d))) {
          return new xf(l, a, b + 2, d, l)
        }
        b += 2
      }else {
        return l
      }
    }
  }else {
    return new xf(l, a, b, c, l)
  }
}
yf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return zf.call(this, a);
    case 3:
      return Af.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yf.c = zf;
yf.e = Af;
qf = yf;
function Bf(a, b, c, d, f) {
  this.m = a;
  this.W = b;
  this.n = c;
  this.X = d;
  this.k = f;
  this.t = 0;
  this.j = 31850572
}
r = Bf.prototype;
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
};
r.F = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return gb(this)
};
r.w = ba();
r.O = function() {
  return K(this.X)
};
r.P = function() {
  return rf.o ? rf.o(l, this.W, this.n, M(this.X)) : rf.call(l, l, this.W, this.n, M(this.X))
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new Bf(b, this.W, this.n, this.X, this.k)
};
r.I = n("m");
var rf, Cf = l;
function Df(a) {
  return Cf.o(l, a, 0, l)
}
function Ef(a, b, c, d) {
  if(d == l) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(v(f) && (f = f.xa(), v(f))) {
          return new Bf(a, b, c + 1, f, l)
        }
        c += 1
      }else {
        return l
      }
    }
  }else {
    return new Bf(a, b, c, d, l)
  }
}
Cf = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Df.call(this, a);
    case 4:
      return Ef.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cf.c = Df;
Cf.o = Ef;
rf = Cf;
function Ff(a, b, c, d, f, h) {
  this.m = a;
  this.g = b;
  this.root = c;
  this.Q = d;
  this.R = f;
  this.k = h;
  this.t = 4;
  this.j = 16123663
}
r = Ff.prototype;
r.ta = function() {
  return new Gf({}, this.root, this.g, this.Q, this.R)
};
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Zc(a)
};
r.M = function(a, b) {
  return a.D(a, b, l)
};
r.D = function(a, b, c) {
  return b == l ? this.Q ? this.R : c : this.root == l ? c : this.root.ia(0, H.c(b), b, c)
};
r.ea = function(a, b, c) {
  if(b == l) {
    var d = this.Q;
    return(d ? c === this.R : d) ? a : new Ff(this.m, this.Q ? this.g : this.g + 1, this.root, g, c, l)
  }
  d = new bf;
  c = (this.root == l ? nf : this.root).U(0, H.c(b), b, c, d);
  return c === this.root ? a : new Ff(this.m, d.Y ? this.g + 1 : this.g, c, this.Q, this.R, l)
};
var Hf = l, Hf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Ff.prototype;
r.call = Hf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return oc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Dc.e(ta, a, b)
};
r.toString = function() {
  return gb(this)
};
r.w = function() {
  if(0 < this.g) {
    var a = this.root != l ? this.root.xa() : l;
    return this.Q ? P(Ae([l, this.R]), a) : a
  }
  return l
};
r.B = n("g");
r.C = function(a, b) {
  return Me(a, b)
};
r.J = function(a, b) {
  return new Ff(b, this.g, this.root, this.Q, this.R, this.k)
};
r.I = n("m");
var Qe = new Ff(l, 0, l, m, l, 0);
function Gf(a, b, c, d, f) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.R = f;
  this.t = 56;
  this.j = 258
}
r = Gf.prototype;
r.oa = function(a, b, c) {
  return If(a, b, c)
};
r.va = function(a, b) {
  var c;
  a: {
    if(a.p) {
      c = b ? ((c = b.j & 2048) ? c : b.lb) || (b.j ? 0 : w(Ga, b)) : w(Ga, b);
      if(c) {
        c = If(a, S.c ? S.c(b) : S.call(l, b), T.c ? T.c(b) : T.call(l, b));
        break a
      }
      c = I(b);
      for(var d = a;;) {
        var f = K(c);
        if(v(f)) {
          c = M(c), d = If(d, S.c ? S.c(f) : S.call(l, f), T.c ? T.c(f) : T.call(l, f))
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
  a.p ? (a.p = l, b = new Ff(l, a.count, a.root, a.Q, a.R, l)) : e(Error("persistent! called twice"));
  return b
};
r.M = function(a, b) {
  return b == l ? this.Q ? this.R : l : this.root == l ? l : this.root.ia(0, H.c(b), b)
};
r.D = function(a, b, c) {
  return b == l ? this.Q ? this.R : c : this.root == l ? c : this.root.ia(0, H.c(b), b, c)
};
r.B = function() {
  if(this.p) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function If(a, b, c) {
  if(a.p) {
    if(b == l) {
      a.R !== c && (a.R = c), a.Q || (a.count += 1, a.Q = g)
    }else {
      var d = new bf, b = (a.root == l ? nf : a.root).V(a.p, 0, H.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Y && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var Te;
function Jf(a) {
  for(var b = I(a), c = ab(Qe);;) {
    if(b) {
      var a = M(M(b)), d = K(b), b = K(M(b)), c = db(c, d, b), b = a
    }else {
      return cb(c)
    }
  }
}
function Kf(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return Jf.call(this, b)
}
Kf.q = 0;
Kf.l = function(a) {
  a = I(a);
  return Jf(a)
};
Kf.h = Jf;
Te = Kf;
function S(a) {
  return Ha(a)
}
function T(a) {
  return Ia(a)
}
function Lf(a) {
  if(a && v(v(l) ? l : a.ab)) {
    return a.name
  }
  if(pa(a)) {
    return a
  }
  if(uc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? Xc.a(a, 2) : Xc.a(a, b + 1)
  }
  e(Error([F("Doesn't support name: "), F(a)].join("")))
}
function Mf(a) {
  if(a && v(v(l) ? l : a.ab)) {
    return a.ra
  }
  if(uc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? Xc.e(a, 2, b) : l
  }
  e(Error([F("Doesn't support namespace: "), F(a)].join("")))
}
function Nf(a, b, c, d, f) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.k = f;
  this.t = 0;
  this.j = 32375006
}
r = Nf.prototype;
r.G = function(a) {
  var b = this.k;
  return b != l ? b : this.k = a = Db(a)
};
r.fa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Nf(this.m, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Nf(this.m, this.start + this.step, this.end, this.step, l) : l
};
r.F = function(a, b) {
  return P(b, a)
};
r.toString = function() {
  return gb(this)
};
r.ma = function(a, b) {
  return rb.a(a, b)
};
r.na = function(a, b, c) {
  return rb.e(a, b, c)
};
r.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
r.B = function(a) {
  return oa(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.O = n("start");
r.P = function(a) {
  return a.w(a) != l ? new Nf(this.m, this.start + this.step, this.end, this.step, l) : lb
};
r.C = function(a, b) {
  return Fb(a, b)
};
r.J = function(a, b) {
  return new Nf(b, this.start, this.end, this.step, this.k)
};
r.I = n("m");
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
var Of, Pf = l;
function Qf() {
  return Pf.e(0, Number.MAX_VALUE, 1)
}
function Rf(a) {
  return Pf.e(0, a, 1)
}
function Sf(a, b) {
  return Pf.e(a, b, 1)
}
function Tf(a, b, c) {
  return new Nf(l, a, b, c, l)
}
Pf = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Qf.call(this);
    case 1:
      return Rf.call(this, a);
    case 2:
      return Sf.call(this, a, b);
    case 3:
      return Tf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pf.r = Qf;
Pf.c = Rf;
Pf.a = Sf;
Pf.e = Tf;
Of = Pf;
function Y(a, b, c, d, f, h, i) {
  C(a, c);
  I(i) && (b.e ? b.e(K(i), a, h) : b.call(l, K(i), a, h));
  for(var c = I(M(i)), i = l, j = 0, k = 0;;) {
    if(k < j) {
      var s = i.v(i, k);
      C(a, d);
      b.e ? b.e(s, a, h) : b.call(l, s, a, h);
      k += 1
    }else {
      if(c = I(c)) {
        i = c, pc(i) ? (c = D(i), k = E(i), i = c, j = R(c), c = k) : (c = K(i), C(a, d), b.e ? b.e(c, a, h) : b.call(l, c, a, h), c = M(i), i = l, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return C(a, f)
}
function Uf(a, b) {
  for(var c = I(b), d = l, f = 0, h = 0;;) {
    if(h < f) {
      var i = d.v(d, h);
      C(a, i);
      h += 1
    }else {
      if(c = I(c)) {
        d = c, pc(d) ? (c = D(d), f = E(d), d = c, i = R(c), c = f, f = i) : (i = K(d), C(a, i), c = M(d), d = l, f = 0), h = 0
      }else {
        return l
      }
    }
  }
}
function Vf(a, b) {
  var c = l;
  1 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return Uf.call(this, a, c)
}
Vf.q = 1;
Vf.l = function(a) {
  var b = K(a), a = L(a);
  return Uf(b, a)
};
Vf.h = Uf;
var Wf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, $ = function Xf(b, c, d) {
  if(b == l) {
    return C(c, "nil")
  }
  if(aa === b) {
    return C(c, "#<undefined>")
  }
  var f;
  f = $b.a(d, "\ufdd0:meta");
  v(f) && (f = b ? ((f = b.j & 131072) ? f : b.mb) ? g : b.j ? m : w(Ma, b) : w(Ma, b), f = v(f) ? ic(b) : f);
  v(f) && (C(c, "^"), Xf(ic(b), c, d), C(c, " "));
  if(b == l) {
    return C(c, "nil")
  }
  if(b.eb) {
    return b.pb(c)
  }
  if(f = b) {
    f = (f = b.j & 2147483648) ? f : b.N
  }
  return f ? b.H(b, c, d) : ((f = (b == l ? l : b.constructor) === Boolean) ? f : "number" === typeof b) ? C(c, "" + F(b)) : b instanceof Array ? Y(c, Xf, "#<Array [", ", ", "]>", d, b) : da(b) ? uc(b) ? (C(c, ":"), d = Mf(b), v(d) && Vf.h(c, O(["" + F(d), "/"], 0)), C(c, Lf(b))) : b instanceof hb ? (d = Mf(b), v(d) && Vf.h(c, O(["" + F(d), "/"], 0)), C(c, Lf(b))) : v((new ed("\ufdd0:readably")).call(l, d)) ? C(c, [F('"'), F(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Wf[b]
  })), F('"')].join("")) : C(c, b) : dc(b) ? Vf.h(c, O(["#<", "" + F(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + F(b);;) {
      if(R(d) < c) {
        d = [F("0"), F(d)].join("")
      }else {
        return d
      }
    }
  }, Vf.h(c, O(['#inst "', "" + F(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(b instanceof RegExp) ? Vf.h(c, O(['#"', b.source, '"'], 0)) : Vf.h(c, O(["#<", "" + F(b), ">"], 0))
};
function Yf(a) {
  var b = la(), c = a == l;
  if(c ? c : oa(I(a))) {
    b = ""
  }else {
    var c = F, d = new ja, f = new fb(d);
    a: {
      $(K(a), f, b);
      for(var a = I(M(a)), h = l, i = 0, j = 0;;) {
        if(j < i) {
          var k = h.v(h, j);
          C(f, " ");
          $(k, f, b);
          j += 1
        }else {
          if(a = I(a)) {
            h = a, pc(h) ? (a = D(h), i = E(h), h = a, k = R(a), a = i, i = k) : (k = K(h), C(f, " "), $(k, f, b), a = M(h), h = l, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    Za(f);
    b = "" + c(d)
  }
  return b
}
function Zf(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return Yf(b)
}
Zf.q = 0;
Zf.l = function(a) {
  a = I(a);
  return Yf(a)
};
Zf.h = function(a) {
  return Yf(a)
};
kb.prototype.N = g;
kb.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
qc.prototype.N = g;
qc.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
na.prototype.N = g;
na.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
U.prototype.N = g;
U.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
xf.prototype.N = g;
xf.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
rc.prototype.N = g;
rc.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
Ff.prototype.N = g;
Ff.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
W.prototype.N = g;
W.prototype.H = function(a, b, c) {
  return Y(b, $, "[", " ", "]", c, a)
};
$c.prototype.N = g;
$c.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
ad.prototype.N = g;
ad.prototype.H = function(a, b) {
  return C(b, "()")
};
dd.prototype.N = g;
dd.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
Nf.prototype.N = g;
Nf.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
Bf.prototype.N = g;
Bf.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
Se.prototype.N = g;
Se.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
W.prototype.hb = g;
W.prototype.ib = function(a, b) {
  return wc.a(a, b)
};
function $f(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.tb = c;
  this.ub = d;
  this.j = 2153938944;
  this.t = 2
}
r = $f.prototype;
r.G = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
r.bb = function(a, b, c) {
  for(var d = I(this.ub), f = l, h = 0, i = 0;;) {
    if(i < h) {
      var j = f.v(f, i), k = Wb.e(j, 0, l), j = Wb.e(j, 1, l);
      j.o ? j.o(k, a, b, c) : j.call(l, k, a, b, c);
      i += 1
    }else {
      if(d = I(d)) {
        pc(d) ? (f = D(d), d = E(d), k = f, h = R(f), f = k) : (f = K(d), k = Wb.e(f, 0, l), j = Wb.e(f, 1, l), j.o ? j.o(k, a, b, c) : j.call(l, k, a, b, c), d = M(d), f = l, h = 0), i = 0
      }else {
        return l
      }
    }
  }
};
r.H = function(a, b, c) {
  C(b, "#<Atom: ");
  $(this.state, b, c);
  return C(b, ">")
};
r.I = n("m");
r.jb = n("state");
r.C = function(a, b) {
  return a === b
};
var ag, bg = l;
function cg(a) {
  return new $f(a, l, l, l)
}
function dg(a, b) {
  var c;
  c = b == l ? m : b ? ((c = b.j & 64) ? c : b.Sa) ? g : b.j ? m : w(ya, b) : w(ya, b);
  var d = c ? gc.a(Te, b) : b;
  c = $b.a(d, "\ufdd0:validator");
  d = $b.a(d, "\ufdd0:meta");
  return new $f(a, d, c, l)
}
function eg(a, b) {
  var c = l;
  1 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 1), 0));
  return dg.call(this, a, c)
}
eg.q = 1;
eg.l = function(a) {
  var b = K(a), a = L(a);
  return dg(b, a)
};
eg.h = dg;
bg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return cg.call(this, a);
    default:
      return eg.h(a, O(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
bg.q = 1;
bg.l = eg.l;
bg.c = cg;
bg.h = eg.h;
ag = bg;
var fg = l;
function gg() {
  return fg.c(1)
}
function hg(a) {
  return(Math.random.r ? Math.random.r() : Math.random.call(l)) * a
}
fg = function(a) {
  switch(arguments.length) {
    case 0:
      return gg.call(this);
    case 1:
      return hg.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
fg.r = gg;
fg.c = hg;
Jc = fg;
function ig() {
  for(var a = Array(101), b = I(Of.c(101)), c = l, d = 0, f = 0;;) {
    if(f < d) {
      var h = c.v(c, f);
      a[h] = 0.5 > Jc.r();
      f += 1
    }else {
      if(b = I(b)) {
        c = b, pc(c) ? (b = D(c), f = E(c), c = b, d = R(b), b = f) : (b = K(c), a[b] = 0.5 > Jc.r(), b = M(c), c = l, d = 0), f = 0
      }else {
        break
      }
    }
  }
  return a
}
function jg(a) {
  if(0 > a) {
    a += 101
  }else {
    var b = Ic((a - a % 101) / 101), a = a - 101 * b
  }
  return a
}
function kg(a, b) {
  var c = oa(b[a]) ? Ae([0, -1, -3]) : Ae([0, 1, 3]), c = Sd.a(function(c) {
    return Wb.a(b, jg(a + c))
  }, c);
  return 2 <= R(ke(tc, c))
}
function lg(a) {
  for(var b = a.length, c = Array(b), b = I(Of.c(b)), d = l, f = 0, h = 0;;) {
    if(h < f) {
      var i = d.v(d, h);
      c[i] = v(kg(i, a)) ? g : m;
      h += 1
    }else {
      if(b = I(b)) {
        d = b, pc(d) ? (b = D(d), h = E(d), d = b, f = R(b), b = h) : (b = K(d), c[b] = v(kg(b, a)) ? g : m, b = M(d), d = l, f = 0), h = 0
      }else {
        break
      }
    }
  }
  return c
}
;var mg, ng, og, pg;
function qg() {
  return ca.navigator ? ca.navigator.userAgent : l
}
pg = og = ng = mg = m;
var rg;
if(rg = qg()) {
  var sg = ca.navigator;
  mg = 0 == rg.indexOf("Opera");
  ng = !mg && -1 != rg.indexOf("MSIE");
  og = !mg && -1 != rg.indexOf("WebKit");
  pg = !mg && !og && "Gecko" == sg.product
}
var tg = mg, ug = ng, vg = pg, wg = og, xg;
a: {
  var yg = "", zg;
  if(tg && ca.opera) {
    var Ag = ca.opera.version, yg = "function" == typeof Ag ? Ag() : Ag
  }else {
    if(vg ? zg = /rv\:([^\);]+)(\)|;)/ : ug ? zg = /MSIE\s+([^\);]+)(\)|;)/ : wg && (zg = /WebKit\/(\S+)/), zg) {
      var Bg = zg.exec(qg()), yg = Bg ? Bg[1] : ""
    }
  }
  if(ug) {
    var Cg, Dg = ca.document;
    Cg = Dg ? Dg.documentMode : aa;
    if(Cg > parseFloat(yg)) {
      xg = String(Cg);
      break a
    }
  }
  xg = yg
}
var Eg = {};
function Fg(a) {
  var b;
  if(!(b = Eg[a])) {
    b = 0;
    for(var c = String(xg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), h = 0;0 == b && h < f;h++) {
      var i = c[h] || "", j = d[h] || "", k = RegExp("(\\d*)(\\D*)", "g"), s = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = k.exec(i) || ["", "", ""], u = s.exec(j) || ["", "", ""];
        if(0 == q[0].length && 0 == u[0].length) {
          break
        }
        b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == u[2].length) ? -1 : (0 == q[2].length) > (0 == u[2].length) ? 1 : 0) || (q[2] < u[2] ? -1 : q[2] > u[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Eg[a] = 0 <= b
  }
  return b
}
var Gg = {};
function Hg() {
  return Gg[9] || (Gg[9] = ug && !!document.documentMode && 9 <= document.documentMode)
}
;!ug || Hg();
!ug || Hg();
ug && Fg("8");
!wg || Fg("528");
vg && Fg("1.9b") || ug && Fg("8") || tg && Fg("9.5") || wg && Fg("528");
vg && !Fg("8") || ug && Fg("9");
!ug || Hg();
!vg && !ug || ug && Hg() || vg && Fg("1.9.1");
ug && Fg("9");
var Ig = document.createElement("div");
Ig.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
mb.a(Ig.firstChild.nodeType, 3);
mb.a(Ig.getElementsByTagName("tbody").length, 0);
mb.a(Ig.getElementsByTagName("link").length, 0);
var Jg, Kg = l;
function Lg(a) {
  return gc.a(F, a)
}
function Mg(a, b) {
  return gc.a(F, ie(a, b))
}
Kg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Lg.call(this, a);
    case 2:
      return Mg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kg.c = Lg;
Kg.a = Mg;
Jg = Kg;
var Ng = Ae([1, "<select multiple='multiple'>", "</select>"]), Og = Ae([1, "<table>", "</table>"]), Pg = Ae([3, "<table><tbody><tr>", "</tr></tbody></table>"]);
a: {
  for(var Qg = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), Rg = [Ae([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), Ae([0, "", ""]), Og, Og, Ng, Ae([1, "<fieldset>", "</fieldset>"]), Ae([1, "<map>", "</map>"]), Pg, Og, Pg, Ng, Og, Ae([2, "<table><tbody>", "</tbody></table>"]), Og], Sg = Qg.length, Tg = 0, Ug = ab(Qe);;) {
    if(Tg < Sg) {
      var Vg = Tg + 1, Wg = db(Ug, Qg[Tg], Rg[Tg]), Tg = Vg, Ug = Wg
    }else {
      cb(Ug);
      break a
    }
  }
}
var Xg, Yg = l;
function Zg(a) {
  return Yg.a(a, 0)
}
function $g(a, b) {
  return b < a.length ? new U(l, m, function() {
    return P(a.item(b), Yg.a(a, b + 1))
  }, l) : l
}
Yg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Zg.call(this, a);
    case 2:
      return $g.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yg.c = Zg;
Yg.a = $g;
Xg = Yg;
var ah, bh = l;
function ch(a) {
  return bh.a(a, 0)
}
function dh(a, b) {
  return b < a.length ? new U(l, m, function() {
    return P(a[b], bh.a(a, b + 1))
  }, l) : l
}
bh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ch.call(this, a);
    case 2:
      return dh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bh.c = ch;
bh.a = dh;
ah = bh;
function eh(a) {
  return v(a.item) ? Xg.c(a) : ah.c(a)
}
v("undefined" != typeof NodeList) && (r = NodeList.prototype, r.Ta = g, r.w = function(a) {
  return eh(a)
}, r.ua = g, r.v = function(a, b) {
  return a.item(b)
}, r.L = function(a, b, c) {
  return a.length <= b ? c : Wb.a(a, b)
}, r.Ea = g, r.B = function(a) {
  return a.length
});
v("undefined" != typeof StaticNodeList) && (r = StaticNodeList.prototype, r.Ta = g, r.w = function(a) {
  return eh(a)
}, r.ua = g, r.v = function(a, b) {
  return a.item(b)
}, r.L = function(a, b, c) {
  return a.length <= b ? c : Wb.a(a, b)
}, r.Ea = g, r.B = function(a) {
  return a.length
});
v("undefined" != typeof HTMLCollection) && (r = HTMLCollection.prototype, r.Ta = g, r.w = function(a) {
  return eh(a)
}, r.ua = g, r.v = function(a, b) {
  return a.item(b)
}, r.L = function(a, b, c) {
  return a.length <= b ? c : Wb.a(a, b)
}, r.Ea = g, r.B = function(a) {
  return a.length
});
function fh() {
  return(new Date).getTime()
}
ga("ca_vote.display.now", fh);
function gh(a) {
  return console.log(Jg.a(" ", a))
}
function hh(a) {
  var b = l;
  0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
  return gh.call(this, b)
}
hh.q = 0;
hh.l = function(a) {
  a = I(a);
  return gh(a)
};
hh.h = gh;
var ih = ag.c(0);
function jh(a, b, c, d) {
  d.fillStyle = c;
  d.strokeStyle = c;
  d.fillRect(a * La(ih) + 0, b * La(ih) + 0, La(ih), La(ih));
  d.strokeRect(a * La(ih) + 0, b * La(ih) + 0, La(ih), La(ih))
}
function kh(a) {
  var b, c = Lf("voting");
  b = da(c) ? document.getElementById(c) : c;
  c = b.getContext("2d");
  b = (b.width - 0) / 101;
  var d = ih.tb;
  v(d) && !v(d.c ? d.c(b) : d.call(l, b)) && e(Error([F("Assert failed: "), F("Validator rejected reference state"), F("\n"), F(Zf.h(O([hc(Eb(new hb(l, "validate", "validate", 1233162959, l), new hb(l, "new-value", "new-value", 972165309, l)), Te("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  d = ih.state;
  ih.state = b;
  $a(ih, d, b);
  for(var d = I(Of.c(101)), f = l, h = 0, i = 0;;) {
    if(i < h) {
      b = f.v(f, i);
      for(var j = I(Of.c(101)), k = l, s = 0, q = 0;;) {
        if(q < s) {
          var u = k.v(k, q);
          v(a[u][b]) ? jh(b, u, "#666", c) : jh(b, u, "#eee", c);
          q += 1
        }else {
          if(j = I(j)) {
            k = j, pc(k) ? (j = D(k), q = E(k), k = j, s = R(j), j = q) : (j = K(k), v(a[j][b]) ? jh(b, j, "#666", c) : jh(b, j, "#eee", c), j = M(k), k = l, s = 0), q = 0
          }else {
            break
          }
        }
      }
      i += 1
    }else {
      if(b = I(d)) {
        d = b;
        if(pc(d)) {
          f = D(d), d = E(d), b = f, h = R(f), f = b
        }else {
          b = K(d);
          f = I(Of.c(101));
          h = l;
          for(j = i = 0;;) {
            if(j < i) {
              k = h.v(h, j), v(a[k][b]) ? jh(b, k, "#666", c) : jh(b, k, "#eee", c), j += 1
            }else {
              if(f = I(f)) {
                h = f, pc(h) ? (f = D(h), j = E(h), h = f, i = R(f), f = j) : (f = K(h), v(a[f][b]) ? jh(b, f, "#666", c) : jh(b, f, "#eee", c), f = M(h), h = l, i = 0), j = 0
              }else {
                break
              }
            }
          }
          d = M(d);
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
ga("ca_vote.display.draw_grid", kh);
ga("ca_vote.display.draw", function() {
  function a() {
    var a = Array(101);
    a[0] = c;
    for(var b = I(Of.a(1, 101)), h = l, i = 0, j = 0;;) {
      if(j < i) {
        var k = h.v(h, j);
        a[k] = lg(a[k - 1]);
        j += 1
      }else {
        if(b = I(b)) {
          h = b, pc(h) ? (b = D(h), j = E(h), h = b, i = R(b), b = j) : (b = K(h), a[b] = lg(a[b - 1]), b = M(h), h = l, i = 0), j = 0
        }else {
          break
        }
      }
    }
    return kh(a)
  }
  var b = R(ig());
  console.log(b);
  var c = ig(), b = fh();
  a.r ? a.r() : a.call(l);
  return hh.h(O(["took", fh() - b], 0))
});
