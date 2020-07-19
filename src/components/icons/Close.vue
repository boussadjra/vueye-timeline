<template>
  <svg
    :height="height"
    :width="width"
    :fill="fill"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xml:space="preserve"

  >
    <path
      d="M405 375l-119 -119l119 -119l-30 -30l-119 119l-119 -119l-30 30l119 119l-119 119l30 30l119 -119l119 119z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'close',
  props: {
    fill: {
      default: '#000'
    },
    height: {
      default: '20px'
    },
    width: {
      default: '20px'
    }
  }
}
</script>

<style>
</style>
