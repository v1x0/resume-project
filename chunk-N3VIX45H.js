import { a as J, c as f, f as N, g as x, h as P, l as oe, m as b, n as te, p as Q } from "@nf-internal/chunk-SAIZJIPS";
function ue() { let e = new Map; return { on(t, r) { let s = e.get(t); return s ? s.push(r) : s = [r], e.set(t, s), this; }, off(t, r) { let s = e.get(t); return s && s.splice(s.indexOf(r) >>> 0, 1), this; }, emit(t, r) { let s = e.get(t); s && s.forEach(i => { i(r); }); }, clear() { e.clear(); } }; }
var Ae = Object.defineProperty, De = Object.defineProperties, Ke = Object.getOwnPropertyDescriptors, Y = Object.getOwnPropertySymbols, ce = Object.prototype.hasOwnProperty, de = Object.prototype.propertyIsEnumerable, he = (e, t, r) => t in e ? Ae(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, k = (e, t) => { for (var r in t || (t = {}))
    ce.call(t, r) && he(e, r, t[r]); if (Y)
    for (var r of Y(t))
        de.call(t, r) && he(e, r, t[r]); return e; }, re = (e, t) => De(e, Ke(t)), _ = (e, t) => { var r = {}; for (var s in e)
    ce.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]); if (e != null && Y)
    for (var s of Y(e))
        t.indexOf(s) < 0 && de.call(e, s) && (r[s] = e[s]); return r; };
