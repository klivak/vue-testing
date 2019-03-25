/* eslint-disable */


import {mount} from '@vue/test-utils'
import Component from './Component'

describe('test', () => {
    it('works', () => {

        let wrapper = mount(Component);

        // console.log(wrapper.html());

        // expect(true).toBe(true)
        expect(wrapper.html()).toContain('Hello Vue');
    })
});
