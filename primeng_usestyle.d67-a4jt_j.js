import { a as l, b as a } from "@nf-internal/chunk-NATPXMDT";
import "@nf-internal/chunk-RNMDN42R";
import { DOCUMENT as p } from "@angular/common";
import * as c from "@angular/core";
import { inject as y } from "@angular/core";
var h = 0, j = (() => { class t {
    document = y(p);
    use(o, d = {}) { let C = !1, n = o, e = null, { immediate: g = !0, manual: v = !1, name: r = `style_${++h}`, id: s = void 0, media: m = void 0, nonce: f = void 0, first: u = !1, props: b = {} } = d; if (this.document) {
        if (e = this.document.querySelector(`style[data-primeng-style-id="${r}"]`) || s && this.document.getElementById(s) || this.document.createElement("style"), e) {
            if (!e.isConnected) {
                n = o;
                let i = this.document.head;
                a(e, "nonce", f), u && i.firstChild ? i.insertBefore(e, i.firstChild) : i.appendChild(e), l(e, { type: "text/css", media: m, nonce: f, "data-primeng-style-id": r });
            }
            e.textContent !== n && (e.textContent = n);
        }
        return { id: s, name: r, el: e, css: n };
    } }
    static \u0275fac = function (d) { return new (d || t); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
export { j as UseStyle };
