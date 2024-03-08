import React from 'react'

// in button we will see which parameters we are getting and what we are doing with them
function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
    // Why the className is empty? and what is the use of ...props?
    /*
    ...props is a way to get all the props that we are not destructuring in the component.
    className is empty because it is a default value. If we don't pass a className
    it will be empty and if we pass a className it will be used.
    */
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `}{...props}>
            {children}
            </button>
    )
}

export default Button
