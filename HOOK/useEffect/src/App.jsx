import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState("Trống");

  // Cơ chế 1: useEffect kiểm soát Side Effect
  // Khi dependency array là [ ], code bên trong chỉ chạy 1 lần duy nhất sau khi component 'mount' (lên sàn)
  useEffect(() => {
    console.log("Component đã Render xong - Sẵn sàng nhận lệnh");
    
    // Hàm dọn dẹp (Cleanup function) - Chạy trước khi component bị hủy để tránh rò rỉ bộ nhớ
    return () => console.log("Dọn dẹp tài nguyên trước khi Unmount");
  }, []);

  // Cơ chế 2: Hàm xử lý Fetch dữ liệu (Quy trình: Button -> Click -> Action)
  const handleClick = () => {
    // Gửi yêu cầu HTTP GET đến API online
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json()) // Chuyển đổi phản hồi thô sang định dạng JSON
      .then(json => {
        setData(json.title); // Cập nhật State để kích hoạt Re-render giao diện
        console.log("Dữ liệu thực thể nhận từ API:", json);
      })
      .catch(err => console.error("Lỗi kết nối API:", err));
  };

  return (
    <div>
      {/* Cơ chế 3: Luồng dữ liệu Một chiều (One-way data binding) */}
      <button onClick={handleClick}>
        Lấy dữ liệu API
      </button>
      
      <p>Kết quả: <b>{data}</b></p>
    </div>
  );
}

export default App;