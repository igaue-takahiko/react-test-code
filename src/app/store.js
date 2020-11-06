import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import CustomCounterReducer from '../features/CustomCounter/CustomCounterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        customCounter: CustomCounterReducer,
    },
});
