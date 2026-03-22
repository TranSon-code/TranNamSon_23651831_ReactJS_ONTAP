import React, { useState, useCallback } from 'react';

function BaiTapUseCallback() {
  const [count, setCount] = useState(0);

  // Ghi nhớ hàm handleClick. Nó sẽ không bị tạo mới trừ khi count thay đổi.
  const handleClick = useCallback(() => {
    console.log("Hàm này đã được gọi. Count hiện tại là:", count);
  }, [count]); // Chỉ tạo lại hàm khi biến 'count' thay đổi

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng số</button>
      <button onClick={handleClick}>Log giá trị (Ghi nhớ hàm)</button>
    </div>
  );
}
export default BaiTapUseCallback;