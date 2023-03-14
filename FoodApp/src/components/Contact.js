import React, { useState } from 'react';
import { docsData } from '../config';

function Contact() {
  const [hide, setHide] = useState(() => {
    let obj = {};
    Object.keys(docsData).forEach((keyVal) => (obj[keyVal] = false));
    obj.info = true;
    return obj;
  });

  const handleHide = (key) => {
    setHide((prevState) => {
      Object.keys(prevState).forEach((keyVal) => (prevState[keyVal] = false));
      prevState[key] = true;
      return { ...prevState };
    });
  };

  return (
    <>
      {Object.keys(docsData).map((keyVal) => (
        <div
          key={keyVal}
          className='text-center bg-slate-800 text-white rounded p-5 m-5 cursor-pointer relative'>
          {hide[keyVal] ? (
            <></>
          ) : (
            <button
              className='absolute right-0 top-0 m-1 px-1 bg-orange-400 rounded shadow-md'
              onClick={() => {
                handleHide(keyVal);
              }}>
              Open
            </button>
          )}
          <h1 className='font-bold text-3xl'>{keyVal.toUpperCase()}</h1>
          <br />
          <pre
            className={`whitespace-pre-wrap break-words ${
              hide[keyVal] ? '' : 'hidden'
            }`}>
            {docsData[keyVal].trim()}
          </pre>
        </div>
      ))}
    </>
  );
}

export default Contact;
