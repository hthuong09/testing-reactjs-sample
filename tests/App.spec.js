import React, { Component } from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from '../src/App';

describe('App', () => {
    it('App render without crashed', () => {
        const wrapper = shallow(<App />);
    });
    
    it('Main Page is displayed by default, Image Page is hidden by default', () => {
        const wrapper = shallow(<App />);
        expect([
            wrapper.find('MainPage').length,
            wrapper.find('ImagePage').length,
        ]).to.eql([
            1,
            0,
        ]);
    });
    
    it('When click on [Image Page] link, show Image Page, hide Main Page', () => {
        const wrapper = shallow(<App />);
        wrapper.find('[data-test="imagePageLink"]').simulate('click');
        expect([
            wrapper.find('MainPage').length,
            wrapper.find('ImagePage').length,
        ]).to.eql([
            0,
            1,
        ]);
    });

    it('When click on [Main Page] link, show Main Page, hide Image Page', () => {
        const wrapper = shallow(<App />);
        wrapper.find('[data-test="imagePageLink"]').simulate('click');
        wrapper.find('[data-test="mainPageLink"]').simulate('click');
        expect([
            wrapper.find('MainPage').length,
            wrapper.find('ImagePage').length,
        ]).to.eql([
            1,
            0,
        ]);
    });
    
    it('When [Show Subpage] link is clicked, showSubPage is called and this.state.isShowSubPage=true', () => {
        const wrapper = shallow(<App />);
        const showSubPageSpy = spy(wrapper.instance(), 'showSubPage');
        wrapper.find('MainPage').prop('showSubPage')();
        expect([
            showSubPageSpy.calledOnce,
            wrapper.state('isShowSubPage')
        ]).to.eql([
            true,
            true,
        ]);
    });
});