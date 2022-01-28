<template>
  <div class="home">
    <img alt="AboutYou logo" src="../assets/logo.png" width="200" />
    <div>
      <h2>Hamburg Elbphilharmonie environmental sensor data</h2>
      <h3>Get environmental sensor data around Elbphilharmonie in Hamburg using <a href="https://github.com/opendata-stuttgart/meta/wiki/EN-APIs">opendata-stuttgart API</a></h3>
      <h3>The results of temperature, pressure, humidity and P1 (PM10) will be displayed according to the selected radius.</h3>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col"></div>
        <div class="col">
          <div class="input-group mt-5">
            <label class="input-group-text" for="radius">Choose radius: </label>
            <select
              class="form-select"
              name="radius"
              id="radius"
              v-model="selectedRadius"
              @change="changeRadius()"
            >
              <option value="5">5 Km</option>
              <option value="10">10 Km</option>
              <option value="20">20 Km</option>
              >
            </select>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  private selectedRadius = "";

  public changeRadius() {
    this.$store.state.radius = this.selectedRadius;
    router.push("Showdata");
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
