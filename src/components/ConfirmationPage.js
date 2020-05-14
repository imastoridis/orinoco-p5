import React, { useEffect } from 'react'

function  ConfirmationPage() {
    useEffect(() => {
        // POST request 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('http://localhost:3000/api/furniture/order', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    }, []);




    
    return (
        <div>Hello</div>
    )
}

export default ConfirmationPage
