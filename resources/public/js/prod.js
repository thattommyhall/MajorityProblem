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
var q, ca = this;
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
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, s, r, t) {
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
function oa(a) {
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
function Ka(a) {
  if(a ? a.jb : a) {
    return a.state
  }
  var b;
  var c = Ka[u(a == l ? l : a)];
  c ? b = c : (c = Ka._) ? b = c : e(x("IDeref.-deref", a));
  return b.call(l, a)
}
var La = {};
function Na(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  var c = Na[u(a == l ? l : a)];
  c ? b = c : (c = Na._) ? b = c : e(x("IMeta.-meta", a));
  return b.call(l, a)
}
var Oa = {};
function Pa(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  var d = Pa[u(a == l ? l : a)];
  d ? c = d : (d = Pa._) ? c = d : e(x("IWithMeta.-with-meta", a));
  return c.call(l, a, b)
}
var Qa = {}, Ra, Sa = l;
function Ta(a, b) {
  if(a ? a.ma : a) {
    return a.ma(a, b)
  }
  var c;
  var d = Ra[u(a == l ? l : a)];
  d ? c = d : (d = Ra._) ? c = d : e(x("IReduce.-reduce", a));
  return c.call(l, a, b)
}
function Ua(a, b, c) {
  if(a ? a.na : a) {
    return a.na(a, b, c)
  }
  var d;
  var f = Ra[u(a == l ? l : a)];
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
  var d = Va[u(a == l ? l : a)];
  d ? c = d : (d = Va._) ? c = d : e(x("IEquiv.-equiv", a));
  return c.call(l, a, b)
}
function Wa(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = Wa[u(a == l ? l : a)];
  c ? b = c : (c = Wa._) ? b = c : e(x("IHash.-hash", a));
  return b.call(l, a)
}
function Xa(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = Xa[u(a == l ? l : a)];
  c ? b = c : (c = Xa._) ? b = c : e(x("ISeqable.-seq", a));
  return b.call(l, a)
}
var Ya = {};
function C(a, b) {
  if(a ? a.cb : a) {
    return a.cb(0, b)
  }
  var c;
  var d = C[u(a == l ? l : a)];
  d ? c = d : (d = C._) ? c = d : e(x("IWriter.-write", a));
  return c.call(l, a, b)
}
function Za(a) {
  if(a ? a.ob : a) {
    return l
  }
  var b;
  var c = Za[u(a == l ? l : a)];
  c ? b = c : (c = Za._) ? b = c : e(x("IWriter.-flush", a));
  return b.call(l, a)
}
function $a(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  var f = $a[u(a == l ? l : a)];
  f ? d = f : (f = $a._) ? d = f : e(x("IWatchable.-notify-watches", a));
  return d.call(l, a, b, c)
}
function ab(a) {
  if(a ? a.ta : a) {
    return a.ta(a)
  }
  var b;
  var c = ab[u(a == l ? l : a)];
  c ? b = c : (c = ab._) ? b = c : e(x("IEditableCollection.-as-transient", a));
  return b.call(l, a)
}
function bb(a, b) {
  if(a ? a.va : a) {
    return a.va(a, b)
  }
  var c;
  var d = bb[u(a == l ? l : a)];
  d ? c = d : (d = bb._) ? c = d : e(x("ITransientCollection.-conj!", a));
  return c.call(l, a, b)
}
function cb(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  var c = cb[u(a == l ? l : a)];
  c ? b = c : (c = cb._) ? b = c : e(x("ITransientCollection.-persistent!", a));
  return b.call(l, a)
}
function db(a, b, c) {
  if(a ? a.oa : a) {
    return a.oa(a, b, c)
  }
  var d;
  var f = db[u(a == l ? l : a)];
  f ? d = f : (f = db._) ? d = f : e(x("ITransientAssociative.-assoc!", a));
  return d.call(l, a, b, c)
}
function eb(a) {
  if(a ? a.Xa : a) {
    return a.Xa()
  }
  var b;
  var c = eb[u(a == l ? l : a)];
  c ? b = c : (c = eb._) ? b = c : e(x("IChunk.-drop-first", a));
  return b.call(l, a)
}
function fb(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  var c = fb[u(a == l ? l : a)];
  c ? b = c : (c = fb._) ? b = c : e(x("IChunkedSeq.-chunked-first", a));
  return b.call(l, a)
}
function gb(a) {
  if(a ? a.za : a) {
    return a.za(a)
  }
  var b;
  var c = gb[u(a == l ? l : a)];
  c ? b = c : (c = gb._) ? b = c : e(x("IChunkedSeq.-chunked-rest", a));
  return b.call(l, a)
}
function hb(a) {
  this.sb = a;
  this.t = 0;
  this.j = 1073741824
}
hb.prototype.cb = function(a, b) {
  return this.sb.append(b)
};
hb.prototype.ob = p(l);
function ib(a) {
  var b = new ja, c = new hb(b);
  a.H(a, c, la());
  Za(c);
  return"" + D(b)
}
function jb(a, b, c, d, f) {
  this.ra = a;
  this.name = b;
  this.ja = c;
  this.ya = d;
  this.fb = f;
  this.t = 0;
  this.j = 2154168321
}
q = jb.prototype;
q.H = function(a, b) {
  return C(b, this.ja)
};
q.ab = g;
q.G = function() {
  -1 === this.ya && (this.ya = kb.a ? kb.a(E.c ? E.c(this.ra) : E.call(l, this.ra), E.c ? E.c(this.name) : E.call(l, this.name)) : kb.call(l, E.c ? E.c(this.ra) : E.call(l, this.ra), E.c ? E.c(this.name) : E.call(l, this.name)));
  return this.ya
};
q.J = function(a, b) {
  return new jb(this.ra, this.name, this.ja, this.ya, b)
};
q.I = n("fb");
var lb = l, lb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Aa.e(b, this, l);
    case 3:
      return Aa.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
jb.prototype.call = lb;
jb.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
jb.prototype.C = function(a, b) {
  return b instanceof jb ? this.ja === b.ja : m
};
jb.prototype.toString = n("ja");
function F(a) {
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
    return 0 === a.length ? l : new mb(a, 0)
  }
  if(w(za, a)) {
    return Xa(a)
  }
  e(Error([D(a), D("is not ISeqable")].join("")))
}
function H(a) {
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
  a = F(a);
  return a == l ? l : A(a)
}
function I(a) {
  if(a != l) {
    var b;
    if(b = a) {
      b = (b = a.j & 64) ? b : a.Sa
    }
    if(b) {
      return a.P(a)
    }
    a = F(a);
    return a != l ? B(a) : nb
  }
  return nb
}
function J(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    if(b = a) {
      b = (b = a.j & 128) ? b : a.yb
    }
    a = b ? a.fa(a) : F(I(a))
  }
  return a
}
var ob, pb = l;
function qb(a, b) {
  var c = a === b;
  return c ? c : Va(a, b)
}
function rb(a, b, c) {
  for(;;) {
    if(v(pb.a(a, b))) {
      if(J(c)) {
        a = b, b = H(c), c = J(c)
      }else {
        return pb.a(b, H(c))
      }
    }else {
      return m
    }
  }
}
function sb(a, b, c) {
  var d = l;
  2 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return rb.call(this, a, b, d)
}
sb.p = 2;
sb.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = I(a);
  return rb(b, c, a)
};
sb.h = rb;
pb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return g;
    case 2:
      return qb.call(this, a, b);
    default:
      return sb.h(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
pb.p = 2;
pb.k = sb.k;
pb.c = p(g);
pb.a = qb;
pb.h = sb.h;
ob = pb;
Wa["null"] = p(0);
ra["null"] = g;
sa["null"] = p(0);
Va["null"] = function(a, b) {
  return b == l
};
Oa["null"] = g;
Pa["null"] = p(l);
La["null"] = g;
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
La["function"] = g;
Na["function"] = p(l);
qa["function"] = g;
Wa._ = function(a) {
  return a[fa] || (a[fa] = ++ga)
};
var tb, ub = l;
function vb(a, b) {
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
function wb(a, b, c) {
  for(var d = sa(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, y.a(a, f)) : b.call(l, c, y.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function xb(a, b, c, d) {
  for(var f = sa(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, y.a(a, d)) : b.call(l, c, y.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
ub = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return vb.call(this, a, b);
    case 3:
      return wb.call(this, a, b, c);
    case 4:
      return xb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ub.a = vb;
ub.e = wb;
ub.l = xb;
tb = ub;
var yb, zb = l;
function Ab(a, b) {
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
function Bb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(l, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function Cb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(l, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
zb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Ab.call(this, a, b);
    case 3:
      return Bb.call(this, a, b, c);
    case 4:
      return Cb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
zb.a = Ab;
zb.e = Bb;
zb.l = Cb;
yb = zb;
function Db(a) {
  if(a) {
    var b = a.j & 2, a = (b ? b : a.Ea) ? g : a.j ? m : w(ra, a)
  }else {
    a = w(ra, a)
  }
  return a
}
function Eb(a) {
  if(a) {
    var b = a.j & 16, a = (b ? b : a.ua) ? g : a.j ? m : w(ua, a)
  }else {
    a = w(ua, a)
  }
  return a
}
function mb(a, b) {
  this.b = a;
  this.o = b;
  this.t = 0;
  this.j = 166199550
}
q = mb.prototype;
q.G = function(a) {
  return Fb.c ? Fb.c(a) : Fb.call(l, a)
};
q.fa = function() {
  return this.o + 1 < this.b.length ? new mb(this.b, this.o + 1) : l
};
q.F = function(a, b) {
  return M.a ? M.a(b, a) : M.call(l, b, a)
};
q.toString = function() {
  return ib(this)
};
q.ma = function(a, b) {
  return yb.l(this.b, b, this.b[this.o], this.o + 1)
};
q.na = function(a, b, c) {
  return yb.l(this.b, b, c, this.o)
};
q.w = ba();
q.B = function() {
  return this.b.length - this.o
};
q.O = function() {
  return this.b[this.o]
};
q.P = function() {
  return this.o + 1 < this.b.length ? new mb(this.b, this.o + 1) : Gb.r ? Gb.r() : Gb.call(l)
};
q.C = function(a, b) {
  return Hb.a ? Hb.a(a, b) : Hb.call(l, a, b)
};
q.v = function(a, b) {
  var c = b + this.o;
  return c < this.b.length ? this.b[c] : l
};
q.L = function(a, b, c) {
  a = b + this.o;
  return a < this.b.length ? this.b[a] : c
};
var Ib, Jb = l;
function Kb(a) {
  return Jb.a(a, 0)
}
function Lb(a, b) {
  return b < a.length ? new mb(a, b) : l
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
Ib = Jb;
var L, Mb = l;
function Nb(a) {
  return Ib.a(a, 0)
}
function Ob(a, b) {
  return Ib.a(a, b)
}
Mb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Nb.call(this, a);
    case 2:
      return Ob.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mb.c = Nb;
Mb.a = Ob;
L = Mb;
ra.array = g;
sa.array = function(a) {
  return a.length
};
Va._ = function(a, b) {
  return a === b
};
var Pb, Qb = l;
function Rb(a, b) {
  return a != l ? ta(a, b) : Gb.c ? Gb.c(b) : Gb.call(l, b)
}
function Sb(a, b, c) {
  for(;;) {
    if(v(c)) {
      a = Qb.a(a, b), b = H(c), c = J(c)
    }else {
      return Qb.a(a, b)
    }
  }
}
function Tb(a, b, c) {
  var d = l;
  2 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return Sb.call(this, a, b, d)
}
Tb.p = 2;
Tb.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = I(a);
  return Sb(b, c, a)
};
Tb.h = Sb;
Qb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Rb.call(this, a, b);
    default:
      return Tb.h(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qb.p = 2;
Qb.k = Tb.k;
Qb.a = Rb;
Qb.h = Tb.h;
Pb = Qb;
function N(a) {
  if(Db(a)) {
    a = sa(a)
  }else {
    a: {
      for(var a = F(a), b = 0;;) {
        if(Db(a)) {
          a = b + sa(a);
          break a
        }
        a = J(a);
        b += 1
      }
      a = aa
    }
  }
  return a
}
var Ub, Vb = l;
function Wb(a, b) {
  for(;;) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(F(a)) {
        return H(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Eb(a)) {
      return y.a(a, b)
    }
    if(F(a)) {
      var c = J(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function Xb(a, b, c) {
  for(;;) {
    if(a == l) {
      return c
    }
    if(0 === b) {
      return F(a) ? H(a) : c
    }
    if(Eb(a)) {
      return y.e(a, b, c)
    }
    if(F(a)) {
      a = J(a), b -= 1
    }else {
      return c
    }
  }
}
Vb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Wb.call(this, a, b);
    case 3:
      return Xb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vb.a = Wb;
Vb.e = Xb;
Ub = Vb;
var P, Yb = l;
function Zb(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 16) ? c : a.ua
    }
    c = c ? a.v(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : l : oa(a) ? b < a.length ? a[b] : l : Ub.a(a, Math.floor(b))
  }
  return c
}
function $b(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 16) ? d : a.ua
    }
    a = d ? a.L(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : oa(a) ? b < a.length ? a[b] : c : Ub.e(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
Yb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Zb.call(this, a, b);
    case 3:
      return $b.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yb.a = Zb;
Yb.e = $b;
P = Yb;
var ac, bc = l;
function cc(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 256) ? c : a.kb
    }
    c = c ? a.M(a, b) : a instanceof Array ? b < a.length ? a[b] : l : oa(a) ? b < a.length ? a[b] : l : w(za, a) ? Aa.a(a, b) : l
  }
  return c
}
function dc(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 256) ? d : a.kb
    }
    a = d ? a.D(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : oa(a) ? b < a.length ? a[b] : c : w(za, a) ? Aa.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
bc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return cc.call(this, a, b);
    case 3:
      return dc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bc.a = cc;
bc.e = dc;
ac = bc;
var ec, fc = l;
function gc(a, b, c) {
  return a != l ? Ea(a, b, c) : hc.a ? hc.a(b, c) : hc.call(l, b, c)
}
function ic(a, b, c, d) {
  for(;;) {
    if(a = fc.e(a, b, c), v(d)) {
      b = H(d), c = H(J(d)), d = J(J(d))
    }else {
      return a
    }
  }
}
function jc(a, b, c, d) {
  var f = l;
  3 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 3), 0));
  return ic.call(this, a, b, c, f)
}
jc.p = 3;
jc.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = J(a), d = H(a), a = I(a);
  return ic(b, c, d, a)
};
jc.h = ic;
fc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return gc.call(this, a, b, c);
    default:
      return jc.h(a, b, c, L(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
fc.p = 3;
fc.k = jc.k;
fc.e = gc;
fc.h = jc.h;
ec = fc;
function kc(a) {
  var b = "function" == u(a);
  return b ? b : a ? v(v(l) ? l : a.gb) ? g : a.Cb ? m : w(qa, a) : w(qa, a)
}
var oc = function mc(b, c) {
  var d;
  if(d = kc(b)) {
    d = b ? ((d = b.j & 262144) ? d : b.Bb) || (b.j ? 0 : w(Oa, b)) : w(Oa, b), d = !d
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
        return C(b, "cljs.core/t5519")
      };
      var f = function(b, c) {
        return nc.a ? nc.a(b.Va, c) : nc.call(l, b.Va, c)
      };
      d = function(b, c) {
        var b = this, d = l;
        1 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.p = 1;
      d.k = function(b) {
        var c = H(b), b = I(b);
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
    d = new ka(c, b, mc, l);
    d = mc(d, c)
  }else {
    d = Pa(b, c)
  }
  return d
};
function pc(a) {
  var b;
  b = a ? ((b = a.j & 131072) ? b : a.mb) || (a.j ? 0 : w(La, a)) : w(La, a);
  return b ? Na(a) : l
}
var qc = {}, rc = 0, E, sc = l;
function tc(a) {
  return sc.a(a, g)
}
function uc(a, b) {
  var c;
  ((c = ea(a)) ? b : c) ? (255 < rc && (qc = {}, rc = 0), c = qc[a], "number" !== typeof c && (c = ha(a), qc[a] = c, rc += 1)) : c = Wa(a);
  return c
}
sc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return tc.call(this, a);
    case 2:
      return uc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sc.c = tc;
sc.a = uc;
E = sc;
function vc(a) {
  if(a) {
    var b = a.j & 16384, a = (b ? b : a.Ab) ? g : a.j ? m : w(Ja, a)
  }else {
    a = w(Ja, a)
  }
  return a
}
function wc(a) {
  var b = a instanceof xc;
  return b ? b : a instanceof yc
}
function zc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
function Ac(a) {
  return a === g
}
function Bc(a) {
  var b = ea(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Cc(a, b) {
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
var Dc, Ec = l;
function Fc(a, b) {
  var c = N(a), d = N(b);
  return c < d ? -1 : c > d ? 1 : Ec.l(a, b, c, 0)
}
function Gc(a, b, c, d) {
  for(;;) {
    var f = Cc(P.a(a, d), P.a(b, d)), h = 0 === f;
    if(h ? d + 1 < c : h) {
      d += 1
    }else {
      return f
    }
  }
}
Ec = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Fc.call(this, a, b);
    case 4:
      return Gc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ec.a = Fc;
Ec.l = Gc;
Dc = Ec;
var Hc, Ic = l;
function Jc(a, b) {
  var c = F(b);
  return c ? Kc.e ? Kc.e(a, H(c), J(c)) : Kc.call(l, a, H(c), J(c)) : a.r ? a.r() : a.call(l)
}
function Lc(a, b, c) {
  for(c = F(c);;) {
    if(c) {
      b = a.a ? a.a(b, H(c)) : a.call(l, b, H(c)), c = J(c)
    }else {
      return b
    }
  }
}
Ic = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Jc.call(this, a, b);
    case 3:
      return Lc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ic.a = Jc;
Ic.e = Lc;
Hc = Ic;
var Kc, Mc = l;
function Nc(a, b) {
  var c;
  if(c = b) {
    c = (c = b.j & 524288) ? c : b.nb
  }
  return c ? b.ma(b, a) : b instanceof Array ? yb.a(b, a) : oa(b) ? yb.a(b, a) : w(Qa, b) ? Ra.a(b, a) : Hc.a(a, b)
}
function Oc(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.j & 524288) ? d : c.nb
  }
  return d ? c.na(c, a, b) : c instanceof Array ? yb.e(c, a, b) : oa(c) ? yb.e(c, a, b) : w(Qa, c) ? Ra.e(c, a, b) : Hc.e(a, b, c)
}
Mc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Nc.call(this, a, b);
    case 3:
      return Oc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mc.a = Nc;
Mc.e = Oc;
Kc = Mc;
function Pc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(l, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(l, a)
}
var Qc, Rc = l;
function Sc() {
  return Math.random.r ? Math.random.r() : Math.random.call(l)
}
function Tc(a) {
  return a * Rc.r()
}
Rc = function(a) {
  switch(arguments.length) {
    case 0:
      return Sc.call(this);
    case 1:
      return Tc.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rc.r = Sc;
Rc.c = Tc;
Qc = Rc;
function Uc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Vc, Wc = l;
function Xc(a) {
  return a == l ? "" : a.toString()
}
function Yc(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append(Wc.c(H(b))), h = J(b), a = f, b = h
      }else {
        return Wc.c(a)
      }
    }
  }.call(l, new ja(Wc.c(a)), b)
}
function Zc(a, b) {
  var c = l;
  1 < arguments.length && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return Yc.call(this, a, c)
}
Zc.p = 1;
Zc.k = function(a) {
  var b = H(a), a = I(a);
  return Yc(b, a)
};
Zc.h = Yc;
Wc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Xc.call(this, a);
    default:
      return Zc.h(a, L(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wc.p = 1;
Wc.k = Zc.k;
Wc.r = p("");
Wc.c = Xc;
Wc.h = Zc.h;
Vc = Wc;
var D, $c = l;
function ad(a) {
  return Bc(a) ? Vc.h(":", L([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
}
function bd(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append($c.c(H(b))), h = J(b), a = f, b = h
      }else {
        return Vc.c(a)
      }
    }
  }.call(l, new ja($c.c(a)), b)
}
function cd(a, b) {
  var c = l;
  1 < arguments.length && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return bd.call(this, a, c)
}
cd.p = 1;
cd.k = function(a) {
  var b = H(a), a = I(a);
  return bd(b, a)
};
cd.h = bd;
$c = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return ad.call(this, a);
    default:
      return cd.h(a, L(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
$c.p = 1;
$c.k = cd.k;
$c.r = p("");
$c.c = ad;
$c.h = cd.h;
D = $c;
var dd, ed = l, ed = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ed.a = function(a, b) {
  return a.substring(b)
};
ed.e = function(a, b, c) {
  return a.substring(b, c)
};
dd = ed;
function Hb(a, b) {
  var c;
  c = b ? ((c = b.j & 16777216) ? c : b.zb) || (b.j ? 0 : w(Ya, b)) : w(Ya, b);
  if(c) {
    a: {
      c = F(a);
      for(var d = F(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && ob.a(H(c), H(d))) {
          c = J(c), d = J(d)
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
function kb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Fb(a) {
  return Kc.e(function(a, c) {
    return kb(a, E.a(c, m))
  }, E.a(H(a), m), J(a))
}
function fd(a) {
  for(var b = 0, a = F(a);;) {
    if(a) {
      var c = H(a), b = (b + (E.c(R.c ? R.c(c) : R.call(l, c)) ^ E.c(S.c ? S.c(c) : S.call(l, c)))) % 4503599627370496, a = J(a)
    }else {
      return b
    }
  }
}
function gd(a, b, c, d, f) {
  this.n = a;
  this.wa = b;
  this.ca = c;
  this.count = d;
  this.m = f;
  this.t = 0;
  this.j = 65413358
}
q = gd.prototype;
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.fa = function() {
  return 1 === this.count ? l : this.ca
};
q.F = function(a, b) {
  return new gd(this.n, b, a, this.count + 1, l)
};
q.toString = function() {
  return ib(this)
};
q.w = ba();
q.B = n("count");
q.O = n("wa");
q.P = function() {
  return 1 === this.count ? nb : this.ca
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new gd(b, this.wa, this.ca, this.count, this.m)
};
q.I = n("n");
function hd(a) {
  this.n = a;
  this.t = 0;
  this.j = 65413326
}
q = hd.prototype;
q.G = p(0);
q.fa = p(l);
q.F = function(a, b) {
  return new gd(this.n, b, l, 1, l)
};
q.toString = function() {
  return ib(this)
};
q.w = p(l);
q.B = p(0);
q.O = p(l);
q.P = function() {
  return nb
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new hd(b)
};
q.I = n("n");
var nb = new hd(l), Gb;
function id(a) {
  var b;
  if(a instanceof mb) {
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
  for(var a = b.length, c = nb;;) {
    if(0 < a) {
      var d = a - 1, c = c.F(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function jd(a) {
  var b = l;
  0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return id.call(this, b)
}
jd.p = 0;
jd.k = function(a) {
  a = F(a);
  return id(a)
};
jd.h = id;
Gb = jd;
function kd(a, b, c, d) {
  this.n = a;
  this.wa = b;
  this.ca = c;
  this.m = d;
  this.t = 0;
  this.j = 65405164
}
q = kd.prototype;
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.fa = function() {
  return this.ca == l ? l : Xa(this.ca)
};
q.F = function(a, b) {
  return new kd(l, b, a, this.m)
};
q.toString = function() {
  return ib(this)
};
q.w = ba();
q.O = n("wa");
q.P = function() {
  return this.ca == l ? nb : this.ca
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new kd(b, this.wa, this.ca, this.m)
};
q.I = n("n");
function M(a, b) {
  var c = b == l;
  if(!c && (c = b)) {
    c = (c = b.j & 64) ? c : b.Sa
  }
  return c ? new kd(l, a, b, l) : new kd(l, a, F(b), l)
}
ra.string = g;
sa.string = function(a) {
  return a.length
};
Wa.string = function(a) {
  return ha(a)
};
function ld(a) {
  this.Ua = a;
  this.t = 0;
  this.j = 1
}
var md = l, md = function(a, b, c) {
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
ld.prototype.call = md;
ld.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var nd = l, nd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ac.a(b, this.toString());
    case 3:
      return ac.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = nd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? ac.a(b[0], a) : ac.e(b[0], a, b[1])
};
function od(a) {
  var b = a.x;
  if(a.Wa) {
    return b
  }
  a.x = b.r ? b.r() : b.call(l);
  a.Wa = g;
  return a.x
}
function T(a, b, c, d) {
  this.n = a;
  this.Wa = b;
  this.x = c;
  this.m = d;
  this.t = 0;
  this.j = 31850700
}
q = T.prototype;
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.fa = function(a) {
  return Xa(a.P(a))
};
q.F = function(a, b) {
  return M(b, a)
};
q.toString = function() {
  return ib(this)
};
q.w = function(a) {
  return F(od(a))
};
q.O = function(a) {
  return H(od(a))
};
q.P = function(a) {
  return I(od(a))
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new T(b, this.Wa, this.x, this.m)
};
q.I = n("n");
function pd(a, b) {
  this.Ca = a;
  this.end = b;
  this.t = 0;
  this.j = 2
}
pd.prototype.B = n("end");
pd.prototype.add = function(a) {
  this.Ca[this.end] = a;
  return this.end += 1
};
pd.prototype.da = function() {
  var a = new qd(this.Ca, 0, this.end);
  this.Ca = l;
  return a
};
function qd(a, b, c) {
  this.b = a;
  this.A = b;
  this.end = c;
  this.t = 0;
  this.j = 524306
}
q = qd.prototype;
q.ma = function(a, b) {
  return yb.l(this.b, b, this.b[this.A], this.A + 1)
};
q.na = function(a, b, c) {
  return yb.l(this.b, b, c, this.A)
};
q.Xa = function() {
  this.A === this.end && e(Error("-drop-first of empty chunk"));
  return new qd(this.b, this.A + 1, this.end)
};
q.v = function(a, b) {
  return this.b[this.A + b]
};
q.L = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.A : a) ? this.b[this.A + b] : c
};
q.B = function() {
  return this.end - this.A
};
var rd, sd = l;
function td(a) {
  return new qd(a, 0, a.length)
}
function ud(a, b) {
  return new qd(a, b, a.length)
}
function vd(a, b, c) {
  return new qd(a, b, c)
}
sd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return td.call(this, a);
    case 2:
      return ud.call(this, a, b);
    case 3:
      return vd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sd.c = td;
sd.a = ud;
sd.e = vd;
rd = sd;
function xc(a, b, c, d) {
  this.da = a;
  this.ha = b;
  this.n = c;
  this.m = d;
  this.j = 31850604;
  this.t = 1536
}
q = xc.prototype;
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.F = function(a, b) {
  return M(b, a)
};
q.toString = function() {
  return ib(this)
};
q.w = ba();
q.O = function() {
  return y.a(this.da, 0)
};
q.P = function() {
  return 1 < sa(this.da) ? new xc(eb(this.da), this.ha, this.n, l) : this.ha == l ? nb : this.ha
};
q.Ya = function() {
  return this.ha == l ? l : this.ha
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new xc(this.da, this.ha, b, this.m)
};
q.I = n("n");
q.Da = n("da");
q.za = function() {
  return this.ha == l ? nb : this.ha
};
function wd(a, b) {
  return 0 === sa(a) ? b : new xc(a, b, l, l)
}
function xd(a) {
  for(var b = [];;) {
    if(F(a)) {
      b.push(H(a)), a = J(a)
    }else {
      return b
    }
  }
}
function yd(a, b) {
  if(Db(a)) {
    return N(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? F(c) : h;
    if(v(h)) {
      c = J(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Ad = function zd(b) {
  return b == l ? l : J(b) == l ? F(H(b)) : M(H(b), zd(J(b)))
}, Bd, Cd = l;
function Dd() {
  return new T(l, m, p(l), l)
}
function Ed(a) {
  return new T(l, m, function() {
    return a
  }, l)
}
function Fd(a, b) {
  return new T(l, m, function() {
    var c = F(a);
    return c ? wc(c) ? wd(fb(c), Cd.a(gb(c), b)) : M(H(c), Cd.a(I(c), b)) : b
  }, l)
}
function Gd(a, b, c) {
  return function f(a, b) {
    return new T(l, m, function() {
      var c = F(a);
      return c ? wc(c) ? wd(fb(c), f(gb(c), b)) : M(H(c), f(I(c), b)) : v(b) ? f(H(b), J(b)) : l
    }, l)
  }(Cd.a(a, b), c)
}
function Hd(a, b, c) {
  var d = l;
  2 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return Gd.call(this, a, b, d)
}
Hd.p = 2;
Hd.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = I(a);
  return Gd(b, c, a)
};
Hd.h = Gd;
Cd = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Dd.call(this);
    case 1:
      return Ed.call(this, a);
    case 2:
      return Fd.call(this, a, b);
    default:
      return Hd.h(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cd.p = 2;
Cd.k = Hd.k;
Cd.r = Dd;
Cd.c = Ed;
Cd.a = Fd;
Cd.h = Hd.h;
Bd = Cd;
var Id, Jd = l;
function Kd(a, b, c) {
  return M(a, M(b, c))
}
function Ld(a, b, c, d) {
  return M(a, M(b, M(c, d)))
}
function Md(a, b, c, d, f) {
  return M(a, M(b, M(c, M(d, Ad(f)))))
}
function Nd(a, b, c, d, f) {
  var h = l;
  4 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 4), 0));
  return Md.call(this, a, b, c, d, h)
}
Nd.p = 4;
Nd.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = J(a), d = H(a), a = J(a), f = H(a), a = I(a);
  return Md(b, c, d, f, a)
};
Nd.h = Md;
Jd = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return F(a);
    case 2:
      return M(a, b);
    case 3:
      return Kd.call(this, a, b, c);
    case 4:
      return Ld.call(this, a, b, c, d);
    default:
      return Nd.h(a, b, c, d, L(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jd.p = 4;
Jd.k = Nd.k;
Jd.c = function(a) {
  return F(a)
};
Jd.a = function(a, b) {
  return M(a, b)
};
Jd.e = Kd;
Jd.l = Ld;
Jd.h = Nd.h;
Id = Jd;
function Od(a, b, c) {
  var d = F(c);
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
    return a.l ? a.l(c, d, f, h) : a.l ? a.l(c, d, f, h) : a.call(l, c, d, f, h)
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
  var k = A(s), r = B(s);
  if(8 === b) {
    return a.Qa ? a.Qa(c, d, f, h, i, a, j, k) : a.Qa ? a.Qa(c, d, f, h, i, a, j, k) : a.call(l, c, d, f, h, i, a, j, k)
  }
  var s = A(r), t = B(r);
  if(9 === b) {
    return a.Ra ? a.Ra(c, d, f, h, i, a, j, k, s) : a.Ra ? a.Ra(c, d, f, h, i, a, j, k, s) : a.call(l, c, d, f, h, i, a, j, k, s)
  }
  var r = A(t), z = B(t);
  if(10 === b) {
    return a.Fa ? a.Fa(c, d, f, h, i, a, j, k, s, r) : a.Fa ? a.Fa(c, d, f, h, i, a, j, k, s, r) : a.call(l, c, d, f, h, i, a, j, k, s, r)
  }
  var t = A(z), G = B(z);
  if(11 === b) {
    return a.Ga ? a.Ga(c, d, f, h, i, a, j, k, s, r, t) : a.Ga ? a.Ga(c, d, f, h, i, a, j, k, s, r, t) : a.call(l, c, d, f, h, i, a, j, k, s, r, t)
  }
  var z = A(G), K = B(G);
  if(12 === b) {
    return a.Ha ? a.Ha(c, d, f, h, i, a, j, k, s, r, t, z) : a.Ha ? a.Ha(c, d, f, h, i, a, j, k, s, r, t, z) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z)
  }
  var G = A(K), O = B(K);
  if(13 === b) {
    return a.Ia ? a.Ia(c, d, f, h, i, a, j, k, s, r, t, z, G) : a.Ia ? a.Ia(c, d, f, h, i, a, j, k, s, r, t, z, G) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z, G)
  }
  var K = A(O), Q = B(O);
  if(14 === b) {
    return a.Ja ? a.Ja(c, d, f, h, i, a, j, k, s, r, t, z, G, K) : a.Ja ? a.Ja(c, d, f, h, i, a, j, k, s, r, t, z, G, K) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z, G, K)
  }
  var O = A(Q), Z = B(Q);
  if(15 === b) {
    return a.Ka ? a.Ka(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O) : a.Ka ? a.Ka(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z, G, K, O)
  }
  var Q = A(Z), pa = B(Z);
  if(16 === b) {
    return a.La ? a.La(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q) : a.La ? a.La(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q)
  }
  var Z = A(pa), Ma = B(pa);
  if(17 === b) {
    return a.Ma ? a.Ma(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z) : a.Ma ? a.Ma(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z)
  }
  var pa = A(Ma), lc = B(Ma);
  if(18 === b) {
    return a.Na ? a.Na(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa) : a.Na ? a.Na(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa)
  }
  Ma = A(lc);
  lc = B(lc);
  if(19 === b) {
    return a.Oa ? a.Oa(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa, Ma) : a.Oa ? a.Oa(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa, Ma) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa, Ma)
  }
  var Sd = A(lc);
  B(lc);
  if(20 === b) {
    return a.Pa ? a.Pa(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa, Ma, Sd) : a.Pa ? a.Pa(c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa, Ma, Sd) : a.call(l, c, d, f, h, i, a, j, k, s, r, t, z, G, K, O, Q, Z, pa, Ma, Sd)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var nc, Pd = l;
function Qd(a, b) {
  var c = a.p;
  if(a.k) {
    var d = yd(b, c + 1);
    return d <= c ? Od(a, d, b) : a.k(b)
  }
  return a.apply(a, xd(b))
}
function Rd(a, b, c) {
  b = Id.a(b, c);
  c = a.p;
  if(a.k) {
    var d = yd(b, c + 1);
    return d <= c ? Od(a, d, b) : a.k(b)
  }
  return a.apply(a, xd(b))
}
function Td(a, b, c, d) {
  b = Id.e(b, c, d);
  c = a.p;
  return a.k ? (d = yd(b, c + 1), d <= c ? Od(a, d, b) : a.k(b)) : a.apply(a, xd(b))
}
function Ud(a, b, c, d, f) {
  b = Id.l(b, c, d, f);
  c = a.p;
  return a.k ? (d = yd(b, c + 1), d <= c ? Od(a, d, b) : a.k(b)) : a.apply(a, xd(b))
}
function Vd(a, b, c, d, f, h) {
  b = M(b, M(c, M(d, M(f, Ad(h)))));
  c = a.p;
  return a.k ? (d = yd(b, c + 1), d <= c ? Od(a, d, b) : a.k(b)) : a.apply(a, xd(b))
}
function Wd(a, b, c, d, f, h) {
  var i = l;
  5 < arguments.length && (i = L(Array.prototype.slice.call(arguments, 5), 0));
  return Vd.call(this, a, b, c, d, f, i)
}
Wd.p = 5;
Wd.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = J(a), d = H(a), a = J(a), f = H(a), a = J(a), h = H(a), a = I(a);
  return Vd(b, c, d, f, h, a)
};
Wd.h = Vd;
Pd = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return Qd.call(this, a, b);
    case 3:
      return Rd.call(this, a, b, c);
    case 4:
      return Td.call(this, a, b, c, d);
    case 5:
      return Ud.call(this, a, b, c, d, f);
    default:
      return Wd.h(a, b, c, d, f, L(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pd.p = 5;
Pd.k = Wd.k;
Pd.a = Qd;
Pd.e = Rd;
Pd.l = Td;
Pd.Y = Ud;
Pd.h = Wd.h;
nc = Pd;
function Xd(a, b) {
  for(;;) {
    if(F(b) == l) {
      return g
    }
    if(v(a.c ? a.c(H(b)) : a.call(l, H(b)))) {
      var c = a, d = J(b), a = c, b = d
    }else {
      return m
    }
  }
}
function Yd(a) {
  return a
}
var Zd, U = l;
function $d(a, b) {
  return new T(l, m, function() {
    var c = F(b);
    if(c) {
      if(wc(c)) {
        for(var d = fb(c), f = N(d), h = new pd(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.c ? a.c(y.a(d, i)) : a.call(l, y.a(d, i));
            h.add(j);
            i += 1
          }else {
            break
          }
        }
        return wd(h.da(), U.a(a, gb(c)))
      }
      return M(a.c ? a.c(H(c)) : a.call(l, H(c)), U.a(a, I(c)))
    }
    return l
  }, l)
}
function ae(a, b, c) {
  return new T(l, m, function() {
    var d = F(b), f = F(c);
    return(d ? f : d) ? M(a.a ? a.a(H(d), H(f)) : a.call(l, H(d), H(f)), U.e(a, I(d), I(f))) : l
  }, l)
}
function be(a, b, c, d) {
  return new T(l, m, function() {
    var f = F(b), h = F(c), i = F(d);
    return(f ? h ? i : h : f) ? M(a.e ? a.e(H(f), H(h), H(i)) : a.call(l, H(f), H(h), H(i)), U.l(a, I(f), I(h), I(i))) : l
  }, l)
}
function ce(a, b, c, d, f) {
  return U.a(function(b) {
    return nc.a(a, b)
  }, function i(a) {
    return new T(l, m, function() {
      var b = U.a(F, a);
      return Xd(Yd, b) ? M(U.a(H, b), i(U.a(I, b))) : l
    }, l)
  }(Pb.h(f, d, L([c, b], 0))))
}
function de(a, b, c, d, f) {
  var h = l;
  4 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 4), 0));
  return ce.call(this, a, b, c, d, h)
}
de.p = 4;
de.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = J(a), d = H(a), a = J(a), f = H(a), a = I(a);
  return ce(b, c, d, f, a)
};
de.h = ce;
U = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return $d.call(this, a, b);
    case 3:
      return ae.call(this, a, b, c);
    case 4:
      return be.call(this, a, b, c, d);
    default:
      return de.h(a, b, c, d, L(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
U.p = 4;
U.k = de.k;
U.a = $d;
U.e = ae;
U.l = be;
U.h = de.h;
Zd = U;
var fe = function ee(b, c) {
  return new T(l, m, function() {
    if(0 < b) {
      var d = F(c);
      return d ? M(H(d), ee(b - 1, I(d))) : l
    }
    return l
  }, l)
}, ge, he = l;
function ie(a) {
  return new T(l, m, function() {
    return M(a, he.c(a))
  }, l)
}
function je(a, b) {
  return fe(a, he.c(b))
}
he = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ie.call(this, a);
    case 2:
      return je.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
he.c = ie;
he.a = je;
ge = he;
var ke, le = l;
function me(a) {
  return new T(l, m, function() {
    return M(a.r ? a.r() : a.call(l), le.c(a))
  }, l)
}
function ne(a, b) {
  return fe(a, le.c(b))
}
le = function(a, b) {
  switch(arguments.length) {
    case 1:
      return me.call(this, a);
    case 2:
      return ne.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
le.c = me;
le.a = ne;
ke = le;
var oe, pe = l;
function qe(a, b) {
  return new T(l, m, function() {
    var c = F(a), d = F(b);
    return(c ? d : c) ? M(H(c), M(H(d), pe.a(I(c), I(d)))) : l
  }, l)
}
function re(a, b, c) {
  return new T(l, m, function() {
    var d = Zd.a(F, Pb.h(c, b, L([a], 0)));
    return Xd(Yd, d) ? Bd.a(Zd.a(H, d), nc.a(pe, Zd.a(I, d))) : l
  }, l)
}
function se(a, b, c) {
  var d = l;
  2 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return re.call(this, a, b, d)
}
se.p = 2;
se.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = I(a);
  return re(b, c, a)
};
se.h = re;
pe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return qe.call(this, a, b);
    default:
      return se.h(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
pe.p = 2;
pe.k = se.k;
pe.a = qe;
pe.h = se.h;
oe = pe;
function te(a, b) {
  var c = oe.a(ge.c(a), b);
  return new T(l, m, function() {
    var a;
    a: {
      a = 1;
      for(var b = c;;) {
        var b = F(b), h = 0 < a;
        if(v(h ? b : h)) {
          a -= 1, b = I(b)
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
var ve = function ue(b, c) {
  return new T(l, m, function() {
    var d = F(c);
    if(d) {
      if(wc(d)) {
        for(var f = fb(d), h = N(f), i = new pd(Array(h), 0), j = 0;;) {
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
        return wd(i.da(), ue(b, gb(d)))
      }
      f = H(d);
      d = I(d);
      return v(b.c ? b.c(f) : b.call(l, f)) ? M(f, ue(b, d)) : ue(b, d)
    }
    return l
  }, l)
};
function we(a, b) {
  var c;
  if(a != l) {
    if(c = a) {
      c = (c = a.t & 4) ? c : a.wb
    }
    c ? (c = Kc.e(bb, ab(a), b), c = cb(c)) : c = Kc.e(ta, a, b)
  }else {
    c = Kc.e(Pb, nb, b)
  }
  return c
}
var ye = function xe(b, c, d) {
  var f = P.e(c, 0, l), h;
  a: {
    h = 1;
    for(c = F(c);;) {
      var i = c;
      if(v(i ? 0 < h : i)) {
        h -= 1, c = J(c)
      }else {
        h = c;
        break a
      }
    }
    h = aa
  }
  return v(h) ? ec.e(b, f, xe(ac.a(b, f), h, d)) : ec.e(b, f, d)
};
function ze(a, b) {
  this.q = a;
  this.b = b
}
function Ae(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Be(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new ze(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var De = function Ce(b, c, d, f) {
  var h = new ze(d.q, d.b.slice()), i = b.g - 1 >>> c & 31;
  5 === c ? h.b[i] = f : (d = d.b[i], b = d != l ? Ce(b, c - 5, d, f) : Be(l, c - 5, f), h.b[i] = b);
  return h
};
function Ee(a, b) {
  var c = 0 <= b;
  if(c ? b < a.g : c) {
    if(b >= Ae(a)) {
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
    e(Error([D("No item "), D(b), D(" in vector of length "), D(a.g)].join("")))
  }
}
var Ge = function Fe(b, c, d, f, h) {
  var i = new ze(d.q, d.b.slice());
  if(0 === c) {
    i.b[f & 31] = h
  }else {
    var j = f >>> c & 31, b = Fe(b, c - 5, d.b[j], f, h);
    i.b[j] = b
  }
  return i
};
function V(a, b, c, d, f, h) {
  this.n = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.K = f;
  this.m = h;
  this.t = 4;
  this.j = 167668511
}
q = V.prototype;
q.ta = function() {
  return new He(this.g, this.shift, Ie.c ? Ie.c(this.root) : Ie.call(l, this.root), Je.c ? Je.c(this.K) : Je.call(l, this.K))
};
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.M = function(a, b) {
  return a.L(a, b, l)
};
q.D = function(a, b, c) {
  return a.L(a, b, c)
};
q.ea = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.g : d) {
    return Ae(a) <= b ? (a = this.K.slice(), a[b & 31] = c, new V(this.n, this.g, this.shift, this.root, a, l)) : new V(this.n, this.g, this.shift, Ge(a, this.shift, this.root, b, c), this.K, l)
  }
  if(b === this.g) {
    return a.F(a, c)
  }
  e(Error([D("Index "), D(b), D(" out of bounds  [0,"), D(this.g), D("]")].join("")))
};
var Ke = l, Ke = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
q = V.prototype;
q.call = Ke;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  if(32 > this.g - Ae(a)) {
    var c = this.K.slice();
    c.push(b);
    return new V(this.n, this.g + 1, this.shift, this.root, c, l)
  }
  var d = this.g >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new ze(l, Array(32));
    d.b[0] = this.root;
    var f = Be(l, this.shift, new ze(l, this.K));
    d.b[1] = f
  }else {
    d = De(a, this.shift, this.root, new ze(l, this.K))
  }
  return new V(this.n, this.g + 1, c, d, [b], l)
};
q.Za = function(a) {
  return a.v(a, 0)
};
q.$a = function(a) {
  return a.v(a, 1)
};
q.toString = function() {
  return ib(this)
};
q.ma = function(a, b) {
  return tb.a(a, b)
};
q.na = function(a, b, c) {
  return tb.e(a, b, c)
};
q.w = function(a) {
  return 0 === this.g ? l : 32 > this.g ? L.c(this.K) : W.e ? W.e(a, 0, 0) : W.call(l, a, 0, 0)
};
q.B = n("g");
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new V(b, this.g, this.shift, this.root, this.K, this.m)
};
q.I = n("n");
q.v = function(a, b) {
  return Ee(a, b)[b & 31]
};
q.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.v(a, b) : c
};
var Le = new ze(l, Array(32)), Me = new V(l, 0, 5, Le, [], 0);
function X(a) {
  var b = a.length;
  if(32 > b) {
    return new V(l, b, 5, Le, a, l)
  }
  for(var c = a.slice(0, 32), d = 32, f = ab(new V(l, 32, 5, Le, c, l));;) {
    if(d < b) {
      c = d + 1, f = bb(f, a[d]), d = c
    }else {
      return cb(f)
    }
  }
}
function Ne(a) {
  return cb(Kc.e(bb, ab(Me), a))
}
function Oe(a) {
  var b = l;
  0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return Ne(b)
}
Oe.p = 0;
Oe.k = function(a) {
  a = F(a);
  return Ne(a)
};
Oe.h = function(a) {
  return Ne(a)
};
function yc(a, b, c, d, f, h) {
  this.T = a;
  this.S = b;
  this.o = c;
  this.A = d;
  this.n = f;
  this.m = h;
  this.j = 31719660;
  this.t = 1536
}
q = yc.prototype;
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.fa = function(a) {
  return this.A + 1 < this.S.length ? (a = W.l ? W.l(this.T, this.S, this.o, this.A + 1) : W.call(l, this.T, this.S, this.o, this.A + 1), a == l ? l : a) : a.Ya(a)
};
q.F = function(a, b) {
  return M(b, a)
};
q.toString = function() {
  return ib(this)
};
q.w = ba();
q.O = function() {
  return this.S[this.A]
};
q.P = function(a) {
  return this.A + 1 < this.S.length ? (a = W.l ? W.l(this.T, this.S, this.o, this.A + 1) : W.call(l, this.T, this.S, this.o, this.A + 1), a == l ? nb : a) : a.za(a)
};
q.Ya = function() {
  var a = this.S.length, a = this.o + a < sa(this.T) ? W.e ? W.e(this.T, this.o + a, 0) : W.call(l, this.T, this.o + a, 0) : l;
  return a == l ? l : a
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return W.Y ? W.Y(this.T, this.S, this.o, this.A, b) : W.call(l, this.T, this.S, this.o, this.A, b)
};
q.Da = function() {
  return rd.a(this.S, this.A)
};
q.za = function() {
  var a = this.S.length, a = this.o + a < sa(this.T) ? W.e ? W.e(this.T, this.o + a, 0) : W.call(l, this.T, this.o + a, 0) : l;
  return a == l ? nb : a
};
var W, Pe = l;
function Qe(a, b, c) {
  return new yc(a, Ee(a, b), b, c, l, l)
}
function Re(a, b, c, d) {
  return new yc(a, b, c, d, l, l)
}
function Se(a, b, c, d, f) {
  return new yc(a, b, c, d, f, l)
}
Pe = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Qe.call(this, a, b, c);
    case 4:
      return Re.call(this, a, b, c, d);
    case 5:
      return Se.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pe.e = Qe;
Pe.l = Re;
Pe.Y = Se;
W = Pe;
function Ie(a) {
  return new ze({}, a.b.slice())
}
function Je(a) {
  var b = Array(32);
  zc(a, 0, b, 0, a.length);
  return b
}
var Ue = function Te(b, c, d, f) {
  var d = b.root.q === d.q ? d : new ze(b.root.q, d.b.slice()), h = b.g - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.b[h], b = i != l ? Te(b, c - 5, i, f) : Be(b.root.q, c - 5, f)
  }
  d.b[h] = b;
  return d
};
function He(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.K = d;
  this.j = 275;
  this.t = 88
}
var Ve = l, Ve = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
q = He.prototype;
q.call = Ve;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.M = function(a, b) {
  return a.L(a, b, l)
};
q.D = function(a, b, c) {
  return a.L(a, b, c)
};
q.v = function(a, b) {
  if(this.root.q) {
    return Ee(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
q.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.v(a, b) : c
};
q.B = function() {
  if(this.root.q) {
    return this.g
  }
  e(Error("count after persistent!"))
};
q.oa = function(a, b, c) {
  var d;
  a: {
    if(a.root.q) {
      var f = 0 <= b;
      if(f ? b < a.g : f) {
        Ae(a) <= b ? a.K[b & 31] = c : (d = function i(d, f) {
          var s = a.root.q === f.q ? f : new ze(a.root.q, f.b.slice());
          if(0 === d) {
            s.b[b & 31] = c
          }else {
            var r = b >>> d & 31, t = i(d - 5, s.b[r]);
            s.b[r] = t
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
      e(Error([D("Index "), D(b), D(" out of bounds for TransientVector of length"), D(a.g)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
q.va = function(a, b) {
  if(this.root.q) {
    if(32 > this.g - Ae(a)) {
      this.K[this.g & 31] = b
    }else {
      var c = new ze(this.root.q, this.K), d = Array(32);
      d[0] = b;
      this.K = d;
      if(this.g >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Be(this.root.q, this.shift, c);
        this.root = new ze(this.root.q, d);
        this.shift = f
      }else {
        this.root = Ue(a, this.shift, this.root, c)
      }
    }
    this.g += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
q.Aa = function(a) {
  if(this.root.q) {
    this.root.q = l;
    var a = this.g - Ae(a), b = Array(a);
    zc(this.K, 0, b, 0, a);
    return new V(l, this.g, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
function We() {
  this.t = 0;
  this.j = 2097152
}
We.prototype.C = p(m);
var Xe = new We;
function Ye(a, b) {
  var c;
  c = b == l ? 0 : b ? ((c = b.j & 1024) ? c : b.xb) || (b.j ? 0 : w(Fa, b)) : w(Fa, b);
  c = c ? N(a) === N(b) ? Xd(Yd, Zd.a(function(a) {
    return ob.a(ac.e(b, H(a), Xe), H(J(a)))
  }, a)) : l : l;
  return v(c) ? g : m
}
function Ze(a, b) {
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
function $e(a, b) {
  var c = E.c(a), d = E.c(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function af(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.ka, a = pc(a), i = 0, j = ab(bf);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = db(j, k, h[k])
    }else {
      return d = oc, b = db(j, b, c), b = cb(b), d(b, a)
    }
  }
}
function cf(a, b) {
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
function df(a, b, c, d, f) {
  this.n = a;
  this.keys = b;
  this.ka = c;
  this.Ba = d;
  this.m = f;
  this.t = 4;
  this.j = 16123663
}
q = df.prototype;
q.ta = function(a) {
  a = we(hc.r ? hc.r() : hc.call(l), a);
  return ab(a)
};
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = fd(a)
};
q.M = function(a, b) {
  return a.D(a, b, l)
};
q.D = function(a, b, c) {
  return((a = ea(b)) ? Ze(b, this.keys) != l : a) ? this.ka[b] : c
};
q.ea = function(a, b, c) {
  if(ea(b)) {
    var d = this.Ba > ef;
    if(d ? d : this.keys.length >= ef) {
      return af(a, b, c)
    }
    if(Ze(b, this.keys) != l) {
      return a = cf(this.ka, this.keys), a[b] = c, new df(this.n, this.keys, a, this.Ba + 1, l)
    }
    a = cf(this.ka, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new df(this.n, d, a, this.Ba + 1, l)
  }
  return af(a, b, c)
};
var ff = l, ff = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
q = df.prototype;
q.call = ff;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return vc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Kc.e(ta, a, b)
};
q.toString = function() {
  return ib(this)
};
q.w = function() {
  var a = this;
  return 0 < a.keys.length ? Zd.a(function(b) {
    return Oe.h(L([b, a.ka[b]], 0))
  }, a.keys.sort($e)) : l
};
q.B = function() {
  return this.keys.length
};
q.C = function(a, b) {
  return Ye(a, b)
};
q.J = function(a, b) {
  return new df(b, this.keys, this.ka, this.Ba, this.m)
};
q.I = n("n");
var gf = new df(l, [], {}, 0, 0), ef = 8;
function hf(a, b) {
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
    if(b instanceof jb) {
      a: {
        for(var d = c.length, f = b.ja, h = 0;;) {
          if(d <= h) {
            c = -1;
            break a
          }
          var i = c[h], j = i instanceof jb;
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
            if(ob.a(b, c[f])) {
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
  this.m = d;
  this.t = 4;
  this.j = 16123663
}
q = ma.prototype;
q.ta = function() {
  return new jf({}, this.b.length, this.b.slice())
};
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = fd(a)
};
q.M = function(a, b) {
  return a.D(a, b, l)
};
q.D = function(a, b, c) {
  a = hf(a, b);
  return-1 === a ? c : this.b[a + 1]
};
q.ea = function(a, b, c) {
  var d = hf(a, b);
  if(-1 === d) {
    if(this.g < kf) {
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
    return Pa(Ea(we(bf, a), b, c), this.n)
  }
  if(c === this.b[d + 1]) {
    return a
  }
  b = this.b.slice();
  b[d + 1] = c;
  return new ma(this.n, this.g, b, l)
};
var lf = l, lf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
q = ma.prototype;
q.call = lf;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return vc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Kc.e(ta, a, b)
};
q.toString = function() {
  return ib(this)
};
q.w = function() {
  var a = this, b;
  if(0 < a.g) {
    var c = a.b.length;
    b = function f(b) {
      return new T(l, m, function() {
        return b < c ? M(X([a.b[b], a.b[b + 1]]), f(b + 2)) : l
      }, l)
    }(0)
  }else {
    b = l
  }
  return b
};
q.B = n("g");
q.C = function(a, b) {
  return Ye(a, b)
};
q.J = function(a, b) {
  return new ma(b, this.g, this.b, this.m)
};
q.I = n("n");
var kf = 8;
function jf(a, b, c) {
  this.pa = a;
  this.ba = b;
  this.b = c;
  this.t = 56;
  this.j = 258
}
q = jf.prototype;
q.oa = function(a, b, c) {
  if(v(this.pa)) {
    var d = hf(a, b);
    if(-1 === d) {
      if(this.ba + 2 <= 2 * kf) {
        return this.ba += 2, this.b.push(b), this.b.push(c), a
      }
      a = mf.a ? mf.a(this.ba, this.b) : mf.call(l, this.ba, this.b);
      return db(a, b, c)
    }
    c !== this.b[d + 1] && (this.b[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
q.va = function(a, b) {
  if(v(this.pa)) {
    var c;
    c = b ? ((c = b.j & 2048) ? c : b.lb) || (b.j ? 0 : w(Ga, b)) : w(Ga, b);
    if(c) {
      return a.oa(a, R.c ? R.c(b) : R.call(l, b), S.c ? S.c(b) : S.call(l, b))
    }
    c = F(b);
    for(var d = a;;) {
      var f = H(c);
      if(v(f)) {
        c = J(c), d = d.oa(d, R.c ? R.c(f) : R.call(l, f), S.c ? S.c(f) : S.call(l, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
q.Aa = function() {
  if(v(this.pa)) {
    return this.pa = m, new ma(l, Pc((this.ba - this.ba % 2) / 2), this.b, l)
  }
  e(Error("persistent! called twice"))
};
q.M = function(a, b) {
  return a.D(a, b, l)
};
q.D = function(a, b, c) {
  if(v(this.pa)) {
    return a = hf(a, b), -1 === a ? c : this.b[a + 1]
  }
  e(Error("lookup after persistent!"))
};
q.B = function() {
  if(v(this.pa)) {
    return Pc((this.ba - this.ba % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function mf(a, b) {
  for(var c = ab(gf), d = 0;;) {
    if(d < a) {
      c = db(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function nf() {
  this.Z = m
}
function of(a, b) {
  return ea(a) ? a === b : ob.a(a, b)
}
var pf, qf = l;
function rf(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function sf(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
qf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return rf.call(this, a, b, c);
    case 5:
      return sf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qf.e = rf;
qf.Y = sf;
pf = qf;
var tf, uf = l;
function vf(a, b, c, d) {
  a = a.qa(b);
  a.b[c] = d;
  return a
}
function wf(a, b, c, d, f, h) {
  a = a.qa(b);
  a.b[c] = d;
  a.b[f] = h;
  return a
}
uf = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 4:
      return vf.call(this, a, b, c, d);
    case 6:
      return wf.call(this, a, b, c, d, f, h)
  }
  e(Error("Invalid arity: " + arguments.length))
};
uf.l = vf;
uf.$ = wf;
tf = uf;
function xf(a, b, c) {
  this.q = a;
  this.z = b;
  this.b = c
}
q = xf.prototype;
q.V = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = Uc(this.z & i - 1);
  if(0 === (this.z & i)) {
    var k = Uc(this.z);
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
      j[c >>> b & 31] = yf.V(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.z >>> d & 1) && (j[d] = this.b[f] != l ? yf.V(a, b + 5, E.c(this.b[f]), this.b[f], this.b[f + 1], h) : this.b[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new zf(a, k + 1, j)
    }
    b = Array(2 * (k + 4));
    zc(this.b, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    zc(this.b, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    h.Z = g;
    a = this.qa(a);
    a.b = b;
    a.z |= i;
    return a
  }
  k = this.b[2 * j];
  i = this.b[2 * j + 1];
  if(k == l) {
    return k = i.V(a, b + 5, c, d, f, h), k === i ? this : tf.l(this, a, 2 * j + 1, k)
  }
  if(of(d, k)) {
    return f === i ? this : tf.l(this, a, 2 * j + 1, f)
  }
  h.Z = g;
  return tf.$(this, a, 2 * j, l, 2 * j + 1, Af.la ? Af.la(a, b + 5, k, i, c, d, f) : Af.call(l, a, b + 5, k, i, c, d, f))
};
q.xa = function() {
  return Bf.c ? Bf.c(this.b) : Bf.call(l, this.b)
};
q.qa = function(a) {
  if(a === this.q) {
    return this
  }
  var b = Uc(this.z), c = Array(0 > b ? 4 : 2 * (b + 1));
  zc(this.b, 0, c, 0, 2 * b);
  return new xf(a, this.z, c)
};
q.U = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = Uc(this.z & h - 1);
  if(0 === (this.z & h)) {
    var j = Uc(this.z);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = yf.U(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.z >>> c & 1) && (i[c] = this.b[d] != l ? yf.U(a + 5, E.c(this.b[d]), this.b[d], this.b[d + 1], f) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new zf(l, j + 1, i)
    }
    a = Array(2 * (j + 1));
    zc(this.b, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    zc(this.b, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.Z = g;
    return new xf(l, this.z | h, a)
  }
  j = this.b[2 * i];
  h = this.b[2 * i + 1];
  if(j == l) {
    return j = h.U(a + 5, b, c, d, f), j === h ? this : new xf(l, this.z, pf.e(this.b, 2 * i + 1, j))
  }
  if(of(c, j)) {
    return d === h ? this : new xf(l, this.z, pf.e(this.b, 2 * i + 1, d))
  }
  f.Z = g;
  return new xf(l, this.z, pf.Y(this.b, 2 * i, l, 2 * i + 1, Af.$ ? Af.$(a + 5, j, h, b, c, d) : Af.call(l, a + 5, j, h, b, c, d)))
};
q.ia = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.z & f)) {
    return d
  }
  var h = Uc(this.z & f - 1), f = this.b[2 * h], h = this.b[2 * h + 1];
  return f == l ? h.ia(a + 5, b, c, d) : of(c, f) ? h : d
};
var yf = new xf(l, 0, []);
function zf(a, b, c) {
  this.q = a;
  this.g = b;
  this.b = c
}
q = zf.prototype;
q.V = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.b[i];
  if(j == l) {
    return a = tf.l(this, a, i, yf.V(a, b + 5, c, d, f, h)), a.g += 1, a
  }
  b = j.V(a, b + 5, c, d, f, h);
  return b === j ? this : tf.l(this, a, i, b)
};
q.xa = function() {
  return Cf.c ? Cf.c(this.b) : Cf.call(l, this.b)
};
q.qa = function(a) {
  return a === this.q ? this : new zf(a, this.g, this.b.slice())
};
q.U = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.b[h];
  if(i == l) {
    return new zf(l, this.g + 1, pf.e(this.b, h, yf.U(a + 5, b, c, d, f)))
  }
  a = i.U(a + 5, b, c, d, f);
  return a === i ? this : new zf(l, this.g, pf.e(this.b, h, a))
};
q.ia = function(a, b, c, d) {
  var f = this.b[b >>> a & 31];
  return f != l ? f.ia(a + 5, b, c, d) : d
};
function Df(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(of(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Ef(a, b, c, d) {
  this.q = a;
  this.ga = b;
  this.g = c;
  this.b = d
}
q = Ef.prototype;
q.V = function(a, b, c, d, f, h) {
  if(c === this.ga) {
    b = Df(this.b, this.g, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.g) {
        return a = tf.$(this, a, 2 * this.g, d, 2 * this.g + 1, f), h.Z = g, a.g += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      zc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.Z = g;
      h = this.g + 1;
      a === this.q ? (this.b = b, this.g = h, a = this) : a = new Ef(this.q, this.ga, h, b);
      return a
    }
    return this.b[b + 1] === f ? this : tf.l(this, a, b + 1, f)
  }
  return(new xf(a, 1 << (this.ga >>> b & 31), [l, this, l, l])).V(a, b, c, d, f, h)
};
q.xa = function() {
  return Bf.c ? Bf.c(this.b) : Bf.call(l, this.b)
};
q.qa = function(a) {
  if(a === this.q) {
    return this
  }
  var b = Array(2 * (this.g + 1));
  zc(this.b, 0, b, 0, 2 * this.g);
  return new Ef(a, this.ga, this.g, b)
};
q.U = function(a, b, c, d, f) {
  return b === this.ga ? (a = Df(this.b, this.g, c), -1 === a ? (a = this.b.length, b = Array(a + 2), zc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.Z = g, new Ef(l, this.ga, this.g + 1, b)) : ob.a(this.b[a], d) ? this : new Ef(l, this.ga, this.g, pf.e(this.b, a + 1, d))) : (new xf(l, 1 << (this.ga >>> a & 31), [l, this])).U(a, b, c, d, f)
};
q.ia = function(a, b, c, d) {
  a = Df(this.b, this.g, c);
  return 0 > a ? d : of(c, this.b[a]) ? this.b[a + 1] : d
};
var Af, Ff = l;
function Gf(a, b, c, d, f, h) {
  var i = E.c(b);
  if(i === d) {
    return new Ef(l, i, 2, [b, c, f, h])
  }
  var j = new nf;
  return yf.U(a, i, b, c, j).U(a, d, f, h, j)
}
function Hf(a, b, c, d, f, h, i) {
  var j = E.c(c);
  if(j === f) {
    return new Ef(l, j, 2, [c, d, h, i])
  }
  var k = new nf;
  return yf.V(a, b, j, c, d, k).V(a, b, f, h, i, k)
}
Ff = function(a, b, c, d, f, h, i) {
  switch(arguments.length) {
    case 6:
      return Gf.call(this, a, b, c, d, f, h);
    case 7:
      return Hf.call(this, a, b, c, d, f, h, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ff.$ = Gf;
Ff.la = Hf;
Af = Ff;
function If(a, b, c, d, f) {
  this.n = a;
  this.W = b;
  this.o = c;
  this.X = d;
  this.m = f;
  this.t = 0;
  this.j = 31850572
}
q = If.prototype;
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.F = function(a, b) {
  return M(b, a)
};
q.toString = function() {
  return ib(this)
};
q.w = ba();
q.O = function() {
  return this.X == l ? X([this.W[this.o], this.W[this.o + 1]]) : H(this.X)
};
q.P = function() {
  return this.X == l ? Bf.e ? Bf.e(this.W, this.o + 2, l) : Bf.call(l, this.W, this.o + 2, l) : Bf.e ? Bf.e(this.W, this.o, J(this.X)) : Bf.call(l, this.W, this.o, J(this.X))
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new If(b, this.W, this.o, this.X, this.m)
};
q.I = n("n");
var Bf, Jf = l;
function Kf(a) {
  return Jf.e(a, 0, l)
}
function Lf(a, b, c) {
  if(c == l) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != l) {
          return new If(l, a, b, l, l)
        }
        var d = a[b + 1];
        if(v(d) && (d = d.xa(), v(d))) {
          return new If(l, a, b + 2, d, l)
        }
        b += 2
      }else {
        return l
      }
    }
  }else {
    return new If(l, a, b, c, l)
  }
}
Jf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Kf.call(this, a);
    case 3:
      return Lf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jf.c = Kf;
Jf.e = Lf;
Bf = Jf;
function Mf(a, b, c, d, f) {
  this.n = a;
  this.W = b;
  this.o = c;
  this.X = d;
  this.m = f;
  this.t = 0;
  this.j = 31850572
}
q = Mf.prototype;
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.F = function(a, b) {
  return M(b, a)
};
q.toString = function() {
  return ib(this)
};
q.w = ba();
q.O = function() {
  return H(this.X)
};
q.P = function() {
  return Cf.l ? Cf.l(l, this.W, this.o, J(this.X)) : Cf.call(l, l, this.W, this.o, J(this.X))
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new Mf(b, this.W, this.o, this.X, this.m)
};
q.I = n("n");
var Cf, Nf = l;
function Of(a) {
  return Nf.l(l, a, 0, l)
}
function Pf(a, b, c, d) {
  if(d == l) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(v(f) && (f = f.xa(), v(f))) {
          return new Mf(a, b, c + 1, f, l)
        }
        c += 1
      }else {
        return l
      }
    }
  }else {
    return new Mf(a, b, c, d, l)
  }
}
Nf = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Of.call(this, a);
    case 4:
      return Pf.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nf.c = Of;
Nf.l = Pf;
Cf = Nf;
function Qf(a, b, c, d, f, h) {
  this.n = a;
  this.g = b;
  this.root = c;
  this.Q = d;
  this.R = f;
  this.m = h;
  this.t = 4;
  this.j = 16123663
}
q = Qf.prototype;
q.ta = function() {
  return new Rf({}, this.root, this.g, this.Q, this.R)
};
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = fd(a)
};
q.M = function(a, b) {
  return a.D(a, b, l)
};
q.D = function(a, b, c) {
  return b == l ? this.Q ? this.R : c : this.root == l ? c : this.root.ia(0, E.c(b), b, c)
};
q.ea = function(a, b, c) {
  if(b == l) {
    var d = this.Q;
    return(d ? c === this.R : d) ? a : new Qf(this.n, this.Q ? this.g : this.g + 1, this.root, g, c, l)
  }
  d = new nf;
  c = (this.root == l ? yf : this.root).U(0, E.c(b), b, c, d);
  return c === this.root ? a : new Qf(this.n, d.Z ? this.g + 1 : this.g, c, this.Q, this.R, l)
};
var Sf = l, Sf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.M(this, b);
    case 3:
      return this.D(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
q = Qf.prototype;
q.call = Sf;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return vc(b) ? a.ea(a, y.a(b, 0), y.a(b, 1)) : Kc.e(ta, a, b)
};
q.toString = function() {
  return ib(this)
};
q.w = function() {
  if(0 < this.g) {
    var a = this.root != l ? this.root.xa() : l;
    return this.Q ? M(X([l, this.R]), a) : a
  }
  return l
};
q.B = n("g");
q.C = function(a, b) {
  return Ye(a, b)
};
q.J = function(a, b) {
  return new Qf(b, this.g, this.root, this.Q, this.R, this.m)
};
q.I = n("n");
var bf = new Qf(l, 0, l, m, l, 0);
function Rf(a, b, c, d, f) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.R = f;
  this.t = 56;
  this.j = 258
}
q = Rf.prototype;
q.oa = function(a, b, c) {
  return Tf(a, b, c)
};
q.va = function(a, b) {
  var c;
  a: {
    if(a.q) {
      c = b ? ((c = b.j & 2048) ? c : b.lb) || (b.j ? 0 : w(Ga, b)) : w(Ga, b);
      if(c) {
        c = Tf(a, R.c ? R.c(b) : R.call(l, b), S.c ? S.c(b) : S.call(l, b));
        break a
      }
      c = F(b);
      for(var d = a;;) {
        var f = H(c);
        if(v(f)) {
          c = J(c), d = Tf(d, R.c ? R.c(f) : R.call(l, f), S.c ? S.c(f) : S.call(l, f))
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
q.Aa = function(a) {
  var b;
  a.q ? (a.q = l, b = new Qf(l, a.count, a.root, a.Q, a.R, l)) : e(Error("persistent! called twice"));
  return b
};
q.M = function(a, b) {
  return b == l ? this.Q ? this.R : l : this.root == l ? l : this.root.ia(0, E.c(b), b)
};
q.D = function(a, b, c) {
  return b == l ? this.Q ? this.R : c : this.root == l ? c : this.root.ia(0, E.c(b), b, c)
};
q.B = function() {
  if(this.q) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Tf(a, b, c) {
  if(a.q) {
    if(b == l) {
      a.R !== c && (a.R = c), a.Q || (a.count += 1, a.Q = g)
    }else {
      var d = new nf, b = (a.root == l ? yf : a.root).V(a.q, 0, E.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Z && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var hc;
function Uf(a) {
  for(var b = F(a), c = ab(bf);;) {
    if(b) {
      var a = J(J(b)), d = H(b), b = H(J(b)), c = db(c, d, b), b = a
    }else {
      return cb(c)
    }
  }
}
function Vf(a) {
  var b = l;
  0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return Uf.call(this, b)
}
Vf.p = 0;
Vf.k = function(a) {
  a = F(a);
  return Uf(a)
};
Vf.h = Uf;
hc = Vf;
function R(a) {
  return Ha(a)
}
function S(a) {
  return Ia(a)
}
function Wf(a) {
  if(a && v(v(l) ? l : a.ab)) {
    return a.name
  }
  if(oa(a)) {
    return a
  }
  if(Bc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? dd.a(a, 2) : dd.a(a, b + 1)
  }
  e(Error([D("Doesn't support name: "), D(a)].join("")))
}
function Xf(a) {
  if(a && v(v(l) ? l : a.ab)) {
    return a.ra
  }
  if(Bc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? dd.e(a, 2, b) : l
  }
  e(Error([D("Doesn't support namespace: "), D(a)].join("")))
}
function Yf(a, b, c, d, f) {
  this.n = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = f;
  this.t = 0;
  this.j = 32375006
}
q = Yf.prototype;
q.G = function(a) {
  var b = this.m;
  return b != l ? b : this.m = a = Fb(a)
};
q.fa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Yf(this.n, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Yf(this.n, this.start + this.step, this.end, this.step, l) : l
};
q.F = function(a, b) {
  return M(b, a)
};
q.toString = function() {
  return ib(this)
};
q.ma = function(a, b) {
  return tb.a(a, b)
};
q.na = function(a, b, c) {
  return tb.e(a, b, c)
};
q.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
q.B = function(a) {
  return na(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.O = n("start");
q.P = function(a) {
  return a.w(a) != l ? new Yf(this.n, this.start + this.step, this.end, this.step, l) : nb
};
q.C = function(a, b) {
  return Hb(a, b)
};
q.J = function(a, b) {
  return new Yf(b, this.start, this.end, this.step, this.m)
};
q.I = n("n");
q.v = function(a, b) {
  if(b < a.B(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
q.L = function(a, b, c) {
  c = b < a.B(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
var Zf, $f = l;
function ag() {
  return $f.e(0, Number.MAX_VALUE, 1)
}
function bg(a) {
  return $f.e(0, a, 1)
}
function cg(a, b) {
  return $f.e(a, b, 1)
}
function dg(a, b, c) {
  return new Yf(l, a, b, c, l)
}
$f = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return ag.call(this);
    case 1:
      return bg.call(this, a);
    case 2:
      return cg.call(this, a, b);
    case 3:
      return dg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$f.r = ag;
$f.c = bg;
$f.a = cg;
$f.e = dg;
Zf = $f;
function Y(a, b, c, d, f, h, i) {
  C(a, c);
  F(i) && (b.e ? b.e(H(i), a, h) : b.call(l, H(i), a, h));
  for(var c = F(J(i)), i = l, j = 0, k = 0;;) {
    if(k < j) {
      var s = i.v(i, k);
      C(a, d);
      b.e ? b.e(s, a, h) : b.call(l, s, a, h);
      k += 1
    }else {
      if(c = F(c)) {
        i = c, wc(i) ? (c = fb(i), k = gb(i), i = c, j = N(c), c = k) : (c = H(i), C(a, d), b.e ? b.e(c, a, h) : b.call(l, c, a, h), c = J(i), i = l, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return C(a, f)
}
function eg(a, b) {
  for(var c = F(b), d = l, f = 0, h = 0;;) {
    if(h < f) {
      var i = d.v(d, h);
      C(a, i);
      h += 1
    }else {
      if(c = F(c)) {
        d = c, wc(d) ? (c = fb(d), f = gb(d), d = c, i = N(c), c = f, f = i) : (i = H(d), C(a, i), c = J(d), d = l, f = 0), h = 0
      }else {
        return l
      }
    }
  }
}
function fg(a, b) {
  var c = l;
  1 < arguments.length && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return eg.call(this, a, c)
}
fg.p = 1;
fg.k = function(a) {
  var b = H(a), a = I(a);
  return eg(b, a)
};
fg.h = eg;
var gg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, $ = function hg(b, c, d) {
  if(b == l) {
    return C(c, "nil")
  }
  if(aa === b) {
    return C(c, "#<undefined>")
  }
  var f;
  f = ac.a(d, "\ufdd0:meta");
  v(f) && (f = b ? ((f = b.j & 131072) ? f : b.mb) ? g : b.j ? m : w(La, b) : w(La, b), f = v(f) ? pc(b) : f);
  v(f) && (C(c, "^"), hg(pc(b), c, d), C(c, " "));
  if(b == l) {
    return C(c, "nil")
  }
  if(b.eb) {
    return b.pb(c)
  }
  if(f = b) {
    f = (f = b.j & 2147483648) ? f : b.N
  }
  return f ? b.H(b, c, d) : ((f = (b == l ? l : b.constructor) === Boolean) ? f : "number" === typeof b) ? C(c, "" + D(b)) : b instanceof Array ? Y(c, hg, "#<Array [", ", ", "]>", d, b) : ea(b) ? Bc(b) ? (C(c, ":"), d = Xf(b), v(d) && fg.h(c, L(["" + D(d), "/"], 0)), C(c, Wf(b))) : b instanceof jb ? (d = Xf(b), v(d) && fg.h(c, L(["" + D(d), "/"], 0)), C(c, Wf(b))) : v((new ld("\ufdd0:readably")).call(l, d)) ? C(c, [D('"'), D(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return gg[b]
  })), D('"')].join("")) : C(c, b) : kc(b) ? fg.h(c, L(["#<", "" + D(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + D(b);;) {
      if(N(d) < c) {
        d = [D("0"), D(d)].join("")
      }else {
        return d
      }
    }
  }, fg.h(c, L(['#inst "', "" + D(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(b instanceof RegExp) ? fg.h(c, L(['#"', b.source, '"'], 0)) : fg.h(c, L(["#<", "" + D(b), ">"], 0))
};
function ig(a) {
  var b = la(), c = a == l;
  if(c ? c : na(F(a))) {
    b = ""
  }else {
    var c = D, d = new ja, f = new hb(d);
    a: {
      $(H(a), f, b);
      for(var a = F(J(a)), h = l, i = 0, j = 0;;) {
        if(j < i) {
          var k = h.v(h, j);
          C(f, " ");
          $(k, f, b);
          j += 1
        }else {
          if(a = F(a)) {
            h = a, wc(h) ? (a = fb(h), i = gb(h), h = a, k = N(a), a = i, i = k) : (k = H(h), C(f, " "), $(k, f, b), a = J(h), h = l, i = 0), j = 0
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
function jg(a) {
  var b = l;
  0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return ig(b)
}
jg.p = 0;
jg.k = function(a) {
  a = F(a);
  return ig(a)
};
jg.h = function(a) {
  return ig(a)
};
mb.prototype.N = g;
mb.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
xc.prototype.N = g;
xc.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
ma.prototype.N = g;
ma.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
T.prototype.N = g;
T.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
If.prototype.N = g;
If.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
yc.prototype.N = g;
yc.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
Qf.prototype.N = g;
Qf.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
V.prototype.N = g;
V.prototype.H = function(a, b, c) {
  return Y(b, $, "[", " ", "]", c, a)
};
gd.prototype.N = g;
gd.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
hd.prototype.N = g;
hd.prototype.H = function(a, b) {
  return C(b, "()")
};
kd.prototype.N = g;
kd.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
Yf.prototype.N = g;
Yf.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
Mf.prototype.N = g;
Mf.prototype.H = function(a, b, c) {
  return Y(b, $, "(", " ", ")", c, a)
};
df.prototype.N = g;
df.prototype.H = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
V.prototype.hb = g;
V.prototype.ib = function(a, b) {
  return Dc.a(a, b)
};
function kg(a, b, c, d) {
  this.state = a;
  this.n = b;
  this.tb = c;
  this.ub = d;
  this.j = 2153938944;
  this.t = 2
}
q = kg.prototype;
q.G = function(a) {
  return a[fa] || (a[fa] = ++ga)
};
q.bb = function(a, b, c) {
  for(var d = F(this.ub), f = l, h = 0, i = 0;;) {
    if(i < h) {
      var j = f.v(f, i), k = P.e(j, 0, l), j = P.e(j, 1, l);
      j.l ? j.l(k, a, b, c) : j.call(l, k, a, b, c);
      i += 1
    }else {
      if(d = F(d)) {
        wc(d) ? (f = fb(d), d = gb(d), k = f, h = N(f), f = k) : (f = H(d), k = P.e(f, 0, l), j = P.e(f, 1, l), j.l ? j.l(k, a, b, c) : j.call(l, k, a, b, c), d = J(d), f = l, h = 0), i = 0
      }else {
        return l
      }
    }
  }
};
q.H = function(a, b, c) {
  C(b, "#<Atom: ");
  $(this.state, b, c);
  return C(b, ">")
};
q.I = n("n");
q.jb = n("state");
q.C = function(a, b) {
  return a === b
};
var lg, mg = l;
function ng(a) {
  return new kg(a, l, l, l)
}
function og(a, b) {
  var c;
  c = b == l ? m : b ? ((c = b.j & 64) ? c : b.Sa) ? g : b.j ? m : w(ya, b) : w(ya, b);
  var d = c ? nc.a(hc, b) : b;
  c = ac.a(d, "\ufdd0:validator");
  d = ac.a(d, "\ufdd0:meta");
  return new kg(a, d, c, l)
}
function pg(a, b) {
  var c = l;
  1 < arguments.length && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return og.call(this, a, c)
}
pg.p = 1;
pg.k = function(a) {
  var b = H(a), a = I(a);
  return og(b, a)
};
pg.h = og;
mg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ng.call(this, a);
    default:
      return pg.h(a, L(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
mg.p = 1;
mg.k = pg.k;
mg.c = ng;
mg.h = pg.h;
lg = mg;
function qg(a, b) {
  var c = a.tb;
  v(c) && !v(c.c ? c.c(b) : c.call(l, b)) && e(Error([D("Assert failed: "), D("Validator rejected reference state"), D("\n"), D(jg.h(L([oc(Gb(new jb(l, "validate", "validate", 1233162959, l), new jb(l, "new-value", "new-value", 972165309, l)), hc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  $a(a, c, b);
  return b
}
var rg, sg = l;
function tg(a, b) {
  return qg(a, b.c ? b.c(a.state) : b.call(l, a.state))
}
function ug(a, b, c) {
  return qg(a, b.a ? b.a(a.state, c) : b.call(l, a.state, c))
}
function vg(a, b, c, d) {
  return qg(a, b.e ? b.e(a.state, c, d) : b.call(l, a.state, c, d))
}
function wg(a, b, c, d, f) {
  return qg(a, b.l ? b.l(a.state, c, d, f) : b.call(l, a.state, c, d, f))
}
function xg(a, b, c, d, f, h) {
  return qg(a, nc.h(b, a.state, c, d, f, L([h], 0)))
}
function yg(a, b, c, d, f, h) {
  var i = l;
  5 < arguments.length && (i = L(Array.prototype.slice.call(arguments, 5), 0));
  return xg.call(this, a, b, c, d, f, i)
}
yg.p = 5;
yg.k = function(a) {
  var b = H(a), a = J(a), c = H(a), a = J(a), d = H(a), a = J(a), f = H(a), a = J(a), h = H(a), a = I(a);
  return xg(b, c, d, f, h, a)
};
yg.h = xg;
sg = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return tg.call(this, a, b);
    case 3:
      return ug.call(this, a, b, c);
    case 4:
      return vg.call(this, a, b, c, d);
    case 5:
      return wg.call(this, a, b, c, d, f);
    default:
      return yg.h(a, b, c, d, f, L(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
sg.p = 5;
sg.k = yg.k;
sg.a = tg;
sg.e = ug;
sg.l = vg;
sg.Y = wg;
sg.h = yg.h;
rg = sg;
var zg = l;
function Ag() {
  return zg.c(1)
}
function Bg(a) {
  return(Math.random.r ? Math.random.r() : Math.random.call(l)) * a
}
zg = function(a) {
  switch(arguments.length) {
    case 0:
      return Ag.call(this);
    case 1:
      return Bg.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
zg.r = Ag;
zg.c = Bg;
Qc = zg;
var Cg, Dg, Eg, Fg;
function Gg() {
  return ca.navigator ? ca.navigator.userAgent : l
}
Fg = Eg = Dg = Cg = m;
var Hg;
if(Hg = Gg()) {
  var Ig = ca.navigator;
  Cg = 0 == Hg.indexOf("Opera");
  Dg = !Cg && -1 != Hg.indexOf("MSIE");
  Eg = !Cg && -1 != Hg.indexOf("WebKit");
  Fg = !Cg && !Eg && "Gecko" == Ig.product
}
var Jg = Cg, Kg = Dg, Lg = Fg, Mg = Eg, Ng;
a: {
  var Og = "", Pg;
  if(Jg && ca.opera) {
    var Qg = ca.opera.version, Og = "function" == typeof Qg ? Qg() : Qg
  }else {
    if(Lg ? Pg = /rv\:([^\);]+)(\)|;)/ : Kg ? Pg = /MSIE\s+([^\);]+)(\)|;)/ : Mg && (Pg = /WebKit\/(\S+)/), Pg) {
      var Rg = Pg.exec(Gg()), Og = Rg ? Rg[1] : ""
    }
  }
  if(Kg) {
    var Sg, Tg = ca.document;
    Sg = Tg ? Tg.documentMode : aa;
    if(Sg > parseFloat(Og)) {
      Ng = String(Sg);
      break a
    }
  }
  Ng = Og
}
var Ug = {};
function Vg(a) {
  var b;
  if(!(b = Ug[a])) {
    b = 0;
    for(var c = String(Ng).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), h = 0;0 == b && h < f;h++) {
      var i = c[h] || "", j = d[h] || "", k = RegExp("(\\d*)(\\D*)", "g"), s = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = k.exec(i) || ["", "", ""], t = s.exec(j) || ["", "", ""];
        if(0 == r[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == t[2].length) ? -1 : (0 == r[2].length) > (0 == t[2].length) ? 1 : 0) || (r[2] < t[2] ? -1 : r[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ug[a] = 0 <= b
  }
  return b
}
var Wg = {};
function Xg() {
  return Wg[9] || (Wg[9] = Kg && !!document.documentMode && 9 <= document.documentMode)
}
;!Kg || Xg();
!Kg || Xg();
Kg && Vg("8");
!Mg || Vg("528");
Lg && Vg("1.9b") || Kg && Vg("8") || Jg && Vg("9.5") || Mg && Vg("528");
Lg && !Vg("8") || Kg && Vg("9");
!Kg || Xg();
!Lg && !Kg || Kg && Xg() || Lg && Vg("1.9.1");
Kg && Vg("9");
var Yg = document.createElement("div");
Yg.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
ob.a(Yg.firstChild.nodeType, 3);
ob.a(Yg.getElementsByTagName("tbody").length, 0);
ob.a(Yg.getElementsByTagName("link").length, 0);
var Zg, $g = l;
function ah(a) {
  return nc.a(D, a)
}
function bh(a, b) {
  return nc.a(D, te(a, b))
}
$g = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ah.call(this, a);
    case 2:
      return bh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$g.c = ah;
$g.a = bh;
Zg = $g;
var ch = X([1, "<select multiple='multiple'>", "</select>"]), dh = X([1, "<table>", "</table>"]), eh = X([3, "<table><tbody><tr>", "</tr></tbody></table>"]);
a: {
  for(var fh = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), gh = [X([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), X([0, "", ""]), dh, dh, ch, X([1, "<fieldset>", "</fieldset>"]), X([1, "<map>", "</map>"]), eh, dh, eh, ch, dh, X([2, "<table><tbody>", "</tbody></table>"]), dh], hh = fh.length, ih = 0, jh = ab(bf);;) {
    if(ih < hh) {
      var kh = ih + 1, lh = db(jh, fh[ih], gh[ih]), ih = kh, jh = lh
    }else {
      cb(jh);
      break a
    }
  }
}
var mh, nh = l;
function oh(a) {
  return nh.a(a, 0)
}
function ph(a, b) {
  return b < a.length ? new T(l, m, function() {
    return M(a.item(b), nh.a(a, b + 1))
  }, l) : l
}
nh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return oh.call(this, a);
    case 2:
      return ph.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
nh.c = oh;
nh.a = ph;
mh = nh;
var qh, rh = l;
function sh(a) {
  return rh.a(a, 0)
}
function th(a, b) {
  return b < a.length ? new T(l, m, function() {
    return M(a[b], rh.a(a, b + 1))
  }, l) : l
}
rh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return sh.call(this, a);
    case 2:
      return th.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rh.c = sh;
rh.a = th;
qh = rh;
function uh(a) {
  return v(a.item) ? mh.c(a) : qh.c(a)
}
v("undefined" != typeof NodeList) && (q = NodeList.prototype, q.Ta = g, q.w = function(a) {
  return uh(a)
}, q.ua = g, q.v = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : P.a(a, b)
}, q.Ea = g, q.B = function(a) {
  return a.length
});
v("undefined" != typeof StaticNodeList) && (q = StaticNodeList.prototype, q.Ta = g, q.w = function(a) {
  return uh(a)
}, q.ua = g, q.v = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : P.a(a, b)
}, q.Ea = g, q.B = function(a) {
  return a.length
});
v("undefined" != typeof HTMLCollection) && (q = HTMLCollection.prototype, q.Ta = g, q.w = function(a) {
  return uh(a)
}, q.ua = g, q.v = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : P.a(a, b)
}, q.Ea = g, q.B = function(a) {
  return a.length
});
da("ca_vote.display.now", function() {
  return(new Date).getTime()
});
function vh(a) {
  return console.log(Zg.a(" ", a))
}
function wh(a) {
  var b = l;
  0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return vh.call(this, b)
}
wh.p = 0;
wh.k = function(a) {
  a = F(a);
  return vh(a)
};
wh.h = vh;
var xh = lg.c(0);
function yh(a) {
  if(0 > a) {
    a += 101
  }else {
    var b = Pc((a - a % 101) / 101), a = a - 101 * b
  }
  return a
}
function zh(a, b) {
  var c = ac.a(b, a), c = na(c) ? X([0, -1, -3]) : X([0, 1, 3]), c = Zd.a(function(c) {
    return P.a(b, yh(a + c))
  }, c);
  return 2 <= N(ve(Ac, c))
}
function Ah(a, b, c, d) {
  d.fillStyle = c;
  d.strokeStyle = c;
  d.fillRect(a * Ka(xh) + 0, b * Ka(xh) + 0, Ka(xh), Ka(xh));
  d.strokeRect(a * Ka(xh) + 0, b * Ka(xh) + 0, Ka(xh), Ka(xh))
}
da("ca_vote.display.draw", function() {
  var a, b = Wf("voting");
  a = ea(b) ? document.getElementById(b) : b;
  var b = a.getContext("2d"), c = a.width;
  a = lg.c(Ne(fe(101, ke.c(function() {
    return Ne(fe(101, ge.c(l)))
  }))));
  qg(xh, (c - 0) / 101);
  for(var c = F(Zf.c(101)), d = l, f = 0, h = 0;;) {
    if(h < f) {
      var i = d.v(d, h);
      0.5 < Qc.r() ? (Ah(i, 0, "#666", b), rg.l(a, ye, X([0, i]), g)) : (Ah(i, 0, "#eee", b), rg.l(a, ye, X([0, i]), m));
      h += 1
    }else {
      if(c = F(c)) {
        d = c, wc(d) ? (c = fb(d), h = gb(d), d = c, f = N(c), c = h) : (c = H(d), 0.5 < Qc.r() ? (Ah(c, 0, "#666", b), rg.l(a, ye, X([0, c]), g)) : (Ah(c, 0, "#eee", b), rg.l(a, ye, X([0, c]), m)), c = J(d), d = l, f = 0), h = 0
      }else {
        break
      }
    }
  }
  d = F(Zf.a(1, 101));
  f = l;
  for(i = h = 0;;) {
    if(i < h) {
      c = f.v(f, i);
      wh.h(L([c], 0));
      for(var j = F(Zf.c(101)), k = l, s = 0, r = 0;;) {
        if(r < s) {
          var t = k.v(k, r);
          v(zh(t, P.a(Ka(a), c - 1))) ? (rg.l(a, ye, X([c, t]), g), Ah(t, c, "#666", b)) : (rg.l(a, ye, X([c, t]), m), Ah(t, c, "#eee", b));
          r += 1
        }else {
          if(j = F(j)) {
            k = j, wc(k) ? (j = fb(k), r = gb(k), k = j, s = N(j), j = r) : (j = H(k), v(zh(j, P.a(Ka(a), c - 1))) ? (rg.l(a, ye, X([c, j]), g), Ah(j, c, "#666", b)) : (rg.l(a, ye, X([c, j]), m), Ah(j, c, "#eee", b)), j = J(k), k = l, s = 0), r = 0
          }else {
            break
          }
        }
      }
      i += 1
    }else {
      if(c = F(d)) {
        d = c;
        if(wc(d)) {
          f = fb(d), d = gb(d), c = f, h = N(f), f = c
        }else {
          c = H(d);
          wh.h(L([c], 0));
          f = F(Zf.c(101));
          h = l;
          for(j = i = 0;;) {
            if(j < i) {
              k = h.v(h, j), v(zh(k, P.a(Ka(a), c - 1))) ? (rg.l(a, ye, X([c, k]), g), Ah(k, c, "#666", b)) : (rg.l(a, ye, X([c, k]), m), Ah(k, c, "#eee", b)), j += 1
            }else {
              if(f = F(f)) {
                h = f, wc(h) ? (f = fb(h), j = gb(h), h = f, i = N(f), f = j) : (f = H(h), v(zh(f, P.a(Ka(a), c - 1))) ? (rg.l(a, ye, X([c, f]), g), Ah(f, c, "#666", b)) : (rg.l(a, ye, X([c, f]), m), Ah(f, c, "#eee", b)), f = J(h), h = l, i = 0), j = 0
              }else {
                break
              }
            }
          }
          d = J(d);
          f = l;
          h = 0
        }
        i = 0
      }else {
        return l
      }
    }
  }
});
