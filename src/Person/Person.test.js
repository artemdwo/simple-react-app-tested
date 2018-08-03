import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Person from './Person';

configure({adapter: new Adapter()});

describe("<Person />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Person />);
    });

  it('Returns <p> with static text', () => {
    expect(wrapper.containsAnyMatchingElements([<p>Hey! I'm a React Component!</p>])).toEqual(true);
  });

  it('Returns name:Jim who\'s 30 years old', () => {
    wrapper.setProps({
        name:"Jim",
        age:30
    });
    expect(wrapper.containsAnyMatchingElements([<p>My name is Jim and I am 30 years old.</p>])).toEqual(true);
  });

  it('Returns name:Jane who\'s 26 years old', () => {
    wrapper.setProps({
        name:"Jane",
        age:26
    });
    expect(wrapper.containsAnyMatchingElements([<p>My name is Jane and I am 26 years old.</p>])).toEqual(true);
  });
});