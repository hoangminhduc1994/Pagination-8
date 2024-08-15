import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer'; // Đảm bảo rootReducer là một slice hoặc combineReducers

const store = configureStore({
  reducer: rootReducer,
  // Bạn có thể thêm middleware tùy chỉnh ở đây nếu cần
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Nếu cần
    }),
});

export default store;


