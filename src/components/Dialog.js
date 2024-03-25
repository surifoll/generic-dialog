import React, { useState } from 'react';

const Dialog = ({ title, content, onYes, onNo, onClose, isModal }) => {
    const dialogClasses = isModal ? 'dialog modal' : 'dialog';

    return (
        <div className={dialogClasses}>
            <div className="dialog-box">
                <div className="dialog-header">
                    <h2>{title}</h2>
                    {isModal && <button className="close-btn" onClick={onClose}>x</button>}
                </div>
                <div className="dialog-content">{content}</div>
                <div className="dialog-footer">
                    <br></br>
                    {!isModal && (
                        <>
                            <button onClick={onYes}>Yes</button>
                            <button onClick={onNo}>No</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


export default Dialog;
