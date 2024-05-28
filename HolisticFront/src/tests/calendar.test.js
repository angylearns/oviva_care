import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendary from '../components/calendary/Calendary';
import Cookies from 'js-cookie';

jest.mock('js-cookie');

describe('Calendary Component', () => {
  beforeEach(() => {
    Cookies.get.mockReturnValue(null);
    Cookies.set.mockImplementation(() => {});
  });

  test('renders days of the week', () => {
    render(<Calendary />);
    const daysOfWeek = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
    daysOfWeek.forEach(day => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  test('navigates to the next month', () => {
    render(<Calendary />);
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);
    
  });

  test('navigates to the previous month', () => {
    render(<Calendary />);
    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);
    const previousMonth = new Date();
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    expect(screen.getByText(new RegExp(`^${previousMonth.toLocaleString('default', { month: 'long' }).toUpperCase()}`))).toBeInTheDocument();
  });

  test('selects a date', () => {
    render(<Calendary />);
    const today = new Date();
    const todayButton = screen.getAllByText(today.getDate()).find(el => el.className.includes('date'));
    fireEvent.click(todayButton);
    expect(todayButton).toHaveClass('selected');
  });

  test('deselects a date', () => {
    render(<Calendary />);
    const today = new Date();
    const todayButton = screen.getAllByText(today.getDate()).find(el => el.className.includes('date'));
    fireEvent.click(todayButton); 
    fireEvent.click(todayButton); 
    expect(todayButton).not.toHaveClass('selected');
  });
});
