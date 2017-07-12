import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import App from '../src/app';
import PaletteList from '../src/Components/paletteList';

chai.use(chaiEnzyme);

describe('Component: App', () => {
  describe('App-body', () => {
    it('should render a PaletteList component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(<PaletteList />));
    });
  });
});
