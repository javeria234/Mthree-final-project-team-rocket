import React from 'react';
import './SaveConfirmationPage';

function RemoveProductConfirmation({ onYes, onNo }) {
    return (
        <div className="confirmationContainer">
            <div className="confirmationBox">
                <h2 className="confirmationTitle">Remove product?</h2>
                <div className="confirmationButtons">
                    <button className="confirmButton yesButton" onClick={onYes}>
                        <span role="img" aria-label="checkmark">✅</span> Yes
                    </button>
                    <button className="confirmButton noButton" onClick={onNo}>
                        <span role="img" aria-label="cross">❌</span> No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RemoveProductConfirmation;