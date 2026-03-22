import React, { useReducer } from 'react';

// 1. Hàm Reducer: Quyết định state mới dựa trên Action nhận được
const reducer = (state, action) => {
  switch (action.type) {
    case 'TANG': return { count: state.count + 1 };
    case 'GIAM': return { count: state.count - 1 };
    default: return state;
  }
};

function BaiTapUseReducer() {
  // 2. Khởi tạo useReducer: nhận vào hàm reducer và giá trị ban đầu
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Số hiện tại: {state.count}</p>
      {/* 3. Dispatch: Gửi lệnh đi */}
      <button onClick={() => dispatch({ type: 'TANG' })}>Tăng (+)</button>
      <button onClick={() => dispatch({ type: 'GIAM' })}>Giảm (-)</button>
    </div>
  );
}
export default BaiTapUseReducer;