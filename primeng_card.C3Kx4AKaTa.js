import { e as f } from "@nf-internal/chunk-SAIZJIPS";
import "@nf-internal/chunk-RNMDN42R";
export * from "primeng/types/card";
import * as p from "@angular/common";
import { CommonModule as R } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as q, inject as c, signal as w } from "@angular/core";
import { SharedModule as d, Header as A, Footer as O, PrimeTemplate as H } from "primeng/api";
import { BaseComponent as P, PARENT_INSTANCE as V } from "primeng/basecomponent";
import * as s from "primeng/bind";
import { Bind as $, BindModule as m } from "primeng/bind";
var u = `
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;
import { BaseStyle as z } from "primeng/base";
var h = ["header"], T = ["title"], g = ["subtitle"], b = ["content"], v = ["footer"], C = ["*", [["p-header"]], [["p-footer"]]], E = ["*", "p-header", "p-footer"];
function M(t, o) { t & 1 && e.\u0275\u0275elementContainer(0); }
function x(t, o) { if (t & 1 && (e.\u0275\u0275elementStart(0, "div", 1), e.\u0275\u0275projection(1, 1), e.\u0275\u0275template(2, M, 1, 0, "ng-container", 2), e.\u0275\u0275elementEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(n.cx("header")), e.\u0275\u0275property("pBind", n.ptm("header")), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", n.headerTemplate || n._headerTemplate);
} }
function B(t, o) { if (t & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275text(1), e.\u0275\u0275elementContainerEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.header);
} }
function I(t, o) { t & 1 && e.\u0275\u0275elementContainer(0); }
function F(t, o) { if (t & 1 && (e.\u0275\u0275elementStart(0, "div", 1), e.\u0275\u0275template(1, B, 2, 1, "ng-container", 3)(2, I, 1, 0, "ng-container", 2), e.\u0275\u0275elementEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(n.cx("title")), e.\u0275\u0275property("pBind", n.ptm("title")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.header && !n._titleTemplate && !n.titleTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", n.titleTemplate || n._titleTemplate);
} }
function S(t, o) { if (t & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275text(1), e.\u0275\u0275elementContainerEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.subheader);
} }
function D(t, o) { t & 1 && e.\u0275\u0275elementContainer(0); }
function k(t, o) { if (t & 1 && (e.\u0275\u0275elementStart(0, "div", 1), e.\u0275\u0275template(1, S, 2, 1, "ng-container", 3)(2, D, 1, 0, "ng-container", 2), e.\u0275\u0275elementEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(n.cx("subtitle")), e.\u0275\u0275property("pBind", n.ptm("subtitle")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.subheader && !n._subtitleTemplate && !n.subtitleTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", n.subtitleTemplate || n._subtitleTemplate);
} }
function N(t, o) { t & 1 && e.\u0275\u0275elementContainer(0); }
function j(t, o) { t & 1 && e.\u0275\u0275elementContainer(0); }
function Q(t, o) { if (t & 1 && (e.\u0275\u0275elementStart(0, "div", 1), e.\u0275\u0275projection(1, 2), e.\u0275\u0275template(2, j, 1, 0, "ng-container", 2), e.\u0275\u0275elementEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(n.cx("footer")), e.\u0275\u0275property("pBind", n.ptm("footer")), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", n.footerTemplate || n._footerTemplate);
} }
var G = `
    ${u}

    .p-card {
        display: block;
    }
