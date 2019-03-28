/* eslint-disable */

import {mount} from '@vue/test-utils'
import AppHello from '../AppHello'

describe('AppHello', () => {
    it('renders out the hello text', () => {

        let wrapper = mount(AppHello);

        // console.log(wrapper.html());

        // expect(true).toBe(true)
        expect(wrapper.html()).toContain('Hello');
    })
});
