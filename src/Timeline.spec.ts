import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Timeline from './Timeline.vue'


describe('Timeline', () => {
    it('renders 3 time periods', () => {
        const wrapper = mount(Timeline)

        expect(wrapper.findAll('[data-test="period"]')).toHaveLength(3)
    })

    it('udates hte period when clicked', async () => {
        const wrapper = mount(Timeline)
        const $today = wrapper.findAll('[data-test="period"]')[0]

        expect($today.classes()).toContain('is-active')

        const $thisWeek = wrapper.findAll('[data-test="period"]')[1]
        await $thisWeek.trigger('click')
        // await nextTick()

        expect($today.classes()).not.toContain('is-active')
        expect($thisWeek.classes()).toContain('is-active')
    })

    it('renders todays post by default', () => {
        const wrapper = mount(Timeline)

        expect(wrapper.findAll('[data-test="period"]')).toHaveLength(3)
    })

})
