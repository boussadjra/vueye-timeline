<template>
  <div class="ve-tl__wrapper">
    <div class="ve-tl__item" v-for="(item, index) in items" :key="index">
      <div class="ve-tl__item-content" :style="item.styleConfig?item.styleConfig:{}">
        <h3 class="ve-tl__item-content_title">{{item.title}}</h3>
        <div class="ve-tl__item-content_body">{{item.body}}</div>
      </div>
      <div class="ve-tl__item_divider">
      <div class="ve-tl__item_divider_dot" :style="{background:item.styleConfig?item.styleConfig.dotColor:'white'}">
      
      </div>
      </div>
      <div class="ve-tl__item_spacer">
      <slot :item="item" name="opposite"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueye-timeline",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" src="./style.scss">
</style>
