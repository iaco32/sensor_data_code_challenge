# aboutyou-vue-coding-challenge

This is a best practices challenge where we want to find out more about your knowledge of coding standards and principles, use of mappers, interfaces etc.

Your task is to create a sample application in Vue.js by using sensor data. [opendata-stuttgart API](https://github.com/opendata-stuttgart/meta/wiki/EN-APIs).

Create one page showing the overall actual environmental sensor data around the Elbphilharmonie in Hamburg. The user should be able to get the average sensordata provided by the API for a radius of 5, 10 and 20km. Please list in a table the average temperature, pressure, humidity and P1 (PM10).


## Instructions:

1. Read the instructions how to map the necessary data provided by [opendata-stuttgart API](https://github.com/opendata-stuttgart/meta/wiki/EN-APIs).
2. Show dropdown with the possibility to choose between a radius of 5, 10 and 20km
3. By choosing the radius navigate to a detailpage offering a table with average data of temperature, pressure, humidity and P1 (PM10)
4. Create a button to navigate back to the radius selection

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```
