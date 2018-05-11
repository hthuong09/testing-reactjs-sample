import React, { Component } from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import MainPage from '../../../../src/components/pages/main/MainPage';

// Using baseProps
// When props.isShowSubPage=false, Sub Page is hidden
// when click on [Show Subpage] link, props.showSubPage is called