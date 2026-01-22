import { a as r } from "@nf-internal/chunk-DYCPAKTJ";
import "@nf-internal/chunk-RNMDN42R";
import * as e from "@angular/core";
import { inject as a, booleanAttribute as c } from "@angular/core";
import { BaseComponent as p } from "primeng/basecomponent";
import { BaseStyle as f } from "primeng/base";
var l = ["*"], m = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, s = (() => { class t extends f {
    name = "baseicon";
    css = m;
    static \u0275fac = (() => { let n; return function (i) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), d = (function (t) { return t.root = "p-icon", t; })(d || {}), I = (() => { class t extends p {
    spin = !1;
    _componentStyle = a(s);
    getClassNames() { return r("p-icon", { "p-icon-spin": this.spin }); }
    static \u0275fac = (() => { let n; return function (i) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], hostAttrs: ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], hostVars: 2, hostBindings: function (o, i) { o & 2 && e.\u0275\u0275classMap(i.getClassNames()); }, inputs: { spin: [2, "spin", "spin", c] }, features: [e.\u0275\u0275ProvidersFeature([s]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: l, decls: 1, vars: 0, template: function (o, i) { o & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
} return t; })();
export { I as BaseIcon, d as BaseIconClasses, s as BaseIconStyle };
