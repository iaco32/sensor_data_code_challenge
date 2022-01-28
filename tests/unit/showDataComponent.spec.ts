import { shallowMount } from '@vue/test-utils';
import ShowDataComponent from '@/views/ShowDataComponent.vue';
// import fetchMock from "jest-fetch-mock";

// fetchMock.enableMocks();

describe('ShowDataComponent.vue', () => {
    it('renders props.radius when passed', async () => {
      const wrapper = shallowMount(ShowDataComponent, {
        propsData: { 
          radius: '5' 
        }
        
      })
      expect(wrapper.props().radius).toBe('5')
      // expect(wrapper.props('radius')).toBe('5')
    })

    const exampleValues = [
      {
        "sampling_rate": null,
        "id": 8136252736,
        "timestamp": "2021-12-07 13:21:12",
        "location": {
          "longitude": "9.952",
          "id": 10070,
          "country": "DE",
          "altitude": "13.5",
          "exact_location": 0,
          "indoor": 0,
          "latitude": "53.594"
        },
        "sensordatavalues": [
          {
            "value_type": "temperature",
            "id": 17901553186,
            "value": "3.40"
          },
          {
            "value_type": "humidity",
            "id": 17901553191,
            "value": "96.40"
          }
        ],
        "sensor": {
          "id": 19821,
          "pin": "7",
          "sensor_type": {
            "id": 9,
            "manufacturer": "various",
            "name": "DHT22"
          }
        }
      },
      {
        "sampling_rate": null,
        "id": 8136252649,
        "timestamp": "2021-12-07 13:20:58",
        "location": {
          "longitude": "9.958",
          "id": 4117,
          "country": "DE",
          "altitude": "16.6",
          "exact_location": 0,
          "indoor": 0,
          "latitude": "53.622"
        },
        "sensordatavalues": [
          {
            "value_type": "temperature",
            "id": 17901553180,
            "value": "1.80"
          },
          {
            "value_type": "humidity",
            "id": 17901553181,
            "value": "50.50"
          }
        ],
        "sensor": {
          "id": 8152,
          "pin": "7",
          "sensor_type": {
            "id": 9,
            "manufacturer": "various",
            "name": "DHT22"
          }
        }
      }
    ]
  })
