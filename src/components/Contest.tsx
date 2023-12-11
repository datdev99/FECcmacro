import Link from "next/link";
import React from "react";

interface Props {
    data: IF_Data[];
}

interface IF_Data {
    id : number;
    contest?: any;
    content?: any;
    createdDate?: any;
    expiredDate?: any;
    prize?: any;
    balance?: any;
    isCompleted?: any;
}
const Contest = (props: Props) => {
    console.log(props.data[0].createdDate,"props");
    
  return ( 
    <>
    {
        props.data.map(item => (
            <div className="conversation-item" key={item.id}>
                <div className="inner">
                    <div className="conversation-item__status">
                        <div className="time">
                            <span>Bắt đầu</span>
                            <time>{item.createdDate}</time>
                        </div>
                        <div className="time">
                            <span>Kết thúc</span>
                            <time>{item.expiredDate}</time>
                        </div>
                        <p className="conversation-item__status--processing">{item.isCompleted == false ? "Hoạt động" : "Đã kết thúc"}</p>
                    </div>
                    <div className="conversation-item__content">
                        <Link href={`/conversation/detail/${item.id}`} className="title">{item.contest}</Link>
                        <div className="conect">
                            Đang tham gia: <span>18</span>
                        </div>
                    </div>
                    <div className="conversation-item__prize">
                        <div className="conversation-item__prize--title">
                            TỔNG GIẢI THƯỞNG
                        </div>
                        <div className="conversation-item__prize--total">{item.prize}</div>
                        <div className="conversation-item__prize--fee">
                        <p>Lệ phí tham gia</p>
                        <p>{item.balance}</p>
                        </div>
                        <div className="conversation-item__prize--button">
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }
    </>
  );
};

export default Contest;
