import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Calendar = props => {
 const { days } = props;
 if (days[0] !== undefined) {
  return (
   <div className='days'>
    <ul className='days__list'>
     {days.map((item, index) => {
      return (
       <li key={index}>
        <Link to={`/day/${item.date}`}>
         <p className={`day__state ${item.state === ':)' ? 'happy' : 'sad'}`}>{item.state}</p>
        </Link>
       </li>
      )
     })}
    </ul>
   </div>
  );
 } else {
  return (
   <div className='Calendar'>
    <p>Click on the + to see how your day went</p>
   </div>
  )
 }
}

Calendar.propTypes = {
 days: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Calendar;