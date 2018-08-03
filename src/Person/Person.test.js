import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Person from './Person';

configure({adapter: new Adapter()});

describe("<Person />", () => {
  it('Returns something', () => {
    const wrapper = shallow(<Person />);
    expect(wrapper.matchesElement(<p>I'm a person React Component!</p>)).toEqual(true);
  });
});