(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,888,660];
exports.modules = {

/***/ 9850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/index.tsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(9259);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_app.js
var _app = __webpack_require__(2624);
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Footer.tsx + 1 modules
var Footer = __webpack_require__(7125);
// EXTERNAL MODULE: ./src/components/Header/Header.tsx + 1 modules
var Header = __webpack_require__(5557);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/api-request.ts
var api_request = __webpack_require__(3545);
;// CONCATENATED MODULE: ./src/components/New.tsx




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
        return api_request/* URL_SERVER */.$s + direc;
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: JSON.stringify(props) === "{}" ? /*#__PURE__*/ jsx_runtime.jsx("p", {
            children: "Chưa c\xf3 b\xe0i viết n\xe0o"
        }) : props.data.slice(0, 6).map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "box-new",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                    className: "new",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: `${item.tenDanhMuc}/${item.slug}`,
                            title: item.time,
                            className: "image",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: UrlImage(item.image),
                                    alt: item.description
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "info",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `${item.tenDanhMuc}/${item.slug}`,
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "time",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("time", {
                                            dateTime: item.time,
                                            children: formatdate(item.dateCreated)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
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
/* harmony default export */ const components_New = (New);

;// CONCATENATED MODULE: ./public/assets/images/mainvisual/img1.jpg
/* harmony default export */ const img1 = ({"src":"/_next/static/media/img1.bec4e741.jpg","height":900,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAlBY//8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDAAQTUnH/2gAIAQEAAT8AlswpdYHUQMV4hRSQQe/uf//EABkRAAMAAwAAAAAAAAAAAAAAAAECAwAEEf/aAAgBAgEBPwDYq8SgRuArn//EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMEwf/aAAgBAwEBPwDLRVoRmtQMQ3J//9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/assets/images/mainvisual/img2.webp
/* harmony default export */ const img2 = ({"src":"/_next/static/media/img2.3811d1ed.webp","height":1080,"width":1920,"blurDataURL":"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACQAQCdASoIAAUAAkA4JZwAApplHeAA/thSuPMvRnvqUHs1C0vvkbeyUTXfsWsBSS8bxcAA","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/assets/images/mainvisual/img3.webp
/* harmony default export */ const img3 = ({"src":"/_next/static/media/img3.456d49c4.webp","height":450,"width":800,"blurDataURL":"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAkA4JZACdAD0jO9gAAD+/HQLHBxgOxFgPNXraofXzaT2PBkfC5q/RdlcvYvNAJ4hIAA=","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Mainvisual.tsx







const Mainvisual = ()=>{
    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "c-mainvisual",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_slick_default()), {
                ...settings,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: img1,
                            alt: "",
                            quality: 80,
                            unoptimized: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: img3,
                            alt: "",
                            quality: 80,
                            unoptimized: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: img2,
                            alt: "",
                            quality: 80,
                            unoptimized: true
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Mainvisual = (Mainvisual);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
;// CONCATENATED MODULE: external "react-bootstrap/Modal"
const Modal_namespaceObject = require("react-bootstrap/Modal");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Button"
const Button_namespaceObject = require("react-bootstrap/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Form"
const Form_namespaceObject = require("react-bootstrap/Form");
;// CONCATENATED MODULE: ./src/components/Tabs.jsx






function convertTime(timestamp) {
    // Chuỗi thời gian ban đầu
    // const timestamp = "2023-09-25T05:16:32.000Z";
    // Chuyển chuỗi thành đối tượng Date
    const date = new Date(timestamp);
    // Tính thời gian hiện tại
    const currentTime = new Date();
    // Tính khoảng thời gian giữa currentTime và date (đơn vị là mili giây)
    const timeDifference = currentTime - date;
    // Chuyển khoảng thời gian sang số phút
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    // Xử lý hiển thị kết quả
    if (minutesDifference < 60) {
        return `${minutesDifference} phút trước`;
    } else if (minutesDifference < 60 * 24) {
        const hoursDifference = Math.floor(minutesDifference / 60);
        return `${hoursDifference} giờ trước`;
    } else {
        const daysDifference = Math.floor(minutesDifference / (60 * 24));
        return `${daysDifference} ngày trước`;
    }
}
function SapXep(rss) {
    rss.sort((a, b)=>{
        // Chuyển đổi các chuỗi ngày sang đối tượng Date
        let dateA = new Date(a.isoDate);
        let dateB = new Date(b.isoDate);
        // Lấy số mili giây từ ngày 01/01/1970 đến ngày hiện tại
        let timeA = dateA.getTime();
        let timeB = dateB.getTime();
        // Trừ hai số mili giây này để lấy sự khác biệt giữa hai ngày
        // Nếu muốn sắp xếp theo thời gian cũ nhất, đổi chỗ a và b
        return timeB - timeA;
    });
}
const Tabs = ({ rssNew, phantich })=>{
    const [activeTab, setActiveTab] = (0,external_react_.useState)("tin-nhanh");
    const [data, setData] = (0,external_react_.useState)([]);
    const [title, setTitle] = (0,external_react_.useState)("");
    const [content, setContent] = (0,external_react_.useState)("");
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const handleShowModal = (content, title)=>()=>{
            // let text = e.target.textContent;
            // let _content = e.target.data("content")
            setTitle(title);
            setContent(content);
            setShowModal(true);
        };
    const handleCloseModal = ()=>{
        setShowModal(false);
    };
    const openCity = (cityName)=>{
        setActiveTab(cityName);
    };
    (0,external_react_.useEffect)(()=>{
        SapXep(rssNew);
        setData(rssNew);
        console.log(rssNew, "rssNew");
    }, [
        rssNew
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "multi-tab",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "tab",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: `tablinks ${activeTab === "tin-nhanh" ? "active" : ""}`,
                            onClick: ()=>openCity("tin-nhanh"),
                            children: "Tin nhanh 1"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        id: "tin-nhanh",
                        className: `tabcontent ${activeTab === "tin-nhanh" ? "active" : ""}`,
                        children: data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: convertTime(item.isoDate)
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        onClick: handleShowModal(item["content:encodedSnippet"], item.title),
                                        children: item.title
                                    })
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        id: "phan-tich",
                        className: `tabcontent ${activeTab === "phan-tich" ? "active" : ""}`,
                        children: phantich.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: convertTime(item.isoDate)
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        "data-content": item.title,
                                        onClick: handleShowModal,
                                        children: item.title
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Modal_default()), {
                show: showModal,
                onHide: handleCloseModal,
                id: "model_new",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Modal_default()).Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ jsx_runtime.jsx((Modal_default()).Title, {
                            children: title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Modal_default()).Body, {
                        children: content
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Modal_default()).Footer, {
                        children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                            variant: "secondary",
                            onClick: handleCloseModal,
                            children: "Đ\xf3ng"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Tabs = (Tabs);

// EXTERNAL MODULE: ./src/components/related-broker.tsx
var related_broker = __webpack_require__(3651);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(1598);
;// CONCATENATED MODULE: ./src/components/Slide.tsx






const Slide = ({ news })=>{
    // let news = [
    //   {
    //     id: 1,
    //     title:
    //       "Tóm tắt livestream 17/09: Lãi suất của FED khiến thị trường bùng nổ như thế nào?",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều
    //       trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM
    //       ĐỂ HIỂU VÌ SAO…`,
    //   },
    //   {
    //     id: 2,
    //     title: "ECB tăng lãi suất lên mức kỷ lục",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Ngân hàng Trung ương châu Âu (ECB) đã công bố đợt tăng lãi suất lần thứ 10 liên tiếp. Cụ thể, ECB đã tăng 25 điểm cơ bản của 3…`,
    //   },
    //   {
    //     id: 3,
    //     title: "Doanh thu xuất khẩu dầu của Nga tăng vọt nhờ giá tăng",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Cơ quan Năng lượng Quốc tế (IEA) cho biết, doanh thu xuất khẩu dầu của Nga đã tăng lên 17,1 tỷ USD trong tháng 8, tăng 1,8 tỷ USD so…`,
    //   },
    //   {
    //     id: 4,
    //     title: "Đô la Mỹ tăng khi kỳ vọng của FED không thay đổi sau dữ liệu CPI",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Chỉ số đô la Mỹ đạt mức cao hơn vào thứ Tư, tăng 0,19% lên 104,79, sau khi dữ liệu kinh tế Mỹ cho thấy lạm phát tăng trong tháng…`,
    //   },
    //   {
    //     id: 5,
    //     title:
    //       "Tóm tắt livestream 13/09: Nhận định thị trường sau tin CPI tháng 8",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM ĐỂ HIỂU VÌ SAO…`,
    //   },
    //   {
    //     id: 6,
    //     title:
    //       "Tóm tắt livestream 17/09: Lãi suất của FED khiến thị trường bùng nổ như thế nào?",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều
    //       trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM
    //       ĐỂ HIỂU VÌ SAO…`,
    //   },
    //   {
    //     id: 7,
    //     title: "FED sẽ giữ nguyên lãi suất trong cuộc họp tới? (20/9/2023)",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Trong một cuộc thăm dò của Reuters, các Nhà kinh tế cho biết, Cục Dự trữ Liên bang sẽ giữ nguyên lãi suất chuẩn qua đêm vào cuối cuộc họp…`,
    //   },
    //   {
    //     id: 8,
    //     title:
    //       "Tóm tắt livestream 17/09: Lãi suất của FED khiến thị trường bùng nổ như thế nào?",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều
    //       trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM
    //       ĐỂ HIỂU VÌ SAO…`,
    //   },
    //   {
    //     id: 9,
    //     title: "ECB tăng lãi suất lên mức kỷ lục",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Ngân hàng Trung ương châu Âu (ECB) đã công bố đợt tăng lãi suất lần thứ 10 liên tiếp. Cụ thể, ECB đã tăng 25 điểm cơ bản của 3…`,
    //   },
    //   {
    //     id: 10,
    //     title: "Doanh thu xuất khẩu dầu của Nga tăng vọt nhờ giá tăng",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Cơ quan Năng lượng Quốc tế (IEA) cho biết, doanh thu xuất khẩu dầu của Nga đã tăng lên 17,1 tỷ USD trong tháng 8, tăng 1,8 tỷ USD so…`,
    //   },
    //   {
    //     id: 11,
    //     title: "Đô la Mỹ tăng khi kỳ vọng của FED không thay đổi sau dữ liệu CPI",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Chỉ số đô la Mỹ đạt mức cao hơn vào thứ Tư, tăng 0,19% lên 104,79, sau khi dữ liệu kinh tế Mỹ cho thấy lạm phát tăng trong tháng…`,
    //   },
    //   {
    //     id: 12,
    //     title:
    //       "Tóm tắt livestream 13/09: Nhận định thị trường sau tin CPI tháng 8",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM ĐỂ HIỂU VÌ SAO…`,
    //   },
    //   {
    //     id: 13,
    //     title:
    //       "Tóm tắt livestream 17/09: Lãi suất của FED khiến thị trường bùng nổ như thế nào?",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều
    //       trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM
    //       ĐỂ HIỂU VÌ SAO…`,
    //   },
    //   {
    //     id: 14,
    //     title: "FED sẽ giữ nguyên lãi suất trong cuộc họp tới? (20/9/2023)",
    //     image: img,
    //     url: "/tom-tat-livestream",
    //     time: "2023-09-18T09:38:49+07:00",
    //     desc: `
    //       Trong một cuộc thăm dò của Reuters, các Nhà kinh tế cho biết, Cục Dự trữ Liên bang sẽ giữ nguyên lãi suất chuẩn qua đêm vào cuối cuộc họp…`,
    //   },
    // ];
    function formatdate(datetime) {
        datetime = new Date(datetime);
        let day = String(datetime.getDate()).padStart(2, "0");
        let month = String(datetime.getMonth() + 1).padStart(2, "0"); // Month is zero-based
        let year = datetime.getFullYear();
        let formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    function UrlImage(direc) {
        return api_request/* URL_SERVER */.$s + direc;
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
            ...settings,
            children: news.slice(0, 6).map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "box-new",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                        className: "new",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: item.slug,
                                title: item.time,
                                className: "image",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: "320",
                                        height: "200",
                                        src: item.image,
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.slug,
                                            children: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "desc",
                                        children: item.description
                                    })
                                ]
                            })
                        ]
                    })
                }, index))
        })
    });
};
/* harmony default export */ const components_Slide = (Slide);

