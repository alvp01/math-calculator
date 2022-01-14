import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Quote from '../pages/Quote';
import Home from '../pages/Home';
import Calculator from '../components/Calculator';
import CalculatorPage from '../pages/CalculatorPage';

describe('Test components', () => {
  test('Home snapshot', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  test('Quote snapshot', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });

  test('Calculator page snapshop', () => {
    const tree = render(<CalculatorPage />);
    expect(tree).toMatchSnapshot();
  });

  test('Calculator component test', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByTestId('result')).toHaveTextContent('1');
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('result')).toHaveTextContent('3');
  });
});
