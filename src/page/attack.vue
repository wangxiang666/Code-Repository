<!--  -->
<template>
  <div id="myholder"></div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      rappidApp: null,
      themePicker: null
    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created () {
  },
  mounted () {
    joint.setTheme('modern')
    this.rappidApp = new App.MainView({ el: '#myholder' })
    this.themePicker = new App.ThemePicker({ mainView: this.rappidApp })
    this.themePicker.render().$el.appendTo(document.body)
    const graph = this.rappidApp.graph
    let rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: 'blue'
      },
      label: {
        text: 'Hello',
        fill: 'white'
      }
    });
    rect.addTo(graph);

    let rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr('label/text', 'World!');
    rect2.addTo(graph);

    let link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>