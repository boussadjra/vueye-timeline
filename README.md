# Vueye Timeline


# Installation

    npm i vueye-timeline --save

# Usage

```js
<template>
  <div id="app">
    <vueye-timeline v-model="date" color="#4466ee" format="dd/mm/yyyy"/>
  </div>
</template>

<script>
import VueyeTimeline from "vueye-timeline";
export default {
  name: "App",
  data: () => ({
   date: {
      value:new Date(),
      formattedValue:''
    }
  }),
  components: {
    VueyeTimeline
  }
};
</script>
```

In `main.js` use the `composition-api` plugin :

```js
import Vue from 'vue';
import App from './App.vue';
import VueComp from '@vue/composition-api';
Vue.config.productionTip = false;

Vue.use(VueComp);

new Vue({
	render: h => h(App),
}).$mount('#app');
```

# Demo

[Date picker Demo](https://boussadjra.github.io/vueye-timeline/)

# props and directives

| prop            | description                                                                     | default      |
| --------------- | ------------------------------------------------------------------------------- | ------------ |
| format          | Provide the date format                                                         | 'yyyy-mm-dd' |
| customFormatter | Define a custom formatter as a function that takes the date object as parameter | undefined    |
| color           | The main color                                                                  | #5118ac      |

**`v-model`** has a value an object with two fields

-   `value` : the Date object instance.
-   `formattedValue` : the date value returned as formatted string

> **Note :**
The clear icon **×** doesn't clear the input value but It initialize the date value to the current year (January 1st, currentYear) 
### Available formats :

The `format` prop could accept one of the following formats as a value :

    "yyyy/mm/dd", "dd/mm/yyyy", "mm/dd/yyyy", "yyyy-mm-dd", "dd-mm-yyyy", "mm-dd-yyyy"

The formats listed above are limited and they may not respond to your use case,
so you could define your own formatter and pass it as value of the `customFormatter` prop

```js
template>
  <div id="app">
    <vueye-timeline v-model="date" color="#4466ee" :customFormatter="customFormatter"/>
  </div>
</template>

<script>
import VueyeTimeline from "vueye-timeline";
export default {
  name: "App",
  data: () => ({
    date: {
      value: new Date(),
      formattedValue: ""
    }
  }),
  methods: {
    customFormatter(date) {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

      const _month = date.getMonth();
      const _weekday = date.getDay();
      let day = date.getDate();
      switch (day) {
        case 1:
          day = "1st";
          break;
        case 2:
          day = "2nd";
          break;
        case 3:
          day = "3rd";
          break;
        default:
          day = day + "th";
          break;
      }
     let _dateString = `${weekdays[_weekday]} ${
        months[_month]
      }, ${day} ${date.getFullYear()}`;
      return _dateString;
    }
  },
  components: {
    VueyeTimeline
  }
};
</script>


```
