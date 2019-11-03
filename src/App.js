import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import LocalStorage from 'local-storage';
import Calendar from './components/Calendar';
import Editor from './components/Editor';
import Day from './components/Day';
import getData from './services/getData';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			happyDay: true,
			date: '',
			state: ':)',
			happyMsg: '',
			days: [],
			duplicateDate: false
		}
		this.getDate = this.getDate.bind(this);
		this.getState = this.getState.bind(this);
		this.happyMsg = this.happyMsg.bind(this);
		this.savedUserData = this.savedUserData.bind(this);
		this.UserCalendar = new getData();
		this.init = this.init.bind(this)
	}

	componentDidMount() {
		this.init();
	}
	init() {
		const savedData = this.UserCalendar.getSavedData();
		if (savedData) {
			this.setState({ days: savedData })
		}
	}
	getDate(event) {
		this.setState({ duplicateDate: false })
		const inputDate = event.currentTarget.value;
		const sameDate = this.state.days.find(item => item.date === inputDate)
		if (sameDate) {
			this.setState({ duplicateDate: true })
			return ''
		}
		else {
			this.setState({ date: inputDate })
			return inputDate
		}
	}
	getState(event) {
		const stateValue = event.currentTarget.value;
		this.setHappyDay(stateValue);
		this.setState({ state: stateValue });
	}
	happyMsg(event) {
		const userHappyMsg = event.currentTarget.value;
		this.setState({ happyMsg: userHappyMsg });
	}
	setHappyDay(state) {
		if (state === ':)') {
			this.setState({ happyDay: true });
		}
		else {
			this.setState({ happyDay: false, happyMsg: '' });
		}
	}
	savedUserData() {
		const date = this.state.date;
		const state = this.state.state;
		const msg = this.state.happyMsg;
		const userDay = {
			date: date,
			state: state,
			msg: msg
		};
		const obj = [...this.state.days];
		obj.push(userDay);
		LocalStorage.set('days', obj);
		this.setState({ date: '', state: ':)', happyMsg: '', HappyDay: true, duplicateDate: false, days: obj });
	}

	render() {
		const { getDate, getState, happyMsg, savedUserData } = this;
		const { happyDay, days, date, duplicateDate } = this.state;
		return (
			<div className='App'>
				<header className='header'>
					<h1 className='header__title'>Life Calendar</h1>
				</header>

				<BrowserRouter>
					<Link className="btn__link" to="Editor"> + </Link>
					<Switch>
						<Route
							exact path='/'
							render={
								() => {
									return (
										<Calendar
											days={days}
										/>
									)
								}
							}
						/>
						<Route
							path='/Editor'
							render={
								() => {
									return (
										<Editor
											date={date}
											duplicateDate={duplicateDate}
											happyDay={happyDay}
											getDate={getDate}
											getState={getState}
											happyMsg={happyMsg}
											savedUserData={savedUserData}
										/>
									)
								}
							}
						/>
						<Route
							path='/day/:date'
							render={
								(routerProps) => {
									return (
										<Day
											routerProps={routerProps}
											days={days}
										/>
									)
								}
							}
						/>
					</Switch>

				</BrowserRouter>
			</div>
		)
	}
}


export default App;
