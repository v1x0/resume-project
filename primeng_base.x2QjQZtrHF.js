import { b as c, c as r, d as s } from "@nf-internal/chunk-N3VIX45H";
import "@nf-internal/chunk-NATPXMDT";
import { g as d, n as m } from "@nf-internal/chunk-SAIZJIPS";
import { a as h } from "@nf-internal/chunk-RNMDN42R";
import * as f from "@angular/core";
import { inject as v } from "@angular/core";
var u = `
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;
import { UseStyle as g } from "primeng/usestyle";
var z = { _loadedStyleNames: new Set, getLoadedStyleNames() { return this._loadedStyleNames; }, isStyleNameLoaded(a) { return this._loadedStyleNames.has(a); }, setLoadedStyleName(a) { this._loadedStyleNames.add(a); }, deleteLoadedStyleName(a) { this._loadedStyleNames.delete(a); }, clearLoadedStyleNames() { this._loadedStyleNames.clear(); } }, k = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`, L = (() => { class a {
    name = "base";
    useStyle = v(g);
    css = void 0;
    style = void 0;
    classes = {};
    inlineStyles = {};
    load = (e, n = {}, t = o => o) => { let o = t(r `${d(e, { dt: c })}`); return o ? this.useStyle.use(m(o), h({ name: this.name }, n)) : {}; };
    loadCSS = (e = {}) => this.load(this.css, e);
    loadStyle = (e = {}, n = "") => this.load(this.style, e, (t = "") => s.transformCSS(e.name || this.name, `${t}${r `${n}`}`));
    loadBaseCSS = (e = {}) => this.load(k, e);
    loadBaseStyle = (e = {}, n = "") => this.load(u, e, (t = "") => s.transformCSS(e.name || this.name, `${t}${r `${n}`}`));
    getCommonTheme = e => s.getCommon(this.name, e);
    getComponentTheme = e => s.getComponent(this.name, e);
    getPresetTheme = (e, n, t) => s.getCustomPreset(this.name, e, n, t);
    getLayerOrderThemeCSS = () => s.getLayerOrderCSS(this.name);
    getStyleSheet = (e = "", n = {}) => { if (this.css) {
        let t = d(this.css, { dt: c }), o = m(r `${t}${e}`), p = Object.entries(n).reduce((i, [y, l]) => i.push(`${y}="${l}"`) && i, []).join(" ");
        return `<style type="text/css" data-primeng-style-id="${this.name}" ${p}>${o}</style>`;
    } return ""; };
    getCommonThemeStyleSheet = (e, n = {}) => s.getCommonStyleSheet(this.name, e, n);
    getThemeStyleSheet = (e, n = {}) => { let t = [s.getStyleSheet(this.name, e, n)]; if (this.style) {
        let o = this.name === "base" ? "global-style" : `${this.name}-style`, p = r `${d(this.style, { dt: c })}`, i = m(s.transformCSS(o, p)), y = Object.entries(n).reduce((l, [S, b]) => l.push(`${S}="${b}"`) && l, []).join(" ");
        t.push(`<style type="text/css" data-primeng-style-id="${o}" ${y}>${i}</style>`);
    } return t.join(""); };
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275prov = f.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac, providedIn: "root" });
} return a; })();
export { z as Base, L as BaseStyle };
