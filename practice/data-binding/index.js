import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      {{arr.join(' ')}}
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3]
  }
})
