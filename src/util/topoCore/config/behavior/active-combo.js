export default G6 => {
  G6.registerBehavior('active-combo', {
    getEvents() {
      return {
        'combo:dragenter': 'activeCombo',
        'combo:dragleave': 'inactiveCombo',
        'combo:mouseenter': 'activeCombo',
        'combo:mouseleave': 'inactiveCombo'
      }
    },
    shouldBegin(e) {
      return true;
    },
    activeCombo(e) {
      e.item.setState('dragenter', true)
    },
    inactiveCombo(e) {
      e.item.setState('dragenter', false)
    }
  })
}