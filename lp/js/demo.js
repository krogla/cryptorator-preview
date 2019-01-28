"object" == typeof navigator && function() {
	"use strict";
	var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
	var t, r = (function(e, t) {
			function r(e, t) {
				for (var r = 0; r < e.length; ++r)
					if (e[r] === t) return r;
				return -1
			}

			function n(e, t) {
				var n = [],
					o = [];
				return null == t && (t = function(e, t) {
						return n[0] === t ? "[Circular ~]" : "[Circular ~." + o.slice(0, r(n, t)).join(".") + "]"
					}),
					function(i, a) {
						if (n.length > 0) {
							var s = r(n, this);
							~s ? n.splice(s + 1) : n.push(this), ~s ? o.splice(s, 1 / 0, i) : o.push(i), ~r(n, a) && (a = t.call(this, i, a))
						} else n.push(a);
						return null == e ? a instanceof Error ? function(e) {
							var t = {
								stack: e.stack,
								message: e.message,
								name: e.name
							};
							for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
							return t
						}(a) : a : e.call(this, i, a)
					}
			}(e.exports = function(e, t, r, o) {
				return JSON.stringify(e, n(t, o), r)
			}).getSerialize = n
		}(t = {
			exports: {}
		}, t.exports), t.exports),
		n = (r.getSerialize, "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {});

	function o(e) {
		return void 0 === e
	}

	function i(e) {
		return "[object Object]" === Object.prototype.toString.call(e)
	}

	function a(e) {
		return "[object String]" === Object.prototype.toString.call(e)
	}

	function s(e) {
		return "[object Array]" === Object.prototype.toString.call(e)
	}

	function c() {
		if (!("fetch" in n)) return !1;
		try {
			return new Headers, new Request(""), new Response, !0
		} catch (e) {
			return !1
		}
	}

	function l(e, t) {
		var r, n;
		if (o(e.length))
			for (r in e) h(e, r) && t.call(null, r, e[r]);
		else if (n = e.length)
			for (r = 0; r < n; r++) t.call(null, r, e[r])
	}

	function u(e, t) {
		if ("number" != typeof t) throw new Error("2nd argument to `truncate` function should be a number");
		return "string" != typeof e || 0 === t ? e : e.length <= t ? e : e.substr(0, t) + "…"
	}

	function h(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}

	function p(e) {
		for (var t, r = [], n = 0, o = e.length; n < o; n++) a(t = e[n]) ? r.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && r.push(t.source);
		return new RegExp(r.join("|"), "i")
	}

	function f(e) {
		var t, r, n, o, i, s = [];
		if (!e || !e.tagName) return "";
		if (s.push(e.tagName.toLowerCase()), e.id && s.push("#" + e.id), (t = e.className) && a(t))
			for (r = t.split(/\s+/), i = 0; i < r.length; i++) s.push("." + r[i]);
		var c = ["type", "name", "title", "alt"];
		for (i = 0; i < c.length; i++) n = c[i], (o = e.getAttribute(n)) && s.push("[" + n + '="' + o + '"]');
		return s.join("")
	}

	function d(e, t) {
		return !!(!!e ^ !!t)
	}

	function g(e, t) {
		if (d(e, t)) return !1;
		var r, n, o = e.frames,
			i = t.frames;
		if (void 0 === o || void 0 === i) return !1;
		if (o.length !== i.length) return !1;
		for (var a = 0; a < o.length; a++)
			if (r = o[a], n = i[a], r.filename !== n.filename || r.lineno !== n.lineno || r.colno !== n.colno || r.function !== n.function) return !1;
		return !0
	}
	var m = 3,
		_ = 51200,
		v = 40;

	function b(e) {
		return function(e) {
			return ~-encodeURI(e).split(/%..|./).length
		}(JSON.stringify(e))
	}

	function y(e) {
		if ("string" == typeof e) {
			return u(e, 40)
		}
		if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
		var t = Object.prototype.toString.call(e);
		return "[object Object]" === t ? "[Object]" : "[object Array]" === t ? "[Array]" : "[object Function]" === t ? e.name ? "[Function: " + e.name + "]" : "[Function]" : e
	}
	var E = {
			isObject: function(e) {
				return "object" == typeof e && null !== e
			},
			isError: function(e) {
				switch (Object.prototype.toString.call(e)) {
					case "[object Error]":
					case "[object Exception]":
					case "[object DOMException]":
						return !0;
					default:
						return e instanceof Error
				}
			},
			isErrorEvent: function(e) {
				return "[object ErrorEvent]" === Object.prototype.toString.call(e)
			},
			isDOMError: function(e) {
				return "[object DOMError]" === Object.prototype.toString.call(e)
			},
			isDOMException: function(e) {
				return "[object DOMException]" === Object.prototype.toString.call(e)
			},
			isUndefined: o,
			isFunction: function(e) {
				return "function" == typeof e
			},
			isPlainObject: i,
			isString: a,
			isArray: s,
			isEmptyObject: function(e) {
				if (!i(e)) return !1;
				for (var t in e)
					if (e.hasOwnProperty(t)) return !1;
				return !0
			},
			supportsErrorEvent: function() {
				try {
					return new ErrorEvent(""), !0
				} catch (e) {
					return !1
				}
			},
			supportsDOMError: function() {
				try {
					return new DOMError(""), !0
				} catch (e) {
					return !1
				}
			},
			supportsDOMException: function() {
				try {
					return new DOMException(""), !0
				} catch (e) {
					return !1
				}
			},
			supportsFetch: c,
			supportsReferrerPolicy: function() {
				if (!c()) return !1;
				try {
					return new Request("pickleRick", {
						referrerPolicy: "origin"
					}), !0
				} catch (e) {
					return !1
				}
			},
			supportsPromiseRejectionEvent: function() {
				return "function" == typeof PromiseRejectionEvent
			},
			wrappedCallback: function(e) {
				return function(t, r) {
					var n = e(t) || t;
					return r && r(n) || n
				}
			},
			each: l,
			objectMerge: function(e, t) {
				return t ? (l(t, function(t, r) {
					e[t] = r
				}), e) : e
			},
			truncate: u,
			objectFrozen: function(e) {
				return !!Object.isFrozen && Object.isFrozen(e)
			},
			hasKey: h,
			joinRegExp: p,
			urlencode: function(e) {
				var t = [];
				return l(e, function(e, r) {
					t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r))
				}), t.join("&")
			},
			uuid4: function() {
				var e = n.crypto || n.msCrypto;
				if (!o(e) && e.getRandomValues) {
					var t = new Uint16Array(8);
					e.getRandomValues(t), t[3] = 4095 & t[3] | 16384, t[4] = 16383 & t[4] | 32768;
					var r = function(e) {
						for (var t = e.toString(16); t.length < 4;) t = "0" + t;
						return t
					};
					return r(t[0]) + r(t[1]) + r(t[2]) + r(t[3]) + r(t[4]) + r(t[5]) + r(t[6]) + r(t[7])
				}
				return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
					var t = 16 * Math.random() | 0;
					return ("x" === e ? t : 3 & t | 8).toString(16)
				})
			},
			htmlTreeAsString: function(e) {
				for (var t, r = [], n = 0, o = 0, i = " > ".length; e && n++ < 5 && !("html" === (t = f(e)) || n > 1 && o + r.length * i + t.length >= 80);) r.push(t), o += t.length, e = e.parentNode;
				return r.reverse().join(" > ")
			},
			htmlElementAsString: f,
			isSameException: function(e, t) {
				return !d(e, t) && (e = e.values[0], t = t.values[0], e.type === t.type && e.value === t.value && (r = e.stacktrace, n = t.stacktrace, (!o(r) || !o(n)) && g(e.stacktrace, t.stacktrace)));
				var r, n
			},
			isSameStacktrace: g,
			parseUrl: function(e) {
				if ("string" != typeof e) return {};
				var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/),
					r = t[6] || "",
					n = t[8] || "";
				return {
					protocol: t[2],
					host: t[4],
					path: t[5],
					relative: t[5] + r + n
				}
			},
			fill: function(e, t, r, n) {
				if (null != e) {
					var o = e[t];
					e[t] = r(o), e[t].__raven__ = !0, e[t].__orig__ = o, n && n.push([e, t, o])
				}
			},
			safeJoin: function(e, t) {
				if (!s(e)) return "";
				for (var r = [], n = 0; n < e.length; n++) try {
					r.push(String(e[n]))
				} catch (e) {
					r.push("[value cannot be serialized]")
				}
				return r.join(t)
			},
			serializeException: function e(t, n, o) {
				if (!i(t)) return t;
				o = "number" != typeof(n = "number" != typeof n ? m : n) ? _ : o;
				var a = function e(t, r) {
					return 0 === r ? y(t) : i(t) ? Object.keys(t).reduce(function(n, o) {
						return n[o] = e(t[o], r - 1), n
					}, {}) : Array.isArray(t) ? t.map(function(t) {
						return e(t, r - 1)
					}) : y(t)
				}(t, n);
				return b(r(a)) > o ? e(t, n - 1) : a
			},
			serializeKeysForMessage: function(e, t) {
				if ("number" == typeof e || "string" == typeof e) return e.toString();
				if (!Array.isArray(e)) return "";
				if (0 === (e = e.filter(function(e) {
						return "string" == typeof e
					})).length) return "[object has no keys]";
				if (t = "number" != typeof t ? v : t, e[0].length >= t) return e[0];
				for (var r = e.length; r > 0; r--) {
					var n = e.slice(0, r).join(", ");
					if (!(n.length > t)) return r === e.length ? n : n + "…"
				}
				return ""
			},
			sanitize: function(e, t) {
				if (!s(t) || s(t) && 0 === t.length) return e;
				var n, o = p(t),
					a = "********";
				try {
					n = JSON.parse(r(e))
				} catch (t) {
					return e
				}
				return function e(t) {
					return s(t) ? t.map(function(t) {
						return e(t)
					}) : i(t) ? Object.keys(t).reduce(function(r, n) {
						return o.test(n) ? r[n] = a : r[n] = e(t[n]), r
					}, {}) : t
				}(n)
			}
		},
		w = {
			collectWindowErrors: !0,
			debug: !1
		},
		x = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
		k = [].slice,
		S = "?",
		O = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

	function C() {
		return "undefined" == typeof document || null == document.location ? "" : document.location.href
	}
	w.report = function() {
		var e, t, r = [],
			n = null,
			o = null,
			i = null;

		function a(e, t) {
			var n = null;
			if (!t || w.collectWindowErrors) {
				for (var o in r)
					if (r.hasOwnProperty(o)) try {
						r[o].apply(null, [e].concat(k.call(arguments, 2)))
					} catch (e) {
						n = e
					}
				if (n) throw n
			}
		}

		function s(t, r, n, o, s) {
			var l = E.isErrorEvent(s) ? s.error : s,
				u = E.isErrorEvent(t) ? t.message : t;
			if (i) w.computeStackTrace.augmentStackTraceWithInitialElement(i, r, n, u), c();
			else if (l && E.isError(l)) a(w.computeStackTrace(l), !0);
			else {
				var h, p = {
						url: r,
						line: n,
						column: o
					},
					f = void 0;
				if ("[object String]" === {}.toString.call(u))(h = u.match(O)) && (f = h[1], u = h[2]);
				p.func = S, a({
					name: f,
					message: u,
					url: C(),
					stack: [p]
				}, !0)
			}
			return !!e && e.apply(this, arguments)
		}

		function c() {
			var e = i,
				t = n;
			n = null, i = null, o = null, a.apply(null, [e, !1].concat(t))
		}

		function l(e, t) {
			var r = k.call(arguments, 1);
			if (i) {
				if (o === e) return;
				c()
			}
			var a = w.computeStackTrace(e);
			if (i = a, o = e, n = r, setTimeout(function() {
					o === e && c()
				}, a.incomplete ? 2e3 : 0), !1 !== t) throw e
		}
		return l.subscribe = function(n) {
			t || (e = x.onerror, x.onerror = s, t = !0), r.push(n)
		}, l.unsubscribe = function(e) {
			for (var t = r.length - 1; t >= 0; --t) r[t] === e && r.splice(t, 1)
		}, l.uninstall = function() {
			t && (x.onerror = e, t = !1, e = void 0), r = []
		}, l
	}(), w.computeStackTrace = function() {
		function e(e) {
			if (void 0 !== e.stack && e.stack) {
				for (var t, r, n, o = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, i = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, c = /\((\S*)(?::(\d+))(?::(\d+))\)/, l = e.stack.split("\n"), u = [], h = (/^(.*) is undefined$/.exec(e.message), 0), p = l.length; h < p; ++h) {
					if (r = o.exec(l[h])) {
						var f = r[2] && 0 === r[2].indexOf("native");
						r[2] && 0 === r[2].indexOf("eval") && (t = c.exec(r[2])) && (r[2] = t[1], r[3] = t[2], r[4] = t[3]), n = {
							url: f ? null : r[2],
							func: r[1] || S,
							args: f ? [r[2]] : [],
							line: r[3] ? +r[3] : null,
							column: r[4] ? +r[4] : null
						}
					} else if (r = i.exec(l[h])) n = {
						url: r[2],
						func: r[1] || S,
						args: [],
						line: +r[3],
						column: r[4] ? +r[4] : null
					};
					else {
						if (!(r = a.exec(l[h]))) continue;
						r[3] && r[3].indexOf(" > eval") > -1 && (t = s.exec(r[3])) ? (r[3] = t[1], r[4] = t[2], r[5] = null) : 0 !== h || r[5] || void 0 === e.columnNumber || (u[0].column = e.columnNumber + 1), n = {
							url: r[3],
							func: r[1] || S,
							args: r[2] ? r[2].split(",") : [],
							line: r[4] ? +r[4] : null,
							column: r[5] ? +r[5] : null
						}
					}
					if (!n.func && n.line && (n.func = S), n.url && "blob:" === n.url.substr(0, 5)) {
						var d = new XMLHttpRequest;
						if (d.open("GET", n.url, !1), d.send(null), 200 === d.status) {
							var g = d.responseText || "",
								m = (g = g.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
							if (m) {
								var _ = m[1];
								"~" === _.charAt(0) && (_ = ("undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")) + _.slice(1)), n.url = _.slice(0, -4)
							}
						}
					}
					u.push(n)
				}
				return u.length ? {
					name: e.name,
					message: e.message,
					url: C(),
					stack: u
				} : null
			}
		}

		function t(e, t, r, n) {
			var o = {
				url: t,
				line: r
			};
			if (o.url && o.line) {
				if (e.incomplete = !1, o.func || (o.func = S), e.stack.length > 0 && e.stack[0].url === o.url) {
					if (e.stack[0].line === o.line) return !1;
					if (!e.stack[0].line && e.stack[0].func === o.func) return e.stack[0].line = o.line, !1
				}
				return e.stack.unshift(o), e.partial = !0, !0
			}
			return e.incomplete = !0, !1
		}

		function r(e, o) {
			for (var i, a, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, c = [], l = {}, u = !1, h = r.caller; h && !u; h = h.caller)
				if (h !== n && h !== w.report) {
					if (a = {
							url: null,
							func: S,
							line: null,
							column: null
						}, h.name ? a.func = h.name : (i = s.exec(h.toString())) && (a.func = i[1]), void 0 === a.func) try {
						a.func = i.input.substring(0, i.input.indexOf("{"))
					} catch (e) {}
					l["" + h] ? u = !0 : l["" + h] = !0, c.push(a)
				}
			o && c.splice(0, o);
			var p = {
				name: e.name,
				message: e.message,
				url: C(),
				stack: c
			};
			return t(p, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), p
		}

		function n(t, n) {
			var o = null;
			n = null == n ? 0 : +n;
			try {
				if (o = e(t)) return o
			} catch (e) {
				if (w.debug) throw e
			}
			try {
				if (o = r(t, n + 1)) return o
			} catch (e) {
				if (w.debug) throw e
			}
			return {
				name: t.name,
				message: t.message,
				url: C()
			}
		}
		return n.augmentStackTraceWithInitialElement = t, n.computeStackTraceFromStackProp = e, n
	}();
	var j = w;

	function R(e, t) {
		var r = (65535 & e) + (65535 & t);
		return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
	}

	function T(e, t, r, n, o, i) {
		return R((a = R(R(t, e), R(n, i))) << (s = o) | a >>> 32 - s, r);
		var a, s
	}

	function F(e, t, r, n, o, i, a) {
		return T(t & r | ~t & n, e, t, o, i, a)
	}

	function D(e, t, r, n, o, i, a) {
		return T(t & n | r & ~n, e, t, o, i, a)
	}

	function A(e, t, r, n, o, i, a) {
		return T(t ^ r ^ n, e, t, o, i, a)
	}

	function B(e, t, r, n, o, i, a) {
		return T(r ^ (t | ~n), e, t, o, i, a)
	}

	function M(e, t) {
		var r, n, o, i, a;
		e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
		var s = 1732584193,
			c = -271733879,
			l = -1732584194,
			u = 271733878;
		for (r = 0; r < e.length; r += 16) n = s, o = c, i = l, a = u, s = F(s, c, l, u, e[r], 7, -680876936), u = F(u, s, c, l, e[r + 1], 12, -389564586), l = F(l, u, s, c, e[r + 2], 17, 606105819), c = F(c, l, u, s, e[r + 3], 22, -1044525330), s = F(s, c, l, u, e[r + 4], 7, -176418897), u = F(u, s, c, l, e[r + 5], 12, 1200080426), l = F(l, u, s, c, e[r + 6], 17, -1473231341), c = F(c, l, u, s, e[r + 7], 22, -45705983), s = F(s, c, l, u, e[r + 8], 7, 1770035416), u = F(u, s, c, l, e[r + 9], 12, -1958414417), l = F(l, u, s, c, e[r + 10], 17, -42063), c = F(c, l, u, s, e[r + 11], 22, -1990404162), s = F(s, c, l, u, e[r + 12], 7, 1804603682), u = F(u, s, c, l, e[r + 13], 12, -40341101), l = F(l, u, s, c, e[r + 14], 17, -1502002290), s = D(s, c = F(c, l, u, s, e[r + 15], 22, 1236535329), l, u, e[r + 1], 5, -165796510), u = D(u, s, c, l, e[r + 6], 9, -1069501632), l = D(l, u, s, c, e[r + 11], 14, 643717713), c = D(c, l, u, s, e[r], 20, -373897302), s = D(s, c, l, u, e[r + 5], 5, -701558691), u = D(u, s, c, l, e[r + 10], 9, 38016083), l = D(l, u, s, c, e[r + 15], 14, -660478335), c = D(c, l, u, s, e[r + 4], 20, -405537848), s = D(s, c, l, u, e[r + 9], 5, 568446438), u = D(u, s, c, l, e[r + 14], 9, -1019803690), l = D(l, u, s, c, e[r + 3], 14, -187363961), c = D(c, l, u, s, e[r + 8], 20, 1163531501), s = D(s, c, l, u, e[r + 13], 5, -1444681467), u = D(u, s, c, l, e[r + 2], 9, -51403784), l = D(l, u, s, c, e[r + 7], 14, 1735328473), s = A(s, c = D(c, l, u, s, e[r + 12], 20, -1926607734), l, u, e[r + 5], 4, -378558), u = A(u, s, c, l, e[r + 8], 11, -2022574463), l = A(l, u, s, c, e[r + 11], 16, 1839030562), c = A(c, l, u, s, e[r + 14], 23, -35309556), s = A(s, c, l, u, e[r + 1], 4, -1530992060), u = A(u, s, c, l, e[r + 4], 11, 1272893353), l = A(l, u, s, c, e[r + 7], 16, -155497632), c = A(c, l, u, s, e[r + 10], 23, -1094730640), s = A(s, c, l, u, e[r + 13], 4, 681279174), u = A(u, s, c, l, e[r], 11, -358537222), l = A(l, u, s, c, e[r + 3], 16, -722521979), c = A(c, l, u, s, e[r + 6], 23, 76029189), s = A(s, c, l, u, e[r + 9], 4, -640364487), u = A(u, s, c, l, e[r + 12], 11, -421815835), l = A(l, u, s, c, e[r + 15], 16, 530742520), s = B(s, c = A(c, l, u, s, e[r + 2], 23, -995338651), l, u, e[r], 6, -198630844), u = B(u, s, c, l, e[r + 7], 10, 1126891415), l = B(l, u, s, c, e[r + 14], 15, -1416354905), c = B(c, l, u, s, e[r + 5], 21, -57434055), s = B(s, c, l, u, e[r + 12], 6, 1700485571), u = B(u, s, c, l, e[r + 3], 10, -1894986606), l = B(l, u, s, c, e[r + 10], 15, -1051523), c = B(c, l, u, s, e[r + 1], 21, -2054922799), s = B(s, c, l, u, e[r + 8], 6, 1873313359), u = B(u, s, c, l, e[r + 15], 10, -30611744), l = B(l, u, s, c, e[r + 6], 15, -1560198380), c = B(c, l, u, s, e[r + 13], 21, 1309151649), s = B(s, c, l, u, e[r + 4], 6, -145523070), u = B(u, s, c, l, e[r + 11], 10, -1120210379), l = B(l, u, s, c, e[r + 2], 15, 718787259), c = B(c, l, u, s, e[r + 9], 21, -343485551), s = R(s, n), c = R(c, o), l = R(l, i), u = R(u, a);
		return [s, c, l, u]
	}

	function L(e) {
		var t, r = "",
			n = 32 * e.length;
		for (t = 0; t < n; t += 8) r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
		return r
	}

	function H(e) {
		var t, r = [];
		for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
		var n = 8 * e.length;
		for (t = 0; t < n; t += 8) r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
		return r
	}

	function I(e) {
		var t, r, n = "";
		for (r = 0; r < e.length; r += 1) t = e.charCodeAt(r), n += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
		return n
	}

	function P(e) {
		return unescape(encodeURIComponent(e))
	}

	function U(e) {
		return function(e) {
			return L(M(H(e), 8 * e.length))
		}(P(e))
	}

	function N(e, t) {
		return function(e, t) {
			var r, n, o = H(e),
				i = [],
				a = [];
			for (i[15] = a[15] = void 0, o.length > 16 && (o = M(o, 8 * e.length)), r = 0; r < 16; r += 1) i[r] = 909522486 ^ o[r], a[r] = 1549556828 ^ o[r];
			return n = M(i.concat(H(t)), 512 + 8 * t.length), L(M(a.concat(n), 640))
		}(P(e), P(t))
	}
	var q = function(e, t, r) {
		return t ? r ? N(t, e) : I(N(t, e)) : r ? U(e) : I(U(e))
	};

	function z(e) {
		this.name = "RavenConfigError", this.message = e
	}
	z.prototype = new Error, z.prototype.constructor = z;
	var K = z,
		W = function(e, t, r) {
			var n = e[t],
				o = e;
			if (t in e) {
				var i = "warn" === t ? "warning" : t;
				e[t] = function() {
					var e = [].slice.call(arguments),
						a = E.safeJoin(e, " "),
						s = {
							level: i,
							logger: "console",
							extra: {
								arguments: e
							}
						};
					"assert" === t ? !1 === e[0] && (a = "Assertion failed: " + (E.safeJoin(e.slice(1), " ") || "console.assert"), s.extra.arguments = e.slice(1), r && r(a, s)) : r && r(a, s), n && Function.prototype.apply.call(n, o, e)
				}
			}
		},
		V = E.isErrorEvent,
		$ = E.isDOMError,
		X = E.isDOMException,
		J = E.isError,
		G = E.isObject,
		Y = E.isPlainObject,
		Z = E.isUndefined,
		Q = E.isFunction,
		ee = E.isString,
		te = E.isArray,
		re = E.isEmptyObject,
		ne = E.each,
		oe = E.objectMerge,
		ie = E.truncate,
		ae = E.objectFrozen,
		se = E.hasKey,
		ce = E.joinRegExp,
		le = E.urlencode,
		ue = E.uuid4,
		he = E.htmlTreeAsString,
		pe = E.isSameException,
		fe = E.isSameStacktrace,
		de = E.parseUrl,
		ge = E.fill,
		me = E.supportsFetch,
		_e = E.supportsReferrerPolicy,
		ve = E.serializeKeysForMessage,
		be = E.serializeException,
		ye = E.sanitize,
		Ee = W,
		we = "source protocol user pass host port path".split(" "),
		xe = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

	function ke() {
		return +new Date
	}
	var Se = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
		Oe = Se.document,
		Ce = Se.navigator;

	function je(e, t) {
		return Q(t) ? function(r) {
			return t(r, e)
		} : t
	}

	function Re() {
		for (var e in this._hasJSON = !("object" != typeof JSON || !JSON.stringify), this._hasDocument = !Z(Oe), this._hasNavigator = !Z(Ce), this._lastCapturedException = null, this._lastData = null, this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, this._globalContext = {}, this._globalOptions = {
				release: Se.SENTRY_RELEASE && Se.SENTRY_RELEASE.id,
				logger: "javascript",
				ignoreErrors: [],
				ignoreUrls: [],
				whitelistUrls: [],
				includePaths: [],
				headers: null,
				collectWindowErrors: !0,
				captureUnhandledRejections: !0,
				maxMessageLength: 0,
				maxUrlLength: 250,
				stackTraceLimit: 50,
				autoBreadcrumbs: !0,
				instrument: !0,
				sampleRate: 1,
				sanitizeKeys: []
			}, this._fetchDefaults = {
				method: "POST",
				referrerPolicy: _e() ? "origin" : ""
			}, this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, this._originalConsole = Se.console || {}, this._originalConsoleMethods = {}, this._plugins = [], this._startTime = ke(), this._wrappedBuiltIns = [], this._breadcrumbs = [], this._lastCapturedEvent = null, this._keypressTimeout, this._location = Se.location, this._lastHref = this._location && this._location.href, this._resetBackoff(), this._originalConsole) this._originalConsoleMethods[e] = this._originalConsole[e]
	}
	Re.prototype = {
		VERSION: "3.27.0",
		debug: !1,
		TraceKit: j,
		config: function(e, t) {
			var r = this;
			if (r._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), r;
			if (!e) return r;
			var n = r._globalOptions;
			t && ne(t, function(e, t) {
				"tags" === e || "extra" === e || "user" === e ? r._globalContext[e] = t : n[e] = t
			}), r.setDSN(e), n.ignoreErrors.push(/^Script error\.?$/), n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), n.ignoreErrors = ce(n.ignoreErrors), n.ignoreUrls = !!n.ignoreUrls.length && ce(n.ignoreUrls), n.whitelistUrls = !!n.whitelistUrls.length && ce(n.whitelistUrls), n.includePaths = ce(n.includePaths), n.maxBreadcrumbs = Math.max(0, Math.min(n.maxBreadcrumbs || 100, 100));
			var o = {
					xhr: !0,
					console: !0,
					dom: !0,
					location: !0,
					sentry: !0
				},
				i = n.autoBreadcrumbs;
			"[object Object]" === {}.toString.call(i) ? i = oe(o, i) : !1 !== i && (i = o), n.autoBreadcrumbs = i;
			var a = {
					tryCatch: !0
				},
				s = n.instrument;
			return "[object Object]" === {}.toString.call(s) ? s = oe(a, s) : !1 !== s && (s = a), n.instrument = s, j.collectWindowErrors = !!n.collectWindowErrors, r
		},
		install: function() {
			var e = this;
			return e.isSetup() && !e._isRavenInstalled && (j.report.subscribe(function() {
				e._handleOnErrorStackInfo.apply(e, arguments)
			}), e._globalOptions.captureUnhandledRejections && e._attachPromiseRejectionHandler(), e._patchFunctionToString(), e._globalOptions.instrument && e._globalOptions.instrument.tryCatch && e._instrumentTryCatch(), e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(), e._drainPlugins(), e._isRavenInstalled = !0), Error.stackTraceLimit = e._globalOptions.stackTraceLimit, this
		},
		setDSN: function(e) {
			var t = this._parseDSN(e),
				r = t.path.lastIndexOf("/"),
				n = t.path.substr(1, r);
			this._dsn = e, this._globalKey = t.user, this._globalSecret = t.pass && t.pass.substr(1), this._globalProject = t.path.substr(r + 1), this._globalServer = this._getGlobalServer(t), this._globalEndpoint = this._globalServer + "/" + n + "api/" + this._globalProject + "/store/", this._resetBackoff()
		},
		context: function(e, t, r) {
			return Q(e) && (r = t || [], t = e, e = {}), this.wrap(e, t).apply(this, r)
		},
		wrap: function(e, t, r) {
			var n = this;
			if (Z(t) && !Q(e)) return e;
			if (Q(e) && (t = e, e = void 0), !Q(t)) return t;
			try {
				if (t.__raven__) return t;
				if (t.__raven_wrapper__) return t.__raven_wrapper__
			} catch (e) {
				return t
			}

			function o() {
				var o = [],
					i = arguments.length,
					a = !e || e && !1 !== e.deep;
				for (r && Q(r) && r.apply(this, arguments); i--;) o[i] = a ? n.wrap(e, arguments[i]) : arguments[i];
				try {
					return t.apply(this, o)
				} catch (t) {
					throw n._ignoreNextOnError(), n.captureException(t, e), t
				}
			}
			for (var i in t) se(t, i) && (o[i] = t[i]);
			return o.prototype = t.prototype, t.__raven_wrapper__ = o, o.__raven__ = !0, o.__orig__ = t, o
		},
		uninstall: function() {
			return j.report.uninstall(), this._detachPromiseRejectionHandler(), this._unpatchFunctionToString(), this._restoreBuiltIns(), this._restoreConsole(), Error.stackTraceLimit = this._originalErrorStackTraceLimit, this._isRavenInstalled = !1, this
		},
		_promiseRejectionHandler: function(e) {
			this._logDebug("debug", "Raven caught unhandled promise rejection:", e), this.captureException(e.reason, {
				mechanism: {
					type: "onunhandledrejection",
					handled: !1
				}
			})
		},
		_attachPromiseRejectionHandler: function() {
			return this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this), Se.addEventListener && Se.addEventListener("unhandledrejection", this._promiseRejectionHandler), this
		},
		_detachPromiseRejectionHandler: function() {
			return Se.removeEventListener && Se.removeEventListener("unhandledrejection", this._promiseRejectionHandler), this
		},
		captureException: function(e, t) {
			if (t = oe({
					trimHeadFrames: 0
				}, t || {}), V(e) && e.error) e = e.error;
			else {
				if ($(e) || X(e)) {
					var r = e.name || ($(e) ? "DOMError" : "DOMException"),
						n = e.message ? r + ": " + e.message : r;
					return this.captureMessage(n, oe(t, {
						stacktrace: !0,
						trimHeadFrames: t.trimHeadFrames + 1
					}))
				}
				if (J(e)) e = e;
				else {
					if (!Y(e)) return this.captureMessage(e, oe(t, {
						stacktrace: !0,
						trimHeadFrames: t.trimHeadFrames + 1
					}));
					t = this._getCaptureExceptionOptionsFromPlainObject(t, e), e = new Error(t.message)
				}
			}
			this._lastCapturedException = e;
			try {
				var o = j.computeStackTrace(e);
				this._handleStackInfo(o, t)
			} catch (t) {
				if (e !== t) throw t
			}
			return this
		},
		_getCaptureExceptionOptionsFromPlainObject: function(e, t) {
			var r = Object.keys(t).sort(),
				n = oe(e, {
					message: "Non-Error exception captured with keys: " + ve(r),
					fingerprint: [q(r)],
					extra: e.extra || {}
				});
			return n.extra.__serialized__ = be(t), n
		},
		captureMessage: function(e, t) {
			if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
				var r, n = oe({
					message: e += ""
				}, t = t || {});
				try {
					throw new Error(e)
				} catch (e) {
					r = e
				}
				r.name = null;
				var o = j.computeStackTrace(r),
					i = te(o.stack) && o.stack[1];
				i && "Raven.captureException" === i.func && (i = o.stack[2]);
				var a = i && i.url || "";
				if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(a)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(a))) {
					if (this._globalOptions.stacktrace || t.stacktrace || "" === n.message) {
						n.fingerprint = null == n.fingerprint ? e : n.fingerprint, (t = oe({
							trimHeadFrames: 0
						}, t)).trimHeadFrames += 1;
						var s = this._prepareFrames(o, t);
						n.stacktrace = {
							frames: s.reverse()
						}
					}
					return n.fingerprint && (n.fingerprint = te(n.fingerprint) ? n.fingerprint : [n.fingerprint]), this._send(n), this
				}
			}
		},
		captureBreadcrumb: function(e) {
			var t = oe({
				timestamp: ke() / 1e3
			}, e);
			if (Q(this._globalOptions.breadcrumbCallback)) {
				var r = this._globalOptions.breadcrumbCallback(t);
				if (G(r) && !re(r)) t = r;
				else if (!1 === r) return this
			}
			return this._breadcrumbs.push(t), this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(), this
		},
		addPlugin: function(e) {
			var t = [].slice.call(arguments, 1);
			return this._plugins.push([e, t]), this._isRavenInstalled && this._drainPlugins(), this
		},
		setUserContext: function(e) {
			return this._globalContext.user = e, this
		},
		setExtraContext: function(e) {
			return this._mergeContext("extra", e), this
		},
		setTagsContext: function(e) {
			return this._mergeContext("tags", e), this
		},
		clearContext: function() {
			return this._globalContext = {}, this
		},
		getContext: function() {
			return JSON.parse(r(this._globalContext))
		},
		setEnvironment: function(e) {
			return this._globalOptions.environment = e, this
		},
		setRelease: function(e) {
			return this._globalOptions.release = e, this
		},
		setDataCallback: function(e) {
			var t = this._globalOptions.dataCallback;
			return this._globalOptions.dataCallback = je(t, e), this
		},
		setBreadcrumbCallback: function(e) {
			var t = this._globalOptions.breadcrumbCallback;
			return this._globalOptions.breadcrumbCallback = je(t, e), this
		},
		setShouldSendCallback: function(e) {
			var t = this._globalOptions.shouldSendCallback;
			return this._globalOptions.shouldSendCallback = je(t, e), this
		},
		setTransport: function(e) {
			return this._globalOptions.transport = e, this
		},
		lastException: function() {
			return this._lastCapturedException
		},
		lastEventId: function() {
			return this._lastEventId
		},
		isSetup: function() {
			return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), !1))
		},
		afterLoad: function() {
			var e = Se.RavenConfig;
			e && this.config(e.dsn, e.config).install()
		},
		showReportDialog: function(e) {
			if (Oe) {
				if (!(e = oe({
						eventId: this.lastEventId(),
						dsn: this._dsn,
						user: this._globalContext.user || {}
					}, e)).eventId) throw new K("Missing eventId");
				if (!e.dsn) throw new K("Missing DSN");
				var t = encodeURIComponent,
					r = [];
				for (var n in e)
					if ("user" === n) {
						var o = e.user;
						o.name && r.push("name=" + t(o.name)), o.email && r.push("email=" + t(o.email))
					} else r.push(t(n) + "=" + t(e[n]));
				var i = this._getGlobalServer(this._parseDSN(e.dsn)),
					a = Oe.createElement("script");
				a.async = !0, a.src = i + "/api/embed/error-page/?" + r.join("&"), (Oe.head || Oe.body).appendChild(a)
			}
		},
		_ignoreNextOnError: function() {
			var e = this;
			this._ignoreOnError += 1, setTimeout(function() {
				e._ignoreOnError -= 1
			})
		},
		_triggerEvent: function(e, t) {
			var r, n;
			if (this._hasDocument) {
				for (n in t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), Oe.createEvent ? (r = Oe.createEvent("HTMLEvents")).initEvent(e, !0, !0) : (r = Oe.createEventObject()).eventType = e, t) se(t, n) && (r[n] = t[n]);
				if (Oe.createEvent) Oe.dispatchEvent(r);
				else try {
					Oe.fireEvent("on" + r.eventType.toLowerCase(), r)
				} catch (e) {}
			}
		},
		_breadcrumbEventHandler: function(e) {
			var t = this;
			return function(r) {
				if (t._keypressTimeout = null, t._lastCapturedEvent !== r) {
					var n;
					t._lastCapturedEvent = r;
					try {
						n = he(r.target)
					} catch (e) {
						n = "<unknown>"
					}
					t.captureBreadcrumb({
						category: "ui." + e,
						message: n
					})
				}
			}
		},
		_keypressEventHandler: function() {
			var e = this;
			return function(t) {
				var r;
				try {
					r = t.target
				} catch (e) {
					return
				}
				var n = r && r.tagName;
				if (n && ("INPUT" === n || "TEXTAREA" === n || r.isContentEditable)) {
					var o = e._keypressTimeout;
					o || e._breadcrumbEventHandler("input")(t), clearTimeout(o), e._keypressTimeout = setTimeout(function() {
						e._keypressTimeout = null
					}, 1e3)
				}
			}
		},
		_captureUrlChange: function(e, t) {
			var r = de(this._location.href),
				n = de(t),
				o = de(e);
			this._lastHref = t, r.protocol === n.protocol && r.host === n.host && (t = n.relative), r.protocol === o.protocol && r.host === o.host && (e = o.relative), this.captureBreadcrumb({
				category: "navigation",
				data: {
					to: t,
					from: e
				}
			})
		},
		_patchFunctionToString: function() {
			var e = this;
			e._originalFunctionToString = Function.prototype.toString, Function.prototype.toString = function() {
				return "function" == typeof this && this.__raven__ ? e._originalFunctionToString.apply(this.__orig__, arguments) : e._originalFunctionToString.apply(this, arguments)
			}
		},
		_unpatchFunctionToString: function() {
			this._originalFunctionToString && (Function.prototype.toString = this._originalFunctionToString)
		},
		_instrumentTryCatch: function() {
			var e = this,
				t = e._wrappedBuiltIns;

			function r(t) {
				return function(r, n) {
					for (var o = new Array(arguments.length), i = 0; i < o.length; ++i) o[i] = arguments[i];
					var a = o[0];
					return Q(a) && (o[0] = e.wrap({
						mechanism: {
							type: "instrument",
							data: {
								function: t.name || "<anonymous>"
							}
						}
					}, a)), t.apply ? t.apply(this, o) : t(o[0], o[1])
				}
			}
			var n = this._globalOptions.autoBreadcrumbs;

			function o(r) {
				var o = Se[r] && Se[r].prototype;
				o && o.hasOwnProperty && o.hasOwnProperty("addEventListener") && (ge(o, "addEventListener", function(t) {
					return function(o, i, a, s) {
						try {
							i && i.handleEvent && (i.handleEvent = e.wrap({
								mechanism: {
									type: "instrument",
									data: {
										target: r,
										function: "handleEvent",
										handler: i && i.name || "<anonymous>"
									}
								}
							}, i.handleEvent))
						} catch (e) {}
						var c, l, u;
						return n && n.dom && ("EventTarget" === r || "Node" === r) && (l = e._breadcrumbEventHandler("click"), u = e._keypressEventHandler(), c = function(e) {
							if (e) {
								var t;
								try {
									t = e.type
								} catch (e) {
									return
								}
								return "click" === t ? l(e) : "keypress" === t ? u(e) : void 0
							}
						}), t.call(this, o, e.wrap({
							mechanism: {
								type: "instrument",
								data: {
									target: r,
									function: "addEventListener",
									handler: i && i.name || "<anonymous>"
								}
							}
						}, i, c), a, s)
					}
				}, t), ge(o, "removeEventListener", function(e) {
					return function(t, r, n, o) {
						try {
							r = r && (r.__raven_wrapper__ ? r.__raven_wrapper__ : r)
						} catch (e) {}
						return e.call(this, t, r, n, o)
					}
				}, t))
			}
			ge(Se, "setTimeout", r, t), ge(Se, "setInterval", r, t), Se.requestAnimationFrame && ge(Se, "requestAnimationFrame", function(t) {
				return function(r) {
					return t(e.wrap({
						mechanism: {
							type: "instrument",
							data: {
								function: "requestAnimationFrame",
								handler: t && t.name || "<anonymous>"
							}
						}
					}, r))
				}
			}, t);
			for (var i = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], a = 0; a < i.length; a++) o(i[a])
		},
		_instrumentBreadcrumbs: function() {
			var e = this,
				t = this._globalOptions.autoBreadcrumbs,
				r = e._wrappedBuiltIns;

			function n(t, r) {
				t in r && Q(r[t]) && ge(r, t, function(r) {
					return e.wrap({
						mechanism: {
							type: "instrument",
							data: {
								function: t,
								handler: r && r.name || "<anonymous>"
							}
						}
					}, r)
				})
			}
			if (t.xhr && "XMLHttpRequest" in Se) {
				var o = Se.XMLHttpRequest && Se.XMLHttpRequest.prototype;
				ge(o, "open", function(t) {
					return function(r, n) {
						return ee(n) && -1 === n.indexOf(e._globalKey) && (this.__raven_xhr = {
							method: r,
							url: n,
							status_code: null
						}), t.apply(this, arguments)
					}
				}, r), ge(o, "send", function(t) {
					return function() {
						var r = this;

						function o() {
							if (r.__raven_xhr && 4 === r.readyState) {
								try {
									r.__raven_xhr.status_code = r.status
								} catch (e) {}
								e.captureBreadcrumb({
									type: "http",
									category: "xhr",
									data: r.__raven_xhr
								})
							}
						}
						for (var i = ["onload", "onerror", "onprogress"], a = 0; a < i.length; a++) n(i[a], r);
						return "onreadystatechange" in r && Q(r.onreadystatechange) ? ge(r, "onreadystatechange", function(t) {
							return e.wrap({
								mechanism: {
									type: "instrument",
									data: {
										function: "onreadystatechange",
										handler: t && t.name || "<anonymous>"
									}
								}
							}, t, o)
						}) : r.onreadystatechange = o, t.apply(this, arguments)
					}
				}, r)
			}
			t.xhr && me() && ge(Se, "fetch", function(t) {
				return function() {
					for (var r = new Array(arguments.length), n = 0; n < r.length; ++n) r[n] = arguments[n];
					var o, i = r[0],
						a = "GET";
					if ("string" == typeof i ? o = i : "Request" in Se && i instanceof Se.Request ? (o = i.url, i.method && (a = i.method)) : o = "" + i, -1 !== o.indexOf(e._globalKey)) return t.apply(this, r);
					r[1] && r[1].method && (a = r[1].method);
					var s = {
						method: a,
						url: o,
						status_code: null
					};
					return t.apply(this, r).then(function(t) {
						return s.status_code = t.status, e.captureBreadcrumb({
							type: "http",
							category: "fetch",
							data: s
						}), t
					}).catch(function(t) {
						throw e.captureBreadcrumb({
							type: "http",
							category: "fetch",
							data: s,
							level: "error"
						}), t
					})
				}
			}, r), t.dom && this._hasDocument && (Oe.addEventListener ? (Oe.addEventListener("click", e._breadcrumbEventHandler("click"), !1), Oe.addEventListener("keypress", e._keypressEventHandler(), !1)) : Oe.attachEvent && (Oe.attachEvent("onclick", e._breadcrumbEventHandler("click")), Oe.attachEvent("onkeypress", e._keypressEventHandler())));
			var i = Se.chrome,
				a = !(i && i.app && i.app.runtime) && Se.history && Se.history.pushState && Se.history.replaceState;
			if (t.location && a) {
				var s = Se.onpopstate;
				Se.onpopstate = function() {
					var t = e._location.href;
					if (e._captureUrlChange(e._lastHref, t), s) return s.apply(this, arguments)
				};
				var c = function(t) {
					return function() {
						var r = arguments.length > 2 ? arguments[2] : void 0;
						return r && e._captureUrlChange(e._lastHref, r + ""), t.apply(this, arguments)
					}
				};
				ge(Se.history, "pushState", c, r), ge(Se.history, "replaceState", c, r)
			}
			if (t.console && "console" in Se && console.log) {
				var l = function(t, r) {
					e.captureBreadcrumb({
						message: t,
						level: r.level,
						category: "console"
					})
				};
				ne(["debug", "info", "warn", "error", "log"], function(e, t) {
					Ee(console, t, l)
				})
			}
		},
		_restoreBuiltIns: function() {
			for (var e; this._wrappedBuiltIns.length;) {
				var t = (e = this._wrappedBuiltIns.shift())[0],
					r = e[1],
					n = e[2];
				t[r] = n
			}
		},
		_restoreConsole: function() {
			for (var e in this._originalConsoleMethods) this._originalConsole[e] = this._originalConsoleMethods[e]
		},
		_drainPlugins: function() {
			var e = this;
			ne(this._plugins, function(t, r) {
				var n = r[0],
					o = r[1];
				n.apply(e, [e].concat(o))
			})
		},
		_parseDSN: function(e) {
			var t = xe.exec(e),
				r = {},
				n = 7;
			try {
				for (; n--;) r[we[n]] = t[n] || ""
			} catch (t) {
				throw new K("Invalid DSN: " + e)
			}
			if (r.pass && !this._globalOptions.allowSecretKey) throw new K("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
			return r
		},
		_getGlobalServer: function(e) {
			var t = "//" + e.host + (e.port ? ":" + e.port : "");
			return e.protocol && (t = e.protocol + ":" + t), t
		},
		_handleOnErrorStackInfo: function(e, t) {
			(t = t || {}).mechanism = t.mechanism || {
				type: "onerror",
				handled: !1
			}, this._ignoreOnError || this._handleStackInfo(e, t)
		},
		_handleStackInfo: function(e, t) {
			var r = this._prepareFrames(e, t);
			this._triggerEvent("handle", {
				stackInfo: e,
				options: t
			}), this._processException(e.name, e.message, e.url, e.lineno, r, t)
		},
		_prepareFrames: function(e, t) {
			var r = this,
				n = [];
			if (e.stack && e.stack.length && (ne(e.stack, function(t, o) {
					var i = r._normalizeFrame(o, e.url);
					i && n.push(i)
				}), t && t.trimHeadFrames))
				for (var o = 0; o < t.trimHeadFrames && o < n.length; o++) n[o].in_app = !1;
			return n = n.slice(0, this._globalOptions.stackTraceLimit)
		},
		_normalizeFrame: function(e, t) {
			var r = {
				filename: e.url,
				lineno: e.line,
				colno: e.column,
				function: e.func || "?"
			};
			return e.url || (r.filename = t), r.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(r.filename) || /(Raven|TraceKit)\./.test(r.function) || /raven\.(min\.)?js$/.test(r.filename)), r
		},
		_processException: function(e, t, r, n, o, i) {
			var a, s = (e ? e + ": " : "") + (t || "");
			if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t) && !this._globalOptions.ignoreErrors.test(s)) && (o && o.length ? (r = o[0].filename || r, o.reverse(), a = {
					frames: o
				}) : r && (a = {
					frames: [{
						filename: r,
						lineno: n,
						in_app: !0
					}]
				}), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(r)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(r)))) {
				var c = oe({
						exception: {
							values: [{
								type: e,
								value: t,
								stacktrace: a
							}]
						},
						transaction: r
					}, i),
					l = c.exception.values[0];
				null == l.type && "" === l.value && (l.value = "Unrecoverable error caught"), !c.exception.mechanism && c.mechanism && (c.exception.mechanism = c.mechanism, delete c.mechanism), c.exception.mechanism = oe({
					type: "generic",
					handled: !0
				}, c.exception.mechanism || {}), this._send(c)
			}
		},
		_trimPacket: function(e) {
			var t = this._globalOptions.maxMessageLength;
			if (e.message && (e.message = ie(e.message, t)), e.exception) {
				var r = e.exception.values[0];
				r.value = ie(r.value, t)
			}
			var n = e.request;
			return n && (n.url && (n.url = ie(n.url, this._globalOptions.maxUrlLength)), n.Referer && (n.Referer = ie(n.Referer, this._globalOptions.maxUrlLength))), e.breadcrumbs && e.breadcrumbs.values && this._trimBreadcrumbs(e.breadcrumbs), e
		},
		_trimBreadcrumbs: function(e) {
			for (var t, r, n, o = ["to", "from", "url"], i = 0; i < e.values.length; ++i)
				if ((r = e.values[i]).hasOwnProperty("data") && G(r.data) && !ae(r.data)) {
					n = oe({}, r.data);
					for (var a = 0; a < o.length; ++a) t = o[a], n.hasOwnProperty(t) && n[t] && (n[t] = ie(n[t], this._globalOptions.maxUrlLength));
					e.values[i].data = n
				}
		},
		_getHttpData: function() {
			if (this._hasNavigator || this._hasDocument) {
				var e = {};
				return this._hasNavigator && Ce.userAgent && (e.headers = {
					"User-Agent": Ce.userAgent
				}), Se.location && Se.location.href && (e.url = Se.location.href), this._hasDocument && Oe.referrer && (e.headers || (e.headers = {}), e.headers.Referer = Oe.referrer), e
			}
		},
		_resetBackoff: function() {
			this._backoffDuration = 0, this._backoffStart = null
		},
		_shouldBackoff: function() {
			return this._backoffDuration && ke() - this._backoffStart < this._backoffDuration
		},
		_isRepeatData: function(e) {
			var t = this._lastData;
			return !(!t || e.message !== t.message || e.transaction !== t.transaction) && (e.stacktrace || t.stacktrace ? fe(e.stacktrace, t.stacktrace) : !e.exception && !t.exception || pe(e.exception, t.exception))
		},
		_setBackoffState: function(e) {
			if (!this._shouldBackoff()) {
				var t = e.status;
				if (400 === t || 401 === t || 429 === t) {
					var r;
					try {
						r = me() ? e.headers.get("Retry-After") : e.getResponseHeader("Retry-After"), r = 1e3 * parseInt(r, 10)
					} catch (e) {}
					this._backoffDuration = r || (2 * this._backoffDuration || 1e3), this._backoffStart = ke()
				}
			}
		},
		_send: function(e) {
			var t = this._globalOptions,
				r = {
					project: this._globalProject,
					logger: t.logger,
					platform: "javascript"
				},
				n = this._getHttpData();
			n && (r.request = n), e.trimHeadFrames && delete e.trimHeadFrames, (e = oe(r, e)).tags = oe(oe({}, this._globalContext.tags), e.tags), e.extra = oe(oe({}, this._globalContext.extra), e.extra), e.extra["session:duration"] = ke() - this._startTime, this._breadcrumbs && this._breadcrumbs.length > 0 && (e.breadcrumbs = {
				values: [].slice.call(this._breadcrumbs, 0)
			}), this._globalContext.user && (e.user = this._globalContext.user), t.environment && (e.environment = t.environment), t.release && (e.release = t.release), t.serverName && (e.server_name = t.serverName), e = this._sanitizeData(e), Object.keys(e).forEach(function(t) {
				(null == e[t] || "" === e[t] || re(e[t])) && delete e[t]
			}), Q(t.dataCallback) && (e = t.dataCallback(e) || e), e && !re(e) && (Q(t.shouldSendCallback) && !t.shouldSendCallback(e) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", e) : "number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this._sendProcessedPayload(e) : this._sendProcessedPayload(e)))
		},
		_sanitizeData: function(e) {
			return ye(e, this._globalOptions.sanitizeKeys)
		},
		_getUuid: function() {
			return ue()
		},
		_sendProcessedPayload: function(e, t) {
			var r = this,
				n = this._globalOptions;
			if (this.isSetup())
				if (e = this._trimPacket(e), this._globalOptions.allowDuplicates || !this._isRepeatData(e)) {
					this._lastEventId = e.event_id || (e.event_id = this._getUuid()), this._lastData = e, this._logDebug("debug", "Raven about to send:", e);
					var o = {
						sentry_version: "7",
						sentry_client: "raven-js/" + this.VERSION,
						sentry_key: this._globalKey
					};
					this._globalSecret && (o.sentry_secret = this._globalSecret);
					var i = e.exception && e.exception.values[0];
					this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry && this.captureBreadcrumb({
						category: "sentry",
						message: i ? (i.type ? i.type + ": " : "") + i.value : e.message,
						event_id: e.event_id,
						level: e.level || "error"
					});
					var a = this._globalEndpoint;
					(n.transport || this._makeRequest).call(this, {
						url: a,
						auth: o,
						data: e,
						options: n,
						onSuccess: function() {
							r._resetBackoff(), r._triggerEvent("success", {
								data: e,
								src: a
							}), t && t()
						},
						onError: function(n) {
							r._logDebug("error", "Raven transport failed to send: ", n), n.request && r._setBackoffState(n.request), r._triggerEvent("failure", {
								data: e,
								src: a
							}), n = n || new Error("Raven send failed (no additional details provided)"), t && t(n)
						}
					})
				} else this._logDebug("warn", "Raven dropped repeat event: ", e)
		},
		_makeRequest: function(e) {
			var t = e.url + "?" + le(e.auth),
				n = null,
				o = {};
			if (e.options.headers && (n = this._evaluateHash(e.options.headers)), e.options.fetchParameters && (o = this._evaluateHash(e.options.fetchParameters)), me()) {
				o.body = r(e.data);
				var i = oe({}, this._fetchDefaults),
					a = oe(i, o);
				return n && (a.headers = n), Se.fetch(t, a).then(function(t) {
					if (t.ok) e.onSuccess && e.onSuccess();
					else {
						var r = new Error("Sentry error code: " + t.status);
						r.request = t, e.onError && e.onError(r)
					}
				}).catch(function() {
					e.onError && e.onError(new Error("Sentry error code: network unavailable"))
				})
			}
			var s = Se.XMLHttpRequest && new Se.XMLHttpRequest;
			s && (("withCredentials" in s || "undefined" != typeof XDomainRequest) && ("withCredentials" in s ? s.onreadystatechange = function() {
				if (4 === s.readyState)
					if (200 === s.status) e.onSuccess && e.onSuccess();
					else if (e.onError) {
					var t = new Error("Sentry error code: " + s.status);
					t.request = s, e.onError(t)
				}
			} : (s = new XDomainRequest, t = t.replace(/^https?:/, ""), e.onSuccess && (s.onload = e.onSuccess), e.onError && (s.onerror = function() {
				var t = new Error("Sentry error code: XDomainRequest");
				t.request = s, e.onError(t)
			})), s.open("POST", t), n && ne(n, function(e, t) {
				s.setRequestHeader(e, t)
			}), s.send(r(e.data))))
		},
		_evaluateHash: function(e) {
			var t = {};
			for (var r in e)
				if (e.hasOwnProperty(r)) {
					var n = e[r];
					t[r] = "function" == typeof n ? n() : n
				}
			return t
		},
		_logDebug: function(e) {
			this._originalConsoleMethods[e] && (this.debug || this._globalOptions.debug) && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1))
		},
		_mergeContext: function(e, t) {
			Z(t) ? delete this._globalContext[e] : this._globalContext[e] = oe(this._globalContext[e] || {}, t)
		}
	}, Re.prototype.setUser = Re.prototype.setUserContext, Re.prototype.setReleaseContext = Re.prototype.setRelease;
	var Te = Re,
		Fe = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
		De = Fe.Raven,
		Ae = new Te;
	Ae.noConflict = function() {
		return Fe.Raven = De, Ae
	}, Ae.afterLoad();
	var Be, Me, Le, He, Ie, Pe, Ue, Ne, qe = Ae,
		ze = Te;
	qe.Client = ze, Ue = window.location.host, Ne = {
		prod: "plyr.io" === Ue,
		dev: "dev.plyr.io" === Ue
	}, document.addEventListener("DOMContentLoaded", function() {
		qe.context(function() {
			var e = document.getElementById("container");
			window.shr && window.shr.setup({
				count: {
					classname: "button__count"
				}
			}), document.addEventListener("focusout", function(t) {
				t.target.classList && !e.contains(t.target) && t.target.classList.remove("tab-focus")
			}), document.addEventListener("keydown", function(t) {
				9 === t.keyCode && setTimeout(function() {
					var t = document.activeElement;
					t && t.classList && !e.contains(t) && t.classList.add("tab-focus")
				}, 10)
			});
			var t = new Plyr("#player", {
				debug: !0,
				title: "View From A Blue Moon",
				iconUrl: "https://cdn.plyr.io/3.4.7/plyr.svg",
				keyboard: {
					global: !0
				},
				tooltips: {
					controls: 1
				},
				captions: {
					active: !0
				},
				keys: {
					google: "AIzaSyDrNwtN3nLH_8rjCmu5Wq3ZCm4MNAVdc0c"
				},
				ads: {
					enabled: Ne.prod || Ne.dev,
					publisherId: "918848828995742"
				}
			});
			window.player = t;
			var r = document.querySelectorAll("[data-source]"),
				n = {
					video: "video",
					audio: "audio",
					youtube: "youtube",
					vimeo: "vimeo"
				},
				o = window.location.hash.replace("#", ""),
				i = window.history && window.history.pushState;

			function a(e, t, r) {
				e && e.classList[r ? "add" : "remove"](t)
			}

			function s(e, i) {
				if (e in n && (i || e !== o) && (o.length || e !== n.video)) {
					switch (e) {
						case n.video:
							t.source = {
								type: "video",
								title: "View From A Blue Moon",
								sources: [{
									src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
									type: "video/mp4",
									size: 576
								}, {
									src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
									type: "video/mp4",
									size: 720
								}, {
									src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
									type: "video/mp4",
									size: 1080
								}, {
									src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4",
									type: "video/mp4",
									size: 1440
								}],
								poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
								tracks: [{
									label: "English",
									srclang: "en",
									src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
									default: !0
								}, {
									label: "French",
									srclang: "fr",
									src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
								}]
							};
							break;
						case n.audio:
							t.source = {
								type: "audio",
								title: "Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",
								sources: [{
									src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
									type: "audio/mp3"
								}, {
									src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",
									type: "audio/ogg"
								}]
							};
							break;
						case n.youtube:
							t.source = {
								type: "video",
								sources: [{
									src: "https://youtube.com/watch?v=bTqVqk7FSmY",
									provider: "youtube"
								}]
							};
							break;
						case n.vimeo:
							t.source = {
								type: "video",
								sources: [{
									src: "https://vimeo.com/76979871",
									provider: "vimeo"
								}]
							}
					}
					o = e, Array.from(r).forEach(function(e) {
						return a(e.parentElement, "active", !1)
					}), a(document.querySelector('[data-source="'.concat(e, '"]')), "active", !0), Array.from(document.querySelectorAll(".plyr__cite")).forEach(function(e) {
						e.setAttribute("hidden", "")
					}), document.querySelector(".plyr__cite--".concat(e)).removeAttribute("hidden")
				}
			}
			if (Array.from(r).forEach(function(e) {
					e.addEventListener("click", function() {
						var t = e.getAttribute("data-source");
						s(t), i && window.history.pushState({
							type: t
						}, "", "#".concat(t))
					})
				}), window.addEventListener("popstate", function(e) {
					e.state && "type" in e.state && s(e.state.type)
				}), i) {
				var c = !o.length;
				c && (o = n.video), o in n && window.history.replaceState({
					type: o
				}, "", c ? "" : "#".concat(o)), o !== n.video && s(o, !0)
			}
		})
	}), Ne.prod && qe.config("https://d4ad9866ad834437a4754e23937071e4@sentry.io/305555").install(), Ne.prod && (Be = window, Me = document, Le = "script", He = "ga", Be.GoogleAnalyticsObject = He, Be.ga = Be.ga || function() {
		(Be.ga.q = Be.ga.q || []).push(arguments)
	}, Be.ga.l = 1 * new Date, Ie = Me.createElement(Le), Pe = Me.getElementsByTagName(Le)[0], Ie.async = 1, Ie.src = "https://www.google-analytics.com/analytics.js", Pe.parentNode.insertBefore(Ie, Pe), window.ga("create", "UA-40881672-11", "auto"), window.ga("send", "pageview"))
}();
//# sourceMappingURL=demo.js.map