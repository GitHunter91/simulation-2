import React from 'react';

export const House = (props)=>{
    return(
        <div>
            House
            <button onClick={props.deleteHouse}>Delete</button>
        </div>
    )
}
