# 07. Redux Thunk

By default, redux action creator expects a action type string and a payload.
Anything part from these will throw an error.

So, if we need to fetch data from an api and store in redux store we need to
write asynchronous function to fetch the data in the action. To handle this,
we need to use thunk.[ **Thunk -> function is used to delay the evaluation/calculation of an operation** ]

in @reduxjs/toolkit library, we have a method called **createAsyncThunk** which can be
used to create asynchronous actions.

**import createAsyncThunk from the @reduxjs/toolkit library**.
this method accepts two params. Action type string used to identify the action
and an function that returns a promise.

    export const getTodos = createAsyncThunk('todos/getTodos', async () => {
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
    );
        return data;
    });

instead of adding the reducer logic in reducers, slice has another property 'extraReducers'.

extraReducers is a method that takes builder object as a param.

use builder.addCase to add cases [ pending,fulfilled,rejected ] that replicates promise states.

**Example**<br>

        builder.addCase(getTodos.pending, (state, action) => {
            state.isLoading = true;
        })

---

In the component you want to use this data, import the action and in dispatch method call this action method.
