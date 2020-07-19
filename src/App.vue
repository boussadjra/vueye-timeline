<template>
  <div id="app">
    <VueyeTimeline :items="items">
      <template v-slot:opposite="{item}">
        <h1 :style="{color:item.styleConfig.background}">{{item.year}}</h1>
      </template>
    </VueyeTimeline>
  </div>
</template>
    </VueyeTimeline>
</div>
</template>

<script>
import VueyeTimeline from "./components/VueyeTimeline.vue";
export default {
  name: "App",
  data: () => ({
    items: [
      {
        title: "Item 1",
        body:
          "Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?",
        year: 2010,

        styleConfig: {
          background: "#ffc1bd",
          color: "#545454",
          dotColor: "#2244e9",
          width: "280px"
        }
      },
      {
        title: "Item 2",
        body:
          "Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?",
        year: 2014,

        styleConfig: {
          background: "#e7d8ff",
          color: "#545454",
          dotColor: "#2244e9"
        }
      },
      {
        title: "Item 3",
        body:
          "Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?",
        year: 2016,

        styleConfig: {
          background: "#673AB7",
          color: "#eee",
          dotColor: "#2244e9"
        }
      },
      {
        title: "Item 4",
        body:
          "Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?",
        year: 2019,

        styleConfig: {
          background: "#CDDC39",
          color: "#545454",
          dotColor: "#2244e9"
        }
      }
    ]
  }),

  methods: {},
  components: {
    VueyeTimeline
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}

pre {
  margin-top: 20px;
  padding: 10px;
  color: #fff;
  background: #7e06ad;
}
</style>
