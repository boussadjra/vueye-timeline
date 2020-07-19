<template>
  <svg
    :height="height"
    :width="width"
    :fill="fill"
    x="0px"
    y="0px"
    viewBox="0 0 500 500"
    xml:space="preserve"
	style="transform:rotate(-180deg)"
  >
    <path
    d="M405 85v235h-298v-235h298zM405 427c23 0 43 -20 43 -43v-299c0 -23 -20 -42 -43 -42h-298c-24 0 -43 19 -43 42v299c0 23 19 43 43 43h21v42h43v-42h170v42h43v-42h21zM363 277v-42h-43v42h43zM277 277v-42h-42v42h42zM192 277v-42h-43v42h43z" />

  </svg>
</template>

<script>
export default {
  name: "arrow-left",
  props: {
    fill: {
      default: "#000"
    },
    height: {
      default: "20px"
    },
    width: {
      default: "20px"
    }
  }
};
</script>

<style>
</style>
