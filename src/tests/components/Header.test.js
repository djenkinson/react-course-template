import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../compnents/Header';
import { startLogout } from '../../actions/auth';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();
})