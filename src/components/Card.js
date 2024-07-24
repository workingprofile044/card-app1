import React from 'react';

const Card = ({ title, text, imgSrc, children }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            {imgSrc && <img src={imgSrc} className="card-img-top" alt="..." />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                {children}
            </div>
        </div>
    );
};

export default Card;
