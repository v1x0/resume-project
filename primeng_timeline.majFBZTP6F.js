import "@nf-internal/chunk-RNMDN42R";
export * from "primeng/types/timeline";
import * as p from "@angular/common";
import { CommonModule as E } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as w, inject as m } from "@angular/core";
import { SharedModule as d, PrimeTemplate as B } from "primeng/api";
import { BaseComponent as F, PARENT_INSTANCE as O } from "primeng/basecomponent";
import * as g from "primeng/bind";
import { Bind as v } from "primeng/bind";
var s = `
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;
import { BaseStyle as S } from "primeng/base";
var h = ["content"], _ = ["opposite"], x = ["marker"], c = t => ({ $implicit: t });
function y(t, l) { t & 1 && e.\u0275\u0275elementContainer(0); }
function T(t, l) { t & 1 && e.\u0275\u0275elementContainer(0); }
function k(t, l) { if (t & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, T, 1, 0, "ng-container", 3), e.\u0275\u0275elementContainerEnd()), t & 2) {
    let n = e.\u0275\u0275nextContext().$implicit, o = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", o.markerTemplate || o._markerTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, c, n));
} }
function b(t, l) { if (t & 1 && e.\u0275\u0275element(0, "div", 2), t & 2) {
    let n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(n.cx("eventMarker")), e.\u0275\u0275property("pBind", n.ptm("eventMarker")), e.\u0275\u0275attribute("data-p", n.dataP);
} }
function C(t, l) { if (t & 1 && e.\u0275\u0275element(0, "div", 2), t & 2) {
    let n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(n.cx("eventConnector")), e.\u0275\u0275property("pBind", n.ptm("eventConnector")), e.\u0275\u0275attribute("data-p", n.dataP);
} }
function M(t, l) { t & 1 && e.\u0275\u0275elementContainer(0); }
function I(t, l) { if (t & 1 && (e.\u0275\u0275elementStart(0, "div", 2)(1, "div", 2), e.\u0275\u0275template(2, y, 1, 0, "ng-container", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "div", 2), e.\u0275\u0275template(4, k, 2, 4, "ng-container", 4)(5, b, 1, 4, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(7, C, 1, 4, "div", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(8, "div", 2), e.\u0275\u0275template(9, M, 1, 0, "ng-container", 3), e.\u0275\u0275elementEnd()()), t & 2) {
    let n = l.$implicit, o = l.last, r = e.\u0275\u0275reference(6), i = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(i.cx("event")), e.\u0275\u0275property("pBind", i.ptm("event")), e.\u0275\u0275attribute("data-p", i.dataP), e.\u0275\u0275advance(), e.\u0275\u0275classMap(i.cx("eventOpposite")), e.\u0275\u0275property("pBind", i.ptm("eventOpposite")), e.\u0275\u0275attribute("data-p", i.dataP), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i.oppositeTemplate || i._oppositeTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(23, c, n)), e.\u0275\u0275advance(), e.\u0275\u0275classMap(i.cx("eventSeparator")), e.\u0275\u0275property("pBind", i.ptm("eventSeparator")), e.\u0275\u0275attribute("data-p", i.dataP), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.markerTemplate || i._markerTemplate)("ngIfElse", r), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", !o), e.\u0275\u0275advance(), e.\u0275\u0275classMap(i.cx("eventContent")), e.\u0275\u0275property("pBind", i.ptm("eventContent")), e.\u0275\u0275attribute("data-p", i.dataP), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i.contentTemplate || i._contentTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(25, c, n));
} }
var z = { root: ({ instance: t }) => ["p-timeline p-component", "p-timeline-" + t.align, "p-timeline-" + t.layout], event: "p-timeline-event", eventOpposite: "p-timeline-event-opposite", eventSeparator: "p-timeline-event-separator", eventMarker: "p-timeline-event-marker", eventConnector: "p-timeline-event-connector", eventContent: "p-timeline-event-content" }, u = (() => { class t extends S {
    name = "timeline";
    style = s;
    classes = z;
    static \u0275fac = (() => { let n; return function (r) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(r || t); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), N = (function (t) { return t.root = "p-timeline", t.event = "p-timeline-event", t.eventOpposite = "p-timeline-event-opposite", t.eventSeparator = "p-timeline-event-separator", t.eventMarker = "p-timeline-event-marker", t.eventConnector = "p-timeline-event-connector", t.eventContent = "p-timeline-event-content", t; })(N || {}), f = new w("TIMELINE_INSTANCE"), D = (() => { class t extends F {
    bindDirectiveInstance = m(v, { self: !0 });
    $pcTimeline = m(f, { optional: !0, skipSelf: !0 }) ?? void 0;
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    value;
    styleClass;
    align = "left";
    layout = "vertical";
    contentTemplate;
    oppositeTemplate;
    markerTemplate;
    templates;
    _contentTemplate;
    _oppositeTemplate;
    _markerTemplate;
    _componentStyle = m(u);
    getBlockableElement() { return this.el.nativeElement.children[0]; }
    onAfterContentInit() { this.templates.forEach(n => { switch (n.getType()) {
        case "content":
            this._contentTemplate = n.template;
            break;
        case "opposite":
            this._oppositeTemplate = n.template;
            break;
        case "marker":
            this._markerTemplate = n.template;
            break;
    } }); }
    get dataP() { return this.cn({ [this.layout]: this.layout, [this.align]: this.align }); }
    static \u0275fac = (() => { let n; return function (r) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(r || t); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["p-timeline"]], contentQueries: function (o, r, i) { if (o & 1 && e.\u0275\u0275contentQuery(i, h, 4)(i, _, 4)(i, x, 4)(i, B, 4), o & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (r.contentTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (r.oppositeTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (r.markerTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (r.templates = a);
        } }, hostVars: 3, hostBindings: function (o, r) { o & 2 && (e.\u0275\u0275attribute("data-p", r.dataP), e.\u0275\u0275classMap(r.cn(r.cx("root"), r.styleClass))); }, inputs: { value: "value", styleClass: "styleClass", align: "align", layout: "layout" }, features: [e.\u0275\u0275ProvidersFeature([u, { provide: f, useExisting: t }, { provide: O, useExisting: t }]), e.\u0275\u0275HostDirectivesFeature([g.Bind]), e.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["marker", ""], [3, "pBind", "class", 4, "ngFor", "ngForOf"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "pBind", "class", 4, "ngIf"]], template: function (o, r) { o & 1 && e.\u0275\u0275template(0, I, 10, 27, "div", 1), o & 2 && e.\u0275\u0275property("ngForOf", r.value); }, dependencies: [E, p.NgForOf, p.NgIf, p.NgTemplateOutlet, d, v], encapsulation: 2, changeDetection: 0 });
} return t; })(), Y = (() => { class t {
    static \u0275fac = function (o) { return new (o || t); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [D, d, d] });
} return t; })();
export { D as Timeline, N as TimelineClasses, Y as TimelineModule, u as TimelineStyle };
