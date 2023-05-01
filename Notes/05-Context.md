# 05. Context

**In order to avoid Props drilling, we can use context in react applications**.

Context is like a **central store** to save our data in our application.

we can create as many contexts as we need using **createContext method** and we can export these contexts and can use the context data across the components in the application.

        const UserContext = createContext({
            user: {
                name: 'Surya Venkatesh Vijjana',
                email: 'suryavenkatesh0@gmail.com',
            },
        });

In order to use this data in any component, import useContext hook and import the context created in the component.

    import UserContext from '../utils/UserContext';
    import { useContext } from 'react';

    const { user } = useContext(UserContext);

---

Inside class components **we can't use useContext hook**. But we can use the context we created and there's a property attached to it. **Inside the class component we can use Context.consumer** to get the data.

Inside the **Context.Consumer** we can write jsx where we will get the context data as a single variable and we
can use that to build jsx elements.

    <UserContext.Consumer>
          {({ user }) => (
            <>
              <small>{`${user.name} | ${user.email}`}</small>
            </>
          )}
     </UserContext.Consumer>

---

To distinguish different contexts created in dev tools, we can add a display name to our context as below.<br>
`Context.displayName='UserContext'`<br>
Now if we check in React Dev Tools, Instead of hardcoding the data we can get the dynamic data and pass the data across the application using Context.Provider component.

**We need to wrap the components with Context.Provider** in which we want to use the data. We can pass any data [ states/ setter functions etc...] as value prop to the Context.Provider component and this data can be accessed from any components enclosed in Context.Provider.
