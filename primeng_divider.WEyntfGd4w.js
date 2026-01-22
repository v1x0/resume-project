import "@nf-internal/chunk-RNMDN42R";
import { CommonModule as c } from "@angular/common";
import * as t from "@angular/core";
import { InjectionToken as v, inject as o } from "@angular/core";
import { SharedModule as u } from "primeng/api";
import { BaseComponent as g, PARENT_INSTANCE as f } from "primeng/basecomponent";
import * as d from "primeng/bind";
import { Bind as y, BindModule as l } from "primeng/bind";
var a = `
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;
import { BaseStyle as h } from "primeng/base";
var m = ["*"], b = { root: ({ instance: e }) => ({ justifyContent: e.layout === "horizontal" ? e.align === "center" || e.align == null ? "center" : e.align === "left" ? "flex-start" : e.align === "right" ? "flex-end" : null : null, alignItems: e.layout === "vertical" ? e.align === "center" || e.align == null ? "center" : e.align === "top" ? "flex-start" : e.align === "bottom" ? "flex-end" : null : null }) }, D = { root: ({ instance: e }) => ["p-divider p-component", "p-divider-" + e.layout, "p-divider-" + e.type, { "p-divider-left": e.layout === "horizontal" && (!e.align || e.align === "left") }, { "p-divider-center": e.layout === "horizontal" && e.align === "center" }, { "p-divider-right": e.layout === "horizontal" && e.align === "right" }, { "p-divider-top": e.layout === "vertical" && e.align === "top" }, { "p-divider-center": e.layout === "vertical" && (!e.align || e.align === "center") }, { "p-divider-bottom": e.layout === "vertical" && e.align === "bottom" }], content: "p-divider-content" }, s = (() => { class e extends h {
    name = "divider";
    style = a;
    classes = D;
    inlineStyles = b;
    static \u0275fac = (() => { let n; return function (i) { return (n || (n = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275prov = t.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), I = (function (e) { return e.root = "p-divider", e.content = "p-divider-content", e; })(I || {}), p = new v("DIVIDER_INSTANCE"), z = (() => { class e extends g {
    $pcDivider = o(p, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = o(y, { self: !0 });
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    styleClass;
    layout = "horizontal";
    type = "solid";
    align;
    _componentStyle = o(s);
    get dataP() { return this.cn({ [this.align]: this.align, [this.layout]: this.layout, [this.type]: this.type }); }
    static \u0275fac = (() => { let n; return function (i) { return (n || (n = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["p-divider"]], hostAttrs: ["role", "separator"], hostVars: 6, hostBindings: function (r, i) { r & 2 && (t.\u0275\u0275attribute("aria-orientation", i.layout)("data-p", i.dataP), t.\u0275\u0275styleMap(i.sx("root")), t.\u0275\u0275classMap(i.cn(i.cx("root"), i.styleClass))); }, inputs: { styleClass: "styleClass", layout: "layout", type: "type", align: "align" }, features: [t.\u0275\u0275ProvidersFeature([s, { provide: p, useExisting: e }, { provide: f, useExisting: e }]), t.\u0275\u0275HostDirectivesFeature([d.Bind]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: m, decls: 2, vars: 3, consts: [[3, "pBind"]], template: function (r, i) { r & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275projection(1), t.\u0275\u0275elementEnd()), r & 2 && (t.\u0275\u0275classMap(i.cx("content")), t.\u0275\u0275property("pBind", i.ptm("content"))); }, dependencies: [c, u, l, d.Bind], encapsulation: 2, changeDetection: 0 });
} return e; })(), P = (() => { class e {
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [z, l, l] });
} return e; })();
export { z as Divider, I as DividerClasses, P as DividerModule, s as DividerStyle };
