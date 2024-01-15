import axios from "axios";
import { API_URL } from "./api-request";
import { getRefreshToken, getToken } from "@/utils/auth";
import $ from "jquery";

const moment = require("moment");

export function ConvertDate(date: Date) {
  var inputDate = new Date(date);

  // Lấy thông tin ngày, tháng và năm từ đối tượng Date
  var day = inputDate.getDate();
  var month = inputDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
  var year = inputDate.getFullYear();

  // Định dạng lại ngày thành chuỗi "dd-MM-yyyy"
  var formattedDateStr = day + "-" + month + "-" + year;
  return formattedDateStr;
} //2023-12-27T13:46:05.8827216 => 27-12-2023

export function GetPostIdInString(str: string) {
  const queryString = str;
  const match = queryString.match(/postId=(\d+)/);

  const postId = match ? match[1] : null;
  return postId;
}

//2023-12-27T11:13:35.8472226 => Cách ngày hiện tại là bao lâu
export function handleMoment(date: Date) {
  // Ngày gửi đi
  const sentDate = moment(date);

  // Thời gian hiện tại
  const currentDate = moment();

  // Tính khoảng cách thời gian
  const duration = moment.duration(currentDate.diff(sentDate));

  // Lấy số lượng ngày, giờ, phút, và giây
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  // Xuất kết quả
  if (days > 7) {
    return Math.floor(days / 7) + " tuần";
  } else if (days >= 1) {
    return days + " ngày";
  } else if (hours >= 1) {
    return hours + " giờ";
  } else if (minutes >= 1) {
    return minutes + " phút";
  } else {
    return seconds + " giây";
  }
}

//Thêm bình luận vào bài viết forum
export function PostComment(objComment:object) {
  // URL của API bạn đang gửi yêu cầu đến
  const apiUrl = `${API_URL}/Comment/Add`;
  const BearerToken = getToken();
  

  let i = 0
  // Thực hiện yêu cầu POST sử dụng Axios
  axios
    .post(apiUrl, objComment, {
      headers: {
        Authorization: `Bearer ${BearerToken}`,
        "Content-Type": "application/json", // Đặt kiểu nếu cần thiết
      },
    })
    .then((response) => {
      // Xử lý kết quả thành công
      // console.log("Response data:", response.data);
      return response.data;
    })
    .catch((error) => {
        console.log("error", error, objComment);
        if(i < 2) {
            i++;
            const DongBo = async () => {
                
                var result = await RefreshToken();
                console.log(result,"chạy 1");
                if (result) {
                    PostComment(objComment);
                }
            }
            DongBo()
          }
    });
}

//refresh token
export async function RefreshToken() {
    
    try {
        const response = await axios.post(`${API_URL}/User/Refresh`, {
            AccessToken: getToken(),
            RefreshToken: getRefreshToken(),
        });
        console.log(response);
  
      localStorage.setItem("Token", response.data.accessToken);
      return true;
    } catch (error) {
      console.error("Error refreshing token:", error);
      return false;
    }
}
// export function RefreshToken() {
//   return new Promise(function (resolve, reject) {
//     $.ajax({
//       type: "POST",
//       url: `${API_URL}/User/Refresh`,
//       data: JSON.stringify({
//         AccessToken: getToken(),
//         RefreshToken: getRefreshToken(),
//       }),
//       contentType: "application/json; charset=utf-8",
//       dataType: "json",
//       success: function (d) {
//         localStorage.setItem("Token", d.accessToken);
//         resolve(true); // Resolve the promise with true
//       },
//       error: function (e) {
//         reject(false); // Reject the promise with false
//         console.log("regggg");
//       },
//     });
//   });
// }