var ze = ue(), O = ze, R = /{([^}]*)}/g, pe = /(\d+\s+[\+\-\*\/]\s+\d+)/g, fe = /var\([^)]+\)/g;
function me(e) { return P(e) ? e.replace(/[A-Z]/g, (t, r) => r === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e; }
function Ue(e) { return N(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e; }
function Xe(e) { return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-"); }
function se(e = "", t = "") { return Xe(`${P(e, !1) && P(t, !1) ? `${e}-` : e}${t}`); }
function ge(e = "", t = "") { return `--${se(e, t)}`; }
function Be(e = "") { let t = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length; return (t + r) % 2 !== 0; }
function ye(e, t = "", r = "", s = [], i) { if (P(e)) {
    let m = e.trim();
    if (Be(m))
        return;
    if (b(m, R)) {
        let a = m.replaceAll(R, n => { let l = n.replace(/{|}/g, "").split(".").filter(o => !s.some(u => b(o, u))); return `var(${ge(r, Q(l.join("-")))}${f(i) ? `, ${i}` : ""})`; });
        return b(a.replace(fe, "0"), pe) ? `calc(${a})` : a;
    }
    return m;
}
else if (oe(e))
    return e; }
function Ge(e, t, r) { P(t, !1) && e.push(`${t}:${r};`); }
function C(e, t) { return e ? `${e}{${t}}` : ""; }
function ve(e, t) { if (e.indexOf("dt(") === -1)
    return e; function r(a, n) { let l = [], o = 0, u = "", d = null, c = 0; for (; o <= a.length;) {
    let h = a[o];
    if ((h === '"' || h === "'" || h === "`") && a[o - 1] !== "\\" && (d = d === h ? null : h), !d && (h === "(" && c++, h === ")" && c--, (h === "," || o === a.length) && c === 0)) {
        let p = u.trim();
        p.startsWith("dt(") ? l.push(ve(p, n)) : l.push(s(p)), u = "", o++;
        continue;
    }
    h !== void 0 && (u += h), o++;
} return l; } function s(a) { let n = a[0]; if ((n === '"' || n === "'" || n === "`") && a[a.length - 1] === n)
    return a.slice(1, -1); let l = Number(a); return isNaN(l) ? a : l; } let i = [], m = []; for (let a = 0; a < e.length; a++)
    if (e[a] === "d" && e.slice(a, a + 3) === "dt(")
        m.push(a), a += 2;
    else if (e[a] === ")" && m.length > 0) {
        let n = m.pop();
        m.length === 0 && i.push([n, a]);
    } if (!i.length)
    return e; for (let a = i.length - 1; a >= 0; a--) {
    let [n, l] = i[a], o = e.slice(n + 3, l), u = r(o, t), d = t(...u);
    e = e.slice(0, n) + d + e.slice(l + 1);
} return e; }
var j = (...e) => We(ee.getTheme(), ...e), We = (e = {}, t, r, s) => { if (t) {
    let { variable: i, options: m } = ee.defaults || {}, { prefix: a, transform: n } = e?.options || m || {}, l = b(t, R) ? t : `{${t}}`;
    return s === "value" || J(s) && n === "strict" ? ee.getTokenValue(t) : ye(l, void 0, a, [i.excludedKeyRegex], r);
} return ""; };
function tt(e, ...t) { if (e instanceof Array) {
    let r = e.reduce((s, i, m) => { var a; return s + i + ((a = x(t[m], { dt: j })) != null ? a : ""); }, "");
    return ve(r, j);
} return x(e, { dt: j }); }
function Ie(e, t = {}) { let r = ee.defaults.variable, { prefix: s = r.prefix, selector: i = r.selector, excludedKeyRegex: m = r.excludedKeyRegex } = t, a = [], n = [], l = [{ node: e, path: s }]; for (; l.length;) {
    let { node: u, path: d } = l.pop();
    for (let c in u) {
        let h = u[c], p = Ue(h), y = b(c, m) ? se(d) : se(d, Q(c));
        if (N(p))
            l.push({ node: p, path: y });
        else {
            let g = ge(y), v = ye(p, y, s, [m]);
            Ge(n, g, v);
            let S = y;
            s && S.startsWith(s + "-") && (S = S.slice(s.length + 1)), a.push(S.replace(/-/g, "."));
        }
    }
} let o = n.join(""); return { value: n, tokens: a, declarations: o, css: C(i, o) }; }
var $ = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) { return { type: "class", selector: e, matched: this.pattern.test(e.trim()) }; } }, attr: { pattern: /^\[(.*)\]$/, resolve(e) { return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) }; } }, media: { pattern: /^@media (.*)$/, resolve(e) { return { type: "media", selector: e, matched: this.pattern.test(e.trim()) }; } }, system: { pattern: /^system$/, resolve(e) { return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) }; } }, custom: { resolve(e) { return { type: "custom", selector: e, matched: !0 }; } } }, resolve(e) { let t = Object.keys(this.rules).filter(r => r !== "custom").map(r => this.rules[r]); return [e].flat().map(r => { var s; return (s = t.map(i => i.resolve(r)).find(i => i.matched)) != null ? s : this.rules.custom.resolve(r); }); } }, _toVariables(e, t) { return Ie(e, { prefix: t?.prefix }); }, getCommon({ name: e = "", theme: t = {}, params: r, set: s, defaults: i }) { var m, a, n, l, o, u, d; let { preset: c, options: h } = t, p, y, g, v, S, L, T; if (f(c) && h.transform !== "strict") {
        let { primitive: M, semantic: A, extend: D } = c, w = A || {}, { colorScheme: K } = w, z = _(w, ["colorScheme"]), U = D || {}, { colorScheme: X } = U, V = _(U, ["colorScheme"]), E = K || {}, { dark: B } = E, G = _(E, ["dark"]), W = X || {}, { dark: I } = W, Z = _(W, ["dark"]), q = f(M) ? this._toVariables({ primitive: M }, h) : {}, H = f(z) ? this._toVariables({ semantic: z }, h) : {}, F = f(G) ? this._toVariables({ light: G }, h) : {}, ae = f(B) ? this._toVariables({ dark: B }, h) : {}, le = f(V) ? this._toVariables({ semantic: V }, h) : {}, ie = f(Z) ? this._toVariables({ light: Z }, h) : {}, ne = f(I) ? this._toVariables({ dark: I }, h) : {}, [Se, be] = [(m = q.declarations) != null ? m : "", q.tokens], [$e, ke] = [(a = H.declarations) != null ? a : "", H.tokens || []], [_e, Ne] = [(n = F.declarations) != null ? n : "", F.tokens || []], [xe, Oe] = [(l = ae.declarations) != null ? l : "", ae.tokens || []], [Pe, Ce] = [(o = le.declarations) != null ? o : "", le.tokens || []], [Le, we] = [(u = ie.declarations) != null ? u : "", ie.tokens || []], [Ve, Ee] = [(d = ne.declarations) != null ? d : "", ne.tokens || []];
        p = this.transformCSS(e, Se, "light", "variable", h, s, i), y = be;
        let je = this.transformCSS(e, `${$e}${_e}`, "light", "variable", h, s, i), Re = this.transformCSS(e, `${xe}`, "dark", "variable", h, s, i);
        g = `${je}${Re}`, v = [...new Set([...ke, ...Ne, ...Oe])];
        let Te = this.transformCSS(e, `${Pe}${Le}color-scheme:light`, "light", "variable", h, s, i), Me = this.transformCSS(e, `${Ve}color-scheme:dark`, "dark", "variable", h, s, i);
        S = `${Te}${Me}`, L = [...new Set([...Ce, ...we, ...Ee])], T = x(c.css, { dt: j });
    } return { primitive: { css: p, tokens: y }, semantic: { css: g, tokens: v }, global: { css: S, tokens: L }, style: T }; }, getPreset({ name: e = "", preset: t = {}, options: r, params: s, set: i, defaults: m, selector: a }) { var n, l, o; let u, d, c; if (f(t) && r.transform !== "strict") {
        let h = e.replace("-directive", ""), p = t, { colorScheme: y, extend: g, css: v } = p, S = _(p, ["colorScheme", "extend", "css"]), L = g || {}, { colorScheme: T } = L, M = _(L, ["colorScheme"]), A = y || {}, { dark: D } = A, w = _(A, ["dark"]), K = T || {}, { dark: z } = K, U = _(K, ["dark"]), X = f(S) ? this._toVariables({ [h]: k(k({}, S), M) }, r) : {}, V = f(w) ? this._toVariables({ [h]: k(k({}, w), U) }, r) : {}, E = f(D) ? this._toVariables({ [h]: k(k({}, D), z) }, r) : {}, [B, G] = [(n = X.declarations) != null ? n : "", X.tokens || []], [W, I] = [(l = V.declarations) != null ? l : "", V.tokens || []], [Z, q] = [(o = E.declarations) != null ? o : "", E.tokens || []], H = this.transformCSS(h, `${B}${W}`, "light", "variable", r, i, m, a), F = this.transformCSS(h, Z, "dark", "variable", r, i, m, a);
        u = `${H}${F}`, d = [...new Set([...G, ...I, ...q])], c = x(v, { dt: j });
    } return { css: u, tokens: d, style: c }; }, getPresetC({ name: e = "", theme: t = {}, params: r, set: s, defaults: i }) { var m; let { preset: a, options: n } = t, l = (m = a?.components) == null ? void 0 : m[e]; return this.getPreset({ name: e, preset: l, options: n, params: r, set: s, defaults: i }); }, getPresetD({ name: e = "", theme: t = {}, params: r, set: s, defaults: i }) { var m, a; let n = e.replace("-directive", ""), { preset: l, options: o } = t, u = ((m = l?.components) == null ? void 0 : m[n]) || ((a = l?.directives) == null ? void 0 : a[n]); return this.getPreset({ name: n, preset: u, options: o, params: r, set: s, defaults: i }); }, applyDarkColorScheme(e) { return !(e.darkModeSelector === "none" || e.darkModeSelector === !1); }, getColorSchemeOption(e, t) { var r; return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t.options.darkModeSelector) : []; }, getLayerOrder(e, t = {}, r, s) { let { cssLayer: i } = t; return i ? `@layer ${x(i.order || i.name || "primeui", r)}` : ""; }, getCommonStyleSheet({ name: e = "", theme: t = {}, params: r, props: s = {}, set: i, defaults: m }) { let a = this.getCommon({ name: e, theme: t, params: r, set: i, defaults: m }), n = Object.entries(s).reduce((l, [o, u]) => l.push(`${o}="${u}"`) && l, []).join(" "); return Object.entries(a || {}).reduce((l, [o, u]) => { if (N(u) && Object.hasOwn(u, "css")) {
        let d = te(u.css), c = `${o}-variables`;
        l.push(`<style type="text/css" data-primevue-style-id="${c}" ${n}>${d}</style>`);
    } return l; }, []).join(""); }, getStyleSheet({ name: e = "", theme: t = {}, params: r, props: s = {}, set: i, defaults: m }) { var a; let n = { name: e, theme: t, params: r, set: i, defaults: m }, l = (a = e.includes("-directive") ? this.getPresetD(n) : this.getPresetC(n)) == null ? void 0 : a.css, o = Object.entries(s).reduce((u, [d, c]) => u.push(`${d}="${c}"`) && u, []).join(" "); return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${te(l)}</style>` : ""; }, createTokens(e = {}, t, r = "", s = "", i = {}) { let m = function (n, l = {}, o = []) { if (o.includes(this.path))
        return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: n, path: this.path, paths: l, value: void 0 }; o.push(this.path), l.name = this.path, l.binding || (l.binding = {}); let u = this.value; if (typeof this.value == "string" && R.test(this.value)) {
        let d = this.value.trim().replace(R, c => { var h; let p = c.slice(1, -1), y = this.tokens[p]; if (!y)
            return console.warn(`Token not found for path: ${p}`), "__UNRESOLVED__"; let g = y.computed(n, l, o); return Array.isArray(g) && g.length === 2 ? `light-dark(${g[0].value},${g[1].value})` : (h = g?.value) != null ? h : "__UNRESOLVED__"; });
        u = pe.test(d.replace(fe, "0")) ? `calc(${d})` : d;
    } return J(l.binding) && delete l.binding, o.pop(), { colorScheme: n, path: this.path, paths: l, value: u.includes("__UNRESOLVED__") ? void 0 : u }; }, a = (n, l, o) => { Object.entries(n).forEach(([u, d]) => { let c = b(u, t.variable.excludedKeyRegex) ? l : l ? `${l}.${me(u)}` : me(u), h = o ? `${o}.${u}` : u; N(d) ? a(d, c, h) : (i[c] || (i[c] = { paths: [], computed: (p, y = {}, g = []) => { if (i[c].paths.length === 1)
            return i[c].paths[0].computed(i[c].paths[0].scheme, y.binding, g); if (p && p !== "none")
            for (let v = 0; v < i[c].paths.length; v++) {
                let S = i[c].paths[v];
                if (S.scheme === p)
                    return S.computed(p, y.binding, g);
            } return i[c].paths.map(v => v.computed(v.scheme, y[v.scheme], g)); } }), i[c].paths.push({ path: h, value: d, scheme: h.includes("colorScheme.light") ? "light" : h.includes("colorScheme.dark") ? "dark" : "none", computed: m, tokens: i })); }); }; return a(e, r, s), i; }, getTokenValue(e, t, r) { var s; let i = (n => n.split(".").filter(l => !b(l.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t), m = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, a = [(s = e[i]) == null ? void 0 : s.computed(m)].flat().filter(n => n); return a.length === 1 ? a[0].value : a.reduce((n = {}, l) => { let o = l, { colorScheme: u } = o, d = _(o, ["colorScheme"]); return n[u] = d, n; }, void 0); }, getSelectorRule(e, t, r, s) { return r === "class" || r === "attr" ? C(f(t) ? `${e}${t},${e} ${t}` : e, s) : C(e, C(t ?? ":root,:host", s)); }, transformCSS(e, t, r, s, i = {}, m, a, n) { if (f(t)) {
        let { cssLayer: l } = i;
        if (s !== "style") {
            let o = this.getColorSchemeOption(i, a);
            t = r === "dark" ? o.reduce((u, { type: d, selector: c }) => (f(c) && (u += c.includes("[CSS]") ? c.replace("[CSS]", t) : this.getSelectorRule(c, n, d, t)), u), "") : C(n ?? ":root,:host", t);
        }
        if (l) {
            let o = { name: "primeui", order: "primeui" };
            N(l) && (o.name = x(l.name, { name: e, type: s })), f(o.name) && (t = C(`@layer ${o.name}`, t), m?.layerNames(o.name));
        }
        return t;
    } return ""; } }, ee = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: new Set, _loadedStyleNames: new Set, _loadingStyles: new Set, _tokens: {}, update(e = {}) { let { theme: t } = e; t && (this._theme = re(k({}, t), { options: k(k({}, this.defaults.options), t.options) }), this._tokens = $.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames()); }, get theme() { return this._theme; }, get preset() { var e; return ((e = this.theme) == null ? void 0 : e.preset) || {}; }, get options() { var e; return ((e = this.theme) == null ? void 0 : e.options) || {}; }, get tokens() { return this._tokens; }, getTheme() { return this.theme; }, setTheme(e) { this.update({ theme: e }), O.emit("theme:change", e); }, getPreset() { return this.preset; }, setPreset(e) { this._theme = re(k({}, this.theme), { preset: e }), this._tokens = $.createTokens(e, this.defaults), this.clearLoadedStyleNames(), O.emit("preset:change", e), O.emit("theme:change", this.theme); }, getOptions() { return this.options; }, setOptions(e) { this._theme = re(k({}, this.theme), { options: e }), this.clearLoadedStyleNames(), O.emit("options:change", e), O.emit("theme:change", this.theme); }, getLayerNames() { return [...this._layerNames]; }, setLayerNames(e) { this._layerNames.add(e); }, getLoadedStyleNames() { return this._loadedStyleNames; }, isStyleNameLoaded(e) { return this._loadedStyleNames.has(e); }, setLoadedStyleName(e) { this._loadedStyleNames.add(e); }, deleteLoadedStyleName(e) { this._loadedStyleNames.delete(e); }, clearLoadedStyleNames() { this._loadedStyleNames.clear(); }, getTokenValue(e) { return $.getTokenValue(this.tokens, e, this.defaults); }, getCommon(e = "", t) { return $.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }); }, getComponent(e = "", t) { let r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }; return $.getPresetC(r); }, getDirective(e = "", t) { let r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }; return $.getPresetD(r); }, getCustomPreset(e = "", t, r, s) { let i = { name: e, preset: t, options: this.options, selector: r, params: s, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }; return $.getPreset(i); }, getLayerOrderCSS(e = "") { return $.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults); }, transformCSS(e = "", t, r = "style", s) { return $.transformCSS(e, t, s, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults); }, getCommonStyleSheet(e = "", t, r = {}) { return $.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }); }, getStyleSheet(e, t, r = {}) { return $.getStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }); }, onStyleMounted(e) { this._loadingStyles.add(e); }, onStyleUpdated(e) { this._loadingStyles.add(e); }, onStyleLoaded(e, { name: t }) { this._loadingStyles.size && (this._loadingStyles.delete(t), O.emit(`theme:${t}:load`, e), !this._loadingStyles.size && O.emit("theme:load")); } };
export { O as a, j as b, tt as c, ee as d };
