import React, { useState } from 'react';
import './Inc_dnc.css';

function Inc_dnc() {
    const [count, setCount] = useState(0); 
    return (
        <>
            <div>
                <h1 id="title">Increment & Decrement</h1> 
                <button id='minus' onClick={() => setCount(count => count - 1)} style={{ marginRight: 10 }}>-</button>
                <span id='cont'>{count}</span>
                <button id='plus' onClick={() => setCount(count => count + 1)} style={{ marginRight: 20 }}>+</button>
            </div>
        </>
    );
}
    
export default Inc_dnc;