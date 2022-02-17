import React from 'react';

export default function Napit(props) {
  return <div>
            <button className="itemNappi" onClick={ ()=> props.clickMe(1)}>Add maito</button>
            <button className="itemNappi" onClick={ ()=> props.clickMe(2)}>Add juusto</button>
            <button className="itemNappi" onClick={ ()=> props.clickMe(3)}>Add makkara</button>
            <button className="itemNappi" onClick={ ()=> props.clickMe(4)}>Add leipä</button>
  </div>;
}
