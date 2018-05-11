import React, { Component } from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from '../src/App';

// App render without crashed, when will it fail
// Main Page is displayed by default, Image Page is hidden by default
// When click on [Main Page] link, show Main Page, hide Image Page
// When [Show Subpage] link is clicked, showSubPage is called and this.state.isShowSubPage=true