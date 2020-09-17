import React from 'react';
import CowDetail from './CowDetail';

const List = ({cowsList}) => {
  console.log(cowsList)
  let renderedCow = cowsList.map((cow) => {
    return < CowDetail cow={cow} />
  })

  return (
    <div> {renderedCow} </div>
  )
}





export default List;