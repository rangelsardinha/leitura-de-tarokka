var Ei = { exports: {} }, Or = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;
function Dh() {
  if (Mm) return Or;
  Mm = 1;
  var u = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function m(i, S, x) {
    var j = null;
    if (x !== void 0 && (j = "" + x), S.key !== void 0 && (j = "" + S.key), "key" in S) {
      x = {};
      for (var D in S)
        D !== "key" && (x[D] = S[D]);
    } else x = S;
    return S = x.ref, {
      $$typeof: u,
      type: i,
      key: j,
      ref: S !== void 0 ? S : null,
      props: x
    };
  }
  return Or.Fragment = d, Or.jsx = m, Or.jsxs = m, Or;
}
var Cm;
function wh() {
  return Cm || (Cm = 1, Ei.exports = Dh()), Ei.exports;
}
var E = wh(), qi = { exports: {} }, Mr = {}, Ai = { exports: {} }, zi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm;
function Rh() {
  return jm || (jm = 1, (function(u) {
    function d(z, R) {
      var Q = z.length;
      z.push(R);
      e: for (; 0 < Q; ) {
        var he = Q - 1 >>> 1, f = z[he];
        if (0 < S(f, R))
          z[he] = R, z[Q] = f, Q = he;
        else break e;
      }
    }
    function m(z) {
      return z.length === 0 ? null : z[0];
    }
    function i(z) {
      if (z.length === 0) return null;
      var R = z[0], Q = z.pop();
      if (Q !== R) {
        z[0] = Q;
        e: for (var he = 0, f = z.length, k = f >>> 1; he < k; ) {
          var N = 2 * (he + 1) - 1, w = z[N], B = N + 1, ne = z[B];
          if (0 > S(w, Q))
            B < f && 0 > S(ne, w) ? (z[he] = ne, z[B] = Q, he = B) : (z[he] = w, z[N] = Q, he = N);
          else if (B < f && 0 > S(ne, Q))
            z[he] = ne, z[B] = Q, he = B;
          else break e;
        }
      }
      return R;
    }
    function S(z, R) {
      var Q = z.sortIndex - R.sortIndex;
      return Q !== 0 ? Q : z.id - R.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      u.unstable_now = function() {
        return x.now();
      };
    } else {
      var j = Date, D = j.now();
      u.unstable_now = function() {
        return j.now() - D;
      };
    }
    var q = [], b = [], C = 1, L = null, K = 3, oe = !1, J = !1, re = !1, $ = !1, ge = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function W(z) {
      for (var R = m(b); R !== null; ) {
        if (R.callback === null) i(b);
        else if (R.startTime <= z)
          i(b), R.sortIndex = R.expirationTime, d(q, R);
        else break;
        R = m(b);
      }
    }
    function G(z) {
      if (re = !1, W(z), !J)
        if (m(q) !== null)
          J = !0, xe || (xe = !0, we());
        else {
          var R = m(b);
          R !== null && Ye(G, R.startTime - z);
        }
    }
    var xe = !1, Ae = -1, je = 5, ua = -1;
    function Ja() {
      return $ ? !0 : !(u.unstable_now() - ua < je);
    }
    function ya() {
      if ($ = !1, xe) {
        var z = u.unstable_now();
        ua = z;
        var R = !0;
        try {
          e: {
            J = !1, re && (re = !1, pe(Ae), Ae = -1), oe = !0;
            var Q = K;
            try {
              a: {
                for (W(z), L = m(q); L !== null && !(L.expirationTime > z && Ja()); ) {
                  var he = L.callback;
                  if (typeof he == "function") {
                    L.callback = null, K = L.priorityLevel;
                    var f = he(
                      L.expirationTime <= z
                    );
                    if (z = u.unstable_now(), typeof f == "function") {
                      L.callback = f, W(z), R = !0;
                      break a;
                    }
                    L === m(q) && i(q), W(z);
                  } else i(q);
                  L = m(q);
                }
                if (L !== null) R = !0;
                else {
                  var k = m(b);
                  k !== null && Ye(
                    G,
                    k.startTime - z
                  ), R = !1;
                }
              }
              break e;
            } finally {
              L = null, K = Q, oe = !1;
            }
            R = void 0;
          }
        } finally {
          R ? we() : xe = !1;
        }
      }
    }
    var we;
    if (typeof H == "function")
      we = function() {
        H(ya);
      };
    else if (typeof MessageChannel < "u") {
      var ka = new MessageChannel(), Tt = ka.port2;
      ka.port1.onmessage = ya, we = function() {
        Tt.postMessage(null);
      };
    } else
      we = function() {
        ge(ya, 0);
      };
    function Ye(z, R) {
      Ae = ge(function() {
        z(u.unstable_now());
      }, R);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, u.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : je = 0 < z ? Math.floor(1e3 / z) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, u.unstable_next = function(z) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = K;
      }
      var Q = K;
      K = R;
      try {
        return z();
      } finally {
        K = Q;
      }
    }, u.unstable_requestPaint = function() {
      $ = !0;
    }, u.unstable_runWithPriority = function(z, R) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var Q = K;
      K = z;
      try {
        return R();
      } finally {
        K = Q;
      }
    }, u.unstable_scheduleCallback = function(z, R, Q) {
      var he = u.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? he + Q : he) : Q = he, z) {
        case 1:
          var f = -1;
          break;
        case 2:
          f = 250;
          break;
        case 5:
          f = 1073741823;
          break;
        case 4:
          f = 1e4;
          break;
        default:
          f = 5e3;
      }
      return f = Q + f, z = {
        id: C++,
        callback: R,
        priorityLevel: z,
        startTime: Q,
        expirationTime: f,
        sortIndex: -1
      }, Q > he ? (z.sortIndex = Q, d(b, z), m(q) === null && z === m(b) && (re ? (pe(Ae), Ae = -1) : re = !0, Ye(G, Q - he))) : (z.sortIndex = f, d(q, z), J || oe || (J = !0, xe || (xe = !0, we()))), z;
    }, u.unstable_shouldYield = Ja, u.unstable_wrapCallback = function(z) {
      var R = K;
      return function() {
        var Q = K;
        K = R;
        try {
          return z.apply(this, arguments);
        } finally {
          K = Q;
        }
      };
    };
  })(zi)), zi;
}
var km;
function Nh() {
  return km || (km = 1, Ai.exports = Rh()), Ai.exports;
}
var Oi = { exports: {} }, F = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm;
function _h() {
  if (Dm) return F;
  Dm = 1;
  var u = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), j = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), L = Symbol.iterator;
  function K(f) {
    return f === null || typeof f != "object" ? null : (f = L && f[L] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var oe = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, J = Object.assign, re = {};
  function $(f, k, N) {
    this.props = f, this.context = k, this.refs = re, this.updater = N || oe;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(f, k) {
    if (typeof f != "object" && typeof f != "function" && f != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, f, k, "setState");
  }, $.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function ge() {
  }
  ge.prototype = $.prototype;
  function pe(f, k, N) {
    this.props = f, this.context = k, this.refs = re, this.updater = N || oe;
  }
  var H = pe.prototype = new ge();
  H.constructor = pe, J(H, $.prototype), H.isPureReactComponent = !0;
  var W = Array.isArray, G = { H: null, A: null, T: null, S: null, V: null }, xe = Object.prototype.hasOwnProperty;
  function Ae(f, k, N, w, B, ne) {
    return N = ne.ref, {
      $$typeof: u,
      type: f,
      key: k,
      ref: N !== void 0 ? N : null,
      props: ne
    };
  }
  function je(f, k) {
    return Ae(
      f.type,
      k,
      void 0,
      void 0,
      void 0,
      f.props
    );
  }
  function ua(f) {
    return typeof f == "object" && f !== null && f.$$typeof === u;
  }
  function Ja(f) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(N) {
      return k[N];
    });
  }
  var ya = /\/+/g;
  function we(f, k) {
    return typeof f == "object" && f !== null && f.key != null ? Ja("" + f.key) : k.toString(36);
  }
  function ka() {
  }
  function Tt(f) {
    switch (f.status) {
      case "fulfilled":
        return f.value;
      case "rejected":
        throw f.reason;
      default:
        switch (typeof f.status == "string" ? f.then(ka, ka) : (f.status = "pending", f.then(
          function(k) {
            f.status === "pending" && (f.status = "fulfilled", f.value = k);
          },
          function(k) {
            f.status === "pending" && (f.status = "rejected", f.reason = k);
          }
        )), f.status) {
          case "fulfilled":
            return f.value;
          case "rejected":
            throw f.reason;
        }
    }
    throw f;
  }
  function Ye(f, k, N, w, B) {
    var ne = typeof f;
    (ne === "undefined" || ne === "boolean") && (f = null);
    var Z = !1;
    if (f === null) Z = !0;
    else
      switch (ne) {
        case "bigint":
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case u:
            case d:
              Z = !0;
              break;
            case C:
              return Z = f._init, Ye(
                Z(f._payload),
                k,
                N,
                w,
                B
              );
          }
      }
    if (Z)
      return B = B(f), Z = w === "" ? "." + we(f, 0) : w, W(B) ? (N = "", Z != null && (N = Z.replace(ya, "$&/") + "/"), Ye(B, k, N, "", function($a) {
        return $a;
      })) : B != null && (ua(B) && (B = je(
        B,
        N + (B.key == null || f && f.key === B.key ? "" : ("" + B.key).replace(
          ya,
          "$&/"
        ) + "/") + Z
      )), k.push(B)), 1;
    Z = 0;
    var Pe = w === "" ? "." : w + ":";
    if (W(f))
      for (var ye = 0; ye < f.length; ye++)
        w = f[ye], ne = Pe + we(w, ye), Z += Ye(
          w,
          k,
          N,
          ne,
          B
        );
    else if (ye = K(f), typeof ye == "function")
      for (f = ye.call(f), ye = 0; !(w = f.next()).done; )
        w = w.value, ne = Pe + we(w, ye++), Z += Ye(
          w,
          k,
          N,
          ne,
          B
        );
    else if (ne === "object") {
      if (typeof f.then == "function")
        return Ye(
          Tt(f),
          k,
          N,
          w,
          B
        );
      throw k = String(f), Error(
        "Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Z;
  }
  function z(f, k, N) {
    if (f == null) return f;
    var w = [], B = 0;
    return Ye(f, w, "", "", function(ne) {
      return k.call(N, ne, B++);
    }), w;
  }
  function R(f) {
    if (f._status === -1) {
      var k = f._result;
      k = k(), k.then(
        function(N) {
          (f._status === 0 || f._status === -1) && (f._status = 1, f._result = N);
        },
        function(N) {
          (f._status === 0 || f._status === -1) && (f._status = 2, f._result = N);
        }
      ), f._status === -1 && (f._status = 0, f._result = k);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var Q = typeof reportError == "function" ? reportError : function(f) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var k = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof f == "object" && f !== null && typeof f.message == "string" ? String(f.message) : String(f),
        error: f
      });
      if (!window.dispatchEvent(k)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", f);
      return;
    }
    console.error(f);
  };
  function he() {
  }
  return F.Children = {
    map: z,
    forEach: function(f, k, N) {
      z(
        f,
        function() {
          k.apply(this, arguments);
        },
        N
      );
    },
    count: function(f) {
      var k = 0;
      return z(f, function() {
        k++;
      }), k;
    },
    toArray: function(f) {
      return z(f, function(k) {
        return k;
      }) || [];
    },
    only: function(f) {
      if (!ua(f))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return f;
    }
  }, F.Component = $, F.Fragment = m, F.Profiler = S, F.PureComponent = pe, F.StrictMode = i, F.Suspense = q, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, F.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(f) {
      return G.H.useMemoCache(f);
    }
  }, F.cache = function(f) {
    return function() {
      return f.apply(null, arguments);
    };
  }, F.cloneElement = function(f, k, N) {
    if (f == null)
      throw Error(
        "The argument must be a React element, but you passed " + f + "."
      );
    var w = J({}, f.props), B = f.key, ne = void 0;
    if (k != null)
      for (Z in k.ref !== void 0 && (ne = void 0), k.key !== void 0 && (B = "" + k.key), k)
        !xe.call(k, Z) || Z === "key" || Z === "__self" || Z === "__source" || Z === "ref" && k.ref === void 0 || (w[Z] = k[Z]);
    var Z = arguments.length - 2;
    if (Z === 1) w.children = N;
    else if (1 < Z) {
      for (var Pe = Array(Z), ye = 0; ye < Z; ye++)
        Pe[ye] = arguments[ye + 2];
      w.children = Pe;
    }
    return Ae(f.type, B, void 0, void 0, ne, w);
  }, F.createContext = function(f) {
    return f = {
      $$typeof: j,
      _currentValue: f,
      _currentValue2: f,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, f.Provider = f, f.Consumer = {
      $$typeof: x,
      _context: f
    }, f;
  }, F.createElement = function(f, k, N) {
    var w, B = {}, ne = null;
    if (k != null)
      for (w in k.key !== void 0 && (ne = "" + k.key), k)
        xe.call(k, w) && w !== "key" && w !== "__self" && w !== "__source" && (B[w] = k[w]);
    var Z = arguments.length - 2;
    if (Z === 1) B.children = N;
    else if (1 < Z) {
      for (var Pe = Array(Z), ye = 0; ye < Z; ye++)
        Pe[ye] = arguments[ye + 2];
      B.children = Pe;
    }
    if (f && f.defaultProps)
      for (w in Z = f.defaultProps, Z)
        B[w] === void 0 && (B[w] = Z[w]);
    return Ae(f, ne, void 0, void 0, null, B);
  }, F.createRef = function() {
    return { current: null };
  }, F.forwardRef = function(f) {
    return { $$typeof: D, render: f };
  }, F.isValidElement = ua, F.lazy = function(f) {
    return {
      $$typeof: C,
      _payload: { _status: -1, _result: f },
      _init: R
    };
  }, F.memo = function(f, k) {
    return {
      $$typeof: b,
      type: f,
      compare: k === void 0 ? null : k
    };
  }, F.startTransition = function(f) {
    var k = G.T, N = {};
    G.T = N;
    try {
      var w = f(), B = G.S;
      B !== null && B(N, w), typeof w == "object" && w !== null && typeof w.then == "function" && w.then(he, Q);
    } catch (ne) {
      Q(ne);
    } finally {
      G.T = k;
    }
  }, F.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, F.use = function(f) {
    return G.H.use(f);
  }, F.useActionState = function(f, k, N) {
    return G.H.useActionState(f, k, N);
  }, F.useCallback = function(f, k) {
    return G.H.useCallback(f, k);
  }, F.useContext = function(f) {
    return G.H.useContext(f);
  }, F.useDebugValue = function() {
  }, F.useDeferredValue = function(f, k) {
    return G.H.useDeferredValue(f, k);
  }, F.useEffect = function(f, k, N) {
    var w = G.H;
    if (typeof N == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return w.useEffect(f, k);
  }, F.useId = function() {
    return G.H.useId();
  }, F.useImperativeHandle = function(f, k, N) {
    return G.H.useImperativeHandle(f, k, N);
  }, F.useInsertionEffect = function(f, k) {
    return G.H.useInsertionEffect(f, k);
  }, F.useLayoutEffect = function(f, k) {
    return G.H.useLayoutEffect(f, k);
  }, F.useMemo = function(f, k) {
    return G.H.useMemo(f, k);
  }, F.useOptimistic = function(f, k) {
    return G.H.useOptimistic(f, k);
  }, F.useReducer = function(f, k, N) {
    return G.H.useReducer(f, k, N);
  }, F.useRef = function(f) {
    return G.H.useRef(f);
  }, F.useState = function(f) {
    return G.H.useState(f);
  }, F.useSyncExternalStore = function(f, k, N) {
    return G.H.useSyncExternalStore(
      f,
      k,
      N
    );
  }, F.useTransition = function() {
    return G.H.useTransition();
  }, F.version = "19.1.0", F;
}
var wm;
function Di() {
  return wm || (wm = 1, Oi.exports = _h()), Oi.exports;
}
var Mi = { exports: {} }, Xe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rm;
function Uh() {
  if (Rm) return Xe;
  Rm = 1;
  var u = Di();
  function d(q) {
    var b = "https://react.dev/errors/" + q;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        b += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return "Minified React error #" + q + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function m() {
  }
  var i = {
    d: {
      f: m,
      r: function() {
        throw Error(d(522));
      },
      D: m,
      C: m,
      L: m,
      m,
      X: m,
      S: m,
      M: m
    },
    p: 0,
    findDOMNode: null
  }, S = Symbol.for("react.portal");
  function x(q, b, C) {
    var L = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: S,
      key: L == null ? null : "" + L,
      children: q,
      containerInfo: b,
      implementation: C
    };
  }
  var j = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(q, b) {
    if (q === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Xe.createPortal = function(q, b) {
    var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(d(299));
    return x(q, b, null, C);
  }, Xe.flushSync = function(q) {
    var b = j.T, C = i.p;
    try {
      if (j.T = null, i.p = 2, q) return q();
    } finally {
      j.T = b, i.p = C, i.d.f();
    }
  }, Xe.preconnect = function(q, b) {
    typeof q == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, i.d.C(q, b));
  }, Xe.prefetchDNS = function(q) {
    typeof q == "string" && i.d.D(q);
  }, Xe.preinit = function(q, b) {
    if (typeof q == "string" && b && typeof b.as == "string") {
      var C = b.as, L = D(C, b.crossOrigin), K = typeof b.integrity == "string" ? b.integrity : void 0, oe = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      C === "style" ? i.d.S(
        q,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: L,
          integrity: K,
          fetchPriority: oe
        }
      ) : C === "script" && i.d.X(q, {
        crossOrigin: L,
        integrity: K,
        fetchPriority: oe,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Xe.preinitModule = function(q, b) {
    if (typeof q == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var C = D(
            b.as,
            b.crossOrigin
          );
          i.d.M(q, {
            crossOrigin: C,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && i.d.M(q);
  }, Xe.preload = function(q, b) {
    if (typeof q == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var C = b.as, L = D(C, b.crossOrigin);
      i.d.L(q, C, {
        crossOrigin: L,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Xe.preloadModule = function(q, b) {
    if (typeof q == "string")
      if (b) {
        var C = D(b.as, b.crossOrigin);
        i.d.m(q, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: C,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else i.d.m(q);
  }, Xe.requestFormReset = function(q) {
    i.d.r(q);
  }, Xe.unstable_batchedUpdates = function(q, b) {
    return q(b);
  }, Xe.useFormState = function(q, b, C) {
    return j.H.useFormState(q, b, C);
  }, Xe.useFormStatus = function() {
    return j.H.useHostTransitionStatus();
  }, Xe.version = "19.1.0", Xe;
}
var Nm;
function Hh() {
  if (Nm) return Mi.exports;
  Nm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (d) {
        console.error(d);
      }
  }
  return u(), Mi.exports = Uh(), Mi.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _m;
function Gh() {
  if (_m) return Mr;
  _m = 1;
  var u = Nh(), d = Di(), m = Hh();
  function i(e) {
    var a = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        a += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function S(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function x(e) {
    var a = e, t = e;
    if (e.alternate) for (; a.return; ) a = a.return;
    else {
      e = a;
      do
        a = e, (a.flags & 4098) !== 0 && (t = a.return), e = a.return;
      while (e);
    }
    return a.tag === 3 ? t : null;
  }
  function j(e) {
    if (e.tag === 13) {
      var a = e.memoizedState;
      if (a === null && (e = e.alternate, e !== null && (a = e.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function D(e) {
    if (x(e) !== e)
      throw Error(i(188));
  }
  function q(e) {
    var a = e.alternate;
    if (!a) {
      if (a = x(e), a === null) throw Error(i(188));
      return a !== e ? null : e;
    }
    for (var t = e, o = a; ; ) {
      var r = t.return;
      if (r === null) break;
      var l = r.alternate;
      if (l === null) {
        if (o = r.return, o !== null) {
          t = o;
          continue;
        }
        break;
      }
      if (r.child === l.child) {
        for (l = r.child; l; ) {
          if (l === t) return D(r), e;
          if (l === o) return D(r), a;
          l = l.sibling;
        }
        throw Error(i(188));
      }
      if (t.return !== o.return) t = r, o = l;
      else {
        for (var n = !1, s = r.child; s; ) {
          if (s === t) {
            n = !0, t = r, o = l;
            break;
          }
          if (s === o) {
            n = !0, o = r, t = l;
            break;
          }
          s = s.sibling;
        }
        if (!n) {
          for (s = l.child; s; ) {
            if (s === t) {
              n = !0, t = l, o = r;
              break;
            }
            if (s === o) {
              n = !0, o = l, t = r;
              break;
            }
            s = s.sibling;
          }
          if (!n) throw Error(i(189));
        }
      }
      if (t.alternate !== o) throw Error(i(190));
    }
    if (t.tag !== 3) throw Error(i(188));
    return t.stateNode.current === t ? e : a;
  }
  function b(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e;
    for (e = e.child; e !== null; ) {
      if (a = b(e), a !== null) return a;
      e = e.sibling;
    }
    return null;
  }
  var C = Object.assign, L = Symbol.for("react.element"), K = Symbol.for("react.transitional.element"), oe = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), pe = Symbol.for("react.consumer"), H = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), Ae = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), ua = Symbol.for("react.activity"), Ja = Symbol.for("react.memo_cache_sentinel"), ya = Symbol.iterator;
  function we(e) {
    return e === null || typeof e != "object" ? null : (e = ya && e[ya] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ka = Symbol.for("react.client.reference");
  function Tt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ka ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case J:
        return "Fragment";
      case $:
        return "Profiler";
      case re:
        return "StrictMode";
      case G:
        return "Suspense";
      case xe:
        return "SuspenseList";
      case ua:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case oe:
          return "Portal";
        case H:
          return (e.displayName || "Context") + ".Provider";
        case pe:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var a = e.render;
          return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ae:
          return a = e.displayName || null, a !== null ? a : Tt(e.type) || "Memo";
        case je:
          a = e._payload, e = e._init;
          try {
            return Tt(e(a));
          } catch {
          }
      }
    return null;
  }
  var Ye = Array.isArray, z = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, he = [], f = -1;
  function k(e) {
    return { current: e };
  }
  function N(e) {
    0 > f || (e.current = he[f], he[f] = null, f--);
  }
  function w(e, a) {
    f++, he[f] = e.current, e.current = a;
  }
  var B = k(null), ne = k(null), Z = k(null), Pe = k(null);
  function ye(e, a) {
    switch (w(Z, a), w(ne, e), w(B, null), a.nodeType) {
      case 9:
      case 11:
        e = (e = a.documentElement) && (e = e.namespaceURI) ? tm(e) : 0;
        break;
      default:
        if (e = a.tagName, a = a.namespaceURI)
          a = tm(a), e = om(a, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    N(B), w(B, e);
  }
  function $a() {
    N(B), N(ne), N(Z);
  }
  function nn(e) {
    e.memoizedState !== null && w(Pe, e);
    var a = B.current, t = om(a, e.type);
    a !== t && (w(ne, e), w(B, t));
  }
  function Nr(e) {
    ne.current === e && (N(B), N(ne)), Pe.current === e && (N(Pe), Sr._currentValue = Q);
  }
  var sn = Object.prototype.hasOwnProperty, un = u.unstable_scheduleCallback, cn = u.unstable_cancelCallback, cf = u.unstable_shouldYield, df = u.unstable_requestPaint, Ea = u.unstable_now, mf = u.unstable_getCurrentPriorityLevel, _i = u.unstable_ImmediatePriority, Ui = u.unstable_UserBlockingPriority, _r = u.unstable_NormalPriority, ff = u.unstable_LowPriority, Hi = u.unstable_IdlePriority, pf = u.log, hf = u.unstable_setDisableYieldValue, jo = null, ea = null;
  function Wa(e) {
    if (typeof pf == "function" && hf(e), ea && typeof ea.setStrictMode == "function")
      try {
        ea.setStrictMode(jo, e);
      } catch {
      }
  }
  var aa = Math.clz32 ? Math.clz32 : bf, vf = Math.log, gf = Math.LN2;
  function bf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vf(e) / gf | 0) | 0;
  }
  var Ur = 256, Hr = 4194304;
  function xt(e) {
    var a = e & 42;
    if (a !== 0) return a;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Gr(e, a, t) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var r = 0, l = e.suspendedLanes, n = e.pingedLanes;
    e = e.warmLanes;
    var s = o & 134217727;
    return s !== 0 ? (o = s & ~l, o !== 0 ? r = xt(o) : (n &= s, n !== 0 ? r = xt(n) : t || (t = s & ~e, t !== 0 && (r = xt(t))))) : (s = o & ~l, s !== 0 ? r = xt(s) : n !== 0 ? r = xt(n) : t || (t = o & ~e, t !== 0 && (r = xt(t)))), r === 0 ? 0 : a !== 0 && a !== r && (a & l) === 0 && (l = r & -r, t = a & -a, l >= t || l === 32 && (t & 4194048) !== 0) ? a : r;
  }
  function ko(e, a) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0;
  }
  function yf(e, a) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Gi() {
    var e = Ur;
    return Ur <<= 1, (Ur & 4194048) === 0 && (Ur = 256), e;
  }
  function Bi() {
    var e = Hr;
    return Hr <<= 1, (Hr & 62914560) === 0 && (Hr = 4194304), e;
  }
  function dn(e) {
    for (var a = [], t = 0; 31 > t; t++) a.push(e);
    return a;
  }
  function Do(e, a) {
    e.pendingLanes |= a, a !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Tf(e, a, t, o, r, l) {
    var n = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var s = e.entanglements, c = e.expirationTimes, g = e.hiddenUpdates;
    for (t = n & ~t; 0 < t; ) {
      var A = 31 - aa(t), M = 1 << A;
      s[A] = 0, c[A] = -1;
      var y = g[A];
      if (y !== null)
        for (g[A] = null, A = 0; A < y.length; A++) {
          var T = y[A];
          T !== null && (T.lane &= -536870913);
        }
      t &= ~M;
    }
    o !== 0 && Vi(e, o, 0), l !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= l & ~(n & ~a));
  }
  function Vi(e, a, t) {
    e.pendingLanes |= a, e.suspendedLanes &= ~a;
    var o = 31 - aa(a);
    e.entangledLanes |= a, e.entanglements[o] = e.entanglements[o] | 1073741824 | t & 4194090;
  }
  function Yi(e, a) {
    var t = e.entangledLanes |= a;
    for (e = e.entanglements; t; ) {
      var o = 31 - aa(t), r = 1 << o;
      r & a | e[o] & a && (e[o] |= a), t &= ~r;
    }
  }
  function mn(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function fn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Li() {
    var e = R.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Sm(e.type));
  }
  function xf(e, a) {
    var t = R.p;
    try {
      return R.p = e, a();
    } finally {
      R.p = t;
    }
  }
  var Fa = Math.random().toString(36).slice(2), Le = "__reactFiber$" + Fa, Ze = "__reactProps$" + Fa, Lt = "__reactContainer$" + Fa, pn = "__reactEvents$" + Fa, Sf = "__reactListeners$" + Fa, Ef = "__reactHandles$" + Fa, Qi = "__reactResources$" + Fa, wo = "__reactMarker$" + Fa;
  function hn(e) {
    delete e[Le], delete e[Ze], delete e[pn], delete e[Sf], delete e[Ef];
  }
  function Qt(e) {
    var a = e[Le];
    if (a) return a;
    for (var t = e.parentNode; t; ) {
      if (a = t[Lt] || t[Le]) {
        if (t = a.alternate, a.child !== null || t !== null && t.child !== null)
          for (e = sm(e); e !== null; ) {
            if (t = e[Le]) return t;
            e = sm(e);
          }
        return a;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Xt(e) {
    if (e = e[Le] || e[Lt]) {
      var a = e.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return e;
    }
    return null;
  }
  function Ro(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Kt(e) {
    var a = e[Qi];
    return a || (a = e[Qi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function Re(e) {
    e[wo] = !0;
  }
  var Xi = /* @__PURE__ */ new Set(), Ki = {};
  function St(e, a) {
    Zt(e, a), Zt(e + "Capture", a);
  }
  function Zt(e, a) {
    for (Ki[e] = a, e = 0; e < a.length; e++)
      Xi.add(a[e]);
  }
  var qf = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zi = {}, Ji = {};
  function Af(e) {
    return sn.call(Ji, e) ? !0 : sn.call(Zi, e) ? !1 : qf.test(e) ? Ji[e] = !0 : (Zi[e] = !0, !1);
  }
  function Br(e, a, t) {
    if (Af(a))
      if (t === null) e.removeAttribute(a);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(a);
            return;
          case "boolean":
            var o = a.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(a);
              return;
            }
        }
        e.setAttribute(a, "" + t);
      }
  }
  function Vr(e, a, t) {
    if (t === null) e.removeAttribute(a);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttribute(a, "" + t);
    }
  }
  function Da(e, a, t, o) {
    if (o === null) e.removeAttribute(t);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttributeNS(a, t, "" + o);
    }
  }
  var vn, $i;
  function Jt(e) {
    if (vn === void 0)
      try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        vn = a && a[1] || "", $i = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + vn + e + $i;
  }
  var gn = !1;
  function bn(e, a) {
    if (!e || gn) return "";
    gn = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var M = function() {
                throw Error();
              };
              if (Object.defineProperty(M.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, []);
                } catch (T) {
                  var y = T;
                }
                Reflect.construct(e, [], M);
              } else {
                try {
                  M.call();
                } catch (T) {
                  y = T;
                }
                e.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                y = T;
              }
              (M = e()) && typeof M.catch == "function" && M.catch(function() {
              });
            }
          } catch (T) {
            if (T && y && typeof T.stack == "string")
              return [T.stack, y.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var l = o.DetermineComponentFrameRoot(), n = l[0], s = l[1];
      if (n && s) {
        var c = n.split(`
`), g = s.split(`
`);
        for (r = o = 0; o < c.length && !c[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; r < g.length && !g[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (o === c.length || r === g.length)
          for (o = c.length - 1, r = g.length - 1; 1 <= o && 0 <= r && c[o] !== g[r]; )
            r--;
        for (; 1 <= o && 0 <= r; o--, r--)
          if (c[o] !== g[r]) {
            if (o !== 1 || r !== 1)
              do
                if (o--, r--, 0 > r || c[o] !== g[r]) {
                  var A = `
` + c[o].replace(" at new ", " at ");
                  return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), A;
                }
              while (1 <= o && 0 <= r);
            break;
          }
      }
    } finally {
      gn = !1, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? Jt(t) : "";
  }
  function zf(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Jt(e.type);
      case 16:
        return Jt("Lazy");
      case 13:
        return Jt("Suspense");
      case 19:
        return Jt("SuspenseList");
      case 0:
      case 15:
        return bn(e.type, !1);
      case 11:
        return bn(e.type.render, !1);
      case 1:
        return bn(e.type, !0);
      case 31:
        return Jt("Activity");
      default:
        return "";
    }
  }
  function Wi(e) {
    try {
      var a = "";
      do
        a += zf(e), e = e.return;
      while (e);
      return a;
    } catch (t) {
      return `
Error generating stack: ` + t.message + `
` + t.stack;
    }
  }
  function ca(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Fi(e) {
    var a = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function Of(e) {
    var a = Fi(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      a
    ), o = "" + e[a];
    if (!e.hasOwnProperty(a) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var r = t.get, l = t.set;
      return Object.defineProperty(e, a, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(n) {
          o = "" + n, l.call(this, n);
        }
      }), Object.defineProperty(e, a, {
        enumerable: t.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(n) {
          o = "" + n;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[a];
        }
      };
    }
  }
  function Yr(e) {
    e._valueTracker || (e._valueTracker = Of(e));
  }
  function Ii(e) {
    if (!e) return !1;
    var a = e._valueTracker;
    if (!a) return !0;
    var t = a.getValue(), o = "";
    return e && (o = Fi(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== t ? (a.setValue(e), !0) : !1;
  }
  function Lr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Mf = /[\n"\\]/g;
  function da(e) {
    return e.replace(
      Mf,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function yn(e, a, t, o, r, l, n, s) {
    e.name = "", n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" ? e.type = n : e.removeAttribute("type"), a != null ? n === "number" ? (a === 0 && e.value === "" || e.value != a) && (e.value = "" + ca(a)) : e.value !== "" + ca(a) && (e.value = "" + ca(a)) : n !== "submit" && n !== "reset" || e.removeAttribute("value"), a != null ? Tn(e, n, ca(a)) : t != null ? Tn(e, n, ca(t)) : o != null && e.removeAttribute("value"), r == null && l != null && (e.defaultChecked = !!l), r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + ca(s) : e.removeAttribute("name");
  }
  function Pi(e, a, t, o, r, l, n, s) {
    if (l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && (e.type = l), a != null || t != null) {
      if (!(l !== "submit" && l !== "reset" || a != null))
        return;
      t = t != null ? "" + ca(t) : "", a = a != null ? "" + ca(a) : t, s || a === e.value || (e.value = a), e.defaultValue = a;
    }
    o = o ?? r, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = s ? e.checked : !!o, e.defaultChecked = !!o, n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (e.name = n);
  }
  function Tn(e, a, t) {
    a === "number" && Lr(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
  }
  function $t(e, a, t, o) {
    if (e = e.options, a) {
      a = {};
      for (var r = 0; r < t.length; r++)
        a["$" + t[r]] = !0;
      for (t = 0; t < e.length; t++)
        r = a.hasOwnProperty("$" + e[t].value), e[t].selected !== r && (e[t].selected = r), r && o && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + ca(t), a = null, r = 0; r < e.length; r++) {
        if (e[r].value === t) {
          e[r].selected = !0, o && (e[r].defaultSelected = !0);
          return;
        }
        a !== null || e[r].disabled || (a = e[r]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function eu(e, a, t) {
    if (a != null && (a = "" + ca(a), a !== e.value && (e.value = a), t == null)) {
      e.defaultValue !== a && (e.defaultValue = a);
      return;
    }
    e.defaultValue = t != null ? "" + ca(t) : "";
  }
  function au(e, a, t, o) {
    if (a == null) {
      if (o != null) {
        if (t != null) throw Error(i(92));
        if (Ye(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        t = o;
      }
      t == null && (t = ""), a = t;
    }
    t = ca(a), e.defaultValue = t, o = e.textContent, o === t && o !== "" && o !== null && (e.value = o);
  }
  function Wt(e, a) {
    if (a) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = a;
        return;
      }
    }
    e.textContent = a;
  }
  var Cf = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function tu(e, a, t) {
    var o = a.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? o ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "" : o ? e.setProperty(a, t) : typeof t != "number" || t === 0 || Cf.has(a) ? a === "float" ? e.cssFloat = t : e[a] = ("" + t).trim() : e[a] = t + "px";
  }
  function ou(e, a, t) {
    if (a != null && typeof a != "object")
      throw Error(i(62));
    if (e = e.style, t != null) {
      for (var o in t)
        !t.hasOwnProperty(o) || a != null && a.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var r in a)
        o = a[r], a.hasOwnProperty(r) && t[r] !== o && tu(e, r, o);
    } else
      for (var l in a)
        a.hasOwnProperty(l) && tu(e, l, a[l]);
  }
  function xn(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jf = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), kf = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qr(e) {
    return kf.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Sn = null;
  function En(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ft = null, It = null;
  function ru(e) {
    var a = Xt(e);
    if (a && (e = a.stateNode)) {
      var t = e[Ze] || null;
      e: switch (e = a.stateNode, a.type) {
        case "input":
          if (yn(
            e,
            t.value,
            t.defaultValue,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name
          ), a = t.name, t.type === "radio" && a != null) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll(
              'input[name="' + da(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < t.length; a++) {
              var o = t[a];
              if (o !== e && o.form === e.form) {
                var r = o[Ze] || null;
                if (!r) throw Error(i(90));
                yn(
                  o,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (a = 0; a < t.length; a++)
              o = t[a], o.form === e.form && Ii(o);
          }
          break e;
        case "textarea":
          eu(e, t.value, t.defaultValue);
          break e;
        case "select":
          a = t.value, a != null && $t(e, !!t.multiple, a, !1);
      }
    }
  }
  var qn = !1;
  function lu(e, a, t) {
    if (qn) return e(a, t);
    qn = !0;
    try {
      var o = e(a);
      return o;
    } finally {
      if (qn = !1, (Ft !== null || It !== null) && (Cl(), Ft && (a = Ft, e = It, It = Ft = null, ru(a), e)))
        for (a = 0; a < e.length; a++) ru(e[a]);
    }
  }
  function No(e, a) {
    var t = e.stateNode;
    if (t === null) return null;
    var o = t[Ze] || null;
    if (o === null) return null;
    t = o[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function")
      throw Error(
        i(231, a, typeof t)
      );
    return t;
  }
  var wa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), An = !1;
  if (wa)
    try {
      var _o = {};
      Object.defineProperty(_o, "passive", {
        get: function() {
          An = !0;
        }
      }), window.addEventListener("test", _o, _o), window.removeEventListener("test", _o, _o);
    } catch {
      An = !1;
    }
  var Ia = null, zn = null, Xr = null;
  function nu() {
    if (Xr) return Xr;
    var e, a = zn, t = a.length, o, r = "value" in Ia ? Ia.value : Ia.textContent, l = r.length;
    for (e = 0; e < t && a[e] === r[e]; e++) ;
    var n = t - e;
    for (o = 1; o <= n && a[t - o] === r[l - o]; o++) ;
    return Xr = r.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Kr(e) {
    var a = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && a === 13 && (e = 13)) : e = a, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Zr() {
    return !0;
  }
  function su() {
    return !1;
  }
  function Je(e) {
    function a(t, o, r, l, n) {
      this._reactName = t, this._targetInst = r, this.type = o, this.nativeEvent = l, this.target = n, this.currentTarget = null;
      for (var s in e)
        e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(l) : l[s]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Zr : su, this.isPropagationStopped = su, this;
    }
    return C(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Zr);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Zr);
      },
      persist: function() {
      },
      isPersistent: Zr
    }), a;
  }
  var Et = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Jr = Je(Et), Uo = C({}, Et, { view: 0, detail: 0 }), Df = Je(Uo), On, Mn, Ho, $r = C({}, Uo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jn,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ho && (Ho && e.type === "mousemove" ? (On = e.screenX - Ho.screenX, Mn = e.screenY - Ho.screenY) : Mn = On = 0, Ho = e), On);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Mn;
    }
  }), iu = Je($r), wf = C({}, $r, { dataTransfer: 0 }), Rf = Je(wf), Nf = C({}, Uo, { relatedTarget: 0 }), Cn = Je(Nf), _f = C({}, Et, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Uf = Je(_f), Hf = C({}, Et, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Gf = Je(Hf), Bf = C({}, Et, { data: 0 }), uu = Je(Bf), Vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Yf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Lf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Qf(e) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(e) : (e = Lf[e]) ? !!a[e] : !1;
  }
  function jn() {
    return Qf;
  }
  var Xf = C({}, Uo, {
    key: function(e) {
      if (e.key) {
        var a = Vf[e.key] || e.key;
        if (a !== "Unidentified") return a;
      }
      return e.type === "keypress" ? (e = Kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yf[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jn,
    charCode: function(e) {
      return e.type === "keypress" ? Kr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Kf = Je(Xf), Zf = C({}, $r, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), cu = Je(Zf), Jf = C({}, Uo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jn
  }), $f = Je(Jf), Wf = C({}, Et, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ff = Je(Wf), If = C({}, $r, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pf = Je(If), ep = C({}, Et, {
    newState: 0,
    oldState: 0
  }), ap = Je(ep), tp = [9, 13, 27, 32], kn = wa && "CompositionEvent" in window, Go = null;
  wa && "documentMode" in document && (Go = document.documentMode);
  var op = wa && "TextEvent" in window && !Go, du = wa && (!kn || Go && 8 < Go && 11 >= Go), mu = " ", fu = !1;
  function pu(e, a) {
    switch (e) {
      case "keyup":
        return tp.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pt = !1;
  function rp(e, a) {
    switch (e) {
      case "compositionend":
        return hu(a);
      case "keypress":
        return a.which !== 32 ? null : (fu = !0, mu);
      case "textInput":
        return e = a.data, e === mu && fu ? null : e;
      default:
        return null;
    }
  }
  function lp(e, a) {
    if (Pt)
      return e === "compositionend" || !kn && pu(e, a) ? (e = nu(), Xr = zn = Ia = null, Pt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return du && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var np = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function vu(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a === "input" ? !!np[e.type] : a === "textarea";
  }
  function gu(e, a, t, o) {
    Ft ? It ? It.push(o) : It = [o] : Ft = o, a = Nl(a, "onChange"), 0 < a.length && (t = new Jr(
      "onChange",
      "change",
      null,
      t,
      o
    ), e.push({ event: t, listeners: a }));
  }
  var Bo = null, Vo = null;
  function sp(e) {
    Fd(e, 0);
  }
  function Wr(e) {
    var a = Ro(e);
    if (Ii(a)) return e;
  }
  function bu(e, a) {
    if (e === "change") return a;
  }
  var yu = !1;
  if (wa) {
    var Dn;
    if (wa) {
      var wn = "oninput" in document;
      if (!wn) {
        var Tu = document.createElement("div");
        Tu.setAttribute("oninput", "return;"), wn = typeof Tu.oninput == "function";
      }
      Dn = wn;
    } else Dn = !1;
    yu = Dn && (!document.documentMode || 9 < document.documentMode);
  }
  function xu() {
    Bo && (Bo.detachEvent("onpropertychange", Su), Vo = Bo = null);
  }
  function Su(e) {
    if (e.propertyName === "value" && Wr(Vo)) {
      var a = [];
      gu(
        a,
        Vo,
        e,
        En(e)
      ), lu(sp, a);
    }
  }
  function ip(e, a, t) {
    e === "focusin" ? (xu(), Bo = a, Vo = t, Bo.attachEvent("onpropertychange", Su)) : e === "focusout" && xu();
  }
  function up(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wr(Vo);
  }
  function cp(e, a) {
    if (e === "click") return Wr(a);
  }
  function dp(e, a) {
    if (e === "input" || e === "change")
      return Wr(a);
  }
  function mp(e, a) {
    return e === a && (e !== 0 || 1 / e === 1 / a) || e !== e && a !== a;
  }
  var ta = typeof Object.is == "function" ? Object.is : mp;
  function Yo(e, a) {
    if (ta(e, a)) return !0;
    if (typeof e != "object" || e === null || typeof a != "object" || a === null)
      return !1;
    var t = Object.keys(e), o = Object.keys(a);
    if (t.length !== o.length) return !1;
    for (o = 0; o < t.length; o++) {
      var r = t[o];
      if (!sn.call(a, r) || !ta(e[r], a[r]))
        return !1;
    }
    return !0;
  }
  function Eu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qu(e, a) {
    var t = Eu(e);
    e = 0;
    for (var o; t; ) {
      if (t.nodeType === 3) {
        if (o = e + t.textContent.length, e <= a && o >= a)
          return { node: t, offset: a - e };
        e = o;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Eu(t);
    }
  }
  function Au(e, a) {
    return e && a ? e === a ? !0 : e && e.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Au(e, a.parentNode) : "contains" in e ? e.contains(a) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function zu(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var a = Lr(e.document); a instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof a.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = a.contentWindow;
      else break;
      a = Lr(e.document);
    }
    return a;
  }
  function Rn(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a && (a === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || a === "textarea" || e.contentEditable === "true");
  }
  var fp = wa && "documentMode" in document && 11 >= document.documentMode, eo = null, Nn = null, Lo = null, _n = !1;
  function Ou(e, a, t) {
    var o = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    _n || eo == null || eo !== Lr(o) || (o = eo, "selectionStart" in o && Rn(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Lo && Yo(Lo, o) || (Lo = o, o = Nl(Nn, "onSelect"), 0 < o.length && (a = new Jr(
      "onSelect",
      "select",
      null,
      a,
      t
    ), e.push({ event: a, listeners: o }), a.target = eo)));
  }
  function qt(e, a) {
    var t = {};
    return t[e.toLowerCase()] = a.toLowerCase(), t["Webkit" + e] = "webkit" + a, t["Moz" + e] = "moz" + a, t;
  }
  var ao = {
    animationend: qt("Animation", "AnimationEnd"),
    animationiteration: qt("Animation", "AnimationIteration"),
    animationstart: qt("Animation", "AnimationStart"),
    transitionrun: qt("Transition", "TransitionRun"),
    transitionstart: qt("Transition", "TransitionStart"),
    transitioncancel: qt("Transition", "TransitionCancel"),
    transitionend: qt("Transition", "TransitionEnd")
  }, Un = {}, Mu = {};
  wa && (Mu = document.createElement("div").style, "AnimationEvent" in window || (delete ao.animationend.animation, delete ao.animationiteration.animation, delete ao.animationstart.animation), "TransitionEvent" in window || delete ao.transitionend.transition);
  function At(e) {
    if (Un[e]) return Un[e];
    if (!ao[e]) return e;
    var a = ao[e], t;
    for (t in a)
      if (a.hasOwnProperty(t) && t in Mu)
        return Un[e] = a[t];
    return e;
  }
  var Cu = At("animationend"), ju = At("animationiteration"), ku = At("animationstart"), pp = At("transitionrun"), hp = At("transitionstart"), vp = At("transitioncancel"), Du = At("transitionend"), wu = /* @__PURE__ */ new Map(), Hn = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hn.push("scrollEnd");
  function Ta(e, a) {
    wu.set(e, a), St(a, [e]);
  }
  var Ru = /* @__PURE__ */ new WeakMap();
  function ma(e, a) {
    if (typeof e == "object" && e !== null) {
      var t = Ru.get(e);
      return t !== void 0 ? t : (a = {
        value: e,
        source: a,
        stack: Wi(a)
      }, Ru.set(e, a), a);
    }
    return {
      value: e,
      source: a,
      stack: Wi(a)
    };
  }
  var fa = [], to = 0, Gn = 0;
  function Fr() {
    for (var e = to, a = Gn = to = 0; a < e; ) {
      var t = fa[a];
      fa[a++] = null;
      var o = fa[a];
      fa[a++] = null;
      var r = fa[a];
      fa[a++] = null;
      var l = fa[a];
      if (fa[a++] = null, o !== null && r !== null) {
        var n = o.pending;
        n === null ? r.next = r : (r.next = n.next, n.next = r), o.pending = r;
      }
      l !== 0 && Nu(t, r, l);
    }
  }
  function Ir(e, a, t, o) {
    fa[to++] = e, fa[to++] = a, fa[to++] = t, fa[to++] = o, Gn |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function Bn(e, a, t, o) {
    return Ir(e, a, t, o), Pr(e);
  }
  function oo(e, a) {
    return Ir(e, null, null, a), Pr(e);
  }
  function Nu(e, a, t) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t);
    for (var r = !1, l = e.return; l !== null; )
      l.childLanes |= t, o = l.alternate, o !== null && (o.childLanes |= t), l.tag === 22 && (e = l.stateNode, e === null || e._visibility & 1 || (r = !0)), e = l, l = l.return;
    return e.tag === 3 ? (l = e.stateNode, r && a !== null && (r = 31 - aa(t), e = l.hiddenUpdates, o = e[r], o === null ? e[r] = [a] : o.push(a), a.lane = t | 536870912), l) : null;
  }
  function Pr(e) {
    if (50 < pr)
      throw pr = 0, Ks = null, Error(i(185));
    for (var a = e.return; a !== null; )
      e = a, a = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ro = {};
  function gp(e, a, t, o) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function oa(e, a, t, o) {
    return new gp(e, a, t, o);
  }
  function Vn(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ra(e, a) {
    var t = e.alternate;
    return t === null ? (t = oa(
      e.tag,
      a,
      e.key,
      e.mode
    ), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = a, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, a = e.dependencies, t.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
  }
  function _u(e, a) {
    e.flags &= 65011714;
    var t = e.alternate;
    return t === null ? (e.childLanes = 0, e.lanes = a, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, a = t.dependencies, e.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), e;
  }
  function el(e, a, t, o, r, l) {
    var n = 0;
    if (o = e, typeof e == "function") Vn(e) && (n = 1);
    else if (typeof e == "string")
      n = yh(
        e,
        t,
        B.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ua:
          return e = oa(31, t, a, r), e.elementType = ua, e.lanes = l, e;
        case J:
          return zt(t.children, r, l, a);
        case re:
          n = 8, r |= 24;
          break;
        case $:
          return e = oa(12, t, a, r | 2), e.elementType = $, e.lanes = l, e;
        case G:
          return e = oa(13, t, a, r), e.elementType = G, e.lanes = l, e;
        case xe:
          return e = oa(19, t, a, r), e.elementType = xe, e.lanes = l, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ge:
              case H:
                n = 10;
                break e;
              case pe:
                n = 9;
                break e;
              case W:
                n = 11;
                break e;
              case Ae:
                n = 14;
                break e;
              case je:
                n = 16, o = null;
                break e;
            }
          n = 29, t = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return a = oa(n, t, a, r), a.elementType = e, a.type = o, a.lanes = l, a;
  }
  function zt(e, a, t, o) {
    return e = oa(7, e, o, a), e.lanes = t, e;
  }
  function Yn(e, a, t) {
    return e = oa(6, e, null, a), e.lanes = t, e;
  }
  function Ln(e, a, t) {
    return a = oa(
      4,
      e.children !== null ? e.children : [],
      e.key,
      a
    ), a.lanes = t, a.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, a;
  }
  var lo = [], no = 0, al = null, tl = 0, pa = [], ha = 0, Ot = null, Na = 1, _a = "";
  function Mt(e, a) {
    lo[no++] = tl, lo[no++] = al, al = e, tl = a;
  }
  function Uu(e, a, t) {
    pa[ha++] = Na, pa[ha++] = _a, pa[ha++] = Ot, Ot = e;
    var o = Na;
    e = _a;
    var r = 32 - aa(o) - 1;
    o &= ~(1 << r), t += 1;
    var l = 32 - aa(a) + r;
    if (30 < l) {
      var n = r - r % 5;
      l = (o & (1 << n) - 1).toString(32), o >>= n, r -= n, Na = 1 << 32 - aa(a) + r | t << r | o, _a = l + e;
    } else
      Na = 1 << l | t << r | o, _a = e;
  }
  function Qn(e) {
    e.return !== null && (Mt(e, 1), Uu(e, 1, 0));
  }
  function Xn(e) {
    for (; e === al; )
      al = lo[--no], lo[no] = null, tl = lo[--no], lo[no] = null;
    for (; e === Ot; )
      Ot = pa[--ha], pa[ha] = null, _a = pa[--ha], pa[ha] = null, Na = pa[--ha], pa[ha] = null;
  }
  var Ke = null, Ee = null, ie = !1, Ct = null, qa = !1, Kn = Error(i(519));
  function jt(e) {
    var a = Error(i(418, ""));
    throw Ko(ma(a, e)), Kn;
  }
  function Hu(e) {
    var a = e.stateNode, t = e.type, o = e.memoizedProps;
    switch (a[Le] = e, a[Ze] = o, t) {
      case "dialog":
        te("cancel", a), te("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        te("load", a);
        break;
      case "video":
      case "audio":
        for (t = 0; t < vr.length; t++)
          te(vr[t], a);
        break;
      case "source":
        te("error", a);
        break;
      case "img":
      case "image":
      case "link":
        te("error", a), te("load", a);
        break;
      case "details":
        te("toggle", a);
        break;
      case "input":
        te("invalid", a), Pi(
          a,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), Yr(a);
        break;
      case "select":
        te("invalid", a);
        break;
      case "textarea":
        te("invalid", a), au(a, o.value, o.defaultValue, o.children), Yr(a);
    }
    t = o.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || a.textContent === "" + t || o.suppressHydrationWarning === !0 || am(a.textContent, t) ? (o.popover != null && (te("beforetoggle", a), te("toggle", a)), o.onScroll != null && te("scroll", a), o.onScrollEnd != null && te("scrollend", a), o.onClick != null && (a.onclick = _l), a = !0) : a = !1, a || jt(e);
  }
  function Gu(e) {
    for (Ke = e.return; Ke; )
      switch (Ke.tag) {
        case 5:
        case 13:
          qa = !1;
          return;
        case 27:
        case 3:
          qa = !0;
          return;
        default:
          Ke = Ke.return;
      }
  }
  function Qo(e) {
    if (e !== Ke) return !1;
    if (!ie) return Gu(e), ie = !0, !1;
    var a = e.tag, t;
    if ((t = a !== 3 && a !== 27) && ((t = a === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || ii(e.type, e.memoizedProps)), t = !t), t && Ee && jt(e), Gu(e), a === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, a = 0; e; ) {
          if (e.nodeType === 8)
            if (t = e.data, t === "/$") {
              if (a === 0) {
                Ee = Sa(e.nextSibling);
                break e;
              }
              a--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || a++;
          e = e.nextSibling;
        }
        Ee = null;
      }
    } else
      a === 27 ? (a = Ee, pt(e.type) ? (e = fi, fi = null, Ee = e) : Ee = a) : Ee = Ke ? Sa(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xo() {
    Ee = Ke = null, ie = !1;
  }
  function Bu() {
    var e = Ct;
    return e !== null && (Fe === null ? Fe = e : Fe.push.apply(
      Fe,
      e
    ), Ct = null), e;
  }
  function Ko(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var Zn = k(null), kt = null, Ua = null;
  function Pa(e, a, t) {
    w(Zn, a._currentValue), a._currentValue = t;
  }
  function Ha(e) {
    e._currentValue = Zn.current, N(Zn);
  }
  function Jn(e, a, t) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & a) !== a ? (e.childLanes |= a, o !== null && (o.childLanes |= a)) : o !== null && (o.childLanes & a) !== a && (o.childLanes |= a), e === t) break;
      e = e.return;
    }
  }
  function $n(e, a, t, o) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var l = r.dependencies;
      if (l !== null) {
        var n = r.child;
        l = l.firstContext;
        e: for (; l !== null; ) {
          var s = l;
          l = r;
          for (var c = 0; c < a.length; c++)
            if (s.context === a[c]) {
              l.lanes |= t, s = l.alternate, s !== null && (s.lanes |= t), Jn(
                l.return,
                t,
                e
              ), o || (n = null);
              break e;
            }
          l = s.next;
        }
      } else if (r.tag === 18) {
        if (n = r.return, n === null) throw Error(i(341));
        n.lanes |= t, l = n.alternate, l !== null && (l.lanes |= t), Jn(n, t, e), n = null;
      } else n = r.child;
      if (n !== null) n.return = r;
      else
        for (n = r; n !== null; ) {
          if (n === e) {
            n = null;
            break;
          }
          if (r = n.sibling, r !== null) {
            r.return = n.return, n = r;
            break;
          }
          n = n.return;
        }
      r = n;
    }
  }
  function Zo(e, a, t, o) {
    e = null;
    for (var r = a, l = !1; r !== null; ) {
      if (!l) {
        if ((r.flags & 524288) !== 0) l = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var n = r.alternate;
        if (n === null) throw Error(i(387));
        if (n = n.memoizedProps, n !== null) {
          var s = r.type;
          ta(r.pendingProps.value, n.value) || (e !== null ? e.push(s) : e = [s]);
        }
      } else if (r === Pe.current) {
        if (n = r.alternate, n === null) throw Error(i(387));
        n.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Sr) : e = [Sr]);
      }
      r = r.return;
    }
    e !== null && $n(
      a,
      e,
      t,
      o
    ), a.flags |= 262144;
  }
  function ol(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ta(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Dt(e) {
    kt = e, Ua = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Qe(e) {
    return Vu(kt, e);
  }
  function rl(e, a) {
    return kt === null && Dt(e), Vu(e, a);
  }
  function Vu(e, a) {
    var t = a._currentValue;
    if (a = { context: a, memoizedValue: t, next: null }, Ua === null) {
      if (e === null) throw Error(i(308));
      Ua = a, e.dependencies = { lanes: 0, firstContext: a }, e.flags |= 524288;
    } else Ua = Ua.next = a;
    return t;
  }
  var bp = typeof AbortController < "u" ? AbortController : function() {
    var e = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(t, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      a.aborted = !0, e.forEach(function(t) {
        return t();
      });
    };
  }, yp = u.unstable_scheduleCallback, Tp = u.unstable_NormalPriority, ke = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Wn() {
    return {
      controller: new bp(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Jo(e) {
    e.refCount--, e.refCount === 0 && yp(Tp, function() {
      e.controller.abort();
    });
  }
  var $o = null, Fn = 0, so = 0, io = null;
  function xp(e, a) {
    if ($o === null) {
      var t = $o = [];
      Fn = 0, so = Ps(), io = {
        status: "pending",
        value: void 0,
        then: function(o) {
          t.push(o);
        }
      };
    }
    return Fn++, a.then(Yu, Yu), a;
  }
  function Yu() {
    if (--Fn === 0 && $o !== null) {
      io !== null && (io.status = "fulfilled");
      var e = $o;
      $o = null, so = 0, io = null;
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
  }
  function Sp(e, a) {
    var t = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        t.push(r);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = a;
        for (var r = 0; r < t.length; r++) (0, t[r])(a);
      },
      function(r) {
        for (o.status = "rejected", o.reason = r, r = 0; r < t.length; r++)
          (0, t[r])(void 0);
      }
    ), o;
  }
  var Lu = z.S;
  z.S = function(e, a) {
    typeof a == "object" && a !== null && typeof a.then == "function" && xp(e, a), Lu !== null && Lu(e, a);
  };
  var wt = k(null);
  function In() {
    var e = wt.current;
    return e !== null ? e : be.pooledCache;
  }
  function ll(e, a) {
    a === null ? w(wt, wt.current) : w(wt, a.pool);
  }
  function Qu() {
    var e = In();
    return e === null ? null : { parent: ke._currentValue, pool: e };
  }
  var Wo = Error(i(460)), Xu = Error(i(474)), nl = Error(i(542)), Pn = { then: function() {
  } };
  function Ku(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function sl() {
  }
  function Zu(e, a, t) {
    switch (t = e[t], t === void 0 ? e.push(a) : t !== a && (a.then(sl, sl), a = t), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw e = a.reason, $u(e), e;
      default:
        if (typeof a.status == "string") a.then(sl, sl);
        else {
          if (e = be, e !== null && 100 < e.shellSuspendCounter)
            throw Error(i(482));
          e = a, e.status = "pending", e.then(
            function(o) {
              if (a.status === "pending") {
                var r = a;
                r.status = "fulfilled", r.value = o;
              }
            },
            function(o) {
              if (a.status === "pending") {
                var r = a;
                r.status = "rejected", r.reason = o;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw e = a.reason, $u(e), e;
        }
        throw Fo = a, Wo;
    }
  }
  var Fo = null;
  function Ju() {
    if (Fo === null) throw Error(i(459));
    var e = Fo;
    return Fo = null, e;
  }
  function $u(e) {
    if (e === Wo || e === nl)
      throw Error(i(483));
  }
  var et = !1;
  function es(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function as(e, a) {
    e = e.updateQueue, a.updateQueue === e && (a.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function at(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function tt(e, a, t) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (ue & 2) !== 0) {
      var r = o.pending;
      return r === null ? a.next = a : (a.next = r.next, r.next = a), o.pending = a, a = Pr(e), Nu(e, null, t), a;
    }
    return Ir(e, o, a, t), Pr(e);
  }
  function Io(e, a, t) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (t & 4194048) !== 0)) {
      var o = a.lanes;
      o &= e.pendingLanes, t |= o, a.lanes = t, Yi(e, t);
    }
  }
  function ts(e, a) {
    var t = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, t === o)) {
      var r = null, l = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var n = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          l === null ? r = l = n : l = l.next = n, t = t.next;
        } while (t !== null);
        l === null ? r = l = a : l = l.next = a;
      } else r = l = a;
      t = {
        baseState: o.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: l,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = a : e.next = a, t.lastBaseUpdate = a;
  }
  var os = !1;
  function Po() {
    if (os) {
      var e = io;
      if (e !== null) throw e;
    }
  }
  function er(e, a, t, o) {
    os = !1;
    var r = e.updateQueue;
    et = !1;
    var l = r.firstBaseUpdate, n = r.lastBaseUpdate, s = r.shared.pending;
    if (s !== null) {
      r.shared.pending = null;
      var c = s, g = c.next;
      c.next = null, n === null ? l = g : n.next = g, n = c;
      var A = e.alternate;
      A !== null && (A = A.updateQueue, s = A.lastBaseUpdate, s !== n && (s === null ? A.firstBaseUpdate = g : s.next = g, A.lastBaseUpdate = c));
    }
    if (l !== null) {
      var M = r.baseState;
      n = 0, A = g = c = null, s = l;
      do {
        var y = s.lane & -536870913, T = y !== s.lane;
        if (T ? (le & y) === y : (o & y) === y) {
          y !== 0 && y === so && (os = !0), A !== null && (A = A.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, V = s;
            y = a;
            var fe = t;
            switch (V.tag) {
              case 1:
                if (X = V.payload, typeof X == "function") {
                  M = X.call(fe, M, y);
                  break e;
                }
                M = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = V.payload, y = typeof X == "function" ? X.call(fe, M, y) : X, y == null) break e;
                M = C({}, M, y);
                break e;
              case 2:
                et = !0;
            }
          }
          y = s.callback, y !== null && (e.flags |= 64, T && (e.flags |= 8192), T = r.callbacks, T === null ? r.callbacks = [y] : T.push(y));
        } else
          T = {
            lane: y,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, A === null ? (g = A = T, c = M) : A = A.next = T, n |= y;
        if (s = s.next, s === null) {
          if (s = r.shared.pending, s === null)
            break;
          T = s, s = T.next, T.next = null, r.lastBaseUpdate = T, r.shared.pending = null;
        }
      } while (!0);
      A === null && (c = M), r.baseState = c, r.firstBaseUpdate = g, r.lastBaseUpdate = A, l === null && (r.shared.lanes = 0), ct |= n, e.lanes = n, e.memoizedState = M;
    }
  }
  function Wu(e, a) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(a);
  }
  function Fu(e, a) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++)
        Wu(t[e], a);
  }
  var uo = k(null), il = k(0);
  function Iu(e, a) {
    e = Xa, w(il, e), w(uo, a), Xa = e | a.baseLanes;
  }
  function rs() {
    w(il, Xa), w(uo, uo.current);
  }
  function ls() {
    Xa = il.current, N(uo), N(il);
  }
  var ot = 0, I = null, de = null, Me = null, ul = !1, co = !1, Rt = !1, cl = 0, ar = 0, mo = null, Ep = 0;
  function ze() {
    throw Error(i(321));
  }
  function ns(e, a) {
    if (a === null) return !1;
    for (var t = 0; t < a.length && t < e.length; t++)
      if (!ta(e[t], a[t])) return !1;
    return !0;
  }
  function ss(e, a, t, o, r, l) {
    return ot = l, I = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, z.H = e === null || e.memoizedState === null ? Nc : _c, Rt = !1, l = t(o, r), Rt = !1, co && (l = ec(
      a,
      t,
      o,
      r
    )), Pu(e), l;
  }
  function Pu(e) {
    z.H = vl;
    var a = de !== null && de.next !== null;
    if (ot = 0, Me = de = I = null, ul = !1, ar = 0, mo = null, a) throw Error(i(300));
    e === null || Ne || (e = e.dependencies, e !== null && ol(e) && (Ne = !0));
  }
  function ec(e, a, t, o) {
    I = e;
    var r = 0;
    do {
      if (co && (mo = null), ar = 0, co = !1, 25 <= r) throw Error(i(301));
      if (r += 1, Me = de = null, e.updateQueue != null) {
        var l = e.updateQueue;
        l.lastEffect = null, l.events = null, l.stores = null, l.memoCache != null && (l.memoCache.index = 0);
      }
      z.H = jp, l = a(t, o);
    } while (co);
    return l;
  }
  function qp() {
    var e = z.H, a = e.useState()[0];
    return a = typeof a.then == "function" ? tr(a) : a, e = e.useState()[0], (de !== null ? de.memoizedState : null) !== e && (I.flags |= 1024), a;
  }
  function is() {
    var e = cl !== 0;
    return cl = 0, e;
  }
  function us(e, a, t) {
    a.updateQueue = e.updateQueue, a.flags &= -2053, e.lanes &= ~t;
  }
  function cs(e) {
    if (ul) {
      for (e = e.memoizedState; e !== null; ) {
        var a = e.queue;
        a !== null && (a.pending = null), e = e.next;
      }
      ul = !1;
    }
    ot = 0, Me = de = I = null, co = !1, ar = cl = 0, mo = null;
  }
  function $e() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Me === null ? I.memoizedState = Me = e : Me = Me.next = e, Me;
  }
  function Ce() {
    if (de === null) {
      var e = I.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var a = Me === null ? I.memoizedState : Me.next;
    if (a !== null)
      Me = a, de = e;
    else {
      if (e === null)
        throw I.alternate === null ? Error(i(467)) : Error(i(310));
      de = e, e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null
      }, Me === null ? I.memoizedState = Me = e : Me = Me.next = e;
    }
    return Me;
  }
  function ds() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tr(e) {
    var a = ar;
    return ar += 1, mo === null && (mo = []), e = Zu(mo, e, a), a = I, (Me === null ? a.memoizedState : Me.next) === null && (a = a.alternate, z.H = a === null || a.memoizedState === null ? Nc : _c), e;
  }
  function dl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return tr(e);
      if (e.$$typeof === H) return Qe(e);
    }
    throw Error(i(438, String(e)));
  }
  function ms(e) {
    var a = null, t = I.updateQueue;
    if (t !== null && (a = t.memoCache), a == null) {
      var o = I.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (a = {
        data: o.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), t === null && (t = ds(), I.updateQueue = t), t.memoCache = a, t = a.data[a.index], t === void 0)
      for (t = a.data[a.index] = Array(e), o = 0; o < e; o++)
        t[o] = Ja;
    return a.index++, t;
  }
  function Ga(e, a) {
    return typeof a == "function" ? a(e) : a;
  }
  function ml(e) {
    var a = Ce();
    return fs(a, de, e);
  }
  function fs(e, a, t) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = t;
    var r = e.baseQueue, l = o.pending;
    if (l !== null) {
      if (r !== null) {
        var n = r.next;
        r.next = l.next, l.next = n;
      }
      a.baseQueue = r = l, o.pending = null;
    }
    if (l = e.baseState, r === null) e.memoizedState = l;
    else {
      a = r.next;
      var s = n = null, c = null, g = a, A = !1;
      do {
        var M = g.lane & -536870913;
        if (M !== g.lane ? (le & M) === M : (ot & M) === M) {
          var y = g.revertLane;
          if (y === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), M === so && (A = !0);
          else if ((ot & y) === y) {
            g = g.next, y === so && (A = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: g.revertLane,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, c === null ? (s = c = M, n = l) : c = c.next = M, I.lanes |= y, ct |= y;
          M = g.action, Rt && t(l, M), l = g.hasEagerState ? g.eagerState : t(l, M);
        } else
          y = {
            lane: M,
            revertLane: g.revertLane,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, c === null ? (s = c = y, n = l) : c = c.next = y, I.lanes |= M, ct |= M;
        g = g.next;
      } while (g !== null && g !== a);
      if (c === null ? n = l : c.next = s, !ta(l, e.memoizedState) && (Ne = !0, A && (t = io, t !== null)))
        throw t;
      e.memoizedState = l, e.baseState = n, e.baseQueue = c, o.lastRenderedState = l;
    }
    return r === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function ps(e) {
    var a = Ce(), t = a.queue;
    if (t === null) throw Error(i(311));
    t.lastRenderedReducer = e;
    var o = t.dispatch, r = t.pending, l = a.memoizedState;
    if (r !== null) {
      t.pending = null;
      var n = r = r.next;
      do
        l = e(l, n.action), n = n.next;
      while (n !== r);
      ta(l, a.memoizedState) || (Ne = !0), a.memoizedState = l, a.baseQueue === null && (a.baseState = l), t.lastRenderedState = l;
    }
    return [l, o];
  }
  function ac(e, a, t) {
    var o = I, r = Ce(), l = ie;
    if (l) {
      if (t === void 0) throw Error(i(407));
      t = t();
    } else t = a();
    var n = !ta(
      (de || r).memoizedState,
      t
    );
    n && (r.memoizedState = t, Ne = !0), r = r.queue;
    var s = rc.bind(null, o, r, e);
    if (or(2048, 8, s, [e]), r.getSnapshot !== a || n || Me !== null && Me.memoizedState.tag & 1) {
      if (o.flags |= 2048, fo(
        9,
        fl(),
        oc.bind(
          null,
          o,
          r,
          t,
          a
        ),
        null
      ), be === null) throw Error(i(349));
      l || (ot & 124) !== 0 || tc(o, a, t);
    }
    return t;
  }
  function tc(e, a, t) {
    e.flags |= 16384, e = { getSnapshot: a, value: t }, a = I.updateQueue, a === null ? (a = ds(), I.updateQueue = a, a.stores = [e]) : (t = a.stores, t === null ? a.stores = [e] : t.push(e));
  }
  function oc(e, a, t, o) {
    a.value = t, a.getSnapshot = o, lc(a) && nc(e);
  }
  function rc(e, a, t) {
    return t(function() {
      lc(a) && nc(e);
    });
  }
  function lc(e) {
    var a = e.getSnapshot;
    e = e.value;
    try {
      var t = a();
      return !ta(e, t);
    } catch {
      return !0;
    }
  }
  function nc(e) {
    var a = oo(e, 2);
    a !== null && ia(a, e, 2);
  }
  function hs(e) {
    var a = $e();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), Rt) {
        Wa(!0);
        try {
          t();
        } finally {
          Wa(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = e, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ga,
      lastRenderedState: e
    }, a;
  }
  function sc(e, a, t, o) {
    return e.baseState = t, fs(
      e,
      de,
      typeof o == "function" ? o : Ga
    );
  }
  function Ap(e, a, t, o, r) {
    if (hl(e)) throw Error(i(485));
    if (e = a.action, e !== null) {
      var l = {
        payload: r,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(n) {
          l.listeners.push(n);
        }
      };
      z.T !== null ? t(!0) : l.isTransition = !1, o(l), t = a.pending, t === null ? (l.next = a.pending = l, ic(a, l)) : (l.next = t.next, a.pending = t.next = l);
    }
  }
  function ic(e, a) {
    var t = a.action, o = a.payload, r = e.state;
    if (a.isTransition) {
      var l = z.T, n = {};
      z.T = n;
      try {
        var s = t(r, o), c = z.S;
        c !== null && c(n, s), uc(e, a, s);
      } catch (g) {
        vs(e, a, g);
      } finally {
        z.T = l;
      }
    } else
      try {
        l = t(r, o), uc(e, a, l);
      } catch (g) {
        vs(e, a, g);
      }
  }
  function uc(e, a, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(o) {
        cc(e, a, o);
      },
      function(o) {
        return vs(e, a, o);
      }
    ) : cc(e, a, t);
  }
  function cc(e, a, t) {
    a.status = "fulfilled", a.value = t, dc(a), e.state = t, a = e.pending, a !== null && (t = a.next, t === a ? e.pending = null : (t = t.next, a.next = t, ic(e, t)));
  }
  function vs(e, a, t) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        a.status = "rejected", a.reason = t, dc(a), a = a.next;
      while (a !== o);
    }
    e.action = null;
  }
  function dc(e) {
    e = e.listeners;
    for (var a = 0; a < e.length; a++) (0, e[a])();
  }
  function mc(e, a) {
    return a;
  }
  function fc(e, a) {
    if (ie) {
      var t = be.formState;
      if (t !== null) {
        e: {
          var o = I;
          if (ie) {
            if (Ee) {
              a: {
                for (var r = Ee, l = qa; r.nodeType !== 8; ) {
                  if (!l) {
                    r = null;
                    break a;
                  }
                  if (r = Sa(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break a;
                  }
                }
                l = r.data, r = l === "F!" || l === "F" ? r : null;
              }
              if (r) {
                Ee = Sa(
                  r.nextSibling
                ), o = r.data === "F!";
                break e;
              }
            }
            jt(o);
          }
          o = !1;
        }
        o && (a = t[0]);
      }
    }
    return t = $e(), t.memoizedState = t.baseState = a, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mc,
      lastRenderedState: a
    }, t.queue = o, t = Dc.bind(
      null,
      I,
      o
    ), o.dispatch = t, o = hs(!1), l = xs.bind(
      null,
      I,
      !1,
      o.queue
    ), o = $e(), r = {
      state: a,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = r, t = Ap.bind(
      null,
      I,
      r,
      l,
      t
    ), r.dispatch = t, o.memoizedState = e, [a, t, !1];
  }
  function pc(e) {
    var a = Ce();
    return hc(a, de, e);
  }
  function hc(e, a, t) {
    if (a = fs(
      e,
      a,
      mc
    )[0], e = ml(Ga)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var o = tr(a);
      } catch (n) {
        throw n === Wo ? nl : n;
      }
    else o = a;
    a = Ce();
    var r = a.queue, l = r.dispatch;
    return t !== a.memoizedState && (I.flags |= 2048, fo(
      9,
      fl(),
      zp.bind(null, r, t),
      null
    )), [o, l, e];
  }
  function zp(e, a) {
    e.action = a;
  }
  function vc(e) {
    var a = Ce(), t = de;
    if (t !== null)
      return hc(a, t, e);
    Ce(), a = a.memoizedState, t = Ce();
    var o = t.queue.dispatch;
    return t.memoizedState = e, [a, o, !1];
  }
  function fo(e, a, t, o) {
    return e = { tag: e, create: t, deps: o, inst: a, next: null }, a = I.updateQueue, a === null && (a = ds(), I.updateQueue = a), t = a.lastEffect, t === null ? a.lastEffect = e.next = e : (o = t.next, t.next = e, e.next = o, a.lastEffect = e), e;
  }
  function fl() {
    return { destroy: void 0, resource: void 0 };
  }
  function gc() {
    return Ce().memoizedState;
  }
  function pl(e, a, t, o) {
    var r = $e();
    o = o === void 0 ? null : o, I.flags |= e, r.memoizedState = fo(
      1 | a,
      fl(),
      t,
      o
    );
  }
  function or(e, a, t, o) {
    var r = Ce();
    o = o === void 0 ? null : o;
    var l = r.memoizedState.inst;
    de !== null && o !== null && ns(o, de.memoizedState.deps) ? r.memoizedState = fo(a, l, t, o) : (I.flags |= e, r.memoizedState = fo(
      1 | a,
      l,
      t,
      o
    ));
  }
  function bc(e, a) {
    pl(8390656, 8, e, a);
  }
  function yc(e, a) {
    or(2048, 8, e, a);
  }
  function Tc(e, a) {
    return or(4, 2, e, a);
  }
  function xc(e, a) {
    return or(4, 4, e, a);
  }
  function Sc(e, a) {
    if (typeof a == "function") {
      e = e();
      var t = a(e);
      return function() {
        typeof t == "function" ? t() : a(null);
      };
    }
    if (a != null)
      return e = e(), a.current = e, function() {
        a.current = null;
      };
  }
  function Ec(e, a, t) {
    t = t != null ? t.concat([e]) : null, or(4, 4, Sc.bind(null, a, e), t);
  }
  function gs() {
  }
  function qc(e, a) {
    var t = Ce();
    a = a === void 0 ? null : a;
    var o = t.memoizedState;
    return a !== null && ns(a, o[1]) ? o[0] : (t.memoizedState = [e, a], e);
  }
  function Ac(e, a) {
    var t = Ce();
    a = a === void 0 ? null : a;
    var o = t.memoizedState;
    if (a !== null && ns(a, o[1]))
      return o[0];
    if (o = e(), Rt) {
      Wa(!0);
      try {
        e();
      } finally {
        Wa(!1);
      }
    }
    return t.memoizedState = [o, a], o;
  }
  function bs(e, a, t) {
    return t === void 0 || (ot & 1073741824) !== 0 ? e.memoizedState = a : (e.memoizedState = t, e = Md(), I.lanes |= e, ct |= e, t);
  }
  function zc(e, a, t, o) {
    return ta(t, a) ? t : uo.current !== null ? (e = bs(e, t, o), ta(e, a) || (Ne = !0), e) : (ot & 42) === 0 ? (Ne = !0, e.memoizedState = t) : (e = Md(), I.lanes |= e, ct |= e, a);
  }
  function Oc(e, a, t, o, r) {
    var l = R.p;
    R.p = l !== 0 && 8 > l ? l : 8;
    var n = z.T, s = {};
    z.T = s, xs(e, !1, a, t);
    try {
      var c = r(), g = z.S;
      if (g !== null && g(s, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var A = Sp(
          c,
          o
        );
        rr(
          e,
          a,
          A,
          sa(e)
        );
      } else
        rr(
          e,
          a,
          o,
          sa(e)
        );
    } catch (M) {
      rr(
        e,
        a,
        { then: function() {
        }, status: "rejected", reason: M },
        sa()
      );
    } finally {
      R.p = l, z.T = n;
    }
  }
  function Op() {
  }
  function ys(e, a, t, o) {
    if (e.tag !== 5) throw Error(i(476));
    var r = Mc(e).queue;
    Oc(
      e,
      r,
      a,
      Q,
      t === null ? Op : function() {
        return Cc(e), t(o);
      }
    );
  }
  function Mc(e) {
    var a = e.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ga,
        lastRenderedState: Q
      },
      next: null
    };
    var t = {};
    return a.next = {
      memoizedState: t,
      baseState: t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ga,
        lastRenderedState: t
      },
      next: null
    }, e.memoizedState = a, e = e.alternate, e !== null && (e.memoizedState = a), a;
  }
  function Cc(e) {
    var a = Mc(e).next.queue;
    rr(e, a, {}, sa());
  }
  function Ts() {
    return Qe(Sr);
  }
  function jc() {
    return Ce().memoizedState;
  }
  function kc() {
    return Ce().memoizedState;
  }
  function Mp(e) {
    for (var a = e.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var t = sa();
          e = at(t);
          var o = tt(a, e, t);
          o !== null && (ia(o, a, t), Io(o, a, t)), a = { cache: Wn() }, e.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function Cp(e, a, t) {
    var o = sa();
    t = {
      lane: o,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hl(e) ? wc(a, t) : (t = Bn(e, a, t, o), t !== null && (ia(t, e, o), Rc(t, a, o)));
  }
  function Dc(e, a, t) {
    var o = sa();
    rr(e, a, t, o);
  }
  function rr(e, a, t, o) {
    var r = {
      lane: o,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hl(e)) wc(a, r);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = a.lastRenderedReducer, l !== null))
        try {
          var n = a.lastRenderedState, s = l(n, t);
          if (r.hasEagerState = !0, r.eagerState = s, ta(s, n))
            return Ir(e, a, r, 0), be === null && Fr(), !1;
        } catch {
        } finally {
        }
      if (t = Bn(e, a, r, o), t !== null)
        return ia(t, e, o), Rc(t, a, o), !0;
    }
    return !1;
  }
  function xs(e, a, t, o) {
    if (o = {
      lane: 2,
      revertLane: Ps(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hl(e)) {
      if (a) throw Error(i(479));
    } else
      a = Bn(
        e,
        t,
        o,
        2
      ), a !== null && ia(a, e, 2);
  }
  function hl(e) {
    var a = e.alternate;
    return e === I || a !== null && a === I;
  }
  function wc(e, a) {
    co = ul = !0;
    var t = e.pending;
    t === null ? a.next = a : (a.next = t.next, t.next = a), e.pending = a;
  }
  function Rc(e, a, t) {
    if ((t & 4194048) !== 0) {
      var o = a.lanes;
      o &= e.pendingLanes, t |= o, a.lanes = t, Yi(e, t);
    }
  }
  var vl = {
    readContext: Qe,
    use: dl,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useLayoutEffect: ze,
    useInsertionEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useSyncExternalStore: ze,
    useId: ze,
    useHostTransitionStatus: ze,
    useFormState: ze,
    useActionState: ze,
    useOptimistic: ze,
    useMemoCache: ze,
    useCacheRefresh: ze
  }, Nc = {
    readContext: Qe,
    use: dl,
    useCallback: function(e, a) {
      return $e().memoizedState = [
        e,
        a === void 0 ? null : a
      ], e;
    },
    useContext: Qe,
    useEffect: bc,
    useImperativeHandle: function(e, a, t) {
      t = t != null ? t.concat([e]) : null, pl(
        4194308,
        4,
        Sc.bind(null, a, e),
        t
      );
    },
    useLayoutEffect: function(e, a) {
      return pl(4194308, 4, e, a);
    },
    useInsertionEffect: function(e, a) {
      pl(4, 2, e, a);
    },
    useMemo: function(e, a) {
      var t = $e();
      a = a === void 0 ? null : a;
      var o = e();
      if (Rt) {
        Wa(!0);
        try {
          e();
        } finally {
          Wa(!1);
        }
      }
      return t.memoizedState = [o, a], o;
    },
    useReducer: function(e, a, t) {
      var o = $e();
      if (t !== void 0) {
        var r = t(a);
        if (Rt) {
          Wa(!0);
          try {
            t(a);
          } finally {
            Wa(!1);
          }
        }
      } else r = a;
      return o.memoizedState = o.baseState = r, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: r
      }, o.queue = e, e = e.dispatch = Cp.bind(
        null,
        I,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var a = $e();
      return e = { current: e }, a.memoizedState = e;
    },
    useState: function(e) {
      e = hs(e);
      var a = e.queue, t = Dc.bind(null, I, a);
      return a.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: gs,
    useDeferredValue: function(e, a) {
      var t = $e();
      return bs(t, e, a);
    },
    useTransition: function() {
      var e = hs(!1);
      return e = Oc.bind(
        null,
        I,
        e.queue,
        !0,
        !1
      ), $e().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, a, t) {
      var o = I, r = $e();
      if (ie) {
        if (t === void 0)
          throw Error(i(407));
        t = t();
      } else {
        if (t = a(), be === null)
          throw Error(i(349));
        (le & 124) !== 0 || tc(o, a, t);
      }
      r.memoizedState = t;
      var l = { value: t, getSnapshot: a };
      return r.queue = l, bc(rc.bind(null, o, l, e), [
        e
      ]), o.flags |= 2048, fo(
        9,
        fl(),
        oc.bind(
          null,
          o,
          l,
          t,
          a
        ),
        null
      ), t;
    },
    useId: function() {
      var e = $e(), a = be.identifierPrefix;
      if (ie) {
        var t = _a, o = Na;
        t = (o & ~(1 << 32 - aa(o) - 1)).toString(32) + t, a = "«" + a + "R" + t, t = cl++, 0 < t && (a += "H" + t.toString(32)), a += "»";
      } else
        t = Ep++, a = "«" + a + "r" + t.toString(32) + "»";
      return e.memoizedState = a;
    },
    useHostTransitionStatus: Ts,
    useFormState: fc,
    useActionState: fc,
    useOptimistic: function(e) {
      var a = $e();
      a.memoizedState = a.baseState = e;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = t, a = xs.bind(
        null,
        I,
        !0,
        t
      ), t.dispatch = a, [e, a];
    },
    useMemoCache: ms,
    useCacheRefresh: function() {
      return $e().memoizedState = Mp.bind(
        null,
        I
      );
    }
  }, _c = {
    readContext: Qe,
    use: dl,
    useCallback: qc,
    useContext: Qe,
    useEffect: yc,
    useImperativeHandle: Ec,
    useInsertionEffect: Tc,
    useLayoutEffect: xc,
    useMemo: Ac,
    useReducer: ml,
    useRef: gc,
    useState: function() {
      return ml(Ga);
    },
    useDebugValue: gs,
    useDeferredValue: function(e, a) {
      var t = Ce();
      return zc(
        t,
        de.memoizedState,
        e,
        a
      );
    },
    useTransition: function() {
      var e = ml(Ga)[0], a = Ce().memoizedState;
      return [
        typeof e == "boolean" ? e : tr(e),
        a
      ];
    },
    useSyncExternalStore: ac,
    useId: jc,
    useHostTransitionStatus: Ts,
    useFormState: pc,
    useActionState: pc,
    useOptimistic: function(e, a) {
      var t = Ce();
      return sc(t, de, e, a);
    },
    useMemoCache: ms,
    useCacheRefresh: kc
  }, jp = {
    readContext: Qe,
    use: dl,
    useCallback: qc,
    useContext: Qe,
    useEffect: yc,
    useImperativeHandle: Ec,
    useInsertionEffect: Tc,
    useLayoutEffect: xc,
    useMemo: Ac,
    useReducer: ps,
    useRef: gc,
    useState: function() {
      return ps(Ga);
    },
    useDebugValue: gs,
    useDeferredValue: function(e, a) {
      var t = Ce();
      return de === null ? bs(t, e, a) : zc(
        t,
        de.memoizedState,
        e,
        a
      );
    },
    useTransition: function() {
      var e = ps(Ga)[0], a = Ce().memoizedState;
      return [
        typeof e == "boolean" ? e : tr(e),
        a
      ];
    },
    useSyncExternalStore: ac,
    useId: jc,
    useHostTransitionStatus: Ts,
    useFormState: vc,
    useActionState: vc,
    useOptimistic: function(e, a) {
      var t = Ce();
      return de !== null ? sc(t, de, e, a) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: ms,
    useCacheRefresh: kc
  }, po = null, lr = 0;
  function gl(e) {
    var a = lr;
    return lr += 1, po === null && (po = []), Zu(po, e, a);
  }
  function nr(e, a) {
    a = a.props.ref, e.ref = a !== void 0 ? a : null;
  }
  function bl(e, a) {
    throw a.$$typeof === L ? Error(i(525)) : (e = Object.prototype.toString.call(a), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : e
      )
    ));
  }
  function Uc(e) {
    var a = e._init;
    return a(e._payload);
  }
  function Hc(e) {
    function a(h, p) {
      if (e) {
        var v = h.deletions;
        v === null ? (h.deletions = [p], h.flags |= 16) : v.push(p);
      }
    }
    function t(h, p) {
      if (!e) return null;
      for (; p !== null; )
        a(h, p), p = p.sibling;
      return null;
    }
    function o(h) {
      for (var p = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
      return p;
    }
    function r(h, p) {
      return h = Ra(h, p), h.index = 0, h.sibling = null, h;
    }
    function l(h, p, v) {
      return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < p ? (h.flags |= 67108866, p) : v) : (h.flags |= 67108866, p)) : (h.flags |= 1048576, p);
    }
    function n(h) {
      return e && h.alternate === null && (h.flags |= 67108866), h;
    }
    function s(h, p, v, O) {
      return p === null || p.tag !== 6 ? (p = Yn(v, h.mode, O), p.return = h, p) : (p = r(p, v), p.return = h, p);
    }
    function c(h, p, v, O) {
      var _ = v.type;
      return _ === J ? A(
        h,
        p,
        v.props.children,
        O,
        v.key
      ) : p !== null && (p.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === je && Uc(_) === p.type) ? (p = r(p, v.props), nr(p, v), p.return = h, p) : (p = el(
        v.type,
        v.key,
        v.props,
        null,
        h.mode,
        O
      ), nr(p, v), p.return = h, p);
    }
    function g(h, p, v, O) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Ln(v, h.mode, O), p.return = h, p) : (p = r(p, v.children || []), p.return = h, p);
    }
    function A(h, p, v, O, _) {
      return p === null || p.tag !== 7 ? (p = zt(
        v,
        h.mode,
        O,
        _
      ), p.return = h, p) : (p = r(p, v), p.return = h, p);
    }
    function M(h, p, v) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = Yn(
          "" + p,
          h.mode,
          v
        ), p.return = h, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case K:
            return v = el(
              p.type,
              p.key,
              p.props,
              null,
              h.mode,
              v
            ), nr(v, p), v.return = h, v;
          case oe:
            return p = Ln(
              p,
              h.mode,
              v
            ), p.return = h, p;
          case je:
            var O = p._init;
            return p = O(p._payload), M(h, p, v);
        }
        if (Ye(p) || we(p))
          return p = zt(
            p,
            h.mode,
            v,
            null
          ), p.return = h, p;
        if (typeof p.then == "function")
          return M(h, gl(p), v);
        if (p.$$typeof === H)
          return M(
            h,
            rl(h, p),
            v
          );
        bl(h, p);
      }
      return null;
    }
    function y(h, p, v, O) {
      var _ = p !== null ? p.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return _ !== null ? null : s(h, p, "" + v, O);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case K:
            return v.key === _ ? c(h, p, v, O) : null;
          case oe:
            return v.key === _ ? g(h, p, v, O) : null;
          case je:
            return _ = v._init, v = _(v._payload), y(h, p, v, O);
        }
        if (Ye(v) || we(v))
          return _ !== null ? null : A(h, p, v, O, null);
        if (typeof v.then == "function")
          return y(
            h,
            p,
            gl(v),
            O
          );
        if (v.$$typeof === H)
          return y(
            h,
            p,
            rl(h, v),
            O
          );
        bl(h, v);
      }
      return null;
    }
    function T(h, p, v, O, _) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return h = h.get(v) || null, s(p, h, "" + O, _);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case K:
            return h = h.get(
              O.key === null ? v : O.key
            ) || null, c(p, h, O, _);
          case oe:
            return h = h.get(
              O.key === null ? v : O.key
            ) || null, g(p, h, O, _);
          case je:
            var ee = O._init;
            return O = ee(O._payload), T(
              h,
              p,
              v,
              O,
              _
            );
        }
        if (Ye(O) || we(O))
          return h = h.get(v) || null, A(p, h, O, _, null);
        if (typeof O.then == "function")
          return T(
            h,
            p,
            v,
            gl(O),
            _
          );
        if (O.$$typeof === H)
          return T(
            h,
            p,
            v,
            rl(p, O),
            _
          );
        bl(p, O);
      }
      return null;
    }
    function X(h, p, v, O) {
      for (var _ = null, ee = null, U = p, Y = p = 0, Ue = null; U !== null && Y < v.length; Y++) {
        U.index > Y ? (Ue = U, U = null) : Ue = U.sibling;
        var se = y(
          h,
          U,
          v[Y],
          O
        );
        if (se === null) {
          U === null && (U = Ue);
          break;
        }
        e && U && se.alternate === null && a(h, U), p = l(se, p, Y), ee === null ? _ = se : ee.sibling = se, ee = se, U = Ue;
      }
      if (Y === v.length)
        return t(h, U), ie && Mt(h, Y), _;
      if (U === null) {
        for (; Y < v.length; Y++)
          U = M(h, v[Y], O), U !== null && (p = l(
            U,
            p,
            Y
          ), ee === null ? _ = U : ee.sibling = U, ee = U);
        return ie && Mt(h, Y), _;
      }
      for (U = o(U); Y < v.length; Y++)
        Ue = T(
          U,
          h,
          Y,
          v[Y],
          O
        ), Ue !== null && (e && Ue.alternate !== null && U.delete(
          Ue.key === null ? Y : Ue.key
        ), p = l(
          Ue,
          p,
          Y
        ), ee === null ? _ = Ue : ee.sibling = Ue, ee = Ue);
      return e && U.forEach(function(yt) {
        return a(h, yt);
      }), ie && Mt(h, Y), _;
    }
    function V(h, p, v, O) {
      if (v == null) throw Error(i(151));
      for (var _ = null, ee = null, U = p, Y = p = 0, Ue = null, se = v.next(); U !== null && !se.done; Y++, se = v.next()) {
        U.index > Y ? (Ue = U, U = null) : Ue = U.sibling;
        var yt = y(h, U, se.value, O);
        if (yt === null) {
          U === null && (U = Ue);
          break;
        }
        e && U && yt.alternate === null && a(h, U), p = l(yt, p, Y), ee === null ? _ = yt : ee.sibling = yt, ee = yt, U = Ue;
      }
      if (se.done)
        return t(h, U), ie && Mt(h, Y), _;
      if (U === null) {
        for (; !se.done; Y++, se = v.next())
          se = M(h, se.value, O), se !== null && (p = l(se, p, Y), ee === null ? _ = se : ee.sibling = se, ee = se);
        return ie && Mt(h, Y), _;
      }
      for (U = o(U); !se.done; Y++, se = v.next())
        se = T(U, h, Y, se.value, O), se !== null && (e && se.alternate !== null && U.delete(se.key === null ? Y : se.key), p = l(se, p, Y), ee === null ? _ = se : ee.sibling = se, ee = se);
      return e && U.forEach(function(kh) {
        return a(h, kh);
      }), ie && Mt(h, Y), _;
    }
    function fe(h, p, v, O) {
      if (typeof v == "object" && v !== null && v.type === J && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case K:
            e: {
              for (var _ = v.key; p !== null; ) {
                if (p.key === _) {
                  if (_ = v.type, _ === J) {
                    if (p.tag === 7) {
                      t(
                        h,
                        p.sibling
                      ), O = r(
                        p,
                        v.props.children
                      ), O.return = h, h = O;
                      break e;
                    }
                  } else if (p.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === je && Uc(_) === p.type) {
                    t(
                      h,
                      p.sibling
                    ), O = r(p, v.props), nr(O, v), O.return = h, h = O;
                    break e;
                  }
                  t(h, p);
                  break;
                } else a(h, p);
                p = p.sibling;
              }
              v.type === J ? (O = zt(
                v.props.children,
                h.mode,
                O,
                v.key
              ), O.return = h, h = O) : (O = el(
                v.type,
                v.key,
                v.props,
                null,
                h.mode,
                O
              ), nr(O, v), O.return = h, h = O);
            }
            return n(h);
          case oe:
            e: {
              for (_ = v.key; p !== null; ) {
                if (p.key === _)
                  if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                    t(
                      h,
                      p.sibling
                    ), O = r(p, v.children || []), O.return = h, h = O;
                    break e;
                  } else {
                    t(h, p);
                    break;
                  }
                else a(h, p);
                p = p.sibling;
              }
              O = Ln(v, h.mode, O), O.return = h, h = O;
            }
            return n(h);
          case je:
            return _ = v._init, v = _(v._payload), fe(
              h,
              p,
              v,
              O
            );
        }
        if (Ye(v))
          return X(
            h,
            p,
            v,
            O
          );
        if (we(v)) {
          if (_ = we(v), typeof _ != "function") throw Error(i(150));
          return v = _.call(v), V(
            h,
            p,
            v,
            O
          );
        }
        if (typeof v.then == "function")
          return fe(
            h,
            p,
            gl(v),
            O
          );
        if (v.$$typeof === H)
          return fe(
            h,
            p,
            rl(h, v),
            O
          );
        bl(h, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, p !== null && p.tag === 6 ? (t(h, p.sibling), O = r(p, v), O.return = h, h = O) : (t(h, p), O = Yn(v, h.mode, O), O.return = h, h = O), n(h)) : t(h, p);
    }
    return function(h, p, v, O) {
      try {
        lr = 0;
        var _ = fe(
          h,
          p,
          v,
          O
        );
        return po = null, _;
      } catch (U) {
        if (U === Wo || U === nl) throw U;
        var ee = oa(29, U, null, h.mode);
        return ee.lanes = O, ee.return = h, ee;
      } finally {
      }
    };
  }
  var ho = Hc(!0), Gc = Hc(!1), va = k(null), Aa = null;
  function rt(e) {
    var a = e.alternate;
    w(De, De.current & 1), w(va, e), Aa === null && (a === null || uo.current !== null || a.memoizedState !== null) && (Aa = e);
  }
  function Bc(e) {
    if (e.tag === 22) {
      if (w(De, De.current), w(va, e), Aa === null) {
        var a = e.alternate;
        a !== null && a.memoizedState !== null && (Aa = e);
      }
    } else lt();
  }
  function lt() {
    w(De, De.current), w(va, va.current);
  }
  function Ba(e) {
    N(va), Aa === e && (Aa = null), N(De);
  }
  var De = k(0);
  function yl(e) {
    for (var a = e; a !== null; ) {
      if (a.tag === 13) {
        var t = a.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || mi(t)))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === e) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  function Ss(e, a, t, o) {
    a = e.memoizedState, t = t(o, a), t = t == null ? a : C({}, a, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Es = {
    enqueueSetState: function(e, a, t) {
      e = e._reactInternals;
      var o = sa(), r = at(o);
      r.payload = a, t != null && (r.callback = t), a = tt(e, r, o), a !== null && (ia(a, e, o), Io(a, e, o));
    },
    enqueueReplaceState: function(e, a, t) {
      e = e._reactInternals;
      var o = sa(), r = at(o);
      r.tag = 1, r.payload = a, t != null && (r.callback = t), a = tt(e, r, o), a !== null && (ia(a, e, o), Io(a, e, o));
    },
    enqueueForceUpdate: function(e, a) {
      e = e._reactInternals;
      var t = sa(), o = at(t);
      o.tag = 2, a != null && (o.callback = a), a = tt(e, o, t), a !== null && (ia(a, e, t), Io(a, e, t));
    }
  };
  function Vc(e, a, t, o, r, l, n) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, l, n) : a.prototype && a.prototype.isPureReactComponent ? !Yo(t, o) || !Yo(r, l) : !0;
  }
  function Yc(e, a, t, o) {
    e = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(t, o), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(t, o), a.state !== e && Es.enqueueReplaceState(a, a.state, null);
  }
  function Nt(e, a) {
    var t = a;
    if ("ref" in a) {
      t = {};
      for (var o in a)
        o !== "ref" && (t[o] = a[o]);
    }
    if (e = e.defaultProps) {
      t === a && (t = C({}, t));
      for (var r in e)
        t[r] === void 0 && (t[r] = e[r]);
    }
    return t;
  }
  var Tl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function Lc(e) {
    Tl(e);
  }
  function Qc(e) {
    console.error(e);
  }
  function Xc(e) {
    Tl(e);
  }
  function xl(e, a) {
    try {
      var t = e.onUncaughtError;
      t(a.value, { componentStack: a.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Kc(e, a, t) {
    try {
      var o = e.onCaughtError;
      o(t.value, {
        componentStack: t.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function qs(e, a, t) {
    return t = at(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      xl(e, a);
    }, t;
  }
  function Zc(e) {
    return e = at(e), e.tag = 3, e;
  }
  function Jc(e, a, t, o) {
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = o.value;
      e.payload = function() {
        return r(l);
      }, e.callback = function() {
        Kc(a, t, o);
      };
    }
    var n = t.stateNode;
    n !== null && typeof n.componentDidCatch == "function" && (e.callback = function() {
      Kc(a, t, o), typeof r != "function" && (dt === null ? dt = /* @__PURE__ */ new Set([this]) : dt.add(this));
      var s = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function kp(e, a, t, o, r) {
    if (t.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (a = t.alternate, a !== null && Zo(
        a,
        t,
        r,
        !0
      ), t = va.current, t !== null) {
        switch (t.tag) {
          case 13:
            return Aa === null ? Js() : t.alternate === null && qe === 0 && (qe = 3), t.flags &= -257, t.flags |= 65536, t.lanes = r, o === Pn ? t.flags |= 16384 : (a = t.updateQueue, a === null ? t.updateQueue = /* @__PURE__ */ new Set([o]) : a.add(o), Ws(e, o, r)), !1;
          case 22:
            return t.flags |= 65536, o === Pn ? t.flags |= 16384 : (a = t.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, t.updateQueue = a) : (t = a.retryQueue, t === null ? a.retryQueue = /* @__PURE__ */ new Set([o]) : t.add(o)), Ws(e, o, r)), !1;
        }
        throw Error(i(435, t.tag));
      }
      return Ws(e, o, r), Js(), !1;
    }
    if (ie)
      return a = va.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = r, o !== Kn && (e = Error(i(422), { cause: o }), Ko(ma(e, t)))) : (o !== Kn && (a = Error(i(423), {
        cause: o
      }), Ko(
        ma(a, t)
      )), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, o = ma(o, t), r = qs(
        e.stateNode,
        o,
        r
      ), ts(e, r), qe !== 4 && (qe = 2)), !1;
    var l = Error(i(520), { cause: o });
    if (l = ma(l, t), fr === null ? fr = [l] : fr.push(l), qe !== 4 && (qe = 2), a === null) return !0;
    o = ma(o, t), t = a;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = r & -r, t.lanes |= e, e = qs(t.stateNode, o, e), ts(t, e), !1;
        case 1:
          if (a = t.type, l = t.stateNode, (t.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || l !== null && typeof l.componentDidCatch == "function" && (dt === null || !dt.has(l))))
            return t.flags |= 65536, r &= -r, t.lanes |= r, r = Zc(r), Jc(
              r,
              e,
              t,
              o
            ), ts(t, r), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var $c = Error(i(461)), Ne = !1;
  function He(e, a, t, o) {
    a.child = e === null ? Gc(a, null, t, o) : ho(
      a,
      e.child,
      t,
      o
    );
  }
  function Wc(e, a, t, o, r) {
    t = t.render;
    var l = a.ref;
    if ("ref" in o) {
      var n = {};
      for (var s in o)
        s !== "ref" && (n[s] = o[s]);
    } else n = o;
    return Dt(a), o = ss(
      e,
      a,
      t,
      n,
      l,
      r
    ), s = is(), e !== null && !Ne ? (us(e, a, r), Va(e, a, r)) : (ie && s && Qn(a), a.flags |= 1, He(e, a, o, r), a.child);
  }
  function Fc(e, a, t, o, r) {
    if (e === null) {
      var l = t.type;
      return typeof l == "function" && !Vn(l) && l.defaultProps === void 0 && t.compare === null ? (a.tag = 15, a.type = l, Ic(
        e,
        a,
        l,
        o,
        r
      )) : (e = el(
        t.type,
        null,
        o,
        a,
        a.mode,
        r
      ), e.ref = a.ref, e.return = a, a.child = e);
    }
    if (l = e.child, !Ds(e, r)) {
      var n = l.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Yo, t(n, o) && e.ref === a.ref)
        return Va(e, a, r);
    }
    return a.flags |= 1, e = Ra(l, o), e.ref = a.ref, e.return = a, a.child = e;
  }
  function Ic(e, a, t, o, r) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Yo(l, o) && e.ref === a.ref)
        if (Ne = !1, a.pendingProps = o = l, Ds(e, r))
          (e.flags & 131072) !== 0 && (Ne = !0);
        else
          return a.lanes = e.lanes, Va(e, a, r);
    }
    return As(
      e,
      a,
      t,
      o,
      r
    );
  }
  function Pc(e, a, t) {
    var o = a.pendingProps, r = o.children, l = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (o = l !== null ? l.baseLanes | t : t, e !== null) {
          for (r = a.child = e.child, l = 0; r !== null; )
            l = l | r.lanes | r.childLanes, r = r.sibling;
          a.childLanes = l & ~o;
        } else a.childLanes = 0, a.child = null;
        return ed(
          e,
          a,
          o,
          t
        );
      }
      if ((t & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ll(
          a,
          l !== null ? l.cachePool : null
        ), l !== null ? Iu(a, l) : rs(), Bc(a);
      else
        return a.lanes = a.childLanes = 536870912, ed(
          e,
          a,
          l !== null ? l.baseLanes | t : t,
          t
        );
    } else
      l !== null ? (ll(a, l.cachePool), Iu(a, l), lt(), a.memoizedState = null) : (e !== null && ll(a, null), rs(), lt());
    return He(e, a, r, t), a.child;
  }
  function ed(e, a, t, o) {
    var r = In();
    return r = r === null ? null : { parent: ke._currentValue, pool: r }, a.memoizedState = {
      baseLanes: t,
      cachePool: r
    }, e !== null && ll(a, null), rs(), Bc(a), e !== null && Zo(e, a, o, !0), null;
  }
  function Sl(e, a) {
    var t = a.ref;
    if (t === null)
      e !== null && e.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(i(284));
      (e === null || e.ref !== t) && (a.flags |= 4194816);
    }
  }
  function As(e, a, t, o, r) {
    return Dt(a), t = ss(
      e,
      a,
      t,
      o,
      void 0,
      r
    ), o = is(), e !== null && !Ne ? (us(e, a, r), Va(e, a, r)) : (ie && o && Qn(a), a.flags |= 1, He(e, a, t, r), a.child);
  }
  function ad(e, a, t, o, r, l) {
    return Dt(a), a.updateQueue = null, t = ec(
      a,
      o,
      t,
      r
    ), Pu(e), o = is(), e !== null && !Ne ? (us(e, a, l), Va(e, a, l)) : (ie && o && Qn(a), a.flags |= 1, He(e, a, t, l), a.child);
  }
  function td(e, a, t, o, r) {
    if (Dt(a), a.stateNode === null) {
      var l = ro, n = t.contextType;
      typeof n == "object" && n !== null && (l = Qe(n)), l = new t(o, l), a.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, l.updater = Es, a.stateNode = l, l._reactInternals = a, l = a.stateNode, l.props = o, l.state = a.memoizedState, l.refs = {}, es(a), n = t.contextType, l.context = typeof n == "object" && n !== null ? Qe(n) : ro, l.state = a.memoizedState, n = t.getDerivedStateFromProps, typeof n == "function" && (Ss(
        a,
        t,
        n,
        o
      ), l.state = a.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && Es.enqueueReplaceState(l, l.state, null), er(a, o, l, r), Po(), l.state = a.memoizedState), typeof l.componentDidMount == "function" && (a.flags |= 4194308), o = !0;
    } else if (e === null) {
      l = a.stateNode;
      var s = a.memoizedProps, c = Nt(t, s);
      l.props = c;
      var g = l.context, A = t.contextType;
      n = ro, typeof A == "object" && A !== null && (n = Qe(A));
      var M = t.getDerivedStateFromProps;
      A = typeof M == "function" || typeof l.getSnapshotBeforeUpdate == "function", s = a.pendingProps !== s, A || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s || g !== n) && Yc(
        a,
        l,
        o,
        n
      ), et = !1;
      var y = a.memoizedState;
      l.state = y, er(a, o, l, r), Po(), g = a.memoizedState, s || y !== g || et ? (typeof M == "function" && (Ss(
        a,
        t,
        M,
        o
      ), g = a.memoizedState), (c = et || Vc(
        a,
        t,
        c,
        o,
        y,
        g,
        n
      )) ? (A || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = o, a.memoizedState = g), l.props = o, l.state = g, l.context = n, o = c) : (typeof l.componentDidMount == "function" && (a.flags |= 4194308), o = !1);
    } else {
      l = a.stateNode, as(e, a), n = a.memoizedProps, A = Nt(t, n), l.props = A, M = a.pendingProps, y = l.context, g = t.contextType, c = ro, typeof g == "object" && g !== null && (c = Qe(g)), s = t.getDerivedStateFromProps, (g = typeof s == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (n !== M || y !== c) && Yc(
        a,
        l,
        o,
        c
      ), et = !1, y = a.memoizedState, l.state = y, er(a, o, l, r), Po();
      var T = a.memoizedState;
      n !== M || y !== T || et || e !== null && e.dependencies !== null && ol(e.dependencies) ? (typeof s == "function" && (Ss(
        a,
        t,
        s,
        o
      ), T = a.memoizedState), (A = et || Vc(
        a,
        t,
        A,
        o,
        y,
        T,
        c
      ) || e !== null && e.dependencies !== null && ol(e.dependencies)) ? (g || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(o, T, c), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(
        o,
        T,
        c
      )), typeof l.componentDidUpdate == "function" && (a.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || n === e.memoizedProps && y === e.memoizedState || (a.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || n === e.memoizedProps && y === e.memoizedState || (a.flags |= 1024), a.memoizedProps = o, a.memoizedState = T), l.props = o, l.state = T, l.context = c, o = A) : (typeof l.componentDidUpdate != "function" || n === e.memoizedProps && y === e.memoizedState || (a.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || n === e.memoizedProps && y === e.memoizedState || (a.flags |= 1024), o = !1);
    }
    return l = o, Sl(e, a), o = (a.flags & 128) !== 0, l || o ? (l = a.stateNode, t = o && typeof t.getDerivedStateFromError != "function" ? null : l.render(), a.flags |= 1, e !== null && o ? (a.child = ho(
      a,
      e.child,
      null,
      r
    ), a.child = ho(
      a,
      null,
      t,
      r
    )) : He(e, a, t, r), a.memoizedState = l.state, e = a.child) : e = Va(
      e,
      a,
      r
    ), e;
  }
  function od(e, a, t, o) {
    return Xo(), a.flags |= 256, He(e, a, t, o), a.child;
  }
  var zs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Os(e) {
    return { baseLanes: e, cachePool: Qu() };
  }
  function Ms(e, a, t) {
    return e = e !== null ? e.childLanes & ~t : 0, a && (e |= ga), e;
  }
  function rd(e, a, t) {
    var o = a.pendingProps, r = !1, l = (a.flags & 128) !== 0, n;
    if ((n = l) || (n = e !== null && e.memoizedState === null ? !1 : (De.current & 2) !== 0), n && (r = !0, a.flags &= -129), n = (a.flags & 32) !== 0, a.flags &= -33, e === null) {
      if (ie) {
        if (r ? rt(a) : lt(), ie) {
          var s = Ee, c;
          if (c = s) {
            e: {
              for (c = s, s = qa; c.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break e;
                }
                if (c = Sa(
                  c.nextSibling
                ), c === null) {
                  s = null;
                  break e;
                }
              }
              s = c;
            }
            s !== null ? (a.memoizedState = {
              dehydrated: s,
              treeContext: Ot !== null ? { id: Na, overflow: _a } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, c = oa(
              18,
              null,
              null,
              0
            ), c.stateNode = s, c.return = a, a.child = c, Ke = a, Ee = null, c = !0) : c = !1;
          }
          c || jt(a);
        }
        if (s = a.memoizedState, s !== null && (s = s.dehydrated, s !== null))
          return mi(s) ? a.lanes = 32 : a.lanes = 536870912, null;
        Ba(a);
      }
      return s = o.children, o = o.fallback, r ? (lt(), r = a.mode, s = El(
        { mode: "hidden", children: s },
        r
      ), o = zt(
        o,
        r,
        t,
        null
      ), s.return = a, o.return = a, s.sibling = o, a.child = s, r = a.child, r.memoizedState = Os(t), r.childLanes = Ms(
        e,
        n,
        t
      ), a.memoizedState = zs, o) : (rt(a), Cs(a, s));
    }
    if (c = e.memoizedState, c !== null && (s = c.dehydrated, s !== null)) {
      if (l)
        a.flags & 256 ? (rt(a), a.flags &= -257, a = js(
          e,
          a,
          t
        )) : a.memoizedState !== null ? (lt(), a.child = e.child, a.flags |= 128, a = null) : (lt(), r = o.fallback, s = a.mode, o = El(
          { mode: "visible", children: o.children },
          s
        ), r = zt(
          r,
          s,
          t,
          null
        ), r.flags |= 2, o.return = a, r.return = a, o.sibling = r, a.child = o, ho(
          a,
          e.child,
          null,
          t
        ), o = a.child, o.memoizedState = Os(t), o.childLanes = Ms(
          e,
          n,
          t
        ), a.memoizedState = zs, a = r);
      else if (rt(a), mi(s)) {
        if (n = s.nextSibling && s.nextSibling.dataset, n) var g = n.dgst;
        n = g, o = Error(i(419)), o.stack = "", o.digest = n, Ko({ value: o, source: null, stack: null }), a = js(
          e,
          a,
          t
        );
      } else if (Ne || Zo(e, a, t, !1), n = (t & e.childLanes) !== 0, Ne || n) {
        if (n = be, n !== null && (o = t & -t, o = (o & 42) !== 0 ? 1 : mn(o), o = (o & (n.suspendedLanes | t)) !== 0 ? 0 : o, o !== 0 && o !== c.retryLane))
          throw c.retryLane = o, oo(e, o), ia(n, e, o), $c;
        s.data === "$?" || Js(), a = js(
          e,
          a,
          t
        );
      } else
        s.data === "$?" ? (a.flags |= 192, a.child = e.child, a = null) : (e = c.treeContext, Ee = Sa(
          s.nextSibling
        ), Ke = a, ie = !0, Ct = null, qa = !1, e !== null && (pa[ha++] = Na, pa[ha++] = _a, pa[ha++] = Ot, Na = e.id, _a = e.overflow, Ot = a), a = Cs(
          a,
          o.children
        ), a.flags |= 4096);
      return a;
    }
    return r ? (lt(), r = o.fallback, s = a.mode, c = e.child, g = c.sibling, o = Ra(c, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = c.subtreeFlags & 65011712, g !== null ? r = Ra(g, r) : (r = zt(
      r,
      s,
      t,
      null
    ), r.flags |= 2), r.return = a, o.return = a, o.sibling = r, a.child = o, o = r, r = a.child, s = e.child.memoizedState, s === null ? s = Os(t) : (c = s.cachePool, c !== null ? (g = ke._currentValue, c = c.parent !== g ? { parent: g, pool: g } : c) : c = Qu(), s = {
      baseLanes: s.baseLanes | t,
      cachePool: c
    }), r.memoizedState = s, r.childLanes = Ms(
      e,
      n,
      t
    ), a.memoizedState = zs, o) : (rt(a), t = e.child, e = t.sibling, t = Ra(t, {
      mode: "visible",
      children: o.children
    }), t.return = a, t.sibling = null, e !== null && (n = a.deletions, n === null ? (a.deletions = [e], a.flags |= 16) : n.push(e)), a.child = t, a.memoizedState = null, t);
  }
  function Cs(e, a) {
    return a = El(
      { mode: "visible", children: a },
      e.mode
    ), a.return = e, e.child = a;
  }
  function El(e, a) {
    return e = oa(22, e, null, a), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function js(e, a, t) {
    return ho(a, e.child, null, t), e = Cs(
      a,
      a.pendingProps.children
    ), e.flags |= 2, a.memoizedState = null, e;
  }
  function ld(e, a, t) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a), Jn(e.return, a, t);
  }
  function ks(e, a, t, o, r) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: t,
      tailMode: r
    } : (l.isBackwards = a, l.rendering = null, l.renderingStartTime = 0, l.last = o, l.tail = t, l.tailMode = r);
  }
  function nd(e, a, t) {
    var o = a.pendingProps, r = o.revealOrder, l = o.tail;
    if (He(e, a, o.children, t), o = De.current, (o & 2) !== 0)
      o = o & 1 | 2, a.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = a.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ld(e, t, a);
          else if (e.tag === 19)
            ld(e, t, a);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === a) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === a)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      o &= 1;
    }
    switch (w(De, o), r) {
      case "forwards":
        for (t = a.child, r = null; t !== null; )
          e = t.alternate, e !== null && yl(e) === null && (r = t), t = t.sibling;
        t = r, t === null ? (r = a.child, a.child = null) : (r = t.sibling, t.sibling = null), ks(
          a,
          !1,
          r,
          t,
          l
        );
        break;
      case "backwards":
        for (t = null, r = a.child, a.child = null; r !== null; ) {
          if (e = r.alternate, e !== null && yl(e) === null) {
            a.child = r;
            break;
          }
          e = r.sibling, r.sibling = t, t = r, r = e;
        }
        ks(
          a,
          !0,
          t,
          null,
          l
        );
        break;
      case "together":
        ks(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Va(e, a, t) {
    if (e !== null && (a.dependencies = e.dependencies), ct |= a.lanes, (t & a.childLanes) === 0)
      if (e !== null) {
        if (Zo(
          e,
          a,
          t,
          !1
        ), (t & a.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && a.child !== e.child)
      throw Error(i(153));
    if (a.child !== null) {
      for (e = a.child, t = Ra(e, e.pendingProps), a.child = t, t.return = a; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Ra(e, e.pendingProps), t.return = a;
      t.sibling = null;
    }
    return a.child;
  }
  function Ds(e, a) {
    return (e.lanes & a) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ol(e)));
  }
  function Dp(e, a, t) {
    switch (a.tag) {
      case 3:
        ye(a, a.stateNode.containerInfo), Pa(a, ke, e.memoizedState.cache), Xo();
        break;
      case 27:
      case 5:
        nn(a);
        break;
      case 4:
        ye(a, a.stateNode.containerInfo);
        break;
      case 10:
        Pa(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 13:
        var o = a.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (rt(a), a.flags |= 128, null) : (t & a.child.childLanes) !== 0 ? rd(e, a, t) : (rt(a), e = Va(
            e,
            a,
            t
          ), e !== null ? e.sibling : null);
        rt(a);
        break;
      case 19:
        var r = (e.flags & 128) !== 0;
        if (o = (t & a.childLanes) !== 0, o || (Zo(
          e,
          a,
          t,
          !1
        ), o = (t & a.childLanes) !== 0), r) {
          if (o)
            return nd(
              e,
              a,
              t
            );
          a.flags |= 128;
        }
        if (r = a.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), w(De, De.current), o) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, Pc(e, a, t);
      case 24:
        Pa(a, ke, e.memoizedState.cache);
    }
    return Va(e, a, t);
  }
  function sd(e, a, t) {
    if (e !== null)
      if (e.memoizedProps !== a.pendingProps)
        Ne = !0;
      else {
        if (!Ds(e, t) && (a.flags & 128) === 0)
          return Ne = !1, Dp(
            e,
            a,
            t
          );
        Ne = (e.flags & 131072) !== 0;
      }
    else
      Ne = !1, ie && (a.flags & 1048576) !== 0 && Uu(a, tl, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        e: {
          e = a.pendingProps;
          var o = a.elementType, r = o._init;
          if (o = r(o._payload), a.type = o, typeof o == "function")
            Vn(o) ? (e = Nt(o, e), a.tag = 1, a = td(
              null,
              a,
              o,
              e,
              t
            )) : (a.tag = 0, a = As(
              null,
              a,
              o,
              e,
              t
            ));
          else {
            if (o != null) {
              if (r = o.$$typeof, r === W) {
                a.tag = 11, a = Wc(
                  null,
                  a,
                  o,
                  e,
                  t
                );
                break e;
              } else if (r === Ae) {
                a.tag = 14, a = Fc(
                  null,
                  a,
                  o,
                  e,
                  t
                );
                break e;
              }
            }
            throw a = Tt(o) || o, Error(i(306, a, ""));
          }
        }
        return a;
      case 0:
        return As(
          e,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 1:
        return o = a.type, r = Nt(
          o,
          a.pendingProps
        ), td(
          e,
          a,
          o,
          r,
          t
        );
      case 3:
        e: {
          if (ye(
            a,
            a.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          o = a.pendingProps;
          var l = a.memoizedState;
          r = l.element, as(e, a), er(a, o, null, t);
          var n = a.memoizedState;
          if (o = n.cache, Pa(a, ke, o), o !== l.cache && $n(
            a,
            [ke],
            t,
            !0
          ), Po(), o = n.element, l.isDehydrated)
            if (l = {
              element: o,
              isDehydrated: !1,
              cache: n.cache
            }, a.updateQueue.baseState = l, a.memoizedState = l, a.flags & 256) {
              a = od(
                e,
                a,
                o,
                t
              );
              break e;
            } else if (o !== r) {
              r = ma(
                Error(i(424)),
                a
              ), Ko(r), a = od(
                e,
                a,
                o,
                t
              );
              break e;
            } else {
              switch (e = a.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ee = Sa(e.firstChild), Ke = a, ie = !0, Ct = null, qa = !0, t = Gc(
                a,
                null,
                o,
                t
              ), a.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
            }
          else {
            if (Xo(), o === r) {
              a = Va(
                e,
                a,
                t
              );
              break e;
            }
            He(
              e,
              a,
              o,
              t
            );
          }
          a = a.child;
        }
        return a;
      case 26:
        return Sl(e, a), e === null ? (t = dm(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = t : ie || (t = a.type, e = a.pendingProps, o = Ul(
          Z.current
        ).createElement(t), o[Le] = a, o[Ze] = e, Be(o, t, e), Re(o), a.stateNode = o) : a.memoizedState = dm(
          a.type,
          e.memoizedProps,
          a.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return nn(a), e === null && ie && (o = a.stateNode = im(
          a.type,
          a.pendingProps,
          Z.current
        ), Ke = a, qa = !0, r = Ee, pt(a.type) ? (fi = r, Ee = Sa(
          o.firstChild
        )) : Ee = r), He(
          e,
          a,
          a.pendingProps.children,
          t
        ), Sl(e, a), e === null && (a.flags |= 4194304), a.child;
      case 5:
        return e === null && ie && ((r = o = Ee) && (o = nh(
          o,
          a.type,
          a.pendingProps,
          qa
        ), o !== null ? (a.stateNode = o, Ke = a, Ee = Sa(
          o.firstChild
        ), qa = !1, r = !0) : r = !1), r || jt(a)), nn(a), r = a.type, l = a.pendingProps, n = e !== null ? e.memoizedProps : null, o = l.children, ii(r, l) ? o = null : n !== null && ii(r, n) && (a.flags |= 32), a.memoizedState !== null && (r = ss(
          e,
          a,
          qp,
          null,
          null,
          t
        ), Sr._currentValue = r), Sl(e, a), He(e, a, o, t), a.child;
      case 6:
        return e === null && ie && ((e = t = Ee) && (t = sh(
          t,
          a.pendingProps,
          qa
        ), t !== null ? (a.stateNode = t, Ke = a, Ee = null, e = !0) : e = !1), e || jt(a)), null;
      case 13:
        return rd(e, a, t);
      case 4:
        return ye(
          a,
          a.stateNode.containerInfo
        ), o = a.pendingProps, e === null ? a.child = ho(
          a,
          null,
          o,
          t
        ) : He(
          e,
          a,
          o,
          t
        ), a.child;
      case 11:
        return Wc(
          e,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 7:
        return He(
          e,
          a,
          a.pendingProps,
          t
        ), a.child;
      case 8:
        return He(
          e,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 12:
        return He(
          e,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 10:
        return o = a.pendingProps, Pa(a, a.type, o.value), He(
          e,
          a,
          o.children,
          t
        ), a.child;
      case 9:
        return r = a.type._context, o = a.pendingProps.children, Dt(a), r = Qe(r), o = o(r), a.flags |= 1, He(e, a, o, t), a.child;
      case 14:
        return Fc(
          e,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 15:
        return Ic(
          e,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 19:
        return nd(e, a, t);
      case 31:
        return o = a.pendingProps, t = a.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (t = El(
          o,
          t
        ), t.ref = a.ref, a.child = t, t.return = a, a = t) : (t = Ra(e.child, o), t.ref = a.ref, a.child = t, t.return = a, a = t), a;
      case 22:
        return Pc(e, a, t);
      case 24:
        return Dt(a), o = Qe(ke), e === null ? (r = In(), r === null && (r = be, l = Wn(), r.pooledCache = l, l.refCount++, l !== null && (r.pooledCacheLanes |= t), r = l), a.memoizedState = {
          parent: o,
          cache: r
        }, es(a), Pa(a, ke, r)) : ((e.lanes & t) !== 0 && (as(e, a), er(a, null, null, t), Po()), r = e.memoizedState, l = a.memoizedState, r.parent !== o ? (r = { parent: o, cache: o }, a.memoizedState = r, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = r), Pa(a, ke, o)) : (o = l.cache, Pa(a, ke, o), o !== r.cache && $n(
          a,
          [ke],
          t,
          !0
        ))), He(
          e,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(i(156, a.tag));
  }
  function Ya(e) {
    e.flags |= 4;
  }
  function id(e, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !vm(a)) {
      if (a = va.current, a !== null && ((le & 4194048) === le ? Aa !== null : (le & 62914560) !== le && (le & 536870912) === 0 || a !== Aa))
        throw Fo = Pn, Xu;
      e.flags |= 8192;
    }
  }
  function ql(e, a) {
    a !== null && (e.flags |= 4), e.flags & 16384 && (a = e.tag !== 22 ? Bi() : 536870912, e.lanes |= a, yo |= a);
  }
  function sr(e, a) {
    if (!ie)
      switch (e.tailMode) {
        case "hidden":
          a = e.tail;
          for (var t = null; a !== null; )
            a.alternate !== null && (t = a), a = a.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var o = null; t !== null; )
            t.alternate !== null && (o = t), t = t.sibling;
          o === null ? a || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function Se(e) {
    var a = e.alternate !== null && e.alternate.child === e.child, t = 0, o = 0;
    if (a)
      for (var r = e.child; r !== null; )
        t |= r.lanes | r.childLanes, o |= r.subtreeFlags & 65011712, o |= r.flags & 65011712, r.return = e, r = r.sibling;
    else
      for (r = e.child; r !== null; )
        t |= r.lanes | r.childLanes, o |= r.subtreeFlags, o |= r.flags, r.return = e, r = r.sibling;
    return e.subtreeFlags |= o, e.childLanes = t, a;
  }
  function wp(e, a, t) {
    var o = a.pendingProps;
    switch (Xn(a), a.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Se(a), null;
      case 1:
        return Se(a), null;
      case 3:
        return t = a.stateNode, o = null, e !== null && (o = e.memoizedState.cache), a.memoizedState.cache !== o && (a.flags |= 2048), Ha(ke), $a(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (Qo(a) ? Ya(a) : e === null || e.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, Bu())), Se(a), null;
      case 26:
        return t = a.memoizedState, e === null ? (Ya(a), t !== null ? (Se(a), id(a, t)) : (Se(a), a.flags &= -16777217)) : t ? t !== e.memoizedState ? (Ya(a), Se(a), id(a, t)) : (Se(a), a.flags &= -16777217) : (e.memoizedProps !== o && Ya(a), Se(a), a.flags &= -16777217), null;
      case 27:
        Nr(a), t = Z.current;
        var r = a.type;
        if (e !== null && a.stateNode != null)
          e.memoizedProps !== o && Ya(a);
        else {
          if (!o) {
            if (a.stateNode === null)
              throw Error(i(166));
            return Se(a), null;
          }
          e = B.current, Qo(a) ? Hu(a) : (e = im(r, o, t), a.stateNode = e, Ya(a));
        }
        return Se(a), null;
      case 5:
        if (Nr(a), t = a.type, e !== null && a.stateNode != null)
          e.memoizedProps !== o && Ya(a);
        else {
          if (!o) {
            if (a.stateNode === null)
              throw Error(i(166));
            return Se(a), null;
          }
          if (e = B.current, Qo(a))
            Hu(a);
          else {
            switch (r = Ul(
              Z.current
            ), e) {
              case 1:
                e = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  t
                );
                break;
              case 2:
                e = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  t
                );
                break;
              default:
                switch (t) {
                  case "svg":
                    e = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      t
                    );
                    break;
                  case "math":
                    e = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      t
                    );
                    break;
                  case "script":
                    e = r.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? r.createElement("select", { is: o.is }) : r.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? r.createElement(t, { is: o.is }) : r.createElement(t);
                }
            }
            e[Le] = a, e[Ze] = o;
            e: for (r = a.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                e.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === a) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === a)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            a.stateNode = e;
            e: switch (Be(e, t, o), t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ya(a);
          }
        }
        return Se(a), a.flags &= -16777217, null;
      case 6:
        if (e && a.stateNode != null)
          e.memoizedProps !== o && Ya(a);
        else {
          if (typeof o != "string" && a.stateNode === null)
            throw Error(i(166));
          if (e = Z.current, Qo(a)) {
            if (e = a.stateNode, t = a.memoizedProps, o = null, r = Ke, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  o = r.memoizedProps;
              }
            e[Le] = a, e = !!(e.nodeValue === t || o !== null && o.suppressHydrationWarning === !0 || am(e.nodeValue, t)), e || jt(a);
          } else
            e = Ul(e).createTextNode(
              o
            ), e[Le] = a, a.stateNode = e;
        }
        return Se(a), null;
      case 13:
        if (o = a.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (r = Qo(a), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!r) throw Error(i(318));
              if (r = a.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(317));
              r[Le] = a;
            } else
              Xo(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            Se(a), r = !1;
          } else
            r = Bu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return a.flags & 256 ? (Ba(a), a) : (Ba(a), null);
        }
        if (Ba(a), (a.flags & 128) !== 0)
          return a.lanes = t, a;
        if (t = o !== null, e = e !== null && e.memoizedState !== null, t) {
          o = a.child, r = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (r = o.alternate.memoizedState.cachePool.pool);
          var l = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (l = o.memoizedState.cachePool.pool), l !== r && (o.flags |= 2048);
        }
        return t !== e && t && (a.child.flags |= 8192), ql(a, a.updateQueue), Se(a), null;
      case 4:
        return $a(), e === null && oi(a.stateNode.containerInfo), Se(a), null;
      case 10:
        return Ha(a.type), Se(a), null;
      case 19:
        if (N(De), r = a.memoizedState, r === null) return Se(a), null;
        if (o = (a.flags & 128) !== 0, l = r.rendering, l === null)
          if (o) sr(r, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = a.child; e !== null; ) {
                if (l = yl(e), l !== null) {
                  for (a.flags |= 128, sr(r, !1), e = l.updateQueue, a.updateQueue = e, ql(a, e), a.subtreeFlags = 0, e = t, t = a.child; t !== null; )
                    _u(t, e), t = t.sibling;
                  return w(
                    De,
                    De.current & 1 | 2
                  ), a.child;
                }
                e = e.sibling;
              }
            r.tail !== null && Ea() > Ol && (a.flags |= 128, o = !0, sr(r, !1), a.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = yl(l), e !== null) {
              if (a.flags |= 128, o = !0, e = e.updateQueue, a.updateQueue = e, ql(a, e), sr(r, !0), r.tail === null && r.tailMode === "hidden" && !l.alternate && !ie)
                return Se(a), null;
            } else
              2 * Ea() - r.renderingStartTime > Ol && t !== 536870912 && (a.flags |= 128, o = !0, sr(r, !1), a.lanes = 4194304);
          r.isBackwards ? (l.sibling = a.child, a.child = l) : (e = r.last, e !== null ? e.sibling = l : a.child = l, r.last = l);
        }
        return r.tail !== null ? (a = r.tail, r.rendering = a, r.tail = a.sibling, r.renderingStartTime = Ea(), a.sibling = null, e = De.current, w(De, o ? e & 1 | 2 : e & 1), a) : (Se(a), null);
      case 22:
      case 23:
        return Ba(a), ls(), o = a.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (a.flags |= 8192) : o && (a.flags |= 8192), o ? (t & 536870912) !== 0 && (a.flags & 128) === 0 && (Se(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : Se(a), t = a.updateQueue, t !== null && ql(a, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), o = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== t && (a.flags |= 2048), e !== null && N(wt), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), a.memoizedState.cache !== t && (a.flags |= 2048), Ha(ke), Se(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, a.tag));
  }
  function Rp(e, a) {
    switch (Xn(a), a.tag) {
      case 1:
        return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
      case 3:
        return Ha(ke), $a(), e = a.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (a.flags = e & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return Nr(a), null;
      case 13:
        if (Ba(a), e = a.memoizedState, e !== null && e.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(i(340));
          Xo();
        }
        return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
      case 19:
        return N(De), null;
      case 4:
        return $a(), null;
      case 10:
        return Ha(a.type), null;
      case 22:
      case 23:
        return Ba(a), ls(), e !== null && N(wt), e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
      case 24:
        return Ha(ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ud(e, a) {
    switch (Xn(a), a.tag) {
      case 3:
        Ha(ke), $a();
        break;
      case 26:
      case 27:
      case 5:
        Nr(a);
        break;
      case 4:
        $a();
        break;
      case 13:
        Ba(a);
        break;
      case 19:
        N(De);
        break;
      case 10:
        Ha(a.type);
        break;
      case 22:
      case 23:
        Ba(a), ls(), e !== null && N(wt);
        break;
      case 24:
        Ha(ke);
    }
  }
  function ir(e, a) {
    try {
      var t = a.updateQueue, o = t !== null ? t.lastEffect : null;
      if (o !== null) {
        var r = o.next;
        t = r;
        do {
          if ((t.tag & e) === e) {
            o = void 0;
            var l = t.create, n = t.inst;
            o = l(), n.destroy = o;
          }
          t = t.next;
        } while (t !== r);
      }
    } catch (s) {
      ve(a, a.return, s);
    }
  }
  function nt(e, a, t) {
    try {
      var o = a.updateQueue, r = o !== null ? o.lastEffect : null;
      if (r !== null) {
        var l = r.next;
        o = l;
        do {
          if ((o.tag & e) === e) {
            var n = o.inst, s = n.destroy;
            if (s !== void 0) {
              n.destroy = void 0, r = a;
              var c = t, g = s;
              try {
                g();
              } catch (A) {
                ve(
                  r,
                  c,
                  A
                );
              }
            }
          }
          o = o.next;
        } while (o !== l);
      }
    } catch (A) {
      ve(a, a.return, A);
    }
  }
  function cd(e) {
    var a = e.updateQueue;
    if (a !== null) {
      var t = e.stateNode;
      try {
        Fu(a, t);
      } catch (o) {
        ve(e, e.return, o);
      }
    }
  }
  function dd(e, a, t) {
    t.props = Nt(
      e.type,
      e.memoizedProps
    ), t.state = e.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (o) {
      ve(e, a, o);
    }
  }
  function ur(e, a) {
    try {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof t == "function" ? e.refCleanup = t(o) : t.current = o;
      }
    } catch (r) {
      ve(e, a, r);
    }
  }
  function za(e, a) {
    var t = e.ref, o = e.refCleanup;
    if (t !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (r) {
          ve(e, a, r);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          ve(e, a, r);
        }
      else t.current = null;
  }
  function md(e) {
    var a = e.type, t = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && o.focus();
          break e;
        case "img":
          t.src ? o.src = t.src : t.srcSet && (o.srcset = t.srcSet);
      }
    } catch (r) {
      ve(e, e.return, r);
    }
  }
  function ws(e, a, t) {
    try {
      var o = e.stateNode;
      ah(o, e.type, t, a), o[Ze] = a;
    } catch (r) {
      ve(e, e.return, r);
    }
  }
  function fd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && pt(e.type) || e.tag === 4;
  }
  function Rs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || fd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && pt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ns(e, a, t) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, a ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, a) : (a = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.appendChild(e), t = t._reactRootContainer, t != null || a.onclick !== null || (a.onclick = _l));
    else if (o !== 4 && (o === 27 && pt(e.type) && (t = e.stateNode, a = null), e = e.child, e !== null))
      for (Ns(e, a, t), e = e.sibling; e !== null; )
        Ns(e, a, t), e = e.sibling;
  }
  function Al(e, a, t) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, a ? t.insertBefore(e, a) : t.appendChild(e);
    else if (o !== 4 && (o === 27 && pt(e.type) && (t = e.stateNode), e = e.child, e !== null))
      for (Al(e, a, t), e = e.sibling; e !== null; )
        Al(e, a, t), e = e.sibling;
  }
  function pd(e) {
    var a = e.stateNode, t = e.memoizedProps;
    try {
      for (var o = e.type, r = a.attributes; r.length; )
        a.removeAttributeNode(r[0]);
      Be(a, o, t), a[Le] = e, a[Ze] = t;
    } catch (l) {
      ve(e, e.return, l);
    }
  }
  var La = !1, Oe = !1, _s = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, _e = null;
  function Np(e, a) {
    if (e = e.containerInfo, ni = Ll, e = zu(e), Rn(e)) {
      if ("selectionStart" in e)
        var t = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var o = t.getSelection && t.getSelection();
          if (o && o.rangeCount !== 0) {
            t = o.anchorNode;
            var r = o.anchorOffset, l = o.focusNode;
            o = o.focusOffset;
            try {
              t.nodeType, l.nodeType;
            } catch {
              t = null;
              break e;
            }
            var n = 0, s = -1, c = -1, g = 0, A = 0, M = e, y = null;
            a: for (; ; ) {
              for (var T; M !== t || r !== 0 && M.nodeType !== 3 || (s = n + r), M !== l || o !== 0 && M.nodeType !== 3 || (c = n + o), M.nodeType === 3 && (n += M.nodeValue.length), (T = M.firstChild) !== null; )
                y = M, M = T;
              for (; ; ) {
                if (M === e) break a;
                if (y === t && ++g === r && (s = n), y === l && ++A === o && (c = n), (T = M.nextSibling) !== null) break;
                M = y, y = M.parentNode;
              }
              M = T;
            }
            t = s === -1 || c === -1 ? null : { start: s, end: c };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (si = { focusedElem: e, selectionRange: t }, Ll = !1, _e = a; _e !== null; )
      if (a = _e, e = a.child, (a.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = a, _e = e;
      else
        for (; _e !== null; ) {
          switch (a = _e, l = a.alternate, e = a.flags, a.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && l !== null) {
                e = void 0, t = a, r = l.memoizedProps, l = l.memoizedState, o = t.stateNode;
                try {
                  var X = Nt(
                    t.type,
                    r,
                    t.elementType === t.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    X,
                    l
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (V) {
                  ve(
                    t,
                    t.return,
                    V
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = a.stateNode.containerInfo, t = e.nodeType, t === 9)
                  di(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      di(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (e = a.sibling, e !== null) {
            e.return = a.return, _e = e;
            break;
          }
          _e = a.return;
        }
  }
  function vd(e, a, t) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        st(e, t), o & 4 && ir(5, t);
        break;
      case 1:
        if (st(e, t), o & 4)
          if (e = t.stateNode, a === null)
            try {
              e.componentDidMount();
            } catch (n) {
              ve(t, t.return, n);
            }
          else {
            var r = Nt(
              t.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              e.componentDidUpdate(
                r,
                a,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (n) {
              ve(
                t,
                t.return,
                n
              );
            }
          }
        o & 64 && cd(t), o & 512 && ur(t, t.return);
        break;
      case 3:
        if (st(e, t), o & 64 && (e = t.updateQueue, e !== null)) {
          if (a = null, t.child !== null)
            switch (t.child.tag) {
              case 27:
              case 5:
                a = t.child.stateNode;
                break;
              case 1:
                a = t.child.stateNode;
            }
          try {
            Fu(e, a);
          } catch (n) {
            ve(t, t.return, n);
          }
        }
        break;
      case 27:
        a === null && o & 4 && pd(t);
      case 26:
      case 5:
        st(e, t), a === null && o & 4 && md(t), o & 512 && ur(t, t.return);
        break;
      case 12:
        st(e, t);
        break;
      case 13:
        st(e, t), o & 4 && yd(e, t), o & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = Qp.bind(
          null,
          t
        ), ih(e, t))));
        break;
      case 22:
        if (o = t.memoizedState !== null || La, !o) {
          a = a !== null && a.memoizedState !== null || Oe, r = La;
          var l = Oe;
          La = o, (Oe = a) && !l ? it(
            e,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : st(e, t), La = r, Oe = l;
        }
        break;
      case 30:
        break;
      default:
        st(e, t);
    }
  }
  function gd(e) {
    var a = e.alternate;
    a !== null && (e.alternate = null, gd(a)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (a = e.stateNode, a !== null && hn(a)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Te = null, We = !1;
  function Qa(e, a, t) {
    for (t = t.child; t !== null; )
      bd(e, a, t), t = t.sibling;
  }
  function bd(e, a, t) {
    if (ea && typeof ea.onCommitFiberUnmount == "function")
      try {
        ea.onCommitFiberUnmount(jo, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        Oe || za(t, a), Qa(
          e,
          a,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        Oe || za(t, a);
        var o = Te, r = We;
        pt(t.type) && (Te = t.stateNode, We = !1), Qa(
          e,
          a,
          t
        ), br(t.stateNode), Te = o, We = r;
        break;
      case 5:
        Oe || za(t, a);
      case 6:
        if (o = Te, r = We, Te = null, Qa(
          e,
          a,
          t
        ), Te = o, We = r, Te !== null)
          if (We)
            try {
              (Te.nodeType === 9 ? Te.body : Te.nodeName === "HTML" ? Te.ownerDocument.body : Te).removeChild(t.stateNode);
            } catch (l) {
              ve(
                t,
                a,
                l
              );
            }
          else
            try {
              Te.removeChild(t.stateNode);
            } catch (l) {
              ve(
                t,
                a,
                l
              );
            }
        break;
      case 18:
        Te !== null && (We ? (e = Te, nm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          t.stateNode
        ), zr(e)) : nm(Te, t.stateNode));
        break;
      case 4:
        o = Te, r = We, Te = t.stateNode.containerInfo, We = !0, Qa(
          e,
          a,
          t
        ), Te = o, We = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Oe || nt(2, t, a), Oe || nt(4, t, a), Qa(
          e,
          a,
          t
        );
        break;
      case 1:
        Oe || (za(t, a), o = t.stateNode, typeof o.componentWillUnmount == "function" && dd(
          t,
          a,
          o
        )), Qa(
          e,
          a,
          t
        );
        break;
      case 21:
        Qa(
          e,
          a,
          t
        );
        break;
      case 22:
        Oe = (o = Oe) || t.memoizedState !== null, Qa(
          e,
          a,
          t
        ), Oe = o;
        break;
      default:
        Qa(
          e,
          a,
          t
        );
    }
  }
  function yd(e, a) {
    if (a.memoizedState === null && (e = a.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zr(e);
      } catch (t) {
        ve(a, a.return, t);
      }
  }
  function _p(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var a = e.stateNode;
        return a === null && (a = e.stateNode = new hd()), a;
      case 22:
        return e = e.stateNode, a = e._retryCache, a === null && (a = e._retryCache = new hd()), a;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Us(e, a) {
    var t = _p(e);
    a.forEach(function(o) {
      var r = Xp.bind(null, e, o);
      t.has(o) || (t.add(o), o.then(r, r));
    });
  }
  function ra(e, a) {
    var t = a.deletions;
    if (t !== null)
      for (var o = 0; o < t.length; o++) {
        var r = t[o], l = e, n = a, s = n;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (pt(s.type)) {
                Te = s.stateNode, We = !1;
                break e;
              }
              break;
            case 5:
              Te = s.stateNode, We = !1;
              break e;
            case 3:
            case 4:
              Te = s.stateNode.containerInfo, We = !0;
              break e;
          }
          s = s.return;
        }
        if (Te === null) throw Error(i(160));
        bd(l, n, r), Te = null, We = !1, l = r.alternate, l !== null && (l.return = null), r.return = null;
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; )
        Td(a, e), a = a.sibling;
  }
  var xa = null;
  function Td(e, a) {
    var t = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ra(a, e), la(e), o & 4 && (nt(3, e, e.return), ir(3, e), nt(5, e, e.return));
        break;
      case 1:
        ra(a, e), la(e), o & 512 && (Oe || t === null || za(t, t.return)), o & 64 && La && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? o : t.concat(o))));
        break;
      case 26:
        var r = xa;
        if (ra(a, e), la(e), o & 512 && (Oe || t === null || za(t, t.return)), o & 4) {
          var l = t !== null ? t.memoizedState : null;
          if (o = e.memoizedState, t === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, t = e.memoizedProps, r = r.ownerDocument || r;
                  a: switch (o) {
                    case "title":
                      l = r.getElementsByTagName("title")[0], (!l || l[wo] || l[Le] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = r.createElement(o), r.head.insertBefore(
                        l,
                        r.querySelector("head > title")
                      )), Be(l, o, t), l[Le] = e, Re(l), o = l;
                      break e;
                    case "link":
                      var n = pm(
                        "link",
                        "href",
                        r
                      ).get(o + (t.href || ""));
                      if (n) {
                        for (var s = 0; s < n.length; s++)
                          if (l = n[s], l.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && l.getAttribute("rel") === (t.rel == null ? null : t.rel) && l.getAttribute("title") === (t.title == null ? null : t.title) && l.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            n.splice(s, 1);
                            break a;
                          }
                      }
                      l = r.createElement(o), Be(l, o, t), r.head.appendChild(l);
                      break;
                    case "meta":
                      if (n = pm(
                        "meta",
                        "content",
                        r
                      ).get(o + (t.content || ""))) {
                        for (s = 0; s < n.length; s++)
                          if (l = n[s], l.getAttribute("content") === (t.content == null ? null : "" + t.content) && l.getAttribute("name") === (t.name == null ? null : t.name) && l.getAttribute("property") === (t.property == null ? null : t.property) && l.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && l.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            n.splice(s, 1);
                            break a;
                          }
                      }
                      l = r.createElement(o), Be(l, o, t), r.head.appendChild(l);
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  l[Le] = e, Re(l), o = l;
                }
                e.stateNode = o;
              } else
                hm(
                  r,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = fm(
                r,
                o,
                e.memoizedProps
              );
          else
            l !== o ? (l === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : l.count--, o === null ? hm(
              r,
              e.type,
              e.stateNode
            ) : fm(
              r,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && ws(
              e,
              e.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        ra(a, e), la(e), o & 512 && (Oe || t === null || za(t, t.return)), t !== null && o & 4 && ws(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (ra(a, e), la(e), o & 512 && (Oe || t === null || za(t, t.return)), e.flags & 32) {
          r = e.stateNode;
          try {
            Wt(r, "");
          } catch (T) {
            ve(e, e.return, T);
          }
        }
        o & 4 && e.stateNode != null && (r = e.memoizedProps, ws(
          e,
          r,
          t !== null ? t.memoizedProps : r
        )), o & 1024 && (_s = !0);
        break;
      case 6:
        if (ra(a, e), la(e), o & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          o = e.memoizedProps, t = e.stateNode;
          try {
            t.nodeValue = o;
          } catch (T) {
            ve(e, e.return, T);
          }
        }
        break;
      case 3:
        if (Bl = null, r = xa, xa = Hl(a.containerInfo), ra(a, e), xa = r, la(e), o & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            zr(a.containerInfo);
          } catch (T) {
            ve(e, e.return, T);
          }
        _s && (_s = !1, xd(e));
        break;
      case 4:
        o = xa, xa = Hl(
          e.stateNode.containerInfo
        ), ra(a, e), la(e), xa = o;
        break;
      case 12:
        ra(a, e), la(e);
        break;
      case 13:
        ra(a, e), la(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Ls = Ea()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, Us(e, o)));
        break;
      case 22:
        r = e.memoizedState !== null;
        var c = t !== null && t.memoizedState !== null, g = La, A = Oe;
        if (La = g || r, Oe = A || c, ra(a, e), Oe = A, La = g, la(e), o & 8192)
          e: for (a = e.stateNode, a._visibility = r ? a._visibility & -2 : a._visibility | 1, r && (t === null || c || La || Oe || _t(e)), t = null, a = e; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (t === null) {
                c = t = a;
                try {
                  if (l = c.stateNode, r)
                    n = l.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
                  else {
                    s = c.stateNode;
                    var M = c.memoizedProps.style, y = M != null && M.hasOwnProperty("display") ? M.display : null;
                    s.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (T) {
                  ve(c, c.return, T);
                }
              }
            } else if (a.tag === 6) {
              if (t === null) {
                c = a;
                try {
                  c.stateNode.nodeValue = r ? "" : c.memoizedProps;
                } catch (T) {
                  ve(c, c.return, T);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === e) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === e) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e) break e;
              t === a && (t = null), a = a.return;
            }
            t === a && (t = null), a.sibling.return = a.return, a = a.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (t = o.retryQueue, t !== null && (o.retryQueue = null, Us(e, t))));
        break;
      case 19:
        ra(a, e), la(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, Us(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ra(a, e), la(e);
    }
  }
  function la(e) {
    var a = e.flags;
    if (a & 2) {
      try {
        for (var t, o = e.return; o !== null; ) {
          if (fd(o)) {
            t = o;
            break;
          }
          o = o.return;
        }
        if (t == null) throw Error(i(160));
        switch (t.tag) {
          case 27:
            var r = t.stateNode, l = Rs(e);
            Al(e, l, r);
            break;
          case 5:
            var n = t.stateNode;
            t.flags & 32 && (Wt(n, ""), t.flags &= -33);
            var s = Rs(e);
            Al(e, s, n);
            break;
          case 3:
          case 4:
            var c = t.stateNode.containerInfo, g = Rs(e);
            Ns(
              e,
              g,
              c
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (A) {
        ve(e, e.return, A);
      }
      e.flags &= -3;
    }
    a & 4096 && (e.flags &= -4097);
  }
  function xd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var a = e;
        xd(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), e = e.sibling;
      }
  }
  function st(e, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        vd(e, a.alternate, a), a = a.sibling;
  }
  function _t(e) {
    for (e = e.child; e !== null; ) {
      var a = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          nt(4, a, a.return), _t(a);
          break;
        case 1:
          za(a, a.return);
          var t = a.stateNode;
          typeof t.componentWillUnmount == "function" && dd(
            a,
            a.return,
            t
          ), _t(a);
          break;
        case 27:
          br(a.stateNode);
        case 26:
        case 5:
          za(a, a.return), _t(a);
          break;
        case 22:
          a.memoizedState === null && _t(a);
          break;
        case 30:
          _t(a);
          break;
        default:
          _t(a);
      }
      e = e.sibling;
    }
  }
  function it(e, a, t) {
    for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var o = a.alternate, r = e, l = a, n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          it(
            r,
            l,
            t
          ), ir(4, l);
          break;
        case 1:
          if (it(
            r,
            l,
            t
          ), o = l, r = o.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (g) {
              ve(o, o.return, g);
            }
          if (o = l, r = o.updateQueue, r !== null) {
            var s = o.stateNode;
            try {
              var c = r.shared.hiddenCallbacks;
              if (c !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < c.length; r++)
                  Wu(c[r], s);
            } catch (g) {
              ve(o, o.return, g);
            }
          }
          t && n & 64 && cd(l), ur(l, l.return);
          break;
        case 27:
          pd(l);
        case 26:
        case 5:
          it(
            r,
            l,
            t
          ), t && o === null && n & 4 && md(l), ur(l, l.return);
          break;
        case 12:
          it(
            r,
            l,
            t
          );
          break;
        case 13:
          it(
            r,
            l,
            t
          ), t && n & 4 && yd(r, l);
          break;
        case 22:
          l.memoizedState === null && it(
            r,
            l,
            t
          ), ur(l, l.return);
          break;
        case 30:
          break;
        default:
          it(
            r,
            l,
            t
          );
      }
      a = a.sibling;
    }
  }
  function Hs(e, a) {
    var t = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (e = a.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && Jo(t));
  }
  function Gs(e, a) {
    e = null, a.alternate !== null && (e = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== e && (a.refCount++, e != null && Jo(e));
  }
  function Oa(e, a, t, o) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        Sd(
          e,
          a,
          t,
          o
        ), a = a.sibling;
  }
  function Sd(e, a, t, o) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Oa(
          e,
          a,
          t,
          o
        ), r & 2048 && ir(9, a);
        break;
      case 1:
        Oa(
          e,
          a,
          t,
          o
        );
        break;
      case 3:
        Oa(
          e,
          a,
          t,
          o
        ), r & 2048 && (e = null, a.alternate !== null && (e = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== e && (a.refCount++, e != null && Jo(e)));
        break;
      case 12:
        if (r & 2048) {
          Oa(
            e,
            a,
            t,
            o
          ), e = a.stateNode;
          try {
            var l = a.memoizedProps, n = l.id, s = l.onPostCommit;
            typeof s == "function" && s(
              n,
              a.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (c) {
            ve(a, a.return, c);
          }
        } else
          Oa(
            e,
            a,
            t,
            o
          );
        break;
      case 13:
        Oa(
          e,
          a,
          t,
          o
        );
        break;
      case 23:
        break;
      case 22:
        l = a.stateNode, n = a.alternate, a.memoizedState !== null ? l._visibility & 2 ? Oa(
          e,
          a,
          t,
          o
        ) : cr(e, a) : l._visibility & 2 ? Oa(
          e,
          a,
          t,
          o
        ) : (l._visibility |= 2, vo(
          e,
          a,
          t,
          o,
          (a.subtreeFlags & 10256) !== 0
        )), r & 2048 && Hs(n, a);
        break;
      case 24:
        Oa(
          e,
          a,
          t,
          o
        ), r & 2048 && Gs(a.alternate, a);
        break;
      default:
        Oa(
          e,
          a,
          t,
          o
        );
    }
  }
  function vo(e, a, t, o, r) {
    for (r = r && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var l = e, n = a, s = t, c = o, g = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          vo(
            l,
            n,
            s,
            c,
            r
          ), ir(8, n);
          break;
        case 23:
          break;
        case 22:
          var A = n.stateNode;
          n.memoizedState !== null ? A._visibility & 2 ? vo(
            l,
            n,
            s,
            c,
            r
          ) : cr(
            l,
            n
          ) : (A._visibility |= 2, vo(
            l,
            n,
            s,
            c,
            r
          )), r && g & 2048 && Hs(
            n.alternate,
            n
          );
          break;
        case 24:
          vo(
            l,
            n,
            s,
            c,
            r
          ), r && g & 2048 && Gs(n.alternate, n);
          break;
        default:
          vo(
            l,
            n,
            s,
            c,
            r
          );
      }
      a = a.sibling;
    }
  }
  function cr(e, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var t = e, o = a, r = o.flags;
        switch (o.tag) {
          case 22:
            cr(t, o), r & 2048 && Hs(
              o.alternate,
              o
            );
            break;
          case 24:
            cr(t, o), r & 2048 && Gs(o.alternate, o);
            break;
          default:
            cr(t, o);
        }
        a = a.sibling;
      }
  }
  var dr = 8192;
  function go(e) {
    if (e.subtreeFlags & dr)
      for (e = e.child; e !== null; )
        Ed(e), e = e.sibling;
  }
  function Ed(e) {
    switch (e.tag) {
      case 26:
        go(e), e.flags & dr && e.memoizedState !== null && xh(
          xa,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        go(e);
        break;
      case 3:
      case 4:
        var a = xa;
        xa = Hl(e.stateNode.containerInfo), go(e), xa = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = dr, dr = 16777216, go(e), dr = a) : go(e));
        break;
      default:
        go(e);
    }
  }
  function qd(e) {
    var a = e.alternate;
    if (a !== null && (e = a.child, e !== null)) {
      a.child = null;
      do
        a = e.sibling, e.sibling = null, e = a;
      while (e !== null);
    }
  }
  function mr(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var o = a[t];
          _e = o, zd(
            o,
            e
          );
        }
      qd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ad(e), e = e.sibling;
  }
  function Ad(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        mr(e), e.flags & 2048 && nt(9, e, e.return);
        break;
      case 3:
        mr(e);
        break;
      case 12:
        mr(e);
        break;
      case 22:
        var a = e.stateNode;
        e.memoizedState !== null && a._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (a._visibility &= -3, zl(e)) : mr(e);
        break;
      default:
        mr(e);
    }
  }
  function zl(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var o = a[t];
          _e = o, zd(
            o,
            e
          );
        }
      qd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (a = e, a.tag) {
        case 0:
        case 11:
        case 15:
          nt(8, a, a.return), zl(a);
          break;
        case 22:
          t = a.stateNode, t._visibility & 2 && (t._visibility &= -3, zl(a));
          break;
        default:
          zl(a);
      }
      e = e.sibling;
    }
  }
  function zd(e, a) {
    for (; _e !== null; ) {
      var t = _e;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          nt(8, t, a);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var o = t.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Jo(t.memoizedState.cache);
      }
      if (o = t.child, o !== null) o.return = t, _e = o;
      else
        e: for (t = e; _e !== null; ) {
          o = _e;
          var r = o.sibling, l = o.return;
          if (gd(o), o === t) {
            _e = null;
            break e;
          }
          if (r !== null) {
            r.return = l, _e = r;
            break e;
          }
          _e = l;
        }
    }
  }
  var Up = {
    getCacheForType: function(e) {
      var a = Qe(ke), t = a.data.get(e);
      return t === void 0 && (t = e(), a.data.set(e, t)), t;
    }
  }, Hp = typeof WeakMap == "function" ? WeakMap : Map, ue = 0, be = null, ae = null, le = 0, ce = 0, na = null, ut = !1, bo = !1, Bs = !1, Xa = 0, qe = 0, ct = 0, Ut = 0, Vs = 0, ga = 0, yo = 0, fr = null, Fe = null, Ys = !1, Ls = 0, Ol = 1 / 0, Ml = null, dt = null, Ge = 0, mt = null, To = null, xo = 0, Qs = 0, Xs = null, Od = null, pr = 0, Ks = null;
  function sa() {
    if ((ue & 2) !== 0 && le !== 0)
      return le & -le;
    if (z.T !== null) {
      var e = so;
      return e !== 0 ? e : Ps();
    }
    return Li();
  }
  function Md() {
    ga === 0 && (ga = (le & 536870912) === 0 || ie ? Gi() : 536870912);
    var e = va.current;
    return e !== null && (e.flags |= 32), ga;
  }
  function ia(e, a, t) {
    (e === be && (ce === 2 || ce === 9) || e.cancelPendingCommit !== null) && (So(e, 0), ft(
      e,
      le,
      ga,
      !1
    )), Do(e, t), ((ue & 2) === 0 || e !== be) && (e === be && ((ue & 2) === 0 && (Ut |= t), qe === 4 && ft(
      e,
      le,
      ga,
      !1
    )), Ma(e));
  }
  function Cd(e, a, t) {
    if ((ue & 6) !== 0) throw Error(i(327));
    var o = !t && (a & 124) === 0 && (a & e.expiredLanes) === 0 || ko(e, a), r = o ? Vp(e, a) : $s(e, a, !0), l = o;
    do {
      if (r === 0) {
        bo && !o && ft(e, a, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, l && !Gp(t)) {
          r = $s(e, a, !1), l = !1;
          continue;
        }
        if (r === 2) {
          if (l = a, e.errorRecoveryDisabledLanes & l)
            var n = 0;
          else
            n = e.pendingLanes & -536870913, n = n !== 0 ? n : n & 536870912 ? 536870912 : 0;
          if (n !== 0) {
            a = n;
            e: {
              var s = e;
              r = fr;
              var c = s.current.memoizedState.isDehydrated;
              if (c && (So(s, n).flags |= 256), n = $s(
                s,
                n,
                !1
              ), n !== 2) {
                if (Bs && !c) {
                  s.errorRecoveryDisabledLanes |= l, Ut |= l, r = 4;
                  break e;
                }
                l = Fe, Fe = r, l !== null && (Fe === null ? Fe = l : Fe.push.apply(
                  Fe,
                  l
                ));
              }
              r = n;
            }
            if (l = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          So(e, 0), ft(e, a, 0, !0);
          break;
        }
        e: {
          switch (o = e, l = r, l) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              ft(
                o,
                a,
                ga,
                !ut
              );
              break e;
            case 2:
              Fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((a & 62914560) === a && (r = Ls + 300 - Ea(), 10 < r)) {
            if (ft(
              o,
              a,
              ga,
              !ut
            ), Gr(o, 0, !0) !== 0) break e;
            o.timeoutHandle = rm(
              jd.bind(
                null,
                o,
                t,
                Fe,
                Ml,
                Ys,
                a,
                ga,
                Ut,
                yo,
                ut,
                l,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          jd(
            o,
            t,
            Fe,
            Ml,
            Ys,
            a,
            ga,
            Ut,
            yo,
            ut,
            l,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ma(e);
  }
  function jd(e, a, t, o, r, l, n, s, c, g, A, M, y, T) {
    if (e.timeoutHandle = -1, M = a.subtreeFlags, (M & 8192 || (M & 16785408) === 16785408) && (xr = { stylesheets: null, count: 0, unsuspend: Th }, Ed(a), M = Sh(), M !== null)) {
      e.cancelPendingCommit = M(
        Ud.bind(
          null,
          e,
          a,
          l,
          t,
          o,
          r,
          n,
          s,
          c,
          A,
          1,
          y,
          T
        )
      ), ft(e, l, n, !g);
      return;
    }
    Ud(
      e,
      a,
      l,
      t,
      o,
      r,
      n,
      s,
      c
    );
  }
  function Gp(e) {
    for (var a = e; ; ) {
      var t = a.tag;
      if ((t === 0 || t === 11 || t === 15) && a.flags & 16384 && (t = a.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var o = 0; o < t.length; o++) {
          var r = t[o], l = r.getSnapshot;
          r = r.value;
          try {
            if (!ta(l(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (t = a.child, a.subtreeFlags & 16384 && t !== null)
        t.return = a, a = t;
      else {
        if (a === e) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function ft(e, a, t, o) {
    a &= ~Vs, a &= ~Ut, e.suspendedLanes |= a, e.pingedLanes &= ~a, o && (e.warmLanes |= a), o = e.expirationTimes;
    for (var r = a; 0 < r; ) {
      var l = 31 - aa(r), n = 1 << l;
      o[l] = -1, r &= ~n;
    }
    t !== 0 && Vi(e, t, a);
  }
  function Cl() {
    return (ue & 6) === 0 ? (hr(0), !1) : !0;
  }
  function Zs() {
    if (ae !== null) {
      if (ce === 0)
        var e = ae.return;
      else
        e = ae, Ua = kt = null, cs(e), po = null, lr = 0, e = ae;
      for (; e !== null; )
        ud(e.alternate, e), e = e.return;
      ae = null;
    }
  }
  function So(e, a) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, oh(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), Zs(), be = e, ae = t = Ra(e.current, null), le = a, ce = 0, na = null, ut = !1, bo = ko(e, a), Bs = !1, yo = ga = Vs = Ut = ct = qe = 0, Fe = fr = null, Ys = !1, (a & 8) !== 0 && (a |= a & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= a; 0 < o; ) {
        var r = 31 - aa(o), l = 1 << r;
        a |= e[r], o &= ~l;
      }
    return Xa = a, Fr(), t;
  }
  function kd(e, a) {
    I = null, z.H = vl, a === Wo || a === nl ? (a = Ju(), ce = 3) : a === Xu ? (a = Ju(), ce = 4) : ce = a === $c ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, na = a, ae === null && (qe = 1, xl(
      e,
      ma(a, e.current)
    ));
  }
  function Dd() {
    var e = z.H;
    return z.H = vl, e === null ? vl : e;
  }
  function wd() {
    var e = z.A;
    return z.A = Up, e;
  }
  function Js() {
    qe = 4, ut || (le & 4194048) !== le && va.current !== null || (bo = !0), (ct & 134217727) === 0 && (Ut & 134217727) === 0 || be === null || ft(
      be,
      le,
      ga,
      !1
    );
  }
  function $s(e, a, t) {
    var o = ue;
    ue |= 2;
    var r = Dd(), l = wd();
    (be !== e || le !== a) && (Ml = null, So(e, a)), a = !1;
    var n = qe;
    e: do
      try {
        if (ce !== 0 && ae !== null) {
          var s = ae, c = na;
          switch (ce) {
            case 8:
              Zs(), n = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              va.current === null && (a = !0);
              var g = ce;
              if (ce = 0, na = null, Eo(e, s, c, g), t && bo) {
                n = 0;
                break e;
              }
              break;
            default:
              g = ce, ce = 0, na = null, Eo(e, s, c, g);
          }
        }
        Bp(), n = qe;
        break;
      } catch (A) {
        kd(e, A);
      }
    while (!0);
    return a && e.shellSuspendCounter++, Ua = kt = null, ue = o, z.H = r, z.A = l, ae === null && (be = null, le = 0, Fr()), n;
  }
  function Bp() {
    for (; ae !== null; ) Rd(ae);
  }
  function Vp(e, a) {
    var t = ue;
    ue |= 2;
    var o = Dd(), r = wd();
    be !== e || le !== a ? (Ml = null, Ol = Ea() + 500, So(e, a)) : bo = ko(
      e,
      a
    );
    e: do
      try {
        if (ce !== 0 && ae !== null) {
          a = ae;
          var l = na;
          a: switch (ce) {
            case 1:
              ce = 0, na = null, Eo(e, a, l, 1);
              break;
            case 2:
            case 9:
              if (Ku(l)) {
                ce = 0, na = null, Nd(a);
                break;
              }
              a = function() {
                ce !== 2 && ce !== 9 || be !== e || (ce = 7), Ma(e);
              }, l.then(a, a);
              break e;
            case 3:
              ce = 7;
              break e;
            case 4:
              ce = 5;
              break e;
            case 7:
              Ku(l) ? (ce = 0, na = null, Nd(a)) : (ce = 0, na = null, Eo(e, a, l, 7));
              break;
            case 5:
              var n = null;
              switch (ae.tag) {
                case 26:
                  n = ae.memoizedState;
                case 5:
                case 27:
                  var s = ae;
                  if (!n || vm(n)) {
                    ce = 0, na = null;
                    var c = s.sibling;
                    if (c !== null) ae = c;
                    else {
                      var g = s.return;
                      g !== null ? (ae = g, jl(g)) : ae = null;
                    }
                    break a;
                  }
              }
              ce = 0, na = null, Eo(e, a, l, 5);
              break;
            case 6:
              ce = 0, na = null, Eo(e, a, l, 6);
              break;
            case 8:
              Zs(), qe = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        Yp();
        break;
      } catch (A) {
        kd(e, A);
      }
    while (!0);
    return Ua = kt = null, z.H = o, z.A = r, ue = t, ae !== null ? 0 : (be = null, le = 0, Fr(), qe);
  }
  function Yp() {
    for (; ae !== null && !cf(); )
      Rd(ae);
  }
  function Rd(e) {
    var a = sd(e.alternate, e, Xa);
    e.memoizedProps = e.pendingProps, a === null ? jl(e) : ae = a;
  }
  function Nd(e) {
    var a = e, t = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = ad(
          t,
          a,
          a.pendingProps,
          a.type,
          void 0,
          le
        );
        break;
      case 11:
        a = ad(
          t,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          le
        );
        break;
      case 5:
        cs(a);
      default:
        ud(t, a), a = ae = _u(a, Xa), a = sd(t, a, Xa);
    }
    e.memoizedProps = e.pendingProps, a === null ? jl(e) : ae = a;
  }
  function Eo(e, a, t, o) {
    Ua = kt = null, cs(a), po = null, lr = 0;
    var r = a.return;
    try {
      if (kp(
        e,
        r,
        a,
        t,
        le
      )) {
        qe = 1, xl(
          e,
          ma(t, e.current)
        ), ae = null;
        return;
      }
    } catch (l) {
      if (r !== null) throw ae = r, l;
      qe = 1, xl(
        e,
        ma(t, e.current)
      ), ae = null;
      return;
    }
    a.flags & 32768 ? (ie || o === 1 ? e = !0 : bo || (le & 536870912) !== 0 ? e = !1 : (ut = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = va.current, o !== null && o.tag === 13 && (o.flags |= 16384))), _d(a, e)) : jl(a);
  }
  function jl(e) {
    var a = e;
    do {
      if ((a.flags & 32768) !== 0) {
        _d(
          a,
          ut
        );
        return;
      }
      e = a.return;
      var t = wp(
        a.alternate,
        a,
        Xa
      );
      if (t !== null) {
        ae = t;
        return;
      }
      if (a = a.sibling, a !== null) {
        ae = a;
        return;
      }
      ae = a = e;
    } while (a !== null);
    qe === 0 && (qe = 5);
  }
  function _d(e, a) {
    do {
      var t = Rp(e.alternate, e);
      if (t !== null) {
        t.flags &= 32767, ae = t;
        return;
      }
      if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !a && (e = e.sibling, e !== null)) {
        ae = e;
        return;
      }
      ae = e = t;
    } while (e !== null);
    qe = 6, ae = null;
  }
  function Ud(e, a, t, o, r, l, n, s, c) {
    e.cancelPendingCommit = null;
    do
      kl();
    while (Ge !== 0);
    if ((ue & 6) !== 0) throw Error(i(327));
    if (a !== null) {
      if (a === e.current) throw Error(i(177));
      if (l = a.lanes | a.childLanes, l |= Gn, Tf(
        e,
        t,
        l,
        n,
        s,
        c
      ), e === be && (ae = be = null, le = 0), To = a, mt = e, xo = t, Qs = l, Xs = r, Od = o, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Kp(_r, function() {
        return Yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || o) {
        o = z.T, z.T = null, r = R.p, R.p = 2, n = ue, ue |= 4;
        try {
          Np(e, a, t);
        } finally {
          ue = n, R.p = r, z.T = o;
        }
      }
      Ge = 1, Hd(), Gd(), Bd();
    }
  }
  function Hd() {
    if (Ge === 1) {
      Ge = 0;
      var e = mt, a = To, t = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || t) {
        t = z.T, z.T = null;
        var o = R.p;
        R.p = 2;
        var r = ue;
        ue |= 4;
        try {
          Td(a, e);
          var l = si, n = zu(e.containerInfo), s = l.focusedElem, c = l.selectionRange;
          if (n !== s && s && s.ownerDocument && Au(
            s.ownerDocument.documentElement,
            s
          )) {
            if (c !== null && Rn(s)) {
              var g = c.start, A = c.end;
              if (A === void 0 && (A = g), "selectionStart" in s)
                s.selectionStart = g, s.selectionEnd = Math.min(
                  A,
                  s.value.length
                );
              else {
                var M = s.ownerDocument || document, y = M && M.defaultView || window;
                if (y.getSelection) {
                  var T = y.getSelection(), X = s.textContent.length, V = Math.min(c.start, X), fe = c.end === void 0 ? V : Math.min(c.end, X);
                  !T.extend && V > fe && (n = fe, fe = V, V = n);
                  var h = qu(
                    s,
                    V
                  ), p = qu(
                    s,
                    fe
                  );
                  if (h && p && (T.rangeCount !== 1 || T.anchorNode !== h.node || T.anchorOffset !== h.offset || T.focusNode !== p.node || T.focusOffset !== p.offset)) {
                    var v = M.createRange();
                    v.setStart(h.node, h.offset), T.removeAllRanges(), V > fe ? (T.addRange(v), T.extend(p.node, p.offset)) : (v.setEnd(p.node, p.offset), T.addRange(v));
                  }
                }
              }
            }
            for (M = [], T = s; T = T.parentNode; )
              T.nodeType === 1 && M.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < M.length; s++) {
              var O = M[s];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          Ll = !!ni, si = ni = null;
        } finally {
          ue = r, R.p = o, z.T = t;
        }
      }
      e.current = a, Ge = 2;
    }
  }
  function Gd() {
    if (Ge === 2) {
      Ge = 0;
      var e = mt, a = To, t = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || t) {
        t = z.T, z.T = null;
        var o = R.p;
        R.p = 2;
        var r = ue;
        ue |= 4;
        try {
          vd(e, a.alternate, a);
        } finally {
          ue = r, R.p = o, z.T = t;
        }
      }
      Ge = 3;
    }
  }
  function Bd() {
    if (Ge === 4 || Ge === 3) {
      Ge = 0, df();
      var e = mt, a = To, t = xo, o = Od;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? Ge = 5 : (Ge = 0, To = mt = null, Vd(e, e.pendingLanes));
      var r = e.pendingLanes;
      if (r === 0 && (dt = null), fn(t), a = a.stateNode, ea && typeof ea.onCommitFiberRoot == "function")
        try {
          ea.onCommitFiberRoot(
            jo,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        a = z.T, r = R.p, R.p = 2, z.T = null;
        try {
          for (var l = e.onRecoverableError, n = 0; n < o.length; n++) {
            var s = o[n];
            l(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          z.T = a, R.p = r;
        }
      }
      (xo & 3) !== 0 && kl(), Ma(e), r = e.pendingLanes, (t & 4194090) !== 0 && (r & 42) !== 0 ? e === Ks ? pr++ : (pr = 0, Ks = e) : pr = 0, hr(0);
    }
  }
  function Vd(e, a) {
    (e.pooledCacheLanes &= a) === 0 && (a = e.pooledCache, a != null && (e.pooledCache = null, Jo(a)));
  }
  function kl(e) {
    return Hd(), Gd(), Bd(), Yd();
  }
  function Yd() {
    if (Ge !== 5) return !1;
    var e = mt, a = Qs;
    Qs = 0;
    var t = fn(xo), o = z.T, r = R.p;
    try {
      R.p = 32 > t ? 32 : t, z.T = null, t = Xs, Xs = null;
      var l = mt, n = xo;
      if (Ge = 0, To = mt = null, xo = 0, (ue & 6) !== 0) throw Error(i(331));
      var s = ue;
      if (ue |= 4, Ad(l.current), Sd(
        l,
        l.current,
        n,
        t
      ), ue = s, hr(0, !1), ea && typeof ea.onPostCommitFiberRoot == "function")
        try {
          ea.onPostCommitFiberRoot(jo, l);
        } catch {
        }
      return !0;
    } finally {
      R.p = r, z.T = o, Vd(e, a);
    }
  }
  function Ld(e, a, t) {
    a = ma(t, a), a = qs(e.stateNode, a, 2), e = tt(e, a, 2), e !== null && (Do(e, 2), Ma(e));
  }
  function ve(e, a, t) {
    if (e.tag === 3)
      Ld(e, e, t);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Ld(
            a,
            e,
            t
          );
          break;
        } else if (a.tag === 1) {
          var o = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (dt === null || !dt.has(o))) {
            e = ma(t, e), t = Zc(2), o = tt(a, t, 2), o !== null && (Jc(
              t,
              o,
              a,
              e
            ), Do(o, 2), Ma(o));
            break;
          }
        }
        a = a.return;
      }
  }
  function Ws(e, a, t) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Hp();
      var r = /* @__PURE__ */ new Set();
      o.set(a, r);
    } else
      r = o.get(a), r === void 0 && (r = /* @__PURE__ */ new Set(), o.set(a, r));
    r.has(t) || (Bs = !0, r.add(t), e = Lp.bind(null, e, a, t), a.then(e, e));
  }
  function Lp(e, a, t) {
    var o = e.pingCache;
    o !== null && o.delete(a), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, be === e && (le & t) === t && (qe === 4 || qe === 3 && (le & 62914560) === le && 300 > Ea() - Ls ? (ue & 2) === 0 && So(e, 0) : Vs |= t, yo === le && (yo = 0)), Ma(e);
  }
  function Qd(e, a) {
    a === 0 && (a = Bi()), e = oo(e, a), e !== null && (Do(e, a), Ma(e));
  }
  function Qp(e) {
    var a = e.memoizedState, t = 0;
    a !== null && (t = a.retryLane), Qd(e, t);
  }
  function Xp(e, a) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, r = e.memoizedState;
        r !== null && (t = r.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(a), Qd(e, t);
  }
  function Kp(e, a) {
    return un(e, a);
  }
  var Dl = null, qo = null, Fs = !1, wl = !1, Is = !1, Ht = 0;
  function Ma(e) {
    e !== qo && e.next === null && (qo === null ? Dl = qo = e : qo = qo.next = e), wl = !0, Fs || (Fs = !0, Jp());
  }
  function hr(e, a) {
    if (!Is && wl) {
      Is = !0;
      do
        for (var t = !1, o = Dl; o !== null; ) {
          if (e !== 0) {
            var r = o.pendingLanes;
            if (r === 0) var l = 0;
            else {
              var n = o.suspendedLanes, s = o.pingedLanes;
              l = (1 << 31 - aa(42 | e) + 1) - 1, l &= r & ~(n & ~s), l = l & 201326741 ? l & 201326741 | 1 : l ? l | 2 : 0;
            }
            l !== 0 && (t = !0, Jd(o, l));
          } else
            l = le, l = Gr(
              o,
              o === be ? l : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (l & 3) === 0 || ko(o, l) || (t = !0, Jd(o, l));
          o = o.next;
        }
      while (t);
      Is = !1;
    }
  }
  function Zp() {
    Xd();
  }
  function Xd() {
    wl = Fs = !1;
    var e = 0;
    Ht !== 0 && (th() && (e = Ht), Ht = 0);
    for (var a = Ea(), t = null, o = Dl; o !== null; ) {
      var r = o.next, l = Kd(o, a);
      l === 0 ? (o.next = null, t === null ? Dl = r : t.next = r, r === null && (qo = t)) : (t = o, (e !== 0 || (l & 3) !== 0) && (wl = !0)), o = r;
    }
    hr(e);
  }
  function Kd(e, a) {
    for (var t = e.suspendedLanes, o = e.pingedLanes, r = e.expirationTimes, l = e.pendingLanes & -62914561; 0 < l; ) {
      var n = 31 - aa(l), s = 1 << n, c = r[n];
      c === -1 ? ((s & t) === 0 || (s & o) !== 0) && (r[n] = yf(s, a)) : c <= a && (e.expiredLanes |= s), l &= ~s;
    }
    if (a = be, t = le, t = Gr(
      e,
      e === a ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, t === 0 || e === a && (ce === 2 || ce === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && cn(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || ko(e, t)) {
      if (a = t & -t, a === e.callbackPriority) return a;
      switch (o !== null && cn(o), fn(t)) {
        case 2:
        case 8:
          t = Ui;
          break;
        case 32:
          t = _r;
          break;
        case 268435456:
          t = Hi;
          break;
        default:
          t = _r;
      }
      return o = Zd.bind(null, e), t = un(t, o), e.callbackPriority = a, e.callbackNode = t, a;
    }
    return o !== null && o !== null && cn(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Zd(e, a) {
    if (Ge !== 0 && Ge !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (kl() && e.callbackNode !== t)
      return null;
    var o = le;
    return o = Gr(
      e,
      e === be ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (Cd(e, o, a), Kd(e, Ea()), e.callbackNode != null && e.callbackNode === t ? Zd.bind(null, e) : null);
  }
  function Jd(e, a) {
    if (kl()) return null;
    Cd(e, a, !0);
  }
  function Jp() {
    rh(function() {
      (ue & 6) !== 0 ? un(
        _i,
        Zp
      ) : Xd();
    });
  }
  function Ps() {
    return Ht === 0 && (Ht = Gi()), Ht;
  }
  function $d(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Qr("" + e);
  }
  function Wd(e, a) {
    var t = a.ownerDocument.createElement("input");
    return t.name = a.name, t.value = a.value, e.id && t.setAttribute("form", e.id), a.parentNode.insertBefore(t, a), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function $p(e, a, t, o, r) {
    if (a === "submit" && t && t.stateNode === r) {
      var l = $d(
        (r[Ze] || null).action
      ), n = o.submitter;
      n && (a = (a = n[Ze] || null) ? $d(a.formAction) : n.getAttribute("formAction"), a !== null && (l = a, n = null));
      var s = new Jr(
        "action",
        "action",
        null,
        o,
        r
      );
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Ht !== 0) {
                  var c = n ? Wd(r, n) : new FormData(r);
                  ys(
                    t,
                    {
                      pending: !0,
                      data: c,
                      method: r.method,
                      action: l
                    },
                    null,
                    c
                  );
                }
              } else
                typeof l == "function" && (s.preventDefault(), c = n ? Wd(r, n) : new FormData(r), ys(
                  t,
                  {
                    pending: !0,
                    data: c,
                    method: r.method,
                    action: l
                  },
                  l,
                  c
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var ei = 0; ei < Hn.length; ei++) {
    var ai = Hn[ei], Wp = ai.toLowerCase(), Fp = ai[0].toUpperCase() + ai.slice(1);
    Ta(
      Wp,
      "on" + Fp
    );
  }
  Ta(Cu, "onAnimationEnd"), Ta(ju, "onAnimationIteration"), Ta(ku, "onAnimationStart"), Ta("dblclick", "onDoubleClick"), Ta("focusin", "onFocus"), Ta("focusout", "onBlur"), Ta(pp, "onTransitionRun"), Ta(hp, "onTransitionStart"), Ta(vp, "onTransitionCancel"), Ta(Du, "onTransitionEnd"), Zt("onMouseEnter", ["mouseout", "mouseover"]), Zt("onMouseLeave", ["mouseout", "mouseover"]), Zt("onPointerEnter", ["pointerout", "pointerover"]), Zt("onPointerLeave", ["pointerout", "pointerover"]), St(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), St(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), St("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), St(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), St(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), St(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ip = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vr)
  );
  function Fd(e, a) {
    a = (a & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var o = e[t], r = o.event;
      o = o.listeners;
      e: {
        var l = void 0;
        if (a)
          for (var n = o.length - 1; 0 <= n; n--) {
            var s = o[n], c = s.instance, g = s.currentTarget;
            if (s = s.listener, c !== l && r.isPropagationStopped())
              break e;
            l = s, r.currentTarget = g;
            try {
              l(r);
            } catch (A) {
              Tl(A);
            }
            r.currentTarget = null, l = c;
          }
        else
          for (n = 0; n < o.length; n++) {
            if (s = o[n], c = s.instance, g = s.currentTarget, s = s.listener, c !== l && r.isPropagationStopped())
              break e;
            l = s, r.currentTarget = g;
            try {
              l(r);
            } catch (A) {
              Tl(A);
            }
            r.currentTarget = null, l = c;
          }
      }
    }
  }
  function te(e, a) {
    var t = a[pn];
    t === void 0 && (t = a[pn] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    t.has(o) || (Id(a, e, 2, !1), t.add(o));
  }
  function ti(e, a, t) {
    var o = 0;
    a && (o |= 4), Id(
      t,
      e,
      o,
      a
    );
  }
  var Rl = "_reactListening" + Math.random().toString(36).slice(2);
  function oi(e) {
    if (!e[Rl]) {
      e[Rl] = !0, Xi.forEach(function(t) {
        t !== "selectionchange" && (Ip.has(t) || ti(t, !1, e), ti(t, !0, e));
      });
      var a = e.nodeType === 9 ? e : e.ownerDocument;
      a === null || a[Rl] || (a[Rl] = !0, ti("selectionchange", !1, a));
    }
  }
  function Id(e, a, t, o) {
    switch (Sm(a)) {
      case 2:
        var r = Ah;
        break;
      case 8:
        r = zh;
        break;
      default:
        r = bi;
    }
    t = r.bind(
      null,
      a,
      t,
      e
    ), r = void 0, !An || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (r = !0), o ? r !== void 0 ? e.addEventListener(a, t, {
      capture: !0,
      passive: r
    }) : e.addEventListener(a, t, !0) : r !== void 0 ? e.addEventListener(a, t, {
      passive: r
    }) : e.addEventListener(a, t, !1);
  }
  function ri(e, a, t, o, r) {
    var l = o;
    if ((a & 1) === 0 && (a & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var n = o.tag;
        if (n === 3 || n === 4) {
          var s = o.stateNode.containerInfo;
          if (s === r) break;
          if (n === 4)
            for (n = o.return; n !== null; ) {
              var c = n.tag;
              if ((c === 3 || c === 4) && n.stateNode.containerInfo === r)
                return;
              n = n.return;
            }
          for (; s !== null; ) {
            if (n = Qt(s), n === null) return;
            if (c = n.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              o = l = n;
              continue e;
            }
            s = s.parentNode;
          }
        }
        o = o.return;
      }
    lu(function() {
      var g = l, A = En(t), M = [];
      e: {
        var y = wu.get(e);
        if (y !== void 0) {
          var T = Jr, X = e;
          switch (e) {
            case "keypress":
              if (Kr(t) === 0) break e;
            case "keydown":
            case "keyup":
              T = Kf;
              break;
            case "focusin":
              X = "focus", T = Cn;
              break;
            case "focusout":
              X = "blur", T = Cn;
              break;
            case "beforeblur":
            case "afterblur":
              T = Cn;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = iu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = Rf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = $f;
              break;
            case Cu:
            case ju:
            case ku:
              T = Uf;
              break;
            case Du:
              T = Ff;
              break;
            case "scroll":
            case "scrollend":
              T = Df;
              break;
            case "wheel":
              T = Pf;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = Gf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = cu;
              break;
            case "toggle":
            case "beforetoggle":
              T = ap;
          }
          var V = (a & 4) !== 0, fe = !V && (e === "scroll" || e === "scrollend"), h = V ? y !== null ? y + "Capture" : null : y;
          V = [];
          for (var p = g, v; p !== null; ) {
            var O = p;
            if (v = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || v === null || h === null || (O = No(p, h), O != null && V.push(
              gr(p, O, v)
            )), fe) break;
            p = p.return;
          }
          0 < V.length && (y = new T(
            y,
            X,
            null,
            t,
            A
          ), M.push({ event: y, listeners: V }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (y = e === "mouseover" || e === "pointerover", T = e === "mouseout" || e === "pointerout", y && t !== Sn && (X = t.relatedTarget || t.fromElement) && (Qt(X) || X[Lt]))
            break e;
          if ((T || y) && (y = A.window === A ? A : (y = A.ownerDocument) ? y.defaultView || y.parentWindow : window, T ? (X = t.relatedTarget || t.toElement, T = g, X = X ? Qt(X) : null, X !== null && (fe = x(X), V = X.tag, X !== fe || V !== 5 && V !== 27 && V !== 6) && (X = null)) : (T = null, X = g), T !== X)) {
            if (V = iu, O = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (V = cu, O = "onPointerLeave", h = "onPointerEnter", p = "pointer"), fe = T == null ? y : Ro(T), v = X == null ? y : Ro(X), y = new V(
              O,
              p + "leave",
              T,
              t,
              A
            ), y.target = fe, y.relatedTarget = v, O = null, Qt(A) === g && (V = new V(
              h,
              p + "enter",
              X,
              t,
              A
            ), V.target = v, V.relatedTarget = fe, O = V), fe = O, T && X)
              a: {
                for (V = T, h = X, p = 0, v = V; v; v = Ao(v))
                  p++;
                for (v = 0, O = h; O; O = Ao(O))
                  v++;
                for (; 0 < p - v; )
                  V = Ao(V), p--;
                for (; 0 < v - p; )
                  h = Ao(h), v--;
                for (; p--; ) {
                  if (V === h || h !== null && V === h.alternate)
                    break a;
                  V = Ao(V), h = Ao(h);
                }
                V = null;
              }
            else V = null;
            T !== null && Pd(
              M,
              y,
              T,
              V,
              !1
            ), X !== null && fe !== null && Pd(
              M,
              fe,
              X,
              V,
              !0
            );
          }
        }
        e: {
          if (y = g ? Ro(g) : window, T = y.nodeName && y.nodeName.toLowerCase(), T === "select" || T === "input" && y.type === "file")
            var _ = bu;
          else if (vu(y))
            if (yu)
              _ = dp;
            else {
              _ = up;
              var ee = ip;
            }
          else
            T = y.nodeName, !T || T.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? g && xn(g.elementType) && (_ = bu) : _ = cp;
          if (_ && (_ = _(e, g))) {
            gu(
              M,
              _,
              t,
              A
            );
            break e;
          }
          ee && ee(e, y, g), e === "focusout" && g && y.type === "number" && g.memoizedProps.value != null && Tn(y, "number", y.value);
        }
        switch (ee = g ? Ro(g) : window, e) {
          case "focusin":
            (vu(ee) || ee.contentEditable === "true") && (eo = ee, Nn = g, Lo = null);
            break;
          case "focusout":
            Lo = Nn = eo = null;
            break;
          case "mousedown":
            _n = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            _n = !1, Ou(M, t, A);
            break;
          case "selectionchange":
            if (fp) break;
          case "keydown":
          case "keyup":
            Ou(M, t, A);
        }
        var U;
        if (kn)
          e: {
            switch (e) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break e;
              case "compositionend":
                Y = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break e;
            }
            Y = void 0;
          }
        else
          Pt ? pu(e, t) && (Y = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (Y = "onCompositionStart");
        Y && (du && t.locale !== "ko" && (Pt || Y !== "onCompositionStart" ? Y === "onCompositionEnd" && Pt && (U = nu()) : (Ia = A, zn = "value" in Ia ? Ia.value : Ia.textContent, Pt = !0)), ee = Nl(g, Y), 0 < ee.length && (Y = new uu(
          Y,
          e,
          null,
          t,
          A
        ), M.push({ event: Y, listeners: ee }), U ? Y.data = U : (U = hu(t), U !== null && (Y.data = U)))), (U = op ? rp(e, t) : lp(e, t)) && (Y = Nl(g, "onBeforeInput"), 0 < Y.length && (ee = new uu(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          A
        ), M.push({
          event: ee,
          listeners: Y
        }), ee.data = U)), $p(
          M,
          e,
          g,
          t,
          A
        );
      }
      Fd(M, a);
    });
  }
  function gr(e, a, t) {
    return {
      instance: e,
      listener: a,
      currentTarget: t
    };
  }
  function Nl(e, a) {
    for (var t = a + "Capture", o = []; e !== null; ) {
      var r = e, l = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || l === null || (r = No(e, t), r != null && o.unshift(
        gr(e, r, l)
      ), r = No(e, a), r != null && o.push(
        gr(e, r, l)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Ao(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Pd(e, a, t, o, r) {
    for (var l = a._reactName, n = []; t !== null && t !== o; ) {
      var s = t, c = s.alternate, g = s.stateNode;
      if (s = s.tag, c !== null && c === o) break;
      s !== 5 && s !== 26 && s !== 27 || g === null || (c = g, r ? (g = No(t, l), g != null && n.unshift(
        gr(t, g, c)
      )) : r || (g = No(t, l), g != null && n.push(
        gr(t, g, c)
      ))), t = t.return;
    }
    n.length !== 0 && e.push({ event: a, listeners: n });
  }
  var Pp = /\r\n?/g, eh = /\u0000|\uFFFD/g;
  function em(e) {
    return (typeof e == "string" ? e : "" + e).replace(Pp, `
`).replace(eh, "");
  }
  function am(e, a) {
    return a = em(a), em(e) === a;
  }
  function _l() {
  }
  function me(e, a, t, o, r, l) {
    switch (t) {
      case "children":
        typeof o == "string" ? a === "body" || a === "textarea" && o === "" || Wt(e, o) : (typeof o == "number" || typeof o == "bigint") && a !== "body" && Wt(e, "" + o);
        break;
      case "className":
        Vr(e, "class", o);
        break;
      case "tabIndex":
        Vr(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vr(e, t, o);
        break;
      case "style":
        ou(e, o, l);
        break;
      case "data":
        if (a !== "object") {
          Vr(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (a !== "a" || t !== "href")) {
          e.removeAttribute(t);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(t);
          break;
        }
        o = Qr("" + o), e.setAttribute(t, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof l == "function" && (t === "formAction" ? (a !== "input" && me(e, a, "name", r.name, r, null), me(
            e,
            a,
            "formEncType",
            r.formEncType,
            r,
            null
          ), me(
            e,
            a,
            "formMethod",
            r.formMethod,
            r,
            null
          ), me(
            e,
            a,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (me(e, a, "encType", r.encType, r, null), me(e, a, "method", r.method, r, null), me(e, a, "target", r.target, r, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(t);
          break;
        }
        o = Qr("" + o), e.setAttribute(t, o);
        break;
      case "onClick":
        o != null && (e.onclick = _l);
        break;
      case "onScroll":
        o != null && te("scroll", e);
        break;
      case "onScrollEnd":
        o != null && te("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (t = o.__html, t != null) {
            if (r.children != null) throw Error(i(60));
            e.innerHTML = t;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        t = Qr("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(t, "" + o) : e.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(t, "") : e.removeAttribute(t);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(t, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(t, o) : e.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(t, o) : e.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(t) : e.setAttribute(t, o);
        break;
      case "popover":
        te("beforetoggle", e), te("toggle", e), Br(e, "popover", o);
        break;
      case "xlinkActuate":
        Da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        Da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        Da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        Da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        Da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        Da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        Da(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        Da(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        Da(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        Br(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = jf.get(t) || t, Br(e, t, o));
    }
  }
  function li(e, a, t, o, r, l) {
    switch (t) {
      case "style":
        ou(e, o, l);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (t = o.__html, t != null) {
            if (r.children != null) throw Error(i(60));
            e.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Wt(e, o) : (typeof o == "number" || typeof o == "bigint") && Wt(e, "" + o);
        break;
      case "onScroll":
        o != null && te("scroll", e);
        break;
      case "onScrollEnd":
        o != null && te("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = _l);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ki.hasOwnProperty(t))
          e: {
            if (t[0] === "o" && t[1] === "n" && (r = t.endsWith("Capture"), a = t.slice(2, r ? t.length - 7 : void 0), l = e[Ze] || null, l = l != null ? l[t] : null, typeof l == "function" && e.removeEventListener(a, l, r), typeof o == "function")) {
              typeof l != "function" && l !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(a, o, r);
              break e;
            }
            t in e ? e[t] = o : o === !0 ? e.setAttribute(t, "") : Br(e, t, o);
          }
    }
  }
  function Be(e, a, t) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        te("error", e), te("load", e);
        var o = !1, r = !1, l;
        for (l in t)
          if (t.hasOwnProperty(l)) {
            var n = t[l];
            if (n != null)
              switch (l) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, a));
                default:
                  me(e, a, l, n, t, null);
              }
          }
        r && me(e, a, "srcSet", t.srcSet, t, null), o && me(e, a, "src", t.src, t, null);
        return;
      case "input":
        te("invalid", e);
        var s = l = n = r = null, c = null, g = null;
        for (o in t)
          if (t.hasOwnProperty(o)) {
            var A = t[o];
            if (A != null)
              switch (o) {
                case "name":
                  r = A;
                  break;
                case "type":
                  n = A;
                  break;
                case "checked":
                  c = A;
                  break;
                case "defaultChecked":
                  g = A;
                  break;
                case "value":
                  l = A;
                  break;
                case "defaultValue":
                  s = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null)
                    throw Error(i(137, a));
                  break;
                default:
                  me(e, a, o, A, t, null);
              }
          }
        Pi(
          e,
          l,
          s,
          c,
          g,
          n,
          r,
          !1
        ), Yr(e);
        return;
      case "select":
        te("invalid", e), o = n = l = null;
        for (r in t)
          if (t.hasOwnProperty(r) && (s = t[r], s != null))
            switch (r) {
              case "value":
                l = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "multiple":
                o = s;
              default:
                me(e, a, r, s, t, null);
            }
        a = l, t = n, e.multiple = !!o, a != null ? $t(e, !!o, a, !1) : t != null && $t(e, !!o, t, !0);
        return;
      case "textarea":
        te("invalid", e), l = r = o = null;
        for (n in t)
          if (t.hasOwnProperty(n) && (s = t[n], s != null))
            switch (n) {
              case "value":
                o = s;
                break;
              case "defaultValue":
                r = s;
                break;
              case "children":
                l = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(i(91));
                break;
              default:
                me(e, a, n, s, t, null);
            }
        au(e, o, r, l), Yr(e);
        return;
      case "option":
        for (c in t)
          if (t.hasOwnProperty(c) && (o = t[c], o != null))
            switch (c) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                me(e, a, c, o, t, null);
            }
        return;
      case "dialog":
        te("beforetoggle", e), te("toggle", e), te("cancel", e), te("close", e);
        break;
      case "iframe":
      case "object":
        te("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < vr.length; o++)
          te(vr[o], e);
        break;
      case "image":
        te("error", e), te("load", e);
        break;
      case "details":
        te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        te("error", e), te("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in t)
          if (t.hasOwnProperty(g) && (o = t[g], o != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, a));
              default:
                me(e, a, g, o, t, null);
            }
        return;
      default:
        if (xn(a)) {
          for (A in t)
            t.hasOwnProperty(A) && (o = t[A], o !== void 0 && li(
              e,
              a,
              A,
              o,
              t,
              void 0
            ));
          return;
        }
    }
    for (s in t)
      t.hasOwnProperty(s) && (o = t[s], o != null && me(e, a, s, o, t, null));
  }
  function ah(e, a, t, o) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, l = null, n = null, s = null, c = null, g = null, A = null;
        for (T in t) {
          var M = t[T];
          if (t.hasOwnProperty(T) && M != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = M;
              default:
                o.hasOwnProperty(T) || me(e, a, T, null, o, M);
            }
        }
        for (var y in o) {
          var T = o[y];
          if (M = t[y], o.hasOwnProperty(y) && (T != null || M != null))
            switch (y) {
              case "type":
                l = T;
                break;
              case "name":
                r = T;
                break;
              case "checked":
                g = T;
                break;
              case "defaultChecked":
                A = T;
                break;
              case "value":
                n = T;
                break;
              case "defaultValue":
                s = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(i(137, a));
                break;
              default:
                T !== M && me(
                  e,
                  a,
                  y,
                  T,
                  o,
                  M
                );
            }
        }
        yn(
          e,
          n,
          s,
          c,
          g,
          A,
          l,
          r
        );
        return;
      case "select":
        T = n = s = y = null;
        for (l in t)
          if (c = t[l], t.hasOwnProperty(l) && c != null)
            switch (l) {
              case "value":
                break;
              case "multiple":
                T = c;
              default:
                o.hasOwnProperty(l) || me(
                  e,
                  a,
                  l,
                  null,
                  o,
                  c
                );
            }
        for (r in o)
          if (l = o[r], c = t[r], o.hasOwnProperty(r) && (l != null || c != null))
            switch (r) {
              case "value":
                y = l;
                break;
              case "defaultValue":
                s = l;
                break;
              case "multiple":
                n = l;
              default:
                l !== c && me(
                  e,
                  a,
                  r,
                  l,
                  o,
                  c
                );
            }
        a = s, t = n, o = T, y != null ? $t(e, !!t, y, !1) : !!o != !!t && (a != null ? $t(e, !!t, a, !0) : $t(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        T = y = null;
        for (s in t)
          if (r = t[s], t.hasOwnProperty(s) && r != null && !o.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                me(e, a, s, null, o, r);
            }
        for (n in o)
          if (r = o[n], l = t[n], o.hasOwnProperty(n) && (r != null || l != null))
            switch (n) {
              case "value":
                y = r;
                break;
              case "defaultValue":
                T = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(i(91));
                break;
              default:
                r !== l && me(e, a, n, r, o, l);
            }
        eu(e, y, T);
        return;
      case "option":
        for (var X in t)
          if (y = t[X], t.hasOwnProperty(X) && y != null && !o.hasOwnProperty(X))
            switch (X) {
              case "selected":
                e.selected = !1;
                break;
              default:
                me(
                  e,
                  a,
                  X,
                  null,
                  o,
                  y
                );
            }
        for (c in o)
          if (y = o[c], T = t[c], o.hasOwnProperty(c) && y !== T && (y != null || T != null))
            switch (c) {
              case "selected":
                e.selected = y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                me(
                  e,
                  a,
                  c,
                  y,
                  o,
                  T
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var V in t)
          y = t[V], t.hasOwnProperty(V) && y != null && !o.hasOwnProperty(V) && me(e, a, V, null, o, y);
        for (g in o)
          if (y = o[g], T = t[g], o.hasOwnProperty(g) && y !== T && (y != null || T != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(i(137, a));
                break;
              default:
                me(
                  e,
                  a,
                  g,
                  y,
                  o,
                  T
                );
            }
        return;
      default:
        if (xn(a)) {
          for (var fe in t)
            y = t[fe], t.hasOwnProperty(fe) && y !== void 0 && !o.hasOwnProperty(fe) && li(
              e,
              a,
              fe,
              void 0,
              o,
              y
            );
          for (A in o)
            y = o[A], T = t[A], !o.hasOwnProperty(A) || y === T || y === void 0 && T === void 0 || li(
              e,
              a,
              A,
              y,
              o,
              T
            );
          return;
        }
    }
    for (var h in t)
      y = t[h], t.hasOwnProperty(h) && y != null && !o.hasOwnProperty(h) && me(e, a, h, null, o, y);
    for (M in o)
      y = o[M], T = t[M], !o.hasOwnProperty(M) || y === T || y == null && T == null || me(e, a, M, y, o, T);
  }
  var ni = null, si = null;
  function Ul(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function tm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function om(e, a) {
    if (e === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && a === "foreignObject" ? 0 : e;
  }
  function ii(e, a) {
    return e === "textarea" || e === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var ci = null;
  function th() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ci ? !1 : (ci = e, !0) : (ci = null, !1);
  }
  var rm = typeof setTimeout == "function" ? setTimeout : void 0, oh = typeof clearTimeout == "function" ? clearTimeout : void 0, lm = typeof Promise == "function" ? Promise : void 0, rh = typeof queueMicrotask == "function" ? queueMicrotask : typeof lm < "u" ? function(e) {
    return lm.resolve(null).then(e).catch(lh);
  } : rm;
  function lh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function pt(e) {
    return e === "head";
  }
  function nm(e, a) {
    var t = a, o = 0, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8)
        if (t = l.data, t === "/$") {
          if (0 < o && 8 > o) {
            t = o;
            var n = e.ownerDocument;
            if (t & 1 && br(n.documentElement), t & 2 && br(n.body), t & 4)
              for (t = n.head, br(t), n = t.firstChild; n; ) {
                var s = n.nextSibling, c = n.nodeName;
                n[wo] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || t.removeChild(n), n = s;
              }
          }
          if (r === 0) {
            e.removeChild(l), zr(a);
            return;
          }
          r--;
        } else
          t === "$" || t === "$?" || t === "$!" ? r++ : o = t.charCodeAt(0) - 48;
      else o = 0;
      t = l;
    } while (t);
    zr(a);
  }
  function di(e) {
    var a = e.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var t = a;
      switch (a = a.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          di(t), hn(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(t);
    }
  }
  function nh(e, a, t, o) {
    for (; e.nodeType === 1; ) {
      var r = t;
      if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[wo])
          switch (a) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (l = e.getAttribute("rel"), l === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (l !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (l = e.getAttribute("src"), (l !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (a === "input" && e.type === "hidden") {
        var l = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && e.getAttribute("name") === l)
          return e;
      } else return e;
      if (e = Sa(e.nextSibling), e === null) break;
    }
    return null;
  }
  function sh(e, a, t) {
    if (a === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Sa(e.nextSibling), e === null)) return null;
    return e;
  }
  function mi(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function ih(e, a) {
    var t = e.ownerDocument;
    if (e.data !== "$?" || t.readyState === "complete")
      a();
    else {
      var o = function() {
        a(), t.removeEventListener("DOMContentLoaded", o);
      };
      t.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Sa(e) {
    for (; e != null; e = e.nextSibling) {
      var a = e.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = e.data, a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
          break;
        if (a === "/$") return null;
      }
    }
    return e;
  }
  var fi = null;
  function sm(e) {
    e = e.previousSibling;
    for (var a = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (a === 0) return e;
          a--;
        } else t === "/$" && a++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function im(e, a, t) {
    switch (a = Ul(t), e) {
      case "html":
        if (e = a.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = a.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = a.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function br(e) {
    for (var a = e.attributes; a.length; )
      e.removeAttributeNode(a[0]);
    hn(e);
  }
  var ba = /* @__PURE__ */ new Map(), um = /* @__PURE__ */ new Set();
  function Hl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ka = R.d;
  R.d = {
    f: uh,
    r: ch,
    D: dh,
    C: mh,
    L: fh,
    m: ph,
    X: vh,
    S: hh,
    M: gh
  };
  function uh() {
    var e = Ka.f(), a = Cl();
    return e || a;
  }
  function ch(e) {
    var a = Xt(e);
    a !== null && a.tag === 5 && a.type === "form" ? Cc(a) : Ka.r(e);
  }
  var zo = typeof document > "u" ? null : document;
  function cm(e, a, t) {
    var o = zo;
    if (o && typeof a == "string" && a) {
      var r = da(a);
      r = 'link[rel="' + e + '"][href="' + r + '"]', typeof t == "string" && (r += '[crossorigin="' + t + '"]'), um.has(r) || (um.add(r), e = { rel: e, crossOrigin: t, href: a }, o.querySelector(r) === null && (a = o.createElement("link"), Be(a, "link", e), Re(a), o.head.appendChild(a)));
    }
  }
  function dh(e) {
    Ka.D(e), cm("dns-prefetch", e, null);
  }
  function mh(e, a) {
    Ka.C(e, a), cm("preconnect", e, a);
  }
  function fh(e, a, t) {
    Ka.L(e, a, t);
    var o = zo;
    if (o && e && a) {
      var r = 'link[rel="preload"][as="' + da(a) + '"]';
      a === "image" && t && t.imageSrcSet ? (r += '[imagesrcset="' + da(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (r += '[imagesizes="' + da(
        t.imageSizes
      ) + '"]')) : r += '[href="' + da(e) + '"]';
      var l = r;
      switch (a) {
        case "style":
          l = Oo(e);
          break;
        case "script":
          l = Mo(e);
      }
      ba.has(l) || (e = C(
        {
          rel: "preload",
          href: a === "image" && t && t.imageSrcSet ? void 0 : e,
          as: a
        },
        t
      ), ba.set(l, e), o.querySelector(r) !== null || a === "style" && o.querySelector(yr(l)) || a === "script" && o.querySelector(Tr(l)) || (a = o.createElement("link"), Be(a, "link", e), Re(a), o.head.appendChild(a)));
    }
  }
  function ph(e, a) {
    Ka.m(e, a);
    var t = zo;
    if (t && e) {
      var o = a && typeof a.as == "string" ? a.as : "script", r = 'link[rel="modulepreload"][as="' + da(o) + '"][href="' + da(e) + '"]', l = r;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          l = Mo(e);
      }
      if (!ba.has(l) && (e = C({ rel: "modulepreload", href: e }, a), ba.set(l, e), t.querySelector(r) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Tr(l)))
              return;
        }
        o = t.createElement("link"), Be(o, "link", e), Re(o), t.head.appendChild(o);
      }
    }
  }
  function hh(e, a, t) {
    Ka.S(e, a, t);
    var o = zo;
    if (o && e) {
      var r = Kt(o).hoistableStyles, l = Oo(e);
      a = a || "default";
      var n = r.get(l);
      if (!n) {
        var s = { loading: 0, preload: null };
        if (n = o.querySelector(
          yr(l)
        ))
          s.loading = 5;
        else {
          e = C(
            { rel: "stylesheet", href: e, "data-precedence": a },
            t
          ), (t = ba.get(l)) && pi(e, t);
          var c = n = o.createElement("link");
          Re(c), Be(c, "link", e), c._p = new Promise(function(g, A) {
            c.onload = g, c.onerror = A;
          }), c.addEventListener("load", function() {
            s.loading |= 1;
          }), c.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Gl(n, a, o);
        }
        n = {
          type: "stylesheet",
          instance: n,
          count: 1,
          state: s
        }, r.set(l, n);
      }
    }
  }
  function vh(e, a) {
    Ka.X(e, a);
    var t = zo;
    if (t && e) {
      var o = Kt(t).hoistableScripts, r = Mo(e), l = o.get(r);
      l || (l = t.querySelector(Tr(r)), l || (e = C({ src: e, async: !0 }, a), (a = ba.get(r)) && hi(e, a), l = t.createElement("script"), Re(l), Be(l, "link", e), t.head.appendChild(l)), l = {
        type: "script",
        instance: l,
        count: 1,
        state: null
      }, o.set(r, l));
    }
  }
  function gh(e, a) {
    Ka.M(e, a);
    var t = zo;
    if (t && e) {
      var o = Kt(t).hoistableScripts, r = Mo(e), l = o.get(r);
      l || (l = t.querySelector(Tr(r)), l || (e = C({ src: e, async: !0, type: "module" }, a), (a = ba.get(r)) && hi(e, a), l = t.createElement("script"), Re(l), Be(l, "link", e), t.head.appendChild(l)), l = {
        type: "script",
        instance: l,
        count: 1,
        state: null
      }, o.set(r, l));
    }
  }
  function dm(e, a, t, o) {
    var r = (r = Z.current) ? Hl(r) : null;
    if (!r) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (a = Oo(t.href), t = Kt(
          r
        ).hoistableStyles, o = t.get(a), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = Oo(t.href);
          var l = Kt(
            r
          ).hoistableStyles, n = l.get(e);
          if (n || (r = r.ownerDocument || r, n = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, l.set(e, n), (l = r.querySelector(
            yr(e)
          )) && !l._p && (n.instance = l, n.state.loading = 5), ba.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, ba.set(e, t), l || bh(
            r,
            e,
            t,
            n.state
          ))), a && o === null)
            throw Error(i(528, ""));
          return n;
        }
        if (a && o !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return a = t.async, t = t.src, typeof t == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = Mo(t), t = Kt(
          r
        ).hoistableScripts, o = t.get(a), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function Oo(e) {
    return 'href="' + da(e) + '"';
  }
  function yr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function mm(e) {
    return C({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function bh(e, a, t, o) {
    e.querySelector('link[rel="preload"][as="style"][' + a + "]") ? o.loading = 1 : (a = e.createElement("link"), o.preload = a, a.addEventListener("load", function() {
      return o.loading |= 1;
    }), a.addEventListener("error", function() {
      return o.loading |= 2;
    }), Be(a, "link", t), Re(a), e.head.appendChild(a));
  }
  function Mo(e) {
    return '[src="' + da(e) + '"]';
  }
  function Tr(e) {
    return "script[async]" + e;
  }
  function fm(e, a, t) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + da(t.href) + '"]'
          );
          if (o)
            return a.instance = o, Re(o), o;
          var r = C({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Re(o), Be(o, "style", r), Gl(o, t.precedence, e), a.instance = o;
        case "stylesheet":
          r = Oo(t.href);
          var l = e.querySelector(
            yr(r)
          );
          if (l)
            return a.state.loading |= 4, a.instance = l, Re(l), l;
          o = mm(t), (r = ba.get(r)) && pi(o, r), l = (e.ownerDocument || e).createElement("link"), Re(l);
          var n = l;
          return n._p = new Promise(function(s, c) {
            n.onload = s, n.onerror = c;
          }), Be(l, "link", o), a.state.loading |= 4, Gl(l, t.precedence, e), a.instance = l;
        case "script":
          return l = Mo(t.src), (r = e.querySelector(
            Tr(l)
          )) ? (a.instance = r, Re(r), r) : (o = t, (r = ba.get(l)) && (o = C({}, t), hi(o, r)), e = e.ownerDocument || e, r = e.createElement("script"), Re(r), Be(r, "link", o), e.head.appendChild(r), a.instance = r);
        case "void":
          return null;
        default:
          throw Error(i(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (o = a.instance, a.state.loading |= 4, Gl(o, t.precedence, e));
    return a.instance;
  }
  function Gl(e, a, t) {
    for (var o = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = o.length ? o[o.length - 1] : null, l = r, n = 0; n < o.length; n++) {
      var s = o[n];
      if (s.dataset.precedence === a) l = s;
      else if (l !== r) break;
    }
    l ? l.parentNode.insertBefore(e, l.nextSibling) : (a = t.nodeType === 9 ? t.head : t, a.insertBefore(e, a.firstChild));
  }
  function pi(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy), e.title == null && (e.title = a.title);
  }
  function hi(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy), e.integrity == null && (e.integrity = a.integrity);
  }
  var Bl = null;
  function pm(e, a, t) {
    if (Bl === null) {
      var o = /* @__PURE__ */ new Map(), r = Bl = /* @__PURE__ */ new Map();
      r.set(t, o);
    } else
      r = Bl, o = r.get(t), o || (o = /* @__PURE__ */ new Map(), r.set(t, o));
    if (o.has(e)) return o;
    for (o.set(e, null), t = t.getElementsByTagName(e), r = 0; r < t.length; r++) {
      var l = t[r];
      if (!(l[wo] || l[Le] || e === "link" && l.getAttribute("rel") === "stylesheet") && l.namespaceURI !== "http://www.w3.org/2000/svg") {
        var n = l.getAttribute(a) || "";
        n = e + n;
        var s = o.get(n);
        s ? s.push(l) : o.set(n, [l]);
      }
    }
    return o;
  }
  function hm(e, a, t) {
    e = e.ownerDocument || e, e.head.insertBefore(
      t,
      a === "title" ? e.querySelector("head > title") : null
    );
  }
  function yh(e, a, t) {
    if (t === 1 || a.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return e = a.disabled, typeof a.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function vm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var xr = null;
  function Th() {
  }
  function xh(e, a, t) {
    if (xr === null) throw Error(i(475));
    var o = xr;
    if (a.type === "stylesheet" && (typeof t.media != "string" || matchMedia(t.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var r = Oo(t.href), l = e.querySelector(
          yr(r)
        );
        if (l) {
          e = l._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = Vl.bind(o), e.then(o, o)), a.state.loading |= 4, a.instance = l, Re(l);
          return;
        }
        l = e.ownerDocument || e, t = mm(t), (r = ba.get(r)) && pi(t, r), l = l.createElement("link"), Re(l);
        var n = l;
        n._p = new Promise(function(s, c) {
          n.onload = s, n.onerror = c;
        }), Be(l, "link", t), a.instance = l;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (o.count++, a = Vl.bind(o), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  function Sh() {
    if (xr === null) throw Error(i(475));
    var e = xr;
    return e.stylesheets && e.count === 0 && vi(e, e.stylesheets), 0 < e.count ? function(a) {
      var t = setTimeout(function() {
        if (e.stylesheets && vi(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(t);
      };
    } : null;
  }
  function Vl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) vi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Yl = null;
  function vi(e, a) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Yl = /* @__PURE__ */ new Map(), a.forEach(Eh, e), Yl = null, Vl.call(e));
  }
  function Eh(e, a) {
    if (!(a.state.loading & 4)) {
      var t = Yl.get(e);
      if (t) var o = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Yl.set(e, t);
        for (var r = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), l = 0; l < r.length; l++) {
          var n = r[l];
          (n.nodeName === "LINK" || n.getAttribute("media") !== "not all") && (t.set(n.dataset.precedence, n), o = n);
        }
        o && t.set(null, o);
      }
      r = a.instance, n = r.getAttribute("data-precedence"), l = t.get(n) || o, l === o && t.set(null, r), t.set(n, r), this.count++, o = Vl.bind(this), r.addEventListener("load", o), r.addEventListener("error", o), l ? l.parentNode.insertBefore(r, l.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(r, e.firstChild)), a.state.loading |= 4;
    }
  }
  var Sr = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function qh(e, a, t, o, r, l, n, s) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dn(0), this.hiddenUpdates = dn(null), this.identifierPrefix = o, this.onUncaughtError = r, this.onCaughtError = l, this.onRecoverableError = n, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gm(e, a, t, o, r, l, n, s, c, g, A, M) {
    return e = new qh(
      e,
      a,
      t,
      n,
      s,
      c,
      g,
      M
    ), a = 1, l === !0 && (a |= 24), l = oa(3, null, null, a), e.current = l, l.stateNode = e, a = Wn(), a.refCount++, e.pooledCache = a, a.refCount++, l.memoizedState = {
      element: o,
      isDehydrated: t,
      cache: a
    }, es(l), e;
  }
  function bm(e) {
    return e ? (e = ro, e) : ro;
  }
  function ym(e, a, t, o, r, l) {
    r = bm(r), o.context === null ? o.context = r : o.pendingContext = r, o = at(a), o.payload = { element: t }, l = l === void 0 ? null : l, l !== null && (o.callback = l), t = tt(e, o, a), t !== null && (ia(t, e, a), Io(t, e, a));
  }
  function Tm(e, a) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < a ? t : a;
    }
  }
  function gi(e, a) {
    Tm(e, a), (e = e.alternate) && Tm(e, a);
  }
  function xm(e) {
    if (e.tag === 13) {
      var a = oo(e, 67108864);
      a !== null && ia(a, e, 67108864), gi(e, 67108864);
    }
  }
  var Ll = !0;
  function Ah(e, a, t, o) {
    var r = z.T;
    z.T = null;
    var l = R.p;
    try {
      R.p = 2, bi(e, a, t, o);
    } finally {
      R.p = l, z.T = r;
    }
  }
  function zh(e, a, t, o) {
    var r = z.T;
    z.T = null;
    var l = R.p;
    try {
      R.p = 8, bi(e, a, t, o);
    } finally {
      R.p = l, z.T = r;
    }
  }
  function bi(e, a, t, o) {
    if (Ll) {
      var r = yi(o);
      if (r === null)
        ri(
          e,
          a,
          o,
          Ql,
          t
        ), Em(e, o);
      else if (Mh(
        r,
        e,
        a,
        t,
        o
      ))
        o.stopPropagation();
      else if (Em(e, o), a & 4 && -1 < Oh.indexOf(e)) {
        for (; r !== null; ) {
          var l = Xt(r);
          if (l !== null)
            switch (l.tag) {
              case 3:
                if (l = l.stateNode, l.current.memoizedState.isDehydrated) {
                  var n = xt(l.pendingLanes);
                  if (n !== 0) {
                    var s = l;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; n; ) {
                      var c = 1 << 31 - aa(n);
                      s.entanglements[1] |= c, n &= ~c;
                    }
                    Ma(l), (ue & 6) === 0 && (Ol = Ea() + 500, hr(0));
                  }
                }
                break;
              case 13:
                s = oo(l, 2), s !== null && ia(s, l, 2), Cl(), gi(l, 2);
            }
          if (l = yi(o), l === null && ri(
            e,
            a,
            o,
            Ql,
            t
          ), l === r) break;
          r = l;
        }
        r !== null && o.stopPropagation();
      } else
        ri(
          e,
          a,
          o,
          null,
          t
        );
    }
  }
  function yi(e) {
    return e = En(e), Ti(e);
  }
  var Ql = null;
  function Ti(e) {
    if (Ql = null, e = Qt(e), e !== null) {
      var a = x(e);
      if (a === null) e = null;
      else {
        var t = a.tag;
        if (t === 13) {
          if (e = j(a), e !== null) return e;
          e = null;
        } else if (t === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          e = null;
        } else a !== e && (e = null);
      }
    }
    return Ql = e, null;
  }
  function Sm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (mf()) {
          case _i:
            return 2;
          case Ui:
            return 8;
          case _r:
          case ff:
            return 32;
          case Hi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xi = !1, ht = null, vt = null, gt = null, Er = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map(), bt = [], Oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Em(e, a) {
    switch (e) {
      case "focusin":
      case "focusout":
        ht = null;
        break;
      case "dragenter":
      case "dragleave":
        vt = null;
        break;
      case "mouseover":
      case "mouseout":
        gt = null;
        break;
      case "pointerover":
      case "pointerout":
        Er.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qr.delete(a.pointerId);
    }
  }
  function Ar(e, a, t, o, r, l) {
    return e === null || e.nativeEvent !== l ? (e = {
      blockedOn: a,
      domEventName: t,
      eventSystemFlags: o,
      nativeEvent: l,
      targetContainers: [r]
    }, a !== null && (a = Xt(a), a !== null && xm(a)), e) : (e.eventSystemFlags |= o, a = e.targetContainers, r !== null && a.indexOf(r) === -1 && a.push(r), e);
  }
  function Mh(e, a, t, o, r) {
    switch (a) {
      case "focusin":
        return ht = Ar(
          ht,
          e,
          a,
          t,
          o,
          r
        ), !0;
      case "dragenter":
        return vt = Ar(
          vt,
          e,
          a,
          t,
          o,
          r
        ), !0;
      case "mouseover":
        return gt = Ar(
          gt,
          e,
          a,
          t,
          o,
          r
        ), !0;
      case "pointerover":
        var l = r.pointerId;
        return Er.set(
          l,
          Ar(
            Er.get(l) || null,
            e,
            a,
            t,
            o,
            r
          )
        ), !0;
      case "gotpointercapture":
        return l = r.pointerId, qr.set(
          l,
          Ar(
            qr.get(l) || null,
            e,
            a,
            t,
            o,
            r
          )
        ), !0;
    }
    return !1;
  }
  function qm(e) {
    var a = Qt(e.target);
    if (a !== null) {
      var t = x(a);
      if (t !== null) {
        if (a = t.tag, a === 13) {
          if (a = j(t), a !== null) {
            e.blockedOn = a, xf(e.priority, function() {
              if (t.tag === 13) {
                var o = sa();
                o = mn(o);
                var r = oo(t, o);
                r !== null && ia(r, t, o), gi(t, o);
              }
            });
            return;
          }
        } else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xl(e) {
    if (e.blockedOn !== null) return !1;
    for (var a = e.targetContainers; 0 < a.length; ) {
      var t = yi(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var o = new t.constructor(
          t.type,
          t
        );
        Sn = o, t.target.dispatchEvent(o), Sn = null;
      } else
        return a = Xt(t), a !== null && xm(a), e.blockedOn = t, !1;
      a.shift();
    }
    return !0;
  }
  function Am(e, a, t) {
    Xl(e) && t.delete(a);
  }
  function Ch() {
    xi = !1, ht !== null && Xl(ht) && (ht = null), vt !== null && Xl(vt) && (vt = null), gt !== null && Xl(gt) && (gt = null), Er.forEach(Am), qr.forEach(Am);
  }
  function Kl(e, a) {
    e.blockedOn === a && (e.blockedOn = null, xi || (xi = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      Ch
    )));
  }
  var Zl = null;
  function zm(e) {
    Zl !== e && (Zl = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        Zl === e && (Zl = null);
        for (var a = 0; a < e.length; a += 3) {
          var t = e[a], o = e[a + 1], r = e[a + 2];
          if (typeof o != "function") {
            if (Ti(o || t) === null)
              continue;
            break;
          }
          var l = Xt(t);
          l !== null && (e.splice(a, 3), a -= 3, ys(
            l,
            {
              pending: !0,
              data: r,
              method: t.method,
              action: o
            },
            o,
            r
          ));
        }
      }
    ));
  }
  function zr(e) {
    function a(c) {
      return Kl(c, e);
    }
    ht !== null && Kl(ht, e), vt !== null && Kl(vt, e), gt !== null && Kl(gt, e), Er.forEach(a), qr.forEach(a);
    for (var t = 0; t < bt.length; t++) {
      var o = bt[t];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < bt.length && (t = bt[0], t.blockedOn === null); )
      qm(t), t.blockedOn === null && bt.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
      for (o = 0; o < t.length; o += 3) {
        var r = t[o], l = t[o + 1], n = r[Ze] || null;
        if (typeof l == "function")
          n || zm(t);
        else if (n) {
          var s = null;
          if (l && l.hasAttribute("formAction")) {
            if (r = l, n = l[Ze] || null)
              s = n.formAction;
            else if (Ti(r) !== null) continue;
          } else s = n.action;
          typeof s == "function" ? t[o + 1] = s : (t.splice(o, 3), o -= 3), zm(t);
        }
      }
  }
  function Si(e) {
    this._internalRoot = e;
  }
  Jl.prototype.render = Si.prototype.render = function(e) {
    var a = this._internalRoot;
    if (a === null) throw Error(i(409));
    var t = a.current, o = sa();
    ym(t, o, e, a, null, null);
  }, Jl.prototype.unmount = Si.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var a = e.containerInfo;
      ym(e.current, 2, null, e, null, null), Cl(), a[Lt] = null;
    }
  };
  function Jl(e) {
    this._internalRoot = e;
  }
  Jl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var a = Li();
      e = { blockedOn: null, target: e, priority: a };
      for (var t = 0; t < bt.length && a !== 0 && a < bt[t].priority; t++) ;
      bt.splice(t, 0, e), t === 0 && qm(e);
    }
  };
  var Om = d.version;
  if (Om !== "19.1.0")
    throw Error(
      i(
        527,
        Om,
        "19.1.0"
      )
    );
  R.findDOMNode = function(e) {
    var a = e._reactInternals;
    if (a === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = q(a), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var jh = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$l.isDisabled && $l.supportsFiber)
      try {
        jo = $l.inject(
          jh
        ), ea = $l;
      } catch {
      }
  }
  return Mr.createRoot = function(e, a) {
    if (!S(e)) throw Error(i(299));
    var t = !1, o = "", r = Lc, l = Qc, n = Xc, s = null;
    return a != null && (a.unstable_strictMode === !0 && (t = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (r = a.onUncaughtError), a.onCaughtError !== void 0 && (l = a.onCaughtError), a.onRecoverableError !== void 0 && (n = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (s = a.unstable_transitionCallbacks)), a = gm(
      e,
      1,
      !1,
      null,
      null,
      t,
      o,
      r,
      l,
      n,
      s,
      null
    ), e[Lt] = a.current, oi(e), new Si(a);
  }, Mr.hydrateRoot = function(e, a, t) {
    if (!S(e)) throw Error(i(299));
    var o = !1, r = "", l = Lc, n = Qc, s = Xc, c = null, g = null;
    return t != null && (t.unstable_strictMode === !0 && (o = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks), t.formState !== void 0 && (g = t.formState)), a = gm(
      e,
      1,
      !0,
      a,
      t ?? null,
      o,
      r,
      l,
      n,
      s,
      c,
      g
    ), a.context = bm(null), t = a.current, o = sa(), o = mn(o), r = at(o), r.callback = null, tt(t, r, o), t = o, a.current.lanes = t, Do(a, t), Ma(a), e[Lt] = a.current, oi(e), new Jl(a);
  }, Mr.version = "19.1.0", Mr;
}
var Um;
function Bh() {
  if (Um) return qi.exports;
  Um = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (d) {
        console.error(d);
      }
  }
  return u(), qi.exports = Gh(), qi.exports;
}
var Vh = Bh(), P = Di();
const an = (u) => "prophecy" in u && "allies" in u.prophecy, kr = (u) => "prophecy" in u && "playerText" in u.prophecy, Yh = [
  {
    id: "back",
    name: "Card Back",
    card: "Back of card",
    deck: "back",
    suit: null,
    aria: "Back of card",
    description: "Back of card",
    back: !0,
    extension: ".png"
  },
  {
    id: "swashbuckler",
    name: "Swashbuckler",
    card: "One of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 01 Swashbuckler",
    description: "Those who like money yet give it up freely; likable rogues and rapscallions",
    back: !1,
    value: 1,
    prophecy: {
      dmText: "The treasure lies in the crypt of Endorovich (chapter4, area K84, crypt 7).",
      location: "Castle Ravenloft",
      playerText: "I see the skeleton of a deadly warrior, lying on a bed of stone flanked by gargoyles."
    }
  },
  {
    id: "philanthropist",
    name: "Philanthropist",
    card: "Two of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 02 Philanthropist",
    description: "Charity and giving on a grand scale; those who use wealth to fight evil and sickness",
    back: !1,
    value: 2,
    prophecy: {
      dmText: "The treasure is in the nursery of the Abbey of Saint Markovia (chapter8, area S23).",
      location: "Village of Kresk",
      playerText: "Look to a place where sickness and madness are bred. Where children once cried, the treasure lies still."
    }
  },
  {
    id: "trader",
    name: "Trader",
    card: "Three of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 03 Trader",
    description: "Commerce; smuggling and black markets; fair and equitable trades",
    back: !1,
    value: 3,
    prophecy: {
      dmText: "The treasure lies in the glassblower’s workshop in the Wizard of Wines (chapter 12, area W10).",
      location: "The Wizard of Wines",
      playerText: "Look to the wizard of wines! In wood and sand the treasure hides."
    }
  },
  {
    id: "merchant",
    name: "Merchant",
    card: "Four of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 04 Merchant",
    description: "A rare commodity or business opportunity; deceitful or dangerous business transactions",
    back: !1,
    value: 4,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s wine cellar (chapter 4, area K63).",
      location: "Castle Ravenloft",
      playerText: "Seek a cask that once contained the finest wine, of which not a drop remains."
    }
  },
  {
    id: "guild-member",
    name: "Guild Member",
    card: "Five of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 05 Guild Member",
    description: "Like-minded individuals joined together in a common goal; pride in one's work",
    back: !1,
    value: 5,
    prophecy: {
      dmText: "The treasure lies in the crypt of Artank Swilovich (chapter 4, area K84, crypt 5).",
      location: "Castle Ravenloft",
      playerText: "I see a room full of bottles. It is the tomb of a guild member."
    }
  },
  {
    id: "beggar",
    name: "Beggar",
    card: "Six of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 06 Beggar",
    description: "Sudden change in economic status or fortune",
    back: !1,
    value: 6,
    prophecy: {
      dmText: "The treasure is hidden in Kasimir’s hovel (chapter 5, area N9a).",
      location: "Town of Vallaki",
      playerText: "A wounded elf has what you seek. He will part with the treasure to see his dark dreams fulfilled."
    }
  },
  {
    id: "thief",
    name: "Thief",
    card: "Seven of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 07 Thief",
    description: "Those who steal or burgle; a loss of property, beauty, innocence, friendship, or reputation",
    back: !1,
    value: 7,
    prophecy: {
      dmText: "The treasure is buried in the graveyard at the River Ivlis crossroads (chapter 2, area F).",
      location: "River Ivlis Crossroads",
      playerText: "What you seek lies at the crossroads of life and death, among the buried dead."
    }
  },
  {
    id: "tax-collector",
    name: "Tax Collector",
    card: "Eight of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 08 Tax Collector",
    description: "Corruption; honesty in an otherwise corrupt government or organization",
    back: !1,
    value: 8,
    prophecy: {
      dmText: 'The treasure is hidden in the Vistani treasure wagon (chapter 5, area N9i). "A missing child" refers to Arabelle (see chapter 2, area L).',
      location: "Town of Vallaki",
      playerText: "The Vistani have what you seek. A missing child holds the key to the treasure’s release."
    }
  },
  {
    id: "miser",
    name: "Miser",
    card: "Nine of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 09 Miser",
    description: "Hoarded wealth; those who are irreversibly unhappy or who think money is meaningless",
    back: !1,
    value: 9,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s treasury (chapter 4, area K41).",
      location: "Castle Ravenloft",
      playerText: "Look for a fortress inside a fortress, in a place hidden behind fire."
    }
  },
  {
    id: "rogue",
    name: "Rogue",
    card: "Master of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 10 Rogue",
    description: "Anyone for whom money is important; those who believe money is the key to their success",
    back: !1,
    value: 10,
    prophecy: {
      dmText: "The treasure is hidden in the attic of the Blue Water Inn (chapter 5, area N2q).",
      location: "Town of Vallaki",
      playerText: "I see a nest of ravens. There you will find the prize."
    }
  },
  {
    id: "monk",
    name: "Monk",
    card: "One of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 01 Monk",
    description: "Serenity; inner strength and self-reliance; supreme confidence bereft of arrogance",
    back: !1,
    value: 1,
    prophecy: {
      dmText: "The treasure lies in the main hall of the Abbey of Saint Markovia (chapter 8, area S13).",
      location: "Village of Kresk",
      playerText: "The treasure you seek is hidden behind the sun, in the house of a saint."
    }
  },
  {
    id: "missionary",
    name: "Missionary",
    card: "Two of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 02 Missionary",
    description: "Those who spread wisdom and faith to others; warnings of the spread of fear and ignorance",
    back: !1,
    value: 2,
    prophecy: {
      dmText: "The treasure is hidden inside on the scarecrows in the garden of the Abbey of Saint Markovia (chapter 8, area S9).",
      location: "Village of Kresk",
      playerText: "I see a garden dusted with snow, watched over by a scarecrow with a sackcloth grin. Look not to the garden but to the guardian."
    }
  },
  {
    id: "healer",
    name: "Healer",
    card: "Three of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 03 Healer",
    description: "Healing; a contagious illness, disease, or curse; those who practice the healing arts",
    back: !1,
    value: 3,
    prophecy: {
      dmText: "The treasure lies beneath the gazebo in the Shrine of the White Sun (chapter 8, area S4).",
      location: "Village of Kresk",
      playerText: "Look to the west. Find a pool blessed by the light of the white sun."
    }
  },
  {
    id: "shepherd",
    name: "Shepherd",
    card: "Four of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 04 Shepherd",
    description: "Those who protect others; one who bears a burden far too great to be shouldered alone",
    back: !1,
    value: 4,
    prophecy: {
      dmText: "The treasure lies in the tomb of King Barov and Queen Ravenovia (chapter 4, area K88).",
      location: "Castle Ravenloft",
      playerText: "Find the mother - she who gave birth to evil."
    }
  },
  {
    id: "druid",
    name: "Druid",
    card: "Five of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 05 Druid",
    description: "The ambivalence and cruelty of nature and those who feel drawn to it; inner turmoil",
    back: !1,
    value: 5,
    prophecy: {
      dmText: "The treasure lies at the base of the Gulthias tree (chapter 14, area Y4). Any wereraven encountered in the wilderness can lead the characters to the location.",
      location: "Yester Hill",
      playerText: "An evil tree grows atop a hill of graves where the ancient dead sleep. The ravens can help you find it. Look for the treasure there."
    }
  },
  {
    id: "anarchist",
    name: "Anarchist",
    card: "Six of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 06 Anarchist",
    description: "A fundamental change brought on by one whose beliefs are being put to the test",
    back: !1,
    value: 6,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s hall of bones (chapter 4, area K67).",
      location: "Castle Ravenloft",
      playerText: "I see walls of bones, the chandelier of bones, and table of bones - all that remains of enemies long forgotten."
    }
  },
  {
    id: "charlatan",
    name: "Charlatan",
    card: "Seven of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 07 Charlatan",
    description: "Liars; those who profess to believe one thing but actually believe another",
    back: !1,
    value: 7,
    prophecy: {
      dmText: "The treasure lies in the attic of Old Bonegrinder (chapter 6, areas O4).",
      location: "Old Bonegrinder",
      playerText: "I see a lonely mill on a precipice. The treasure lies within."
    }
  },
  {
    id: "bishop",
    name: "Bishop",
    card: "Eight of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 08 Bishop",
    description: "Strict adherence to a code or a belief; those who plot, plan, and scheme",
    back: !1,
    value: 8,
    prophecy: {
      dmText: "The treasure lies in the sealed treasury of the Amber Temple (chapter 13, area X40).",
      location: "Amber Temple",
      playerText: "What you seek lies in a pile of treasure beyond a set of amber doors."
    }
  },
  {
    id: "traitor",
    name: "Traitor",
    card: "Nine of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 09 Traitor",
    description: "Betrayal by someone close and trusted; a weakening or loss of faith",
    back: !1,
    value: 9,
    prophecy: {
      dmText: "The treasure is hidden in the master bedroom of the Wachterhaus (chapter 5, area N4o).",
      location: "Town of Vallaki",
      playerText: "Look for a wealthy woman. A staunch ally of the devil, she keeps the treasure under lock and key, with the bones of an ancient enemy."
    }
  },
  {
    id: "priest",
    name: "Priest",
    card: "Master of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 10 Priest",
    description: "Enlightenment; those who follow a deity, a system of values, or a higher purpose",
    back: !1,
    value: 10,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s chapel (chapter 4, area K15).",
      location: "Castle Ravenloft",
      playerText: "You will find what you seek in the castle, amid the ruins of a place of supplication"
    }
  },
  {
    id: "transmuter",
    name: "Transmuter",
    card: "One of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 01 Transmuter",
    description: "A new discovery; the coming of unexpected things; unforeseen consequences and chaos",
    back: !1,
    value: 1,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s north tower peak (chapter 4, area K60).",
      location: "Castle Ravenloft",
      playerText: "Go to a place of dizzying heights, where the stone itself is alive!"
    }
  },
  {
    id: "diviner",
    name: "Diviner",
    card: "Two of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 02 Diviner",
    description: "The pursuit of knowledge tempered by wisdom; truth and honesty; sages and prophecy",
    back: !1,
    value: 2,
    prophecy: {
      dmText: 'The treasure lies in Madam Eva’s encampment (chapter 2, area G). If she is the one performing the card reading, she says, "I think the treasure is under my very nose!"',
      location: "Tser Pool Encampment",
      playerText: "Look to the one who sees all. The treasure is hidden in her camp."
    }
  },
  {
    id: "enchanter",
    name: "Enchanter",
    card: "Three of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 03 Enchanter",
    description: "Inner turmoil that comes from confusion, fear of failure, or false information",
    back: !1,
    value: 3,
    prophecy: {
      dmText: 'The treasure lies under Marina’s monument in Berez (chapter 10, area U5). "The master of the marsh" refers to Burgomaster Lazlo Ulrich (area U2), whose ghost can point the characters toward the monument.',
      location: "Ruins of Berez",
      playerText: "I see a kneeling woman - a rose of great beauty plucked too soon. The master of the marsh knows of whom I speak."
    }
  },
  {
    id: "abjurer",
    name: "Abjurer",
    card: "Four of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 04 Abjurer",
    description: "Those guided by logic and reasoning; warns of an overlooked clue or piece of information",
    back: !1,
    value: 4,
    prophecy: {
      dmText: 'The treasure lies in the beacon of Argynvostholt (chapter 7, area Q53). "Great stone dragon" refers to the statue in area Q1.',
      location: "Argynvostholt",
      playerText: "I see a fallen house guarded by a great stone dragon. Look to the highest peak."
    }
  },
  {
    id: "elementalist",
    name: "Elementalist",
    card: "Five of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 05 Elementalist",
    description: "The triumph of nature over civilization; natural disasters and bountiful harvests",
    back: !1,
    value: 5,
    prophecy: {
      dmText: "The treasure is inside a model of Castle Ravenloft in the Amber Temple (chapter 13, area X20).",
      location: "Amber Temple",
      playerText: "The treasure is hidden in a small castle beneath a mountain, guarded by amber giants."
    }
  },
  {
    id: "evoker",
    name: "Evoker",
    card: "Six of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 06 Evoker",
    description: "Magical or supernatural power that can't be controlled; magic for destructive ends",
    back: !1,
    value: 6,
    prophecy: {
      dmText: "The treasure is hidden in the crypt of Gralmore Nimblenobs (chapter 4, area K84, crypt 37).",
      location: "Castle Ravenloft",
      playerText: "Search for the crypt of the wizard ordinaire. His staff is the key."
    }
  },
  {
    id: "illusionist",
    name: "Illusionist",
    card: "Seven of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 07 Illusionist",
    description: "Lies and deceit; grand conspiracies; secret societies; the presence of a dupe or a saboteur",
    back: !1,
    value: 7,
    prophecy: {
      dmText: "The treasure lies in Rictavio’s carnival wagon (chapter 5, area N5).",
      location: "Town of Vallaki",
      playerText: "A man is not what he seems. He comes here in a carnival wagon. Therein lies what you seek."
    }
  },
  {
    id: "necromancer",
    name: "Necromancer",
    card: "Eight of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 08 Necromancer",
    description: "Unnatural events and unhealthy obsessions; those who follow a destructive path",
    back: !1,
    value: 8,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s study (chapter 4, area K37).",
      location: "Castle Ravenloft",
      playerText: "A woman hangs above a roaring fire. Find her and you will find the treasure."
    }
  },
  {
    id: "conjurer",
    name: "Conjurer",
    card: "Nine of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 09 Conjurer",
    description: "The coming of an unexpected supernatural threat; those who think of themselves as gods",
    back: !1,
    value: 9,
    prophecy: {
      dmText: "The treasure is in Baba Lysaga’s hut (chapter 10, area U3).",
      location: "Ruins of Berez",
      playerText: "I see a dead village, drowned by a river, ruled by one who has brought great evil into the world."
    }
  },
  {
    id: "wizard",
    name: "Wizard",
    card: "Master of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 10 Wizard",
    description: "Mystery and riddles; the unknown; those who crave magical power and great knowledge",
    back: !1,
    value: 10,
    prophecy: {
      dmText: "The treasure lies on the top floor of Van Richten’s Tower (chapter 11, area V7).",
      location: "Town of Vallaki",
      playerText: "Look for a wizard’s tower on a lake. Let the wizard’s name and servant guide you to that which you seek."
    }
  },
  {
    id: "avenger",
    name: "Avenger",
    card: "One of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 01 Avenger",
    description: "Justice and revenge for great wrongs; those on a quest to rid the world of great evil",
    back: !1,
    value: 1,
    prophecy: {
      dmText: "The treasure is in the possession of Vladimir Horngaard in Argynvostholt (chapter 7, area Q36).",
      location: "Argynvostholt",
      playerText: "The treasure lies in a dragon’s house, in hands once clean and now corrupted."
    }
  },
  {
    id: "paladin",
    name: "Paladin",
    card: "Two of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 02 Paladin",
    description: "Just and noble warriors; those who live by a code of honor and integrity",
    back: !1,
    value: 2,
    prophecy: {
      dmText: "The treasure lies in Sergei’s tomb (chapter 4, area K85).",
      location: "Castle Ravenloft",
      playerText: "I see a sleeping prince, a servant of the light and the brother of darkness. The treasure lies with him."
    }
  },
  {
    id: "soldier",
    name: "Soldier",
    card: "Three of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 03 Soldier",
    description: "War and sacrifice; the stamina to endure great hardship",
    back: !1,
    value: 3,
    prophecy: {
      dmText: "The treasure lies on the rooftop of the Tsolenka Pass guard tower (chapter 9, area T6).",
      location: "Tsolenka Pass",
      playerText: "Go to the mountains. Climb the white tower guarded by golden knights."
    }
  },
  {
    id: "mercenary",
    name: "Mercenary",
    card: "Four of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 04 Mercenary",
    description: "Inner strength and fortitude; those who fight for power or wealth",
    back: !1,
    value: 4,
    prophecy: {
      dmText: "The treasure lies in a crypt in Castle Ravenloft (chapter 4, area K84, crypt 31).",
      location: "Castle Ravenloft",
      playerText: "The thing you seek lies with the dead, under mountains of gold coins."
    }
  },
  {
    id: "myrmidon",
    name: "Myrmidon",
    card: "Five of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 05 Myrmidon",
    description: "Great heroes; a sudden reversal of fate; the triumph of the underdog over a mighty enemy",
    back: !1,
    value: 5,
    prophecy: {
      dmText: "The treasure lies in the shrine of the Mother Night in the werewolf den (chapter 15, area Z7).",
      location: "Werewolf Den",
      playerText: "Look for a den of wolves in the hills overlooking a mountain lake. The treasure belongs to Mother Night."
    }
  },
  {
    id: "berserker",
    name: "Berserker",
    card: "Six of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 06 Berserker",
    description: "The brutal and barbaric side of warfare; bloodlust; those with a bestial nature",
    back: !1,
    value: 6,
    prophecy: {
      dmText: 'The treasure lies in the crypt of General Kroval "Mad Dog" Grislek (chapter 4, area K84, crypt 38).',
      location: "Castle Ravenloft",
      playerText: "Find the Mad Dog’s crypt. The treasure lies within, beneath the blackened bones."
    }
  },
  {
    id: "hooded-one",
    name: "Hooded One",
    card: "Seven of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 07 Hooded One",
    description: "Bigotry, intolerance, and xenophobia; a mysterious presence or newcomer",
    back: !1,
    value: 7,
    prophecy: {
      dmText: "The treasure inside the head of a giant statue in the Amber Temple (chapter 13, area X5a).",
      location: "Amber Temple",
      playerText: "I see a faceless god. He awaits you at the end of a long and winding road, deep in the mountains."
    }
  },
  {
    id: "dictator",
    name: "Dictator",
    card: "Eight of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 08 Dictator",
    description: "All that is wrong with government and leadership; those who rule through fear and violence",
    back: !1,
    value: 8,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s audience hall (chapter 4, area K25).",
      location: "Castle Ravenloft",
      playerText: "I see a throne fit for a king."
    }
  },
  {
    id: "torturer",
    name: "Torturer",
    card: "Nine of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 09 Torturer",
    description: "The coming of suffering or merciless cruelty; one who is irredeemably evil or sadistic",
    back: !1,
    value: 9,
    prophecy: {
      dmText: "The treasure is in the attic of the burgomaster’s mansion in Vallaki (chapter 5, area N3s).",
      location: "Town of Vallaki",
      playerText: "There is a town where all is not well. There you will find a house of corruption, and within, a dark room full of still ghosts."
    }
  },
  {
    id: "warrior",
    name: "Warrior",
    card: "Master of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 10 Warrior",
    description: "Strength and force personified; violence; those who use force to accomplish their goals",
    back: !1,
    value: 10,
    prophecy: {
      dmText: "The treasure lies in Strahd’s tomb (chapter 4, area K86).",
      location: "Castle Ravenloft",
      playerText: 'That which you seek lies in the womb of darkness, the devil’s "lair": the one place to which he must return.'
    }
  },
  {
    id: "artifact",
    name: "Artifact",
    card: "The Artifact",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Artifact",
    description: "The importance of some physical object that must be obtained, protected, or destroyed at all costs",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Rictavio",
          playerText: "Look for an entertaining man with a monkey. This man is more than he seems.",
          dmText: `This card refers to Rictavio (appendix D), who can be found at the Blue Water Inn, in Vallaki (chapter 5, area N2). Normally reluctant to accompany the characters, Rictavio changes his tune if the characters tell him about the card reading. He sheds his disguise and introduces himself as Dr. Rudolf van Richten.

The characters might think that Gadof Blinsky, the toymaker of Vallaki (area N7), is the figure they seek, because he has a pet monkey. If the speak to him about the possibility, Blinsky jokes that he and the monkey are "old friends," but if the characters ask him to come with them to fight Strahd, he politely declines. If the characters tell him about the tarokka reading, Blinsky admits that he acquired the monkey from a half-elf carnival ringmaster named Rictavio.`
        }
      ],
      strahd: {
        playerText: "He lurks in the darkness where the morning light once shone - a sacred place.",
        dmText: "Strahd faces the characters in the chapel (area K15)."
      }
    }
  },
  {
    id: "beast",
    name: "Beast",
    card: "The Beast",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Beast",
    description: "Great rage or passion; something bestial or malevolent hiding in plain sight or lurking just below the surface",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Zuleika Toranescu",
          playerText: "A werewolf holds a secret hatred for your enemy. Use her hatred to your advantage.",
          dmText: "This card refers to the werewolf Zuleika Toranescu (chapter 15, area Z7). She will accompany the characters if they promise to avenge her mate, Emil, by killing the leader of her pack, Kiril Stoyanovich."
        }
      ],
      strahd: {
        playerText: "The beast sits on his dark throne.",
        dmText: "Strahd faces the characters in the audience hall (area K25)."
      }
    }
  },
  {
    id: "broken-one",
    name: "Broken One",
    card: "The Broken One",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Broken One",
    description: "Defeat, failure, and despair; the loss of something or someone important, without which one feels incomplete",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Mad Mage",
          playerText: "Your greatest ally will be a wizard. His mind is broken, but his spells are strong.",
          dmText: "This card refers to the Mad Mage of Mount Baratok (chapter 2, area M)."
        },
        {
          ally: "Donavich",
          playerText: "I see a man of faith whose sanity hangs by a thread. He has lost someone close to him.",
          dmText: "This card refers to Donavich, the priest in the village of Barovia (chapter 3, area E5). He will not accompany the characters until his son Doru, is dead and buried."
        }
      ],
      strahd: {
        playerText: "He haunts the tomb of the man he envied above all.",
        dmText: "Strahd faces the characters in Sergei’s tomb (area K86)."
      }
    }
  },
  {
    id: "darklord",
    name: "Darklord",
    card: "The Darklord",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Darklord",
    description: "A single, powerful individual of an evil nature, one whose goals have enormous and far-reaching consequences",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "No one",
          playerText: 'Ah, the worst of all "truths": You must face the evil of this land alone!',
          dmText: "There is no NPC who can inspire the characters."
        }
      ],
      strahd: {
        playerText: "He lurks in the depths of darkness, in the one place to which he must return.",
        dmText: "Strahd faces the characters in his tomb (area K86)."
      }
    }
  },
  {
    id: "donjon",
    name: "Donjon",
    card: "The Donjon",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Donjon",
    description: "Isolation and imprisonment; being so conservative in thinking as to be a prisoner of one's own beliefs",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Victor Vallakovich",
          playerText: "Search for a troubled young man surrounded by wealth and madness. His home is his prison",
          dmText: "This card refers to Victor Vallakovich (chapter 5, area N3t). Realizing that the characters are the key to his salvation, he enthusiastically leaves home and accompanies them to Castle Ravenloft."
        },
        {
          ally: "Stella Wachter",
          playerText: "Find a girl driven to insanity, locked in the heart of her dead father’s house. Curing her madness is key to your success.",
          dmText: "This card refers to Stella Wachter (chapter 5, area N4n). She grants the party no benefit unless her madness is cured. With her wits restored, Stella is happy to join the party and leave her rotten family behind."
        }
      ],
      strahd: {
        playerText: "He lurks in a hall of bones, in the dark pits of his castle.",
        dmText: "Strahd faces the characters in the hall of bones (area K67)."
      }
    }
  },
  {
    id: "executioner",
    name: "Executioner",
    card: "The Executioner",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Executioner",
    description: "The imminent death of one rightly or wrongly convicted of a crime; false accusations and unjust prosecution",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Ismark Kolyanovich",
          playerText: 'Seek out the brother of the devil’s bride. They call him "the lesser," but he has a powerful soul',
          dmText: "This card refers to Ismark Kolyanovich (chapter 3, area E2). Ismark won’t accompany the characters to Castle Ravenloft until he knows that his sister, Ireena Kolyana, is safe"
        }
      ],
      strahd: {
        playerText: "I see a dark figure on a balcony, looking down upon this tortured land with a twisted smile.",
        dmText: "Strahd faces the characters at the overlook (area K6)."
      }
    }
  },
  {
    id: "ghost",
    name: "Ghost",
    card: "The Ghost",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Ghost",
    description: "The looming past; the return of an old enemy or the discovery of a secret buried long ago",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Sir Godfrey Gwilym",
          playerText: "I see a fallen paladin of the fallen order of knights. He lingers like a ghost in a dead dragon’s lair.",
          dmText: "This card refers to the revenant Sir Godfrey Gwilym (chapter 7, area Q37). Although initially unwilling to accompany the characters, he will do so if the characters convince him that the honor of the Order of the Silver Dragon can be restored with his help. Doing this requires a successful DC 15 Charisma (Persuasion) check."
        },
        {
          ally: "Sir Klutz",
          playerText: "Stir the spirit of the clumsy knight whose crypt lies deep within the castle.",
          dmText: "This card refers to Sir Klutz the phantom warrior (chapter 4, area K84, crypt 33). If Sir Klutz is Strahd’s enemy, then the phantom warrior disappears not after seven days, but only after he or Strahd is reduced to 0 hit points."
        }
      ],
      strahd: {
        playerText: "Look to the father’s tomb.",
        dmText: "Strahd faces the characters in the tomb of King Barov and Queen Ravenovia (area K88)."
      }
    }
  },
  {
    id: "horseman",
    name: "Horseman",
    card: "The Horseman",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Horseman",
    description: "Death; disaster in the form of the loss of wealth or property, a horrible defeat, or the end of a bloodline",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Nikolai Wachter",
          playerText: "I see a dead man of noble birth, guarded by his widow. Return to life the dead man’s corpse, and he will be your staunch ally.",
          dmText: `This card refers to Nikolai Wachter the elder, who is dead (chapter 5, area N4o). If the characters cast a raise dead spell or a resurrection spell on his preserved corpse, Nikokai (LN male human noble) agrees to help the characters once he feels well enough, despite his wife’s protests. Although his family has long supported Strahd, Nikolai came to realize toward the end of his life that Strahd must be destroyed to save Barovia.

If the characters don’t have the means to raise Nikolai from the dead, Rictavio (appendix D) gives them a spell scroll of raise dead if he learns of their need. If they’re staying at the Blue Water Inn, he leaves the scroll in one of their rooms.`
        },
        {
          ally: "Arrigal",
          playerText: "A man of death named Arrigal will forsake his dark lord to serve your cause. Beware! He has a rotten soul.",
          dmText: "This card refers to the Vistani assassin Arrigal (chapter 5, area N9c). If the characters mention this card reading to him he accepts his fate and accompanies them. If the characters succeed in defeating Strahd, Arrigal betrays and attacks them, believing that he is destined to become Barovia’s new lord."
        }
      ],
      strahd: {
        playerText: "He lurks in the one place to which he must return - a place of death.",
        dmText: "Strahd faces the characters in his tomb (area K86)."
      }
    }
  },
  {
    id: "innocent",
    name: "Innocent",
    card: "The Innocent",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Innocent",
    description: "A being of great importance whose life is in danger (who might be helpless or simply unaware of the peril)",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Parriwimple",
          playerText: "I see a young man with a kind heart. A mother’s boy! He is strong in body but weak of mind. Seek him out in the village of Barovia.",
          dmText: "This card refers to Parriwimple (see chapter 3, area E1). Although he’s a simpleton, he won’t travel to Castle Ravenloft without good cause. Characters can manipulate him into going by preying on his good heart. For instance, he might go there to help rescue missing Barovians, or to save the life of Ireena Kolyana, who is very beautiful. The characters must somehow deal with Bildrath, Parriwimple’s employer, who won’t let the foolish boy go to the castle for any reason."
        },
        {
          ally: "Ireena Kolyana",
          playerText: "Evil’s bride is the one you seek!",
          dmText: "This card refers to Ireena Kolyana (chapter 3, area E4). Her brother Ismark, opposes the idea of Ireena’s being taken to Castle Ravenloft, but he insists on going there once the characters tell her about the card reading. Ireena won’t accompany the characters however, until Kolyan Indirovich’s body is laid to rest in the cemetery."
        }
      ],
      strahd: {
        playerText: "He dwells with the one whose blood sealed his doom, a brother of light snuffed out too soon.",
        dmText: "Strahd faces the characters in Sergei’s tomb (area K85)."
      }
    }
  },
  {
    id: "marionette",
    name: "Marionette",
    card: "The Marionette",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Marionette",
    description: "The presence of a spy or a minion of some greater power; an encounter with a puppet or an underling",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Pidlwick II",
          playerText: "What horror is this? I see a man made by a man. Ageless and alone, it haunts the towers of the castle.",
          dmText: "This card refers to Pidlwick II (chapter 4, area K59 & appendix D)"
        },
        {
          ally: "Cloven Belview",
          playerText: "Look for a man of music, a man with two heads. He lives in a place of great hunger and sorrow.",
          dmText: "This card refers to Cloven Belview (chapter 8, area S17), the two-headed mongrelfolk. Clovin serves the Abbot out of fear and perverse sense of loyalty. His job is to deliver food to the other mongrelfolk, whom he abhors. If abbot still lives, Clovin doesn’t want to earn the master’s ire by attempting to leave, and he refuses to accompany the characters. But if the Abbot dies, Clovin doesn’t have any reason to remain in the abbey, so he’s willing to come along if he is bribed with wine. Clovin provides no benefit to the party without his Viol."
        }
      ],
      strahd: {
        playerText: "Look to great heights. Find the beating heart of the castle. He waits nearby.",
        dmText: "Strahd faces the characters in the north tower peak (area K60)."
      }
    }
  },
  {
    id: "mists",
    name: "Mists",
    card: "The Mists",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Mists",
    description: "Something unexpected or mysterious that can't be avoided; a great quest or journey that will try one's spirit",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Ezmerelda d’Avenir",
          playerText: "A vistana wanders this land alone, searching for her mentor. She does not stay in one place for long. Seek her out at Saint Markovia’s abbey, near the mists.",
          dmText: "This card refers to Ezmerelda d’Avenir (appendix D). She can be found in the Abbey of Saint Markovia (see chapter 8, area S19) as well as several other locations throughout Barovia."
        }
      ],
      strahd: {
        playerText: "The cards can’t see where the evil lurks. The mists obscure all.",
        dmText: "This card offers no clue about where the final showdown with Strahd will occur. It can happen anywhere you like in Castle Ravenloft. Alternatively, Madam Eva tells the characters to return to her after at least three days, and she will consult the cards again for them, but only to discern the location of their enemy."
      }
    }
  },
  {
    id: "raven",
    name: "Raven",
    card: "The Raven",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Raven",
    description: "A hidden source of information; a fortunate turn of events; a secret potential for good",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Davian Martikov",
          playerText: "Find the leader of the feathered ones who live among the vines. Though old, he has one more fight left in him.",
          dmText: 'This card refers to Davian Martikov (chapter 12, "The Wizard of the Wines"). The old wereraven, realizing that he has a chance to end Strahd’s tyranny, leaves his vineyard and winery in the capable hands of his sons, Adrian and Elvir. But before he travels to Castle Ravenloft to face Strahd, Davian insists on reconciling with his third son, Urwin Martikov (chapter 5, area N2).'
        }
      ],
      strahd: {
        playerText: "Look to the mother’s tomb.",
        dmText: "Strahd faces the characters in the tomb of King Barov and Queen Ravenovia (area K88)."
      }
    }
  },
  {
    id: "seer",
    name: "Seer",
    card: "The Seer",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Seer",
    description: "Inspiration and keen intellect; a future event, the outcome of which will hinge on a clever mind",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Kasimir Velikov",
          playerText: "Look for a dusk elf living among the Vistani. He has suffered a great loss and is haunted by dark dreams. Help him, and he will help you in return.",
          dmText: "This card refers to Kasimir Velikov (chapter 5, area N9a). The dusk elf accompanies the characters to Castle Ravenloft only after they lead him to the Amber Temple and find the means to resurrect his dead sister, Patrina Velikovna."
        }
      ],
      strahd: {
        playerText: "He waits for you in a place of wisdom, warmth, and despair. Great secrets are there.",
        dmText: "Strahd faces the characters in the study (area K37)."
      }
    }
  },
  {
    id: "tempter",
    name: "Tempter",
    card: "The Tempter",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Tempter",
    description: "One who has been compromised or led astray by temptation or foolishness; one who tempts others for evil ends",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Arabelle",
          playerText: "I see a child - a Vistana. You must hurry, for her fate hangs in the balance. Find her at the lake!",
          dmText: "This card refers to Arabelle (chapter 2, area L). She gladly joins the party. But if she returns to her camp (chapter 5, area N9), her father Luvash, refuses to let her leave."
        },
        {
          ally: "Vasilka",
          playerText: "I hear a wedding bell, or perhaps a death knell. It calls the to a mountainside abbey, wherein you will find a woman who is more than the sum of her parts.",
          dmText: "This card refers to Vasilka, the flesh golem (chapter 8, area S13)."
        }
      ],
      strahd: {
        playerText: "I see a secret place - a vault of temptation hidden behind a woman of great beauty. The evil waits atop his tower of treasure.",
        dmText: 'Strahd confronts the characters in the treasury (area K41). "A woman of great beauty" refers to the portrait of Tatyana hanging in the castle’s study (area K37), which contains a secret door that leads to the treasury.'
      }
    }
  }
], Lh = {
  back: {
    name: "Verso da Carta",
    card: "Verso da carta",
    aria: "Verso da carta",
    description: "Verso da carta"
  },
  swashbuckler: {
    name: "Espadachim",
    card: "Um de Moedas",
    aria: "Moedas 01 Espadachim",
    description: "Pessoas que gostam de dinheiro, mas abrem mão dele livremente; trapaceiros e malandros simpáticos",
    prophecy: {
      dmText: "O tesouro está na cripta de Endorovich (capítulo 4, área K84, cripta 7).",
      location: "Castelo Ravenloft",
      playerText: "Vejo o esqueleto de um guerreiro mortal, deitado em uma cama de pedra ladeada por gárgulas."
    }
  },
  philanthropist: {
    name: "Filantropo",
    card: "Dois de Moedas",
    aria: "Moedas 02 Filantropo",
    description: "Caridade e generosidade em grande escala; aqueles que usam riqueza para combater o mal e a doença",
    prophecy: {
      dmText: "O tesouro está no berçário da Abadia de Santa Markovia (capítulo 8, área S23).",
      location: "Vila de Krezk",
      playerText: "Procurem um lugar onde doença e loucura são criadas. Onde crianças choraram um dia, o tesouro ainda repousa."
    }
  },
  trader: {
    name: "Comerciante",
    card: "Três de Moedas",
    aria: "Moedas 03 Comerciante",
    description: "Comércio; contrabando e mercados clandestinos; trocas justas e equilibradas",
    prophecy: {
      dmText: "O tesouro está na oficina do soprador de vidro no Mago dos Vinhos (capítulo 12, área W10).",
      location: "O Mago dos Vinhos",
      playerText: "Procurem o mago dos vinhos! Em madeira e areia, o tesouro se esconde."
    }
  },
  merchant: {
    name: "Mercador",
    card: "Quatro de Moedas",
    aria: "Moedas 04 Mercador",
    description: "Uma mercadoria rara ou oportunidade de negócio; transações comerciais enganosas ou perigosas",
    prophecy: {
      dmText: "O tesouro está na adega do Castelo Ravenloft (capítulo 4, área K63).",
      location: "Castelo Ravenloft",
      playerText: "Procurem um barril que um dia conteve o melhor vinho, do qual nem uma gota restou."
    }
  },
  "guild-member": {
    name: "Membro de Guilda",
    card: "Cinco de Moedas",
    aria: "Moedas 05 Membro de Guilda",
    description: "Indivíduos de ideias semelhantes unidos por um objetivo comum; orgulho no próprio trabalho",
    prophecy: {
      dmText: "O tesouro está na cripta de Artank Swilovich (capítulo 4, área K84, cripta 5).",
      location: "Castelo Ravenloft",
      playerText: "Vejo uma sala cheia de garrafas. É a tumba de um membro de guilda."
    }
  },
  beggar: {
    name: "Mendigo",
    card: "Seis de Moedas",
    aria: "Moedas 06 Mendigo",
    description: "Mudança súbita de condição econômica ou de fortuna",
    prophecy: {
      dmText: "O tesouro está escondido no casebre de Kasimir (capítulo 5, área N9a).",
      location: "Cidade de Vallaki",
      playerText: "Um elfo ferido tem o que vocês procuram. Ele abrirá mão do tesouro para ver seus sonhos sombrios cumpridos."
    }
  },
  thief: {
    name: "Ladrão",
    card: "Sete de Moedas",
    aria: "Moedas 07 Ladrão",
    description: "Aqueles que roubam ou furtam; perda de propriedade, beleza, inocência, amizade ou reputação",
    prophecy: {
      dmText: "O tesouro está enterrado no cemitério da encruzilhada do Rio Ivlis (capítulo 2, área F).",
      location: "Encruzilhada do Rio Ivlis",
      playerText: "O que vocês procuram está na encruzilhada entre a vida e a morte, entre os mortos sepultados."
    }
  },
  "tax-collector": {
    name: "Coletor de Impostos",
    card: "Oito de Moedas",
    aria: "Moedas 08 Coletor de Impostos",
    description: "Corrupção; honestidade em um governo ou organização corrupta",
    prophecy: {
      dmText: 'O tesouro está escondido no vagão de tesouros dos Vistani (capítulo 5, área N9i). "Uma criança desaparecida" refere-se a Arabelle (veja o capítulo 2, área L).',
      location: "Cidade de Vallaki",
      playerText: "Os Vistani têm o que vocês procuram. Uma criança desaparecida guarda a chave para libertar o tesouro."
    }
  },
  miser: {
    name: "Avarento",
    card: "Nove de Moedas",
    aria: "Moedas 09 Avarento",
    description: "Riqueza acumulada; aqueles que são irremediavelmente infelizes ou acreditam que dinheiro não tem valor",
    prophecy: {
      dmText: "O tesouro está na tesouraria do Castelo Ravenloft (capítulo 4, área K41).",
      location: "Castelo Ravenloft",
      playerText: "Procurem uma fortaleza dentro de uma fortaleza, em um lugar oculto atrás do fogo."
    }
  },
  rogue: {
    name: "Ladino",
    card: "Mestre de Moedas",
    aria: "Moedas 10 Ladino",
    description: "Qualquer pessoa para quem o dinheiro é importante; aqueles que acreditam que dinheiro é a chave do sucesso",
    prophecy: {
      dmText: "O tesouro está escondido no sótão da Estalagem Água Azul (capítulo 5, área N2q).",
      location: "Cidade de Vallaki",
      playerText: "Vejo um ninho de corvos. Lá vocês encontrarão o prêmio."
    }
  },
  monk: {
    name: "Monge",
    card: "Um de Glifos",
    aria: "Glifos 01 Monge",
    description: "Serenidade; força interior e autossuficiência; confiança suprema sem arrogância",
    prophecy: {
      dmText: "O tesouro está no salão principal da Abadia de Santa Markovia (capítulo 8, área S13).",
      location: "Vila de Krezk",
      playerText: "O tesouro que vocês procuram está escondido atrás do sol, na casa de uma santa."
    }
  },
  missionary: {
    name: "Missionário",
    card: "Dois de Glifos",
    aria: "Glifos 02 Missionário",
    description: "Aqueles que espalham sabedoria e fé; alertas sobre a propagação do medo e da ignorância",
    prophecy: {
      dmText: "O tesouro está escondido dentro de um dos espantalhos no jardim da Abadia de Santa Markovia (capítulo 8, área S9).",
      location: "Vila de Krezk",
      playerText: "Vejo um jardim polvilhado de neve, vigiado por um espantalho com um sorriso de pano. Não olhem para o jardim, mas para o guardião."
    }
  },
  healer: {
    name: "Curandeiro",
    card: "Três de Glifos",
    aria: "Glifos 03 Curandeiro",
    description: "Cura; uma enfermidade contagiosa, doença ou maldição; aqueles que praticam as artes da cura",
    prophecy: {
      dmText: "O tesouro está sob o gazebo no Santuário do Sol Branco (capítulo 8, área S4).",
      location: "Vila de Krezk",
      playerText: "Olhem para o oeste. Encontrem uma piscina abençoada pela luz do sol branco."
    }
  },
  shepherd: {
    name: "Pastor",
    card: "Quatro de Glifos",
    aria: "Glifos 04 Pastor",
    description: "Aqueles que protegem os outros; alguém que carrega um fardo pesado demais para suportar sozinho",
    prophecy: {
      dmText: "O tesouro está na tumba do Rei Barov e da Rainha Ravenovia (capítulo 4, área K88).",
      location: "Castelo Ravenloft",
      playerText: "Encontrem a mãe, aquela que deu à luz o mal."
    }
  },
  druid: {
    name: "Druida",
    card: "Cinco de Glifos",
    aria: "Glifos 05 Druida",
    description: "A ambivalência e crueldade da natureza e daqueles atraídos por ela; conflito interior",
    prophecy: {
      dmText: "O tesouro está na base da árvore Gulthias (capítulo 14, área Y4). Qualquer corvo-lobisomem encontrado na natureza pode guiar os personagens até o local.",
      location: "Colina Yester",
      playerText: "Uma árvore maligna cresce no alto de uma colina de túmulos onde os mortos antigos dormem. Os corvos podem ajudar vocês a encontrá-la. Procurem o tesouro ali."
    }
  },
  anarchist: {
    name: "Anarquista",
    card: "Seis de Glifos",
    aria: "Glifos 06 Anarquista",
    description: "Uma mudança fundamental provocada por alguém cujas crenças estão sendo postas à prova",
    prophecy: {
      dmText: "O tesouro está no salão dos ossos do Castelo Ravenloft (capítulo 4, área K67).",
      location: "Castelo Ravenloft",
      playerText: "Vejo paredes de ossos, um candelabro de ossos e uma mesa de ossos: tudo que resta de inimigos há muito esquecidos."
    }
  },
  charlatan: {
    name: "Charlatão",
    card: "Sete de Glifos",
    aria: "Glifos 07 Charlatão",
    description: "Mentirosos; aqueles que professam uma crença, mas na verdade acreditam em outra",
    prophecy: {
      dmText: "O tesouro está no sótão do Velho Moinho de Ossos (capítulo 6, área O4).",
      location: "Velho Moinho de Ossos",
      playerText: "Vejo um moinho solitário em um precipício. O tesouro está lá dentro."
    }
  },
  bishop: {
    name: "Bispo",
    card: "Oito de Glifos",
    aria: "Glifos 08 Bispo",
    description: "Apego rígido a um código ou crença; aqueles que conspiram, planejam e tramam",
    prophecy: {
      dmText: "O tesouro está na tesouraria selada do Templo de Âmbar (capítulo 13, área X40).",
      location: "Templo de Âmbar",
      playerText: "O que vocês procuram está em uma pilha de tesouros além de portas de âmbar."
    }
  },
  traitor: {
    name: "Traidor",
    card: "Nove de Glifos",
    aria: "Glifos 09 Traidor",
    description: "Traição por alguém próximo e confiável; enfraquecimento ou perda da fé",
    prophecy: {
      dmText: "O tesouro está escondido no quarto principal da Wachterhaus (capítulo 5, área N4o).",
      location: "Cidade de Vallaki",
      playerText: "Procurem uma mulher rica. Aliada ferrenha do demônio, ela guarda o tesouro trancado, junto aos ossos de um antigo inimigo."
    }
  },
  priest: {
    name: "Sacerdote",
    card: "Mestre de Glifos",
    aria: "Glifos 10 Sacerdote",
    description: "Iluminação; aqueles que seguem uma divindade, um sistema de valores ou um propósito maior",
    prophecy: {
      dmText: "O tesouro está na capela do Castelo Ravenloft (capítulo 4, área K15).",
      location: "Castelo Ravenloft",
      playerText: "Vocês encontrarão o que procuram no castelo, entre as ruínas de um lugar de súplica."
    }
  },
  transmuter: {
    name: "Transmutador",
    card: "Um de Estrelas",
    aria: "Estrelas 01 Transmutador",
    description: "Uma nova descoberta; a chegada de coisas inesperadas; consequências imprevistas e caos",
    prophecy: {
      dmText: "O tesouro está no topo da torre norte do Castelo Ravenloft (capítulo 4, área K60).",
      location: "Castelo Ravenloft",
      playerText: "Vão a um lugar de alturas vertiginosas, onde a própria pedra está viva!"
    }
  },
  diviner: {
    name: "Adivinho",
    card: "Dois de Estrelas",
    aria: "Estrelas 02 Adivinho",
    description: "A busca por conhecimento temperada pela sabedoria; verdade e honestidade; sábios e profecia",
    prophecy: {
      dmText: 'O tesouro está no acampamento de Madame Eva (capítulo 2, área G). Se ela estiver fazendo a leitura, diz: "Acho que o tesouro está bem debaixo do meu nariz!"',
      location: "Acampamento da Piscina Tser",
      playerText: "Olhem para aquela que tudo vê. O tesouro está escondido em seu acampamento."
    }
  },
  enchanter: {
    name: "Encantador",
    card: "Três de Estrelas",
    aria: "Estrelas 03 Encantador",
    description: "Conflito interior causado por confusão, medo do fracasso ou informações falsas",
    prophecy: {
      dmText: 'O tesouro está sob o monumento de Marina em Berez (capítulo 10, área U5). "O mestre do pântano" refere-se ao burgomestre Lazlo Ulrich (área U2), cujo fantasma pode apontar os personagens até o monumento.',
      location: "Ruínas de Berez",
      playerText: "Vejo uma mulher ajoelhada, uma rosa de grande beleza colhida cedo demais. O mestre do pântano sabe de quem falo."
    }
  },
  abjurer: {
    name: "Abjurador",
    card: "Quatro de Estrelas",
    aria: "Estrelas 04 Abjurador",
    description: "Aqueles guiados pela lógica e pela razão; alerta para uma pista ou informação ignorada",
    prophecy: {
      dmText: 'O tesouro está no farol de Argynvostholt (capítulo 7, área Q53). "Grande dragão de pedra" refere-se à estátua na área Q1.',
      location: "Argynvostholt",
      playerText: "Vejo uma casa caída guardada por um grande dragão de pedra. Olhem para o pico mais alto."
    }
  },
  elementalist: {
    name: "Elementalista",
    card: "Cinco de Estrelas",
    aria: "Estrelas 05 Elementalista",
    description: "O triunfo da natureza sobre a civilização; desastres naturais e colheitas abundantes",
    prophecy: {
      dmText: "O tesouro está dentro de uma maquete do Castelo Ravenloft no Templo de Âmbar (capítulo 13, área X20).",
      location: "Templo de Âmbar",
      playerText: "O tesouro está escondido em um pequeno castelo sob uma montanha, guardado por gigantes de âmbar."
    }
  },
  evoker: {
    name: "Evocador",
    card: "Seis de Estrelas",
    aria: "Estrelas 06 Evocador",
    description: "Poder mágico ou sobrenatural que não pode ser controlado; magia usada para fins destrutivos",
    prophecy: {
      dmText: "O tesouro está escondido na cripta de Gralmore Nimblenobs (capítulo 4, área K84, cripta 37).",
      location: "Castelo Ravenloft",
      playerText: "Procurem a cripta do mago ordinário. Seu cajado é a chave."
    }
  },
  illusionist: {
    name: "Ilusionista",
    card: "Sete de Estrelas",
    aria: "Estrelas 07 Ilusionista",
    description: "Mentiras e engano; grandes conspirações; sociedades secretas; a presença de um iludido ou sabotador",
    prophecy: {
      dmText: "O tesouro está no vagão de carnaval de Rictavio (capítulo 5, área N5).",
      location: "Cidade de Vallaki",
      playerText: "Um homem não é o que parece. Ele vem aqui em um vagão de carnaval. Ali está o que vocês procuram."
    }
  },
  necromancer: {
    name: "Necromante",
    card: "Oito de Estrelas",
    aria: "Estrelas 08 Necromante",
    description: "Eventos antinaturais e obsessões doentias; aqueles que seguem um caminho destrutivo",
    prophecy: {
      dmText: "O tesouro está no gabinete do Castelo Ravenloft (capítulo 4, área K37).",
      location: "Castelo Ravenloft",
      playerText: "Uma mulher paira acima de um fogo crepitante. Encontrem-na e encontrarão o tesouro."
    }
  },
  conjurer: {
    name: "Conjurador",
    card: "Nove de Estrelas",
    aria: "Estrelas 09 Conjurador",
    description: "A chegada de uma ameaça sobrenatural inesperada; aqueles que pensam ser deuses",
    prophecy: {
      dmText: "O tesouro está na cabana de Baba Lysaga (capítulo 10, área U3).",
      location: "Ruínas de Berez",
      playerText: "Vejo uma vila morta, afogada por um rio, governada por alguém que trouxe grande mal ao mundo."
    }
  },
  wizard: {
    name: "Mago",
    card: "Mestre de Estrelas",
    aria: "Estrelas 10 Mago",
    description: "Mistério e enigmas; o desconhecido; aqueles que desejam poder mágico e grande conhecimento",
    prophecy: {
      dmText: "O tesouro está no último andar da Torre de Van Richten (capítulo 11, área V7).",
      location: "Cidade de Vallaki",
      playerText: "Procurem uma torre de mago em um lago. Deixem que o nome do mago e seu servo guiem vocês até o que procuram."
    }
  },
  avenger: {
    name: "Vingador",
    card: "Um de Espadas",
    aria: "Espadas 01 Vingador",
    description: "Justiça e vingança por grandes injustiças; aqueles em uma missão para livrar o mundo de um grande mal",
    prophecy: {
      dmText: "O tesouro está em posse de Vladimir Horngaard em Argynvostholt (capítulo 7, área Q36).",
      location: "Argynvostholt",
      playerText: "O tesouro está na casa de um dragão, em mãos antes limpas e agora corrompidas."
    }
  },
  paladin: {
    name: "Paladino",
    card: "Dois de Espadas",
    aria: "Espadas 02 Paladino",
    description: "Guerreiros justos e nobres; aqueles que vivem por um código de honra e integridade",
    prophecy: {
      dmText: "O tesouro está na tumba de Sergei (capítulo 4, área K85).",
      location: "Castelo Ravenloft",
      playerText: "Vejo um príncipe adormecido, servo da luz e irmão da escuridão. O tesouro está com ele."
    }
  },
  soldier: {
    name: "Soldado",
    card: "Três de Espadas",
    aria: "Espadas 03 Soldado",
    description: "Guerra e sacrifício; a resistência para suportar grandes dificuldades",
    prophecy: {
      dmText: "O tesouro está no telhado da torre de guarda da Passagem de Tsolenka (capítulo 9, área T6).",
      location: "Passagem de Tsolenka",
      playerText: "Vão às montanhas. Escalem a torre branca guardada por cavaleiros dourados."
    }
  },
  mercenary: {
    name: "Mercenário",
    card: "Quatro de Espadas",
    aria: "Espadas 04 Mercenário",
    description: "Força interior e fortitude; aqueles que lutam por poder ou riqueza",
    prophecy: {
      dmText: "O tesouro está em uma cripta no Castelo Ravenloft (capítulo 4, área K84, cripta 31).",
      location: "Castelo Ravenloft",
      playerText: "Aquilo que vocês procuram está com os mortos, sob montanhas de moedas de ouro."
    }
  },
  myrmidon: {
    name: "Mirmidão",
    card: "Cinco de Espadas",
    aria: "Espadas 05 Mirmidão",
    description: "Grandes heróis; uma súbita reversão do destino; o triunfo do azarão sobre um inimigo poderoso",
    prophecy: {
      dmText: "O tesouro está no santuário da Mãe Noite, na toca dos lobisomens (capítulo 15, área Z7).",
      location: "Toca dos Lobisomens",
      playerText: "Procurem uma toca de lobos nas colinas que observam um lago de montanha. O tesouro pertence à Mãe Noite."
    }
  },
  berserker: {
    name: "Berserker",
    card: "Seis de Espadas",
    aria: "Espadas 06 Berserker",
    description: "O lado brutal e bárbaro da guerra; sede de sangue; aqueles com natureza bestial",
    prophecy: {
      dmText: 'O tesouro está na cripta do General Kroval "Cão Louco" Grislek (capítulo 4, área K84, cripta 38).',
      location: "Castelo Ravenloft",
      playerText: "Encontrem a cripta do Cão Louco. O tesouro está lá dentro, sob os ossos enegrecidos."
    }
  },
  "hooded-one": {
    name: "Encapuzado",
    card: "Sete de Espadas",
    aria: "Espadas 07 Encapuzado",
    description: "Fanatismo, intolerância e xenofobia; uma presença misteriosa ou recém-chegada",
    prophecy: {
      dmText: "O tesouro está dentro da cabeça de uma estátua gigante no Templo de Âmbar (capítulo 13, área X5a).",
      location: "Templo de Âmbar",
      playerText: "Vejo um deus sem rosto. Ele espera por vocês no fim de uma estrada longa e sinuosa, nas profundezas das montanhas."
    }
  },
  dictator: {
    name: "Ditador",
    card: "Oito de Espadas",
    aria: "Espadas 08 Ditador",
    description: "Tudo que há de errado com governo e liderança; aqueles que governam por medo e violência",
    prophecy: {
      dmText: "O tesouro está no salão de audiências do Castelo Ravenloft (capítulo 4, área K25).",
      location: "Castelo Ravenloft",
      playerText: "Vejo um trono digno de um rei."
    }
  },
  torturer: {
    name: "Torturador",
    card: "Nove de Espadas",
    aria: "Espadas 09 Torturador",
    description: "A chegada de sofrimento ou crueldade implacável; alguém irredimivelmente mau ou sádico",
    prophecy: {
      dmText: "O tesouro está no sótão da mansão do burgomestre em Vallaki (capítulo 5, área N3s).",
      location: "Cidade de Vallaki",
      playerText: "Há uma cidade onde nada vai bem. Lá vocês encontrarão uma casa de corrupção e, dentro dela, uma sala escura cheia de fantasmas imóveis."
    }
  },
  warrior: {
    name: "Guerreiro",
    card: "Mestre de Espadas",
    aria: "Espadas 10 Guerreiro",
    description: "Força personificada; violência; aqueles que usam força para cumprir seus objetivos",
    prophecy: {
      dmText: "O tesouro está na tumba de Strahd (capítulo 4, área K86).",
      location: "Castelo Ravenloft",
      playerText: 'Aquilo que vocês procuram está no ventre da escuridão, o "covil" do demônio: o único lugar para onde ele deve retornar.'
    }
  },
  artifact: {
    name: "Artefato",
    card: "O Artefato",
    aria: "Baralho Alto Artefato",
    description: "A importância de algum objeto físico que deve ser obtido, protegido ou destruído a qualquer custo",
    prophecy: {
      allies: [
        {
          playerText: "Procurem um homem divertido com um macaco. Esse homem é mais do que parece.",
          dmText: `Esta carta refere-se a Rictavio (apêndice D), que pode ser encontrado na Estalagem Água Azul, em Vallaki (capítulo 5, área N2). Normalmente relutante em acompanhar os personagens, Rictavio muda de ideia se eles contarem sobre a leitura das cartas. Ele abandona o disfarce e se apresenta como Dr. Rudolf van Richten.

Os personagens podem pensar que Gadof Blinsky, o fabricante de brinquedos de Vallaki (área N7), é a figura que procuram, pois ele tem um macaco de estimação. Se falarem com ele sobre essa possibilidade, Blinsky brinca que ele e o macaco são "velhos amigos"; mas, se os personagens pedirem que ele os acompanhe para lutar contra Strahd, ele recusa educadamente. Se contarem a ele sobre a leitura de tarokka, Blinsky admite que adquiriu o macaco de um mestre de cerimônias meio-elfo chamado Rictavio.`
        }
      ],
      strahd: {
        playerText: "Ele espreita na escuridão onde a luz da manhã um dia brilhou: um lugar sagrado.",
        dmText: "Strahd enfrenta os personagens na capela (área K15)."
      }
    }
  },
  beast: {
    name: "Fera",
    card: "A Fera",
    aria: "Baralho Alto Fera",
    description: "Grande fúria ou paixão; algo bestial ou malévolo escondido à vista de todos ou logo abaixo da superfície",
    prophecy: {
      allies: [
        {
          playerText: "Uma lobisomem guarda um ódio secreto por seu inimigo. Usem esse ódio a seu favor.",
          dmText: "Esta carta refere-se à lobisomem Zuleika Toranescu (capítulo 15, área Z7). Ela acompanhará os personagens se eles prometerem vingar seu companheiro, Emil, matando o líder de sua matilha, Kiril Stoyanovich."
        }
      ],
      strahd: {
        playerText: "A fera se senta em seu trono sombrio.",
        dmText: "Strahd enfrenta os personagens no salão de audiências (área K25)."
      }
    }
  },
  "broken-one": {
    name: "O Quebrado",
    card: "O Quebrado",
    aria: "Baralho Alto O Quebrado",
    description: "Derrota, fracasso e desespero; a perda de algo ou alguém importante, sem o qual a pessoa se sente incompleta",
    prophecy: {
      allies: [
        {
          ally: "Mago Louco",
          playerText: "Seu maior aliado será um mago. Sua mente está quebrada, mas seus feitiços são fortes.",
          dmText: "Esta carta refere-se ao Mago Louco do Monte Baratok (capítulo 2, área M)."
        },
        {
          playerText: "Vejo um homem de fé cuja sanidade pende por um fio. Ele perdeu alguém próximo.",
          dmText: "Esta carta refere-se a Donavich, o sacerdote na vila de Barovia (capítulo 3, área E5). Ele não acompanhará os personagens até que seu filho, Doru, esteja morto e sepultado."
        }
      ],
      strahd: {
        playerText: "Ele assombra a tumba do homem que invejou acima de todos.",
        dmText: "Strahd enfrenta os personagens na tumba de Sergei (área K86)."
      }
    }
  },
  darklord: {
    name: "Lorde Sombrio",
    card: "O Lorde Sombrio",
    aria: "Baralho Alto Lorde Sombrio",
    description: "Um indivíduo único e poderoso de natureza maligna, cujos objetivos têm consequências enormes e abrangentes",
    prophecy: {
      allies: [
        {
          ally: "Ninguém",
          playerText: 'Ah, a pior de todas as "verdades": vocês devem enfrentar o mal desta terra sozinhos!',
          dmText: "Não há nenhum NPC capaz de inspirar os personagens."
        }
      ],
      strahd: {
        playerText: "Ele espreita nas profundezas da escuridão, no único lugar para onde deve retornar.",
        dmText: "Strahd enfrenta os personagens em sua tumba (área K86)."
      }
    }
  },
  donjon: {
    name: "Masmorra",
    card: "A Masmorra",
    aria: "Baralho Alto Masmorra",
    description: "Isolamento e aprisionamento; ser tão conservador no pensamento a ponto de tornar-se prisioneiro das próprias crenças",
    prophecy: {
      allies: [
        {
          playerText: "Procurem um jovem perturbado cercado por riqueza e loucura. Seu lar é sua prisão.",
          dmText: "Esta carta refere-se a Victor Vallakovich (capítulo 5, área N3t). Ao perceber que os personagens são a chave para sua salvação, ele deixa a casa com entusiasmo e os acompanha até o Castelo Ravenloft."
        },
        {
          playerText: "Encontrem uma moça levada à insanidade, trancada no coração da casa de seu pai morto. Curar sua loucura é a chave para o sucesso de vocês.",
          dmText: "Esta carta refere-se a Stella Wachter (capítulo 5, área N4n). Ela não concede benefício ao grupo a menos que sua loucura seja curada. Com a razão restaurada, Stella fica feliz em juntar-se ao grupo e deixar para trás sua família apodrecida."
        }
      ],
      strahd: {
        playerText: "Ele espreita em um salão de ossos, nos poços escuros de seu castelo.",
        dmText: "Strahd enfrenta os personagens no salão dos ossos (área K67)."
      }
    }
  },
  executioner: {
    name: "Carrasco",
    card: "O Carrasco",
    aria: "Baralho Alto Carrasco",
    description: "A morte iminente de alguém condenado, com ou sem justiça; falsas acusações e perseguição injusta",
    prophecy: {
      allies: [
        {
          playerText: 'Busquem o irmão da noiva do demônio. Chamam-no de "o menor", mas ele tem uma alma poderosa.',
          dmText: "Esta carta refere-se a Ismark Kolyanovich (capítulo 3, área E2). Ismark não acompanhará os personagens ao Castelo Ravenloft até saber que sua irmã, Ireena Kolyana, está segura."
        }
      ],
      strahd: {
        playerText: "Vejo uma figura sombria em uma sacada, olhando para esta terra torturada com um sorriso retorcido.",
        dmText: "Strahd enfrenta os personagens no mirante (área K6)."
      }
    }
  },
  ghost: {
    name: "Fantasma",
    card: "O Fantasma",
    aria: "Baralho Alto Fantasma",
    description: "O passado iminente; o retorno de um antigo inimigo ou a descoberta de um segredo enterrado há muito tempo",
    prophecy: {
      allies: [
        {
          playerText: "Vejo um paladino caído de uma ordem caída de cavaleiros. Ele permanece como um fantasma no covil de um dragão morto.",
          dmText: "Esta carta refere-se ao revenante Sir Godfrey Gwilym (capítulo 7, área Q37). Embora inicialmente não queira acompanhar os personagens, ele o fará se eles o convencerem de que a honra da Ordem do Dragão Prateado pode ser restaurada com sua ajuda. Para isso, é necessário um teste bem-sucedido de Carisma (Persuasão) CD 15."
        },
        {
          playerText: "Despertem o espírito do cavaleiro desajeitado cuja cripta repousa nas profundezas do castelo.",
          dmText: "Esta carta refere-se a Sir Klutz, o guerreiro fantasma (capítulo 4, área K84, cripta 33). Se Sir Klutz for o inimigo de Strahd, o guerreiro fantasma não desaparece após sete dias, mas somente depois que ele ou Strahd for reduzido a 0 pontos de vida."
        }
      ],
      strahd: {
        playerText: "Olhem para a tumba do pai.",
        dmText: "Strahd enfrenta os personagens na tumba do Rei Barov e da Rainha Ravenovia (área K88)."
      }
    }
  },
  horseman: {
    name: "Cavaleiro",
    card: "O Cavaleiro",
    aria: "Baralho Alto Cavaleiro",
    description: "Morte; desastre na forma de perda de riqueza ou propriedade, derrota terrível ou fim de uma linhagem",
    prophecy: {
      allies: [
        {
          playerText: "Vejo um homem morto de nascimento nobre, guardado por sua viúva. Devolvam vida ao cadáver desse homem, e ele será seu aliado leal.",
          dmText: `Esta carta refere-se a Nikolai Wachter, o velho, que está morto (capítulo 5, área N4o). Se os personagens conjurarem reviver os mortos ou ressurreição em seu corpo preservado, Nikolai (nobre humano masculino LN) concorda em ajudá-los assim que se sentir bem o bastante, apesar dos protestos de sua esposa. Embora sua família tenha apoiado Strahd por muito tempo, Nikolai percebeu no fim da vida que Strahd deve ser destruído para salvar Barovia.

Se os personagens não tiverem meios para trazer Nikolai de volta dos mortos, Rictavio (apêndice D) entrega a eles um pergaminho de reviver os mortos se souber da necessidade. Se estiverem hospedados na Estalagem Água Azul, ele deixa o pergaminho em um dos quartos.`
        },
        {
          playerText: "Um homem da morte chamado Arrigal abandonará seu senhor sombrio para servir à causa de vocês. Cuidado! Ele tem uma alma podre.",
          dmText: "Esta carta refere-se ao assassino Vistani Arrigal (capítulo 5, área N9c). Se os personagens mencionarem a leitura a ele, ele aceita seu destino e os acompanha. Se os personagens conseguirem derrotar Strahd, Arrigal os trai e ataca, acreditando estar destinado a se tornar o novo senhor de Barovia."
        }
      ],
      strahd: {
        playerText: "Ele espreita no único lugar para onde deve retornar: um lugar de morte.",
        dmText: "Strahd enfrenta os personagens em sua tumba (área K86)."
      }
    }
  },
  innocent: {
    name: "Inocente",
    card: "O Inocente",
    aria: "Baralho Alto Inocente",
    description: "Um ser de grande importância cuja vida está em perigo, talvez indefeso ou simplesmente inconsciente do risco",
    prophecy: {
      allies: [
        {
          playerText: "Vejo um jovem de coração bondoso. Um menino da mamãe! Ele é forte de corpo, mas fraco de mente. Procurem-no na vila de Barovia.",
          dmText: "Esta carta refere-se a Parriwimple (veja o capítulo 3, área E1). Embora seja simplório, ele não viajará ao Castelo Ravenloft sem uma boa razão. Os personagens podem manipulá-lo a ir, apelando para seu bom coração. Por exemplo, ele pode ir para ajudar a resgatar barovianos desaparecidos ou salvar a vida de Ireena Kolyana, que é muito bela. Os personagens precisam lidar de alguma forma com Bildrath, empregador de Parriwimple, que não permitirá que o rapaz tolo vá ao castelo por motivo algum."
        },
        {
          playerText: "A noiva do mal é quem vocês procuram!",
          dmText: "Esta carta refere-se a Ireena Kolyana (capítulo 3, área E4). Seu irmão Ismark se opõe à ideia de Ireena ser levada ao Castelo Ravenloft, mas insiste em ir para lá quando os personagens contam a ela sobre a leitura das cartas. Ireena, porém, não acompanhará os personagens até que o corpo de Kolyan Indirovich seja sepultado no cemitério."
        }
      ],
      strahd: {
        playerText: "Ele habita junto daquele cujo sangue selou sua ruína, um irmão de luz apagado cedo demais.",
        dmText: "Strahd enfrenta os personagens na tumba de Sergei (área K85)."
      }
    }
  },
  marionette: {
    name: "Marionete",
    card: "A Marionete",
    aria: "Baralho Alto Marionete",
    description: "A presença de um espião ou servo de um poder maior; um encontro com uma marionete ou subordinado",
    prophecy: {
      allies: [
        {
          playerText: "Que horror é este? Vejo um homem feito por um homem. Sem idade e sozinho, ele assombra as torres do castelo.",
          dmText: "Esta carta refere-se a Pidlwick II (capítulo 4, área K59 e apêndice D)."
        },
        {
          playerText: "Procurem um homem de música, um homem com duas cabeças. Ele vive em um lugar de grande fome e tristeza.",
          dmText: "Esta carta refere-se a Cloven Belview (capítulo 8, área S17), o povo-mestiço de duas cabeças. Clovin serve ao Abade por medo e por um senso perverso de lealdade. Seu trabalho é levar comida aos outros povo-mestiços, que ele detesta. Se o Abade ainda vive, Clovin não quer atrair a ira do mestre tentando partir e se recusa a acompanhar os personagens. Mas, se o Abade morrer, Clovin não tem motivo para permanecer na abadia, então se dispõe a ir junto se for subornado com vinho. Clovin não concede benefício ao grupo sem sua viola."
        }
      ],
      strahd: {
        playerText: "Olhem para grandes alturas. Encontrem o coração pulsante do castelo. Ele espera por perto.",
        dmText: "Strahd enfrenta os personagens no topo da torre norte (área K60)."
      }
    }
  },
  mists: {
    name: "Brumas",
    card: "As Brumas",
    aria: "Baralho Alto Brumas",
    description: "Algo inesperado ou misterioso que não pode ser evitado; uma grande missão ou jornada que testará o espírito",
    prophecy: {
      allies: [
        {
          playerText: "Uma vistana vaga sozinha por esta terra, procurando seu mentor. Ela não permanece muito tempo em um só lugar. Procurem-na na Abadia de Santa Markovia, perto das brumas.",
          dmText: "Esta carta refere-se a Ezmerelda d’Avenir (apêndice D). Ela pode ser encontrada na Abadia de Santa Markovia (veja o capítulo 8, área S19), bem como em vários outros locais por toda Barovia."
        }
      ],
      strahd: {
        playerText: "As cartas não conseguem ver onde o mal espreita. As brumas ocultam tudo.",
        dmText: "Esta carta não oferece pista sobre onde ocorrerá o confronto final com Strahd. Ele pode acontecer em qualquer lugar que você quiser no Castelo Ravenloft. Alternativamente, Madame Eva diz aos personagens que retornem a ela depois de pelo menos três dias, e ela consultará as cartas novamente para eles, mas apenas para discernir o local de seu inimigo."
      }
    }
  },
  raven: {
    name: "Corvo",
    card: "O Corvo",
    aria: "Baralho Alto Corvo",
    description: "Uma fonte oculta de informação; uma reviravolta afortunada; um potencial secreto para o bem",
    prophecy: {
      allies: [
        {
          playerText: "Encontrem o líder dos emplumados que vivem entre as vinhas. Embora velho, ele ainda tem uma última luta dentro de si.",
          dmText: 'Esta carta refere-se a Davian Martikov (capítulo 12, "O Mago dos Vinhos"). O velho corvo-lobisomem, percebendo que tem uma chance de acabar com a tirania de Strahd, deixa sua vinha e vinícola nas mãos competentes de seus filhos, Adrian e Elvir. Mas antes de viajar ao Castelo Ravenloft para enfrentar Strahd, Davian insiste em reconciliar-se com seu terceiro filho, Urwin Martikov (capítulo 5, área N2).'
        }
      ],
      strahd: {
        playerText: "Olhem para a tumba da mãe.",
        dmText: "Strahd enfrenta os personagens na tumba do Rei Barov e da Rainha Ravenovia (área K88)."
      }
    }
  },
  seer: {
    name: "Vidente",
    card: "O Vidente",
    aria: "Baralho Alto Vidente",
    description: "Inspiração e intelecto aguçado; um evento futuro cujo resultado dependerá de uma mente astuta",
    prophecy: {
      allies: [
        {
          playerText: "Procurem um elfo do crepúsculo que vive entre os Vistani. Ele sofreu uma grande perda e é assombrado por sonhos sombrios. Ajudem-no, e ele ajudará vocês em troca.",
          dmText: "Esta carta refere-se a Kasimir Velikov (capítulo 5, área N9a). O elfo do crepúsculo acompanha os personagens até o Castelo Ravenloft somente depois que eles o conduzirem ao Templo de Âmbar e encontrarem um meio de ressuscitar sua irmã morta, Patrina Velikovna."
        }
      ],
      strahd: {
        playerText: "Ele espera por vocês em um lugar de sabedoria, calor e desespero. Grandes segredos repousam ali.",
        dmText: "Strahd enfrenta os personagens no gabinete (área K37)."
      }
    }
  },
  tempter: {
    name: "Tentador",
    card: "O Tentador",
    aria: "Baralho Alto Tentador",
    description: "Alguém comprometido ou desviado por tentação ou tolice; alguém que tenta outros para fins malignos",
    prophecy: {
      allies: [
        {
          playerText: "Vejo uma criança, uma Vistana. Vocês devem se apressar, pois seu destino está por um fio. Encontrem-na no lago!",
          dmText: "Esta carta refere-se a Arabelle (capítulo 2, área L). Ela se junta ao grupo com prazer. Mas, se voltar ao acampamento (capítulo 5, área N9), seu pai, Luvash, se recusará a deixá-la partir."
        },
        {
          playerText: "Ouço um sino de casamento, ou talvez um dobre fúnebre. Ele chama vocês para uma abadia na encosta da montanha, onde encontrarão uma mulher que é mais do que a soma de suas partes.",
          dmText: "Esta carta refere-se a Vasilka, a golem de carne (capítulo 8, área S13)."
        }
      ],
      strahd: {
        playerText: "Vejo um lugar secreto: uma câmara de tentação escondida atrás de uma mulher de grande beleza. O mal espera no alto de sua torre de tesouro.",
        dmText: 'Strahd confronta os personagens na tesouraria (área K41). "Uma mulher de grande beleza" refere-se ao retrato de Tatyana pendurado no gabinete do castelo (área K37), que contém uma porta secreta levando à tesouraria.'
      }
    }
  }
};
function Qh(u, d) {
  if (!d || !("prophecy" in u)) return u;
  const m = d;
  return "allies" in u.prophecy ? {
    ...u,
    prophecy: {
      ...u.prophecy,
      allies: u.prophecy.allies.map((i, S) => {
        var x;
        return {
          ...i,
          ...((x = m.allies) == null ? void 0 : x[S]) ?? {}
        };
      }),
      strahd: {
        ...u.prophecy.strahd,
        ...m.strahd ?? {}
      }
    }
  } : {
    ...u,
    prophecy: {
      ...u.prophecy,
      ...m
    }
  };
}
const Gt = Yh.map((u) => {
  const d = Lh[u.id];
  if (!d) return u;
  const { prophecy: m, ...i } = d, S = {
    ...u,
    ...i
  };
  return Qh(S, m);
}), Xh = {
  swashbuckler: "Ás de Moedas: O Espadachim",
  philanthropist: "Dois de Moedas: O Filantropo",
  trader: "Três de Moedas: O Comerciante",
  merchant: "Quatro de Moedas: O Mercador",
  "guild-member": "Cinco de Moedas: O Membro da Guilda",
  beggar: "Seis de Moedas: O Mendigo",
  thief: "Sete de Moedas: O Bandido",
  "tax-collector": "Oito de Moedas: O Coletor de Impostos",
  miser: "Nove de Moedas: O Avarento",
  rogue: "Dez de Moedas: A Mestre das Moedas",
  avenger: "Ás de Espadas: O Vingador",
  paladin: "Dois de Espadas: O Paladino",
  soldier: "Três de Espadas: O Soldado",
  mercenary: "Quatro de Espadas: O Mercenário",
  myrmidon: "Cinco de Espadas: O Mirmidão",
  berserker: "Seis de Espadas: O Furioso",
  "hooded-one": "Sete de Espadas: O Encapuzado",
  dictator: "Oito de Espadas: O Ditador",
  torturer: "Nove de Espadas: O Torturador",
  warrior: "Dez de Espadas: O Mestre de Espadas",
  transmuter: "Ás de Estrelas: O Transmutador",
  diviner: "Dois de Estrelas: O Adivinho",
  enchanter: "Três de Estrelas: O Encantador",
  abjurer: "Quatro de Estrelas: O Abjurador",
  elementalist: "Cinco de Estrelas: O Elementalista",
  evoker: "Seis de Estrelas: O Evocador",
  illusionist: "Sete de Estrelas: O Ilusionista",
  necromancer: "Oito de Estrelas: O Necromante",
  conjurer: "Nove de Estrelas: O Conjurador",
  wizard: "Dez de Estrelas: O Mestre das Estrelas",
  monk: "Ás de Glifos: O Monge",
  missionary: "Dois de Glifos: O Missionário",
  healer: "Três de Glifos: O Curandeiro",
  shepherd: "Quatro de Glifos: O Pastor",
  druid: "Cinco de Glifos: O Druida",
  anarchist: "Seis de Glifos: O Anarquista",
  charlatan: "Sete de Glifos: O Charlatão",
  bishop: "Oito de Glifos: O Bispo",
  traitor: "Nove de Glifos: O Traidor",
  priest: "Dez de Glifos: O Mestre dos Glifos",
  darklord: "Arcano Maior: O Lorde Negro",
  artifact: "Arcano Maior: O Artefato",
  horseman: "Arcano Maior: O Cavaleiro",
  executioner: "Arcano Maior: O Executor",
  ghost: "Arcano Maior: O Fantasma",
  "broken-one": "Arcano Maior: O Violado",
  raven: "Arcano Maior: O Corvo",
  innocent: "Arcano Maior: O Inocente",
  marionette: "Arcano Maior: O Fantoche",
  donjon: "Arcano Maior: O Cárcere",
  tempter: "Arcano Maior: A Tentação",
  mists: "Arcano Maior: As Brumas",
  beast: "Arcano Maior: O Bestial",
  seer: "Arcano Maior: O Herói"
}, Kh = {
  swashbuckler: {
    dmText: "Esta carta indica bandidos de bom coração ou salteadores de estrada, aqueles que roubam dos ricos para dar socorro aos pobres. Representa alguém que busca dinheiro não por ganância, mas como um meio de ajudar os outros. O Espadachim escapa de qualquer mancha de avareza, desconsiderando a lei da posse em face da necessidade do outro. Invertida, indica alguém controlado pela necessidade de riqueza, também inveja.",
    playerText: "Uma jovem sorridente vestida com roupas de um dândi passa por um comerciante rotundo e carrancudo vestido com roupas ricas, mas manchadas de comida. Uma das muitas bolsas do comerciante está pendurada, obviamente cortada, e o malandro travesso tem uma bolsa gorda em uma das mãos, enquanto a outra está jogando uma moeda de ouro no chapéu de um mendigo na rua. Um pequeno rato preto observa a troca."
  },
  philanthropist: {
    dmText: "O Filantropo é uma das cartas mais positivas do tarokka. É uma carta de devoção e amor altruísta, atos de caridade e doação sem pensar em recompensa. No padrão certo, o leitor de tarokka pode vê-lo como uma carta do ato final de dar - talvez o sacrifício final. Invertida, a carta tem um significado mais sombrio. O lado negativo da filantropia é o oportunismo, fornecendo presentes com um motivo oculto. Isso pode incluir qualquer coisa, desde suborno para ocultar atividades criminosas até a pretensão de amizade para uma eventual recompensa.",
    playerText: "Dois mendigos descalços vestidos com trapos se amontoam contra uma parede de pedra na neve. A menor, uma minúscula menina magra como os ossos e rosto anguloso, segura na palma da mão dois pedaços de pão em forma de moeda. Com amor nos olhos, ela está dando as duas peças à idosa em farrapos que a abraça."
  },
  trader: {
    dmText: "O comércio em todos os seus aspectos é o significado da carta o Comerciante. Quer sejam caravanas, casas de leilão, mercados ou contrabando ilícito em casas de barcos abandonadas, esta carta representa uma disputa para chegar a uma troca justa. Invertida, o Comerciante significa traição e maus negócios no comércio. Esta carta em seu aspecto negativo indica pechinchas de qualquer tipo.",
    playerText: "A face desta carta mostra um homem parado ao lado de uma carroça Vistani e um comerciante Vistani. Ele obviamente acabou de terminar uma sessão de barganha e parece bastante satisfeito consigo mesmo. O homem Vistani está meio sorrindo enquanto troca um saco bem amarrado por três moedas da mão do outro homem. As moedas estão no ar na carta, representando a troca de moeda e bens que está no centro do significado da carta."
  },
  merchant: {
    dmText: "Ao contrário do Negociante, a carta do Mercador representa negociações obscuras e engano. Uma carta de alguém que busca o lucro acima de tudo, sua aparência avisa: “cuidado com o comprador”. As mercadorias não são como prometidas, um acordo não é cumprido, um cliente está lá apenas para roubar ou o proprietário aumentou seus preços além da razão. Invertida, indica uma barganha invisível ou um achado raro e inesperado.",
    playerText: "Dois homens em silhueta fazendo uma troca nas sombras. Um segura um pequeno baú enquanto esconde uma adaga nas costas, o outro entrega uma sacola com um buraco no fundo. Quatro moedas caem da bolsa no chão enquanto fazem a troca."
  },
  "guild-member": {
    dmText: "Como acontece com todas as cartas do naipe de Moedas, esta carta trata do comércio, mas trata de esforços cooperativos para lucro mútuo. Ela invoca a imagem de mercantis e artesãos trabalhando juntos para compartilhar ganhos e perdas. Dentro da organização, os membros recebem suporte e assistência sempre que houver problemas ou necessidade. Representando a fraternidade e a parceria nos negócios, a carta mostra lealdade, mas apenas a outros membros de um determinado grupo. Na posição vertical, o cartão indica uma organização leal e justa. Invertida, a organização pode ser neutra ou totalmente desonesta e traiçoeira - mas apenas para aqueles fora de sua esfera.",
    playerText: "Cinco bardos em coro, de braços dados, cantam em completa harmonia. Cinco moedas de ouro brilham em um chapéu no chão a seus pés."
  },
  beggar: {
    dmText: "O mundo do comércio é arriscado. O seis de moedas trata de mudanças radicais na fortuna. Um homem pobre pode ficar rico, seja por circunstâncias repentinas ou por trabalho duro e perseverança. Um comerciante rico pode de repente ver sua loja queimada, seus navios destruídos ou gradualmente perder sua fortuna por meio de maus investimentos, encontrando-se nas ruas. Como se pode imaginar, o aspecto positivo desta carta envolve ganhar riqueza, embora essa riqueza também possa assumir a forma de maior conhecimento ou sabedoria. Invertida, esta carta indica perda e possível ruína.",
    playerText: "Um mendigo e um homem rico mantêm uma postura espelhada. Exceto pelas roupas, eles são exatamente iguais. O homem rico joga seis moedas na xícara de lata que o mendigo segura. Sua semelhança adverte sobre a natureza inconstante da fortuna."
  },
  thief: {
    dmText: "Esta carta representa todos os aspectos do roubo e de todos os ladrões, seja um simples batedor de carteira, um ladrão talentoso, um macaquinho ou um bandido violento. Em uma leitura, indica um ladrão real ou a perda de algo importante para o indivíduo. Essa perda pode ser qualquer coisa, desde uma arma mágica roubada de herança até a desfiguração de um homem bonito. Tudo o que é mais valorizado está em risco. Invertido, indica um ganho importante ou há muito esperado, embora geralmente por meio de circunstâncias infelizes. Isso pode ser riqueza adquirida com a perda de um ente querido ou um presente dado de bens roubados.",
    playerText: "Uma ladra se agacha sobre um nobre assassinado. Ela está removendo um anel de sinete da mão dele e tem mais joias caindo de uma bolsa em sua cintura. Sete moedas estão espalhadas nas pedras manchadas de sangue."
  },
  "tax-collector": {
    dmText: "Corrupção e engano, especialmente dentro do governo ou entre a nobreza, estão no cerne desta carta. Funcionários influentes traiçoeiros podem realizar ações secretas, como peculato ou traição. Outros podem esperar subornos para certos favores ou intimidar aqueles abaixo deles dentro da organização. Invertida, esta carta indica uma pessoa confiável e justa em uma posição de poder - mesmo dentro de uma organização corrupta.",
    playerText: "Uma camponesa encolhida, vestida com roupas remendadas, olha suplicante para um homem montado, com o rosto escondido pela sombra de uma capa com capuz. Ele agarra oito moedas, que obviamente acabou de tirar dela. A entrada de uma pessoa humilde, mas atrás dela, indica a óbvia incapacidade da camponesa de pagar por tal quantia."
  },
  miser: {
    dmText: "Esta carta indica alguém que mantém uma vasta horda de riquezas para o benefício de ninguém além de si mesmo. Seja um verdadeiro avarento acumulando ouro e vivendo em pobreza abjeta ou um jovem nobre rico interessado em nada além de seu próprio prazer e decadência, aqueles representados pelo nove de Moedas são inteiramente egocêntricos. Em seu aspecto reto, é a carta da riqueza falsa ou inutilizável. Invertida, uma fortuna repentina pode estar próxima ou alguém atinge um objetivo importante.",
    playerText: "A imagem no cartão é de um velho feio e enrugado contando nove moedas à luz de uma vela gotejante. Suas roupas de dormir estão remendadas, mas pilhas de joias e outros tesouros estão nas prateleiras atrás dele. Um rato está sentado na mesa perto dele, segurando uma das moedas nas patas."
  },
  rogue: {
    dmText: "(Jacqueline Renier) Esta carta representa alguém que é o epítome do ladino - bardo, batedor de carteira, banqueiro, comerciante ou coletor de impostos. Todos aqueles que manipulam a riqueza, seja labutando para ganhá-la, elaborando para obtê-la, atuando para obtê-la, roubando-a ou implorando por ela, estão ligados ao Mestre ou dez Moedas. Em uma leitura, a posição vertical indica uma reação positiva. Invertida, esta carta indica antipatia imediata ou perigo de ser representado por esta carta.",
    playerText: "Uma mulher elegante e bem vestida com cabelos escuros lustrosos, com mechas grisalhas nas têmporas, está com o rosto escondido nas sombras. Em um ombro está sentado um rato preto bem alimentado, com os olhos brilhando. Na mesa à sua frente está uma adaga ornamentada, uma bolsa de ouro com dez moedas caindo e uma flauta prateada."
  },
  avenger: {
    dmText: "Aqueles de tendência caótica e boa estão ligados ao ás de Espadas. A carta, em seu aspecto positivo, indica a necessidade de corrigir os erros e julgar rapidamente os inimigos sem pensar no perigo. Grandes missões para lutar contra vampiros antigos ou livrar o reino de inimigos lupinos são algumas das ações feitas pelo vingador errante - um cavaleiro que não deve lealdade a ninguém e nada além de seu próprio senso de honra e justiça. Invertida, a carta indica escolhas tolas ou uma batalha sem esperança.",
    playerText: "Um jovem está de pé, com os braços erguidos acima da cabeça, segurando uma espada flamejante que brilha azul com eletricidade. Sua armadura goteja sangue, mas seu belo rosto está triunfante. Espalhados no chão ao seu redor estão seus muitos inimigos - incluindo licantropos e outras criaturas monstruosas. Um corvo se senta empoleirado em um dos corpos, um pedaço de carne em seu bico."
  },
  paladin: {
    dmText: "Ao contrário da natureza imprudente da carta do Vingador, a carta do Paladino indica vitória por meio da justiça e da adesão estrita aos códigos da lei. Simbólico de todos aqueles que buscam a causa do bem final, o dois de Espadas fornece a esperança do bem triunfar verdadeiramente sobre o mal. Invertida, a carta pressagia traição em nome de boas ações ou arrogância destruindo uma chance de vitória.",
    playerText: "Um paladino com a armadura completa está ajoelhado, sua cabeça descoberta curvada, segurando uma espada, com a ponta para baixo, na frente dele. Uma figura invisível bateu no ombro do paladino com outra espada, tornando-o cavaleiro obviamente nobre e corajoso. Além da figura, há uma parede pendurada com uma rosa ornamentada bordada."
  },
  soldier: {
    dmText: "Para um soldado, a moralidade e a motivação de uma batalha muitas vezes não são claras. Embora o três de Espadas indique a guerra entre o bem e o mal, ele não prediz o resultado final, nem é nenhum dos lados claramente reconhecível. Indicando um futuro incerto, a interpretação usual denota que o acaso ou o destino será o fator decisivo. Invertida, a carta indica um final definitivo, embora também ilustre a necessidade de muito trabalho, sem vitória rápida.",
    playerText: "Um espadachim pega uma arma em um suporte. Existem três espadas penduradas lá, uma branca, uma cinza e uma preta. É impossível adivinhar qual espada ele escolhe, e seu rosto mostra sua incerteza. Algumas cartas contêm imagens que podem, se o leitor desejar, representar entidades poderosas do mundo de Ravenloft. As descrições dadas correspondem a essas personalidades e podem fornecer dicas úteis para seus jogadores, mesmo que os personagens nunca tenham conhecido seus inimigos sombrios. Cada carta mestre é representada por um dos Lordes Sombrios, enquanto outras, não são de Lordes das Trevas, estão espalhadas entre outras imagens do baralho. Quando um desses for intencional, você verá o nome do personagem entre parênteses ao lado do título da carta."
  },
  mercenary: {
    dmText: "Embora represente alguém que vende sua espada ou mercenário, o quatro de Espadas indica alguém que segue um código de conduta profissional e negocia com justiça dentro desse código. Desejando trabalhar para o bem ou para o mal na busca de ganhos pessoais, as pessoas representadas por esta carta ainda honram seus compromissos. O quatro de espadas também representa resistência, perseverança e força em face da adversidade física. Invertida, a carta indica pessoas que são altruístas, mas rígidas em suas crenças. Também indica fraqueza física ou doença.",
    playerText: "Quatro guerreiros musculosos em armaduras surradas se reuniram em torno de um baú aberto cheio de tesouros. Eles têm suas espadas levantadas de forma que as armas toquem um ponto para apontar para a caixa transbordando. Suas mãos livres repousam sobre seus corações em um sinal de juramento solene, os punhos cerrados."
  },
  myrmidon: {
    dmText: "O cinco de Espadas ilustra a natureza inconstante do destino. Esta carta indica batalhas vencidas ou perdidas em um instante, por acaso, reviravolta repentina ou vitória improvável de um oprimido no caos da guerra. Nenhum plano é seguro, nenhuma vitória certa sob o poder do Mirmidão. A destruição de um Lorde Negro por um simples fazendeiro ou as maquinações cruéis dos Poderes Sombrios frustrando um plano brilhantemente concebido podem acontecer quando esta carta aparecer em uma leitura. Invertida, as situações tornam-se estáticas e a mudança é difícil ou impossível de implementar.",
    playerText: "Uma jovem e bela Vistana, usando algemas quebradas, está na fronteira das Brumas. Cinco figuras passam, obscurecidas pela névoa, suas espadas perfurando a Névoa. Pela ilustração, é impossível saber se eles chegaram para defendê-la ou destruí-la."
  },
  berserker: {
    dmText: "O seis de Espadas representa tudo o que é bárbaro e brutal na batalha. Essas pessoas ou criaturas indicadas por esta carta realizam manobras caóticas em combate sem pensar nas consequências. Ação, desafio e aventura são tudo o que conta. Esta carta geralmente representa licantropos malignos. Sua natureza bestial os leva a atos caóticos e sangrentos. Invertida, a carta mostra ações ponderadas e bem planejadas ou compaixão no meio da guerra.",
    playerText: "A lua cheia ilumina a imagem de um lobisomem selvagem, com o focinho ensanguentado e os dentes à mostra. Embora os inimigos o tenham perfurado mortalmente com cinco espadas de prata, ele ergue sua própria espada em triunfo. Em torno dele estão pedaços de seus inimigos massacrados."
  },
  "hooded-one": {
    dmText: "O sete de Espadas simboliza o engano e as ações malignas por meio da estupidez, fanatismo, intolerância ou xenofobia. Indica situações em que a violência parece a única resposta - embora muito provavelmente a resposta errada. Às vezes, a carta representa um estranho suspeito e temido, pária ou forasteiro. Invertida, esta carta indica compreensão e tolerância inesperadas ou uma visita inesperada de uma pessoa importante ou querida.",
    playerText: "Uma multidão de camponeses carregando tochas fumegantes está atrás de uma figura ameaçadora encapuzada com mãos esqueléticas. Na frente, um caliban se encolhe dentro de um círculo de sete espadas, cada uma delas profundamente enterrada no solo sangrento."
  },
  dictator: {
    dmText: "Esta carta representa nobres, funcionários do governo, clérigos ou generais que são líderes corruptos. É a marca do tirano ou déspota que atormenta aqueles que estão sob sua proteção. Opressão, dominação e atos de terror são simbolizados pelo ditador que exerce o poder injustamente ou captura a liderança por meios traiçoeiros. Invertida, indica um governante bom e justo, alguém que deseja proteger os fracos e desamparados ou libertar-se da prisão.",
    playerText: "Um homem no auge do desespero está preso sob pesadas correntes. Oito espadas prendem as correntes ao solo. O céu acima do horizonte é tempestuoso e cheio de nuvens escuras."
  },
  torturer: {
    dmText: "Uma das imagens mais ameaçadoras e temidas do baralho tarokka, o nove de Espadas representa o mal que tudo consome. Esta carta simboliza criaturas das trevas, sádicos, seres demoníacos e violentamente insanos. O torturador indica qualquer um que se deleite em sofrimento e tormento. Vistani estremece de pavor quando o aspecto positivo do nove de Espadas aparece em uma leitura. Invertida, a carta simboliza uma chance de redenção - mesmo para aqueles que seguiram o apelo sedutor do caminho da corrupção.",
    playerText: "Nove espadas brilham como brasa em um braseiro. Atrás do braseiro, um homem está pendurado em correntes, seu espírito obviamente destruído, seu corpo quebrado e marcado. É certo que ele não tem mais informações para dar, mas os tormentos continuam. A sombra de um corvo pode ser vista na parede ao lado dele."
  },
  warrior: {
    dmText: "(Conde Strahd) Esta carta simboliza aqueles que vivem suas vidas em batalha. Seja general ou gladiador-escravo, o Mestre de Espadas marca o guerreiro em todas as suas formas. Também indica o poder do governo e de outros líderes, seja no salão da guilda, no tribunal ou no campo de batalha. Como uma carta de foco, o leitor pode usá-lo para qualquer soldado, para aqueles em conflito físico ou mental ou qualquer coisa ligada ao elemento ar. Em seu aspecto reto, representa uma reação positiva - uma trégua ou aliança. Invertida, a carta representa uma resposta negativa, como assassinato ou guerra.",
    playerText: "Um homem mais velho, com armadura e ombros largos, cabelo preto e mechas brancas nas têmporas está de pé nas ameias, sua capa escura chicoteando atrás dele na brisa tempestuosa. Seu rosto está sombreado de perfil. Ao seu lado, ele usa uma espada elegante com um grande rubi no punho. Nove outras espadas estão espalhadas nas pedras, como se tivessem caído por inimigos que se rendiam. Uma lua está no céu, meio obscurecida pelas nuvens. Um corvo voa à luz da lua."
  },
  transmuter: {
    dmText: "(Dr. Victor Mordenheim) Às vezes, na busca ávida por conhecimento, um mago pode fazer descobertas inesperadas ou perigosas. O ás de estrelas representa alguém que fez tal descoberta ou os resultados desastrosos que dela advêm. Os exemplos incluem a criação de uma nova magia com efeitos colaterais horríveis, a mistura de duas poções alquímicas para criar um veneno inesperado ou a descoberta por um estudioso de um item mágico antigo com poderes mortais e incontroláveis. Às vezes, a carta indica alguém que teve sucesso enquanto perdeu de vista seus objetivos ou valores originais. Outras vezes, indica obsessão doentia, talvez amor obsessivo. Invertida, a carta pressagia um fracasso feliz ou um final benéfico e há muito esperado para um empreendimento.",
    playerText: "Um homem magro de meia-idade com rosto marcado por cicatrizes e cabelos grisalhos está sentado, olhando cansado através de um livro apoiado em uma mesa. Uma agulha, um carretel de linha e um bisturi estão ao lado do tomo aberto. Uma vela ilumina seu livro, sua chama uma estrela na escuridão. Atrás dele está uma figura alta e ameaçadora, sua forma distorcida na sombra, as mãos estendidas em direção ao pescoço."
  },
  diviner: {
    dmText: "O dois de estrelas simboliza uma compreensão sólida das consequências e uma preparação meticulosa. Ciência, artes de cura e magia benevolente fazem parte, assim como honestidade e verdade. Esta carta representa aqueles que buscam conhecimento vital para o benefício de todos. Ao contrário da maioria das cartas de tarokka, mesmo ao contrário, esta carta indica algo positivo - decepção compassiva, como uma mentira branca protetora.",
    playerText: "Um mago idoso está de pé enquanto um mais jovem se ajoelha a seus pés, apresentando um grande livro branco aberto para ela ler. O mais velho usa uma coroa coberta com chamas para mostrar sua nobreza e orgulho, enquanto o mais jovem olha para ela com admiração aberta. Duas estrelas brilham no céu, evidenciando o brilho radiante do conhecimento e o calor da compaixão e da compreensão. Uma pequena cobra se enrosca na garganta do mago mais jovem como um colar."
  },
  enchanter: {
    dmText: "O Encantador se esforça para encantar e tornar mágico o mundano ao seu redor. A carta do Encantador indica desafio em magia ou pesquisa e eventual sucesso. Determinação é a palavra de ordem desta carta, pois leva à iluminação e à vitória através da superação de adversidades. Invertida, o três de estrelas indica fracasso, mas a esperança é encorajada.",
    playerText: "Um mago luta contra uma terrível tempestade de vento ao longo de uma ponte estreita e arqueada. À distância, na outra extremidade da ponte, uma pequena porta aberta envia um feixe de luz brilhante ao longo do caminho. No céu, as nuvens estão se dissipando e três estrelas aparecem."
  },
  abjurer: {
    dmText: "O quatro de estrelas é a carta do investigador, seja estudando crimes ou o sobrenatural. Simboliza a necessidade de verificar fatos, analisar dados e usar a lógica na busca pelo conhecimento. Advertindo contra suposições e interpretação precipitada, o Abjurador deve separar a confusão e o caos para progredir. Indicando nem derrota nem sucesso, esta carta geralmente denota a necessidade de repensar ou revisar, pois uma pista ou fatos importantes podem ter sido negligenciados. Invertida, representa inspiração e compreensão repentina sem raciocínio consciente.",
    playerText: "Uma Vistana idosa parece estar dentro de uma bola de cristal perfeita. Quatro estrelas iluminam o interior da bola, iluminando seu rosto e mãos, bem como a escuridão ao seu redor. As estrelas simbolizam conhecimento, compreensão, verdade e lógica."
  },
  elementalist: {
    dmText: "Em sua interpretação mais básica, esta carta representa a Natureza em todos os seus aspectos - uma cachoeira suave, a tempestade violenta, um filhote de coelho ou um tigre rosnando, a lua e as estrelas. O cinco de Estrelas também indica o domínio da Natureza ou a eventualidade do sucesso da Natureza. Em seu aspecto positivo, o Elementalista prenuncia boa sorte em empreendimentos naturais, como caça ou colheita, até mesmo anunciando o nascimento de gêmeos em uma família estéril. Invertida, é indicativo de um evento natural negativo, como uma nevasca, um incêndio florestal ou uma manada violenta de elefantes selvagens.",
    playerText: "Um feiticeiro está de pé com os braços abertos acima da cabeça. Cinco estrelas se formam entre suas mãos, como um arco-íris. O sol forte brilha acima dele no céu. Uma vegetação luxuriante o rodeia. Dentro da folhagem, uma cobra está enrolada a seus pés, olhando para cima."
  },
  evoker: {
    dmText: "(Tatyana) O seis de Estrelas denota tentação levando a um possível desastre. A invasão do proibido, o roubo de túmulos ou as pesquisas sobre a tradição arcana sombria são todos indicados por esta carta sinistra, bem como o confronto com o mal além da compreensão do pesquisador. Em termos de jogo, esta carta pode ser um sinal de um teste de Horror em um futuro próximo. Invertida, denota o retorno da sanidade àquele que enlouqueceu ou resistiu a um desejo quase irresistível.",
    playerText: "Uma jovem ruiva com um longo vestido branco está ao lado de sua cama, olhando pela janela. Uma mão está levantada buscativa. Seu rosto está pensativo e apreensivo. Ela obviamente anseia pelo que está fora. Além da janela está uma figura sombria vestida com um manto escuro. Seu belo rosto está pálido e sua boca vermelha distorcida por presas. Seis estrelas decoram a vidraça com chumbo que envolve a parte central transparente. A janela está ligeiramente aberta."
  },
  illusionist: {
    dmText: "Cuidado com o engano quando esta carta aparecer. Alguém escondeu muito, disse mentiras ou formou conspirações obscuras além da percepção de um tolo pela causa. O sete de Estrelas pode indicar truques ou informações obtidas por meios malignos. Na pior das hipóteses, o foco da leitura pode se tornar um sacrifício a uma causa que ele ainda não compreende e pode nunca compreender. Invertida, esta é uma carta das sociedades secretas, organizadas para o bem ou para o mal.",
    playerText: "Uma figura em mantos escuros gesticula para um homem vendado preso em um diagrama complexo de fogo. Atrás da figura vestida há sete pedras monolíticas. Cada um está inscrito com uma estrela, que brilha fracamente à luz do fogo além."
  },
  necromancer: {
    dmText: "O oito de Estrelas denota o poder voltado contra si mesmo ou alguém que está plantando as sementes de sua própria destruição. Em sua posição vertical, ele também pode indicar uma mente afiada e instruída em busca do poder das trevas ou a presença de mortos-vivos. Invertida, a carta dá esperança de se voltar contra o mal ou derrotar uma poderosa criatura morta-viva, talvez por meio de um conhecimento recém-adquirido ou de escolhas inteligentes e moralmente corretas.",
    playerText: "Uma figura encapuzada com mãos esqueléticas faz gestos misteriosos sobre oito lápides. Cada lápide é marcada com uma estrela negra. Cadáveres apodrecidos saem dos túmulos."
  },
  conjurer: {
    dmText: "Embora muitas cartas dentro do naipe de Estrelas indiquem um fascínio pelo conhecimento proibido, o nove de Estrelas é a última carta de conhecimento maligno usada para fins aterrorizantes. Frequentemente chamada de carta de convocação, denota aqueles que ganham seu poder de demônios e outros seres malévolos do além. Pode indicar alguém que é um mestre desses seres ou alguém que se tornou um peão de seus esquemas malignos. Invertida, a carta ainda carrega conotações negativas, indicando repressão da verdade ou alguém deliberadamente retendo informações vitais.",
    playerText: "Uma feiticeira encantadora se contorce em uma dança apaixonada com um demônio sombrio. Sobre seu corpo seminu aparecem nove estrelas tatuadas. Ela usa uma braçadeira em forma de cobra. Atrás deles, uma cortina de chamas indica o elemento puro do fogo como fonte de destruição."
  },
  wizard: {
    dmText: "(Azalin Rex) O Mestre das Estrelas representa todos os que desejam conhecimento e poder místico. A carta dos sábios, eruditos, intelectuais, feiticeiros e necromantes, o dez das estrelas é o foco para quem segue o caminho de um mago ou feiticeiro. Pode indicar enigmas ou um mistério, o sobrenatural ou o desconhecido. Para os Vistani, a carta avisa sobre a presença de segredos ou conhecimentos ocultos que o foco da leitura deve obter para ter sucesso. Invertida, a carta indica a presença de um mestre do mal das artes arcanas ou revela uma pista enganosa.",
    playerText: "Uma figura escura olha para fora como se estivesse procurando algo desesperadamente. Seu rosto está sombreado sob uma capa com capuz decorada com dez estrelas, mas seus olhos aparecem como dois buracos estígios com pupilas de fogo."
  },
  monk: {
    dmText: "Esta carta representa autossuficiência e força interior. Melhoria física e mental é indicada, transcendendo as habilidades do homem comum. O monge vive para a contemplação e a tranquilidade, mas entende firmemente os males do mundo e se certifica de que seu corpo, mente e espírito são fortes o suficiente para enfrentar o desafio. Nas leituras, o aspecto positivo indica a necessidade de autossuficiência ou que a contemplação é um fator importante na resolução de um problema. Invertida, indica decisões precipitadas ou alguém com mente e corpo depravados.",
    playerText: "Um homem magro, com a cabeça raspada, está sentado com as pernas dobradas em um banco de madeira. Sua pele e olhos escuros mostram que ele é de Sri Raji. Vestido com uma culatra simples, ele contempla uma tigela simples cheia de água em concha em suas mãos. Uma orelha é furada, o lóbulo é longo, com um brinco pendurado na forma de um Glifo - semelhante ao símbolo da eternidade."
  },
  missionary: {
    dmText: "O dois dos Glifos indica aqueles que espalham os ensinamentos de seus deuses. Em seu aspecto positivo, esses ensinamentos trazem iluminação e sabedoria. Infelizmente, nos reinos de Ravenloft, esta carta é mais frequentemente vista em seu aspecto negativo: espalhando ignorância e medo. Invertida, esta carta profetiza dias sombrios que virão.",
    playerText: "Uma mulher em vestes clericais está em um púlpito pregando para uma multidão hipnotizada de fiéis. Ela segura dois livros, um preto e um branco, cada um inscrito com um Glifo na capa. É impossível dizer se ela ensina o bem ou o mal, embora a expressão sombria em seu rosto ameace a escuridão."
  },
  healer: {
    dmText: "Todos os que praticam as artes de cura são representados por esta carta, seja médico, herborista ou clérigo de uma ordem sagrada. Aqueles que procuram uma cura consideram os três de Glifos um presságio positivo. Invertida, indica doença ou enfermidades, possivelmente até uma maldição malévola.",
    playerText: "Um idoso inválido está deitado na cama. Ao lado dele, uma jovem sacerdotisa enxuga sua testa com um pano enquanto o olha com ternura. Um brilho emana de suas mãos curativas. Na parede atrás deles, três glifos esculpidos afastam as influências malignas para a saúde do paciente. Um lobo está deitado a seus pés."
  },
  shepherd: {
    dmText: "Dedicação, lealdade e devoção são as palavras de ordem dos quatro de Glifos. Esta carta indica seguidores devotados, companheiros leais e amigos confiáveis - aqueles que protegem e defendem o foco da leitura assim como um pastor observa seu rebanho. Invertida, a carta se torna um sinal sombrio de traição ou falha de um amigo confiável, seja acidentalmente ou propositalmente.",
    playerText: "Um jovem pastor observa seu rebanho com cuidado, mas seu cão leal está adormecido e um lobo espreita entre as ovelhas. Quatro glifos decoram o comprimento do cajado de seu pastor."
  },
  druid: {
    dmText: "Refletindo o equilíbrio da natureza e a neutralidade da espécie animal, o cinco de Glifos mostra o valor de permitir que os eventos aconteçam sem tentar controlá-los. Como um sinal de bem, indica uma liberação de emoções ou dominação mental. Invertida, torna-se um sinal de uma turbulência interna que perturba a serenidade natural da mente. Também pode alertar sobre doença mental ou obsessão.",
    playerText: "Um druida está em um bosque de cinco árvores. Um corvo repousa em seu ombro, enquanto um lobo e um rato olham. Uma cobra se enrola no galho de outra árvore. Cada árvore possui uma marca em forma de Glifo em seu tronco. Um riacho flui ao longo de um lado do bosque."
  },
  anarchist: {
    dmText: "As seis marcas de Glifos mudam, seja imediata ou gradual, para o bem ou para o mal. No seu aspecto positivo, sinaliza crescimento e melhoria. Todos os que procuram melhorar a si próprios ou à sua situação encontram graça na posição vertical desta carta. O Anarquista em sua forma mais básica também indica aqueles que se rebelam contra uma situação estática. Invertida, indica entropia, decadência e destruição, mas nunca estagnação.",
    playerText: "Uma figura está dentro de uma estrutura de arame trançado decorada com seis glifos. Raios crepitam na gaiola, iluminando o laboratório, enquanto a figura se transforma em algo ainda invisível."
  },
  charlatan: {
    dmText: "Malevolência onde nada é esperado é a marca do Charlatão. A carta de espiões, incrédulos e trapaceiros, na pior das hipóteses, adverte contra acreditar na pessoa ou deus errado. Em uma leitura, indica a necessidade de observar cuidadosamente e compreender as motivações dos outros, especialmente aquelas tomadas como certas ou geralmente despercebidas. Invertida, esta carta é mais positiva e denota a possibilidade de encontrar um amigo há muito esquecido ou encontrar um aliado entre os inimigos.",
    playerText: "Uma figura andrógina olha para fora, olhos fechados, indicando algo invisível ou oculto. Seu rosto é mascarado e cada olho decorado com três glifos. Um glifo maior marca a testa da máscara."
  },
  bishop: {
    dmText: "O oito de Glifos identifica um conspirador. Qualquer pessoa que inventar intrincados enredos ou desenvolver planos para manipular aqueles ao seu redor pode estar vinculada a esta carta. Não importa o motivo, essa pessoa tem uma vontade firme e implacável e uma adesão estrita a algum código de honra ou lealdade - seja de natureza boa ou má. Em seu aspecto vertical, indica a possibilidade de uma presença controladora por trás de uma série de eventos aparentemente não relacionados. Invertida, indica alguém de tendência leal e bom - ou qualquer pessoa que segue um código moral estrito.",
    playerText: "Um sacerdote real se senta orgulhosamente em um trono. Em seu colo está um pergaminho, que ele lê atentamente, embora sua mão esteja levantada e sua boca aberta em um gesto de comando. Acima, uma faixa está decorado com oito glifos. Dois lobos, um branco e um preto, estão nos calcanhares de cada lado de sua cadeira."
  },
  traitor: {
    dmText: "Também conhecido como o herege, o nove dos Glifos marca uma heresia aos deuses ou uma traição no mundo secular. Pode alertar sobre um paladino prestes a trair sua ordem e seu deus, um cônjuge trapaceiro ou um traidor fornecendo informações prejudiciais a um inimigo. O Traidor simboliza qualquer um que se volte deliberadamente contra aqueles que dependem dele ou acreditam nele. Invertida, o Traidor atua do lado do foco da leitura como amigo ou aliado.",
    playerText: "Uma figura esquiva, rosto escondido por um manto escuro com capuz, agacha-se atrás de um clérigo idoso. O clérigo está despejando água de uma jarra com joias em uma tigela. Obviamente realizando um ritual, ele não tem ideia de que o traidor está ali. O vilão furtivo está roubando uma estátua sagrada ornamentada que fica em uma mesa perto do sacerdote. A estátua, as vestes do sacerdote e o manto da figura escura são todos decorados com glifos, para um total de nove."
  },
  priest: {
    dmText: "(Alfred Timothy) A carta do patrono de todos os que seguem uma divindade, o dez dos Glifos indica adoradores ou adesão a um conjunto de regras e um código moral de comportamento, seja de boas ou más intenções. Esta carta representa servos religiosos, incluindo todos os clérigos, sacerdotes e druidas. Na vertical, simboliza aqueles que adoram deuses bons ou neutros. Invertida, denota uma divindade ou adoradores malignos.",
    playerText: "Um jovem sacerdote se ajoelha, com a cabeça baixa, diante de um lobo enorme. Ele está nu até a cintura. Acima dele está uma lua cheia; em torno dele uma matilha de lobos é reunida. Cada um dos oito lobos é marcado com um Glifo, assim como o tremoço gigante e o próprio sacerdote. Todas as cartas do baralho alto, ou Fortuna Magna, são poderosas e significativas para os Vistani. Essas 14 cartas têm especial importância para qualquer leitura e podem contradizer outras cartas ou mudar o significado de uma leitura profética em um instante. Quando uma leitura é marcada por um grande número da Fortuna Magna, os Vistani sabem que o destino realmente deseja comunicar algo de extrema necessidade ou significado. Quando todas as cartas em uma leitura são do baralho alto, a fortuna gerada pode mudar a forma dos reinos. (Veja a Tabela 4-1 para o Tarô e substitutos das cartas de jogar.)"
  },
  darklord: {
    dmText: "Embora a existência real de Lordes Sombrios como tal seja desconhecida pelos habitantes de Ravenloft, esta carta significa alguém de grande poder. Pressentindo, simboliza uma pessoa no comando de outros, de natureza má e tirânica. Suas ações podem trazer uma grande derrota ou destruir a esperança, mas em qualquer caso será uma poderosa força das trevas no foco do escopo da leitura. Quando em pé, o Lorde Negro está em uma posição de força. Invertida, o Lorde Negro pode mostrar alguma fraqueza significativa.",
    playerText: "Coroado com um diadema de ferro pontiagudo, um homem com feições cruéis e imperiosas o encara. Ele se senta em um trono alto, uma mão segura um cetro, e a outra repousa sobre a cabeça de um nobre lobo parado ao seu lado. Um corvo se empoleira na ponta das costas do trono, enquanto uma cobra se enrosca em seu pulso e um rato se senta em seu colo. Os animais significam o poder do mestre das trevas sobre todas as cartas do baralho inferior."
  },
  artifact: {
    dmText: "Também conhecido como carta-chave, o artefato indica um objeto físico de suprema importância. Seja um tomo misterioso de rituais malignos ou um colar de ouro premiado, a última lembrança de um amor perdido, o Artefato representa algo de necessidade fundamental para o foco da leitura. Pode ser a derrota final de um rival há muito odiado ou a única arma capaz de destruir uma fera horrível. Invertida, indica um objeto falsamente importante, algo dado um significado desnecessário.",
    playerText: "Uma coroa com joias douradas brilha em um travesseiro de veludo. É decorado com símbolos para Glifos, Estrelas, Espadas e Moedas, indicando a prevalência da carta sobre todas as outras cartas fora do baralho alto."
  },
  horseman: {
    dmText: "A carta mais sombria e sinistra dentro do tarokka, Vistani frequentemente se recusa a continuar uma leitura se esta imagem aparecer. Um símbolo de morte ou perda irredimível completa, esta carta significa calamidade de dimensões terríveis. Invertida, O Cavaleiro indica um destino menos permanente, embora ainda preveja um acidente incapacitante ou uma grande derrota na batalha.",
    playerText: "Um cavalo esquelético se empina, seu cavaleiro com cara de crânio envolto em uma capa preta. O cavalo bufa fogo, iluminando a cena. O cavaleiro carrega uma foice malvada. Abaixo dos pés do cavalo está um cadáver sem cabeça. Atrás dele está um campo cheio de lápides."
  },
  executioner: {
    dmText: "A carta do Executor denota a exposição de um homem culpado. Pode indicar a captura de um assassino, a descoberta de um marido infiel pela esposa ou um ladrão pego em flagrante. Não importa a situação, a pessoa é definitivamente culpada. Invertida, a carta pressagia alguém sendo punido por um crime que não cometeu ou que foi acusado falsamente.",
    playerText: "Uma figura musculosa encapuzada em couro preto está na forca. Ao lado dela, balança a forca de um carrasco, pronto para sua próxima vítima."
  },
  ghost: {
    dmText: "Os Vistani dizem que passado, presente e futuro são um só. A carta do Fantasma indica tempos passados avançando para influenciar o presente e o futuro. Pode alertar sobre o retorno de uma maldição antiga, uma dívida antiga ou um inimigo esquecido. Em seu simbolismo mais literal, pode indicar um fantasma ou outro espírito incorpóreo. Invertida, a imagem da carta fala de uma influência positiva do passado. Um velho amigo pode retornar ou o foco da leitura pode redescobrir uma herança de família.",
    playerText: "Um velho ajoelhado, cabeça baixa, dentro de um mausoléu. Ao lado dele, um jovem guerreiro vestido com uma armadura de cavaleiro jaz em estado, em um esquife. O espírito do jovem se eleva do cadáver, uma mão se estende para confortar ou talvez ferir o velho ajoelhado abaixo."
  },
  "broken-one": {
    dmText: "Esta carta simboliza aqueles que receberam formas horríveis ou aqueles com a mente ou o corpo quebrados por circunstâncias fora de seu controle. Algum poder destruiu, destruirá ou distorcerá algo vital pertencente ao foco da leitura. Também indicativo de seres sobrenaturais malignos, denota forças malévolas desconhecidas ou invisíveis. Também pode indicar alguém quebrado por um fracasso ou perdido em desespero. Invertida, o Violado denota a cura de algo ou alguém quebrado, talvez curando a loucura ou curando uma deformidade.",
    playerText: "A figura distorcida de um Violado está sentado sozinho, seu rosto torto sombreado, ombros curvados, obviamente perturbado. Em torno dele giram as Brumas."
  },
  raven: {
    dmText: "Uma das cartas mais positivas dentro da Fortuna Magna, o Corvo indica uma fonte de informação ou um aliado potencial. Também prediz forças benéficas vindo em auxílio de alguém, talvez até mesmo assistência mágica ou uma bênção sagrada, embora a fonte possa até ser uma fonte não reconhecida de talento no foco da própria leitura. Invertida, indica traição por uma fonte confiável de informações ou uma fraqueza inesperada.",
    playerText: "Um homem Vistani com cabeça de corvo está de pé, os braços abertos como asas como se para abraçar ou mostrar que não pretende fazer mal."
  },
  innocent: {
    dmText: "Também chamada de Vítima, esta carta indica uma pessoa pura ou indefesa de grande importância. Geralmente denotando alguém que não pode lidar com uma situação ou pode não estar ciente de um perigo significativo, o Inocente nem sempre está completamente desamparado, mas precisa de ajuda em alguma situação de risco de vida. Invertida, indica uma pessoa com forças ocultas. Talvez aquele cujos talentos possam ser importantes ou necessários para o foco da causa ou busca da leitura.",
    playerText: "Uma jovem gentil vestida de branco com longos cabelos dourados está sentada em um belo jardim. Uma mão está levantada, uma borboleta pousa em um dedo. Uma cobra se esconde na grama a seus pés."
  },
  marionette: {
    dmText: "O Fantoche simboliza um lacaio ou peão de alguém mais poderoso. Advertindo sobre lealdades divididas ou que um aliado ou amigo pode ser fortemente influenciado por outro, o Fantoche indica uma agenda oculta. A carta também pode indicar dominação mental ou posse por estranhos ou mortos-vivos incorpóreos. Invertida, o fantoche pode ser um ingênuo - não conhecendo os poderes que influenciam suas decisões, talvez até seus pensamentos.",
    playerText: "Uma marionete simples balança, cordas tensas se movem de um mestre invisível acima. A única decoração do fantoche é uma coroa de papel pousada levemente em sua cabeça."
  },
  donjon: {
    dmText: "Uma das cartas mais sinistras para os Vistani, o Cárcere também conhecida como masmorra, simboliza prisão, banimento ou isolamento. Seja o isolamento auto-imposto de um eremita ou de um prisioneiro trancado nas profundezas de uma masmorra, o Cárcere indica confinamento ou reclusão. Tal confinamento pode denotar alguém com a mente fechada ou o acorrentamento de um interno sozinho em uma cela úmida. Para os Vistani, pode denotar um Darkling, alguém banido de sua tribo por atos malignos. Invertida, significa liberdade, romper com os padrões de pensamento fechados, retornar à família e à tribo ou, literalmente, escapar da prisão.",
    playerText: "A silhueta de um homem olha pela janela de uma torre alta. A janela está gradeada e nenhuma outra luz aparece, exceto a luz fria da lua crescente no céu estrelado."
  },
  tempter: {
    dmText: "Simbolismo de todas as tentações físicas, a Tentação indica alguém cujos valores são comprometidos pelo desejo ou sedução. Geralmente, ceder à tentação é um ato subconsciente; no entanto, alguns podem escolher deliberadamente ceder, sucumbindo à paixão ou rendendo-se a uma necessidade obscura. Como um lobisomem precisa de carne e o vampiro de sangue, esta carta mostra desejo e necessidade ocultos. Sua imagem vertical denota alguém subconscientemente atraído pela tentação que o domina. Invertida, indica rendição deliberada.",
    playerText: "Uma mulher Vistani voluptuosa com cabelo longo e encaracolado faz uma pose sedutora, uma mão A Tentação ATentação estendida como se para atrair o observador para a frente, a outra para baixo ao longo de suas coxas. Ela está vestida com lenços de seda, um brinco de ouro e pouco mais."
  },
  mists: {
    dmText: "Para os Vistani, as Brumas estão misticamente conectadas ao Destino e vendo o futuro através do tarokka. Apenas os Vistani podem atravessar com segurança as Brumas. Apenas os Vistani têm a capacidade de interpretar as imagens de sua ferramenta profética. As Brumas alertam sobre o mistério e o inesperado. Um evento importante está destinado a acontecer algo que vem como uma surpresa, não importa o conhecimento prévio que alguém ganhe. Invertida, a carta indica uma jornada inesperada ou um caminho até então oculto que leva ao sucesso.",
    playerText: "Fracamente, as lâmpadas de uma carroça Vistani brilham através da névoa espessa, iluminando um caminho que leva adiante nas névoas. O destino é desconhecido."
  },
  beast: {
    dmText: "Evocando impulsos e paixões animais, a carta Bestial indica sua influência dentro de uma leitura. Frequentemente anunciando atos ou decisões precipitadas, denota o uso do instinto sobre a razão. Chamada de carta de patrono dos metamorfos, ela simboliza as criaturas de tendência boa e má, bem como outras que podem mudar sua forma, seja por meios alquímicos ou mágicos. Invertida, a carta é uma influência estabilizadora, denotando alguém ou algo que é estável e confiável.",
    playerText: "Um cervo está deitado no chão da floresta, com a garganta arrancada. Acima dele está um lobo ou talvez lobisomem, focinho ainda sangrento da matança, rosnando para um intruso invisível."
  },
  seer: {
    dmText: "Considerado um “curinga” pelos Vistani, o Herói é um aliado poderoso e inesperado. Simbólico de todos os que se esforçam para fazer o bem dentro dos reinos de Ravenloft, pode indicar um paladino virtuoso, um ladrão honesto ou qualquer pessoa trabalhando para derrotar as trevas e o mal. Esta carta indica um aliado influente, um amigo leal ou a mão dos deuses trabalhando em seu favor. Quando essa pessoa chega, a vitória é certa, embora possa não vir como esperado. Os Vistani também o chamam de Boa Sorte. Invertida, a má sorte é certa.",
    playerText: "O herói permanece confiante, a espada em punho para defender ou atacar conforme necessário. Os raios do sol brilham em seu cabelo dourado e sua cota de malha prateada. Uma cabeça de lobo, corvo, cobra e rato decoram seu escudo esquartejado. O Herói OHerói"
  }
}, Zh = {
  "strahd-location": {
    dmText: "A primeira carta determina onde está escondido o próprio Strahd.",
    playerText: "Esta carta é o objeto de sua busca! Ah! Eu vejo escuridão e mal por trás dessa carta! Ela é um poderoso homem cujo inimigo é a luz, e possui poderes além da mortalidade."
  },
  "strahd-goal": {
    dmText: "A segunda carta determina os objetivos de Strahd.",
    playerText: "E aqui está a carta podre. Fora da escuridão e do caos, esta carta mostra a razão e o fundamento do mal. Esta carta mostra o propósito de todas as coisas. Ela é a chave para a vida e a morte e tudo além disso."
  },
  "strahd-tome": {
    dmText: "A terceira carta determina onde está escondido o Tomo de Strahd.",
    playerText: "Esta carta conta uma história. O conhecimento dos antigos ajudará a conhecer seu adversário."
  },
  "holy-symbol": {
    dmText: "A quarta carta determina onde está escondido o Símbolo Sagrado.",
    playerText: "Esta carta é símbolo de um grande poder. Ela fala de uma poderosa força do bem e da proteção contra as forças da escuridão."
  },
  "sun-sword": {
    dmText: "A quinta carta determina onde está escondida a Espada do Sol.",
    playerText: "Esta carta é boa pra você. É uma carta de poder e força, a carta de Victor. Ela fala de uma arma da luz, uma arma da vingança."
  }
}, Hm = [
  {
    values: [1, 2, 3],
    text: {
      dmText: "Biblioteca - K37. O objeto está envolto em um tecido, debaixo do retrato de uma mulher. Se Strahd estiver aqui, estará sentado em um sofá, olhando fixamente para o fogo ardente da lareira.",
      playerText: "Está em um lugar de tranquilidade, um porto para o forte e poderoso. Está em um lugar de sabedoria, calor e desespero. Grandes segredos estão lá."
    }
  },
  {
    values: [4, 5, 6],
    text: {
      dmText: "Sala do Tesouro - K41. O objeto está sobre os outros tesouros. Se Strahd estiver aqui, estará contando seu tesouro mal conseguido.",
      playerText: "Você deve buscar por um local cuidadosamente escondido de grande riqueza mundana. Eu vejo uma luz ardente protegendo o lugar."
    }
  },
  {
    values: [7, 8, 9],
    text: {
      dmText: "Capela de Ravenloft - K15. O objeto está no altar, brilhantemente iluminado por um feixe de luz do teto. Se Strahd estiver aqui, estará de pé no centro da sala - uma silhueta escura no vasto salão.",
      playerText: "Você pode achar o que procura entre as ruínas de um lugar de súplica."
    }
  },
  {
    values: [10],
    text: {
      dmText: "Topo da Torre Norte - K60. O objeto está em um baú de ferro trancado. Se Strahd estiver lá, estará na janela, examinando suas terras.",
      playerText: "O que procuras está em um lugar de altura vertiginosa, que todos abominam chegar. A estrada dos ventos sempre o percorre, e as pedras choram aqui!"
    }
  }
], Jh = ["marionette", "executioner", "beast", "seer"], $h = ["innocent", "mists", "tempter", "raven"], Wh = ["ghost", "darklord", "broken-one", "donjon"], Fh = [
  "marionette",
  "executioner",
  "beast",
  "seer",
  "innocent",
  "mists",
  "tempter",
  "raven"
], Ih = ["ghost", "darklord", "broken-one", "donjon"], Ph = {
  Glyphs: {
    playerText: "Existe uma influência boa aqui. Se você estiver lá, os poderes do bem o ajudarão.",
    dmText: "Os PJ’s recebem +1 de bônus no ataque e na CA."
  },
  Coins: {
    playerText: "O diamante abençoa sua habilidade, mas pressagia mal para sua proteção.",
    dmText: "Os PJ’s recebem +1 de bônus no ataque e -1 de penalidade na CA."
  },
  Stars: {
    playerText: "O porrete sustenta sua força aqui, mas prende sua vitória, tomando mais tempo do que caso contrário tomaria.",
    dmText: "Os PJ’s recebem +1 de bônus na CA e -1 de penalidade no ataque."
  },
  Swords: {
    playerText: "A espada é uma sombra escura do mal que cobre esse lugar. Você luta debaixo dessa influência aqui.",
    dmText: "Os PJ’s sofrem -1 de penalidade no ataque e na CA."
  }
};
function ev(u) {
  var d;
  return kr(u) ? ((d = Hm.find(({ values: m }) => m.includes(u.value))) == null ? void 0 : d.text) ?? Hm[3].text : Jh.includes(u.id) ? {
    dmText: "Cripta de Sergei von Zarovich - K85. O objeto está em cima do caixão de Sergei. Se Strahd estiver aqui, estará ajoelhado na placa de mármore, lamentando-se.",
    playerText: "Ele está com um velho príncipe caído. O irmão do escuro é a luz, cujos restos descansam neste lugar."
  } : $h.includes(u.id) ? {
    dmText: "Cripta de Ravenovia - K88. O objeto está em cima do caixão de Ravenovia. Se Strahd estiver aqui, estará em um frenesi de ira e desespero.",
    playerText: "Ele está no local da mãe."
  } : Wh.includes(u.id) ? {
    dmText: "Salão de Audiências do Rei - K25. O objeto está atrás do trono. Se Strahd estiver aqui, estará sentado no trono.",
    playerText: "O trono do rei é o local onde encontrá-lo."
  } : {
    dmText: "Cripta de Strahd - K86. O objeto está em um canto da cripta. Se Strahd estiver aqui, ele está dentro de seu caixão, pronto para atacar no primeiro sinal de alguém abrindo a tampa.",
    playerText: "Isto é um sinal muito ruim. Ele está bem no coração de escuridão: sua casa, sua fonte. É seu centro e sua vida. É o lugar para o qual ele deve retornar."
  };
}
function av(u) {
  return kr(u) && [1, 2, 3, 4].includes(u.value) ? {
    dmText: "Strahd busca uma nova identidade. Strahd tentará ficar sozinho com um personagem do grupo que esteja Enfeitiçado. Quando isso ocorrer, ele usará Metamorfose no PJ para torná-lo semelhante a um vampiro. Depois, usará a mesma magia nele, para se parecer com o personagem enfeitiçado. Por último, ele usará a magia Sono, para adormecer o PJ e colocá-lo dentro de seu próprio caixão, e tentará se unir ao grupo de jogadores, se fazendo passar pelo PJ metamorfoseado. Strahd tentará persuadir o grupo de que ele encontrou uma maneira de deixar Baróvia. Strahd então, depois de tudo, abrirá os portões do Castelo. Ele tentará se mudar para outro país usando esta nova identidade. Os ciganos levarão a terra de sua cripta até sua nova casa.",
    playerText: "Não ainda, mas logo, alguém que parece ser seu amigo se tornará seu inimigo."
  } : kr(u) && [5, 6, 7, 8, 9].includes(u.value) ? {
    dmText: "Strahd quer construir uma esfera de escuridão mágica. Strahd está tentando construir um artefato mágico que lança uma esfera contínua de escuridão. Tal item estenderia o alcance de suas viagens. Ao longo dos séculos ele juntou os pedaços da esfera um por um, agora está faltando só um pedaço, uma opala negra. Strahd erradamente acredita que um dos PJ’s possui uma opala negra. Strahd usará sua habilidade natural de enfeitiçar pessoas para encantar PJ’s solitários. Strahd enviará o PJ encantado de volta ao grupo, para perguntar: “Você tem a opala negra?” Quando Strahd descobrir que nenhum dos PJ’s tem uma opala negra, ele tentará destruí-los.",
    playerText: "Esta carta fala de uma ferramenta do mal. A escuridão cerca e protege esta ferramenta, dando conforto para os corações negros e proteção contra o bem."
  } : an(u) && Fh.includes(u.id) ? {
    dmText: "Strahd quer ganhar o amor de Ireena Kolyana. Strahd tentará encantar todos os PJ’s, e fazer com que eles ataquem Ireena. Quando eles a atacarem, Strahd surgirá e a salvará dos PJ’s. Strahd espera que este ato faça o coração de Ireena se apaixonar por ele. Ele quer que Ireena o ame de boa vontade, e não à força.",
    playerText: "A escuridão ama a luz e a deseja. Grandes mas sutis planos estão em movimento sobre você; planos que farão o morto encontrar calor do vivo."
  } : an(u) && Ih.includes(u.id) ? {
    dmText: "Strahd quer a Espada do Sol. Strahd quer destruir a Espada do Sol. Ele acredita corretamente que um dos PJ’s porta a espada por algum tempo. Se o cabo da espada for achado e reunido com a lâmina, Strahd correria um sério perigo.",
    playerText: "Esta é uma carta alta e nobre. Um de vocês porta uma arma mais forte que qualquer outra contra o mal nesta terra. Só uma parte está faltando desta arma. E esta parte pode ser encontrada no lar do maligno."
  } : null;
}
function tv(u) {
  return !kr(u) || !u.suit ? null : Ph[u.suit] ?? null;
}
function Wl(u, d, m, i) {
  u.push(`${m}: ${i.dmText}`), d.push(`${m}: ${i.playerText}`);
}
function ov(u, d, m, i, S) {
  const x = [], j = [], D = Zh[d.id];
  if (D && (m || i) && Wl(x, j, "Posição", D), m || S) {
    if (["strahd-location", "strahd-tome", "holy-symbol", "sun-sword"].includes(d.id) && Wl(x, j, "Resultado", ev(u)), d.id === "strahd-goal") {
      const b = av(u);
      b && Wl(x, j, "Resultado", b);
    }
    const q = tv(u);
    q && Wl(x, j, "Influência do naipe", q);
  }
  return m ? [
    ...x.length ? [`Mestre: ${x.join(" ")}`] : [],
    ...j.length ? [`Jogadores: ${j.join(" ")}`] : []
  ] : j.length ? [`Jogadores: ${j.join(" ")}`] : [];
}
const rv = {
  avenger: "O Vingador",
  paladin: "O Paladino",
  soldier: "O Soldado",
  mercenary: "O Mercenário",
  myrmidon: "O Mirmidão",
  berserker: "O Furioso",
  "hooded-one": "O Encapuzado",
  dictator: "O Ditador",
  torturer: "O Torturador",
  warrior: "O Guerreiro",
  swashbuckler: "A Fora-da-Lei",
  philanthropist: "O Filantropo",
  trader: "O Comerciante",
  merchant: "O Mercador",
  "guild-member": "O Membro da Guilda",
  beggar: "O Mendigo",
  thief: "A Ladra",
  "tax-collector": "O Coletor de Impostos",
  miser: "O Avarento",
  rogue: "O Ladino",
  transmuter: "O Transmutador",
  diviner: "O Adivinho",
  enchanter: "O Encantador",
  abjurer: "A Abjuradora",
  elementalist: "O Elementalista",
  evoker: "A Invocadora",
  illusionist: "O Ilusionista",
  necromancer: "O Necromante",
  conjurer: "A Conjuradora",
  wizard: "O Mago",
  monk: "O Monge",
  missionary: "O Missionário",
  healer: "A Curandeira",
  shepherd: "O Pastor",
  druid: "O Druida",
  anarchist: "O Anarquista",
  charlatan: "O Charlatão",
  bishop: "O Bispo",
  traitor: "O Traidor",
  priest: "O Clérigo",
  artifact: "O Artefato",
  beast: "A Besta",
  "broken-one": "O Violado",
  darklord: "O Lorde Sombrio",
  donjon: "O Cárcere",
  seer: "O Vidente",
  ghost: "O Fantasma",
  executioner: "O Carrasco",
  horseman: "O Cavaleiro",
  innocent: "O Inocente",
  marionette: "O Fantoche",
  mists: "As Brumas",
  raven: "O Corvo",
  tempter: "A Tentação"
}, lv = {
  avenger: {
    playerText: "Necessidade de vingança ou revanche. Reparação de injustiças.",
    dmText: "Simboliza a justiça final e a revanche por grandes injustiças. É a carta do cavaleiro solitário e andarilho, que não jura lealdade a nenhum lorde."
  },
  paladin: {
    playerText: "Vitória através da justiça e da lei.",
    dmText: "Associada aos justos e nobres guerreiros, simboliza o que é honrado e íntegro. Representa o triunfo do bem sobre o mal."
  },
  soldier: {
    playerText: "Um futuro incerto. Luta do bem contra o mal. Sem garantia de vitória.",
    dmText: "Carta de interpretação incerta. Simboliza a vitória do bem sobre o mal, mas não garante triunfo; indica que a sorte pode decidir o conflito."
  },
  mercenary: {
    playerText: "Código profissional de conduta. Uma espada para o bem ou para o mal.",
    dmText: "Representa aqueles que usam armas para ganhos pessoais, servindo tanto o bem quanto o mal, mas seguindo um código profissional. Fala de força interior, fortitude e vigor diante de desafios físicos."
  },
  myrmidon: {
    playerText: "Reviravolta do destino em batalha. Vitória ou derrota súbita.",
    dmText: "Marca uma súbita virada na sorte em meio ao combate: uma derrota causada por um detalhe, a chegada de reforços ou a queda inesperada de um inimigo poderoso."
  },
  berserker: {
    playerText: "Barbarismo e brutalidade em combate.",
    dmText: "Representa o lado bárbaro e brutal da guerra. Indica ações brutas, bestiais e imprevisíveis, frequentemente associadas a licantropos."
  },
  "hooded-one": {
    playerText: "Decepção, estupidez ou fanatismo. Crença na violência como solução.",
    dmText: "Representa os inclinados ao mal por estupidez ou decepção. Marca fanatismo, intolerância, xenofobia e a crença de que a violência é a única resposta."
  },
  dictator: {
    playerText: "Dominação ou atos de terror.",
    dmText: "Marca tudo que é errado em governos e lideranças: tirania, domínio pelo medo, intimidação, opressão e influência de forças militares malignas."
  },
  torturer: {
    playerText: "Crueldade e atos implacáveis. Vingança contra inimigos.",
    dmText: "Prevê sofrimento e crueldade sem misericórdia. É sinal de sadismo e da mão dos Poderes Sombrios; uma carta temida no tarokka."
  },
  warrior: {
    playerText: "Um encontro violento. Briga. Guerra.",
    dmText: "Carta Mestre do naipe de Espadas. Representa os que usam força e violência para atingir objetivos ou lideram outros por esse caminho; é carta de foco para guerreiros e similares."
  },
  swashbuckler: {
    playerText: "Aquele que procura dinheiro para ajudar outros.",
    dmText: "Indica quem anda fora da lei para ajudar os outros, como criminosos que roubam dos ricos para dar aos pobres. Representa o nobre fora da lei que entende a importância do dinheiro, mas não o deseja para si."
  },
  philanthropist: {
    playerText: "Desinteresse em si mesmo. Caridade ao próximo.",
    dmText: "Representa atos de caridade, doação e devoção ao próximo. É uma carta positiva, mas pode também indicar presentes dados com falsas intenções, como suborno."
  },
  trader: {
    playerText: "Comércio, lícito ou ilícito.",
    dmText: "Governa o comércio: leilões, mercados, pechinchas e preços elevados. Seu lado sombrio fala de contrabando, mercado clandestino e tráfico de materiais ilícitos."
  },
  merchant: {
    playerText: "Negócios sombrios ou perigosos.",
    dmText: "Alerta para a falsidade dos mercadores e transações em que nada é o que parece: bens adulterados, preços injustos ou negócios perigosos."
  },
  "guild-member": {
    playerText: "Cooperação em benefício mútuo.",
    dmText: "Fala de partilha, justiça e trabalho conjunto. Representa fraternidade e parceria nos negócios, sem maldade ou bondade inerente."
  },
  beggar: {
    playerText: "Mudanças radicais na sorte econômica.",
    dmText: "Marca mudança súbita na situação econômica. Pode indicar pobreza que vira riqueza com sofrimento, ou a ruína econômica de alguém."
  },
  thief: {
    playerText: "Aquele que rouba. Uma possível perda ou roubo.",
    dmText: "Carta dos que vivem do roubo, de assaltantes a assassinos. Alerta que algo valioso para o grupo ou para um personagem está em risco."
  },
  "tax-collector": {
    playerText: "Corrupção e decepção na alta sociedade.",
    dmText: "Marca corrupção e decepção envolvendo pessoas importantes, governos ou posições elevadas. Também pode revelar alguém íntegro dentro de uma organização corrupta."
  },
  miser: {
    playerText: "Aquele que acumula riqueza, mas leva uma vida miserável.",
    dmText: "Fala dos que acumulam vastas riquezas e vivem miseravelmente ou se perdem em excessos. Pelo lado bondoso, pode indicar fortuna obtida para um objetivo importante."
  },
  rogue: {
    playerText: "Aquele que lida com dinheiro. Ambicioso.",
    dmText: "Carta Mestre do naipe de Moedas. Representa ladrões, mendigos, banqueiros e mercadores: todos que acumulam, buscam ou rejeitam dinheiro. É carta de foco para ladinos e similares."
  },
  transmuter: {
    playerText: "Descobertas perigosas. Obsessão insalubre.",
    dmText: "Alerta para conhecimentos obtidos sem misericórdia ou compaixão. Fala de descobertas que trazem sofrimento e de objetivos fixos que podem se tornar obsessões."
  },
  diviner: {
    playerText: "Preparação meticulosa. Entendimento das consequências.",
    dmText: "Representa pesquisa, preparação e estudo das consequências. Simboliza verdade, honestidade e uma informação benéfica a ser descoberta."
  },
  enchanter: {
    playerText: "Determinação leva à vitória e à superação do sofrimento.",
    dmText: "Marca determinação diante de falha inicial, sofrimento e obstáculos. Prediz dificuldade, mas também esperança e vitória por perseverança."
  },
  abjurer: {
    playerText: "Busca pelos fatos. Uso da lógica para alcançar o conhecimento.",
    dmText: "Fala de esforço, confusão e sofrimento antes de um caminho árduo. A superação vem pela busca dos fatos e pelo uso da lógica."
  },
  elementalist: {
    playerText: "Maestria da natureza. Boa sorte em desafios naturais.",
    dmText: "Apela às forças imparciais do cosmos. Representa tanto o triunfo da natureza sobre a obra humana quanto a habilidade mortal de conter e dominar essas forças."
  },
  evoker: {
    playerText: "Atentação leva a um possível desastre.",
    dmText: "Marca pesquisa em áreas que os mortais não deveriam explorar. Prediz a descoberta de sabedoria antiga que trará desastre aos que a estudarem."
  },
  illusionist: {
    playerText: "Artifícios ou informações ganhas por meios malignos.",
    dmText: "Fala de mentiras, decepção, conspirações, sociedades secretas e informações adquiridas por meios malignos ou moralmente duvidosos."
  },
  necromancer: {
    playerText: "Poder contra si mesmo. Plantar as sementes da própria destruição.",
    dmText: "Indica fascinação antinatural, obsessão por poder e ligação com mortos-vivos. O poder do mestre dos mortos-vivos se volta contra si mesmo."
  },
  conjurer: {
    playerText: "Aqueles que ganham poder de fontes malignas.",
    dmText: "Representa magia negra e conhecimentos proibidos. Fala dos que ganham poder de fontes malignas e caminham perto da vontade dos Poderes Sombrios."
  },
  wizard: {
    playerText: "Poder, conhecimento e magia. Boa sorte e azar.",
    dmText: "Carta Mestre do naipe de Estrelas. Representa magos, feiticeiros, sábios e intelectuais famintos por poder místico e conhecimento; aponta mistérios, enigmas e segredos a serem pesquisados."
  },
  monk: {
    playerText: "Autoconfiança e força interior. Contemplação para resolver problemas.",
    dmText: "Fala de serenidade e satisfação de uma vida contemplativa. Expressa força interior, autoconfiança e a verdade encontrada pela contemplação."
  },
  missionary: {
    playerText: "O disseminador da fé.",
    dmText: "Representa aqueles que disseminam fé, conhecimento e sabedoria. Pelo lado maligno, fala da propagação do medo e da ignorância."
  },
  healer: {
    playerText: "Praticantes das artes curativas, físicas e espirituais.",
    dmText: "Amiga dos praticantes das artes curativas, médicos e clérigos. Para forças malignas, pode anunciar maldição ou doença macabra."
  },
  shepherd: {
    playerText: "Seguidor devotado. Amigo confiável.",
    dmText: "Fala de devoção e dedicação de amigos confiáveis, companheiros leais e seguidores devotos. Também pode advertir para a falha de um amigo fiel."
  },
  druid: {
    playerText: "Equilíbrio da natureza. Liberdade de emoções.",
    dmText: "Reflete os valores da natureza e a divindade do reino animal. Prega equilíbrio natural, saúde espiritual, liberdade mental e liberdade de deveres e emoções."
  },
  anarchist: {
    playerText: "Mudanças para melhor ou pior. Transição pacífica ou turbulenta. Revolução.",
    dmText: "Revela que tudo é transitório e que a natureza exige mudança constante. Pode prever melhoria, entropia, decadência, colapso ou revolução."
  },
  charlatan: {
    playerText: "Necessidade de alerta ou vigia cuidadosa. Um malandro ou um espião.",
    dmText: "Evoca espiões e malandros. Pode indicar um inimigo que se torna aliado, mas geralmente alerta para traição e necessidade de vigilância cuidadosa."
  },
  bishop: {
    playerText: "Uma presença controladora por trás de uma série de eventos macabros.",
    dmText: "Casa daqueles que planejam, conspiram e manipulam. Marca uma presença controladora por trás de eventos sombrios, para benefício próprio ou de outro objetivo."
  },
  traitor: {
    playerText: "Traição. Conspiração.",
    dmText: "Uma das cartas mais temidas do tarokka. Marca traição de alguém próximo e confiável, ou uma conspiração que se aproxima dos personagens."
  },
  priest: {
    playerText: "Um serviçal religioso obstinado.",
    dmText: "Carta Mestre do naipe de Glifos. Representa quem segue um deus, um sistema de valores ou as forças naturais do universo; é carta de foco para clérigos e similares."
  },
  artifact: {
    playerText: "Um objeto de importância.",
    dmText: "Refere-se a um objeto de grande importância para a leitura, de uma relíquia poderosa a um simples anel. É carta de foco quando a leitura busca descobrir algo sobre um item."
  },
  beast: {
    playerText: "Impulsos e paixões animalescas vêm à tona.",
    dmText: "Traz à tona a besta selvagem existente dentro do indivíduo. Indica influência animal, crimes impulsivos ou passionais, e é carta patrona dos licantropos como foco."
  },
  "broken-one": {
    playerText: "A mente, o corpo ou o espírito está partido.",
    dmText: "Indica derrota, fracasso e desespero. A mente, o corpo ou o espírito de alguém está quebrado, muitas vezes por perda pessoal ou saudade de alguém que se foi."
  },
  darklord: {
    playerText: "Alguém de grande poder trabalha contra o consulente.",
    dmText: "Lembra os lordes dos domínios de Ravenloft. Indica um indivíduo poderoso, geralmente maligno ou tirânico, cujas intenções podem ter grandes consequências."
  },
  donjon: {
    playerText: "Alerta de aprisionamento ou isolamento.",
    dmText: "Alerta para aprisionamento ou isolamento, voluntário ou forçado. Pode representar confinamento físico, mental ou padrões antigos que precisam ser quebrados."
  },
  seer: {
    playerText: "Uma lembrança dos poderes da mente.",
    dmText: "Lembra os poderes da mente. Pode indicar grande intelecto, inspiração súbita ou o uso de espionagem psíquica contra os personagens."
  },
  ghost: {
    playerText: "Ações do passado podem retornar.",
    dmText: "Alerta que atos ou escolhas do passado ainda têm consequências no presente. Pode representar um velho inimigo, antiga dívida, maldição ou destino mágico."
  },
  executioner: {
    playerText: "Exposição a uma pessoa culpada de algo.",
    dmText: "Indica que alguém foi pego fazendo algo errado, mas também pode falar de falsas acusações ou incriminações injustas."
  },
  horseman: {
    playerText: "Calamidade terrível, morte.",
    dmText: "Pressagia morte e desastre, mas nem sempre morte literal. Pode indicar acidente grave, derrota importante, perda de riqueza ou poder mágico."
  },
  innocent: {
    playerText: "Uma pessoa pura e indefesa precisa de ajuda.",
    dmText: "Denota uma pessoa indefesa de grande importância. Indefesa não significa fraca, mas alguém desavisado ou incapaz de perceber e lidar com o perigo ao redor."
  },
  marionette: {
    playerText: "Alerta à presença de um traidor.",
    dmText: "Indica a presença de um traidor ou lacaio de grande poder. Alguém que parece importante pode ser apenas subalterno de outro mestre, ou esconder um segredo."
  },
  mists: {
    playerText: "Mistério ou o inesperado. Um evento importante está para acontecer.",
    dmText: "Invoca as brumas de Ravenloft para advertir sobre mistérios, surpresas, eventos importantes, informações ocultas, pistas ainda não reveladas ou uma jornada inesperada."
  },
  raven: {
    playerText: "Um aliado potencial ou uma fonte de informação está para chegar. Forças são benéficas.",
    dmText: "Indica uma fonte de informações secretas com potencial para a bondade. Pode anunciar um novo aliado, uma magia benéfica, um objeto ou uma sequência de eventos favoráveis."
  },
  tempter: {
    playerText: "Um grande desejo à frente. Tentação.",
    dmText: "Indica um desejo que pode levar à tentação. Alguém pode perder de vista seus princípios por paixão, deliberação ou por uma boa intenção desviada."
  }
}, tn = (u, d, m, i) => {
  const S = {
    ...Gt.find(({ id: b }) => b === u.id) ?? u,
    flipped: u.flipped
  }, { card: x, description: j, flipped: D } = S;
  let q = [];
  if (m || D) {
    if (["adnd12", "old-dragon-2"].includes(i.gameSystem) && i.readingSpread === "i6-castle-ravenloft")
      return ov(
        S,
        d,
        m,
        i.positionFront,
        i.prophecy
      );
    if ((m || i.positionFront) && q.push(d.text), i.gameSystem === "dnd35") {
      const b = Kh[S.id];
      if (b)
        if (m) {
          const C = Xh[S.id] ?? x;
          q.push(`${C}: ${b.dmText}`), q.push(`Jogadores: ${b.playerText}`);
        } else i.prophecy && q.push(b.playerText);
      else m && q.push(`${x}: ${j}`);
      return q;
    }
    if (i.gameSystem === "old-dragon-2") {
      const b = lv[S.id];
      if (b)
        if (m) {
          const C = rv[S.id], L = C ? an(S) ? `Arcano Maior: ${C}` : `${x}: ${C}` : x;
          q.push(`${L}: ${b.dmText}`), q.push(`Jogadores: ${b.playerText}`);
        } else i.prophecy && q.push(b.playerText);
      else m && q.push(`${x}: ${j}`);
      return q;
    }
    m && q.push(`${x}: ${j}`), an(S) && (d.id === "ally" && ((m || i.prophecy) && q.push(S.prophecy.allies[0].playerText), m && q.push(S.prophecy.allies[0].dmText), m && q.push(`Aliado: ${S.prophecy.allies[0].ally}`)), d.id === "strahd" && ((m || i.prophecy) && q.push(S.prophecy.strahd.playerText), m && q.push(S.prophecy.strahd.dmText))), kr(S) && ["tome", "ravenkind", "sunsword"].includes(d.id) && ((m || i.prophecy) && q.push(S.prophecy.playerText), m && q.push(S.prophecy.dmText));
  }
  return q;
}, Co = (u, d) => {
  const m = [...u];
  for (let i = m.length - 1; i > 0; i--) {
    const S = Math.floor(Math.random() * (i + 1));
    [m[i], m[S]] = [m[S], m[i]];
  }
  return d > m.length ? m : m.slice(0, d);
}, Vt = {
  simple: {
    value: "simple",
    label: "Tiragem simples",
    description: "Uma única carta para resposta rápida, presságio ou direção imediata.",
    columns: 1,
    rows: 1,
    positions: [
      {
        id: "single",
        deck: "both",
        name: "Carta única",
        text: "Esta carta revela o presságio central da leitura.",
        x: 1,
        y: 1
      }
    ]
  },
  "simple-cross": {
    value: "simple-cross",
    label: "Cruz simples",
    description: "A tiragem padrão atual, com três cartas comuns e duas cartas altas.",
    columns: 3,
    rows: 3,
    positions: [
      {
        id: "tome",
        deck: "low",
        name: "Tomo de Strahd",
        text: "Carta 1: Esta carta determina a localização do Tomo de Strahd (descrito no apêndice C).",
        x: 1,
        y: 2
      },
      {
        id: "ravenkind",
        deck: "low",
        name: "Símbolo Sagrado de Ravenkind",
        text: "Carta 2: Esta carta determina a localização do Símbolo Sagrado do Grande Corvo (descrito no apêndice C).",
        x: 2,
        y: 1
      },
      {
        id: "sunsword",
        deck: "low",
        name: "Espada Solar",
        text: "Carta 3: Esta carta determina a localização da Solâmina (descrita no apêndice C).",
        x: 3,
        y: 2
      },
      {
        id: "ally",
        deck: "high",
        name: "Inimigo de Strahd",
        text: "Carta 4: Esta carta determina onde os personagens poderão encontrar um poderoso aliado.",
        x: 2,
        y: 3
      },
      {
        id: "strahd",
        deck: "high",
        name: "Strahd",
        text: "Carta 5: Esta carta revelada determinará onde o Strahd sempre pode ser encontrado.",
        x: 2,
        y: 2
      }
    ]
  },
  "extended-cross": {
    value: "extended-cross",
    label: "Cruz estendida",
    description: "Variação ampliada da cruz, com passado e futuro em camadas.",
    columns: 5,
    rows: 5,
    cardHeight: "min(15vh, 145px)",
    cardWidth: "min(10.7vh, 104px)",
    gapClassName: "gap-1 sm:gap-2 md:gap-3",
    positions: [
      {
        id: "focus",
        deck: "both",
        name: "Foco",
        text: "Carta 1: É, sempre, a carta do foco. Esta carta não é sorteada aleatoriamente, mas é selecionada do baralho de acordo com o alvo da busca e posicionada na posição 1.",
        x: 3,
        y: 3
      },
      {
        id: "recent-past",
        deck: "both",
        name: "Passado próximo",
        text: "Carta 2: Representa um passado próximo. Indica a importância de eventos que ocorreram recentemente. É claro, a escala de tempo envolvida é muito arbitrária, então um “passado recente”, pode indicar uma hora, um dia, ou até mesmo um ano atrás.",
        x: 3,
        y: 4
      },
      {
        id: "opposition",
        deck: "both",
        name: "Oposição",
        text: "Carta 3: É a oposição ao foco. Diferentemente da cruz anterior, ela não é o maior dos obstáculos do foco. Ela apenas indica um problema potencial que pode ser superado ou até mesmo prevenido com um pouco de planejamento ou precaução.",
        x: 2,
        y: 3
      },
      {
        id: "near-future",
        deck: "both",
        name: "Futuro próximo",
        text: "Carta 4: É a contra-parte da carta 2. Ela marca coisas que os esperam em um futuro próximo. Novamente, “próximo” é um termo flexível.",
        x: 3,
        y: 2
      },
      {
        id: "aid",
        deck: "both",
        name: "Auxílio",
        text: "Carta 5: Marca aquelas coisas que auxiliam o foco. Como a carta 3, ela não têm uma grande significância. Ela trata de coisas que possam passar desapercebidas ou desconhecidas se não forem tomados os devidos cuidados e precauções.",
        x: 4,
        y: 3
      },
      {
        id: "distant-past",
        deck: "both",
        name: "Passado distante",
        text: "Carta 6: Remete a um passado distante. Indica as raízes mais profundas e antigas do foco. Como outras cartas de passado e futuro, o tempo refletido não é absoluto.",
        x: 3,
        y: 5
      },
      {
        id: "deep-opposition",
        deck: "both",
        name: "Força oposta",
        text: "Carta 7: Indica forças que verdadeiramente se opõem ao foco. Diferentemente do que marca a carta 3, esta é uma força poderosa e determinada que fará tudo que puder para impedir ou derrotar os melhores esforços do foco.",
        x: 1,
        y: 3
      },
      {
        id: "distant-future",
        deck: "both",
        name: "Futuro distante",
        text: "Carta 8: É a manifestação de um futuro distante. Representa os primórdios do assunto em questão, o foco. Novamente, a escala de tempo envolvida é impossível de se predizer.",
        x: 3,
        y: 1
      },
      {
        id: "strong-aid",
        deck: "both",
        name: "Força aliada",
        text: "Carta 9: A última a ser revelada. Fala de uma força que poderosamente ajuda nos empreendimentos do foco. É a contra-parte da carta 7.",
        x: 5,
        y: 3
      }
    ]
  },
  tower: {
    value: "tower",
    label: "A Torre",
    description: "Cruz divergente com raízes no passado e múltiplos futuros possíveis.",
    columns: 3,
    rows: 5,
    cardHeight: "min(15vh, 145px)",
    cardWidth: "min(10.7vh, 104px)",
    gapClassName: "gap-1 sm:gap-2 md:gap-3",
    positions: [
      {
        id: "focus",
        deck: "both",
        name: "Foco",
        text: "Carta 1: É a carta do foco. Ela reflete o alvo de cuja informação é buscada. Esta carta não é sorteada aleatoriamente, mas é selecionada do baralho de acordo com o alvo da busca e posicionada na posição 1. Explique aos jogadores que está carta é o nexo por onde as outras cartas irão se formar.",
        x: 2,
        y: 3
      },
      {
        id: "past",
        deck: "both",
        name: "Passado",
        text: "Carta 2: Representa o passado. Conta um pouco da história da carta de foco. Normalmente a correlação entre o significado desta carta com a carta de foco é fácil de ser fabricada. Se nenhuma relação óbvia ocorrer, o Mestre pode dizer que há ainda um mistério que os jogadores ainda não resolveram. Mais tarde, eventos podem ser desenvolvidos para dar significado a esta carta.",
        x: 2,
        y: 4
      },
      {
        id: "opposition",
        deck: "both",
        name: "Oposição",
        text: "Carta 3: Indica coisas que são opostas ao foco. Sua natureza reflete coisas que podem dar errado, indivíduos que possam desafiar o foco, ou a influência de qualquer tipo de resultados negativos.",
        x: 1,
        y: 3
      },
      {
        id: "future",
        deck: "both",
        name: "Futuro",
        text: "Carta 4: Representa o futuro. Ela adverte possíveis desastres e faz promessas de triunfos futuros. Seu significado é sempre alvo de especulações, pois as ações do foco podem alterar a leitura do tarokka.",
        x: 2,
        y: 2
      },
      {
        id: "aid",
        deck: "both",
        name: "Auxílio",
        text: "Carta 5: Marca aquilo que é amigo ou aliado do foco. Indica as forças que irão beneficiar o foco na busca por seu objetivo final. Marca as forças a favor da carta do foco.",
        x: 3,
        y: 3
      },
      {
        id: "distant-past-left",
        deck: "both",
        name: "Raiz do passado",
        text: "Cartas 6, 7 e 8: Marcam aspectos de um passado distante. Sua contribuição é combinada, formando uma imagem das raízes do presente que é muito mais substancial do que aquelas oferecidas pelo padrão da cruz simples e da extendida.",
        x: 1,
        y: 5
      },
      {
        id: "distant-past-center",
        deck: "both",
        name: "Raiz do passado",
        text: "Cartas 6, 7 e 8: Marcam aspectos de um passado distante. Sua contribuição é combinada, formando uma imagem das raízes do presente que é muito mais substancial do que aquelas oferecidas pelo padrão da cruz simples e da extendida.",
        x: 2,
        y: 5
      },
      {
        id: "distant-past-right",
        deck: "both",
        name: "Raiz do passado",
        text: "Cartas 6, 7 e 8: Marcam aspectos de um passado distante. Sua contribuição é combinada, formando uma imagem das raízes do presente que é muito mais substancial do que aquelas oferecidas pelo padrão da cruz simples e da extendida.",
        x: 3,
        y: 5
      },
      {
        id: "possible-future-left",
        deck: "both",
        name: "Futuro possível",
        text: "Cartas 9, 10 e 11: Estas cartas carregam a predileção do futuro. Cada uma delas possui uma possibilidade diferente e divergente, e a que verdadeiramente representará o futuro irá depender das ações da pessoa representada pela carta de foco. O significado dessas cartas não forma uma imagem única, combinada, mas duas delas são possibilidades alternativas que nunca irão se materializar.",
        x: 1,
        y: 1
      },
      {
        id: "possible-future-center",
        deck: "both",
        name: "Futuro possível",
        text: "Cartas 9, 10 e 11: Estas cartas carregam a predileção do futuro. Cada uma delas possui uma possibilidade diferente e divergente, e a que verdadeiramente representará o futuro irá depender das ações da pessoa representada pela carta de foco. O significado dessas cartas não forma uma imagem única, combinada, mas duas delas são possibilidades alternativas que nunca irão se materializar.",
        x: 2,
        y: 1
      },
      {
        id: "possible-future-right",
        deck: "both",
        name: "Futuro possível",
        text: "Cartas 9, 10 e 11: Estas cartas carregam a predileção do futuro. Cada uma delas possui uma possibilidade diferente e divergente, e a que verdadeiramente representará o futuro irá depender das ações da pessoa representada pela carta de foco. O significado dessas cartas não forma uma imagem única, combinada, mas duas delas são possibilidades alternativas que nunca irão se materializar.",
        x: 3,
        y: 1
      }
    ]
  },
  pyramid: {
    value: "pyramid",
    label: "A Pirâmide",
    description: "Tiragem usada para selecionar um curso de ação rumo a um evento final.",
    columns: 7,
    rows: 4,
    cardHeight: "min(15vh, 145px)",
    cardWidth: "min(10.7vh, 104px)",
    gapClassName: "gap-1 sm:gap-2 md:gap-3",
    positions: [
      {
        id: "focus",
        deck: "both",
        name: "Foco",
        text: "Carta 1: Como sempre, é a carta do foco. É o centro da pirâmide, de onde as outras cartas farão o contorno.",
        x: 4,
        y: 3
      },
      {
        id: "opposition",
        deck: "both",
        name: "Oposição",
        text: "Carta 2: Indica as forças que atualmente são opostas as ações do foco. Elas são normalmente poderosas, mas podem ser mais fracas que alguns casos.",
        x: 2,
        y: 3
      },
      {
        id: "allies",
        deck: "both",
        name: "Aliados",
        text: "Carta 3: É o inverso da carta 2, representa os amigos ou aliados do foco. Pode possuir maior ou menor importância ou influência no futuro, dependendo da situação ou do desejo do Mestre.",
        x: 6,
        y: 3
      },
      {
        id: "past-darkness-left",
        deck: "both",
        name: "Passado",
        text: "Cartas 4, 5, 6 e 7: Denota vários aspectos do passado. Elas não são interligadas como no padrão torre, mas cada uma delas possui sua própria significação. O conceito por trás da pirâmide é que uma série de eventos do passado levam a um único e inevitável evento futuro. Assim, cada uma dessas cartas são tomadas como o início de uma corrente de eventos que irão, no final, unir-se uns aos outros. As cartas 5 e 6 normalmente falam de maldade e escuridão, enquanto as cartas 6 e 7 assumem a representação da bondade.",
        x: 1,
        y: 4
      },
      {
        id: "past-darkness-right",
        deck: "both",
        name: "Passado",
        text: "Cartas 4, 5, 6 e 7: Denota vários aspectos do passado. Elas não são interligadas como no padrão torre, mas cada uma delas possui sua própria significação. O conceito por trás da pirâmide é que uma série de eventos do passado levam a um único e inevitável evento futuro. Assim, cada uma dessas cartas são tomadas como o início de uma corrente de eventos que irão, no final, unir-se uns aos outros. As cartas 5 e 6 normalmente falam de maldade e escuridão, enquanto as cartas 6 e 7 assumem a representação da bondade.",
        x: 3,
        y: 4
      },
      {
        id: "past-light-left",
        deck: "both",
        name: "Passado",
        text: "Cartas 4, 5, 6 e 7: Denota vários aspectos do passado. Elas não são interligadas como no padrão torre, mas cada uma delas possui sua própria significação. O conceito por trás da pirâmide é que uma série de eventos do passado levam a um único e inevitável evento futuro. Assim, cada uma dessas cartas são tomadas como o início de uma corrente de eventos que irão, no final, unir-se uns aos outros. As cartas 5 e 6 normalmente falam de maldade e escuridão, enquanto as cartas 6 e 7 assumem a representação da bondade.",
        x: 5,
        y: 4
      },
      {
        id: "past-light-right",
        deck: "both",
        name: "Passado",
        text: "Cartas 4, 5, 6 e 7: Denota vários aspectos do passado. Elas não são interligadas como no padrão torre, mas cada uma delas possui sua própria significação. O conceito por trás da pirâmide é que uma série de eventos do passado levam a um único e inevitável evento futuro. Assim, cada uma dessas cartas são tomadas como o início de uma corrente de eventos que irão, no final, unir-se uns aos outros. As cartas 5 e 6 normalmente falam de maldade e escuridão, enquanto as cartas 6 e 7 assumem a representação da bondade.",
        x: 7,
        y: 4
      },
      {
        id: "near-future-evil",
        deck: "both",
        name: "Futuro próximo",
        text: "Cartas 8 e 9: Marcam um futuro próximo. A primeira fala das forças do mal que estão à espreita, a segunda diz respeito as forças do bem que são opostas à carta de foco.",
        x: 3,
        y: 2
      },
      {
        id: "near-future-good",
        deck: "both",
        name: "Futuro próximo",
        text: "Cartas 8 e 9: Marcam um futuro próximo. A primeira fala das forças do mal que estão à espreita, a segunda diz respeito as forças do bem que são opostas à carta de foco.",
        x: 5,
        y: 2
      },
      {
        id: "final-event",
        deck: "both",
        name: "Evento final",
        text: "Carta 10: Forma o ápice da pirâmide e marca o evento final que está por vir. Tudo que aconteceu anteriormente culmina nesta única carta. Pode ser o triunfo da vontade do mal, ou do bem, mas terá apenas uma única solução no final.",
        x: 4,
        y: 1
      }
    ]
  },
  "i6-castle-ravenloft": {
    value: "i6-castle-ravenloft",
    label: "I6: Castelo Ravenloft",
    description: "Leitura de cinco cartas para localizar Strahd, seus objetivos e relíquias.",
    columns: 3,
    rows: 3,
    positions: [
      {
        id: "strahd-location",
        deck: "both",
        name: "Strahd",
        text: "Carta 1: Esta carta determina onde está escondido o próprio Strahd.",
        x: 2,
        y: 2
      },
      {
        id: "strahd-goal",
        deck: "both",
        name: "Objetivo de Strahd",
        text: "Carta 2: Esta carta determina os objetivos de Strahd.",
        x: 2,
        y: 3
      },
      {
        id: "strahd-tome",
        deck: "both",
        name: "Tomo de Strahd",
        text: "Carta 3: Esta carta determina onde está escondido o Tomo de Strahd.",
        x: 1,
        y: 2
      },
      {
        id: "holy-symbol",
        deck: "both",
        name: "Símbolo Sagrado",
        text: "Carta 4: Esta carta determina onde está escondido o Símbolo Sagrado.",
        x: 2,
        y: 1
      },
      {
        id: "sun-sword",
        deck: "both",
        name: "Espada do Sol",
        text: "Carta 5: Esta carta determina onde está escondida a Espada do Sol.",
        x: 3,
        y: 2
      }
    ]
  }
}, nv = Object.values(Vt), sv = {
  ...Vt["simple-cross"],
  positions: [
    {
      id: "focus",
      deck: "both",
      name: "Foco",
      text: "Carta 1: É a carta do foco. Ela reflete o alvo de cuja informação é buscada. Esta carta não é sorteada aleatoriamente, mas é selecionada do baralho de acordo com o alvo da busca e posicionada na posição 1. Explique aos jogadores que está carta é o nexo por onde as outras cartas irão se formar.",
      x: 2,
      y: 2
    },
    {
      id: "past",
      deck: "both",
      name: "Passado",
      text: "Carta 2: Representa o passado. Conta um pouco da história da carta de foco. Normalmente a correlação entre o significado desta carta com a carta de foco é fácil de ser fabricada. Se nenhuma relação óbvia ocorrer, o Mestre pode dizer que há ainda um mistério que os jogadores ainda não resolveram. Mais tarde, eventos podem ser desenvolvidos para dar significado a esta carta.",
      x: 2,
      y: 3
    },
    {
      id: "opposition",
      deck: "both",
      name: "Oposição",
      text: "Carta 3: Indica coisas que são opostas ao foco. Sua natureza reflete coisas que podem dar errado, indivíduos que possam desafiar o foco, ou a influência de qualquer tipo de resultados negativos.",
      x: 1,
      y: 2
    },
    {
      id: "future",
      deck: "both",
      name: "Futuro",
      text: "Carta 4: Representa o futuro. Ela adverte possíveis desastres e faz promessas de triunfos futuros. Seu significado é sempre alvo de especulações, pois as ações do foco podem alterar a leitura do tarokka.",
      x: 2,
      y: 1
    },
    {
      id: "ally",
      deck: "both",
      name: "Aliado",
      text: "Carta 5: Marca aquilo que é amigo ou aliado do foco. Indica as forças que irão beneficiar o foco na busca por seu objetivo final. Marca as forças a favor da carta do foco.",
      x: 3,
      y: 2
    }
  ]
}, iv = {
  ...Vt["simple-cross"],
  positions: [
    {
      id: "focus",
      deck: "both",
      name: "O Foco",
      text: "Carta 1 - O Foco: Esta carta representa a pessoa que faz as perguntas ou a pergunta que ela faz. O leitor deve escolher o cartão mais adequado e colocá-la sobre a mesa na posição central do layout.",
      x: 2,
      y: 2
    },
    {
      id: "past",
      deck: "both",
      name: "O Passado",
      text: "Carta 2 - O Passado: Esta carta representa quaisquer influências do passado no foco da leitura.",
      x: 1,
      y: 2
    },
    {
      id: "present",
      deck: "both",
      name: "O Presente",
      text: "Carta 3 - O Presente: Esta carta indica a situação atual ou quaisquer influências atuais.",
      x: 2,
      y: 1
    },
    {
      id: "future",
      deck: "both",
      name: "O Futuro",
      text: "Carta 4 - O Futuro: Esta carta fornece uma indicação de eventos futuros, incluindo possíveis aliados ou inimigos.",
      x: 3,
      y: 2
    },
    {
      id: "outcome",
      deck: "both",
      name: "O Resultado",
      text: "Carta 5 - O Resultado: Esta carta dá uma indicação geral do resultado da situação em foco.",
      x: 2,
      y: 3
    }
  ]
}, uv = {
  ...Vt.tower,
  rows: 6,
  cardHeight: "min(12vh, 116px)",
  cardWidth: "min(8.6vh, 83px)",
  positions: [
    {
      id: "focus",
      deck: "both",
      name: "O Foco",
      text: "Carta 1 - O Foco: Esta carta representa a pessoa que faz as perguntas ou a pergunta que ela faz. O leitor deve escolher o cartão mais adequado e colocá-la sobre a mesa na posição central do layout.",
      x: 2,
      y: 3
    },
    {
      id: "past",
      deck: "both",
      name: "O Passado",
      text: "Carta 2 - O Passado: Esta carta representa quaisquer influências do passado no foco da leitura.",
      x: 1,
      y: 4
    },
    {
      id: "present",
      deck: "both",
      name: "O Presente",
      text: "Carta 3 - O Presente: Esta carta indica a situação atual ou quaisquer influências atuais.",
      x: 3,
      y: 4
    },
    {
      id: "future",
      deck: "both",
      name: "O Futuro",
      text: "Carta 4 - O Futuro: Esta carta fornece uma indicação de eventos futuros, incluindo possíveis aliados ou inimigos.",
      x: 2,
      y: 2
    },
    {
      id: "outcome",
      deck: "both",
      name: "O Resultado",
      text: "Carta 5 - O Resultado: Esta carta dá uma indicação geral do resultado da situação em foco.",
      x: 2,
      y: 5
    },
    {
      id: "beginnings",
      deck: "both",
      name: "Começos",
      text: "Carta 6 - Começos: Este cartão indica a causa raiz da situação atual.",
      x: 1,
      y: 6
    },
    {
      id: "distant-past",
      deck: "both",
      name: "O Passado Distante",
      text: "Carta 7 - O Passado Distante: Esta carta designa um evento ou pessoa no passado distante que tem relevância para a situação.",
      x: 2,
      y: 6
    },
    {
      id: "near-past",
      deck: "both",
      name: "O Passado Próximo",
      text: "Carta 8 - O Passado Próximo: Esta carta ilumina eventos recentes ou pessoas pertinentes à situação.",
      x: 3,
      y: 6
    },
    {
      id: "future-option-left",
      deck: "both",
      name: "Possibilidade futura",
      text: "Carta 9 a 11 oferecem três possibilidades futuras distintas. Futuros alternativos podem ocorrer dependendo das ações dos heróis. Esse padrão pode adicionar um senso de urgência, especialmente se você empilhar o baralho com a morte como uma das opções.",
      x: 1,
      y: 1
    },
    {
      id: "future-option-center",
      deck: "both",
      name: "Possibilidade futura",
      text: "Carta 9 a 11 oferecem três possibilidades futuras distintas. Futuros alternativos podem ocorrer dependendo das ações dos heróis. Esse padrão pode adicionar um senso de urgência, especialmente se você empilhar o baralho com a morte como uma das opções.",
      x: 2,
      y: 1
    },
    {
      id: "future-option-right",
      deck: "both",
      name: "Possibilidade futura",
      text: "Carta 9 a 11 oferecem três possibilidades futuras distintas. Futuros alternativos podem ocorrer dependendo das ações dos heróis. Esse padrão pode adicionar um senso de urgência, especialmente se você empilhar o baralho com a morte como uma das opções.",
      x: 3,
      y: 1
    }
  ]
}, ja = (u, d) => (u ?? "simple-cross") === "tower" && d === "dnd35" ? uv : (u ?? "simple-cross") === "simple-cross" && d === "dnd35" ? iv : (u ?? "simple-cross") === "simple-cross" && d && d !== "dnd5e" ? sv : Vt[u ?? "simple-cross"] ?? Vt["simple-cross"];
Vt["simple-cross"].positions;
const cv = {
  color: {
    baseURL: "modules/leitura-de-tarokka/assets/img/color/",
    extension: ".webp"
  },
  grayscale: {
    baseURL: "modules/leitura-de-tarokka/assets/img/grayscale/",
    extension: ".webp"
  },
  standard: {
    baseURL: "modules/leitura-de-tarokka/assets/img/standard/",
    extension: ".svg"
  }
}, dv = {
  abjurer: "4C",
  anarchist: "6H",
  artifact: "1J",
  avenger: "AS",
  back: "1B",
  beast: "JD",
  beggar: "6D",
  berserker: "6S",
  bishop: "8H",
  "broken-one": "KD",
  charlatan: "7H",
  conjurer: "9C",
  darklord: "KS",
  dictator: "8S",
  diviner: "2C",
  donjon: "KC",
  druid: "5H",
  elementalist: "5C",
  enchanter: "3C",
  evoker: "6C",
  executioner: "JS",
  ghost: "KH",
  "guild-member": "5D",
  healer: "3H",
  "hooded-one": "7S",
  horseman: "2J",
  illusionist: "7C",
  innocent: "QH",
  marionette: "JH",
  mercenary: "4S",
  merchant: "4D",
  miser: "9D",
  missionary: "2H",
  mists: "QS",
  monk: "AH",
  myrmidon: "5S",
  necromancer: "8C",
  paladin: "2S",
  philanthropist: "2D",
  priest: "10H",
  raven: "QC",
  rogue: "10D",
  seer: "JC",
  shepherd: "4H",
  soldier: "3S",
  swashbuckler: "AD",
  "tax-collector": "8D",
  tempter: "QD",
  thief: "7D",
  torturer: "9S",
  trader: "3D",
  traitor: "9H",
  transmuter: "AC",
  warrior: "10S",
  wizard: "10C"
}, Bt = (u, d) => {
  if (d.gameSystem === "old-dragon-2")
    return `modules/leitura-de-tarokka/assets/img/od2-webp/${u.id}.webp`;
  if (d.gameSystem === "dnd35")
    return `modules/leitura-de-tarokka/assets/img/dnd35-webp/${u.id}.webp`;
  const m = cv[d.cardStyle], i = d.cardStyle === "standard" ? dv[u.id] : u.id;
  return `${m.baseURL}${i}${u.extension || m.extension}`;
}, mv = (u) => u.reduce(
  ({ pX: d, pY: m, rX: i, rY: S, count: x }, { percentX: j, percentY: D, rotateX: q, rotateY: b }) => ({
    pX: d + j,
    pY: m + D,
    rX: i + q,
    rY: S + b,
    count: x + 1
  }),
  { pX: 0, pY: 0, rX: 0, rY: 0, count: 0 }
);
function fv(u, d, { tilt: m, remoteTilt: i }, S = 0) {
  if (!m) return [];
  if (!i) return d;
  const x = Math.max(S, u.length, d.length);
  return Array.from({ length: x }, (j, D) => d[D] ? [d[D]] : []).map((j, D) => [...u[D] ?? [], ...j]).map((j) => j.filter(wi)).map(mv).map(({ pX: j, pY: D, rX: q, rY: b, count: C }) => ({
    percentX: C ? j / C : -1,
    percentY: C ? D / C : -1,
    rotateX: C ? q / C : 0,
    rotateY: C ? b / C : 0
  }));
}
function Gm(u, d) {
  let m = 0;
  return (...i) => {
    const S = Date.now();
    S - m >= d && (m = S, u(...i));
  };
}
const wi = (u) => {
  if (!u) return !1;
  const { percentX: d, percentY: m, rotateX: i, rotateY: S } = u;
  return d >= 0 && m >= 0 && !!i && !!S;
};
class Pm {
  constructor() {
    this.highDeck = [], this.commonDeck = [], this.backs = [], this.highDeck = Gt.filter((d) => d.deck === "high"), this.commonDeck = Gt.filter((d) => d.deck === "common"), this.backs = Gt.filter((d) => d.back);
  }
  getHand() {
    return [...Co(this.commonDeck, 3), ...Co(this.highDeck, 2)].map(
      (d) => ({ ...d, flipped: !1 })
    );
  }
  getReading(d, m, i = !0) {
    return d === "simple-cross" && i ? this.getHand() : Co([...this.commonDeck, ...this.highDeck], m).map((S) => ({
      ...S,
      flipped: !1
    }));
  }
  getLow() {
    return this.commonDeck.map((d) => ({ ...d, flipped: !1 }));
  }
  getHigh() {
    return this.highDeck.map((d) => ({ ...d, flipped: !1 }));
  }
  getAll() {
    return [...this.commonDeck, ...this.highDeck].map((d) => ({ ...d, flipped: !1 }));
  }
  drawLow(d = []) {
    const m = d.map(({ id: i }) => i);
    return {
      ...Co(
        this.commonDeck.filter(({ id: i }) => !m.includes(i)),
        1
      )[0],
      flipped: !1
    };
  }
  drawHigh(d = []) {
    const m = d.map(({ id: i }) => i);
    return {
      ...Co(
        this.highDeck.filter(({ id: i }) => !m.includes(i)),
        1
      )[0],
      flipped: !1
    };
  }
  drawAny(d = []) {
    const m = d.map(({ id: i }) => i);
    return {
      ...Co(
        [...this.commonDeck, ...this.highDeck].filter(({ id: i }) => !m.includes(i)),
        1
      )[0],
      flipped: !1
    };
  }
  select(d) {
    const m = Gt.find((i) => i.id === d);
    return m ? {
      ...m,
      flipped: !1
    } : null;
  }
  getBack() {
    return this.backs[0];
  }
}
const pv = 1e3, Bm = pv / 30, hv = [
  { value: "dnd5e", label: "D&D 5e e 5.5" },
  { value: "adnd12", label: "AD&D 1e e 2e" },
  { value: "dnd35", label: "D&D 3.5" },
  { value: "old-dragon-2", label: "Old Dragon 2" }
], Ri = {
  gameSystem: "dnd5e",
  readingSpread: "simple-cross",
  cardStyle: "color",
  notes: !0,
  positionBack: !0,
  positionFront: !0,
  prophecy: !0,
  tilt: !0,
  remoteTilt: !0
}, Ni = {
  started: !1,
  cards: [],
  lastUpdated: 0,
  settings: Ri
}, vv = {
  tilt: !0,
  remoteTilt: !0
}, gv = ["tilt", "remoteTilt"], bv = ["tilt", "remoteTilt"], Dr = "leitura-de-tarokka", on = "gameState", yv = `${Dr}.${on}`, jr = new Pm();
function Tv() {
  game.settings.register(Dr, on, {
    scope: "world",
    config: !1,
    type: Object,
    default: Ni
  });
}
function Yt() {
  const u = game.settings.get(Dr, on);
  return {
    ...Ni,
    ...u,
    settings: {
      ...Ri,
      ...(u == null ? void 0 : u.settings) ?? {}
    }
  };
}
function xv(u) {
  const d = (m) => {
    ((m == null ? void 0 : m.key) ?? m) === yv && u(Yt());
  };
  return Hooks.on("updateSetting", d), () => Hooks.off("updateSetting", d);
}
function wr() {
  var u;
  if (!((u = game.user) != null && u.isGM))
    throw new Error("Only the GM can modify the Tarokka reading.");
}
async function Rr(u) {
  u.lastUpdated = Date.now(), await game.settings.set(Dr, on, u);
}
async function Sv() {
  wr();
  const u = Yt(), d = { ...Ri, ...u.settings }, m = ja(d.readingSpread, d.gameSystem);
  await Rr({
    started: !0,
    cards: jr.getReading(m.value, m.positions.length, d.gameSystem === "dnd5e"),
    lastUpdated: Date.now(),
    settings: d
  });
}
async function Ev(u) {
  wr();
  const d = Yt(), m = d.cards[u];
  if (!m) throw new Error(`Card ${u} not found`);
  m.flipped = !m.flipped, await Rr(d);
}
async function qv(u) {
  wr();
  const d = Yt(), m = d.cards[u], S = ja(d.settings.readingSpread, d.settings.gameSystem).positions[u];
  if (!m) throw new Error(`Card ${u} not found`);
  d.cards[u] = (S == null ? void 0 : S.deck) === "high" ? jr.drawHigh(d.cards) : (S == null ? void 0 : S.deck) === "low" ? jr.drawLow(d.cards) : jr.drawAny(d.cards), await Rr(d);
}
async function Av(u, d) {
  wr();
  const m = Yt(), i = m.cards[u], S = jr.select(d);
  if (!i) throw new Error(`Card ${u} not found`);
  if (!S) throw new Error(`Card ${d} not found`);
  m.cards[u] = S, await Rr(m);
}
async function zv(u) {
  wr();
  const d = Yt();
  Object.assign(d.settings, u), await Rr(d);
}
const Ov = 1, Mv = 2, Cv = 3, jv = Gt.find((u) => u.back), Ve = {
  wrapper: "color:#1f2937;background:#f8f4ea;padding:16px;border:1px solid #c8ad7f;border-radius:8px;font-family:serif;line-height:1.45;",
  title: "color:#111827;margin:0 0 10px 0;font-size:28px;line-height:1.2;",
  meta: "color:#374151;background:#fffaf0;border:1px solid #d7c29a;border-radius:6px;padding:8px 10px;margin:0 0 14px 0;",
  sectionTitle: "color:#5f3f12;border-bottom:2px solid #9a6b24;margin:18px 0 10px 0;padding-bottom:4px;font-size:20px;",
  cardTitle: "color:#6f4b16;margin:12px 0 4px 0;font-size:15px;font-weight:700;",
  list: "color:#1f2937;margin:0 0 10px 20px;padding:0;",
  listItem: "margin:0 0 6px 0;",
  visualGrid: "display:grid;gap:12px;align-items:center;justify-content:start;background:#fffaf0;border:1px solid #d7c29a;border-radius:6px;padding:12px;margin-bottom:14px;",
  figure: "margin:0;text-align:center;color:#374151;",
  figcaption: "font-size:11px;margin-top:4px;color:#374151;",
  image: "max-width:96px;width:100%;height:auto;border:1px solid #9a6b24;border-radius:6px;",
  secret: "color:#f8fafc;background:#1f2937;border:1px solid #9a6b24;border-radius:8px;padding:12px;margin-top:16px;",
  secretTitle: "color:#facc15;border-bottom:2px solid #facc15;margin:0 0 10px 0;padding-bottom:4px;font-size:20px;",
  secretCardTitle: "color:#fde68a;margin:12px 0 4px 0;font-size:15px;font-weight:700;",
  secretList: "color:#f8fafc;margin:0 0 10px 20px;padding:0;"
};
function Ca(u) {
  return u.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function ef() {
  return (/* @__PURE__ */ new Date()).toLocaleString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function af(u) {
  return `Leitura de Tarokka - ${u}`;
}
function tf(u, d, m, i) {
  const x = ja(i.readingSpread, i.gameSystem).positions[d];
  return x ? tn(u, x, !1, i) : [];
}
function kv(u, d, m, i) {
  const x = ja(i.readingSpread, i.gameSystem).positions[d], j = new Set(tf(u, d, m, i));
  return x ? tn(u, x, !0, i).filter((D) => !(j.has(D) || D.startsWith("Jogadores:"))) : [];
}
function Vm(u, d, m, i = !1) {
  const S = m.map((j, D) => {
    if (!j.length) return "";
    const q = d[D], b = j.map((oe) => `<li style="${Ve.listItem}">${Ca(oe)}</li>`).join(""), C = Ca(i ? `Carta ${D + 1}: ${q.card}` : `Carta ${D + 1}`), L = i ? Ve.secretCardTitle : Ve.cardTitle, K = i ? Ve.secretList : Ve.list;
    return `<section><h4 style="${L}">${C}</h4><ul style="${K}">${b}</ul></section>`;
  }).filter(Boolean).join("");
  return S ? `<h2 style="${i ? Ve.secretTitle : Ve.sectionTitle}">${Ca(u)}</h2>${S}` : "";
}
function Dv(u, d) {
  const m = ja(d.readingSpread, d.gameSystem), i = u.cards, S = m.positions.map((x, j) => {
    const D = i[j];
    if (!D) return "";
    const q = D.flipped ? D : jv, b = Bt(q, d), C = `Carta ${j + 1}`;
    return `
				<figure style="${Ve.figure}grid-column:${x.x};grid-row:${x.y};">
					<img src="${Ca(b)}" alt="${Ca(C)}" style="${Ve.image}" />
					<figcaption style="${Ve.figcaption}">${Ca(C)}</figcaption>
				</figure>
			`;
  }).join("");
  return `
		<h2 style="${Ve.sectionTitle}">Imagem da tiragem</h2>
		<div style="${Ve.visualGrid}grid-template-columns:repeat(${m.columns}, 112px);grid-template-rows:repeat(${m.rows}, auto);">
			${S}
		</div>
	`;
}
function wv(u, d) {
  const m = ja(d.readingSpread, d.gameSystem), i = u.cards.map(
    (q, b) => tf(q, b, u, d)
  ), S = u.cards.map((q, b) => kv(q, b, u, d)), x = ef(), j = Vm("Mensagens para os jogadores", u.cards, i), D = Vm("Mensagens do Mestre", u.cards, S, !0);
  return `
		<div style="${Ve.wrapper}">
			<h1 style="${Ve.title}">${Ca(af(x))}</h1>
			<p style="${Ve.meta}"><strong>Sistema:</strong> ${Ca(d.gameSystem)}<br>
			<strong>Tiragem:</strong> ${Ca(m.label)}<br>
			<strong>Salvo em:</strong> ${Ca(x)}</p>
			${Dv(u, d)}
			${j || `<p style="${Ve.list}">Nenhuma mensagem pública visível no momento.</p>`}
			${D ? `<section class="secret" style="${Ve.secret}">${D}</section>` : ""}
		</div>
	`;
}
async function Rv(u, d) {
  var j, D, q;
  if (!((j = game.user) != null && j.isGM)) throw new Error("Only the GM can save a Tarokka reading.");
  if (!u.started || !u.cards.length) throw new Error("No Tarokka reading started.");
  const m = ef(), i = af(m), S = wv(u, d), x = await JournalEntry.create({
    name: i,
    ownership: {
      default: Mv,
      [game.user.id]: Cv
    },
    pages: [
      {
        name: i,
        type: "text",
        text: {
          format: Ov,
          content: S
        }
      }
    ]
  });
  (q = (D = ui.notifications) == null ? void 0 : D.info) == null || q.call(D, `Leitura salva no Diário: ${x.name}`);
}
const rn = `module.${Dr}`;
let Fl = null, Il = null, Pl = null;
function Nv() {
  game.socket.on(rn, (u) => {
    u.type === "tilt" ? Fl == null || Fl(u.userId, u.cardIndex, u.tilt) : u.type === "tilt-clear" ? Il == null || Il(u.userId) : u.type === "show-card-image" && (Pl == null || Pl(u.cardIndex));
  });
}
function Ym(u) {
  Fl = u;
}
function Lm(u) {
  Il = u;
}
function Qm(u) {
  Pl = u;
}
function _v(u, d) {
  const m = { type: "tilt", userId: game.user.id, cardIndex: u, tilt: d };
  game.socket.emit(rn, m);
}
function Uv() {
  const u = { type: "tilt-clear", userId: game.user.id };
  game.socket.emit(rn, u);
}
function Hv(u) {
  const d = { type: "show-card-image", cardIndex: u };
  game.socket.emit(rn, d);
}
const of = P.createContext(void 0), Ci = (u = 0) => Array.from({ length: u }, () => []);
function Gv({ children: u }) {
  var pe;
  const [d, m] = P.useState({ ...Ni }), [i, S] = P.useState(() => ({ ...vv })), [x, j] = P.useState(-1), [D, q] = P.useState(null), [b, C] = P.useState([]), [L, K] = P.useState(() => Ci()), oe = P.useRef(/* @__PURE__ */ new Map());
  P.useEffect(() => (m(Yt()), xv(m)), []), P.useEffect(() => {
    C([]), K(Ci(d.cards.length)), oe.current.clear(), j(-1), q(null);
  }, [d.cards.length]), P.useEffect(() => {
    const H = () => {
      const W = Ci(d.cards.length);
      oe.current.forEach(({ cardIndex: G, tilt: xe }, Ae) => {
        W[G] && (W[G] = [...W[G], { ...xe, playerID: Ae }]);
      }), K(W);
    };
    return Ym((W, G, xe) => {
      oe.current.set(W, { cardIndex: G, tilt: xe }), H();
    }), Lm((W) => {
      oe.current.delete(W), H();
    }), () => {
      Ym(null), Lm(null);
    };
  }, [d.cards.length]), P.useEffect(() => (Qm((H) => {
    q(H);
  }), () => Qm(null)), []), P.useEffect(() => {
    if (!i.remoteTilt) return;
    const H = b.findIndex((W) => !!W);
    b[H] ? _v(H, b[H]) : Uv();
  }, [b, i]);
  const J = (H) => {
    const W = x;
    j(-1), Av(W, H).catch((G) => console.error("Leitura de Tarokka | select error:", G));
  }, re = !!((pe = game.user) != null && pe.isGM), $ = { ...d.settings, ...i }, ge = {
    gameData: d,
    isGM: re,
    selectCardIndex: x,
    settings: $,
    tilts: fv(L, b, $, d.cards.length),
    showCardImageIndex: D,
    emitFlip: (H) => {
      Ev(H).catch((W) => console.error("Leitura de Tarokka | flip error:", W));
    },
    emitShowCardImage: (H) => {
      q(H), Hv(H);
    },
    emitSaveReading: () => {
      Rv(d, $).catch((H) => {
        var W, G;
        console.error("Leitura de Tarokka | save journal error:", H), (G = (W = ui.notifications) == null ? void 0 : W.error) == null || G.call(W, "Não foi possível salvar a leitura no Diário.");
      });
    },
    emitSettings: (H) => {
      zv(H).catch((W) => console.error("Leitura de Tarokka | settings error:", W));
    },
    emitRedraw: (H) => {
      qv(H).catch((W) => console.error("Leitura de Tarokka | redraw error:", W));
    },
    emitSelect: J,
    emitStartReading: () => {
      Sv().catch((H) => console.error("Leitura de Tarokka | start reading error:", H));
    },
    setLocalSettings: S,
    setShowCardImageIndex: q,
    setSelectCardIndex: j,
    setLocalTilt: C
  };
  return /* @__PURE__ */ E.jsx(of.Provider, { value: ge, children: u });
}
function Ie() {
  const u = P.useContext(of);
  if (!u) throw new Error("useAppContext must be used within AppProvider");
  return u;
}
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vv = (u) => u.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (d, m, i) => i ? i.toUpperCase() : m.toLowerCase()
), Xm = (u) => {
  const d = Vv(u);
  return d.charAt(0).toUpperCase() + d.slice(1);
}, rf = (...u) => u.filter((d, m, i) => !!d && d.trim() !== "" && i.indexOf(d) === m).join(" ").trim();
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lv = P.forwardRef(
  ({
    color: u = "currentColor",
    size: d = 24,
    strokeWidth: m = 2,
    absoluteStrokeWidth: i,
    className: S = "",
    children: x,
    iconNode: j,
    ...D
  }, q) => P.createElement(
    "svg",
    {
      ref: q,
      ...Yv,
      width: d,
      height: d,
      stroke: u,
      strokeWidth: i ? Number(m) * 24 / Number(d) : m,
      className: rf("lucide", S),
      ...D
    },
    [
      ...j.map(([b, C]) => P.createElement(b, C)),
      ...Array.isArray(x) ? x : [x]
    ]
  )
);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = (u, d) => {
  const m = P.forwardRef(
    ({ className: i, ...S }, x) => P.createElement(Lv, {
      ref: x,
      iconNode: d,
      className: rf(
        `lucide-${Bv(Xm(u))}`,
        `lucide-${u}`,
        i
      ),
      ...S
    })
  );
  return m.displayName = Xm(u), m;
};
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qv = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Xv = Za("check", Qv);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kv = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], ln = Za("circle-x", Kv);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zv = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Jv = Za("copy", Zv);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Km = Za("eye", $v);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wv = [
  ["path", { d: "M2 7v10", key: "a2pl2d" }],
  ["path", { d: "M6 5v14", key: "1kq3d7" }],
  ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]
], Fv = Za("gallery-horizontal-end", Wv);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iv = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Pv = Za("refresh-cw", Iv);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], ag = Za("save", eg);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tg = [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
], og = Za("scroll-text", tg);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], lg = Za("settings", rg);
function ng() {
  const { gameData: u, settings: d, showCardImageIndex: m, setShowCardImageIndex: i } = Ie(), S = m === null ? null : u.cards[m];
  if (!S) return null;
  const x = () => i(null), j = (D) => {
    D.target === D.currentTarget && x();
  };
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: "fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm",
      onClick: j,
      children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            className: "fixed top-4 right-4 z-[90] p-2 text-yellow-400 transition-all duration-250 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
            onClick: x,
            "aria-label": "Fechar imagem da carta",
            children: /* @__PURE__ */ E.jsx(ln, { className: "h-6 w-6" })
          }
        ),
        /* @__PURE__ */ E.jsx(
          "img",
          {
            src: Bt(S, d),
            alt: S.aria,
            className: "max-h-[90vh] max-w-[90vw] rounded-lg border border-yellow-500/50 object-contain shadow"
          }
        )
      ]
    }
  );
}
const ji = new Pm();
function sg({ className: u = "" }) {
  var J, re;
  const { gameData: d, emitSelect: m, selectCardIndex: i, setSelectCardIndex: S } = Ie(), { cards: x, settings: j } = d, D = x.map(({ id: $ }) => $), q = ja(j.readingSpread, j.gameSystem), C = (i >= 0 ? (J = q.positions[i]) == null ? void 0 : J.deck : null) === "both" ? "both" : i >= 0 ? (re = x[i]) == null ? void 0 : re.deck : null, L = () => S(-1), K = ($) => {
    $.target === $.currentTarget && L();
  };
  if (!C) return null;
  const oe = C === "both" ? ji.getAll() : C === "high" ? ji.getHigh() : ji.getLow();
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      onClick: K,
      className: `fixed inset-0 flex justify-center items-center p-4 bg-black/20 backdrop-blur-sm z-40 ${u}`,
      children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            className: "fixed top-4 right-4 p-2 transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
            onClick: L,
            children: /* @__PURE__ */ E.jsx(ln, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ E.jsx(
          "div",
          {
            onClick: K,
            className: "flex flex-wrap justify-center items-center gap-3 h-dvh w-2/3 overflow-scroll scrollbar-hide p-4",
            children: oe.filter(({ id: $ }) => !D.includes($)).map(($) => /* @__PURE__ */ E.jsx(
              "div",
              {
                className: "relative z-0 h-[21vh] w-[15vh] perspective origin-center transition-transform duration-200 hover:z-[60] hover:scale-[1.5]",
                onClick: () => m($.id),
                children: /* @__PURE__ */ E.jsx(
                  "img",
                  {
                    src: Bt($, j),
                    alt: $.aria,
                    className: "h-full w-full object-contain rounded-lg border border-yellow-500/25 hover:drop-shadow-[0_0_3px_#ffd700/50]"
                  }
                )
              },
              $.id
            ))
          }
        )
      ]
    }
  );
}
function lf({
  children: u,
  content: d,
  delay: m = 250,
  mobileDelay: i = 250,
  offsetX: S = 20,
  offsetY: x = 20,
  edgeBuffer: j = 10,
  className: D
}) {
  const q = P.useRef(null), b = P.useRef(null), [C, L] = P.useState(!1), [K, oe] = P.useState({ x: 0, y: 0 }), J = P.useRef(null), re = P.useRef(null), $ = () => {
    J.current = setTimeout(() => L(!0), m);
  }, ge = () => {
    J.current && clearTimeout(J.current), L(!1);
  }, pe = () => {
    const G = b.current, xe = q.current;
    if (!G || !xe) return;
    const Ae = G.getBoundingClientRect(), je = xe.offsetWidth, ua = xe.offsetHeight, Ja = j + je / 2, ya = window.innerWidth - j - je / 2, we = Math.max(Ja, Math.min(Ae.left + Ae.width / 2, ya)), ka = Math.max(j, Ae.top - ua - x);
    oe({ x: we, y: ka });
  };
  P.useLayoutEffect(() => {
    if (C)
      return pe(), window.addEventListener("resize", pe), window.addEventListener("scroll", pe, !0), () => {
        window.removeEventListener("resize", pe), window.removeEventListener("scroll", pe, !0);
      };
  }, [C, d]);
  const H = () => {
    re.current = setTimeout(() => L(!0), i);
  }, W = () => {
    re.current && clearTimeout(re.current), L(!1);
  };
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx(
      "div",
      {
        ref: b,
        onMouseEnter: $,
        onMouseLeave: ge,
        onTouchStart: H,
        onTouchEnd: W,
        className: D,
        children: u
      }
    ),
    /* @__PURE__ */ E.jsx(
      "div",
      {
        ref: q,
        className: `fixed pointer-events-none z-[100] w-max max-w-[min(35vh,calc(100vw-20px))] max-h-[calc(100vh-20px)] overflow-y-auto rounded-lg border border-amber-400 bg-slate-900 px-3 py-2 text-xs text-slate-100 shadow-[0_4px_18px_rgba(0,0,0,0.65)] transition-opacity duration-250 ${d && C ? "opacity-100" : "opacity-0"}`,
        style: {
          top: `${K.y}px`,
          left: `${K.x}px`,
          transform: "translateX(-50%)"
        },
        children: d
      }
    )
  ] });
}
function ig({
  title: u,
  copy: d,
  Icon: m = Jv,
  tooltip: i = ["Copiar", "Copiado"],
  className: S,
  size: x = 16
}) {
  const [j, D] = P.useState(!1), q = async () => {
    try {
      await navigator.clipboard.writeText(d), D(!0), setTimeout(() => D(!1), 2e3);
    } catch (C) {
      console.error("Falha ao copiar!", C);
    }
  }, b = /* @__PURE__ */ E.jsx("span", { className: "text-yellow-300", children: Array.isArray(i) && i.length > 1 ? j ? i[1] : i[0] : i });
  return /* @__PURE__ */ E.jsx("button", { onClick: q, className: `cursor-pointer ${S}`, children: /* @__PURE__ */ E.jsx(lf, { content: b, className: "w-full font-yellow-400", children: /* @__PURE__ */ E.jsxs("div", { className: "flex items-center gap-2 w-full text-sm font-medium", children: [
    u,
    j ? /* @__PURE__ */ E.jsx(Xv, { className: "ml-auto", size: x }) : /* @__PURE__ */ E.jsx(m, { className: "ml-auto", size: x })
  ] }) }) });
}
function nf({ children: u, clickAction: d, show: m = !0, className: i = "" }) {
  const S = (x) => {
    x.target === x.currentTarget && d(x);
  };
  return m ? /* @__PURE__ */ E.jsx(
    "div",
    {
      onClick: S,
      className: `fixed inset-0 bg-black/20 backdrop-blur-sm z-40 ${i}`,
      children: u
    }
  ) : null;
}
function ug() {
  const { gameData: u, isGM: d, settings: m } = Ie(), { cards: i } = u, S = ja(m.readingSpread, m.gameSystem), x = i.length > 0 && i.every(({ flipped: C }) => C), [j, D] = P.useState(!1), q = P.useMemo(
    () => S.positions.map(
      (C, L) => i[L] ? tn(i[L], C, d, m) : null
    ).filter((C) => C),
    [i, d, m, S]
  ), b = x && j && (d || m.notes);
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: `fixed bottom-4 right-4 z-25 transition-all duration-250 ${x ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
      children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            className: `text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] p-2 transition-all duration-250 cursor-pointer ${b ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`,
            onClick: () => D((C) => !C),
            children: /* @__PURE__ */ E.jsx(og, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ E.jsxs(
          nf,
          {
            clickAction: () => D((C) => !C),
            className: `transition-all duration-250 ${b ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
            children: [
              /* @__PURE__ */ E.jsxs(
                "div",
                {
                  className: `
						fixed bottom-4 right-4
						transition-all duration-250
						bg-slate-800
						border border-yellow-400 rounded-lg
						${b ? "sm:w-[50vw] sm:h-[67vh] w-[80vw] h-[80vh]" : "w-0 h-0"}
					`,
                  children: [
                    /* @__PURE__ */ E.jsx(
                      ig,
                      {
                        copy: q.map((C) => C.join(`
`)).join(`

`),
                        className: `
							absolute top-2 right-2
							cursor-pointer p-2
							transition-all duration-250
							text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700]
						`
                      }
                    ),
                    /* @__PURE__ */ E.jsx("div", { className: "text-yellow-400 h-full overflow-scroll p-8 transition-all delay-200 duration-50 ${showNotes ? 'opacity-100' : 'opacity-0'}", children: q.map((C, L) => /* @__PURE__ */ E.jsxs("div", { children: [
                      /* @__PURE__ */ E.jsx("div", { className: "flex flex-col gap-2", children: C.map((K, oe) => /* @__PURE__ */ E.jsx("p", { children: K }, oe)) }),
                      L < q.length - 1 && /* @__PURE__ */ E.jsx("hr", { className: "my-3 border-yellow-400" })
                    ] }, L)) })
                  ]
                }
              ),
              /* @__PURE__ */ E.jsx(
                "button",
                {
                  className: `
						fixed bottom-4 right-4
						cursor-pointer p-2
						transition-all duration-250
						text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700]
					`,
                  onClick: () => D((C) => !C),
                  children: /* @__PURE__ */ E.jsx(ln, { className: "w-5 h-5" })
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const Zm = ["standard", "color", "grayscale"], cg = {
  standard: "padrão",
  color: "colorido",
  grayscale: "tons de cinza"
};
function dg({ className: u }) {
  const { isGM: d, settings: m, emitSettings: i } = Ie(), S = (x) => {
    i({ cardStyle: x });
  };
  return d ? /* @__PURE__ */ E.jsxs("fieldset", { className: `flex flex-col w-full ${u}`, children: [
    /* @__PURE__ */ E.jsx("div", { className: "text-xs ml-1 mb-1 font-semibold text-amber-300", children: "Estilo das cartas:" }),
    /* @__PURE__ */ E.jsx("div", { className: "inline-flex overflow-hidden rounded-md w-full", children: Zm.map((x, j) => /* @__PURE__ */ E.jsxs(
      "label",
      {
        className: `
							flex justify-center
							cursor-pointer
							w-full px-3 py-2
							text-xs font-medium capitalize
							min-h-12 border border-amber-400
							transition hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700]
							${m.cardStyle === x ? "bg-amber-400 text-slate-950 font-extrabold" : "bg-slate-900 text-slate-100 hover:bg-slate-800"}
							${j === 0 ? "rounded-l-md" : ""}
							${j === Zm.length - 1 ? "rounded-r-md" : ""}
							${j !== 0 && "border-l border-gray-600"}
						`,
        children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "radio",
              name: "cardStyle",
              value: x,
              checked: m.cardStyle === x,
              onChange: () => S(x),
              className: "sr-only"
            }
          ),
          cg[x]
        ]
      },
      x
    )) })
  ] }) : null;
}
const mg = ["adnd12", "old-dragon-2"];
function fg({ className: u }) {
  const { isGM: d, settings: m, emitSettings: i } = Ie();
  if (!d) return null;
  const S = (x) => {
    const j = x.target.value;
    i({
      gameSystem: j,
      ...m.readingSpread === "i6-castle-ravenloft" && !mg.includes(j) ? { readingSpread: "simple-cross" } : {}
    });
  };
  return /* @__PURE__ */ E.jsxs("label", { className: `flex flex-col w-full ${u}`, children: [
    /* @__PURE__ */ E.jsx("span", { className: "text-xs ml-1 mb-1 font-semibold text-amber-300", children: "Sistema:" }),
    /* @__PURE__ */ E.jsx(
      "select",
      {
        value: m.gameSystem,
        onChange: S,
        style: { colorScheme: "light" },
        className: "h-10 min-h-10 w-full rounded-md border border-amber-400 bg-slate-900 px-3 py-2 text-sm font-semibold leading-5 text-slate-100 transition hover:border-amber-200 hover:bg-slate-800 hover:text-white focus:border-amber-200 focus:outline-none",
        children: hv.map(({ value: x, label: j }) => /* @__PURE__ */ E.jsx("option", { value: x, children: j }, x))
      }
    )
  ] });
}
const pg = /(?!^)([A-Z])/g, hg = {
  notes: "notas",
  positionBack: "posição no verso",
  positionFront: "posição revelada",
  prophecy: "profecia",
  tilt: "inclinação",
  remoteTilt: "inclinação remota"
};
function vg({ label: u, value: d, toggleAction: m, className: i }) {
  return /* @__PURE__ */ E.jsxs(
    "label",
    {
      className: `flex min-h-8 items-center justify-between gap-2 w-full cursor-pointer text-amber-300 hover:text-amber-100 ${i}`,
      children: [
        /* @__PURE__ */ E.jsx("span", { className: "text-sm", children: hg[u] ?? u.replace(pg, " $1") }),
        /* @__PURE__ */ E.jsxs("div", { className: "relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in", children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              id: `switch-${u}`,
              type: "checkbox",
              checked: d,
              onChange: m,
              className: "sr-only peer"
            }
          ),
          /* @__PURE__ */ E.jsx(
            "div",
            {
              className: `
						block w-8 h-4 rounded-full
						transition-colors duration-200 ease-in
						border border-slate-400 bg-slate-700 peer-checked:border-amber-200 peer-checked:bg-slate-500
					`
            }
          ),
          /* @__PURE__ */ E.jsx(
            "div",
            {
              className: `
						absolute top-[2px] left-[2px]
						w-3 h-3 rounded-full
						transition-all duration-250 ease-out
						translate-x-0 scale-95 bg-yellow-500
						peer-checked:translate-x-4 peer-checked:scale-110 peer-checked:bg-yellow-400
					`
            }
          )
        ] })
      ]
    }
  );
}
function gg() {
  const { isGM: u, settings: d, emitSettings: m, setLocalSettings: i } = Ie(), S = (x) => {
    gv.includes(x) ? i((j) => ({ ...j, [x]: !j[x] })) : u && m({ [x]: !d[x] });
  };
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: Object.entries(d).filter(([x, j]) => typeof j == "boolean").filter(([x]) => u || bv.includes(x)).map(([x, j]) => /* @__PURE__ */ E.jsx(
    vg,
    {
      label: x,
      value: j,
      toggleAction: () => S(x)
    },
    x
  )) });
}
function bg({ className: u }) {
  const { gameData: d, isGM: m, emitSaveReading: i, emitStartReading: S } = Ie();
  return m ? /* @__PURE__ */ E.jsxs("div", { className: `flex flex-col w-full gap-1 ${u}`, children: [
    /* @__PURE__ */ E.jsx(
      "button",
      {
        onClick: S,
        className: "w-full py-1 px-2 text-sm transition-all duration-250 bg-slate-700 hover:bg-slate-600 hover:text-yellow-300 rounded-lg shadow cursor-pointer",
        children: d.started ? "Nova leitura" : "Iniciar leitura"
      }
    ),
    d.started && /* @__PURE__ */ E.jsxs(
      "button",
      {
        onClick: i,
        className: "flex w-full items-center justify-center gap-2 rounded-lg bg-slate-700 px-2 py-1 text-sm shadow transition-all duration-250 hover:bg-slate-600 hover:text-yellow-300 cursor-pointer",
        children: [
          /* @__PURE__ */ E.jsx(ag, { className: "h-4 w-4" }),
          "Salvar no Diário"
        ]
      }
    )
  ] }) : null;
}
const yg = {
  dnd5e: ["simple-cross"],
  dnd35: ["simple-cross", "tower"]
}, Tg = ["adnd12", "old-dragon-2"];
function xg(u, d, m) {
  const i = yg[m];
  return i ? `${u} (${i.includes(d) ? "oficial" : "extra"})` : u;
}
function Sg({ className: u }) {
  const { isGM: d, settings: m, emitSettings: i } = Ie();
  if (!d) return null;
  const S = nv.filter(
    ({ value: x }) => x !== "i6-castle-ravenloft" || Tg.includes(m.gameSystem)
  );
  return /* @__PURE__ */ E.jsxs("label", { className: `flex flex-col w-full ${u}`, children: [
    /* @__PURE__ */ E.jsx("span", { className: "text-xs ml-1 mb-1 font-semibold text-amber-300", children: "Tipo de tiragem:" }),
    /* @__PURE__ */ E.jsx(
      "select",
      {
        value: m.readingSpread,
        onChange: (x) => i({ readingSpread: x.target.value }),
        style: { colorScheme: "light" },
        className: "h-10 min-h-10 w-full rounded-md border border-amber-400 bg-slate-900 px-3 py-2 text-sm font-semibold leading-5 text-slate-100 transition hover:border-amber-200 hover:bg-slate-800 hover:text-white focus:border-amber-200 focus:outline-none",
        children: S.map(({ value: x, label: j }) => /* @__PURE__ */ E.jsx("option", { value: x, children: xg(j, x, m.gameSystem) }, x))
      }
    )
  ] });
}
function Eg() {
  const [u, d] = P.useState(!1), { isGM: m } = Ie();
  return /* @__PURE__ */ E.jsxs("div", { className: "fixed top-4 right-4 z-25", children: [
    /* @__PURE__ */ E.jsx(
      nf,
      {
        clickAction: () => d((i) => !i),
        className: `transition-all duration-250 ${u ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
        children: /* @__PURE__ */ E.jsxs(
          "div",
          {
            className: `
						fixed top-4 right-4
						flex flex-col items-center justify-between gap-3
						bg-slate-950 text-amber-300
						rounded-lg border border-amber-400
						h-full p-8 pt-10 overflow-y-auto shadow-[0_8px_24px_rgba(0,0,0,0.5)]
						transition-all duration-250
						${u ? `opacity-100 ${m ? "w-[350px] max-h-[680px]" : "w-[300px] max-h-[220px]"}` : "opacity-0 w-0 max-h-0"}
					`,
            children: [
              /* @__PURE__ */ E.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Fechar configurações",
                  className: "absolute top-2 right-2 z-50 flex items-center justify-center border-0 bg-transparent p-0 text-amber-300 transition-all duration-250 hover:text-amber-100 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
                  style: { width: "28px", height: "28px", minWidth: "28px", minHeight: "28px" },
                  onClick: (i) => {
                    i.stopPropagation(), d(!1);
                  },
                  children: /* @__PURE__ */ E.jsx(ln, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ E.jsx(bg, {}),
              /* @__PURE__ */ E.jsx(fg, {}),
              /* @__PURE__ */ E.jsx(Sg, {}),
              /* @__PURE__ */ E.jsx(gg, {}),
              /* @__PURE__ */ E.jsx(dg, {})
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ E.jsx(
      "button",
      {
        className: "p-2 transition-all duration-250 text-amber-300 hover:text-amber-100 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
        onClick: () => d((i) => !i),
        children: /* @__PURE__ */ E.jsx(lg, { className: "w-5 h-5" })
      }
    )
  ] });
}
const qg = "rotateX(0deg) rotateY(0deg)";
function Ag({
  children: u,
  cardIndex: d,
  className: m = "",
  style: i
}) {
  const S = P.useRef(null), [x, j] = P.useState(!1), { settings: D, tilts: q, setLocalTilt: b } = Ie();
  P.useEffect(() => {
    const J = S.current;
    if (!J) return;
    const re = q[d];
    wi(re) ? (j(!1), J.style.transform = `rotateX(${re.rotateX}deg) rotateY(${re.rotateY}deg)`) : j(!0);
  }, [q]), P.useEffect(() => {
    const J = S.current;
    !J || !x || (J.style.transform = qg);
  }, [x]);
  const C = (J, re) => {
    const $ = S.current;
    if (!$) return;
    const ge = $.getBoundingClientRect();
    J -= ge.left, re -= ge.top;
    const pe = ge.width / 2, H = ge.height / 2, W = (re - H) / H * -20, G = (J - pe) / pe * 20, xe = J / ge.width, Ae = re / ge.height, je = [];
    je[d] = {
      percentX: xe,
      percentY: Ae,
      rotateX: W,
      rotateY: G
    }, b(je);
  }, L = Gm((J) => {
    C(J.clientX, J.clientY);
  }, Bm), K = Gm((J) => {
    const re = S.current, $ = J.touches[0];
    if (re && $) {
      const ge = re.getBoundingClientRect(), pe = $.clientX, H = $.clientY;
      pe >= ge.left && pe <= ge.right && H >= ge.top && H <= ge.bottom ? C(pe, H) : b([]);
    }
  }, Bm), oe = () => {
    b([]);
  };
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      className: `group ${m}`,
      style: i,
      onMouseMove: D.tilt ? L : void 0,
      onTouchMove: D.tilt ? K : void 0,
      onTouchEnd: oe,
      onMouseLeave: oe,
      children: /* @__PURE__ */ E.jsx(
        "div",
        {
          ref: S,
          onAnimationEnd: () => j(!1),
          className: `h-full w-full transition-transform ${x ? "duration-500" : "duration-0"}`,
          children: u
        }
      )
    }
  );
}
function zg({
  onRedraw: u,
  onSelect: d,
  onHover: m,
  className: i = ""
}) {
  const S = (x) => (j) => {
    j.stopPropagation(), x();
  };
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: `absolute top-0.5 right-0.5 flex flex-col items-center justify-center gap-0.5 bg-black/40 rounded-md p-0.5 ${i}`,
      children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            onMouseEnter: () => m(/* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: "Comprar novamente" })),
            onMouseLeave: () => m(null),
            onTouchStart: () => m(/* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: "Comprar novamente" })),
            onTouchEnd: () => m(null),
            className: "transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
            onClick: S(u),
            children: /* @__PURE__ */ E.jsx(Pv, { className: "w-2 h-2" })
          }
        ),
        /* @__PURE__ */ E.jsx(
          "button",
          {
            onMouseEnter: () => m(/* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: "Escolher" })),
            onMouseLeave: () => m(null),
            onTouchStart: () => m(/* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: "Escolher" })),
            onTouchEnd: () => m(null),
            className: "transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
            onClick: S(d),
            children: /* @__PURE__ */ E.jsx(Fv, { className: "w-2 h-2" })
          }
        )
      ]
    }
  );
}
const Og = (u, d, m) => {
  const i = u.getBoundingClientRect(), S = i.width - d * i.width, x = i.height - m * i.height;
  u.style.opacity = "1", u.style.backgroundImage = `
			radial-gradient(
				circle at
				${S}px ${x}px,
				#ffffff44,
				#0000000f
			)
		`;
};
function Jm({ cardIndex: u, className: d }) {
  const m = P.useRef(null), [i, S] = P.useState(!1), { tilts: x } = Ie();
  return P.useEffect(() => {
    const j = m.current;
    if (!j) return;
    const D = x[u];
    wi(D) ? (S(!1), Og(j, D.percentX, D.percentY)) : S(!0);
  }, [x]), P.useEffect(() => {
    const j = m.current;
    !j || !i || (j.style.opacity = "0");
  }, [i]), /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: m,
      className: `
				absolute inset-0
				rounded-lg pointer-events-none
				transition-opacity duration-500
				bg-gradient-to-tr from-transparent via-white/20 to-transparent mix-blend-screen opacity-0
				${d}
			`
    }
  );
}
const $m = Gt.find((u) => u.back);
function Mg({ card: u, cardIndex: d, height: m = "21vh", width: i = "15vh" }) {
  const [S, x] = P.useState(null), { emitFlip: j, emitShowCardImage: D, isGM: q, settings: b, emitRedraw: C, setSelectCardIndex: L } = Ie(), { aria: K, flipped: oe } = u, J = ja(b.readingSpread, b.gameSystem).positions[d], re = d + 1, $ = () => {
    q && j(d);
  }, ge = (H) => {
    H.stopPropagation(), D(d);
  }, pe = () => {
    const H = tn(u, J, q, b);
    return H.length ? /* @__PURE__ */ E.jsx(E.Fragment, { children: H.map((W, G) => /* @__PURE__ */ E.jsxs("div", { children: [
      /* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: W }),
      G < H.length - 1 && /* @__PURE__ */ E.jsx("hr", { className: "my-2 border-yellow-400" })
    ] }, G)) }) : null;
  };
  return /* @__PURE__ */ E.jsx(lf, { content: S || pe(), children: /* @__PURE__ */ E.jsx(
    Ag,
    {
      className: `max-w-[30vw] relative z-0 perspective origin-center transition-transform duration-200 hover:z-[60] hover:scale-[1.5] ${q ? "cursor-pointer" : ""} `,
      style: { height: m, width: i },
      cardIndex: d,
      children: /* @__PURE__ */ E.jsxs(
        "div",
        {
          className: `absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${oe ? "rotate-y-180" : ""}`,
          onClick: $,
          children: [
            /* @__PURE__ */ E.jsxs("div", { className: "absolute inset-0 group backface-hidden", children: [
              q && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
                /* @__PURE__ */ E.jsx(
                  "img",
                  {
                    src: Bt(u, b),
                    alt: K,
                    className: "absolute h-full w-full object-contain rounded-lg"
                  }
                ),
                /* @__PURE__ */ E.jsx(
                  "img",
                  {
                    src: Bt($m, b),
                    alt: "",
                    className: "absolute h-full w-full object-contain rounded-lg see-through"
                  }
                )
              ] }),
              /* @__PURE__ */ E.jsx(
                "img",
                {
                  src: Bt($m, b),
                  alt: "Card Back",
                  className: `absolute h-full w-full object-contain rounded-lg ${q ? "transition duration-500 group-hover:opacity-0" : ""} ${b.cardStyle === "grayscale" ? "border border-yellow-500/25 group-hover:drop-shadow-[0_0_3px_#ffd700/50]" : ""}`
                }
              ),
              q && !oe && /* @__PURE__ */ E.jsx(
                zg,
                {
                  onRedraw: () => C(d),
                  onSelect: () => L(d),
                  onHover: x
                }
              ),
              /* @__PURE__ */ E.jsx(Jm, { cardIndex: d }),
              q && /* @__PURE__ */ E.jsx("div", { className: "absolute top-1 left-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-yellow-500 bg-slate-900/90 text-xs font-bold text-yellow-300 shadow", children: re }),
              q && oe && /* @__PURE__ */ E.jsx(
                "button",
                {
                  type: "button",
                  className: "absolute right-1 bottom-1 z-30 flex h-7 w-7 items-center justify-center rounded-full border border-yellow-500 bg-slate-900/90 text-yellow-300 shadow transition-all duration-200 hover:text-yellow-400 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
                  onClick: ge,
                  "aria-label": "Exibir imagem da carta para os jogadores",
                  title: "Exibir imagem para todos",
                  children: /* @__PURE__ */ E.jsx(Km, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ E.jsxs("div", { className: "absolute inset-0 backface-hidden rotate-y-180", children: [
              /* @__PURE__ */ E.jsx(
                "img",
                {
                  src: Bt(u, b),
                  alt: K,
                  className: "h-full w-full object-contain rounded-lg border border-yellow-500/25 hover:drop-shadow-[0_0_3px_#ffd700/50]"
                }
              ),
              /* @__PURE__ */ E.jsx(Jm, { cardIndex: d }),
              q && /* @__PURE__ */ E.jsx("div", { className: "absolute top-1 left-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-yellow-500 bg-slate-900/90 text-xs font-bold text-yellow-300 shadow", children: re }),
              q && oe && /* @__PURE__ */ E.jsx(
                "button",
                {
                  type: "button",
                  className: "absolute right-1 bottom-1 z-30 flex h-7 w-7 items-center justify-center rounded-full border border-yellow-500 bg-slate-900/90 text-yellow-300 shadow transition-all duration-200 hover:text-yellow-400 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
                  onClick: ge,
                  "aria-label": "Exibir imagem da carta para os jogadores",
                  title: "Exibir imagem para todos",
                  children: /* @__PURE__ */ E.jsx(Km, { className: "h-4 w-4" })
                }
              )
            ] })
          ]
        }
      )
    }
  ) });
}
function Cg() {
  const { gameData: u } = Ie(), { cards: d, settings: m } = u, i = ja(m.readingSpread, m.gameSystem);
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      className: `grid ${i.gapClassName ?? "gap-2 sm:gap-4 md:gap-6"} w-fit mx-auto`,
      style: {
        gridTemplateColumns: `repeat(${i.columns}, minmax(0, auto))`,
        gridTemplateRows: `repeat(${i.rows}, minmax(0, auto))`
      },
      children: i.positions.map((S, x) => {
        const j = d[x];
        return /* @__PURE__ */ E.jsx(
          "div",
          {
            className: "aspect-[2/3]",
            style: { gridColumn: S.x, gridRow: S.y },
            children: j && /* @__PURE__ */ E.jsx(
              Mg,
              {
                card: j,
                cardIndex: x,
                height: i.cardHeight,
                width: i.cardWidth
              }
            )
          },
          S.id
        );
      })
    }
  );
}
const jg = "url('modules/leitura-de-tarokka/assets/img/table3-bg.gif')";
function kg() {
  const { gameData: u, isGM: d, emitStartReading: m } = Ie();
  return /* @__PURE__ */ E.jsxs(
    "main",
    {
      className: "relative h-full w-full flex flex-col items-center justify-center gap-4 bg-cover bg-center",
      style: { backgroundImage: jg },
      children: [
        /* @__PURE__ */ E.jsx(Eg, {}),
        u.started ? /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx(Cg, {}),
          /* @__PURE__ */ E.jsx(ug, {}),
          /* @__PURE__ */ E.jsx(sg, {}),
          /* @__PURE__ */ E.jsx(ng, {})
        ] }) : /* @__PURE__ */ E.jsxs("div", { className: "flex flex-col items-center gap-6 text-center text-yellow-400 p-8", children: [
          /* @__PURE__ */ E.jsx("h1", { className: "text-4xl font-bold", children: "Leitura de Tarokka" }),
          /* @__PURE__ */ E.jsxs("p", { className: "max-w-[350px]", children: [
            "Uma leitura de Tarokka para ",
            /* @__PURE__ */ E.jsx("em", { children: "Dungeons & Dragons: A Maldição de Strahd" }),
            "."
          ] }),
          d ? /* @__PURE__ */ E.jsx(
            "button",
            {
              onClick: m,
              className: "bg-slate-800 hover:bg-slate-700 border border-yellow-500/25 hover:drop-shadow-[0_0_3px_rgba(255,215,0,0.5)] hover:text-yellow-300 text-lg px-6 py-3 rounded-lg shadow transition-all duration-250 cursor-pointer",
              children: "Iniciar leitura"
            }
          ) : /* @__PURE__ */ E.jsx("p", { className: "text-sm text-yellow-400/70", children: "O Mestre ainda não iniciou uma leitura." })
        ] })
      ]
    }
  );
}
var Wm, Fm;
const sf = typeof foundry < "u" && ((Fm = (Wm = foundry == null ? void 0 : foundry.appv1) == null ? void 0 : Wm.api) == null ? void 0 : Fm.Application) || (typeof Application < "u" ? Application : void 0);
var Im;
const Dg = typeof foundry < "u" && ((Im = foundry == null ? void 0 : foundry.utils) == null ? void 0 : Im.mergeObject) || (typeof mergeObject < "u" ? mergeObject : (u, d) => ({ ...u, ...d }));
if (!sf)
  throw new Error(
    "Leitura de Tarokka: could not find a Foundry Application (v1) class (checked foundry.appv1.api.Application and the global Application)."
  );
class wg extends sf {
  constructor() {
    super(...arguments), this.root = null;
  }
  static get defaultOptions() {
    return Dg(super.defaultOptions, {
      id: "leitura-de-tarokka-app",
      title: game.i18n.localize("LEITURA_TAROKKA.windowTitle"),
      template: "modules/leitura-de-tarokka/dist/empty.html",
      width: 920,
      height: 720,
      resizable: !0,
      popOut: !0
    });
  }
  // The classic Application renders by fetching `template` over HTTP. If that
  // file is missing from the installed package (or the path/casing is wrong),
  // the default _renderInner rejects and the window never appears — with no
  // visible error. Fall back to an empty mount so React can still take over in
  // activateListeners; the template content is discarded there anyway.
  async _renderInner(d) {
    try {
      return await super._renderInner(d);
    } catch (m) {
      return console.warn("Leitura de Tarokka | template render failed, using empty mount:", m), (globalThis.jQuery ?? globalThis.$)('<div class="leitura-de-tarokka-mount"></div>');
    }
  }
  activateListeners(d) {
    var S;
    if (super.activateListeners(d), this.root) return;
    const m = (S = this.element[0]) == null ? void 0 : S.querySelector(".window-content");
    if (!m) return;
    m.innerHTML = "";
    const i = document.createElement("div");
    i.id = "leitura-de-tarokka-root", m.appendChild(i), this.root = Vh.createRoot(i), this.root.render(
      /* @__PURE__ */ E.jsx(Gv, { children: /* @__PURE__ */ E.jsx(kg, {}) })
    );
  }
  async close(d) {
    var m;
    return (m = this.root) == null || m.unmount(), this.root = null, super.close(d);
  }
}
const Cr = "leitura-de-tarokka";
let ki = null;
function en() {
  ki || (ki = new wg()), ki.render(!0, { focus: !0 });
}
function uf() {
  const u = game.modules.get(Cr);
  u && (u.api = { open: en });
}
Hooks.once("init", () => {
  console.log("Leitura de Tarokka | init"), Tv(), uf();
});
Hooks.once("ready", () => {
  console.log("Leitura de Tarokka | ready"), Nv(), uf();
});
Hooks.on("getSceneControlButtons", (u) => {
  try {
    const d = "LEITURA_TAROKKA.controlName", m = "fa-solid fa-clone";
    if (Array.isArray(u)) {
      u.push({
        name: Cr,
        title: d,
        icon: m,
        layer: Cr,
        visible: !0,
        tools: [
          {
            name: "open",
            title: d,
            icon: m,
            button: !0,
            onClick: en
          }
        ]
      });
      return;
    }
    u[Cr] = {
      name: Cr,
      title: d,
      icon: m,
      order: Object.keys(u).length,
      activeTool: "open",
      tools: {
        open: {
          name: "open",
          title: d,
          icon: m,
          order: 1,
          button: !0,
          onClick: en,
          onChange: en
        }
      }
    };
  } catch (d) {
    console.error("Leitura de Tarokka | failed to add scene control button:", d);
  }
});
//# sourceMappingURL=leitura-de-tarokka.js.map
