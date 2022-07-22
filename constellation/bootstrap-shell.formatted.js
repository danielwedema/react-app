const setC11nCookie860 = (e,o,t)=>{
    o && 0 !== o.length || console.error("bootstrap-shell.setC11nCookie860() missing or zero length token");
    const n = e.lastIndexOf("/", e.length - 2)
      , i = `${e.substring(0, n)}/v860/${t}/setc11ncookie`;
    let a = new XMLHttpRequest;
    a.open("POST", i, !0),
    a.withCredentials = !0,
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    a.onload = ()=>{}
    ,
    a.send(`token=${o}`)
}
  , rootContainerWithHybrid = {
    type: "RootContainer",
    config: {
        renderingMode: "hybrid"
    },
    children: [{
        type: "HybridViewContainer",
        config: {
            routingInfo: "@ROUTING_INFO",
            name: "primary",
            contextName: "app"
        },
        children: []
    }]
}
  , buildSemanticUrl = (e,o,t,n,i)=>{
    const a = new URLSearchParams(o);
    let r = !1;
    "true" === t && (r = !0);
    let s = null
      , l = null;
    if (e) {
        e.startsWith("/") && (e = e.substring(1));
        const o = e.split("/");
        o.length > 0 && o[0] && (s = o[0]),
        o.length > 1 && o[1] && (l = o[1])
    } else
        r = !1;
    let c = n;
    s && (c = c + "/" + s),
    l && (c = c + "/" + l),
    r && (!a.has("noPortal") && a.append("noPortal", !0),
    l && i && a.append("view", i));
    const C = a.toString();
    return c += C ? `?${C}` : "",
    c
}
;
let containerCount = 0;
const loadView = (e,o,t=[],n,i,a,r)=>{
    const s = r || "mashup" + ++containerCount
      , l = {
        type: "RootContainer",
        config: {
            renderingMode: "portal",
            viewConfig: "@P .viewConfig",
            name: s
        }
    };
    window.PCore.getRuntimeParamsAPI().setRuntimeParams(n),
    constellationCore.loadRootComponent(e, l, t, i, a).then((()=>constellationCore.updateStoreWithUiRoot(o, s)))
}
  , loadPortal = (e,o,t=[],n)=>{
    const i = n || "portal" + ++containerCount
      , a = {
        type: "RootContainer",
        config: {
            viewConfig: "@P .viewConfig",
            renderingMode: "portal",
            skeleton: "LoadingComponent",
            name: i
        }
    };
    t.push(a.config.skeleton),
    constellationCore.loadRootComponent(e, a, t).then((()=>constellationCore.loadPortalView(o, i)))
}
  , loadComponent = (e,o,t)=>constellationCore.loadComponent(o, e, t)
  , loadViewByName = (e,o,t,n,i,a,r,s)=>{
    const l = s || "mashup" + ++containerCount
      , c = {
        type: "RootContainer",
        config: {
            viewConfig: "@P .viewConfig",
            renderingMode: "view",
            name: l
        }
    };
    constellationCore.loadRootComponent(e, c, i, a, r).then((()=>constellationCore.loadViewByName(o, t, n, l)))
}
  , loadMashup = (e,o=!0)=>{
    if (o) {
        const o = document.getElementsByTagName(e)[0] && document.getElementsByTagName(e)[0].parentNode;
        if (o) {
            const e = document.createElement("style");
            e.setAttribute("id", "portal-less-styles"),
            e.innerHTML = "app-root.mashup > .case-view, app-root.mashup > .page-view { min-height: 0px !important; }",
            o.appendChild(e)
        }
    }
    constellationCore.loadRootComponent(e, {
        type: "RootContainer",
        config: {
            renderingMode: "noPortal"
        },
        children: [{
            type: "ViewContainer",
            config: {
                routingInfo: "@ROUTING_INFO",
                name: "primary"
            }
        }]
    }, ["View", "ViewContainer"]),
    window.parent !== window && import(`${constellationCore.PCoreInstance.getAssetLoader().getStaticServerUrl()}constellation-mashup-bridge.js`).then((e=>{
        e.mashup.init({
            resizing: "stretch"
        })
    }
    ))
}
  , loadCase = (e,o,t=[],n,i)=>{
    t.push("HybridViewContainer", "View"),
    constellationCore.loadRootComponent(e, rootContainerWithHybrid, t, n, i).then((()=>constellationCore.getCaseApi().openCase(o, "app", "primary")))
}
  , createCase = (e,o,t=[],n,i)=>{
    t.push("HybridViewContainer", "View"),
    constellationCore.loadRootComponent(e, rootContainerWithHybrid, t, n, i).then((()=>constellationCore.getCaseApi().createCase(o, "app", "primary")))
}
  , loadAssignment = (e,o,t=[],n,i)=>{
    t.push("HybridViewContainer", "View"),
    constellationCore.loadRootComponent(e, rootContainerWithHybrid, t, n, i).then((()=>constellationCore.getCaseApi().openAssignment(o, "app", "primary")))
}
  , initCoreConfig = e=>{
    const {routingInfo: o, actionModel: t, serviceConfig: n, additionalHeaders: i, tokens: a, semanticUrl: r, queryParams: s, noPortal: l, timezone: c, noHistory: C, viewName: p, theme: d, restServerConfig: g, dynamicLoadComponents: m=!0, dynamicSemanticUrl: h=!0, dynamicSetCookie: w=!0, enableRouting: u=!0, locale: f, environmentInfo: y, renderingMode: v="FULL_PORTAL", remoteCaseMapping: S={}} = e
      , {appAlias: P, googleMapKey: R, staticContentServer: A, contextPath: b, messagingService: I=null} = n
      , $ = {
        ...y,
        renderingMode: v
    };
    let U = location.origin
      , H = {};
    if (void 0 !== g && (U = g),
    b && (U = `${U}${b}`),
    P && (U = `${U}/${P}`),
    !0 === h) {
        const e = buildSemanticUrl(r, s, l, U, p);
        !C && e && history.pushState({}, "home", e)
    } else {
        let e = window.location.href;
        e.indexOf("?") > 0 && (e = e.substring(0, e.indexOf("?")),
        history.pushState({}, "home", e)),
        H.dynamicSemanticUrl = !1
    }
    !0 !== m && (H.dynamicLoadComponents = !1);
    let L = null;
    if (P) {
        const e = P.indexOf("/app/");
        L = e >= 0 ? P.substring(e + 1) : P
    }
    if (!0 === w && setC11nCookie860(A, a.C11NB2S, L),
    constellationCore.enableAppRouting(u),
    Object.keys(H).length > 0 && PCore.setBehaviorOverrides(H),
    constellationCore.initStore(),
    d) {
        let e = "object" == typeof d ? d : null;
        if (null === e)
            try {
                e = JSON.parse(d)
            } catch {
                e = {}
            }
        PCore.getEnvironmentInfo().setTheme(e)
    }
    constellationCore.setFetchDefaultHeaders(i);
    const M = {
        ...o,
        domain: `${window.location.protocol}//${window.location.host}`,
        searchParams: window.location.search
    };
    constellationCore.initAppShell(M, t, {
        server: U
    }),
    constellationCore.setAppAlias(L),
    constellationCore.setGoogleMapsAPIKey(R),
    constellationCore.setStaticServerUrl(A, a.C11NB2S),
    constellationCore.PCoreInstance.getLocaleUtils().setTimezone(c),
    PCore.getEnvironmentInfo().setLocale(f),
    PCore.getRemoteCaseUtils().setRemoteCaseMapping(S),
    PCore.getEnvironmentInfo().setEnvironmentInfo($),
    PCore.getMessagingServiceManager().setConnectionConfig({
        messagingService: I
    })
}
  , importConstellationCore = async(e,o)=>{
    const t = o.prerequisite;
    if (t && t.length > 0) {
        const o = t[0]
          , n = e.endsWith("/") ? `${e}prerequisite/${o}` : `${e}/prerequisite/${o}`;
        return import(n).then((o=>{
            window.constellationCore = o,
            constellationCore.setStaticServerUrl(e),
            void 0 !== window.constellationCore.PCoreInstance && (window.PCore = window.constellationCore.PCoreInstance);
            for (let o = 1; o < t.length; o++)
                import(`${e}prerequisite/${t[o]}`).then((e=>{
                    console.log(e)
                }
                ))
        }
        ))
    }
    return null
}
  , importExternals = async e=>{
    const o = constellationCore.PCoreInstance;
    await o.getAssetLoader().loadAssets(e.externals),
    await o.getAssetLoader().loadAssets(e.entry);
    const t = o.getEnvironmentInfo().getLocale();
    if ("en-US" !== t)
        try {
            const e = o.getLocaleUtils().GENERIC_BUNDLE_KEY
              , n = await o.getAssetLoader().getSvcLocale(t, `${e}.json`);
            if (n.ok) {
                const t = await n.json();
                o.getLocaleUtils().setLocaleForRule(t, e)
            }
        } catch (e) {
            console.warn(e)
        }
}
  , importAssetsJson = async e=>{
    let o = (new Date).getTime();
    return fetch(`${e}lib_asset.json?v=${o}`).then((e=>e.json()))
}
  , bootstrap = async e=>{
    const {staticContentServer: o} = e.serviceConfig
      , t = await importAssetsJson(o);
    await importConstellationCore(o, t),
    initCoreConfig(e),
    await importExternals(t)
}
  , getBootstrapConfig = async(e,o)=>fetch(`${e}/api/applicationCustom/v2/data_views/D_pxBootstrapConfig`, {
    method: "GET",
    headers: new Headers({
        Authorization: o
    })
}).then((e=>e.json())).then(r=>({
    ...r,
    pyConfigJSON: r.pyConfigJSON.replaceAll('/application/', '/applicationCustom/')
}))
  , loadRootContainer = (e,o=[],t,n)=>(o.push("HybridViewContainer", "View"),
constellationCore.loadRootComponent(e, rootContainerWithHybrid, o, t, n))
  , bootstrapWithAuthHeader = async(e,o,t=[],n,i)=>{
    const {restServerUrl: a, customRendering: r=!1, onPCoreReadyCallback: s, staticContentServerUrl: l, dynamicSetCookie: c=!1, authInfo: C={}, theme: p={}, renderingMode: d} = e;
    let g, {authorizationHeader: m, appAlias: h} = e;
    if (!m && C.tokenInfo) {
        let e = C.tokenInfo;
        m = `${e.token_type} ${e.access_token}`
    }
    h ? (h = -1 !== h.indexOf("/") ? h : "app/" + h,
    g = await getBootstrapConfig(`${a}/${h}`, m)) : g = await getBootstrapConfig(`${a}`, m);
    const w = JSON.parse(g.pyConfigJSON);
    w.restServerConfig = a,
    w.dynamicSemanticUrl = !1,
    w.dynamicSetCookie = c,
    w.enableRouting = !1,
    w.serviceConfig.contextPath = "",
    w.serviceConfig.appAlias = h,
    w.additionalHeaders = {
        Authorization: m
    },
    w.dynamicLoadComponents = !r,
    w.dynamicSemanticUrl = !r,
    w.noHistory = !0,
    w.theme = p ?? {},
    w.renderingMode = d ?? w.renderingMode;
    const u = l || w.serviceConfig.staticContentServer;
    w.serviceConfig.staticContentServer = u;
    const f = await importAssetsJson(u);
    await importConstellationCore(u, f),
    initCoreConfig(w),
    s && window.PCore.onPCoreReady(s),
    C && "OAuth2.0" === C?.authType && constellationCore.setFetchAuthInfo(C),
    r || (await importExternals(f),
    await loadRootContainer(o, t, n, i))
}
  , initConstellationCore = async e=>{
    const o = await importAssetsJson(e);
    await importConstellationCore(e, o)
}
;
export {bootstrap, loadView, loadPortal, loadComponent, loadMashup, loadViewByName, loadCase, createCase, loadAssignment, bootstrapWithAuthHeader, initConstellationCore};
