import React from 'react';
import { mount } from 'enzyme';
import FacebookProvider, { Share } from '../src';

describe('Provider', () => {
  it('should be able to create simple instance', () => {
    const wrapper = mount(
      <FacebookProvider appID="123456789">
        <span>Test</span>
      </FacebookProvider>
    );

    expect(wrapper.html()).toBe('<span>Test</span>');
  });

  it('should be able to create simple instance', (done) => {
    const wrapper = mount(
      <FacebookProvider appID="123456789">
        <Share popup>
          <button type="button" onClick={done}>
            Test
          </button>
        </Share>
      </FacebookProvider>
    );

    expect(wrapper.html()).toBe('<button type="button">Test</button>');

    wrapper.find('button').first().simulate('click');
  });
});
