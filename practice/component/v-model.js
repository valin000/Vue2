import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    Comp: component
  },
  data: {
    value: '123'
  },
  el: '#root',
  template: `
    <div>
      <comp v-model="value"></comp>
    </div>
  `
})
