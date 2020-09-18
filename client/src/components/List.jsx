import React from 'react';
import CowDetail from './CowDetail';

const List = ({cowsList, onClick}) => {
  let renderedCow = cowsList.map((cow) => {
    return <ul key={cow.id}>< CowDetail cow={cow} onClick={onClick}/> </ul>
  })

  return (
    <div > {renderedCow} </div>
  )
}





export default List;