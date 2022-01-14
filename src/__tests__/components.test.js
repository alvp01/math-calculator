import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Quote from '../pages/Quote';
import Home from '../pages/Home';
import Calculator from '../components/Calculator';

describe('Test home', ()=>{
  test('Home snapshot', ()=>{
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
