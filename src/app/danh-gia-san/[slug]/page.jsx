"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import Post from "@/components/Post";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Related_broker from "@/components/related-broker";

const Page = () => {
  const [title, setTitle] = useState("");
  let { slug } = useParams();
  useEffect(() => {
    setTitle(slug);
  }, []);
  return (
    <div>
      <Header />
      <main className="l-container--1" id="page-review">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/kien-thuc">Đánh giá sàn</a>
            </li>
            <li>{title}</li>
          </ul>
        </div>
        <div className="review-page">
          <div className="review-content">
            <h1 dir="ltr">
              <img
                src="https://lh4.googleusercontent.com/SK_uV8ZR1tB1154BwYMKQ8syYCSqMh6Uq5u9I2oKZtlxfr-UVN9aV15p3J4A8SH0kd0v51rZNTUgzAAV0Rrzg0jxSyJoSWplxMCkoB6k7Hj5h0ETozbodtlSK6hC2aF0HbdeglOh9NNPERzB"
                width={624}
                height={293}
              />
            </h1>
            <h1 dir="ltr">Đánh giá Prospero Markets</h1>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets được thành lập vào năm 2012, tự hào có hơn 300 sản
              phẩm đầu tư theo quy định của ASIC. Công ty cũng mở rộng dịch vụ của
              mình ra ngoài nước Úc đến phần lớn thế giới, cho phép các nhà đầu tư
              cá nhân có thể tiếp cận giao dịch CFD với mức chênh lệch thấp trên
              phần mềm giao dịch đáng tin cậy.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              <img
                src="https://lh6.googleusercontent.com/BS8PAlIG0ih90lucv37Ozi95ZuTFzRJ0_D7RBhbSYGX7chZTPWvGv2UKCkSFtdxGIQaoZ_cVaL9rFHH36w1TPAyKRcfjU_a1it30olVyjbm2FlQPJT3YTz9WrFKt3VoNDRg_Aq67xV4S6cTT"
                width={360}
                height={335}
              />
            </p>
            <h2 dir="ltr">Giao dịch Ngoại hối</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets cung cấp 38 cặp ngoại hối bao gồm các cặp chính,
              cặp phụ và cặp ngoại lai. Spread khá thấp trên tài khoản Standard và
              phí hoa hồng rất cạnh tranh đối với khách hàng VIP.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Giao dịch Chứng khoán</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Những khách hàng muốn giao dịch chứng khoán sẽ hài lòng khi Prospero
              Markets có hơn 100 cổ phiếu của công ty Úc và 95 cổ phiếu Mỹ. Tuy
              nhiên, Prospero Markets cung cấp khả năng tiếp cận nhiều thị trường
              chứng khoán hơn thông qua 11 chỉ số.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Giao dịch CFD</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets cung cấp nhiều loại tài sản CFD ấn tượng, tập trung
              vào cổ phiếu, chỉ số và hợp đồng tương lai. Tổng cộng có hơn 300
              công cụ được cung cấp, trong đó có 58 công cụ dựa trên các sản phẩm
              tương lai. Nhà đầu tư có thể giao dịch với đòn bẩy lên tới 1:400.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">✓ Ưu điểm</h2>
            <ul>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Prospero Markets là thương hiệu đáng tin cậy được quản lý bởi
                  ASIC
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Hỗ trợ nền tảng và ứng dụng MT4
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Đòn bẩy cao lên tới 1:400 cho nhà giao dịch toàn cầu
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Cung cấp tài khoản demo miễn phí
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Social Trading
                </p>
              </li>
            </ul>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">✗ Nhược điểm</h2>
            <ul>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Không có MT5
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Không có tiền điện tử
                </p>
              </li>
            </ul>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets LLC là một nhà môi giới nổi tiếng cung cấp nhiều
              loại công cụ tài chính. Công ty cung cấp một nền tảng an toàn và
              thân thiện với người dùng để các nhà đầu tư cá nhân và tổ chức giao
              dịch ngoại hối, hàng hóa, cổ phiếu và chỉ số. Đánh giá này của
              Prospero Markets sẽ chia sẻ những hiểu biết sâu sắc về nền tảng của
              công ty, cũng như phí, đòn bẩy,...
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Lịch sử &amp; Tổng quan Công ty</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Được thành lập vào năm 2012, Prospero Markets là công ty dịch vụ tài
              chính có trụ sở chính tại Melbourne, Úc và văn phòng tại Sydney.
              Công ty môi giới này được quản lý bởi Ủy ban Chứng khoán và Đầu tư
              Úc (ASIC) và có giấy phép Giấy phép Dịch vụ Tài chính Úc (AFSL).
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Thương hiệu này cung cấp cho các nhà giao dịch ở Úc hơn 300 tài sản
              trên nền tảng và ứng dụng MT4. Prospero Markets cũng là nhà môi giới
              đáng tin cậy cho các nhà giao dịch trên toàn thế giới thông qua hai
              trang web của họ.
            </p>
            <p dir="ltr">
              <img
                src="https://lh4.googleusercontent.com/hQ1_zkmifdxA21HcPYu9PytJdrVv7BLSaV6Le0xRA3ZXx3TQ1fBLJNghkQjdE5Z5RGfrp2ubWPkEwPZW0QcxFIWXc0tBqP4wz0DryFnHBtyI_ThuEsIaUek_RAUU57JeKebPFxI_fAls_Qg_"
                width={624}
                height={353}
              />
            </p>
            <h2 dir="ltr">Nền tảng giao dịch</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets sử dụng MetaTrader 4. Nhà giao dịch có thể tải
              xuống MT4 trên thiết bị máy tính để bàn của họ hoặc sử dụng trình
              giao dịch trên web.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              MT4 là nền tảng giao dịch cá nhân phổ biến nhất thế giới dành cho
              giao dịch ngoại hối. Nó nổi tiếng với dịch vụ xây dựng Expert
              Advisor (EA), cho phép các nhà giao dịch tạo ra các robot và chỉ báo
              giao dịch của riêng họ. MT4 cũng cung cấp:
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <ul>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Giao dịch bằng một cú nhấp chuột
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Lệnh thị trường, dừng và giới hạn
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Biểu đồ trên 9 khung thời gian (M1, M5, M15, M30, H1, H4, D, W1,
                  Mn)
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  24 đối tượng phân tích như Fibonacci và hơn 30 chỉ báo
                </p>
              </li>
            </ul>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Thị trường &amp; Công cụ</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets cung cấp quyền truy cập vào nhiều công cụ tốt, bao
              gồm ngoại hối, kim loại quý, năng lượng, chỉ số chứng khoán và CFD
              trên cổ phiếu.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Các sản phẩm chính:</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <ul>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  38 cặp ngoại hối bao gồm AUD/CAD, EUR/GBP, USD/JPY và AUD/USD
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  11 chỉ số chứng khoán bao gồm UK100, USTEC, HK50 và DE30
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  13 mặt hàng và kim loại bao gồm bạc, vàng, khí đốt tự nhiên,
                  đồng, dầu thô, ngô và lúa mì
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  95 CFD cổ phiếu của Mỹ bao gồm Apple, Coca-Cola, Tesla và Pfizer
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  114 cổ phiếu CFD của Úc bao gồm Computershare Limited, Auckland
                  International Airport Limited, Seek Limited và Woolworths Group
                </p>
              </li>
            </ul>
            <p dir="ltr">
              <img
                src="https://lh6.googleusercontent.com/a9t3pwoOWErdtn75o3gS-Hbe_AFXYKGXdeCI-QVIgzEUd1YZL0g3-AEJuR6bbFq3yGl8fGY9WGyapDAPEG_Z8vazFIY_I9gdOZHzMt0lRp0BBzFtlHuwyDBl_y61uMOw_xpyi-YUUE0xRm67"
                width={624}
                height={352}
              />
            </p>
            <h2 dir="ltr">Phí giao dịch</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets cung cấp mức phí cạnh tranh, đặc biệt với các tài
              khoản giao dịch VIP.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Tài khoản tiêu chuẩn</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Đối với tài khoản tiêu chuẩn, spread từ 0.9 pip. Không có phí hoa
              hồng giao dịch ngoại hối, kim loại, chỉ số, dầu và CFD tương lai. Cổ
              phiếu của Mỹ là 0.04 USD trên mỗi cổ phiếu
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Tài khoản VIP</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Với tài khoản VIP, spread bắt đầu từ 0 pip và phí hoa hồng cạnh
              tranh áp dụng cho hầu hết các tài sản:
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <ul>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Forex: 3 AUD hoặc 2 USD mỗi lot tiêu chuẩn mỗi bên
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Kim loại: 3 AUD hoặc 2 USD mỗi lot tiêu chuẩn mỗi bên
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Dầu: 3 AUD hoặc 2 USD mỗi lot tiêu chuẩn mỗi bên
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Cổ phiếu của Mỹ: 0.04 USD trên mỗi cổ phiếu
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Không có hoa hồng cho giao dịch chỉ số hoặc hợp đồng tương lai
                  trên tài khoản VIP.
                </p>
              </li>
            </ul>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Swap (phí qua đêm)</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Phí swap áp dụng với cả hai loại tài khoản nhưng không cố định và
              phụ thuộc vào tài sản cũng như quy mô của vị thế. Ví dụ: phí swap để
              giữ các vị thế ngoại hối qua đêm sang ngày hôm sau, bạn có thể xem
              phí swap trên nền tảng MT4.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Leverage (đòn bẩy)</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Đòn bẩy cao nhất mà Prospero Markets cung cấp cho khách hàng tại Úc
              là 1:30, phù hợp với quy định của ASIC.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Đối với khách hàng toàn cầu, đòn bẩy tối đa là 1:400 (cho ngoại hối
              và vàng giao ngay). Đòn bẩy đối với kim loại quý dao động từ 1:50
              đến 1:100. Đối với dầu là 1:100, đối với đồng là 1:50 và đối với tất
              cả các mặt hàng khác là 1:20. Cổ phiếu có đòn bẩy tối đa là 1:10.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Phương thức thanh toán</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets hỗ trợ nhiều phương thức thanh toán khác nhau:
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <ul>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Ví điện tử: PayPal, Skrill và POLi.
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  BPAY
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Thẻ tín dụng hoặc thẻ ghi nợ
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Ngân hàng Việt Nam
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Bank wire
                </p>
              </li>
            </ul>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Cách nạp tiền</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Nhà giao dịch sẽ đăng nhập vào cổng khách hàng và chọn mục nạp tiền.
              Sau đó, bạn có thể chọn một trong các phương thức nạp tiền được liệt
              kê ở trên cũng như số tiền.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Bạn sẽ được đưa đến trang web thích hợp, nơi bạn có thể nhập chi
              tiết thanh toán được yêu cầu, chẳng hạn như thông tin thẻ hoặc số
              tham chiếu ngân hàng. Khi việc này hoàn tất, tiền sẽ được thêm vào
              tài khoản của bạn.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Cách rút tiền</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Yêu cầu rút tiền có thể được thực hiện thông qua các kênh thanh toán
              tương tự. Tuy nhiên, yêu cầu có thể mất tới 1 đến 5 ngày làm việc,
              tùy thuộc vào phương thức bạn chọn.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Ứng dụng di động</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets không cung cấp ứng dụng giao dịch di động độc
              quyền. Tuy nhiên, ứng dụng MetaTrader cung cấp tất cả các tính năng
              và chức năng của thiết bị đầu cuối trên máy tính để bàn, với khả
              năng tương thích màn hình nhỏ hơn cho thiết bị điện thoại thông minh
              và máy tính bảng. Điều này cũng bao gồm toàn quyền kiểm soát tài
              khoản, quyền truy cập vào tất cả các loại đơn đặt hàng, thông tin
              giao dịch lịch sử, loại biểu đồ và biểu tượng tương tác.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Ứng dụng di động MT4 chỉ có thể được tải xuống thiết bị Android và
              iOS.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Loại tài khoản</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets cung cấp 2 loại tài khoản: Tiêu chuẩn và VIP.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Tài khoản tiêu chuẩn</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <ul>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Ngoại hối: Spread tối thiểu là 0.9 pip và đòn bẩy tối đa là
                  1:400
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Kim loại: Spread thả nổi và đòn bẩy tối đa là 1:400
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Dầu: Spread tối thiểu đối với Dầu thô Brent là 2.3 pip và đối
                  với Dầu WTI là 2.4 pip. Đòn bẩy tối đa là 1:100
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Chỉ số và hợp đồng tương lai: Spread thả nổi và đòn bẩy tối đa
                  là 1:100
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Cổ phiếu CFD: Chênh lệch thả nổi và đòn bẩy tối đa là 1:10
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Tài khoản tiêu chuẩn cũng được hỗ trợ 1 kèm 1, phân tích thị
                  trường hàng ngày và hàng tuần.
                </p>
              </li>
            </ul>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Tài khoản VIP</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <ul>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Ngoại hối: Spread tối thiểu là 0 pip và đòn bẩy tối đa là 1:400
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Kim loại: Spread từ 1.4 pip đối với Vàng và 1 pip đối với Bạc.
                  Đòn bẩy tối đa là 1:400
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Dầu: Mức chênh lệch tối thiểu đối với Dầu thô Brent là 0.8 pip
                  và đối với Dầu WTI là 0.9 pip. Đòn bẩy tối đa là 1:10
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Chỉ số và hợp đồng tương lai: Spread thả nổi và đòn bẩy tối đa
                  là 1:100
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Cổ phiếu CFD: Chênh lệch thả nổi và đòn bẩy tối đa là 1:10
                </p>
              </li>
              <li dir="ltr" aria-level={1}>
                <p dir="ltr" role="presentation">
                  Tài khoản VIP đi kèm với các dịch vụ tương tự như Tiêu chuẩn,
                  tuy nhiên, khách hàng VIP sẽ được hưởng nhiều dịch vụ đặc quyền.
                </p>
              </li>
            </ul>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Cách đăng ký tài khoản thật</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Để đăng ký tài khoản trực tiếp tại Prospero Markets, nhà giao dịch
              sẽ cần cung cấp tên đầy đủ, số điện thoại và địa chỉ email của họ.
              Sau đó, bạn sẽ được nhắc nhở để cung cấp xác minh KYC, chẳng hạn như
              Căn cươc công dân, hộ chiếu và bảng sao kê ngân hàng được cấp trong
              vòng 90 ngày qua làm bằng chứng về địa chỉ.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Sau khi thông tin này được cung cấp, trạng thái đăng ký của bạn sẽ
              được gửi qua email cho bạn trong vòng 24 giờ, do đó bạn có thể nạp
              tiền và bắt đầu giao dịch trực tuyến.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Cách đăng ký tài khoản demo</h3>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Mở tài khoản demo với thị trường Prospero rất đơn giản. Nhập tên đầy
              đủ, số điện thoại và địa chỉ email của bạn. Sau đó, bạn sẽ được chọn
              chi tiết tài khoản giao dịch của mình. Sau đó, bạn sẽ được cung cấp
              thông tin đăng nhập vào tài khoản demo MT4.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Tài khoản demo là một cách tuyệt vời để các nhà giao dịch làm quen
              với Prospero Markets và nền tảng trước dùng tiền thật để giao dịch.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Thưởng &amp; Khuyến mãi</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">Chưa có thông tin</p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Quy định</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets được quản lý bởi Ủy ban Chứng khoán &amp; Đầu tư Úc
              (ASIC), với số giấy phép 423034. Đối với các nhà đầu tư quốc tế,
              Prospero Global được quản lý bởi Cơ quan Dịch vụ Tài chính St
              Vincent &amp; Grenadines (SVGFSA), với số đăng ký 533LLC2020.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Công cụ bổ sung</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Trang web Prospero Markets cung cấp nhiều nguồn tài nguyên giáo dục.
              Điều này bao gồm lịch kinh tế mà bạn có thể lọc dựa trên các sự kiện
              kinh tế quan trọng nhất. Ngoài ra còn có những cập nhật trực tiếp về
              tin tức tài chính.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Bạn có thể tìm thấy các buổi hội thảo phục vụ cho quá trình học giao
              dịch của mình, từ cơ bản đến nâng cao. Tất cả đều miễn phí, bạn chỉ
              cần nhập tên và email của mình để tham gia.&nbsp;
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Hỗ trợ khách hàng</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets có đội ngũ hỗ trợ khách hàng chuyên với đội ngũ
              nhân viên am hiểu sâu về thị trường. Dịch vụ khách hàng luôn sẵn
              sàng hỗ trợ 24 giờ một ngày, 5 ngày một tuần, qua trò chuyện trực
              tiếp và email.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">An toàn</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets là thương hiệu môi giới an toàn với các quy tắc bảo
              mật dữ liệu nghiêm ngặt. Đối với bất kỳ tranh chấp hoặc khiếu nại
              nào, khách hàng có thể sử dụng chương trình giải quyết tranh chấp
              bên ngoài của AFCA.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Nền tảng MetaTrader 4 cũng an toàn. Tất cả thông tin cá nhân được
              truyền giữa các tài khoản giao dịch và giao diện nền tảng với mã hóa
              cấp cao nhất và chữ ký số RSA.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h2 dir="ltr">Các quốc gia được chấp nhận</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Prospero Markets chấp nhận các nhà giao dịch từ Úc, Thái Lan,
              Canada, Vương quốc Anh, Nam Phi, Singapore, Hong Kong, Ấn Độ, Pháp,
              Đức, Na Uy, Thụy Điển, Ý, Đan Mạch, Các tiểu vương quốc Ả Rập thống
              nhất, Ả Rập Saudi, Kuwait, Luxembourg, Qatar và hầu hết các nước
              khác.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <p dir="ltr">
              Nhà giao dịch không thể sử dụng Prospero Markets từ Mỹ, Nhật Bản,
              Hàn Quốc.
            </p>
            <p dir="ltr">
              <img
                src="https://lh3.googleusercontent.com/tW65Rn8KmxNAAffH47mSXj-0Hb7VDJiPOEXeV2an48BQ3FUUBPvlL04qdC857JEUfXDbta6BI54-H2kLVZo6IWYWOsrE7FTMOZiqOzA7XuP8Mbrd3bT2nIhiRuPbB_x1NLC-b7s0-zA6FpVS"
                width={624}
                height={207}
              />
            </p>
            <h2 dir="ltr">Câu hỏi thường gặp</h2>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">
              Prospero Markets có phải là nhà môi giới an toàn không?
            </h3>
            <p dir="ltr">
              Prospero Markets là một nhà môi giới trực tuyến an toàn. Công ty có
              giấy phép từ Ủy ban Chứng khoán &amp; Đầu tư Úc, cung cấp biện pháp
              bảo vệ số dư âm và tách biệt tiền của khách hàng tại Ngân hàng
              Commonwealth Bank of Australia. Thương hiệu này cũng có nhiều đánh
              giá tích cực từ các nhà giao dịch khác.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Thị trường Prospero có cung cấp đòn bẩy cao không?</h3>
            <p dir="ltr">
              Tổ chức toàn cầu này cung cấp đòn bẩy cao lên tới 1:400. Tuy nhiên,
              khách hàng tại Úc bị giới hạn đòn bẩy ở mức 1:30 để phù hợp với các
              hạn chế quy định của địa phương.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Prospero Markets có hợp pháp không?</h3>
            <p dir="ltr">
              Có, Prospero Markets là nhà môi giới hợp pháp cung cấp hơn 300 công
              cụ trên nền tảng MetaTrader 4. Công ty cũng đã đăng ký với ASIC, cơ
              quan quản lý toàn cầu hàng đầu với các quy định nghiêm ngặt để các
              công ty thương mại phải tuân thủ.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">Prospero Markets có cung cấp tài khoản demo không?</h3>
            <p dir="ltr">
              Có, Prospero Markets cung cấp tài khoản demo 30 ngày miễn phí trên
              MT4. Khách hàng có thể đăng ký qua trang web của nhà môi giới trong
              vòng chưa đầy hai phút.
            </p>
            <h1 dir="ltr">
              <strong>&nbsp;</strong>
            </h1>
            <h3 dir="ltr">
              Prospero Markets có cung cấp dịch vụ hỗ trợ khách hàng đáng tin cậy
              không?
            </h3>
            <p dir="ltr">
              Có, Prospero Markets cung cấp hỗ trợ khách hàng 24/5 cho tất cả
              người dùng đã đăng ký. Điều này bao gồm dịch vụ trò chuyện trực
              tiếp, điện thoại và email.
            </p>
          </div>
          <div className="list-san">
            <p className="heading"><FontAwesomeIcon icon={faBook} />Review - Đánh giá</p>
            <div className="list-related-broker">
              <Related_broker />
            </div>
            <span className="heading"><FontAwesomeIcon icon={faBook} />Bài viết mới nhất</span>
            <div className='all-news'>
                <Post />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
