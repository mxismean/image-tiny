var pngtiny = {};
pngtiny.instantiateWasm = function (importObject, receiveInstance) {
  fetch('pngtiny-custom.wasm')
    .then((response) => response.arrayBuffer())
    .then((bytes) => WebAssembly.instantiate(bytes, importObject))
    .then((result) => receiveInstance(result.instance));
};
var b;
b || (b = typeof pngtiny !== 'undefined' ? pngtiny : {});
var h = Object.assign({}, b),
  k = './this.program',
  m = (a, c) => {
    throw c;
  },
  n = 'object' == typeof window,
  p = 'function' == typeof importScripts,
  q = '',
  r,
  t,
  u,
  fs,
  v,
  w;
if (
  'object' == typeof process &&
  'object' == typeof process.versions &&
  'string' == typeof process.versions.node
) {
  (q = p ? require('path').dirname(q) + '/' : __dirname + '/'),
    (w = () => {
      v || ((fs = require('fs')), (v = require('path')));
    }),
    (r = function (a, c) {
      w();
      a = v.normalize(a);
      return fs.readFileSync(a, c ? void 0 : 'utf8');
    }),
    (u = (a) => {
      a = r(a, !0);
      a.buffer || (a = new Uint8Array(a));
      return a;
    }),
    (t = (a, c, f) => {
      w();
      a = v.normalize(a);
      fs.readFile(a, function (e, d) {
        e ? f(e) : c(d.buffer);
      });
    }),
    1 < process.argv.length && (k = process.argv[1].replace(/\\/g, '/')),
    process.argv.slice(2),
    'undefined' != typeof module && (module.exports = b),
    process.on('uncaughtException', function (a) {
      if (!(a instanceof x)) {
        throw a;
      }
    }),
    process.on('unhandledRejection', function (a) {
      throw a;
    }),
    (m = (a, c) => {
      if (noExitRuntime || 0 < y) {
        throw ((process.exitCode = a), c);
      }
      c instanceof x || z('exiting due to exception: ' + c);
      process.exit(a);
    }),
    (b.inspect = function () {
      return '[Emscripten Module object]';
    });
} else if (n || p) {
  p
    ? (q = self.location.href)
    : 'undefined' != typeof document && document.currentScript && (q = document.currentScript.src),
    (q = 0 !== q.indexOf('blob:') ? q.substr(0, q.replace(/[?#].*/, '').lastIndexOf('/') + 1) : ''),
    (r = (a) => {
      var c = new XMLHttpRequest();
      c.open('GET', a, !1);
      c.send(null);
      return c.responseText;
    }),
    p &&
      (u = (a) => {
        var c = new XMLHttpRequest();
        c.open('GET', a, !1);
        c.responseType = 'arraybuffer';
        c.send(null);
        return new Uint8Array(c.response);
      }),
    (t = (a, c, f) => {
      var e = new XMLHttpRequest();
      e.open('GET', a, !0);
      e.responseType = 'arraybuffer';
      e.onload = () => {
        200 == e.status || (0 == e.status && e.response) ? c(e.response) : f();
      };
      e.onerror = f;
      e.send(null);
    });
}
var aa = b.print || console.log.bind(console),
  z = b.printErr || console.warn.bind(console);
Object.assign(b, h);
h = null;
b.thisProgram && (k = b.thisProgram);
b.quit && (m = b.quit);
var A = 0,
  B;
b.wasmBinary && (B = b.wasmBinary);
var noExitRuntime = b.noExitRuntime || !0;
'object' != typeof WebAssembly && C('no native wasm support detected');
var D,
  E = !1,
  ba = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
function ca(a, c, f) {
  var e = c + f;
  for (f = c; a[f] && !(f >= e); ) {
    ++f;
  }
  if (16 < f - c && a.subarray && ba) {
    return ba.decode(a.subarray(c, f));
  }
  for (e = ''; c < f; ) {
    var d = a[c++];
    if (d & 128) {
      var g = a[c++] & 63;
      if (192 == (d & 224)) {
        e += String.fromCharCode(((d & 31) << 6) | g);
      } else {
        var l = a[c++] & 63;
        d =
          224 == (d & 240)
            ? ((d & 15) << 12) | (g << 6) | l
            : ((d & 7) << 18) | (g << 12) | (l << 6) | (a[c++] & 63);
        65536 > d
          ? (e += String.fromCharCode(d))
          : ((d -= 65536), (e += String.fromCharCode(55296 | (d >> 10), 56320 | (d & 1023))));
      }
    } else {
      e += String.fromCharCode(d);
    }
  }
  return e;
}
function F(a) {
  return a ? ca(G, a, void 0) : '';
}
'undefined' != typeof TextDecoder && new TextDecoder('utf-16le');
var da, H, G, I;
function ea() {
  var a = D.buffer;
  da = a;
  b.HEAP8 = H = new Int8Array(a);
  b.HEAP16 = new Int16Array(a);
  b.HEAP32 = I = new Int32Array(a);
  b.HEAPU8 = G = new Uint8Array(a);
  b.HEAPU16 = new Uint16Array(a);
  b.HEAPU32 = new Uint32Array(a);
  b.HEAPF32 = new Float32Array(a);
  b.HEAPF64 = new Float64Array(a);
}
var fa,
  ha = [],
  ia = [],
  ja = [],
  y = 0;
function ka() {
  var a = b.preRun.shift();
  ha.unshift(a);
}
var J = 0,
  K = null,
  L = null;
b.preloadedImages = {};
b.preloadedAudios = {};
function C(a) {
  if (b.onAbort) {
    b.onAbort(a);
  }
  a = 'Aborted(' + a + ')';
  z(a);
  E = !0;
  throw new WebAssembly.RuntimeError(a + '. Build with -s ASSERTIONS=1 for more info.');
}
function la() {
  return M.startsWith('data:application/octet-stream;base64,');
}
var M;
M = 'pngtiny.wasm';
if (!la()) {
  var ma = M;
  M = b.locateFile ? b.locateFile(ma, q) : q + ma;
}
function oa() {
  var a = M;
  try {
    if (a == M && B) {
      return new Uint8Array(B);
    }
    if (u) {
      return u(a);
    }
    throw 'both async and sync fetching of the wasm failed';
  } catch (c) {
    C(c);
  }
}
function pa() {
  if (!B && (n || p)) {
    if ('function' == typeof fetch && !M.startsWith('file://')) {
      return fetch(M, { credentials: 'same-origin' })
        .then(function (a) {
          if (!a.ok) {
            throw "failed to load wasm binary file at '" + M + "'";
          }
          return a.arrayBuffer();
        })
        .catch(function () {
          return oa();
        });
    }
    if (t) {
      return new Promise(function (a, c) {
        t(
          M,
          function (f) {
            a(new Uint8Array(f));
          },
          c
        );
      });
    }
  }
  return Promise.resolve().then(function () {
    return oa();
  });
}
function N(a) {
  for (; 0 < a.length; ) {
    var c = a.shift();
    if ('function' == typeof c) {
      c(b);
    } else {
      var f = c.h;
      'number' == typeof f ? (void 0 === c.g ? O(f)() : O(f)(c.g)) : f(void 0 === c.g ? null : c.g);
    }
  }
}
var P = [];
function O(a) {
  var c = P[a];
  c || (a >= P.length && (P.length = a + 1), (P[a] = c = fa.get(a)));
  return c;
}
var Q = {};
function qa() {
  if (!R) {
    var a = {
        USER: 'web_user',
        LOGNAME: 'web_user',
        PATH: '/',
        PWD: '/',
        HOME: '/home/web_user',
        LANG:
          (
            ('object' == typeof navigator && navigator.languages && navigator.languages[0]) ||
            'C'
          ).replace('-', '_') + '.UTF-8',
        _: k || './this.program',
      },
      c;
    for (c in Q) {
      void 0 === Q[c] ? delete a[c] : (a[c] = Q[c]);
    }
    var f = [];
    for (c in a) {
      f.push(c + '=' + a[c]);
    }
    R = f;
  }
  return R;
}
var R,
  ra = [null, [], []],
  va = {
    __assert_fail: function (a, c, f, e) {
      C(
        'Assertion failed: ' +
          F(a) +
          ', at: ' +
          [c ? F(c) : 'unknown filename', f, e ? F(e) : 'unknown function']
      );
    },
    _emscripten_throw_longjmp: function () {
      throw Infinity;
    },
    abort: function () {
      C('');
    },
    emscripten_memcpy_big: function (a, c, f) {
      G.copyWithin(a, c, c + f);
    },
    emscripten_resize_heap: function (a) {
      var c = G.length;
      a >>>= 0;
      if (1073741824 < a) {
        return !1;
      }
      for (var f = 1; 4 >= f; f *= 2) {
        var e = c * (1 + 0.2 / f);
        e = Math.min(e, a + 100663296);
        var d = Math;
        e = Math.max(a, e);
        d = d.min.call(d, 1073741824, e + ((65536 - (e % 65536)) % 65536));
        a: {
          try {
            D.grow((d - da.byteLength + 65535) >>> 16);
            ea();
            var g = 1;
            break a;
          } catch (l) {}
          g = void 0;
        }
        if (g) {
          return !0;
        }
      }
      return !1;
    },
    environ_get: function (a, c) {
      var f = 0;
      qa().forEach(function (e, d) {
        var g = c + f;
        d = I[(a + 4 * d) >> 2] = g;
        for (g = 0; g < e.length; ++g) {
          H[d++ >> 0] = e.charCodeAt(g);
        }
        H[d >> 0] = 0;
        f += e.length + 1;
      });
      return 0;
    },
    environ_sizes_get: function (a, c) {
      var f = qa();
      I[a >> 2] = f.length;
      var e = 0;
      f.forEach(function (d) {
        e += d.length + 1;
      });
      I[c >> 2] = e;
      return 0;
    },
    exit: function (a) {
      if (!(noExitRuntime || 0 < y)) {
        if (b.onExit) {
          b.onExit(a);
        }
        E = !0;
      }
      m(a, new x(a));
    },
    fd_close: function () {
      return 0;
    },
    fd_seek: function () {},
    fd_write: function (a, c, f, e) {
      for (var d = 0, g = 0; g < f; g++) {
        var l = I[c >> 2],
          na = I[(c + 4) >> 2];
        c += 8;
        for (var S = 0; S < na; S++) {
          var T = G[l + S],
            U = ra[a];
          0 === T || 10 === T ? ((1 === a ? aa : z)(ca(U, 0)), (U.length = 0)) : U.push(T);
        }
        d += na;
      }
      I[e >> 2] = d;
      return 0;
    },
    getTempRet0: function () {
      return A;
    },
    invoke_iii: sa,
    invoke_vii: ta,
    invoke_viiii: ua,
    setTempRet0: function (a) {
      A = a;
    },
  };
(function () {
  function a(d) {
    b.asm = d.exports;
    D = b.asm.memory;
    ea();
    fa = b.asm.__indirect_function_table;
    ia.unshift(b.asm.__wasm_call_ctors);
    J--;
    b.monitorRunDependencies && b.monitorRunDependencies(J);
    0 == J && (null !== K && (clearInterval(K), (K = null)), L && ((d = L), (L = null), d()));
  }
  function c(d) {
    a(d.instance);
  }
  function f(d) {
    return pa()
      .then(function (g) {
        return WebAssembly.instantiate(g, e);
      })
      .then(function (g) {
        return g;
      })
      .then(d, function (g) {
        z('failed to asynchronously prepare wasm: ' + g);
        C(g);
      });
  }
  var e = { env: va, wasi_snapshot_preview1: va };
  J++;
  b.monitorRunDependencies && b.monitorRunDependencies(J);
  if (b.instantiateWasm) {
    try {
      return b.instantiateWasm(e, a);
    } catch (d) {
      return z('Module.instantiateWasm callback failed with error: ' + d), !1;
    }
  }
  (function () {
    return B ||
      'function' != typeof WebAssembly.instantiateStreaming ||
      la() ||
      M.startsWith('file://') ||
      'function' != typeof fetch
      ? f(c)
      : fetch(M, { credentials: 'same-origin' }).then(function (d) {
          return WebAssembly.instantiateStreaming(d, e).then(c, function (g) {
            z('wasm streaming compile failed: ' + g);
            z('falling back to ArrayBuffer instantiation');
            return f(c);
          });
        });
  })();
  return {};
})();
b.___wasm_call_ctors = function () {
  return (b.___wasm_call_ctors = b.asm.__wasm_call_ctors).apply(null, arguments);
};
b._tiny = function () {
  return (b._tiny = b.asm.tiny).apply(null, arguments);
};
b._malloc = function () {
  return (b._malloc = b.asm.malloc).apply(null, arguments);
};
b._free = function () {
  return (b._free = b.asm.free).apply(null, arguments);
};
b._saveSetjmp = function () {
  return (b._saveSetjmp = b.asm.saveSetjmp).apply(null, arguments);
};
b.___errno_location = function () {
  return (b.___errno_location = b.asm.__errno_location).apply(null, arguments);
};
var V = (b._setThrew = function () {
    return (V = b._setThrew = b.asm.setThrew).apply(null, arguments);
  }),
  W = (b.stackSave = function () {
    return (W = b.stackSave = b.asm.stackSave).apply(null, arguments);
  }),
  X = (b.stackRestore = function () {
    return (X = b.stackRestore = b.asm.stackRestore).apply(null, arguments);
  });
b.stackAlloc = function () {
  return (b.stackAlloc = b.asm.stackAlloc).apply(null, arguments);
};
b.dynCall_jiji = function () {
  return (b.dynCall_jiji = b.asm.dynCall_jiji).apply(null, arguments);
};
function ua(a, c, f, e, d) {
  var g = W();
  try {
    O(a)(c, f, e, d);
  } catch (l) {
    X(g);
    if (l !== l + 0) {
      throw l;
    }
    V(1, 0);
  }
}
function sa(a, c, f) {
  var e = W();
  try {
    return O(a)(c, f);
  } catch (d) {
    X(e);
    if (d !== d + 0) {
      throw d;
    }
    V(1, 0);
  }
}
function ta(a, c, f) {
  var e = W();
  try {
    O(a)(c, f);
  } catch (d) {
    X(e);
    if (d !== d + 0) {
      throw d;
    }
    V(1, 0);
  }
}
var Y;
function x(a) {
  this.name = 'ExitStatus';
  this.message = 'Program terminated with exit(' + a + ')';
  this.status = a;
}
L = function wa() {
  Y || Z();
  Y || (L = wa);
};
function Z() {
  function a() {
    if (!Y && ((Y = !0), (b.calledRun = !0), !E)) {
      N(ia);
      if (b.onRuntimeInitialized) {
        b.onRuntimeInitialized();
      }
      if (b.postRun) {
        for ('function' == typeof b.postRun && (b.postRun = [b.postRun]); b.postRun.length; ) {
          var c = b.postRun.shift();
          ja.unshift(c);
        }
      }
      N(ja);
    }
  }
  if (!(0 < J)) {
    if (b.preRun) {
      for ('function' == typeof b.preRun && (b.preRun = [b.preRun]); b.preRun.length; ) {
        ka();
      }
    }
    N(ha);
    0 < J ||
      (b.setStatus
        ? (b.setStatus('Running...'),
          setTimeout(function () {
            setTimeout(function () {
              b.setStatus('');
            }, 1);
            a();
          }, 1))
        : a());
  }
}
b.run = Z;
if (b.preInit) {
  for ('function' == typeof b.preInit && (b.preInit = [b.preInit]); 0 < b.preInit.length; ) {
    b.preInit.pop()();
  }
}
Z();
export default pngtiny;
