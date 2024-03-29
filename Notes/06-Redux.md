# 06. Redux

In redux, **store data should not be mutated/modified directly**. We need to follow the architecture. In store, we can create multiple slices of data [ ex: slice for cart/menu/theme etc...]

When we interact with frontend, [like clicking a button / searching etc...].
lets say we clicked a button to add an item to cart, we will **dispatch an action named 'addItem' with a payload data** and this action will be used to call a function [known as **reducer**] which is responsible to modify the store data.

Simillary, if we want to read data from the store, we should **use selector to get the data from store**. when we are using selector, it's known as **subscribing to the store**, i.e component is subscribing to the store.

If we used selector in cart component, **cart component is subscribing to the store**. i.e,cart component is in sync with the store. so, whenever the store modified, cart component will automatically modifies.

---

We have to use 2 libraries to setup and use the store as discussed above.<br>
`@reduxjs/toolkit` and `react-redux`.

**@reduxjs/toolkit** : is responsible for core redux stuff like creating the store/actions/reducers etc<br>
**react-redux**: library is responsible for linking the redux with the react application.

---

First we need to create the store using **configureStore method from the @reduxjs/toolkit library** and export it.

**use Provider component from react-redux library to wrap the entire application** the components in which we want to access the store data and pass store we exported as a store prop. Now we can access the store across all components in out application.

We need to **create a slice using createSlice method imported from @reduxjs/toolkit**
which handles storing the actions and reducers.[ We can create as many slices as we need ]

**createSlice takes an object as an argument. that has following properties**.

- name: name of the slice
- initialState: we need to define the initial state
- reducers: an object with action names as key and a reducer function as value that takes state and action as params. Initially, state will be equal to intialState and action will be passed when we dispatch an action from a component. In reducer, function we dont need to return anything. we can perform required operations on the state data directly.

**Exporting the slice is a little tricky in @reduxjs/toolkit implementation**.

createSlice will create a slice (lets say cartSlice) and it will have 2 properties.

- all reducers in the slice will be bundled into a single reducer and will be added as a reducer property in the cartSlice object. we can default export to export this property.

- all actions will be stored in the actions property of the cartSlice object.

**Now we need to put this slice in our store**.<br>
In our store configuration, we need to add reducer property and add all the slices/reducers we created By specifying our slice name as key and default export as value.

if we have multiple slices created, add all slices here.

    Example: reducer:{
        cart:cartSlice,
        user:userSlice
    }

---

Now we need to subscribe to the store using useSelector hook from react-redux.
**useSelector hook will take a callback fn and it takes store as a param**.

we can perform any operations on the store and return the data and we can use this data in the component.<br>
**Example**<br>
`const cartItems = useSelector((state) => state.cart.items);`

If we need to perform an action, then we need to dispatch an action from component using dispatch method[ import from react-redux]. dispatch method will take reducer method as a param and reduver fn will take action payload as param.

**Example**<br>

    const dispatch =useDispatch()
    dispatch(addItem('item'))

here addItem is the reducer fn and 'item' is the payload.

---

**When using useSelector always filter out [ or subscribe] to specific slice/ part of the slice as when we subscribe component will be rerendered whenever there's a change in the store/slice/part of the slice.**

if we susbcribed to the unnecessary data part of the store, our component rerenders even if we aren't using thata data which affects the app's performance.

---

**Wrap the RouterProvider component that we render in the root with the Provider component so that if there's an error, and if we need to display some data from the store in the Error component, application will not break and displays the required data.**
