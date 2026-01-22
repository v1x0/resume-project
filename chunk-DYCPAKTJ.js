function l(...n) { if (n) {
    let e = [];
    for (let i = 0; i < n.length; i++) {
        let t = n[i];
        if (!t)
            continue;
        let r = typeof t;
        if (r === "string" || r === "number")
            e.push(t);
        else if (r === "object") {
            let c = Array.isArray(t) ? [l(...t)] : Object.entries(t).map(([s, f]) => f ? s : void 0);
            e = c.length ? e.concat(c.filter(s => !!s)) : e;
        }
    }
    return e.join(" ").trim();
} }
export { l as a };
