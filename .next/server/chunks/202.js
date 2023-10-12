"use strict";
exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $s: () => (/* binding */ URL_SERVER),
/* harmony export */   T5: () => (/* binding */ API_URL)
/* harmony export */ });
/* unused harmony exports apiGetSuperHero, apiRegisterUser, apiLoginUser */

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "https://localhost:7190";
const API_URL = "https://api.ccmacro.com/api";
const URL_SERVER = "https://api.ccmacro.com/";
// export async function api() {
//   return SERVER_ENDPOINT;
// } 
async function handleResponse(response) {
    const contentType = response.headers.get("Content-Type") || "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await response.json() : await response.text();
    if (!response.ok) {
        if (isJson && data.errors !== null) {
            throw new Error(JSON.stringify(data.errors));
        }
        throw new Error(data.message || response.statusText);
    }
    return data;
}
async function apiGetSuperHero() {
    try {
        const response = await axios.get(`${SERVER_ENDPOINT}/api/SuperHero`);
        // Handle the successful response here
        console.log("Data:", response.data);
        return response.data;
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
        throw error; // You can choose to rethrow the error or handle it as needed
    }
}
async function apiRegisterUser(credentials) {
    const response = await fetch(`${SERVER_ENDPOINT}/api/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: credentials
    });
    return handleResponse(response).then((data)=>data.data.user);
}
async function apiLoginUser(credentials) {
    const response = await fetch(`${SERVER_ENDPOINT}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: credentials
    });
    return handleResponse(response).then((data)=>data.token);
}


/***/ }),

/***/ 4081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.cadfda7b.svg","height":176,"width":440,"blurWidth":0,"blurHeight":0});

/***/ })

};
;