"use client"

import React from 'react'
import Header from '@/components/Header/Header'
import { useRouter } from 'next/navigation';

const Page = () => {
    const route = useRouter();
    const handleLogOut = () => {
        if (typeof window !== "undefined") {
            // Chỉ truy cập localStorage khi chạy trong môi trường trình duyệt
            localStorage.removeItem("Token")
            route.push('/login')
            // Thực hiện các thao tác với token ở đây
          }
    }

  return (
    <>
        <Header />
        <main>
            <button onClick={handleLogOut}>Đăng xuất</button>
        </main>
    </>
  )
}

export default Page