window.Modernizr = function(t, e, i) {
        function n(t) { f.cssText = t }

        function s(t, e) { return typeof t === e }

        function r(t, e) { return !!~("" + t).indexOf(e) }

        function o(t, e) { for (var n in t) { var s = t[n]; if (!r(s, "-") && f[s] !== i) return "pfx" != e || s } return !1 }



        function l(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + g.join(n + " ") + n).split(" ");
            return s(e, "string") || s(e, "undefined") ? o(r, e) : a(r = (t + " " + v.join(n + " ") + n).split(" "), e, i)
        }
        var c, d, h = {},
            u = e.documentElement,
            p = e.createElement("modernizr"),
            f = p.style,
            m = "Webkit Moz O ms",
            g = m.split(" "),
            v = m.toLowerCase().split(" "),
            y = {},
            b = [],
            w = b.slice,
            x = {}.hasOwnProperty;
        for (var _ in d = s(x, "undefined") || s(x.call, "undefined") ? function(t, e) { return e in t && s(t.constructor.prototype[e], "undefined") } : function(t, e) { return x.call(t, e) },
                Function.prototype.bind || (Function.prototype.bind = function(t) {
                    var e = this;
                    if ("function" != typeof e) throw new TypeError;
                    var i = w.call(arguments, 1),
                        n = function() {
                            if (this instanceof n) {
                                var s = function() {};
                                s.prototype = e.prototype;
                                var r = new s,
                                    o = e.apply(r, i.concat(w.call(arguments)));
                                return Object(o) === o ? o : r
                            }
                            return e.apply(t, i.concat(w.call(arguments)))
                        };
                    return n
                }), y.csstransitions = function() { return l("transition") }, y) d(y, _) && (c = _.toLowerCase(), h[c] = y[_](), b.push((h[c] ? "" : "no-") + c));
        return h.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) d(t, n) && h.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), h[t] !== i) return h;
                    e = "function" == typeof e ? e() : e, u.className += " " + (e ? "" : "no-") + t, h[t] = e
                }
                return h
            }, n(""), p = null,
            function(t, e) {
                function i() { var t = f.elements; return "string" == typeof t ? t.split(" ") : t }

                function n(t) { var e = p[t[h]]; return e || (e = {}, u++, t[h] = u, p[u] = e), e }

                function s(t, i, s) { return i || (i = e), a ? i.createElement(t) : (s || (s = n(i)), (r = s.cache[t] ? s.cache[t].cloneNode() : d.test(t) ? (s.cache[t] = s.createElem(t)).cloneNode() : s.createElem(t)).canHaveChildren && !c.test(t) ? s.frag.appendChild(r) : r); var r }

                function r(t) {
                    t || (t = e);
                    var r = n(t);
                    return f.shivCSS && !o && !r.hasCSS && (r.hasCSS = !! function(t, e) {
                        var i = t.createElement("p"),
                            n = t.getElementsByTagName("head")[0] || t.documentElement;
                        return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                    }(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), a || function(t, e) { e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) { return f.shivMethods ? s(i, t, e) : e.createElem(i) }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(t) { return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")' }) + ");return n}")(f, e.frag) }(t, r), t
                }
                var o, a, l = t.html5 || {},
                    c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    u = 0,
                    p = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", o = "hidden" in t, a = 1 == t.childNodes.length || function() { e.createElement("a"); var t = e.createDocumentFragment(); return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement }()
                    } catch (t) { o = !0, a = !0 }
                }();
                var f = { elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: !1 !== l.shivCSS, supportsUnknownElements: a, shivMethods: !1 !== l.shivMethods, type: "default", shivDocument: r, createElement: s, createDocumentFragment: function(t, s) { if (t || (t = e), a) return t.createDocumentFragment(); for (var r = (s = s || n(t)).frag.cloneNode(), o = 0, l = i(), c = l.length; o < c; o++) r.createElement(l[o]); return r } };
                t.html5 = f, r(e)
            }(this, e), h._version = "2.6.2", h._domPrefixes = v, h._cssomPrefixes = g, h.testProp = function(t) { return o([t]) }, h.testAllProps = l, u.className = u.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + b.join(" "), h
    }(0, this.document),
    function(t, e, i) {
        function n(t) { return "[object Function]" == g.call(t) }

        function s(t) { return "string" == typeof t }

        function r() {}

        function o(t) { return !t || "loaded" == t || "complete" == t || "uninitialized" == t }

        function a() {
            var t = v.shift();
            y = 1, t ? t.t ? f(function() {
                ("c" == t.t ? u.injectCss : u.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : y = 0
        }

        function l(t, i, n, s, r, l, c) {
            function d(e) {
                if (!p && o(h.readyState) && (b.r = p = 1, !y && a(), h.onload = h.onreadystatechange = null, e))
                    for (var n in "img" != t && f(function() { x.removeChild(h) }, 50), T[i]) T[i].hasOwnProperty(n) && T[i][n].onload()
            }
            c = c || u.errorTimeout;
            var h = e.createElement(t),
                p = 0,
                g = 0,
                b = { t: n, s: i, e: r, a: l, x: c };
            1 === T[i] && (g = 1, T[i] = []), "object" == t ? h.data = i : (h.src = i, h.type = t), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() { d.call(this, g) }, v.splice(s, 0, b), "img" != t && (g || 2 === T[i] ? (x.insertBefore(h, w ? null : m), f(d, c)) : T[i].push(h))
        }

        function c(t, e, i, n, r) { return y = 0, e = e || "j", s(t) ? l("c" == e ? S : _, t, e, this.i++, i, n, r) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this }

        function d() { var t = u; return t.loader = { load: c, i: 0 }, t }
        var h, u, p = e.documentElement,
            f = t.setTimeout,
            m = e.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            w = b && !!e.createRange().compareNode,
            x = w ? p : m.parentNode,
            _ = (p = t.opera && "[object Opera]" == g.call(t.opera), p = !!e.attachEvent && !p, b ? "object" : p ? "script" : "img"),
            S = p ? "script" : _,
            k = Array.isArray || function(t) { return "[object Array]" == g.call(t) },
            E = [],
            T = {},
            C = { timeout: function(t, e) { return e.length && (t.timeout = e[0]), t } };
        (u = function(t) {
            function e(t, e, s, r, o) {
                var a = function(t) {
                        t = t.split("!");
                        var e, i, n, s = E.length,
                            r = t.pop(),
                            o = t.length;
                        for (r = { url: r, origUrl: r, prefixes: t }, i = 0; i < o; i++) n = t[i].split("="), (e = C[n.shift()]) && (r = e(r, n));
                        for (i = 0; i < s; i++) r = E[i](r);
                        return r
                    }(t),
                    l = a.autoCallback;
                a.url.split(".").pop().split("?").shift(), a.bypass || (e && (e = n(e) ? e : e[t] || e[r] || e[t.split("/").pop().split("?")[0]]), a.instead ? a.instead(t, e, s, r, o) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : i, a.noexec, a.attrs, a.timeout), (n(e) || n(l)) && s.load(function() { d(), e && e(a.origUrl, o, r), l && l(a.origUrl, o, r), T[a.url] = 2 })))
            }

            function o(t, i) {
                function o(t, r) {
                    if (t) {
                        if (s(t)) r || (h = function() {
                            var t = [].slice.call(arguments);
                            u.apply(this, t), p()
                        }), e(t, h, i, 0, c);
                        else if (Object(t) === t)
                            for (l in a = function() { var e, i = 0; for (e in t) t.hasOwnProperty(e) && i++; return i }(), t) t.hasOwnProperty(l) && (!r && !--a && (n(h) ? h = function() {
                                var t = [].slice.call(arguments);
                                u.apply(this, t), p()
                            } : h[l] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), p()
                                }
                            }(u[l])), e(t[l], h, i, l, c))
                    } else !r && p()
                }
                var a, l, c = !!t.test,
                    d = t.load || t.both,
                    h = t.callback || r,
                    u = h,
                    p = t.complete || r;
                o(c ? t.yep : t.nope, !!d), d && o(d)
            }
            var a, l, c = this.yepnope.loader;
            if (s(t)) e(t, 0, c, 0);
            else if (k(t))
                for (a = 0; a < t.length; a++) s(l = t[a]) ? e(l, 0, c, 0) : k(l) ? u(l) : Object(l) === l && o(l, c);
            else Object(t) === t && o(t, c)
        }).addPrefix = function(t, e) { C[t] = e }, u.addFilter = function(t) { E.push(t) }, u.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", h = function() { e.removeEventListener("DOMContentLoaded", h, 0), e.readyState = "complete" }, 0)), t.yepnope = d(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, n, s, l, c) {
            var d, h, p = e.createElement("script");
            s = s || u.errorTimeout;
            for (h in p.src = t, n) p.setAttribute(h, n[h]);
            i = c ? a : i || r, p.onreadystatechange = p.onload = function() {!d && o(p.readyState) && (d = 1, i(), p.onload = p.onreadystatechange = null) }, f(function() { d || (d = 1, i(1)) }, s), l ? p.onload() : m.parentNode.insertBefore(p, m)
        }, t.yepnope.injectCss = function(t, i, n, s, o, l) {
            var c;
            s = e.createElement("link"), i = l ? a : i || r;
            for (c in s.href = t, s.rel = "stylesheet", s.type = "text/css", n) s.setAttribute(c, n[c]);
            o || (m.parentNode.insertBefore(s, m), f(i, 0))
        }
    }(this, document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) }, jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, s) { return jQuery.easing[jQuery.easing.def](t, e, i, n, s) },
        easeInQuad: function(t, e, i, n, s) { return n * (e /= s) * e + i },
        easeOutQuad: function(t, e, i, n, s) { return -n * (e /= s) * (e - 2) + i },
        easeInOutQuad: function(t, e, i, n, s) { return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i },
        easeInCubic: function(t, e, i, n, s) { return n * (e /= s) * e * e + i },
        easeOutCubic: function(t, e, i, n, s) { return n * ((e = e / s - 1) * e * e + 1) + i },
        easeInOutCubic: function(t, e, i, n, s) { return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i },
        easeInQuart: function(t, e, i, n, s) { return n * (e /= s) * e * e * e + i },
        easeOutQuart: function(t, e, i, n, s) { return -n * ((e = e / s - 1) * e * e * e - 1) + i },
        easeInOutQuart: function(t, e, i, n, s) { return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i },
        easeInQuint: function(t, e, i, n, s) { return n * (e /= s) * e * e * e * e + i },
        easeOutQuint: function(t, e, i, n, s) { return n * ((e = e / s - 1) * e * e * e * e + 1) + i },
        easeInOutQuint: function(t, e, i, n, s) { return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i },
        easeInSine: function(t, e, i, n, s) { return -n * Math.cos(e / s * (Math.PI / 2)) + n + i },
        easeOutSine: function(t, e, i, n, s) { return n * Math.sin(e / s * (Math.PI / 2)) + i },
        easeInOutSine: function(t, e, i, n, s) { return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i },
        easeInExpo: function(t, e, i, n, s) { return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i },
        easeOutExpo: function(t, e, i, n, s) { return e == s ? i + n : n * (1 - Math.pow(2, -10 * e / s)) + i },
        easeInOutExpo: function(t, e, i, n, s) { return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i },
        easeInCirc: function(t, e, i, n, s) { return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i },
        easeOutCirc: function(t, e, i, n, s) { return n * Math.sqrt(1 - (e = e / s - 1) * e) + i },
        easeInOutCirc: function(t, e, i, n, s) { return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i },
        easeInElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                o = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (o || (o = .3 * s), a < Math.abs(n)) {
                a = n;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(n / a);
            return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - r) * (2 * Math.PI) / o) + i
        },
        easeOutElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                o = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (o || (o = .3 * s), a < Math.abs(n)) {
                a = n;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * s - r) * (2 * Math.PI) / o) + n + i
        },
        easeInOutElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                o = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= s / 2)) return i + n;
            if (o || (o = s * (.3 * 1.5)), a < Math.abs(n)) {
                a = n;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(n / a);
            return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - r) * (2 * Math.PI) / o) * -.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - r) * (2 * Math.PI) / o) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, s, r) { return null == r && (r = 1.70158), n * (e /= s) * e * ((r + 1) * e - r) + i },
        easeOutBack: function(t, e, i, n, s, r) { return null == r && (r = 1.70158), n * ((e = e / s - 1) * e * ((r + 1) * e + r) + 1) + i },
        easeInOutBack: function(t, e, i, n, s, r) { return null == r && (r = 1.70158), (e /= s / 2) < 1 ? n / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + i : n / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + i },
        easeInBounce: function(t, e, i, n, s) { return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i },
        easeOutBounce: function(t, e, i, n, s) { return (e /= s) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i },
        easeInOutBounce: function(t, e, i, n, s) { return e < s / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i }
    }),
    function(t, e, i, n) {
        "use strict";

        function s(e, n) { if (this.el = e, this.$el = t(e), this.s = t.extend({}, r, n), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array."; return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in i.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = t(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(t(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this }
        var r = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !0, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1 };
        s.prototype.init = function() {
            var i = this;
            i.s.preload > i.$items.length && (i.s.preload = i.$items.length);
            var n = e.location.hash;
            n.indexOf("lg=" + this.s.galleryId) > 0 && (i.index = parseInt(n.split("&slide=")[1], 10), t("body").addClass("lg-from-hash"), t("body").hasClass("lg-on") || (setTimeout(function() { i.build(i.index) }), t("body").addClass("lg-on"))), i.s.dynamic ? (i.$el.trigger("onBeforeOpen.lg"), i.index = i.s.index || 0, t("body").hasClass("lg-on") || setTimeout(function() { i.build(i.index), t("body").addClass("lg-on") })) : i.$items.on("click.lgcustom", function(e) {
                try { e.preventDefault(), e.preventDefault() } catch (t) { e.returnValue = !1 }
                i.$el.trigger("onBeforeOpen.lg"), i.index = i.s.index || i.$items.index(this), t("body").hasClass("lg-on") || (i.build(i.index), t("body").addClass("lg-on"))
            })
        }, s.prototype.build = function(e) {
            var i = this;
            i.structure(), t.each(t.fn.lightGallery.modules, function(e) { i.modules[e] = new t.fn.lightGallery.modules[e](i.el) }), i.slide(e, !1, !1), i.s.keyPress && i.keyPress(), i.$items.length > 1 && (i.arrow(), setTimeout(function() { i.enableDrag(), i.enableSwipe() }, 50), i.s.mousewheel && i.mousewheel()), i.counter(), i.closeGallery(), i.$el.trigger("onAfterOpen.lg"), i.$outer.on("mousemove.lg click.lg touchstart.lg", function() { i.$outer.removeClass("lg-hide-items"), clearTimeout(i.hideBartimeout), i.hideBartimeout = setTimeout(function() { i.$outer.addClass("lg-hide-items") }, i.s.hideBarsDelay) })
        }, s.prototype.structure = function() {
            var i, n = "",
                s = "",
                r = 0,
                o = "",
                a = this;
            for (t("body").append('<div class="lg-backdrop"></div>'), t(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), r = 0; r < this.$items.length; r++) n += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (s = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div class="lg-sub-html"></div>'), i = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + n + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + s + o + "</div></div>", t("body").append(i), this.$outer = t(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), a.setTop(), t(e).on("resize.lg orientationchange.lg", function() { setTimeout(function() { a.setTop() }, 100) }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                var l = this.$outer.find(".lg-inner");
                l.css("transition-timing-function", this.s.cssEasing), l.css("transition-duration", this.s.speed + "ms")
            }
            t(".lg-backdrop").addClass("in"), setTimeout(function() { a.$outer.addClass("lg-visible") }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = t(e).scrollTop()
        }, s.prototype.setTop = function() {
            if ("100%" !== this.s.height) {
                var i = t(e).height(),
                    n = (i - parseInt(this.s.height, 10)) / 2,
                    s = this.$outer.find(".lg");
                i >= parseInt(this.s.height, 10) ? s.css("top", n + "px") : s.css("top", "0px")
            }
        }, s.prototype.doCss = function() {
            return !! function() {
                var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                    e = i.documentElement,
                    n = 0;
                for (n = 0; n < t.length; n++)
                    if (t[n] in e.style) return !0
            }()
        }, s.prototype.isVideo = function(t, e) {
            var i;
            if (i = this.s.dynamic ? this.s.dynamicEl[e].html : this.$items.eq(e).attr("data-html"), !t && i) return { html5: !0 };
            var n = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                s = t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                r = t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                o = t.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return n ? { youtube: n } : s ? { vimeo: s } : r ? { dailymotion: r } : o ? { vk: o } : void 0
        }, s.prototype.counter = function() { this.s.counter && t(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>") }, s.prototype.addHtml = function(e) {
            var i, n, s = null;
            if (this.s.dynamic ? this.s.dynamicEl[e].subHtmlUrl ? i = this.s.dynamicEl[e].subHtmlUrl : s = this.s.dynamicEl[e].subHtml : (n = this.$items.eq(e)).attr("data-sub-html-url") ? i = n.attr("data-sub-html-url") : (s = n.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !s && (s = n.attr("title") || n.find("img").first().attr("alt"))), !i)
                if (null != s) { var r = s.substring(0, 1); "." !== r && "#" !== r || (s = this.s.subHtmlSelectorRelative && !this.s.dynamic ? n.find(s).html() : t(s).html()) } else s = "";
                ".lg-sub-html" === this.s.appendSubHtmlTo ? i ? this.$outer.find(this.s.appendSubHtmlTo).load(i) : this.$outer.find(this.s.appendSubHtmlTo).html(s) : i ? this.$slide.eq(e).load(i) : this.$slide.eq(e).append(s), null != s && ("" === s ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [e])
        }, s.prototype.preload = function(t) {
            var e = 1,
                i = 1;
            for (e = 1; e <= this.s.preload && !(e >= this.$items.length - t); e++) this.loadContent(t + e, !1, 0);
            for (i = 1; i <= this.s.preload && !(t - i < 0); i++) this.loadContent(t - i, !1, 0)
        }, s.prototype.loadContent = function(i, n, s) {
            var r, o, a, l, c, d, h = this,
                u = !1,
                p = function(i) {
                    for (var n = [], s = [], r = 0; r < i.length; r++) { var a = i[r].split(" "); "" === a[0] && a.splice(0, 1), s.push(a[0]), n.push(a[1]) }
                    for (var l = t(e).width(), c = 0; c < n.length; c++)
                        if (parseInt(n[c], 10) > l) { o = s[c]; break }
                };
            if (h.s.dynamic) {
                if (h.s.dynamicEl[i].poster && (u = !0, a = h.s.dynamicEl[i].poster), d = h.s.dynamicEl[i].html, o = h.s.dynamicEl[i].src, h.s.dynamicEl[i].responsive) p(h.s.dynamicEl[i].responsive.split(","));
                l = h.s.dynamicEl[i].srcset, c = h.s.dynamicEl[i].sizes
            } else {
                if (h.$items.eq(i).attr("data-poster") && (u = !0, a = h.$items.eq(i).attr("data-poster")), d = h.$items.eq(i).attr("data-html"), o = h.$items.eq(i).attr("href") || h.$items.eq(i).attr("data-src"), h.$items.eq(i).attr("data-responsive")) p(h.$items.eq(i).attr("data-responsive").split(","));
                l = h.$items.eq(i).attr("data-srcset"), c = h.$items.eq(i).attr("data-sizes")
            }
            var f = !1;
            h.s.dynamic ? h.s.dynamicEl[i].iframe && (f = !0) : "true" === h.$items.eq(i).attr("data-iframe") && (f = !0);
            var m = h.isVideo(o, i);
            if (!h.$slide.eq(i).hasClass("lg-loaded")) {
                if (f) h.$slide.eq(i).prepend('<div class="lg-video-cont" style="max-width:' + h.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + o + '"  allowfullscreen="true"></iframe></div></div>');
                else if (u) {
                    var g;
                    g = m && m.youtube ? "lg-has-youtube" : m && m.vimeo ? "lg-has-vimeo" : "lg-has-html5", h.$slide.eq(i).prepend('<div class="lg-video-cont ' + g + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + a + '" /></div></div>')
                } else m ? (h.$slide.eq(i).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), h.$el.trigger("hasVideo.lg", [i, o, d])) : h.$slide.eq(i).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + o + '" /></div>');
                if (h.$el.trigger("onAferAppendSlide.lg", [i]), r = h.$slide.eq(i).find(".lg-object"), c && r.attr("sizes", c), l) { r.attr("srcset", l); try { picturefill({ elements: [r[0]] }) } catch (t) { console.error("Make sure you have included Picturefill version 2") } }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && h.addHtml(i), h.$slide.eq(i).addClass("lg-loaded")
            }
            h.$slide.eq(i).find(".lg-object").on("load.lg error.lg", function() {
                var e = 0;
                s && !t("body").hasClass("lg-from-hash") && (e = s), setTimeout(function() { h.$slide.eq(i).addClass("lg-complete"), h.$el.trigger("onSlideItemLoad.lg", [i, s || 0]) }, e)
            }), m && m.html5 && !u && h.$slide.eq(i).addClass("lg-complete"), !0 === n && (h.$slide.eq(i).hasClass("lg-complete") ? h.preload(i) : h.$slide.eq(i).find(".lg-object").on("load.lg error.lg", function() { h.preload(i) }))
        }, s.prototype.slide = function(e, i, n) {
            var s = this.$outer.find(".lg-current").index(),
                r = this;
            if (!r.lGalleryOn || s !== e) {
                var o = this.$slide.length,
                    a = r.lGalleryOn ? this.s.speed : 0,
                    l = !1,
                    c = !1;
                if (!r.lgBusy) {
                    var d;
                    if (this.s.download)(d = r.s.dynamic ? !1 !== r.s.dynamicEl[e].downloadUrl && (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src) : "false" !== r.$items.eq(e).attr("data-download-url") && (r.$items.eq(e).attr("data-download-url") || r.$items.eq(e).attr("href") || r.$items.eq(e).attr("data-src"))) ? (t("#lg-download").attr("href", d), r.$outer.removeClass("lg-hide-download")) : r.$outer.addClass("lg-hide-download");
                    if (this.$el.trigger("onBeforeSlide.lg", [s, e, i, n]), r.lgBusy = !0, clearTimeout(r.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() { r.addHtml(e) }, a), this.arrowDisable(e), i) {
                        var h = e - 1,
                            u = e + 1;
                        0 === e && s === o - 1 ? (u = 0, h = o - 1) : e === o - 1 && 0 === s && (u = 0, h = o - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), r.$slide.eq(h).addClass("lg-prev-slide"), r.$slide.eq(u).addClass("lg-next-slide"), r.$slide.eq(e).addClass("lg-current")
                    } else r.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), e < s ? (c = !0, 0 !== e || s !== o - 1 || n || (c = !1, l = !0)) : e > s && (l = !0, e !== o - 1 || 0 !== s || n || (c = !0, l = !1)), c ? (this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(s).addClass("lg-next-slide")) : l && (this.$slide.eq(e).addClass("lg-next-slide"), this.$slide.eq(s).addClass("lg-prev-slide")), setTimeout(function() { r.$slide.removeClass("lg-current"), r.$slide.eq(e).addClass("lg-current"), r.$outer.removeClass("lg-no-trans") }, 50);
                    r.lGalleryOn ? (setTimeout(function() { r.loadContent(e, !0, 0) }, this.s.speed + 50), setTimeout(function() { r.lgBusy = !1, r.$el.trigger("onAfterSlide.lg", [s, e, i, n]) }, this.s.speed)) : (r.loadContent(e, !0, r.s.backdropDuration), r.lgBusy = !1, r.$el.trigger("onAfterSlide.lg", [s, e, i, n])), r.lGalleryOn = !0, this.s.counter && t("#lg-counter-current").text(e + 1)
                }
            }
        }, s.prototype.goToNextSlide = function(t) {
            var e = this;
            e.lgBusy || (e.index + 1 < e.$slide.length ? (e.index++, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1)) : e.s.loop ? (e.index = 0, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1)) : e.s.slideEndAnimatoin && (e.$outer.addClass("lg-right-end"), setTimeout(function() { e.$outer.removeClass("lg-right-end") }, 400)))
        }, s.prototype.goToPrevSlide = function(t) {
            var e = this;
            e.lgBusy || (e.index > 0 ? (e.index--, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1)) : e.s.loop ? (e.index = e.$items.length - 1, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1)) : e.s.slideEndAnimatoin && (e.$outer.addClass("lg-left-end"), setTimeout(function() { e.$outer.removeClass("lg-left-end") }, 400)))
        }, s.prototype.keyPress = function() {
            var i = this;
            this.$items.length > 1 && t(e).on("keyup.lg", function(t) { i.$items.length > 1 && (37 === t.keyCode && (t.preventDefault(), i.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), i.goToNextSlide())) }), t(e).on("keydown.lg", function(t) {!0 === i.s.escKey && 27 === t.keyCode && (t.preventDefault(), i.$outer.hasClass("lg-thumb-open") ? i.$outer.removeClass("lg-thumb-open") : i.destroy()) })
        }, s.prototype.arrow = function() {
            var t = this;
            this.$outer.find(".lg-prev").on("click.lg", function() { t.goToPrevSlide() }), this.$outer.find(".lg-next").on("click.lg", function() { t.goToNextSlide() })
        }, s.prototype.arrowDisable = function(t) {!this.s.loop && this.s.hideControlOnEnd && (t + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), t > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled")) }, s.prototype.setTranslate = function(t, e, i) { this.s.useLeft ? t.css("left", e) : t.css({ transform: "translate3d(" + e + "px, " + i + "px, 0px)" }) }, s.prototype.touchMove = function(e, i) {
            var n = i - e;
            Math.abs(n) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), n, 0), this.setTranslate(t(".lg-prev-slide"), -this.$slide.eq(this.index).width() + n, 0), this.setTranslate(t(".lg-next-slide"), this.$slide.eq(this.index).width() + n, 0))
        }, s.prototype.touchEnd = function(t) { var e = this; "lg-slide" !== e.s.mode && e.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() { e.$outer.removeClass("lg-dragging"), t < 0 && Math.abs(t) > e.s.swipeThreshold ? e.goToNextSlide(!0) : t > 0 && Math.abs(t) > e.s.swipeThreshold ? e.goToPrevSlide(!0) : Math.abs(t) < 5 && e.$el.trigger("onSlideClick.lg"), e.$slide.removeAttr("style") }), setTimeout(function() { e.$outer.hasClass("lg-dragging") || "lg-slide" === e.s.mode || e.$outer.removeClass("lg-slide") }, e.s.speed + 100) }, s.prototype.enableSwipe = function() {
            var t = this,
                e = 0,
                i = 0,
                n = !1;
            t.s.enableSwipe && t.isTouch && t.doCss() && (t.$slide.on("touchstart.lg", function(i) { t.$outer.hasClass("lg-zoomed") || t.lgBusy || (i.preventDefault(), t.manageSwipeClass(), e = i.originalEvent.targetTouches[0].pageX) }), t.$slide.on("touchmove.lg", function(s) { t.$outer.hasClass("lg-zoomed") || (s.preventDefault(), i = s.originalEvent.targetTouches[0].pageX, t.touchMove(e, i), n = !0) }), t.$slide.on("touchend.lg", function() { t.$outer.hasClass("lg-zoomed") || (n ? (n = !1, t.touchEnd(i - e)) : t.$el.trigger("onSlideClick.lg")) }))
        }, s.prototype.enableDrag = function() {
            var i = this,
                n = 0,
                s = 0,
                r = !1,
                o = !1;
            i.s.enableDrag && !i.isTouch && i.doCss() && (i.$slide.on("mousedown.lg", function(e) { i.$outer.hasClass("lg-zoomed") || (t(e.target).hasClass("lg-object") || t(e.target).hasClass("lg-video-play")) && (e.preventDefault(), i.lgBusy || (i.manageSwipeClass(), n = e.pageX, r = !0, i.$outer.scrollLeft += 1, i.$outer.scrollLeft -= 1, i.$outer.removeClass("lg-grab").addClass("lg-grabbing"), i.$el.trigger("onDragstart.lg"))) }), t(e).on("mousemove.lg", function(t) { r && (o = !0, s = t.pageX, i.touchMove(n, s), i.$el.trigger("onDragmove.lg")) }), t(e).on("mouseup.lg", function(e) { o ? (o = !1, i.touchEnd(s - n), i.$el.trigger("onDragend.lg")) : (t(e.target).hasClass("lg-object") || t(e.target).hasClass("lg-video-play")) && i.$el.trigger("onSlideClick.lg"), r && (r = !1, i.$outer.removeClass("lg-grabbing").addClass("lg-grab")) }))
        }, s.prototype.manageSwipeClass = function() {
            var t = this.index + 1,
                e = this.index - 1,
                i = this.$slide.length;
            this.s.loop && (0 === this.index ? e = i - 1 : this.index === i - 1 && (t = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), e > -1 && this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(t).addClass("lg-next-slide")
        }, s.prototype.mousewheel = function() {
            var t = this;
            t.$outer.on("mousewheel.lg", function(e) { e.deltaY && (e.deltaY > 0 ? t.goToPrevSlide() : t.goToNextSlide(), e.preventDefault()) })
        }, s.prototype.closeGallery = function() {
            var e = this,
                i = !1;
            this.$outer.find(".lg-close").on("click.lg", function() { e.destroy() }), e.s.closable && (e.$outer.on("mousedown.lg", function(e) { i = !!(t(e.target).is(".lg-outer") || t(e.target).is(".lg-item ") || t(e.target).is(".lg-img-wrap")) }), e.$outer.on("mouseup.lg", function(n) {
                (t(n.target).is(".lg-outer") || t(n.target).is(".lg-item ") || t(n.target).is(".lg-img-wrap") && i) && (e.$outer.hasClass("lg-dragging") || e.destroy())
            }))
        }, s.prototype.destroy = function(i) {
            var n = this;
            i || n.$el.trigger("onBeforeClose.lg"), t(e).scrollTop(n.prevScrollTop), i && (n.s.dynamic || this.$items.off("click.lg click.lgcustom"), t.removeData(n.el, "lightGallery")), this.$el.off(".lg.tm"), t.each(t.fn.lightGallery.modules, function(t) { n.modules[t] && n.modules[t].destroy() }), this.lGalleryOn = !1, clearTimeout(n.hideBartimeout), this.hideBartimeout = !1, t(e).off(".lg"), t("body").removeClass("lg-on lg-from-hash"), n.$outer && n.$outer.removeClass("lg-visible"), t(".lg-backdrop").removeClass("in"), setTimeout(function() { n.$outer && n.$outer.remove(), t(".lg-backdrop").remove(), i || n.$el.trigger("onCloseAfter.lg") }, n.s.backdropDuration + 50)
        }, t.fn.lightGallery = function(e) { return this.each(function() { if (t.data(this, "lightGallery")) try { t(this).data("lightGallery").init() } catch (t) { console.error("lightGallery has not initiated properly") } else t.data(this, "lightGallery", new s(this, e)) }) }, t.fn.lightGallery.modules = {}
    }(jQuery, window, document),
    function(t, e) { "function" == typeof define && define.amd ? define(["jquery"], function(t) { return e(t) }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(0, function(t) {
        ! function() {
            "use strict";
            var e = {
                    scale: 1,
                    zoom: !0,
                    actualSize: !0,
                    enableZoomAfter: 300,
                    useLeftForZoom: function() {
                        var t = !1,
                            e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                        return e && parseInt(e[2], 10) < 54 && (t = !0), t
                    }()
                },
                i = function(i) { return this.core = t(i).data("lightGallery"), this.core.s = t.extend({}, e, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = t(window).width() / 2, this.pageY = t(window).height() / 2 + t(window).scrollTop()), this };
            i.prototype.init = function() {
                var e = this,
                    i = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
                e.core.s.actualSize && (i += '<span id="lg-actual-size" class="lg-icon"></span>'), e.core.s.useLeftForZoom ? e.core.$outer.addClass("lg-use-left-for-zoom") : e.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(i), e.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(i, n, s) {
                    var r = e.core.s.enableZoomAfter + s;
                    t("body").hasClass("lg-from-hash") && s ? r = 0 : t("body").removeClass("lg-from-hash"), e.zoomabletimeout = setTimeout(function() { e.core.$slide.eq(n).addClass("lg-zoomable") }, r + 30)
                });
                var n = 1,
                    s = function(i) {
                        var n = e.core.$outer.find(".lg-current .lg-image"),
                            s = (t(window).width() - n.prop("offsetWidth")) / 2,
                            r = (t(window).height() - n.prop("offsetHeight")) / 2 + t(window).scrollTop(),
                            o = (i - 1) * (e.pageX - s),
                            a = (i - 1) * (e.pageY - r);
                        n.css("transform", "scale3d(" + i + ", " + i + ", 1)").attr("data-scale", i), e.core.s.useLeftForZoom ? n.parent().css({ left: -o + "px", top: -a + "px" }).attr("data-x", o).attr("data-y", a) : n.parent().css("transform", "translate3d(-" + o + "px, -" + a + "px, 0)").attr("data-x", o).attr("data-y", a)
                    },
                    r = function() { n > 1 ? e.core.$outer.addClass("lg-zoomed") : e.resetZoom(), n < 1 && (n = 1), s(n) },
                    o = function(i, s, o, a) {
                        var l, c = s.prop("offsetWidth");
                        l = e.core.s.dynamic ? e.core.s.dynamicEl[o].width || s[0].naturalWidth || c : e.core.$items.eq(o).attr("data-width") || s[0].naturalWidth || c, e.core.$outer.hasClass("lg-zoomed") ? n = 1 : l > c && (n = l / c || 2), a ? (e.pageX = t(window).width() / 2, e.pageY = t(window).height() / 2 + t(window).scrollTop()) : (e.pageX = i.pageX || i.originalEvent.targetTouches[0].pageX, e.pageY = i.pageY || i.originalEvent.targetTouches[0].pageY), r(), setTimeout(function() { e.core.$outer.removeClass("lg-grabbing").addClass("lg-grab") }, 10)
                    },
                    a = !1;
                e.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(t, i) {
                    var n = e.core.$slide.eq(i).find(".lg-image");
                    n.on("dblclick", function(t) { o(t, n, i) }), n.on("touchstart", function(t) { a ? (clearTimeout(a), a = null, o(t, n, i)) : a = setTimeout(function() { a = null }, 300), t.preventDefault() })
                }), t(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() { e.pageX = t(window).width() / 2, e.pageY = t(window).height() / 2 + t(window).scrollTop(), s(n) }), t("#lg-zoom-out").on("click.lg", function() { e.core.$outer.find(".lg-current .lg-image").length && (n -= e.core.s.scale, r()) }), t("#lg-zoom-in").on("click.lg", function() { e.core.$outer.find(".lg-current .lg-image").length && (n += e.core.s.scale, r()) }), t("#lg-actual-size").on("click.lg", function(t) { o(t, e.core.$slide.eq(e.core.index).find(".lg-image"), e.core.index, !0) }), e.core.$el.on("onBeforeSlide.lg.tm", function() { n = 1, e.resetZoom() }), e.core.isTouch || e.zoomDrag(), e.core.isTouch && e.zoomSwipe()
            }, i.prototype.resetZoom = function() { this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = t(window).width() / 2, this.pageY = t(window).height() / 2 + t(window).scrollTop() }, i.prototype.zoomSwipe = function() {
                var t = this,
                    e = {},
                    i = {},
                    n = !1,
                    s = !1,
                    r = !1;
                t.core.$slide.on("touchstart.lg", function(i) {
                    if (t.core.$outer.hasClass("lg-zoomed")) {
                        var n = t.core.$slide.eq(t.core.index).find(".lg-object");
                        r = n.prop("offsetHeight") * n.attr("data-scale") > t.core.$outer.find(".lg").height(), ((s = n.prop("offsetWidth") * n.attr("data-scale") > t.core.$outer.find(".lg").width()) || r) && (i.preventDefault(), e = { x: i.originalEvent.targetTouches[0].pageX, y: i.originalEvent.targetTouches[0].pageY })
                    }
                }), t.core.$slide.on("touchmove.lg", function(o) {
                    if (t.core.$outer.hasClass("lg-zoomed")) {
                        var a, l, c = t.core.$slide.eq(t.core.index).find(".lg-img-wrap");
                        o.preventDefault(), n = !0, i = { x: o.originalEvent.targetTouches[0].pageX, y: o.originalEvent.targetTouches[0].pageY }, t.core.$outer.addClass("lg-zoom-dragging"), l = r ? -Math.abs(c.attr("data-y")) + (i.y - e.y) : -Math.abs(c.attr("data-y")), a = s ? -Math.abs(c.attr("data-x")) + (i.x - e.x) : -Math.abs(c.attr("data-x")), (Math.abs(i.x - e.x) > 15 || Math.abs(i.y - e.y) > 15) && (t.core.s.useLeftForZoom ? c.css({ left: a + "px", top: l + "px" }) : c.css("transform", "translate3d(" + a + "px, " + l + "px, 0)"))
                    }
                }), t.core.$slide.on("touchend.lg", function() { t.core.$outer.hasClass("lg-zoomed") && n && (n = !1, t.core.$outer.removeClass("lg-zoom-dragging"), t.touchendZoom(e, i, s, r)) })
            }, i.prototype.zoomDrag = function() {
                var e = this,
                    i = {},
                    n = {},
                    s = !1,
                    r = !1,
                    o = !1,
                    a = !1;
                e.core.$slide.on("mousedown.lg.zoom", function(n) {
                    var r = e.core.$slide.eq(e.core.index).find(".lg-object");
                    a = r.prop("offsetHeight") * r.attr("data-scale") > e.core.$outer.find(".lg").height(), o = r.prop("offsetWidth") * r.attr("data-scale") > e.core.$outer.find(".lg").width(), e.core.$outer.hasClass("lg-zoomed") && t(n.target).hasClass("lg-object") && (o || a) && (n.preventDefault(), i = { x: n.pageX, y: n.pageY }, s = !0, e.core.$outer.scrollLeft += 1, e.core.$outer.scrollLeft -= 1, e.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
                }), t(window).on("mousemove.lg.zoom", function(t) {
                    if (s) {
                        var l, c, d = e.core.$slide.eq(e.core.index).find(".lg-img-wrap");
                        r = !0, n = { x: t.pageX, y: t.pageY }, e.core.$outer.addClass("lg-zoom-dragging"), c = a ? -Math.abs(d.attr("data-y")) + (n.y - i.y) : -Math.abs(d.attr("data-y")), l = o ? -Math.abs(d.attr("data-x")) + (n.x - i.x) : -Math.abs(d.attr("data-x")), e.core.s.useLeftForZoom ? d.css({ left: l + "px", top: c + "px" }) : d.css("transform", "translate3d(" + l + "px, " + c + "px, 0)")
                    }
                }), t(window).on("mouseup.lg.zoom", function(t) { s && (s = !1, e.core.$outer.removeClass("lg-zoom-dragging"), !r || i.x === n.x && i.y === n.y || (n = { x: t.pageX, y: t.pageY }, e.touchendZoom(i, n, o, a)), r = !1), e.core.$outer.removeClass("lg-grabbing").addClass("lg-grab") })
            }, i.prototype.touchendZoom = function(t, e, i, n) {
                var s = this,
                    r = s.core.$slide.eq(s.core.index).find(".lg-img-wrap"),
                    o = s.core.$slide.eq(s.core.index).find(".lg-object"),
                    a = -Math.abs(r.attr("data-x")) + (e.x - t.x),
                    l = -Math.abs(r.attr("data-y")) + (e.y - t.y),
                    c = (s.core.$outer.find(".lg").height() - o.prop("offsetHeight")) / 2,
                    d = Math.abs(o.prop("offsetHeight") * Math.abs(o.attr("data-scale")) - s.core.$outer.find(".lg").height() + c),
                    h = (s.core.$outer.find(".lg").width() - o.prop("offsetWidth")) / 2,
                    u = Math.abs(o.prop("offsetWidth") * Math.abs(o.attr("data-scale")) - s.core.$outer.find(".lg").width() + h);
                (Math.abs(e.x - t.x) > 15 || Math.abs(e.y - t.y) > 15) && (n && (l <= -d ? l = -d : l >= -c && (l = -c)), i && (a <= -u ? a = -u : a >= -h && (a = -h)), n ? r.attr("data-y", Math.abs(l)) : l = -Math.abs(r.attr("data-y")), i ? r.attr("data-x", Math.abs(a)) : a = -Math.abs(r.attr("data-x")), s.core.s.useLeftForZoom ? r.css({ left: a + "px", top: l + "px" }) : r.css("transform", "translate3d(" + a + "px, " + l + "px, 0)"))
            }, i.prototype.destroy = function() {
                var e = this;
                e.core.$el.off(".lg.zoom"), t(window).off(".lg.zoom"), e.core.$slide.off(".lg.zoom"), e.core.$el.off(".lg.tm.zoom"), e.resetZoom(), clearTimeout(e.zoomabletimeout), e.zoomabletimeout = !1
            }, t.fn.lightGallery.modules.zoom = i
        }()
    }),
    function(t, e, i, n) {
        "use strict";
        var s = { videoMaxWidth: "855px", youtubePlayerParams: !1, vimeoPlayerParams: !1, dailymotionPlayerParams: !1, videojs: !1 },
            r = function(e) { return this.core = t(e).data("lightGallery"), this.$el = t(e), this.core.s = t.extend({}, s, this.core.s), this.videoLoaded = !1, this.init(), this };
        r.prototype.init = function() {
            var e = this;
            e.core.$el.on("hasVideo.lg.tm", function(t, i, n, s) {
                if (e.core.$slide.eq(i).find(".lg-video").append(e.loadVideo(n, "lg-object", !0, i, s)), s)
                    if (e.core.s.videojs) try { videojs(e.core.$slide.eq(i).find(".lg-html5").get(0), {}, function() { e.videoLoaded || this.play() }) } catch (t) { console.error("Make sure you have included videojs") } else e.core.$slide.eq(i).find(".lg-html5").get(0).play()
            }), e.core.$el.on("onAferAppendSlide.lg.tm", function(t, i) { e.core.$slide.eq(i).find(".lg-video-cont").css("max-width", e.core.s.videoMaxWidth), e.videoLoaded = !0 });
            var i = function(t) {
                if (t.find(".lg-object").hasClass("lg-has-poster") && t.find(".lg-object").is(":visible"))
                    if (t.hasClass("lg-has-video")) {
                        var i = t.find(".lg-youtube").get(0),
                            n = t.find(".lg-vimeo").get(0),
                            s = t.find(".lg-dailymotion").get(0),
                            r = t.find(".lg-html5").get(0);
                        if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                        else if (n) try { $f(n).api("play") } catch (t) { console.error("Make sure you have included froogaloop2 js") } else if (s) s.contentWindow.postMessage("play", "*");
                            else if (r)
                            if (e.core.s.videojs) try { videojs(r).play() } catch (t) { console.error("Make sure you have included videojs") } else r.play();
                        t.addClass("lg-video-palying")
                    } else {
                        t.addClass("lg-video-palying lg-has-video");
                        var o = function(i, n) {
                            if (t.find(".lg-video").append(e.loadVideo(i, "", !1, e.core.index, n)), n)
                                if (e.core.s.videojs) try { videojs(e.core.$slide.eq(e.core.index).find(".lg-html5").get(0), {}, function() { this.play() }) } catch (t) { console.error("Make sure you have included videojs") } else e.core.$slide.eq(e.core.index).find(".lg-html5").get(0).play()
                        };
                        e.core.s.dynamic ? o(e.core.s.dynamicEl[e.core.index].src, e.core.s.dynamicEl[e.core.index].html) : o(e.core.$items.eq(e.core.index).attr("href") || e.core.$items.eq(e.core.index).attr("data-src"), e.core.$items.eq(e.core.index).attr("data-html"));
                        var a = t.find(".lg-object");
                        t.find(".lg-video").append(a), t.find(".lg-video-object").hasClass("lg-html5") || (t.removeClass("lg-complete"), t.find(".lg-video-object").on("load.lg error.lg", function() { t.addClass("lg-complete") }))
                    }
            };
            e.core.doCss() && e.core.$items.length > 1 && (e.core.s.enableSwipe && e.core.isTouch || e.core.s.enableDrag && !e.core.isTouch) ? e.core.$el.on("onSlideClick.lg.tm", function() {
                var t = e.core.$slide.eq(e.core.index);
                i(t)
            }) : e.core.$slide.on("click.lg", function() { i(t(this)) }), e.core.$el.on("onBeforeSlide.lg.tm", function(t, i, n) {
                var s, r = e.core.$slide.eq(i),
                    o = r.find(".lg-youtube").get(0),
                    a = r.find(".lg-vimeo").get(0),
                    l = r.find(".lg-dailymotion").get(0),
                    c = r.find(".lg-html5").get(0);
                if (o) o.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                else if (a) try { $f(a).api("pause") } catch (t) { console.error("Make sure you have included froogaloop2 js") } else if (l) l.contentWindow.postMessage("pause", "*");
                    else if (c)
                    if (e.core.s.videojs) try { videojs(c).pause() } catch (t) { console.error("Make sure you have included videojs") } else c.pause();
                s = e.core.s.dynamic ? e.core.s.dynamicEl[n].src : e.core.$items.eq(n).attr("href") || e.core.$items.eq(n).attr("data-src");
                var d = e.core.isVideo(s, n) || {};
                (d.youtube || d.vimeo || d.dailymotion) && e.core.$outer.addClass("lg-hide-download")
            }), e.core.$el.on("onAfterSlide.lg.tm", function(t, i) { e.core.$slide.eq(i).removeClass("lg-video-palying") })
        }, r.prototype.loadVideo = function(e, i, n, s, r) {
            var o = "",
                a = 1,
                l = "",
                c = this.core.isVideo(e, s) || {};
            if (n && (a = this.videoLoaded ? 0 : 1), c.youtube) l = "?wmode=opaque&autoplay=" + a + "&enablejsapi=1", this.core.s.youtubePlayerParams && (l = l + "&" + t.param(this.core.s.youtubePlayerParams)), o = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + l + '" frameborder="0" allowfullscreen></iframe>';
            else if (c.vimeo) l = "?autoplay=" + a + "&api=1", this.core.s.vimeoPlayerParams && (l = l + "&" + t.param(this.core.s.vimeoPlayerParams)), o = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="http://player.vimeo.com/video/' + c.vimeo[1] + l + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
            else if (c.dailymotion) l = "?wmode=opaque&autoplay=" + a + "&api=postMessage", this.core.s.dailymotionPlayerParams && (l = l + "&" + t.param(this.core.s.dailymotionPlayerParams)), o = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + l + '" frameborder="0" allowfullscreen></iframe>';
            else if (c.html5) {
                var d = r.substring(0, 1);
                ("." === d || "#" === d) && (r = t(r).html()), o = r
            }
            return o
        }, r.prototype.destroy = function() { this.videoLoaded = !1 }, t.fn.lightGallery.modules.video = r
    }(jQuery, window, document),
    function(t) {
        function e() {}

        function i(t) {
            function i(e) { e.prototype.option || (e.prototype.option = function(e) { t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e)) }) }

            function s(e, i) {
                t.fn[e] = function(s) {
                    if ("string" == typeof s) {
                        for (var o = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var c = this[a],
                                d = t.data(c, e);
                            if (d)
                                if (t.isFunction(d[s]) && "_" !== s.charAt(0)) { var h = d[s].apply(d, o); if (void 0 !== h) return h } else r("no such method '" + s + "' for " + e + " instance");
                            else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + s + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(s), n._init()) : (n = new i(this, s), t.data(this, e, n))
                    })
                }
            }
            if (t) { var r = "undefined" == typeof console ? e : function(t) { console.error(t) }; return t.bridget = function(t, e) { i(e), s(t, e) }, t.bridget }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(e) { var i = t.event; return i.target = i.target || i.srcElement || e, i }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) { t.addEventListener(e, i, !1) } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var s = function() {};
        i.removeEventListener ? s = function(t, e, i) { t.removeEventListener(e, i, !1) } : i.detachEvent && (s = function(t, e, i) { t.detachEvent("on" + e, t[e + i]); try { delete t[e + i] } catch (n) { t[e + i] = void 0 } });
        var r = { bind: n, unbind: s };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(window),
    function() {
        "use strict";

        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) { return function() { return this[t].apply(this, arguments) } }
        var n = t.prototype,
            s = this,
            r = s.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp)
                for (i in e = {}, n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
            else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) { var e, i = []; for (e = 0; e < t.length; e += 1) i.push(t[e].listener); return i }, n.getListenersAsObject = function(t) { var e, i = this.getListeners(t); return i instanceof Array && ((e = {})[t] = i), e || i }, n.addListener = function(t, i) {
            var n, s = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(r ? i : { listener: i, once: !1 });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) { return this.addListener(t, { listener: e, once: !0 }) }, n.once = i("addOnceListener"), n.defineEvent = function(t) { return this.getListeners(t), this }, n.defineEvents = function(t) { for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]); return this }, n.removeListener = function(t, i) { var n, s, r = this.getListenersAsObject(t); for (s in r) r.hasOwnProperty(s) && (-1 !== (n = e(r[s], i)) && r[s].splice(n, 1)); return this }, n.off = i("removeListener"), n.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, n.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, n.manipulateListeners = function(t, e, i) {
            var n, s, r = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) r.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? r.call(this, n, s) : o.call(this, n, s));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, s, r = this.getListenersAsObject(t);
            for (s in r)
                if (r.hasOwnProperty(s))
                    for (n = r[s].length; n--;) !0 === (i = r[s][n]).once && this.removeListener(t, i.listener), i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, n.setOnceReturnValue = function(t) { return this._onceReturnValue = t, this }, n._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, n._getEvents = function() { return this._events || (this._events = {}) }, t.noConflict = function() { return s.EventEmitter = r, t }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return t }) : "object" == typeof module && module.exports ? module.exports = t : s.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, s = 0, r = i.length; r > s; s++)
                    if (e = i[s] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() { return e }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t, e) {
        function i(t) { var e = parseFloat(t); return -1 === t.indexOf("%") && !isNaN(e) && e }

        function n(e) {
            function n() {
                if (!d) {
                    d = !0;
                    var n = t.getComputedStyle;
                    if (a = function() { var t = n ? function(t) { return n(t, null) } : function(t) { return t.currentStyle }; return function(e) { var i = t(e); return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i } }(), l = e("boxSizing")) {
                        var r = document.createElement("div");
                        r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[l] = "border-box";
                        var o = document.body || document.documentElement;
                        o.appendChild(r);
                        var h = a(r);
                        c = 200 === i(h.width), o.removeChild(r)
                    }
                }
            }

            function o(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    s = n.left,
                    r = e.runtimeStyle,
                    o = r && r.left;
                return o && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = s, o && (r.left = o), i
            }
            var a, l, c, d = !1;
            return function(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var e = a(t);
                    if ("none" === e.display) return function() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = r.length; i > e; e++) t[r[e]] = 0; return t }();
                    var s = {};
                    s.width = t.offsetWidth, s.height = t.offsetHeight;
                    for (var d = s.isBorderBox = !(!l || !e[l] || "border-box" !== e[l]), h = 0, u = r.length; u > h; h++) {
                        var p = r[h],
                            f = e[p];
                        f = o(t, f);
                        var m = parseFloat(f);
                        s[p] = isNaN(m) ? 0 : m
                    }
                    var g = s.paddingLeft + s.paddingRight,
                        v = s.paddingTop + s.paddingBottom,
                        y = s.marginLeft + s.marginRight,
                        b = s.marginTop + s.marginBottom,
                        w = s.borderLeftWidth + s.borderRightWidth,
                        x = s.borderTopWidth + s.borderBottomWidth,
                        _ = d && c,
                        S = i(e.width);
                    !1 !== S && (s.width = S + (_ ? 0 : g + w));
                    var k = i(e.height);
                    return !1 !== k && (s.height = k + (_ ? 0 : v + x)), s.innerWidth = s.width - (g + w), s.innerHeight = s.height - (v + x), s.outerWidth = s.width + y, s.outerHeight = s.height + b, s
                }
            }
        }
        var s = "undefined" == typeof console ? function() {} : function(t) { console.error(t) },
            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) { "function" == typeof t && (e.isReady ? t() : o.push(t)) }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = o.length; i > t; t++) {
                (0, o[t])()
            }
        }

        function s(s) { return "complete" === r.readyState ? n() : (s.bind(r, "DOMContentLoaded", i), s.bind(r, "readystatechange", i), s.bind(t, "load", i)), e }
        var r = t.document,
            o = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], s) : "object" == typeof exports ? module.exports = s(require("eventie")) : t.docReady = s(t.eventie)
    }(window),
    function(t) {
        "use strict";

        function e(t, e) { return t[s](e) }

        function i(t) { t.parentNode || document.createDocumentFragment().appendChild(t) }
        var n, s = function() { if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) { var s = e[i] + "MatchesSelector"; if (t[s]) return s } }();
        if (s) {
            var r = e(document.createElement("div"), "div");
            n = r ? e : function(t, n) { return i(t), e(t, n) }
        } else n = function(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), s = 0, r = n.length; r > s; s++)
                if (n[s] === t) return !0;
            return !1
        };
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() { return n }) : "object" == typeof exports ? module.exports = n : window.matchesSelector = n
    }(Element.prototype),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) { return e(t, i, n) }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector) }(window, function(t, e, i) {
        var n = { extend: function(t, e) { for (var i in e) t[i] = e[i]; return t }, modulo: function(t, e) { return (t % e + e) % e } },
            s = Object.prototype.toString;
        n.isArray = function(t) { return "[object Array]" == s.call(t) }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, s = t.length; s > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) { return t.indexOf(e) } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) { var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1) }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) { return t instanceof HTMLElement } : function(t) { return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName }, n.setText = function() { var t; return function(e, i) { e[t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = i } }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            for (var s = [], r = 0, o = (t = n.makeArray(t)).length; o > r; r++) {
                var a = t[r];
                if (n.isElement(a))
                    if (e) { i(a, e) && s.push(a); for (var l = a.querySelectorAll(e), c = 0, d = l.length; d > c; c++) s.push(l[c]) } else s.push(a)
            }
            return s
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                s = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[s];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[s] = setTimeout(function() { n.apply(r, e), delete r[s] }, i || 100)
            }
        }, n.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() };
        var r = t.console;
        return n.htmlInit = function(i, s) {
            e(function() {
                for (var e = n.toDashed(s), o = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, c = o.length; c > l; l++) {
                    var d, h = o[l],
                        u = h.getAttribute(a);
                    try { d = u && JSON.parse(u) } catch (t) { r && r.error("Error parsing " + a + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + t); continue }
                    var p = new i(h, d),
                        f = t.jQuery;
                    f && f.data(h, s, p)
                }
            })
        }, n
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, s, r) { return e(t, i, n, s, r) }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils)) }(window, function(t, e, i, n, s) {
        "use strict";

        function r(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }
        var o = t.getComputedStyle,
            a = o ? function(t) { return o(t, null) } : function(t) { return t.currentStyle },
            l = n("transition"),
            c = n("transform"),
            d = l && c,
            h = !!n("perspective"),
            u = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[l],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            f = function() {
                for (var t = {}, e = 0, i = p.length; i > e; e++) {
                    var s = p[e],
                        r = n(s);
                    r && r !== s && (t[s] = r)
                }
                return t
            }();
        s.extend(r.prototype, e.prototype), r.prototype._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.getSize = function() { this.size = i(this.element) }, r.prototype.css = function(t) { var e = this.element.style; for (var i in t) { e[f[i] || i] = t[i] } }, r.prototype.getPosition = function() {
            var t = a(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                s = t[i ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = this.layout.size,
                l = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.width : parseInt(s, 10),
                c = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
            l = isNaN(l) ? 0 : l, c = isNaN(c) ? 0 : c, l -= i ? o.paddingLeft : o.paddingRight, c -= n ? o.paddingTop : o.paddingBottom, this.position.x = l, this.position.y = c
        }, r.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                s = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                o = this.position.x + t[n];
            i[s] = this.getXValue(o), i[r] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                c = e.isOriginTop ? "bottom" : "top",
                d = this.position.y + t[a];
            i[l] = this.getYValue(d), i[c] = "", this.css(i), this.emitEvent("layout", [this])
        }, r.prototype.getXValue = function(t) { var e = this.layout.options; return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px" }, r.prototype.getYValue = function(t) { var e = this.layout.options; return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px" }, r.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                s = parseInt(t, 10),
                r = parseInt(e, 10),
                o = s === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), !o || this.isTransitioning) {
                var a = t - i,
                    l = e - n,
                    c = {};
                c.transform = this.getTranslate(a, l), this.transition({ to: c, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
            } else this.layoutPosition()
        }, r.prototype.getTranslate = function(t, e) { var i = this.layout.options; return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, h ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)" }, r.prototype.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, r.prototype.moveTo = d ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, r.prototype._nonTransition = function(t) { for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, r.prototype._transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var m = "opacity," + function(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }(f.transform || "transform");
        r.prototype.enableTransition = function() { this.isTransitioning || (this.css({ transitionProperty: m, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(u, this, !1)) }, r.prototype.transition = r.prototype[l ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, r.prototype.onotransitionend = function(t) { this.ontransitionend(t) };
        var g = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
        r.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], function(t) { for (var e in t) return !1; return !0 }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this])
            }
        }, r.prototype.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1 }, r.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var v = { transitionProperty: "", transitionDuration: "" };
        return r.prototype.removeTransitionStyles = function() { this.css(v) }, r.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, r.prototype.remove = function() {
            if (l && parseFloat(this.layout.options.transitionDuration)) {
                var t = this;
                this.once("transitionEnd", function() { t.removeElem() }), this.hide()
            } else this.removeElem()
        }, r.prototype.reveal = function() {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e })
        }, r.prototype.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, r.prototype.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, r.prototype.hide = function() {
            this.isHidden = !0, this.css({ display: "" });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e })
        }, r.prototype.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, r.prototype.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, r
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, s, r, o) { return e(t, i, n, s, r, o) }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, n, s, r) {
        "use strict";

        function o(t, e) {
            var i = s.getQueryElement(t);
            if (i) {
                this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
                var n = ++d;
                this.element.outlayerGUID = n, h[n] = this, this._create(), this.options.isInitLayout && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
        }
        var a = t.console,
            l = t.jQuery,
            c = function() {},
            d = 0,
            h = {};
        return o.namespace = "outlayer", o.Item = r, o.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, s.extend(o.prototype, i.prototype), o.prototype.option = function(t) { s.extend(this.options, t) }, o.prototype._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, o.prototype.reloadItems = function() { this.items = this._itemize(this.element.children) }, o.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0, r = e.length; r > s; s++) {
                var o = new i(e[s], this);
                n.push(o)
            }
            return n
        }, o.prototype._filterFindItemElements = function(t) { return s.filterFindElements(t, this.options.itemSelector) }, o.prototype.getItemElements = function() { for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element); return t }, o.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, o.prototype._init = o.prototype.layout, o.prototype._resetLayout = function() { this.getSize() }, o.prototype.getSize = function() { this.size = n(this.element) }, o.prototype._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : s.isElement(r) && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, o.prototype.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, o.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var s = t[i];
                s.isIgnored || e.push(s)
            }
            return e
        }, o.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, s = t.length; s > n; n++) {
                    var r = t[n],
                        o = this._getItemLayoutPosition(r);
                    o.item = r, o.isInstant = e || r.isLayoutInstant, i.push(o)
                }
                this._processLayoutQueue(i)
            }
        }, o.prototype._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, o.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, o.prototype._positionItem = function(t, e, i, n) { n ? t.goTo(e, i) : t.moveTo(e, i) }, o.prototype._postLayout = function() { this.resizeContainer() }, o.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, o.prototype._getContainerSize = c, o.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, o.prototype._emitCompleteOnItems = function(t, e) {
            function i() { s.dispatchEvent(t + "Complete", null, [e]) }

            function n() {++o === r && i() }
            var s = this,
                r = e.length;
            if (e && r)
                for (var o = 0, a = 0, l = e.length; l > a; a++) { e[a].once(t, n) } else i()
        }, o.prototype.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var s = l.Event(e);
                    s.type = t, this.$element.trigger(s, i)
                } else this.$element.trigger(t, i)
        }, o.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, o.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, o.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, o.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    s.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, o.prototype._find = function(t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t)) : void 0 }, o.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, o.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
        }, o.prototype._manageStamp = c, o.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                s = n(t);
            return { left: e.left - i.left - s.marginLeft, top: e.top - i.top - s.marginTop, right: i.right - e.right - s.marginRight, bottom: i.bottom - e.bottom - s.marginBottom }
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.bindResize = function() { this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0) }, o.prototype.unbindResize = function() { this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1 }, o.prototype.onresize = function() {
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var t = this;
            this.resizeTimeout = setTimeout(function() { t.resize(), delete t.resizeTimeout }, 100)
        }, o.prototype.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, o.prototype.needsResizeLayout = function() { var t = n(this.element); return this.size && t && t.innerWidth !== this.size.innerWidth }, o.prototype.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, o.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, o.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, o.prototype.reveal = function(t) { this._emitCompleteOnItems("reveal", t); for (var e = t && t.length, i = 0; e && e > i; i++) { t[i].reveal() } }, o.prototype.hide = function(t) { this._emitCompleteOnItems("hide", t); for (var e = t && t.length, i = 0; e && e > i; i++) { t[i].hide() } }, o.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, o.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, o.prototype.getItem = function(t) { for (var e = 0, i = this.items.length; i > e; e++) { var n = this.items[e]; if (n.element === t) return n } }, o.prototype.getItems = function(t) {
            for (var e = [], i = 0, n = (t = s.makeArray(t)).length; n > i; i++) {
                var r = t[i],
                    o = this.getItem(r);
                o && e.push(o)
            }
            return e
        }, o.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var r = e[i];
                    r.remove(), s.removeFrom(this.items, r)
                }
        }, o.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) { this.items[e].destroy() }
            this.unbindResize();
            var n = this.element.outlayerGUID;
            delete h[n], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) { var e = (t = s.getQueryElement(t)) && t.outlayerGUID; return e && h[e] }, o.create = function(t, e) {
            function i() { o.apply(this, arguments) }
            return Object.create ? i.prototype = Object.create(o.prototype) : s.extend(i.prototype, o.prototype), i.prototype.constructor = i, i.defaults = s.extend({}, o.defaults), s.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = o.data, i.Item = function() { r.apply(this, arguments) }, i.Item.prototype = new r, s.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        }, o.Item = r, o
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) {
        "use strict";

        function e() { t.Item.apply(this, arguments) }
        e.prototype = new t.Item, e.prototype._create = function() { this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {} }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function() { i.apply(this, arguments), this.css({ display: "" }) }, e
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) {
        "use strict";

        function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) }
        return function() {
            function t(t) { return function() { return e.prototype[t].apply(this.isotope, arguments) } }
            for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], s = 0, r = n.length; r > s; s++) {
                var o = n[s];
                i.prototype[o] = t(o)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() { var e = t(this.isotope.element); return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight }, i.prototype._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, i.prototype.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, i.prototype.getRowHeight = function() { this.getSegmentSize("row", "Height") }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var s = this.getFirstItemSize();
                this[i] = s && s[n] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, i.prototype.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, i.prototype.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
            function n() { i.apply(this, arguments) }
            return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils) }(window, function(t, e, i) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                s = this.containerWidth + this.gutter,
                r = s / n,
                o = n - s % n;
            r = Math[o && 1 > o ? "round" : "floor"](r), this.cols = Math.max(r, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var s = this._getColGroup(n), r = Math.min.apply(Math, s), o = i.indexOf(s, r), a = { x: this.columnWidth * o, y: r }, l = r + t.size.outerHeight, c = this.cols + 1 - s.length, d = 0; c > d; d++) this.colYs[o + d] = l;
            return a
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var s = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, s)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                s = this.options.isOriginLeft ? n.left : n.right,
                r = s + i.outerWidth,
                o = Math.floor(s / this.columnWidth);
            o = Math.max(0, o);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, c = o; a >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
        }, n.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t }, n.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, n.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t !== this.containerWidth }, n
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype._getElementOffset,
            s = i.prototype.layout,
            r = i.prototype._getMeasurement;
        (function(t, e) { for (var i in e) t[i] = e[i] })(i.prototype, e.prototype), i.prototype._getElementOffset = n, i.prototype.layout = s, i.prototype._getMeasurement = r;
        var o = i.prototype.measureColumns;
        i.prototype.measureColumns = function() { this.items = this.isotope.filteredItems, o.call(this) };
        var a = i.prototype._manageStamp;
        return i.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments) }, i
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
        "use strict";
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = { x: this.x, y: this.y };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, e.prototype._getContainerSize = function() { return { height: this.maxY } }, e
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 });
        return e.prototype._resetLayout = function() { this.y = 0 }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, { x: e, y: i }
        }, e.prototype._getContainerSize = function() { return { height: this.y } }, e
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, s, r, o, a) { return e(t, i, n, s, r, o, a) }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, n, s, r, o) {
        var a = t.jQuery,
            l = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
            c = document.documentElement.textContent ? function(t) { return t.textContent } : function(t) { return t.innerText },
            d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        d.Item = r, d.LayoutMode = o, d.prototype._create = function() { for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], o.modes) this._initLayoutMode(t) }, d.prototype.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, d.prototype._itemize = function() { for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) { t[i].id = this.itemGUID++ } return this._updateItemsSortData(t), t }, d.prototype._initLayoutMode = function(t) {
            var e = o.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.prototype.layout = function() { return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout() }, d.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.prototype.arrange = function(t) {
            function e() { n.reveal(i.needReveal), n.hide(i.needHide) }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var n = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() { var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; return this._isInstant = t, t }, d.prototype._bindArrangeComplete = function() {
            function t() { e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems]) }
            var e, i, n, s = this;
            this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { n = !0, t() })
        }, d.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], s = [], r = this._getFilterTest(e), o = 0, a = t.length; a > o; o++) {
                var l = t[o];
                if (!l.isIgnored) {
                    var c = r(l);
                    c && i.push(l), c && l.isHidden ? n.push(l) : c || l.isHidden || s.push(l)
                }
            }
            return { matches: i, needReveal: n, needHide: s }
        }, d.prototype._getFilterTest = function(t) { return a && this.options.isJQueryFiltering ? function(e) { return a(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return n(e.element, t) } }, d.prototype.updateSortData = function(t) {
            var e;
            t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = h(i)
            }
        }, d.prototype._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && e > i; i++) { t[i].updateSortData() } };
        var h = function() {
            return function(t) {
                if ("string" != typeof t) return t;
                var e = l(t).split(" "),
                    i = e[0],
                    n = i.match(/^\[(.+)\]$/),
                    s = function(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && c(i) } }(n && n[1], i),
                    r = d.sortDataParsers[e[1]];
                return r ? function(t) { return t && r(s(t)) } : function(t) { return t && s(t) }
            }
        }();
        d.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, d.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = function(t, e) {
                    return function(i, n) {
                        for (var s = 0, r = t.length; r > s; s++) {
                            var o = t[s],
                                a = i.sortData[o],
                                l = n.sortData[o];
                            if (a > l || l > a) return (a > l ? 1 : -1) * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1)
                        }
                        return 0
                    }
                }([].concat.apply(t, this.sortHistory), this.options.sortAscending);
                this.filteredItems.sort(e), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d.prototype._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, d.prototype._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, d.prototype._manageStamp = function(t) { this._mode()._manageStamp(t) }, d.prototype._getContainerSize = function() { return this._mode()._getContainerSize() }, d.prototype.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, d.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d.prototype._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, d.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, s = e.length;
                for (i = 0; s > i; i++) n = e[i], this.element.appendChild(n.element);
                var r = this._filter(e).matches;
                for (i = 0; s > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; s > i; i++) delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var u = d.prototype.remove;
        return d.prototype.remove = function(t) {
            t = s.makeArray(t);
            var e = this.getItems(t);
            u.call(this, t);
            var i = e && e.length;
            if (i)
                for (var n = 0; i > n; n++) {
                    var r = e[n];
                    s.removeFrom(this.filteredItems, r)
                }
        }, d.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) { this.items[t].sortData.random = Math.random() }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, d.prototype.getFilteredItemElements = function() { for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element); return t }, d
    }),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) { return function() { return this[t].apply(this, arguments) } }
        var n = t.prototype,
            s = this,
            r = s.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t)
                for (i in e = {}, n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
            else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) { var e, i = []; for (e = 0; t.length > e; e += 1) i.push(t[e].listener); return i }, n.getListenersAsObject = function(t) { var e, i = this.getListeners(t); return i instanceof Array && ((e = {})[t] = i), e || i }, n.addListener = function(t, i) {
            var n, s = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(r ? i : { listener: i, once: !1 });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) { return this.addListener(t, { listener: e, once: !0 }) }, n.once = i("addOnceListener"), n.defineEvent = function(t) { return this.getListeners(t), this }, n.defineEvents = function(t) { for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]); return this }, n.removeListener = function(t, i) { var n, s, r = this.getListenersAsObject(t); for (s in r) r.hasOwnProperty(s) && (-1 !== (n = e(r[s], i)) && r[s].splice(n, 1)); return this }, n.off = i("removeListener"), n.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, n.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, n.manipulateListeners = function(t, e, i) {
            var n, s, r = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) r.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? r.call(this, n, s) : o.call(this, n, s));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, s, r = this.getListenersAsObject(t);
            for (s in r)
                if (r.hasOwnProperty(s))
                    for (n = r[s].length; n--;) !0 === (i = r[s][n]).once && this.removeListener(t, i.listener), i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, n.setOnceReturnValue = function(t) { return this._onceReturnValue = t, this }, n._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, n._getEvents = function() { return this._events || (this._events = {}) }, t.noConflict = function() { return s.EventEmitter = r, t }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return t }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(e) { var i = t.event; return i.target = i.target || i.srcElement || e, i }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) { t.addEventListener(e, i, !1) } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var s = function() {};
        i.removeEventListener ? s = function(t, e, i) { t.removeEventListener(e, i, !1) } : i.detachEvent && (s = function(t, e, i) { t.detachEvent("on" + e, t[e + i]); try { delete t[e + i] } catch (n) { t[e + i] = void 0 } });
        var r = { bind: n, unbind: s };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
    }(this),
    function(t, e) { "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) { return e(t, i, n) }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie) }(window, function(t, e, i) {
        function n(t, e) { for (var i in e) t[i] = e[i]; return t }

        function s(t) {
            var e = [];
            if (function(t) { return "[object Array]" === h.call(t) }(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function r(t, e, i) {
            if (!(this instanceof r)) return new r(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), l && (this.jqDeferred = new l.Deferred);
            var o = this;
            setTimeout(function() { o.check() })
        }

        function o(t) { this.img = t }

        function a(t) { this.src = t, u[t] = this }
        var l = t.jQuery,
            c = t.console,
            d = void 0 !== c,
            h = Object.prototype.toString;
        r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var s = i.querySelectorAll("img"), r = 0, o = s.length; o > r; r++) {
                        var a = s[r];
                        this.addImage(a)
                    }
            }
        }, r.prototype.addImage = function(t) {
            var e = new o(t);
            this.images.push(e)
        }, r.prototype.check = function() {
            function t(t, s) { return e.options.debug && d && c.log("confirm", t, s), e.progress(t), ++i === n && e.complete(), !0 }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, n)
                for (var s = 0; n > s; s++) {
                    var r = this.images[s];
                    r.on("confirm", t), r.check()
                } else this.complete()
        }, r.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() { e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t) })
        }, r.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, l && (l.fn.imagesLoaded = function(t, e) { return new r(this, t, e).jqDeferred.promise(l(this)) }), o.prototype = new e, o.prototype.check = function() {
            var t = u[this.img.src] || new a(this.img.src);
            if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
            else if (this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            else {
                var e = this;
                t.on("confirm", function(t, i) { return e.confirm(t.isLoaded, i), !0 }), t.check()
            }
        }, o.prototype.confirm = function(t, e) { this.isLoaded = t, this.emit("confirm", this, e) };
        var u = {};
        return a.prototype = new e, a.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.onload = function(t) { this.confirm(!0, "onload"), this.unbindProxyEvents(t) }, a.prototype.onerror = function(t) { this.confirm(!1, "onerror"), this.unbindProxyEvents(t) }, a.prototype.confirm = function(t, e) { this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e) }, a.prototype.unbindProxyEvents = function(t) { i.unbind(t.target, "load", this), i.unbind(t.target, "error", this) }, r
    }),
    function(t) {
        function e(t) { return new RegExp("(^|\\s+)" + t + "(\\s+|$)") }

        function i(t, e) {
            (n(t, e) ? r : s)(t, e)
        }
        var n, s, r;
        "classList" in document.documentElement ? (n = function(t, e) { return t.classList.contains(e) }, s = function(t, e) { t.classList.add(e) }, r = function(t, e) { t.classList.remove(e) }) : (n = function(t, i) { return e(i).test(t.className) }, s = function(t, e) { n(t, e) || (t.className = t.className + " " + e) }, r = function(t, i) { t.className = t.className.replace(e(i), " ") });
        var o = { hasClass: n, addClass: s, removeClass: r, toggleClass: i, has: n, add: s, remove: r, toggle: i };
        "function" == typeof define && define.amd ? define("classie/classie", o) : "object" == typeof exports ? module.exports = o : t.classie = o
    }(window),
    function(t, e) { "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e()) }(window, function() {
        function t(e) { for (var i in t.defaults) this[i] = t.defaults[i]; for (i in e) this[i] = e[i] }
        return (window.Packery = function() {}).Rect = t, t.defaults = { x: 0, y: 0, width: 0, height: 0 }, t.prototype.contains = function(t) {
            var e = t.width || 0,
                i = t.height || 0;
            return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
        }, t.prototype.overlaps = function(t) {
            var e = this.x + this.width,
                i = this.y + this.height,
                n = t.x + t.width,
                s = t.y + t.height;
            return this.x < n && e > t.x && this.y < s && i > t.y
        }, t.prototype.getMaximalFreeRects = function(e) {
            if (!this.overlaps(e)) return !1;
            var i, n = [],
                s = this.x + this.width,
                r = this.y + this.height,
                o = e.x + e.width,
                a = e.y + e.height;
            return this.y < e.y && (i = new t({ x: this.x, y: this.y, width: this.width, height: e.y - this.y }), n.push(i)), s > o && (i = new t({ x: o, y: this.y, width: s - o, height: this.height }), n.push(i)), r > a && (i = new t({ x: this.x, y: a, width: this.width, height: r - a }), n.push(i)), this.x < e.x && (i = new t({ x: this.x, y: this.y, width: e.x - this.x, height: this.height }), n.push(i)), n
        }, t.prototype.canFit = function(t) { return this.width >= t.width && this.height >= t.height }, t
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof exports) module.exports = e(require("./rect"));
        else {
            var i = t.Packery = t.Packery || {};
            i.Packer = e(i.Rect)
        }
    }(window, function(t) {
        function e(t, e, i) { this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset() }
        e.prototype.reset = function() {
            this.spaces = [], this.newSpaces = [];
            var e = new t({ x: 0, y: 0, width: this.width, height: this.height });
            this.spaces.push(e), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
        }, e.prototype.pack = function(t) { for (var e = 0, i = this.spaces.length; i > e; e++) { var n = this.spaces[e]; if (n.canFit(t)) { this.placeInSpace(t, n); break } } }, e.prototype.placeInSpace = function(t, e) { t.x = e.x, t.y = e.y, this.placed(t) }, e.prototype.placed = function(t) {
            for (var e = [], i = 0, n = this.spaces.length; n > i; i++) {
                var s = this.spaces[i],
                    r = s.getMaximalFreeRects(t);
                r ? e.push.apply(e, r) : e.push(s)
            }
            this.spaces = e, this.mergeSortSpaces()
        }, e.prototype.mergeSortSpaces = function() { e.mergeRects(this.spaces), this.spaces.sort(this.sorter) }, e.prototype.addSpace = function(t) { this.spaces.push(t), this.mergeSortSpaces() }, e.mergeRects = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                if (n) {
                    var s = t.slice(0);
                    s.splice(e, 1);
                    for (var r = 0, o = 0, a = s.length; a > o; o++) {
                        var l = s[o],
                            c = e > o ? 0 : 1;
                        n.contains(l) && (t.splice(o + c - r, 1), r++)
                    }
                }
            }
            return t
        };
        var i = { downwardLeftToRight: function(t, e) { return t.y - e.y || t.x - e.x }, rightwardTopToBottom: function(t, e) { return t.x - e.x || t.y - e.y } };
        return e
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect) }(window, function(t, e, i) {
        var n = t("transform"),
            s = function() { e.Item.apply(this, arguments) },
            r = (s.prototype = new e.Item)._create;
        return s.prototype._create = function() { r.call(this), this.rect = new i, this.placeRect = new i }, s.prototype.dragStart = function() { this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1 }, s.prototype.dragMove = function(t, e) {
            this.didDrag = !0;
            var i = this.layout.size;
            t -= i.paddingLeft, e -= i.paddingTop, this.positionPlaceRect(t, e)
        }, s.prototype.dragStop = function() {
            this.getPosition();
            var t = this.position.x != this.placeRect.x,
                e = this.position.y != this.placeRect.y;
            this.needsPositioning = t || e, this.didDrag = !1
        }, s.prototype.positionPlaceRect = function(t, e, i) { this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, i) }, s.prototype.getPlaceRectCoord = function(t, e, i) {
            var n, s = e ? "Width" : "Height",
                r = this.size["outer" + s],
                o = this.layout[e ? "columnWidth" : "rowHeight"],
                a = this.layout.size["inner" + s];
            if (e || (a = Math.max(a, this.layout.maxY), this.layout.rowHeight || (a -= this.layout.gutter)), o) {
                var l;
                o += this.layout.gutter, a += e ? this.layout.gutter : 0, t = Math.round(t / o), l = this.layout.options.isHorizontal ? e ? "ceil" : "floor" : e ? "floor" : "ceil";
                var c = Math[l](a / o);
                n = c -= Math.ceil(r / o)
            } else n = a - r;
            return t = i ? t : Math.min(t, n), t *= o || 1, Math.max(0, t)
        }, s.prototype.copyPlaceRectPosition = function() { this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y }, s.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]) }, s
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], e) : "object" == typeof exports ? module.exports = e(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item) }(window, function(t, e, i, n, s, r) {
        function o(t, e) { return t.position.y - e.position.y || t.position.x - e.position.x }

        function a(t, e) { return t.position.x - e.position.x || t.position.y - e.position.y }
        n.prototype.canFit = function(t) { return this.width >= t.width - 1 && this.height >= t.height - 1 };
        var l = i.create("packery");
        return l.Item = r, l.prototype._create = function() {
            i.prototype._create.call(this), this.packer = new s, this.stamp(this.options.stamped);
            var t = this;
            this.handleDraggabilly = { dragStart: function() { t.itemDragStart(this.element) }, dragMove: function() { t.itemDragMove(this.element, this.position.x, this.position.y) }, dragEnd: function() { t.itemDragEnd(this.element) } }, this.handleUIDraggable = { start: function(e) { t.itemDragStart(e.currentTarget) }, drag: function(e, i) { t.itemDragMove(e.currentTarget, i.position.left, i.position.top) }, stop: function(e) { t.itemDragEnd(e.currentTarget) } }
        }, l.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurements();
            var t = this.packer;
            this.options.isHorizontal ? (t.width = Number.POSITIVE_INFINITY, t.height = this.size.innerHeight + this.gutter, t.sortDirection = "rightwardTopToBottom") : (t.width = this.size.innerWidth + this.gutter, t.height = Number.POSITIVE_INFINITY, t.sortDirection = "downwardLeftToRight"), t.reset(), this.maxY = 0, this.maxX = 0
        }, l.prototype._getMeasurements = function() { this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width") }, l.prototype._getItemLayoutPosition = function(t) { return this._packItem(t), t.rect }, l.prototype._packItem = function(t) { this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxXY(t.rect) }, l.prototype._setMaxXY = function(t) { this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY) }, l.prototype._setRectSize = function(t, i) {
            var n = e(t),
                s = n.outerWidth,
                r = n.outerHeight;
            (s || r) && (s = this._applyGridGutter(s, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), i.width = Math.min(s, this.packer.width), i.height = Math.min(r, this.packer.height)
        }, l.prototype._applyGridGutter = function(t, e) { if (!e) return t + this.gutter; var i = t % (e += this.gutter); return Math[i && 1 > i ? "round" : "ceil"](t / e) * e }, l.prototype._getContainerSize = function() { return this.options.isHorizontal ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter } }, l.prototype._manageStamp = function(t) {
            var e, i = this.getItem(t);
            if (i && i.isPlacing) e = i.placeRect;
            else {
                var s = this._getElementOffset(t);
                e = new n({ x: this.options.isOriginLeft ? s.left : s.right, y: this.options.isOriginTop ? s.top : s.bottom })
            }
            this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
        }, l.prototype.sortItemsByPosition = function() {
            var t = this.options.isHorizontal ? a : o;
            this.items.sort(t)
        }, l.prototype.fit = function(t, e, i) {
            var n = this.getItem(t);
            n && (this._getMeasurements(), this.stamp(n.element), n.getSize(), n.isPlacing = !0, e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, n.positionPlaceRect(e, i, !0), this._bindFitEvents(n), n.moveTo(n.placeRect.x, n.placeRect.y), this.layout(), this.unstamp(n.element), this.sortItemsByPosition(), n.isPlacing = !1, n.copyPlaceRectPosition())
        }, l.prototype._bindFitEvents = function(t) {
            function e() { 2 == ++n && i.emitEvent("fitComplete", [t]) }
            var i = this,
                n = 0;
            t.on("layout", function() { return e(), !0 }), this.on("layoutComplete", function() { return e(), !0 })
        }, l.prototype.resize = function() {
            var t = e(this.element),
                i = this.size && t,
                n = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            i && t[n] == this.size[n] || this.layout()
        }, l.prototype.itemDragStart = function(t) {
            this.stamp(t);
            var e = this.getItem(t);
            e && e.dragStart()
        }, l.prototype.itemDragMove = function(t, e, i) {
            var n = this.getItem(t);
            n && n.dragMove(e, i);
            var s = this;
            this.clearDragTimeout(), this.dragTimeout = setTimeout(function() { s.layout(), delete s.dragTimeout }, 40)
        }, l.prototype.clearDragTimeout = function() { this.dragTimeout && clearTimeout(this.dragTimeout) }, l.prototype.itemDragEnd = function(e) {
            var i, n = this.getItem(e);
            if (n && (i = n.didDrag, n.dragStop()), n && (i || n.needsPositioning)) {
                t.add(n.element, "is-positioning-post-drag");
                var s = this._getDragEndLayoutComplete(e, n);
                n.needsPositioning ? (n.on("layout", s), n.moveTo(n.placeRect.x, n.placeRect.y)) : n && n.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", s), this.layout()
            } else this.unstamp(e)
        }, l.prototype._getDragEndLayoutComplete = function(e, i) {
            var n = i && i.needsPositioning,
                s = 0,
                r = n ? 2 : 1,
                o = this;
            return function() { return ++s != r || (i && (t.remove(i.element, "is-positioning-post-drag"), i.isPlacing = !1, i.copyPlaceRectPosition()), o.unstamp(e), o.sortItemsByPosition(), n && o.emitEvent("dragItemPositioned", [i]), !0) }
        }, l.prototype.bindDraggabillyEvents = function(t) { t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd) }, l.prototype.bindUIDraggableEvents = function(t) { t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop) }, l.Rect = n, l.Packer = s, l
    }),
    function(t, e) { "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : e(t.Isotope.LayoutMode, t.Packery, t.getSize) }(window, function(t, e, i) {
        var n = t.create("packery"),
            s = n.prototype._getElementOffset,
            r = n.prototype._getMeasurement;
        (function(t, e) { for (var i in e) t[i] = e[i] })(n.prototype, e.prototype), n.prototype._getElementOffset = s, n.prototype._getMeasurement = r;
        var o = n.prototype._resetLayout;
        n.prototype._resetLayout = function() { this.packer = this.packer || new e.Packer, o.apply(this, arguments) };
        var a = n.prototype._getItemLayoutPosition;
        n.prototype._getItemLayoutPosition = function(t) { return t.rect = t.rect || new e.Rect, a.call(this, t) };
        var l = n.prototype._manageStamp;
        return n.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments) }, n.prototype.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t,
                n = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            return e && t[n] != this.size[n]
        }, n
    }),
    function(t, e) {
        var i = e.document;
        t.fn.share = function(n) {
            var s = {
                    init: function(n) {
                        this.share.settings = t.extend({}, this.share.defaults, n);
                        var s = (this.share.settings, this.share.settings.networks),
                            o = this.share.settings.theme,
                            a = this.share.settings.orientation,
                            l = this.share.settings.affix,
                            c = this.share.settings.margin,
                            d = this.share.settings.title || t(i).attr("title"),
                            h = this.share.settings.urlToShare || t(location).attr("href"),
                            u = "";
                        return t.each(t(i).find('meta[name="description"]'), function(e, i) { u = t(i).attr("content") }), this.each(function() {
                            var i, n = t(this),
                                p = n.attr("id"),
                                f = encodeURIComponent(h),
                                m = d.replace("|", ""),
                                g = u.substring(0, 250);
                            s.forEach(function(e) { i = (i = r.networkDefs[e].url).replace("|u|", f).replace("|t|", m).replace("|d|", g).replace("|140|", m.substring(0, 130)), t("<a href='" + i + "' title='Share this page on " + e + "' class='pop share-" + o + " share-" + o + "-" + e + "'></a>").appendTo(n) }), t("#" + p + ".share-" + o).css("margin", c), "horizontal" != a ? t("#" + p + " a.share-" + o).css("display", "block") : t("#" + p + " a.share-" + o).css("display", "inline-block"), void 0 !== l && (n.addClass("share-affix"), -1 != l.indexOf("right") ? (n.css("left", "auto"), n.css("right", "0px"), -1 != l.indexOf("center") && n.css("top", "40%")) : -1 != l.indexOf("left center") && n.css("top", "40%"), -1 != l.indexOf("bottom") && (n.css("bottom", "0px"), n.css("top", "auto"), -1 != l.indexOf("center") && n.css("left", "40%"))), t(".pop").click(function() { return e.open(t(this).attr("href"), "t", "toolbar=0,resizable=1,status=0,width=640,height=528"), !1 })
                        })
                    }
                },
                r = { networkDefs: { facebook: { url: "http://www.facebook.com/share.php?u=|u|" }, twitter: { url: "https://twitter.com/share?via=in1.com&text=|140|" }, linkedin: { url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com" }, in1: { url: "http://www.in1.com/cast?u=|u|", w: "490", h: "529" }, tumblr: { url: "http://www.tumblr.com/share?v=3&u=|u|" }, digg: { url: "http://digg.com/submit?url=|u|&title=|t|" }, googleplus: { url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|" }, reddit: { url: "http://reddit.com/submit?url=|u|" }, pinterest: { url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|" }, posterous: { url: "http://posterous.com/share?linkto=|u|&title=|t|" }, stumbleupon: { url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|" }, email: { url: "mailto:?subject=|t|" } } };
            return s[n] ? s[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error('Method "' + n + '" does not exist in social plugin') : s.init.apply(this, arguments)
        }, t.fn.share.defaults = { networks: ["in1", "facebook", "twitter", "linkedin"], theme: "icon", autoShow: !0, margin: "3px", orientation: "horizontal", useIn1: !0 }, t.fn.share.settings = {}
    }(jQuery, window), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i) {
        var n = function(t) {
                var e = i.createElement("script"),
                    n = i.getElementsByTagName("head")[0];
                e.src = location.protocol + "//www.youtube.com/iframe_api", n.appendChild(e), n = null, e = null, s(t)
            },
            s = function(i) { "undefined" == typeof YT && void 0 === e.loadingPlayer ? (e.loadingPlayer = !0, e.dfd = t.Deferred(), e.onYouTubeIframeAPIReady = function() { e.onYouTubeIframeAPIReady = null, e.dfd.resolve("John"), i() }) : e.dfd.done(function(t) { i() }) };
        YTPlayer = {
            player: null,
            defaults: { ratio: 16 / 9, videoId: "LSmgKRx5pBo", mute: !0, repeat: !0, width: t(e).width(), playButtonClass: "YTPlayer-play", pauseButtonClass: "YTPlayer-pause", muteButtonClass: "YTPlayer-mute", volumeUpClass: "YTPlayer-volume-up", volumeDownClass: "YTPlayer-volume-down", start: 0, pauseOnScroll: !1, fitToBackground: !0, playerVars: { modestbranding: 1, autoplay: 1, controls: 0, showinfo: 0, wmode: "transparent", branding: 0, rel: 0, autohide: 0, origin: e.location.origin }, events: null },
            init: function(i, s) { var r = this; return r.userOptions = s, r.$body = t("body"), r.$node = t(i), r.$window = t(e), r.defaults.events = { onReady: function(t) { r.onPlayerReady(t), r.options.pauseOnScroll && r.pauseOnScroll(), "function" == typeof r.options.callback && r.options.callback.call(this) }, onStateChange: function(t) { 1 === t.data ? r.$node.addClass("loaded") : 0 === t.data && r.options.repeat && r.player.seekTo(r.options.start) } }, r.options = t.extend(!0, {}, r.defaults, r.userOptions), r.ID = (new Date).getTime(), r.holderID = "YTPlayer-ID-" + r.ID, r.options.fitToBackground ? r.createBackgroundVideo() : r.createContainerVideo(), r.$window.on("resize.YTplayer" + r.ID, function() { r.resize(r) }), n(r.onYouTubeIframeAPIReady.bind(r)), r.resize(r), r },
            pauseOnScroll: function() {
                var t = this;
                t.$window.on("scroll.YTplayer" + t.ID, function() { 1 === t.player.getPlayerState() && t.player.pauseVideo() }), t.$window.scrollStopped(function() { 2 === t.player.getPlayerState() && t.player.playVideo() })
            },
            createContainerVideo: function() {
                var e = this,
                    i = t('<div id="ytplayer-container' + e.ID + '" >                                    <div id="' + e.holderID + '" class="ytplayer-player"></div>                                     </div>                                     <div id="ytplayer-shield"></div>');
                e.$node.append(i), e.$YTPlayerString = i, i = null
            },
            createBackgroundVideo: function() {
                var e = this,
                    i = t('<div id="ytplayer-container' + e.ID + '" class="ytplayer-container background">                                    <div id="' + e.holderID + '" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield"></div>');
                e.$node.append(i), e.$YTPlayerString = i, i = null
            },
            resize: function(e) {
                var i = t(".media-container");
                e.options.fitToBackground || (i = e.$node);
                var n, s, r = i.width(),
                    o = i.height(),
                    a = t("#" + e.holderID);
                r / e.options.ratio < o ? (n = Math.ceil(o * e.options.ratio), a.width(n).height(o).css({ left: (r - n) / 2, top: 0 })) : (s = Math.ceil(r / e.options.ratio), a.width(r).height(s).css({ left: 0, top: 0 })), a = null, i = null
            },
            onYouTubeIframeAPIReady: function() {
                var t = this;
                t.player = new e.YT.Player(t.holderID, { width: t.options.width, height: Math.ceil(t.options.width / t.options.ratio), videoId: t.options.videoId, playerVars: t.options.playerVars, events: t.options.events })
            },
            onPlayerReady: function(t) { this.options.mute && t.target.mute(), t.target.playVideo() },
            getPlayer: function() { return this.player },
            destroy: function() {
                var i = this;
                i.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"), i.$YTPlayerString.remove(), t(e).off("resize.YTplayer" + i.ID), t(e).off("scroll.YTplayer" + i.ID), i.$body = null, i.$node = null, i.$YTPlayerString = null, i.player.destroy(), i.player = null
            }
        }, t.fn.scrollStopped = function(e) {
            var i = t(this),
                n = this;
            i.scroll(function() { i.data("scrollTimeout") && clearTimeout(i.data("scrollTimeout")), i.data("scrollTimeout", setTimeout(e, 250, n)) })
        }, t.fn.YTPlayer = function(e) {
            return this.each(function() {
                var i = this;
                t(i).data("yt-init", !0);
                var n = Object.create(YTPlayer);
                n.init(i, e), t.data(i, "ytPlayer", n)
            })
        }
    }(jQuery, window, document),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(e) {
        function W(t) {
            if (!console || !console.warn) throw "Scrollax: " + t;
            console.warn("Scrollax: " + t)
        }

        function ka(t) { var e = !!("pageYOffset" in t); return { width: e ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : t.offsetWidth, height: e ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : t.offsetHeight, left: t[e ? "pageXOffset" : "scrollLeft"], top: t[e ? "pageYOffset" : "scrollTop"] } }

        function X(a) { return (a = a.data("scrollax")) && eval("({" + a + "})") || {} }

        function Y(t) { var e, i; return !!(t && "object" == typeof t && "object" == typeof t.window && t.window == t && t.setTimeout && t.alert && (e = t.document) && "object" == typeof e && (i = e.defaultView || e.parentWindow) && "object" == typeof i && i == t) }
        var v = Array.prototype,
            C = v.push,
            Z = v.splice,
            aa = Object.prototype.hasOwnProperty,
            la = /[-+]?\d+(\.\d+)?/g,
            ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
            ba = e(window),
            ca = e(document.body),
            da, ea, L, M, N, q = function(t, i, n) {
                function s() { return B = K ? ca.find(V) : h.find(V), H.length = 0, x = !!R.horizontal, B.each(J), o(), R.performanceTrick && (v = K ? ca : h), l("load"), d }

                function r() { f && (f = clearTimeout(f)), f = setTimeout(function() { d.reload() }) }

                function o() {
                    var e = H.length;
                    if (R.performanceTrick && v && (clearTimeout(y), b || (v.addClass("scrollax-performance"), b = !0), y = setTimeout(function() { v.removeClass("scrollax-performance"), b = !1 }, 100)), e) {
                        w = ka(t);
                        for (var i = 0; i < e; i++) k = H[i], 0 > (S = L(k.element, t))[x ? "right" : "bottom"] || S[x ? "left" : "top"] > w[x ? "width" : "height"] || (E = k.options, _ = E.offset || R.offset || 0, D = S[x ? "right" : "bottom"], O = S[x ? "width" : "height"], 0 > (T = (O - D + _) / O) && (D = S[x ? "left" : "top"], O = w[x ? "width" : "height"], T = (O - D + _) / O - 1), 1 < T || -1 > T || a(k, T));
                        l("scroll", w)
                    }
                }

                function a(t, i) {
                    var n = (P = t.parallaxElements).length;
                    if (n)
                        for (var s = 0; s < n; s++) {
                            $ = P[s];
                            var r = $.element,
                                o = i;
                            for (z in I = $.properties || (x ? { translateX: "100%" } : { translateY: "100%" }), F = "", I) {
                                if ("number" == typeof(A = I[z])) A *= o;
                                else if ("string" == typeof A)
                                    for (j = A.match(la), m = 0, g = j.length; m < g; m++) A = A.replace(j[m], parseFloat(j[m] * o));
                                if (-1 !== e.inArray(z, ma)) F += z + "(" + A + ")";
                                else { var a, l = r.style; "opacity" === z ? a = 0 > (a = 0 > o ? 1 + A : 1 - A) ? 0 : 1 < a ? 1 : a : a = A, l[z] = a }
                            }
                            F && (r.style[da] = ea + F)
                        }
                }

                function l(t, e) { if (U[t]) { for (g = U[t].length, m = Q.length = 0; m < g; m++) C.call(Q, U[t][m]); for (m = 0; m < g; m++) Q[m].call(d, t, e) } }

                function c(t, e) {
                    for (var i = 0, n = U[t].length; i < n; i++)
                        if (U[t][i] === e) return i;
                    return -1
                }
                var d = this,
                    h = t && e(t).eq(0) || ba,
                    u = q.instances,
                    p = null;
                if (t = h[0], e.each(u, function(e, i) { e && e.frame === t && (p = !0) }), !t || p) W(p ? "Scrollax: Scrollax has been initialized for this frame!" : "Scrollax: Frame is not available!");
                else {
                    var f, m, g, v, y, b, w, x, _, S, k, E, T, D, O, P, $, I, z, A, F, j, R = e.extend({}, q.defaults, i),
                        H = [],
                        B = null,
                        V = R.parentSelector || "[data-scrollax-parent]",
                        G = R.elementsSelector || "[data-scrollax]",
                        U = {},
                        Q = [],
                        K = Y(t);
                    d.frame = t, d.options = R, d.parents = H, d.initialized = !1, d.reload = s;
                    var J = function(t, i) {
                        var n = e(i),
                            s = X(e(i)),
                            r = {};
                        r.element = i, r.options = s, r.parallaxElements = [], n.find(G).each(function(t, i) {
                            var n = X(e(i));
                            n.element = i, C.call(r.parallaxElements, n)
                        }), C.call(H, r)
                    };
                    d.scroll = o, d.getIndex = function(t) { return void 0 !== t ? "number" != typeof t && "string" != typeof t || "" === t || isNaN(t) ? B.index(t) : 0 <= t && t < H.length ? t : -1 : -1 }, d.one = function(t, e) { return d.on(t, function i() { e.apply(d, arguments), d.off(t, i) }), d }, d.on = function(t, e) {
                        if ("object" == typeof t)
                            for (var i in t) aa.call(t, i) && d.on(i, t[i]);
                        else if ("function" == typeof e)
                            for (var n = 0, s = (i = t.split(" ")).length; n < s; n++) U[i[n]] = U[i[n]] || [], -1 === c(i[n], e) && C.call(U[i[n]], e);
                        else if ("array" == typeof e)
                            for (i = 0, n = e.length; i < n; i++) d.on(t, e[i]);
                        return d
                    }, d.off = function(t, e) {
                        if (e instanceof Array)
                            for (var i = 0, n = e.length; i < n; i++) d.off(t, e[i]);
                        else {
                            n = 0;
                            for (var s = (i = t.split(" ")).length; n < s; n++)
                                if (U[i[n]] = U[i[n]] || [], void 0 === e) U[i[n]].length = 0;
                                else { var r = c(i[n], e); - 1 !== r && Z.call(U[i[n]], r, 1) }
                        }
                        return d
                    }, d.set = function(t, i) { return e.isPlainObject(t) ? e.extend(R, t) : aa.call(R, t) && (R[t] = i), s(), d }, d.destroy = function() { return N(window, "resize", r), N(t, "scroll", o), e.each(u, function(e, i) { e && e.frame === t && Z.call(q.instances, i, 1) }), H.length = 0, d.initialized = !1, l("destroy"), d }, d.init = function() { if (!d.initialized) return d.on(n), s(), M(window, "resize", r), M(t, "scroll", o), C.call(q.instances, d), d.initialized = !0, l("initialized"), d }
                }
            };
        q.instances = [],
            function() {
                var t, e, i, n, s, r, o, a;
                L = function(l, c) {
                    if (e = l.ownerDocument || l, i = e.documentElement, n = Y(c) ? c : e.defaultView || window, c = c && c !== e ? c : i, s = (n.pageYOffset || i.scrollTop) - i.clientTop, r = (n.pageXOffset || i.scrollLeft) - i.clientLeft, o = { top: 0, left: 0 }, !l || !l.getBoundingClientRect) return null;
                    var d = {},
                        h = l.getBoundingClientRect();
                    for (t in h) d[t] = h[t];
                    return (o = d).width = o.right - o.left, o.height = o.bottom - o.top, c === n ? o : (o.top += s, o.left += r, o.right += r, o.bottom += s, c === i ? o : (a = L(c), o.left -= a.left, o.right -= a.left, o.top -= a.top, o.bottom -= a.top, o))
                }
            }(),
            function() {
                function t() { this.returnValue = !1 }

                function e() { this.cancelBubble = !0 }
                M = window.addEventListener ? function(t, e, i, n) { return t.addEventListener(e, i, n || !1), i } : function(i, n, s) {
                    var r = n + s;
                    return i[r] = i[r] || function() {
                        var n = window.event;
                        n.target = n.srcElement, n.preventDefault = t, n.stopPropagation = e, s.call(i, n)
                    }, i.attachEvent("on" + n, i[r]), s
                }, N = window.removeEventListener ? function(t, e, i, n) { return t.removeEventListener(e, i, n || !1), i } : function(t, e, i) {
                    var n = e + i;
                    t.detachEvent("on" + e, t[n]);
                    try { delete t[n] } catch (e) { t[n] = void 0 }
                    return i
                }
            }(),
            function() {
                function t(t) { for (var n = 0, s = e.length; n < s; n++) { var r = e[n] ? e[n] + t.charAt(0).toUpperCase() + t.slice(1) : t; if (null != i.style[r]) return r } }
                var e = ["", "webkit", "moz", "ms", "o"],
                    i = document.createElement("div");
                da = t("transform"), ea = t("perspective") ? "translateZ(0) " : ""
            }(), q.defaults = { horizontal: !1, offset: 0, parentSelector: null, elementsSelector: null, performanceTrick: !1 }, window.Scrollax = q, e.fn.Scrollax = function(t, i) {
                var n, s;
                return e.isPlainObject(t) || ("string" != typeof t && !1 !== t || (n = !1 === t ? "destroy" : t, s = slice.call(arguments, 1)), t = {}), this.each(function(r, o) {
                    var a = e.data(o, "scrollax");
                    a || n ? a && n && a[n] && a[n].apply(a, s) : e.data(o, "scrollax", new q(o, t, i).init())
                })
            }, e.Scrollax = function(t, e) { ba.Scrollax(t, e) };
        var v = document.head || document.getElementsByTagName("head")[0],
            w = document.createElement("style");
        return w.type = "text/css", w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" : w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };")), v.appendChild(w), q
    }),
    function(t) {
        t.fn.appear = function(e, i) {
            var n = t.extend({ one: !0 }, i);
            return this.each(function() {
                var i = t(this);
                if (i.appeared = !1, e) {
                    var s = t(window),
                        r = function() {
                            if (i.is(":visible")) {
                                var t = s.scrollLeft(),
                                    e = s.scrollTop(),
                                    r = i.offset(),
                                    o = r.left,
                                    a = r.top;
                                a + i.height() >= e && a <= e + s.height() && o + i.width() >= t && o <= t + s.width() ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1
                            } else i.appeared = !1
                        },
                        o = function() {
                            if (i.appeared = !0, n.one) {
                                s.unbind("scroll", r);
                                var o = t.inArray(r, t.fn.appear.checks);
                                o >= 0 && t.fn.appear.checks.splice(o, 1)
                            }
                            e.apply(this, arguments)
                        };
                    n.one ? i.one("appear", n.data, o) : i.bind("appear", n.data, o), s.scroll(r), t.fn.appear.checks.push(r), r()
                } else i.trigger("appear", n.data)
            })
        }, t.extend(t.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var e = t.fn.appear.checks.length;
                if (e > 0)
                    for (; e--;) t.fn.appear.checks[e]()
            },
            run: function() { t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20) }
        }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, i) {
            var n = t.fn[i];
            n && (t.fn[i] = function() { var e = n.apply(this, arguments); return t.fn.appear.run(), e })
        })
    }(jQuery), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i, n) {
        "use strict";
        var s = {
            init: function(i, n) { this.options = t.extend({}, t.fn.singlePageNav.defaults, i), this.container = n, this.$container = t(n), this.$links = this.$container.find("a"), "" !== this.options.filter && (this.$links = this.$links.filter(this.options.filter)), this.$window = t(e), this.$htmlbody = t("html, body"), this.$links.on("click.singlePageNav", t.proxy(this.handleClick, this)), this.didScroll = !1, this.checkPosition(), this.setTimer() },
            handleClick: function(e) {
                var i = this,
                    n = e.currentTarget,
                    s = t(n.hash);
                e.preventDefault(), s.length && (i.clearTimer(), "function" == typeof i.options.beforeStart && i.options.beforeStart(), i.setActiveLink(n.hash), i.scrollTo(s, function() { i.options.updateHash && history.pushState && history.pushState(null, null, n.hash), i.setTimer(), "function" == typeof i.options.onComplete && i.options.onComplete() }))
            },
            scrollTo: function(t, e) {
                var i = this.getCoords(t).top,
                    n = !1;
                this.$htmlbody.stop().animate({ scrollTop: i }, { duration: this.options.speed, easing: this.options.easing, complete: function() { "function" != typeof e || n || e(), n = !0 } })
            },
            setTimer: function() {
                var t = this;
                t.$window.on("scroll.singlePageNav", function() { t.didScroll = !0 }), t.timer = setInterval(function() { t.didScroll && (t.didScroll = !1, t.checkPosition()) }, 250)
            },
            clearTimer: function() { clearInterval(this.timer), this.$window.off("scroll.singlePageNav"), this.didScroll = !1 },
            checkPosition: function() {
                var t = this.$window.scrollTop(),
                    e = this.getCurrentSection(t);
                null !== e && this.setActiveLink(e)
            },
            getCoords: function(t) { return { top: Math.round(t.offset().top) - this.options.offset } },
            setActiveLink: function(i) {
                var n = this.$container.find("a[href$='" + i + "']");
                n.hasClass(this.options.currentClass) || (this.$links.removeClass(this.options.currentClass), n.addClass(this.options.currentClass), t(".scroll-nav  a").hasClass("act-link") && t(".scroll-nav  a.act-link").each(function() {
                    var i = t(this).data("bgscr"),
                        n = t(this).data("bgtex");
                    e.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? t(".bg-title span").html(n) : t(".bg-title span").html(n).shuffleLetters({}), t(".column-image").addClass("scrbg"), setTimeout(function() { t(".bg-scroll").css("background-image", "url(" + i + ")"), t(".column-image").removeClass("scrbg") }, 700)
                }))
            },
            getCurrentSection: function(e) { var i, n, s; for (i = 0; i < this.$links.length; i++) n = this.$links[i].hash, t(n).length && e >= this.getCoords(t(n)).top - this.options.threshold && (s = n); return s || (0 === this.$links.length ? null : this.$links[0].hash) }
        };
        t.fn.singlePageNav = function(t) { return this.each(function() { Object.create(s).init(t, this) }) }, t.fn.singlePageNav.defaults = { offset: 0, threshold: 120, speed: 400, currentClass: "current", easing: "swing", updateHash: !1, filter: "", onComplete: !1, beforeStart: !1 }
    }(jQuery, window, document),
    function(t) {
        t.isScrollToFixed = function(e) { return !!t(e).data("ScrollToFixed") }, t.ScrollToFixed = function(e, i) {
            var n = this;
            n.$el = t(e), n.el = e, n.$el.data("ScrollToFixed", n);
            var s, r, o, a, l = !1,
                c = n.$el,
                d = 0,
                h = 0,
                u = -1,
                p = -1,
                f = null;

            function m() { var t = n.options.limit; return t ? "function" == typeof t ? t.apply(c) : t : 0 }

            function g() { return "fixed" === s }

            function v() { return "absolute" === s }

            function y() { return !(g() || v()) }

            function b() {
                if (!g()) {
                    var t = c[0].getBoundingClientRect();
                    f.css({ display: c.css("display"), width: t.width, height: t.height, float: c.css("float") }), cssOptions = { "z-index": n.options.zIndex, position: "fixed", top: -1 == n.options.bottom ? S() : "", bottom: -1 == n.options.bottom ? "" : n.options.bottom, "margin-left": "0px" }, n.options.dontSetWidth || (cssOptions.width = c.css("width")), c.css(cssOptions), c.addClass(n.options.baseClassName), n.options.className && c.addClass(n.options.className), s = "fixed"
                }
            }

            function w() {
                var t = m(),
                    e = h;
                n.options.removeOffsets && (e = "", t -= d), cssOptions = { position: "absolute", top: t, left: e, "margin-left": "0px", bottom: "" }, n.options.dontSetWidth || (cssOptions.width = c.css("width")), c.css(cssOptions), s = "absolute"
            }

            function x() { y() || (p = -1, f.css("display", "none"), c.css({ "z-index": a, width: "", position: r, left: "", top: o, "margin-left": "" }), c.removeClass("scroll-to-fixed-fixed"), n.options.className && c.removeClass(n.options.className), s = null) }

            function _(t) { t != p && (c.css("left", h - t), p = t) }

            function S() { var t = n.options.marginTop; return t ? "function" == typeof t ? t.apply(c) : t : 0 }

            function k() {
                if (t.isScrollToFixed(c) && !c.is(":hidden")) {
                    var e = l,
                        i = y();
                    l ? y() && (d = c.offset().top, h = c.offset().left) : (c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed"), p = -1, d = c.offset().top, h = c.offset().left, n.options.offsets && (h += c.offset().left - c.position().left), -1 == u && (u = h), s = c.css("position"), l = !0, -1 != n.options.bottom && (c.trigger("preFixed.ScrollToFixed"), b(), c.trigger("fixed.ScrollToFixed")));
                    var o = t(window).scrollLeft(),
                        a = t(window).scrollTop(),
                        f = m();
                    n.options.minWidth && t(window).width() < n.options.minWidth ? y() && e || (E(), c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed")) : n.options.maxWidth && t(window).width() > n.options.maxWidth ? y() && e || (E(), c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed")) : -1 == n.options.bottom ? f > 0 && a >= f - S() ? i || v() && e || (E(), c.trigger("preAbsolute.ScrollToFixed"), w(), c.trigger("unfixed.ScrollToFixed")) : a >= d - S() ? (g() && e || (E(), c.trigger("preFixed.ScrollToFixed"), b(), p = -1, c.trigger("fixed.ScrollToFixed")), _(o)) : y() && e || (E(), c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed")) : f > 0 ? a + t(window).height() - c.outerHeight(!0) >= f - (S() || - function() { if (!n.options.bottom) return 0; return n.options.bottom }()) ? g() && (E(), c.trigger("preUnfixed.ScrollToFixed"), "absolute" === r ? w() : x(), c.trigger("unfixed.ScrollToFixed")) : (g() || (E(), c.trigger("preFixed.ScrollToFixed"), b()), _(o), c.trigger("fixed.ScrollToFixed")) : _(o)
                }
            }

            function E() { var t = c.css("position"); "absolute" == t ? c.trigger("postAbsolute.ScrollToFixed") : "fixed" == t ? c.trigger("postFixed.ScrollToFixed") : c.trigger("postUnfixed.ScrollToFixed") }
            var T = function(t) { c.is(":visible") ? (l = !1, k()) : x() },
                C = function(t) { window.requestAnimationFrame ? requestAnimationFrame(k) : k() };
            n.init = function() {
                n.options = t.extend({}, t.ScrollToFixed.defaultOptions, i), a = c.css("z-index"), n.$el.css("z-index", n.options.zIndex), f = t("<div />"), s = c.css("position"), r = c.css("position"), c.css("float"), o = c.css("top"), y() && n.$el.after(f), t(window).bind("resize.ScrollToFixed", T), t(window).bind("scroll.ScrollToFixed", C), "ontouchmove" in window && t(window).bind("touchmove.ScrollToFixed", k), n.options.preFixed && c.bind("preFixed.ScrollToFixed", n.options.preFixed), n.options.postFixed && c.bind("postFixed.ScrollToFixed", n.options.postFixed), n.options.preUnfixed && c.bind("preUnfixed.ScrollToFixed", n.options.preUnfixed), n.options.postUnfixed && c.bind("postUnfixed.ScrollToFixed", n.options.postUnfixed), n.options.preAbsolute && c.bind("preAbsolute.ScrollToFixed", n.options.preAbsolute), n.options.postAbsolute && c.bind("postAbsolute.ScrollToFixed", n.options.postAbsolute), n.options.fixed && c.bind("fixed.ScrollToFixed", n.options.fixed), n.options.unfixed && c.bind("unfixed.ScrollToFixed", n.options.unfixed), n.options.spacerClass && f.addClass(n.options.spacerClass), c.bind("resize.ScrollToFixed", function() { f.height(c.height()) }), c.bind("scroll.ScrollToFixed", function() { c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed"), k() }), c.bind("detach.ScrollToFixed", function(e) {
                    ! function(t) {
                        (t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1
                    }(e), c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed"), t(window).unbind("resize.ScrollToFixed", T), t(window).unbind("scroll.ScrollToFixed", C), c.unbind(".ScrollToFixed"), f.remove(), n.$el.removeData("ScrollToFixed")
                }), T()
            }, n.init()
        }, t.ScrollToFixed.defaultOptions = { marginTop: 0, limit: 0, bottom: -1, zIndex: 1e3, baseClassName: "scroll-to-fixed-fixed" }, t.fn.scrollToFixed = function(e) { return this.each(function() { new t.ScrollToFixed(this, e) }) }
    }(jQuery),
    function(t) {
        t.fn.countTo = function(e) {
            return e = e || {}, t(this).each(function() {
                var i = t.extend({}, t.fn.countTo.defaults, { from: t(this).data("from"), to: t(this).data("num"), speed: t(this).data("speed"), refreshInterval: t(this).data("refresh-interval"), decimals: t(this).data("decimals") }, e),
                    n = Math.ceil(i.speed / i.refreshInterval),
                    s = (i.to - i.from) / n,
                    r = this,
                    o = t(this),
                    a = 0,
                    l = i.from,
                    c = o.data("countTo") || {};

                function d(t) {
                    var e = i.formatter.call(r, t, i);
                    o.text(e)
                }
                o.data("countTo", c), c.interval && clearInterval(c.interval), c.interval = setInterval(function() {
                    a++, d(l += s), "function" == typeof i.onUpdate && i.onUpdate.call(r, l);
                    a >= n && (o.removeData("countTo"), clearInterval(c.interval), l = i.to, "function" == typeof i.onComplete && i.onComplete.call(r, l))
                }, i.refreshInterval), d(l)
            })
        }, t.fn.countTo.defaults = { from: 0, to: 0, speed: 2500, refreshInterval: 100, decimals: 0, formatter: function(t, e) { return t.toFixed(e.decimals) }, onUpdate: null, onComplete: null }
    }(jQuery),
    function(t) {
        "use strict";
        t.ajaxChimp = { responses: { "We have sent you a confirmation email": 0, "Please enter a value": 1, "An email address must contain a single @": 2, "The domain portion of the email address is invalid (the portion after the @: )": 3, "The username portion of the email address is invalid (the portion before the @: )": 4, "This email address looks fake or invalid. Please enter a real email address": 5 }, translations: { en: null }, init: function(e, i) { t(e).ajaxChimp(i) } }, t.fn.ajaxChimp = function(e) {
            return t(this).each(function(i, n) {
                var s = t(n),
                    r = s.find("input[type=text]"),
                    o = s.find("label[for=" + r.attr("id") + "]"),
                    a = t.extend({ url: s.attr("action"), language: "en" }, e),
                    l = a.url.replace("/post?", "/post-json?").concat("&c=?");
                s.attr("novalidate", "true"), r.attr("name", "EMAIL"), s.submit(function() {
                    var e;
                    var i = {},
                        n = s.serializeArray();
                    t.each(n, function(t, e) { i[e.name] = e.value }), t.ajax({
                        url: l,
                        data: i,
                        success: function(i) {
                            if ("success" === i.result) e = "We have sent you a confirmation email", o.removeClass("error").addClass("valid"), r.removeClass("error").addClass("valid");
                            else {
                                r.removeClass("valid").addClass("error"), o.removeClass("valid").addClass("error");
                                try {
                                    var n = i.msg.split(" - ", 2);
                                    void 0 === n[1] ? e = i.msg : parseInt(n[0], 10).toString() === n[0] ? (n[0], e = n[1]) : e = i.msg
                                } catch (t) { e = i.msg }
                            }
                            "en" !== a.language && void 0 !== t.ajaxChimp.responses[e] && t.ajaxChimp.translations && t.ajaxChimp.translations[a.language] && t.ajaxChimp.translations[a.language][t.ajaxChimp.responses[e]] && (e = t.ajaxChimp.translations[a.language][t.ajaxChimp.responses[e]]), o.html(e), o.show(2e3), a.callback && a.callback(i)
                        },
                        dataType: "jsonp",
                        error: function(t, e) { console.log("mailchimp ajax submit error: " + e) }
                    });
                    var c = "Submitting...";
                    return "en" !== a.language && t.ajaxChimp.translations && t.ajaxChimp.translations[a.language] && t.ajaxChimp.translations[a.language].submit && (c = t.ajaxChimp.translations[a.language].submit), o.html(c).show(2e3), !1
                })
            }), this
        }
    }(jQuery),
    function(t, e) { "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : e() }(0, function() {
        var t = "",
            e = 20,
            i = !0,
            n = [],
            s = !1,
            r = !0,
            o = !0,
            a = null,
            l = !0,
            c = !0,
            d = null,
            h = !0,
            u = !1,
            p = !0,
            f = !0,
            m = !1,
            g = null;

        function v(t) { return t.replace(/<b[^>]*>(.*?)<\/b>/gi, function(t, e) { return e }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "") }

        function y(t) { for (var e = t.getElementsByTagName("a"), i = e.length - 1; i >= 0; i--) e[i].setAttribute("target", "_blank") }

        function b(t, e) { for (var i = [], n = new RegExp("(^| )" + e + "( |$)"), s = t.getElementsByTagName("*"), r = 0, o = s.length; r < o; r++) n.test(s[r].className) && i.push(s[r]); return i }

        function w(t) { if (void 0 !== t && t.innerHTML.indexOf("data-srcset") >= 0) { var e = t.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0]; return decodeURIComponent(e).split('"')[1] } }
        var x = {
            fetch: function(l) {
                if (void 0 === l.maxTweets && (l.maxTweets = 20), void 0 === l.enableLinks && (l.enableLinks = !0), void 0 === l.showUser && (l.showUser = !0), void 0 === l.showTime && (l.showTime = !0), void 0 === l.dateFunction && (l.dateFunction = "default"), void 0 === l.showRetweet && (l.showRetweet = !0), void 0 === l.customCallback && (l.customCallback = null), void 0 === l.showInteraction && (l.showInteraction = !0), void 0 === l.showImages && (l.showImages = !1), void 0 === l.linksInNewWindow && (l.linksInNewWindow = !0), void 0 === l.showPermalinks && (l.showPermalinks = !0), void 0 === l.dataOnly && (l.dataOnly = !1), s) n.push(l);
                else {
                    s = !0, t = l.domId, e = l.maxTweets, i = l.enableLinks, o = l.showUser, r = l.showTime, c = l.showRetweet, a = l.dateFunction, d = l.customCallback, h = l.showInteraction, u = l.showImages, p = l.linksInNewWindow, f = l.showPermalinks, m = l.dataOnly;
                    var v = document.getElementsByTagName("head")[0];
                    null !== g && v.removeChild(g), (g = document.createElement("script")).type = "text/javascript", void 0 !== l.list ? g.src = "https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug=" + l.list.listSlug + "&screen_name=" + l.list.screenName + "&suppress_response_codes=true&lang=" + (l.lang || "en") + "&rnd=" + Math.random() : void 0 !== l.profile ? g.src = "https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name=" + l.profile.screenName + "&suppress_response_codes=true&lang=" + (l.lang || "en") + "&rnd=" + Math.random() : void 0 !== l.likes ? g.src = "https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name=" + l.likes.screenName + "&suppress_response_codes=true&lang=" + (l.lang || "en") + "&rnd=" + Math.random() : g.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + l.id + "?&lang=" + (l.lang || "en") + "&callback=__twttrf.callback&suppress_response_codes=true&rnd=" + Math.random(), v.appendChild(g)
                }
            },
            callback: function(g) {
                if (void 0 === g || void 0 === g.body) return s = !1, void(n.length > 0 && (x.fetch(n[0]), n.splice(0, 1)));
                g.body = g.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, ""), u || (g.body = g.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, "")), o || (g.body = g.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, ""));
                var _ = document.createElement("div");

                function S(t) { var e = t.getElementsByTagName("img")[0]; return e.src = e.getAttribute("data-src-2x"), t }
                _.innerHTML = g.body, void 0 === _.getElementsByClassName && (l = !1);
                var k = [],
                    E = [],
                    T = [],
                    C = [],
                    M = [],
                    D = [],
                    O = [],
                    P = 0;
                if (l)
                    for (var L = _.getElementsByClassName("timeline-Tweet"); P < L.length;) L[P].getElementsByClassName("timeline-Tweet-retweetCredit").length > 0 ? M.push(!0) : M.push(!1), (!M[P] || M[P] && c) && (k.push(L[P].getElementsByClassName("timeline-Tweet-text")[0]), D.push(L[P].getAttribute("data-tweet-id")), o && E.push(S(L[P].getElementsByClassName("timeline-Tweet-author")[0])), T.push(L[P].getElementsByClassName("dt-updated")[0]), O.push(L[P].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== L[P].getElementsByClassName("timeline-Tweet-media")[0] ? C.push(L[P].getElementsByClassName("timeline-Tweet-media")[0]) : C.push(void 0)), P++;
                else
                    for (L = b(_, "timeline-Tweet"); P < L.length;) b(L[P], "timeline-Tweet-retweetCredit").length > 0 ? M.push(!0) : M.push(!1), (!M[P] || M[P] && c) && (k.push(b(L[P], "timeline-Tweet-text")[0]), D.push(L[P].getAttribute("data-tweet-id")), o && E.push(S(b(L[P], "timeline-Tweet-author")[0])), T.push(b(L[P], "dt-updated")[0]), O.push(b(L[P], "timeline-Tweet-timestamp")[0]), void 0 !== b(L[P], "timeline-Tweet-media")[0] ? C.push(b(L[P], "timeline-Tweet-media")[0]) : C.push(void 0)), P++;
                k.length > e && (k.splice(e, k.length - e), E.splice(e, E.length - e), T.splice(e, T.length - e), M.splice(e, M.length - e), C.splice(e, C.length - e), O.splice(e, O.length - e));
                var $ = [],
                    I = (P = k.length, 0);
                if (m)
                    for (; I < P;) $.push({ tweet: k[I].innerHTML, author: E[I] ? E[I].innerHTML : "Unknown Author", time: T[I].textContent, timestamp: T[I].getAttribute("datetime").replace("+0000", "Z").replace(/([\+\-])(\d\d)(\d\d)/, "$1$2:$3"), image: w(C[I]), rt: M[I], tid: D[I], permalinkURL: void 0 === O[I] ? "" : O[I].href }), I++;
                else
                    for (; I < P;) {
                        if ("string" != typeof a) {
                            var z = T[I].getAttribute("datetime"),
                                Y = new Date(T[I].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
                                A = a(Y, z);
                            if (T[I].setAttribute("aria-label", A), k[I].textContent)
                                if (l) T[I].textContent = A;
                                else {
                                    var F = document.createElement("p"),
                                        j = document.createTextNode(A);
                                    F.appendChild(j), F.setAttribute("aria-label", A), T[I] = F
                                }
                            else T[I].textContent = A
                        }
                        var N = "";
                        i ? (p && (y(k[I]), o && y(E[I])), o && (N += '<div class="user">' + v(E[I].innerHTML) + "</div>"), N += '<p class="tweet">' + v(k[I].innerHTML) + "</p>", r && (N += f ? '<p class="timePosted"><a href="' + O[I] + '">' + T[I].getAttribute("aria-label") + "</a></p>" : '<p class="timePosted">' + T[I].getAttribute("aria-label") + "</p>")) : (k[I].textContent, o && (N += '<p class="user">' + E[I].textContent + "</p>"), N += '<p class="tweet">' + k[I].textContent + "</p>", r && (N += '<p class="timePosted">' + T[I].textContent + "</p>")), h && (N += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + D[I] + '" class="twitter_reply_icon"' + (p ? ' target="_blank">' : ">") + 'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + D[I] + '" class="twitter_retweet_icon"' + (p ? ' target="_blank">' : ">") + 'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + D[I] + '" class="twitter_fav_icon"' + (p ? ' target="_blank">' : ">") + "Favorite</a></p>"), u && void 0 !== C[I] && void 0 !== w(C[I]) && (N += '<div class="media"><img src="' + w(C[I]) + '" alt="Image from tweet" /></div>'), u ? $.push(N) : !u && k[I].textContent.length && $.push(N), I++
                    }! function(e) {
                        if (null === d) {
                            for (var i = e.length, n = 0, s = document.getElementById(t), r = "<ul>"; n < i;) r += "<li>" + e[n] + "</li>", n++;
                            r += "</ul>", s.innerHTML = r
                        } else d(e)
                    }($), s = !1, n.length > 0 && (x.fetch(n[0]), n.splice(0, 1))
            }
        };
        return window.__twttrf = x, window.twitterFetcher = x, x
    }),
    function(t) {
        t.fn.downCount = function(e, i) {
            var n = t.extend({ date: null, offset: null }, e);
            n.date || t.error("Date is not defined."), Date.parse(n.date) || t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
            var s = this,
                r = function() {
                    var t = new Date,
                        e = t.getTime() + 6e4 * t.getTimezoneOffset();
                    return new Date(e + 36e5 * n.offset)
                };
            var o = setInterval(function() {
                var t = new Date(n.date) - r();
                if (t < 0) return clearInterval(o), void(i && "function" == typeof i && i());
                var e = Math.floor(t / 864e5),
                    a = Math.floor(t % 864e5 / 36e5),
                    l = Math.floor(t % 36e5 / 6e4),
                    c = Math.floor(t % 6e4 / 1e3),
                    d = 1 === (e = String(e).length >= 2 ? e : "0" + e) ? "day" : "days",
                    h = 1 === (a = String(a).length >= 2 ? a : "0" + a) ? "hour" : "hours",
                    u = 1 === (l = String(l).length >= 2 ? l : "0" + l) ? "minute" : "minutes",
                    p = 1 === (c = String(c).length >= 2 ? c : "0" + c) ? "second" : "seconds";
                s.find(".days").text(e), s.find(".hours").text(a), s.find(".minutes").text(l), s.find(".seconds").text(c), s.find(".days_ref").text(d), s.find(".hours_ref").text(h), s.find(".minutes_ref").text(u), s.find(".seconds_ref").text(p)
            }, 1e3)
        }
    }(jQuery),
    function(t) {
        var e = [];
        t.fn.menu = function(i) {
            this.selector;
            var n = t.extend({ dataJSON: !1, backLabel: "" }, i);
            return this.each(function() {
                var e, i = t(this);
                if (!i.hasClass("sliding-menu")) {
                    var r, o = i.width();
                    e = n.dataJSON ? function e(i, n) {
                        var r = { id: "menu-panel-" + s(), children: [], root: !n },
                            o = [];
                        n && r.children.push({ styleClass: "back", href: "#" + n.id });
                        t(i).each(function(t, i) {
                            if (r.children.push(i), i.children) {
                                var n = e(i.children, r);
                                i.href = "#" + n[0].id, i.styleClass = "nav", o = o.concat(n)
                            }
                        });
                        return [r].concat(o)
                    }(n.dataJSON) : function(e) {
                        var i = t("ul", e),
                            n = [];
                        return t(i).each(function(e, i) {
                            var r = t(i),
                                o = r.prev(),
                                a = s();
                            if (1 == o.length && o.addClass("nav").attr("href", "#menu-panel-" + a), r.attr("id", "menu-panel-" + a), 0 == e) r.addClass("menu-panel-root");
                            else {
                                r.addClass("menu-panel"), t("<li></li>");
                                var l = t("<a></a>").addClass("back").attr("href", "#menu-panel-back");
                                r.prepend(l)
                            }
                            n.push(i)
                        }), n
                    }(i), i.empty().addClass("sliding-menu"), n.dataJSON ? t(e).each(function(e, n) {
                        var s = t("<ul></ul>");
                        n.root && (r = "#" + n.id), s.attr("id", n.id), s.addClass("menu-panel"), s.width(o), t(n.children).each(function(e, i) {
                            var n = t("<a></a>");
                            n.attr("class", i.styleClass), n.attr("href", i.href), n.text(i.label);
                            var r = t("<li></li>");
                            r.append(n), s.append(r)
                        }), i.append(s)
                    }) : t(e).each(function(e, n) {
                        var s = t(n);
                        s.hasClass("menu-panel-root") && (r = "#" + s.attr("id")), s.width(o), i.append(n)
                    }), (r = t(r)).addClass("menu-panel-root");
                    var a = r;
                    i.height(r.height());
                    var l = t("<div></div>").addClass("sliding-menu-wrapper").width(e.length * o);
                    return i.wrapInner(l), l = t(".sliding-menu-wrapper", i), t("a", this).on("click", function(e) {
                        var s = t(this).attr("href"),
                            r = t(this).text();
                        if (l.is(":animated")) e.preventDefault();
                        else if ("#" == s) e.preventDefault();
                        else if (0 == s.indexOf("#menu-panel")) {
                            var c = t(s),
                                d = t(this).hasClass("back"),
                                h = parseInt(l.css("margin-left"));
                            d ? ("#menu-panel-back" == s && (c = a.prev()), l.stop(!0, !0).animate({ marginLeft: h + o }, "fast")) : (c.insertAfter(a), !0 === n.backLabel ? t(".back", c).text(r) : t(".back", c).text(n.backLabel), l.stop(!0, !0).animate({ marginLeft: h - o }, "fast")), a = c, i.stop(!0, !0).animate({ height: c.height() }, "fast"), e.preventDefault()
                        }
                    }), this
                }
            });

            function s() {
                var t;
                do { t = Math.random().toString(36).substring(3, 8) } while (e.indexOf(t) >= 0);
                return e.push(t), t
            }
        }
    }(jQuery),
    function(t) {
        t.fn.countTo = function(e) {
            return e = e || {}, t(this).each(function() {
                var i = t.extend({}, t.fn.countTo.defaults, { from: t(this).data("from"), to: t(this).data("num"), speed: t(this).data("speed"), refreshInterval: t(this).data("refresh-interval"), decimals: t(this).data("decimals") }, e),
                    n = Math.ceil(i.speed / i.refreshInterval),
                    s = (i.to - i.from) / n,
                    r = this,
                    o = t(this),
                    a = 0,
                    l = i.from,
                    c = o.data("countTo") || {};

                function d(t) {
                    var e = i.formatter.call(r, t, i);
                    o.text(e)
                }
                o.data("countTo", c), c.interval && clearInterval(c.interval), c.interval = setInterval(function() {
                    a++, d(l += s), "function" == typeof i.onUpdate && i.onUpdate.call(r, l);
                    a >= n && (o.removeData("countTo"), clearInterval(c.interval), l = i.to, "function" == typeof i.onComplete && i.onComplete.call(r, l))
                }, i.refreshInterval), d(l)
            })
        }, t.fn.countTo.defaults = { from: 0, to: 0, speed: 2500, refreshInterval: 100, decimals: 0, formatter: function(t, e) { return t.toFixed(e.decimals) }, onUpdate: null, onComplete: null }
    }(jQuery),
    function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
        var e = -1,
            i = -1,
            n = function(t) { return parseFloat(t) || 0 },
            s = function(e) {
                var i = t(e),
                    s = null,
                    r = [];
                return i.each(function() {
                    var e = t(this),
                        i = e.offset().top - n(e.css("margin-top")),
                        o = r.length > 0 ? r[r.length - 1] : null;
                    null === o ? r.push(e) : Math.floor(Math.abs(s - i)) <= 1 ? r[r.length - 1] = o.add(e) : r.push(e), s = i
                }), r
            },
            r = function(e) { var i = { byRow: !0, property: "height", target: null, remove: !1 }; return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), i) },
            o = t.fn.matchHeight = function(e) { var i = r(e); if (i.remove) { var n = this; return this.css(i.property, ""), t.each(o._groups, function(t, e) { e.elements = e.elements.not(n) }), this } return this.length <= 1 && !i.target ? this : (o._groups.push({ elements: this, options: i }), o._apply(this, i), this) };
        o.version = "0.7.2", o._groups = [], o._throttle = 80, o._maintainScroll = !1, o._beforeUpdate = null, o._afterUpdate = null, o._rows = s, o._parse = n, o._parseOptions = r, o._apply = function(e, i) {
            var a = r(i),
                l = t(e),
                c = [l],
                d = t(window).scrollTop(),
                h = t("html").outerHeight(!0),
                u = l.parents().filter(":hidden");
            return u.each(function() {
                var e = t(this);
                e.data("style-cache", e.attr("style"))
            }), u.css("display", "block"), a.byRow && !a.target && (l.each(function() {
                var e = t(this),
                    i = e.css("display");
                "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"), e.data("style-cache", e.attr("style")), e.css({ display: i, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden" })
            }), c = s(l), l.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "")
            })), t.each(c, function(e, i) {
                var s = t(i),
                    r = 0;
                if (a.target) r = a.target.outerHeight(!1);
                else {
                    if (a.byRow && s.length <= 1) return void s.css(a.property, "");
                    s.each(function() {
                        var e = t(this),
                            i = e.attr("style"),
                            n = e.css("display");
                        "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                        var s = { display: n };
                        s[a.property] = "", e.css(s), e.outerHeight(!1) > r && (r = e.outerHeight(!1)), i ? e.attr("style", i) : e.css("display", "")
                    })
                }
                s.each(function() {
                    var e = t(this),
                        i = 0;
                    a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (i += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), i += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(a.property, r - i + "px"))
                })
            }), u.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || null)
            }), o._maintainScroll && t(window).scrollTop(d / h * t("html").outerHeight(!0)), this
        }, o._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var i = t(this),
                    n = i.attr("data-mh") || i.attr("data-match-height");
                e[n] = n in e ? e[n].add(i) : i
            }), t.each(e, function() { this.matchHeight(!0) })
        };
        var a = function(e) { o._beforeUpdate && o._beforeUpdate(e, o._groups), t.each(o._groups, function() { o._apply(this.elements, this.options) }), o._afterUpdate && o._afterUpdate(e, o._groups) };
        o._update = function(n, s) {
            if (s && "resize" === s.type) {
                var r = t(window).width();
                if (r === e) return;
                e = r
            }
            n ? -1 === i && (i = setTimeout(function() { a(s), i = -1 }, o._throttle)) : a(s)
        }, t(o._applyDataApi);
        var l = t.fn.on ? "on" : "bind";
        t(window)[l]("load", function(t) { o._update(!1, t) }), t(window)[l]("resize orientationchange", function(t) { o._update(!0, t) })
    }),
    function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.tippy = e() }(this, function() {
        "use strict";

        function t(t) { return t && "[object Function]" === {}.toString.call(t) }

        function e(t, e) { if (1 !== t.nodeType) return []; var i = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? i[e] : i }

        function i(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

        function n(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case "HTML":
                case "BODY":
                    return t.ownerDocument.body;
                case "#document":
                    return t.body
            }
            var s = e(t),
                r = s.overflow,
                o = s.overflowX,
                a = s.overflowY;
            return /(auto|scroll|overlay)/.test(r + a + o) ? t : n(i(t))
        }

        function s(t) { return 11 === t ? Wt : 10 === t ? Ht : Wt || Ht }

        function r(t) { if (!t) return document.documentElement; for (var i = s(10) ? document.body : null, n = t.offsetParent || null; n === i && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent; var o = n && n.nodeName; return o && "BODY" !== o && "HTML" !== o ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === e(n, "position") ? r(n) : n : t ? t.ownerDocument.documentElement : document.documentElement }

        function o(t) { return null === t.parentNode ? t : o(t.parentNode) }

        function a(t, e) {
            if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
            var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                n = i ? t : e,
                s = i ? e : t,
                l = document.createRange();
            l.setStart(n, 0), l.setEnd(s, 0);
            var c = l.commonAncestorContainer;
            if (t !== c && e !== c || n.contains(s)) return function(t) { var e = t.nodeName; return "BODY" !== e && ("HTML" === e || r(t.firstElementChild) === t) }(c) ? c : r(c);
            var d = o(t);
            return d.host ? a(d.host, e) : a(t, o(e).host)
        }

        function l(t) {
            var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                i = t.nodeName;
            if ("BODY" === i || "HTML" === i) { var n = t.ownerDocument.documentElement; return (t.ownerDocument.scrollingElement || n)[e] }
            return t[e]
        }

        function c(t, e) {
            var i = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
                n = l(e, "top"),
                s = l(e, "left"),
                r = i ? -1 : 1;
            return t.top += n * r, t.bottom += n * r, t.left += s * r, t.right += s * r, t
        }

        function d(t, e) {
            var i = "x" === e ? "Left" : "Top",
                n = "Left" === i ? "Right" : "Bottom";
            return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10)
        }

        function h(t, e, i, n) { return Ct(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], s(10) ? parseInt(i["offset" + t]) + parseInt(n["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) }

        function u(t) {
            var e = t.body,
                i = t.documentElement,
                n = s(10) && getComputedStyle(i);
            return { height: h("Height", e, i, n), width: h("Width", e, i, n) }
        }

        function p(t) { return Gt({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

        function f(t) {
            var i = {};
            try {
                if (s(10)) {
                    i = t.getBoundingClientRect();
                    var n = l(t, "top"),
                        r = l(t, "left");
                    i.top += n, i.left += r, i.bottom += n, i.right += r
                } else i = t.getBoundingClientRect()
            } catch (t) {}
            var o = { left: i.left, top: i.top, width: i.right - i.left, height: i.bottom - i.top },
                a = "HTML" === t.nodeName ? u(t.ownerDocument) : {},
                c = a.width || t.clientWidth || o.right - o.left,
                h = a.height || t.clientHeight || o.bottom - o.top,
                f = t.offsetWidth - c,
                m = t.offsetHeight - h;
            if (f || m) {
                var g = e(t);
                f -= d(g, "x"), m -= d(g, "y"), o.width -= f, o.height -= m
            }
            return p(o)
        }

        function m(t, i) {
            var r = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
                o = s(10),
                a = "HTML" === i.nodeName,
                l = f(t),
                d = f(i),
                h = n(t),
                u = e(i),
                m = parseFloat(u.borderTopWidth, 10),
                g = parseFloat(u.borderLeftWidth, 10);
            r && a && (d.top = Ct(d.top, 0), d.left = Ct(d.left, 0));
            var v = p({ top: l.top - d.top - m, left: l.left - d.left - g, width: l.width, height: l.height });
            if (v.marginTop = 0, v.marginLeft = 0, !o && a) {
                var y = parseFloat(u.marginTop, 10),
                    b = parseFloat(u.marginLeft, 10);
                v.top -= m - y, v.bottom -= m - y, v.left -= g - b, v.right -= g - b, v.marginTop = y, v.marginLeft = b
            }
            return (o && !r ? i.contains(h) : i === h && "BODY" !== h.nodeName) && (v = c(v, i)), v
        }

        function g(t) {
            var e = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                i = t.ownerDocument.documentElement,
                n = m(t, i),
                s = Ct(i.clientWidth, window.innerWidth || 0),
                r = Ct(i.clientHeight, window.innerHeight || 0),
                o = e ? 0 : l(i),
                a = e ? 0 : l(i, "left");
            return p({ top: o - n.top + n.marginTop, left: a - n.left + n.marginLeft, width: s, height: r })
        }

        function v(t) { var n = t.nodeName; return "BODY" !== n && "HTML" !== n && ("fixed" === e(t, "position") || v(i(t))) }

        function y(t) { if (!t || !t.parentElement || s()) return document.documentElement; for (var i = t.parentElement; i && "none" === e(i, "transform");) i = i.parentElement; return i || document.documentElement }

        function b(t, e, s, r) {
            var o = !!(4 < arguments.length && void 0 !== arguments[4]) && arguments[4],
                l = { top: 0, left: 0 },
                c = o ? y(t) : a(t, e);
            if ("viewport" === r) l = g(c, o);
            else {
                var d;
                "scrollParent" === r ? "BODY" === (d = n(i(e))).nodeName && (d = t.ownerDocument.documentElement) : d = "window" === r ? t.ownerDocument.documentElement : r;
                var h = m(d, c, o);
                if ("HTML" !== d.nodeName || v(c)) l = h;
                else {
                    var p = u(t.ownerDocument),
                        f = p.height,
                        b = p.width;
                    l.top += h.top - h.marginTop, l.bottom = f + h.top, l.left += h.left - h.marginLeft, l.right = b + h.left
                }
            }
            var w = "number" == typeof(s = s || 0);
            return l.left += w ? s : s.left || 0, l.top += w ? s : s.top || 0, l.right -= w ? s : s.right || 0, l.bottom -= w ? s : s.bottom || 0, l
        }

        function w(t) { return t.width * t.height }

        function x(t, e, i, n, s) {
            var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === t.indexOf("auto")) return t;
            var o = b(i, n, r, s),
                a = { top: { width: o.width, height: e.top - o.top }, right: { width: o.right - e.right, height: o.height }, bottom: { width: o.width, height: o.bottom - e.bottom }, left: { width: e.left - o.left, height: o.height } },
                l = Object.keys(a).map(function(t) { return Gt({ key: t }, a[t], { area: w(a[t]) }) }).sort(function(t, e) { return e.area - t.area }),
                c = l.filter(function(t) {
                    var e = t.width,
                        n = t.height;
                    return e >= i.clientWidth && n >= i.clientHeight
                }),
                d = 0 < c.length ? c[0].key : l[0].key,
                h = t.split("-")[1];
            return d + (h ? "-" + h : "")
        }

        function _(t, e, i) { var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return m(i, n ? y(e) : a(e, i), n) }

        function S(t) {
            var e = t.ownerDocument.defaultView.getComputedStyle(t),
                i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
            return { width: t.offsetWidth + n, height: t.offsetHeight + i }
        }

        function k(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }

        function E(t, e, i) {
            i = i.split("-")[0];
            var n = S(t),
                s = { width: n.width, height: n.height },
                r = -1 !== ["right", "left"].indexOf(i),
                o = r ? "top" : "left",
                a = r ? "left" : "top",
                l = r ? "height" : "width",
                c = r ? "width" : "height";
            return s[o] = e[o] + e[l] / 2 - n[l] / 2, s[a] = i === a ? e[a] - n[c] : e[k(a)], s
        }

        function T(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

        function C(e, i, n) {
            return (void 0 === n ? e : e.slice(0, function(t, e, i) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === i }); var n = T(t, function(t) { return t[e] === i }); return t.indexOf(n) }(e, "name", n))).forEach(function(e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && t(n) && (i.offsets.popper = p(i.offsets.popper), i.offsets.reference = p(i.offsets.reference), i = n(i, e))
            }), i
        }

        function M(t, e) { return t.some(function(t) { var i = t.name; return t.enabled && i === e }) }

        function D(t) {
            for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
                var s = e[n],
                    r = s ? "" + s + i : t;
                if (void 0 !== document.body.style[r]) return r
            }
            return null
        }

        function O(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

        function P(t, e, i, s) {
            i.updateBound = s, O(t).addEventListener("resize", i.updateBound, { passive: !0 });
            var r = n(t);
            return function t(e, i, s, r) {
                var o = "BODY" === e.nodeName,
                    a = o ? e.ownerDocument.defaultView : e;
                a.addEventListener(i, s, { passive: !0 }), o || t(n(a.parentNode), i, s, r), r.push(a)
            }(r, "scroll", i.updateBound, i.scrollParents), i.scrollElement = r, i.eventsEnabled = !0, i
        }

        function L() {
            var t, e;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, O(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
        }

        function $(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

        function I(t, e) { Object.keys(e).forEach(function(i) { var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && $(e[i]) && (n = "px"), t.style[i] = e[i] + n }) }

        function z(t, e, i) {
            var n = T(t, function(t) { return t.name === e }),
                s = !!n && t.some(function(t) { return t.name === i && t.enabled && t.order < n.order });
            if (!s) {
                var r = "`" + e + "`";
                console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
            }
            return s
        }

        function Y(t) {
            var e = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                i = Zt.indexOf(t),
                n = Zt.slice(i + 1).concat(Zt.slice(0, i));
            return e ? n.reverse() : n
        }

        function A(t, e, i, n) {
            var s = [0, 0],
                r = -1 !== ["right", "left"].indexOf(n),
                o = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
                a = o.indexOf(T(o, function(t) { return -1 !== t.search(/,|\s/) }));
            o[a] && -1 === o[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 === a ? [o] : [o.slice(0, a).concat([o[a].split(l)[0]]), [o[a].split(l)[1]].concat(o.slice(a + 1))];
            return (c = c.map(function(t, n) {
                var s = (1 === n ? !r : r) ? "height" : "width",
                    o = !1;
                return t.reduce(function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, o = !0, t) : o ? (t[t.length - 1] += e, o = !1, t) : t.concat(e) }, []).map(function(t) {
                    return function(t, e, i, n) {
                        var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                            r = +s[1],
                            o = s[2];
                        if (!r) return t;
                        if (0 === o.indexOf("%")) {
                            var a;
                            switch (o) {
                                case "%p":
                                    a = i;
                                    break;
                                case "%":
                                case "%r":
                                default:
                                    a = n
                            }
                            return p(a)[e] / 100 * r
                        }
                        return "vh" === o || "vw" === o ? ("vh" === o ? Ct(document.documentElement.clientHeight, window.innerHeight || 0) : Ct(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                    }(t, s, e, i)
                })
            })).forEach(function(t, e) { t.forEach(function(i, n) { $(i) && (s[e] += i * ("-" === t[n - 1] ? -1 : 1)) }) }), s
        }

        function F(t) { return [].slice.call(t) }

        function j(t, e) {
            return (ie.closest || function(t) {
                for (var e = this; e;) {
                    if (ne.call(e, t)) return e;
                    e = e.parentElement
                }
            }).call(t, e)
        }

        function N(t, e) {
            for (; t;) {
                if (e(t)) return t;
                t = t.parentElement
            }
        }

        function R() { return document.createElement("div") }

        function W(t, e) { t[re.x && "innerHTML"] = e instanceof Element ? e[re.x && "innerHTML"] : e }

        function H(t, e) { e.content instanceof Element ? (W(t, ""), t.appendChild(e.content)) : t[e.allowHTML ? "innerHTML" : "textContent"] = e.content }

        function B(t) { return { tooltip: t.querySelector(ee.TOOLTIP), backdrop: t.querySelector(ee.BACKDROP), content: t.querySelector(ee.CONTENT), arrow: t.querySelector(ee.ARROW) || t.querySelector(ee.ROUND_ARROW) } }

        function V(t) { t.setAttribute("data-inertia", "") }

        function q(t) { var e = R(); return "round" === t ? (e.className = "tippy-roundarrow", W(e, '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')) : e.className = "tippy-arrow", e }

        function G() { var t = R(); return t.className = "tippy-backdrop", t.setAttribute("data-state", "hidden"), t }

        function X(t, e) { t.setAttribute("tabindex", "-1"), e.setAttribute("data-interactive", "") }

        function U(t, e) { t.forEach(function(t) { t && (t.style.transitionDuration = e + "ms") }) }

        function Z(t, e, i) { t[e + "EventListener"]("transitionend", i) }

        function Q(t) { var e = t.getAttribute("x-placement"); return e ? e.split("-")[0] : "" }

        function K(t, e) { t.forEach(function(t) { t && t.setAttribute("data-state", e) }) }

        function J(t) {
            F(document.querySelectorAll(ee.POPPER)).forEach(function(e) {
                var i = e._tippy;
                i && !0 === i.props.hideOnClick && (!t || e !== t.popper) && i.hide()
            })
        }

        function tt(t, e, i, n) {
            if (!t) return !0;
            var s = i.clientX,
                r = i.clientY,
                o = n.interactiveBorder,
                a = n.distance,
                l = e.top - r > ("top" === t ? o + a : o),
                c = r - e.bottom > ("bottom" === t ? o + a : o),
                d = e.left - s > ("left" === t ? o + a : o),
                h = s - e.right > ("right" === t ? o + a : o);
            return l || c || d || h
        }

        function et(t, e) { return -(t - e) + "px" }

        function it(t) { return "[object Object]" === {}.toString.call(t) }

        function nt(t, e) { return {}.hasOwnProperty.call(t, e) }

        function st(t, e, i) { if (Array.isArray(t)) { var n = t[e]; return null == n ? i : n } return t }

        function rt(t) {
            var e = window.scrollX || window.pageXOffset,
                i = window.scrollY || window.pageYOffset;
            t.focus(), scroll(e, i)
        }

        function ot(t, e) {
            var i;
            return function() {
                var n = this,
                    s = arguments;
                clearTimeout(i), i = setTimeout(function() { return t.apply(n, s) }, e)
            }
        }

        function at(t, e) { return t && t.modifiers && t.modifiers[e] }

        function lt(t, e) { return -1 < t.indexOf(e) }

        function ct() { oe || (oe = !0, $t && document.body.classList.add("tippy-iOS"), window.performance && document.addEventListener("mousemove", dt)) }

        function dt() {
            var t = performance.now();
            20 > t - ae && (oe = !1, document.removeEventListener("mousemove", dt), !$t && document.body.classList.remove("tippy-iOS")), ae = t
        }

        function ht(t) {
            var e = t.target;
            if (!(e instanceof Element)) return J();
            var i = j(e, ee.POPPER);
            if (!(i && i._tippy && i._tippy.props.interactive)) {
                var n = N(e, function(t) { return t._tippy && t._tippy.reference === t });
                if (n) {
                    var s = n._tippy,
                        r = lt(s.props.trigger, "click");
                    if (oe || r) return J(s);
                    if (!0 !== s.props.hideOnClick || r) return;
                    s.clearDelayTimeouts()
                }
                J()
            }
        }

        function ut() {
            var t = document.activeElement;
            t && t.blur && t._tippy && t.blur()
        }

        function pt() {
            F(document.querySelectorAll(ee.POPPER)).forEach(function(t) {
                var e = t._tippy;
                e.props.livePlacement || e.popperInstance.scheduleUpdate()
            })
        }

        function ft(t) { return le.reduce(function(e, i) { var n = (t.getAttribute("data-tippy-" + i) || "").trim(); return n ? (e[i] = "content" === i ? n : "true" === n || "false" !== n && (function(t) { return !isNaN(t) && !isNaN(parseFloat(t)) }(n) ? +n : "[" === n[0] || "{" === n[0] ? JSON.parse(n) : n), e) : e }, {}) }

        function mt(t, e) { var i = ce({}, e, e.performance ? {} : ft(t)); return i.arrow && (i.animateFill = !1), "function" == typeof i.appendTo && (i.appendTo = e.appendTo(t)), "function" == typeof i.content && (i.content = e.content(t)), i }

        function gt() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments[1];
            Object.keys(t).forEach(function(t) { if (!nt(e, t)) throw new Error("[tippy]: `" + t + "` is not a valid option") })
        }

        function vt(t, e) { return (e ? t : { X: "Y", Y: "X" }[t]) || "" }

        function yt(t, e, i, n) {
            var s = e[0],
                r = e[1];
            return s || r ? { scale: r ? i ? s + ", " + r : r + ", " + s : "" + s, translate: r ? i ? n ? s + "px, " + -r + "px" : s + "px, " + r + "px" : n ? -r + "px, " + s + "px" : r + "px, " + s + "px" : n ? -s + "px" : s + "px" }[t] : ""
        }

        function bt(t, e) { var i = t.match(new RegExp(e + "([XY])")); return i ? i[1] : "" }

        function wt(t, e) { var i = t.match(e); return i ? i[1].split(",").map(function(t) { return parseFloat(t, 10) }) : [] }

        function xt(t, e) {
            var i = Q(j(t, ee.POPPER)),
                n = lt(["top", "bottom"], i),
                s = lt(["right", "bottom"], i),
                r = { translate: { axis: bt(e, "translate"), numbers: wt(e, de.translate) }, scale: { axis: bt(e, "scale"), numbers: wt(e, de.scale) } },
                o = e.replace(de.translate, "translate" + vt(r.translate.axis, n) + "(" + yt("translate", r.translate.numbers, n, s) + ")").replace(de.scale, "scale" + vt(r.scale.axis, n) + "(" + yt("scale", r.scale.numbers, n, s) + ")");
            t.style[void 0 === document.body.style.transform ? "webkitTransform" : "transform"] = o
        }

        function _t(t, e) {
            function i() { setTimeout(function() { Y = !1 }, 1) }

            function n(t) {
                var e = O = t,
                    i = e.clientX,
                    n = e.clientY;
                if (ct.popperInstance) {
                    var s = Q(ct.popper),
                        r = ct.popperChildren.arrow ? 20 : 5,
                        a = lt(["top", "bottom"], s),
                        l = lt(["left", "right"], s),
                        c = a ? Ct(r, i) : i,
                        d = l ? Ct(r, n) : n;
                    a && c > r && (c = kt(i, window.innerWidth - r)), l && d > r && (d = kt(n, window.innerHeight - r));
                    var h = ct.reference.getBoundingClientRect(),
                        u = ct.props.followCursor,
                        p = "horizontal" === u,
                        f = "vertical" === u;
                    ct.popperInstance.reference = { getBoundingClientRect: function() { return { width: 0, height: 0, top: p ? h.top : d, bottom: p ? h.bottom : d, left: f ? h.left : c, right: f ? h.right : c } }, clientWidth: 0, clientHeight: 0 }, ct.popperInstance.scheduleUpdate(), "initial" === u && ct.state.isVisible && o()
                }
            }

            function s(t) {
                if (_(), !ct.state.isVisible) {
                    if (ct.props.target) return function(t) {
                        var e = j(t.target, ct.props.target);
                        e && !e._tippy && (_t(e, ce({}, ct.props, { target: "", showOnInit: !0 })), s(t))
                    }(t);
                    if ($ = !0, ct.props.wait) return ct.props.wait(ct, t);
                    v() && !ct.state.isMounted && document.addEventListener("mousemove", n);
                    var e = st(ct.props.delay, 0, zt.delay);
                    e ? P = setTimeout(function() { k() }, e) : k()
                }
            }

            function r() {
                if (_(), !ct.state.isVisible) return o();
                $ = !1;
                var t = st(ct.props.delay, 1, zt.delay);
                t ? L = setTimeout(function() { ct.state.isVisible && E() }, t) : E()
            }

            function o() { document.removeEventListener("mousemove", n), O = null }

            function a() { document.body.removeEventListener("mouseleave", r), document.removeEventListener("mousemove", A) }

            function l(t) {!ct.state.isEnabled || f(t) || (!ct.state.isVisible && (D = t), "click" === t.type && !1 !== ct.props.hideOnClick && ct.state.isVisible ? r() : s(t)) }

            function c(t) {
                var e = N(t.target, function(t) { return t._tippy }),
                    i = j(t.target, ee.POPPER) === ct.popper,
                    n = e === ct.reference;
                i || n || tt(Q(ct.popper), ct.popper.getBoundingClientRect(), t, ct.props) && (a(), r())
            }

            function d(t) { return f(t) ? void 0 : ct.props.interactive ? (document.body.addEventListener("mouseleave", r), void document.addEventListener("mousemove", A)) : void r() }

            function h(t) {
                if (t.target === ct.reference) {
                    if (ct.props.interactive) { if (!t.relatedTarget) return; if (j(t.relatedTarget, ee.POPPER)) return }
                    r()
                }
            }

            function u(t) { j(t.target, ct.props.target) && s(t) }

            function p(t) { j(t.target, ct.props.target) && r() }

            function f(t) {
                var e = lt(t.type, "touch"),
                    i = It && oe && ct.props.touchHold && !e,
                    n = oe && !ct.props.touchHold && e;
                return i || n
            }

            function m() {
                var t = ct.props.popperOptions,
                    e = ct.popperChildren,
                    i = e.tooltip,
                    n = e.arrow;
                return new te(ct.reference, ct.popper, ce({ placement: ct.props.placement }, t, {
                    modifiers: ce({}, t ? t.modifiers : {}, { preventOverflow: ce({ boundariesElement: ct.props.boundary }, at(t, "preventOverflow")), arrow: ce({ element: n, enabled: !!n }, at(t, "arrow")), flip: ce({ enabled: ct.props.flip, padding: ct.props.distance + 5, behavior: ct.props.flipBehavior }, at(t, "flip")), offset: ce({ offset: ct.props.offset }, at(t, "offset")) }),
                    onCreate: function() { i.style[Q(ct.popper)] = et(ct.props.distance, zt.distance), n && ct.props.arrowTransform && xt(n, ct.props.arrowTransform) },
                    onUpdate: function() {
                        var t = i.style;
                        t.top = "", t.bottom = "", t.left = "", t.right = "", t[Q(ct.popper)] = et(ct.props.distance, zt.distance), n && ct.props.arrowTransform && xt(n, ct.props.arrowTransform)
                    }
                }))
            }

            function g(t) {
                ct.popperInstance ? !v() && (ct.popperInstance.scheduleUpdate(), ct.props.livePlacement && ct.popperInstance.enableEventListeners()) : (ct.popperInstance = m(), (M = new MutationObserver(function() { ct.popperInstance.update() })).observe(J, { childList: !0, subtree: !0, characterData: !0 }), (!ct.props.livePlacement || v()) && ct.popperInstance.disableEventListeners()), ct.popperInstance.reference = ct.reference;
                var e = ct.popperChildren.arrow;
                if (v()) {
                    e && (e.style.margin = "0");
                    var i = st(ct.props.delay, 0, zt.delay);
                    D.type && n(i && O ? O : D)
                } else e && (e.style.margin = "");
                (function(t, e) {
                    var i = t.popper,
                        n = t.options,
                        s = n.onCreate,
                        r = n.onUpdate;
                    n.onCreate = n.onUpdate = function() { i.offsetHeight, e(), r(), n.onCreate = s, n.onUpdate = r }
                })(ct.popperInstance, t), ct.props.appendTo.contains(ct.popper) || (ct.props.appendTo.appendChild(ct.popper), ct.props.onMount(ct), ct.state.isMounted = !0)
            }

            function v() { return ct.props.followCursor && !oe && "focus" !== D.type }

            function y(t, e) {
                if (0 === t) return e();
                var i = ct.popperChildren.tooltip,
                    n = function t(n) { n.target === i && (Z(i, "remove", t), e()) };
                Z(i, "remove", I), Z(i, "add", n), I = n
            }

            function b(t, e) {
                var i = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
                ct.reference.addEventListener(t, e, i), z.push({ eventType: t, handler: e, options: i })
            }

            function w() { ct.props.touchHold && !ct.props.target && (b("touchstart", l, se), b("touchend", d, se)), ct.props.trigger.trim().split(" ").forEach(function(t) { "manual" === t || (ct.props.target ? "mouseenter" === t ? (b("mouseover", u), b("mouseout", p)) : "focus" === t ? (b("focusin", u), b("focusout", p)) : "click" === t && b(t, u) : (b(t, l), "mouseenter" === t ? b("mouseleave", d) : "focus" === t && b(Lt ? "focusout" : "blur", h))) }) }

            function x() {
                z.forEach(function(t) {
                    var e = t.eventType,
                        i = t.handler,
                        n = t.options;
                    ct.reference.removeEventListener(e, i, n)
                }), z = []
            }

            function _() { clearTimeout(P), clearTimeout(L) }

            function S() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                gt(t, zt);
                var e = ct.props,
                    i = mt(ct.reference, ce({}, ct.props, t, { performance: !0 }));
                i.performance = nt(t, "performance") ? t.performance : e.performance, ct.props = i, (nt(t, "trigger") || nt(t, "touchHold")) && (x(), w()), nt(t, "interactiveDebounce") && (a(), A = ot(c, t.interactiveDebounce)),
                    function(t, e, i) {
                        var n = B(t),
                            s = n.tooltip,
                            r = n.content,
                            o = n.backdrop,
                            a = n.arrow;
                        t.style.zIndex = i.zIndex, s.setAttribute("data-size", i.size), s.setAttribute("data-animation", i.animation), s.style.maxWidth = i.maxWidth + ("number" == typeof i.maxWidth ? "px" : ""), e.content !== i.content && H(r, i), !e.animateFill && i.animateFill ? (s.appendChild(G()), s.setAttribute("data-animatefill", "")) : e.animateFill && !i.animateFill && (s.removeChild(o), s.removeAttribute("data-animatefill")), !e.arrow && i.arrow ? s.appendChild(q(i.arrowType)) : e.arrow && !i.arrow && s.removeChild(a), e.arrow && i.arrow && e.arrowType !== i.arrowType && s.replaceChild(q(i.arrowType), a), !e.interactive && i.interactive ? X(t, s) : e.interactive && !i.interactive && function(t, e) { t.removeAttribute("tabindex"), e.removeAttribute("data-interactive") }(t, s), !e.inertia && i.inertia ? V(s) : e.inertia && !i.inertia && function(t) { t.removeAttribute("data-inertia") }(s), e.theme !== i.theme && (e.theme.split(" ").forEach(function(t) { s.classList.remove(t + "-theme") }), i.theme.split(" ").forEach(function(t) { s.classList.add(t + "-theme") }))
                    }(ct.popper, e, i), ct.popperChildren = B(ct.popper), ct.popperInstance && Yt.some(function(e) { return nt(t, e) }) && (ct.popperInstance.destroy(), ct.popperInstance = m(), !ct.state.isVisible && ct.popperInstance.disableEventListeners(), ct.props.followCursor && O && n(O))
            }

            function k() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : st(ct.props.duration, 0, zt.duration[0]); return ct.state.isDestroyed || !ct.state.isEnabled || oe && !ct.props.touch ? void 0 : ct.reference.isVirtual || document.documentElement.contains(ct.reference) ? ct.reference.hasAttribute("disabled") ? void 0 : Y ? void(Y = !1) : void(!1 === ct.props.onShow(ct) || (ct.popper.style.visibility = "visible", ct.state.isVisible = !0, U([ct.popper, ct.popperChildren.tooltip, ct.popperChildren.backdrop], 0), g(function() { ct.state.isVisible && (!v() && ct.popperInstance.update(), U([ct.popperChildren.tooltip, ct.popperChildren.backdrop, ct.popperChildren.content], t), ct.popperChildren.backdrop && (ct.popperChildren.content.style.transitionDelay = Tt(t / 6) + "ms"), ct.props.interactive && ct.reference.classList.add("tippy-active"), ct.props.sticky && (U([ct.popper], Lt ? 0 : ct.props.updateDuration), function t() { ct.popperInstance && ct.popperInstance.scheduleUpdate(), ct.state.isMounted ? requestAnimationFrame(t) : U([ct.popper], 0) }()), K([ct.popperChildren.tooltip, ct.popperChildren.backdrop, ct.popperChildren.content], "visible"), function(t, e) { y(t, e) }(t, function() { 0 === ct.props.updateDuration && ct.popperChildren.tooltip.classList.add("tippy-notransition"), ct.props.autoFocus && ct.props.interactive && lt(["focus", "click"], D.type) && rt(ct.popper), ct.props.aria && ct.reference.setAttribute("aria-" + ct.props.aria, ct.popper.id), ct.props.onShown(ct), ct.state.isShown = !0 })) }))) : T() }

            function E() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : st(ct.props.duration, 1, zt.duration[1]);
                ct.state.isDestroyed || !ct.state.isEnabled || !1 === ct.props.onHide(ct) || (0 === ct.props.updateDuration && ct.popperChildren.tooltip.classList.remove("tippy-notransition"), ct.props.interactive && ct.reference.classList.remove("tippy-active"), ct.popper.style.visibility = "hidden", ct.state.isVisible = !1, ct.state.isShown = !1, U([ct.popperChildren.tooltip, ct.popperChildren.backdrop, ct.popperChildren.content], t), K([ct.popperChildren.tooltip, ct.popperChildren.backdrop, ct.popperChildren.content], "hidden"), ct.props.autoFocus && ct.props.interactive && !Y && lt(["focus", "click"], D.type) && ("focus" === D.type && (Y = !0), rt(ct.reference)), function(t, e) { y(t, function() {!ct.state.isVisible && ct.props.appendTo.contains(ct.popper) && e() }) }(t, function() { $ || o(), ct.props.aria && ct.reference.removeAttribute("aria-" + ct.props.aria), ct.popperInstance.disableEventListeners(), ct.props.appendTo.removeChild(ct.popper), ct.state.isMounted = !1, ct.props.onHidden(ct) }))
            }

            function T(t) { ct.state.isDestroyed || (ct.state.isMounted && E(0), x(), ct.reference.removeEventListener("click", i), delete ct.reference._tippy, ct.props.target && t && F(ct.reference.querySelectorAll(ct.props.target)).forEach(function(t) { return t._tippy && t._tippy.destroy() }), ct.popperInstance && ct.popperInstance.destroy(), M && M.disconnect(), ct.state.isDestroyed = !0) }
            var C = mt(t, e);
            if (!C.multiple && t._tippy) return null;
            var M = null,
                D = {},
                O = null,
                P = 0,
                L = 0,
                $ = !1,
                I = function() {},
                z = [],
                Y = !1,
                A = 0 < C.interactiveDebounce ? ot(c, C.interactiveDebounce) : c,
                W = he++,
                J = function(t, e) {
                    var i = R();
                    i.className = "tippy-popper", i.setAttribute("role", "tooltip"), i.id = "tippy-" + t, i.style.zIndex = e.zIndex;
                    var n = R();
                    n.className = "tippy-tooltip", n.style.maxWidth = e.maxWidth + ("number" == typeof e.maxWidth ? "px" : ""), n.setAttribute("data-size", e.size), n.setAttribute("data-animation", e.animation), n.setAttribute("data-state", "hidden"), e.theme.split(" ").forEach(function(t) { n.classList.add(t + "-theme") });
                    var s = R();
                    return s.className = "tippy-content", s.setAttribute("data-state", "hidden"), e.interactive && X(i, n), e.arrow && n.appendChild(q(e.arrowType)), e.animateFill && (n.appendChild(G()), n.setAttribute("data-animatefill", "")), e.inertia && V(n), H(s, e), n.appendChild(s), i.appendChild(n), i.addEventListener("focusout", function(t) { t.relatedTarget && i._tippy && !N(t.relatedTarget, function(t) { return t === i }) && t.relatedTarget !== i._tippy.reference && i._tippy.props.shouldPopperHideOnBlur(t) && i._tippy.hide() }), i
                }(W, C);
            J.addEventListener("mouseenter", function(t) { ct.props.interactive && ct.state.isVisible && "mouseenter" === D.type && s(t) }), J.addEventListener("mouseleave", function(t) { ct.props.interactive && "mouseenter" === D.type && 0 === ct.props.interactiveDebounce && tt(Q(J), J.getBoundingClientRect(), t, ct.props) && r() });
            var it = B(J),
                ct = { id: W, reference: t, popper: J, popperChildren: it, popperInstance: null, props: C, state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 }, clearDelayTimeouts: _, set: S, setContent: function(t) { S({ content: t }) }, show: k, hide: E, enable: function() { ct.state.isEnabled = !0 }, disable: function() { ct.state.isEnabled = !1 }, destroy: T };
            return w(), t.addEventListener("click", i), C.lazy || (ct.popperInstance = m(), ct.popperInstance.disableEventListeners()), C.showOnInit && s(), !C.a11y || C.target || function(t) { return !(t instanceof Element) || ne.call(t, "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]") && !t.hasAttribute("disabled") }(t) || t.setAttribute("tabindex", "0"), t._tippy = ct, J._tippy = ct, ct
        }

        function St(t, e, i) {
            gt(e, zt), ue || (document.addEventListener("click", ht, !0), document.addEventListener("touchstart", ct, se), window.addEventListener("blur", ut), window.addEventListener("resize", pt), !It && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) && document.addEventListener("pointerdown", ct), ue = !0);
            var n = ce({}, zt, e);
            it(t) && function(t) { var e = { isVirtual: !0, attributes: t.attributes || {}, setAttribute: function(e, i) { t.attributes[e] = i }, getAttribute: function(e) { return t.attributes[e] }, removeAttribute: function(e) { delete t.attributes[e] }, hasAttribute: function(e) { return e in t.attributes }, addEventListener: function() {}, removeEventListener: function() {}, classList: { classNames: {}, add: function(e) { t.classList.classNames[e] = !0 }, remove: function(e) { delete t.classList.classNames[e] }, contains: function(e) { return e in t.classList.classNames } } }; for (var i in e) t[i] = e[i] }(t);
            var s = function(t) { if (t instanceof Element || it(t)) return [t]; if (t instanceof NodeList) return F(t); if (Array.isArray(t)) return t; try { return F(document.querySelectorAll(t)) } catch (t) { return [] } }(t),
                r = s[0],
                o = (i && r ? [r] : s).reduce(function(t, e) { var i = e && _t(e, n); return i && t.push(i), t }, []),
                a = { targets: t, props: n, instances: o, destroyAll: function() { a.instances.forEach(function(t) { t.destroy() }), a.instances = [] } };
            return a
        }
        for (var kt = Math.min, Et = Math.floor, Tt = Math.round, Ct = Math.max, Mt = "undefined" != typeof window, Dt = Mt ? navigator : {}, Ot = Mt ? window : {}, Pt = ("MutationObserver" in Ot), Lt = /MSIE |Trident\//.test(Dt.userAgent), $t = /iPhone|iPad|iPod/.test(Dt.platform) && !Ot.MSStream, It = ("ontouchstart" in Ot), zt = { a11y: !0, allowHTML: !0, animateFill: !0, animation: "shift-away", appendTo: function() { return document.body }, aria: "describedby", arrow: !1, arrowTransform: "", arrowType: "sharp", autoFocus: !0, boundary: "scrollParent", content: "", delay: [0, 20], distance: 10, duration: [325, 275], flip: !0, flipBehavior: "flip", followCursor: !1, hideOnClick: !0, inertia: !1, interactive: !1, interactiveBorder: 2, interactiveDebounce: 0, lazy: !0, livePlacement: !0, maxWidth: "", multiple: !1, offset: 0, onHidden: function() {}, onHide: function() {}, onMount: function() {}, onShow: function() {}, onShown: function() {}, performance: !1, placement: "top", popperOptions: {}, shouldPopperHideOnBlur: function() { return !0 }, showOnInit: !1, size: "regular", sticky: !1, target: "", theme: "dark", touch: !0, touchHold: !1, trigger: "mouseenter focus", updateDuration: 200, wait: null, zIndex: 9999 }, Yt = ["arrow", "arrowType", "distance", "flip", "flipBehavior", "offset", "placement", "popperOptions"], At = "undefined" != typeof window && "undefined" != typeof document, Ft = ["Edge", "Trident", "Firefox"], jt = 0, Nt = 0; Nt < Ft.length; Nt += 1)
            if (At && 0 <= navigator.userAgent.indexOf(Ft[Nt])) { jt = 1; break }
        var Rt = At && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then(function() { e = !1, t() })) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, jt)) } },
            Wt = At && !(!window.MSInputMethodContext || !document.documentMode),
            Ht = At && /MSIE 10/.test(navigator.userAgent),
            Bt = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
            Vt = function() {
                function t(t, e) { for (var i, n = 0; n < e.length; n++)(i = e[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) }
                return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
            }(),
            qt = function(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t },
            Gt = Object.assign || function(t) {
                for (var e, i = 1; i < arguments.length; i++)
                    for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            },
            Xt = At && /Firefox/i.test(navigator.userAgent),
            Ut = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            Zt = Ut.slice(3),
            Qt = "flip",
            Kt = "clockwise",
            Jt = "counterclockwise",
            te = function() {
                function e(i, n) {
                    var s = this,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    Bt(this, e), this.scheduleUpdate = function() { return requestAnimationFrame(s.update) }, this.update = Rt(this.update.bind(this)), this.options = Gt({}, e.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = i && i.jquery ? i[0] : i, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Gt({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) { s.options.modifiers[t] = Gt({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return Gt({ name: t }, s.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(e) { e.enabled && t(e.onLoad) && e.onLoad(s.reference, s.popper, s.options, e, s.state) }), this.update();
                    var o = this.options.eventsEnabled;
                    o && this.enableEventListeners(), this.state.eventsEnabled = o
                }
                return Vt(e, [{
                    key: "update",
                    value: function() {
                        return function() {
                            if (!this.state.isDestroyed) {
                                var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                                t.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = x(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = E(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = C(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                            }
                        }.call(this)
                    }
                }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[D("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return L.call(this) } }]), e
            }();
        te.Utils = ("undefined" == typeof window ? global : window).PopperUtils, te.placements = Ut, te.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            i = e.split("-")[0],
                            n = e.split("-")[1];
                        if (n) {
                            var s = t.offsets,
                                r = s.reference,
                                o = s.popper,
                                a = -1 !== ["bottom", "top"].indexOf(i),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                d = { start: qt({}, l, r[l]), end: qt({}, l, r[l] + r[c] - o[c]) };
                            t.offsets.popper = Gt({}, o, d[n])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var i, n = e.offset,
                            s = t.placement,
                            r = t.offsets,
                            o = r.popper,
                            a = r.reference,
                            l = s.split("-")[0];
                        return i = $(+n) ? [+n, 0] : A(n, o, a, l), "left" === l ? (o.top += i[0], o.left -= i[1]) : "right" === l ? (o.top += i[0], o.left += i[1]) : "top" === l ? (o.left += i[0], o.top -= i[1]) : "bottom" === l && (o.left += i[0], o.top += i[1]), t.popper = o, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var i = e.boundariesElement || r(t.instance.popper);
                        t.instance.reference === i && (i = r(i));
                        var n = D("transform"),
                            s = t.instance.popper.style,
                            o = s.top,
                            a = s.left,
                            l = s[n];
                        s.top = "", s.left = "", s[n] = "";
                        var c = b(t.instance.popper, t.instance.reference, e.padding, i, t.positionFixed);
                        s.top = o, s.left = a, s[n] = l, e.boundaries = c;
                        var d = e.priority,
                            h = t.offsets.popper,
                            u = {
                                primary: function(t) { var i = h[t]; return h[t] < c[t] && !e.escapeWithReference && (i = Ct(h[t], c[t])), qt({}, t, i) },
                                secondary: function(t) {
                                    var i = "right" === t ? "left" : "top",
                                        n = h[i];
                                    return h[t] > c[t] && !e.escapeWithReference && (n = kt(h[i], c[t] - ("right" === t ? h.width : h.height))), qt({}, i, n)
                                }
                            };
                        return d.forEach(function(t) {
                            var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                            h = Gt({}, h, u[e](t))
                        }), t.offsets.popper = h, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            i = e.popper,
                            n = e.reference,
                            s = t.placement.split("-")[0],
                            r = Et,
                            o = -1 !== ["top", "bottom"].indexOf(s),
                            a = o ? "right" : "bottom",
                            l = o ? "left" : "top",
                            c = o ? "width" : "height";
                        return i[a] < r(n[l]) && (t.offsets.popper[l] = r(n[l]) - i[c]), i[l] > r(n[a]) && (t.offsets.popper[l] = r(n[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, i) {
                        var n;
                        if (!z(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var s = i.element;
                        if ("string" == typeof s) { if (!(s = t.instance.popper.querySelector(s))) return t } else if (!t.instance.popper.contains(s)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0],
                            o = t.offsets,
                            a = o.popper,
                            l = o.reference,
                            c = -1 !== ["left", "right"].indexOf(r),
                            d = c ? "height" : "width",
                            h = c ? "Top" : "Left",
                            u = h.toLowerCase(),
                            f = c ? "left" : "top",
                            m = c ? "bottom" : "right",
                            g = S(s)[d];
                        l[m] - g < a[u] && (t.offsets.popper[u] -= a[u] - (l[m] - g)), l[u] + g > a[m] && (t.offsets.popper[u] += l[u] + g - a[m]), t.offsets.popper = p(t.offsets.popper);
                        var v = l[u] + l[d] / 2 - g / 2,
                            y = e(t.instance.popper),
                            b = parseFloat(y["margin" + h], 10),
                            w = parseFloat(y["border" + h + "Width"], 10),
                            x = v - t.offsets.popper[u] - b - w;
                        return x = Ct(kt(a[d] - g, x), 0), t.arrowElement = s, t.offsets.arrow = (qt(n = {}, u, Tt(x)), qt(n, f, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (M(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var i = b(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            n = t.placement.split("-")[0],
                            s = k(n),
                            r = t.placement.split("-")[1] || "",
                            o = [];
                        switch (e.behavior) {
                            case Qt:
                                o = [n, s];
                                break;
                            case Kt:
                                o = Y(n);
                                break;
                            case Jt:
                                o = Y(n, !0);
                                break;
                            default:
                                o = e.behavior
                        }
                        return o.forEach(function(a, l) {
                            if (n !== a || o.length === l + 1) return t;
                            n = t.placement.split("-")[0], s = k(n);
                            var c = t.offsets.popper,
                                d = t.offsets.reference,
                                h = Et,
                                u = "left" === n && h(c.right) > h(d.left) || "right" === n && h(c.left) < h(d.right) || "top" === n && h(c.bottom) > h(d.top) || "bottom" === n && h(c.top) < h(d.bottom),
                                p = h(c.left) < h(i.left),
                                f = h(c.right) > h(i.right),
                                m = h(c.top) < h(i.top),
                                g = h(c.bottom) > h(i.bottom),
                                v = "left" === n && p || "right" === n && f || "top" === n && m || "bottom" === n && g,
                                y = -1 !== ["top", "bottom"].indexOf(n),
                                b = !!e.flipVariations && (y && "start" === r && p || y && "end" === r && f || !y && "start" === r && m || !y && "end" === r && g);
                            (u || v || b) && (t.flipped = !0, (u || v) && (n = o[l + 1]), b && (r = function(t) { return "end" === t ? "start" : "start" === t ? "end" : t }(r)), t.placement = n + (r ? "-" + r : ""), t.offsets.popper = Gt({}, t.offsets.popper, E(t.instance.popper, t.offsets.reference, t.placement)), t = C(t.instance.modifiers, t, "flip"))
                        }), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            i = e.split("-")[0],
                            n = t.offsets,
                            s = n.popper,
                            r = n.reference,
                            o = -1 !== ["left", "right"].indexOf(i),
                            a = -1 === ["top", "left"].indexOf(i);
                        return s[o ? "left" : "top"] = r[i] - (a ? s[o ? "width" : "height"] : 0), t.placement = k(e), t.offsets.popper = p(s), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!z(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            i = T(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries;
                        if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var i = e.x,
                            n = e.y,
                            s = t.offsets.popper,
                            o = T(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, l, c = void 0 === o ? e.gpuAcceleration : o,
                            d = r(t.instance.popper),
                            h = f(d),
                            u = { position: s.position },
                            p = function(t, e) {
                                var i = t.offsets,
                                    n = i.popper,
                                    s = i.reference,
                                    r = Tt,
                                    o = function(t) { return t },
                                    a = r(n.width),
                                    l = r(s.width),
                                    c = -1 !== ["left", "right"].indexOf(t.placement),
                                    d = -1 !== t.placement.indexOf("-"),
                                    h = e ? c || d || l % 2 == a % 2 ? r : Et : o,
                                    u = e ? r : o;
                                return { left: h(1 == l % 2 && 1 == a % 2 && !d && e ? n.left - 1 : n.left), top: u(n.top), bottom: u(n.bottom), right: h(n.right) }
                            }(t, 2 > window.devicePixelRatio || !Xt),
                            m = "bottom" === i ? "top" : "bottom",
                            g = "right" === n ? "left" : "right",
                            v = D("transform");
                        if (l = "bottom" == m ? "HTML" === d.nodeName ? -d.clientHeight + p.bottom : -h.height + p.bottom : p.top, a = "right" == g ? "HTML" === d.nodeName ? -d.clientWidth + p.right : -h.width + p.right : p.left, c && v) u[v] = "translate3d(" + a + "px, " + l + "px, 0)", u[m] = 0, u[g] = 0, u.willChange = "transform";
                        else {
                            var y = "bottom" == m ? -1 : 1,
                                b = "right" == g ? -1 : 1;
                            u[m] = l * y, u[g] = a * b, u.willChange = m + ", " + g
                        }
                        var w = { "x-placement": t.placement };
                        return t.attributes = Gt({}, w, t.attributes), t.styles = Gt({}, u, t.styles), t.arrowStyles = Gt({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        return I(t.instance.popper, t.styles),
                            function(t, e) { Object.keys(e).forEach(function(i) {!1 === e[i] ? t.removeAttribute(i) : t.setAttribute(i, e[i]) }) }(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && I(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, i, n, s) {
                        var r = _(s, e, t, i.positionFixed),
                            o = x(i.placement, r, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                        return e.setAttribute("x-placement", o), I(e, { position: i.positionFixed ? "fixed" : "absolute" }), i
                    },
                    gpuAcceleration: void 0
                }
            }
        };
        var ee = { POPPER: ".tippy-popper", TOOLTIP: ".tippy-tooltip", CONTENT: ".tippy-content", BACKDROP: ".tippy-backdrop", ARROW: ".tippy-arrow", ROUND_ARROW: ".tippy-roundarrow" },
            ie = Mt ? Element.prototype : {},
            ne = ie.matches || ie.matchesSelector || ie.webkitMatchesSelector || ie.mozMatchesSelector || ie.msMatchesSelector,
            se = { passive: !0 },
            re = { x: !0 },
            oe = !1,
            ae = 0,
            le = Object.keys(zt),
            ce = Object.assign || function(t) {
                for (var e, i = 1; i < arguments.length; i++)
                    for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            },
            de = { translate: /translateX?Y?\(([^)]+)\)/, scale: /scaleX?Y?\(([^)]+)\)/ },
            he = 1,
            ue = !1;
        return St.version = "3.4.1", St.defaults = zt, St.one = function(t, e) { return St(t, e, !0).instances[0] }, St.setDefaults = function(t) { Object.keys(t).forEach(function(e) { zt[e] = t[e] }) }, St.disableAnimations = function() { St.setDefaults({ duration: 0, updateDuration: 0, animateFill: !1 }) }, St.hideAllPoppers = J, St.useCapture = function() {}, Mt && setTimeout(function() {
                F(document.querySelectorAll("[data-tippy]")).forEach(function(t) {
                    var e = t.getAttribute("data-tippy");
                    e && St(t, { content: e })
                })
            }),
            function(t) {
                if (Pt) {
                    var e = document.createElement("style");
                    e.type = "text/css", e.textContent = '.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4;max-width:calc(100% - 10px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(60deg);transform:translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-60deg);transform:translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-60deg);transform:translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(60deg);transform:translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;max-width:350px;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}', document.head.insertBefore(e, document.head.firstChild)
                }
            }(), St
    }),
    function(t) {
        t.fn.niceSelect = function(e) {
            if ("string" == typeof e) return "update" == e ? this.each(function() {
                var e = t(this),
                    n = t(this).next(".nice-select"),
                    s = n.hasClass("open");
                n.length && (n.remove(), i(e), s && e.next().trigger("click"))
            }) : "destroy" == e ? (this.each(function() {
                var e = t(this),
                    i = t(this).next(".nice-select");
                i.length && (i.remove(), e.css("display", ""))
            }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;

            function i(e) {
                e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").addClass(e.attr("multiple") ? "has-multiple" : "").attr("tabindex", e.attr("disabled") ? null : "0").html(e.attr("multiple") ? '<span class="multiple-options"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>' : '<span class="current"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'));
                var i = e.next(),
                    n = e.find("option");
                if (e.attr("multiple")) {
                    var s = "";
                    (r = e.find("option:selected")).each(function() { $selected_option = t(this), $selected_text = $selected_option.data("display") || $selected_option.text(), s += '<span class="current">' + $selected_text + "</span>" }), $select_placeholder = e.data("placeholder") || e.attr("placeholder"), $select_placeholder = "" == $select_placeholder ? "Select" : $select_placeholder, s = "" == s ? $select_placeholder : s, i.find(".multiple-options").html(s)
                } else {
                    var r = e.find("option:selected");
                    i.find(".current").html(r.data("display") || r.text())
                }
                n.each(function(e) {
                    var n = t(this),
                        s = n.data("display");
                    i.find("ul").append(t("<li></li>").attr("data-value", n.val()).attr("data-display", s || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
                })
            }
            this.hide(), this.each(function() {
                var e = t(this);
                e.next().hasClass("nice-select") || i(e)
            }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function(e) {
                var i = t(this);
                t(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".nice-select-search").val(""), i.find(".nice-select-search").focus(), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus"), i.find("ul li").show()) : i.focus()
            }), t(document).on("click", ".nice-select-search-box", function(t) { return t.stopPropagation(), !1 }), t(document).on("click.nice_select", function(e) { 0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option") }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(e) {
                var i = t(this),
                    n = i.closest(".nice-select");
                if (n.hasClass("has-multiple")) i.hasClass("selected") ? i.removeClass("selected") : i.addClass("selected"), $selected_html = "", $selected_values = [], n.find(".selected").each(function() {
                    $selected_option = t(this);
                    var e = $selected_option.data("display") || $selected_option.text();
                    $selected_html += '<span class="current">' + e + "</span>", $selected_values.push($selected_option.data("value"))
                }), $select_placeholder = n.prev("select").data("placeholder") || n.prev("select").attr("placeholder"), $select_placeholder = "" == $select_placeholder ? "Select" : $select_placeholder, $selected_html = "" == $selected_html ? $select_placeholder : $selected_html, n.find(".multiple-options").html($selected_html), n.prev("select").val($selected_values).trigger("change");
                else {
                    n.find(".selected").removeClass("selected"), i.addClass("selected");
                    var s = i.data("display") || i.text();
                    n.find(".current").text(s), n.prev("select").val(i.data("value")).trigger("change")
                }
            }), t(document).on("keydown.nice_select", ".nice-select", function(e) {
                var i = t(this),
                    n = t(i.find(".focus") || i.find(".list .option.selected"));
                if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
                if (40 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var s = n.nextAll(".option:not(.disabled)").first();
                        s.length > 0 && (i.find(".focus").removeClass("focus"), s.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (38 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var r = n.prevAll(".option:not(.disabled)").first();
                        r.length > 0 && (i.find(".focus").removeClass("focus"), r.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
                else if (9 == e.keyCode && i.hasClass("open")) return !1
            }), t(document).on("keydown.nice-select-search", ".nice-select", function() {
                var e = t(this),
                    i = e.find(".nice-select-search").val(),
                    n = e.find("ul li");
                if ("" == i) n.show();
                else if (e.hasClass("open")) {
                    i = i.toLowerCase();
                    var s = new RegExp(i);
                    0 < n.length ? n.each(function() {
                        var e = t(this),
                            i = e.text().toLowerCase();
                        s.test(i) ? e.show() : e.hide()
                    }) : n.show()
                }
            });
            var n = document.createElement("a").style;
            return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"), this
        }
    }(jQuery),
    function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e() }(this, function() {
        "use strict";
        var t, e;

        function i() { return t.apply(null, arguments) }

        function n(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

        function s(t) { return null != t && "[object Object]" === Object.prototype.toString.call(t) }

        function r(t) { return void 0 === t }

        function o(t) { return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t) }

        function a(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

        function l(t, e) { var i, n = []; for (i = 0; i < t.length; ++i) n.push(e(t[i], i)); return n }

        function c(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

        function d(t, e) { for (var i in e) c(e, i) && (t[i] = e[i]); return c(e, "toString") && (t.toString = e.toString), c(e, "valueOf") && (t.valueOf = e.valueOf), t }

        function h(t, e, i, n) { return Ee(t, e, i, n, !0).utc() }

        function u(t) { return null == t._pf && (t._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), t._pf }

        function p(t) {
            if (null == t._isValid) {
                var i = u(t),
                    n = e.call(i.parsedDateParts, function(t) { return null != t }),
                    s = !isNaN(t._d.getTime()) && i.overflow < 0 && !i.empty && !i.invalidMonth && !i.invalidWeekday && !i.weekdayMismatch && !i.nullInput && !i.invalidFormat && !i.userInvalidated && (!i.meridiem || i.meridiem && n);
                if (t._strict && (s = s && 0 === i.charsLeftOver && 0 === i.unusedTokens.length && void 0 === i.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return s;
                t._isValid = s
            }
            return t._isValid
        }

        function f(t) { var e = h(NaN); return null != t ? d(u(e), t) : u(e).userInvalidated = !0, e }
        e = Array.prototype.some ? Array.prototype.some : function(t) {
            for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                if (n in e && t.call(this, e[n], n, e)) return !0;
            return !1
        };
        var m = i.momentProperties = [];

        function g(t, e) {
            var i, n, s;
            if (r(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), r(e._i) || (t._i = e._i), r(e._f) || (t._f = e._f), r(e._l) || (t._l = e._l), r(e._strict) || (t._strict = e._strict), r(e._tzm) || (t._tzm = e._tzm), r(e._isUTC) || (t._isUTC = e._isUTC), r(e._offset) || (t._offset = e._offset), r(e._pf) || (t._pf = u(e)), r(e._locale) || (t._locale = e._locale), 0 < m.length)
                for (i = 0; i < m.length; i++) r(s = e[n = m[i]]) || (t[n] = s);
            return t
        }
        var v = !1;

        function y(t) { g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, i.updateOffset(this), v = !1) }

        function b(t) { return t instanceof y || null != t && null != t._isAMomentObject }

        function w(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }

        function x(t) {
            var e = +t,
                i = 0;
            return 0 !== e && isFinite(e) && (i = w(e)), i
        }

        function _(t, e, i) {
            var n, s = Math.min(t.length, e.length),
                r = Math.abs(t.length - e.length),
                o = 0;
            for (n = 0; n < s; n++)(i && t[n] !== e[n] || !i && x(t[n]) !== x(e[n])) && o++;
            return o + r
        }

        function S(t) {!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) }

        function k(t, e) {
            var n = !0;
            return d(function() {
                if (null != i.deprecationHandler && i.deprecationHandler(null, t), n) {
                    for (var s, r = [], o = 0; o < arguments.length; o++) {
                        if (s = "", "object" == typeof arguments[o]) {
                            for (var a in s += "\n[" + o + "] ", arguments[0]) s += a + ": " + arguments[0][a] + ", ";
                            s = s.slice(0, -2)
                        } else s = arguments[o];
                        r.push(s)
                    }
                    S(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1
                }
                return e.apply(this, arguments)
            }, e)
        }
        var E, T = {};

        function C(t, e) { null != i.deprecationHandler && i.deprecationHandler(t, e), T[t] || (S(e), T[t] = !0) }

        function M(t) { return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

        function D(t, e) { var i, n = d({}, t); for (i in e) c(e, i) && (s(t[i]) && s(e[i]) ? (n[i] = {}, d(n[i], t[i]), d(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]); for (i in t) c(t, i) && !c(e, i) && s(t[i]) && (n[i] = d({}, n[i])); return n }

        function O(t) { null != t && this.set(t) }
        i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, E = Object.keys ? Object.keys : function(t) { var e, i = []; for (e in t) c(t, e) && i.push(e); return i };
        var P = {};

        function L(t, e) {
            var i = t.toLowerCase();
            P[i] = P[i + "s"] = P[e] = t
        }

        function $(t) { return "string" == typeof t ? P[t] || P[t.toLowerCase()] : void 0 }

        function I(t) { var e, i, n = {}; for (i in t) c(t, i) && (e = $(i)) && (n[e] = t[i]); return n }
        var z = {};

        function Y(t, e) { z[t] = e }

        function A(t, e, i) {
            var n = "" + Math.abs(t),
                s = e - n.length;
            return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
        }
        var F = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            j = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            N = {},
            R = {};

        function W(t, e, i, n) { var s = n; "string" == typeof n && (s = function() { return this[n]() }), t && (R[t] = s), e && (R[e[0]] = function() { return A(s.apply(this, arguments), e[1], e[2]) }), i && (R[i] = function() { return this.localeData().ordinal(s.apply(this, arguments), t) }) }

        function H(t, e) { return t.isValid() ? (e = B(e, t.localeData()), N[e] = N[e] || function(t) { var e, i, n, s = t.match(F); for (e = 0, i = s.length; e < i; e++) R[s[e]] ? s[e] = R[s[e]] : s[e] = (n = s[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, ""); return function(e) { var n, r = ""; for (n = 0; n < i; n++) r += M(s[n]) ? s[n].call(e, t) : s[n]; return r } }(e), N[e](t)) : t.localeData().invalidDate() }

        function B(t, e) {
            var i = 5;

            function n(t) { return e.longDateFormat(t) || t }
            for (j.lastIndex = 0; 0 <= i && j.test(t);) t = t.replace(j, n), j.lastIndex = 0, i -= 1;
            return t
        }
        var V = /\d/,
            q = /\d\d/,
            G = /\d{3}/,
            X = /\d{4}/,
            U = /[+-]?\d{6}/,
            Z = /\d\d?/,
            Q = /\d\d\d\d?/,
            K = /\d\d\d\d\d\d?/,
            J = /\d{1,3}/,
            tt = /\d{1,4}/,
            et = /[+-]?\d{1,6}/,
            it = /\d+/,
            nt = /[+-]?\d+/,
            st = /Z|[+-]\d\d:?\d\d/gi,
            rt = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ot = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            at = {};

        function lt(t, e, i) { at[t] = M(e) ? e : function(t, n) { return t && i ? i : e } }

        function ct(t, e) { return c(at, t) ? at[t](e._strict, e._locale) : new RegExp(dt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, s) { return e || i || n || s }))) }

        function dt(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
        var ht = {};

        function ut(t, e) { var i, n = e; for ("string" == typeof t && (t = [t]), o(e) && (n = function(t, i) { i[e] = x(t) }), i = 0; i < t.length; i++) ht[t[i]] = n }

        function pt(t, e) { ut(t, function(t, i, n, s) { n._w = n._w || {}, e(t, n._w, n, s) }) }
        var ft = 0,
            mt = 1,
            gt = 2,
            vt = 3,
            yt = 4,
            bt = 5,
            wt = 6,
            xt = 7,
            _t = 8;

        function St(t) { return kt(t) ? 366 : 365 }

        function kt(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 }
        W("Y", 0, 0, function() { var t = this.year(); return t <= 9999 ? "" + t : "+" + t }), W(0, ["YY", 2], 0, function() { return this.year() % 100 }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), Y("year", 1), lt("Y", nt), lt("YY", Z, q), lt("YYYY", tt, X), lt("YYYYY", et, U), lt("YYYYYY", et, U), ut(["YYYYY", "YYYYYY"], ft), ut("YYYY", function(t, e) { e[ft] = 2 === t.length ? i.parseTwoDigitYear(t) : x(t) }), ut("YY", function(t, e) { e[ft] = i.parseTwoDigitYear(t) }), ut("Y", function(t, e) { e[ft] = parseInt(t, 10) }), i.parseTwoDigitYear = function(t) { return x(t) + (68 < x(t) ? 1900 : 2e3) };
        var Et, Tt = Ct("FullYear", !0);

        function Ct(t, e) { return function(n) { return null != n ? (Dt(this, t, n), i.updateOffset(this, e), this) : Mt(this, t) } }

        function Mt(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

        function Dt(t, e, i) { t.isValid() && !isNaN(i) && ("FullYear" === e && kt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), Ot(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i)) }

        function Ot(t, e) { if (isNaN(t) || isNaN(e)) return NaN; var i = (e % 12 + 12) % 12; return t += (e - i) / 12, 1 === i ? kt(t) ? 29 : 28 : 31 - i % 7 % 2 }
        Et = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t) return e;
            return -1
        }, W("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), W("MMM", 0, 0, function(t) { return this.localeData().monthsShort(this, t) }), W("MMMM", 0, 0, function(t) { return this.localeData().months(this, t) }), L("month", "M"), Y("month", 8), lt("M", Z), lt("MM", Z, q), lt("MMM", function(t, e) { return e.monthsShortRegex(t) }), lt("MMMM", function(t, e) { return e.monthsRegex(t) }), ut(["M", "MM"], function(t, e) { e[mt] = x(t) - 1 }), ut(["MMM", "MMMM"], function(t, e, i, n) {
            var s = i._locale.monthsParse(t, n, i._strict);
            null != s ? e[mt] = s : u(i).invalidMonth = t
        });
        var Pt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Lt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            $t = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function It(t, e) {
            var i;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = x(e);
                else if (!o(e = t.localeData().monthsParse(e))) return t;
            return i = Math.min(t.date(), Ot(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
        }

        function zt(t) { return null != t ? (It(this, t), i.updateOffset(this, !0), this) : Mt(this, "Month") }
        var Yt = ot,
            At = ot;

        function Ft() {
            function t(t, e) { return e.length - t.length }
            var e, i, n = [],
                s = [],
                r = [];
            for (e = 0; e < 12; e++) i = h([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
            for (n.sort(t), s.sort(t), r.sort(t), e = 0; e < 12; e++) n[e] = dt(n[e]), s[e] = dt(s[e]);
            for (e = 0; e < 24; e++) r[e] = dt(r[e]);
            this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function jt(t) { var e = new Date(Date.UTC.apply(null, arguments)); return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e }

        function Nt(t, e, i) { var n = 7 + e - i; return -(7 + jt(t, 0, n).getUTCDay() - e) % 7 + n - 1 }

        function Rt(t, e, i, n, s) { var r, o, a = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Nt(t, n, s); return a <= 0 ? o = St(r = t - 1) + a : a > St(t) ? (r = t + 1, o = a - St(t)) : (r = t, o = a), { year: r, dayOfYear: o } }

        function Wt(t, e, i) {
            var n, s, r = Nt(t.year(), e, i),
                o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
            return o < 1 ? n = o + Ht(s = t.year() - 1, e, i) : o > Ht(t.year(), e, i) ? (n = o - Ht(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = o), { week: n, year: s }
        }

        function Ht(t, e, i) {
            var n = Nt(t, e, i),
                s = Nt(t + 1, e, i);
            return (St(t) - n + s) / 7
        }
        W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), Y("week", 5), Y("isoWeek", 5), lt("w", Z), lt("ww", Z, q), lt("W", Z), lt("WW", Z, q), pt(["w", "ww", "W", "WW"], function(t, e, i, n) { e[n.substr(0, 1)] = x(t) }), W("d", 0, "do", "day"), W("dd", 0, 0, function(t) { return this.localeData().weekdaysMin(this, t) }), W("ddd", 0, 0, function(t) { return this.localeData().weekdaysShort(this, t) }), W("dddd", 0, 0, function(t) { return this.localeData().weekdays(this, t) }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), Y("day", 11), Y("weekday", 11), Y("isoWeekday", 11), lt("d", Z), lt("e", Z), lt("E", Z), lt("dd", function(t, e) { return e.weekdaysMinRegex(t) }), lt("ddd", function(t, e) { return e.weekdaysShortRegex(t) }), lt("dddd", function(t, e) { return e.weekdaysRegex(t) }), pt(["dd", "ddd", "dddd"], function(t, e, i, n) {
            var s = i._locale.weekdaysParse(t, n, i._strict);
            null != s ? e.d = s : u(i).invalidWeekday = t
        }), pt(["d", "e", "E"], function(t, e, i, n) { e[n] = x(t) });
        var Bt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Vt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            qt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Gt = ot,
            Xt = ot,
            Ut = ot;

        function Zt() {
            function t(t, e) { return e.length - t.length }
            var e, i, n, s, r, o = [],
                a = [],
                l = [],
                c = [];
            for (e = 0; e < 7; e++) i = h([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), o.push(n), a.push(s), l.push(r), c.push(n), c.push(s), c.push(r);
            for (o.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) a[e] = dt(a[e]), l[e] = dt(l[e]), c[e] = dt(c[e]);
            this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
        }

        function Qt() { return this.hours() % 12 || 12 }

        function Kt(t, e) { W(t, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) }) }

        function Jt(t, e) { return e._meridiemParse }
        W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, Qt), W("k", ["kk", 2], 0, function() { return this.hours() || 24 }), W("hmm", 0, 0, function() { return "" + Qt.apply(this) + A(this.minutes(), 2) }), W("hmmss", 0, 0, function() { return "" + Qt.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2) }), W("Hmm", 0, 0, function() { return "" + this.hours() + A(this.minutes(), 2) }), W("Hmmss", 0, 0, function() { return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2) }), Kt("a", !0), Kt("A", !1), L("hour", "h"), Y("hour", 13), lt("a", Jt), lt("A", Jt), lt("H", Z), lt("h", Z), lt("k", Z), lt("HH", Z, q), lt("hh", Z, q), lt("kk", Z, q), lt("hmm", Q), lt("hmmss", K), lt("Hmm", Q), lt("Hmmss", K), ut(["H", "HH"], vt), ut(["k", "kk"], function(t, e, i) {
            var n = x(t);
            e[vt] = 24 === n ? 0 : n
        }), ut(["a", "A"], function(t, e, i) { i._isPm = i._locale.isPM(t), i._meridiem = t }), ut(["h", "hh"], function(t, e, i) { e[vt] = x(t), u(i).bigHour = !0 }), ut("hmm", function(t, e, i) {
            var n = t.length - 2;
            e[vt] = x(t.substr(0, n)), e[yt] = x(t.substr(n)), u(i).bigHour = !0
        }), ut("hmmss", function(t, e, i) {
            var n = t.length - 4,
                s = t.length - 2;
            e[vt] = x(t.substr(0, n)), e[yt] = x(t.substr(n, 2)), e[bt] = x(t.substr(s)), u(i).bigHour = !0
        }), ut("Hmm", function(t, e, i) {
            var n = t.length - 2;
            e[vt] = x(t.substr(0, n)), e[yt] = x(t.substr(n))
        }), ut("Hmmss", function(t, e, i) {
            var n = t.length - 4,
                s = t.length - 2;
            e[vt] = x(t.substr(0, n)), e[yt] = x(t.substr(n, 2)), e[bt] = x(t.substr(s))
        });
        var te, ee = Ct("Hours", !0),
            ie = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Lt, monthsShort: $t, week: { dow: 0, doy: 6 }, weekdays: Bt, weekdaysMin: qt, weekdaysShort: Vt, meridiemParse: /[ap]\.?m?\.?/i },
            ne = {},
            se = {};

        function re(t) { return t ? t.toLowerCase().replace("_", "-") : t }

        function oe(t) {
            var e = null;
            if (!ne[t] && "undefined" != typeof module && module && module.exports) try { e = te._abbr, require("./locale/" + t), ae(e) } catch (t) {}
            return ne[t]
        }

        function ae(t, e) { var i; return t && ((i = r(e) ? ce(t) : le(t, e)) ? te = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), te._abbr }

        function le(t, e) {
            if (null !== e) {
                var i, n = ie;
                if (e.abbr = t, null != ne[t]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ne[t]._config;
                else if (null != e.parentLocale)
                    if (null != ne[e.parentLocale]) n = ne[e.parentLocale]._config;
                    else {
                        if (null == (i = oe(e.parentLocale))) return se[e.parentLocale] || (se[e.parentLocale] = []), se[e.parentLocale].push({ name: t, config: e }), null;
                        n = i._config
                    }
                return ne[t] = new O(D(n, e)), se[t] && se[t].forEach(function(t) { le(t.name, t.config) }), ae(t), ne[t]
            }
            return delete ne[t], null
        }

        function ce(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return te;
            if (!n(t)) {
                if (e = oe(t)) return e;
                t = [t]
            }
            return function(t) {
                for (var e, i, n, s, r = 0; r < t.length;) {
                    for (e = (s = re(t[r]).split("-")).length, i = (i = re(t[r + 1])) ? i.split("-") : null; 0 < e;) {
                        if (n = oe(s.slice(0, e).join("-"))) return n;
                        if (i && i.length >= e && _(s, i, !0) >= e - 1) break;
                        e--
                    }
                    r++
                }
                return te
            }(t)
        }

        function de(t) { var e, i = t._a; return i && -2 === u(t).overflow && (e = i[mt] < 0 || 11 < i[mt] ? mt : i[gt] < 1 || i[gt] > Ot(i[ft], i[mt]) ? gt : i[vt] < 0 || 24 < i[vt] || 24 === i[vt] && (0 !== i[yt] || 0 !== i[bt] || 0 !== i[wt]) ? vt : i[yt] < 0 || 59 < i[yt] ? yt : i[bt] < 0 || 59 < i[bt] ? bt : i[wt] < 0 || 999 < i[wt] ? wt : -1, u(t)._overflowDayOfYear && (e < ft || gt < e) && (e = gt), u(t)._overflowWeeks && -1 === e && (e = xt), u(t)._overflowWeekday && -1 === e && (e = _t), u(t).overflow = e), t }

        function he(t, e, i) { return null != t ? t : null != e ? e : i }

        function ue(t) {
            var e, n, s, r, o, a = [];
            if (!t._d) {
                var l, c;
                for (l = t, c = new Date(i.now()), s = l._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], t._w && null == t._a[gt] && null == t._a[mt] && function(t) {
                        var e, i, n, s, r, o, a, l;
                        if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, o = 4, i = he(e.GG, t._a[ft], Wt(Te(), 1, 4).year), n = he(e.W, 1), ((s = he(e.E, 1)) < 1 || 7 < s) && (l = !0);
                        else {
                            r = t._locale._week.dow, o = t._locale._week.doy;
                            var c = Wt(Te(), r, o);
                            i = he(e.gg, t._a[ft], c.year), n = he(e.w, c.week), null != e.d ? ((s = e.d) < 0 || 6 < s) && (l = !0) : null != e.e ? (s = e.e + r, (e.e < 0 || 6 < e.e) && (l = !0)) : s = r
                        }
                        n < 1 || n > Ht(i, r, o) ? u(t)._overflowWeeks = !0 : null != l ? u(t)._overflowWeekday = !0 : (a = Rt(i, n, s, r, o), t._a[ft] = a.year, t._dayOfYear = a.dayOfYear)
                    }(t), null != t._dayOfYear && (o = he(t._a[ft], s[ft]), (t._dayOfYear > St(o) || 0 === t._dayOfYear) && (u(t)._overflowDayOfYear = !0), n = jt(o, 0, t._dayOfYear), t._a[mt] = n.getUTCMonth(), t._a[gt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = s[e];
                for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[vt] && 0 === t._a[yt] && 0 === t._a[bt] && 0 === t._a[wt] && (t._nextDay = !0, t._a[vt] = 0), t._d = (t._useUTC ? jt : function(t, e, i, n, s, r, o) { var a = new Date(t, e, i, n, s, r, o); return t < 100 && 0 <= t && isFinite(a.getFullYear()) && a.setFullYear(t), a }).apply(null, a), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[vt] = 24), t._w && void 0 !== t._w.d && t._w.d !== r && (u(t).weekdayMismatch = !0)
            }
        }
        var pe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            fe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            me = /Z|[+-]\d\d(?::?\d\d)?/,
            ge = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            ve = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            ye = /^\/?Date\((\-?\d+)/i;

        function be(t) {
            var e, i, n, s, r, o, a = t._i,
                l = pe.exec(a) || fe.exec(a);
            if (l) {
                for (u(t).iso = !0, e = 0, i = ge.length; e < i; e++)
                    if (ge[e][1].exec(l[1])) { s = ge[e][0], n = !1 !== ge[e][2]; break }
                if (null == s) return void(t._isValid = !1);
                if (l[3]) {
                    for (e = 0, i = ve.length; e < i; e++)
                        if (ve[e][1].exec(l[3])) { r = (l[2] || " ") + ve[e][0]; break }
                    if (null == r) return void(t._isValid = !1)
                }
                if (!n && null != r) return void(t._isValid = !1);
                if (l[4]) {
                    if (!me.exec(l[4])) return void(t._isValid = !1);
                    o = "Z"
                }
                t._f = s + (r || "") + (o || ""), Se(t)
            } else t._isValid = !1
        }
        var we = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
        var xe = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

        function _e(t) {
            var e, i, n, s = we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
            if (s) {
                var r = function(t, e, i, n, s, r) { var o = [function(t) { var e = parseInt(t, 10); return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e }(t), $t.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(s, 10)]; return r && o.push(parseInt(r, 10)), o }(s[4], s[3], s[2], s[5], s[6], s[7]);
                if (i = r, n = t, (e = s[1]) && Vt.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (u(n).weekdayMismatch = !0, !(n._isValid = !1))) return;
                t._a = r, t._tzm = function(t, e, i) {
                    if (t) return xe[t];
                    if (e) return 0;
                    var n = parseInt(i, 10),
                        s = n % 100;
                    return (n - s) / 100 * 60 + s
                }(s[8], s[9], s[10]), t._d = jt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), u(t).rfc2822 = !0
            } else t._isValid = !1
        }

        function Se(t) {
            if (t._f !== i.ISO_8601)
                if (t._f !== i.RFC_2822) {
                    t._a = [], u(t).empty = !0;
                    var e, n, s, r, o, a, l, d, h = "" + t._i,
                        p = h.length,
                        f = 0;
                    for (s = B(t._f, t._locale).match(F) || [], e = 0; e < s.length; e++) r = s[e], (n = (h.match(ct(r, t)) || [])[0]) && (0 < (o = h.substr(0, h.indexOf(n))).length && u(t).unusedInput.push(o), h = h.slice(h.indexOf(n) + n.length), f += n.length), R[r] ? (n ? u(t).empty = !1 : u(t).unusedTokens.push(r), a = r, d = t, null != (l = n) && c(ht, a) && ht[a](l, d._a, d, a)) : t._strict && !n && u(t).unusedTokens.push(r);
                    u(t).charsLeftOver = p - f, 0 < h.length && u(t).unusedInput.push(h), t._a[vt] <= 12 && !0 === u(t).bigHour && 0 < t._a[vt] && (u(t).bigHour = void 0), u(t).parsedDateParts = t._a.slice(0), u(t).meridiem = t._meridiem, t._a[vt] = function(t, e, i) { var n; return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : (null != t.isPM && ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0)), e) }(t._locale, t._a[vt], t._meridiem), ue(t), de(t)
                } else _e(t);
            else be(t)
        }

        function ke(t) {
            var e, c, h, m, v = t._i,
                w = t._f;
            return t._locale = t._locale || ce(t._l), null === v || void 0 === w && "" === v ? f({ nullInput: !0 }) : ("string" == typeof v && (t._i = v = t._locale.preparse(v)), b(v) ? new y(de(v)) : (a(v) ? t._d = v : n(w) ? function(t) {
                var e, i, n, s, r;
                if (0 === t._f.length) return u(t).invalidFormat = !0, t._d = new Date(NaN);
                for (s = 0; s < t._f.length; s++) r = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], Se(e), p(e) && (r += u(e).charsLeftOver, r += 10 * u(e).unusedTokens.length, u(e).score = r, (null == n || r < n) && (n = r, i = e));
                d(t, i || e)
            }(t) : w ? Se(t) : r(c = (e = t)._i) ? e._d = new Date(i.now()) : a(c) ? e._d = new Date(c.valueOf()) : "string" == typeof c ? (h = e, null === (m = ye.exec(h._i)) ? (be(h), !1 === h._isValid && (delete h._isValid, _e(h), !1 === h._isValid && (delete h._isValid, i.createFromInputFallback(h)))) : h._d = new Date(+m[1])) : n(c) ? (e._a = l(c.slice(0), function(t) { return parseInt(t, 10) }), ue(e)) : s(c) ? function(t) {
                if (!t._d) {
                    var e = I(t._i);
                    t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) { return t && parseInt(t, 10) }), ue(t)
                }
            }(e) : o(c) ? e._d = new Date(c) : i.createFromInputFallback(e), p(t) || (t._d = null), t))
        }

        function Ee(t, e, i, r, o) {
            var a, l = {};
            return !0 !== i && !1 !== i || (r = i, i = void 0), (s(t) && function(t) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }(t) || n(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = i, l._i = t, l._f = e, l._strict = r, (a = new y(de(ke(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a
        }

        function Te(t, e, i, n) { return Ee(t, e, i, n, !1) }
        i.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
        var Ce = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = Te.apply(null, arguments); return this.isValid() && t.isValid() ? t < this ? this : t : f() }),
            Me = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = Te.apply(null, arguments); return this.isValid() && t.isValid() ? this < t ? this : t : f() });

        function De(t, e) { var i, s; if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return Te(); for (i = e[0], s = 1; s < e.length; ++s) e[s].isValid() && !e[s][t](i) || (i = e[s]); return i }
        var Oe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Pe(t) {
            var e = I(t),
                i = e.year || 0,
                n = e.quarter || 0,
                s = e.month || 0,
                r = e.week || 0,
                o = e.day || 0,
                a = e.hour || 0,
                l = e.minute || 0,
                c = e.second || 0,
                d = e.millisecond || 0;
            this._isValid = function(t) {
                for (var e in t)
                    if (-1 === Et.call(Oe, e) || null != t[e] && isNaN(t[e])) return !1;
                for (var i = !1, n = 0; n < Oe.length; ++n)
                    if (t[Oe[n]]) {
                        if (i) return !1;
                        parseFloat(t[Oe[n]]) !== x(t[Oe[n]]) && (i = !0)
                    }
                return !0
            }(e), this._milliseconds = +d + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +o + 7 * r, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = ce(), this._bubble()
        }

        function Le(t) { return t instanceof Pe }

        function $e(t) { return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t) }

        function Ie(t, e) {
            W(t, 0, 0, function() {
                var t = this.utcOffset(),
                    i = "+";
                return t < 0 && (t = -t, i = "-"), i + A(~~(t / 60), 2) + e + A(~~t % 60, 2)
            })
        }
        Ie("Z", ":"), Ie("ZZ", ""), lt("Z", rt), lt("ZZ", rt), ut(["Z", "ZZ"], function(t, e, i) { i._useUTC = !0, i._tzm = Ye(rt, t) });
        var ze = /([\+\-]|\d\d)/gi;

        function Ye(t, e) {
            var i = (e || "").match(t);
            if (null === i) return null;
            var n = ((i[i.length - 1] || []) + "").match(ze) || ["-", 0, 0],
                s = 60 * n[1] + x(n[2]);
            return 0 === s ? 0 : "+" === n[0] ? s : -s
        }

        function Ae(t, e) { var n, s; return e._isUTC ? (n = e.clone(), s = (b(t) || a(t) ? t.valueOf() : Te(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), i.updateOffset(n, !1), n) : Te(t).local() }

        function Fe(t) { return 15 * -Math.round(t._d.getTimezoneOffset() / 15) }

        function je() { return !!this.isValid() && this._isUTC && 0 === this._offset }
        i.updateOffset = function() {};
        var Ne = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Re = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function We(t, e) {
            var i, n, s, r = t,
                a = null;
            return Le(t) ? r = { ms: t._milliseconds, d: t._days, M: t._months } : o(t) ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (a = Ne.exec(t)) ? (i = "-" === a[1] ? -1 : 1, r = { y: 0, d: x(a[gt]) * i, h: x(a[vt]) * i, m: x(a[yt]) * i, s: x(a[bt]) * i, ms: x($e(1e3 * a[wt])) * i }) : (a = Re.exec(t)) ? (i = "-" === a[1] ? -1 : (a[1], 1), r = { y: He(a[2], i), M: He(a[3], i), w: He(a[4], i), d: He(a[5], i), h: He(a[6], i), m: He(a[7], i), s: He(a[8], i) }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = function(t, e) { var i; return t.isValid() && e.isValid() ? (e = Ae(e, t), t.isBefore(e) ? i = Be(t, e) : ((i = Be(e, t)).milliseconds = -i.milliseconds, i.months = -i.months), i) : { milliseconds: 0, months: 0 } }(Te(r.from), Te(r.to)), (r = {}).ms = s.milliseconds, r.M = s.months), n = new Pe(r), Le(t) && c(t, "_locale") && (n._locale = t._locale), n
        }

        function He(t, e) { var i = t && parseFloat(t.replace(",", ".")); return (isNaN(i) ? 0 : i) * e }

        function Be(t, e) { var i = { milliseconds: 0, months: 0 }; return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i }

        function Ve(t, e) { return function(i, n) { var s; return null === n || isNaN(+n) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = i, i = n, n = s), qe(this, We(i = "string" == typeof i ? +i : i, n), t), this } }

        function qe(t, e, n, s) {
            var r = e._milliseconds,
                o = $e(e._days),
                a = $e(e._months);
            t.isValid() && (s = null == s || s, a && It(t, Mt(t, "Month") + a * n), o && Dt(t, "Date", Mt(t, "Date") + o * n), r && t._d.setTime(t._d.valueOf() + r * n), s && i.updateOffset(t, o || a))
        }
        We.fn = Pe.prototype, We.invalid = function() { return We(NaN) };
        var Ge = Ve(1, "add"),
            Xe = Ve(-1, "subtract");

        function Ue(t, e) {
            var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                n = t.clone().add(i, "months");
            return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
        }

        function Ze(t) { var e; return void 0 === t ? this._locale._abbr : (null != (e = ce(t)) && (this._locale = e), this) }
        i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Qe = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) { return void 0 === t ? this.localeData() : this.locale(t) });

        function Ke() { return this._locale }

        function Je(t, e) { W(0, [t, t.length], 0, e) }

        function ti(t, e, i, n, s) {
            var r;
            return null == t ? Wt(this, n, s).year : ((r = Ht(t, n, s)) < e && (e = r), function(t, e, i, n, s) {
                var r = Rt(t, e, i, n, s),
                    o = jt(r.year, 0, r.dayOfYear);
                return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
            }.call(this, t, e, i, n, s))
        }
        W(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), W(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), Je("gggg", "weekYear"), Je("ggggg", "weekYear"), Je("GGGG", "isoWeekYear"), Je("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), Y("weekYear", 1), Y("isoWeekYear", 1), lt("G", nt), lt("g", nt), lt("GG", Z, q), lt("gg", Z, q), lt("GGGG", tt, X), lt("gggg", tt, X), lt("GGGGG", et, U), lt("ggggg", et, U), pt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) { e[n.substr(0, 2)] = x(t) }), pt(["gg", "GG"], function(t, e, n, s) { e[s] = i.parseTwoDigitYear(t) }), W("Q", 0, "Qo", "quarter"), L("quarter", "Q"), Y("quarter", 7), lt("Q", V), ut("Q", function(t, e) { e[mt] = 3 * (x(t) - 1) }), W("D", ["DD", 2], "Do", "date"), L("date", "D"), Y("date", 9), lt("D", Z), lt("DD", Z, q), lt("Do", function(t, e) { return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient }), ut(["D", "DD"], gt), ut("Do", function(t, e) { e[gt] = x(t.match(Z)[0]) });
        var ei = Ct("Date", !0);
        W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), Y("dayOfYear", 4), lt("DDD", J), lt("DDDD", G), ut(["DDD", "DDDD"], function(t, e, i) { i._dayOfYear = x(t) }), W("m", ["mm", 2], 0, "minute"), L("minute", "m"), Y("minute", 14), lt("m", Z), lt("mm", Z, q), ut(["m", "mm"], yt);
        var ii = Ct("Minutes", !1);
        W("s", ["ss", 2], 0, "second"), L("second", "s"), Y("second", 15), lt("s", Z), lt("ss", Z, q), ut(["s", "ss"], bt);
        var ni, si = Ct("Seconds", !1);
        for (W("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), W(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), W(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), W(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), W(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), W(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), W(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), L("millisecond", "ms"), Y("millisecond", 16), lt("S", J, V), lt("SS", J, q), lt("SSS", J, G), ni = "SSSS"; ni.length <= 9; ni += "S") lt(ni, it);

        function ri(t, e) { e[wt] = x(1e3 * ("0." + t)) }
        for (ni = "S"; ni.length <= 9; ni += "S") ut(ni, ri);
        var oi = Ct("Milliseconds", !1);
        W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
        var ai = y.prototype;

        function li(t) { return t }
        ai.add = Ge, ai.calendar = function(t, e) {
            var n = t || Te(),
                s = Ae(n, this).startOf("day"),
                r = i.calendarFormat(this, s) || "sameElse",
                o = e && (M(e[r]) ? e[r].call(this, n) : e[r]);
            return this.format(o || this.localeData().calendar(r, this, Te(n)))
        }, ai.clone = function() { return new y(this) }, ai.diff = function(t, e, i) {
            var n, s, r;
            if (!this.isValid()) return NaN;
            if (!(n = Ae(t, this)).isValid()) return NaN;
            switch (s = 6e4 * (n.utcOffset() - this.utcOffset()), e = $(e)) {
                case "year":
                    r = Ue(this, n) / 12;
                    break;
                case "month":
                    r = Ue(this, n);
                    break;
                case "quarter":
                    r = Ue(this, n) / 3;
                    break;
                case "second":
                    r = (this - n) / 1e3;
                    break;
                case "minute":
                    r = (this - n) / 6e4;
                    break;
                case "hour":
                    r = (this - n) / 36e5;
                    break;
                case "day":
                    r = (this - n - s) / 864e5;
                    break;
                case "week":
                    r = (this - n - s) / 6048e5;
                    break;
                default:
                    r = this - n
            }
            return i ? r : w(r)
        }, ai.endOf = function(t) { return void 0 === (t = $(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")) }, ai.format = function(t) { t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat); var e = H(this, t); return this.localeData().postformat(e) }, ai.from = function(t, e) { return this.isValid() && (b(t) && t.isValid() || Te(t).isValid()) ? We({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, ai.fromNow = function(t) { return this.from(Te(), t) }, ai.to = function(t, e) { return this.isValid() && (b(t) && t.isValid() || Te(t).isValid()) ? We({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, ai.toNow = function(t) { return this.to(Te(), t) }, ai.get = function(t) { return M(this[t = $(t)]) ? this[t]() : this }, ai.invalidAt = function() { return u(this).overflow }, ai.isAfter = function(t, e) { var i = b(t) ? t : Te(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = $(r(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf()) }, ai.isBefore = function(t, e) { var i = b(t) ? t : Te(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = $(r(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf()) }, ai.isBetween = function(t, e, i, n) { return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i)) }, ai.isSame = function(t, e) { var i, n = b(t) ? t : Te(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = $(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf())) }, ai.isSameOrAfter = function(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }, ai.isSameOrBefore = function(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }, ai.isValid = function() { return p(this) }, ai.lang = Qe, ai.locale = Ze, ai.localeData = Ke, ai.max = Me, ai.min = Ce, ai.parsingFlags = function() { return d({}, u(this)) }, ai.set = function(t, e) {
            if ("object" == typeof t)
                for (var i = function(t) { var e = []; for (var i in t) e.push({ unit: i, priority: z[i] }); return e.sort(function(t, e) { return t.priority - e.priority }), e }(t = I(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
            else if (M(this[t = $(t)])) return this[t](e);
            return this
        }, ai.startOf = function(t) {
            switch (t = $(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }, ai.subtract = Xe, ai.toArray = function() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }, ai.toObject = function() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }, ai.toDate = function() { return new Date(this.valueOf()) }, ai.toISOString = function(t) {
            if (!this.isValid()) return null;
            var e = !0 !== t,
                i = e ? this.clone().utc() : this;
            return i.year() < 0 || 9999 < i.year() ? H(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : M(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", H(i, "Z")) : H(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, ai.inspect = function() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t = "moment",
                e = "";
            this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
            var i = "[" + t + '("]',
                n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                s = e + '[")]';
            return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
        }, ai.toJSON = function() { return this.isValid() ? this.toISOString() : null }, ai.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, ai.unix = function() { return Math.floor(this.valueOf() / 1e3) }, ai.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, ai.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, ai.year = Tt, ai.isLeapYear = function() { return kt(this.year()) }, ai.weekYear = function(t) { return ti.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, ai.isoWeekYear = function(t) { return ti.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }, ai.quarter = ai.quarters = function(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }, ai.month = zt, ai.daysInMonth = function() { return Ot(this.year(), this.month()) }, ai.week = ai.weeks = function(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }, ai.isoWeek = ai.isoWeeks = function(t) { var e = Wt(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }, ai.weeksInYear = function() { var t = this.localeData()._week; return Ht(this.year(), t.dow, t.doy) }, ai.isoWeeksInYear = function() { return Ht(this.year(), 1, 4) }, ai.date = ei, ai.day = ai.days = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n }, ai.weekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }, ai.isoWeekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; if (null != t) { var e = (i = t, n = this.localeData(), "string" == typeof i ? n.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i); return this.day(this.day() % 7 ? e : e - 7) } return this.day() || 7; var i, n }, ai.dayOfYear = function(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }, ai.hour = ai.hours = ee, ai.minute = ai.minutes = ii, ai.second = ai.seconds = si, ai.millisecond = ai.milliseconds = oi, ai.utcOffset = function(t, e, n) { var s, r = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null != t) { if ("string" == typeof t) { if (null === (t = Ye(rt, t))) return this } else Math.abs(t) < 16 && !n && (t *= 60); return !this._isUTC && e && (s = Fe(this)), this._offset = t, this._isUTC = !0, null != s && this.add(s, "m"), r !== t && (!e || this._changeInProgress ? qe(this, We(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? r : Fe(this) }, ai.utc = function(t) { return this.utcOffset(0, t) }, ai.local = function(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Fe(this), "m")), this }, ai.parseZone = function() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var t = Ye(st, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
            }
            return this
        }, ai.hasAlignedHourOffset = function(t) { return !!this.isValid() && (t = t ? Te(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0) }, ai.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, ai.isLocal = function() { return !!this.isValid() && !this._isUTC }, ai.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, ai.isUtc = je, ai.isUTC = je, ai.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, ai.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, ai.dates = k("dates accessor is deprecated. Use date instead.", ei), ai.months = k("months accessor is deprecated. Use month instead", zt), ai.years = k("years accessor is deprecated. Use year instead", Tt), ai.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() }), ai.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
            if (!r(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (g(t, this), (t = ke(t))._a) {
                var e = t._isUTC ? h(t._a) : Te(t._a);
                this._isDSTShifted = this.isValid() && 0 < _(t._a, e.toArray())
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        });
        var ci = O.prototype;

        function di(t, e, i, n) {
            var s = ce(),
                r = h().set(n, e);
            return s[i](r, t)
        }

        function hi(t, e, i) { if (o(t) && (e = t, t = void 0), t = t || "", null != e) return di(t, e, i, "month"); var n, s = []; for (n = 0; n < 12; n++) s[n] = di(t, n, i, "month"); return s }

        function ui(t, e, i, n) {
            "boolean" == typeof t ? o(e) && (i = e, e = void 0) : (e = t, t = !1, o(i = e) && (i = e, e = void 0)), e = e || "";
            var s, r = ce(),
                a = t ? r._week.dow : 0;
            if (null != i) return di(e, (i + a) % 7, n, "day");
            var l = [];
            for (s = 0; s < 7; s++) l[s] = di(e, (s + a) % 7, n, "day");
            return l
        }
        ci.calendar = function(t, e, i) { var n = this._calendar[t] || this._calendar.sameElse; return M(n) ? n.call(e, i) : n }, ci.longDateFormat = function(t) {
            var e = this._longDateFormat[t],
                i = this._longDateFormat[t.toUpperCase()];
            return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) { return t.slice(1) }), this._longDateFormat[t])
        }, ci.invalidDate = function() { return this._invalidDate }, ci.ordinal = function(t) { return this._ordinal.replace("%d", t) }, ci.preparse = li, ci.postformat = li, ci.relativeTime = function(t, e, i, n) { var s = this._relativeTime[i]; return M(s) ? s(t, e, i, n) : s.replace(/%d/i, t) }, ci.pastFuture = function(t, e) { var i = this._relativeTime[0 < t ? "future" : "past"]; return M(i) ? i(e) : i.replace(/%s/i, e) }, ci.set = function(t) {
            var e, i;
            for (i in t) M(e = t[i]) ? this[i] = e : this["_" + i] = e;
            this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, ci.months = function(t, e) { return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Pt).test(e) ? "format" : "standalone"][t.month()] : n(this._months) ? this._months : this._months.standalone }, ci.monthsShort = function(t, e) { return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Pt.test(e) ? "format" : "standalone"][t.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, ci.monthsParse = function(t, e, i) {
            var n, s, r;
            if (this._monthsParseExact) return function(t, e, i) {
                var n, s, r, o = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = h([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
                return i ? "MMM" === e ? -1 !== (s = Et.call(this._shortMonthsParse, o)) ? s : null : -1 !== (s = Et.call(this._longMonthsParse, o)) ? s : null : "MMM" === e ? -1 !== (s = Et.call(this._shortMonthsParse, o)) ? s : -1 !== (s = Et.call(this._longMonthsParse, o)) ? s : null : -1 !== (s = Et.call(this._longMonthsParse, o)) ? s : -1 !== (s = Et.call(this._shortMonthsParse, o)) ? s : null
            }.call(this, t, e, i);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (s = h([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n; if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n; if (!i && this._monthsParse[n].test(t)) return n }
        }, ci.monthsRegex = function(t) { return this._monthsParseExact ? (c(this, "_monthsRegex") || Ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = At), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex) }, ci.monthsShortRegex = function(t) { return this._monthsParseExact ? (c(this, "_monthsRegex") || Ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Yt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex) }, ci.week = function(t) { return Wt(t, this._week.dow, this._week.doy).week }, ci.firstDayOfYear = function() { return this._week.doy }, ci.firstDayOfWeek = function() { return this._week.dow }, ci.weekdays = function(t, e) { return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone }, ci.weekdaysMin = function(t) { return t ? this._weekdaysMin[t.day()] : this._weekdaysMin }, ci.weekdaysShort = function(t) { return t ? this._weekdaysShort[t.day()] : this._weekdaysShort }, ci.weekdaysParse = function(t, e, i) {
            var n, s, r;
            if (this._weekdaysParseExact) return function(t, e, i) {
                var n, s, r, o = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = h([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
                return i ? "dddd" === e ? -1 !== (s = Et.call(this._weekdaysParse, o)) ? s : null : "ddd" === e ? -1 !== (s = Et.call(this._shortWeekdaysParse, o)) ? s : null : -1 !== (s = Et.call(this._minWeekdaysParse, o)) ? s : null : "dddd" === e ? -1 !== (s = Et.call(this._weekdaysParse, o)) ? s : -1 !== (s = Et.call(this._shortWeekdaysParse, o)) ? s : -1 !== (s = Et.call(this._minWeekdaysParse, o)) ? s : null : "ddd" === e ? -1 !== (s = Et.call(this._shortWeekdaysParse, o)) ? s : -1 !== (s = Et.call(this._weekdaysParse, o)) ? s : -1 !== (s = Et.call(this._minWeekdaysParse, o)) ? s : null : -1 !== (s = Et.call(this._minWeekdaysParse, o)) ? s : -1 !== (s = Et.call(this._weekdaysParse, o)) ? s : -1 !== (s = Et.call(this._shortWeekdaysParse, o)) ? s : null
            }.call(this, t, e, i);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (s = h([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n; if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n; if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n; if (!i && this._weekdaysParse[n].test(t)) return n }
        }, ci.weekdaysRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex) }, ci.weekdaysShortRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, ci.weekdaysMinRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ut), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, ci.isPM = function(t) { return "p" === (t + "").toLowerCase().charAt(0) }, ci.meridiem = function(t, e, i) { return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM" }, ae("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) { var e = t % 10; return t + (1 === x(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), i.lang = k("moment.lang is deprecated. Use moment.locale instead.", ae), i.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ce);
        var pi = Math.abs;

        function fi(t, e, i, n) { var s = We(e, i); return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble() }

        function mi(t) { return t < 0 ? Math.floor(t) : Math.ceil(t) }

        function gi(t) { return 4800 * t / 146097 }

        function vi(t) { return 146097 * t / 4800 }

        function yi(t) { return function() { return this.as(t) } }
        var bi = yi("ms"),
            wi = yi("s"),
            xi = yi("m"),
            _i = yi("h"),
            Si = yi("d"),
            ki = yi("w"),
            Ei = yi("M"),
            Ti = yi("y");

        function Ci(t) { return function() { return this.isValid() ? this._data[t] : NaN } }
        var Mi = Ci("milliseconds"),
            Di = Ci("seconds"),
            Oi = Ci("minutes"),
            Pi = Ci("hours"),
            Li = Ci("days"),
            $i = Ci("months"),
            Ii = Ci("years"),
            zi = Math.round,
            Yi = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
            Ai = Math.abs;

        function Fi(t) { return (0 < t) - (t < 0) || +t }

        function ji() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t, e, i = Ai(this._milliseconds) / 1e3,
                n = Ai(this._days),
                s = Ai(this._months);
            e = w((t = w(i / 60)) / 60), i %= 60, t %= 60;
            var r = w(s / 12),
                o = s %= 12,
                a = n,
                l = e,
                c = t,
                d = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                h = this.asSeconds();
            if (!h) return "P0D";
            var u = h < 0 ? "-" : "",
                p = Fi(this._months) !== Fi(h) ? "-" : "",
                f = Fi(this._days) !== Fi(h) ? "-" : "",
                m = Fi(this._milliseconds) !== Fi(h) ? "-" : "";
            return u + "P" + (r ? p + r + "Y" : "") + (o ? p + o + "M" : "") + (a ? f + a + "D" : "") + (l || c || d ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (d ? m + d + "S" : "")
        }
        var Ni = Pe.prototype;
        return Ni.isValid = function() { return this._isValid }, Ni.abs = function() { var t = this._data; return this._milliseconds = pi(this._milliseconds), this._days = pi(this._days), this._months = pi(this._months), t.milliseconds = pi(t.milliseconds), t.seconds = pi(t.seconds), t.minutes = pi(t.minutes), t.hours = pi(t.hours), t.months = pi(t.months), t.years = pi(t.years), this }, Ni.add = function(t, e) { return fi(this, t, e, 1) }, Ni.subtract = function(t, e) { return fi(this, t, e, -1) }, Ni.as = function(t) {
            if (!this.isValid()) return NaN;
            var e, i, n = this._milliseconds;
            if ("month" === (t = $(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + gi(e), "month" === t ? i : i / 12;
            switch (e = this._days + Math.round(vi(this._months)), t) {
                case "week":
                    return e / 7 + n / 6048e5;
                case "day":
                    return e + n / 864e5;
                case "hour":
                    return 24 * e + n / 36e5;
                case "minute":
                    return 1440 * e + n / 6e4;
                case "second":
                    return 86400 * e + n / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + n;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }, Ni.asMilliseconds = bi, Ni.asSeconds = wi, Ni.asMinutes = xi, Ni.asHours = _i, Ni.asDays = Si, Ni.asWeeks = ki, Ni.asMonths = Ei, Ni.asYears = Ti, Ni.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12) : NaN }, Ni._bubble = function() {
            var t, e, i, n, s, r = this._milliseconds,
                o = this._days,
                a = this._months,
                l = this._data;
            return 0 <= r && 0 <= o && 0 <= a || r <= 0 && o <= 0 && a <= 0 || (r += 864e5 * mi(vi(a) + o), a = o = 0), l.milliseconds = r % 1e3, t = w(r / 1e3), l.seconds = t % 60, e = w(t / 60), l.minutes = e % 60, i = w(e / 60), l.hours = i % 24, a += s = w(gi(o += w(i / 24))), o -= mi(vi(s)), n = w(a / 12), a %= 12, l.days = o, l.months = a, l.years = n, this
        }, Ni.clone = function() { return We(this) }, Ni.get = function(t) { return t = $(t), this.isValid() ? this[t + "s"]() : NaN }, Ni.milliseconds = Mi, Ni.seconds = Di, Ni.minutes = Oi, Ni.hours = Pi, Ni.days = Li, Ni.weeks = function() { return w(this.days() / 7) }, Ni.months = $i, Ni.years = Ii, Ni.humanize = function(t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, i, n, s, r, o, a, l, c, d, h = this.localeData(),
                u = (e = !t, i = h, n = We(this).abs(), s = zi(n.as("s")), r = zi(n.as("m")), o = zi(n.as("h")), a = zi(n.as("d")), l = zi(n.as("M")), c = zi(n.as("y")), (d = s <= Yi.ss && ["s", s] || s < Yi.s && ["ss", s] || r <= 1 && ["m"] || r < Yi.m && ["mm", r] || o <= 1 && ["h"] || o < Yi.h && ["hh", o] || a <= 1 && ["d"] || a < Yi.d && ["dd", a] || l <= 1 && ["M"] || l < Yi.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c])[2] = e, d[3] = 0 < +this, d[4] = i, function(t, e, i, n, s) { return s.relativeTime(e || 1, !!i, t, n) }.apply(null, d));
            return t && (u = h.pastFuture(+this, u)), h.postformat(u)
        }, Ni.toISOString = ji, Ni.toString = ji, Ni.toJSON = ji, Ni.locale = Ze, Ni.localeData = Ke, Ni.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ji), Ni.lang = Qe, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), lt("x", nt), lt("X", /[+-]?\d+(\.\d{1,3})?/), ut("X", function(t, e, i) { i._d = new Date(1e3 * parseFloat(t, 10)) }), ut("x", function(t, e, i) { i._d = new Date(x(t)) }), i.version = "2.22.1", t = Te, i.fn = ai, i.min = function() { return De("isBefore", [].slice.call(arguments, 0)) }, i.max = function() { return De("isAfter", [].slice.call(arguments, 0)) }, i.now = function() { return Date.now ? Date.now() : +new Date }, i.utc = h, i.unix = function(t) { return Te(1e3 * t) }, i.months = function(t, e) { return hi(t, e, "months") }, i.isDate = a, i.locale = ae, i.invalid = f, i.duration = We, i.isMoment = b, i.weekdays = function(t, e, i) { return ui(t, e, i, "weekdays") }, i.parseZone = function() { return Te.apply(null, arguments).parseZone() }, i.localeData = ce, i.isDuration = Le, i.monthsShort = function(t, e) { return hi(t, e, "monthsShort") }, i.weekdaysMin = function(t, e, i) { return ui(t, e, i, "weekdaysMin") }, i.defineLocale = le, i.updateLocale = function(t, e) {
            if (null != e) {
                var i, n, s = ie;
                null != (n = oe(t)) && (s = n._config), (i = new O(e = D(s, e))).parentLocale = ne[t], ne[t] = i, ae(t)
            } else null != ne[t] && (null != ne[t].parentLocale ? ne[t] = ne[t].parentLocale : null != ne[t] && delete ne[t]);
            return ne[t]
        }, i.locales = function() { return E(ne) }, i.weekdaysShort = function(t, e, i) { return ui(t, e, i, "weekdaysShort") }, i.normalizeUnits = $, i.relativeTimeRounding = function(t) { return void 0 === t ? zi : "function" == typeof t && (zi = t, !0) }, i.relativeTimeThreshold = function(t, e) { return void 0 !== Yi[t] && (void 0 === e ? Yi[t] : (Yi[t] = e, "s" === t && (Yi.ss = e - 1), !0)) }, i.calendarFormat = function(t, e) { var i = t.diff(e, "days", !0); return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse" }, i.prototype = ai, i.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, i
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["moment", "jquery"], function(t, i) { return i.fn || (i.fn = {}), e(t, i) });
        else if ("object" == typeof module && module.exports) {
            var i = "undefined" != typeof window ? window.jQuery : void 0;
            i || (i = require("jquery")).fn || (i.fn = {});
            var n = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
            module.exports = e(n, i)
        } else t.daterangepicker = e(t.moment, t.jQuery)
    }(this, function(t, e) {
        var i = function(i, n, s) {
            if (this.parentEl = "body", this.element = e(i), this.startDate = t().startOf("day"), this.endDate = t().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = t().subtract(100, "year").format("YYYY"), this.maxYear = t().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = { direction: "ltr", format: t.localeData().longDateFormat("L"), separator: " - ", applyLabel: "Valider", cancelLabel: "Effacer", weekLabel: "W", customRangeLabel: "Custom Range", daysOfWeek: t.weekdaysMin(), monthNames: t.monthsShort(), firstDay: t.localeData().firstDayOfWeek() }, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof n && null !== n || (n = {}), "string" == typeof(n = e.extend(this.element.data(), n)).template || n.template instanceof e || (n.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = n.parentEl && e(n.parentEl).length ? e(n.parentEl) : e(this.parentEl), this.container = e(n.template).appendTo(this.parentEl), "object" == typeof n.locale && ("string" == typeof n.locale.direction && (this.locale.direction = n.locale.direction), "string" == typeof n.locale.format && (this.locale.format = n.locale.format), "string" == typeof n.locale.separator && (this.locale.separator = n.locale.separator), "object" == typeof n.locale.daysOfWeek && (this.locale.daysOfWeek = n.locale.daysOfWeek.slice()), "object" == typeof n.locale.monthNames && (this.locale.monthNames = n.locale.monthNames.slice()), "number" == typeof n.locale.firstDay && (this.locale.firstDay = n.locale.firstDay), "string" == typeof n.locale.applyLabel && (this.locale.applyLabel = n.locale.applyLabel), "string" == typeof n.locale.cancelLabel && (this.locale.cancelLabel = n.locale.cancelLabel), "string" == typeof n.locale.weekLabel && (this.locale.weekLabel = n.locale.weekLabel), "string" == typeof n.locale.customRangeLabel)) {
                (u = document.createElement("textarea")).innerHTML = n.locale.customRangeLabel;
                var r = u.value;
                this.locale.customRangeLabel = r
            }
            if (this.container.addClass(this.locale.direction), "string" == typeof n.startDate && (this.startDate = t(n.startDate, this.locale.format)), "string" == typeof n.endDate && (this.endDate = t(n.endDate, this.locale.format)), "string" == typeof n.minDate && (this.minDate = t(n.minDate, this.locale.format)), "string" == typeof n.maxDate && (this.maxDate = t(n.maxDate, this.locale.format)), "object" == typeof n.startDate && (this.startDate = t(n.startDate)), "object" == typeof n.endDate && (this.endDate = t(n.endDate)), "object" == typeof n.minDate && (this.minDate = t(n.minDate)), "object" == typeof n.maxDate && (this.maxDate = t(n.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof n.applyButtonClasses && (this.applyButtonClasses = n.applyButtonClasses), "string" == typeof n.applyClass && (this.applyButtonClasses = n.applyClass), "string" == typeof n.cancelButtonClasses && (this.cancelButtonClasses = n.cancelButtonClasses), "string" == typeof n.cancelClass && (this.cancelButtonClasses = n.cancelClass), "object" == typeof n.maxSpan && (this.maxSpan = n.maxSpan), "object" == typeof n.dateLimit && (this.maxSpan = n.dateLimit), "string" == typeof n.opens && (this.opens = n.opens), "string" == typeof n.drops && (this.drops = n.drops), "boolean" == typeof n.showWeekNumbers && (this.showWeekNumbers = n.showWeekNumbers), "boolean" == typeof n.showISOWeekNumbers && (this.showISOWeekNumbers = n.showISOWeekNumbers), "string" == typeof n.buttonClasses && (this.buttonClasses = n.buttonClasses), "object" == typeof n.buttonClasses && (this.buttonClasses = n.buttonClasses.join(" ")), "boolean" == typeof n.showDropdowns && (this.showDropdowns = n.showDropdowns), "number" == typeof n.minYear && (this.minYear = n.minYear), "number" == typeof n.maxYear && (this.maxYear = n.maxYear), "boolean" == typeof n.showCustomRangeLabel && (this.showCustomRangeLabel = n.showCustomRangeLabel), "boolean" == typeof n.singleDatePicker && (this.singleDatePicker = n.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof n.timePicker && (this.timePicker = n.timePicker), "boolean" == typeof n.timePickerSeconds && (this.timePickerSeconds = n.timePickerSeconds), "number" == typeof n.timePickerIncrement && (this.timePickerIncrement = n.timePickerIncrement), "boolean" == typeof n.timePicker24Hour && (this.timePicker24Hour = n.timePicker24Hour), "boolean" == typeof n.autoApply && (this.autoApply = n.autoApply), "boolean" == typeof n.autoUpdateInput && (this.autoUpdateInput = n.autoUpdateInput), "boolean" == typeof n.linkedCalendars && (this.linkedCalendars = n.linkedCalendars), "function" == typeof n.isInvalidDate && (this.isInvalidDate = n.isInvalidDate), "function" == typeof n.isCustomDate && (this.isCustomDate = n.isCustomDate), "boolean" == typeof n.alwaysShowCalendars && (this.alwaysShowCalendars = n.alwaysShowCalendars), 0 != this.locale.firstDay)
                for (var o = this.locale.firstDay; 0 < o;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), o--;
            var a, l, c;
            if (void 0 === n.startDate && void 0 === n.endDate && e(this.element).is(":text")) {
                var d = e(this.element).val(),
                    h = d.split(this.locale.separator);
                a = l = null, 2 == h.length ? (a = t(h[0], this.locale.format), l = t(h[1], this.locale.format)) : this.singleDatePicker && "" !== d && (a = t(d, this.locale.format), l = t(d, this.locale.format)), null !== a && null !== l && (this.setStartDate(a), this.setEndDate(l))
            }
            if ("object" == typeof n.ranges) {
                for (c in n.ranges) { a = "string" == typeof n.ranges[c][0] ? t(n.ranges[c][0], this.locale.format) : t(n.ranges[c][0]), l = "string" == typeof n.ranges[c][1] ? t(n.ranges[c][1], this.locale.format) : t(n.ranges[c][1]), this.minDate && a.isBefore(this.minDate) && (a = this.minDate.clone()); var u, p = this.maxDate; if (this.maxSpan && p && a.clone().add(this.maxSpan).isAfter(p) && (p = a.clone().add(this.maxSpan)), p && l.isAfter(p) && (l = p.clone()), !(this.minDate && l.isBefore(this.minDate, this.timepicker ? "minute" : "day") || p && a.isAfter(p, this.timepicker ? "minute" : "day")))(u = document.createElement("textarea")).innerHTML = c, r = u.value, this.ranges[r] = [a, l] }
                var f = "<ul>";
                for (c in this.ranges) f += '<li data-range-key="' + c + '">' + c + "</li>";
                this.showCustomRangeLabel && (f += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), f += "</ul>", this.container.find(".ranges").prepend(f)
            }
            "function" == typeof s && (this.callback = s), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof n.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === n.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", e.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", e.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", e.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", e.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", e.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", e.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", e.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", e.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({ "click.daterangepicker": e.proxy(this.show, this), "focus.daterangepicker": e.proxy(this.show, this), "keyup.daterangepicker": e.proxy(this.elementChanged, this), "keydown.daterangepicker": e.proxy(this.keydown, this) }) : (this.element.on("click.daterangepicker", e.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", e.proxy(this.toggle, this))), this.updateElement()
        };
        return i.prototype = {
            constructor: i,
            setStartDate: function(e) { "string" == typeof e && (this.startDate = t(e, this.locale.format)), "object" == typeof e && (this.startDate = t(e)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView() },
            setEndDate: function(e) { "string" == typeof e && (this.endDate = t(e, this.locale.format)), "object" == typeof e && (this.endDate = t(e)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView() },
            isInvalidDate: function() { return !1 },
            isCustomDate: function() { return !1 },
            updateView: function() { this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs() },
            updateMonthsInView: function() {
                if (this.endDate) {
                    if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                    this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
                } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
                this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
            },
            updateCalendars: function() {
                var t, e, i, n;
                this.timePicker && (this.endDate ? (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), i = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (n = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === n && 12 === t && (t = 0))) : (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), i = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (n = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === n && 12 === t && (t = 0))), this.leftCalendar.month.hour(t).minute(e).second(i), this.rightCalendar.month.hour(t).minute(e).second(i));
                this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
            },
            renderCalendar: function(i) {
                var n, s = (n = "left" == i ? this.leftCalendar : this.rightCalendar).month.month(),
                    r = n.month.year(),
                    o = n.month.hour(),
                    a = n.month.minute(),
                    l = n.month.second(),
                    c = t([r, s]).daysInMonth(),
                    d = t([r, s, 1]),
                    h = t([r, s, c]),
                    u = t(d).subtract(1, "month").month(),
                    p = t(d).subtract(1, "month").year(),
                    f = t([p, u]).daysInMonth(),
                    m = d.day();
                (n = []).firstDay = d, n.lastDay = h;
                for (var g = 0; g < 6; g++) n[g] = [];
                var v = f - m + this.locale.firstDay + 1;
                f < v && (v -= 7), m == this.locale.firstDay && (v = f - 6);
                for (var y = t([p, u, v, 12, a, l]), b = (g = 0, 0), w = 0; g < 42; g++, b++, y = t(y).add(24, "hour")) 0 < g && b % 7 == 0 && (b = 0, w++), n[w][b] = y.clone().hour(o).minute(a).second(l), y.hour(12), this.minDate && n[w][b].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && n[w][b].isBefore(this.minDate) && "left" == i && (n[w][b] = this.minDate.clone()), this.maxDate && n[w][b].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && n[w][b].isAfter(this.maxDate) && "right" == i && (n[w][b] = this.maxDate.clone());
                "left" == i ? this.leftCalendar.calendar = n : this.rightCalendar.calendar = n;
                var x = "left" == i ? this.minDate : this.startDate,
                    _ = this.maxDate,
                    S = ("left" == i ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
                S += "<thead>", S += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (S += "<th></th>"), x && !x.isBefore(n.firstDay) || this.linkedCalendars && "left" != i ? S += "<th></th>" : S += '<th class="prev available"><span></span></th>';
                var k = this.locale.monthNames[n[1][1].month()] + n[1][1].format(" YYYY");
                if (this.showDropdowns) {
                    for (var E = n[1][1].month(), T = n[1][1].year(), C = _ && _.year() || this.maxYear, M = x && x.year() || this.minYear, D = T == M, O = T == C, P = '<select class="monthselect">', L = 0; L < 12; L++)(!D || L >= x.month()) && (!O || L <= _.month()) ? P += "<option value='" + L + "'" + (L === E ? " selected='selected'" : "") + ">" + this.locale.monthNames[L] + "</option>" : P += "<option value='" + L + "'" + (L === E ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[L] + "</option>";
                    P += "</select>";
                    for (var $ = '<select class="yearselect">', I = M; I <= C; I++) $ += '<option value="' + I + '"' + (I === T ? ' selected="selected"' : "") + ">" + I + "</option>";
                    k = P + ($ += "</select>")
                }
                if (S += '<th colspan="5" class="month">' + k + "</th>", _ && !_.isAfter(n.lastDay) || this.linkedCalendars && "right" != i && !this.singleDatePicker ? S += "<th></th>" : S += '<th class="next available"><span></span></th>', S += "</tr>", S += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (S += '<th class="week">' + this.locale.weekLabel + "</th>"), e.each(this.locale.daysOfWeek, function(t, e) { S += "<th>" + e + "</th>" }), S += "</tr>", S += "</thead>", S += "<tbody>", null == this.endDate && this.maxSpan) {
                    var z = this.startDate.clone().add(this.maxSpan).endOf("day");
                    _ && !z.isBefore(_) || (_ = z)
                }
                for (w = 0; w < 6; w++) {
                    for (S += "<tr>", this.showWeekNumbers ? S += '<td class="week">' + n[w][0].week() + "</td>" : this.showISOWeekNumbers && (S += '<td class="week">' + n[w][0].isoWeek() + "</td>"), b = 0; b < 7; b++) {
                        var Y = [];
                        n[w][b].isSame(new Date, "day") && Y.push("today"), 5 < n[w][b].isoWeekday() && Y.push("weekend"), n[w][b].month() != n[1][1].month() && Y.push("off"), this.minDate && n[w][b].isBefore(this.minDate, "day") && Y.push("off", "disabled"), _ && n[w][b].isAfter(_, "day") && Y.push("off", "disabled"), this.isInvalidDate(n[w][b]) && Y.push("off", "disabled"), n[w][b].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && Y.push("active", "start-date"), null != this.endDate && n[w][b].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && Y.push("active", "end-date"), null != this.endDate && n[w][b] > this.startDate && n[w][b] < this.endDate && Y.push("in-range");
                        var A = this.isCustomDate(n[w][b]);
                        !1 !== A && ("string" == typeof A ? Y.push(A) : Array.prototype.push.apply(Y, A));
                        var F = "",
                            j = !1;
                        for (g = 0; g < Y.length; g++) F += Y[g] + " ", "disabled" == Y[g] && (j = !0);
                        j || (F += "available"), S += '<td class="' + F.replace(/^\s+|\s+$/g, "") + '" data-title="r' + w + "c" + b + '">' + n[w][b].date() + "</td>"
                    }
                    S += "</tr>"
                }
                S += "</tbody>", S += "</table>", this.container.find(".drp-calendar." + i + " .calendar-table").html(S)
            },
            renderTimePicker: function(t) {
                if ("right" != t || this.endDate) {
                    var e, i, n, s = this.maxDate;
                    if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) i = this.startDate.clone(), n = this.minDate;
                    else if ("right" == t) {
                        i = this.endDate.clone(), n = this.startDate;
                        var r = this.container.find(".drp-calendar.right .calendar-time");
                        if ("" != r.html() && (i.hour(i.hour() || r.find(".hourselect option:selected").val()), i.minute(i.minute() || r.find(".minuteselect option:selected").val()), i.second(i.second() || r.find(".secondselect option:selected").val()), !this.timePicker24Hour)) { var o = r.find(".ampmselect option:selected").val(); "PM" === o && i.hour() < 12 && i.hour(i.hour() + 12), "AM" === o && 12 === i.hour() && i.hour(0) }
                        i.isBefore(this.startDate) && (i = this.startDate.clone()), s && i.isAfter(s) && (i = s.clone())
                    }
                    e = '<select class="hourselect">';
                    for (var a = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = a; c <= l; c++) {
                        var d = c;
                        this.timePicker24Hour || (d = 12 <= i.hour() ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
                        var h = i.clone().hour(d),
                            u = !1;
                        n && h.minute(59).isBefore(n) && (u = !0), s && h.minute(0).isAfter(s) && (u = !0), d != i.hour() || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>" : '<option value="' + c + '">' + c + "</option>" : e += '<option value="' + c + '" selected="selected">' + c + "</option>"
                    }
                    for (e += "</select> ", e += ': <select class="minuteselect">', c = 0; c < 60; c += this.timePickerIncrement) {
                        var p = c < 10 ? "0" + c : c;
                        h = i.clone().minute(c), u = !1, n && h.second(59).isBefore(n) && (u = !0), s && h.second(0).isAfter(s) && (u = !0), i.minute() != c || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + c + '">' + p + "</option>" : e += '<option value="' + c + '" selected="selected">' + p + "</option>"
                    }
                    if (e += "</select> ", this.timePickerSeconds) {
                        for (e += ': <select class="secondselect">', c = 0; c < 60; c++) p = c < 10 ? "0" + c : c, h = i.clone().second(c), u = !1, n && h.isBefore(n) && (u = !0), s && h.isAfter(s) && (u = !0), i.second() != c || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + c + '">' + p + "</option>" : e += '<option value="' + c + '" selected="selected">' + p + "</option>";
                        e += "</select> "
                    }
                    if (!this.timePicker24Hour) {
                        e += '<select class="ampmselect">';
                        var f = "",
                            m = "";
                        n && i.clone().hour(12).minute(0).second(0).isBefore(n) && (f = ' disabled="disabled" class="disabled"'), s && i.clone().hour(0).minute(0).second(0).isAfter(s) && (m = ' disabled="disabled" class="disabled"'), 12 <= i.hour() ? e += '<option value="AM"' + f + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>" : e += '<option value="AM" selected="selected"' + f + '>AM</option><option value="PM"' + m + ">PM</option>", e += "</select>"
                    }
                    this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
                }
            },
            updateFormInputs: function() { this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled") },
            move: function() {
                var t, i = { top: 0, left: 0 },
                    n = e(window).width();
                this.parentEl.is("body") || (i = { top: this.parentEl.offset().top - this.parentEl.scrollTop(), left: this.parentEl.offset().left - this.parentEl.scrollLeft() }, n = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - i.top : this.element.offset().top + this.element.outerHeight() - i.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens ? (this.container.css({ top: t, right: n - this.element.offset().left - this.element.outerWidth(), left: "auto" }), this.container.offset().left < 0 && this.container.css({ right: "auto", left: 9 })) : "center" == this.opens ? (this.container.css({ top: t, left: this.element.offset().left - i.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2, right: "auto" }), this.container.offset().left < 0 && this.container.css({ right: "auto", left: 9 })) : (this.container.css({ top: t, left: this.element.offset().left - i.left, right: "auto" }), this.container.offset().left + this.container.outerWidth() > e(window).width() && this.container.css({ left: "auto", right: 0 }))
            },
            show: function(t) { this.isShowing || (this._outsideClickProxy = e.proxy(function(t) { this.outsideClick(t) }, this), e(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), e(window).on("resize.daterangepicker", e.proxy(function(t) { this.move(t) }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0) },
            hide: function(t) { this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), e(document).off(".daterangepicker"), e(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1) },
            toggle: function(t) { this.isShowing ? this.hide() : this.show() },
            outsideClick: function(t) { var i = e(t.target); "focusin" == t.type || i.closest(this.element).length || i.closest(this.container).length || i.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this)) },
            showCalendars: function() { this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this) },
            hideCalendars: function() { this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this) },
            clickRange: function(t) {
                var e = t.target.getAttribute("data-range-key");
                if ((this.chosenLabel = e) == this.locale.customRangeLabel) this.showCalendars();
                else {
                    var i = this.ranges[e];
                    this.startDate = i[0], this.endDate = i[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
                }
            },
            clickPrev: function(t) { e(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars() },
            clickNext: function(t) { e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars() },
            hoverDate: function(t) {
                if (e(t.target).hasClass("available")) {
                    var i = e(t.target).attr("data-title"),
                        n = i.substr(1, 1),
                        s = i.substr(3, 1),
                        r = e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[n][s] : this.rightCalendar.calendar[n][s],
                        o = this.leftCalendar,
                        a = this.rightCalendar,
                        l = this.startDate;
                    this.endDate || this.container.find(".drp-calendar tbody td").each(function(t, i) {
                        if (!e(i).hasClass("week")) {
                            var n = e(i).attr("data-title"),
                                s = n.substr(1, 1),
                                c = n.substr(3, 1),
                                d = e(i).parents(".drp-calendar").hasClass("left") ? o.calendar[s][c] : a.calendar[s][c];
                            d.isAfter(l) && d.isBefore(r) || d.isSame(r, "day") ? e(i).addClass("in-range") : e(i).removeClass("in-range")
                        }
                    })
                }
            },
            clickDate: function(t) {
                if (e(t.target).hasClass("available")) {
                    var i = e(t.target).attr("data-title"),
                        n = i.substr(1, 1),
                        s = i.substr(3, 1),
                        r = e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[n][s] : this.rightCalendar.calendar[n][s];
                    if (this.endDate || r.isBefore(this.startDate, "day")) {
                        if (this.timePicker) {
                            var o = parseInt(this.container.find(".left .hourselect").val(), 10);
                            this.timePicker24Hour || ("PM" === (c = this.container.find(".left .ampmselect").val()) && o < 12 && (o += 12), "AM" === c && 12 === o && (o = 0));
                            var a = parseInt(this.container.find(".left .minuteselect").val(), 10),
                                l = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                            r = r.clone().hour(o).minute(a).second(l)
                        }
                        this.endDate = null, this.setStartDate(r.clone())
                    } else if (!this.endDate && r.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                    else {
                        var c;
                        if (this.timePicker) o = parseInt(this.container.find(".right .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (c = this.container.find(".right .ampmselect").val()) && o < 12 && (o += 12), "AM" === c && 12 === o && (o = 0)), a = parseInt(this.container.find(".right .minuteselect").val(), 10), l = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, r = r.clone().hour(o).minute(a).second(l);
                        this.setEndDate(r.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                    }
                    this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
                }
            },
            calculateChosenLabel: function() {
                var t = !0,
                    e = 0;
                for (var i in this.ranges) {
                    if (this.timePicker) { var n = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm"; if (this.startDate.format(n) == this.ranges[i][0].format(n) && this.endDate.format(n) == this.ranges[i][1].format(n)) { t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key"); break } } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[i][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[i][1].format("YYYY-MM-DD")) { t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key"); break }
                    e++
                }
                t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
            },
            clickApply: function(t) { this.hide(), this.element.trigger("apply.daterangepicker", this) },
            clickCancel: function(t) { this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this) },
            monthOrYearChanged: function(t) {
                var i = e(t.target).closest(".drp-calendar").hasClass("left"),
                    n = i ? "left" : "right",
                    s = this.container.find(".drp-calendar." + n),
                    r = parseInt(s.find(".monthselect").val(), 10),
                    o = s.find(".yearselect").val();
                i || (o < this.startDate.year() || o == this.startDate.year() && r < this.startDate.month()) && (r = this.startDate.month(), o = this.startDate.year()), this.minDate && (o < this.minDate.year() || o == this.minDate.year() && r < this.minDate.month()) && (r = this.minDate.month(), o = this.minDate.year()), this.maxDate && (o > this.maxDate.year() || o == this.maxDate.year() && r > this.maxDate.month()) && (r = this.maxDate.month(), o = this.maxDate.year()), i ? (this.leftCalendar.month.month(r).year(o), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(r).year(o), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
            },
            timeChanged: function(t) {
                var i = e(t.target).closest(".drp-calendar"),
                    n = i.hasClass("left"),
                    s = parseInt(i.find(".hourselect").val(), 10),
                    r = parseInt(i.find(".minuteselect").val(), 10),
                    o = this.timePickerSeconds ? parseInt(i.find(".secondselect").val(), 10) : 0;
                if (!this.timePicker24Hour) { var a = i.find(".ampmselect").val(); "PM" === a && s < 12 && (s += 12), "AM" === a && 12 === s && (s = 0) }
                if (n) {
                    var l = this.startDate.clone();
                    l.hour(s), l.minute(r), l.second(o), this.setStartDate(l), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
                } else if (this.endDate) {
                    var c = this.endDate.clone();
                    c.hour(s), c.minute(r), c.second(o), this.setEndDate(c)
                }
                this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
            },
            elementChanged: function() {
                if (this.element.is("input") && this.element.val().length) {
                    var e = this.element.val().split(this.locale.separator),
                        i = null,
                        n = null;
                    2 === e.length && (i = t(e[0], this.locale.format), n = t(e[1], this.locale.format)), (this.singleDatePicker || null === i || null === n) && (n = i = t(this.element.val(), this.locale.format)), i.isValid() && n.isValid() && (this.setStartDate(i), this.setEndDate(n), this.updateView())
                }
            },
            keydown: function(t) { 9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide()) },
            updateElement: function() {
                if (this.element.is("input") && this.autoUpdateInput) {
                    var t = this.startDate.format(this.locale.format);
                    this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change")
                }
            },
            remove: function() { this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData() }
        }, e.fn.daterangepicker = function(t, n) {
            var s = e.extend(!0, {}, e.fn.daterangepicker.defaultOptions, t);
            return this.each(function() {
                var t = e(this);
                t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, s, n))
            }), this
        }, i
    }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], function(e) { return t(e, document, window, navigator) }) : "object" == typeof exports ? t(require("jquery"), document, window, navigator) : t(jQuery, document, window, navigator) }(function(t, e, i, n, s) {
        var r, o, a = 0,
            l = (r = n.userAgent, o = /msie\s\d+/i, 0 < r.search(o) && 9 > (r = (r = o.exec(r).toString()).split(" ")[1]) && (t("html").addClass("lt-ie9"), !0));
        Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this,
                i = [].slice;
            if ("function" != typeof e) throw new TypeError;
            var n = i.call(arguments, 1),
                s = function() {
                    if (this instanceof s) {
                        (r = function() {}).prototype = e.prototype;
                        var r = new r,
                            o = e.apply(r, n.concat(i.call(arguments)));
                        return Object(o) === o ? o : r
                    }
                    return e.apply(t, n.concat(i.call(arguments)))
                };
            return s
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                n = i.length >>> 0;
            if (0 === n) return -1;
            var s = +e || 0;
            if (1 / 0 === Math.abs(s) && (s = 0), s >= n) return -1;
            for (s = Math.max(0 <= s ? s : n - Math.abs(s), 0); s < n;) {
                if (s in i && i[s] === t) return s;
                s++
            }
            return -1
        });
        var c = function(n, r, o) {
            this.VERSION = "2.2.0", this.input = n, this.plugin_count = o, this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0, this.raf_id = this.old_min_interval = null, this.no_diapason = this.force_redraw = this.dragging = !1, this.has_tab_index = !0, this.is_update = this.is_key = !1, this.is_start = !0, this.is_click = this.is_resize = this.is_active = this.is_finish = !1, r = r || {}, this.$cache = { win: t(i), body: t(e.body), input: t(n), cont: null, rs: null, min: null, max: null, from: null, to: null, single: null, bar: null, line: null, s_single: null, s_from: null, s_to: null, shad_single: null, shad_from: null, shad_to: null, edge: null, grid: null, grid_labels: [] }, this.coords = { x_gap: 0, x_pointer: 0, w_rs: 0, w_rs_old: 0, w_handle: 0, p_gap: 0, p_gap_left: 0, p_gap_right: 0, p_step: 0, p_pointer: 0, p_handle: 0, p_single_fake: 0, p_single_real: 0, p_from_fake: 0, p_from_real: 0, p_to_fake: 0, p_to_real: 0, p_bar_x: 0, p_bar_w: 0, grid_gap: 0, big_num: 0, big: [], big_w: [], big_p: [], big_x: [] }, this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 };
            var a, l = this.$cache.input;
            for (a in n = l.prop("value"), o = { type: "single", min: 10, max: 100, from: null, to: null, step: 1, min_interval: 0, max_interval: 0, drag_interval: !1, values: [], p_values: [], from_fixed: !1, from_min: null, from_max: null, from_shadow: !1, to_fixed: !1, to_min: null, to_max: null, to_shadow: !1, prettify_enabled: !0, prettify_separator: " ", prettify: null, force_edges: !1, keyboard: !0, grid: !1, grid_margin: !0, grid_num: 4, grid_snap: !1, hide_min_max: !1, hide_from_to: !1, prefix: "", postfix: "", max_postfix: "", decorate_both: !0, values_separator: " — ", input_values_separator: ";", disable: !1, block: !1, extra_classes: "", scope: null, onStart: null, onChange: null, onFinish: null, onUpdate: null }, "INPUT" !== l[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", l[0]), (l = { type: l.data("type"), min: l.data("min"), max: l.data("max"), from: l.data("from"), to: l.data("to"), step: l.data("step"), min_interval: l.data("minInterval"), max_interval: l.data("maxInterval"), drag_interval: l.data("dragInterval"), values: l.data("values"), from_fixed: l.data("fromFixed"), from_min: l.data("fromMin"), from_max: l.data("fromMax"), from_shadow: l.data("fromShadow"), to_fixed: l.data("toFixed"), to_min: l.data("toMin"), to_max: l.data("toMax"), to_shadow: l.data("toShadow"), prettify_enabled: l.data("prettifyEnabled"), prettify_separator: l.data("prettifySeparator"), force_edges: l.data("forceEdges"), keyboard: l.data("keyboard"), grid: l.data("grid"), grid_margin: l.data("gridMargin"), grid_num: l.data("gridNum"), grid_snap: l.data("gridSnap"), hide_min_max: l.data("hideMinMax"), hide_from_to: l.data("hideFromTo"), prefix: l.data("prefix"), postfix: l.data("postfix"), max_postfix: l.data("maxPostfix"), decorate_both: l.data("decorateBoth"), values_separator: l.data("valuesSeparator"), input_values_separator: l.data("inputValuesSeparator"), disable: l.data("disable"), block: l.data("block"), extra_classes: l.data("extraClasses") }).values = l.values && l.values.split(","), l) l.hasOwnProperty(a) && (l[a] !== s && "" !== l[a] || delete l[a]);
            n !== s && "" !== n && ((n = n.split(l.input_values_separator || r.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), r && r.values && r.values.length ? (o.from = n[0] && r.values.indexOf(n[0]), o.to = n[1] && r.values.indexOf(n[1])) : (o.from = n[0] && +n[0], o.to = n[1] && +n[1])), t.extend(o, r), t.extend(o, l), this.options = o, this.update_check = {}, this.validate(), this.result = { input: this.$cache.input, slider: null, min: this.options.min, max: this.options.max, from: this.options.from, from_percent: 0, from_value: null, to: this.options.to, to_percent: 0, to_value: null }, this.init()
        };
        c.prototype = {
                init: function(t) { this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene() },
                append: function() { this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>'), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize") },
                setTopHandler: function() {
                    var t = this.options.max,
                        e = this.options.to;
                    this.options.from > this.options.min && e === t ? this.$cache.s_from.addClass("type_last") : e < t && this.$cache.s_to.addClass("type_last")
                },
                changeLevel: function(t) {
                    switch (t) {
                        case "single":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                            break;
                        case "from":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                            break;
                        case "to":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                            break;
                        case "both":
                            this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                    }
                },
                appendDisableMask: function() { this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled") },
                removeDisableMask: function() { this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled") },
                remove: function() { this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), l && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id) },
                bindEvents: function() { this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), l && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)))) },
                pointerFocus: function(t) {
                    if (!this.target) {
                        var e = "single" === this.options.type ? this.$cache.single : this.$cache.from;
                        t = e.offset().left, t += e.width() / 2 - 1, this.pointerClick("single", { preventDefault: function() {}, pageX: t })
                    }
                },
                pointerMove: function(t) { this.dragging && (this.coords.x_pointer = (t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc()) },
                pointerUp: function(e) { this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, l && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], e.target) || this.dragging) && this.callOnFinish(), this.dragging = !1) },
                pointerDown: function(e, i) {
                    i.preventDefault();
                    var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                    2 !== i.button && ("both" === e && this.setTempMinInterval(), e || (e = this.target || "from"), this.current_plugin = this.plugin_count, this.target = e, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(e), l && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
                },
                pointerClick: function(t, e) {
                    e.preventDefault();
                    var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                    2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
                },
                key: function(t, e) {
                    if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                        switch (e.which) {
                            case 83:
                            case 65:
                            case 40:
                            case 37:
                                e.preventDefault(), this.moveByKey(!1);
                                break;
                            case 87:
                            case 68:
                            case 38:
                            case 39:
                                e.preventDefault(), this.moveByKey(!0)
                        }
                        return !0
                    }
                },
                moveByKey: function(t) {
                    var e = this.coords.p_pointer,
                        i = (this.options.max - this.options.min) / 100;
                    i = this.options.step / i;
                    this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * (t ? e + i : e - i)), this.is_key = !0, this.calc()
                },
                setMinMax: function() {
                    if (this.options)
                        if (this.options.hide_min_max) this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none";
                        else {
                            if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                            else {
                                var t = this._prettify(this.options.min),
                                    e = this._prettify(this.options.max);
                                this.result.min_pretty = t, this.result.max_pretty = e, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max))
                            }
                            this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
                        }
                },
                setTempMinInterval: function() {
                    var t = this.result.to - this.result.from;
                    null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
                },
                restoreOriginalMinInterval: function() { null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null) },
                calc: function(t) {
                    if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                        switch (this.calcPointerPercent(), t = this.getHandleX(), "both" === this.target && (this.coords.p_gap = 0, t = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(t)), this.target) {
                            case "base":
                                var e = (this.options.max - this.options.min) / 100;
                                t = (this.result.from - this.options.min) / e, e = (this.result.to - this.options.min) / e, this.coords.p_single_real = this.toFixed(t), this.coords.p_from_real = this.toFixed(t), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                                break;
                            case "single":
                                if (this.options.from_fixed) break;
                                this.coords.p_single_real = this.convertToRealPercent(t), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                                break;
                            case "from":
                                if (this.options.from_fixed) break;
                                this.coords.p_from_real = this.convertToRealPercent(t), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                                break;
                            case "to":
                                if (this.options.to_fixed) break;
                                this.coords.p_to_real = this.convertToRealPercent(t), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                                break;
                            case "both":
                                if (this.options.from_fixed || this.options.to_fixed) break;
                                t = this.toFixed(t + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                                break;
                            case "both_one":
                                if (!this.options.from_fixed && !this.options.to_fixed) {
                                    var i = this.convertToRealPercent(t),
                                        n = (t = this.result.to_percent - this.result.from_percent) / 2;
                                    e = i - n, i = i + n;
                                    0 > e && (i = (e = 0) + t), 100 < i && (e = (i = 100) - t), this.coords.p_from_real = this.calcWithStep(e), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(i), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                                }
                        }
                        "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                    }
                },
                calcPointerPercent: function() { this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0 },
                convertToRealPercent: function(t) { return t / (100 - this.coords.p_handle) * 100 },
                convertToFakePercent: function(t) { return t / 100 * (100 - this.coords.p_handle) },
                getHandleX: function() {
                    var t = 100 - this.coords.p_handle,
                        e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                    return 0 > e ? e = 0 : e > t && (e = t), e
                },
                calcHandlePercent: function() { this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100) },
                chooseHandle: function(t) { return "single" === this.options.type ? "single" : t >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from" },
                calcMinMax: function() { this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100) },
                calcLabels: function() { this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) },
                updateScene: function() { this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300)) },
                drawHandles: function() { this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%" : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_click = this.is_key = !1, this.callOnFinish()), this.is_finish = this.is_resize = this.is_update = !1), this.force_redraw = this.is_click = this.is_key = this.is_start = !1)) },
                drawLabels: function() {
                    if (this.options) {
                        var t = this.options.values.length,
                            e = this.options.p_values;
                        if (!this.options.hide_from_to)
                            if ("single" === this.options.type) {
                                if (t) t = this.decorate(e[this.result.from]);
                                else {
                                    var i = this._prettify(this.result.from);
                                    t = this.decorate(i, this.result.from)
                                }
                                this.$cache.single.html(t), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                            } else {
                                t ? (this.options.decorate_both ? (t = this.decorate(e[this.result.from]), t += this.options.values_separator, t += this.decorate(e[this.result.to])) : t = this.decorate(e[this.result.from] + this.options.values_separator + e[this.result.to]), i = this.decorate(e[this.result.from]), e = this.decorate(e[this.result.to])) : (i = this._prettify(this.result.from), e = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(i, this.result.from), t += this.options.values_separator, t += this.decorate(e, this.result.to)) : t = this.decorate(i + this.options.values_separator + e, this.result.to), i = this.decorate(i, this.result.from), e = this.decorate(e, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(i), this.$cache.to.html(e), this.calcLabels(), t = Math.min(this.labels.p_single_left, this.labels.p_from_left), i = this.labels.p_single_left + this.labels.p_single_fake;
                                e = this.labels.p_to_left + this.labels.p_to_fake;
                                var n = Math.max(i, e);
                                this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", n = e) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", n = Math.max(i, e))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), this.$cache.min[0].style.visibility = t < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = n > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                            }
                    }
                },
                drawShadow: function() {
                    var t = this.options,
                        e = this.$cache,
                        i = "number" == typeof t.from_min && !isNaN(t.from_min),
                        n = "number" == typeof t.from_max && !isNaN(t.from_max),
                        s = "number" == typeof t.to_min && !isNaN(t.to_min),
                        r = "number" == typeof t.to_max && !isNaN(t.to_max);
                    "single" === t.type ? t.from_shadow && (i || n) ? (i = this.convertToPercent(i ? t.from_min : t.min), n = this.convertToPercent(n ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, e.shad_single[0].style.display = "block", e.shad_single[0].style.left = i + "%", e.shad_single[0].style.width = n + "%") : e.shad_single[0].style.display = "none" : (t.from_shadow && (i || n) ? (i = this.convertToPercent(i ? t.from_min : t.min), n = this.convertToPercent(n ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, e.shad_from[0].style.display = "block", e.shad_from[0].style.left = i + "%", e.shad_from[0].style.width = n + "%") : e.shad_from[0].style.display = "none", t.to_shadow && (s || r) ? (s = this.convertToPercent(s ? t.to_min : t.min), t = this.convertToPercent(r ? t.to_max : t.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), t = this.toFixed(t - this.coords.p_handle / 100 * t), s += this.coords.p_handle / 2, e.shad_to[0].style.display = "block", e.shad_to[0].style.left = s + "%", e.shad_to[0].style.width = t + "%") : e.shad_to[0].style.display = "none")
                },
                writeToInput: function() { "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to)) },
                callOnStart: function() { this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result)) },
                callOnChange: function() { this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result)) },
                callOnFinish: function() { this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result)) },
                callOnUpdate: function() { this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result)) },
                toggleInput: function() { this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index },
                convertToPercent: function(t, e) { var i = this.options.max - this.options.min; return i ? this.toFixed((e ? t : t - this.options.min) / (i / 100)) : (this.no_diapason = !0, 0) },
                convertToValue: function(t) {
                    var e, i, n = this.options.min,
                        s = this.options.max,
                        r = n.toString().split(".")[1],
                        o = s.toString().split(".")[1],
                        a = 0,
                        l = 0;
                    return 0 === t ? this.options.min : 100 === t ? this.options.max : (r && (a = e = r.length), o && (a = i = o.length), e && i && (a = e >= i ? e : i), 0 > n && (n = +(n + (l = Math.abs(n))).toFixed(a), s = +(s + l).toFixed(a)), t = (s - n) / 100 * t + n, (n = this.options.step.toString().split(".")[1]) ? t = +t.toFixed(n.length) : (t /= this.options.step, t = +(t *= this.options.step).toFixed(0)), l && (t -= l), (l = n ? +t.toFixed(n.length) : this.toFixed(t)) < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l)
                },
                calcWithStep: function(t) { var e = Math.round(t / this.coords.p_step) * this.coords.p_step; return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e) },
                checkMinInterval: function(t, e, i) { var n = this.options; return n.min_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t < n.min_interval && (t = e - n.min_interval) : t - e < n.min_interval && (t = e + n.min_interval), this.convertToPercent(t)) : t },
                checkMaxInterval: function(t, e, i) { var n = this.options; return n.max_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t > n.max_interval && (t = e - n.max_interval) : t - e > n.max_interval && (t = e + n.max_interval), this.convertToPercent(t)) : t },
                checkDiapason: function(t, e, i) { t = this.convertToValue(t); var n = this.options; return "number" != typeof e && (e = n.min), "number" != typeof i && (i = n.max), t < e && (t = e), t > i && (t = i), this.convertToPercent(t) },
                toFixed: function(t) { return +(t = t.toFixed(20)) },
                _prettify: function(t) { return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t },
                prettify: function(t) { return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator) },
                checkEdges: function(t, e) { return this.options.force_edges ? (0 > t ? t = 0 : t > 100 - e && (t = 100 - e), this.toFixed(t)) : this.toFixed(t) },
                validate: function() {
                    var t, e = this.options,
                        i = this.result,
                        n = e.values,
                        s = n.length;
                    if ("string" == typeof e.min && (e.min = +e.min), "string" == typeof e.max && (e.max = +e.max), "string" == typeof e.from && (e.from = +e.from), "string" == typeof e.to && (e.to = +e.to), "string" == typeof e.step && (e.step = +e.step), "string" == typeof e.from_min && (e.from_min = +e.from_min), "string" == typeof e.from_max && (e.from_max = +e.from_max), "string" == typeof e.to_min && (e.to_min = +e.to_min), "string" == typeof e.to_max && (e.to_max = +e.to_max), "string" == typeof e.grid_num && (e.grid_num = +e.grid_num), e.max < e.min && (e.max = e.min), s)
                        for (e.p_values = [], e.min = 0, e.max = s - 1, e.step = 1, e.grid_num = e.max, e.grid_snap = !0, t = 0; t < s; t++) {
                            var r = +n[t];
                            isNaN(r) ? r = n[t] : (n[t] = r, r = this._prettify(r)), e.p_values.push(r)
                        }("number" != typeof e.from || isNaN(e.from)) && (e.from = e.min), ("number" != typeof e.to || isNaN(e.to)) && (e.to = e.max), "single" === e.type ? (e.from < e.min && (e.from = e.min), e.from > e.max && (e.from = e.max)) : (e.from < e.min && (e.from = e.min), e.from > e.max && (e.from = e.max), e.to < e.min && (e.to = e.min), e.to > e.max && (e.to = e.max), this.update_check.from && (this.update_check.from !== e.from && e.from > e.to && (e.from = e.to), this.update_check.to !== e.to && e.to < e.from && (e.to = e.from)), e.from > e.to && (e.from = e.to), e.to < e.from && (e.to = e.from)), ("number" != typeof e.step || isNaN(e.step) || !e.step || 0 > e.step) && (e.step = 1), "number" == typeof e.from_min && e.from < e.from_min && (e.from = e.from_min), "number" == typeof e.from_max && e.from > e.from_max && (e.from = e.from_max), "number" == typeof e.to_min && e.to < e.to_min && (e.to = e.to_min), "number" == typeof e.to_max && e.from > e.to_max && (e.to = e.to_max), i && (i.min !== e.min && (i.min = e.min), i.max !== e.max && (i.max = e.max), (i.from < i.min || i.from > i.max) && (i.from = e.from), (i.to < i.min || i.to > i.max) && (i.to = e.to)), ("number" != typeof e.min_interval || isNaN(e.min_interval) || !e.min_interval || 0 > e.min_interval) && (e.min_interval = 0), ("number" != typeof e.max_interval || isNaN(e.max_interval) || !e.max_interval || 0 > e.max_interval) && (e.max_interval = 0), e.min_interval && e.min_interval > e.max - e.min && (e.min_interval = e.max - e.min), e.max_interval && e.max_interval > e.max - e.min && (e.max_interval = e.max - e.min)
                },
                decorate: function(t, e) {
                    var i = "",
                        n = this.options;
                    return n.prefix && (i += n.prefix), i += t, n.max_postfix && (n.values.length && t === n.p_values[n.max] ? (i += n.max_postfix, n.postfix && (i += " ")) : e === n.max && (i += n.max_postfix, n.postfix && (i += " "))), n.postfix && (i += n.postfix), i
                },
                updateFrom: function() { this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from]) },
                updateTo: function() { this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to]) },
                updateResult: function() { this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo() },
                appendGrid: function() {
                    if (this.options.grid) {
                        var t, e = this.options,
                            i = e.max - e.min,
                            n = e.grid_num,
                            s = 4,
                            r = "";
                        if (this.calcGridMargin(), e.grid_snap)
                            if (50 < i) { n = 50 / e.step; var o = this.toFixed(e.step / .5) } else n = i / e.step, o = this.toFixed(e.step / (i / 100));
                        else o = this.toFixed(100 / n);
                        for (4 < n && (s = 3), 7 < n && (s = 2), 14 < n && (s = 1), 28 < n && (s = 0), i = 0; i < n + 1; i++) {
                            var a = s,
                                l = this.toFixed(o * i);
                            100 < l && (l = 100), this.coords.big[i] = l;
                            var c = (l - o * (i - 1)) / (a + 1);
                            for (t = 1; t <= a && 0 !== l; t++) { r += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(l - c * t) + '%"></span>' }
                            r += '<span class="irs-grid-pol" style="left: ' + l + '%"></span>', t = this.convertToValue(l), r += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + l + '%">' + (t = e.values.length ? e.p_values[t] : this._prettify(t)) + "</span>"
                        }
                        this.coords.big_num = Math.ceil(n + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(r), this.cacheGridLabels()
                    }
                },
                cacheGridLabels: function() {
                    var t, e = this.coords.big_num;
                    for (t = 0; t < e; t++) {
                        var i = this.$cache.grid.find(".js-grid-text-" + t);
                        this.$cache.grid_labels.push(i)
                    }
                    this.calcGridLabels()
                },
                calcGridLabels: function() {
                    var t, e = [],
                        i = [],
                        n = this.coords.big_num;
                    for (t = 0; t < n; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), e[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), i[t] = this.toFixed(e[t] + this.coords.big_p[t]);
                    for (this.options.force_edges && (e[0] < -this.coords.grid_gap && (e[0] = -this.coords.grid_gap, i[0] = this.toFixed(e[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[n - 1] > 100 + this.coords.grid_gap && (i[n - 1] = 100 + this.coords.grid_gap, e[n - 1] = this.toFixed(i[n - 1] - this.coords.big_p[n - 1]), this.coords.big_x[n - 1] = this.toFixed(this.coords.big_p[n - 1] - this.coords.grid_gap))), this.calcGridCollision(2, e, i), this.calcGridCollision(4, e, i), t = 0; t < n; t++) e = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (e.style.marginLeft = -this.coords.big_x[t] + "%")
                },
                calcGridCollision: function(t, e, i) {
                    var n, s = this.coords.big_num;
                    for (n = 0; n < s; n += t) {
                        var r = n + t / 2;
                        if (r >= s) break;
                        this.$cache.grid_labels[r][0].style.visibility = i[n] <= e[r] ? "visible" : "hidden"
                    }
                },
                calcGridMargin: function() { this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%")) },
                update: function(e) { this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = t.extend(this.options, e), this.validate(), this.updateResult(e), this.toggleInput(), this.remove(), this.init(!0)) },
                reset: function() { this.input && (this.updateResult(), this.update()) },
                destroy: function() { this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null) }
            }, t.fn.ionRangeSlider = function(e) { return this.each(function() { t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new c(this, e, a++)) }) },
            function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !i.requestAnimationFrame; ++n) i.requestAnimationFrame = i[e[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[n] + "CancelAnimationFrame"] || i[e[n] + "CancelRequestAnimationFrame"];
                i.requestAnimationFrame || (i.requestAnimationFrame = function(e, n) {
                    var s = (new Date).getTime(),
                        r = Math.max(0, 16 - (s - t)),
                        o = i.setTimeout(function() { e(s + r) }, r);
                    return t = s + r, o
                }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) { clearTimeout(t) })
            }()
    }),
    function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e() }(this, function() {
        "use strict";
        var t = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t },
            e = function(e) { if (!t(e)) throw TypeError(e + " is not an object!"); return e },
            i = function(t) { if (null == t) throw TypeError("Can't call method on  " + t); return t },
            n = function(t) { return Object(i(t)) },
            s = Math.ceil,
            r = Math.floor,
            o = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : s)(t) },
            a = Math.min,
            l = function(t) { return t > 0 ? a(o(t), 9007199254740991) : 0 },
            c = function(t) {
                return function(e, n) {
                    var s, r, a = String(i(e)),
                        l = o(n),
                        c = a.length;
                    return l < 0 || l >= c ? t ? "" : void 0 : (s = a.charCodeAt(l)) < 55296 || s > 56319 || l + 1 === c || (r = a.charCodeAt(l + 1)) < 56320 || r > 57343 ? t ? a.charAt(l) : s : t ? a.slice(l, l + 2) : r - 56320 + (s - 55296 << 10) + 65536
                }
            },
            d = c(!0),
            h = function(t, e, i) { return e + (i ? d(t, e).length : 1) },
            u = {}.toString,
            p = function(t) { return u.call(t).slice(8, -1) },
            f = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

        function m(t, e) { return t(e = { exports: {} }, e.exports), e.exports }
        var g, v, y = m(function(t) { var e = t.exports = { version: "2.6.2" }; "number" == typeof __e && (__e = e) }),
            b = (y.version, m(function(t) { var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = e) })),
            w = m(function(t) {
                var e = b["__core-js_shared__"] || (b["__core-js_shared__"] = {});
                (t.exports = function(t, i) { return e[t] || (e[t] = void 0 !== i ? i : {}) })("versions", []).push({ version: y.version, mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" })
            }),
            x = 0,
            _ = Math.random(),
            S = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++x + _).toString(36)) },
            k = m(function(t) {
                var e = w("wks"),
                    i = b.Symbol,
                    n = "function" == typeof i;
                (t.exports = function(t) { return e[t] || (e[t] = n && i[t] || (n ? i : S)("Symbol." + t)) }).store = e
            }),
            E = k("toStringTag"),
            T = "Arguments" == p(function() { return arguments }()),
            C = function(t) { var e, i, n; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), E)) ? i : T ? p(e) : "Object" == (n = p(e)) && "function" == typeof e.callee ? "Arguments" : n },
            M = RegExp.prototype.exec,
            D = function(t, e) { var i = t.exec; if ("function" == typeof i) { var n = i.call(t, e); if ("object" != typeof n) throw new TypeError("RegExp exec method returned something other than an Object or null"); return n } if ("RegExp" !== C(t)) throw new TypeError("RegExp#exec called on incompatible receiver"); return M.call(t, e) },
            O = RegExp.prototype.exec,
            P = String.prototype.replace,
            L = O,
            $ = (g = /a/, v = /b*/g, O.call(g, "a"), O.call(v, "a"), 0 !== g.lastIndex || 0 !== v.lastIndex),
            I = void 0 !== /()??/.exec("")[1];
        ($ || I) && (L = function(t) {
            var i, n, s, r, o = this;
            return I && (n = new RegExp("^" + o.source + "$(?!\\s)", function() {
                var t = e(this),
                    i = "";
                return t.global && (i += "g"), t.ignoreCase && (i += "i"), t.multiline && (i += "m"), t.unicode && (i += "u"), t.sticky && (i += "y"), i
            }.call(o))), $ && (i = o.lastIndex), s = O.call(o, t), $ && s && (o.lastIndex = o.global ? s.index + s[0].length : i), I && s && s.length > 1 && P.call(s[0], n, function() { for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (s[r] = void 0) }), s
        });
        var z = L,
            Y = function(t) { try { return !!t() } catch (t) { return !0 } },
            A = !Y(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }),
            F = b.document,
            j = t(F) && t(F.createElement),
            N = function(t) { return j ? F.createElement(t) : {} },
            R = !A && !Y(function() { return 7 != Object.defineProperty(N("div"), "a", { get: function() { return 7 } }).a }),
            W = Object.defineProperty,
            H = {
                f: A ? Object.defineProperty : function(i, n, s) {
                    if (e(i), n = function(e, i) { if (!t(e)) return e; var n, s; if ("function" == typeof(n = e.toString) && !t(s = n.call(e))) return s; if ("function" == typeof(n = e.valueOf) && !t(s = n.call(e))) return s; throw TypeError("Can't convert object to primitive value") }(n), e(s), R) try { return W(i, n, s) } catch (t) {}
                    if ("get" in s || "set" in s) throw TypeError("Accessors not supported!");
                    return "value" in s && (i[n] = s.value), i
                }
            },
            B = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } },
            V = A ? function(t, e, i) { return H.f(t, e, B(1, i)) } : function(t, e, i) { return t[e] = i, t },
            q = {}.hasOwnProperty,
            G = function(t, e) { return q.call(t, e) },
            X = m(function(t) {
                var e = S("src"),
                    i = Function.toString,
                    n = ("" + i).split("toString");
                y.inspectSource = function(t) { return i.call(t) }, (t.exports = function(t, i, s, r) {
                    var o = "function" == typeof s;
                    o && (G(s, "name") || V(s, "name", i)), t[i] !== s && (o && (G(s, e) || V(s, e, t[i] ? "" + t[i] : n.join(String(i)))), t === b ? t[i] = s : r ? t[i] ? t[i] = s : V(t, i, s) : (delete t[i], V(t, i, s)))
                })(Function.prototype, "toString", function() { return "function" == typeof this && this[e] || i.call(this) })
            }),
            U = function(t, e, i) {
                if (function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!") }(t), void 0 === e) return t;
                switch (i) {
                    case 1:
                        return function(i) { return t.call(e, i) };
                    case 2:
                        return function(i, n) { return t.call(e, i, n) };
                    case 3:
                        return function(i, n, s) { return t.call(e, i, n, s) }
                }
                return function() { return t.apply(e, arguments) }
            },
            Z = function(t, e, i) {
                var n, s, r, o, a = t & Z.F,
                    l = t & Z.G,
                    c = t & Z.S,
                    d = t & Z.P,
                    h = t & Z.B,
                    u = l ? b : c ? b[e] || (b[e] = {}) : (b[e] || {}).prototype,
                    p = l ? y : y[e] || (y[e] = {}),
                    f = p.prototype || (p.prototype = {});
                for (n in l && (i = e), i) r = ((s = !a && u && void 0 !== u[n]) ? u : i)[n], o = h && s ? U(r, b) : d && "function" == typeof r ? U(Function.call, r) : r, u && X(u, n, r, t & Z.U), p[n] != r && V(p, n, o), d && f[n] != r && (f[n] = r)
            };
        b.core = y, Z.F = 1, Z.G = 2, Z.S = 4, Z.P = 8, Z.B = 16, Z.W = 32, Z.U = 64, Z.R = 128;
        var Q = Z;
        Q({ target: "RegExp", proto: !0, forced: z !== /./.exec }, { exec: z });
        var K = k("species"),
            J = !Y(function() { var t = /./; return t.exec = function() { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") }),
            tt = function() {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function() { return e.apply(this, arguments) };
                var i = "ab".split(t);
                return 2 === i.length && "a" === i[0] && "b" === i[1]
            }(),
            et = function(t, e, n) {
                var s = k(t),
                    r = !Y(function() { var e = {}; return e[s] = function() { return 7 }, 7 != "" [t](e) }),
                    o = r ? !Y(function() {
                        var e = !1,
                            i = /a/;
                        return i.exec = function() { return e = !0, null }, "split" === t && (i.constructor = {}, i.constructor[K] = function() { return i }), i[s](""), !e
                    }) : void 0;
                if (!r || !o || "replace" === t && !J || "split" === t && !tt) {
                    var a = /./ [s],
                        l = n(i, s, "" [t], function(t, e, i, n, s) { return e.exec === z ? r && !s ? { done: !0, value: a.call(e, i, n) } : { done: !0, value: t.call(i, e, n) } : { done: !1 } }),
                        c = l[0],
                        d = l[1];
                    X(String.prototype, t, c), V(RegExp.prototype, s, 2 == e ? function(t, e) { return d.call(t, this, e) } : function(t) { return d.call(t, this) })
                }
            },
            it = Math.max,
            nt = Math.min,
            st = Math.floor,
            rt = /\$([$&`']|\d\d?|<[^>]*>)/g,
            ot = /\$([$&`']|\d\d?)/g;
        et("replace", 2, function(t, i, s, r) {
            return [function(e, n) {
                var r = t(this),
                    o = null == e ? void 0 : e[i];
                return void 0 !== o ? o.call(e, r, n) : s.call(String(r), e, n)
            }, function(t, i) {
                var n = r(s, t, this, i);
                if (n.done) return n.value;
                var c = e(t),
                    d = String(this),
                    u = "function" == typeof i;
                u || (i = String(i));
                var p = c.global;
                if (p) {
                    var f = c.unicode;
                    c.lastIndex = 0
                }
                for (var m = [];;) { var g = D(c, d); if (null === g) break; if (m.push(g), !p) break; "" === String(g[0]) && (c.lastIndex = h(d, l(c.lastIndex), f)) }
                for (var v, y = "", b = 0, w = 0; w < m.length; w++) {
                    g = m[w];
                    for (var x = String(g[0]), _ = it(nt(o(g.index), d.length), 0), S = [], k = 1; k < g.length; k++) S.push(void 0 === (v = g[k]) ? v : String(v));
                    var E = g.groups;
                    if (u) {
                        var T = [x].concat(S, _, d);
                        void 0 !== E && T.push(E);
                        var C = String(i.apply(void 0, T))
                    } else C = a(x, d, _, S, E, i);
                    _ >= b && (y += d.slice(b, _) + C, b = _ + x.length)
                }
                return y + d.slice(b)
            }];

            function a(t, e, i, r, o, a) {
                var l = i + t.length,
                    c = r.length,
                    d = ot;
                return void 0 !== o && (o = n(o), d = rt), s.call(a, d, function(n, s) {
                    var a;
                    switch (s.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return e.slice(0, i);
                        case "'":
                            return e.slice(l);
                        case "<":
                            a = o[s.slice(1, -1)];
                            break;
                        default:
                            var d = +s;
                            if (0 === d) return n;
                            if (d > c) { var h = st(d / 10); return 0 === h ? n : h <= c ? void 0 === r[h - 1] ? s.charAt(1) : r[h - 1] + s.charAt(1) : n }
                            a = r[d - 1]
                    }
                    return void 0 === a ? "" : a
                })
            }
        });
        var at = H.f,
            lt = Function.prototype,
            ct = /^\s*function ([^ (]*)/;
        "name" in lt || A && at(lt, "name", { configurable: !0, get: function() { try { return ("" + this).match(ct)[1] } catch (t) { return "" } } }), et("match", 1, function(t, i, n, s) {
            return [function(e) {
                var n = t(this),
                    s = null == e ? void 0 : e[i];
                return void 0 !== s ? s.call(e, n) : new RegExp(e)[i](String(n))
            }, function(t) {
                var i = s(n, t, this);
                if (i.done) return i.value;
                var r = e(t),
                    o = String(this);
                if (!r.global) return D(r, o);
                var a = r.unicode;
                r.lastIndex = 0;
                for (var c, d = [], u = 0; null !== (c = D(r, o));) {
                    var p = String(c[0]);
                    d[u] = p, "" === p && (r.lastIndex = h(o, l(r.lastIndex), a)), u++
                }
                return 0 === u ? null : d
            }]
        });
        var dt = k("unscopables"),
            ht = Array.prototype;
        null == ht[dt] && V(ht, dt, {});
        var ut = function(t) { ht[dt][t] = !0 },
            pt = function(t, e) { return { value: e, done: !!t } },
            ft = {},
            mt = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == p(t) ? t.split("") : Object(t) },
            gt = function(t) { return mt(i(t)) },
            vt = Math.max,
            yt = Math.min,
            bt = w("keys"),
            wt = function(t) { return bt[t] || (bt[t] = S(t)) },
            xt = (!1, function(t, e, i) {
                var n = gt(t),
                    s = l(n.length),
                    r = function(t, e) { return (t = o(t)) < 0 ? vt(t + e, 0) : yt(t, e) }(i, s);
                for (0; s > r; r++)
                    if (r in n && n[r] === e) return r || 0;
                return -1
            }),
            _t = wt("IE_PROTO"),
            St = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
            kt = Object.keys || function(t) {
                return function(t, e) {
                    var i, n = gt(t),
                        s = 0,
                        r = [];
                    for (i in n) i != _t && G(n, i) && r.push(i);
                    for (; e.length > s;) G(n, i = e[s++]) && (~xt(r, i) || r.push(i));
                    return r
                }(t, St)
            },
            Et = A ? Object.defineProperties : function(t, i) { e(t); for (var n, s = kt(i), r = s.length, o = 0; r > o;) H.f(t, n = s[o++], i[n]); return t },
            Tt = b.document,
            Ct = Tt && Tt.documentElement,
            Mt = wt("IE_PROTO"),
            Dt = function() {},
            Ot = function() {
                var t, e = N("iframe"),
                    i = St.length;
                for (e.style.display = "none", Ct.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Ot = t.F; i--;) delete Ot.prototype[St[i]];
                return Ot()
            },
            Pt = Object.create || function(t, i) { var n; return null !== t ? (Dt.prototype = e(t), n = new Dt, Dt.prototype = null, n[Mt] = t) : n = Ot(), void 0 === i ? n : Et(n, i) },
            Lt = H.f,
            $t = k("toStringTag"),
            It = function(t, e, i) { t && !G(t = i ? t : t.prototype, $t) && Lt(t, $t, { configurable: !0, value: e }) },
            zt = {};
        V(zt, k("iterator"), function() { return this });
        var Yt = wt("IE_PROTO"),
            At = Object.prototype,
            Ft = Object.getPrototypeOf || function(t) { return t = n(t), G(t, Yt) ? t[Yt] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? At : null },
            jt = k("iterator"),
            Nt = !([].keys && "next" in [].keys()),
            Rt = function() { return this },
            Wt = function(t, e, i, n, s, r, o) {
                ! function(t, e, i) { t.prototype = Pt(zt, { next: B(1, i) }), It(t, e + " Iterator") }(i, e, n);
                var a, l, c, d = function(t) {
                        if (!Nt && t in f) return f[t];
                        switch (t) {
                            case "keys":
                            case "values":
                                return function() { return new i(this, t) }
                        }
                        return function() { return new i(this, t) }
                    },
                    h = e + " Iterator",
                    u = "values" == s,
                    p = !1,
                    f = t.prototype,
                    m = f[jt] || f["@@iterator"] || s && f[s],
                    g = m || d(s),
                    v = s ? u ? d("entries") : g : void 0,
                    y = "Array" == e && f.entries || m;
                if (y && (c = Ft(y.call(new t))) !== Object.prototype && c.next && (It(c, h, !0), "function" != typeof c[jt] && V(c, jt, Rt)), u && m && "values" !== m.name && (p = !0, g = function() { return m.call(this) }), (Nt || p || !f[jt]) && V(f, jt, g), ft[e] = g, ft[h] = Rt, s)
                    if (a = { values: u ? g : d("values"), keys: r ? g : d("keys"), entries: v }, o)
                        for (l in a) l in f || X(f, l, a[l]);
                    else Q(Q.P + Q.F * (Nt || p), e, a);
                return a
            },
            Ht = Wt(Array, "Array", function(t, e) { this._t = gt(t), this._i = 0, this._k = e }, function() {
                var t = this._t,
                    e = this._k,
                    i = this._i++;
                return !t || i >= t.length ? (this._t = void 0, pt(1)) : pt(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
            }, "values");
        ft.Arguments = ft.Array, ut("keys"), ut("values"), ut("entries");
        for (var Bt = k("iterator"), Vt = k("toStringTag"), qt = ft.Array, Gt = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, Xt = kt(Gt), Ut = 0; Ut < Xt.length; Ut++) {
            var Zt, Qt = Xt[Ut],
                Kt = Gt[Qt],
                Jt = b[Qt],
                te = Jt && Jt.prototype;
            if (te && (te[Bt] || V(te, Bt, qt), te[Vt] || V(te, Vt, Qt), ft[Qt] = qt, Kt))
                for (Zt in Ht) te[Zt] || X(te, Zt, Ht[Zt], !0)
        }
        var ee = c(!0);
        Wt(String, "String", function(t) { this._t = String(t), this._i = 0 }, function() {
            var t, e = this._t,
                i = this._i;
            return i >= e.length ? { value: void 0, done: !0 } : (t = ee(e, i), this._i += t.length, { value: t, done: !1 })
        });
        var ie = function(t, i, n, s) { try { return s ? i(e(n)[0], n[1]) : i(n) } catch (i) { var r = t.return; throw void 0 !== r && e(r.call(t)), i } },
            ne = k("iterator"),
            se = Array.prototype,
            re = function(t, e, i) { e in t ? H.f(t, e, B(0, i)) : t[e] = i },
            oe = k("iterator"),
            ae = y.getIteratorMethod = function(t) { if (null != t) return t[oe] || t["@@iterator"] || ft[C(t)] },
            le = k("iterator"),
            ce = !1;
        try {
            [7][le]().return = function() { ce = !0 }
        } catch (t) {}

        function de(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function he(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t }

        function ue(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) { return Object.getOwnPropertyDescriptor(i, t).enumerable }))), n.forEach(function(e) { he(t, e, i[e]) })
            }
            return t
        }
        Q(Q.S + Q.F * ! function(t, e) {
            if (!ce) return !1;
            var i = !1;
            try {
                var n = [7],
                    s = n[le]();
                s.next = function() { return { done: i = !0 } }, n[le] = function() { return s }
            } catch (t) {}
            return i
        }(), "Array", {
            from: function(t) {
                var e, i, s, r, o, a = n(t),
                    c = "function" == typeof this ? this : Array,
                    d = arguments.length,
                    h = d > 1 ? arguments[1] : void 0,
                    u = void 0 !== h,
                    p = 0,
                    f = ae(a);
                if (u && (h = U(h, d > 2 ? arguments[2] : void 0, 2)), null != f && (c != Array || void 0 === (o = f) || ft.Array !== o && se[ne] !== o))
                    for (r = f.call(a), i = new c; !(s = r.next()).done; p++) re(i, p, u ? ie(r, h, [s.value, p], !0) : s.value);
                else
                    for (i = new c(e = l(a.length)); e > p; p++) re(i, p, u ? h(a[p], p) : a[p]);
                return i.length = p, i
            }
        });
        var pe = m(function(t, e) {
                t.exports = function() {
                    if ("undefined" == typeof document) return 0;
                    var t, e = document.body,
                        i = document.createElement("div"),
                        n = i.style;
                    return n.position = "absolute", n.top = n.left = "-9999px", n.width = n.height = "100px", n.overflow = "scroll", e.appendChild(i), t = i.offsetWidth - i.clientWidth, e.removeChild(i), t
                }
            }),
            fe = "Expected a function",
            me = NaN,
            ge = "[object Symbol]",
            ve = /^\s+|\s+$/g,
            ye = /^[-+]0x[0-9a-f]+$/i,
            be = /^0b[01]+$/i,
            we = /^0o[0-7]+$/i,
            xe = parseInt,
            _e = "object" == typeof f && f && f.Object === Object && f,
            Se = "object" == typeof self && self && self.Object === Object && self,
            ke = _e || Se || Function("return this")(),
            Ee = Object.prototype.toString,
            Te = Math.max,
            Ce = Math.min,
            Me = function() { return ke.Date.now() };

        function De(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

        function Oe(t) {
            if ("number" == typeof t) return t;
            if (function(t) { return "symbol" == typeof t || function(t) { return !!t && "object" == typeof t }(t) && Ee.call(t) == ge }(t)) return me;
            if (De(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = De(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(ve, "");
            var i = be.test(t);
            return i || we.test(t) ? xe(t.slice(2), i ? 2 : 8) : ye.test(t) ? me : +t
        }
        var Pe = function(t, e, i) {
                var n = !0,
                    s = !0;
                if ("function" != typeof t) throw new TypeError(fe);
                return De(i) && (n = "leading" in i ? !!i.leading : n, s = "trailing" in i ? !!i.trailing : s),
                    function(t, e, i) {
                        var n, s, r, o, a, l, c = 0,
                            d = !1,
                            h = !1,
                            u = !0;
                        if ("function" != typeof t) throw new TypeError(fe);

                        function p(e) {
                            var i = n,
                                r = s;
                            return n = s = void 0, c = e, o = t.apply(r, i)
                        }

                        function f(t) { var i = t - l; return void 0 === l || i >= e || i < 0 || h && t - c >= r }

                        function m() {
                            var t = Me();
                            if (f(t)) return g(t);
                            a = setTimeout(m, function(t) { var i = e - (t - l); return h ? Ce(i, r - (t - c)) : i }(t))
                        }

                        function g(t) { return a = void 0, u && n ? p(t) : (n = s = void 0, o) }

                        function v() {
                            var t = Me(),
                                i = f(t);
                            if (n = arguments, s = this, l = t, i) { if (void 0 === a) return function(t) { return c = t, a = setTimeout(m, e), d ? p(t) : o }(l); if (h) return a = setTimeout(m, e), p(l) }
                            return void 0 === a && (a = setTimeout(m, e)), o
                        }
                        return e = Oe(e) || 0, De(i) && (d = !!i.leading, r = (h = "maxWait" in i) ? Te(Oe(i.maxWait) || 0, e) : r, u = "trailing" in i ? !!i.trailing : u), v.cancel = function() { void 0 !== a && clearTimeout(a), c = 0, n = l = s = a = void 0 }, v.flush = function() { return void 0 === a ? o : g(Me()) }, v
                    }(t, e, { leading: n, maxWait: e, trailing: s })
            },
            Le = NaN,
            $e = "[object Symbol]",
            Ie = /^\s+|\s+$/g,
            ze = /^[-+]0x[0-9a-f]+$/i,
            Ye = /^0b[01]+$/i,
            Ae = /^0o[0-7]+$/i,
            Fe = parseInt,
            je = "object" == typeof f && f && f.Object === Object && f,
            Ne = "object" == typeof self && self && self.Object === Object && self,
            Re = je || Ne || Function("return this")(),
            We = Object.prototype.toString,
            He = Math.max,
            Be = Math.min,
            Ve = function() { return Re.Date.now() };

        function qe(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

        function Ge(t) {
            if ("number" == typeof t) return t;
            if (function(t) { return "symbol" == typeof t || function(t) { return !!t && "object" == typeof t }(t) && We.call(t) == $e }(t)) return Le;
            if (qe(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = qe(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(Ie, "");
            var i = Ye.test(t);
            return i || Ae.test(t) ? Fe(t.slice(2), i ? 2 : 8) : ze.test(t) ? Le : +t
        }
        var Xe, Ue = function(t, e, i) {
                var n, s, r, o, a, l, c = 0,
                    d = !1,
                    h = !1,
                    u = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");

                function p(e) {
                    var i = n,
                        r = s;
                    return n = s = void 0, c = e, o = t.apply(r, i)
                }

                function f(t) { var i = t - l; return void 0 === l || i >= e || i < 0 || h && t - c >= r }

                function m() {
                    var t = Ve();
                    if (f(t)) return g(t);
                    a = setTimeout(m, function(t) { var i = e - (t - l); return h ? Be(i, r - (t - c)) : i }(t))
                }

                function g(t) { return a = void 0, u && n ? p(t) : (n = s = void 0, o) }

                function v() {
                    var t = Ve(),
                        i = f(t);
                    if (n = arguments, s = this, l = t, i) { if (void 0 === a) return function(t) { return c = t, a = setTimeout(m, e), d ? p(t) : o }(l); if (h) return a = setTimeout(m, e), p(l) }
                    return void 0 === a && (a = setTimeout(m, e)), o
                }
                return e = Ge(e) || 0, qe(i) && (d = !!i.leading, r = (h = "maxWait" in i) ? He(Ge(i.maxWait) || 0, e) : r, u = "trailing" in i ? !!i.trailing : u), v.cancel = function() { void 0 !== a && clearTimeout(a), c = 0, n = l = s = a = void 0 }, v.flush = function() { return void 0 === a ? o : g(Ve()) }, v
            },
            Ze = "Expected a function",
            Qe = "__lodash_hash_undefined__",
            Ke = "[object Function]",
            Je = "[object GeneratorFunction]",
            ti = /^\[object .+?Constructor\]$/,
            ei = "object" == typeof f && f && f.Object === Object && f,
            ii = "object" == typeof self && self && self.Object === Object && self,
            ni = ei || ii || Function("return this")(),
            si = Array.prototype,
            ri = Function.prototype,
            oi = Object.prototype,
            ai = ni["__core-js_shared__"],
            li = (Xe = /[^.]+$/.exec(ai && ai.keys && ai.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Xe : "",
            ci = ri.toString,
            di = oi.hasOwnProperty,
            hi = oi.toString,
            ui = RegExp("^" + ci.call(di).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            pi = si.splice,
            fi = xi(ni, "Map"),
            mi = xi(Object, "create");

        function gi(t) {
            var e = -1,
                i = t ? t.length : 0;
            for (this.clear(); ++e < i;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }

        function vi(t) {
            var e = -1,
                i = t ? t.length : 0;
            for (this.clear(); ++e < i;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }

        function yi(t) {
            var e = -1,
                i = t ? t.length : 0;
            for (this.clear(); ++e < i;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }

        function bi(t, e) {
            for (var i, n, s = t.length; s--;)
                if ((i = t[s][0]) === (n = e) || i != i && n != n) return s;
            return -1
        }

        function wi(t, e) { var i, n, s = t.__data__; return ("string" == (n = typeof(i = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? s["string" == typeof e ? "string" : "hash"] : s.map }

        function xi(t, e) {
            var i = function(t, e) { return null == t ? void 0 : t[e] }(t, e);
            return function(t) {
                return !(!Si(t) || (e = t, li && li in e)) && (function(t) { var e = Si(t) ? hi.call(t) : ""; return e == Ke || e == Je }(t) || function(t) {
                    var e = !1;
                    if (null != t && "function" != typeof t.toString) try { e = !!(t + "") } catch (t) {}
                    return e
                }(t) ? ui : ti).test(function(t) { if (null != t) { try { return ci.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }(t));
                var e
            }(i) ? i : void 0
        }

        function _i(t, e) {
            if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(Ze);
            var i = function() {
                var n = arguments,
                    s = e ? e.apply(this, n) : n[0],
                    r = i.cache;
                if (r.has(s)) return r.get(s);
                var o = t.apply(this, n);
                return i.cache = r.set(s, o), o
            };
            return i.cache = new(_i.Cache || yi), i
        }

        function Si(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }
        gi.prototype.clear = function() { this.__data__ = mi ? mi(null) : {} }, gi.prototype.delete = function(t) { return this.has(t) && delete this.__data__[t] }, gi.prototype.get = function(t) { var e = this.__data__; if (mi) { var i = e[t]; return i === Qe ? void 0 : i } return di.call(e, t) ? e[t] : void 0 }, gi.prototype.has = function(t) { var e = this.__data__; return mi ? void 0 !== e[t] : di.call(e, t) }, gi.prototype.set = function(t, e) { return this.__data__[t] = mi && void 0 === e ? Qe : e, this }, vi.prototype.clear = function() { this.__data__ = [] }, vi.prototype.delete = function(t) {
            var e = this.__data__,
                i = bi(e, t);
            return !(i < 0 || (i == e.length - 1 ? e.pop() : pi.call(e, i, 1), 0))
        }, vi.prototype.get = function(t) {
            var e = this.__data__,
                i = bi(e, t);
            return i < 0 ? void 0 : e[i][1]
        }, vi.prototype.has = function(t) { return bi(this.__data__, t) > -1 }, vi.prototype.set = function(t, e) {
            var i = this.__data__,
                n = bi(i, t);
            return n < 0 ? i.push([t, e]) : i[n][1] = e, this
        }, yi.prototype.clear = function() { this.__data__ = { hash: new gi, map: new(fi || vi), string: new gi } }, yi.prototype.delete = function(t) { return wi(this, t).delete(t) }, yi.prototype.get = function(t) { return wi(this, t).get(t) }, yi.prototype.has = function(t) { return wi(this, t).has(t) }, yi.prototype.set = function(t, e) { return wi(this, t).set(t, e), this }, _i.Cache = yi;
        var ki = _i,
            Ei = function() {
                if ("undefined" != typeof Map) return Map;

                function t(t, e) { var i = -1; return t.some(function(t, n) { return t[0] === e && (i = n, !0) }), i }
                return function() {
                    function e() { this.__entries__ = [] }
                    return Object.defineProperty(e.prototype, "size", { get: function() { return this.__entries__.length }, enumerable: !0, configurable: !0 }), e.prototype.get = function(e) {
                        var i = t(this.__entries__, e),
                            n = this.__entries__[i];
                        return n && n[1]
                    }, e.prototype.set = function(e, i) { var n = t(this.__entries__, e);~n ? this.__entries__[n][1] = i : this.__entries__.push([e, i]) }, e.prototype.delete = function(e) {
                        var i = this.__entries__,
                            n = t(i, e);
                        ~n && i.splice(n, 1)
                    }, e.prototype.has = function(e) { return !!~t(this.__entries__, e) }, e.prototype.clear = function() { this.__entries__.splice(0) }, e.prototype.forEach = function(t, e) {
                        void 0 === e && (e = null);
                        for (var i = 0, n = this.__entries__; i < n.length; i++) {
                            var s = n[i];
                            t.call(e, s[1], s[0])
                        }
                    }, e
                }()
            }(),
            Ti = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            Ci = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
            Mi = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Ci) : function(t) { return setTimeout(function() { return t(Date.now()) }, 1e3 / 60) },
            Di = 2,
            Oi = 20,
            Pi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            Li = "undefined" != typeof MutationObserver,
            $i = function() {
                function t() {
                    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                        var i = !1,
                            n = !1,
                            s = 0;

                        function r() { i && (i = !1, t()), n && a() }

                        function o() { Mi(r) }

                        function a() {
                            var t = Date.now();
                            if (i) {
                                if (t - s < Di) return;
                                n = !0
                            } else i = !0, n = !1, setTimeout(o, e);
                            s = t
                        }
                        return a
                    }(this.refresh.bind(this), Oi)
                }
                return t.prototype.addObserver = function(t) {~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_() }, t.prototype.removeObserver = function(t) {
                    var e = this.observers_,
                        i = e.indexOf(t);
                    ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
                }, t.prototype.refresh = function() { this.updateObservers_() && this.refresh() }, t.prototype.updateObservers_ = function() { var t = this.observers_.filter(function(t) { return t.gatherActive(), t.hasActive() }); return t.forEach(function(t) { return t.broadcastActive() }), t.length > 0 }, t.prototype.connect_ = function() { Ti && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Li ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0) }, t.prototype.disconnect_ = function() { Ti && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1) }, t.prototype.onTransitionEnd_ = function(t) {
                    var e = t.propertyName,
                        i = void 0 === e ? "" : e;
                    Pi.some(function(t) { return !!~i.indexOf(t) }) && this.refresh()
                }, t.getInstance = function() { return this.instance_ || (this.instance_ = new t), this.instance_ }, t.instance_ = null, t
            }(),
            Ii = function(t, e) {
                for (var i = 0, n = Object.keys(e); i < n.length; i++) {
                    var s = n[i];
                    Object.defineProperty(t, s, { value: e[s], enumerable: !1, writable: !1, configurable: !0 })
                }
                return t
            },
            zi = function(t) { return t && t.ownerDocument && t.ownerDocument.defaultView || Ci },
            Yi = Ri(0, 0, 0, 0);

        function Ai(t) { return parseFloat(t) || 0 }

        function Fi(t) { for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i]; return e.reduce(function(e, i) { return e + Ai(t["border-" + i + "-width"]) }, 0) }
        var ji = "undefined" != typeof SVGGraphicsElement ? function(t) { return t instanceof zi(t).SVGGraphicsElement } : function(t) { return t instanceof zi(t).SVGElement && "function" == typeof t.getBBox };

        function Ni(t) {
            return Ti ? ji(t) ? function(t) { var e = t.getBBox(); return Ri(0, 0, e.width, e.height) }(t) : function(t) {
                var e = t.clientWidth,
                    i = t.clientHeight;
                if (!e && !i) return Yi;
                var n = zi(t).getComputedStyle(t),
                    s = function(t) {
                        for (var e = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                            var s = n[i],
                                r = t["padding-" + s];
                            e[s] = Ai(r)
                        }
                        return e
                    }(n),
                    r = s.left + s.right,
                    o = s.top + s.bottom,
                    a = Ai(n.width),
                    l = Ai(n.height);
                if ("border-box" === n.boxSizing && (Math.round(a + r) !== e && (a -= Fi(n, "left", "right") + r), Math.round(l + o) !== i && (l -= Fi(n, "top", "bottom") + o)), ! function(t) { return t === zi(t).document.documentElement }(t)) {
                    var c = Math.round(a + r) - e,
                        d = Math.round(l + o) - i;
                    1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(d) && (l -= d)
                }
                return Ri(s.left, s.top, a, l)
            }(t) : Yi
        }

        function Ri(t, e, i, n) { return { x: t, y: e, width: i, height: n } }
        var Wi = function() {
                function t(t) { this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ri(0, 0, 0, 0), this.target = t }
                return t.prototype.isActive = function() { var t = Ni(this.target); return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight }, t.prototype.broadcastRect = function() { var t = this.contentRect_; return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t }, t
            }(),
            Hi = function(t, e) {
                var i, n, s, r, o, a, l, c = (n = (i = e).x, s = i.y, r = i.width, o = i.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), Ii(l, { x: n, y: s, width: r, height: o, top: s, right: n + r, bottom: o + s, left: n }), l);
                Ii(this, { target: t, contentRect: c })
            },
            Bi = function() {
                function t(t, e, i) {
                    if (this.activeObservations_ = [], this.observations_ = new Ei, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                    this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
                }
                return t.prototype.observe = function(t) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(t instanceof zi(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var e = this.observations_;
                        e.has(t) || (e.set(t, new Wi(t)), this.controller_.addObserver(this), this.controller_.refresh())
                    }
                }, t.prototype.unobserve = function(t) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(t instanceof zi(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var e = this.observations_;
                        e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                    }
                }, t.prototype.disconnect = function() { this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this) }, t.prototype.gatherActive = function() {
                    var t = this;
                    this.clearActive(), this.observations_.forEach(function(e) { e.isActive() && t.activeObservations_.push(e) })
                }, t.prototype.broadcastActive = function() {
                    if (this.hasActive()) {
                        var t = this.callbackCtx_,
                            e = this.activeObservations_.map(function(t) { return new Hi(t.target, t.broadcastRect()) });
                        this.callback_.call(t, e, t), this.clearActive()
                    }
                }, t.prototype.clearActive = function() { this.activeObservations_.splice(0) }, t.prototype.hasActive = function() { return this.activeObservations_.length > 0 }, t
            }(),
            Vi = "undefined" != typeof WeakMap ? new WeakMap : new Ei,
            qi = function t(e) {
                if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                var i = $i.getInstance(),
                    n = new Bi(e, i, this);
                Vi.set(this, n)
            };
        ["observe", "unobserve", "disconnect"].forEach(function(t) { qi.prototype[t] = function() { var e; return (e = Vi.get(this))[t].apply(e, arguments) } });
        var Gi = void 0 !== Ci.ResizeObserver ? Ci.ResizeObserver : qi,
            Xi = !("undefined" == typeof window || !window.document || !window.document.createElement),
            Ui = function() {
                function t(e, i) {
                    var n = this;
                    ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.onScroll = function() { n.scrollXTicking || (window.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (window.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0) }, this.scrollX = function() { n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1 }, this.scrollY = function() { n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1 }, this.onMouseEnter = function() { n.showScrollbar("x"), n.showScrollbar("y") }, this.onMouseMove = function(t) { n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y") }, this.onMouseLeave = function() { n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1 }, this.onWindowResize = function() { n.scrollbarWidth = pe(), n.hideNativeScrollbar() }, this.hideScrollbars = function() { n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1) }, this.onPointerEvent = function(t) {
                        var e, i;
                        n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (i = n.isWithinBounds(n.axis.x.scrollbar.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (e = n.isWithinBounds(n.axis.y.scrollbar.rect)), (e || i) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && n.onDragStart(t, "y"), i && n.onDragStart(t, "x")))
                    }, this.drag = function(e) {
                        var i = n.axis[n.draggedAxis].track,
                            s = i.rect[n.axis[n.draggedAxis].sizeAttr],
                            r = n.axis[n.draggedAxis].scrollbar;
                        e.preventDefault(), e.stopPropagation();
                        var o = (("y" === n.draggedAxis ? e.pageY : e.pageX) - i.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / i.rect[n.axis[n.draggedAxis].sizeAttr] * n.contentEl[n.axis[n.draggedAxis].scrollSizeAttr];
                        "x" === n.draggedAxis && (o = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? o - (s + r.size) : o, o = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -o : o), n.contentEl[n.axis[n.draggedAxis].scrollOffsetAttr] = o
                    }, this.onEndDrag = function(t) { t.preventDefault(), t.stopPropagation(), document.removeEventListener("mousemove", n.drag), document.removeEventListener("mouseup", n.onEndDrag) }, this.el = e, this.flashTimeout, this.contentEl, this.offsetEl, this.maskEl, this.globalObserver, this.mutationObserver, this.resizeObserver, this.scrollbarWidth, this.minScrollbarWidth = 20, this.options = ue({}, t.defaultOptions, i), this.classNames = ue({}, t.defaultOptions.classNames, this.options.classNames), this.isRtl, this.axis = { x: { scrollOffsetAttr: "scrollLeft", sizeAttr: "width", scrollSizeAttr: "scrollWidth", offsetAttr: "left", overflowAttr: "overflowX", dragOffset: 0, isOverflowing: !0, isVisible: !1, forceVisible: !1, track: {}, scrollbar: {} }, y: { scrollOffsetAttr: "scrollTop", sizeAttr: "height", scrollSizeAttr: "scrollHeight", offsetAttr: "top", overflowAttr: "overflowY", dragOffset: 0, isOverflowing: !0, isVisible: !1, forceVisible: !1, track: {}, scrollbar: {} } }, this.recalculate = Pe(this.recalculate.bind(this), 64), this.onMouseMove = Pe(this.onMouseMove.bind(this), 64), this.hideScrollbars = Ue(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = Ue(this.onWindowResize.bind(this), 64, { leading: !0 }), t.getRtlHelpers = ki(t.getRtlHelpers), this.getContentElement = this.getScrollElement, this.init()
                }
                var e, i, n;
                return e = t, n = [{
                    key: "getRtlHelpers",
                    value: function() {
                        var e = document.createElement("div");
                        e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                        var i = e.firstElementChild;
                        document.body.appendChild(i);
                        var n = i.firstElementChild;
                        i.scrollLeft = 0;
                        var s = t.getOffset(i),
                            r = t.getOffset(n);
                        i.scrollLeft = 999;
                        var o = t.getOffset(n);
                        return { isRtlScrollingInverted: s.left !== r.left && r.left - o.left != 0, isRtlScrollbarInverted: s.left !== r.left }
                    }
                }, { key: "initHtmlApi", value: function() { this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function(e) { e.forEach(function(e) { Array.from(e.addedNodes).forEach(function(e) { 1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new t(e, t.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {!e.SimpleBar && new t(e, t.getElOptions(e)) })) }), Array.from(e.removedNodes).forEach(function(t) { 1 === t.nodeType && (t.hasAttribute("data-simplebar") ? t.SimpleBar && t.SimpleBar.unMount() : Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t) { t.SimpleBar && t.SimpleBar.unMount() })) }) }) }), this.globalObserver.observe(document, { childList: !0, subtree: !0 })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements)) } }, {
                    key: "getElOptions",
                    value: function(t) {
                        return Array.from(t.attributes).reduce(function(t, e) {
                            var i = e.name.match(/data-simplebar-(.+)/);
                            if (i) {
                                var n = i[1].replace(/\W+(.)/g, function(t, e) { return e.toUpperCase() });
                                switch (e.value) {
                                    case "true":
                                        t[n] = !0;
                                        break;
                                    case "false":
                                        t[n] = !1;
                                        break;
                                    case void 0:
                                        t[n] = !0;
                                        break;
                                    default:
                                        t[n] = e.value
                                }
                            }
                            return t
                        }, {})
                    }
                }, { key: "removeObserver", value: function() { this.globalObserver.disconnect() } }, { key: "initDOMLoadedElements", value: function() { document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e) { e.SimpleBar || new t(e, t.getElOptions(e)) }) } }, { key: "getOffset", value: function(t) { var e = t.getBoundingClientRect(); return { top: e.top + (window.pageYOffset || document.documentElement.scrollTop), left: e.left + (window.pageXOffset || document.documentElement.scrollLeft) } } }], (i = [{ key: "init", value: function() { this.el.SimpleBar = this, Xi && (this.initDOM(), this.scrollbarWidth = pe(), this.recalculate(), this.initListeners()) } }, {
                    key: "initDOM",
                    value: function() {
                        var t = this;
                        if (Array.from(this.el.children).filter(function(e) { return e.classList.contains(t.classNames.wrapper) }).length) this.wrapperEl = this.el.querySelector(".".concat(this.classNames.wrapper)), this.contentEl = this.el.querySelector(".".concat(this.classNames.content)), this.offsetEl = this.el.querySelector(".".concat(this.classNames.offset)), this.maskEl = this.el.querySelector(".".concat(this.classNames.mask)), this.placeholderEl = this.el.querySelector(".".concat(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.horizontal)), this.axis.y.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.vertical));
                        else {
                            for (this.wrapperEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentEl.classList.add(this.classNames.content), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                            this.offsetEl.appendChild(this.contentEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
                        }
                        if (!this.axis.x.track.el || !this.axis.y.track.el) {
                            var e = document.createElement("div"),
                                i = document.createElement("div");
                            e.classList.add(this.classNames.track), i.classList.add(this.classNames.scrollbar), this.options.autoHide || i.classList.add(this.classNames.visible), e.appendChild(i), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
                        }
                        this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(".".concat(this.classNames.scrollbar)), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(".".concat(this.classNames.scrollbar)), this.el.setAttribute("data-simplebar", "init")
                    }
                }, {
                    key: "initListeners",
                    value: function() {
                        var t = this;
                        this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick", "touchstart", "touchend", "touchmove"].forEach(function(e) { t.el.addEventListener(e, t.onPointerEvent, !0) }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentEl.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onWindowResize), "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function(e) {
                            e.forEach(function(e) {
                                (e.target === t.el || !t.isChildNode(e.target) || e.addedNodes.length || e.removedNodes.length) && t.recalculate()
                            })
                        }), this.mutationObserver.observe(this.el, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })), this.resizeObserver = new Gi(this.recalculate), this.resizeObserver.observe(this.el)
                    }
                }, {
                    key: "recalculate",
                    value: function() {
                        var t = this.heightAutoObserverEl.offsetHeight <= 1;
                        this.elStyles = window.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction, this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.contentEl.style.height = t ? "auto" : "100%", this.placeholderEl.style.width = "".concat(this.contentEl.scrollWidth, "px"), this.placeholderEl.style.height = "".concat(this.contentEl.scrollHeight, "px"), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft), this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect(), this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect(), this.axis.x.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollWidth : this.contentEl.scrollWidth - this.minScrollbarWidth) > Math.ceil(this.axis.x.track.rect.width), this.axis.y.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollHeight : this.contentEl.scrollHeight - this.minScrollbarWidth) > Math.ceil(this.axis.y.track.rect.height), this.axis.x.isOverflowing = "hidden" !== this.elStyles.overflowX && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== this.elStyles.overflowY && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px"), this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px"), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y"), this.hideNativeScrollbar()
                    }
                }, {
                    key: "getScrollbarSize",
                    value: function() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
                            i = this.scrollbarWidth ? this.contentEl[this.axis[e].scrollSizeAttr] : this.contentEl[this.axis[e].scrollSizeAttr] - this.minScrollbarWidth,
                            n = this.axis[e].track.rect[this.axis[e].sizeAttr];
                        if (this.axis[e].isOverflowing) { var s = n / i; return t = Math.max(~~(s * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (t = Math.min(t, this.options.scrollbarMaxSize)), t }
                    }
                }, {
                    key: "positionScrollbar",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
                            i = this.contentEl[this.axis[e].scrollSizeAttr],
                            n = this.axis[e].track.rect[this.axis[e].sizeAttr],
                            s = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                            r = this.axis[e].scrollbar,
                            o = this.contentEl[this.axis[e].scrollOffsetAttr],
                            a = (o = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -o : o) / (i - s),
                            l = ~~((n - r.size) * a);
                        l = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? l + (n - r.size) : l, r.el.style.transform = "x" === e ? "translate3d(".concat(l, "px, 0, 0)") : "translate3d(0, ".concat(l, "px, 0)")
                    }
                }, {
                    key: "toggleTrackVisibility",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
                            e = this.axis[t].track.el,
                            i = this.axis[t].scrollbar.el;
                        this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? i.style.visibility = "visible" : i.style.visibility = "hidden"
                    }
                }, {
                    key: "hideNativeScrollbar",
                    value: function() {
                        if (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0, !this.scrollbarWidth) {
                            var t = [this.isRtl ? "paddingLeft" : "paddingRight"];
                            this.contentEl.style[t] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "calc(".concat(this.elStyles[t], " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles[t], this.contentEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "calc(".concat(this.elStyles.paddingBottom, " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles.paddingBottom
                        }
                    }
                }, {
                    key: "onMouseMoveForAxis",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                        this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
                    }
                }, {
                    key: "onMouseLeaveForAxis",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                        this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
                    }
                }, {
                    key: "showScrollbar",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
                            e = this.axis[t].scrollbar.el;
                        this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
                    }
                }, {
                    key: "onDragStart",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
                            i = this.axis[e].scrollbar.el,
                            n = "y" === e ? t.pageY : t.pageX;
                        this.axis[e].dragOffset = n - i.getBoundingClientRect()[this.axis[e].offsetAttr], this.draggedAxis = e, document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag)
                    }
                }, { key: "getScrollElement", value: function() { return this.contentEl } }, {
                    key: "removeListeners",
                    value: function() {
                        var t = this;
                        this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick", "touchstart", "touchend", "touchmove"].forEach(function(e) { t.el.removeEventListener(e, t.onPointerEvent) }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentEl.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
                    }
                }, { key: "unMount", value: function() { this.removeListeners(), this.el.SimpleBar = null } }, { key: "isChildNode", value: function(t) { return null !== t && (t === this.el || this.isChildNode(t.parentNode)) } }, { key: "isWithinBounds", value: function(t) { return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height } }]) && de(e.prototype, i), n && de(e, n), t
            }();
        return Ui.defaultOptions = { autoHide: !0, forceVisible: !1, classNames: { content: "simplebar-content", offset: "simplebar-offset", mask: "simplebar-mask", wrapper: "simplebar-wrapper", placeholder: "simplebar-placeholder", scrollbar: "simplebar-scrollbar", track: "simplebar-track", heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper", heightAutoObserverEl: "simplebar-height-auto-observer", visible: "simplebar-visible", horizontal: "simplebar-horizontal", vertical: "simplebar-vertical", hover: "simplebar-hover" }, scrollbarMinSize: 25, scrollbarMaxSize: 0, timeout: 1e3 }, Xi && Ui.initHtmlApi(), Ui
    }),
    function(t) {
        t.fn.jAutoCalc = function(e) {
            var s = {},
                o = { sum: { rgx: "sum\\({([^}]+)}\\)", exec: function(e, i, s) { return m = 0, t(l(e), i).each(function() { n = 1 * d(t(this).val(), s), m += n }), m } }, avg: { rgx: "avg\\({([^}]+)}\\)", exec: function(e, i, s) { return m = 0, c = t(l(e), i).each(function() { n = 1 * d(t(this).val(), s), m += n }).length, m / c } }, min: { rgx: "min\\({([^}]+)}\\)", exec: function(e, i, n) { return Math.min.apply(this, t(l(e), i).map(function(e, i) { return d(t(i).val(), n) }).get()) } }, max: { rgx: "max\\({([^}]+)}\\)", exec: function(e, i, n) { return Math.max.apply(this, t(l(e), i).map(function(e, i) { return d(t(i).val(), n) }).get()) } }, count: { rgx: "count\\({([^}]+)}\\)", exec: function(e, i) { return t(l(e), i).length } }, countNotEmpty: { rgx: "countNotEmpty\\({([^}]+)}\\)", exec: function(e, i) { return t.grep(t(l(e), i), function(e) { return t(e).val() }).length } } },
                a = function(t) { for (fields = new Array, r = /{([^}]+)}/gi; null != (m = r.exec(t));) fields[fields.length] = m[1]; return fields },
                l = function(t) { return /^[a-zA-Z].*/.test(t) ? ':input[name="' + t + '"]' : t },
                d = function(e, i) { for (numValue = "", numOpts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"], ch = "", dec = "", decLoc = -1, thou = "", sym = "", symLoc = -1, decPlaces = 0, sepOpts = s.decimalOpts.concat(s.thousandOpts), z = e.length - 1; z >= 0; z--) ch = e.charAt(z), -1 != t.inArray(ch, numOpts) ? numValue = ch + numValue : "" == dec && -1 != t.inArray(ch, s.decimalOpts) ? (decLoc = z, dec = ch, numValue = "." + numValue) : "" == thou && -1 != t.inArray(ch, s.thousandOpts) ? thou = ch : "" != sym || -1 != t.inArray(ch, sepOpts) || 0 != z && z != e.length - 1 || (sym = ch, symLoc = z); return "" != dec && (decPlaces = e.length - decLoc - 1, symLoc > decLoc && decPlaces--), -1 != s.decimalPlaces && (decPlaces = s.decimalPlaces), 2 == arguments.length && ("" == i.dec && "" != dec && (i.dec = dec), (-1 == i.decPlaces && -1 != decPlaces || -1 != i.decPlaces && -1 != decPlaces && decPlaces < i.decPlaces) && (i.decPlaces = decPlaces), "" == i.thou && "" != thou && (i.thou = thou), "" == i.sym && "" != sym && (i.sym = sym, i.symLoc = symLoc)), s.emptyAsZero && "" == numValue && (numValue = "0"), numValue },
                h = function(e, n, a, c) {
                    field = "", fieldValue = "", numValue = "", resultvalue = "";
                    var h = { dec: "", decPlaces: -1, thou: "", sym: "", symLoc: -1 };
                    for (func in o)
                        for (f = o[func], r = new RegExp(f.rgx, "gi"); null != (m = r.exec(e));) v = f.exec(m[1], c, h), e = e.replace(new RegExp(f.rgx, "gi"), v);
                    for (i = 0; i < n.length; i++) {
                        if (field = n[i], fieldValue = t(l(field), c).val(), numValue = d(fieldValue, h), 0 == numValue.length) return void a.val("").change();
                        e = e.replace(new RegExp("{" + field + "}", "g"), numValue)
                    }
                    e = e.replace(/ /g, ""), "" == h.dec && (h.dec = s.decimalOpts[0]), -1 == h.decPlaces && (h.decPlaces = 0), "" == h.thou && (h.thou = s.thousandOpts[0]), resultValue = S(e), null == resultValue ? resultValue = "" : resultValue = u(resultValue, h.decPlaces), resultValue = resultValue.replace(/\./g, "<c>"), resultValue = resultValue.replace(/\,/g, "<t>"), resultValue = resultValue.replace(/\<c\>/g, h.dec), resultValue = resultValue.replace(/\<t\>/g, h.thou), h.symLoc > -1 && (0 == h.symLoc ? resultValue = h.sym + resultValue : resultValue += h.sym), s.smartIntegers && (resultValue = resultValue.replace(/[\,\.]0+$/, "")), t.isFunction(s.onShowResult) && (resultValue = s.onShowResult.call(this, a, resultValue)), a.val(resultValue), s.chainFire && a.change()
                },
                u = function(t, e) { for (n = t.toFixed(e) + "", x = n.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "", rgx = /(\d+)(\d{3})/; rgx.test(x1);) x1 = x1.replace(rgx, "$1,$2"); return x1 + x2 },
                p = { "+": { op: "+", precedence: 10, assoc: "L", exec: function(t, e) { return t + e } }, "-": { op: "-", precedence: 10, assoc: "L", exec: function(t, e) { return t - e } }, "*": { op: "*", precedence: 20, assoc: "L", exec: function(t, e) { return t * e } }, "/": { op: "/", precedence: 20, assoc: "L", exec: function(t, e) { return t / e } }, "**": { op: "**", precedence: 30, assoc: "R", exec: function(t, e) { return Math.pow(t, e) } } },
                g = { e: Math.exp(1), pi: 4 * Math.atan2(1, 1) },
                y = function(t) {
                    var e, i, n = t.offset;
                    for (e = 0;
                        "0123456789".indexOf(t.string.substr(t.offset, 1)) >= 0 && t.offset < t.string.length;) t.offset++;
                    if ("." == t.string.substr(t.offset, 1))
                        for (t.offset++;
                            "0123456789".indexOf(t.string.substr(t.offset, 1)) >= 0 && t.offset < t.string.length;) t.offset++;
                    if (t.offset > n) return parseFloat(t.string.substr(n, t.offset - n));
                    if ("+" == t.string.substr(t.offset, 1)) return t.offset++, y(t);
                    if ("-" == t.string.substr(t.offset, 1)) return t.offset++, b(y(t));
                    if ("(" == t.string.substr(t.offset, 1)) { if (t.offset++, e = _(t), ")" == t.string.substr(t.offset, 1)) return t.offset++, e; throw t.error = "Parsing error: ')' expected", "parseError" }
                    if (i = /^[a-z_][a-z0-9_]*/i.exec(t.string.substr(t.offset))) { var s = i[0]; if (t.offset += s.length, s in g) return g[s]; throw t.error = "Semantic error: unknown variable '" + s + "'", "unknownVar" }
                    throw t.string.length == t.offset ? (t.error = "Parsing error at end of string: value expected", "valueMissing") : (t.error = "Parsing error: unrecognized value", "valueNotParsed")
                },
                b = function(t) { return -t },
                w = function(t) { return "**" == t.string.substr(t.offset, 2) ? (t.offset += 2, p["**"]) : "+-*/".indexOf(t.string.substr(t.offset, 1)) >= 0 ? p[t.string.substr(t.offset++, 1)] : null },
                _ = function(t) {
                    for (var e, i = [{ precedence: 0, assoc: "L" }], n = y(t);;) {
                        for (e = w(t) || { precedence: 0, assoc: "L" }; e.precedence < i[i.length - 1].precedence || e.precedence == i[i.length - 1].precedence && "L" == e.assoc;) {
                            var s = i.pop();
                            if (!s.exec) return n;
                            n = s.exec(s.value, n)
                        }
                        i.push({ op: e.op, precedence: e.precedence, assoc: e.assoc, exec: e.exec, value: n }), n = y(t)
                    }
                },
                S = function(t) { var e = { string: t, offset: 0 }; try { var i = _(e); if (e.offset < e.string.length) throw e.error = "Syntax error: junk found at offset " + e.offset, "trailingJunk"; return i } catch (t) { return void(s.showParseError && alert(e.error + " (" + t + "):\n" + e.string.substr(0, e.offset) + "<*>" + e.string.substr(e.offset))) } },
                k = {
                    init: function() {
                        return this.each(function() {
                            $ctx = t(this), t("[" + s.attribute + "]:not([_jac])", $ctx).each(function() {
                                if ($this = t(this), eq = $this.attr(s.attribute), fields = a(eq), 0 != fields.length) {
                                    for (i = 0; i < fields.length; i++)
                                        if (0 == t(l(fields[i]), $ctx).length) return;
                                    for (field = "", name = $this.attr("name"), fireEvents = "focus.jautocalc change.jautocalc blur.jautocalc", s.keyEventsFire && (fireEvents += " keyup.jautocalc keydown.jautocalc keypress.jautocalc"), i = 0; i < fields.length; i++) field = fields[i], t(l(field), $ctx).bind(fireEvents, { equation: eq, equationFields: fields, result: $this, context: $ctx }, function(t) { h(t.data.equation, t.data.equationFields, t.data.result, t.data.context) });
                                    s.readOnlyResults && $this.attr("readonly", !0), $this.attr("_jac", "_jac"), s.initFire && t(l(fields[0]), $ctx).change()
                                }
                            })
                        })
                    },
                    destroy: function() {
                        return this.each(function() {
                            $ctx = t(this), t("[" + s.attribute + "][_jac]", $ctx).each(function() {
                                if ($this = t(this), eq = $this.attr(s.attribute), fields = a(eq), 0 != fields.length) {
                                    for (field = "", i = 0; i < fields.length; i++) field = fields[i], t(l(field), $ctx).unbind(".jautocalc");
                                    s.readOnlyResults && $this.removeAttr("readonly"), $this.removeAttr("_jac")
                                }
                            })
                        })
                    }
                };
            return function(e) {
                for (s = t.extend({}, t.fn.jAutoCalc.defaults), i = 0; i < e.length; i++) "object" == typeof e[i] && (s = t.extend(s, e[i]));
                o = t.extend(o, s.funcs), g = t.extend(g, s.vars)
            }(arguments), k[e] ? k[e].apply(this) : k.init.apply(this)
        }, t.fn.jAutoCalc.defaults = { attribute: "data-form", thousandOpts: [",", ".", " "], decimalOpts: [".", ","], decimalPlaces: -1, initFire: !0, chainFire: !0, keyEventsFire: !1, readOnlyResults: !0, showParseError: !0, emptyAsZero: !1, smartIntegers: !1, onShowResult: null, funcs: {}, vars: {} }
    }(jQuery),
    function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Swiper = e() }(this, function() {
        "use strict";
        var t = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document,
            e = "undefined" == typeof window ? { document: t, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window,
            i = function(t) { for (var e = 0; e < t.length; e += 1) this[e] = t[e]; return this.length = t.length, this };

        function n(n, s) {
            var r = [],
                o = 0;
            if (n && !s && n instanceof i) return n;
            if (n)
                if ("string" == typeof n) {
                    var a, l, c = n.trim();
                    if (0 <= c.indexOf("<") && 0 <= c.indexOf(">")) { var d = "div"; for (0 === c.indexOf("<li") && (d = "ul"), 0 === c.indexOf("<tr") && (d = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (d = "tr"), 0 === c.indexOf("<tbody") && (d = "table"), 0 === c.indexOf("<option") && (d = "select"), (l = t.createElement(d)).innerHTML = c, o = 0; o < l.childNodes.length; o += 1) r.push(l.childNodes[o]) } else
                        for (a = s || "#" !== n[0] || n.match(/[ .<>:~]/) ? (s || t).querySelectorAll(n.trim()) : [t.getElementById(n.trim().split("#")[1])], o = 0; o < a.length; o += 1) a[o] && r.push(a[o])
                } else if (n.nodeType || n === e || n === t) r.push(n);
            else if (0 < n.length && n[0].nodeType)
                for (o = 0; o < n.length; o += 1) r.push(n[o]);
            return new i(r)
        }

        function s(t) { for (var e = [], i = 0; i < t.length; i += 1) - 1 === e.indexOf(t[i]) && e.push(t[i]); return e }
        n.fn = i.prototype, n.Class = i, n.Dom7 = i;
        var r = {
            addClass: function(t) {
                if (void 0 === t) return this;
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(e[i]);
                return this
            },
            removeClass: function(t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(e[i]);
                return this
            },
            hasClass: function(t) { return !!this[0] && this[0].classList.contains(t) },
            toggleClass: function(t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(e[i]);
                return this
            },
            attr: function(t, e) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                for (var n = 0; n < this.length; n += 1)
                    if (2 === i.length) this[n].setAttribute(t, e);
                    else
                        for (var s in t) this[n][s] = t[s], this[n].setAttribute(s, t[s]);
                return this
            },
            removeAttr: function(t) { for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t); return this },
            data: function(t, e) { var i; if (void 0 !== e) { for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[t] = e; return this } if (i = this[0]) return i.dom7ElementDataStorage && t in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[t] : i.getAttribute("data-" + t) || void 0 },
            transform: function(t) {
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransform = t, i.transform = t
                }
                return this
            },
            transition: function(t) {
                "string" != typeof t && (t += "ms");
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransitionDuration = t, i.transitionDuration = t
                }
                return this
            },
            on: function() {
                for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                var s = e[0],
                    r = e[1],
                    o = e[2],
                    a = e[3];

                function l(t) {
                    var e = t.target;
                    if (e) {
                        var i = t.target.dom7EventData || [];
                        if (i.indexOf(t) < 0 && i.unshift(t), n(e).is(r)) o.apply(e, i);
                        else
                            for (var s = n(e).parents(), a = 0; a < s.length; a += 1) n(s[a]).is(r) && o.apply(s[a], i)
                    }
                }

                function c(t) {
                    var e = t && t.target && t.target.dom7EventData || [];
                    e.indexOf(t) < 0 && e.unshift(t), o.apply(this, e)
                }
                "function" == typeof e[1] && (s = (t = e)[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
                for (var d, h = s.split(" "), u = 0; u < this.length; u += 1) {
                    var p = this[u];
                    if (r)
                        for (d = 0; d < h.length; d += 1) {
                            var f = h[d];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({ listener: o, proxyListener: l }), p.addEventListener(f, l, a)
                        } else
                            for (d = 0; d < h.length; d += 1) {
                                var m = h[d];
                                p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({ listener: o, proxyListener: c }), p.addEventListener(m, c, a)
                            }
                }
                return this
            },
            off: function() {
                for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                var n = e[0],
                    s = e[1],
                    r = e[2],
                    o = e[3];
                "function" == typeof e[1] && (n = (t = e)[0], r = t[1], o = t[2], s = void 0), o || (o = !1);
                for (var a = n.split(" "), l = 0; l < a.length; l += 1)
                    for (var c = a[l], d = 0; d < this.length; d += 1) {
                        var h = this[d],
                            u = void 0;
                        if (!s && h.dom7Listeners ? u = h.dom7Listeners[c] : s && h.dom7LiveListeners && (u = h.dom7LiveListeners[c]), u && u.length)
                            for (var p = u.length - 1; 0 <= p; p -= 1) {
                                var f = u[p];
                                r && f.listener === r ? (h.removeEventListener(c, f.proxyListener, o), u.splice(p, 1)) : r || (h.removeEventListener(c, f.proxyListener, o), u.splice(p, 1))
                            }
                    }
                return this
            },
            trigger: function() {
                for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
                for (var s = i[0].split(" "), r = i[1], o = 0; o < s.length; o += 1)
                    for (var a = s[o], l = 0; l < this.length; l += 1) {
                        var c = this[l],
                            d = void 0;
                        try { d = new e.CustomEvent(a, { detail: r, bubbles: !0, cancelable: !0 }) } catch (i) {
                            (d = t.createEvent("Event")).initEvent(a, !0, !0), d.detail = r
                        }
                        c.dom7EventData = i.filter(function(t, e) { return 0 < e }), c.dispatchEvent(d), c.dom7EventData = [], delete c.dom7EventData
                    }
                return this
            },
            transitionEnd: function(t) {
                var e, i = ["webkitTransitionEnd", "transitionend"],
                    n = this;

                function s(r) {
                    if (r.target === this)
                        for (t.call(this, r), e = 0; e < i.length; e += 1) n.off(i[e], s)
                }
                if (t)
                    for (e = 0; e < i.length; e += 1) n.on(i[e], s);
                return this
            },
            outerWidth: function(t) { if (0 < this.length) { if (t) { var e = this.styles(); return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null },
            outerHeight: function(t) { if (0 < this.length) { if (t) { var e = this.styles(); return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null },
            offset: function() {
                if (0 < this.length) {
                    var i = this[0],
                        n = i.getBoundingClientRect(),
                        s = t.body,
                        r = i.clientTop || s.clientTop || 0,
                        o = i.clientLeft || s.clientLeft || 0,
                        a = i === e ? e.scrollY : i.scrollTop,
                        l = i === e ? e.scrollX : i.scrollLeft;
                    return { top: n.top + a - r, left: n.left + l - o }
                }
                return null
            },
            css: function(t, i) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof t) {
                        for (n = 0; n < this.length; n += 1)
                            for (var s in t) this[n].style[s] = t[s];
                        return this
                    }
                    if (this[0]) return e.getComputedStyle(this[0], null).getPropertyValue(t)
                }
                if (2 === arguments.length && "string" == typeof t) { for (n = 0; n < this.length; n += 1) this[n].style[t] = i; return this }
                return this
            },
            each: function(t) {
                if (!t) return this;
                for (var e = 0; e < this.length; e += 1)
                    if (!1 === t.call(this[e], e, this[e])) return this;
                return this
            },
            html: function(t) { if (void 0 === t) return this[0] ? this[0].innerHTML : void 0; for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t; return this },
            text: function(t) { if (void 0 === t) return this[0] ? this[0].textContent.trim() : null; for (var e = 0; e < this.length; e += 1) this[e].textContent = t; return this },
            is: function(s) {
                var r, o, a = this[0];
                if (!a || void 0 === s) return !1;
                if ("string" == typeof s) {
                    if (a.matches) return a.matches(s);
                    if (a.webkitMatchesSelector) return a.webkitMatchesSelector(s);
                    if (a.msMatchesSelector) return a.msMatchesSelector(s);
                    for (r = n(s), o = 0; o < r.length; o += 1)
                        if (r[o] === a) return !0;
                    return !1
                }
                if (s === t) return a === t;
                if (s === e) return a === e;
                if (s.nodeType || s instanceof i) {
                    for (r = s.nodeType ? [s] : s, o = 0; o < r.length; o += 1)
                        if (r[o] === a) return !0;
                    return !1
                }
                return !1
            },
            index: function() { var t, e = this[0]; if (e) { for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1); return t } },
            eq: function(t) { if (void 0 === t) return this; var e, n = this.length; return new i(n - 1 < t ? [] : t < 0 ? (e = n + t) < 0 ? [] : [this[e]] : [this[t]]) },
            append: function() {
                for (var e, n = [], s = arguments.length; s--;) n[s] = arguments[s];
                for (var r = 0; r < n.length; r += 1) {
                    e = n[r];
                    for (var o = 0; o < this.length; o += 1)
                        if ("string" == typeof e) { var a = t.createElement("div"); for (a.innerHTML = e; a.firstChild;) this[o].appendChild(a.firstChild) } else if (e instanceof i)
                        for (var l = 0; l < e.length; l += 1) this[o].appendChild(e[l]);
                    else this[o].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                var n, s, r = this;
                for (n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) { var o = t.createElement("div"); for (o.innerHTML = e, s = o.childNodes.length - 1; 0 <= s; s -= 1) r[n].insertBefore(o.childNodes[s], r[n].childNodes[0]) } else if (e instanceof i)
                    for (s = 0; s < e.length; s += 1) r[n].insertBefore(e[s], r[n].childNodes[0]);
                else r[n].insertBefore(e, r[n].childNodes[0]);
                return this
            },
            next: function(t) { return 0 < this.length ? t ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(t) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]) },
            nextAll: function(t) {
                var e = [],
                    s = this[0];
                if (!s) return new i([]);
                for (; s.nextElementSibling;) {
                    var r = s.nextElementSibling;
                    t ? n(r).is(t) && e.push(r) : e.push(r), s = r
                }
                return new i(e)
            },
            prev: function(t) { if (0 < this.length) { var e = this[0]; return t ? e.previousElementSibling && n(e.previousElementSibling).is(t) ? new i([e.previousElementSibling]) : new i([]) : e.previousElementSibling ? new i([e.previousElementSibling]) : new i([]) } return new i([]) },
            prevAll: function(t) {
                var e = [],
                    s = this[0];
                if (!s) return new i([]);
                for (; s.previousElementSibling;) {
                    var r = s.previousElementSibling;
                    t ? n(r).is(t) && e.push(r) : e.push(r), s = r
                }
                return new i(e)
            },
            parent: function(t) { for (var e = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? n(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode)); return n(s(e)) },
            parents: function(t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var r = this[i].parentNode; r;) t ? n(r).is(t) && e.push(r) : e.push(r), r = r.parentNode;
                return n(s(e))
            },
            closest: function(t) { var e = this; return void 0 === t ? new i([]) : (e.is(t) || (e = e.parents(t).eq(0)), e) },
            find: function(t) {
                for (var e = [], n = 0; n < this.length; n += 1)
                    for (var s = this[n].querySelectorAll(t), r = 0; r < s.length; r += 1) e.push(s[r]);
                return new i(e)
            },
            children: function(t) {
                for (var e = [], r = 0; r < this.length; r += 1)
                    for (var o = this[r].childNodes, a = 0; a < o.length; a += 1) t ? 1 === o[a].nodeType && n(o[a]).is(t) && e.push(o[a]) : 1 === o[a].nodeType && e.push(o[a]);
                return new i(s(e))
            },
            remove: function() { for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]); return this },
            add: function() { for (var t = [], e = arguments.length; e--;) t[e] = arguments[e]; var i, s; for (i = 0; i < t.length; i += 1) { var r = n(t[i]); for (s = 0; s < r.length; s += 1) this[this.length] = r[s], this.length += 1 } return this },
            styles: function() { return this[0] ? e.getComputedStyle(this[0], null) : {} }
        };
        Object.keys(r).forEach(function(t) { n.fn[t] = r[t] });
        var o, a, l, c = {
                deleteProps: function(t) {
                    var e = t;
                    Object.keys(e).forEach(function(t) { try { e[t] = null } catch (t) {} try { delete e[t] } catch (t) {} })
                },
                nextTick: function(t, e) { return void 0 === e && (e = 0), setTimeout(t, e) },
                now: function() { return Date.now() },
                getTranslate: function(t, i) {
                    var n, s, r;
                    void 0 === i && (i = "x");
                    var o = e.getComputedStyle(t, null);
                    return e.WebKitCSSMatrix ? (6 < (s = o.transform || o.webkitTransform).split(",").length && (s = s.split(", ").map(function(t) { return t.replace(",", ".") }).join(", ")), r = new e.WebKitCSSMatrix("none" === s ? "" : s)) : n = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (s = e.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === i && (s = e.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
                },
                parseUrlQuery: function(t) {
                    var i, n, s, r, o = {},
                        a = t || e.location.href;
                    if ("string" == typeof a && a.length)
                        for (r = (n = (a = -1 < a.indexOf("?") ? a.replace(/\S*\?/, "") : "").split("&").filter(function(t) { return "" !== t })).length, i = 0; i < r; i += 1) s = n[i].replace(/#\S+/g, "").split("="), o[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                    return o
                },
                isObject: function(t) { return "object" == typeof t && null !== t && t.constructor && t.constructor === Object },
                extend: function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    for (var i = Object(t[0]), n = 1; n < t.length; n += 1) {
                        var s = t[n];
                        if (null != s)
                            for (var r = Object.keys(Object(s)), o = 0, a = r.length; o < a; o += 1) {
                                var l = r[o],
                                    d = Object.getOwnPropertyDescriptor(s, l);
                                void 0 !== d && d.enumerable && (c.isObject(i[l]) && c.isObject(s[l]) ? c.extend(i[l], s[l]) : !c.isObject(i[l]) && c.isObject(s[l]) ? (i[l] = {}, c.extend(i[l], s[l])) : i[l] = s[l])
                            }
                    }
                    return i
                }
            },
            d = (l = t.createElement("div"), {
                touch: e.Modernizr && !0 === e.Modernizr.touch || !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !(!e.navigator.pointerEnabled && !e.PointerEvent),
                prefixedPointerEvents: !!e.navigator.msPointerEnabled,
                transition: (a = l.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
                transforms3d: e.Modernizr && !0 === e.Modernizr.csstransforms3d || (o = l.style, "webkitPerspective" in o || "MozPerspective" in o || "OPerspective" in o || "MsPerspective" in o || "perspective" in o),
                flexbox: function() {
                    for (var t = l.style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i += 1)
                        if (e[i] in t) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: function() {
                    var t = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (t) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }),
            h = function(t) {
                void 0 === t && (t = {});
                var e = this;
                e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(function(t) { e.on(t, e.params.on[t]) })
            },
            u = { components: { configurable: !0 } };
        h.prototype.on = function(t, e, i) { var n = this; if ("function" != typeof e) return n; var s = i ? "unshift" : "push"; return t.split(" ").forEach(function(t) { n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][s](e) }), n }, h.prototype.once = function(t, e, i) {
            var n = this;
            return "function" != typeof e ? n : n.on(t, function i() {
                for (var s = [], r = arguments.length; r--;) s[r] = arguments[r];
                e.apply(n, s), n.off(t, i)
            }, i)
        }, h.prototype.off = function(t, e) { var i = this; return i.eventsListeners && t.split(" ").forEach(function(t) { void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].length && i.eventsListeners[t].forEach(function(n, s) { n === e && i.eventsListeners[t].splice(s, 1) }) }), i }, h.prototype.emit = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var i, n, s, r = this;
            return r.eventsListeners && ("string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0], n = t.slice(1, t.length), s = r) : (i = t[0].events, n = t[0].data, s = t[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(t) {
                if (r.eventsListeners && r.eventsListeners[t]) {
                    var e = [];
                    r.eventsListeners[t].forEach(function(t) { e.push(t) }), e.forEach(function(t) { t.apply(s, n) })
                }
            })), r
        }, h.prototype.useModulesParams = function(t) {
            var e = this;
            e.modules && Object.keys(e.modules).forEach(function(i) {
                var n = e.modules[i];
                n.params && c.extend(t, n.params)
            })
        }, h.prototype.useModules = function(t) {
            void 0 === t && (t = {});
            var e = this;
            e.modules && Object.keys(e.modules).forEach(function(i) {
                var n = e.modules[i],
                    s = t[i] || {};
                n.instance && Object.keys(n.instance).forEach(function(t) {
                    var i = n.instance[t];
                    e[t] = "function" == typeof i ? i.bind(e) : i
                }), n.on && e.on && Object.keys(n.on).forEach(function(t) { e.on(t, n.on[t]) }), n.create && n.create.bind(e)(s)
            })
        }, u.components.set = function(t) { this.use && this.use(t) }, h.installModule = function(t) {
            for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
            var n = this;
            n.prototype.modules || (n.prototype.modules = {});
            var s = t.name || Object.keys(n.prototype.modules).length + "_" + c.now();
            return (n.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) { n.prototype[e] = t.proto[e] }), t.static && Object.keys(t.static).forEach(function(e) { n[e] = t.static[e] }), t.install && t.install.apply(n, e), n
        }, h.use = function(t) { for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1]; var n = this; return Array.isArray(t) ? (t.forEach(function(t) { return n.installModule(t) }), n) : n.installModule.apply(n, [t].concat(e)) }, Object.defineProperties(h, u);
        var p = {
                updateSize: function() {
                    var t, e, i = this,
                        n = i.$el;
                    t = void 0 !== i.params.width ? i.params.width : n[0].clientWidth, e = void 0 !== i.params.height ? i.params.height : n[0].clientHeight, 0 === t && i.isHorizontal() || 0 === e && i.isVertical() || (t = t - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), e = e - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), c.extend(i, { width: t, height: e, size: i.isHorizontal() ? t : e }))
                },
                updateSlides: function() {
                    var t = this,
                        i = t.params,
                        n = t.$wrapperEl,
                        s = t.size,
                        r = t.rtlTranslate,
                        o = t.wrongRTL,
                        a = t.virtual && i.virtual.enabled,
                        l = a ? t.virtual.slides.length : t.slides.length,
                        h = n.children("." + t.params.slideClass),
                        u = a ? t.virtual.slides.length : h.length,
                        p = [],
                        f = [],
                        m = [],
                        g = i.slidesOffsetBefore;
                    "function" == typeof g && (g = i.slidesOffsetBefore.call(t));
                    var v = i.slidesOffsetAfter;
                    "function" == typeof v && (v = i.slidesOffsetAfter.call(t));
                    var y = t.snapGrid.length,
                        b = t.snapGrid.length,
                        w = i.spaceBetween,
                        x = -g,
                        _ = 0,
                        S = 0;
                    if (void 0 !== s) {
                        var k, E;
                        "string" == typeof w && 0 <= w.indexOf("%") && (w = parseFloat(w.replace("%", "")) / 100 * s), t.virtualSize = -w, r ? h.css({ marginLeft: "", marginTop: "" }) : h.css({ marginRight: "", marginBottom: "" }), 1 < i.slidesPerColumn && (k = Math.floor(u / i.slidesPerColumn) === u / t.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (k = Math.max(k, i.slidesPerView * i.slidesPerColumn)));
                        for (var T, C = i.slidesPerColumn, M = k / C, D = M - (i.slidesPerColumn * M - u), O = 0; O < u; O += 1) {
                            E = 0;
                            var P = h.eq(O);
                            if (1 < i.slidesPerColumn) {
                                var L = void 0,
                                    $ = void 0,
                                    I = void 0;
                                "column" === i.slidesPerColumnFill ? (I = O - ($ = Math.floor(O / C)) * C, (D < $ || $ === D && I === C - 1) && C <= (I += 1) && (I = 0, $ += 1), L = $ + I * k / C, P.css({ "-webkit-box-ordinal-group": L, "-moz-box-ordinal-group": L, "-ms-flex-order": L, "-webkit-order": L, order: L })) : $ = O - (I = Math.floor(O / M)) * M, P.css("margin-" + (t.isHorizontal() ? "top" : "left"), 0 !== I && i.spaceBetween && i.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", I)
                            }
                            if ("none" !== P.css("display")) {
                                if ("auto" === i.slidesPerView) {
                                    var z = e.getComputedStyle(P[0], null),
                                        Y = P[0].style.transform,
                                        A = P[0].style.webkitTransform;
                                    Y && (P[0].style.transform = "none"), A && (P[0].style.webkitTransform = "none"), E = i.roundLengths ? t.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0) : t.isHorizontal() ? P[0].getBoundingClientRect().width + parseFloat(z.getPropertyValue("margin-left")) + parseFloat(z.getPropertyValue("margin-right")) : P[0].getBoundingClientRect().height + parseFloat(z.getPropertyValue("margin-top")) + parseFloat(z.getPropertyValue("margin-bottom")), Y && (P[0].style.transform = Y), A && (P[0].style.webkitTransform = A), i.roundLengths && (E = Math.floor(E))
                                } else E = (s - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (E = Math.floor(E)), h[O] && (t.isHorizontal() ? h[O].style.width = E + "px" : h[O].style.height = E + "px");
                                h[O] && (h[O].swiperSlideSize = E), m.push(E), i.centeredSlides ? (x = x + E / 2 + _ / 2 + w, 0 === _ && 0 !== O && (x = x - s / 2 - w), 0 === O && (x = x - s / 2 - w), Math.abs(x) < .001 && (x = 0), i.roundLengths && (x = Math.floor(x)), S % i.slidesPerGroup == 0 && p.push(x), f.push(x)) : (i.roundLengths && (x = Math.floor(x)), S % i.slidesPerGroup == 0 && p.push(x), f.push(x), x = x + E + w), t.virtualSize += E + w, _ = E, S += 1
                            }
                        }
                        if (t.virtualSize = Math.max(t.virtualSize, s) + v, r && o && ("slide" === i.effect || "coverflow" === i.effect) && n.css({ width: t.virtualSize + i.spaceBetween + "px" }), d.flexbox && !i.setWrapperSize || (t.isHorizontal() ? n.css({ width: t.virtualSize + i.spaceBetween + "px" }) : n.css({ height: t.virtualSize + i.spaceBetween + "px" })), 1 < i.slidesPerColumn && (t.virtualSize = (E + i.spaceBetween) * k, t.virtualSize = Math.ceil(t.virtualSize / i.slidesPerColumn) - i.spaceBetween, t.isHorizontal() ? n.css({ width: t.virtualSize + i.spaceBetween + "px" }) : n.css({ height: t.virtualSize + i.spaceBetween + "px" }), i.centeredSlides)) {
                            T = [];
                            for (var F = 0; F < p.length; F += 1) {
                                var j = p[F];
                                i.roundLengths && (j = Math.floor(j)), p[F] < t.virtualSize + p[0] && T.push(j)
                            }
                            p = T
                        }
                        if (!i.centeredSlides) {
                            T = [];
                            for (var N = 0; N < p.length; N += 1) {
                                var R = p[N];
                                i.roundLengths && (R = Math.floor(R)), p[N] <= t.virtualSize - s && T.push(R)
                            }
                            p = T, 1 < Math.floor(t.virtualSize - s) - Math.floor(p[p.length - 1]) && p.push(t.virtualSize - s)
                        }
                        if (0 === p.length && (p = [0]), 0 !== i.spaceBetween && (t.isHorizontal() ? r ? h.css({ marginLeft: w + "px" }) : h.css({ marginRight: w + "px" }) : h.css({ marginBottom: w + "px" })), i.centerInsufficientSlides) {
                            var W = 0;
                            if (m.forEach(function(t) { W += t + (i.spaceBetween ? i.spaceBetween : 0) }), (W -= i.spaceBetween) < s) {
                                var H = (s - W) / 2;
                                p.forEach(function(t, e) { p[e] = t - H }), f.forEach(function(t, e) { f[e] = t + H })
                            }
                        }
                        c.extend(t, { slides: h, snapGrid: p, slidesGrid: f, slidesSizesGrid: m }), u !== l && t.emit("slidesLengthChange"), p.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== b && t.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(t) {
                    var e, i = this,
                        n = [],
                        s = 0;
                    if ("number" == typeof t ? i.setTransition(t) : !0 === t && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                        for (e = 0; e < Math.ceil(i.params.slidesPerView); e += 1) {
                            var r = i.activeIndex + e;
                            if (r > i.slides.length) break;
                            n.push(i.slides.eq(r)[0])
                        } else n.push(i.slides.eq(i.activeIndex)[0]);
                    for (e = 0; e < n.length; e += 1)
                        if (void 0 !== n[e]) {
                            var o = n[e].offsetHeight;
                            s = s < o ? o : s
                        }
                    s && i.$wrapperEl.css("height", s + "px")
                },
                updateSlidesOffset: function() { for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop },
                updateSlidesProgress: function(t) {
                    void 0 === t && (t = this && this.translate || 0);
                    var e = this,
                        i = e.params,
                        s = e.slides,
                        r = e.rtlTranslate;
                    if (0 !== s.length) {
                        void 0 === s[0].swiperSlideOffset && e.updateSlidesOffset();
                        var o = -t;
                        r && (o = t), s.removeClass(i.slideVisibleClass), e.visibleSlidesIndexes = [], e.visibleSlides = [];
                        for (var a = 0; a < s.length; a += 1) {
                            var l = s[a],
                                c = (o + (i.centeredSlides ? e.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                            if (i.watchSlidesVisibility) {
                                var d = -(o - l.swiperSlideOffset),
                                    h = d + e.slidesSizesGrid[a];
                                (0 <= d && d < e.size || 0 < h && h <= e.size || d <= 0 && h >= e.size) && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(a), s.eq(a).addClass(i.slideVisibleClass))
                            }
                            l.progress = r ? -c : c
                        }
                        e.visibleSlides = n(e.visibleSlides)
                    }
                },
                updateProgress: function(t) {
                    void 0 === t && (t = this && this.translate || 0);
                    var e = this,
                        i = e.params,
                        n = e.maxTranslate() - e.minTranslate(),
                        s = e.progress,
                        r = e.isBeginning,
                        o = e.isEnd,
                        a = r,
                        l = o;
                    0 === n ? o = r = !(s = 0) : (r = (s = (t - e.minTranslate()) / n) <= 0, o = 1 <= s), c.extend(e, { progress: s, isBeginning: r, isEnd: o }), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), o && !l && e.emit("reachEnd toEdge"), (a && !r || l && !o) && e.emit("fromEdge"), e.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    var t, e = this,
                        i = e.slides,
                        n = e.params,
                        s = e.$wrapperEl,
                        r = e.activeIndex,
                        o = e.realIndex,
                        a = e.virtual && n.virtual.enabled;
                    i.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (t = a ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : i.eq(r)).addClass(n.slideActiveClass), n.loop && (t.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(n.slideDuplicateActiveClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(n.slideDuplicateActiveClass));
                    var l = t.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
                    var c = t.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === c.length && (c = i.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(t) {
                    var e, i = this,
                        n = i.rtlTranslate ? i.translate : -i.translate,
                        s = i.slidesGrid,
                        r = i.snapGrid,
                        o = i.params,
                        a = i.activeIndex,
                        l = i.realIndex,
                        d = i.snapIndex,
                        h = t;
                    if (void 0 === h) {
                        for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? n >= s[u] && n < s[u + 1] - (s[u + 1] - s[u]) / 2 ? h = u : n >= s[u] && n < s[u + 1] && (h = u + 1) : n >= s[u] && (h = u);
                        o.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
                    }
                    if ((e = 0 <= r.indexOf(n) ? r.indexOf(n) : Math.floor(h / o.slidesPerGroup)) >= r.length && (e = r.length - 1), h !== a) {
                        var p = parseInt(i.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                        c.extend(i, { snapIndex: e, realIndex: p, previousIndex: a, activeIndex: h }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== p && i.emit("realIndexChange"), i.emit("slideChange")
                    } else e !== d && (i.snapIndex = e, i.emit("snapIndexChange"))
                },
                updateClickedSlide: function(t) {
                    var e = this,
                        i = e.params,
                        s = n(t.target).closest("." + i.slideClass)[0],
                        r = !1;
                    if (s)
                        for (var o = 0; o < e.slides.length; o += 1) e.slides[o] === s && (r = !0);
                    if (!s || !r) return e.clickedSlide = void 0, void(e.clickedIndex = void 0);
                    e.clickedSlide = s, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(n(s).attr("data-swiper-slide-index"), 10) : e.clickedIndex = n(s).index(), i.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
                }
            },
            f = {
                getTranslate: function(t) {
                    void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                    var e = this.params,
                        i = this.rtlTranslate,
                        n = this.translate,
                        s = this.$wrapperEl;
                    if (e.virtualTranslate) return i ? -n : n;
                    var r = c.getTranslate(s[0], t);
                    return i && (r = -r), r || 0
                },
                setTranslate: function(t, e) {
                    var i = this,
                        n = i.rtlTranslate,
                        s = i.params,
                        r = i.$wrapperEl,
                        o = i.progress,
                        a = 0,
                        l = 0;
                    i.isHorizontal() ? a = n ? -t : t : l = t, s.roundLengths && (a = Math.floor(a), l = Math.floor(l)), s.virtualTranslate || (d.transforms3d ? r.transform("translate3d(" + a + "px, " + l + "px, 0px)") : r.transform("translate(" + a + "px, " + l + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? a : l;
                    var c = i.maxTranslate() - i.minTranslate();
                    (0 === c ? 0 : (t - i.minTranslate()) / c) !== o && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
                },
                minTranslate: function() { return -this.snapGrid[0] },
                maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] }
            },
            m = {
                slideTo: function(t, e, i, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                    var s = this,
                        r = t;
                    r < 0 && (r = 0);
                    var o = s.params,
                        a = s.snapGrid,
                        l = s.slidesGrid,
                        c = s.previousIndex,
                        h = s.activeIndex,
                        u = s.rtlTranslate;
                    if (s.animating && o.preventInteractionOnTransition) return !1;
                    var p = Math.floor(r / o.slidesPerGroup);
                    p >= a.length && (p = a.length - 1), (h || o.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
                    var f, m = -a[p];
                    if (s.updateProgress(m), o.normalizeSlideIndex)
                        for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
                    if (s.initialized && r !== h) { if (!s.allowSlideNext && m < s.translate && m < s.minTranslate()) return !1; if (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (h || 0) !== r) return !1 }
                    return f = h < r ? "next" : r < h ? "prev" : "reset", u && -m === s.translate || !u && m === s.translate ? (s.updateActiveIndex(r), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(m), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== e && d.transition ? (s.setTransition(e), s.setTranslate(m), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(t) { s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, f)) }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(m), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0)
                },
                slideToLoop: function(t, e, i, n) { void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0); var s = t; return this.params.loop && (s += this.loopedSlides), this.slideTo(s, e, i, n) },
                slideNext: function(t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var n = this,
                        s = n.params,
                        r = n.animating;
                    return s.loop ? !r && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + s.slidesPerGroup, t, e, i)) : n.slideTo(n.activeIndex + s.slidesPerGroup, t, e, i)
                },
                slidePrev: function(t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var n = this,
                        s = n.params,
                        r = n.animating,
                        o = n.snapGrid,
                        a = n.slidesGrid,
                        l = n.rtlTranslate;
                    if (s.loop) {
                        if (r) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }

                    function c(t) { return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t) }
                    var d, h = c(l ? n.translate : -n.translate),
                        u = o.map(function(t) { return c(t) }),
                        p = (a.map(function(t) { return c(t) }), o[u.indexOf(h)], o[u.indexOf(h) - 1]);
                    return void 0 !== p && (d = a.indexOf(p)) < 0 && (d = n.activeIndex - 1), n.slideTo(d, t, e, i)
                },
                slideReset: function(t, e, i) { return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i) },
                slideToClosest: function(t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var n = this,
                        s = n.activeIndex,
                        r = Math.floor(s / n.params.slidesPerGroup);
                    if (r < n.snapGrid.length - 1) {
                        var o = n.rtlTranslate ? n.translate : -n.translate,
                            a = n.snapGrid[r];
                        (n.snapGrid[r + 1] - a) / 2 < o - a && (s = n.params.slidesPerGroup)
                    }
                    return n.slideTo(s, t, e, i)
                },
                slideToClickedSlide: function() {
                    var t, e = this,
                        i = e.params,
                        s = e.$wrapperEl,
                        r = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView,
                        o = e.clickedIndex;
                    if (i.loop) {
                        if (e.animating) return;
                        t = parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < e.loopedSlides - r / 2 || o > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), o = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), c.nextTick(function() { e.slideTo(o) })) : e.slideTo(o) : o > e.slides.length - r ? (e.loopFix(), o = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), c.nextTick(function() { e.slideTo(o) })) : e.slideTo(o)
                    } else e.slideTo(o)
                }
            },
            g = {
                loopCreate: function() {
                    var e = this,
                        i = e.params,
                        s = e.$wrapperEl;
                    s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var r = s.children("." + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var o = i.slidesPerGroup - r.length % i.slidesPerGroup;
                        if (o !== i.slidesPerGroup) {
                            for (var a = 0; a < o; a += 1) {
                                var l = n(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                s.append(l)
                            }
                            r = s.children("." + i.slideClass)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), e.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    var c = [],
                        d = [];
                    r.each(function(t, i) {
                        var s = n(i);
                        t < e.loopedSlides && d.push(i), t < r.length && t >= r.length - e.loopedSlides && c.push(i), s.attr("data-swiper-slide-index", t)
                    });
                    for (var h = 0; h < d.length; h += 1) s.append(n(d[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var u = c.length - 1; 0 <= u; u -= 1) s.prepend(n(c[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function() {
                    var t, e = this,
                        i = e.params,
                        n = e.activeIndex,
                        s = e.slides,
                        r = e.loopedSlides,
                        o = e.allowSlidePrev,
                        a = e.allowSlideNext,
                        l = e.snapGrid,
                        c = e.rtlTranslate;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    var d = -l[n] - e.getTranslate();
                    n < r ? (t = s.length - 3 * r + n, t += r, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((c ? -e.translate : e.translate) - d)) : ("auto" === i.slidesPerView && 2 * r <= n || n >= s.length - r) && (t = -s.length + n + r, t += r, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((c ? -e.translate : e.translate) - d)), e.allowSlidePrev = o, e.allowSlideNext = a
                },
                loopDestroy: function() {
                    var t = this.$wrapperEl,
                        e = this.params,
                        i = this.slides;
                    t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            v = {
                setGrabCursor: function(t) {
                    if (!(d.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                        var e = this.el;
                        e.style.cursor = "move", e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", e.style.cursor = t ? "-moz-grabbin" : "-moz-grab", e.style.cursor = t ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() { d.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "") }
            },
            y = {
                appendSlide: function(t) {
                    var e = this,
                        i = e.$wrapperEl,
                        n = e.params;
                    if (n.loop && e.loopDestroy(), "object" == typeof t && "length" in t)
                        for (var s = 0; s < t.length; s += 1) t[s] && i.append(t[s]);
                    else i.append(t);
                    n.loop && e.loopCreate(), n.observer && d.observer || e.update()
                },
                prependSlide: function(t) {
                    var e = this,
                        i = e.params,
                        n = e.$wrapperEl,
                        s = e.activeIndex;
                    i.loop && e.loopDestroy();
                    var r = s + 1;
                    if ("object" == typeof t && "length" in t) {
                        for (var o = 0; o < t.length; o += 1) t[o] && n.prepend(t[o]);
                        r = s + t.length
                    } else n.prepend(t);
                    i.loop && e.loopCreate(), i.observer && d.observer || e.update(), e.slideTo(r, 0, !1)
                },
                addSlide: function(t, e) {
                    var i = this,
                        n = i.$wrapperEl,
                        s = i.params,
                        r = i.activeIndex;
                    s.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = n.children("." + s.slideClass));
                    var o = i.slides.length;
                    if (t <= 0) i.prependSlide(e);
                    else if (o <= t) i.appendSlide(e);
                    else {
                        for (var a = t < r ? r + 1 : r, l = [], c = o - 1; t <= c; c -= 1) {
                            var h = i.slides.eq(c);
                            h.remove(), l.unshift(h)
                        }
                        if ("object" == typeof e && "length" in e) {
                            for (var u = 0; u < e.length; u += 1) e[u] && n.append(e[u]);
                            a = t < r ? r + e.length : r
                        } else n.append(e);
                        for (var p = 0; p < l.length; p += 1) n.append(l[p]);
                        s.loop && i.loopCreate(), s.observer && d.observer || i.update(), s.loop ? i.slideTo(a + i.loopedSlides, 0, !1) : i.slideTo(a, 0, !1)
                    }
                },
                removeSlide: function(t) {
                    var e = this,
                        i = e.params,
                        n = e.$wrapperEl,
                        s = e.activeIndex;
                    i.loop && (s -= e.loopedSlides, e.loopDestroy(), e.slides = n.children("." + i.slideClass));
                    var r, o = s;
                    if ("object" == typeof t && "length" in t) {
                        for (var a = 0; a < t.length; a += 1) r = t[a], e.slides[r] && e.slides.eq(r).remove(), r < o && (o -= 1);
                        o = Math.max(o, 0)
                    } else r = t, e.slides[r] && e.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
                    i.loop && e.loopCreate(), i.observer && d.observer || e.update(), i.loop ? e.slideTo(o + e.loopedSlides, 0, !1) : e.slideTo(o, 0, !1)
                },
                removeAllSlides: function() {
                    for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                    this.removeSlide(t)
                }
            },
            b = function() {
                var i = e.navigator.userAgent,
                    n = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: e.cordova || e.phonegap, phonegap: e.cordova || e.phonegap },
                    s = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                    o = i.match(/(iPad).*OS\s([\d_]+)/),
                    a = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                    l = !o && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (s && (n.os = "windows", n.osVersion = s[2], n.windows = !0), r && !s && (n.os = "android", n.osVersion = r[2], n.android = !0, n.androidChrome = 0 <= i.toLowerCase().indexOf("chrome")), (o || l || a) && (n.os = "ios", n.ios = !0), l && !a && (n.osVersion = l[2].replace(/_/g, "."), n.iphone = !0), o && (n.osVersion = o[2].replace(/_/g, "."), n.ipad = !0), a && (n.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && 0 <= i.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (l || o || a) && i.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) {
                    var c = n.osVersion.split("."),
                        d = t.querySelector('meta[name="viewport"]');
                    n.minimalUi = !n.webView && (a || l) && (1 * c[0] == 7 ? 1 <= 1 * c[1] : 7 < 1 * c[0]) && d && 0 <= d.getAttribute("content").indexOf("minimal-ui")
                }
                return n.pixelRatio = e.devicePixelRatio || 1, n
            }();

        function w() {
            var t = this,
                e = t.params,
                i = t.el;
            if (!i || 0 !== i.offsetWidth) {
                e.breakpoints && t.setBreakpoint();
                var n = t.allowSlideNext,
                    s = t.allowSlidePrev,
                    r = t.snapGrid;
                if (t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), e.freeMode) {
                    var o = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses(), e.autoHeight && t.updateAutoHeight()
                } else t.updateSlidesClasses(), ("auto" === e.slidesPerView || 1 < e.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0);
                t.allowSlidePrev = s, t.allowSlideNext = n, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
            }
        }
        var x, _ = {
                attachEvents: function() {
                    var i = this,
                        s = i.params,
                        r = i.touchEvents,
                        o = i.el,
                        a = i.wrapperEl;
                    i.onTouchStart = function(i) {
                        var s = this,
                            r = s.touchEventsData,
                            o = s.params,
                            a = s.touches;
                        if (!s.animating || !o.preventInteractionOnTransition) {
                            var l = i;
                            if (l.originalEvent && (l = l.originalEvent), r.isTouchEvent = "touchstart" === l.type, (r.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!r.isTouchEvent && "button" in l && 0 < l.button || r.isTouched && r.isMoved))
                                if (o.noSwiping && n(l.target).closest(o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass)[0]) s.allowClick = !0;
                                else if (!o.swipeHandler || n(l).closest(o.swipeHandler)[0]) {
                                a.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, a.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                var d = a.currentX,
                                    h = a.currentY,
                                    u = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                                    p = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                                if (!u || !(d <= p || d >= e.screen.width - p)) {
                                    if (c.extend(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), a.startX = d, a.startY = h, r.touchStartTime = c.now(), s.allowClick = !0, s.updateSize(), s.swipeDirection = void 0, 0 < o.threshold && (r.allowThresholdMove = !1), "touchstart" !== l.type) {
                                        var f = !0;
                                        n(l.target).is(r.formElements) && (f = !1), t.activeElement && n(t.activeElement).is(r.formElements) && t.activeElement !== l.target && t.activeElement.blur(), f && s.allowTouchMove && o.touchStartPreventDefault && l.preventDefault()
                                    }
                                    s.emit("touchStart", l)
                                }
                            }
                        }
                    }.bind(i), i.onTouchMove = function(e) {
                        var i = this,
                            s = i.touchEventsData,
                            r = i.params,
                            o = i.touches,
                            a = i.rtlTranslate,
                            l = e;
                        if (l.originalEvent && (l = l.originalEvent), s.isTouched) {
                            if (!s.isTouchEvent || "mousemove" !== l.type) {
                                var d = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                                    h = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                if (l.preventedByNestedSwiper) return o.startX = d, void(o.startY = h);
                                if (!i.allowTouchMove) return i.allowClick = !1, void(s.isTouched && (c.extend(o, { startX: d, startY: h, currentX: d, currentY: h }), s.touchStartTime = c.now()));
                                if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                                    if (i.isVertical()) { if (h < o.startY && i.translate <= i.maxTranslate() || h > o.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1) } else if (d < o.startX && i.translate <= i.maxTranslate() || d > o.startX && i.translate >= i.minTranslate()) return;
                                if (s.isTouchEvent && t.activeElement && l.target === t.activeElement && n(l.target).is(s.formElements)) return s.isMoved = !0, void(i.allowClick = !1);
                                if (s.allowTouchCallbacks && i.emit("touchMove", l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                                    o.currentX = d, o.currentY = h;
                                    var u, p = o.currentX - o.startX,
                                        f = o.currentY - o.startY;
                                    if (!(i.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < i.params.threshold))
                                        if (void 0 === s.isScrolling && (i.isHorizontal() && o.currentY === o.startY || i.isVertical() && o.currentX === o.startX ? s.isScrolling = !1 : 25 <= p * p + f * f && (u = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, s.isScrolling = i.isHorizontal() ? u > r.touchAngle : 90 - u > r.touchAngle)), s.isScrolling && i.emit("touchMoveOpposite", l), void 0 === s.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (s.startMoving = !0)), s.isScrolling) s.isTouched = !1;
                                        else if (s.startMoving) {
                                        i.allowClick = !1, l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation(), s.isMoved || (r.loop && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), s.isMoved = !0;
                                        var m = i.isHorizontal() ? p : f;
                                        o.diff = m, m *= r.touchRatio, a && (m = -m), i.swipeDirection = 0 < m ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
                                        var g = !0,
                                            v = r.resistanceRatio;
                                        if (r.touchReleaseOnEdges && (v = 0), 0 < m && s.currentTranslate > i.minTranslate() ? (g = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + s.startTranslate + m, v))) : m < 0 && s.currentTranslate < i.maxTranslate() && (g = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - s.startTranslate - m, v))), g && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), 0 < r.threshold) { if (!(Math.abs(m) > r.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate); if (!s.allowThresholdMove) return s.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, s.currentTranslate = s.startTranslate, void(o.diff = i.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY) }
                                        r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && (0 === s.velocities.length && s.velocities.push({ position: o[i.isHorizontal() ? "startX" : "startY"], time: s.touchStartTime }), s.velocities.push({ position: o[i.isHorizontal() ? "currentX" : "currentY"], time: c.now() })), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
                                    }
                                }
                            }
                        } else s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l)
                    }.bind(i), i.onTouchEnd = function(t) {
                        var e = this,
                            i = e.touchEventsData,
                            n = e.params,
                            s = e.touches,
                            r = e.rtlTranslate,
                            o = e.$wrapperEl,
                            a = e.slidesGrid,
                            l = e.snapGrid,
                            d = t;
                        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                        n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                        var h, u = c.now(),
                            p = u - i.touchStartTime;
                        if (e.allowClick && (e.updateClickedSlide(d), e.emit("tap", d), p < 300 && 300 < u - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = c.nextTick(function() { e && !e.destroyed && e.emit("click", d) }, 300)), p < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), e.emit("doubleTap", d))), i.lastClickTime = c.now(), c.nextTick(function() { e.destroyed || (e.allowClick = !0) }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = n.followFinger ? r ? e.translate : -e.translate : -i.currentTranslate, n.freeMode) {
                            if (h < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                            if (h > -e.maxTranslate()) return void(e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
                            if (n.freeModeMomentum) {
                                if (1 < i.velocities.length) {
                                    var f = i.velocities.pop(),
                                        m = i.velocities.pop(),
                                        g = f.position - m.position,
                                        v = f.time - m.time;
                                    e.velocity = g / v, e.velocity /= 2, Math.abs(e.velocity) < n.freeModeMinimumVelocity && (e.velocity = 0), (150 < v || 300 < c.now() - f.time) && (e.velocity = 0)
                                } else e.velocity = 0;
                                e.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                var y = 1e3 * n.freeModeMomentumRatio,
                                    b = e.velocity * y,
                                    w = e.translate + b;
                                r && (w = -w);
                                var x, _, S = !1,
                                    k = 20 * Math.abs(e.velocity) * n.freeModeMomentumBounceRatio;
                                if (w < e.maxTranslate()) n.freeModeMomentumBounce ? (w + e.maxTranslate() < -k && (w = e.maxTranslate() - k), x = e.maxTranslate(), S = !0, i.allowMomentumBounce = !0) : w = e.maxTranslate(), n.loop && n.centeredSlides && (_ = !0);
                                else if (w > e.minTranslate()) n.freeModeMomentumBounce ? (w - e.minTranslate() > k && (w = e.minTranslate() + k), x = e.minTranslate(), S = !0, i.allowMomentumBounce = !0) : w = e.minTranslate(), n.loop && n.centeredSlides && (_ = !0);
                                else if (n.freeModeSticky) {
                                    for (var E, T = 0; T < l.length; T += 1)
                                        if (l[T] > -w) { E = T; break }
                                    w = -(w = Math.abs(l[E] - w) < Math.abs(l[E - 1] - w) || "next" === e.swipeDirection ? l[E] : l[E - 1])
                                }
                                if (_ && e.once("transitionEnd", function() { e.loopFix() }), 0 !== e.velocity) y = r ? Math.abs((-w - e.translate) / e.velocity) : Math.abs((w - e.translate) / e.velocity);
                                else if (n.freeModeSticky) return void e.slideToClosest();
                                n.freeModeMomentumBounce && S ? (e.updateProgress(x), e.setTransition(y), e.setTranslate(w), e.transitionStart(!0, e.swipeDirection), e.animating = !0, o.transitionEnd(function() { e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(n.speed), e.setTranslate(x), o.transitionEnd(function() { e && !e.destroyed && e.transitionEnd() })) })) : e.velocity ? (e.updateProgress(w), e.setTransition(y), e.setTranslate(w), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, o.transitionEnd(function() { e && !e.destroyed && e.transitionEnd() }))) : e.updateProgress(w), e.updateActiveIndex(), e.updateSlidesClasses()
                            } else if (n.freeModeSticky) return void e.slideToClosest();
                            (!n.freeModeMomentum || p >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                        } else { for (var C = 0, M = e.slidesSizesGrid[0], D = 0; D < a.length; D += n.slidesPerGroup) void 0 !== a[D + n.slidesPerGroup] ? h >= a[D] && h < a[D + n.slidesPerGroup] && (M = a[(C = D) + n.slidesPerGroup] - a[D]) : h >= a[D] && (C = D, M = a[a.length - 1] - a[a.length - 2]); var O = (h - a[C]) / M; if (p > n.longSwipesMs) { if (!n.longSwipes) return void e.slideTo(e.activeIndex); "next" === e.swipeDirection && (O >= n.longSwipesRatio ? e.slideTo(C + n.slidesPerGroup) : e.slideTo(C)), "prev" === e.swipeDirection && (O > 1 - n.longSwipesRatio ? e.slideTo(C + n.slidesPerGroup) : e.slideTo(C)) } else { if (!n.shortSwipes) return void e.slideTo(e.activeIndex); "next" === e.swipeDirection && e.slideTo(C + n.slidesPerGroup), "prev" === e.swipeDirection && e.slideTo(C) } }
                    }.bind(i), i.onClick = function(t) { this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation())) }.bind(i);
                    var l = "container" === s.touchEventsTarget ? o : a,
                        h = !!s.nested;
                    if (d.touch || !d.pointerEvents && !d.prefixedPointerEvents) {
                        if (d.touch) {
                            var u = !("touchstart" !== r.start || !d.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };
                            l.addEventListener(r.start, i.onTouchStart, u), l.addEventListener(r.move, i.onTouchMove, d.passiveListener ? { passive: !1, capture: h } : h), l.addEventListener(r.end, i.onTouchEnd, u)
                        }(s.simulateTouch && !b.ios && !b.android || s.simulateTouch && !d.touch && b.ios) && (l.addEventListener("mousedown", i.onTouchStart, !1), t.addEventListener("mousemove", i.onTouchMove, h), t.addEventListener("mouseup", i.onTouchEnd, !1))
                    } else l.addEventListener(r.start, i.onTouchStart, !1), t.addEventListener(r.move, i.onTouchMove, h), t.addEventListener(r.end, i.onTouchEnd, !1);
                    (s.preventClicks || s.preventClicksPropagation) && l.addEventListener("click", i.onClick, !0), i.on(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", w, !0)
                },
                detachEvents: function() {
                    var e = this,
                        i = e.params,
                        n = e.touchEvents,
                        s = e.el,
                        r = e.wrapperEl,
                        o = "container" === i.touchEventsTarget ? s : r,
                        a = !!i.nested;
                    if (d.touch || !d.pointerEvents && !d.prefixedPointerEvents) {
                        if (d.touch) {
                            var l = !("onTouchStart" !== n.start || !d.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                            o.removeEventListener(n.start, e.onTouchStart, l), o.removeEventListener(n.move, e.onTouchMove, a), o.removeEventListener(n.end, e.onTouchEnd, l)
                        }(i.simulateTouch && !b.ios && !b.android || i.simulateTouch && !d.touch && b.ios) && (o.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, a), t.removeEventListener("mouseup", e.onTouchEnd, !1))
                    } else o.removeEventListener(n.start, e.onTouchStart, !1), t.removeEventListener(n.move, e.onTouchMove, a), t.removeEventListener(n.end, e.onTouchEnd, !1);
                    (i.preventClicks || i.preventClicksPropagation) && o.removeEventListener("click", e.onClick, !0), e.off(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", w)
                }
            },
            S = {
                setBreakpoint: function() {
                    var t = this,
                        e = t.activeIndex,
                        i = t.initialized,
                        n = t.loopedSlides;
                    void 0 === n && (n = 0);
                    var s = t.params,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var o = t.getBreakpoint(r);
                        if (o && t.currentBreakpoint !== o) {
                            var a = o in r ? r[o] : t.originalParams,
                                l = s.loop && a.slidesPerView !== s.slidesPerView;
                            c.extend(t.params, a), c.extend(t, { allowTouchMove: t.params.allowTouchMove, allowSlideNext: t.params.allowSlideNext, allowSlidePrev: t.params.allowSlidePrev }), t.currentBreakpoint = o, l && i && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - n + t.loopedSlides, 0, !1)), t.emit("breakpoint", a)
                        }
                    }
                },
                getBreakpoint: function(t) {
                    if (t) {
                        var i = !1,
                            n = [];
                        Object.keys(t).forEach(function(t) { n.push(t) }), n.sort(function(t, e) { return parseInt(t, 10) - parseInt(e, 10) });
                        for (var s = 0; s < n.length; s += 1) {
                            var r = n[s];
                            this.params.breakpointsInverse ? r <= e.innerWidth && (i = r) : r >= e.innerWidth && !i && (i = r)
                        }
                        return i || "max"
                    }
                }
            },
            k = { isIE: !!e.navigator.userAgent.match(/Trident/g) || !!e.navigator.userAgent.match(/MSIE/g), isEdge: !!e.navigator.userAgent.match(/Edge/g), isSafari: (x = e.navigator.userAgent.toLowerCase(), 0 <= x.indexOf("safari") && x.indexOf("chrome") < 0 && x.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) },
            E = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsInverse: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchStartPreventDefault: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
            T = {
                update: p,
                translate: f,
                transition: {
                    setTransition: function(t, e) { this.$wrapperEl.transition(t), this.emit("setTransition", t, e) },
                    transitionStart: function(t, e) {
                        void 0 === t && (t = !0);
                        var i = this,
                            n = i.activeIndex,
                            s = i.params,
                            r = i.previousIndex;
                        s.autoHeight && i.updateAutoHeight();
                        var o = e;
                        if (o || (o = r < n ? "next" : n < r ? "prev" : "reset"), i.emit("transitionStart"), t && n !== r) {
                            if ("reset" === o) return void i.emit("slideResetTransitionStart");
                            i.emit("slideChangeTransitionStart"), "next" === o ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                        }
                    },
                    transitionEnd: function(t, e) {
                        void 0 === t && (t = !0);
                        var i = this,
                            n = i.activeIndex,
                            s = i.previousIndex;
                        i.animating = !1, i.setTransition(0);
                        var r = e;
                        if (r || (r = s < n ? "next" : n < s ? "prev" : "reset"), i.emit("transitionEnd"), t && n !== s) {
                            if ("reset" === r) return void i.emit("slideResetTransitionEnd");
                            i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                        }
                    }
                },
                slide: m,
                loop: g,
                grabCursor: v,
                manipulation: y,
                events: _,
                breakpoints: S,
                checkOverflow: {
                    checkOverflow: function() {
                        var t = this,
                            e = t.isLocked;
                        t.isLocked = 1 === t.snapGrid.length, t.allowSlideNext = !t.isLocked, t.allowSlidePrev = !t.isLocked, e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"), e && e !== t.isLocked && (t.isEnd = !1, t.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var t = this.classNames,
                            e = this.params,
                            i = this.rtl,
                            n = this.$el,
                            s = [];
                        s.push(e.direction), e.freeMode && s.push("free-mode"), d.flexbox || s.push("no-flexbox"), e.autoHeight && s.push("autoheight"), i && s.push("rtl"), 1 < e.slidesPerColumn && s.push("multirow"), b.android && s.push("android"), b.ios && s.push("ios"), (k.isIE || k.isEdge) && (d.pointerEvents || d.prefixedPointerEvents) && s.push("wp8-" + e.direction), s.forEach(function(i) { t.push(e.containerModifierClass + i) }), n.addClass(t.join(" "))
                    },
                    removeClasses: function() {
                        var t = this.$el,
                            e = this.classNames;
                        t.removeClass(e.join(" "))
                    }
                },
                images: {
                    loadImage: function(t, i, n, s, r, o) {
                        var a;

                        function l() { o && o() }
                        t.complete && r ? l() : i ? ((a = new e.Image).onload = l, a.onerror = l, s && (a.sizes = s), n && (a.srcset = n), i && (a.src = i)) : l()
                    },
                    preloadImages: function() {
                        var t = this;

                        function e() { null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady"))) }
                        t.imagesToLoad = t.$el.find("img");
                        for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                            var n = t.imagesToLoad[i];
                            t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
                        }
                    }
                }
            },
            C = {},
            M = function(t) {
                function e() {
                    for (var i, s, r, o = [], a = arguments.length; a--;) o[a] = arguments[a];
                    1 === o.length && o[0].constructor && o[0].constructor === Object ? r = o[0] : (s = (i = o)[0], r = i[1]), r || (r = {}), r = c.extend({}, r), s && !r.el && (r.el = s), t.call(this, r), Object.keys(T).forEach(function(t) { Object.keys(T[t]).forEach(function(i) { e.prototype[i] || (e.prototype[i] = T[t][i]) }) });
                    var l = this;
                    void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(t) {
                        var e = l.modules[t];
                        if (e.params) {
                            var i = Object.keys(e.params)[0],
                                n = e.params[i];
                            if ("object" != typeof n || null === n) return;
                            if (!(i in r && "enabled" in n)) return;
                            !0 === r[i] && (r[i] = { enabled: !0 }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 })
                        }
                    });
                    var h = c.extend({}, E);
                    l.useModulesParams(h), l.params = c.extend({}, h, C, r), l.originalParams = c.extend({}, l.params), l.passedParams = c.extend({}, r);
                    var u = (l.$ = n)(l.params.el);
                    if (s = u[0]) {
                        if (1 < u.length) {
                            var p = [];
                            return u.each(function(t, i) {
                                var n = c.extend({}, r, { el: i });
                                p.push(new e(n))
                            }), p
                        }
                        s.swiper = l, u.data("swiper", l);
                        var f, m, g = u.children("." + l.params.wrapperClass);
                        return c.extend(l, { $el: u, el: s, $wrapperEl: g, wrapperEl: g[0], classNames: [], slides: n(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === l.params.direction }, isVertical: function() { return "vertical" === l.params.direction }, rtl: "rtl" === s.dir.toLowerCase() || "rtl" === u.css("direction"), rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === u.css("direction")), wrongRTL: "-webkit-box" === g.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: l.params.allowSlideNext, allowSlidePrev: l.params.allowSlidePrev, touchEvents: (f = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], d.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : d.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = { start: f[0], move: f[1], end: f[2] }, l.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }, d.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: c.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: l.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), l.useModules(), l.params.init && l.init(), l
                    }
                }
                t && (e.__proto__ = t);
                var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
                return ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.slidesPerViewDynamic = function() {
                    var t = this,
                        e = t.params,
                        i = t.slides,
                        n = t.slidesGrid,
                        s = t.size,
                        r = t.activeIndex,
                        o = 1;
                    if (e.centeredSlides) { for (var a, l = i[r].swiperSlideSize, c = r + 1; c < i.length; c += 1) i[c] && !a && (o += 1, s < (l += i[c].swiperSlideSize) && (a = !0)); for (var d = r - 1; 0 <= d; d -= 1) i[d] && !a && (o += 1, s < (l += i[d].swiperSlideSize) && (a = !0)) } else
                        for (var h = r + 1; h < i.length; h += 1) n[h] - n[r] < s && (o += 1);
                    return o
                }, e.prototype.update = function() {
                    var t = this;
                    if (t && !t.destroyed) {
                        var e = t.snapGrid,
                            i = t.params;
                        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (n(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
                    }

                    function n() {
                        var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                }, e.prototype.init = function() {
                    var t = this;
                    t.initialized || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"))
                }, e.prototype.destroy = function(t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    var i = this,
                        n = i.params,
                        s = i.$el,
                        r = i.$wrapperEl,
                        o = i.slides;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), e && (i.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(t) { i.off(t) }), !1 !== t && (i.$el[0].swiper = null, i.$el.data("swiper", null), c.deleteProps(i)), i.destroyed = !0), null
                }, e.extendDefaults = function(t) { c.extend(C, t) }, i.extendedDefaults.get = function() { return C }, i.defaults.get = function() { return E }, i.Class.get = function() { return t }, i.$.get = function() { return n }, Object.defineProperties(e, i), e
            }(h),
            D = { name: "device", proto: { device: b }, static: { device: b } },
            O = { name: "support", proto: { support: d }, static: { support: d } },
            P = { name: "browser", proto: { browser: k }, static: { browser: k } },
            L = {
                name: "resize",
                create: function() {
                    var t = this;
                    c.extend(t, { resize: { resizeHandler: function() { t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize")) }, orientationChangeHandler: function() { t && !t.destroyed && t.initialized && t.emit("orientationchange") } } })
                },
                on: { init: function() { e.addEventListener("resize", this.resize.resizeHandler), e.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function() { e.removeEventListener("resize", this.resize.resizeHandler), e.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } }
            },
            $ = {
                func: e.MutationObserver || e.WebkitMutationObserver,
                attach: function(t, i) {
                    void 0 === i && (i = {});
                    var n = this,
                        s = new $.func(function(t) {
                            if (1 !== t.length) {
                                var i = function() { n.emit("observerUpdate", t[0]) };
                                e.requestAnimationFrame ? e.requestAnimationFrame(i) : e.setTimeout(i, 0)
                            } else n.emit("observerUpdate", t[0])
                        });
                    s.observe(t, { attributes: void 0 === i.attributes || i.attributes, childList: void 0 === i.childList || i.childList, characterData: void 0 === i.characterData || i.characterData }), n.observer.observers.push(s)
                },
                init: function() {
                    var t = this;
                    if (d.observer && t.params.observer) {
                        if (t.params.observeParents)
                            for (var e = t.$el.parents(), i = 0; i < e.length; i += 1) t.observer.attach(e[i]);
                        t.observer.attach(t.$el[0], { childList: !1 }), t.observer.attach(t.$wrapperEl[0], { attributes: !1 })
                    }
                },
                destroy: function() { this.observer.observers.forEach(function(t) { t.disconnect() }), this.observer.observers = [] }
            },
            I = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function() { c.extend(this, { observer: { init: $.init.bind(this), attach: $.attach.bind(this), destroy: $.destroy.bind(this), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
            z = {
                update: function(t) {
                    var e = this,
                        i = e.params,
                        n = i.slidesPerView,
                        s = i.slidesPerGroup,
                        r = i.centeredSlides,
                        o = e.params.virtual,
                        a = o.addSlidesBefore,
                        l = o.addSlidesAfter,
                        d = e.virtual,
                        h = d.from,
                        u = d.to,
                        p = d.slides,
                        f = d.slidesGrid,
                        m = d.renderSlide,
                        g = d.offset;
                    e.updateActiveIndex();
                    var v, y, b, w = e.activeIndex || 0;
                    v = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", r ? (y = Math.floor(n / 2) + s + a, b = Math.floor(n / 2) + s + l) : (y = n + (s - 1) + a, b = s + l);
                    var x = Math.max((w || 0) - b, 0),
                        _ = Math.min((w || 0) + y, p.length - 1),
                        S = (e.slidesGrid[x] || 0) - (e.slidesGrid[0] || 0);

                    function k() { e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load() }
                    if (c.extend(e.virtual, { from: x, to: _, offset: S, slidesGrid: e.slidesGrid }), h === x && u === _ && !t) return e.slidesGrid !== f && S !== g && e.slides.css(v, S + "px"), void e.updateProgress();
                    if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, { offset: S, from: x, to: _, slides: function() { for (var t = [], e = x; e <= _; e += 1) t.push(p[e]); return t }() }), void k();
                    var E = [],
                        T = [];
                    if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
                    else
                        for (var C = h; C <= u; C += 1)(C < x || _ < C) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
                    for (var M = 0; M < p.length; M += 1) x <= M && M <= _ && (void 0 === u || t ? T.push(M) : (u < M && T.push(M), M < h && E.push(M)));
                    T.forEach(function(t) { e.$wrapperEl.append(m(p[t], t)) }), E.sort(function(t, e) { return t < e }).forEach(function(t) { e.$wrapperEl.prepend(m(p[t], t)) }), e.$wrapperEl.children(".swiper-slide").css(v, S + "px"), k()
                },
                renderSlide: function(t, e) {
                    var i = this,
                        s = i.params.virtual;
                    if (s.cache && i.virtual.cache[e]) return i.virtual.cache[e];
                    var r = s.renderSlide ? n(s.renderSlide.call(i, t, e)) : n('<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>");
                    return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", e), s.cache && (i.virtual.cache[e] = r), r
                },
                appendSlide: function(t) { this.virtual.slides.push(t), this.virtual.update(!0) },
                prependSlide: function(t) {
                    var e = this;
                    if (e.virtual.slides.unshift(t), e.params.virtual.cache) {
                        var i = e.virtual.cache,
                            n = {};
                        Object.keys(i).forEach(function(t) { n[t + 1] = i[t] }), e.virtual.cache = n
                    }
                    e.virtual.update(!0), e.slideNext(0)
                }
            },
            Y = {
                name: "virtual",
                params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
                create: function() {
                    var t = this;
                    c.extend(t, { virtual: { update: z.update.bind(t), appendSlide: z.appendSlide.bind(t), prependSlide: z.prependSlide.bind(t), renderSlide: z.renderSlide.bind(t), slides: t.params.virtual.slides, cache: {} } })
                },
                on: {
                    beforeInit: function() {
                        var t = this;
                        if (t.params.virtual.enabled) {
                            t.classNames.push(t.params.containerModifierClass + "virtual");
                            var e = { watchSlidesProgress: !0 };
                            c.extend(t.params, e), c.extend(t.originalParams, e), t.virtual.update()
                        }
                    },
                    setTranslate: function() { this.params.virtual.enabled && this.virtual.update() }
                }
            },
            A = {
                handle: function(i) {
                    var n = this,
                        s = n.rtlTranslate,
                        r = i;
                    r.originalEvent && (r = r.originalEvent);
                    var o = r.keyCode || r.charCode;
                    if (!n.allowSlideNext && (n.isHorizontal() && 39 === o || n.isVertical() && 40 === o)) return !1;
                    if (!n.allowSlidePrev && (n.isHorizontal() && 37 === o || n.isVertical() && 38 === o)) return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || t.activeElement && t.activeElement.nodeName && ("input" === t.activeElement.nodeName.toLowerCase() || "textarea" === t.activeElement.nodeName.toLowerCase()))) {
                        if (n.params.keyboard.onlyInViewport && (37 === o || 39 === o || 38 === o || 40 === o)) {
                            var a = !1;
                            if (0 < n.$el.parents("." + n.params.slideClass).length && 0 === n.$el.parents("." + n.params.slideActiveClass).length) return;
                            var l = e.innerWidth,
                                c = e.innerHeight,
                                d = n.$el.offset();
                            s && (d.left -= n.$el[0].scrollLeft);
                            for (var h = [
                                    [d.left, d.top],
                                    [d.left + n.width, d.top],
                                    [d.left, d.top + n.height],
                                    [d.left + n.width, d.top + n.height]
                                ], u = 0; u < h.length; u += 1) {
                                var p = h[u];
                                0 <= p[0] && p[0] <= l && 0 <= p[1] && p[1] <= c && (a = !0)
                            }
                            if (!a) return
                        }
                        n.isHorizontal() ? (37 !== o && 39 !== o || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (39 === o && !s || 37 === o && s) && n.slideNext(), (37 === o && !s || 39 === o && s) && n.slidePrev()) : (38 !== o && 40 !== o || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), 40 === o && n.slideNext(), 38 === o && n.slidePrev()), n.emit("keyPress", o)
                    }
                },
                enable: function() { this.keyboard.enabled || (n(t).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) },
                disable: function() { this.keyboard.enabled && (n(t).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) }
            },
            F = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function() { c.extend(this, { keyboard: { enabled: !1, enable: A.enable.bind(this), disable: A.disable.bind(this), handle: A.handle.bind(this) } }) }, on: { init: function() { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function() { this.keyboard.enabled && this.keyboard.disable() } } },
            j = {
                lastScrollTime: c.now(),
                event: -1 < e.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                    var e = "onwheel",
                        i = e in t;
                    if (!i) {
                        var n = t.createElement("div");
                        n.setAttribute(e, "return;"), i = "function" == typeof n[e]
                    }
                    return !i && t.implementation && t.implementation.hasFeature && !0 !== t.implementation.hasFeature("", "") && (i = t.implementation.hasFeature("Events.wheel", "3.0")), i
                }() ? "wheel" : "mousewheel",
                normalize: function(t) {
                    var e = 0,
                        i = 0,
                        n = 0,
                        s = 0;
                    return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, s = 10 * i, "deltaY" in t && (s = t.deltaY), "deltaX" in t && (n = t.deltaX), (n || s) && t.deltaMode && (1 === t.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !e && (e = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), { spinX: e, spinY: i, pixelX: n, pixelY: s }
                },
                handleMouseEnter: function() { this.mouseEntered = !0 },
                handleMouseLeave: function() { this.mouseEntered = !1 },
                handle: function(t) {
                    var i = t,
                        n = this,
                        s = n.params.mousewheel;
                    if (!n.mouseEntered && !s.releaseOnEdges) return !0;
                    i.originalEvent && (i = i.originalEvent);
                    var r = 0,
                        o = n.rtlTranslate ? -1 : 1,
                        a = j.normalize(i);
                    if (s.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                            r = a.pixelX * o
                        } else {
                            if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                            r = a.pixelY
                        }
                    else r = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * o : -a.pixelY;
                    if (0 === r) return !0;
                    if (s.invert && (r = -r), n.params.freeMode) {
                        n.params.loop && n.loopFix();
                        var l = n.getTranslate() + r * s.sensitivity,
                            d = n.isBeginning,
                            h = n.isEnd;
                        if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!d && n.isBeginning || !h && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = c.nextTick(function() { n.slideToClosest() }, 300)), n.emit("scroll", i), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), l === n.minTranslate() || l === n.maxTranslate()) return !0
                    } else {
                        if (60 < c.now() - n.mousewheel.lastScrollTime)
                            if (r < 0)
                                if (n.isEnd && !n.params.loop || n.animating) { if (s.releaseOnEdges) return !0 } else n.slideNext(), n.emit("scroll", i);
                        else if (n.isBeginning && !n.params.loop || n.animating) { if (s.releaseOnEdges) return !0 } else n.slidePrev(), n.emit("scroll", i);
                        n.mousewheel.lastScrollTime = (new e.Date).getTime()
                    }
                    return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                },
                enable: function() { var t = this; if (!j.event) return !1; if (t.mousewheel.enabled) return !1; var e = t.$el; return "container" !== t.params.mousewheel.eventsTarged && (e = n(t.params.mousewheel.eventsTarged)), e.on("mouseenter", t.mousewheel.handleMouseEnter), e.on("mouseleave", t.mousewheel.handleMouseLeave), e.on(j.event, t.mousewheel.handle), t.mousewheel.enabled = !0 },
                disable: function() { var t = this; if (!j.event) return !1; if (!t.mousewheel.enabled) return !1; var e = t.$el; return "container" !== t.params.mousewheel.eventsTarged && (e = n(t.params.mousewheel.eventsTarged)), e.off(j.event, t.mousewheel.handle), !(t.mousewheel.enabled = !1) }
            },
            N = {
                update: function() {
                    var t = this,
                        e = t.params.navigation;
                    if (!t.params.loop) {
                        var i = t.navigation,
                            n = i.$nextEl,
                            s = i.$prevEl;
                        s && 0 < s.length && (t.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](e.lockClass)), n && 0 < n.length && (t.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](e.lockClass))
                    }
                },
                init: function() {
                    var t, e, i = this,
                        s = i.params.navigation;
                    (s.nextEl || s.prevEl) && (s.nextEl && (t = n(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl && 1 < t.length && 1 === i.$el.find(s.nextEl).length && (t = i.$el.find(s.nextEl))), s.prevEl && (e = n(s.prevEl), i.params.uniqueNavElements && "string" == typeof s.prevEl && 1 < e.length && 1 === i.$el.find(s.prevEl).length && (e = i.$el.find(s.prevEl))), t && 0 < t.length && t.on("click", function(t) { t.preventDefault(), i.isEnd && !i.params.loop || i.slideNext() }), e && 0 < e.length && e.on("click", function(t) { t.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev() }), c.extend(i.navigation, { $nextEl: t, nextEl: t && t[0], $prevEl: e, prevEl: e && e[0] }))
                },
                destroy: function() {
                    var t = this.navigation,
                        e = t.$nextEl,
                        i = t.$prevEl;
                    e && e.length && (e.off("click"), e.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
                }
            },
            R = {
                update: function() {
                    var t = this,
                        e = t.rtl,
                        i = t.params.pagination;
                    if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                        var s, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                            o = t.pagination.$el,
                            a = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        if (t.params.loop ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides), a - 1 < s && (s -= a), s < 0 && "bullets" !== t.params.paginationType && (s = a + s)) : s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && 0 < t.pagination.bullets.length) {
                            var l, c, d, h = t.pagination.bullets;
                            if (i.dynamicBullets && (t.pagination.bulletSize = h.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += s - t.previousIndex, t.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), l = s - t.pagination.dynamicBulletIndex, d = ((c = l + (Math.min(h.length, i.dynamicMainBullets) - 1)) + l) / 2), h.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < o.length) h.each(function(t, e) {
                                var r = n(e),
                                    o = r.index();
                                o === s && r.addClass(i.bulletActiveClass), i.dynamicBullets && (l <= o && o <= c && r.addClass(i.bulletActiveClass + "-main"), o === l && r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), o === c && r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                            });
                            else if (h.eq(s).addClass(i.bulletActiveClass), i.dynamicBullets) {
                                for (var u = h.eq(l), p = h.eq(c), f = l; f <= c; f += 1) h.eq(f).addClass(i.bulletActiveClass + "-main");
                                u.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), p.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                            }
                            if (i.dynamicBullets) {
                                var m = Math.min(h.length, i.dynamicMainBullets + 4),
                                    g = (t.pagination.bulletSize * m - t.pagination.bulletSize) / 2 - d * t.pagination.bulletSize,
                                    v = e ? "right" : "left";
                                h.css(t.isHorizontal() ? v : "top", g + "px")
                            }
                        }
                        if ("fraction" === i.type && (o.find("." + i.currentClass).text(i.formatFractionCurrent(s + 1)), o.find("." + i.totalClass).text(i.formatFractionTotal(a))), "progressbar" === i.type) {
                            var y;
                            y = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                            var b = (s + 1) / a,
                                w = 1,
                                x = 1;
                            "horizontal" === y ? w = b : x = b, o.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + x + ")").transition(t.params.speed)
                        }
                        "custom" === i.type && i.renderCustom ? (o.html(i.renderCustom(t, s + 1, a)), t.emit("paginationRender", t, o[0])) : t.emit("paginationUpdate", t, o[0]), o[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](i.lockClass)
                    }
                },
                render: function() {
                    var t = this,
                        e = t.params.pagination;
                    if (e.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                        var i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                            n = t.pagination.$el,
                            s = "";
                        if ("bullets" === e.type) {
                            for (var r = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, o = 0; o < r; o += 1) e.renderBullet ? s += e.renderBullet.call(t, o, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            n.html(s), t.pagination.bullets = n.find("." + e.bulletClass)
                        }
                        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', n.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', n.html(s)), "custom" !== e.type && t.emit("paginationRender", t.pagination.$el[0])
                    }
                },
                init: function() {
                    var t = this,
                        e = t.params.pagination;
                    if (e.el) {
                        var i = n(e.el);
                        0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && 1 < i.length && 1 === t.$el.find(e.el).length && (i = t.$el.find(e.el)), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (i.addClass("" + e.modifierClass + e.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", "." + e.bulletClass, function(e) {
                            e.preventDefault();
                            var i = n(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                        }), c.extend(t.pagination, { $el: i, el: i[0] }))
                    }
                },
                destroy: function() {
                    var t = this,
                        e = t.params.pagination;
                    if (e.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                        var i = t.pagination.$el;
                        i.removeClass(e.hiddenClass), i.removeClass(e.modifierClass + e.type), t.pagination.bullets && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && i.off("click", "." + e.bulletClass)
                    }
                }
            },
            W = {
                setTranslate: function() {
                    var t = this;
                    if (t.params.scrollbar.el && t.scrollbar.el) {
                        var e = t.scrollbar,
                            i = t.rtlTranslate,
                            n = t.progress,
                            s = e.dragSize,
                            r = e.trackSize,
                            o = e.$dragEl,
                            a = e.$el,
                            l = t.params.scrollbar,
                            c = s,
                            h = (r - s) * n;
                        i ? 0 < (h = -h) ? (c = s - h, h = 0) : r < -h + s && (c = r + h) : h < 0 ? (c = s + h, h = 0) : r < h + s && (c = r - h), t.isHorizontal() ? (d.transforms3d ? o.transform("translate3d(" + h + "px, 0, 0)") : o.transform("translateX(" + h + "px)"), o[0].style.width = c + "px") : (d.transforms3d ? o.transform("translate3d(0px, " + h + "px, 0)") : o.transform("translateY(" + h + "px)"), o[0].style.height = c + "px"), l.hide && (clearTimeout(t.scrollbar.timeout), a[0].style.opacity = 1, t.scrollbar.timeout = setTimeout(function() { a[0].style.opacity = 0, a.transition(400) }, 1e3))
                    }
                },
                setTransition: function(t) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t) },
                updateSize: function() {
                    var t = this;
                    if (t.params.scrollbar.el && t.scrollbar.el) {
                        var e = t.scrollbar,
                            i = e.$dragEl,
                            n = e.$el;
                        i[0].style.width = "", i[0].style.height = "";
                        var s, r = t.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                            o = t.size / t.virtualSize,
                            a = o * (r / t.size);
                        s = "auto" === t.params.scrollbar.dragSize ? r * o : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? i[0].style.width = s + "px" : i[0].style.height = s + "px", n[0].style.display = 1 <= o ? "none" : "", t.params.scrollbarHide && (n[0].style.opacity = 0), c.extend(e, { trackSize: r, divider: o, moveDivider: a, dragSize: s }), e.$el[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function(t) {
                    var e, i = this,
                        n = i.scrollbar,
                        s = i.rtlTranslate,
                        r = n.$el,
                        o = n.dragSize,
                        a = n.trackSize;
                    e = ((i.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY) - r.offset()[i.isHorizontal() ? "left" : "top"] - o / 2) / (a - o), e = Math.max(Math.min(e, 1), 0), s && (e = 1 - e);
                    var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * e;
                    i.updateProgress(l), i.setTranslate(l), i.updateActiveIndex(), i.updateSlidesClasses()
                },
                onDragStart: function(t) {
                    var e = this,
                        i = e.params.scrollbar,
                        n = e.scrollbar,
                        s = e.$wrapperEl,
                        r = n.$el,
                        o = n.$dragEl;
                    e.scrollbar.isTouched = !0, t.preventDefault(), t.stopPropagation(), s.transition(100), o.transition(100), n.setDragPosition(t), clearTimeout(e.scrollbar.dragTimeout), r.transition(0), i.hide && r.css("opacity", 1), e.emit("scrollbarDragStart", t)
                },
                onDragMove: function(t) {
                    var e = this.scrollbar,
                        i = this.$wrapperEl,
                        n = e.$el,
                        s = e.$dragEl;
                    this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", t))
                },
                onDragEnd: function(t) {
                    var e = this,
                        i = e.params.scrollbar,
                        n = e.scrollbar.$el;
                    e.scrollbar.isTouched && (e.scrollbar.isTouched = !1, i.hide && (clearTimeout(e.scrollbar.dragTimeout), e.scrollbar.dragTimeout = c.nextTick(function() { n.css("opacity", 0), n.transition(400) }, 1e3)), e.emit("scrollbarDragEnd", t), i.snapOnRelease && e.slideToClosest())
                },
                enableDraggable: function() {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var i = e.scrollbar,
                            n = e.touchEvents,
                            s = e.touchEventsDesktop,
                            r = e.params,
                            o = i.$el[0],
                            a = !(!d.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                            l = !(!d.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                        d.touch || !d.pointerEvents && !d.prefixedPointerEvents ? (d.touch && (o.addEventListener(n.start, e.scrollbar.onDragStart, a), o.addEventListener(n.move, e.scrollbar.onDragMove, a), o.addEventListener(n.end, e.scrollbar.onDragEnd, l)), (r.simulateTouch && !b.ios && !b.android || r.simulateTouch && !d.touch && b.ios) && (o.addEventListener("mousedown", e.scrollbar.onDragStart, a), t.addEventListener("mousemove", e.scrollbar.onDragMove, a), t.addEventListener("mouseup", e.scrollbar.onDragEnd, l))) : (o.addEventListener(s.start, e.scrollbar.onDragStart, a), t.addEventListener(s.move, e.scrollbar.onDragMove, a), t.addEventListener(s.end, e.scrollbar.onDragEnd, l))
                    }
                },
                disableDraggable: function() {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var i = e.scrollbar,
                            n = e.touchEvents,
                            s = e.touchEventsDesktop,
                            r = e.params,
                            o = i.$el[0],
                            a = !(!d.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                            l = !(!d.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                        d.touch || !d.pointerEvents && !d.prefixedPointerEvents ? (d.touch && (o.removeEventListener(n.start, e.scrollbar.onDragStart, a), o.removeEventListener(n.move, e.scrollbar.onDragMove, a), o.removeEventListener(n.end, e.scrollbar.onDragEnd, l)), (r.simulateTouch && !b.ios && !b.android || r.simulateTouch && !d.touch && b.ios) && (o.removeEventListener("mousedown", e.scrollbar.onDragStart, a), t.removeEventListener("mousemove", e.scrollbar.onDragMove, a), t.removeEventListener("mouseup", e.scrollbar.onDragEnd, l))) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, a), t.removeEventListener(s.move, e.scrollbar.onDragMove, a), t.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
                    }
                },
                init: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var e = t.scrollbar,
                            i = t.$el,
                            s = t.params.scrollbar,
                            r = n(s.el);
                        t.params.uniqueNavElements && "string" == typeof s.el && 1 < r.length && 1 === i.find(s.el).length && (r = i.find(s.el));
                        var o = r.find("." + t.params.scrollbar.dragClass);
                        0 === o.length && (o = n('<div class="' + t.params.scrollbar.dragClass + '"></div>'), r.append(o)), c.extend(e, { $el: r, el: r[0], $dragEl: o, dragEl: o[0] }), s.draggable && e.enableDraggable()
                    }
                },
                destroy: function() { this.scrollbar.disableDraggable() }
            },
            H = {
                setTransform: function(t, e) {
                    var i = this.rtl,
                        s = n(t),
                        r = i ? -1 : 1,
                        o = s.attr("data-swiper-parallax") || "0",
                        a = s.attr("data-swiper-parallax-x"),
                        l = s.attr("data-swiper-parallax-y"),
                        c = s.attr("data-swiper-parallax-scale"),
                        d = s.attr("data-swiper-parallax-opacity");
                    if (a || l ? (a = a || "0", l = l || "0") : this.isHorizontal() ? (a = o, l = "0") : (l = o, a = "0"), a = 0 <= a.indexOf("%") ? parseInt(a, 10) * e * r + "%" : a * e * r + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * e + "%" : l * e + "px", null != d) {
                        var h = d - (d - 1) * (1 - Math.abs(e));
                        s[0].style.opacity = h
                    }
                    if (null == c) s.transform("translate3d(" + a + ", " + l + ", 0px)");
                    else {
                        var u = c - (c - 1) * (1 - Math.abs(e));
                        s.transform("translate3d(" + a + ", " + l + ", 0px) scale(" + u + ")")
                    }
                },
                setTranslate: function() {
                    var t = this,
                        e = t.$el,
                        i = t.slides,
                        s = t.progress,
                        r = t.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) { t.parallax.setTransform(i, s) }), i.each(function(e, i) {
                        var o = i.progress;
                        1 < t.params.slidesPerGroup && "auto" !== t.params.slidesPerView && (o += Math.ceil(e / 2) - s * (r.length - 1)), o = Math.min(Math.max(o, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) { t.parallax.setTransform(i, o) })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
                        var s = n(i),
                            r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0), s.transition(r)
                    })
                }
            },
            B = {
                getDistanceBetweenTouches: function(t) {
                    if (t.targetTouches.length < 2) return 1;
                    var e = t.targetTouches[0].pageX,
                        i = t.targetTouches[0].pageY,
                        n = t.targetTouches[1].pageX,
                        s = t.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - e, 2) + Math.pow(s - i, 2))
                },
                onGestureStart: function(t) {
                    var e = this,
                        i = e.params.zoom,
                        s = e.zoom,
                        r = s.gesture;
                    if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !d.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        s.fakeGestureTouched = !0, r.scaleStart = B.getDistanceBetweenTouches(t)
                    }
                    r.$slideEl && r.$slideEl.length || (r.$slideEl = n(t.target).closest(".swiper-slide"), 0 === r.$slideEl.length && (r.$slideEl = e.slides.eq(e.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), e.zoom.isScaling = !0) : r.$imageEl = void 0
                },
                onGestureChange: function(t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!d.gestures) {
                        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, n.scaleMove = B.getDistanceBetweenTouches(t)
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (d.gestures ? this.zoom.scale = t.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function(t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!d.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !b.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), e.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
                },
                onTouchStart: function(t) {
                    var e = this.zoom,
                        i = e.gesture,
                        n = e.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (b.android && t.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, n.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(t) {
                    var e = this,
                        i = e.zoom,
                        n = i.gesture,
                        s = i.image,
                        r = i.velocity;
                    if (n.$imageEl && 0 !== n.$imageEl.length && (e.allowClick = !1, s.isTouched && n.$slideEl)) {
                        s.isMoved || (s.width = n.$imageEl[0].offsetWidth, s.height = n.$imageEl[0].offsetHeight, s.startX = c.getTranslate(n.$imageWrapEl[0], "x") || 0, s.startY = c.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), e.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                        var o = s.width * i.scale,
                            a = s.height * i.scale;
                        if (!(o < n.slideWidth && a < n.slideHeight)) {
                            if (s.minX = Math.min(n.slideWidth / 2 - o / 2, 0), s.maxX = -s.minX, s.minY = Math.min(n.slideHeight / 2 - a / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, s.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !s.isMoved && !i.isScaling) { if (e.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1); if (!e.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1) }
                            t.preventDefault(), t.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var t = this.zoom,
                        e = t.gesture,
                        i = t.image,
                        n = t.velocity;
                    if (e.$imageEl && 0 !== e.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var s = 300,
                            r = 300,
                            o = n.x * s,
                            a = i.currentX + o,
                            l = n.y * r,
                            c = i.currentY + l;
                        0 !== n.x && (s = Math.abs((a - i.currentX) / n.x)), 0 !== n.y && (r = Math.abs((c - i.currentY) / n.y));
                        var d = Math.max(s, r);
                        i.currentX = a, i.currentY = c;
                        var h = i.width * t.scale,
                            u = i.height * t.scale;
                        i.minX = Math.min(e.slideWidth / 2 - h / 2, 0), i.maxX = -i.minX, i.minY = Math.min(e.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), e.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var t = this.zoom,
                        e = t.gesture;
                    e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl.transform("translate3d(0,0,0) scale(1)"), e.$imageWrapEl.transform("translate3d(0,0,0)"), e.$slideEl = void 0, e.$imageEl = void 0, e.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
                },
                toggle: function(t) {
                    var e = this.zoom;
                    e.scale && 1 !== e.scale ? e.out() : e.in(t)
                },
                in: function(t) {
                    var e, i, s, r, o, a, l, c, d, h, u, p, f, m, g, v, y = this,
                        b = y.zoom,
                        w = y.params.zoom,
                        x = b.gesture,
                        _ = b.image;
                    x.$slideEl || (x.$slideEl = y.clickedSlide ? n(y.clickedSlide) : y.slides.eq(y.activeIndex), x.$imageEl = x.$slideEl.find("img, svg, canvas"), x.$imageWrapEl = x.$imageEl.parent("." + w.containerClass)), x.$imageEl && 0 !== x.$imageEl.length && (x.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === _.touchesStart.x && t ? (e = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (e = _.touchesStart.x, i = _.touchesStart.y), b.scale = x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, t ? (g = x.$slideEl[0].offsetWidth, v = x.$slideEl[0].offsetHeight, s = x.$slideEl.offset().left + g / 2 - e, r = x.$slideEl.offset().top + v / 2 - i, l = x.$imageEl[0].offsetWidth, c = x.$imageEl[0].offsetHeight, d = l * b.scale, h = c * b.scale, f = -(u = Math.min(g / 2 - d / 2, 0)), m = -(p = Math.min(v / 2 - h / 2, 0)), (o = s * b.scale) < u && (o = u), f < o && (o = f), (a = r * b.scale) < p && (a = p), m < a && (a = m)) : a = o = 0, x.$imageWrapEl.transition(300).transform("translate3d(" + o + "px, " + a + "px,0)"), x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
                },
                out: function() {
                    var t = this,
                        e = t.zoom,
                        i = t.params.zoom,
                        s = e.gesture;
                    s.$slideEl || (s.$slideEl = t.clickedSlide ? n(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (e.scale = 1, e.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
                },
                enable: function() {
                    var t = this,
                        e = t.zoom;
                    if (!e.enabled) {
                        e.enabled = !0;
                        var i = !("touchstart" !== t.touchEvents.start || !d.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                        d.gestures ? (t.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, i), t.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, i), t.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, ".swiper-slide", e.onGestureStart, i), t.$wrapperEl.on(t.touchEvents.move, ".swiper-slide", e.onGestureChange, i), t.$wrapperEl.on(t.touchEvents.end, ".swiper-slide", e.onGestureEnd, i)), t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, e.onTouchMove)
                    }
                },
                disable: function() {
                    var t = this,
                        e = t.zoom;
                    if (e.enabled) {
                        t.zoom.enabled = !1;
                        var i = !("touchstart" !== t.touchEvents.start || !d.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                        d.gestures ? (t.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, i), t.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, i), t.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, ".swiper-slide", e.onGestureStart, i), t.$wrapperEl.off(t.touchEvents.move, ".swiper-slide", e.onGestureChange, i), t.$wrapperEl.off(t.touchEvents.end, ".swiper-slide", e.onGestureEnd, i)), t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, e.onTouchMove)
                    }
                }
            },
            V = {
                loadInSlide: function(t, e) {
                    void 0 === e && (e = !0);
                    var i = this,
                        s = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                            o = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                        !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (o = o.add(r[0])), 0 !== o.length && o.each(function(t, o) {
                            var a = n(o);
                            a.addClass(s.loadingClass);
                            var l = a.attr("data-background"),
                                c = a.attr("data-src"),
                                d = a.attr("data-srcset"),
                                h = a.attr("data-sizes");
                            i.loadImage(a[0], c || l, d, h, !1, function() {
                                if (null != i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (a.css("background-image", 'url("' + l + '")'), a.removeAttr("data-background")) : (d && (a.attr("srcset", d), a.removeAttr("data-srcset")), h && (a.attr("sizes", h), a.removeAttr("data-sizes")), c && (a.attr("src", c), a.removeAttr("data-src"))), a.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && e) {
                                        var t = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(i.params.slideDuplicateClass)) {
                                            var n = i.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(n.index(), !1)
                                        } else {
                                            var o = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                            i.lazy.loadInSlide(o.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", r[0], a[0])
                                }
                            }), i.emit("lazyImageLoad", r[0], a[0])
                        })
                    }
                },
                load: function() {
                    var t = this,
                        e = t.$wrapperEl,
                        i = t.params,
                        s = t.slides,
                        r = t.activeIndex,
                        o = t.virtual && i.virtual.enabled,
                        a = i.lazy,
                        l = i.slidesPerView;

                    function c(t) { if (o) { if (e.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return !0 } else if (s[t]) return !0; return !1 }

                    function d(t) { return o ? n(t).attr("data-swiper-slide-index") : n(t).index() }
                    if ("auto" === l && (l = 0), t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0), t.params.watchSlidesVisibility) e.children("." + i.slideVisibleClass).each(function(e, i) {
                        var s = o ? n(i).attr("data-swiper-slide-index") : n(i).index();
                        t.lazy.loadInSlide(s)
                    });
                    else if (1 < l)
                        for (var h = r; h < r + l; h += 1) c(h) && t.lazy.loadInSlide(h);
                    else t.lazy.loadInSlide(r);
                    if (a.loadPrevNext)
                        if (1 < l || a.loadPrevNextAmount && 1 < a.loadPrevNextAmount) { for (var u = a.loadPrevNextAmount, p = l, f = Math.min(r + p + Math.max(u, p), s.length), m = Math.max(r - Math.max(p, u), 0), g = r + l; g < f; g += 1) c(g) && t.lazy.loadInSlide(g); for (var v = m; v < r; v += 1) c(v) && t.lazy.loadInSlide(v) } else {
                            var y = e.children("." + i.slideNextClass);
                            0 < y.length && t.lazy.loadInSlide(d(y));
                            var b = e.children("." + i.slidePrevClass);
                            0 < b.length && t.lazy.loadInSlide(d(b))
                        }
                }
            },
            q = {
                LinearSpline: function(t, e) { var i, n, s, r, o; return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function(t) { return t ? (o = function(t, e) { for (n = -1, i = t.length; 1 < i - n;) t[s = i + n >> 1] <= e ? n = s : i = s; return i }(this.x, t), r = o - 1, (t - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0 }, this },
                getInterpolateFunction: function(t) {
                    var e = this;
                    e.controller.spline || (e.controller.spline = e.params.loop ? new q.LinearSpline(e.slidesGrid, t.slidesGrid) : new q.LinearSpline(e.snapGrid, t.snapGrid))
                },
                setTranslate: function(t, e) {
                    var i, n, s = this,
                        r = s.controller.control;

                    function o(t) { var e = s.rtlTranslate ? -s.translate : s.translate; "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(t), n = -s.controller.spline.interpolate(-e)), n && "container" !== s.params.controller.by || (i = (t.maxTranslate() - t.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (e - s.minTranslate()) * i + t.minTranslate()), s.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, s), t.updateActiveIndex(), t.updateSlidesClasses() }
                    if (Array.isArray(r))
                        for (var a = 0; a < r.length; a += 1) r[a] !== e && r[a] instanceof M && o(r[a]);
                    else r instanceof M && e !== r && o(r)
                },
                setTransition: function(t, e) {
                    var i, n = this,
                        s = n.controller.control;

                    function r(e) { e.setTransition(t, n), 0 !== t && (e.transitionStart(), e.params.autoHeight && c.nextTick(function() { e.updateAutoHeight() }), e.$wrapperEl.transitionEnd(function() { s && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(), e.transitionEnd()) })) }
                    if (Array.isArray(s))
                        for (i = 0; i < s.length; i += 1) s[i] !== e && s[i] instanceof M && r(s[i]);
                    else s instanceof M && e !== s && r(s)
                }
            },
            G = {
                makeElFocusable: function(t) { return t.attr("tabIndex", "0"), t },
                addElRole: function(t, e) { return t.attr("role", e), t },
                addElLabel: function(t, e) { return t.attr("aria-label", e), t },
                disableEl: function(t) { return t.attr("aria-disabled", !0), t },
                enableEl: function(t) { return t.attr("aria-disabled", !1), t },
                onEnterKey: function(t) {
                    var e = this,
                        i = e.params.a11y;
                    if (13 === t.keyCode) {
                        var s = n(t.target);
                        e.navigation && e.navigation.$nextEl && s.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? e.a11y.notify(i.lastSlideMessage) : e.a11y.notify(i.nextSlideMessage)), e.navigation && e.navigation.$prevEl && s.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? e.a11y.notify(i.firstSlideMessage) : e.a11y.notify(i.prevSlideMessage)), e.pagination && s.is("." + e.params.pagination.bulletClass) && s[0].click()
                    }
                },
                notify: function(t) {
                    var e = this.a11y.liveRegion;
                    0 !== e.length && (e.html(""), e.html(t))
                },
                updateNavigation: function() {
                    var t = this;
                    if (!t.params.loop) {
                        var e = t.navigation,
                            i = e.$nextEl,
                            n = e.$prevEl;
                        n && 0 < n.length && (t.isBeginning ? t.a11y.disableEl(n) : t.a11y.enableEl(n)), i && 0 < i.length && (t.isEnd ? t.a11y.disableEl(i) : t.a11y.enableEl(i))
                    }
                },
                updatePagination: function() {
                    var t = this,
                        e = t.params.a11y;
                    t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, s) {
                        var r = n(s);
                        t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, e.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                    })
                },
                init: function() {
                    var t = this;
                    t.$el.append(t.a11y.liveRegion);
                    var e, i, n = t.params.a11y;
                    t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl), e && (t.a11y.makeElFocusable(e), t.a11y.addElRole(e, "button"), t.a11y.addElLabel(e, n.nextSlideMessage), e.on("keydown", t.a11y.onEnterKey)), i && (t.a11y.makeElFocusable(i), t.a11y.addElRole(i, "button"), t.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", t.a11y.onEnterKey)), t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.on("keydown", "." + t.params.pagination.bulletClass, t.a11y.onEnterKey)
                },
                destroy: function() {
                    var t, e, i = this;
                    i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (t = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (e = i.navigation.$prevEl), t && t.off("keydown", i.a11y.onEnterKey), e && e.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
                }
            },
            X = {
                init: function() {
                    var t = this;
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                        var i = t.history;
                        i.initialized = !0, i.paths = X.getPathValues(), (i.paths.key || i.paths.value) && (i.scrollToSlide(0, i.paths.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", t.history.setHistoryPopState))
                    }
                },
                destroy: function() { this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState) },
                setHistoryPopState: function() { this.history.paths = X.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) },
                getPathValues: function() {
                    var t = e.location.pathname.slice(1).split("/").filter(function(t) { return "" !== t }),
                        i = t.length;
                    return { key: t[i - 2], value: t[i - 1] }
                },
                setHistory: function(t, i) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var n = this.slides.eq(i),
                            s = X.slugify(n.attr("data-history"));
                        e.location.pathname.includes(t) || (s = t + "/" + s);
                        var r = e.history.state;
                        r && r.value === s || (this.params.history.replaceState ? e.history.replaceState({ value: s }, null, s) : e.history.pushState({ value: s }, null, s))
                    }
                },
                slugify: function(t) { return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") },
                scrollToSlide: function(t, e, i) {
                    var n = this;
                    if (e)
                        for (var s = 0, r = n.slides.length; s < r; s += 1) {
                            var o = n.slides.eq(s);
                            if (X.slugify(o.attr("data-history")) === e && !o.hasClass(n.params.slideDuplicateClass)) {
                                var a = o.index();
                                n.slideTo(a, t, i)
                            }
                        } else n.slideTo(0, t, i)
                }
            },
            U = {
                onHashCange: function() {
                    var e = this,
                        i = t.location.hash.replace("#", "");
                    if (i !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                        var n = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + i + '"]').index();
                        if (void 0 === n) return;
                        e.slideTo(n)
                    }
                },
                setHash: function() {
                    var i = this;
                    if (i.hashNavigation.initialized && i.params.hashNavigation.enabled)
                        if (i.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + i.slides.eq(i.activeIndex).attr("data-hash") || "");
                        else {
                            var n = i.slides.eq(i.activeIndex),
                                s = n.attr("data-hash") || n.attr("data-history");
                            t.location.hash = s || ""
                        }
                },
                init: function() {
                    var i = this;
                    if (!(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                        i.hashNavigation.initialized = !0;
                        var s = t.location.hash.replace("#", "");
                        if (s)
                            for (var r = 0, o = i.slides.length; r < o; r += 1) {
                                var a = i.slides.eq(r);
                                if ((a.attr("data-hash") || a.attr("data-history")) === s && !a.hasClass(i.params.slideDuplicateClass)) {
                                    var l = a.index();
                                    i.slideTo(l, 0, i.params.runCallbacksOnInit, !0)
                                }
                            }
                        i.params.hashNavigation.watchState && n(e).on("hashchange", i.hashNavigation.onHashCange)
                    }
                },
                destroy: function() { this.params.hashNavigation.watchState && n(e).off("hashchange", this.hashNavigation.onHashCange) }
            },
            Z = {
                run: function() {
                    var t = this,
                        e = t.slides.eq(t.activeIndex),
                        i = t.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), t.autoplay.timeout = c.nextTick(function() { t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) }, i)
                },
                start: function() { var t = this; return void 0 === t.autoplay.timeout && !t.autoplay.running && (t.autoplay.running = !0, t.emit("autoplayStart"), t.autoplay.run(), !0) },
                stop: function() { var t = this; return !!t.autoplay.running && void 0 !== t.autoplay.timeout && (t.autoplay.timeout && (clearTimeout(t.autoplay.timeout), t.autoplay.timeout = void 0), t.autoplay.running = !1, t.emit("autoplayStop"), !0) },
                pause: function(t) {
                    var e = this;
                    e.autoplay.running && (e.autoplay.paused || (e.autoplay.timeout && clearTimeout(e.autoplay.timeout), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? (e.$wrapperEl[0].addEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].addEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd)) : (e.autoplay.paused = !1, e.autoplay.run())))
                }
            },
            Q = {
                setTranslate: function() {
                    for (var t = this, e = t.slides, i = 0; i < e.length; i += 1) {
                        var n = t.slides.eq(i),
                            s = -n[0].swiperSlideOffset;
                        t.params.virtualTranslate || (s -= t.translate);
                        var r = 0;
                        t.isHorizontal() || (r = s, s = 0);
                        var o = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                        n.css({ opacity: o }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                    }
                },
                setTransition: function(t) {
                    var e = this,
                        i = e.slides,
                        n = e.$wrapperEl;
                    if (i.transition(t), e.params.virtualTranslate && 0 !== t) {
                        var s = !1;
                        i.transitionEnd(function() { if (!s && e && !e.destroyed) { s = !0, e.animating = !1; for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) n.trigger(t[i]) } })
                    }
                }
            },
            K = {
                setTranslate: function() {
                    var t, e = this,
                        i = e.$el,
                        s = e.$wrapperEl,
                        r = e.slides,
                        o = e.width,
                        a = e.height,
                        l = e.rtlTranslate,
                        c = e.size,
                        d = e.params.cubeEffect,
                        h = e.isHorizontal(),
                        u = e.virtual && e.params.virtual.enabled,
                        p = 0;
                    d.shadow && (h ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = n('<div class="swiper-cube-shadow"></div>'), s.append(t)), t.css({ height: o + "px" })) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = n('<div class="swiper-cube-shadow"></div>'), i.append(t)));
                    for (var f = 0; f < r.length; f += 1) {
                        var m = r.eq(f),
                            g = f;
                        u && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
                        var v = 90 * g,
                            y = Math.floor(v / 360);
                        l && (v = -v, y = Math.floor(-v / 360));
                        var b = Math.max(Math.min(m[0].progress, 1), -1),
                            w = 0,
                            x = 0,
                            _ = 0;
                        g % 4 == 0 ? (w = 4 * -y * c, _ = 0) : (g - 1) % 4 == 0 ? (w = 0, _ = 4 * -y * c) : (g - 2) % 4 == 0 ? (w = c + 4 * y * c, _ = c) : (g - 3) % 4 == 0 && (w = -c, _ = 3 * c + 4 * c * y), l && (w = -w), h || (x = w, w = 0);
                        var S = "rotateX(" + (h ? 0 : -v) + "deg) rotateY(" + (h ? v : 0) + "deg) translate3d(" + w + "px, " + x + "px, " + _ + "px)";
                        if (b <= 1 && -1 < b && (p = 90 * g + 90 * b, l && (p = 90 * -g - 90 * b)), m.transform(S), d.slideShadows) {
                            var E = h ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                T = h ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                            0 === E.length && (E = n('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), m.append(E)), 0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), m.append(T)), E.length && (E[0].style.opacity = Math.max(-b, 0)), T.length && (T[0].style.opacity = Math.max(b, 0))
                        }
                    }
                    if (s.css({ "-webkit-transform-origin": "50% 50% -" + c / 2 + "px", "-moz-transform-origin": "50% 50% -" + c / 2 + "px", "-ms-transform-origin": "50% 50% -" + c / 2 + "px", "transform-origin": "50% 50% -" + c / 2 + "px" }), d.shadow)
                        if (h) t.transform("translate3d(0px, " + (o / 2 + d.shadowOffset) + "px, " + -o / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                        else {
                            var C = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                                M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                                D = d.shadowScale,
                                O = d.shadowScale / M,
                                P = d.shadowOffset;
                            t.transform("scale3d(" + D + ", 1, " + O + ") translate3d(0px, " + (a / 2 + P) + "px, " + -a / 2 / O + "px) rotateX(-90deg)")
                        }
                    var L = k.isSafari || k.isUiWebView ? -c / 2 : 0;
                    s.transform("translate3d(0px,0," + L + "px) rotateX(" + (e.isHorizontal() ? 0 : p) + "deg) rotateY(" + (e.isHorizontal() ? -p : 0) + "deg)")
                },
                setTransition: function(t) {
                    var e = this.$el;
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
                }
            },
            J = {
                setTranslate: function() {
                    for (var t = this, e = t.slides, i = t.rtlTranslate, s = 0; s < e.length; s += 1) {
                        var r = e.eq(s),
                            o = r[0].progress;
                        t.params.flipEffect.limitRotation && (o = Math.max(Math.min(r[0].progress, 1), -1));
                        var a = -180 * o,
                            l = 0,
                            c = -r[0].swiperSlideOffset,
                            d = 0;
                        if (t.isHorizontal() ? i && (a = -a) : (d = c, l = -a, a = c = 0), r[0].style.zIndex = -Math.abs(Math.round(o)) + e.length, t.params.flipEffect.slideShadows) {
                            var h = t.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                u = t.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                            0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), r.append(h)), 0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(u)), h.length && (h[0].style.opacity = Math.max(-o, 0)), u.length && (u[0].style.opacity = Math.max(o, 0))
                        }
                        r.transform("translate3d(" + c + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + a + "deg)")
                    }
                },
                setTransition: function(t) {
                    var e = this,
                        i = e.slides,
                        n = e.activeIndex,
                        s = e.$wrapperEl;
                    if (i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t) {
                        var r = !1;
                        i.eq(n).transitionEnd(function() { if (!r && e && !e.destroyed) { r = !0, e.animating = !1; for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) s.trigger(t[i]) } })
                    }
                }
            },
            tt = {
                setTranslate: function() {
                    for (var t = this, e = t.width, i = t.height, s = t.slides, r = t.$wrapperEl, o = t.slidesSizesGrid, a = t.params.coverflowEffect, l = t.isHorizontal(), c = t.translate, h = l ? e / 2 - c : i / 2 - c, u = l ? a.rotate : -a.rotate, p = a.depth, f = 0, m = s.length; f < m; f += 1) {
                        var g = s.eq(f),
                            v = o[f],
                            y = (h - g[0].swiperSlideOffset - v / 2) / v * a.modifier,
                            b = l ? u * y : 0,
                            w = l ? 0 : u * y,
                            x = -p * Math.abs(y),
                            _ = l ? 0 : a.stretch * y,
                            S = l ? a.stretch * y : 0;
                        Math.abs(S) < .001 && (S = 0), Math.abs(_) < .001 && (_ = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                        var k = "translate3d(" + S + "px," + _ + "px," + x + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                        if (g.transform(k), g[0].style.zIndex = 1 - Math.abs(Math.round(y)), a.slideShadows) {
                            var E = l ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"),
                                T = l ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                            0 === E.length && (E = n('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), g.append(E)), 0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), g.append(T)), E.length && (E[0].style.opacity = 0 < y ? y : 0), T.length && (T[0].style.opacity = 0 < -y ? -y : 0)
                        }
                    }(d.pointerEvents || d.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = h + "px 50%")
                },
                setTransition: function(t) { this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t) }
            },
            et = {
                init: function() {
                    var t = this,
                        e = t.params.thumbs,
                        i = t.constructor;
                    e.swiper instanceof i ? (t.thumbs.swiper = e.swiper, c.extend(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), c.extend(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : c.isObject(e.swiper) && (t.thumbs.swiper = new i(c.extend({}, e.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), t.thumbs.swiperCreated = !0), t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", t.thumbs.onThumbClick)
                },
                onThumbClick: function() {
                    var t = this,
                        e = t.thumbs.swiper;
                    if (e) {
                        var i = e.clickedIndex;
                        if (null != i) {
                            var s;
                            if (s = e.params.loop ? parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i, t.params.loop) {
                                var r = t.activeIndex;
                                t.slides.eq(r).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, r = t.activeIndex);
                                var o = t.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                    a = t.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                                s = void 0 === o ? a : void 0 === a ? o : a - r < r - o ? a : o
                            }
                            t.slideTo(s)
                        }
                    }
                },
                update: function(t) {
                    var e = this,
                        i = e.thumbs.swiper;
                    if (i) {
                        var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                        if (e.realIndex !== i.realIndex) {
                            var s, r = i.activeIndex;
                            if (i.params.loop) {
                                i.slides.eq(r).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, r = i.activeIndex);
                                var o = i.slides.eq(r).prevAll('[data-swiper-slide-index="' + e.realIndex + '"]').eq(0).index(),
                                    a = i.slides.eq(r).nextAll('[data-swiper-slide-index="' + e.realIndex + '"]').eq(0).index();
                                s = void 0 === o ? a : void 0 === a ? o : a - r < r - o ? a : o
                            } else s = e.realIndex;
                            i.visibleSlidesIndexes.indexOf(s) < 0 && (i.params.centeredSlides ? s = r < s ? s - Math.floor(n / 2) + 1 : s + Math.floor(n / 2) - 1 : r < s && (s = s - n + 1), i.slideTo(s, t ? 0 : void 0))
                        }
                        var l = 1,
                            c = e.params.thumbs.slideThumbActiveClass;
                        if (1 < e.params.slidesPerView && !e.params.centeredSlides && (l = e.params.slidesPerView), i.slides.removeClass(c), i.params.loop)
                            for (var d = 0; d < l; d += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (e.realIndex + d) + '"]').addClass(c);
                        else
                            for (var h = 0; h < l; h += 1) i.slides.eq(e.realIndex + h).addClass(c)
                    }
                }
            },
            it = [D, O, P, L, I, Y, F, {
                name: "mousewheel",
                params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                create: function() {
                    var t = this;
                    c.extend(t, { mousewheel: { enabled: !1, enable: j.enable.bind(t), disable: j.disable.bind(t), handle: j.handle.bind(t), handleMouseEnter: j.handleMouseEnter.bind(t), handleMouseLeave: j.handleMouseLeave.bind(t), lastScrollTime: c.now() } })
                },
                on: { init: function() { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function() { this.mousewheel.enabled && this.mousewheel.disable() } }
            }, {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function() { c.extend(this, { navigation: { init: N.init.bind(this), update: N.update.bind(this), destroy: N.destroy.bind(this) } }) },
                on: {
                    init: function() { this.navigation.init(), this.navigation.update() },
                    toEdge: function() { this.navigation.update() },
                    fromEdge: function() { this.navigation.update() },
                    destroy: function() { this.navigation.destroy() },
                    click: function(t) {
                        var e = this.navigation,
                            i = e.$nextEl,
                            s = e.$prevEl;
                        !this.params.navigation.hideOnClick || n(t.target).is(s) || n(t.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            }, {
                name: "pagination",
                params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function(t) { return t }, formatFractionTotal: function(t) { return t }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } },
                create: function() {
                    var t = this;
                    c.extend(t, { pagination: { init: R.init.bind(t), render: R.render.bind(t), update: R.update.bind(t), destroy: R.destroy.bind(t), dynamicBulletIndex: 0 } })
                },
                on: {
                    init: function() { this.pagination.init(), this.pagination.render(), this.pagination.update() },
                    activeIndexChange: function() { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() },
                    snapIndexChange: function() { this.params.loop || this.pagination.update() },
                    slidesLengthChange: function() { this.params.loop && (this.pagination.render(), this.pagination.update()) },
                    snapGridLengthChange: function() { this.params.loop || (this.pagination.render(), this.pagination.update()) },
                    destroy: function() { this.pagination.destroy() },
                    click: function(t) {
                        var e = this;
                        e.params.pagination.el && e.params.pagination.hideOnClick && 0 < e.pagination.$el.length && !n(t.target).hasClass(e.params.pagination.bulletClass) && e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
                    }
                }
            }, {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create: function() {
                    var t = this;
                    c.extend(t, { scrollbar: { init: W.init.bind(t), destroy: W.destroy.bind(t), updateSize: W.updateSize.bind(t), setTranslate: W.setTranslate.bind(t), setTransition: W.setTransition.bind(t), enableDraggable: W.enableDraggable.bind(t), disableDraggable: W.disableDraggable.bind(t), setDragPosition: W.setDragPosition.bind(t), onDragStart: W.onDragStart.bind(t), onDragMove: W.onDragMove.bind(t), onDragEnd: W.onDragEnd.bind(t), isTouched: !1, timeout: null, dragTimeout: null } })
                },
                on: { init: function() { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function() { this.scrollbar.updateSize() }, resize: function() { this.scrollbar.updateSize() }, observerUpdate: function() { this.scrollbar.updateSize() }, setTranslate: function() { this.scrollbar.setTranslate() }, setTransition: function(t) { this.scrollbar.setTransition(t) }, destroy: function() { this.scrollbar.destroy() } }
            }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { c.extend(this, { parallax: { setTransform: H.setTransform.bind(this), setTranslate: H.setTranslate.bind(this), setTransition: H.setTransition.bind(this) } }) }, on: { beforeInit: function() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, init: function() { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function() { this.params.parallax && this.parallax.setTranslate() }, setTransition: function(t) { this.params.parallax && this.parallax.setTransition(t) } } }, {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create: function() {
                    var t = this,
                        e = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) { e[i] = B[i].bind(t) }), c.extend(t, { zoom: e })
                },
                on: { init: function() { this.params.zoom.enabled && this.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(t) { this.zoom.enabled && this.zoom.onTouchStart(t) }, touchEnd: function(t) { this.zoom.enabled && this.zoom.onTouchEnd(t) }, doubleTap: function(t) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t) }, transitionEnd: function() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } }
            }, {
                name: "lazy",
                params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } },
                create: function() { c.extend(this, { lazy: { initialImageLoaded: !1, load: V.load.bind(this), loadInSlide: V.loadInSlide.bind(this) } }) },
                on: {
                    beforeInit: function() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) },
                    init: function() { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() },
                    scroll: function() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() },
                    resize: function() { this.params.lazy.enabled && this.lazy.load() },
                    scrollbarDragMove: function() { this.params.lazy.enabled && this.lazy.load() },
                    transitionStart: function() {
                        var t = this;
                        t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !t.lazy.initialImageLoaded) && t.lazy.load()
                    },
                    transitionEnd: function() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() }
                }
            }, {
                name: "controller",
                params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                create: function() {
                    var t = this;
                    c.extend(t, { controller: { control: t.params.controller.control, getInterpolateFunction: q.getInterpolateFunction.bind(t), setTranslate: q.setTranslate.bind(t), setTransition: q.setTransition.bind(t) } })
                },
                on: { update: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function(t, e) { this.controller.control && this.controller.setTranslate(t, e) }, setTransition: function(t, e) { this.controller.control && this.controller.setTransition(t, e) } }
            }, {
                name: "a11y",
                params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } },
                create: function() {
                    var t = this;
                    c.extend(t, { a11y: { liveRegion: n('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(G).forEach(function(e) { t.a11y[e] = G[e].bind(t) })
                },
                on: { init: function() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function() { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function() { this.params.a11y.enabled && this.a11y.destroy() } }
            }, {
                name: "history",
                params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                create: function() {
                    var t = this;
                    c.extend(t, { history: { init: X.init.bind(t), setHistory: X.setHistory.bind(t), setHistoryPopState: X.setHistoryPopState.bind(t), scrollToSlide: X.scrollToSlide.bind(t), destroy: X.destroy.bind(t) } })
                },
                on: { init: function() { this.params.history.enabled && this.history.init() }, destroy: function() { this.params.history.enabled && this.history.destroy() }, transitionEnd: function() { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } }
            }, {
                name: "hash-navigation",
                params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                create: function() {
                    var t = this;
                    c.extend(t, { hashNavigation: { initialized: !1, init: U.init.bind(t), destroy: U.destroy.bind(t), setHash: U.setHash.bind(t), onHashCange: U.onHashCange.bind(t) } })
                },
                on: { init: function() { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function() { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function() { this.hashNavigation.initialized && this.hashNavigation.setHash() } }
            }, {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create: function() {
                    var t = this;
                    c.extend(t, { autoplay: { running: !1, paused: !1, run: Z.run.bind(t), start: Z.start.bind(t), stop: Z.stop.bind(t), pause: Z.pause.bind(t), onTransitionEnd: function(e) { t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) } } })
                },
                on: { init: function() { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function(t, e) { this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop()) }, sliderFirstMove: function() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function() { this.autoplay.running && this.autoplay.stop() } }
            }, {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function() { c.extend(this, { fadeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        var t = this;
                        if ("fade" === t.params.effect) {
                            t.classNames.push(t.params.containerModifierClass + "fade");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            c.extend(t.params, e), c.extend(t.originalParams, e)
                        }
                    },
                    setTranslate: function() { "fade" === this.params.effect && this.fadeEffect.setTranslate() },
                    setTransition: function(t) { "fade" === this.params.effect && this.fadeEffect.setTransition(t) }
                }
            }, {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } },
                create: function() { c.extend(this, { cubeEffect: { setTranslate: K.setTranslate.bind(this), setTransition: K.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        var t = this;
                        if ("cube" === t.params.effect) {
                            t.classNames.push(t.params.containerModifierClass + "cube"), t.classNames.push(t.params.containerModifierClass + "3d");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                            c.extend(t.params, e), c.extend(t.originalParams, e)
                        }
                    },
                    setTranslate: function() { "cube" === this.params.effect && this.cubeEffect.setTranslate() },
                    setTransition: function(t) { "cube" === this.params.effect && this.cubeEffect.setTransition(t) }
                }
            }, {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function() { c.extend(this, { flipEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        var t = this;
                        if ("flip" === t.params.effect) {
                            t.classNames.push(t.params.containerModifierClass + "flip"), t.classNames.push(t.params.containerModifierClass + "3d");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            c.extend(t.params, e), c.extend(t.originalParams, e)
                        }
                    },
                    setTranslate: function() { "flip" === this.params.effect && this.flipEffect.setTranslate() },
                    setTransition: function(t) { "flip" === this.params.effect && this.flipEffect.setTransition(t) }
                }
            }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { c.extend(this, { coverflowEffect: { setTranslate: tt.setTranslate.bind(this), setTransition: tt.setTransition.bind(this) } }) }, on: { beforeInit: function() { var t = this; "coverflow" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "coverflow"), t.classNames.push(t.params.containerModifierClass + "3d"), t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function(t) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t) } } }, {
                name: "thumbs",
                params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create: function() { c.extend(this, { thumbs: { swiper: null, init: et.init.bind(this), update: et.update.bind(this), onThumbClick: et.onThumbClick.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        var t = this.params.thumbs;
                        t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                    },
                    slideChange: function() { this.thumbs.swiper && this.thumbs.update() },
                    update: function() { this.thumbs.swiper && this.thumbs.update() },
                    resize: function() { this.thumbs.swiper && this.thumbs.update() },
                    observerUpdate: function() { this.thumbs.swiper && this.thumbs.update() },
                    setTransition: function(t) {
                        var e = this.thumbs.swiper;
                        e && e.setTransition(t)
                    },
                    beforeDestroy: function() {
                        var t = this.thumbs.swiper;
                        t && this.thumbs.swiperCreated && t && t.destroy()
                    }
                }
            }];
        return void 0 === M.use && (M.use = M.Class.use, M.installModule = M.Class.installModule), M.use(it), M
    });