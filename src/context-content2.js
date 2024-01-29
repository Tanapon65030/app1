import React from 'react';
import { useContext } from './context';

export default function Content2() {
  const { user , setUser } = React.useContext(useContext);

  const contentStyle = {
    backgroundColor: '#ddd',
    textAlign: 'center',
    margin: 10,
    padding: 10,
  };

  const onClickSignin = (event) => {
    event.preventDefault();
    setUser('Tom Jerry');
  };

  return (
    <div style={contentStyle}>
      {(user) ? 
        <span>Hello {user}</span>
       : 
        <span>
          Please <a href=" " onClick={onClickSignin}>Signin</a>
        </span>
      }
    </div>
  );
}
