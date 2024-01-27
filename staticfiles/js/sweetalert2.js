!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Sweetalert2 = e()
}(this, (function () {
    "use strict";

    function t(t) {
        var e = function (t, e) {
            if ("object" != typeof t || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var o = n.call(t, e || "default");
                if ("object" != typeof o) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof e ? e : String(e)
    }

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(t)
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, n) {
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, t(i.key), i)
        }
    }

    function i(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
    }

    function r(t) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, r(t)
    }

    function a(t, e) {
        return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        }, a(t, e)
    }

    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
        } catch (t) {
            return !1
        }
    }

    function u(t, e, n) {
        return u = c() ? Reflect.construct.bind() : function (t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new (Function.bind.apply(t, o));
            return n && a(i, n.prototype), i
        }, u.apply(null, arguments)
    }

    function s(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }

    function l() {
        return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, n) {
            var o = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t));) ;
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
            }
        }, l.apply(this, arguments)
    }

    function d(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var o, i, r, a, c = [], u = !0, s = !1;
                try {
                    if (r = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        u = !1
                    } else for (; !(u = (o = r.call(n)).done) && (c.push(o.value), c.length !== e); u = !0) ;
                } catch (t) {
                    s = !0, i = t
                } finally {
                    try {
                        if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
                    } finally {
                        if (s) throw i
                    }
                }
                return c
            }
        }(t, e) || p(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(t) {
        return function (t) {
            if (Array.isArray(t)) return m(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || p(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(t, e) {
        if (t) {
            if ("string" == typeof t) return m(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0
        }
    }

    function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o
    }

    function h(t, e) {
        return function (t, e) {
            if (e.get) return e.get.call(t);
            return e.value
        }(t, g(t, e, "get"))
    }

    function v(t, e, n) {
        return function (t, e, n) {
            if (e.set) e.set.call(t, n); else {
                if (!e.writable) throw new TypeError("attempted to set read only private field");
                e.value = n
            }
        }(t, g(t, e, "set"), n), n
    }

    function g(t, e, n) {
        if (!e.has(t)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return e.get(t)
    }

    function b(t, e, n) {
        !function (t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t, e), e.set(t, n)
    }

    var y = {}, w = function (t) {
            return new Promise((function (e) {
                if (!t) return e();
                var n = window.scrollX, o = window.scrollY;
                y.restoreFocusTimeout = setTimeout((function () {
                    y.previousActiveElement instanceof HTMLElement ? (y.previousActiveElement.focus(), y.previousActiveElement = null) : document.body && document.body.focus(), e()
                }), 100), window.scrollTo(n, o)
            }))
        }, C = "swal2-",
        A = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"].reduce((function (t, e) {
            return t[e] = C + e, t
        }), {}), k = ["success", "warning", "info", "question", "error"].reduce((function (t, e) {
            return t[e] = C + e, t
        }), {}), E = "SweetAlert2:", P = function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }, B = function (t) {
            console.warn("".concat(E, " ").concat("object" === e(t) ? t.join(" ") : t))
        }, T = function (t) {
            console.error("".concat(E, " ").concat(t))
        }, x = [], S = function (t, e) {
            var n;
            n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), x.includes(n) || (x.push(n), B(n))
        }, O = function (t) {
            return "function" == typeof t ? t() : t
        }, L = function (t) {
            return t && "function" == typeof t.toPromise
        }, j = function (t) {
            return L(t) ? t.toPromise() : Promise.resolve(t)
        }, M = function (t) {
            return t && Promise.resolve(t) === t
        }, I = function () {
            return document.body.querySelector(".".concat(A.container))
        }, H = function (t) {
            var e = I();
            return e ? e.querySelector(t) : null
        }, D = function (t) {
            return H(".".concat(t))
        }, q = function () {
            return D(A.popup)
        }, V = function () {
            return D(A.icon)
        }, R = function () {
            return D(A.title)
        }, _ = function () {
            return D(A["html-container"])
        }, N = function () {
            return D(A.image)
        }, F = function () {
            return D(A["progress-steps"])
        }, U = function () {
            return D(A["validation-message"])
        }, z = function () {
            return H(".".concat(A.actions, " .").concat(A.confirm))
        }, W = function () {
            return H(".".concat(A.actions, " .").concat(A.cancel))
        }, K = function () {
            return H(".".concat(A.actions, " .").concat(A.deny))
        }, Y = function () {
            return H(".".concat(A.loader))
        }, Z = function () {
            return D(A.actions)
        }, $ = function () {
            return D(A.footer)
        }, J = function () {
            return D(A["timer-progress-bar"])
        }, X = function () {
            return D(A.close)
        }, G = function () {
            var t = q();
            if (!t) return [];
            var e = t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),
                n = Array.from(e).sort((function (t, e) {
                    var n = parseInt(t.getAttribute("tabindex") || "0"),
                        o = parseInt(e.getAttribute("tabindex") || "0");
                    return n > o ? 1 : n < o ? -1 : 0
                })),
                o = t.querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'),
                i = Array.from(o).filter((function (t) {
                    return "-1" !== t.getAttribute("tabindex")
                }));
            return f(new Set(n.concat(i))).filter((function (t) {
                return vt(t)
            }))
        }, Q = function () {
            return nt(document.body, A.shown) && !nt(document.body, A["toast-shown"]) && !nt(document.body, A["no-backdrop"])
        }, tt = function () {
            var t = q();
            return !!t && nt(t, A.toast)
        }, et = function (t, e) {
            if (t.textContent = "", e) {
                var n = (new DOMParser).parseFromString(e, "text/html"), o = n.querySelector("head");
                o && Array.from(o.childNodes).forEach((function (e) {
                    t.appendChild(e)
                }));
                var i = n.querySelector("body");
                i && Array.from(i.childNodes).forEach((function (e) {
                    e instanceof HTMLVideoElement || e instanceof HTMLAudioElement ? t.appendChild(e.cloneNode(!0)) : t.appendChild(e)
                }))
            }
        }, nt = function (t, e) {
            if (!e) return !1;
            for (var n = e.split(/\s+/), o = 0; o < n.length; o++) if (!t.classList.contains(n[o])) return !1;
            return !0
        }, ot = function (t, n, o) {
            if (function (t, e) {
                Array.from(t.classList).forEach((function (n) {
                    Object.values(A).includes(n) || Object.values(k).includes(n) || Object.values(e.showClass || {}).includes(n) || t.classList.remove(n)
                }))
            }(t, n), n.customClass && n.customClass[o]) {
                if ("string" != typeof n.customClass[o] && !n.customClass[o].forEach) return void B("Invalid type of customClass.".concat(o, '! Expected string or iterable object, got "').concat(e(n.customClass[o]), '"'));
                ct(t, n.customClass[o])
            }
        }, it = function (t, e) {
            if (!e) return null;
            switch (e) {
                case"select":
                case"textarea":
                case"file":
                    return t.querySelector(".".concat(A.popup, " > .").concat(A[e]));
                case"checkbox":
                    return t.querySelector(".".concat(A.popup, " > .").concat(A.checkbox, " input"));
                case"radio":
                    return t.querySelector(".".concat(A.popup, " > .").concat(A.radio, " input:checked")) || t.querySelector(".".concat(A.popup, " > .").concat(A.radio, " input:first-child"));
                case"range":
                    return t.querySelector(".".concat(A.popup, " > .").concat(A.range, " input"));
                default:
                    return t.querySelector(".".concat(A.popup, " > .").concat(A.input))
            }
        }, rt = function (t) {
            if (t.focus(), "file" !== t.type) {
                var e = t.value;
                t.value = "", t.value = e
            }
        }, at = function (t, e, n) {
            t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach((function (e) {
                Array.isArray(t) ? t.forEach((function (t) {
                    n ? t.classList.add(e) : t.classList.remove(e)
                })) : n ? t.classList.add(e) : t.classList.remove(e)
            })))
        }, ct = function (t, e) {
            at(t, e, !0)
        }, ut = function (t, e) {
            at(t, e, !1)
        }, st = function (t, e) {
            for (var n = Array.from(t.children), o = 0; o < n.length; o++) {
                var i = n[o];
                if (i instanceof HTMLElement && nt(i, e)) return i
            }
        }, lt = function (t, e, n) {
            n === "".concat(parseInt(n)) && (n = parseInt(n)), n || 0 === parseInt(n) ? t.style.setProperty(e, "number" == typeof n ? "".concat(n, "px") : n) : t.style.removeProperty(e)
        }, dt = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
            t && (t.style.display = e)
        }, ft = function (t) {
            t && (t.style.display = "none")
        }, pt = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
            t && new MutationObserver((function () {
                ht(t, t.innerHTML, e)
            })).observe(t, {childList: !0, subtree: !0})
        }, mt = function (t, e, n, o) {
            var i = t.querySelector(e);
            i && i.style.setProperty(n, o)
        }, ht = function (t, e) {
            e ? dt(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "flex") : ft(t)
        }, vt = function (t) {
            return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
        }, gt = function (t) {
            return !!(t.scrollHeight > t.clientHeight)
        }, bt = function (t) {
            var e = window.getComputedStyle(t), n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
                o = parseFloat(e.getPropertyValue("transition-duration") || "0");
            return n > 0 || o > 0
        }, yt = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = J();
            n && vt(n) && (e && (n.style.transition = "none", n.style.width = "100%"), setTimeout((function () {
                n.style.transition = "width ".concat(t / 1e3, "s linear"), n.style.width = "0%"
            }), 10))
        }, wt = function () {
            return "undefined" == typeof window || "undefined" == typeof document
        },
        Ct = '\n <div aria-labelledby="'.concat(A.title, '" aria-describedby="').concat(A["html-container"], '" class="').concat(A.popup, '" tabindex="-1">\n   <button type="button" class="').concat(A.close, '"></button>\n   <ul class="').concat(A["progress-steps"], '"></ul>\n   <div class="').concat(A.icon, '"></div>\n   <img class="').concat(A.image, '" />\n   <h2 class="').concat(A.title, '" id="').concat(A.title, '"></h2>\n   <div class="').concat(A["html-container"], '" id="').concat(A["html-container"], '"></div>\n   <input class="').concat(A.input, '" id="').concat(A.input, '" />\n   <input type="file" class="').concat(A.file, '" />\n   <div class="').concat(A.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(A.select, '" id="').concat(A.select, '"></select>\n   <div class="').concat(A.radio, '"></div>\n   <label class="').concat(A.checkbox, '">\n     <input type="checkbox" id="').concat(A.checkbox, '" />\n     <span class="').concat(A.label, '"></span>\n   </label>\n   <textarea class="').concat(A.textarea, '" id="').concat(A.textarea, '"></textarea>\n   <div class="').concat(A["validation-message"], '" id="').concat(A["validation-message"], '"></div>\n   <div class="').concat(A.actions, '">\n     <div class="').concat(A.loader, '"></div>\n     <button type="button" class="').concat(A.confirm, '"></button>\n     <button type="button" class="').concat(A.deny, '"></button>\n     <button type="button" class="').concat(A.cancel, '"></button>\n   </div>\n   <div class="').concat(A.footer, '"></div>\n   <div class="').concat(A["timer-progress-bar-container"], '">\n     <div class="').concat(A["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        At = function () {
            y.currentInstance.resetValidationMessage()
        }, kt = function (t) {
            var e,
                n = !!(e = I()) && (e.remove(), ut([document.documentElement, document.body], [A["no-backdrop"], A["toast-shown"], A["has-column"]]), !0);
            if (wt()) T("SweetAlert2 requires document to initialize"); else {
                var o = document.createElement("div");
                o.className = A.container, n && ct(o, A["no-transition"]), et(o, Ct);
                var i, r, a, c, u, s, l, d, f, p = "string" == typeof (i = t.target) ? document.querySelector(i) : i;
                p.appendChild(o), function (t) {
                    var e = q();
                    e.setAttribute("role", t.toast ? "alert" : "dialog"), e.setAttribute("aria-live", t.toast ? "polite" : "assertive"), t.toast || e.setAttribute("aria-modal", "true")
                }(t), function (t) {
                    "rtl" === window.getComputedStyle(t).direction && ct(I(), A.rtl)
                }(p), r = q(), a = st(r, A.input), c = st(r, A.file), u = r.querySelector(".".concat(A.range, " input")), s = r.querySelector(".".concat(A.range, " output")), l = st(r, A.select), d = r.querySelector(".".concat(A.checkbox, " input")), f = st(r, A.textarea), a.oninput = At, c.onchange = At, l.onchange = At, d.onchange = At, f.oninput = At, u.oninput = function () {
                    At(), s.value = u.value
                }, u.onchange = function () {
                    At(), s.value = u.value
                }
            }
        }, Et = function (t, n) {
            t instanceof HTMLElement ? n.appendChild(t) : "object" === e(t) ? Pt(t, n) : t && et(n, t)
        }, Pt = function (t, e) {
            t.jquery ? Bt(e, t) : et(e, t.toString())
        }, Bt = function (t, e) {
            if (t.textContent = "", 0 in e) for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0)); else t.appendChild(e.cloneNode(!0))
        }, Tt = function () {
            if (wt()) return !1;
            var t = document.createElement("div");
            return void 0 !== t.style.webkitAnimation ? "webkitAnimationEnd" : void 0 !== t.style.animation && "animationend"
        }(), xt = function (t, e) {
            var n = Z(), o = Y();
            n && o && (e.showConfirmButton || e.showDenyButton || e.showCancelButton ? dt(n) : ft(n), ot(n, e, "actions"), function (t, e, n) {
                var o = z(), i = K(), r = W();
                if (!o || !i || !r) return;
                St(o, "confirm", n), St(i, "deny", n), St(r, "cancel", n), function (t, e, n, o) {
                    if (!o.buttonsStyling) return void ut([t, e, n], A.styled);
                    ct([t, e, n], A.styled), o.confirmButtonColor && (t.style.backgroundColor = o.confirmButtonColor, ct(t, A["default-outline"]));
                    o.denyButtonColor && (e.style.backgroundColor = o.denyButtonColor, ct(e, A["default-outline"]));
                    o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, ct(n, A["default-outline"]))
                }(o, i, r, n), n.reverseButtons && (n.toast ? (t.insertBefore(r, o), t.insertBefore(i, o)) : (t.insertBefore(r, e), t.insertBefore(i, e), t.insertBefore(o, e)))
            }(n, o, e), et(o, e.loaderHtml || ""), ot(o, e, "loader"))
        };

    function St(t, e, n) {
        var o = P(e);
        ht(t, n["show".concat(o, "Button")], "inline-block"), et(t, n["".concat(e, "ButtonText")] || ""), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")] || ""), t.className = A[e], ot(t, n, "".concat(e, "Button"))
    }

    var Ot = function (t, e) {
        var n = I();
        n && (!function (t, e) {
            "string" == typeof e ? t.style.background = e : e || ct([document.documentElement, document.body], A["no-backdrop"])
        }(n, e.backdrop), function (t, e) {
            if (!e) return;
            e in A ? ct(t, A[e]) : (B('The "position" parameter is not valid, defaulting to "center"'), ct(t, A.center))
        }(n, e.position), function (t, e) {
            if (!e) return;
            ct(t, A["grow-".concat(e)])
        }(n, e.grow), ot(n, e, "container"))
    };
    var Lt = {innerParams: new WeakMap, domCache: new WeakMap},
        jt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], Mt = function (t) {
            if (t.input) if (_t[t.input]) {
                var e = Vt(t.input), n = _t[t.input](e, t);
                dt(e), t.inputAutoFocus && setTimeout((function () {
                    rt(n)
                }))
            } else T("Unexpected type of input! Expected ".concat(Object.keys(_t).join(" | "), ', got "').concat(t.input, '"'))
        }, It = function (t, e) {
            var n = it(q(), t);
            if (n) for (var o in function (t) {
                for (var e = 0; e < t.attributes.length; e++) {
                    var n = t.attributes[e].name;
                    ["id", "type", "value", "style"].includes(n) || t.removeAttribute(n)
                }
            }(n), e) n.setAttribute(o, e[o])
        }, Ht = function (t) {
            var n = Vt(t.input);
            "object" === e(t.customClass) && ct(n, t.customClass.input)
        }, Dt = function (t, e) {
            t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
        }, qt = function (t, n, o) {
            if (o.inputLabel) {
                var i = document.createElement("label"), r = A["input-label"];
                i.setAttribute("for", t.id), i.className = r, "object" === e(o.customClass) && ct(i, o.customClass.inputLabel), i.innerText = o.inputLabel, n.insertAdjacentElement("beforebegin", i)
            }
        }, Vt = function (t) {
            return st(q(), A[t] || A.input)
        }, Rt = function (t, n) {
            ["string", "number"].includes(e(n)) ? t.value = "".concat(n) : M(n) || B('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(e(n), '"'))
        }, _t = {};
    _t.text = _t.email = _t.password = _t.number = _t.tel = _t.url = _t.search = _t.date = _t["datetime-local"] = _t.time = _t.week = _t.month = function (t, e) {
        return Rt(t, e.inputValue), qt(t, t, e), Dt(t, e), t.type = e.input, t
    }, _t.file = function (t, e) {
        return qt(t, t, e), Dt(t, e), t
    }, _t.range = function (t, e) {
        var n = t.querySelector("input"), o = t.querySelector("output");
        return Rt(n, e.inputValue), n.type = e.input, Rt(o, e.inputValue), qt(n, t, e), t
    }, _t.select = function (t, e) {
        if (t.textContent = "", e.inputPlaceholder) {
            var n = document.createElement("option");
            et(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)
        }
        return qt(t, t, e), t
    }, _t.radio = function (t) {
        return t.textContent = "", t
    }, _t.checkbox = function (t, e) {
        var n = it(q(), "checkbox");
        n.value = "1", n.checked = Boolean(e.inputValue);
        var o = t.querySelector("span");
        return et(o, e.inputPlaceholder), n
    }, _t.textarea = function (t, e) {
        Rt(t, e.inputValue), Dt(t, e), qt(t, t, e);
        return setTimeout((function () {
            if ("MutationObserver" in window) {
                var n = parseInt(window.getComputedStyle(q()).width);
                new MutationObserver((function () {
                    if (document.body.contains(t)) {
                        var o,
                            i = t.offsetWidth + (o = t, parseInt(window.getComputedStyle(o).marginLeft) + parseInt(window.getComputedStyle(o).marginRight));
                        i > n ? q().style.width = "".concat(i, "px") : lt(q(), "width", e.width)
                    }
                })).observe(t, {attributes: !0, attributeFilter: ["style"]})
            }
        })), t
    };
    var Nt = function (t, e) {
            var n = _();
            n && (pt(n), ot(n, e, "htmlContainer"), e.html ? (Et(e.html, n), dt(n, "block")) : e.text ? (n.textContent = e.text, dt(n, "block")) : ft(n), function (t, e) {
                var n = q();
                if (n) {
                    var o = Lt.innerParams.get(t), i = !o || e.input !== o.input;
                    jt.forEach((function (t) {
                        var o = st(n, A[t]);
                        o && (It(t, e.inputAttributes), o.className = A[t], i && ft(o))
                    })), e.input && (i && Mt(e), Ht(e))
                }
            }(t, e))
        }, Ft = function (t, e) {
            for (var n = 0, o = Object.entries(k); n < o.length; n++) {
                var i = d(o[n], 2), r = i[0], a = i[1];
                e.icon !== r && ut(t, a)
            }
            ct(t, e.icon && k[e.icon]), Wt(t, e), Ut(), ot(t, e, "icon")
        }, Ut = function () {
            var t = q();
            if (t) for (var e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e
        }, zt = function (t, e) {
            if (e.icon || e.iconHtml) {
                var n = t.innerHTML, o = "";
                if (e.iconHtml) o = Kt(e.iconHtml); else if ("success" === e.icon) o = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n', n = n.replace(/ style=".*?"/g, ""); else if ("error" === e.icon) o = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n'; else if (e.icon) {
                    o = Kt({question: "?", warning: "!", info: "i"}[e.icon])
                }
                n.trim() !== o.trim() && et(t, o)
            }
        }, Wt = function (t, e) {
            if (e.iconColor) {
                t.style.color = e.iconColor, t.style.borderColor = e.iconColor;
                for (var n = 0, o = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; n < o.length; n++) {
                    mt(t, o[n], "backgroundColor", e.iconColor)
                }
                mt(t, ".swal2-success-ring", "borderColor", e.iconColor)
            }
        }, Kt = function (t) {
            return '<div class="'.concat(A["icon-content"], '">').concat(t, "</div>")
        }, Yt = function (t, e) {
            var n = e.showClass || {};
            t.className = "".concat(A.popup, " ").concat(vt(t) ? n.popup : ""), e.toast ? (ct([document.documentElement, document.body], A["toast-shown"]), ct(t, A.toast)) : ct(t, A.modal), ot(t, e, "popup"), "string" == typeof e.customClass && ct(t, e.customClass), e.icon && ct(t, A["icon-".concat(e.icon)])
        }, Zt = function (t) {
            var e = document.createElement("li");
            return ct(e, A["progress-step"]), et(e, t), e
        }, $t = function (t) {
            var e = document.createElement("li");
            return ct(e, A["progress-step-line"]), t.progressStepsDistance && lt(e, "width", t.progressStepsDistance), e
        }, Jt = function (t, e) {
            !function (t, e) {
                var n = I(), o = q();
                if (n && o) {
                    if (e.toast) {
                        lt(n, "width", e.width), o.style.width = "100%";
                        var i = Y();
                        i && o.insertBefore(i, V())
                    } else lt(o, "width", e.width);
                    lt(o, "padding", e.padding), e.color && (o.style.color = e.color), e.background && (o.style.background = e.background), ft(U()), Yt(o, e)
                }
            }(0, e), Ot(0, e), function (t, e) {
                var n = F();
                if (n) {
                    var o = e.progressSteps, i = e.currentProgressStep;
                    o && 0 !== o.length && void 0 !== i ? (dt(n), n.textContent = "", i >= o.length && B("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.forEach((function (t, r) {
                        var a = Zt(t);
                        if (n.appendChild(a), r === i && ct(a, A["active-progress-step"]), r !== o.length - 1) {
                            var c = $t(e);
                            n.appendChild(c)
                        }
                    }))) : ft(n)
                }
            }(0, e), function (t, e) {
                var n = Lt.innerParams.get(t), o = V();
                if (o) {
                    if (n && e.icon === n.icon) return zt(o, e), void Ft(o, e);
                    if (e.icon || e.iconHtml) {
                        if (e.icon && -1 === Object.keys(k).indexOf(e.icon)) return T('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon, '"')), void ft(o);
                        dt(o), zt(o, e), Ft(o, e), ct(o, e.showClass && e.showClass.icon)
                    } else ft(o)
                }
            }(t, e), function (t, e) {
                var n = N();
                n && (e.imageUrl ? (dt(n, ""), n.setAttribute("src", e.imageUrl), n.setAttribute("alt", e.imageAlt || ""), lt(n, "width", e.imageWidth), lt(n, "height", e.imageHeight), n.className = A.image, ot(n, e, "image")) : ft(n))
            }(0, e), function (t, e) {
                var n = R();
                n && (pt(n), ht(n, e.title || e.titleText, "block"), e.title && Et(e.title, n), e.titleText && (n.innerText = e.titleText), ot(n, e, "title"))
            }(0, e), function (t, e) {
                var n = X();
                n && (et(n, e.closeButtonHtml || ""), ot(n, e, "closeButton"), ht(n, e.showCloseButton), n.setAttribute("aria-label", e.closeButtonAriaLabel || ""))
            }(0, e), Nt(t, e), xt(0, e), function (t, e) {
                var n = $();
                n && (pt(n), ht(n, e.footer, "block"), e.footer && Et(e.footer, n), ot(n, e, "footer"))
            }(0, e);
            var n = q();
            "function" == typeof e.didRender && n && e.didRender(n)
        }, Xt = function () {
            var t;
            return null === (t = z()) || void 0 === t ? void 0 : t.click()
        }, Gt = Object.freeze({cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer"}),
        Qt = function (t) {
            t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {capture: t.keydownListenerCapture}), t.keydownHandlerAdded = !1)
        }, te = function (t, e) {
            var n, o = G();
            if (o.length) return (t += e) === o.length ? t = 0 : -1 === t && (t = o.length - 1), void o[t].focus();
            null === (n = q()) || void 0 === n || n.focus()
        }, ee = ["ArrowRight", "ArrowDown"], ne = ["ArrowLeft", "ArrowUp"], oe = function (t, e, n) {
            t && (e.isComposing || 229 === e.keyCode || (t.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? ie(e, t) : "Tab" === e.key ? re(e) : [].concat(ee, ne).includes(e.key) ? ae(e.key) : "Escape" === e.key && ce(e, t, n)))
        }, ie = function (t, e) {
            if (O(e.allowEnterKey)) {
                var n = it(q(), e.input);
                if (t.target && n && t.target instanceof HTMLElement && t.target.outerHTML === n.outerHTML) {
                    if (["textarea", "file"].includes(e.input)) return;
                    Xt(), t.preventDefault()
                }
            }
        }, re = function (t) {
            for (var e = t.target, n = G(), o = -1, i = 0; i < n.length; i++) if (e === n[i]) {
                o = i;
                break
            }
            t.shiftKey ? te(o, -1) : te(o, 1), t.stopPropagation(), t.preventDefault()
        }, ae = function (t) {
            var e = Z(), n = z(), o = K(), i = W();
            if (e && n && o && i) {
                var r = [n, o, i];
                if (!(document.activeElement instanceof HTMLElement) || r.includes(document.activeElement)) {
                    var a = ee.includes(t) ? "nextElementSibling" : "previousElementSibling",
                        c = document.activeElement;
                    if (c) {
                        for (var u = 0; u < e.children.length; u++) {
                            if (!(c = c[a])) return;
                            if (c instanceof HTMLButtonElement && vt(c)) break
                        }
                        c instanceof HTMLButtonElement && c.focus()
                    }
                }
            }
        }, ce = function (t, e, n) {
            O(e.allowEscapeKey) && (t.preventDefault(), n(Gt.esc))
        }, ue = {swalPromiseResolve: new WeakMap, swalPromiseReject: new WeakMap}, se = function () {
            Array.from(document.body.children).forEach((function (t) {
                t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden") || ""), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
            }))
        }, le = "undefined" != typeof window && !!window.GestureEvent, de = function () {
            var t, e = I();
            e && (e.ontouchstart = function (e) {
                t = fe(e)
            }, e.ontouchmove = function (e) {
                t && (e.preventDefault(), e.stopPropagation())
            })
        }, fe = function (t) {
            var e = t.target, n = I(), o = _();
            return !(!n || !o) && (!pe(t) && !me(t) && (e === n || !gt(n) && e instanceof HTMLElement && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName && (!gt(o) || !o.contains(e))))
        }, pe = function (t) {
            return t.touches && t.touches.length && "stylus" === t.touches[0].touchType
        }, me = function (t) {
            return t.touches && t.touches.length > 1
        }, he = null, ve = function (t) {
            null === he && (document.body.scrollHeight > window.innerHeight || "scroll" === t) && (he = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(he + function () {
                var t = document.createElement("div");
                t.className = A["scrollbar-measure"], document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }(), "px"))
        };

    function ge(t, e, n, o) {
        tt() ? Pe(t, o) : (w(n).then((function () {
            return Pe(t, o)
        })), Qt(y)), le ? (e.setAttribute("style", "display:none !important"), e.removeAttribute("class"), e.innerHTML = "") : e.remove(), Q() && (null !== he && (document.body.style.paddingRight = "".concat(he, "px"), he = null), function () {
            if (nt(document.body, A.iosfix)) {
                var t = parseInt(document.body.style.top, 10);
                ut(document.body, A.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t
            }
        }(), se()), ut([document.documentElement, document.body], [A.shown, A["height-auto"], A["no-backdrop"], A["toast-shown"]])
    }

    function be(t) {
        t = Ae(t);
        var e = ue.swalPromiseResolve.get(this), n = ye(this);
        this.isAwaitingPromise ? t.isDismissed || (Ce(this), e(t)) : n && e(t)
    }

    var ye = function (t) {
        var e = q();
        if (!e) return !1;
        var n = Lt.innerParams.get(t);
        if (!n || nt(e, n.hideClass.popup)) return !1;
        ut(e, n.showClass.popup), ct(e, n.hideClass.popup);
        var o = I();
        return ut(o, n.showClass.backdrop), ct(o, n.hideClass.backdrop), ke(t, e, n), !0
    };

    function we(t) {
        var e = ue.swalPromiseReject.get(this);
        Ce(this), e && e(t)
    }

    var Ce = function (t) {
        t.isAwaitingPromise && (delete t.isAwaitingPromise, Lt.innerParams.get(t) || t._destroy())
    }, Ae = function (t) {
        return void 0 === t ? {isConfirmed: !1, isDenied: !1, isDismissed: !0} : Object.assign({
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !1
        }, t)
    }, ke = function (t, e, n) {
        var o = I(), i = Tt && bt(e);
        "function" == typeof n.willClose && n.willClose(e), i ? Ee(t, e, o, n.returnFocus, n.didClose) : ge(t, o, n.returnFocus, n.didClose)
    }, Ee = function (t, e, n, o, i) {
        Tt && (y.swalCloseEventFinishedCallback = ge.bind(null, t, n, o, i), e.addEventListener(Tt, (function (t) {
            t.target === e && (y.swalCloseEventFinishedCallback(), delete y.swalCloseEventFinishedCallback)
        })))
    }, Pe = function (t, e) {
        setTimeout((function () {
            "function" == typeof e && e.bind(t.params)(), t._destroy && t._destroy()
        }))
    }, Be = function (t) {
        var e = q();
        if (e || new ao, e = q()) {
            var n = Y();
            tt() ? ft(V()) : Te(e, t), dt(n), e.setAttribute("data-loading", "true"), e.setAttribute("aria-busy", "true"), e.focus()
        }
    }, Te = function (t, e) {
        var n = Z(), o = Y();
        n && o && (!e && vt(z()) && (e = z()), dt(n), e && (ft(e), o.setAttribute("data-button-to-replace", e.className), n.insertBefore(o, e)), ct([t, n], A.loading))
    }, xe = function (t) {
        return t.checked ? 1 : 0
    }, Se = function (t) {
        return t.checked ? t.value : null
    }, Oe = function (t) {
        return t.files && t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null
    }, Le = function (t, n) {
        var o = q();
        if (o) {
            var i = function (t) {
                "select" === n.input ? function (t, e, n) {
                    var o = st(t, A.select);
                    if (!o) return;
                    var i = function (t, e, o) {
                        var i = document.createElement("option");
                        i.value = o, et(i, e), i.selected = Ie(o, n.inputValue), t.appendChild(i)
                    };
                    e.forEach((function (t) {
                        var e = t[0], n = t[1];
                        if (Array.isArray(n)) {
                            var r = document.createElement("optgroup");
                            r.label = e, r.disabled = !1, o.appendChild(r), n.forEach((function (t) {
                                return i(r, t[1], t[0])
                            }))
                        } else i(o, n, e)
                    })), o.focus()
                }(o, Me(t), n) : "radio" === n.input && function (t, e, n) {
                    var o = st(t, A.radio);
                    if (!o) return;
                    e.forEach((function (t) {
                        var e = t[0], i = t[1], r = document.createElement("input"),
                            a = document.createElement("label");
                        r.type = "radio", r.name = A.radio, r.value = e, Ie(e, n.inputValue) && (r.checked = !0);
                        var c = document.createElement("span");
                        et(c, i), c.className = A.label, a.appendChild(r), a.appendChild(c), o.appendChild(a)
                    }));
                    var i = o.querySelectorAll("input");
                    i.length && i[0].focus()
                }(o, Me(t), n)
            };
            L(n.inputOptions) || M(n.inputOptions) ? (Be(z()), j(n.inputOptions).then((function (e) {
                t.hideLoading(), i(e)
            }))) : "object" === e(n.inputOptions) ? i(n.inputOptions) : T("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(e(n.inputOptions)))
        }
    }, je = function (t, e) {
        var n = t.getInput();
        n && (ft(n), j(e.inputValue).then((function (o) {
            n.value = "number" === e.input ? "".concat(parseFloat(o) || 0) : "".concat(o), dt(n), n.focus(), t.hideLoading()
        })).catch((function (e) {
            T("Error in inputValue promise: ".concat(e)), n.value = "", dt(n), n.focus(), t.hideLoading()
        })))
    };
    var Me = function t(n) {
        var o = [];
        return n instanceof Map ? n.forEach((function (n, i) {
            var r = n;
            "object" === e(r) && (r = t(r)), o.push([i, r])
        })) : Object.keys(n).forEach((function (i) {
            var r = n[i];
            "object" === e(r) && (r = t(r)), o.push([i, r])
        })), o
    }, Ie = function (t, e) {
        return !!e && e.toString() === t.toString()
    }, He = void 0, De = function (t, e) {
        var n = Lt.innerParams.get(t);
        if (n.input) {
            var o = t.getInput(), i = function (t, e) {
                var n = t.getInput();
                if (!n) return null;
                switch (e.input) {
                    case"checkbox":
                        return xe(n);
                    case"radio":
                        return Se(n);
                    case"file":
                        return Oe(n);
                    default:
                        return e.inputAutoTrim ? n.value.trim() : n.value
                }
            }(t, n);
            n.inputValidator ? qe(t, i, e) : o && !o.checkValidity() ? (t.enableButtons(), t.showValidationMessage(n.validationMessage)) : "deny" === e ? Ve(t, i) : Ne(t, i)
        } else T('The "input" parameter is needed to be set when using returnInputValueOn'.concat(P(e)))
    }, qe = function (t, e, n) {
        var o = Lt.innerParams.get(t);
        t.disableInput(), Promise.resolve().then((function () {
            return j(o.inputValidator(e, o.validationMessage))
        })).then((function (o) {
            t.enableButtons(), t.enableInput(), o ? t.showValidationMessage(o) : "deny" === n ? Ve(t, e) : Ne(t, e)
        }))
    }, Ve = function (t, e) {
        var n = Lt.innerParams.get(t || He);
        (n.showLoaderOnDeny && Be(K()), n.preDeny) ? (t.isAwaitingPromise = !0, Promise.resolve().then((function () {
            return j(n.preDeny(e, n.validationMessage))
        })).then((function (n) {
            !1 === n ? (t.hideLoading(), Ce(t)) : t.close({isDenied: !0, value: void 0 === n ? e : n})
        })).catch((function (e) {
            return _e(t || He, e)
        }))) : t.close({isDenied: !0, value: e})
    }, Re = function (t, e) {
        t.close({isConfirmed: !0, value: e})
    }, _e = function (t, e) {
        t.rejectPromise(e)
    }, Ne = function (t, e) {
        var n = Lt.innerParams.get(t || He);
        (n.showLoaderOnConfirm && Be(), n.preConfirm) ? (t.resetValidationMessage(), t.isAwaitingPromise = !0, Promise.resolve().then((function () {
            return j(n.preConfirm(e, n.validationMessage))
        })).then((function (n) {
            vt(U()) || !1 === n ? (t.hideLoading(), Ce(t)) : Re(t, void 0 === n ? e : n)
        })).catch((function (e) {
            return _e(t || He, e)
        }))) : Re(t, e)
    };

    function Fe() {
        var t = Lt.innerParams.get(this);
        if (t) {
            var e = Lt.domCache.get(this);
            ft(e.loader), tt() ? t.icon && dt(V()) : Ue(e), ut([e.popup, e.actions], A.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.denyButton.disabled = !1, e.cancelButton.disabled = !1
        }
    }

    var Ue = function (t) {
        var e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));
        e.length ? dt(e[0], "inline-block") : vt(z()) || vt(K()) || vt(W()) || ft(t.actions)
    };

    function ze() {
        var t = Lt.innerParams.get(this), e = Lt.domCache.get(this);
        return e ? it(e.popup, t.input) : null
    }

    function We(t, e, n) {
        var o = Lt.domCache.get(t);
        e.forEach((function (t) {
            o[t].disabled = n
        }))
    }

    function Ke(t, e) {
        var n = q();
        if (n && t) if ("radio" === t.type) for (var o = n.querySelectorAll('[name="'.concat(A.radio, '"]')), i = 0; i < o.length; i++) o[i].disabled = e; else t.disabled = e
    }

    function Ye() {
        We(this, ["confirmButton", "denyButton", "cancelButton"], !1)
    }

    function Ze() {
        We(this, ["confirmButton", "denyButton", "cancelButton"], !0)
    }

    function $e() {
        Ke(this.getInput(), !1)
    }

    function Je() {
        Ke(this.getInput(), !0)
    }

    function Xe(t) {
        var e = Lt.domCache.get(this), n = Lt.innerParams.get(this);
        et(e.validationMessage, t), e.validationMessage.className = A["validation-message"], n.customClass && n.customClass.validationMessage && ct(e.validationMessage, n.customClass.validationMessage), dt(e.validationMessage);
        var o = this.getInput();
        o && (o.setAttribute("aria-invalid", "true"), o.setAttribute("aria-describedby", A["validation-message"]), rt(o), ct(o, A.inputerror))
    }

    function Ge() {
        var t = Lt.domCache.get(this);
        t.validationMessage && ft(t.validationMessage);
        var e = this.getInput();
        e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedby"), ut(e, A.inputerror))
    }

    var Qe = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconColor: void 0,
            iconHtml: void 0,
            template: void 0,
            toast: !1,
            animation: !0,
            showClass: {popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show"},
            hideClass: {popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide"},
            customClass: {},
            target: "body",
            color: void 0,
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showDenyButton: !1,
            showCancelButton: !1,
            preConfirm: void 0,
            preDeny: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            denyButtonText: "No",
            denyButtonAriaLabel: "",
            denyButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusDeny: !1,
            focusCancel: !1,
            returnFocus: !0,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            loaderHtml: "",
            showLoaderOnConfirm: !1,
            showLoaderOnDeny: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputLabel: "",
            inputValue: "",
            inputOptions: {},
            inputAutoFocus: !0,
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            returnInputValueOnDeny: !1,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            willOpen: void 0,
            didOpen: void 0,
            didRender: void 0,
            willClose: void 0,
            didClose: void 0,
            didDestroy: void 0,
            scrollbarPadding: !0
        },
        tn = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
        en = {},
        nn = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
        on = function (t) {
            return Object.prototype.hasOwnProperty.call(Qe, t)
        }, rn = function (t) {
            return -1 !== tn.indexOf(t)
        }, an = function (t) {
            return en[t]
        }, cn = function (t) {
            on(t) || B('Unknown parameter "'.concat(t, '"'))
        }, un = function (t) {
            nn.includes(t) && B('The parameter "'.concat(t, '" is incompatible with toasts'))
        }, sn = function (t) {
            var e = an(t);
            e && S(t, e)
        };

    function ln(t) {
        var e = q(), n = Lt.innerParams.get(this);
        if (e && !nt(e, n.hideClass.popup)) {
            var o = dn(t), i = Object.assign({}, n, o);
            Jt(this, i), Lt.innerParams.set(this, i), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, t),
                    writable: !1,
                    enumerable: !0
                }
            })
        } else B("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.")
    }

    var dn = function (t) {
        var e = {};
        return Object.keys(t).forEach((function (n) {
            rn(n) ? e[n] = t[n] : B("Invalid parameter to update: ".concat(n))
        })), e
    };

    function fn() {
        var t = Lt.domCache.get(this), e = Lt.innerParams.get(this);
        e ? (t.popup && y.swalCloseEventFinishedCallback && (y.swalCloseEventFinishedCallback(), delete y.swalCloseEventFinishedCallback), "function" == typeof e.didDestroy && e.didDestroy(), pn(this)) : mn(this)
    }

    var pn = function (t) {
        mn(t), delete t.params, delete y.keydownHandler, delete y.keydownTarget, delete y.currentInstance
    }, mn = function (t) {
        t.isAwaitingPromise ? (hn(Lt, t), t.isAwaitingPromise = !0) : (hn(ue, t), hn(Lt, t), delete t.isAwaitingPromise, delete t.disableButtons, delete t.enableButtons, delete t.getInput, delete t.disableInput, delete t.enableInput, delete t.hideLoading, delete t.disableLoading, delete t.showValidationMessage, delete t.resetValidationMessage, delete t.close, delete t.closePopup, delete t.closeModal, delete t.closeToast, delete t.rejectPromise, delete t.update, delete t._destroy)
    }, hn = function (t, e) {
        for (var n in t) t[n].delete(e)
    }, vn = Object.freeze({
        __proto__: null,
        _destroy: fn,
        close: be,
        closeModal: be,
        closePopup: be,
        closeToast: be,
        disableButtons: Ze,
        disableInput: Je,
        disableLoading: Fe,
        enableButtons: Ye,
        enableInput: $e,
        getInput: ze,
        handleAwaitingPromise: Ce,
        hideLoading: Fe,
        rejectPromise: we,
        resetValidationMessage: Ge,
        showValidationMessage: Xe,
        update: ln
    }), gn = function (t, e, n) {
        e.popup.onclick = function () {
            t && (bn(t) || t.timer || t.input) || n(Gt.close)
        }
    }, bn = function (t) {
        return !!(t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton)
    }, yn = !1, wn = function (t) {
        t.popup.onmousedown = function () {
            t.container.onmouseup = function (e) {
                t.container.onmouseup = function () {
                }, e.target === t.container && (yn = !0)
            }
        }
    }, Cn = function (t) {
        t.container.onmousedown = function () {
            t.popup.onmouseup = function (e) {
                t.popup.onmouseup = function () {
                }, (e.target === t.popup || e.target instanceof HTMLElement && t.popup.contains(e.target)) && (yn = !0)
            }
        }
    }, An = function (t, e, n) {
        e.container.onclick = function (o) {
            yn ? yn = !1 : o.target === e.container && O(t.allowOutsideClick) && n(Gt.backdrop)
        }
    }, kn = function (t) {
        return t instanceof Element || function (t) {
            return "object" === e(t) && t.jquery
        }(t)
    };
    var En = function () {
        if (y.timeout) return function () {
            var t = J();
            if (t) {
                var e = parseInt(window.getComputedStyle(t).width);
                t.style.removeProperty("transition"), t.style.width = "100%";
                var n = e / parseInt(window.getComputedStyle(t).width) * 100;
                t.style.width = "".concat(n, "%")
            }
        }(), y.timeout.stop()
    }, Pn = function () {
        if (y.timeout) {
            var t = y.timeout.start();
            return yt(t), t
        }
    }, Bn = !1, Tn = {};
    var xn, Sn = function (t) {
        for (var e = t.target; e && e !== document; e = e.parentNode) for (var n in Tn) {
            var o = e.getAttribute(n);
            if (o) return void Tn[n].fire({template: o})
        }
    }, On = Object.freeze({
        __proto__: null,
        argsToParams: function (t) {
            var n = {};
            return "object" !== e(t[0]) || kn(t[0]) ? ["title", "html", "icon"].forEach((function (o, i) {
                var r = t[i];
                "string" == typeof r || kn(r) ? n[o] = r : void 0 !== r && T("Unexpected type of ".concat(o, '! Expected "string" or "Element", got ').concat(e(r)))
            })) : Object.assign(n, t[0]), n
        },
        bindClickHandler: function () {
            Tn[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-swal-template"] = this, Bn || (document.body.addEventListener("click", Sn), Bn = !0)
        },
        clickCancel: function () {
            var t;
            return null === (t = W()) || void 0 === t ? void 0 : t.click()
        },
        clickConfirm: Xt,
        clickDeny: function () {
            var t;
            return null === (t = K()) || void 0 === t ? void 0 : t.click()
        },
        enableLoading: Be,
        fire: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return u(this, e)
        },
        getActions: Z,
        getCancelButton: W,
        getCloseButton: X,
        getConfirmButton: z,
        getContainer: I,
        getDenyButton: K,
        getFocusableElements: G,
        getFooter: $,
        getHtmlContainer: _,
        getIcon: V,
        getIconContent: function () {
            return D(A["icon-content"])
        },
        getImage: N,
        getInputLabel: function () {
            return D(A["input-label"])
        },
        getLoader: Y,
        getPopup: q,
        getProgressSteps: F,
        getTimerLeft: function () {
            return y.timeout && y.timeout.getTimerLeft()
        },
        getTimerProgressBar: J,
        getTitle: R,
        getValidationMessage: U,
        increaseTimer: function (t) {
            if (y.timeout) {
                var e = y.timeout.increase(t);
                return yt(e, !0), e
            }
        },
        isDeprecatedParameter: an,
        isLoading: function () {
            var t = q();
            return !!t && t.hasAttribute("data-loading")
        },
        isTimerRunning: function () {
            return !(!y.timeout || !y.timeout.isRunning())
        },
        isUpdatableParameter: rn,
        isValidParameter: on,
        isVisible: function () {
            return vt(q())
        },
        mixin: function (t) {
            var e = function (e) {
                !function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {writable: !1}), e && a(t, e)
                }(f, e);
                var o, u, d = (o = f, u = c(), function () {
                    var t, e = r(o);
                    if (u) {
                        var n = r(this).constructor;
                        t = Reflect.construct(e, arguments, n)
                    } else t = e.apply(this, arguments);
                    return s(this, t)
                });

                function f() {
                    return n(this, f), d.apply(this, arguments)
                }

                return i(f, [{
                    key: "_main", value: function (e, n) {
                        return l(r(f.prototype), "_main", this).call(this, e, Object.assign({}, t, n))
                    }
                }]), f
            }(this);
            return e
        },
        resumeTimer: Pn,
        showLoading: Be,
        stopTimer: En,
        toggleTimer: function () {
            var t = y.timeout;
            return t && (t.running ? En() : Pn())
        }
    }), Ln = function () {
        function t(e, o) {
            n(this, t), this.callback = e, this.remaining = o, this.running = !1, this.start()
        }

        return i(t, [{
            key: "start", value: function () {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
        }, {
            key: "stop", value: function () {
                return this.started && this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= (new Date).getTime() - this.started.getTime()), this.remaining
            }
        }, {
            key: "increase", value: function (t) {
                var e = this.running;
                return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
            }
        }, {
            key: "getTimerLeft", value: function () {
                return this.running && (this.stop(), this.start()), this.remaining
            }
        }, {
            key: "isRunning", value: function () {
                return this.running
            }
        }]), t
    }(), jn = ["swal-title", "swal-html", "swal-footer"], Mn = function (t) {
        var n = {};
        return Array.from(t.querySelectorAll("swal-param")).forEach((function (t) {
            Nn(t, ["name", "value"]);
            var o = t.getAttribute("name"), i = t.getAttribute("value");
            "boolean" == typeof Qe[o] ? n[o] = "false" !== i : "object" === e(Qe[o]) ? n[o] = JSON.parse(i) : n[o] = i
        })), n
    }, In = function (t) {
        var e = {};
        return Array.from(t.querySelectorAll("swal-function-param")).forEach((function (t) {
            var n = t.getAttribute("name"), o = t.getAttribute("value");
            e[n] = new Function("return ".concat(o))()
        })), e
    }, Hn = function (t) {
        var e = {};
        return Array.from(t.querySelectorAll("swal-button")).forEach((function (t) {
            Nn(t, ["type", "color", "aria-label"]);
            var n = t.getAttribute("type");
            e["".concat(n, "ButtonText")] = t.innerHTML, e["show".concat(P(n), "Button")] = !0, t.hasAttribute("color") && (e["".concat(n, "ButtonColor")] = t.getAttribute("color")), t.hasAttribute("aria-label") && (e["".concat(n, "ButtonAriaLabel")] = t.getAttribute("aria-label"))
        })), e
    }, Dn = function (t) {
        var e = {}, n = t.querySelector("swal-image");
        return n && (Nn(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (e.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (e.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (e.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (e.imageAlt = n.getAttribute("alt"))), e
    }, qn = function (t) {
        var e = {}, n = t.querySelector("swal-icon");
        return n && (Nn(n, ["type", "color"]), n.hasAttribute("type") && (e.icon = n.getAttribute("type")), n.hasAttribute("color") && (e.iconColor = n.getAttribute("color")), e.iconHtml = n.innerHTML), e
    }, Vn = function (t) {
        var e = {}, n = t.querySelector("swal-input");
        n && (Nn(n, ["type", "label", "placeholder", "value"]), e.input = n.getAttribute("type") || "text", n.hasAttribute("label") && (e.inputLabel = n.getAttribute("label")), n.hasAttribute("placeholder") && (e.inputPlaceholder = n.getAttribute("placeholder")), n.hasAttribute("value") && (e.inputValue = n.getAttribute("value")));
        var o = Array.from(t.querySelectorAll("swal-input-option"));
        return o.length && (e.inputOptions = {}, o.forEach((function (t) {
            Nn(t, ["value"]);
            var n = t.getAttribute("value"), o = t.innerHTML;
            e.inputOptions[n] = o
        }))), e
    }, Rn = function (t, e) {
        var n = {};
        for (var o in e) {
            var i = e[o], r = t.querySelector(i);
            r && (Nn(r, []), n[i.replace(/^swal-/, "")] = r.innerHTML.trim())
        }
        return n
    }, _n = function (t) {
        var e = jn.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
        Array.from(t.children).forEach((function (t) {
            var n = t.tagName.toLowerCase();
            e.includes(n) || B("Unrecognized element <".concat(n, ">"))
        }))
    }, Nn = function (t, e) {
        Array.from(t.attributes).forEach((function (n) {
            -1 === e.indexOf(n.name) && B(['Unrecognized attribute "'.concat(n.name, '" on <').concat(t.tagName.toLowerCase(), ">."), "".concat(e.length ? "Allowed attributes are: ".concat(e.join(", ")) : "To set the value, use HTML within the element.")])
        }))
    }, Fn = function (t) {
        var e = I(), n = q();
        "function" == typeof t.willOpen && t.willOpen(n);
        var o = window.getComputedStyle(document.body).overflowY;
        Kn(e, n, t), setTimeout((function () {
            zn(e, n)
        }), 10), Q() && (Wn(e, t.scrollbarPadding, o), Array.from(document.body.children).forEach((function (t) {
            t === I() || t.contains(I()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden") || ""), t.setAttribute("aria-hidden", "true"))
        }))), tt() || y.previousActiveElement || (y.previousActiveElement = document.activeElement), "function" == typeof t.didOpen && setTimeout((function () {
            return t.didOpen(n)
        })), ut(e, A["no-transition"])
    }, Un = function t(e) {
        var n = q();
        if (e.target === n && Tt) {
            var o = I();
            n.removeEventListener(Tt, t), o.style.overflowY = "auto"
        }
    }, zn = function (t, e) {
        Tt && bt(e) ? (t.style.overflowY = "hidden", e.addEventListener(Tt, Un)) : t.style.overflowY = "auto"
    }, Wn = function (t, e, n) {
        !function () {
            if (le && !nt(document.body, A.iosfix)) {
                var t = document.body.scrollTop;
                document.body.style.top = "".concat(-1 * t, "px"), ct(document.body, A.iosfix), de()
            }
        }(), e && "hidden" !== n && ve(n), setTimeout((function () {
            t.scrollTop = 0
        }))
    }, Kn = function (t, e, n) {
        ct(t, n.showClass.backdrop), n.animation ? (e.style.setProperty("opacity", "0", "important"), dt(e, "grid"), setTimeout((function () {
            ct(e, n.showClass.popup), e.style.removeProperty("opacity")
        }), 10)) : dt(e, "grid"), ct([document.documentElement, document.body], A.shown), n.heightAuto && n.backdrop && !n.toast && ct([document.documentElement, document.body], A["height-auto"])
    }, Yn = {
        email: function (t, e) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
        }, url: function (t, e) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
        }
    };

    function Zn(t) {
        !function (t) {
            t.inputValidator || ("email" === t.input && (t.inputValidator = Yn.email), "url" === t.input && (t.inputValidator = Yn.url))
        }(t), t.showLoaderOnConfirm && !t.preConfirm && B("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), function (t) {
            (!t.target || "string" == typeof t.target && !document.querySelector(t.target) || "string" != typeof t.target && !t.target.appendChild) && (B('Target parameter is not valid, defaulting to "body"'), t.target = "body")
        }(t), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), kt(t)
    }

    var $n = new WeakMap, Jn = function () {
        function t() {
            if (n(this, t), b(this, $n, {writable: !0, value: void 0}), "undefined" != typeof window) {
                xn = this;
                for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
                var r = Object.freeze(this.constructor.argsToParams(o));
                this.params = r, this.isAwaitingPromise = !1, v(this, $n, this._main(xn.params))
            }
        }

        return i(t, [{
            key: "_main", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (function (t) {
                    for (var e in !1 === t.backdrop && t.allowOutsideClick && B('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), t) cn(e), t.toast && un(e), sn(e)
                }(Object.assign({}, e, t)), y.currentInstance) {
                    var n = ue.swalPromiseResolve.get(y.currentInstance), o = y.currentInstance.isAwaitingPromise;
                    y.currentInstance._destroy(), o || n({isDismissed: !0}), Q() && se()
                }
                y.currentInstance = xn;
                var i = Gn(t, e);
                Zn(i), Object.freeze(i), y.timeout && (y.timeout.stop(), delete y.timeout), clearTimeout(y.restoreFocusTimeout);
                var r = Qn(xn);
                return Jt(xn, i), Lt.innerParams.set(xn, i), Xn(xn, r, i)
            }
        }, {
            key: "then", value: function (t) {
                return h(this, $n).then(t)
            }
        }, {
            key: "finally", value: function (t) {
                return h(this, $n).finally(t)
            }
        }]), t
    }(), Xn = function (t, e, n) {
        return new Promise((function (o, i) {
            var r = function (e) {
                t.close({isDismissed: !0, dismiss: e})
            };
            ue.swalPromiseResolve.set(t, o), ue.swalPromiseReject.set(t, i), e.confirmButton.onclick = function () {
                !function (t) {
                    var e = Lt.innerParams.get(t);
                    t.disableButtons(), e.input ? De(t, "confirm") : Ne(t, !0)
                }(t)
            }, e.denyButton.onclick = function () {
                !function (t) {
                    var e = Lt.innerParams.get(t);
                    t.disableButtons(), e.returnInputValueOnDeny ? De(t, "deny") : Ve(t, !1)
                }(t)
            }, e.cancelButton.onclick = function () {
                !function (t, e) {
                    t.disableButtons(), e(Gt.cancel)
                }(t, r)
            }, e.closeButton.onclick = function () {
                r(Gt.close)
            }, function (t, e, n) {
                t.toast ? gn(t, e, n) : (wn(e), Cn(e), An(t, e, n))
            }(n, e, r), function (t, e, n) {
                Qt(t), e.toast || (t.keydownHandler = function (t) {
                    return oe(e, t, n)
                }, t.keydownTarget = e.keydownListenerCapture ? window : q(), t.keydownListenerCapture = e.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {capture: t.keydownListenerCapture}), t.keydownHandlerAdded = !0)
            }(y, n, r), function (t, e) {
                "select" === e.input || "radio" === e.input ? Le(t, e) : ["text", "email", "number", "tel", "textarea"].some((function (t) {
                    return t === e.input
                })) && (L(e.inputValue) || M(e.inputValue)) && (Be(z()), je(t, e))
            }(t, n), Fn(n), to(y, n, r), eo(e, n), setTimeout((function () {
                e.container.scrollTop = 0
            }))
        }))
    }, Gn = function (t, e) {
        var n = function (t) {
            var e = "string" == typeof t.template ? document.querySelector(t.template) : t.template;
            if (!e) return {};
            var n = e.content;
            return _n(n), Object.assign(Mn(n), In(n), Hn(n), Dn(n), qn(n), Vn(n), Rn(n, jn))
        }(t), o = Object.assign({}, Qe, e, n, t);
        return o.showClass = Object.assign({}, Qe.showClass, o.showClass), o.hideClass = Object.assign({}, Qe.hideClass, o.hideClass), !1 === o.animation && (o.showClass = {backdrop: "swal2-noanimation"}, o.hideClass = {}), o
    }, Qn = function (t) {
        var e = {
            popup: q(),
            container: I(),
            actions: Z(),
            confirmButton: z(),
            denyButton: K(),
            cancelButton: W(),
            loader: Y(),
            closeButton: X(),
            validationMessage: U(),
            progressSteps: F()
        };
        return Lt.domCache.set(t, e), e
    }, to = function (t, e, n) {
        var o = J();
        ft(o), e.timer && (t.timeout = new Ln((function () {
            n("timer"), delete t.timeout
        }), e.timer), e.timerProgressBar && (dt(o), ot(o, e, "timerProgressBar"), setTimeout((function () {
            t.timeout && t.timeout.running && yt(e.timer)
        }))))
    }, eo = function (t, e) {
        e.toast || (O(e.allowEnterKey) ? no(t, e) || te(-1, 1) : oo())
    }, no = function (t, e) {
        return e.focusDeny && vt(t.denyButton) ? (t.denyButton.focus(), !0) : e.focusCancel && vt(t.cancelButton) ? (t.cancelButton.focus(), !0) : !(!e.focusConfirm || !vt(t.confirmButton)) && (t.confirmButton.focus(), !0)
    }, oo = function () {
        document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
    };
    if ("undefined" != typeof window && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
        var io = new Date, ro = localStorage.getItem("swal-initiation");
        ro ? (io.getTime() - Date.parse(ro)) / 864e5 > 3 && setTimeout((function () {
            document.body.style.pointerEvents = "none";
            var t = document.createElement("audio");
            t.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3", t.loop = !0, document.body.appendChild(t), setTimeout((function () {
                t.play().catch((function () {
                }))
            }), 2500)
        }), 500) : localStorage.setItem("swal-initiation", "".concat(io))
    }
    Jn.prototype.disableButtons = Ze, Jn.prototype.enableButtons = Ye, Jn.prototype.getInput = ze, Jn.prototype.disableInput = Je, Jn.prototype.enableInput = $e, Jn.prototype.hideLoading = Fe, Jn.prototype.disableLoading = Fe, Jn.prototype.showValidationMessage = Xe, Jn.prototype.resetValidationMessage = Ge, Jn.prototype.close = be, Jn.prototype.closePopup = be, Jn.prototype.closeModal = be, Jn.prototype.closeToast = be, Jn.prototype.rejectPromise = we, Jn.prototype.update = ln, Jn.prototype._destroy = fn, Object.assign(Jn, On), Object.keys(vn).forEach((function (t) {
        Jn[t] = function () {
            var e;
            return xn && xn[t] ? (e = xn)[t].apply(e, arguments) : null
        }
    })), Jn.DismissReason = Gt, Jn.version = "11.10.3";
    var ao = Jn;
    return ao.default = ao, ao
})), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function (e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t); else try {
        n.innerHTML = t
    } catch (e) {
        n.innerText = t
    }
}(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");