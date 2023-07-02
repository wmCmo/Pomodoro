(() => { var e = { 650: function (e, t) { !function (e) { "use strict"; var t, n = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, r = 536870912, o = 1073741824, i = new WeakMap, s = function (e, t) { return function (i) { var s = t.get(i), a = void 0 === s ? i.size : s < o ? s + 1 : 0; if (!i.has(a)) return e(i, a); if (i.size < r) { for (; i.has(a);)a = Math.floor(Math.random() * o); return e(i, a) } if (i.size > n) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!"); for (; i.has(a);)a = Math.floor(Math.random() * n); return e(i, a) } }((t = i, function (e, n) { return t.set(e, n), n }), i), a = function (e) { return function (t) { var n = e(t); return t.add(n), n } }(s); e.addUniqueNumber = a, e.generateUniqueNumber = s }(t) } }, t = {}; function n(r) { var o = t[r]; if (void 0 !== o) return o.exports; var i = t[r] = { exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.exports } (() => { "use strict"; var e = n(650); const t = ((t, n) => { let r = null; return () => { if (null !== r) return r; const t = new Blob(['(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error(\'There is no interval scheduled with the given id "\'.concat(t,\'".\'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error(\'The given type "\'.concat(i,\'" is not supported\'));(e=>{const r=t.get(e);if(void 0===r)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error(\'The given method "\'.concat(s.method,\'" is not supported\'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error(\'The given type "\'.concat(d,\'" is not supported\'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();'], { type: "application/javascript; charset=utf-8" }), n = URL.createObjectURL(t); return r = (t => { const n = new Map([[0, () => { }]]), r = new Map([[0, () => { }]]), o = new Map, i = new Worker(t); return i.addEventListener("message", (({ data: e }) => { if (void 0 !== (t = e).method && "call" === t.method) { const { params: { timerId: t, timerType: i } } = e; if ("interval" === i) { const e = n.get(t); if ("number" == typeof e) { const n = o.get(e); if (void 0 === n || n.timerId !== t || n.timerType !== i) throw new Error("The timer is in an undefined state.") } else { if (void 0 === e) throw new Error("The timer is in an undefined state."); e() } } else if ("timeout" === i) { const e = r.get(t); if ("number" == typeof e) { const n = o.get(e); if (void 0 === n || n.timerId !== t || n.timerType !== i) throw new Error("The timer is in an undefined state.") } else { if (void 0 === e) throw new Error("The timer is in an undefined state."); e(), r.delete(t) } } } else { if (!(e => null === e.error && "number" == typeof e.id)(e)) { const { error: { message: t } } = e; throw new Error(t) } { const { id: t } = e, i = o.get(t); if (void 0 === i) throw new Error("The timer is in an undefined state."); const { timerId: s, timerType: a } = i; o.delete(t), "interval" === a ? n.delete(s) : r.delete(s) } } var t })), { clearInterval: t => { const r = (0, e.generateUniqueNumber)(o); o.set(r, { timerId: t, timerType: "interval" }), n.set(t, r), i.postMessage({ id: r, method: "clear", params: { timerId: t, timerType: "interval" } }) }, clearTimeout: t => { const n = (0, e.generateUniqueNumber)(o); o.set(n, { timerId: t, timerType: "timeout" }), r.set(t, n), i.postMessage({ id: n, method: "clear", params: { timerId: t, timerType: "timeout" } }) }, setInterval: (t, r) => { const o = (0, e.generateUniqueNumber)(n); return n.set(o, (() => { t(), "function" == typeof n.get(o) && i.postMessage({ id: null, method: "set", params: { delay: r, now: performance.now(), timerId: o, timerType: "interval" } }) })), i.postMessage({ id: null, method: "set", params: { delay: r, now: performance.now(), timerId: o, timerType: "interval" } }), o }, setTimeout: (t, n) => { const o = (0, e.generateUniqueNumber)(r); return r.set(o, t), i.postMessage({ id: null, method: "set", params: { delay: n, now: performance.now(), timerId: o, timerType: "timeout" } }), o } } })(n), setTimeout((() => URL.revokeObjectURL(n))), r } })(); let r, o = "pomodoro", i = document.getElementsByTagName("button"); const s = document.getElementById("time-button"), a = document.getElementById("timer-min"), d = document.getElementById("timer-sec"); let m = new Audio; m.src = "https://github.com/wmCmo/Pomodoro/raw/Finding-sound/timesup.mp3"; const l = () => { "Start" == s.innerHTML && c() }, c = () => { var e, n; "Start" === s.innerHTML ? (s.innerHTML = "Stop", document.getElementById("message").innerHTML = "Time to work!", n = g, 1e3, r = t().setInterval(n, 1e3)) : (s.innerHTML = "Start", document.getElementById("message").innerHTML = "Click Start and let's work!", e = r, t().clearInterval(e)) }, u = e => { switch ("Stop" == s.innerHTML && c(), a.innerHTML = e, d.innerHTML = "00", e) { case 25: o = "pomodoro", document.getElementById("container").style.backgroundColor = "#d35400"; for (let e = 0; e < i.length; e++)i[e].style.backgroundColor = "#e67e22"; document.getElementById("time-button").style.borderColor = "rgba(230, 126, 34,0.456)"; break; case 5: o = "short-break", document.getElementById("container").style.backgroundColor = "#16a085"; for (let e = 0; e < i.length; e++)i[e].style.backgroundColor = "#1abc9c"; document.getElementById("time-button").style.borderColor = "rgba(26, 188, 156,0.456)"; break; case 15: o = "long-break", document.getElementById("container").style.backgroundColor = "#2980b9"; for (let e = 0; e < i.length; e++)i[e].style.backgroundColor = "#3498db", i[e].style; document.getElementById("time-button").style.borderColor = "rgba(52, 152, 219,0.456)" } }, g = () => { const e = a.innerHTML, t = d.innerHTML; if (0 == e && 0 == t) if ("pomodoro" == o) { const e = document.getElementById("session"); e.innerHTML = Number(e.innerHTML) + 1, e.innerHTML % 2 == 0 ? (m.play(), u(15), l(), g(), document.getElementById("message").innerHTML = "Time to rest!") : (m.play(), u(5), l(), g(), document.getElementById("message").innerHTML = "Time to rest!") } else "short-break" != o && "long-break" != o || (m.play(), u(25), l(), g(), document.getElementById("message").innerHTML = "Time to Work!"); else 0 != e && 0 == t ? (a.innerHTML = a.innerHTML -= 1, e < 10 && (a.innerHTML = "0" + a.innerHTML), d.innerHTML = 59) : (d.innerHTML = d.innerHTML -= 1, t < 11 && (d.innerHTML = "0" + d.innerHTML)) }; document.getElementById("25min").addEventListener("click", (() => u(25))), document.getElementById("5min").addEventListener("click", (() => u(5))), document.getElementById("15min").addEventListener("click", (() => u(15))), document.getElementById("reset").addEventListener("click", (() => { document.getElementById("session").innerHTML = "0", u(25) })), document.getElementById("rewind").addEventListener("click", (() => { u("pomodoro" == o ? "25" : "short-break" == o ? 5 : 15) })), document.getElementById("time-button").addEventListener("click", c), document.getElementById("skip").addEventListener("click", (() => { a.innerHTML = "00", d.innerHTML = "00" })) })() })();