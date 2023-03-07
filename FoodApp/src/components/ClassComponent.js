import React from 'react';
import UserContext from '../utils/UserContext';

export default class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <UserContext.Consumer>
          {({ user }) => (
            <>
              <small>{`${user.name} | ${user.email}`}</small>
            </>
          )}
        </UserContext.Consumer>
      </>
    );
  }
}
