import React from 'react';

export default function Lowerbar (props) {

    console.log(props);

  return <div>
        <ul class="flex-container lower">
            { 
                props.listItems.map(item =>{
                    return <li href='#'class="flex-item-2">{item}</li>
                })
            }    
        </ul>
  </div>;
  
}
