import "@nf-internal/chunk-RNMDN42R";
export * from "primeng/types/chip";
import * as a from "@angular/common";
import { CommonModule as S } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as P, inject as p, EventEmitter as m, booleanAttribute as _ } from "@angular/core";
import { TranslationKeys as A, SharedModule as l, PrimeTemplate as D } from "primeng/api";
import { BaseComponent as N, PARENT_INSTANCE as j } from "primeng/basecomponent";
import * as u from "primeng/bind";
import { Bind as g } from "primeng/bind";
import { TimesCircleIcon as F } from "primeng/icons";
var d = `
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;
import { BaseStyle as z } from "primeng/base";
var v = ["removeicon"], b = ["*"];
function y(t, c) { if (t & 1) {
    let n = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "img", 4), e.\u0275\u0275listener("error", function (o) { e.\u0275\u0275restoreView(n); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.imageError(o)); }), e.\u0275\u0275elementEnd();
} if (t & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(n.cx("image")), e.\u0275\u0275property("pBind", n.ptm("image"))("src", n.image, e.\u0275\u0275sanitizeUrl)("alt", n.alt);
} }
function x(t, c) { if (t & 1 && e.\u0275\u0275element(0, "span", 6), t & 2) {
    let n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(n.icon), e.\u0275\u0275property("pBind", n.ptm("icon"))("ngClass", n.cx("icon"));
} }
function C(t, c) { if (t & 1 && e.\u0275\u0275template(0, x, 1, 4, "span", 5), t & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngIf", n.icon);
} }
function I(t, c) { if (t & 1 && (e.\u0275\u0275elementStart(0, "div", 7), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(n.cx("label")), e.\u0275\u0275property("pBind", n.ptm("label")), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.label);
} }
function w(t, c) { if (t & 1) {
    let n = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "span", 11), e.\u0275\u0275listener("click", function (o) { e.\u0275\u0275restoreView(n); let r = e.\u0275\u0275nextContext(3); return e.\u0275\u0275resetView(r.close(o)); })("keydown", function (o) { e.\u0275\u0275restoreView(n); let r = e.\u0275\u0275nextContext(3); return e.\u0275\u0275resetView(r.onKeydown(o)); }), e.\u0275\u0275elementEnd();
} if (t & 2) {
    let n = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275classMap(n.removeIcon), e.\u0275\u0275property("pBind", n.ptm("removeIcon"))("ngClass", n.cx("removeIcon")), e.\u0275\u0275attribute("tabindex", n.disabled ? -1 : 0)("aria-label", n.removeAriaLabel);
} }
function T(t, c) { if (t & 1) {
    let n = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(0, "svg", 12), e.\u0275\u0275listener("click", function (o) { e.\u0275\u0275restoreView(n); let r = e.\u0275\u0275nextContext(3); return e.\u0275\u0275resetView(r.close(o)); })("keydown", function (o) { e.\u0275\u0275restoreView(n); let r = e.\u0275\u0275nextContext(3); return e.\u0275\u0275resetView(r.onKeydown(o)); }), e.\u0275\u0275elementEnd();
} if (t & 2) {
    let n = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275classMap(n.cx("removeIcon")), e.\u0275\u0275property("pBind", n.ptm("removeIcon")), e.\u0275\u0275attribute("tabindex", n.disabled ? -1 : 0)("aria-label", n.removeAriaLabel);
} }
function k(t, c) { if (t & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, w, 1, 6, "span", 9)(2, T, 1, 5, "svg", 10), e.\u0275\u0275elementContainerEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.removeIcon), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !n.removeIcon);
} }
function E(t, c) { }
function B(t, c) { t & 1 && e.\u0275\u0275template(0, E, 0, 0, "ng-template"); }
function V(t, c) { if (t & 1) {
    let n = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "span", 13), e.\u0275\u0275listener("click", function (o) { e.\u0275\u0275restoreView(n); let r = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(r.close(o)); })("keydown", function (o) { e.\u0275\u0275restoreView(n); let r = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(r.onKeydown(o)); }), e.\u0275\u0275template(1, B, 1, 0, null, 14), e.\u0275\u0275elementEnd();
} if (t & 2) {
    let n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(n.cx("removeIcon")), e.\u0275\u0275property("pBind", n.ptm("removeIcon")), e.\u0275\u0275attribute("tabindex", n.disabled ? -1 : 0)("aria-label", n.removeAriaLabel), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", n.removeIconTemplate || n._removeIconTemplate);
} }
function M(t, c) { if (t & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, k, 3, 2, "ng-container", 3)(2, V, 2, 6, "span", 8), e.\u0275\u0275elementContainerEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !n.removeIconTemplate && !n._removeIconTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.removeIconTemplate || n._removeIconTemplate);
} }
var R = { root: ({ instance: t }) => ({ display: !t.visible && "none" }) }, K = { root: ({ instance: t }) => ["p-chip p-component", { "p-disabled": t.disabled }], image: "p-chip-image", icon: "p-chip-icon", label: "p-chip-label", removeIcon: "p-chip-remove-icon" }, f = (() => { class t extends z {
    name = "chip";
    style = d;
    classes = K;
    inlineStyles = R;
    static \u0275fac = (() => { let n; return function (o) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(o || t); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), L = (function (t) { return t.root = "p-chip", t.image = "p-chip-image", t.icon = "p-chip-icon", t.label = "p-chip-label", t.removeIcon = "p-chip-remove-icon", t; })(L || {}), h = new P("CHIP_INSTANCE"), O = (() => { class t extends N {
    $pcChip = p(h, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = p(g, { self: !0 });
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    label;
    icon;
    image;
    alt;
    styleClass;
    disabled = !1;
    removable = !1;
    removeIcon;
    onRemove = new m;
    onImageError = new m;
    visible = !0;
    get removeAriaLabel() { return this.config.getTranslation(A.ARIA).removeLabel; }
    get chipProps() { return this._chipProps; }
    set chipProps(n) { this._chipProps = n, n && typeof n == "object" && Object.entries(n).forEach(([i, o]) => this[`_${i}`] !== o && (this[`_${i}`] = o)); }
    _chipProps;
    _componentStyle = p(f);
    removeIconTemplate;
    templates;
    _removeIconTemplate;
    onAfterContentInit() { this.templates.forEach(n => { switch (n.getType()) {
        case "removeicon":
            this._removeIconTemplate = n.template;
            break;
        default:
            this._removeIconTemplate = n.template;
            break;
    } }); }
    onChanges(n) { if (n.chipProps && n.chipProps.currentValue) {
        let { currentValue: i } = n.chipProps;
        i.label !== void 0 && (this.label = i.label), i.icon !== void 0 && (this.icon = i.icon), i.image !== void 0 && (this.image = i.image), i.alt !== void 0 && (this.alt = i.alt), i.styleClass !== void 0 && (this.styleClass = i.styleClass), i.removable !== void 0 && (this.removable = i.removable), i.removeIcon !== void 0 && (this.removeIcon = i.removeIcon);
    } }
    close(n) { this.visible = !1, this.onRemove.emit(n); }
    onKeydown(n) { (n.key === "Enter" || n.key === "Backspace") && this.close(n); }
    imageError(n) { this.onImageError.emit(n); }
    get dataP() { return this.cn({ removable: this.removable }); }
    static \u0275fac = (() => { let n; return function (o) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(o || t); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["p-chip"]], contentQueries: function (i, o, r) { if (i & 1 && e.\u0275\u0275contentQuery(r, v, 4)(r, D, 4), i & 2) {
            let s;
            e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (o.removeIconTemplate = s.first), e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (o.templates = s);
        } }, hostVars: 6, hostBindings: function (i, o) { i & 2 && (e.\u0275\u0275attribute("aria-label", o.label)("data-p", o.dataP), e.\u0275\u0275styleMap(o.sx("root")), e.\u0275\u0275classMap(o.cn(o.cx("root"), o.styleClass))); }, inputs: { label: "label", icon: "icon", image: "image", alt: "alt", styleClass: "styleClass", disabled: [2, "disabled", "disabled", _], removable: [2, "removable", "removable", _], removeIcon: "removeIcon", chipProps: "chipProps" }, outputs: { onRemove: "onRemove", onImageError: "onImageError" }, features: [e.\u0275\u0275ProvidersFeature([f, { provide: h, useExisting: t }, { provide: j, useExisting: t }]), e.\u0275\u0275HostDirectivesFeature([u.Bind]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: b, decls: 6, vars: 4, consts: [["iconTemplate", ""], [3, "pBind", "class", "src", "alt", "error", 4, "ngIf", "ngIfElse"], [3, "pBind", "class", 4, "ngIf"], [4, "ngIf"], [3, "error", "pBind", "src", "alt"], [3, "pBind", "class", "ngClass", 4, "ngIf"], [3, "pBind", "ngClass"], [3, "pBind"], ["role", "button", 3, "pBind", "class", "click", "keydown", 4, "ngIf"], ["role", "button", 3, "pBind", "class", "ngClass", "click", "keydown", 4, "ngIf"], ["data-p-icon", "times-circle", "role", "button", 3, "pBind", "class", "click", "keydown", 4, "ngIf"], ["role", "button", 3, "click", "keydown", "pBind", "ngClass"], ["data-p-icon", "times-circle", "role", "button", 3, "click", "keydown", "pBind"], ["role", "button", 3, "click", "keydown", "pBind"], [4, "ngTemplateOutlet"]], template: function (i, o) { if (i & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0), e.\u0275\u0275template(1, y, 1, 5, "img", 1)(2, C, 1, 1, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(4, I, 2, 4, "div", 2)(5, M, 3, 2, "ng-container", 3)), i & 2) {
            let r = e.\u0275\u0275reference(3);
            e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.image)("ngIfElse", r), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", o.label), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.removable);
        } }, dependencies: [S, a.NgClass, a.NgIf, a.NgTemplateOutlet, F, l, g], encapsulation: 2, changeDetection: 0 });
} return t; })(), ae = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [O, l, l] });
} return t; })();
export { O as Chip, L as ChipClasses, ae as ChipModule, f as ChipStyle };
