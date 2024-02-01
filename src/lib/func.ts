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

//Tính thời gian đọc 1 bài viết
export function calculateReadingTime(content:any, wordsPerMinute = 200) {
  // Giả sử một người đọc trung bình đọc khoảng 200 từ mỗi phút
  const wordCount = content.split(/\s+/).length;
  const estimatedTime = Math.ceil(wordCount / wordsPerMinute);

  return estimatedTime;
}

export function replaceSpaceTo_(str:string, i:number) {
  let string = str.replaceAll(" ", "_")
  return string+"_"+i;
}



export  function createMucLuc() {
  if (typeof window !== 'undefined') {
    var Listheadings = $(`.main-content :header`);
    var headings = $(`.main-content :header`);
    Listheadings.each(function(index, element){
        // Tạo giá trị id dựa trên loại thẻ và số thứ tự
        var idValue = "heading-" + (index + 1);

        // Thêm thuộc tính id cho thẻ heading
        $(element).attr("id", idValue);

        // In ra thông báo để kiểm tra
        $(element).attr("id", replaceSpaceTo_($(`#${idValue}`).text(), index));
    });

    let html = ""
    // Duyệt qua mảng các heading và thêm chúng vào danh sách
    for (var i = 0; i < headings.length; i++) {
        html += `
            <li><a href=#${replaceSpaceTo_( $(headings[i]).text(), i )} >${$(headings[i]).text()}</a></li>
        `
    }
    $("#menu").html(html)
  }
}

export function ListBroker() {
  return [
    {
      id: 1,
      logo: '/assets/images/san/prospero.jpg',
      company_name: 'Prospero',
      desc: 'Description 2',
      best: 'Best 1',
      alt: 'Alt 1',
      score: 9.75,
      ranking: 1,
      slug: 'Prospero',
    }, 
    {
      id: 2,
      logo: '/assets/images/san/TMGM.jpg',
      company_name: 'TMGM',
      desc: 'Description 1',
      best: 'Best 1',
      alt: 'Alt 1',
      score: 9.45,
      ranking: 2,
      slug: 'TMGM',
    },
    {
      id: 3,
      logo: '/assets/images/san/IG.jpg',
      company_name: 'IG',
      desc: 'Description 2',
      best: 'Best 1',
      alt: 'Alt 1',
      score: 9.25,
      ranking: 3,
      slug: 'IG',
    }, 
    {
      id: 4,
      logo: '/assets/images/san/Oanda.jpg',
      company_name: 'Oanda',
      desc: 'Description 1',
      best: 'Best 1',
      alt: 'Alt 1',
      score: 8.95,
      ranking: 4,
      slug: 'Oanda',
    },
    {
      id: 5,
      logo: '/assets/images/san/XM.jpg',
      company_name: 'XM',
      desc: 'Description 2',
      best: 'Best 1',
      alt: 'Alt 1',
      score: 8.85,
      ranking: 5,
      slug: 'XM',
    }, 
    {
      id: 6,
      logo: '/assets/images/san/XTB.jpg',
      company_name: 'XTB',
      desc: 'Description 1',
      best: 'Best 1',
      alt: 'Alt 1',
      score: 8.65,
      ranking: 6,
      slug: 'XTB',
    },
    {
      id: 7,
      logo: '/assets/images/san/ATFX.jpg',
      company_name: 'ATFX',
      desc: 'Description 2',
      best: 'Best 1',
      alt: 'Alt 1',
      score: 8.55,
      ranking: 7,
      slug: 'ATFX',
    }, 
    {
      id: 8,
      logo: '/assets/images/san/IC Markets.jpg',
      company_name: 'IC Market',
      desc: 'Description 1',
      best: 'Best 1',
      alt: 'Alt 1',
      score: 8.45,
      ranking: 8,
      slug: 'IC-Market',
    },
  ]
}