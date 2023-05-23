import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button0
  let button1
  let button2
  let button3
  let button4
  let button5
  let button6
  let button7
  let button8
  let button9
  let buttonAdd
  let buttonSubtract
  let buttonMultiply
  let buttonDivide
  let buttonEquals
  let runningTotal
  let clear

  beforeEach(() => {
    container = render(<Calculator/>)
    button0 = container.getByTestId('number0')
    button1 = container.getByTestId('number1')
    button2 = container.getByTestId('number2')
    button3 = container.getByTestId('number3')
    button4 = container.getByTestId('number4')
    button5 = container.getByTestId('number5')
    button6 = container.getByTestId('number6')
    button7 = container.getByTestId('number7')
    button8 = container.getByTestId('number8')
    button9 = container.getByTestId('number9')
    buttonAdd = container.getByTestId('operator-add')
    buttonSubtract = container.getByTestId('operator-subtract')
    buttonMultiply = container.getByTestId('operator-multiply')
    buttonDivide = container.getByTestId('operator-divide')
    buttonEquals = container.getByTestId('operator-equals')
    runningTotal = container.getByTestId('running-total')
    clear = container.getByTestId('clear')
  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to accurately add two numbers', () => {
    //declare variable for all relevant keys - 1, +, 4 and =
    //also declare running total
    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to accurately subtract one number from another', () => {
    fireEvent.click(button7)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to accurately multiply two numbers', () => {
    fireEvent.click(button3)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button5)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should be able to accurately divide one number by another', () => {
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(buttonDivide)
    fireEvent.click(button7)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to concatenate multiple number button clicks', () => {
    fireEvent.click(button3)
    fireEvent.click(button3)
    fireEvent.click(button3)
    fireEvent.click(button3)
    expect(runningTotal.textContent).toEqual('3333')
  })

  it('should be able to chain multiple operations together', () => {
    fireEvent.click(button2)
    fireEvent.click(buttonAdd)
    fireEvent.click(button2)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button2)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button2)
    fireEvent.click(buttonDivide)
    fireEvent.click(button2)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to clear the running total without affecting the calculation', () => {
    fireEvent.click(button5)
    fireEvent.click(buttonAdd)
    fireEvent.click(button3)
    fireEvent.click(buttonEquals)
    fireEvent.click(buttonAdd)
    fireEvent.click(button3)
    fireEvent.click(clear)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('8')
  })
})

