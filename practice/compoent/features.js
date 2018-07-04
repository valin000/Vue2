import Vue from 'vue'

const component = {
  template: `
    <div :style="style">
      <slot></slot>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <comp-one>
      <span>this is content</span>
    </comp-one>
  `
})
