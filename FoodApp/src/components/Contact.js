import React from 'react';
import { docsData } from '../config';

function Contact() {
  return (
    <>
      {Object.keys(docsData).map((keyVal) => (
        <div
          key={keyVal}
          className='text-center bg-slate-800 text-white rounded p-5 m-5 hover:scale-95 ease-in-out duration-300'>
          <h1 className='font-bold text-5xl'>{keyVal.toUpperCase()}</h1>
          <br />
          <pre className='whitespace-pre-wrap break-words'>
            {docsData[keyVal].trim()}
          </pre>
        </div>
      ))}
    </>
  );
}

export default Contact;
