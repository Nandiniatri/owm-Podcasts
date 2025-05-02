import React from 'react';

const Image = ({ src, alt , width, height, style, className , onClick}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height} 
            style={style}
            className={className}
            onClick={onClick}
        />
    );
};

export default Image;
