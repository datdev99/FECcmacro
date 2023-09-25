import React from "react";
import Slider from "react-slick";
import New from "./New";
import img from "../../public/assets/images/livestream-1709.webp";
import Image from "next/image";
import Link from "next/link";

const Slide = () => {
  let news = [
    {
      id: 1,
      title:
        "Tóm tắt livestream 17/09: Lãi suất của FED khiến thị trường bùng nổ như thế nào?",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều
        trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM
        ĐỂ HIỂU VÌ SAO…`,
    },
    {
      id: 2,
      title: "ECB tăng lãi suất lên mức kỷ lục",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Ngân hàng Trung ương châu Âu (ECB) đã công bố đợt tăng lãi suất lần thứ 10 liên tiếp. Cụ thể, ECB đã tăng 25 điểm cơ bản của 3…`,
    },
    {
      id: 3,
      title: "Doanh thu xuất khẩu dầu của Nga tăng vọt nhờ giá tăng",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Cơ quan Năng lượng Quốc tế (IEA) cho biết, doanh thu xuất khẩu dầu của Nga đã tăng lên 17,1 tỷ USD trong tháng 8, tăng 1,8 tỷ USD so…`,
    },
    {
      id: 4,
      title: "Đô la Mỹ tăng khi kỳ vọng của FED không thay đổi sau dữ liệu CPI",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Chỉ số đô la Mỹ đạt mức cao hơn vào thứ Tư, tăng 0,19% lên 104,79, sau khi dữ liệu kinh tế Mỹ cho thấy lạm phát tăng trong tháng…`,
    },
    {
      id: 5,
      title:
        "Tóm tắt livestream 13/09: Nhận định thị trường sau tin CPI tháng 8",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM ĐỂ HIỂU VÌ SAO…`,
    },
    {
      id: 6,
      title:
        "Tóm tắt livestream 17/09: Lãi suất của FED khiến thị trường bùng nổ như thế nào?",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều
        trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM
        ĐỂ HIỂU VÌ SAO…`,
    },
    {
      id: 7,
      title: "FED sẽ giữ nguyên lãi suất trong cuộc họp tới? (20/9/2023)",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Trong một cuộc thăm dò của Reuters, các Nhà kinh tế cho biết, Cục Dự trữ Liên bang sẽ giữ nguyên lãi suất chuẩn qua đêm vào cuối cuộc họp…`,
    },
    {
      id: 8,
      title:
        "Tóm tắt livestream 17/09: Lãi suất của FED khiến thị trường bùng nổ như thế nào?",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều
        trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM
        ĐỂ HIỂU VÌ SAO…`,
    },
    {
      id: 9,
      title: "ECB tăng lãi suất lên mức kỷ lục",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Ngân hàng Trung ương châu Âu (ECB) đã công bố đợt tăng lãi suất lần thứ 10 liên tiếp. Cụ thể, ECB đã tăng 25 điểm cơ bản của 3…`,
    },
    {
      id: 10,
      title: "Doanh thu xuất khẩu dầu của Nga tăng vọt nhờ giá tăng",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Cơ quan Năng lượng Quốc tế (IEA) cho biết, doanh thu xuất khẩu dầu của Nga đã tăng lên 17,1 tỷ USD trong tháng 8, tăng 1,8 tỷ USD so…`,
    },
    {
      id: 11,
      title: "Đô la Mỹ tăng khi kỳ vọng của FED không thay đổi sau dữ liệu CPI",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Chỉ số đô la Mỹ đạt mức cao hơn vào thứ Tư, tăng 0,19% lên 104,79, sau khi dữ liệu kinh tế Mỹ cho thấy lạm phát tăng trong tháng…`,
    },
    {
      id: 12,
      title:
        "Tóm tắt livestream 13/09: Nhận định thị trường sau tin CPI tháng 8",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM ĐỂ HIỂU VÌ SAO…`,
    },
    {
      id: 13,
      title:
        "Tóm tắt livestream 17/09: Lãi suất của FED khiến thị trường bùng nổ như thế nào?",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Các bạn có thể xem từng cặp đã được chia timestamp, trong nhiều
        trường hợp, QUAN ĐIỂM CÁC AD TRÁI CHIỀU NHAU, NÊN HÃY XEM LIVESTREAM
        ĐỂ HIỂU VÌ SAO…`,
    },
    {
      id: 14,
      title: "FED sẽ giữ nguyên lãi suất trong cuộc họp tới? (20/9/2023)",
      image: img,
      url: "/tom-tat-livestream",
      time: "2023-09-18T09:38:49+07:00",
      desc: `
        Trong một cuộc thăm dò của Reuters, các Nhà kinh tế cho biết, Cục Dự trữ Liên bang sẽ giữ nguyên lãi suất chuẩn qua đêm vào cuối cuộc họp…`,
    },
  ];

  function formatdate(datetime: Date): string {
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
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        {news.slice(0, 6).map((item: any, index) => (
          <div className="box-new" key={index}>
            <article className="new">
              <Link href={item.url} title={item.time} className="image">
                <span>
                  <Image width="320" height="200" src={item.image} alt="" />
                </span>
              </Link>
              <div className="info">
                <h5>
                  <Link href={item.url}>{item.title}</Link>
                </h5>
                <p className="desc">{item.desc}</p>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Slide;
