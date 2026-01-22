import { a as u } from "@nf-internal/chunk-DYCPAKTJ";
import { e as h } from "@nf-internal/chunk-SAIZJIPS";
import { d as f } from "@nf-internal/chunk-RNMDN42R";
import * as e from "@angular/core";
import { input as v, signal as g, computed as l, effect as p } from "@angular/core";
var b = (() => { class t {
    el;
    renderer;
    pBind = v(void 0);
    _attrs = g(void 0);
    attrs = l(() => this._attrs() || this.pBind());
    styles = l(() => this.attrs()?.style);
    classes = l(() => u(this.attrs()?.class));
    listeners = [];
    constructor(s, i) { this.el = s, this.renderer = i, p(() => { let c = this.attrs() || {}, { style: d, class: y } = c, m = f(c, ["style", "class"]); for (let [n, r] of Object.entries(m))
        if (n.startsWith("on") && typeof r == "function") {
            let o = n.slice(2).toLowerCase();
            if (!this.listeners.some(a => a.eventName === o)) {
                let a = this.renderer.listen(this.el.nativeElement, o, r);
                this.listeners.push({ eventName: o, unlisten: a });
            }
        }
        else
            r == null ? this.renderer.removeAttribute(this.el.nativeElement, n) : (this.renderer.setAttribute(this.el.nativeElement, n, r.toString()), n in this.el.nativeElement && (this.el.nativeElement[n] = r)); }); }
    ngOnDestroy() { this.clearListeners(); }
    setAttrs(s) { h(this._attrs(), s) || this._attrs.set(s); }
    clearListeners() { this.listeners.forEach(({ unlisten: s }) => s()), this.listeners = []; }
    static \u0275fac = function (i) { return new (i || t)(e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.Renderer2)); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: t, selectors: [["", "pBind", ""]], hostVars: 4, hostBindings: function (i, d) { i & 2 && (e.\u0275\u0275styleMap(d.styles()), e.\u0275\u0275classMap(d.classes())); }, inputs: { pBind: [1, "pBind"] } });
} return t; })(), E = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = e.\u0275\u0275defineInjector({});
} return t; })();
export { b as Bind, E as BindModule };
