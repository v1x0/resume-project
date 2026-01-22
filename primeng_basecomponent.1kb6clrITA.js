import { a as D } from "@nf-internal/chunk-OYOFXEWF";
import { a as b } from "@nf-internal/chunk-DYCPAKTJ";
import { a as p, d as f } from "@nf-internal/chunk-N3VIX45H";
import "@nf-internal/chunk-NATPXMDT";
import { b as N, c as T, g as $, h as S, i as y, j as I, k as V } from "@nf-internal/chunk-SAIZJIPS";
import { a as n, b as _ } from "@nf-internal/chunk-RNMDN42R";
import { DOCUMENT as K, isPlatformServer as M } from "@angular/common";
import * as c from "@angular/core";
import { InjectionToken as q, inject as u, PLATFORM_ID as z, ElementRef as J, Injector as Q, ChangeDetectorRef as W, Renderer2 as X, input as C, signal as E, computed as j, effect as x } from "@angular/core";
var U = Object.defineProperty, A = Object.getOwnPropertySymbols, B = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable, L = (i, a, e) => a in i ? U(i, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[a] = e, k = (i, a) => { for (var e in a || (a = {}))
    B.call(a, e) && L(i, e, a[e]); if (A)
    for (var e of A(a))
        H.call(a, e) && L(i, e, a[e]); return i; };
function w(...i) { if (i) {
    let a = [];
    for (let e = 0; e < i.length; e++) {
        let t = i[e];
        if (!t)
            continue;
        let s = typeof t;
        if (s === "string" || s === "number")
            a.push(t);
        else if (s === "object") {
            let o = Array.isArray(t) ? [w(...t)] : Object.entries(t).map(([r, l]) => l ? r : void 0);
            a = o.length ? a.concat(o.filter(r => !!r)) : a;
        }
    }
    return a.join(" ").trim();
} }
function G(i) { return typeof i == "function" && "call" in i && "apply" in i; }
function R({ skipUndefined: i = !1 }, ...a) { return a?.reduce((e, t = {}) => { for (let s in t) {
    let o = t[s];
    if (!(i && o === void 0))
        if (s === "style")
            e.style = k(k({}, e.style), t.style);
        else if (s === "class" || s === "className")
            e[s] = w(e[s], t[s]);
        else if (G(o)) {
            let r = e[s];
            e[s] = r ? (...l) => { r(...l), o(...l); } : o;
        }
        else
            e[s] = o;
} return e; }, {}); }
function v(...i) { return R({ skipUndefined: !1 }, ...i); }
import { BaseStyle as O, Base as g } from "primeng/base";
import { PrimeNG as Y } from "primeng/config";
var F = (() => { class i extends O {
    name = "common";
    static \u0275fac = (() => { let e; return function (s) { return (e || (e = c.\u0275\u0275getInheritedFactory(i)))(s || i); }; })();
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
} return i; })(), Z = new q("PARENT_INSTANCE"), he = (() => { class i {
    document = u(K);
    platformId = u(z);
    el = u(J);
    injector = u(Q);
    cd = u(W);
    renderer = u(X);
    config = u(Y);
    $parentInstance = u(Z, { optional: !0, skipSelf: !0 }) ?? void 0;
    baseComponentStyle = u(F);
    baseStyle = u(O);
    scopedStyleEl;
    parent = this.$params.parent;
    cn = b;
    _themeScopedListener;
    dt = C();
    unstyled = C();
    pt = C();
    ptOptions = C();
    $attrSelector = D("pc");
    get $name() { return this.componentName || this.constructor?.name?.replace(/^_/, "") || "UnknownComponent"; }
    get $hostName() { return this.hostName; }
    get $el() { return this.el?.nativeElement; }
    directivePT = E(void 0);
    directiveUnstyled = E(void 0);
    $unstyled = j(() => this.unstyled() ?? this.directiveUnstyled() ?? this.config?.unstyled() ?? !1);
    $pt = j(() => $(this.pt() || this.directivePT(), this.$params));
    get $globalPT() { return this._getPT(this.config?.pt(), void 0, e => $(e, this.$params)); }
    get $defaultPT() { return this._getPT(this.config?.pt(), void 0, e => this._getOptionValue(e, this.$hostName || this.$name, this.$params) || $(e, this.$params)); }
    get $style() { return n(n({ theme: void 0, css: void 0, classes: void 0, inlineStyles: void 0 }, (this._getHostInstance(this) || {}).$style), this._componentStyle); }
    get $styleOptions() { return { nonce: this.config?.csp().nonce }; }
    get $params() { let e = this._getHostInstance(this) || this.$parentInstance; return { instance: this, parent: { instance: e } }; }
    onInit() { }
    onChanges(e) { }
    onDoCheck() { }
    onAfterContentInit() { }
    onAfterContentChecked() { }
    onAfterViewInit() { }
    onAfterViewChecked() { }
    onDestroy() { }
    constructor() { x(e => { this.document && !M(this.platformId) && (p.off("theme:change", this._themeScopedListener), this.dt() ? (this._loadScopedThemeStyles(this.dt()), this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt()), this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles()), e(() => { p.off("theme:change", this._themeScopedListener); }); }), x(e => { this.document && !M(this.platformId) && (p.off("theme:change", this._loadCoreStyles), this.$unstyled() || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles))), e(() => { p.off("theme:change", this._loadCoreStyles); }); }), this._hook("onBeforeInit"); }
    ngOnInit() { this._loadCoreStyles(), this._loadStyles(), this.onInit(), this._hook("onInit"); }
    ngOnChanges(e) { this.onChanges(e), this._hook("onChanges", e); }
    ngDoCheck() { this.onDoCheck(), this._hook("onDoCheck"); }
    ngAfterContentInit() { this.onAfterContentInit(), this._hook("onAfterContentInit"); }
    ngAfterContentChecked() { this.onAfterContentChecked(), this._hook("onAfterContentChecked"); }
    ngAfterViewInit() { this.$el?.setAttribute(this.$attrSelector, ""), this.onAfterViewInit(), this._hook("onAfterViewInit"); }
    ngAfterViewChecked() { this.onAfterViewChecked(), this._hook("onAfterViewChecked"); }
    ngOnDestroy() { this._removeThemeListeners(), this._unloadScopedThemeStyles(), this.onDestroy(), this._hook("onDestroy"); }
    _mergeProps(e, ...t) { return N(e) ? e(...t) : v(...t); }
    _getHostInstance(e) { return e ? this.$hostName ? this.$name === this.$hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0; }
    _getPropValue(e) { return this[e] || this._getHostInstance(this)?.[e]; }
    _getOptionValue(e, t = "", s = {}) { return I(e, t, s); }
    _hook(e, ...t) { if (!this.$hostName) {
        let s = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${e}`), o = this._useDefaultPT(this._getOptionValue, `hooks.${e}`);
        s?.(...t), o?.(...t);
    } }
    _load() { g.isStyleNameLoaded("base") || (this.baseStyle.loadBaseCSS(this.$styleOptions), this._loadGlobalStyles(), g.setLoadedStyleName("base")), this._loadThemeStyles(); }
    _loadStyles() { this._load(), this._themeChangeListener(() => this._load()); }
    _loadGlobalStyles() { let e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params); T(e) && this.baseStyle.load(e, n({ name: "global" }, this.$styleOptions)); }
    _loadCoreStyles() { !g.isStyleNameLoaded(this.$style?.name) && this.$style?.name && (this.baseComponentStyle.loadCSS(this.$styleOptions), this.$style.loadCSS(this.$styleOptions), g.setLoadedStyleName(this.$style.name)); }
    _loadThemeStyles() { if (!(this.$unstyled() || this.config?.theme() === "none")) {
        if (!f.isStyleNameLoaded("common")) {
            let { primitive: e, semantic: t, global: s, style: o } = this.$style?.getCommonTheme?.() || {};
            this.baseStyle.load(e?.css, n({ name: "primitive-variables" }, this.$styleOptions)), this.baseStyle.load(t?.css, n({ name: "semantic-variables" }, this.$styleOptions)), this.baseStyle.load(s?.css, n({ name: "global-variables" }, this.$styleOptions)), this.baseStyle.loadBaseStyle(n({ name: "global-style" }, this.$styleOptions), o), f.setLoadedStyleName("common");
        }
        if (!f.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
            let { css: e, style: t } = this.$style?.getComponentTheme?.() || {};
            this.$style?.load(e, n({ name: `${this.$style?.name}-variables` }, this.$styleOptions)), this.$style?.loadStyle(n({ name: `${this.$style?.name}-style` }, this.$styleOptions), t), f.setLoadedStyleName(this.$style?.name);
        }
        if (!f.isStyleNameLoaded("layer-order")) {
            let e = this.$style?.getLayerOrderThemeCSS?.();
            this.baseStyle.load(e, n({ name: "layer-order", first: !0 }, this.$styleOptions)), f.setLoadedStyleName("layer-order");
        }
    } }
    _loadScopedThemeStyles(e) { let { css: t } = this.$style?.getPresetTheme?.(e, `[${this.$attrSelector}]`) || {}, s = this.$style?.load(t, n({ name: `${this.$attrSelector}-${this.$style?.name}` }, this.$styleOptions)); this.scopedStyleEl = s?.el; }
    _unloadScopedThemeStyles() { this.scopedStyleEl?.remove(); }
    _themeChangeListener(e = () => { }) { g.clearLoadedStyleNames(), p.on("theme:change", e.bind(this)); }
    _removeThemeListeners() { p.off("theme:change", this._loadCoreStyles), p.off("theme:change", this._load), p.off("theme:change", this._themeScopedListener); }
    _getPTValue(e = {}, t = "", s = {}, o = !0) { let r = /./g.test(t) && !!s[t.split(".")[0]], { mergeSections: l = !0, mergeProps: m = !1 } = this._getPropValue("ptOptions")?.() || this.config?.ptOptions?.() || {}, d = o ? r ? this._useGlobalPT(this._getPTClassValue, t, s) : this._useDefaultPT(this._getPTClassValue, t, s) : void 0, h = r ? void 0 : this._usePT(this._getPT(e, this.$hostName || this.$name), this._getPTClassValue, t, _(n({}, s), { global: d || {} })), P = this._getPTDatasets(t); return l || !l && h ? m ? this._mergeProps(m, d, h, P) : n(n(n({}, d), h), P) : n(n({}, h), P); }
    _getPTDatasets(e = "") { let t = "data-pc-", s = e === "root" && T(this.$pt()?.["data-pc-section"]); return e !== "transition" && _(n({}, e === "root" && _(n({ [`${t}name`]: y(s ? this.$pt()?.["data-pc-section"] : this.$name) }, s && { [`${t}extend`]: y(this.$name) }), { [`${this.$attrSelector}`]: "" })), { [`${t}section`]: y(e.includes(".") ? e.split(".").at(-1) ?? "" : e) }); }
    _getPTClassValue(e, t, s) { let o = this._getOptionValue(e, t, s); return S(o) || V(o) ? { class: o } : o; }
    _getPT(e, t = "", s) { let o = (r, l = !1) => { let m = s ? s(r) : r, d = y(t), h = y(this.$hostName || this.$name); return (l ? d !== h ? m?.[d] : void 0 : m?.[d]) ?? m; }; return e?.hasOwnProperty("_usept") ? { _usept: e._usept, originalValue: o(e.originalValue), value: o(e.value) } : o(e, !0); }
    _usePT(e, t, s, o) { let r = l => t?.call(this, l, s, o); if (e?.hasOwnProperty("_usept")) {
        let { mergeSections: l = !0, mergeProps: m = !1 } = e._usept || this.config?.ptOptions() || {}, d = r(e.originalValue), h = r(e.value);
        return d === void 0 && h === void 0 ? void 0 : S(h) ? h : S(d) ? d : l || !l && h ? m ? this._mergeProps(m, d, h) : n(n({}, d), h) : h;
    } return r(e); }
    _useGlobalPT(e, t, s) { return this._usePT(this.$globalPT, e, t, s); }
    _useDefaultPT(e, t, s) { return this._usePT(this.$defaultPT, e, t, s); }
    ptm(e = "", t = {}) { return this._getPTValue(this.$pt(), e, n(n({}, this.$params), t)); }
    ptms(e, t = {}) { return e.reduce((s, o) => (s = v(s, this.ptm(o, t)) || {}, s), {}); }
    ptmo(e = {}, t = "", s = {}) { return this._getPTValue(e, t, n({ instance: this }, s), !1); }
    cx(e, t = {}) { return this.$unstyled() ? void 0 : b(this._getOptionValue(this.$style.classes, e, n(n({}, this.$params), t))); }
    sx(e = "", t = !0, s = {}) { if (t) {
        let o = this._getOptionValue(this.$style.inlineStyles, e, n(n({}, this.$params), s)), r = this._getOptionValue(this.baseComponentStyle.inlineStyles, e, n(n({}, this.$params), s));
        return n(n({}, r), o);
    } }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = c.\u0275\u0275defineDirective({ type: i, inputs: { dt: [1, "dt"], unstyled: [1, "unstyled"], pt: [1, "pt"], ptOptions: [1, "ptOptions"] }, features: [c.\u0275\u0275ProvidersFeature([F, O]), c.\u0275\u0275NgOnChangesFeature] });
} return i; })();
export { he as BaseComponent, F as BaseComponentStyle, Z as PARENT_INSTANCE };
