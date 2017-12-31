/**
 * Created by Yevhen Kryvsun on 12/11/2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import { changeDateRange } from '../../AC'

class DateRange extends Component {
    handleDayClick = (day) => {
        console.log('___PROPS:', this.props)
        const { changeDateRange, range } = this.props
        changeDateRange(DateUtils.addDayToRange(day, range))
    }

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    range: state.filters.dateRange
}), {changeDateRange})(DateRange)
