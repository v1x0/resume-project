import { a as M, b as j, f as O } from "@nf-internal/chunk-RNMDN42R";
import { DOCUMENT as L, \u0275getDOM as oe } from "@angular/common";
import * as a from "@angular/core";
import { InjectionToken as G, \u0275RuntimeError as b, APP_ID as Z, CSP_NONCE as Y, PLATFORM_ID as se, ViewEncapsulation as g, \u0275TracingService as ie, RendererStyleFlags2 as w, \u0275allLeavingAnimations as ae } from "@angular/core";
var v = class {
    _doc;
    constructor(n) { this._doc = n; }
    manager;
}, D = (() => { class o extends v {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, r, s) { return e.addEventListener(t, r, s), () => this.removeEventListener(e, t, r, s); }
    removeEventListener(e, t, r, s) { return e.removeEventListener(t, r, s); }
    static \u0275fac = function (t) { return new (t || o)(a.\u0275\u0275inject(L)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), C = new G(""), P = (() => { class o {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(i => { i.manager = this; }); let r = e.filter(i => !(i instanceof D)); this._plugins = r.slice().reverse(); let s = e.find(i => i instanceof D); s && this._plugins.push(s); }
    addEventListener(e, t, r, s) { return this._findPluginFor(t).addEventListener(e, t, r, s); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(s => s.supports(e)), !t)
        throw new b(5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static \u0275fac = function (t) { return new (t || o)(a.\u0275\u0275inject(C), a.\u0275\u0275inject(a.NgZone)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), R = "ng-app-id";
function F(o) { for (let n of o)
    n.remove(); }
function V(o, n) { let e = n.createElement("style"); return e.textContent = o, e; }
function le(o, n, e, t) { let r = o.head?.querySelectorAll(`style[${R}="${n}"],link[${R}="${n}"]`); if (r)
    for (let s of r)
        s.removeAttribute(R), s instanceof HTMLLinkElement ? t.set(s.href.slice(s.href.lastIndexOf("/") + 1), { usage: 0, elements: [s] }) : s.textContent && e.set(s.textContent, { usage: 0, elements: [s] }); }
function I(o, n) { let e = n.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", o), e; }
var N = (() => { class o {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, r, s = {}) { this.doc = e, this.appId = t, this.nonce = r, le(e, t, this.inline, this.external), this.hosts.add(e.head); }
    addStyles(e, t) { for (let r of e)
        this.addUsage(r, this.inline, V); t?.forEach(r => this.addUsage(r, this.external, I)); }
    removeStyles(e, t) { for (let r of e)
        this.removeUsage(r, this.inline); t?.forEach(r => this.removeUsage(r, this.external)); }
    addUsage(e, t, r) { let s = t.get(e); s ? s.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(i => this.addElement(i, r(e, this.doc))) }); }
    removeUsage(e, t) { let r = t.get(e); r && (r.usage--, r.usage <= 0 && (F(r.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        F(e); this.hosts.clear(); }
    addHost(e) { this.hosts.add(e); for (let [t, { elements: r }] of this.inline)
        r.push(this.addElement(e, V(t, this.doc))); for (let [t, { elements: r }] of this.external)
        r.push(this.addElement(e, I(t, this.doc))); }
    removeHost(e) { this.hosts.delete(e); }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(R, this.appId), e.appendChild(t); }
    static \u0275fac = function (t) { return new (t || o)(a.\u0275\u0275inject(L), a.\u0275\u0275inject(Z), a.\u0275\u0275inject(Y, 8), a.\u0275\u0275inject(se)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), _ = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, k = /%COMP%/g;
var K = "%COMP%", ce = `_nghost-${K}`, de = `_ngcontent-${K}`, ue = !0, fe = new G("", { factory: () => ue });
function he(o) { return de.replace(k, o); }
function pe(o) { return ce.replace(k, o); }
function W(o, n) { return n.map(e => e.replace(k, o)); }
var x = (() => { class o {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    constructor(e, t, r, s, i, l, d = null, c = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = r, this.removeStylesOnCompDestroy = s, this.doc = i, this.ngZone = l, this.nonce = d, this.tracingService = c, this.defaultRenderer = new y(e, i, l, this.tracingService); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && (t.encapsulation === g.ShadowDom || t.encapsulation === g.ExperimentalIsolatedShadowDom) && (t = j(M({}, t), { encapsulation: g.Emulated })); let r = this.getOrCreateRenderer(e, t); return r instanceof T ? r.applyToHost(e) : r instanceof E && r.applyStyles(), r; }
    getOrCreateRenderer(e, t) { let r = this.rendererByCompId, s = r.get(t.id); if (!s) {
        let i = this.doc, l = this.ngZone, d = this.eventManager, c = this.sharedStylesHost, u = this.removeStylesOnCompDestroy, f = this.tracingService;
        switch (t.encapsulation) {
            case g.Emulated:
                s = new T(d, c, t, this.appId, u, i, l, f);
                break;
            case g.ShadowDom: return new A(d, e, t, i, l, this.nonce, f, c);
            case g.ExperimentalIsolatedShadowDom: return new A(d, e, t, i, l, this.nonce, f);
            default:
                s = new E(d, c, t, u, i, l, f);
                break;
        }
        r.set(t.id, s);
    } return s; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static \u0275fac = function (t) { return new (t || o)(a.\u0275\u0275inject(P), a.\u0275\u0275inject(N), a.\u0275\u0275inject(Z), a.\u0275\u0275inject(fe), a.\u0275\u0275inject(L), a.\u0275\u0275inject(a.NgZone), a.\u0275\u0275inject(Y), a.\u0275\u0275inject(ie, 8)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), y = class {
    eventManager;
    doc;
    ngZone;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(n, e, t, r) { this.eventManager = n, this.doc = e, this.ngZone = t, this.tracingService = r; }
    destroy() { }
    destroyNode = null;
    createElement(n, e) { return e ? this.doc.createElementNS(_[e] || e, n) : this.doc.createElement(n); }
    createComment(n) { return this.doc.createComment(n); }
    createText(n) { return this.doc.createTextNode(n); }
    appendChild(n, e) { ($(n) ? n.content : n).appendChild(e); }
    insertBefore(n, e, t) { n && ($(n) ? n.content : n).insertBefore(e, t); }
    removeChild(n, e) { e.remove(); }
    selectRootElement(n, e) { let t = typeof n == "string" ? this.doc.querySelector(n) : n; if (!t)
        throw new b(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(n) { return n.parentNode; }
    nextSibling(n) { return n.nextSibling; }
    setAttribute(n, e, t, r) { if (r) {
        e = r + ":" + e;
        let s = _[r];
        s ? n.setAttributeNS(s, e, t) : n.setAttribute(e, t);
    }
    else
        n.setAttribute(e, t); }
    removeAttribute(n, e, t) { if (t) {
        let r = _[t];
        r ? n.removeAttributeNS(r, e) : n.removeAttribute(`${t}:${e}`);
    }
    else
        n.removeAttribute(e); }
    addClass(n, e) { n.classList.add(e); }
    removeClass(n, e) { n.classList.remove(e); }
    setStyle(n, e, t, r) { r & (w.DashCase | w.Important) ? n.style.setProperty(e, t, r & w.Important ? "important" : "") : n.style[e] = t; }
    removeStyle(n, e, t) { t & w.DashCase ? n.style.removeProperty(e) : n.style[e] = ""; }
    setProperty(n, e, t) { n != null && (n[e] = t); }
    setValue(n, e) { n.nodeValue = e; }
    listen(n, e, t, r) { if (typeof n == "string" && (n = oe().getGlobalEventTarget(this.doc, n), !n))
        throw new b(5102, !1); let s = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (s = this.tracingService.wrapEventListener(n, e, s)), this.eventManager.addEventListener(n, e, s, r); }
    decoratePreventDefault(n) { return e => { if (e === "__ngUnwrap__")
        return n; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => n(e)) : n(e)) === !1 && e.preventDefault(); }; }
};
function $(o) { return o.tagName === "TEMPLATE" && o.content !== void 0; }
var A = class extends y {
    hostEl;
    sharedStylesHost;
    shadowRoot;
    constructor(n, e, t, r, s, i, l, d) { super(n, r, s, l), this.hostEl = e, this.sharedStylesHost = d, this.shadowRoot = e.attachShadow({ mode: "open" }), this.sharedStylesHost && this.sharedStylesHost.addHost(this.shadowRoot); let c = t.styles; c = W(t.id, c); for (let f of c) {
        let m = document.createElement("style");
        i && m.setAttribute("nonce", i), m.textContent = f, this.shadowRoot.appendChild(m);
    } let u = t.getExternalStyles?.(); if (u)
        for (let f of u) {
            let m = I(f, r);
            i && m.setAttribute("nonce", i), this.shadowRoot.appendChild(m);
        } }
    nodeOrShadowRoot(n) { return n === this.hostEl ? this.shadowRoot : n; }
    appendChild(n, e) { return super.appendChild(this.nodeOrShadowRoot(n), e); }
    insertBefore(n, e, t) { return super.insertBefore(this.nodeOrShadowRoot(n), e, t); }
    removeChild(n, e) { return super.removeChild(null, e); }
    parentNode(n) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n))); }
    destroy() { this.sharedStylesHost && this.sharedStylesHost.removeHost(this.shadowRoot); }
}, E = class extends y {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(n, e, t, r, s, i, l, d) { super(n, s, i, l), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = r; let c = t.styles; this.styles = d ? W(d, c) : c, this.styleUrls = t.getExternalStyles?.(d); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && ae.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, T = class extends E {
    contentAttr;
    hostAttr;
    constructor(n, e, t, r, s, i, l, d) { let c = r + "-" + t.id; super(n, e, t, s, i, l, d, c), this.contentAttr = he(c), this.hostAttr = pe(c); }
    applyToHost(n) { this.applyStyles(), this.setAttribute(n, this.hostAttr, ""); }
    createElement(n, e) { let t = super.createElement(n, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
import { \u0275DomAdapter as me, \u0275setRootDomAdapter as ge, \u0275parseCookieValue as ve, \u0275getDOM as J, DOCUMENT as X, \u0275PLATFORM_BROWSER_ID as ye, XhrFactory as Ee, CommonModule as Se } from "@angular/common";
import * as h from "@angular/core";
import { \u0275global as p, \u0275RuntimeError as Me, \u0275internalCreateApplication as q, \u0275resolveComponentResources as qe, PLATFORM_ID as we, PLATFORM_INITIALIZER as Re, createPlatformFactory as De, platformCore as Ae, InjectionToken as Qe, \u0275TESTABILITY_GETTER as Te, \u0275TESTABILITY as Ce, Testability as H, \u0275INJECTOR_SCOPE as Oe, ErrorHandler as Q, RendererFactory2 as _e, ApplicationModule as be, \u0275setDocument as Ie } from "@angular/core";
var U = class o extends me {
    supportsDOMEvents = !0;
    static makeCurrent() { ge(new o); }
    onAndCancel(n, e, t, r) { return n.addEventListener(e, t, r), () => { n.removeEventListener(e, t, r); }; }
    dispatchEvent(n, e) { n.dispatchEvent(e); }
    remove(n) { n.remove(); }
    createElement(n, e) { return e = e || this.getDefaultDocument(), e.createElement(n); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(n) { return n.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(n) { return n instanceof DocumentFragment; }
    getGlobalEventTarget(n, e) { return e === "window" ? window : e === "document" ? n : e === "body" ? n.body : null; }
    getBaseHref(n) { let e = Le(); return e == null ? null : Pe(e); }
    resetBaseElement() { S = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(n) { return ve(document.cookie, n); }
}, S = null;
function Le() { return S = S || document.head.querySelector("base"), S ? S.getAttribute("href") : null; }
function Pe(o) { return new URL(o, document.baseURI).pathname; }
var B = class {
    addToWindow(n) { p.getAngularTestability = (t, r = !0) => { let s = n.findTestabilityInTree(t, r); if (s == null)
        throw new Me(5103, !1); return s; }, p.getAllAngularTestabilities = () => n.getAllTestabilities(), p.getAllAngularRootElements = () => n.getAllRootElements(); let e = t => { let r = p.getAllAngularTestabilities(), s = r.length, i = function () { s--, s == 0 && t(); }; r.forEach(l => { l.whenStable(i); }); }; p.frameworkStabilizers || (p.frameworkStabilizers = []), p.frameworkStabilizers.push(e); }
    findTestabilityInTree(n, e, t) { if (e == null)
        return null; let r = n.getTestability(e); return r ?? (t ? J().isShadowRoot(e) ? this.findTestabilityInTree(n, e.host, !0) : this.findTestabilityInTree(n, e.parentElement, !0) : null); }
}, Ne = (() => { class o {
    build() { return new XMLHttpRequest; }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), z = ["alt", "control", "meta", "shift"], ke = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, xe = { alt: o => o.altKey, control: o => o.ctrlKey, meta: o => o.metaKey, shift: o => o.shiftKey }, He = (() => { class o extends v {
    constructor(e) { super(e); }
    supports(e) { return o.parseEventName(e) != null; }
    addEventListener(e, t, r, s) { let i = o.parseEventName(t), l = o.eventCallback(i.fullKey, r, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => J().onAndCancel(e, i.domEventName, l, s)); }
    static parseEventName(e) { let t = e.toLowerCase().split("."), r = t.shift(); if (t.length === 0 || !(r === "keydown" || r === "keyup"))
        return null; let s = o._normalizeKey(t.pop()), i = "", l = t.indexOf("code"); if (l > -1 && (t.splice(l, 1), i = "code."), z.forEach(c => { let u = t.indexOf(c); u > -1 && (t.splice(u, 1), i += c + "."); }), i += s, t.length != 0 || s.length === 0)
        return null; let d = {}; return d.domEventName = r, d.fullKey = i, d; }
    static matchEventFullKeyCode(e, t) { let r = ke[e.key] || e.key, s = ""; return t.indexOf("code.") > -1 && (r = e.code, s = "code."), r == null || !r ? !1 : (r = r.toLowerCase(), r === " " ? r = "space" : r === "." && (r = "dot"), z.forEach(i => { if (i !== r) {
        let l = xe[i];
        l(e) && (s += i + ".");
    } }), s += r, s === t); }
    static eventCallback(e, t, r) { return s => { o.matchEventFullKeyCode(s, e) && r.runGuarded(() => t(s)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (t) { return new (t || o)(h.\u0275\u0275inject(X)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })();
function rt(o, n, e) { return O(this, null, function* () { let t = M({ rootComponent: o }, ee(n, e)); return q(t); }); }
function ot(o, n) { return O(this, null, function* () { return q(ee(o, n)); }); }
function ee(o, n) { return { platformRef: n?.platformRef, appProviders: [...re, ...o?.providers ?? []], platformProviders: te }; }
function st() { return [...ne]; }
function Ue() { U.makeCurrent(); }
function Be() { return new Q; }
function je() { return Ie(document), document; }
var te = [{ provide: we, useValue: ye }, { provide: Re, useValue: Ue, multi: !0 }, { provide: X, useFactory: je }], it = De(Ae, "browser", te);
var ne = [{ provide: Te, useClass: B }, { provide: Ce, useClass: H }, { provide: H, useClass: H }], re = [{ provide: Oe, useValue: "root" }, { provide: Q, useFactory: Be }, { provide: C, useClass: D, multi: !0 }, { provide: C, useClass: He, multi: !0 }, x, N, P, { provide: _e, useExisting: x }, { provide: Ee, useClass: Ne }, []], at = (() => { class o {
    constructor() { }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [...re, ...ne], imports: [Se, be] });
} return o; })();
export { v as a, D as b, C as c, P as d, N as e, fe as f, x as g, U as h, B as i, He as j, rt as k, ot as l, st as m, it as n, at as o };
/*! Bundled license information:

@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs:
@angular/platform-browser/fesm2022/_browser-chunk.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
