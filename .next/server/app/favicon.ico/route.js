"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=D%3A%5CDat%5CNEXTJS%5CFECcmacro%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!D:\\Dat\\NEXTJS\\FECcmacro\\src\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(1479)));
module.exports = __webpack_exports__;

})();