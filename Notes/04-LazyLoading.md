# 04. Lazy Loading in React

Generally, Bundlers will bundle all the available code/components into a single JS bundle and send to the client to render the application and If we have a very large application with too many components & business logic involved,
Our bundle size will grow eventually and it will take more time load the application.

**In order to reduce the bundle size, we need to dynamically import / lazy load the components which we don't rewuire while loading a specific part of the appliaction**.

For example, there's no point in including /route1 related components when we loads the /route. So we can use lazy loading to load the components of /route1 page only when a request was sent to that route.

**use lazy method from react library**.<br>
**Example**<br>
`const Instamart = lazy(() => import('./components/Instamart'));`

Lazy method takes a callback where we need to use import method and specify the path to the component file that we need to lazy load.

---

Because **lazy loading a component is asynchronous event**, it might take some time to load the component, and if react tries to render the component in that mean time, we might get an error.

To avoid the error, **we need to wrap our lazy loaded component with a Suspense component** so that this component will be rendered only when its avaialble.

Suspense component takes a prop : **fallback where we can specify a fallback UI** if the component isnt loaded yet.

        <Suspense fallback={<Shimmer />}>
            <Instamart />
        </Suspense>


---
