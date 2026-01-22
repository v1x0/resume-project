function p(e) { return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string"; }
function g(e, d = {}) { if (p(e)) {
    let o = (t, n) => { var l, c; let h = (l = e?.$attrs) != null && l[t] ? [(c = e?.$attrs) == null ? void 0 : c[t]] : []; return [n].flat().reduce((r, i) => { if (i != null) {
        let u = typeof i;
        if (u === "string" || u === "number")
            r.push(i);
        else if (u === "object") {
            let f = Array.isArray(i) ? o(t, i) : Object.entries(i).map(([a, s]) => t === "style" && (s || s === 0) ? `${a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${s}` : s ? a : void 0);
            r = f.length ? r.concat(f.filter(a => !!a)) : r;
        }
    } return r; }, h); };
    Object.entries(d).forEach(([t, n]) => { if (n != null) {
        let l = t.match(/^on(.+)/);
        l ? e.addEventListener(l[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? g(e, n) : (n = t === "class" ? [...new Set(o("class", n))].join(" ").trim() : t === "style" ? o("style", n).join(";").trim() : n, (e.$attrs = e.$attrs || {}) && (e.$attrs[t] = n), e.setAttribute(t, n));
    } });
} }
function y(e, d = "", o) { p(e) && o !== null && o !== void 0 && e.setAttribute(d, o); }
export { g as a, y as b };
