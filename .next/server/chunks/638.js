"use strict";
exports.id = 638;
exports.ids = [638];
exports.modules = {

/***/ 6845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416);




const New = (props)=>{
    function formatdate(datetime) {
        datetime = new Date(datetime);
        let day = String(datetime.getDate()).padStart(2, "0");
        let month = String(datetime.getMonth() + 1).padStart(2, "0"); // Month is zero-based
        let year = datetime.getFullYear();
        let formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
    function UrlImage(direc) {
        return _lib_api_request__WEBPACK_IMPORTED_MODULE_3__/* .URL_SERVER */ .$s + direc;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: JSON.stringify(props) === "{}" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Chưa c\xf3 b\xe0i viết n\xe0o"
        }) : props.data.slice(0, 6).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "box-new",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    className: "new",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `${item.tenDanhMuc}/${item.slug}`,
                            title: item.time,
                            className: "image",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: UrlImage(item.image),
                                    alt: item.description
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "info",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `${props.slug}/${item.slug}`,
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "time",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                            dateTime: item.time,
                                            children: formatdate(item.dateCreated)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "desc",
                                    children: item.description
                                })
                            ]
                        })
                    ]
                })
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (New);


/***/ }),

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/prospero.6110688c.png","height":942,"width":942,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42i2OPUvDUBSG7w9SEMFJxELrV0lSm6Y3yY3WFpMWHCq6iAVxUBfBQrVRjJhBShEnEcRVcHLXv3MfL8HlcOC853kf4coQGQSUNxXzGxH7SZN4R1JthHh+gDBHSjXF2UGdl8tVTvsub8Myhz2PqhsiLJPsdSQ/0zleryqMjp0iPDxyikdhsNydWHxli4jZdrFPLtbptHwczxBsM3ZN5+90hqfzNT6uS3znCyzZqnATTd9nxQgO+orP+2XeRxW2WtvU5b9krSEZpym32SM3DxPS/Jk8GzPYs7G8COEFSrfjRAdRpLvdRMdJrAOltMFrV4b6D5EcjSLRXji3AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ })

};
;