import React, { useRef } from 'react';

function BaiTapUseRef() {
  const inputElement = useRef(); // Khởi tạo "cái móc"

  const focusInput = () => {
    // Truy cập trực tiếp vào thuộc tính của thẻ input thông qua .current
    inputElement.current.focus(); 
    inputElement.current.style.backgroundColor = "yellow";
    console.log("Giá trị hiện tại trong ô input:", inputElement.current.value);
  };

  return (
    <div>
      <input ref={inputElement} type="text" placeholder="Nhập chữ vào đây..." />
      <button onClick={focusInput}>Focus và Đổi màu Input</button>
    </div>
  );
}
export default BaiTapUseRef;