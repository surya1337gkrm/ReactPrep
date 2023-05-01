# 02. React Hooks

- **Everytime we need our variables to be in sync with the UI**. So we need to use state variables [ useState] which rerenders the component whenever state changes.

- Whenever state changes, component rerenders and the the changes only will be updated in the component.

- **useState** shouldn't be called inside loops/conditional statements. Also,useState shouldnt be used outside the functional component. As useState is a method provided by react to create a local state in functional component.

- **Hooks should be called in the top section of the functional component** and shouldnt be used inside blocks [ if/for etc..]. Whenever component rerenders, these hooks should be called in the same order. if they are used inside loops/blocks/conditional statements there is a chance that these hooks might not be called. so we will get an error and application crashes.

- We can set new value to the state or do operations on the state as follows:<br>
  ` setCount(count+1)`<br>

  But in the above case, if we have multiple setState operations, all setStates will refer to the state of the component during current render.
  setCount(count+1)
  setCount(count+1)

  in this case, both set states will refer to same count variable[value]. so if the current state value is 1,after performing these setCount operations value will be still 2.

- setter function will take a callback fn which gets the **prevState as a param**.
  we can use prevState to perform required operations and return the new value.

  `setCount((prevCount)=>prevCount+1)`

  **If we have multiple operations, each operation will refer to the updated value**.
  setCount((prevCount)=>prevCount+1)
  setCount((prevCount)=>prevCount+1)

      This will update the value to 3 if initial value is 1.

---

**IMPORTANT**

Whenever we use **Class Components**, state will be initiated inside a **constructor method**. So setting the state will be done only once when the component first rendered.
But in functional component, using useState() hook, state will be set every time the component renders.

When it's a harcoded value it doesnt matter. But let's say we have a complex computation involved while setting the state using useState, as this will be called everytime performance of the application will be impacted.

In order to solve this problem, **useState hook can be also used with a callback function** instead of hardcoding the value.
if we took this approach, this setting up the state will be done only once when the component initially renders.

`useState(()=>{return <some value>})`

**if we created this entire callback function as a normal function outside the fn component, it will not work as expected and calls the function everytime. so always use the callback anonymous fn format as above.**

---

While using objects as an initial state, in class components we can just update the value of the specific property
and it will only update the value of that property only. But in fn components, if we do the same thig entire
object will be modified and the property which is modified only will be present in the object.

In class component, initial State -> assume `{count:1,color:'blue'}`<br>
`setState(count:count+1)` will only make changes to the count.

In fn component, if we do the same thing color property will be lost.To avoid this, either use seperate state for both properties or use spread syntax and get all the properties and update the required property.<br>
`setState((prevState)=>{return {...prevState,count:count+1}})`

## useEffect Hook

Component will be rendered and the useEffect will be called based on the dependency array.

- If **state changes & state is passed as an dependency array**, component will be rendered first and then the useEffect will be executed again.

useEffect doesn't anything except a **cleanUp function** which will be executed when component unmounts / when component re-renders.

    useEffect(()=>{
        // Some Code

        //cleanup function
        return ()=>{
        //handle cleanup
        }
    })
