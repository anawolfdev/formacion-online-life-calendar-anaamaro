import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Day = props => {
 const { routerProps, days } = props;
 const date = routerProps.match.params.date;
 const thisDay = days.find(item => item.date === date);
 if (thisDay) {
  return (
   <div className="day">
    <Link to='/'>
     <p className='back__calendar'></p>
    </Link>
    <p className={`happy__state ${thisDay.state === ':)' ? 'happy' : 'sad'}`}>{thisDay.state}</p>
    <div className='day__info'>
     <div className='date__info'>
      <p className='date'>{thisDay.date}</p>
     </div>
     <div className='message__info'>
      <h2 className={`${thisDay.state === ':(' ? 'hidden' : ''}`}>Message</h2>
      <p className={`message ${thisDay.state === ':(' ? 'hidden' : ''}`}>{thisDay.message}</p>
     </div>
    </div>
   </div>
  )
 } else {
  return (
   <React.Fragment>
    <Link to='/' className='app__back'>Back to the calendar</Link>
    <p>No information for that day</p>
   </React.Fragment>
  )
 }
}

Day.propTypes = {
 days: PropTypes.arrayOf(PropTypes.object).isRequired,
 routerProps: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Day;