const moment = require('moment');

export function ConvertDate(date:Date) {
    var inputDate = new Date(date);

    // Lấy thông tin ngày, tháng và năm từ đối tượng Date
    var day = inputDate.getDate();
    var month = inputDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    var year = inputDate.getFullYear();
    
    // Định dạng lại ngày thành chuỗi "dd-MM-yyyy"
    var formattedDateStr = day + "-" + month + "-" + year;
    return formattedDateStr;
} //2023-12-27T13:46:05.8827216 => 27-12-2023


export function GetPostIdInString(str:string) {
    const queryString = str;
    const match = queryString.match(/postId=(\d+)/);

    const postId = match ? match[1] : null;
    return postId;
} 

//2023-12-27T11:13:35.8472226 => Cách ngày hiện tại là bao lâu
export function handleMoment(date:Date) {
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