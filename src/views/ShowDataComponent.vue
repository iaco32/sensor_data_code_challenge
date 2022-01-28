<template>
  <div>
    <div class="container">
      <div v-if="spinner">
        <div class="d-flex justify-content-center">
          <div class="loader">Loading data...</div>
        </div>
      </div>
      <div v-else>
        <h2>Chosen radius: {{ radius }} Km</h2>
        <button type="button" class="btn btn-primary" @click="$router.go(-1)">
          Go back
        </button>
        <br />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sensor type</th>
              <th scope="col">Temperature °C</th>
              <th scope="col">Pressure hPa</th>
              <th scope="col">Humidity %</th>
              <th scope="col">PM10 µg/m³</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in totalSensortypes" :key="item.id">
              <th scope="row">{{ item.name }}</th>
              <td>{{ item.temperature.value }}</td>
              <td>{{ item.pressure.value }}</td>
              <td>{{ item.humidity.value }}</td>
              <td>{{ item.p1.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "show-data-component",
  data() {
    return {
      radius: this.$store.state.radius,
      spinner: false,
      totalSensortypes: [],
      // Elbphilharmonie in Hamburg coordinates are 53.541722417275764, 9.987272297126564 from Google Maps
      // Calling Api to show all sensors within a max radius (radius from store state variable)
      apiCall:
        "https://data.sensor.community/airrohr/v1/filter/area=53.541722417275764,9.987272297126564," +
        this.$store.state.radius,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.spinner = true;
      try {
        const response = await axios.get(this.apiCall);
        const data = response.data;
        this.spinner = false;
        data.forEach((element) => {
          // this loop uses a constructor to organize data in a new array of objects to use in v-for directive
          this.totalSensortypes.push(new this.formatData(element));
        });
      } catch (error) {
        alert("There was an error in receiving data!");
        this.spinner = false;
      }
    },

    // constructor to organize every sensor type values in a signle object
    formatData(object) {
      this.id = object.id;
      this.name = object.sensor.sensor_type.name;
      // filter every object by temperature, pressure, humidity and P1
      this.temperature = object.sensordatavalues.filter(
        (temperature) => temperature.value_type === "temperature"
      )[0]
        ? object.sensordatavalues.filter(
            (temperature) => temperature.value_type === "temperature"
          )[0]
        : { id: null, value: "", value_type: "temperature" };

      this.pressure = object.sensordatavalues.filter(
        (pressure) => pressure.value_type === "pressure"
      )[0]
        ? object.sensordatavalues.filter(
            (pressure) => pressure.value_type === "pressure"
          )[0]
        : { id: null, value: "", value_type: "pressure" };

      this.humidity = object.sensordatavalues.filter(
        (humidity) => humidity.value_type === "humidity"
      )[0]
        ? object.sensordatavalues.filter(
            (humidity) => humidity.value_type === "humidity"
          )[0]
        : { id: null, value: "", value_type: "humidity" };

      this.p1 = object.sensordatavalues.filter(
        (p1) => p1.value_type === "P1"
      )[0]
        ? (this.p1 = object.sensordatavalues.filter(
            (p1) => p1.value_type === "P1"
          )[0])
        : { id: null, value: "", value_type: "P1" };
    },
  },
};
</script>

<style scoped lang="scss">
thead tr:nth-child(1) th {
  background: var(--bs-body-bg);
  position: sticky;
  top: 0;
  z-index: 10;
}
.loader {
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-size: 18px;
  color: #080808;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.loader:before {
  content: "";
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  border: 5px solid transparent;
  border-top: 5px solid #3c3c3c;
  border-right: 5px solid #3c3c3c;
  border-radius: 50%;
  animation: animateC 2s linear infinite;
}

@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
</style>