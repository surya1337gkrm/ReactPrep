import { createContext } from 'react';

//hardcoded the data as of now.
//we can use dynamic data too. we can use context.Provider
const UserContext = createContext({
  user: {
    name: 'Surya Venkatesh Vijjana',
    email: 'suryavenkatesh0@gmail.com',
  },
});
UserContext.displayName = 'UserContext';
export default UserContext;
