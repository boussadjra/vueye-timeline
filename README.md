# Vueye Timeline

It's a cool Vue.js component used to show item set distributed by time.

# Installation

    npm i vueye-timeline --save

# Usage

```js
<template>
  <div id="app">
    <VueyeTimeline :items="items">
      <template v-slot:opposite="{item}">
        <h1>{{item.year}}</h1>
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
          background: "#d7c7f1",
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
          background: "#d7c7f1",
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
          background: "#d7c7f1",
          color: "#545454",
          dotColor: "#2244e9"
        }
      },
      {
        title: "Item 4",
        body:
          "Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?",
        year: 2019,

        styleConfig: {
          background: "#d7c7f1",
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
  align-items: center;
}


</style>

```

# Demo

[Timeline Demo](https://boussadjra.github.io/vueye-timeline/)

# props and directives

| prop  | description              | default |
| ----- | ------------------------ | ------- |
| items | the item set provided to | []      |


## items config:

  each item could have the following structure :

  -**title** : the item title which is shown in bold style
  
  -**body** : the item content.

  -**styleConfig** : the item style like background, color and width.

