(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 29 ], {
    1262: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<svg version="1.1" width="24" height="24" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" class="icon icon-image"><path class="st0" d="M3,19l18-0.0509v-1.8566c-0.5625-0.4153-2.8125-3.7224-3.7303-3.6811 c-0.6961,0.0581-3.2098,2.7783-4.0665,2.7783c-0.7671,0-4.3314-5.0188-5.184-5.0188C7.1666,11.1709,3,15.909,3,16.6772V19z"/><circle class="st0" cx="16.0085" cy="8.0088" r="1.75"/><path class="st0" d="M1,3v18h22V3H1z M22,20H2V4h20V20z"/></svg>'), 
                i.fl();
            },
            partials: {},
            subs: {}
        }, '<svg version="1.1" width="24" height="24" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" class="icon icon-image"><path class="st0" d="M3,19l18-0.0509v-1.8566c-0.5625-0.4153-2.8125-3.7224-3.7303-3.6811 c-0.6961,0.0581-3.2098,2.7783-4.0665,2.7783c-0.7671,0-4.3314-5.0188-5.184-5.0188C7.1666,11.1709,3,15.909,3,16.6772V19z"/><circle class="st0" cx="16.0085" cy="8.0088" r="1.75"/><path class="st0" d="M1,3v18h22V3H1z M22,20H2V4h20V20z"/></svg>', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1288: function(t, e, n) {
        t.exports = n(2)(115);
    },
    1459: function(t, e, n) {
        var i = n(1943);
        "string" == typeof i && (i = [ [ t.i, i, "" ] ]), i.locals && (t.exports = i.locals);
        (0, n(190).default)("2d72d9d6", i, !0, {});
    },
    1460: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<a href="'), i.b(i.v(i.f("url", t, e, 0))), i.b('" class="graphic">'), 
                i.b("\n" + n), i.b('<div class="activity-block project-collection user-projects">'), 
                i.b("\n" + n), i.s(i.f("latest_projects", t, e, 1), t, e, 0, 119, 318, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('  <div class="collection-project-image-wrap">'), i.b("\n" + n), i.b('    <img alt="'), 
                    i.b(i.v(i.f("name", t, e, 0))), i.b('" title="'), i.b(i.v(i.f("name", t, e, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("covers.115", t, e, 0))), i.b('" srcset="'), i.b(i.v(i.d("covers.115", t, e, 0))), 
                    i.b(", "), i.b(i.v(i.d("covers.202", t, e, 0))), i.b(' 2x" class="collection-project-image" />'), 
                    i.b("\n" + n), i.b("  </div>"), i.b("\n" + n);
                })), t.pop()), i.b("</div>"), i.b("\n" + n), i.b("</a>"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<a href="{{url}}" class="graphic">\n<div class="activity-block project-collection user-projects">\n  {{#latest_projects}}\n  <div class="collection-project-image-wrap">\n    <img alt="{{name}}" title="{{name}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="collection-project-image" />\n  </div>\n  {{/latest_projects}}\n</div>\n</a>', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1461: function(t, e, n) {
        var i = n(1981);
        "string" == typeof i && (i = [ [ t.i, i, "" ] ]), i.locals && (t.exports = i.locals);
        (0, n(190).default)("6ec01f31", i, !0, {});
    },
    1896: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="activity-container js-'), i.b(i.v(i.f("type", t, e, 0))), 
                i.b('-activity">'), i.b("\n" + n), i.b('  <h2 class="bell-title '), i.b(i.v(i.f("type", t, e, 0))), 
                i.b('-title hide-phone js-bell-title">'), i.b(i.v(i.f("title", t, e, 0))), i.b("</h2>"), 
                i.b("\n" + n), i.b('  <h2 class="bell-title bell-title-dummy hide-phone js-bell-title-dummy">'), 
                i.b(i.v(i.f("title", t, e, 0))), i.b("</h2>"), i.b("\n" + n), i.b('  <div class="js-error-container messages hide">'), 
                i.b("\n" + n), i.b('    <div class="error">'), i.b("\n" + n), i.b('      <div class="icon"></div>'), 
                i.b("\n" + n), i.b('      <span class="js-error-text"></span>'), i.b("\n" + n), 
                i.b("    </div>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b('  <div class="js-spin loading-spinner cfix"></div>'), 
                i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="activity-container js-{{type}}-activity">\n  <h2 class="bell-title {{type}}-title hide-phone js-bell-title">{{title}}</h2>\n  <h2 class="bell-title bell-title-dummy hide-phone js-bell-title-dummy">{{title}}</h2>\n  <div class="js-error-container messages hide">\n    <div class="error">\n      <div class="icon"></div>\n      <span class="js-error-text"></span>\n    </div>\n  </div>\n  <div class="js-spin loading-spinner cfix"></div>\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1928: function(t, e, n) {
        "use strict";
        var i = n(0), a = n(17), r = n(65), s = Object(r.default)({}, (function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 152.5 28.2"
                }
            }, [ e("path", {
                attrs: {
                    d: "M13.1 0c1.3 0 2.5.1 3.6.4 1.1.2 2 .6 2.8 1.1.8.5 1.4 1.2 1.8 2.1.4.9.6 2 .6 3.2 0 1.4-.3 2.6-1 3.5-.6.9-1.6 1.7-2.8 2.3 1.7.5 3 1.4 3.8 2.6.8 1.2 1.3 2.7 1.3 4.4 0 1.4-.3 2.6-.8 3.6s-1.3 1.9-2.2 2.5c-.9.6-2 1.1-3.2 1.4-1.2.3-2.4.5-3.6.5H0V0h13.1zm-.8 11.2c1.1 0 2-.3 2.7-.8.7-.5 1-1.4 1-2.5 0-.6-.1-1.2-.3-1.6-.2-.4-.5-.7-.9-1-.4-.2-.8-.4-1.3-.5-.5-.1-1-.1-1.6-.1H6.1v6.5h6.2zm.3 11.8c.6 0 1.2-.1 1.7-.2s1-.3 1.4-.6c.4-.3.7-.6 1-1.1.2-.5.4-1.1.4-1.8 0-1.4-.4-2.4-1.2-3.1-.8-.6-1.9-.9-3.2-.9H6.1V23h6.5zm19.3-.1c.8.8 2 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.9c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.6-.8 4.2-.8 1.7 0 3.2.3 4.5 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.2 1.4.3 2.8.2 4.4H30.5c0 1.6.6 3.1 1.4 3.9zm6.3-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1 .7-1.4 1.1-.4.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.2-1.5-.7-2.5-1.4-3.2zM52.8 0v10.4h.1c.7-1.2 1.6-2 2.7-2.5s2.1-.8 3.2-.8c1.5 0 2.7.2 3.6.6.9.4 1.7 1 2.2 1.7.5.7.9 1.6 1.1 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.2-2.7-1.2-1.5 0-2.6.5-3.2 1.3-.7.9-1 2.4-1 4.4v10.5h-5.5V0h5.5zM70 10.6c.6-.9 1.3-1.5 2.2-2.1.9-.5 1.9-.9 3-1.1 1.1-.2 2.2-.3 3.3-.3 1 0 2 .1 3.1.2 1 .1 2 .4 2.8.8.9.4 1.5 1 2.1 1.7.5.7.8 1.7.8 2.9v10.5c0 .9.1 1.8.2 2.6s.4 1.5.7 1.9h-5.6c-.2-.2-.3-.6-.4-.9-.1-.3-.1-.7-.1-1-.9.9-1.9 1.5-3.1 1.9-1.2.4-2.4.5-3.6.5-1 0-1.8-.1-2.7-.4-.8-.2-1.5-.6-2.2-1.1-.6-.5-1.1-1.1-1.5-1.9-.3-.8-.5-1.6-.5-2.7s.2-2.1.6-2.8c.4-.7.9-1.3 1.5-1.8.6-.4 1.4-.8 2.2-1 .8-.2 1.6-.4 2.5-.5l2.4-.3c.8-.1 1.5-.2 2.1-.3.6-.2 1.1-.4 1.5-.7.4-.3.5-.7.5-1.3 0-.6-.1-1.1-.3-1.4-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.4-.4-.1-.9-.1-1.4-.1-1.1 0-1.9.2-2.5.7-.6.5-1 1.3-1.1 2.3h-5.5c0-1.2.4-2.3.9-3.1zm10.9 7.8c-.3.1-.7.2-1.1.3-.4.1-.8.1-1.3.2-.4.1-.9.1-1.3.2l-1.2.3c-.4.1-.8.3-1 .5-.3.2-.5.5-.7.8-.3.4-.3.8-.3 1.3s.1.9.3 1.2c.2.3.4.6.7.8.3.2.7.3 1.1.4.4.1.8.1 1.3.1 1.1 0 1.9-.2 2.5-.5.6-.4 1-.8 1.3-1.3.3-.5.5-1 .5-1.5.1-.5.1-.9.1-1.2v-2.1c-.3.2-.6.4-.9.5zM95.6 7.6v2.8h.1c.7-1.2 1.6-2 2.7-2.5s2.3-.8 3.4-.8c1.5 0 2.7.2 3.6.6 1 .4 1.7 1 2.2 1.7.5.7.9 1.6 1.2 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.3-2.8-1.3-1.5 0-2.6.6-3.3 1.5-.7.9-1 2.4-1 4.4v10.5h-5.5V7.6h5.4zm25.8 3.6c-.9 0-1.6.2-2.2.6-.6.4-1.1.9-1.5 1.6-.4.6-.6 1.3-.8 2.1-.2.8-.2 1.5-.2 2.3 0 .7.1 1.5.2 2.2.2.8.4 1.4.8 2 .4.6.8 1.1 1.4 1.5.6.4 1.3.6 2.2.6 1.3 0 2.3-.4 3.1-1.1.7-.7 1.2-1.7 1.3-3h5.3c-.4 2.7-1.4 4.7-3.1 6.1-1.7 1.4-3.9 2.1-6.6 2.1-1.5 0-2.9-.3-4.1-.8-1.3-.5-2.3-1.2-3.2-2.1-.9-.9-1.6-2-2.1-3.2-.5-1.3-.7-2.6-.7-4.1 0-1.6.2-3 .7-4.3.5-1.3 1.1-2.5 2-3.5.9-1 2-1.7 3.2-2.3 1.3-.5 2.7-.8 4.3-.8 1.2 0 2.3.2 3.4.5s2.1.8 2.9 1.4c.9.6 1.6 1.4 2.1 2.4.5.9.8 2.1.9 3.4h-5.4c-.2-2.4-1.5-3.6-3.9-3.6zm-92-9.3h11.2v2.7H29.4zm109.9 21c.8.8 2.1 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.8c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.7-.8 4.2-.8 1.7 0 3.2.3 4.4 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.4 1.4.5 2.9.4 4.5h-14.5c0 1.5.6 3 1.4 3.8zm6.4-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1.1.7-1.4 1.1-.3.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.3-1.5-.8-2.5-1.4-3.2z"
                }
            }) ]);
        }), [], !1, null, null, null).exports, o = n(453), l = Object(r.default)({}, (function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24.247 15.985"
                }
            }, [ e("g", {
                attrs: {
                    transform: "translate(-55 -103)"
                }
            }, [ e("path", {
                attrs: {
                    d: "M7.017,0A8.12,8.12,0,0,1,8.965.2,4.348,4.348,0,0,1,10.47.844a2.97,2.97,0,0,1,.967,1.194,4.51,4.51,0,0,1,.345,1.849,3.548,3.548,0,0,1-.511,1.98,3.76,3.76,0,0,1-1.519,1.3A3.627,3.627,0,0,1,11.8,8.619a4.516,4.516,0,0,1,.677,2.519,4.652,4.652,0,0,1-.428,2.053,4,4,0,0,1-1.174,1.427,5.18,5.18,0,0,1-1.7.815,7.238,7.238,0,0,1-1.948.262H0V0ZM6.6,6.348a2.275,2.275,0,0,0,1.437-.437,1.709,1.709,0,0,0,.566-1.427,1.928,1.928,0,0,0-.18-.9,1.306,1.306,0,0,0-.5-.539,1.875,1.875,0,0,0-.718-.277,4.038,4.038,0,0,0-.843-.073H3.274V6.362H6.6Zm.18,6.682a3.847,3.847,0,0,0,.925-.1,2.22,2.22,0,0,0,.774-.335,1.663,1.663,0,0,0,.539-.626,2.218,2.218,0,0,0,.193-1.019,2.1,2.1,0,0,0-.649-1.732,2.639,2.639,0,0,0-1.713-.51H3.274V13.03Z",
                    transform: "translate(55 103)",
                    fill: "#191919"
                }
            }), e("path", {
                attrs: {
                    d: "M101,36.468a2.585,2.585,0,0,0,1.92.684,2.528,2.528,0,0,0,1.547-.48,1.978,1.978,0,0,0,.787-1h2.611a5.142,5.142,0,0,1-1.92,2.926,5.339,5.339,0,0,1-3.122.888,5.9,5.9,0,0,1-2.307-.437,4.927,4.927,0,0,1-1.74-1.223,5.705,5.705,0,0,1-1.091-1.893,7.123,7.123,0,0,1-.387-2.417,6.989,6.989,0,0,1,.4-2.373,5.354,5.354,0,0,1,5.139-3.64,4.921,4.921,0,0,1,2.4.568,5.038,5.038,0,0,1,1.685,1.5,6.262,6.262,0,0,1,.953,2.155,8.491,8.491,0,0,1,.207,2.533h-7.777A3.094,3.094,0,0,0,101,36.468Zm3.412-5.969a2.154,2.154,0,0,0-1.671-.626,2.36,2.36,0,0,0-1.174.262,2.514,2.514,0,0,0-.746.626,2.409,2.409,0,0,0-.4.8,3.316,3.316,0,0,0-.138.742H105.1A3.267,3.267,0,0,0,104.414,30.5Z",
                    transform: "translate(-28.86 79.504)",
                    fill: "#191919"
                }
            }), e("rect", {
                attrs: {
                    width: "6.036",
                    height: "1.543",
                    transform: "translate(70.802 104.048)",
                    fill: "#191919"
                }
            }) ]) ]);
        }), [], !1, null, null, null).exports, c = n(1937), p = n(1455), d = Object(r.default)({}, (function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "5673 837 16 16"
                }
            }, [ e("g", [ e("path", {
                attrs: {
                    d: "M5680.86 846.605a.18.18 0 0 0 .21 0l7.86-5.764v-.46a.7.7 0 0 0-.724-.662h-14.482a.7.7 0 0 0-.724.663v.46z"
                }
            }), e("path", {
                attrs: {
                    d: "M5688.93 842.426l-4.378 3.21 4.38 2.41z"
                }
            }), e("path", {
                attrs: {
                    d: "M5683.428 846.46l-1.514 1.11a1.663 1.663 0 0 1-1.9 0l-1.514-1.116-5.5 3.032v.85a.7.7 0 0 0 .724.665h14.482a.7.7 0 0 0 .724-.663v-.85z"
                }
            }), e("path", {
                attrs: {
                    d: "M5677.372 845.63l-4.372-3.205v5.618z"
                }
            }) ]) ]);
        }), [], !1, null, null, null).exports, u = Object(r.default)({}, (function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "13",
                    height: "13",
                    viewBox: "5641 835.999 14 17.001"
                }
            }, [ e("g", [ e("path", {
                attrs: {
                    d: "M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z"
                }
            }), e("path", {
                attrs: {
                    d: "M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z"
                }
            }), e("path", {
                attrs: {
                    d: "M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z"
                }
            }), e("path", {
                attrs: {
                    d: "M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z"
                }
            }) ]) ]);
        }), [], !1, null, null, null).exports, b = Object(r.default)({}, (function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 207.5 183.6"
                },
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "20px",
                    height: "18px",
                    viewBox: "0 0 207.5 183.6",
                    "xml:space": "preserve"
                }
            }, [ n("polygon", {
                attrs: {
                    points: "130.8,0 207.5,0 207.5,183.6 "
                }
            }), n("polygon", {
                attrs: {
                    points: "76.7,0 0,0 0,183.6 "
                }
            }), n("polygon", {
                attrs: {
                    points: "103.8,67.7 152.6,183.6 120.6,183.6 106,146.7 70.2,146.7 "
                }
            }), n("title", [ t._v("Adobe") ]) ]);
        }), [], !1, null, null, null).exports, m = n(357), v = n(358), f = n(1931), h = n(116), g = n(81), y = n(1), _ = "/v2/notifications/count";
        function w() {
            return Object(i.__awaiter)(this, void 0, Promise, (function() {
                return Object(i.__generator)(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return [ 4, Object(y.default)({
                            url: _,
                            type: y.HTTPVerb.GET,
                            data: {
                                action_set: "bell-count-v1"
                            }
                        }) ];

                      case 1:
                        return [ 2, t.sent() ];
                    }
                }));
            }));
        }
        function x() {
            return Object(i.__awaiter)(this, void 0, Promise, (function() {
                return Object(i.__generator)(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return [ 4, Object(y.default)({
                            url: "/v2/notifications",
                            type: y.HTTPVerb.DELETE,
                            data: {
                                action_set: "bell-count-v1"
                            }
                        }) ];

                      case 1:
                        return [ 2, t.sent() ];
                    }
                }));
            }));
        }
        function N() {
            return Object(i.__awaiter)(this, void 0, Promise, (function() {
                return Object(i.__generator)(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return [ 4, Object(y.default)({
                            url: _,
                            type: y.HTTPVerb.GET,
                            data: {
                                action_set: "inbox-v1"
                            }
                        }) ];

                      case 1:
                        return [ 2, t.sent() ];
                    }
                }));
            }));
        }
        var k, P, j = n(1261), $ = "FETCH_NOTIFICATION_COUNT", T = "FETCH_MESSAGE_COUNT", L = "RESET_NOTIFICATION_COUNT", C = "FETCH_RESULTS", O = "UPDATE_NOTIFICATION_COUNT", A = "UPDATE_MESSAGE_COUNT", M = "UPDATE_TYPEAHEAD_RESULTS", E = "UPDATE_LAST_SEARCH_TERM", I = {
            namespaced: !0,
            state: function() {
                return {
                    messageCount: 0,
                    notificationCount: 0,
                    isMinimal: !1,
                    hideCreateProjectButton: !1,
                    hideActivateButton: !1,
                    typeaheadResults: [],
                    lastSearchTerm: ""
                };
            },
            actions: (k = {}, k.FETCH_NOTIFICATION_COUNT = function(t) {
                var e = t.commit, n = t.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var t, a;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, w() ];

                          case 1:
                            return t = i.sent().count, e(O, t), [ 3, 4 ];

                          case 2:
                            return a = i.sent(), [ 4, n("error", a, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k.FETCH_MESSAGE_COUNT = function(t) {
                var e = t.commit, n = t.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var t, a;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, N() ];

                          case 1:
                            return t = i.sent().count, e(A, t), [ 3, 4 ];

                          case 2:
                            return a = i.sent(), [ 4, n("error", a, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k.RESET_NOTIFICATION_COUNT = function(t) {
                var e = t.commit, n = t.dispatch;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, x() ];

                          case 1:
                            return i.sent(), e(O, 0), [ 3, 4 ];

                          case 2:
                            return t = i.sent(), [ 4, n("error", t, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k.FETCH_RESULTS = function(t, e) {
                var n = t.commit, a = t.dispatch, r = e.term;
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var t, e;
                    return Object(i.__generator)(this, (function(i) {
                        switch (i.label) {
                          case 0:
                            return i.trys.push([ 0, 2, , 4 ]), [ 4, j.a.getResults(r) ];

                          case 1:
                            return t = i.sent(), n(M, t), n(E, r), [ 3, 4 ];

                          case 2:
                            return e = i.sent(), [ 4, a("error", e, {
                                root: !0
                            }) ];

                          case 3:
                            return i.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, k),
            mutations: (P = {}, P.UPDATE_NOTIFICATION_COUNT = function(t, e) {
                t.notificationCount = e;
            }, P.UPDATE_MESSAGE_COUNT = function(t, e) {
                t.messageCount = e;
            }, P.UPDATE_TYPEAHEAD_RESULTS = function(t, e) {
                t.typeaheadResults = e;
            }, P.UPDATE_LAST_SEARCH_TERM = function(t, e) {
                t.lastSearchTerm = e;
            }, P)
        }, S = n(375), U = n(1942);
        var B = Object(r.default)({}, (function() {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("transition", {
                attrs: {
                    "enter-active-class": t.$style.enterActive,
                    "leave-active-class": t.$style.leaveActive
                }
            }, [ t._t("default") ], 2);
        }), [], !1, (function(t) {
            this.$style = U.default.locals || U.default;
        }), null, null).exports, R = n(23), H = n(146), W = n(180), z = n(136), D = n(182), V = n(1944), F = (n(44), 
        n(11), n(12), n(45), n(46), n(370)), Y = n.n(F), G = n(431), q = n.n(G), Z = n(432), K = (n(40), 
        n(21), n(24), n(25), n(387)), J = n.n(K), Q = n(599), X = n.n(Q), tt = (n(52), n(341)), et = n.n(tt), nt = n(111), it = n.n(nt), at = n(388), rt = n.n(at), st = n(1945), ot = n.n(st), lt = n(1946), ct = n.n(lt), pt = n(1947), dt = n.n(pt), ut = n(1948), bt = n.n(ut), mt = n(1949), vt = n.n(mt), ft = n(1950), ht = n.n(ft), gt = n(1951), yt = n.n(gt), _t = n(1952), wt = n.n(_t), xt = n(1953), Nt = n.n(xt), kt = n(1954), Pt = n.n(kt), jt = n(1955), $t = n.n(jt), Tt = n(1956), Lt = n.n(Tt), Ct = n(1957), Ot = n.n(Ct), At = n(1958), Mt = n.n(At), Et = n(1959), It = n.n(Et), St = n(1960), Ut = n.n(St), Bt = n(1962), Rt = n.n(Bt), Ht = n(1963), Wt = n.n(Ht), zt = n(1964), Dt = n.n(zt), Vt = n(1965), Ft = n.n(Vt), Yt = n(1966), Gt = n.n(Yt), qt = {
            appreciate: ct.a.template,
            followcollection: Ot.a.template,
            projectcomment: bt.a.template,
            followuser: vt.a.template,
            projectaddedtocollection: yt.a.template,
            moduleaddedtocollection: Gt.a.template,
            usermentionprojectcomment: ht.a.template,
            addtoshortlist: wt.a.template,
            addtodiscovered: Nt.a.template,
            jobshared: Pt.a.template,
            jobapplicationcreated: $t.a.template,
            jobrecommendationsreceived: Lt.a.template,
            notecreated: Mt.a.template,
            jobarchived: It.a.template,
            storysegmentreaction: Ut.a.template,
            storyuserreengaged: Rt.a.template,
            storyfirstpost: Wt.a.template,
            storysegmentmention: Dt.a.template,
            livestreamstarted: Ft.a.template
        }, Zt = {
            generatePartials: function(t) {
                return {
                    innard: qt[t.action_key],
                    comment: dt.a.template
                };
            }
        }, Kt = n(1967), Jt = n.n(Kt), Qt = rt.a.extend({
            template: function(t) {
                return et()(Jt()(t, this.generatePartials(t)));
            },
            templateData: function() {
                var t = this._super();
                return t.time_ago = function() {
                    return it.a.unix(t.created_on).fromNow();
                }, t.assetsurl = R.ASSETS_URL, t;
            },
            rendered: function() {
                this.$view.find(".comment-text").contents().toArray().forEach((function(t) {
                    ot()(t, 4);
                }));
            },
            update: function() {
                if (this.$view) {
                    var t = this.templateData().time_ago();
                    this.$view.removeClass("unread").find(".time").text(t);
                }
            }
        }).mixin(Zt), Xt = J.a.extend({
            update: function() {
                this._view.update();
            },
            wasRead: function() {
                return !!this._model.get("read_on");
            }
        }, {
            VIEW_CLASS: Qt
        }), te = (n(85), n(440), n(821)), ee = n.n(te), ne = n(1968), ie = n.n(ne), ae = rt.a.extend({
            template: ee()(ie.a, et.a),
            templateData: function() {
                var t = this._super();
                return t.any_unread = this._model.get("entries").some((function(t) {
                    return !t.wasRead();
                })), t;
            },
            draw: function(t) {
                var e, n = this, i = this._model.get("entries");
                i && i.length && (this._iterator = this._iterator || 0, i = i.slice(this._iterator, +t ? this._iterator += t : void 0), 
                e = this.$view.find(".js-context"), i.forEach((function(t) {
                    t.render(e);
                })), this._iterator || X()((function() {
                    n._iterator = 0;
                })));
            },
            markAsRead: function() {
                this.$view.removeClass("unread");
            },
            rendered: function() {
                this.draw(3);
                var t = this._model.get("entries").length - (this._iterator || 0);
                t ? this.$view.on("click", ".js-more", (function() {
                    et()(this).hide();
                })).one("click", ".js-more", this.draw.bind(this)).find(".count").text(t) : this.$view.find(".js-more").hide();
            }
        }), re = J.a.extend({
            add: function(t) {
                var e = this._model.get("entries") || [];
                e.push(t), this._model.set("entries", e);
            },
            update: function() {
                this._view.markAsRead(), this._forEachEntry((function(t) {
                    t.update();
                }));
            },
            _forEachEntry: function(t) {
                (this._model.get("entries") || []).forEach((function(e) {
                    t(e);
                }));
            },
            destroy: function() {
                this._forEachEntry((function(t) {
                    t.destroy();
                })), this._super();
            }
        }, {
            VIEW_CLASS: ae
        }), se = n(367), oe = n(609), le = n(1896), ce = n.n(le), pe = n(1969), de = n.n(pe), ue = rt.a.extend({
            template: ee()(ce.a, et.a),
            templateData: function() {
                return {
                    title: se.default.GLOBALNAV.NOTIFICATION_TITLE,
                    type: "notification"
                };
            },
            rendered: function() {
                this.$loading = oe.default.init(this.$view), this.listenTo(this._model, "entries", this.draw), 
                this.draw(this._model.get("entries"));
            },
            draw: function(t) {
                var e = this;
                t && (t.forEach((function(t) {
                    t.render(e.$view);
                })), this.empty(!t.length));
            },
            empty: function(t) {
                var e = !t;
                this.$empty = this.$empty || et()(de()()), e ? this.$empty.remove() : this.$view.append(this.$empty);
            }
        }), be = "/v2/notifications?action_set=bell-note-v1", me = J.a.extend({
            refresh: function() {
                if (!this._model.get("entries")) return this.more();
                this.block || this.get();
            },
            get: function t() {
                var e = t.bind(this), n = this._model, i = this.read({
                    onset_ts: n.get("onset")
                }).then((function(t) {
                    if (!t.notifications) throw t;
                    return n.set("onset", t.latest_ts), t.has_more && X()(e), t.notifications;
                })).then(this.constructor.makeEntries);
                return i.then((function(t) {
                    var e = n.get("entries") || [];
                    n.set("entries", t.concat(e));
                })).then(this.trigger.bind(this, "sync")), i;
            },
            more: function t() {
                if (!t.block) {
                    t.block = !0;
                    var e = this._model, n = this.read({
                        offset_ts: e.get("offset")
                    }).then((function(n) {
                        if (!n.notifications) throw n;
                        t.block = !n.has_more;
                        var i = e.data();
                        return i.onset = i.onset || n.latest_ts, i.offset = n.earliest_ts, n.notifications;
                    })).then(this.constructor.makeEntries);
                    return n.then((function(t) {
                        var n = e.get("entries") || [];
                        e.set("entries", n.concat(t));
                    })).then(this.trigger.bind(this, "sync")), n;
                }
            },
            read: function(t) {
                var e = this;
                try {
                    this._view.$loading.show();
                } catch (t) {}
                var n = function() {
                    e._view.$loading.hide();
                }, i = Object(y.default)({
                    url: be,
                    type: "get",
                    data: t
                });
                return i.then(n, n), i;
            },
            update: function() {
                var t = this._model.get("entries");
                t && t.length && t.forEach((function(t) {
                    t.update();
                }));
            },
            clear: function() {
                Object(y.default)({
                    url: be,
                    type: "delete"
                });
            }
        }, {
            VIEW_CLASS: ue,
            makeEntries: function(t) {
                var e, n, i, a = [], r = 0, s = t.filter((function(t) {
                    return t.data;
                }));
                for (n = 0; n < s.length; ++n) if (s[n + 1] && s[n + 1].action_key === s[n].action_key) r++; else {
                    if (r >= 2) {
                        for (e = new re, i = n - r; i <= n; ++i) e.add(new Xt(s[i]));
                        a.push(e);
                    } else for (i = n - r; i <= n; ++i) a.push(new Xt(s[i]));
                    r = 0;
                }
                return a;
            }
        }).mixin(Y.a), ve = (n(194), n(32), n(196), n(69), n(26), n(549)), fe = n.n(ve), he = n(366), ge = n.n(he), ye = n(5), _e = n(966), we = n(1972), xe = n.n(we), Ne = n(1973), ke = n.n(Ne), Pe = n(1974), je = n.n(Pe), $e = n(1975), Te = n.n($e), Le = n(1976), Ce = n.n(Le), Oe = n(1977), Ae = n.n(Oe), Me = ye.default.translate("notifications_invitation_declined", "Invitation declined"), Ee = {
            project_owner: {
                innards: je.a.template,
                subject: Ce.a.template
            },
            collection_owner: {
                innards: ke.a.template,
                subject: Ce.a.template
            },
            member_to_team: {
                innards: Te.a.template,
                subject: Ae.a.template
            },
            team_to_member: {
                innards: Te.a.template,
                subject: Ae.a.template
            },
            project_to_team: {
                innards: je.a.template,
                subject: Ae.a.template
            }
        }, Ie = {
            project_owner: ye.default.translate("notifications_coown_project", "invited you to co-own a Project"),
            collection_owner: ye.default.translate("notifications_coown_collection", "invited you to co-own a Collection"),
            member_to_team: ye.default.translate("notifications_request_join", "requested to join"),
            team_to_member: ye.default.translate("notifications_invite_join", "invited you to join"),
            project_to_team: ye.default.translate("notifications_request_add", "requested to add a project to")
        }, Se = rt.a.extend({
            events: {
                click: {
                    ".js-accept": "_acceptInvitation",
                    ".js-reject": "_rejectInvitation"
                }
            },
            template: function(t) {
                return et()(xe()(t, Ee[t.type]));
            },
            templateData: function() {
                var t = this._super();
                return ge()({
                    action: Ie[t.type],
                    actor: t.other_user,
                    proposition: "project",
                    time_ago: function() {
                        return it.a.unix(t.created_on).fromNow();
                    }
                }, t);
            },
            rendered: function() {
                this.$rejectBtn = this.$view.find(".js-reject"), this.$time = this.$view.find(".js-time"), 
                this._mapEvents();
            },
            update: function() {
                if (this.$view) {
                    var t = this.templateData().time_ago;
                    this.$time.text(t);
                }
            },
            acceptAndFade: function() {
                var t = new fe.a;
                return this.$view.fadeOut(250, t.resolve), t;
            },
            declineAndFade: function() {
                var t = new fe.a;
                return this.$rejectBtn.text(Me), this.$view.delay(1e3).fadeOut(250, t.resolve), 
                t;
            },
            _acceptInvitation: function() {
                this._controller.accept();
            },
            _rejectInvitation: function() {
                this._controller.reject();
            }
        }).mixin(_e.a), Ue = "/v2/notifications/invitations/", Be = J.a.extend({
            update: function() {
                this._view.update();
            },
            accept: function() {
                Object(y.default)({
                    url: Ue + this._model.get("id"),
                    type: "put"
                }).then(this._view.acceptAndFade.bind(this._view)).then(this._remove.bind(this)).then(null, this.trigger.bind(this, "error"));
            },
            reject: function() {
                Object(y.default)({
                    url: Ue + this._model.get("id"),
                    type: "delete"
                }).then(this._view.declineAndFade.bind(this._view)).then(this._remove.bind(this));
            },
            _remove: function() {
                this.trigger("resolve", this._model.get("id")), this.destroy();
            }
        }, {
            VIEW_CLASS: Se
        }).mixin(Y.a), Re = rt.a.extend({
            template: ee()(ce.a, et.a),
            templateData: function() {
                return {
                    title: se.default.GLOBALNAV.NOTIFICATION_PROPS_TITLE,
                    type: "propositions"
                };
            },
            rendered: function() {
                this.$errorContainer = this.$view.find(".js-error-container"), this.$loading = oe.default.init(this.$view), 
                this.$errorContainer.addClass("hide"), this.listenTo(this._model, "entries", this._draw), 
                this._draw(this._model.get("entries"));
            },
            update: function() {
                this.$errorContainer.addClass("hide");
            },
            showErrorMessages: function(t) {
                var e = t.messages.reduce((function(t, e) {
                    return t + "\n" + e.message;
                }), "");
                this.$errorContainer.find(".js-error-text").text(e).end().removeClass("hide");
            },
            _draw: function(t) {
                var e = this, n = this._model.get("order");
                t && Object.keys(t).length ? (this.$view.removeClass("hide"), n.forEach((function(n) {
                    var i = t[n];
                    i && i.render(e.$view);
                }))) : this.$view.addClass("hide");
            }
        }), He = J.a.extend({
            more: function t() {
                if (!t.block) {
                    t.block = !0;
                    var e = this, n = this._model, i = this.read();
                    return i.then((function(t) {
                        if (!t.invitations) throw t;
                        return t.invitations;
                    })).then((function(t) {
                        var n = t.map((function(t) {
                            return new Be(t);
                        }));
                        return n.forEach((function(t) {
                            e.listenTo(t, "resolve", e._updateEntries).listenTo(t, "error", e._displayErrors);
                        })), n;
                    })).then((function(t) {
                        var e = n.get("entries") || {}, i = n.get("order") || [], a = t.reduce((function(t, e) {
                            var n = e._model.get("id");
                            return t[n] = e, i.push(n), t;
                        }), e);
                        return n.set("order", i), n.set("entries", a), Object.keys(a).length;
                    })).then(this.trigger.bind(this, "sync")), i;
                }
            },
            count: function() {
                var t = this._model.get("entries");
                return t ? Object.keys(t).length : 0;
            },
            read: function() {
                var t = this;
                try {
                    this._view.$loading.show();
                } catch (t) {}
                var e = function() {
                    t._view.$loading.hide();
                }, n = Object(y.default)({
                    url: "/v2/notifications/invitations"
                });
                return n.then(e, e), n;
            },
            update: function() {
                var t = this._model.get("entries");
                this._view.update(), t && Object.keys(t).length && Object.keys(t).forEach((function(e) {
                    var n = t[e];
                    n && n.update();
                }));
            },
            _updateEntries: function(t) {
                var e = this._model.get("entries") || {}, n = this._model.get("order") || [];
                e[t] && (delete e[t], n.splice(n.indexOf(t), 1)), this._model.set("entries", e), 
                this._model.set("order", n), this.trigger("removed");
            },
            _displayErrors: function(t) {
                t && t.responseJSON && (t = t.responseJSON), this._view.showErrorMessages(t);
            }
        }, {
            VIEW_CLASS: Re
        }).mixin(Y.a), We = n(550), ze = n(485), De = n.n(ze), Ve = n(1288), Fe = n.n(Ve), Ye = n(1978), Ge = n.n(Ye), qe = {
            mustache: Fe.a,
            selector: ".js-notifications-nav-menu .popup-content .activity-container-wrap",
            templateData: function() {
                return {
                    title: ye.default.translate("notifications_title_short", "Notifications"),
                    classes: [ "notifications", "timeline-container", "js-notifications-nav-menu", "e2e-NotificationBell-nav-menu" ],
                    html: Ge.a
                };
            },
            rendered: function() {
                this._super(), this._bindScroll(), this._bindInfiniteScroll();
            },
            renderNotifications: function(t) {
                this.$notifications || (this.$notifications = this.$view.find(".js-notifications"), 
                t.render(this.$notifications));
            },
            renderPropositions: function(t) {
                this.$propositions || (this.$propositions = this.$view.find(".js-propositions"), 
                t.render(this.$propositions));
            },
            _bindInfiniteScroll: function() {
                var t = this, e = function() {
                    t._controller.more();
                };
                this._controller.more(), De()(.5, e, this.selector), this._controller.on("destroy", (function() {
                    De.a.off(e);
                }));
            },
            _bindScroll: function() {
                var t = this;
                this.$view.find(this.selector).on("scroll", (function() {
                    t.$headers = t.$headers || t.$view.find(".js-bell-title").toArray();
                    var e = t.$headers.map(function(t) {
                        var e = et()(t), n = e.position();
                        return e.is(".sticky") && (n = e.siblings(".js-bell-title-dummy").position()), {
                            $el: e,
                            offsetTop: n.top
                        };
                    }.bind(t)).filter((function(t) {
                        return t.$el.is(":visible");
                    })).reduce((function(t, e) {
                        return t ? e.offsetTop > 0 ? t : e.offsetTop > t.offsetTop ? e : t : e;
                    }));
                    e.$el.is(".js-bell-title-dummy") || (t.$currentHeader && t.$currentHeader.length && t.$currentHeader.removeClass("sticky"), 
                    e.$el.addClass("sticky"), t.$currentHeader = e.$el);
                }));
            }
        }, Ze = We.default.extend(qe), Ke = n(1979).default.extend(qe).extend({
            attachment: ".js-nav-primary"
        }), Je = Z.default.extend({
            init: function() {
                this._notifications = new me, this.listenTo(this._notifications, "sync", this._syncCount), 
                this._super.apply(this, arguments);
            },
            _initView: function() {
                this._super.apply(this, arguments), this.listenTo(this._view, "show", this.renderSections).listenTo(this._view, "show", this.updateSections).listenTo(this._view, "show", this._notifications.clear);
            },
            renderSections: function() {
                this._view.renderNotifications(this._notifications);
            },
            updateSections: function() {
                this._notifications.update();
            },
            _syncCount: function() {
                this.trigger("sync", this._count);
            },
            more: function() {
                return this._notifications.more();
            }
        }, {
            VIEW_CLASS: {
                phone: Ze,
                tablet: Ke,
                desktop: Ke
            }
        }).mixin(Y.a).extend({
            _count: 0,
            init: function() {
                this._propositions = new He, this.listenTo(this._propositions, "sync", (function(t) {
                    this._count += t, this._syncCount();
                })).listenTo(this._propositions, "removed", (function() {
                    this._count = Math.max(this._count - 1, 0), this._syncCount();
                })), this._super.apply(this, arguments);
            },
            renderSections: function() {
                this._super(), this._view.renderPropositions(this._propositions);
            },
            updateSections: function() {
                this._super(), this._propositions.update();
            },
            more: function() {
                return q.a.all([ this._super(), this._propositions.more() ]);
            }
        }), Qe = n(10), Xe = n(16), tn = n(39), en = n(15), nn = n(130), an = a.default.extend({
            components: {
                BehanceLogo: s,
                BehanceLogoTruncated: l,
                AlternateAdobeLogo: b,
                AdobeLockup2020: c.a,
                SearchIcon: p.a,
                MailIcon: d,
                Btn: m.default,
                NotificationIcon: u,
                Tooltip: v.a,
                Fade: S.a,
                Triangle: o.a,
                SearchTypeahead: f.a,
                FadeDown: B
            },
            data: function() {
                return {
                    isHamburgerMenuOpen: !1,
                    shouldRenderTooltip: !1,
                    URL_PROJECT_CREATE: R.URL_PROJECT_CREATE,
                    URL_HOME: R.URL_HOME,
                    URL_SEARCH: R.URL_SEARCH,
                    URL_SEARCH_IMAGES: R.URL_SEARCH_IMAGES,
                    URL_SEARCH_USERS: R.URL_SEARCH_USERS,
                    URL_SEARCH_MOODBOARDS: R.URL_SEARCH_MOODBOARDS,
                    URL_INBOX: R.URL_INBOX,
                    LOCALES: R.LOCALES,
                    URL_ACCOUNT_SETTINGS: R.URL_ACCOUNT_SETTINGS,
                    URL_ADMIN_DEFAULT: R.URL_ADMIN_DEFAULT,
                    WEB_TO_APP_BRANCH_URL: R.WEB_TO_APP_BRANCH_URL,
                    URL_ADOBE_CREATIVE_CLOUD_HOME: R.URL_ADOBE_CREATIVE_CLOUD_HOME,
                    URL_ONBOARDING_ADOBE: R.URL_ONBOARDING_ADOBE,
                    URL_BACK_TO_ADMIN: R.URL_BACK_TO_ADMIN,
                    inboxDialog: void 0,
                    bellDialog: void 0,
                    isMobileUserMenuShown: !1,
                    isMobile: !1,
                    trackingSource: "nav20"
                };
            },
            mounted: function() {
                return Object(i.__awaiter)(this, void 0, void 0, (function() {
                    var t = this;
                    return Object(i.__generator)(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return this.isLoggedIn ? [ 4, Promise.all([ this.fetchNotifications(), this.fetchMessages() ]) ] : [ 3, 2 ];

                          case 1:
                            e.sent(), this.$emit("countsFetched"), this.inboxDialog = new V.default, this.inboxDialog.setContext(et()(".js-notification-badge--email")), 
                            this.bellDialog = new Je, this.bellDialog.setContext(et()(".js-notification-badge--notification")), 
                            document.addEventListener("inboxThreadMarkedAsRead", this.fetchMessages), e.label = 2;

                          case 2:
                            return this.isMobile = nn.default.isMobile(), this.$store.state.gates.sign_in_tooltip_prompt && this.$route.name === h.b && setTimeout((function() {
                                return t.shouldRenderTooltip = !0;
                            }), 500), [ 2 ];
                        }
                    }));
                }));
            },
            beforeCreate: function() {
                this.$store.registerModule("primaryNav", I, {
                    preserveState: !!this.$store.state.primaryNav
                });
            },
            beforeDestroy: function() {
                document.removeEventListener("inboxThreadMarkedAsRead", this.fetchMessages), this.$store.unregisterModule("primaryNav");
            },
            methods: Object(i.__assign)(Object(i.__assign)({
                getUrl: function(t) {
                    return t + "?tracking_source=" + this.trackingSource;
                },
                navigateToInboxUrl: function() {
                    Xe.default.replaceLocation(R.URL_INBOX);
                },
                languageSelectChanged: function(t) {
                    var e = t.target.value;
                    en.default.setCookie(Qe.COOKIE.LANGUAGE_SETTING, e, {
                        expires: 365
                    }), tn.default.custom("localization", "Language changed by user", {
                        locale: e
                    }), Xe.default.reloadLocation();
                },
                toggleHamburgerMenu: function() {
                    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
                }
            }, Object(g.mapActions)("primaryNav", {
                fetchNotifications: $,
                fetchMessages: T,
                resetNotifications: L,
                fetchResults: C
            })), {
                handleNotificationIconClick: function() {
                    return Object(i.__awaiter)(this, void 0, void 0, (function() {
                        return Object(i.__generator)(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return [ 4, this.resetNotifications() ];

                              case 1:
                                return t.sent(), this.$emit("notificationsReset"), [ 2 ];
                            }
                        }));
                    }));
                },
                truncateCount: function(t) {
                    return t > 99 ? "99+" : String(t);
                },
                getLiveNavLabel: function() {
                    return this.$store.state.gates.live_nav_livestreams ? this.$translate("nav_primary_live_livestreams", "Livestreams") : this.$store.state.gates.live_nav_watch ? this.$translate("nav_primary_live_watch", "Watch") : this.$translate("nav_primary_live", "Live");
                }
            }),
            computed: Object(i.__assign)(Object(i.__assign)(Object(i.__assign)(Object(i.__assign)({}, Object(g.mapState)("primaryNav", [ "messageCount", "notificationCount", "isMinimal", "hideCreateProjectButton", "hideActivateButton", "typeaheadResults", "lastSearchTerm" ])), Object(g.mapState)("user", {
                isLoggedIn: function(t) {
                    return Boolean(t.loggedInUser);
                },
                displayName: function(t) {
                    var e;
                    return null === (e = t.loggedInUser) || void 0 === e ? void 0 : e.display_name;
                },
                emailAddress: function(t) {
                    var e;
                    return null === (e = t.loggedInUser) || void 0 === e ? void 0 : e.email;
                },
                profileUrl: function(t) {
                    var e;
                    return null === (e = t.loggedInUser) || void 0 === e ? void 0 : e.url;
                },
                isAdmin: function(t) {
                    var e, n;
                    return Boolean(null === (n = null === (e = t.loggedInUser) || void 0 === e ? void 0 : e.privileges) || void 0 === n ? void 0 : n.is_admin);
                },
                smallAvatarSrc: function(t) {
                    var e;
                    return null === (e = t.loggedInUser) || void 0 === e ? void 0 : e.images[100];
                },
                largeAvatarSrc: function(t) {
                    var e;
                    return null === (e = t.loggedInUser) || void 0 === e ? void 0 : e.images[230];
                },
                fallbackAvatarSrc: function(t) {
                    var e;
                    return null === (e = t.loggedInUser) || void 0 === e ? void 0 : e.images[138];
                },
                firstName: function(t) {
                    var e;
                    return (null === (e = t.loggedInUser) || void 0 === e ? void 0 : e.first_name) || t.partialUserFirstName;
                },
                isPartialUser: function(t) {
                    return t.isPartialUser;
                },
                isImpersonated: function(t) {
                    return t.isImpersonated;
                }
            })), Object(g.mapState)("translation", {
                locale: function(t) {
                    return t.localization.LOCALE;
                }
            })), {
                isUnderBaseSearchRoute: function() {
                    var t;
                    return null === (t = this.$router.currentRoute.matched) || void 0 === t ? void 0 : t.some((function(t) {
                        return "searchRoot" === t.name || "liveRoot" === t.name;
                    }));
                },
                currentLocale: function() {
                    var t = this, e = R.LOCALES.find((function(e) {
                        return e.code === t.locale;
                    }));
                    return e || R.LOCALES[0];
                },
                navigationLinks: function() {
                    var t = [ {
                        url: this.isLoggedIn ? R.URL_GALLERIES : R.URL_HOME,
                        names: H.c.map((function(t) {
                            return t.name;
                        })),
                        label: this.$translate("nav_primary_discover", "Discover"),
                        e2eKey: "discover"
                    }, {
                        url: R.URL_LIVE,
                        names: Object(W.a)()[0].children.map((function(t) {
                            return t.name;
                        })),
                        label: this.getLiveNavLabel(),
                        e2eKey: "live"
                    }, {
                        url: R.URL_JOBLIST,
                        names: Object(z.b)()[0].children.map((function(t) {
                            return t.name;
                        })),
                        label: this.$translate("nav_primary_jobs", "Jobs"),
                        e2eKey: "jobs"
                    } ];
                    return this.isLoggedIn && t.unshift({
                        url: R.URL_HOME,
                        names: Object.values(D.b),
                        label: this.$translate("nav_primary_for_you", "For You"),
                        e2eKey: "forYou"
                    }), t;
                }
            })
        }), rn = n(1980);
        var sn = Object(r.default)(an, (function() {
            var t, e, n, i, a = this, r = a.$createElement, s = a._self._c || r;
            return s("div", {
                class: [ a.$style.root, (t = {}, t[a.$style.hamburgerMenuOpen] = a.isHamburgerMenuOpen, 
                t), (e = {}, e[a.$style.activateAndCreateButtonsHidden] = a.hideCreateProjectButton && a.hideActivateButton, 
                e), (n = {}, n[a.$style.hideSearchInput] = a.isUnderBaseSearchRoute, n), "PrimaryNavigation__global-selector", "js-primary-navigation" ],
                attrs: {
                    "data-ut": "root"
                }
            }, [ s("div", {
                class: a.$style.fixed
            }, [ a.isMinimal ? a._e() : s("div", {
                class: a.$style.hamburgerMenu,
                attrs: {
                    "data-ut": "hamburgerMenu"
                }
            }, [ s("div", {
                class: a.$style.loginOrCreate
            }, [ a.isLoggedIn ? [ a.isPartialUser || a.hideCreateProjectButton ? a._e() : s("Btn", {
                attrs: {
                    href: a.getUrl(a.URL_PROJECT_CREATE)
                }
            }, [ a._v(" " + a._s(a.$translate("create_a_project_label", "Create a project")) + " ") ]) ] : s("Btn", {
                staticClass: "js-adobeid-signin",
                attrs: {
                    "data-signin-from": "updated_2020_navigation_login_hamburger",
                    href: "",
                    role: "button",
                    "data-ut": "logIn"
                }
            }, [ a._v(" " + a._s(a.$translate("nav_primary_log_in", "Log In")) + " ") ]) ], 2), s("ul", {
                class: a.$style.coreNavigation
            }, a._l(a.navigationLinks, (function(t, e) {
                var n;
                return s("li", {
                    key: e,
                    class: [ a.$style.coreNavigationItem, a.$style.text ]
                }, [ s("a", {
                    class: [ a.$style.coreNavigationLink, (n = {}, n[a.$style.active] = t.names.includes(a.$route.name), 
                    n) ],
                    attrs: {
                        href: a.getUrl(t.url),
                        title: t.label,
                        "aria-label": t.label
                    }
                }, [ s("h3", {
                    class: a.$style.coreNavigationLabel
                }, [ a._v(a._s(t.label)) ]) ]) ]);
            })), 0), a.isLoggedIn && !a.isPartialUser ? s("div", {
                class: [ a.$style.mobileUserMenuAndTrigger, (i = {}, i[a.$style.menuVisible] = a.isMobileUserMenuShown, 
                i) ]
            }, [ s("div", {
                class: a.$style.mobileTriggerUserMenu,
                attrs: {
                    "data-ut": "profileMenuActivateMobile"
                },
                on: {
                    click: function(t) {
                        a.isMobileUserMenuShown = !a.isMobileUserMenuShown;
                    }
                }
            }, [ s("div", {
                class: a.$style.userAvatar
            }, [ s("img", {
                class: a.$style.avatarImgEl,
                attrs: {
                    "data-ut": "profileAvatar",
                    alt: a.displayName,
                    src: a.largeAvatarSrc || a.fallbackAvatarSrc
                }
            }) ]), s("h3", {
                class: a.$style.avatarLabel
            }, [ a._v(a._s(a.$translate("nav_primary_me", "Me"))) ]), s("Triangle", {
                class: a.$style.triangle
            }) ], 1), a.isMobileUserMenuShown ? s("ul", {
                class: [ a.$style.userMenuList, a.$style.mobile ]
            }, [ a.isAdmin ? s("li", {
                class: [ a.$style.userMenuItem, a.$style.link, a.$style.admin ],
                attrs: {
                    "data-ut": "profileMenuItem"
                }
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: a.URL_ADMIN_DEFAULT,
                    "data-ut": "profileAdmin"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_admin", "Admin"))) ]) ]) : a._e(), s("li", {
                class: [ a.$style.userMenuItem, a.$style.link, a.$style.profile ],
                attrs: {
                    "data-ut": "profileMenuItem"
                }
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: a.profileUrl,
                    "data-ut": "profileUrl"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_my_portfolio", "Behance Profile"))) ]) ]), s("li", {
                class: [ a.$style.userMenuItem, a.$style.link ],
                attrs: {
                    "data-ut": "profileMenuItem"
                }
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: a.URL_ACCOUNT_SETTINGS,
                    "data-ut": "profileSettings"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_account_settings", "Settings"))) ]) ]), s("li", {
                class: [ a.$style.userMenuItem, a.$style.link, a.$style.help ],
                attrs: {
                    "data-ut": "profileMenuItem"
                }
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    "data-ut": "profileHelp",
                    href: "https://help.behance.net/hc/en-us",
                    target: "_blank"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_help", "Help")) + " ") ]) ]), s("li", {
                class: [ a.$style.userMenuItem, a.$style.link, "js-adobeid-signout", a.$style.signOut ],
                attrs: {
                    "data-ut": "profileSignout"
                }
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: ""
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_log_out", "Sign Out"))) ]) ]) ]) : a._e() ]) : a._e(), s("ul", {
                class: a.$style.appLinks
            }, [ s("li", {
                class: [ a.$style.appLinkItem, a.$style.ios ]
            }, [ s("a", {
                class: a.$style.appLink,
                attrs: {
                    target: "_blank",
                    href: "#",
                    title: a.$translate("button_apple_app_download", "Download on the App Store"),
                    "aria-label": a.$translate("button_apple_app_download", "Download on the App Store")
                }
            }, [ a._v(a._s(a.$translate("button_apple_app_download", "Download on the App Store"))) ]) ]), s("li", {
                class: [ a.$style.appLinkItem, a.$style.android ]
            }, [ s("a", {
                class: a.$style.appLink,
                attrs: {
                    target: "_blank",
                    href: "#",
                    title: a.$translate("buttons_google_app_download", "Get it on Google Play"),
                    "aria-label": a.$translate("buttons_google_app_download", "Get it on Google Play")
                }
            }, [ a._v(a._s(a.$translate("buttons_google_app_download", "Get it on Google Play"))) ]) ]) ]), s("div", {
                class: a.$style.languageSelector
            }, [ s("select", {
                class: a.$style.languageSelectEl,
                attrs: {
                    "data-ut": "languageSelectElement",
                    "aria-label": a.$translate("nav_primary_select_language", "View Behance in your language of choice"),
                    title: a.$translate("nav_primary_select_language", "View Behance in your language of choice")
                },
                on: {
                    change: a.languageSelectChanged
                }
            }, a._l(a.LOCALES, (function(t) {
                return s("option", {
                    key: t.code,
                    attrs: {
                        "data-ut": "languageSelectOption"
                    },
                    domProps: {
                        value: t.code,
                        selected: t.code === a.currentLocale.code
                    }
                }, [ a._v(" " + a._s(t.label) + " ") ]);
            })), 0), s("Triangle", {
                class: a.$style.triangle
            }) ], 1), a.isLoggedIn ? a._e() : s("div", {
                class: a.$style.signUp
            }, [ s("Btn", {
                class: [ "js-adobeid-signup" ],
                attrs: {
                    role: "button",
                    "data-signup-from": "updated_2020_navigation_signup",
                    "data-ut": "signUp",
                    type: "primary"
                }
            }, [ a._v(" " + a._s(a.$translate("nav_primary_sign_up", "Sign Up")) + " ") ]) ], 1) ]), s("div", {
                class: [ a.$style.strip, "js-nav-primary", "js-navigation-strip", "e2e-PrimaryNav" ],
                attrs: {
                    tabindex: "-1"
                },
                on: {
                    click: function(t) {
                        a.isHamburgerMenuOpen = !1;
                    }
                }
            }, [ s("a", {
                class: a.$style.skipContent,
                attrs: {
                    tabindex: "0",
                    title: a.$translate("nav_primary_skip_to_main_title", "Skip Link for Main Content")
                },
                on: {
                    keypress: function(t) {
                        return !t.type.indexOf("key") && a._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : a.$emit("skipToMainContent");
                    }
                }
            }, [ a._v(a._s(a.$translate("nav_primary_skip_to_main", "Skip to Main Content"))) ]), s("a", {
                class: a.$style.skipFooter,
                attrs: {
                    tabindex: "0",
                    title: a.$translate("nav_primary_skip_to_footer_title", "Skip Link for Footer")
                },
                on: {
                    keypress: function(t) {
                        return !t.type.indexOf("key") && a._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : a.$emit("skipToFooter");
                    }
                }
            }, [ a._v(a._s(a.$translate("nav_primary_skip_to_footer", "Skip to Footer"))) ]), s("div", {
                class: [ a.$style.hamburgerMenuActivate ],
                attrs: {
                    "data-ut": "activateHamburgerMenu"
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(), a.toggleHamburgerMenu(t);
                    }
                }
            }, [ s("div", {
                class: a.$style.hamburgerButton
            }, [ s("div", {
                class: a.$style.hamburgerLine
            }), s("div", {
                class: a.$style.hamburgerLine
            }), s("div", {
                class: a.$style.hamburgerLine
            }) ]) ]), s("ul", {
                class: a.$style.coreNavigation
            }, [ s("li", {
                class: [ a.$style.coreNavigationItem, a.$style.home ]
            }, [ s("a", {
                class: a.$style.coreNavigationLink,
                attrs: {
                    href: a.URL_HOME,
                    title: "Behance",
                    "aria-label": "Behance"
                }
            }, [ s("div", {
                class: a.$style.logoWrap
            }, [ s("BehanceLogo", {
                class: [ a.$style.behanceLogo, a.$style.full ],
                attrs: {
                    title: "Behance",
                    desc: a.$translate("site_navigation_navigate_to_behance", "Navigate to behance.net")
                }
            }), s("BehanceLogoTruncated", {
                class: [ a.$style.behanceLogo, a.$style.truncated ],
                attrs: {
                    title: "Behance",
                    desc: a.$translate("site_navigation_navigate_to_behance", "Navigate to behance.net")
                }
            }) ], 1) ]) ]), a._l(a.navigationLinks, (function(t, e) {
                var n;
                return s("li", {
                    key: e,
                    class: [ a.$style.coreNavigationItem, a.$style.text ]
                }, [ a.isMinimal ? a._e() : s("a", {
                    class: [ a.$style.coreNavigationLink, "e2e-Nav-" + t.e2eKey, (n = {}, n[a.$style.active] = t.names.includes(a.$route.name), 
                    n) ],
                    attrs: {
                        href: a.getUrl(t.url),
                        title: t.label,
                        "aria-label": t.label,
                        "data-ut": "navigationLink"
                    }
                }, [ s("h3", {
                    class: a.$style.coreNavigationLabel
                }, [ a._v(a._s(t.label)) ]) ]) ]);
            })) ], 2), a.isMinimal || a.isUnderBaseSearchRoute ? a._e() : s("div", {
                class: a.$style.siteSearch,
                attrs: {
                    "data-ut": "siteSearch"
                }
            }, [ s("SearchTypeahead", {
                attrs: {
                    isTypeaheadEnabled: !0,
                    results: a.typeaheadResults,
                    lastSearchTerm: a.lastSearchTerm
                },
                on: {
                    inputDidChange: a.fetchResults
                }
            }) ], 1), a.isMinimal ? a._e() : s("div", {
                class: a.$style.signup,
                attrs: {
                    "data-ut": "signup"
                }
            }, [ a.isPartialUser && !a.hideActivateButton ? s("Btn", {
                class: a.$style.activate,
                attrs: {
                    type: "primary",
                    "data-ut": "activateAccount",
                    href: a.URL_ONBOARDING_ADOBE
                }
            }, [ s("AlternateAdobeLogo", {
                attrs: {
                    slot: "leadingIcon",
                    fill: "white"
                },
                slot: "leadingIcon"
            }), a._v(" " + a._s(a.$translate("activate_continue_as_name", "Continue as {firstName}", {
                firstName: a.firstName
            })) + " ") ], 1) : a._e(), s("div", {
                class: a.$style.a11yButtonWrap
            }, [ !a.isLoggedIn || a.isPartialUser || a.hideCreateProjectButton ? a._e() : s("Btn", {
                class: [ "e2e-Create-Project", a.$style.a11yButton, a.$style.createAProject ],
                attrs: {
                    href: a.getUrl(a.URL_PROJECT_CREATE),
                    "data-ut": "createAProject",
                    "aria-label": a.$translate("create_a_project_label", "Create a project")
                }
            }, [ a._v(" " + a._s(a.$translate("create_a_project_label", "Create a project")) + " ") ]), s("span", {
                class: a.$style.a11yButtonHelper
            }) ], 1), a.isPartialUser || a.isLoggedIn ? a._e() : s("ul", {
                class: a.$style.loggedOutOptions
            }, [ s("li", {
                class: [ a.$style.loggedOutOption, a.$style.logIn ]
            }, [ s("FadeDown", [ a.shouldRenderTooltip ? [ s("Tooltip", {
                class: a.$style.tooltipWrapper,
                attrs: {
                    position: "bottom",
                    alignment: "right",
                    alignmentOffset: 20,
                    toggleMethod: "none",
                    isOpen: !0,
                    "data-ut": "signInTooltip"
                }
            }, [ s("div", {
                class: a.$style.tooltipContent,
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ s("p", {
                class: a.$style.tooltipText
            }, [ a._v(a._s(a.$translate("nav_primary_log_in_popup", "Log in to view personalized recommendations, follow creatives and more."))) ]), s("Btn", {
                class: [ a.$style.tooltipButton, a.$style.loggedOutButton ],
                attrs: {
                    type: "transparent"
                },
                on: {
                    click: function(t) {
                        a.shouldRenderTooltip = !1;
                    }
                }
            }, [ a._v(" " + a._s(a.$translate("nav_primary_log_in_popup_dismiss", "Got It")) + " ") ]) ], 1) ]) ] : a._e() ], 2), s("div", {
                class: a.$style.a11yButtonWrap
            }, [ s("Btn", {
                class: [ "js-adobeid-signin", a.$style.a11yButton ],
                attrs: {
                    "data-signin-from": "Header"
                }
            }, [ a._v(" " + a._s(a.$translate("nav_primary_log_in", "Log In")) + " ") ]), s("span", {
                class: a.$style.a11yButtonHelper
            }) ], 1) ], 1), s("li", {
                class: a.$style.loggedOutOption
            }, [ s("div", {
                class: a.$style.a11yButtonWrap
            }, [ s("Btn", {
                class: [ "js-adobeid-signup", "e2e-PrimaryNav-signup", a.$style.a11yButton ],
                attrs: {
                    role: "button",
                    "data-signup-from": "updated_2020_navigation_signup",
                    type: "primary"
                }
            }, [ a._v(" " + a._s(a.$translate("nav_primary_sign_up", "Sign Up")) + " ") ]), s("span", {
                class: a.$style.a11yButtonHelper
            }) ], 1) ]) ]) ], 1), a.isMobile ? s("div", {
                class: a.$style.appLinkContainer
            }, [ s("Btn", {
                class: a.$style.useApp,
                attrs: {
                    role: "button",
                    type: "primary",
                    href: a.WEB_TO_APP_BRANCH_URL,
                    "data-ut": "useAppLink"
                }
            }, [ a._v(" " + a._s(a.$translate("nav_primary_use_app", "Use App")) + " ") ]) ], 1) : a._e(), a.isMinimal ? a._e() : s("div", {
                class: a.$style.searchLink
            }, [ s("a", {
                class: [ a.$style.link, "e2e-PrimaryNav-search" ],
                attrs: {
                    href: a.getUrl(a.URL_SEARCH),
                    title: a.$translate("primary_nav_search", "Search"),
                    "aria-label": a.$translate("primary_nav_search", "Search")
                }
            }, [ s("SearchIcon") ], 1) ]), a.isMinimal ? a._e() : [ s("ul", {
                class: a.$style.userControls
            }, [ !a.isPartialUser && a.isLoggedIn ? s("li", {
                class: [ a.$style.userControl, a.$style.mail, "js-notification-badge--email", "e2e-NotificationBadge--email" ]
            }, [ s("div", {
                class: [ a.$style.link, "mail-inbox", a.$style.userControlLink ],
                attrs: {
                    role: "button",
                    tabindex: "0",
                    title: a.$translate("primary_nav_messages", "Messages"),
                    "aria-label": a.$translate("primary_nav_messages", "Messages"),
                    "data-ut": "mail"
                },
                on: {
                    keydown: function(t) {
                        return !t.type.indexOf("key") && a._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : a.navigateToInboxUrl(t);
                    }
                }
            }, [ s("MailIcon", {
                class: [ a.$style.icon, "js-icon__mail" ],
                attrs: {
                    title: a.$translate("primary_nav_inbox_title", "Inbox"),
                    desc: a.$translate("primary_nav_inbox_description", "Show all messages in your inbox.")
                }
            }) ], 1), s("Fade", [ a.messageCount > 0 ? s("div", {
                class: a.$style.count,
                attrs: {
                    "data-ut": "messageCount"
                }
            }, [ a._v(" " + a._s(a.truncateCount(a.messageCount)) + " ") ]) : a._e() ]) ], 1) : a._e(), !a.isPartialUser && a.isLoggedIn ? s("li", {
                class: [ a.$style.userControl, a.$style.notifications, "js-notification-badge--notification", "e2e-NotificationBadge--notification" ],
                attrs: {
                    "data-ut": "notifications"
                },
                on: {
                    click: a.handleNotificationIconClick
                }
            }, [ s("div", {
                class: [ a.$style.link, a.$style.userControlLink ],
                attrs: {
                    tabindex: "0"
                }
            }, [ s("NotificationIcon", {
                class: a.$style.icon,
                attrs: {
                    title: a.$translate("primary_nav_notifications_title", "Notifications"),
                    desc: a.$translate("primary_nav_notifications_description", "View your notifications within Behance.")
                }
            }) ], 1), s("Fade", [ a.notificationCount > 0 ? s("div", {
                class: a.$style.count,
                attrs: {
                    "data-ut": "notificationCount"
                }
            }, [ a._v(" " + a._s(a.truncateCount(a.notificationCount)) + " ") ]) : a._e() ]) ], 1) : a._e(), !a.isPartialUser && a.isLoggedIn ? s("li", {
                class: [ a.$style.userControl, a.$style.me, "e2e-PrimaryNav-me" ]
            }, [ s("Tooltip", {
                class: [ a.$style.userMenuTooltip, "e2e-PrimaryNav-profile-tooltip" ],
                attrs: {
                    position: "bottom",
                    alignment: "right",
                    shouldCloseOnChildBlur: !1,
                    distance: 0,
                    alignmentOffset: 0,
                    horizontalPadding: 0,
                    verticalPadding: 0
                }
            }, [ s("div", {
                class: a.$style.userAvatarTrigger,
                attrs: {
                    tabIndex: "0",
                    "data-ut": "triggerProfileTooltip"
                }
            }, [ s("a", {
                class: [ a.$style.userControlLink, "e2e-PrimaryNav-link-image" ],
                attrs: {
                    href: a.profileUrl,
                    "aria-label": a.$translate("nav_primary_me_my_portfolio", "Behance Profile")
                }
            }, [ s("img", {
                class: a.$style.avatarImgEl,
                attrs: {
                    alt: a.displayName,
                    src: a.smallAvatarSrc || a.fallbackAvatarSrc
                }
            }) ]) ]), s("ul", {
                class: [ a.$style.userMenuList, a.$style.desktop ],
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ s("li", {
                class: [ a.$style.userMenuItem, a.$style.userMeta ]
            }, [ s("div", {
                class: a.$style.userMetaContainer
            }, [ s("div", {
                class: a.$style.userAvatar
            }, [ s("a", {
                attrs: {
                    href: a.profileUrl,
                    "aria-label": a.$translate("nav_primary_me_my_portfolio", "Behance Profile")
                }
            }, [ s("img", {
                class: a.$style.avatarImgEl,
                attrs: {
                    "data-ut": "profileAvatar",
                    alt: a.displayName,
                    src: a.largeAvatarSrc || a.fallbackAvatarSrc
                }
            }) ]) ]), s("div", {
                class: a.$style.userId
            }, [ s("h2", {
                class: a.$style.userName,
                attrs: {
                    "data-ut": "profileDisplayName"
                }
            }, [ a._v(a._s(a.displayName)) ]), s("p", {
                class: a.$style.userEmail,
                attrs: {
                    "data-ut": "profileEmail"
                }
            }, [ a._v(a._s(a.emailAddress)) ]), s("a", {
                class: a.$style.userLink,
                attrs: {
                    "data-ut": "profileManage",
                    href: "https://accounts.adobe.com"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_manage_my_adobe_id", "Manage Adobe ID"))) ]) ]) ]) ]), s("ul", {
                class: a.$style.listGroup
            }, [ a.isAdmin ? s("li", {
                class: [ a.$style.userMenuItem, a.$style.link, a.$style.admin ]
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: a.URL_ADMIN_DEFAULT,
                    "data-ut": "profileAdmin"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_admin", "Admin"))) ]) ]) : a._e(), a.isImpersonated ? s("li", {
                class: [ a.$style.userMenuItem, a.$style.link ]
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: a.URL_BACK_TO_ADMIN,
                    "data-ut": "backToAdmin"
                }
            }, [ a._v(a._s(a.$translate("nav_back_to_admin", "Back to Admin"))) ]) ]) : a._e(), s("li", {
                class: [ a.$style.userMenuItem, a.$style.link, a.$style.profile ]
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: a.profileUrl,
                    "data-ut": "profileUrl"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_my_portfolio", "Behance Profile"))) ]) ]), s("li", {
                class: [ a.$style.userMenuItem, a.$style.link ]
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: a.URL_ACCOUNT_SETTINGS,
                    "data-ut": "profileSettings"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_account_settings", "Settings"))) ]) ]), s("li", {
                class: [ a.$style.userMenuItem, a.$style.link, a.$style.help, "js-zendesk" ]
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    "data-ut": "profileHelp",
                    href: "https://help.behance.net/hc/en-us",
                    target: "_blank"
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_help", "Help")) + " ") ]) ]) ]), s("ul", {
                class: a.$style.listGroup
            }, [ s("li", {
                class: [ a.$style.userMenuItem, a.$style.link, "js-adobeid-signout", a.$style.signOut ],
                attrs: {
                    "data-ut": "profileSignout"
                }
            }, [ s("a", {
                class: a.$style.anchor,
                attrs: {
                    href: ""
                }
            }, [ a._v(a._s(a.$translate("nav_primary_me_log_out", "Sign Out"))) ]) ]) ]) ]) ]) ], 1) : a._e() ]) ], a.isMinimal ? a._e() : s("div", {
                class: a.$style.adobeLogo,
                attrs: {
                    "data-ut": "logoContainer"
                }
            }, [ s("a", {
                class: a.$style.adobeCreativeCloudLink,
                attrs: {
                    href: a.URL_ADOBE_CREATIVE_CLOUD_HOME,
                    target: "_blank",
                    title: a.$translate("nav_primary_adobe_creative_cloud", "Adobe Creative Cloud"),
                    "aria-label": a.$translate("nav_primary_adobe_creative_cloud", "Adobe Creative Cloud")
                }
            }, [ s("span", {
                class: a.$style.iconWrap
            }, [ s("AdobeLockup2020", {
                class: a.$style.icon
            }) ], 1) ]) ]), a.isMinimal && a.firstName ? s("h3", {
                class: a.$style.minimalWelcomeMessage,
                attrs: {
                    "data-ut": "welcomePersonalization"
                }
            }, [ a._v(" " + a._s(a.$translate("activate_welcome_with_name", "Welcome, {firstName}!", {
                firstName: a.firstName
            })) + " ") ]) : a._e() ], 2) ]) ]);
        }), [], !1, (function(t) {
            this.$style = rn.default.locals || rn.default;
        }), null, null);
        e.a = sn.exports;
    },
    1937: function(t, e, n) {
        "use strict";
        var i = n(65), a = Object(i.default)({}, (function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 60 15.619"
                }
            }, [ e("path", {
                attrs: {
                    d: "M179.682,34.616l-.647,2a.145.145,0,0,1-.148.107h-1.564c-.094,0-.122-.053-.107-.132l2.7-7.78a2.513,2.513,0,0,0,.132-.823.089.089,0,0,1,.081-.094h2.157c.067,0,.094.013.108.081l3.06,8.629c.026.067.013.12-.067.12h-1.75a.132.132,0,0,1-.149-.094l-.688-2.009ZM182.3,32.93c-.264-.89-.808-2.522-1.058-3.479h-.013c-.216.9-.7,2.38-1.058,3.479Z",
                    transform: "translate(-153.778 -24.202)"
                }
            }), e("path", {
                attrs: {
                    d: "M241.14,28.636a3.573,3.573,0,0,1,3.91-3.541c.107,0,.242.015.444.028V22.46a.085.085,0,0,1,.094-.094h1.7c.067,0,.081.026.081.081v7.969a7.51,7.51,0,0,0,.054.984c0,.067-.013.094-.094.122a6.793,6.793,0,0,1-2.657.538A3.226,3.226,0,0,1,241.14,28.636Zm4.355-1.915a1.389,1.389,0,0,0-.5-.067,1.8,1.8,0,0,0-1.928,1.887,1.687,1.687,0,0,0,1.793,1.915,1.9,1.9,0,0,0,.633-.081Z",
                    transform: "translate(-209.252 -19.408)"
                }
            }), e("path", {
                attrs: {
                    d: "M303.016,46.411a3.328,3.328,0,1,1-6.646.041,3.3,3.3,0,0,1,3.356-3.492A3.212,3.212,0,0,1,303.016,46.411Zm-4.746.015c0,1.19.553,1.941,1.455,1.941.783,0,1.375-.674,1.375-1.915,0-1.058-.431-1.928-1.455-1.928C298.864,44.524,298.27,45.225,298.27,46.426Z",
                    transform: "translate(-257.179 -37.279)"
                }
            }), e("path", {
                attrs: {
                    d: "M356.658,22.37c.108,0,.132.013.132.108v2.764a4.3,4.3,0,0,1,1.135-.144,3.086,3.086,0,0,1,3.236,3.209,3.743,3.743,0,0,1-4.044,3.761A7.063,7.063,0,0,1,355,31.759a.156.156,0,0,1-.081-.132V22.464c0-.067.026-.094.094-.094Zm.926,4.314a2.71,2.71,0,0,0-.793.108v3.654a2.064,2.064,0,0,0,.5.054,1.856,1.856,0,0,0,1.954-2.023,1.58,1.58,0,0,0-1.656-1.792Z",
                    transform: "translate(-307.986 -19.412)"
                }
            }), e("path", {
                attrs: {
                    d: "M409.443,46.941c.067.768.607,1.4,1.928,1.4a4.176,4.176,0,0,0,1.658-.309c.041-.028.081-.013.081.067v1.28c0,.1-.026.132-.094.163a4.53,4.53,0,0,1-2.063.4,3.161,3.161,0,0,1-3.424-3.41,3.286,3.286,0,0,1,3.262-3.56,2.748,2.748,0,0,1,2.844,2.909,4.281,4.281,0,0,1-.067.9.114.114,0,0,1-.107.107,12.3,12.3,0,0,1-1.39.054Zm1.753-1.308a4.486,4.486,0,0,0,.674-.026v-.1a1.1,1.1,0,0,0-1.147-1.058,1.278,1.278,0,0,0-1.295,1.19Z",
                    transform: "translate(-353.639 -37.288)"
                }
            }), e("path", {
                attrs: {
                    d: "M84.13,0h6.523V15.619Z",
                    transform: "translate(-73.005)"
                }
            }), e("path", {
                attrs: {
                    d: "M6.529,0H0V15.619Z"
                }
            }), e("path", {
                attrs: {
                    d: "M48.032,43.53l4.156,9.862H49.465l-1.243-3.141H45.18Z",
                    transform: "translate(-39.205 -37.774)"
                }
            }) ]);
        }), [], !1, null, null, null);
        e.a = a.exports;
    },
    1942: function(t, e, n) {
        "use strict";
        var i = n(1459), a = n.n(i);
        e.default = a.a;
    },
    1943: function(t, e, n) {
        (e = t.exports = n(189)(!1)).push([ t.i, ".FadeDown-enterActive-3hn {\n  -webkit-animation: FadeDown-fadeDown-3o5 0.5s;\n          animation: FadeDown-fadeDown-3o5 0.5s;\n  -webkit-animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.FadeDown-leaveActive-1v9 {\n  animation: FadeDown-fadeDown-3o5 0.5s reverse;\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0, 0.81, 0);\n          animation-timing-function: cubic-bezier(0.78, 0, 0.81, 0);\n}\n@-webkit-keyframes FadeDown-fadeDown-3o5 {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n@keyframes FadeDown-fadeDown-3o5 {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n", "" ]), 
        e.locals = {
            enterActive: "FadeDown-enterActive-3hn",
            fadeDown: "FadeDown-fadeDown-3o5",
            leaveActive: "FadeDown-leaveActive-1v9"
        };
    },
    1944: function(t, e, n) {
        t.exports = n(2)(226);
    },
    1945: function(t, e, n) {
        var i;
        void 0 === (i = function() {
            "use strict";
            function t(t) {
                return t.getBoundingClientRect().height;
            }
            function e(e, n) {
                return e.setEndAfter(n), t(e);
            }
            return function(n, i) {
                var a = function(t) {
                    if (t.length && document.createRange) {
                        var e, n = document.createRange();
                        if (n.getBoundingClientRect && (e = /[^\s]/.exec(t.textContent))) return n.setStartBefore(t), 
                        n.setEnd(t, e.index + 1), n;
                    }
                }(n);
                if (a) {
                    var r, s = t(a), o = s * (i + .5), l = n.length, c = l, p = -1;
                    if (e(a, n) < o) a.detach(); else {
                        for (;c; ) l += p * (c = ~~(c / 2)), a.setEnd(n, l), p * (t(a) - o) > 0 && (p = -p);
                        r = n.textContent.substr(0, l).replace(/\s+$/, "");
                        do {
                            n.textContent = r + "…", s = e(a, n), r = r.substr(0, --l);
                        } while (s > o);
                        a.detach();
                    }
                }
            };
        }.call(e, n, e, t)) || (t.exports = i);
    },
    1946: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + n), 
                i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 48, 196, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_appreciated|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a> appreciated your project");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.b('<a href="'), i.b(i.v(i.d("project.url", t, e, 0))), 
                i.b('" class="graphic">'), i.b("\n" + n), i.b('  <div class="activity-block project-appreciated">'), 
                i.b("\n" + n), i.b('    <img alt="'), i.b(i.v(i.d("project.name", t, e, 0))), i.b('" title="'), 
                i.b(i.v(i.d("project.name", t, e, 0))), i.b('" src="'), i.b(i.v(i.d("project.covers.115", t, e, 0))), 
                i.b('" srcset="'), i.b(i.v(i.d("project.covers.115", t, e, 0))), i.b(", "), i.b(i.v(i.d("project.covers.202", t, e, 0))), 
                i.b(' 2x" class="project_image" />'), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), 
                i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_appreciated|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> appreciated your project{{/translate}}\n</div>\n<a href="{{project.url}}" class="graphic">\n  <div class="activity-block project-appreciated">\n    <img alt="{{project.name}}" title="{{project.name}}" src="{{project.covers.115}}" srcset="{{project.covers.115}}, {{project.covers.202}} 2x" class="project_image" />\n  </div>\n</a>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1947: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<a href="'), i.b(i.v(i.f("url", t, e, 0))), i.b('#comments" class="graphic">'), 
                i.b("\n" + n), i.b('  <img alt="'), i.b(i.v(i.f("name", t, e, 0))), i.b('" title="'), 
                i.b(i.v(i.f("name", t, e, 0))), i.b('" src="'), i.b(i.v(i.d("covers.115", t, e, 0))), 
                i.b('" srcset="'), i.b(i.v(i.d("covers.115", t, e, 0))), i.b(", "), i.b(i.v(i.d("covers.202", t, e, 0))), 
                i.b(' 2x" class="comment-image" />'), i.b("\n" + n), i.b('  <div class="comment">'), 
                i.b("\n" + n), i.b('    <strong class="actor js-mini-profile" data-id="'), i.b(i.v(i.d("actor.id", t, e, 0))), 
                i.b('">'), i.b(i.v(i.d("actor.display_name", t, e, 0))), i.b(':</strong> <span class="comment-text">'), 
                i.b(i.v(i.d("comment.comment", t, e, 0))), i.b("</span>"), i.b("\n" + n), i.b("  </div>"), 
                i.b("\n" + n), i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<a href="{{url}}#comments" class="graphic">\n  <img alt="{{name}}" title="{{name}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="comment-image" />\n  <div class="comment">\n    <strong class="actor js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}:</strong> <span class="comment-text">{{comment.comment}}</span>\n  </div>\n</a>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1948: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="graphic">'), i.b("\n" + n), i.b('  <div class="project-comment-wrap">'), 
                i.b("\n" + n), i.b('    <div class="activity-block project-comment">'), i.b("\n" + n), 
                i.s(i.f("project", t, e, 1), t, e, 0, 126, 138, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b(n.rp("<comment0", t, e, ""));
                })), t.pop()), i.b("    </div>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), 
                i.b("</div>"), i.fl();
            },
            partials: {
                "<comment0": {
                    name: "comment",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="graphic">\n  <div class="project-comment-wrap">\n    <div class="activity-block project-comment">\n      {{#project}}{{>comment}}{{/project}}\n    </div>\n  </div>\n</div>', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1949: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg">'), i.b("\n" + n), i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 34, 178, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_followed_work|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a> followed your work");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg">\n  {{#translate}}notifications_followed_work|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> followed your work{{/translate}}\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1950: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + n), 
                i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 48, 149, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_mentioned|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), n.b('">'), 
                    n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a> mentioned you in a comment");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.b('<div class="graphic">'), 
                i.b("\n" + n), i.b('  <div class="mention-wrap">'), i.b("\n" + n), i.b('    <div class="activity-block mention">'), 
                i.b("\n" + n), i.s(i.f("project", t, e, 1), t, e, 0, 281, 293, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b(n.rp("<comment0", t, e, ""));
                })), t.pop()), i.b("    </div>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), 
                i.b("</div>"), i.fl();
            },
            partials: {
                "<comment0": {
                    name: "comment",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_mentioned|<a href="{{actor.url}}">{{actor.display_name}}</a> mentioned you in a comment{{/translate}}\n</div>\n<div class="graphic">\n  <div class="mention-wrap">\n    <div class="activity-block mention">\n      {{#project}}{{>comment}}{{/project}}\n    </div>\n  </div>\n</div>', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1951: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + n), 
                i.s(i.f("translate", t, e, 1), t, e, 0, 46, 218, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_saved|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), n.b('" class="js-mini-profile" data-id="'), 
                    n.b(n.v(n.d("actor.id", t, e, 0))), n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), 
                    n.b('</a> saved "<a href="'), n.b(n.v(n.d("project.url", t, e, 0))), n.b('">'), 
                    n.b(n.v(n.d("project.name", t, e, 0))), n.b('</a>"');
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.b('<a href="'), i.b(i.v(i.d("collection.url", t, e, 0))), 
                i.b('" class="graphic">'), i.b("\n" + n), i.b('  <div class="activity-block project-collection">'), 
                i.b("\n"), i.b("\n" + n), i.s(i.d("collection.latest_projects", t, e, 1), t, e, 0, 372, 609, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('      <div class="collection-project-image-wrap">'), i.b("\n" + n), i.b('        <img alt="'), 
                    i.b(i.v(i.d("collection.title", t, e, 0))), i.b('" title="'), i.b(i.v(i.d("collection.title", t, e, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("covers.115", t, e, 0))), i.b('" srcset="'), i.b(i.v(i.d("covers.115", t, e, 0))), 
                    i.b(", "), i.b(i.v(i.d("covers.202", t, e, 0))), i.b(' 2x" class="collection-project-image" />'), 
                    i.b("\n" + n), i.b("      </div>"), i.b("\n" + n);
                })), t.pop()), i.b('    <div class="collection-title">'), i.b("\n" + n), i.b('      <span class="collection-title-text beicons-pre beicons-pre-collection">'), 
                i.b(i.v(i.d("collection.title", t, e, 0))), i.b("</span>"), i.b("\n" + n), i.b("    </div>"), 
                i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg extra-padding">\n{{#translate}}notifications_saved|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> saved "<a href="{{project.url}}">{{project.name}}</a>"{{/translate}}\n</div>\n<a href="{{collection.url}}" class="graphic">\n  <div class="activity-block project-collection">\n\n    {{#collection.latest_projects}}\n      <div class="collection-project-image-wrap">\n        <img alt="{{collection.title}}" title="{{collection.title}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="collection-project-image" />\n      </div>\n    {{/collection.latest_projects}}\n    <div class="collection-title">\n      <span class="collection-title-text beicons-pre beicons-pre-collection">{{collection.title}}</span>\n    </div>\n  </div>\n</a>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1952: function(t, e, n) {
        var i = n(356), a = {
            "notifications/_userProjects": n(1460).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg">'), i.b("\n" + n), i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 34, 224, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b("notifications_short_list|"), n.b(n.v(n.d("actor.display_name", t, e, 0))), 
                    n.b(' added <a href="'), n.b(n.v(n.d("user.url", t, e, 0))), n.b('">'), n.b(n.v(n.d("user.display_name", t, e, 0))), 
                    n.b('</a> to your &ldquo;<a href="'), n.b(n.v(n.d("job._links.recruiter", t, e, 0))), 
                    n.b('"</a>'), n.b(n.v(n.d("job.title", t, e, 0))), n.b("</a>&rdquo; shortlist");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.s(i.d("user.latest_projects.0", t, e, 1), t, e, 0, 273, 328, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.s(n.f("user", t, e, 1), t, e, 0, 283, 318, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b(n.rp("<notifications/_userProjects0", t, e, ""));
                    })), t.pop());
                })), t.pop()), i.fl();
            },
            partials: {
                "<notifications/_userProjects0": {
                    name: "notifications/_userProjects",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg">\n  {{#translate}}notifications_short_list|{{actor.display_name}} added <a href="{{user.url}}">{{user.display_name}}</a> to your &ldquo;<a href="{{job._links.recruiter}}"</a>{{job.title}}</a>&rdquo; shortlist{{/translate}}\n</div>\n{{#user.latest_projects.0}}\n{{#user}}\n{{> notifications/_userProjects}}\n{{/user}}\n{{/user.latest_projects.0}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1953: function(t, e, n) {
        var i = n(356), a = {
            "notifications/_userProjects": n(1460).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg">'), i.b("\n" + n), i.s(i.f("translate", t, e, 1), t, e, 0, 32, 221, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b("notifications_added_search|"), n.b(n.v(n.d("actor.display_name", t, e, 0))), 
                    n.b(' added <a href="'), n.b(n.v(n.d("user.url", t, e, 0))), n.b('">'), n.b(n.v(n.d("user.display_name", t, e, 0))), 
                    n.b('</a> to your &ldquo;<a href="'), n.b(n.v(n.d("job._links.recruiter", t, e, 0))), 
                    n.b('"</a>'), n.b(n.v(n.d("job.title", t, e, 0))), n.b("</a>&rdquo; search");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.s(i.d("user.latest_projects.0", t, e, 1), t, e, 0, 270, 325, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.s(n.f("user", t, e, 1), t, e, 0, 280, 315, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b(n.rp("<notifications/_userProjects0", t, e, ""));
                    })), t.pop());
                })), t.pop()), i.fl();
            },
            partials: {
                "<notifications/_userProjects0": {
                    name: "notifications/_userProjects",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg">\n{{#translate}}notifications_added_search|{{actor.display_name}} added <a href="{{user.url}}">{{user.display_name}}</a> to your &ldquo;<a href="{{job._links.recruiter}}"</a>{{job.title}}</a>&rdquo; search{{/translate}}\n</div>\n{{#user.latest_projects.0}}\n{{#user}}\n{{> notifications/_userProjects}}\n{{/user}}\n{{/user.latest_projects.0}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1954: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("translate", t, e, 1), t, e, 0, 14, 187, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_invite|You were invited to join <a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("'s </a> job &ldquo;<a href=\""), 
                    n.b(n.v(n.d("job._links.recruiter", t, e, 0))), n.b('"</a>'), n.b(n.v(n.d("job.title", t, e, 0))), 
                    n.b("</a>&rdquo;");
                })), t.pop()), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#translate}}notifications_invite|You were invited to join <a href="{{actor.url}}">{{actor.display_name}}\'s </a> job &ldquo;<a href="{{job._links.recruiter}}"</a>{{job.title}}</a>&rdquo;{{/translate}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1955: function(t, e, n) {
        var i = n(356), a = {
            "notifications/_userProjects": n(1460).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg">'), i.b("\n" + n), i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 34, 172, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b("notifications_applied_job|"), n.b(n.v(n.d("actor.display_name", t, e, 0))), 
                    n.b(' applied to your job &ldquo;<a href="'), n.b(n.v(n.d("job._links.recruiter", t, e, 0))), 
                    n.b('"</a>'), n.b(n.v(n.d("job.title", t, e, 0))), n.b("</a>&rdquo;");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.s(i.d("actor.latest_projects.0", t, e, 1), t, e, 0, 222, 279, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.s(n.f("actor", t, e, 1), t, e, 0, 233, 268, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b(n.rp("<notifications/_userProjects0", t, e, ""));
                    })), t.pop());
                })), t.pop()), i.fl();
            },
            partials: {
                "<notifications/_userProjects0": {
                    name: "notifications/_userProjects",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg">\n  {{#translate}}notifications_applied_job|{{actor.display_name}} applied to your job &ldquo;<a href="{{job._links.recruiter}}"</a>{{job.title}}</a>&rdquo;{{/translate}}\n</div>\n{{#actor.latest_projects.0}}\n{{#actor}}\n{{> notifications/_userProjects}}\n{{/actor}}\n{{/actor.latest_projects.0}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1956: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg">'), i.b("\n" + n), i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 34, 170, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_recommendation_count|New recommendations for &ldquo;<a href="'), 
                    n.b(n.v(n.d("job._links.recruiter", t, e, 0))), n.b('">'), n.b(n.v(n.d("job.title", t, e, 0))), 
                    n.b("</a>&rdquo;: "), n.b(n.v(n.f("count", t, e, 0)));
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg">\n  {{#translate}}notifications_recommendation_count|New recommendations for &ldquo;<a href="{{job._links.recruiter}}">{{job.title}}</a>&rdquo;: {{count}}{{/translate}}\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1957: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<p class="msg">'), i.b("\n" + n), i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 32, 227, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_followed_moodboard|<span class="js-mini-profile" data-id="'), 
                    n.b(n.v(n.d("actor.id", t, e, 0))), n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), 
                    n.b('</span> followed your moodboard "<a href="'), n.b(n.v(n.d("collection.url", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("collection.title", t, e, 0))), n.b('</a>"');
                })), t.pop()), i.b("\n" + n), i.b("</p>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<p class="msg">\n  {{#translate}}notifications_followed_moodboard|<span class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</span> followed your moodboard "<a href="{{collection.url}}">{{collection.title}}</a>"{{/translate}}\n</p>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1958: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("translate", t, e, 1), t, e, 0, 14, 198, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b("notifications_note|"), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b(' left a note on <a href="'), 
                    n.b(n.v(n.d("user.url", t, e, 0))), n.b('">'), n.b(n.v(n.d("user.display_name", t, e, 0))), 
                    n.b('</a> in your &ldquo;<a href="'), n.b(n.v(n.d("job._links.recruiter", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("job.title", t, e, 0))), n.b("</a>&rdquo; job");
                })), t.pop()), i.b("\n" + n), i.b('<a class="note-wrap" href="'), i.b(i.v(i.d("job._links.recruiter", t, e, 0))), 
                i.b('">'), i.b("\n" + n), i.b('  <div class="activity-block note">'), i.b("\n" + n), 
                i.b('    <div class="comment">'), i.b("\n" + n), i.b("      "), i.b(i.v(i.d("note.note_text", t, e, 0))), 
                i.b("\n" + n), i.b("    </div>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), 
                i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#translate}}notifications_note|{{actor.display_name}} left a note on <a href="{{user.url}}">{{user.display_name}}</a> in your &ldquo;<a href="{{job._links.recruiter}}">{{job.title}}</a>&rdquo; job{{/translate}}\n<a class="note-wrap" href="{{job._links.recruiter}}">\n  <div class="activity-block note">\n    <div class="comment">\n      {{note.note_text}}\n    </div>\n  </div>\n</a>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1959: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("translate", t, e, 1), t, e, 0, 14, 206, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_archived_job|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b(' </a> has archived the job  &ldquo;<a href="'), 
                    n.b(n.v(n.d("job._links.recruiter", t, e, 0))), n.b('">'), n.b(n.v(n.d("job.title", t, e, 0))), 
                    n.b("</a>&rdquo; that was shared with you");
                })), t.pop()), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#translate}}notifications_archived_job|<a href="{{actor.url}}">{{actor.display_name}} </a> has archived the job  &ldquo;<a href="{{job._links.recruiter}}">{{job.title}}</a>&rdquo; that was shared with you{{/translate}}', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1960: function(t, e, n) {
        var i = n(356), a = {
            "notifications/_wipreactionicon": n(1961).template,
            "bestyleguide/_icons/_image": n(1262).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + n), 
                i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 48, 204, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_wipreaction|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a> reacted to your Work in Progress");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.b('<div class="graphic">'), 
                i.b("\n" + n), i.s(i.d("segment.is_expired", t, e, 1), t, e, 1, 0, 0, "") || (i.b('  <a href="'), 
                i.b(i.v(i.d("user.url", t, e, 0))), i.b("/workinprogress/"), i.b(i.v(i.d("segment.id", t, e, 0))), 
                i.b('" class="js-wip-notification-non-expired">'), i.b("\n" + n), i.b('    <div class="activity-block wip-notification">'), 
                i.b("\n" + n), i.b("      <img"), i.b("\n" + n), i.b('        sizes="65px"'), i.b("\n" + n), 
                i.b('        srcset="'), i.b(i.v(i.d("segment.mediaSrcset", t, e, 0))), i.b('"'), 
                i.b("\n" + n), i.b('        src="'), i.b(i.v(i.d("segment.mediaUrl", t, e, 0))), 
                i.b('"'), i.b("\n" + n), i.b('        class="wip-notification__content wip-notification__image" />'), 
                i.b("\n" + n), i.s(i.d("segment.annotations", t, e, 1), t, e, 0, 627, 826, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b("      <img"), i.b("\n" + n), i.b('        sizes="65px"'), i.b("\n" + n), i.b('        srcset="'), 
                    i.b(i.v(i.d("segment.annotationSrcset", t, e, 0))), i.b('"'), i.b("\n" + n), i.b('        src="'), 
                    i.b(i.v(i.d("segment.annotationUrl", t, e, 0))), i.b('"'), i.b("\n" + n), i.b('        class="wip-notification__content wip-notification__annotation" />'), 
                    i.b("\n" + n);
                })), t.pop()), i.b(i.rp("<notifications/_wipreactionicon0", t, e, "      ")), i.b("    </div>"), 
                i.b("\n" + n), i.b("  </a>"), i.b("\n" + n)), i.s(i.d("segment.is_expired", t, e, 1), t, e, 0, 962, 1202, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('  <div class="activity-block wip-notification wip-notification--expired js-wip-notification-expired">'), 
                    i.b("\n" + n), i.b('    <div class="wip-notification__content">'), i.b("\n" + n), 
                    i.b(i.rp("<bestyleguide/_icons/_image1", t, e, "      ")), i.b(i.rp("<notifications/_wipreactionicon2", t, e, "      ")), 
                    i.b("    </div>"), i.b("\n" + n);
                })), t.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<notifications/_wipreactionicon0": {
                    name: "notifications/_wipreactionicon",
                    partials: {},
                    subs: {}
                },
                "<bestyleguide/_icons/_image1": {
                    name: "bestyleguide/_icons/_image",
                    partials: {},
                    subs: {}
                },
                "<notifications/_wipreactionicon2": {
                    name: "notifications/_wipreactionicon",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_wipreaction|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> reacted to your Work in Progress{{/translate}}\n</div>\n<div class="graphic">\n  {{^segment.is_expired}}\n  <a href="{{user.url}}/workinprogress/{{segment.id}}" class="js-wip-notification-non-expired">\n    <div class="activity-block wip-notification">\n      <img\n        sizes="65px"\n        srcset="{{segment.mediaSrcset}}"\n        src="{{segment.mediaUrl}}"\n        class="wip-notification__content wip-notification__image" />\n      {{#segment.annotations}}\n      <img\n        sizes="65px"\n        srcset="{{segment.annotationSrcset}}"\n        src="{{segment.annotationUrl}}"\n        class="wip-notification__content wip-notification__annotation" />\n      {{/segment.annotations}}\n      {{>notifications/_wipreactionicon}}\n    </div>\n  </a>\n  {{/segment.is_expired}}\n  {{#segment.is_expired}}\n  <div class="activity-block wip-notification wip-notification--expired js-wip-notification-expired">\n    <div class="wip-notification__content">\n      {{>bestyleguide/_icons/_image}}\n      {{>notifications/_wipreactionicon}}\n    </div>\n  {{/segment.is_expired}}\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1961: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<img src="'), i.b(i.v(i.f("assetsurl", t, e, 0))), 
                i.b("img/stories/reactions/png/"), i.b(i.v(i.d("reaction.type", t, e, 0))), i.b('.png" srcset="'), 
                i.b(i.v(i.f("assetsurl", t, e, 0))), i.b("img/stories/reactions/png/"), i.b(i.v(i.d("reaction.type", t, e, 0))), 
                i.b(".png, "), i.b(i.v(i.f("assetsurl", t, e, 0))), i.b("img/stories/reactions/png/"), 
                i.b(i.v(i.d("reaction.type", t, e, 0))), i.b('@2x.png 2x" class="wip-reaction-icon" />'), 
                i.fl();
            },
            partials: {},
            subs: {}
        }, '<img src="{{assetsurl}}img/stories/reactions/png/{{reaction.type}}.png" srcset="{{assetsurl}}img/stories/reactions/png/{{reaction.type}}.png, {{assetsurl}}img/stories/reactions/png/{{reaction.type}}@2x.png 2x" class="wip-reaction-icon" />', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1962: function(t, e, n) {
        var i = n(356), a = {
            "bestyleguide/_icons/_image": n(1262).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + n), 
                i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 48, 219, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_wipreengaged|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a> posted their first Work in Progress in a while");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.b('<div class="graphic">'), 
                i.b("\n" + n), i.s(i.d("segment.is_expired", t, e, 1), t, e, 1, 0, 0, "") || (i.b('  <a href="'), 
                i.b(i.v(i.d("user.url", t, e, 0))), i.b("/workinprogress/"), i.b(i.v(i.d("segment.id", t, e, 0))), 
                i.b('">'), i.b("\n" + n), i.b('    <div class="activity-block wip-notification">'), 
                i.b("\n" + n), i.b("      <img"), i.b("\n" + n), i.b('        sizes="65px"'), i.b("\n" + n), 
                i.b('        srcset="'), i.b(i.v(i.d("segment.mediaSrcset", t, e, 0))), i.b('"'), 
                i.b("\n" + n), i.b('        src="'), i.b(i.v(i.d("segment.mediaUrl", t, e, 0))), 
                i.b('"'), i.b("\n" + n), i.b('        class="wip-notification__content wip-notification__image" />'), 
                i.b("\n" + n), i.s(i.d("segment.annotations", t, e, 1), t, e, 0, 602, 801, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b("      <img"), i.b("\n" + n), i.b('        sizes="65px"'), i.b("\n" + n), i.b('        srcset="'), 
                    i.b(i.v(i.d("segment.annotationSrcset", t, e, 0))), i.b('"'), i.b("\n" + n), i.b('        src="'), 
                    i.b(i.v(i.d("segment.annotationUrl", t, e, 0))), i.b('"'), i.b("\n" + n), i.b('        class="wip-notification__content wip-notification__annotation" />'), 
                    i.b("\n" + n);
                })), t.pop()), i.b("    </div>"), i.b("\n" + n), i.b("  </a>"), i.b("\n" + n)), 
                i.s(i.d("segment.is_expired", t, e, 1), t, e, 0, 895, 1065, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('  <div class="activity-block wip-notification wip-notification--expired">'), 
                    i.b("\n" + n), i.b('    <div class="wip-notification__content">'), i.b("\n" + n), 
                    i.b(i.rp("<bestyleguide/_icons/_image0", t, e, "      ")), i.b("    </div>"), i.b("\n" + n);
                })), t.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_icons/_image0": {
                    name: "bestyleguide/_icons/_image",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_wipreengaged|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> posted their first Work in Progress in a while{{/translate}}\n</div>\n<div class="graphic">\n  {{^segment.is_expired}}\n  <a href="{{user.url}}/workinprogress/{{segment.id}}">\n    <div class="activity-block wip-notification">\n      <img\n        sizes="65px"\n        srcset="{{segment.mediaSrcset}}"\n        src="{{segment.mediaUrl}}"\n        class="wip-notification__content wip-notification__image" />\n      {{#segment.annotations}}\n      <img\n        sizes="65px"\n        srcset="{{segment.annotationSrcset}}"\n        src="{{segment.annotationUrl}}"\n        class="wip-notification__content wip-notification__annotation" />\n      {{/segment.annotations}}\n    </div>\n  </a>\n  {{/segment.is_expired}}\n  {{#segment.is_expired}}\n  <div class="activity-block wip-notification wip-notification--expired">\n    <div class="wip-notification__content">\n      {{>bestyleguide/_icons/_image}}\n    </div>\n  {{/segment.is_expired}}\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1963: function(t, e, n) {
        var i = n(356), a = {
            "bestyleguide/_icons/_image": n(1262).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + n), 
                i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 48, 208, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_wipfirstpost|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a> posted their first Work in Progress");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.b('<div class="graphic">'), 
                i.b("\n" + n), i.s(i.d("segment.is_expired", t, e, 1), t, e, 1, 0, 0, "") || (i.b('  <a href="'), 
                i.b(i.v(i.d("user.url", t, e, 0))), i.b("/workinprogress/"), i.b(i.v(i.d("segment.id", t, e, 0))), 
                i.b('">'), i.b("\n" + n), i.b('    <div class="activity-block wip-notification">'), 
                i.b("\n" + n), i.b("      <img"), i.b("\n" + n), i.b('        sizes="65px"'), i.b("\n" + n), 
                i.b('        srcset="'), i.b(i.v(i.d("segment.mediaSrcset", t, e, 0))), i.b('"'), 
                i.b("\n" + n), i.b('        src="'), i.b(i.v(i.d("segment.mediaUrl", t, e, 0))), 
                i.b('"'), i.b("\n" + n), i.b('        class="wip-notification__content wip-notification__image" />'), 
                i.b("\n" + n), i.s(i.d("segment.annotations", t, e, 1), t, e, 0, 591, 790, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b("      <img"), i.b("\n" + n), i.b('        sizes="65px"'), i.b("\n" + n), i.b('        srcset="'), 
                    i.b(i.v(i.d("segment.annotationSrcset", t, e, 0))), i.b('"'), i.b("\n" + n), i.b('        src="'), 
                    i.b(i.v(i.d("segment.annotationUrl", t, e, 0))), i.b('"'), i.b("\n" + n), i.b('        class="wip-notification__content wip-notification__annotation" />'), 
                    i.b("\n" + n);
                })), t.pop()), i.b("    </div>"), i.b("\n" + n), i.b("  </a>"), i.b("\n" + n)), 
                i.s(i.d("segment.is_expired", t, e, 1), t, e, 0, 884, 1054, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('  <div class="activity-block wip-notification wip-notification--expired">'), 
                    i.b("\n" + n), i.b('    <div class="wip-notification__content">'), i.b("\n" + n), 
                    i.b(i.rp("<bestyleguide/_icons/_image0", t, e, "      ")), i.b("    </div>"), i.b("\n" + n);
                })), t.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_icons/_image0": {
                    name: "bestyleguide/_icons/_image",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_wipfirstpost|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> posted their first Work in Progress{{/translate}}\n</div>\n<div class="graphic">\n  {{^segment.is_expired}}\n  <a href="{{user.url}}/workinprogress/{{segment.id}}">\n    <div class="activity-block wip-notification">\n      <img\n        sizes="65px"\n        srcset="{{segment.mediaSrcset}}"\n        src="{{segment.mediaUrl}}"\n        class="wip-notification__content wip-notification__image" />\n      {{#segment.annotations}}\n      <img\n        sizes="65px"\n        srcset="{{segment.annotationSrcset}}"\n        src="{{segment.annotationUrl}}"\n        class="wip-notification__content wip-notification__annotation" />\n      {{/segment.annotations}}\n    </div>\n  </a>\n  {{/segment.is_expired}}\n  {{#segment.is_expired}}\n  <div class="activity-block wip-notification wip-notification--expired">\n    <div class="wip-notification__content">\n      {{>bestyleguide/_icons/_image}}\n    </div>\n  {{/segment.is_expired}}\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1964: function(t, e, n) {
        var i = n(356), a = {
            "bestyleguide/_icons/_image": n(1262).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + n), 
                i.b("  "), i.s(i.f("translate", t, e, 1), t, e, 0, 48, 213, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_wipsegmentmention|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a> mentioned you in a Work in Progress");
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.b('<div class="graphic">'), 
                i.b("\n" + n), i.s(i.d("segment.is_expired", t, e, 1), t, e, 1, 0, 0, "") || (i.b('  <a href="'), 
                i.b(i.v(i.d("actor.url", t, e, 0))), i.b("/workinprogress/"), i.b(i.v(i.d("segment.id", t, e, 0))), 
                i.b('">'), i.b("\n" + n), i.b('    <div class="activity-block wip-notification">'), 
                i.b("\n" + n), i.b("      <img"), i.b("\n" + n), i.b('        sizes="65px"'), i.b("\n" + n), 
                i.b('        srcset="'), i.b(i.v(i.d("segment.mediaSrcset", t, e, 0))), i.b('"'), 
                i.b("\n" + n), i.b('        src="'), i.b(i.v(i.d("segment.mediaUrl", t, e, 0))), 
                i.b('"'), i.b("\n" + n), i.b('        class="wip-notification__content wip-notification__image" />'), 
                i.b("\n" + n), i.s(i.d("segment.annotations", t, e, 1), t, e, 0, 597, 796, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b("      <img"), i.b("\n" + n), i.b('        sizes="65px"'), i.b("\n" + n), i.b('        srcset="'), 
                    i.b(i.v(i.d("segment.annotationSrcset", t, e, 0))), i.b('"'), i.b("\n" + n), i.b('        src="'), 
                    i.b(i.v(i.d("segment.annotationUrl", t, e, 0))), i.b('"'), i.b("\n" + n), i.b('        class="wip-notification__content wip-notification__annotation" />'), 
                    i.b("\n" + n);
                })), t.pop()), i.b("    </div>"), i.b("\n" + n), i.b("  </a>"), i.b("\n" + n)), 
                i.s(i.d("segment.is_expired", t, e, 1), t, e, 0, 890, 1060, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('  <div class="activity-block wip-notification wip-notification--expired">'), 
                    i.b("\n" + n), i.b('    <div class="wip-notification__content">'), i.b("\n" + n), 
                    i.b(i.rp("<bestyleguide/_icons/_image0", t, e, "      ")), i.b("    </div>"), i.b("\n" + n);
                })), t.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_icons/_image0": {
                    name: "bestyleguide/_icons/_image",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="msg extra-padding">\n  {{#translate}}notifications_wipsegmentmention|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> mentioned you in a Work in Progress{{/translate}}\n</div>\n<div class="graphic">\n  {{^segment.is_expired}}\n  <a href="{{actor.url}}/workinprogress/{{segment.id}}">\n    <div class="activity-block wip-notification">\n      <img\n        sizes="65px"\n        srcset="{{segment.mediaSrcset}}"\n        src="{{segment.mediaUrl}}"\n        class="wip-notification__content wip-notification__image" />\n      {{#segment.annotations}}\n      <img\n        sizes="65px"\n        srcset="{{segment.annotationSrcset}}"\n        src="{{segment.annotationUrl}}"\n        class="wip-notification__content wip-notification__annotation" />\n      {{/segment.annotations}}\n    </div>\n  </a>\n  {{/segment.is_expired}}\n  {{#segment.is_expired}}\n  <div class="activity-block wip-notification wip-notification--expired">\n    <div class="wip-notification__content">\n      {{>bestyleguide/_icons/_image}}\n    </div>\n  {{/segment.is_expired}}\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1965: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="livestream__message">'), i.b("\n" + n), 
                i.s(i.d("livestreamstarted.url", t, e, 1), t, e, 0, 62, 2459, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.s(i.d("livestreamstarted.is_live", t, e, 1), t, e, 0, 97, 638, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                        i.b('      <div class="livestream__header">'), i.b("\n" + n), i.b('        <p class="livestream__header__title">'), 
                        i.b("\n" + n), i.b("          "), i.s(i.f("translate", t, e, 1), t, e, 0, 207, 358, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                            n.b('notifications_livestream_started|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                            n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                            n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a> is livestreaming now");
                        })), t.pop()), i.b("\n" + n), i.b("        </p>"), i.b("\n" + n), i.b('        <div class="livestream__live">'), 
                        i.b("\n" + n), i.b('          <span class="livestream__live__indicator"></span>'), 
                        i.b("\n" + n), i.b('          <span class="livestream__live__text">'), i.s(i.f("translate", t, e, 1), t, e, 0, 546, 584, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                            n.b("notifications_livestream_live_tag|Live");
                        })), t.pop()), i.b("</span>"), i.b("\n" + n), i.b("        </div>"), i.b("\n" + n), 
                        i.b("      </div>"), i.b("\n" + n);
                    })), t.pop()), i.s(i.d("livestreamstarted.is_live", t, e, 1), t, e, 1, 0, 0, "") || (i.b('      <p class="livestream__header__title">'), 
                    i.b("\n" + n), i.b("        "), i.s(i.f("translate", t, e, 1), t, e, 0, 770, 921, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                        n.b('notifications_livestream_ended|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                        n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                        n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a>'s livestream has ended");
                    })), t.pop()), i.b("\n" + n), i.b("      </p>"), i.b("\n" + n)), i.b('    <div class="livestream__block">'), 
                    i.b("\n" + n), i.b('      <a href="'), i.b(i.v(i.d("livestreamstarted.url", t, e, 0))), 
                    i.b('">'), i.b("\n" + n), i.b('        <div class="livestream__preview" '), i.s(i.d("livestreamstarted.thumbnail_url", t, e, 1), t, e, 0, 1138, 1204, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                        n.b('style="background-image: url('), n.b(n.v(n.d("livestreamstarted.thumbnail_url", t, e, 0))), 
                        n.b(')"');
                    })), t.pop()), i.b(">"), i.b("\n" + n), i.s(i.d("livestreamstarted.tool.synonym.icon_url_2x", t, e, 1), t, e, 0, 1299, 1406, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                        i.b('            <img class="livestream__tool" src="'), i.b(i.v(i.d("livestreamstarted.tool.synonym.icon_url_2x", t, e, 0))), 
                        i.b('">'), i.b("\n" + n);
                    })), t.pop()), i.s(i.d("livestreamstarted.thumbnail_url", t, e, 1), t, e, 1, 0, 0, "") || i.s(i.d("actor.images.276", t, e, 1), t, e, 0, 1534, 1747, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                        i.b('              <img class="livestream__profile__image" src="'), i.b(i.v(i.d("actor.images.276", t, e, 0))), 
                        i.b('">'), i.b("\n" + n), i.b('              <div class="livestream__profile__background" style="background-image: url('), 
                        i.b(i.v(i.d("actor.images.276", t, e, 0))), i.b(')"></div>'), i.b("\n" + n);
                    })), t.pop()), i.b("        </div>"), i.b("\n" + n), i.b("      </a>"), i.b("\n" + n), 
                    i.b('      <div class="livestream__details">'), i.b("\n" + n), i.b('        <p class="livestream__title">'), 
                    i.b("\n" + n), i.b("          "), i.b(i.v(i.d("livestreamstarted.title", t, e, 0))), 
                    i.b("\n" + n), i.b("        </p>"), i.b("\n" + n), i.b('        <a class="livestream__button rf-button rf-button--small" href="'), 
                    i.b(i.v(i.d("livestreamstarted.url", t, e, 0))), i.b('">'), i.b("\n" + n), i.s(i.d("livestreamstarted.is_live", t, e, 1), t, e, 0, 2110, 2209, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                        i.b("            "), i.s(i.f("translate", t, e, 1), t, e, 0, 2137, 2184, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                            n.b("notifications_livestream_watch_button|Watch Now");
                        })), t.pop()), i.b("\n" + n);
                    })), t.pop()), i.s(i.d("livestreamstarted.is_live", t, e, 1), t, e, 1, 0, 0, "") || (i.b("            "), 
                    i.s(i.f("translate", t, e, 1), t, e, 0, 2307, 2364, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                        n.b("notifications_livestream_watch_replay_button|Watch Replay");
                    })), t.pop()), i.b("\n" + n)), i.b("        </a>"), i.b("\n" + n), i.b("      </div>"), 
                    i.b("\n" + n), i.b("    </div>"), i.b("\n" + n);
                })), t.pop()), i.s(i.d("livestreamstarted.url", t, e, 1), t, e, 1, 0, 0, "") || (i.b('    <p class="livestream__header__title">'), 
                i.b("\n" + n), i.b("      "), i.s(i.f("translate", t, e, 1), t, e, 0, 2577, 2728, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_livestream_ended|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b("</a>'s livestream has ended");
                })), t.pop()), i.b("\n" + n), i.b("    </p>"), i.b("\n" + n)), i.b("</div>"), i.b("\n"), 
                i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="livestream__message">\n  {{#livestreamstarted.url}}\n    {{#livestreamstarted.is_live}}\n      <div class="livestream__header">\n        <p class="livestream__header__title">\n          {{#translate}}notifications_livestream_started|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> is livestreaming now{{/translate}}\n        </p>\n        <div class="livestream__live">\n          <span class="livestream__live__indicator"></span>\n          <span class="livestream__live__text">{{#translate}}notifications_livestream_live_tag|Live{{/translate}}</span>\n        </div>\n      </div>\n    {{/livestreamstarted.is_live}}\n    {{^livestreamstarted.is_live}}\n      <p class="livestream__header__title">\n        {{#translate}}notifications_livestream_ended|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a>\'s livestream has ended{{/translate}}\n      </p>\n    {{/livestreamstarted.is_live}}\n    <div class="livestream__block">\n      <a href="{{livestreamstarted.url}}">\n        <div class="livestream__preview" {{#livestreamstarted.thumbnail_url}}style="background-image: url({{livestreamstarted.thumbnail_url}})"{{/livestreamstarted.thumbnail_url}}>\n          {{#livestreamstarted.tool.synonym.icon_url_2x}}\n            <img class="livestream__tool" src="{{livestreamstarted.tool.synonym.icon_url_2x}}">\n          {{/livestreamstarted.tool.synonym.icon_url_2x}}\n          {{^livestreamstarted.thumbnail_url}}\n            {{#actor.images.276}}\n              <img class="livestream__profile__image" src="{{actor.images.276}}">\n              <div class="livestream__profile__background" style="background-image: url({{actor.images.276}})"></div>\n            {{/actor.images.276}}\n          {{/livestreamstarted.thumbnail_url}}\n        </div>\n      </a>\n      <div class="livestream__details">\n        <p class="livestream__title">\n          {{livestreamstarted.title}}\n        </p>\n        <a class="livestream__button rf-button rf-button--small" href="{{livestreamstarted.url}}">\n          {{#livestreamstarted.is_live}}\n            {{#translate}}notifications_livestream_watch_button|Watch Now{{/translate}}\n          {{/livestreamstarted.is_live}}\n          {{^livestreamstarted.is_live}}\n            {{#translate}}notifications_livestream_watch_replay_button|Watch Replay{{/translate}}\n          {{/livestreamstarted.is_live}}\n        </a>\n      </div>\n    </div>\n  {{/livestreamstarted.url}}\n  {{^livestreamstarted.url}}\n    <p class="livestream__header__title">\n      {{#translate}}notifications_livestream_ended|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a>\'s livestream has ended{{/translate}}\n    </p>\n  {{/livestreamstarted.url}}\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1966: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="msg extra-padding">'), i.b("\n" + n), 
                i.s(i.f("translate", t, e, 1), t, e, 0, 46, 249, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('module_added_to_collection_bell_text|<a href="'), n.b(n.v(n.d("actor.url", t, e, 0))), 
                    n.b('" class="js-mini-profile" data-id="'), n.b(n.v(n.d("actor.id", t, e, 0))), 
                    n.b('">'), n.b(n.v(n.d("actor.display_name", t, e, 0))), n.b('</a> saved an image from "<a href="'), 
                    n.b(n.v(n.d("project.url", t, e, 0))), n.b('">'), n.b(n.v(n.d("project.name", t, e, 0))), 
                    n.b('</a>"');
                })), t.pop()), i.b("\n" + n), i.b("</div>"), i.b("\n" + n), i.b('<a href="'), i.b(i.v(i.d("collection.url", t, e, 0))), 
                i.b('" class="graphic">'), i.b("\n" + n), i.b('  <div class="activity-block project-collection">'), 
                i.b("\n"), i.b("\n" + n), i.s(i.d("collection.latest_projects", t, e, 1), t, e, 0, 403, 640, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('      <div class="collection-project-image-wrap">'), i.b("\n" + n), i.b('        <img alt="'), 
                    i.b(i.v(i.d("collection.title", t, e, 0))), i.b('" title="'), i.b(i.v(i.d("collection.title", t, e, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("covers.115", t, e, 0))), i.b('" srcset="'), i.b(i.v(i.d("covers.115", t, e, 0))), 
                    i.b(", "), i.b(i.v(i.d("covers.202", t, e, 0))), i.b(' 2x" class="collection-project-image" />'), 
                    i.b("\n" + n), i.b("      </div>"), i.b("\n" + n);
                })), t.pop()), i.b('    <div class="collection-title">'), i.b("\n" + n), i.b('      <span class="collection-title-text beicons-pre beicons-pre-collection">'), 
                i.b(i.v(i.d("collection.title", t, e, 0))), i.b("</span>"), i.b("\n" + n), i.b("    </div>"), 
                i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</a>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="msg extra-padding">\n{{#translate}}module_added_to_collection_bell_text|<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> saved an image from "<a href="{{project.url}}">{{project.name}}</a>"{{/translate}}\n</div>\n<a href="{{collection.url}}" class="graphic">\n  <div class="activity-block project-collection">\n\n    {{#collection.latest_projects}}\n      <div class="collection-project-image-wrap">\n        <img alt="{{collection.title}}" title="{{collection.title}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="collection-project-image" />\n      </div>\n    {{/collection.latest_projects}}\n    <div class="collection-title">\n      <span class="collection-title-text beicons-pre beicons-pre-collection">{{collection.title}}</span>\n    </div>\n  </div>\n</a>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1967: function(t, e, n) {
        var i = n(356), a = {
            "bestyleguide/_avatar": n(455).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="notification-group'), i.s(i.f("read_on", t, e, 1), t, e, 1, 0, 0, "") || i.b(" unread"), 
                i.b('">'), i.b("\n" + n), i.b('  <div class="notification-container">'), i.b("\n" + n), 
                i.s(i.f("data", t, e, 1), t, e, 0, 114, 745, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.s(i.f("actor", t, e, 1), t, e, 0, 129, 454, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                        n.b(n.rp("<bestyleguide/_avatar0", t, e, ""));
                    })), t.pop()), i.s(i.f("actor", t, e, 1), t, e, 1, 0, 0, "") || i.b(i.rp("<bestyleguide/_avatar1", t, e, "")), 
                    i.b('    <div class="detail beside-avatar">'), i.b("\n" + n), i.b(i.rp("<innard2", t, e, "      ")), 
                    i.b('      <div class="time">'), i.b(i.v(i.f("time_ago", t, e, 0))), i.b("</div>"), 
                    i.b("\n" + n), i.b("    </div>"), i.b("\n" + n);
                })), t.pop()), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_avatar0": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        avatarClasses: function(t, e, n, i) {
                            n.b("js-mini-profile");
                        },
                        avatarId: function(t, e, n, i) {
                            n.b(n.v(n.d("actor.id", t, e, 0)));
                        },
                        avatarUrl: function(t, e, n, i) {
                            n.b(n.v(n.d("actor.url", t, e, 0)));
                        },
                        src: function(t, e, n, i) {
                            n.b(n.v(n.d("actor.images.50", t, e, 0)));
                        },
                        srcLarge: function(t, e, n, i) {
                            n.b(n.v(n.d("actor.images.115", t, e, 0)));
                        }
                    }
                },
                "<bestyleguide/_avatar1": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        src: function(t, e, n, i) {
                            n.b(n.v(n.f("assetsurl", t, e, 0))), n.b("img/notifications/behance-icon.jpg");
                        }
                    }
                },
                "<innard2": {
                    name: "innard",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="notification-group{{^read_on}} unread{{/read_on}}">\n  <div class="notification-container">\n  {{#data}}\n    {{#actor}}\n      {{<bestyleguide/_avatar}}\n        {{$avatarClasses}}js-mini-profile{{/avatarClasses}}\n        {{$avatarId}}{{actor.id}}{{/avatarId}}\n        {{$avatarUrl}}{{actor.url}}{{/avatarUrl}}\n        {{$src}}{{actor.images.50}}{{/src}}\n        {{$srcLarge}}{{actor.images.115}}{{/srcLarge}}\n      {{/bestyleguide/_avatar}}\n    {{/actor}}\n    {{^actor}}\n      {{<bestyleguide/_avatar}}\n        {{$src}}{{assetsurl}}img/notifications/behance-icon.jpg{{/src}}\n      {{/bestyleguide/_avatar}}\n    {{/actor}}\n    <div class="detail beside-avatar">\n      {{> innard}}\n      <div class="time">{{time_ago}}</div>\n    </div>\n  {{/data}}\n  </div>\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1968: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="notification-group'), i.s(i.f("any_unread", t, e, 1), t, e, 0, 45, 52, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b(" unread");
                })), t.pop()), i.b('">'), i.b("\n" + n), i.b('  <div class="js-context"></div>'), 
                i.b("\n" + n), i.b('  <div class="js-more notification-group-more">'), i.s(i.f("translate", t, e, 1), t, e, 0, 164, 240, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('notifications_group_more_updates|+ <span class="count">0</span> More Updates');
                })), t.pop()), i.b("</div>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="notification-group{{#any_unread}} unread{{/any_unread}}">\n  <div class="js-context"></div>\n  <div class="js-more notification-group-more">{{#translate}}notifications_group_more_updates|+ <span class="count">0</span> More Updates{{/translate}}</div>\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1969: function(t, e, n) {
        var i = n(356), a = {
            "lib/_addWorkButton": n(1970).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="notifications-empty">'), i.b("\n" + n), 
                i.b('<div class="notifications-empty-title">'), i.s(i.f("translate", t, e, 1), t, e, 0, 87, 156, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b("notifications_empty_title|You don't have any notifications right now.");
                })), t.pop()), i.b("</div>"), i.b("\n" + n), i.s(i.f("translate", t, e, 1), t, e, 0, 191, 324, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b("notifications_empty_content|We'll notify you when you get appreciations, comments, or new followers. To get started, upload new work.");
                })), t.pop()), i.b("\n" + n), i.b(i.rp("<lib/_addWorkButton0", t, e, "")), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {
                "<lib/_addWorkButton0": {
                    name: "lib/_addWorkButton",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="notifications-empty">\n<div class="notifications-empty-title">{{#translate}}notifications_empty_title|You don\'t have any notifications right now.{{/translate}}</div>\n{{#translate}}notifications_empty_content|We\'ll notify you when you get appreciations, comments, or new followers. To get started, upload new work.{{/translate}}\n{{>lib/_addWorkButton}}\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1970: function(t, e, n) {
        var i = n(356), a = {
            "lib/_buttons/_link": n(435).template,
            "_icons/_upload": n(1971).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b(i.rp("<lib/_buttons/_link1", t, e, "")), i.fl();
            },
            partials: {
                "<lib/_buttons/_link1": {
                    name: "lib/_buttons/_link",
                    partials: {
                        "<leadingIconAsset_icons/_upload0": {
                            name: "_icons/_upload",
                            partials: {},
                            subs: {}
                        }
                    },
                    subs: {
                        attrs: function(t, e, n, i) {
                            n.b('id="new-work-button" unselectable="on" tabindex="0" href="/portfolio/editor" '), 
                            n.s(n.f("add_work_button_data", t, e, 1), t, e, 0, 138, 163, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                                n.b(" data-"), n.b(n.v(n.f("key", t, e, 0))), n.b('="'), n.b(n.v(n.f("value", t, e, 0))), 
                                n.b('"');
                            })), t.pop());
                        },
                        containerClasses: function(t, e, n, i) {
                            n.b("nav-new-work-button");
                        },
                        classes: function(t, e, n, i) {
                            n.b("hide-phone hide-tablet qa-add-work-button new-work-button rf-button--small rf-button--icon-leading");
                        },
                        leadingIconAsset: function(t, e, n, i) {
                            n.b(n.rp("<leadingIconAsset_icons/_upload0", t, e, ""));
                        },
                        label: function(t, e, n, i) {
                            n.s(n.f("translate", t, e, 1), t, e, 0, 479, 503, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                                n.b("button_add_work|Add Work");
                            })), t.pop());
                        }
                    }
                }
            },
            subs: {}
        }, '{{<lib/_buttons/_link}}\n  {{$attrs}}id="new-work-button" unselectable="on" tabindex="0" href="/portfolio/editor" {{#add_work_button_data}} data-{{key}}="{{value}}"{{/add_work_button_data}}{{/attrs}}\n  {{$containerClasses}}nav-new-work-button{{/containerClasses}}\n  {{$classes}}hide-phone hide-tablet qa-add-work-button new-work-button rf-button--small rf-button--icon-leading{{/classes}}\n  {{$leadingIconAsset}}{{> _icons/_upload}}{{/leadingIconAsset}}\n  {{$label}}{{#translate}}button_add_work|Add Work{{/translate}}{{/label}}\n{{/lib/_buttons/_link}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1971: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0.5 0.5 16 16">'), 
                i.b("\n" + n), i.b('  <rect y=".5" x=".5" height="16" width="16" fill="none"/>'), 
                i.b("\n" + n), i.b('    <path d="m13 7.5v-0.5-0.001c0-2.484-2.016-4.499-4.5-4.499-2.486 0-4.5 2.015-4.5 4.499v0.001 0.5c-1.933 0-3.5 1.566-3.5 3.5 0 1.932 1.567 3.5 3.5 3.5h2.5c0.553 0 1-0.448 1-1v-2h-3l4-5 4 5h-3v2c0 0.552 0.447 1 1 1h2.5c1.934 0 3.5-1.566 3.5-3.499 0-1.935-1.566-3.501-3.5-3.501z"/>'), 
                i.b("\n" + n), i.b("</svg>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0.5 0.5 16 16">\n  <rect y=".5" x=".5" height="16" width="16" fill="none"/>\n    <path d="m13 7.5v-0.5-0.001c0-2.484-2.016-4.499-4.5-4.499-2.486 0-4.5 2.015-4.5 4.499v0.001 0.5c-1.933 0-3.5 1.566-3.5 3.5 0 1.932 1.567 3.5 3.5 3.5h2.5c0.553 0 1-0.448 1-1v-2h-3l4-5 4 5h-3v2c0 0.552 0.447 1 1 1h2.5c1.934 0 3.5-1.566 3.5-3.499 0-1.935-1.566-3.501-3.5-3.501z"/>\n</svg>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1972: function(t, e, n) {
        var i = n(356), a = {
            "bestyleguide/_avatar": n(455).template,
            "lib/_buttons/_default": n(967).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="proposition-group cfix">'), i.b("\n" + n), 
                i.b('  <div class="js-invitation">'), i.b("\n"), i.b("\n" + n), i.b(i.rp("<bestyleguide/_avatar0", t, e, "")), 
                i.b("\n" + n), i.b('    <div class="detail beside-avatar">'), i.b("\n" + n), i.b('      <div class="msg extra-padding">'), 
                i.b("\n" + n), i.b(i.rp("<subject1", t, e, "        ")), i.b("      </div>"), i.b("\n"), 
                i.b("\n" + n), i.b('      <div class="graphic">'), i.b("\n" + n), i.b('        <div class="activity-block proposition-'), 
                i.b(i.v(i.f("proposition", t, e, 0))), i.b(' cfix">'), i.b("\n" + n), i.b(i.rp("<innards2", t, e, "          ")), 
                i.b(i.rp("<lib/_buttons/_default3", t, e, "")), i.b("        </div>"), i.b("\n" + n), 
                i.b("      </div>"), i.b("\n"), i.b("\n" + n), i.b('      <div class="time">'), 
                i.b("\n" + n), i.b('        <span class="proposition-time js-time">'), i.b(i.v(i.f("time_ago", t, e, 0))), 
                i.b("</span>"), i.b("\n" + n), i.b('        <span class="js-reject proposition-reject">'), 
                i.s(i.f("translate", t, e, 1), t, e, 0, 1036, 1077, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b("notifications_declined|Decline invitation");
                })), t.pop()), i.b("</span>"), i.b("\n" + n), i.b("      </div>"), i.b("\n"), i.b("\n" + n), 
                i.b("    </div>"), i.b("\n"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_avatar0": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        avatarClasses: function(t, e, n, i) {
                            n.b("js-mini-profile");
                        },
                        avatarId: function(t, e, n, i) {
                            n.b(n.v(n.d("actor.id", t, e, 0)));
                        },
                        avatarUrl: function(t, e, n, i) {
                            n.b(n.v(n.d("actor.url", t, e, 0)));
                        },
                        src: function(t, e, n, i) {
                            n.b(n.v(n.d("actor.images.50", t, e, 0)));
                        },
                        srcLarge: function(t, e, n, i) {
                            n.b(n.v(n.d("actor.images.115", t, e, 0)));
                        }
                    }
                },
                "<subject1": {
                    name: "subject",
                    partials: {},
                    subs: {}
                },
                "<innards2": {
                    name: "innards",
                    partials: {},
                    subs: {}
                },
                "<lib/_buttons/_default3": {
                    name: "lib/_buttons/_default",
                    partials: {},
                    subs: {
                        classes: function(t, e, n, i) {
                            n.b("accept right js-accept rf-button--small");
                        },
                        label: function(t, e, n, i) {
                            n.s(n.f("translate", t, e, 1), t, e, 0, 759, 788, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                                n.b("notifications_accepted|Accept");
                            })), t.pop());
                        }
                    }
                }
            },
            subs: {}
        }, '<div class="proposition-group cfix">\n  <div class="js-invitation">\n\n    {{<bestyleguide/_avatar}}\n      {{$avatarClasses}}js-mini-profile{{/avatarClasses}}\n      {{$avatarId}}{{actor.id}}{{/avatarId}}\n      {{$avatarUrl}}{{actor.url}}{{/avatarUrl}}\n      {{$src}}{{actor.images.50}}{{/src}}\n      {{$srcLarge}}{{actor.images.115}}{{/srcLarge}}\n    {{/bestyleguide/_avatar}}\n\n    <div class="detail beside-avatar">\n      <div class="msg extra-padding">\n        {{> subject}}\n      </div>\n\n      <div class="graphic">\n        <div class="activity-block proposition-{{proposition}} cfix">\n          {{> innards}}\n          {{<lib/_buttons/_default}}\n            {{$classes}}accept right js-accept rf-button--small{{/classes}}\n            {{$label}}{{#translate}}notifications_accepted|Accept{{/translate}}{{/label}}\n          {{/lib/_buttons/_default}}\n        </div>\n      </div>\n\n      <div class="time">\n        <span class="proposition-time js-time">{{time_ago}}</span>\n        <span class="js-reject proposition-reject">{{#translate}}notifications_declined|Decline invitation{{/translate}}</span>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1973: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("collection", t, e, 1), t, e, 0, 15, 358, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.s(i.d("latest_projects.0", t, e, 1), t, e, 0, 42, 284, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                        i.b('      <a href="'), i.b(i.v(i.d("collection.url", t, e, 0))), i.b('">'), i.b("\n" + n), 
                        i.b('        <img alt="'), i.b(i.v(i.f("title", t, e, 0))), i.b('" title="'), i.b(i.v(i.f("title", t, e, 0))), 
                        i.b('" src="'), i.b(i.v(i.d("latest_projects.0.covers.115", t, e, 0))), i.b('" srcset="'), 
                        i.b(i.v(i.d("latest_projects.0.covers.115", t, e, 0))), i.b(", "), i.b(i.v(i.d("latest_projects.0.covers.202", t, e, 0))), 
                        i.b(' 2x" class="comment-image" />'), i.b("\n" + n), i.b("      </a>"), i.b("\n" + n);
                    })), t.pop()), i.b('  <div class="proposition-subject">'), i.b(i.v(i.f("title", t, e, 0))), 
                    i.b("</div>"), i.b("\n" + n);
                })), t.pop()), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#collection}}\n    {{#latest_projects.0}}\n      <a href="{{collection.url}}">\n        <img alt="{{title}}" title="{{title}}" src="{{latest_projects.0.covers.115}}" srcset="{{latest_projects.0.covers.115}}, {{latest_projects.0.covers.202}} 2x" class="comment-image" />\n      </a>\n    {{/latest_projects.0}}\n  <div class="proposition-subject">{{title}}</div>\n{{/collection}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1974: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("project", t, e, 1), t, e, 0, 12, 225, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('  <a href="'), i.b(i.v(i.f("url", t, e, 0))), i.b('">'), i.b("\n" + n), i.b('    <img alt="'), 
                    i.b(i.v(i.f("name", t, e, 0))), i.b('" title="'), i.b(i.v(i.f("name", t, e, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("covers.115", t, e, 0))), i.b('" srcset="'), i.b(i.v(i.d("covers.115", t, e, 0))), 
                    i.b(", "), i.b(i.v(i.d("covers.202", t, e, 0))), i.b(' 2x" class="proposition-image" />'), 
                    i.b("\n" + n), i.b("  </a>"), i.b("\n" + n), i.b('  <div class="proposition-subject">'), 
                    i.b(i.v(i.f("name", t, e, 0))), i.b("</div>"), i.b("\n" + n);
                })), t.pop()), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#project}}\n  <a href="{{url}}">\n    <img alt="{{name}}" title="{{name}}" src="{{covers.115}}" srcset="{{covers.115}}, {{covers.202}} 2x" class="proposition-image" />\n  </a>\n  <div class="proposition-subject">{{name}}</div>\n{{/project}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1975: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("team", t, e, 1), t, e, 0, 9, 216, "{{ }}") && (i.rs(t, e, (function(t, e, i) {
                    i.b('  <a href="'), i.b(i.v(i.f("url", t, e, 0))), i.b('">'), i.b("\n" + n), i.b('    <img alt="'), 
                    i.b(i.v(i.f("name", t, e, 0))), i.b('" title="'), i.b(i.v(i.f("name", t, e, 0))), 
                    i.b('" src="'), i.b(i.v(i.d("images.138", t, e, 0))), i.b('" srcset="'), i.b(i.v(i.d("images.138", t, e, 0))), 
                    i.b(", "), i.b(i.v(i.d("images.276", t, e, 0))), i.b(' 2x" class="comment-image" />'), 
                    i.b("\n" + n), i.b("  </a>"), i.b("\n" + n), i.b('<div class="proposition-subject">'), 
                    i.b(i.v(i.f("name", t, e, 0))), i.b("</div>"), i.b("\n" + n);
                })), t.pop()), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#team}}\n  <a href="{{url}}">\n    <img alt="{{name}}" title="{{name}}" src="{{images.138}}" srcset="{{images.138}}, {{images.276}} 2x" class="comment-image" />\n  </a>\n<div class="proposition-subject">{{name}}</div>\n{{/team}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1976: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<a href="'), i.b(i.v(i.d("actor.url", t, e, 0))), 
                i.b('" class="js-mini-profile" data-id="'), i.b(i.v(i.d("actor.id", t, e, 0))), 
                i.b('">'), i.b(i.v(i.d("actor.display_name", t, e, 0))), i.b("</a> "), i.b(i.v(i.f("action", t, e, 0))), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> {{action}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1977: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<a href="'), i.b(i.v(i.d("actor.url", t, e, 0))), 
                i.b('" class="js-mini-profile" data-id="'), i.b(i.v(i.d("actor.id", t, e, 0))), 
                i.b('">'), i.b(i.v(i.d("actor.display_name", t, e, 0))), i.b("</a> "), i.b(i.v(i.f("action", t, e, 0))), 
                i.b(" "), i.s(i.f("team", t, e, 1), t, e, 0, 118, 148, "{{ }}") && (i.rs(t, e, (function(t, e, n) {
                    n.b('<a href="'), n.b(n.v(n.f("url", t, e, 0))), n.b('">'), n.b(n.v(n.f("name", t, e, 0))), 
                    n.b("</a>");
                })), t.pop()), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<a href="{{actor.url}}" class="js-mini-profile" data-id="{{actor.id}}">{{actor.display_name}}</a> {{action}} {{#team}}<a href="{{url}}">{{name}}</a>{{/team}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1978: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="activity-container-wrap">'), i.b("\n" + n), 
                i.b('  <div class="bell-section propositions-section js-propositions"></div>'), 
                i.b("\n" + n), i.b('  <div class="bell-section notifications-section js-notifications"></div>'), 
                i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="activity-container-wrap">\n  <div class="bell-section propositions-section js-propositions"></div>\n  <div class="bell-section notifications-section js-notifications"></div>\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    1979: function(t, e, n) {
        t.exports = n(2)(228);
    },
    1980: function(t, e, n) {
        "use strict";
        var i = n(1461), a = n.n(i);
        e.default = a.a;
    },
    1981: function(t, e, n) {
        (e = t.exports = n(189)(!1)).push([ t.i, ".PrimaryNav-root-3lS {\n  margin-bottom: -3px;\n  position: relative;\n  z-index: 5;\n}\n.PrimaryNav-fixed-1mb {\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n@media (min-width: 1025px) {\n.has-message .PrimaryNav-fixed-1mb {\n      top: 35px;\n}\n}\n.popup.inbox.timeline-container::after {\n  right: 11px;\n}\n.PrimaryNav-tooltipWrapper-166 {\n  position: absolute;\n  right: 0;\n  top: 100%;\n}\n@media (max-width: 1079px) {\n.PrimaryNav-tooltipWrapper-166 {\n      display: none;\n}\n}\n.PrimaryNav-strip-3w8 {\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  height: 56px;\n}\n@media (min-width: 1025px) {\n.PrimaryNav-strip-3w8 {\n      padding-right: 24px;\n}\n}\n@media (max-width: 1079px) {\n.PrimaryNav-strip-3w8 {\n      padding-right: 8px;\n}\n}\n.PrimaryNav-strip-3w8::before {\n    background-color: #f2f2f2;\n    bottom: 0;\n    content: '';\n    height: 1px;\n    left: 0;\n    opacity: 1;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n}\n.PrimaryNav-strip-3w8::after {\n    background-color: #191919;\n    bottom: -1px;\n    content: '';\n    height: 100vh;\n    left: 0;\n    opacity: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-transition: opacity 0.25s linear;\n    transition: opacity 0.25s linear;\n}\n.PrimaryNav-root-3lS:not(.PrimaryNav-hamburgerMenuOpen-9pT) .PrimaryNav-strip-3w8::after {\n      pointer-events: none;\n}\n@media (min-width: 1080px) {\n.PrimaryNav-strip-3w8 {\n      padding-left: 24px;\n}\n}\n@media (max-width: 1079px) {\n.PrimaryNav-strip-3w8 .PrimaryNav-hamburgerMenuActivate-2-M {\n      padding-left: 16px;\n}\n}\n.PrimaryNav-appLinkContainer-3Ep {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.PrimaryNav-strip-3w8 .PrimaryNav-signup-Yf6,\n.PrimaryNav-strip-3w8 .PrimaryNav-loggedOutOptions-1SQ {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigation-rdG {\n  display: -webkit-box;\n  display: flex;\n}\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigation-rdG,\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236 {\n  height: 100%;\n}\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236 {\n  position: relative;\n}\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236:not(:last-child) {\n    margin-right: 24px;\n}\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps .PrimaryNav-coreNavigationLink-2uv,\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH .PrimaryNav-coreNavigationLink-2uv {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps .PrimaryNav-coreNavigationLink-2uv::after {\n  background-color: #191919;\n  content: '';\n  height: 2px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 100%;\n  -webkit-transition: opacity 0.15s, -webkit-transform 0.15s;\n  transition: opacity 0.15s, -webkit-transform 0.15s;\n  transition: transform 0.15s, opacity 0.15s;\n  transition: transform 0.15s, opacity 0.15s, -webkit-transform 0.15s;\n}\n.PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps .PrimaryNav-coreNavigationLink-2uv.PrimaryNav-active-jbv::after, .PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps .PrimaryNav-coreNavigationLink-2uv:hover::after {\n  opacity: 1;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.PrimaryNav-coreNavigationLink-2uv,\n.PrimaryNav-adobeCreativeCloudLink-8C1 {\n  color: inherit;\n}\n.PrimaryNav-coreNavigationLink-2uv .PrimaryNav-coreNavigationLabel-3rj::after,\n  .PrimaryNav-adobeCreativeCloudLink-8C1 .PrimaryNav-coreNavigationLabel-3rj::after {\n    background-color: rgba(0, 87, 255, 0.2);\n    border: 2px solid #0057ff;\n    border-radius: 3px;\n    bottom: -2px;\n    content: '';\n    left: -8px;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    right: -8px;\n    top: -2px;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    -webkit-transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n    transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n    transition: opacity 0.15s linear, transform 0.15s ease;\n    transition: opacity 0.15s linear, transform 0.15s ease, -webkit-transform 0.15s ease;\n}\n.PrimaryNav-coreNavigationLink-2uv.focus-visible .PrimaryNav-coreNavigationLabel-3rj::after,\n  .PrimaryNav-adobeCreativeCloudLink-8C1.focus-visible .PrimaryNav-coreNavigationLabel-3rj::after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.PrimaryNav-coreNavigationLink-2uv:hover,\n  .PrimaryNav-adobeCreativeCloudLink-8C1:hover {\n    text-decoration: none;\n}\n.PrimaryNav-adobeCreativeCloudLink-8C1 {\n  position: relative;\n}\n.PrimaryNav-adobeCreativeCloudLink-8C1 .PrimaryNav-iconWrap-1F1::after {\n    background-color: rgba(0, 87, 255, 0.2);\n    border: 2px solid #0057ff;\n    border-radius: 3px;\n    bottom: -2px;\n    content: '';\n    left: -8px;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    right: -8px;\n    top: -2px;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    -webkit-transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n    transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n    transition: opacity 0.15s linear, transform 0.15s ease;\n    transition: opacity 0.15s linear, transform 0.15s ease, -webkit-transform 0.15s ease;\n}\n.PrimaryNav-adobeCreativeCloudLink-8C1 .PrimaryNav-iconWrap-1F1::after {\n    bottom: -5px;\n    top: -5px;\n}\n.PrimaryNav-adobeCreativeCloudLink-8C1.focus-visible .PrimaryNav-iconWrap-1F1::after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.PrimaryNav-a11yButton-2Cl,\n.PrimaryNav-a11yButton-2Cl.PrimaryNav-createAProject-1Ul {\n  position: relative;\n  z-index: 1;\n}\n.PrimaryNav-a11yButton-2Cl.focus-visible,\n  .PrimaryNav-a11yButton-2Cl.PrimaryNav-createAProject-1Ul.focus-visible {\n    outline: 0;\n}\n.PrimaryNav-a11yButtonWrap-23Z {\n  position: relative;\n}\n.PrimaryNav-a11yButton-2Cl {\n  position: relative;\n}\n.PrimaryNav-a11yButton-2Cl.focus-visible + .PrimaryNav-a11yButtonHelper-3Vx::after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.PrimaryNav-a11yButtonWrap-23Z .PrimaryNav-a11yButtonHelper-3Vx::after {\n  background-color: rgba(0, 87, 255, 0.2);\n  border: 2px solid #0057ff;\n  border-radius: 3px;\n  bottom: -2px;\n  content: '';\n  left: -8px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  right: -8px;\n  top: -2px;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  -webkit-transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n  transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n  transition: opacity 0.15s linear, transform 0.15s ease;\n  transition: opacity 0.15s linear, transform 0.15s ease, -webkit-transform 0.15s ease;\n}\n.PrimaryNav-a11yButtonWrap-23Z .PrimaryNav-a11yButtonHelper-3Vx::after {\n  border-radius: 50px;\n  bottom: -5px;\n  content: '';\n  left: -5px;\n  right: -5px;\n  top: -5px;\n}\n.PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH .PrimaryNav-coreNavigationLink-2uv .PrimaryNav-logoWrap-564 {\n  padding: 6px 0;\n  position: relative;\n}\n.PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH .PrimaryNav-coreNavigationLink-2uv .PrimaryNav-logoWrap-564::after {\n    background-color: rgba(0, 87, 255, 0.2);\n    border: 2px solid #0057ff;\n    border-radius: 3px;\n    bottom: -2px;\n    content: '';\n    left: -8px;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    right: -8px;\n    top: -2px;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    -webkit-transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n    transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n    transition: opacity 0.15s linear, transform 0.15s ease;\n    transition: opacity 0.15s linear, transform 0.15s ease, -webkit-transform 0.15s ease;\n}\n.PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH .PrimaryNav-coreNavigationLink-2uv.focus-visible .PrimaryNav-logoWrap-564::after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.PrimaryNav-coreNavigationLabel-3rj {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  position: relative;\n}\n.PrimaryNav-coreNavigationLabel-3rj::after {\n    background-color: rgba(0, 87, 255, 0.2);\n    border: 2px solid #0057ff;\n    border-radius: 3px;\n    bottom: -2px;\n    content: '';\n    left: -8px;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    right: -8px;\n    top: -2px;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    -webkit-transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n    transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n    transition: opacity 0.15s linear, transform 0.15s ease;\n    transition: opacity 0.15s linear, transform 0.15s ease, -webkit-transform 0.15s ease;\n}\n.PrimaryNav-logo-1FW.PrimaryNav-behance-12V {\n  position: relative;\n  top: 1px;\n}\n@media (max-width: 1079px) {\n.PrimaryNav-coreNavigation-rdG {\n    margin-right: auto;\n}\n}\n.PrimaryNav-hideSearchInput-32e .PrimaryNav-strip-3w8 .PrimaryNav-coreNavigation-rdG {\n  margin-right: auto;\n}\n.PrimaryNav-siteSearch-ndn {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: auto;\n  max-width: 488px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n}\n.PrimaryNav-userControls-3sp {\n  position: relative;\n  z-index: 0;\n}\n@media (min-width: 1080px) {\n.PrimaryNav-userControls-3sp {\n      margin-left: 16px;\n      margin-right: 16px;\n}\n}\n@media (max-width: 1079px) {\n.PrimaryNav-userControls-3sp .PrimaryNav-userControl-5wh,\n  .PrimaryNav-searchLink-10L {\n    padding-left: 12px;\n    padding-right: 12px;\n}\n}\n.PrimaryNav-loggedOutOption-3xV:not(:last-child) {\n  margin-right: 8px;\n}\n.PrimaryNav-loggedOutOption-3xV.PrimaryNav-logIn-VCn {\n  position: relative;\n}\n.PrimaryNav-userControl-5wh {\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  height: 100%;\n  position: relative;\n  vertical-align: top;\n}\n@media (min-width: 1080px) {\n.PrimaryNav-userControl-5wh {\n      padding: 8px;\n      padding-bottom: 9px;\n}\n}\n.PrimaryNav-userControl-5wh.PrimaryNav-me-3R0 {\n    padding: 0;\n}\n.PrimaryNav-userControl-5wh.PrimaryNav-mail-3UJ, .PrimaryNav-userControl-5wh.PrimaryNav-notifications-29u {\n    margin-top: 1px;\n}\n.PrimaryNav-userControl-5wh .PrimaryNav-userControlLink-2WG::after {\n  background-color: rgba(0, 87, 255, 0.2);\n  border: 2px solid #0057ff;\n  border-radius: 3px;\n  bottom: -2px;\n  content: '';\n  left: -8px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  right: -8px;\n  top: -2px;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  -webkit-transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n  transition: opacity 0.15s linear, -webkit-transform 0.15s ease;\n  transition: opacity 0.15s linear, transform 0.15s ease;\n  transition: opacity 0.15s linear, transform 0.15s ease, -webkit-transform 0.15s ease;\n}\n.PrimaryNav-userControl-5wh .PrimaryNav-userControlLink-2WG::after {\n  bottom: 9px;\n  left: -2px;\n  right: -2px;\n  top: 7px;\n}\n.PrimaryNav-userControl-5wh .PrimaryNav-link-3IW.focus-visible::after,\n.PrimaryNav-userControl-5wh .PrimaryNav-userControlLink-2WG.focus-visible::after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.PrimaryNav-userControl-5wh .PrimaryNav-icon-1tE,\n.PrimaryNav-adobeLogo-3YN .PrimaryNav-icon-1tE {\n  -webkit-transition: fill 0.15s linear;\n  transition: fill 0.15s linear;\n}\n.PrimaryNav-userControl-5wh:hover .PrimaryNav-icon-1tE,\n.PrimaryNav-adobeLogo-3YN:hover .PrimaryNav-icon-1tE {\n  fill: #707070;\n}\n.PrimaryNav-count-dh3 {\n  background-color: #0057ff;\n  border: 2px solid #fff;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 900;\n  left: 40%;\n  min-width: 20px;\n  padding: 2px 3px;\n  position: absolute;\n  text-align: center;\n  text-shadow: 0 0.5px 0 black;\n  top: 4px;\n  z-index: 1;\n}\n.PrimaryNav-userControls-3sp .PrimaryNav-mail-3UJ .PrimaryNav-icon-1tE {\n  height: 35px;\n  width: 17px;\n}\n.PrimaryNav-userControls-3sp .PrimaryNav-notification-1w1 .PrimaryNav-icon-1tE {\n  height: 18px;\n  width: 18px;\n}\n.PrimaryNav-avatar-1dl {\n  border-radius: 50%;\n  margin-bottom: -2px;\n  position: relative;\n  top: 2px;\n  width: 25px;\n}\n.PrimaryNav-avatarImgEl-2Ax {\n  height: 100%;\n  width: 100%;\n}\n.PrimaryNav-userAvatar-1LW {\n  border-radius: 50%;\n  overflow: hidden;\n}\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-mobileUserMenuAndTrigger-1HJ,\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-appLinks-3ch,\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-languageSelector-2_F,\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationLink-2uv {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationLink-2uv {\n  display: block;\n  position: relative;\n}\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationLink-2uv:not(.PrimaryNav-active-jbv)::before {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationLink-2uv::before {\n    background-color: #191919;\n    bottom: 2px;\n    content: '';\n    left: 0;\n    position: absolute;\n    top: 2px;\n    width: 4px;\n}\n.PrimaryNav-mobileUserMenuAndTrigger-1HJ {\n  margin-top: 32px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.PrimaryNav-mobileUserMenuAndTrigger-1HJ.PrimaryNav-menuVisible-2P_ .PrimaryNav-triangle-hi5 {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n.PrimaryNav-mobileTriggerUserMenu-2YX {\n  cursor: pointer;\n}\n.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-userAvatar-1LW {\n    height: 30px;\n    margin-right: 15px;\n    width: 30px;\n}\n.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-avatarLabel-2wv {\n    font-size: 16px;\n    margin-right: 5px;\n}\n.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-avatarLabel-2wv,\n  .PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-userAvatar-1LW,\n  .PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-triangle-hi5 {\n    display: inline-block;\n    vertical-align: middle;\n}\n.PrimaryNav-mobileTriggerUserMenu-2YX .PrimaryNav-triangle-hi5 {\n    height: 15px;\n    position: relative;\n    top: 2px;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    width: 15px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-mobile-KrU {\n  margin-top: 10px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-mobile-KrU .PrimaryNav-anchor-3Kg {\n    color: inherit;\n    display: block;\n    font-size: 14px;\n    padding-bottom: 18px;\n    padding-left: 45px;\n    padding-top: 18px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H {\n  width: 300px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .focus-visible {\n    outline: 1px solid #0057ff;\n    outline-offset: 2px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userAvatar-1LW {\n    height: 65px;\n    margin-right: 15px;\n    width: 65px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userMeta-3S7 {\n    padding: 20px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-listGroup-1pS:last-child {\n    border-top-color: transparent;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-listGroup-1pS {\n    border-bottom: 1px solid #e8e8e8;\n    border-top: 1px solid #e8e8e8;\n    padding-bottom: 10px;\n    padding-top: 10px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userMenuItem-rik.PrimaryNav-link-3IW .PrimaryNav-anchor-3Kg {\n    display: block;\n    padding-bottom: 7px;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 7px;\n    -webkit-transition: background-color 0.15s linear;\n    transition: background-color 0.15s linear;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userMenuItem-rik.PrimaryNav-link-3IW .PrimaryNav-anchor-3Kg:hover {\n    background-color: #f2f2f2;\n    text-decoration: none;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userName-3fl {\n    font-size: 18px;\n    line-height: 1.3;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userEmail-Q8V,\n  .PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userLink-iHc,\n  .PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userMenuItem-rik.PrimaryNav-link-3IW .PrimaryNav-anchor-3Kg {\n    color: #696969;\n    font-size: 14px;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userLink-iHc {\n    margin: -3px;\n    padding: 3px;\n    text-decoration: underline;\n}\n.PrimaryNav-userMenuList-156.PrimaryNav-desktop-31H .PrimaryNav-userId-3M9 {\n    -webkit-box-flex: 1;\n            flex: 1;\n}\n.PrimaryNav-userId-3M9 {\n  max-width: 175px;\n}\n.PrimaryNav-userEmail-Q8V,\n.PrimaryNav-userName-3fl {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.PrimaryNav-userMenuTooltip-1Gn.PrimaryNav-userMenuTooltip-1Gn {\n  margin: 0;\n  padding: 0 0 2px;\n  width: auto;\n}\n.PrimaryNav-userMetaContainer-1LZ {\n  display: -webkit-box;\n  display: flex;\n}\n.PrimaryNav-userAvatarTrigger-1N5 {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 55px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n  width: 40px;\n}\n.PrimaryNav-userAvatarTrigger-1N5 .PrimaryNav-avatarImgEl-2Ax {\n  border-radius: 50%;\n  height: 25px;\n  margin-top: -1px;\n  width: 25px;\n}\n.PrimaryNav-notifications-29u .PrimaryNav-icon-1tE {\n  height: 35px;\n}\n.PrimaryNav-formLabel-2VR {\n  display: none;\n}\n.PrimaryNav-tooltipContent-y7h {\n  font-size: 13px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px;\n  width: 180px;\n}\n.PrimaryNav-tooltipText-2GF {\n  margin-bottom: 0;\n  margin-bottom: 8px;\n}\n.PrimaryNav-tooltipButton-1R3 {\n  color: #0057ff;\n  margin-left: -20px;\n}\n.PrimaryNav-profileEmail-1Tp {\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block;\n  float: left;\n  width: calc(100% - 79px);\n  color: #696969;\n  margin-bottom: 8px;\n}\n.PrimaryNav-profileAvatarContainer-zYn {\n  float: left;\n  height: 65px;\n  margin-right: 14px;\n  width: 65px;\n}\n.PrimaryNav-profileAvatarWrap-I-E {\n  border-radius: 50%;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.PrimaryNav-profileAvatarLink-2dh .PrimaryNav-profileAvatarWrap-I-E::after {\n    background-color: #191919;\n    bottom: 0;\n    content: '';\n    left: 0;\n    opacity: 0.2;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-transition: opacity 0.5s linear;\n    transition: opacity 0.5s linear;\n}\n.PrimaryNav-profileAvatarLink-2dh .PrimaryNav-profileAvatarWrap-I-E:not(:hover)::after {\n    opacity: 0;\n}\n.PrimaryNav-profileAvatar-3E7 {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n.PrimaryNav-rf-tooltip--utility-3Iz {\n  left: auto;\n  right: -10px;\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  -webkit-transition: -webkit-transform 0.15s;\n  transition: -webkit-transform 0.15s;\n  transition: transform 0.15s;\n  transition: transform 0.15s, -webkit-transform 0.15s;\n}\n.PrimaryNav-rf-tooltip--utility-3Iz::before {\n    left: 93%;\n}\n.PrimaryNav-adobeLogo-3YN,\n.PrimaryNav-minimalWelcomeMessage-3DL {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.PrimaryNav-minimalWelcomeMessage-3DL {\n  font-size: 16px;\n  margin-left: auto;\n}\n.PrimaryNav-activateAndCreateButtonsHidden-339 .PrimaryNav-adobeLogo-3YN {\n  margin-left: 200px;\n}\n.PrimaryNav-adobeLogo-3YN .PrimaryNav-icon-1tE {\n  position: relative;\n  top: 1px;\n  width: 60px;\n}\n.PrimaryNav-rf-submenu-3j5 {\n  margin: 0 -10px -14px;\n}\n.PrimaryNav-rf-tooltip--utility-3Iz .PrimaryNav-rf-submenu-3j5 .PrimaryNav-rf-submenu__link-3jz {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.PrimaryNav-skipFooter-2Kk {\n  margin-left: 150px;\n}\n.PrimaryNav-skipContent-2jC,\n.PrimaryNav-skipFooter-2Kk {\n  color: #fff;\n  font-size: 11px;\n  font-weight: bold;\n  left: -100%;\n  padding: 0 10px;\n  position: absolute;\n  text-decoration: none;\n  text-transform: uppercase;\n  top: 2px;\n}\n.PrimaryNav-skipContent-2jC.focus-visible, .PrimaryNav-skipContent-2jC:focus-visible,\n  .PrimaryNav-skipFooter-2Kk.focus-visible,\n  .PrimaryNav-skipFooter-2Kk:focus-visible {\n    color: #0057ff;\n    left: 16px;\n    outline: 1px solid #0057ff;\n    outline-offset: 2px;\n}\n.PrimaryNav-searchLink-10L {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.PrimaryNav-searchLink-10L .PrimaryNav-link-3IW {\n  height: 18px;\n  position: relative;\n  top: -1px;\n  width: 18px;\n}\n.PrimaryNav-hamburgerMenuActivate-2-M {\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  margin-top: 1px;\n  padding-right: 16px;\n  position: relative;\n  z-index: 2;\n}\n.PrimaryNav-hamburgerButton-LWP {\n  width: 15px;\n}\n.PrimaryNav-hamburgerLine-1VU {\n  background-color: #191919;\n  height: 2px;\n  margin-bottom: 3px;\n  -webkit-transition-duration: 0.25s;\n          transition-duration: 0.25s;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.PrimaryNav-hamburgerMenu-1lm {\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n  padding: 12px 0;\n  position: absolute;\n  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: transform 0.25s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 270px;\n  will-change: transform;\n  z-index: 1;\n}\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-signUp-gqh {\n    align-self: center;\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: auto;\n    margin-top: 30px;\n    padding-left: 16px;\n}\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-signUp-gqh,\n  .PrimaryNav-hamburgerMenu-1lm .PrimaryNav-signupButton-idI {\n    width: 100%;\n}\n.PrimaryNav-loginOrCreate-3r1 {\n  align-self: flex-end;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.PrimaryNav-hamburgerMenu-1lm .PrimaryNav-coreNavigationItem-236 {\n  margin-top: 32px;\n}\n.PrimaryNav-appLinks-3ch {\n  margin-bottom: 24px;\n  margin-top: 32px;\n}\n.PrimaryNav-appLink-3Wl {\n  background-repeat: no-repeat;\n  display: block;\n  font-size: 0;\n  height: 40px;\n  line-height: 40px;\n  margin-bottom: 8px;\n  width: 135px;\n}\n.PrimaryNav-appLinkItem-3Ds.PrimaryNav-ios-22g .PrimaryNav-appLink-3Wl {\n  background-image: url(\"https://a5.behance.net/dbf52738645fe824a7f6d2e6c9740ec8ddfb84d0/svgs/apple-app-store-button.svg\");\n}\n.PrimaryNav-appLinkItem-3Ds.PrimaryNav-android-2PJ .PrimaryNav-appLink-3Wl {\n  background-image: url(\"https://a5.behance.net/dbf52738645fe824a7f6d2e6c9740ec8ddfb84d0/svgs/google-play-button.svg\");\n}\n.PrimaryNav-behanceLogo-1Ol.PrimaryNav-full-fC_ {\n  height: 16px;\n  width: 82px;\n}\n.PrimaryNav-behanceLogo-1Ol.PrimaryNav-truncated-2yo {\n  width: 24px;\n}\n.PrimaryNav-root-3lS:not(.PrimaryNav-hamburgerMenuOpen-9pT) .PrimaryNav-hamburgerMenu-1lm {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-strip-3w8::after {\n  opacity: 0.5;\n}\n.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-hamburgerButton-LWP {\n  margin-right: -2px;\n  width: 17px;\n}\n.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-hamburgerButton-LWP .PrimaryNav-hamburgerLine-1VU:nth-child(1) {\n    -webkit-transform: translateY(4.8px) rotate(45deg);\n            transform: translateY(4.8px) rotate(45deg);\n}\n.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-hamburgerButton-LWP .PrimaryNav-hamburgerLine-1VU:nth-child(2) {\n    opacity: 0;\n}\n.PrimaryNav-hamburgerMenuOpen-9pT .PrimaryNav-hamburgerButton-LWP .PrimaryNav-hamburgerLine-1VU:nth-child(3) {\n    -webkit-transform: translateY(-5px) rotate(-45deg);\n            transform: translateY(-5px) rotate(-45deg);\n}\n@media (max-width: 1079px) {\n.PrimaryNav-strip-3w8 .PrimaryNav-adobeLogo-3YN,\n  .PrimaryNav-strip-3w8 .PrimaryNav-userControls-3sp .PrimaryNav-me-3R0,\n  .PrimaryNav-strip-3w8 .PrimaryNav-siteSearch-ndn,\n  .PrimaryNav-strip-3w8 .PrimaryNav-signup-Yf6,\n  .PrimaryNav-strip-3w8 .PrimaryNav-coreNavigationItem-236.PrimaryNav-text-1ps,\n  .PrimaryNav-strip-3w8 .PrimaryNav-behanceLogo-1Ol.PrimaryNav-full-fC_,\n  .PrimaryNav-strip-3w8 .PrimaryNav-loggedOutOptions-1SQ {\n    display: none;\n}\n}\n@media (max-width: 603px) {\n.PrimaryNav-coreNavigation-rdG .PrimaryNav-coreNavigationItem-236.PrimaryNav-home-2zH {\n    width: 26px;\n}\n}\n@media (min-width: 1080px) {\n.PrimaryNav-hamburgerMenu-1lm,\n  .PrimaryNav-hamburgerMenuActivate-2-M,\n  .PrimaryNav-searchLink-10L,\n  .PrimaryNav-behanceLogo-1Ol.PrimaryNav-truncated-2yo,\n  .PrimaryNav-appLinkContainer-3Ep,\n  .PrimaryNav-strip-3w8::after {\n    display: none;\n}\n}\n.PrimaryNav-languageSelector-2_F {\n  position: relative;\n  width: 100%;\n}\n.PrimaryNav-languageSelector-2_F .PrimaryNav-triangle-hi5 {\n    display: inline-block;\n    height: 10px;\n    margin-left: -10px;\n    pointer-events: none;\n    position: relative;\n    top: 1px;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    width: 10px;\n}\n.PrimaryNav-languageSelectEl-3eg {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 5px 10px 5px 0;\n  visibility: visible;\n}\n", "" ]), 
        e.locals = {
            root: "PrimaryNav-root-3lS",
            fixed: "PrimaryNav-fixed-1mb",
            tooltipWrapper: "PrimaryNav-tooltipWrapper-166",
            strip: "PrimaryNav-strip-3w8",
            hamburgerMenuOpen: "PrimaryNav-hamburgerMenuOpen-9pT",
            hamburgerMenuActivate: "PrimaryNav-hamburgerMenuActivate-2-M",
            appLinkContainer: "PrimaryNav-appLinkContainer-3Ep",
            signup: "PrimaryNav-signup-Yf6",
            loggedOutOptions: "PrimaryNav-loggedOutOptions-1SQ",
            coreNavigation: "PrimaryNav-coreNavigation-rdG",
            coreNavigationItem: "PrimaryNav-coreNavigationItem-236",
            text: "PrimaryNav-text-1ps",
            coreNavigationLink: "PrimaryNav-coreNavigationLink-2uv",
            home: "PrimaryNav-home-2zH",
            active: "PrimaryNav-active-jbv",
            adobeCreativeCloudLink: "PrimaryNav-adobeCreativeCloudLink-8C1",
            coreNavigationLabel: "PrimaryNav-coreNavigationLabel-3rj",
            iconWrap: "PrimaryNav-iconWrap-1F1",
            a11yButton: "PrimaryNav-a11yButton-2Cl",
            createAProject: "PrimaryNav-createAProject-1Ul",
            a11yButtonWrap: "PrimaryNav-a11yButtonWrap-23Z",
            a11yButtonHelper: "PrimaryNav-a11yButtonHelper-3Vx",
            logoWrap: "PrimaryNav-logoWrap-564",
            logo: "PrimaryNav-logo-1FW",
            behance: "PrimaryNav-behance-12V",
            hideSearchInput: "PrimaryNav-hideSearchInput-32e",
            siteSearch: "PrimaryNav-siteSearch-ndn",
            userControls: "PrimaryNav-userControls-3sp",
            userControl: "PrimaryNav-userControl-5wh",
            searchLink: "PrimaryNav-searchLink-10L",
            loggedOutOption: "PrimaryNav-loggedOutOption-3xV",
            logIn: "PrimaryNav-logIn-VCn",
            me: "PrimaryNav-me-3R0",
            mail: "PrimaryNav-mail-3UJ",
            notifications: "PrimaryNav-notifications-29u",
            userControlLink: "PrimaryNav-userControlLink-2WG",
            link: "PrimaryNav-link-3IW",
            icon: "PrimaryNav-icon-1tE",
            adobeLogo: "PrimaryNav-adobeLogo-3YN",
            count: "PrimaryNav-count-dh3",
            notification: "PrimaryNav-notification-1w1",
            avatar: "PrimaryNav-avatar-1dl",
            avatarImgEl: "PrimaryNav-avatarImgEl-2Ax",
            userAvatar: "PrimaryNav-userAvatar-1LW",
            hamburgerMenu: "PrimaryNav-hamburgerMenu-1lm",
            mobileUserMenuAndTrigger: "PrimaryNav-mobileUserMenuAndTrigger-1HJ",
            appLinks: "PrimaryNav-appLinks-3ch",
            languageSelector: "PrimaryNav-languageSelector-2_F",
            menuVisible: "PrimaryNav-menuVisible-2P_",
            triangle: "PrimaryNav-triangle-hi5",
            mobileTriggerUserMenu: "PrimaryNav-mobileTriggerUserMenu-2YX",
            avatarLabel: "PrimaryNav-avatarLabel-2wv",
            userMenuList: "PrimaryNav-userMenuList-156",
            mobile: "PrimaryNav-mobile-KrU",
            anchor: "PrimaryNav-anchor-3Kg",
            desktop: "PrimaryNav-desktop-31H",
            userMeta: "PrimaryNav-userMeta-3S7",
            listGroup: "PrimaryNav-listGroup-1pS",
            userMenuItem: "PrimaryNav-userMenuItem-rik",
            userName: "PrimaryNav-userName-3fl",
            userEmail: "PrimaryNav-userEmail-Q8V",
            userLink: "PrimaryNav-userLink-iHc",
            userId: "PrimaryNav-userId-3M9",
            userMenuTooltip: "PrimaryNav-userMenuTooltip-1Gn",
            userMetaContainer: "PrimaryNav-userMetaContainer-1LZ",
            userAvatarTrigger: "PrimaryNav-userAvatarTrigger-1N5",
            formLabel: "PrimaryNav-formLabel-2VR",
            tooltipContent: "PrimaryNav-tooltipContent-y7h",
            tooltipText: "PrimaryNav-tooltipText-2GF",
            tooltipButton: "PrimaryNav-tooltipButton-1R3",
            profileEmail: "PrimaryNav-profileEmail-1Tp",
            profileAvatarContainer: "PrimaryNav-profileAvatarContainer-zYn",
            profileAvatarWrap: "PrimaryNav-profileAvatarWrap-I-E",
            profileAvatarLink: "PrimaryNav-profileAvatarLink-2dh",
            profileAvatar: "PrimaryNav-profileAvatar-3E7",
            "rf-tooltip--utility": "PrimaryNav-rf-tooltip--utility-3Iz",
            minimalWelcomeMessage: "PrimaryNav-minimalWelcomeMessage-3DL",
            activateAndCreateButtonsHidden: "PrimaryNav-activateAndCreateButtonsHidden-339",
            "rf-submenu": "PrimaryNav-rf-submenu-3j5",
            "rf-submenu__link": "PrimaryNav-rf-submenu__link-3jz",
            skipFooter: "PrimaryNav-skipFooter-2Kk",
            skipContent: "PrimaryNav-skipContent-2jC",
            hamburgerButton: "PrimaryNav-hamburgerButton-LWP",
            hamburgerLine: "PrimaryNav-hamburgerLine-1VU",
            signUp: "PrimaryNav-signUp-gqh",
            signupButton: "PrimaryNav-signupButton-idI",
            loginOrCreate: "PrimaryNav-loginOrCreate-3r1",
            appLink: "PrimaryNav-appLink-3Wl",
            appLinkItem: "PrimaryNav-appLinkItem-3Ds",
            ios: "PrimaryNav-ios-22g",
            android: "PrimaryNav-android-2PJ",
            behanceLogo: "PrimaryNav-behanceLogo-1Ol",
            full: "PrimaryNav-full-fC_",
            truncated: "PrimaryNav-truncated-2yo",
            languageSelectEl: "PrimaryNav-languageSelectEl-3eg"
        };
    },
    358: function(t, e, n) {
        "use strict";
        var i, a = n(0), r = n(17), s = n(401), o = n(375), l = n(362);
        !function(t) {
            t.Right = "right", t.Left = "left", t.Top = "top", t.Bottom = "bottom", t.Center = "center";
        }(i || (i = {}));
        var c = r.default.extend({
            name: "Tooltip",
            components: {
                CloseIcon: l.default,
                Fade: o.a
            },
            props: {
                alignment: {
                    type: String,
                    default: "center",
                    validator: function(t) {
                        return [ "left", "center", "right", "top" ].includes(t);
                    }
                },
                position: {
                    type: String,
                    default: "top",
                    validator: function(t) {
                        return Object.values(i).includes(t);
                    }
                },
                toggleMethod: {
                    type: String,
                    default: "hover",
                    validator: function(t) {
                        return [ "hover", "click", "none" ].includes(t);
                    }
                },
                alignmentOffset: {
                    type: Number,
                    default: 0
                },
                horizontalPadding: {
                    type: Number,
                    default: 10
                },
                verticalPadding: {
                    type: Number,
                    default: 10
                },
                distance: {
                    type: Number,
                    default: 5
                },
                triangleDistance: {
                    type: Number,
                    default: 10
                },
                isOpen: {
                    type: Boolean
                },
                isResponsive: {
                    type: Boolean
                },
                hasTextTrigger: {
                    type: Boolean
                },
                canTruncateTrigger: {
                    type: Boolean
                },
                hasTriangle: {
                    type: Boolean,
                    default: !0
                },
                isCloseable: {
                    type: Boolean,
                    default: !1
                },
                isOpenable: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    isCurrentlyOpen: this.isOpen
                };
            },
            watch: {
                isOpen: function(t) {
                    this.isCurrentlyOpen = t;
                }
            },
            computed: {
                shouldAlign: function() {
                    if ("center" !== this.alignment) return !0;
                },
                containerStyles: function() {
                    var t, e, n = {
                        cursor: "click" === this.toggleMethod ? "pointer" : "initial",
                        paddingTop: this.verticalPadding + "px",
                        paddingBottom: this.verticalPadding + "px",
                        paddingRight: this.horizontalPadding + "px",
                        paddingLeft: this.horizontalPadding + "px"
                    }, a = this.position;
                    if (a === i.Center) return n;
                    var r = ((t = {})[i.Top] = "6px", t[i.Bottom] = "0px", t[i.Right] = "0px", t[i.Left] = "0px", 
                    t), s = ((e = {})[i.Top] = i.Bottom, e[i.Bottom] = i.Top, e[i.Right] = i.Left, e[i.Left] = i.Right, 
                    e), o = r[a];
                    return n[s[a]] = "calc(100% + " + this.distance + "px + " + o + ")", this.shouldAlign && (n[this.alignment] = this.alignmentOffset + "px"), 
                    n;
                },
                triangleStyles: function() {
                    var t = {};
                    return this.shouldAlign && (t[this.alignment] = this.triangleDistance + "px"), t;
                }
            },
            methods: {
                ifToggleMethod: function(t, e) {
                    t === this.toggleMethod && e();
                },
                toggleOpen: function() {
                    this.isCurrentlyOpen ? this.close() : this.open();
                },
                open: function() {
                    this.isOpenable && (this.isCurrentlyOpen = !0, this.$emit("didOpen"));
                },
                close: function() {
                    this.isCurrentlyOpen = !1, this.$emit("didClose");
                }
            },
            beforeCreate: function() {
                var t;
                if (this.$slots.default && this.$slots.default[0]) {
                    var e = this.$slots.default[0], n = (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.attrs) || {};
                    e.data = Object(a.__assign)(Object(a.__assign)({}, e.data), {
                        attrs: Object(a.__assign)(Object(a.__assign)({}, n), {
                            tabindex: 0
                        })
                    });
                }
            },
            mounted: function() {
                var t = this;
                this.$el.querySelectorAll(s.focusableSelectors).forEach((function(e) {
                    e.addEventListener("focus", t.open), e.addEventListener("blur", t.close);
                }));
            },
            beforeDestroy: function() {
                var t = this;
                this.$el.querySelectorAll(s.focusableSelectors).forEach((function(e) {
                    e.removeEventListener("focus", t.open), e.removeEventListener("blur", t.close);
                }));
            }
        }), p = n(411), d = n(65);
        var u = Object(d.default)(c, (function() {
            var t, e, n, i = this, a = i.$createElement, r = i._self._c || a;
            return r("div", {
                ref: "root",
                class: [ i.$style.wrapper, (t = {}, t[i.$style.responsive] = i.isResponsive, t), (e = {}, 
                e[i.$style.textWrapper] = i.hasTextTrigger, e) ],
                style: {
                    cursor: i.isOpenable ? "pointer" : "auto"
                },
                on: {
                    mouseenter: function(t) {
                        return i.ifToggleMethod("hover", i.open);
                    },
                    mouseleave: function(t) {
                        return i.ifToggleMethod("hover", i.close);
                    },
                    keypress: function(t) {
                        return !t.type.indexOf("key") && i._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : i.open(t);
                    },
                    "!blur": function(t) {
                        return i.close(t);
                    }
                }
            }, [ r("span", {
                ref: "trigger",
                class: (n = {}, n[i.$style.trigger] = i.canTruncateTrigger, n),
                on: {
                    touchend: function(t) {
                        return i.ifToggleMethod("hover", i.toggleOpen);
                    },
                    click: function(t) {
                        return i.ifToggleMethod("click", i.toggleOpen);
                    }
                }
            }, [ i._t("default") ], 2), r("Fade", [ r("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: i.isCurrentlyOpen,
                    expression: "isCurrentlyOpen"
                } ],
                ref: "tooltip",
                class: [ i.$style.container, i.$style["position-" + i.position], i.$style[i.alignment] ],
                style: i.containerStyles,
                on: {
                    mouseleave: function(t) {
                        return i.ifToggleMethod("click", i.close);
                    }
                }
            }, [ i.hasTriangle ? r("div", {
                ref: "triangle",
                class: i.$style.triangleContainer,
                style: i.triangleStyles
            }, [ r("div", {
                class: i.$style.triangle
            }), r("div", {
                class: i.$style.mask
            }) ]) : i._e(), i._t("tooltipContent"), i.isCloseable ? r("span", {
                ref: "closeButton",
                class: i.$style.closeIconWrapper,
                on: {
                    touchend: function(t) {
                        i.ifToggleMethod("hover", i.close), i.$emit("closeButtonClicked");
                    },
                    click: function(t) {
                        i.ifToggleMethod("click", i.close), i.$emit("closeButtonClicked");
                    }
                }
            }, [ r("CloseIcon", {
                class: i.$style.closeIcon
            }) ], 1) : i._e() ], 2) ]) ], 1);
        }), [], !1, (function(t) {
            this.$style = p.default.locals || p.default;
        }), null, null);
        e.a = u.exports;
    },
    366: function(t, e, n) {
        t.exports = n(2)(26);
    },
    369: function(t, e, n) {
        var i = n(412);
        "string" == typeof i && (i = [ [ t.i, i, "" ] ]), i.locals && (t.exports = i.locals);
        (0, n(190).default)("7432b31c", i, !0, {});
    },
    411: function(t, e, n) {
        "use strict";
        var i = n(369), a = n.n(i);
        e.default = a.a;
    },
    412: function(t, e, n) {
        (e = t.exports = n(189)(!1)).push([ t.i, ".Tooltip-wrapper-2py {\n  align-self: flex-start;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: -6px;\n  padding-bottom: 6px;\n  position: relative;\n}\n@media (max-width: 921px) {\n.Tooltip-wrapper-2py:not(.Tooltip-responsive-1yQ) .Tooltip-container-2aL {\n      display: none;\n}\n}\n.Tooltip-textWrapper-2kf {\n  display: block;\n}\n.Tooltip-trigger-1PL {\n  display: -webkit-box;\n  display: flex;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.Tooltip-container-2aL {\n  background-color: #fff;\n  border-radius: 3px;\n  color: #191919;\n  -webkit-filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  z-index: 100;\n}\n.Tooltip-container-2aL .Tooltip-triangleContainer-AaB {\n    position: absolute;\n}\n.Tooltip-container-2aL .Tooltip-mask-pQU {\n    background: #fff;\n    height: 6px;\n    left: -2px;\n    position: relative;\n    width: 16px;\n}\n.Tooltip-container-2aL.Tooltip-right-2ui {\n    right: calc(100% + 7px);\n}\n.Tooltip-container-2aL.Tooltip-position-left-1js {\n    right: 0;\n    top: 0;\n}\n.Tooltip-container-2aL.Tooltip-position-left-1js .Tooltip-triangleContainer-AaB {\n      right: -11px;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n}\n.Tooltip-container-2aL.Tooltip-position-left-1js .Tooltip-triangle-3EI {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 7px;\n      height: 0;\n      position: absolute;\n      width: 0;\n      border-right-color: #fff;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n}\n.Tooltip-container-2aL.Tooltip-position-left-1js .Tooltip-mask-pQU {\n      top: -6px;\n}\n.Tooltip-container-2aL.Tooltip-position-top-2Yf .Tooltip-triangleContainer-AaB {\n    bottom: -6px;\n    -webkit-transform: initial;\n            transform: initial;\n}\n.Tooltip-container-2aL.Tooltip-position-top-2Yf .Tooltip-triangle-3EI {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-top-color: #fff;\n    -webkit-transform: initial;\n            transform: initial;\n}\n.Tooltip-container-2aL.Tooltip-position-top-2Yf .Tooltip-mask-pQU {\n    top: -6px;\n}\n.Tooltip-container-2aL.Tooltip-position-center-ThM {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    margin-top: -3px;\n}\n.Tooltip-container-2aL.Tooltip-position-center-ThM.Tooltip-right-2ui .Tooltip-triangleContainer-AaB {\n    margin-top: -6px;\n    right: 0;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.Tooltip-container-2aL.Tooltip-position-center-ThM.Tooltip-right-2ui .Tooltip-triangle-3EI {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-top-color: #fff;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n.Tooltip-container-2aL.Tooltip-position-center-ThM.Tooltip-right-2ui .Tooltip-mask-pQU {\n    display: none;\n}\n.Tooltip-container-2aL.Tooltip-position-bottom-1en .Tooltip-triangleContainer-AaB {\n    top: -12px;\n    -webkit-transform: initial;\n            transform: initial;\n}\n.Tooltip-container-2aL.Tooltip-position-bottom-1en .Tooltip-triangle-3EI {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-bottom-color: #fff;\n    -webkit-transform: initial;\n            transform: initial;\n}\n.Tooltip-container-2aL.Tooltip-position-bottom-1en .Tooltip-mask-pQU {\n    top: 12px;\n}\n.Tooltip-container-2aL.Tooltip-position-right-1Zd {\n    top: -5px;\n}\n.Tooltip-container-2aL.Tooltip-position-right-1Zd .Tooltip-triangleContainer-AaB {\n      left: -10px;\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg);\n}\n.Tooltip-container-2aL.Tooltip-position-right-1Zd .Tooltip-triangle-3EI {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 7px;\n      height: 0;\n      position: absolute;\n      width: 0;\n      border-right-color: #fff;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n}\n.Tooltip-container-2aL.Tooltip-position-right-1Zd .Tooltip-mask-pQU {\n      bottom: 6px;\n}\n.Tooltip-closeIconWrapper-3hc {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n}\n.Tooltip-closeIcon-26g {\n  fill: #959595;\n  width: 10px;\n}\n.Tooltip-closeIcon-26g:hover {\n    fill: #696969;\n}\n", "" ]), 
        e.locals = {
            wrapper: "Tooltip-wrapper-2py",
            responsive: "Tooltip-responsive-1yQ",
            container: "Tooltip-container-2aL",
            textWrapper: "Tooltip-textWrapper-2kf",
            trigger: "Tooltip-trigger-1PL",
            triangleContainer: "Tooltip-triangleContainer-AaB",
            mask: "Tooltip-mask-pQU",
            right: "Tooltip-right-2ui",
            "position-left": "Tooltip-position-left-1js",
            triangle: "Tooltip-triangle-3EI",
            "position-top": "Tooltip-position-top-2Yf",
            "position-center": "Tooltip-position-center-ThM",
            "position-bottom": "Tooltip-position-bottom-1en",
            "position-right": "Tooltip-position-right-1Zd",
            closeIconWrapper: "Tooltip-closeIconWrapper-3hc",
            closeIcon: "Tooltip-closeIcon-26g"
        };
    },
    431: function(t, e, n) {
        t.exports = n(2)(43);
    },
    435: function(t, e, n) {
        t.exports = n(2)(262);
    },
    440: function(t, e, n) {
        t.exports = n(2)(307);
    },
    485: function(t, e, n) {
        var i, a;
        i = [ n(341) ], void 0 === (a = function(t) {
            "use strict";
            var e = {}, n = {};
            function i(e) {
                return t("window" === e ? window : e);
            }
            function a(t, e) {
                if (!e) return t;
                if ("string" != typeof e || "string" != typeof t) throw new Error("context and contentContext must both be strings if contentContext is provided.");
                return t + "|" + e;
            }
            function r(e, n) {
                var i = e.is(t(window)) ? window.innerHeight : e.prop("clientHeight");
                return (function(e, n) {
                    var i;
                    return n.is(t(window)) ? t(document).height() : n !== e ? (i = e.is(t(window)) ? 0 : e.offset().top, 
                    n.height() + n.offset().top - i) : e.prop("scrollHeight");
                }(e, n) - i - e.scrollTop()) / i;
            }
            function s(s, o, l, c) {
                "function" == typeof s && (c = l, l = o, o = s, s = 1), l = l || "window", s = Number(s).toString();
                var p = i(l), d = a(l, c);
                n[d] || (n[d] = {}, e[d] = function(e, s) {
                    var o = i(e), l = s ? t(s) : o, c = a(e, s), p = "window" === e ? t("html,body") : o;
                    return function() {
                        var e = p.toArray().every((function(e) {
                            return "hidden" !== t(e).css("overflowY");
                        })), i = r(o, l);
                        for (var a in n[c]) i <= Number(a) && e && n[c][a].wrapped.forEach((function(t) {
                            t();
                        }));
                    };
                }(l, c), p.on("scroll", e[d]));
                var u = n[d][s];
                u || (u = n[d][s] = {
                    wrapped: [],
                    original: []
                }), u.original.push(o), u.wrapped.push((function t() {
                    if (!t.blocking) {
                        t.blocking = !0;
                        var n = o.apply(null, arguments);
                        n && "function" == typeof n.then ? n.then((function() {
                            t.blocking = !1, e[d]();
                        })) : t.blocking = !1;
                    }
                })), e[d]();
            }
            return s.on = s, s.off = function(t, r, s) {
                var o, l, c, p = i(r = r || "window"), d = a(r, s);
                if (n[d]) {
                    for (o in n[d]) ~(c = (l = n[d][o]).original.indexOf(t)) && (l.original.splice(c, 1), 
                    l.wrapped.splice(c, 1), l.original.length || delete n[d][o]);
                    Object.keys(n[d]).length || (p.off("scroll", e[d]), delete n[d]);
                }
            }, s.check = function(t, n) {
                var i = a(t || "window", n);
                e[i]();
            }, s;
        }.apply(e, i)) || (t.exports = a);
    },
    549: function(t, e, n) {
        t.exports = n(2)(234);
    },
    550: function(t, e, n) {
        t.exports = n(2)(114);
    },
    599: function(t, e, n) {
        t.exports = n(2)(90);
    },
    609: function(t, e, n) {
        t.exports = n(2)(111);
    },
    821: function(t, e, n) {
        var i;
        void 0 === (i = function() {
            "use strict";
            return function() {
                var t = arguments;
                return function() {
                    var e, n;
                    for (e = 0; e < t.length; ++e) n = t[e].apply(this, 0 === e ? arguments : [ n ]);
                    return n;
                };
            };
        }.call(e, n, e, t)) || (t.exports = i);
    },
    966: function(t, e, n) {
        "use strict";
        n(22), n(66), n(84), n(24), n(106), n(44), n(26), n(11), n(83), n(45), n(25), n(46);
        function i(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n;
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        var a = {
            _mapEvents: function() {
                var t = this;
                this._undelegateEvents(), Object.keys(this.events).forEach((function(e) {
                    var n = function(t, e, n) {
                        var a = [], r = t[e], s = function t(e) {
                            var i = [];
                            return "string" == typeof e ? i.push({
                                method: n[e].bind(n)
                            }) : "function" == typeof e ? i.push({
                                method: e
                            }) : Object.keys(e).forEach((function(n) {
                                var a = t(e[n]);
                                i.push({
                                    selector: n,
                                    method: a[0].method
                                });
                            })), i;
                        };
                        return Array.isArray(r) ? r.forEach((function(t) {
                            a.push.apply(a, i(s(t)));
                        })) : a.push.apply(a, i(s(r))), a;
                    }(t.events, e, t);
                    e += ".delegated", n.forEach((function(n) {
                        n.selector ? t.$view.on(e, n.selector, n.method) : t.$view.on(e, n.method);
                    }));
                }));
            },
            _undelegateEvents: function() {
                this.$view && this.$view.off(".delegated");
            }
        };
        e.a = a;
    },
    967: function(t, e, n) {
        var i = n(356), a = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="form-item js-rf-button-container rf-button__container '), 
                i.sub("containerClasses", t, e, n), i.b(' form-button-wrap" '), i.sub("containerAttrs", t, e, n), 
                i.b(">"), i.b("\n" + n), i.b('  <button class="form-button js-rf-button rf-button '), 
                i.sub("classes", t, e, n), i.b('"'), i.b("\n" + n), i.b("    "), i.sub("attrs", t, e, n), 
                i.b(">"), i.sub("label", t, e, n), i.b("</button>"), i.b("\n" + n), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {
                containerClasses: function(t, e, n, i) {},
                containerAttrs: function(t, e, n, i) {},
                classes: function(t, e, n, i) {
                    n.b("form-button-default");
                },
                attrs: function(t, e, n, i) {},
                label: function(t, e, n, i) {}
            }
        }, '<div class="form-item js-rf-button-container rf-button__container {{$containerClasses}}{{/containerClasses}} form-button-wrap" {{$containerAttrs}}{{/containerAttrs}}>\n  <button class="form-button js-rf-button rf-button {{$classes}}form-button-default{{/classes}}"\n    {{$attrs}}{{/attrs}}>{{$label}}{{/label}}</button>\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, (r = a, s = e, Object.keys(s).reduce((function(t, e) {
                return t[e] = s[e], t;
            }), r)), n);
            var r, s;
        }, t.exports = r.render.bind(r), t.exports.template = r;
    }
} ]);
//# sourceMappingURL=app.29.js.map