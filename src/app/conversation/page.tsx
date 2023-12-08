import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Layout>
        <main>
          <section>
            <div className="list-conversation">
              <div className="conversation-item">
                <div className="inner">
                  <div className="conversation-item__status">
                    <div className="time">
                      <span>Bắt đầu</span>
                      <time>20/09/2023 00:00</time>
                    </div>
                    <div className="time">
                      <span>Kết thúc</span>
                      <time>30/11/2023 23:59</time>
                    </div>
                    <p className="conversation-item__status--processing">Hoạt động</p>
                  </div>
                  <div className="conversation-item__content">
                    <p className="title">Đua top trader tháng 11 cùng Ccrystal</p>
                    <div className="conect">
                      Đang tham gia: <span>18</span>
                    </div>
                  </div>
                  <div className="conversation-item__prize">
                    <div className="conversation-item__prize--title">TỔNG GIẢI THƯỞNG</div>
                    <div className="conversation-item__prize--total">500$</div>
                    <div className="conversation-item__prize--fee">
                      <p>Lệ phí tham gia</p>
                      <p>FREE</p>
                    </div>
                    <div className="conversation-item__prize--button">
                      <button>Đăng ký</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Page;
