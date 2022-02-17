import React from 'react';

export default function Ostokset(props) {
  return <div>
            <ul>
                {
                    props.listItems.map((item, index)=>{
                        return <li className="contItem" key={index}>{item.qty} {item.value}</li>
                    })
                }
            </ul>
  </div>;
}
