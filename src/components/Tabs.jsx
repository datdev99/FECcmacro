import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";

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
    return `${minutesDifference} phút trước`
  } else if (minutesDifference < 60 * 24) {
    const hoursDifference = Math.floor(minutesDifference / 60);
    return `${hoursDifference} giờ trước`
  } else {
    const daysDifference = Math.floor(minutesDifference / (60 * 24));
    return `${daysDifference} ngày trước`
  }
}

function SapXep(rss) {
  rss.sort((a, b) => {
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

function handleTime(time) {
  const thoiGian = new Date(time);
  const formattedTime = thoiGian.toLocaleString().split(" ")[1];
  return formattedTime;
}

const Tabs = ({rssNew, phantich}) => {
  const [activeTab, setActiveTab] = useState('tin-nhanh');
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [firstNew, setFirstNew] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    // Gọi API lần đầu khi component được mount
    fetchData();
  
    // Thiết lập interval để gọi lại API sau mỗi 1 phút
    const intervalId = setInterval(fetchData, 60000);
  
    // Xóa interval khi component bị unmounted hoặc khi useEffect chạy lại
    return () => clearInterval(intervalId);
  }, []);
  
  const fetchData = () => {
    axios.get('/api/fastNews')
      .then(response => {
        // Xử lý dữ liệu nhận được từ API
        setFirstNew(response.data);
        setIsDataLoaded(true);
      })
      .catch(error => {
        // Xử lý lỗi (nếu có)
        console.error('Error fetching data: ', error);
      });
  };

  const handleShowModal = (content, title) => () => {
    // let text = e.target.textContent;
    // let _content = e.target.data("content")
    setTitle(title);
    setContent(content);
    setShowModal(true);
    console.log(content,"content");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  useEffect(() => { 
    SapXep(rssNew)
    setData(rssNew);
    console.log(rssNew,"rssNew")
  }, [rssNew]);

  const divStyle = {
    whiteSpace: 'pre-line'
  };

  return (
    <>
      <div className='multi-tab'>
        <div className="tab">
          <button
            className={`tablinks ${activeTab === 'tin-nhanh' ? 'active' : ''}`}
            onClick={() => openCity('tin-nhanh')}
          >
            Tin nhanh 3
          </button>
          {/* <button
            className={`tablinks ${activeTab === 'phan-tich' ? 'active' : ''}`}
            onClick={() => openCity('phan-tich')}
          >
            Phân tích
          </button> */}
        </div>

        <div id="tin-nhanh" className={`tabcontent ${activeTab === 'tin-nhanh' ? 'active' : ''}`}>
          {/* {data.map((item,index) => (
            <div className='item' key={index}>
              
              <span>{convertTime(item.isoDate)}</span>
              <p onClick={handleShowModal(item["content:encodedSnippet"], item.title)}>{item.title}</p>
            </div>
          ))} */}
          {/* dangerouslySetInnerHTML={{ __html: item.content }} */}
          {isDataLoaded && firstNew && firstNew.map((item,index) => (
            <div className='item' key={index}>
              <span>{handleTime(item.createtime)}</span>
              {item.content && item.title ? <span className="u-ml5">Đọc</span> : ""}
              {item.content && item.title ? 
                <p className={item.important == 1 ? "important" : ""} onClick={handleShowModal(item.content == "" ? item.title : item.content, item.title)}>{item.title == "" ? item.content : item.title}</p>
              :              
                <p className={item.important == 1 ? "important" : ""}>{item.title == "" ? item.content : item.title}</p>               
              }
              
            </div>
          ))}
        </div>

        <div id="phan-tich" className={`tabcontent ${activeTab === 'phan-tich' ? 'active' : ''}`}>
          {phantich.map((item,index) => (
            <div className='item' key={index}>
              <span>{convertTime(item.isoDate)}</span>
              <p data-content={item.title} onClick={handleShowModal}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} id="model_new">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div style={divStyle} dangerouslySetInnerHTML={{ __html: content }}>

          </div>
          {/* {content} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Tabs