;// CONCATENATED MODULE: ./public/assets/images/icon/icon-chat-luong.png
/* harmony default export */ const icon_chat_luong = ({"src":"/_next/static/media/icon-chat-luong.7ba8d9a4.png","height":330,"width":294,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA4ElEQVR42mOAgb8dNrP+zkhb8rfTfjZCMIhB5G9/4K6/c/Ke/+vz/fh3VubLvxOC9v4NYxBj+NuiH/Z3Tu7L//kM3//tXvz/38LyH/+mxLwDmhDF8HdC8Ox/PR4v/h5c/f/v//+//107+f9fs/rbv5MiFjD8bVK1/jsz4+a/dX1v/q1o+f9vdvY7IP/u32ZNO4Z/ZQyu/9rN//+blvT6X3/Am78z09/+a7f8DxT3ZPjbILrkXw3Dn7+N8nV/ZqTF/W2UrgHyf/9tEFnJ8KteUOhPo7wDAxL406jg8KteQBgAm/V7E+He5k8AAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: external "rss-parser"
const external_rss_parser_namespaceObject = require("rss-parser");
var external_rss_parser_default = /*#__PURE__*/__webpack_require__.n(external_rss_parser_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/rss-news.ts

const FEEDS = [
    {
        slug: "vg",
        title: "VG",
        url: "https://www.vg.no/rss/feed"
    },
    {
        slug: "",
        title: "NRK Topp Saker",
        url: "https://vneconomy.vn/tai-chinh.rss" //"https://vn.investing.com/rss/news.rss",
    }
];
async function getFeed(feedUrl) {
    const parser = new (external_rss_parser_default())();
    const feed = await parser.parseURL(feedUrl);
    return feed;
}

// EXTERNAL MODULE: ./src/css/style.css
var style = __webpack_require__(7421);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/pages/index.tsx
/* __next_internal_client_entry_do_not_use__ getStaticProps,default auto */ 

















async function getStaticProps() {
    const feed = FEEDS.find((feed)=>feed.slug === "");
    console.log(feed, "feed");
    if (!feed) return;
    const detailedFeed = await getFeed(feed.url);
    return {
        props: {
            feed,
            items: detailedFeed.items
        },
        revalidate: 1
    };
}
const Page = ({ items })=>{
    const [postTinTuc, setPostTinTuc] = (0,external_react_.useState)([]);
    const [postKienThuc, setPostKienThuc] = (0,external_react_.useState)([]);
    const [postPhanTich, setPostPhanTich] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
        const apiUrlCategory = `${api_request/* API_URL */.T5}/Post/Get?action=get&slug=tin-tuc`;
        const apiUrlKienThuc = `${api_request/* API_URL */.T5}/Post/Get?action=get&slug=kien-thuc`;
        const apiUrlPhanTich = `${api_request/* API_URL */.T5}/Post/Get?action=get&slug=phan-tich`;
        // Sử dụng Axios để gửi yêu cầu GET đến API endpoint
        external_axios_default().get(apiUrlCategory).then((response)=>{
            setPostTinTuc(response.data);
        }).catch((error)=>{
            // Xử lý lỗi (nếu có)
            console.error("Error fetching data: ", error);
        });
        external_axios_default().get(apiUrlKienThuc).then((response)=>{
            setPostKienThuc(response.data);
        }).catch((error)=>{
            // Xử lý lỗi (nếu có)
            console.error("Error fetching data: ", error);
        });
        external_axios_default().get(apiUrlPhanTich).then((response)=>{
            setPostPhanTich(response.data);
        }).catch((error)=>{
            // Xử lý lỗi (nếu có)
            console.error("Error fetching data: ", error);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(components_Mainvisual, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "l-container--1",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "layout",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "slide",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(components_Slide, {
                                                        news: postPhanTich
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "tin-nhanh",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(components_Tabs, {
                                                        rssNew: items,
                                                        phantich: postPhanTich
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "san-uy-tin",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "heading",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: icon_chat_luong,
                                                            alt: "",
                                                            width: 30,
                                                            height: 30,
                                                            quality: 80,
                                                            unoptimized: true
                                                        }),
                                                        " Top s\xe0n uy t\xedn"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(related_broker/* default */.Z, {})
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "c-heading",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/bai-viet-moi-nhat",
                                                    children: "B\xe0i viết mới nhất"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "xem-them",
                                                href: "/bai-viet-moi-nhat",
                                                children: "Xem th\xeam"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "list-news",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_New, {
                                            data: postTinTuc,
                                            slug: ""
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "c-heading",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/kien-thuc",
                                                    children: "Kiến thức cơ bản"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "xem-them",
                                                href: "/kien-thuc",
                                                children: "Xem th\xeam"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "list-news",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_New, {
                                            data: postKienThuc,
                                            slug: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const pages = (Page);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: pages_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 5368:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [259,624,493,947,769], () => (__webpack_exec__(9850)));
module.exports = __webpack_exports__;

})();