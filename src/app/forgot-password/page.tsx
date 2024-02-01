"use client";

import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import axios from 'axios';
import {API_URL} from '@/lib/api-request'

const Page = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [checkError, setCheckError] = useState(false)
    const [code, setCode] = useState("")
    const [active, setActive] = useState(false)

    const handleSubmit = async (e:any) => {
        e.preventDefault();
    };

    const GetCode = () => {
        if(email.length > 0) {
            axios.post(`${API_URL}/User/ForgotPass`, {
                email: email
            })
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                console.log(response, "tesst");
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
                setError(error.response.data)
                setCheckError(true)
            });
        }
    }

    useEffect(() => {
        setCheckError(false)
        
        if(email != "" && code != "" && code.length === 6) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    },[code, email])
    return (
    <>
        <Header />
        <main className='p-forgot'>
            <div className='l-container--2'>
                <div className={`form forgot`}>
                    <h2>Lấy lại mật khẩu Ccrystal</h2>
                    <p className='desc'>
                        Chào mừng bạn đến <span>Nền tảng Ccrystal</span> ! Tham gia cùng chúng tôi để tìm kiếm thông tin hữu ích cần thiết để cải thiện kỹ năng và kiến thức của bạn.
                    </p>
                    <div className='box'>
                        Chúng tôi sẽ gửi mã <span>xác nhận</span> về email của bạn. Vui lòng nhập <span>email và xác nhận</span> để cấp lại mật khẩu mới.
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-control'>
                            <div className='item'>
                                <div className='item__column'>
                                    <label htmlFor="">*Địa chỉ email của bạn</label>
                                    <input 
                                        type="email"  
                                        name="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <span>{checkError ? error : ""}</span>
                            </div>
                            <div className='item'>
                                <label htmlFor="">*Mã xác nhận</label>
                                <div className='item__column'>
                                    <input 
                                        type="number"
                                        name="code"
                                        id="code"
                                        required
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                    <p className='getCode' onClick={GetCode}>Lấy mã</p>
                                </div>
                                <span>Nhập mã gồm 6 chữ số</span>
                            </div>
                            <div>
                                <button className={`btn-next ${active ? "active" : ""}`}>Xác nhận</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </>
  )
}

export default Page