// slot content should be rendered

import {mount} from '@vue/test-utils'
import AppList from '../AppList'

describe('AppList', () => {
    it('renders content within the default slot', () => {
        let wrapper = mount(AppList, {
            slots: {
                items: 'Content'
            }
        });

        expect(wrapper.html()).toContain('Content');

    })
});
