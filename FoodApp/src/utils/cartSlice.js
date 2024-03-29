import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );
  return data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    todos: [],
    isLoading: false,
    profileData: {},
  },
  reducers: {
    addItem: (state, action) => {
      const ele = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item[ele.id] !== undefined
      );
      if (itemIndex === -1) {
        state.items.push({ [ele.id]: ele, q: 1, id: ele.id });
      } else {
        state.items[itemIndex].q += 1;
      }
    },
    removeItem: (state, action) => {
      //need to change the implementation
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
  //handles extra action types here. related to thunk
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.slice(1, 31);
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
