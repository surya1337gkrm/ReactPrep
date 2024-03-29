# 03. Routing [ React Router DOM ]

In order to implement routing, we use **react-router-dom** library.

- We will use **BrowserRouter** to implement the routing. In the app component (or component which we will render in root), we can write code as below.

        import { BrowserRouter, Routes, Route } from 'react-router-dom';

        const AppLayout = () => {
            return (
                <>
                <Header />
                <BrowserRouter>
                    <Routes>
                    <Route path='/' exact element={<Body />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                    </Routes>
                </BrowserRouter>
                <Footer />
                </>
            );
        };

  Here, we are importing BrowserRouter Component and we can use Routes component to group the Routes and inside routes component, use Route component to pass path and relevant element you want to render.

---

Instead of components given by react-router-dom, we can also use **createBrowserRouter Function** and **RouterProvider** [Context] to implement routing.

We need to use createBrowserRouter to create the router with the path and relevant component to rendera
and pass this router as a param to RouterProvider Component that we will render in the roor div.

        const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            ],
        },
        ]);

        const root = ReactDOM.createRoot(document.querySelector('#root'));
        root.render(<RouterProvider router={appRouter} />);

pass config object to createBrowserRouter fn, with path and element to render.For base route, add errorElement property, if no path matched, render an error component.

---

**If path started with '/' it will start the path from domain [ localhost:1234/]
for relative paths, dont start with '/', so that path will be constructed from the current page we are in.**

we can use **useParams() hook** to get the params data and to get the error data related to routes, we can use **useRouteError() hook**.

---

When we render the appRouter, element related to the root will be rendered and associated children elements will be rendered in the **\<Outlet/>** component's place.

**Example**<br>
When appRouter in passed as prop to the RouteProvider component,at the root, AppLayout will be rendered as / points to AppLayout component.

And first children in home page '/' is Body component.So this <Body/> component will be rendered in the place of \<Outlet/> component in the AppLayout component.

             <Provider store={store}>
                <UserContext.Provider value={{ user: user }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>

**\<Outlet/> is like a place holder component provided by ReactRouterDOM.**
