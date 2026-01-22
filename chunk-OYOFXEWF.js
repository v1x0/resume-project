var u = {};
function i(t = "pui_id_") { return Object.hasOwn(u, t) || (u[t] = 0), u[t]++, `${t}${u[t]}`; }
export { i as a };
