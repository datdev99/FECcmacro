"use strict";
exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 3718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(2196);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(2050);
// EXTERNAL MODULE: ./src/lib/api-request.ts
var api_request = __webpack_require__(416);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(3258);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/images/logo 1.png
/* harmony default export */ const logo_1 = ({"src":"/_next/static/media/logo 1.f88686ad.png","height":733,"width":1833,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVklEQVR42mMAAekDb5NV5u7f7d4xNw7Ev/noOTsDDORf+cPJsPf18kdvPpl+/PYr+t+/fy5A7AnE+nBF0oc+xOscfr9D//CHWBB/+8NvLEAFLAwMDAwAy8Ap3XLW2IUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// import "../../css/style.css"; // Import file CSS nếu bạn muốn tùy chỉnh giao diện








const MenuItem = ({ item, parentPath = "" })=>{
    const itemPath = `${parentPath}/${item.slug}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: itemPath,
                children: [
                    item.text,
                    item.children.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                        icon: free_solid_svg_icons/* faAngleDown */.gc2
                    })
                ]
            }),
            item.children.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: item.children.map((child)=>/*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                        item: child,
                        parentPath: itemPath
                    }, child.id))
            })
        ]
    });
};
const Page = ()=>{
    const [menuData, setMenuData] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
        const apiUrlCategory = `${api_request/* API_URL */.T5}/Category/GetTreeCategory?action=get&para1=a`;
        // Sử dụng Axios để gửi yêu cầu GET đến API endpoint
        axios/* default */.Z.get(apiUrlCategory).then((response)=>{
            // Xử lý dữ liệu nhận được từ API
            setMenuData(response.data);
        }).catch((error)=>{
            // Xử lý lỗi (nếu có)
            console.error("Error fetching data: ", error);
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "c-header",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "l-container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "c-header__inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "c-header__logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo_1,
                                    width: 160,
                                    height: 60,
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "menu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: menuData.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                        item: item
                                    }, i))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/login",
                                children: "Đăng nhập"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "burger",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "burger__menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "MENU"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Header = (Page);


/***/ })

};
;