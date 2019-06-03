import React from 'react';
import {ErrorMessage} from 'formik';
import { Alert } from 'antd';


function FieldErrorMessage({name}) {
  return (
    <ErrorMessage name={name}>
      {
        (msg) => (
          <div className="text-danger">
            <small>{msg}</small>
          </div>
        )
      }
    </ErrorMessage>
  );
}

export default FieldErrorMessage;
