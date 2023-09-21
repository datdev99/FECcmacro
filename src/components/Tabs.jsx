import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tin-nhanh');

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  let data = [
    {
      "id": 1,
      "title": "Riksbank: Bảo hiểm rủi ro tiền tệ sẽ bắt đầu vào ngày 25 tháng 9 năm 2023 và sẽ hoàn thành đầy đủ trong vòng 4 đến 6 tháng.",
      "time": "1 phút trước"
    },
    {
      "id": 2,
      "title": "Riksbank: Bảo hiểm rủi ro tiền tệ sẽ bắt đầu vào ngày 25 tháng 9 năm 2023 và sẽ hoàn thành đầy đủ trong vòng 4 đến 6 tháng.",
      "time": "2 phút trước"
    },
    {
      "id": 3,
      "title": "Riksbank: Bảo hiểm rủi ro tiền tệ sẽ bắt đầu vào ngày 25 tháng 9 năm 2023 và sẽ hoàn thành đầy đủ trong vòng 4 đến 6 tháng.",
      "time": "3 phút trước"
    },
    {
      "id": 4,
      "title": "Riksbank: Bảo hiểm rủi ro tiền tệ sẽ bắt đầu vào ngày 25 tháng 9 năm 2023 và sẽ hoàn thành đầy đủ trong vòng 4 đến 6 tháng.",
      "time": "4 phút trước"
    },
    {
      "id": 5,
      "title": "Riksbank: Bảo hiểm rủi ro tiền tệ sẽ bắt đầu vào ngày 25 tháng 9 năm 2023 và sẽ hoàn thành đầy đủ trong vòng 4 đến 6 tháng.",
      "time": "5 phút trước"
    },
    {
      "id": 6,
      "title": "Riksbank: Bảo hiểm rủi ro tiền tệ sẽ bắt đầu vào ngày 25 tháng 9 năm 2023 và sẽ hoàn thành đầy đủ trong vòng 4 đến 6 tháng.",
      "time": "6 phút trước"
    },
    {
      "id": 7,
      "title": "Riksbank: Bảo hiểm rủi ro tiền tệ sẽ bắt đầu vào ngày 25 tháng 9 năm 2023 và sẽ hoàn thành đầy đủ trong vòng 4 đến 6 tháng.",
      "time": "7 phút trước"
    },
  ]

  return (
    <div className='multi-tab'>
      <div className="tab">
        <button
          className={`tablinks ${activeTab === 'tin-nhanh' ? 'active' : ''}`}
          onClick={() => openCity('tin-nhanh')}
        >
          Tin nhanh
        </button>
        <button
          className={`tablinks ${activeTab === 'phan-tich' ? 'active' : ''}`}
          onClick={() => openCity('phan-tich')}
        >
          Phân tích
        </button>
      </div>

      <div id="tin-nhanh" className={`tabcontent ${activeTab === 'tin-nhanh' ? 'active' : ''}`}>
        {data.map((item,index) => (
          <div className='item' key={index}>
            <span>{item.time}</span>
            <a href='#'>{item.title}</a>
          </div>
        ))}
      </div>

      <div id="phan-tich" className={`tabcontent ${activeTab === 'phan-tich' ? 'active' : ''}`}>
        {data.map((item, index) => (
          <div className='item' key={index}>
            <span>{item.time}</span>
            <a href='#'>{item.title}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs

