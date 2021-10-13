import React from 'react';

import './ErrorModal.css';

const ErrorModal = React.memo(props => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>An Error Occurred!</h2>
        <p>{props.children}</p>
        <div className="error-modal__actions">
          <button className="btn" type="button" onClick={props.onClose}>
            Refresh
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;
