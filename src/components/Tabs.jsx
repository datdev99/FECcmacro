import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('London');

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
          className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
          onClick={() => openCity('London')}
        >
          Tin mới nhất
        </button>
        <button
          className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`}
          onClick={() => openCity('Paris')}
        >
          Phân tích
        </button>
        <button
          className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`}
          onClick={() => openCity('Tokyo')}
        >
          Lịch kinh tế
        </button>
      </div>

      <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
        {data.map(item => (
          <>
            <div className='item'>
              <span>{item.time}</span>
              <p>{item.title}</p>
            </div>
          </>
        ))}
        
        {/* <div className='item'>
          <span>1 phút trước</span>
          <p>Riksbank: Bảo hiểm rủi ro tiền tệ sẽ bắt đầu vào ngày 25 tháng 9 năm 2023 và sẽ hoàn thành đầy đủ trong vòng 4 đến 6 tháng.</p>
        </div> */}
      </div>

      <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'active' : ''}`}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  )
}

export default Tabs

