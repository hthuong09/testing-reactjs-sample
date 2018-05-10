import React, { Component } from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import MainPage from '../../../../src/components/pages/main/MainPage';

describe('components/pages/main/MainPage', () => {
  const baseProps = {
    isShowSubPage : false,
    showSubPage : () => {},
  };
  
  it('When props.isShowSubPage=false, Sub Page is hidden', () => {
    const wrapper = shallow(<MainPage {...baseProps} />);
    expect(wrapper.find('SubPage').length).to.equal(0);
  });

  it('When props.isShowSubPage=true, Sub Page is displayed', () => {
    const props = {
      ...baseProps,
      isShowSubPage : true,
    };
    const wrapper = shallow(<MainPage {...props} />);
    expect(wrapper.find('SubPage').length).to.equal(1);
  });
  
  it('when click on [Show Subpage] link, props.showSubPage is called', () => {
    const showSubPageSpy = spy();
    const wrapper = shallow(<MainPage isShowSubPage={true} showSubPage={showSubPageSpy} />);
    wrapper.find('[data-test="showSubpageLink"]').simulate('click');
    expect(showSubPageSpy.calledOnce).to.equal(true);
  });
});