`, J = { root: "p-card p-component", header: "p-card-header", body: "p-card-body", caption: "p-card-caption", title: "p-card-title", subtitle: "p-card-subtitle", content: "p-card-content", footer: "p-card-footer" }, _ = (() => { class t extends z {
    name = "card";
    style = G;
    classes = J;
    static \u0275fac = (() => { let n; return function (i) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), K = (function (t) { return t.root = "p-card", t.header = "p-card-header", t.body = "p-card-body", t.caption = "p-card-caption", t.title = "p-card-title", t.subtitle = "p-card-subtitle", t.content = "p-card-content", t.footer = "p-card-footer", t; })(K || {}), y = new q("CARD_INSTANCE"), L = (() => { class t extends P {
    $pcCard = c(y, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = c($, { self: !0 });
    _componentStyle = c(_);
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    header;
    subheader;
    set style(n) { f(this._style(), n) || (this._style.set(n), this.el?.nativeElement && n && Object.keys(n).forEach(r => { this.el.nativeElement.style[r] = n[r]; })); }
    get style() { return this._style(); }
    styleClass;
    headerFacet;
    footerFacet;
    headerTemplate;
    titleTemplate;
    subtitleTemplate;
    contentTemplate;
    footerTemplate;
    _headerTemplate;
    _titleTemplate;
    _subtitleTemplate;
    _contentTemplate;
    _footerTemplate;
    _style = w(null);
    getBlockableElement() { return this.el.nativeElement.children[0]; }
    templates;
    onAfterContentInit() { this.templates.forEach(n => { switch (n.getType()) {
        case "header":
            this._headerTemplate = n.template;
            break;
        case "title":
            this._titleTemplate = n.template;
            break;
        case "subtitle":
            this._subtitleTemplate = n.template;
            break;
        case "content":
            this._contentTemplate = n.template;
            break;
        case "footer":
            this._footerTemplate = n.template;
            break;
        default:
            this._contentTemplate = n.template;
            break;
    } }); }
    static \u0275fac = (() => { let n; return function (i) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["p-card"]], contentQueries: function (r, i, l) { if (r & 1 && e.\u0275\u0275contentQuery(l, A, 5)(l, O, 5)(l, h, 4)(l, T, 4)(l, g, 4)(l, b, 4)(l, v, 4)(l, H, 4), r & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (i.headerFacet = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (i.footerFacet = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (i.headerTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (i.titleTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (i.subtitleTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (i.contentTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (i.footerTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (i.templates = a);
        } }, hostVars: 4, hostBindings: function (r, i) { r & 2 && (e.\u0275\u0275styleMap(i._style()), e.\u0275\u0275classMap(i.cn(i.cx("root"), i.styleClass))); }, inputs: { header: "header", subheader: "subheader", style: "style", styleClass: "styleClass" }, features: [e.\u0275\u0275ProvidersFeature([_, { provide: y, useExisting: t }, { provide: V, useExisting: t }]), e.\u0275\u0275HostDirectivesFeature([s.Bind]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: E, decls: 8, vars: 11, consts: [[3, "pBind", "class", 4, "ngIf"], [3, "pBind"], [4, "ngTemplateOutlet"], [4, "ngIf"]], template: function (r, i) { r & 1 && (e.\u0275\u0275projectionDef(C), e.\u0275\u0275template(0, x, 3, 4, "div", 0), e.\u0275\u0275elementStart(1, "div", 1), e.\u0275\u0275template(2, F, 3, 5, "div", 0)(3, k, 3, 5, "div", 0), e.\u0275\u0275elementStart(4, "div", 1), e.\u0275\u0275projection(5), e.\u0275\u0275template(6, N, 1, 0, "ng-container", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(7, Q, 3, 4, "div", 0), e.\u0275\u0275elementEnd()), r & 2 && (e.\u0275\u0275property("ngIf", i.headerFacet || i.headerTemplate || i._headerTemplate), e.\u0275\u0275advance(), e.\u0275\u0275classMap(i.cx("body")), e.\u0275\u0275property("pBind", i.ptm("body")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.header || i.titleTemplate || i._titleTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.subheader || i.subtitleTemplate || i._subtitleTemplate), e.\u0275\u0275advance(), e.\u0275\u0275classMap(i.cx("content")), e.\u0275\u0275property("pBind", i.ptm("content")), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", i.contentTemplate || i._contentTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.footerFacet || i.footerTemplate || i._footerTemplate)); }, dependencies: [R, p.NgIf, p.NgTemplateOutlet, d, m, s.Bind], encapsulation: 2, changeDetection: 0 });
} return t; })(), me = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [L, d, m, d, m] });
} return t; })();
export { L as Card, K as CardClasses, me as CardModule, _ as CardStyle };
