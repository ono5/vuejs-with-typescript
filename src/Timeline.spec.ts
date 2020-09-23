import { mount } from '@vue/test-utils'
import Timeline from './Timeline.vue'

describe('Timeline', () => {
    it('renders 3 time periods', () => {
        const wrapper = mount(Timeline)

        const periods = wrapper.findAll('a')
    })
})
