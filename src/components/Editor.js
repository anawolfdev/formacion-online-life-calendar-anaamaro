import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Editor = props => {
 const { getDate, getState, happyDay, happyMsg, savedUserData, date, duplicateDate } = props;
 return (
  <div className="FormEditor">
   <form className="form" action=''>
    <label htmlFor="date">Date </label>
    <input className="date__input" type='date' name='date' id='date' onChange={getDate} required />
    <p className={`error ${duplicateDate === false ? 'hidden' : ''}`}>This day is registered yet</p>
    <div className='state__wrapper'>
     <p>State</p>
     <div className='state'>
      <label htmlFor='happy'>
       <input type='radio' name='state' id='happy' value=':)' onChange={getState} checked='checked' />{':)'}
      </label>
      <label htmlFor='sad'>
       <input type='radio' name='state' id='sad' value=':(' onChange={getState} />{':('}
      </label>
     </div>
    </div>
    <label htmlFor='msg' className={`happymsg ${happyDay === false ? 'hidden' : ''}`}>Message
    <textarea className='happymsg__text' name='happy__msg' id='happy__msg' cols='30' rows='10' onChange={happyMsg}></textarea>
    </label>
    <div className='btn__wrapper'>
     <Link to='/'>
      <input className='btn__save' type='submit' onClick={savedUserData} value='Save' disabled={date !== '' ? '' : 'disabled'} />
     </Link>
     <Link className='btn__cancel' to='/'>Cancel</Link>
    </div>
   </form>
  </div>
 )
}

Editor.propTypes = {
 getDate: PropTypes.func.isRequired,
 getState: PropTypes.func.isRequired,
 happyDay: PropTypes.bool.isRequired,
 happyMsg: PropTypes.func.isRequired,
 savedUserData: PropTypes.func.isRequired,
 date: PropTypes.string.isRequired,
 duplicateDate: PropTypes.bool.isRequired
}

export default Editor;