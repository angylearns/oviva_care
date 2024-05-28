
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './calendary.css';

const daysOfWeek = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState(() => {
    const savedDates = Cookies.get('selectedDates');
    if (savedDates) {
      const parsedDates = JSON.parse(savedDates);
      for (const monthKey in parsedDates) {
        parsedDates[monthKey] = parsedDates[monthKey].map(dateString => new Date(dateString));
      }
      return parsedDates;
    }
    return {};
  });
  
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const datesToSave = {};
    for (const monthKey in selectedDates) {
      datesToSave[monthKey] = selectedDates[monthKey].map(date => date.toISOString());
    }
    Cookies.set('selectedDates', JSON.stringify(datesToSave), { expires: 30 });
  }, [selectedDates]);

  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

  const startOfCalendar = new Date(startOfMonth);
  startOfCalendar.setDate(startOfMonth.getDate() - startOfMonth.getDay());

  const endOfCalendar = new Date(endOfMonth);
  endOfCalendar.setDate(endOfMonth.getDate() + (6 - endOfMonth.getDay()));

  const dates = [];
  let date = startOfCalendar;
  while (date <= endOfCalendar) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  const handleDayClick = (date) => {
    const monthKey = `${currentMonth.getFullYear()}-${currentMonth.getMonth()}`;
    setSelectedDates((prevSelectedDates) => {
      const monthDates = prevSelectedDates[monthKey] || [];
      const dateIndex = monthDates.findIndex(d => d.toDateString() === date.toDateString());
      if (dateIndex !== -1) {
        
        return {
          ...prevSelectedDates,
          [monthKey]: monthDates.filter((_, index) => index !== dateIndex)
        };
      } else {
        
        return {
          ...prevSelectedDates,
          [monthKey]: [...monthDates, date]
        };
      }
    });
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthKey = `${currentMonth.getFullYear()}-${currentMonth.getMonth()}`;
  const monthSelectedDates = selectedDates[monthKey] || [];

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <div className="month-label">
          {currentMonth.toLocaleString('default', { month: 'long' }).toUpperCase()} {currentMonth.getFullYear()}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="body">
        <div className="day-names">
          {daysOfWeek.map(day => (
            <div key={day} className="day-name">{day}</div>
          ))}
        </div>
        <div className="dates">
          {dates.map(date => (
            <div
              key={date}
              className={`date ${date.getMonth() !== currentMonth.getMonth() ? 'disabled' : ''} ${monthSelectedDates.some(d => d.toDateString() === date.toDateString()) ? 'selected' : ''}`}
              onClick={() => handleDayClick(date)}
            >
              {date.getDate()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
