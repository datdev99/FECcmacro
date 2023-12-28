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