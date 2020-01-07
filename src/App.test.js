import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter:new EnzymeAdapter()});

const setup = (props={},state=null) => {
  const wrapper = shallow(<App {...props}/>);
  if (state) wrapper.setState(state)
  return wrapper;
}

const findbyAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}

test('renders without any faults',() => {
  const wrapper = setup();
  const appComponent = findbyAttr(wrapper,'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button',() => {
  const wrapper = setup();
  const appComponent = findbyAttr(wrapper,'increment-button');
  expect(appComponent.length).toBe(1);
});

test('renders counter display',() => {
  const wrapper = setup();
  const appComponent = findbyAttr(wrapper,'counter-display');
  expect(appComponent.length).toBe(1);
});

test('counter starts at 0',() => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('renders the decrement button',() => {
  const wrapper = setup();
  const appComponent = findbyAttr(wrapper,'decrement-button');
  expect(appComponent.length).toBe(1);
});

test('renders the error message span',() => {
  const wrapper = setup();
  const appComponent = findbyAttr(wrapper,'error-message-span');
  expect(appComponent.length).toBe(1);
})

test('clicking incrment button increments counter in the display',() => {
  const counter = 7;
  const wrapper = setup(null,{counter});
  const button = findbyAttr(wrapper,'increment-button');
  button.simulate('click');
  wrapper.update();

  const display = findbyAttr(wrapper,'counter-display');
  expect(display.text()).toContain(counter + 1);
});

test('clicking the decrement button decrements the counter in the display',() => {
  const counter = 6;
  const wrapper = setup(null,{counter});
  const button = findbyAttr(wrapper,'decrement-button');
  button.simulate('click');
  wrapper.update();

  const display = findbyAttr(wrapper,'counter-display');
  expect(display.text()).toContain(counter - 1);

});

test('show error message if counter go below zero',() => {
  const counter = 0;
  const wrapper = setup(null,{counter});
  const button = findbyAttr(wrapper,'decrement-button');
  button.simulate('click');
  wrapper.update();

  const errorMessage = findbyAttr(wrapper,'error-message-span');
  expect(errorMessage.text()).toBe('Counter cannot get below 0');
});

test('fade away the error if the counter is equal or above zero',() => {
  throw new Error();
});
