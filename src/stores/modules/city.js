import { getCityAll } from "@/service";
import { defineStore } from "pinia";

const usecityStore = defineStore("city",{
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: "广州"
    }

  }),
  actions: {
    async fetchAllCitiesData(){
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default usecityStore