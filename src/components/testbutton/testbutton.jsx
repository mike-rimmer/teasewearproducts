import React, {useState, useEffect} from 'react';

function TestButton(name){
    const [caption, setCaption]=useState('off')
    return(
        <button onClick= {()=>setCaption('Clicked')}>{caption}</button>
    )
}

export default TestButton;