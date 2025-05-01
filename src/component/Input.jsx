import React from 'react'; 

const Input = ({
    type,
    placeholder,
    value,
    onChange,
    style,
    className,
}) => {
    return (
        <input
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={style}
            className={className}
        />
    );
};

export default Input;
