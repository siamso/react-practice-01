import React from 'react';
import Row from './Row.js';

function Table({items}) {
  return (
    <table className='table-container'>
        <tbody>
            {items.map((item) => (
                <Row key={item.id} item={item}/>
            ))}
        </tbody>
    </table>
  )
}

export default Table