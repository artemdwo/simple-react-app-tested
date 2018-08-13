import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({adapter: new Adapter()});

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find(App)).toHaveReturned;
  });

  it('does not render any <Person> components by default', () => {
    expect(wrapper.state().showPersonList).toBe(false)
    expect(wrapper.find('person')).toBeUndefined
  });

  it('does render three <Person> components when \'showPersonList\' state is TRUE', () => {
    wrapper.setState({showPersonList: true})
    expect(wrapper.state().showPersonList).toBe(true)
    expect(wrapper.find('person')).toBeDefined
    expect(wrapper.find('person').length).toEqual(3)
  });

  it('does not render <Person> components when \'showPersonList\' state is back to FALSE', () => {
    wrapper.setState({showPersonList: true})
    expect(wrapper.find('person').length).toEqual(3)
    wrapper.setState({showPersonList: false})
    expect(wrapper.find('person')).toBeUndefined
  });
});
