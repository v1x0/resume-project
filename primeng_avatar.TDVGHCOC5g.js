import "@nf-internal/chunk-RNMDN42R";
export * from "primeng/types/avatar";
import * as o from "@angular/common";
import { CommonModule as y } from "@angular/common";
import * as t from "@angular/core";
import { InjectionToken as I, inject as p, EventEmitter as z } from "@angular/core";
import { SharedModule as s } from "primeng/api";
import { BaseComponent as E, PARENT_INSTANCE as B } from "primeng/basecomponent";
import * as v from "primeng/bind";
import { Bind as d } from "primeng/bind";
var c = `
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;
import { BaseStyle as w } from "primeng/base";
var f = ["*"];
function u(a, r) { if (a & 1 && (t.\u0275\u0275elementStart(0, "span", 3), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), a & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classMap(e.cx("label")), t.\u0275\u0275property("pBind", e.ptm("label")), t.\u0275\u0275attribute("data-p", e.dataP), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.label);
} }
function h(a, r) { if (a & 1 && t.\u0275\u0275element(0, "span", 5), a & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275classMap(e.icon), t.\u0275\u0275property("pBind", e.ptm("icon"))("ngClass", e.cx("icon")), t.\u0275\u0275attribute("data-p", e.dataP);
} }
function x(a, r) { if (a & 1 && t.\u0275\u0275template(0, h, 1, 5, "span", 4), a & 2) {
    let e = t.\u0275\u0275nextContext(), i = t.\u0275\u0275reference(5);
    t.\u0275\u0275property("ngIf", e.icon)("ngIfElse", i);
} }
function _(a, r) { if (a & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "img", 7), t.\u0275\u0275listener("error", function (n) { t.\u0275\u0275restoreView(e); let l = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(l.imageError(n)); }), t.\u0275\u0275elementEnd();
} if (a & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275property("pBind", e.ptm("image"))("src", e.image, t.\u0275\u0275sanitizeUrl), t.\u0275\u0275attribute("aria-label", e.ariaLabel)("data-p", e.dataP);
} }
function b(a, r) { if (a & 1 && t.\u0275\u0275template(0, _, 1, 4, "img", 6), a & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", e.image);
} }
var C = { root: ({ instance: a }) => ["p-avatar p-component", { "p-avatar-image": a.image != null, "p-avatar-circle": a.shape === "circle", "p-avatar-lg": a.size === "large", "p-avatar-xl": a.size === "xlarge" }], label: "p-avatar-label", icon: "p-avatar-icon" }, g = (() => { class a extends w {
    name = "avatar";
    style = c;
    classes = C;
    static \u0275fac = (() => { let e; return function (n) { return (e || (e = t.\u0275\u0275getInheritedFactory(a)))(n || a); }; })();
    static \u0275prov = t.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac });
} return a; })(), T = (function (a) { return a.root = "p-avatar", a.label = "p-avatar-label", a.icon = "p-avatar-icon", a.image = "p-avatar-image", a.circle = "p-avatar-circle", a.large = "p-avatar-lg", a.xlarge = "p-avatar-xl", a; })(T || {}), m = new I("AVATAR_INSTANCE"), A = (() => { class a extends E {
    $pcAvatar = p(m, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = p(d, { self: !0 });
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    label;
    icon;
    image;
    size = "normal";
    shape = "square";
    styleClass;
    ariaLabel;
    ariaLabelledBy;
    onImageError = new z;
    _componentStyle = p(g);
    imageError(e) { this.onImageError.emit(e); }
    get dataP() { return this.cn({ [this.shape]: this.shape, [this.size]: this.size }); }
    static \u0275fac = (() => { let e; return function (n) { return (e || (e = t.\u0275\u0275getInheritedFactory(a)))(n || a); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["p-avatar"]], hostVars: 5, hostBindings: function (i, n) { i & 2 && (t.\u0275\u0275attribute("aria-label", n.ariaLabel)("aria-labelledby", n.ariaLabelledBy)("data-p", n.dataP), t.\u0275\u0275classMap(n.cn(n.cx("root"), n.styleClass))); }, inputs: { label: "label", icon: "icon", image: "image", size: "size", shape: "shape", styleClass: "styleClass", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy" }, outputs: { onImageError: "onImageError" }, features: [t.\u0275\u0275ProvidersFeature([g, { provide: m, useExisting: a }, { provide: B, useExisting: a }]), t.\u0275\u0275HostDirectivesFeature([v.Bind]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: f, decls: 6, vars: 2, consts: [["iconTemplate", ""], ["imageTemplate", ""], [3, "pBind", "class", 4, "ngIf", "ngIfElse"], [3, "pBind"], [3, "pBind", "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "pBind", "ngClass"], [3, "pBind", "src", "error", 4, "ngIf"], [3, "error", "pBind", "src"]], template: function (i, n) { if (i & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0), t.\u0275\u0275template(1, u, 2, 5, "span", 2)(2, x, 1, 2, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor)(4, b, 1, 1, "ng-template", null, 1, t.\u0275\u0275templateRefExtractor)), i & 2) {
            let l = t.\u0275\u0275reference(3);
            t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", n.label)("ngIfElse", l);
        } }, dependencies: [y, o.NgClass, o.NgIf, s, d], encapsulation: 2, changeDetection: 0 });
} return a; })(), $ = (() => { class a {
    static \u0275fac = function (i) { return new (i || a); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: a });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [A, s, s] });
} return a; })();
export { A as Avatar, T as AvatarClasses, $ as AvatarModule, g as AvatarStyle };
