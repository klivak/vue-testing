/* eslint-disable */

import {mount} from '@vue/test-utils'
import AppHello from '../AppHello'

describe('AppHello', () => {
    it('renders out the hello text', () => {

        let wrapper = mount(Component);

        // console.log(wrapper.html());

        // expect(true).toBe(true)
        expect(wrapper.html()).toContain('Hello');
    })
});
