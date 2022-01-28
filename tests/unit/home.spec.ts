import { shallowMount } from '@vue/test-utils';
import home from '@/views/Home.vue';


describe('ShowDataComponent.vue', () => {
    it('select radius option', async () => {
      const wrapper = shallowMount(home)
      // find the select box in the Home.vue component
      const select = wrapper.find('select').findAll('option')
      // wait for selection and select the second option from select box (10Km) 
      await select.at(1).setSelected()
      // check if the chosen value is the same as expected (10)
      expect((wrapper.find('select').element as HTMLSelectElement).value).toBe('10')
    })
  });