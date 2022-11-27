import { defineStore } from "pinia";
import axRequest from "@/service/request/index"

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houselist: [],
    currentPage: 1,
  }),
  actions: {
    async fatchSuggestData() {
      const res = await axRequest.get({
        url: "/home/hotSuggests"
      })
      this.hotSuggests = res.data
    },

    async fatchCategoriesData(){
      const res = await axRequest.get({
        url: "/home/categories"
      })
      this.categories = res.data
    },

    async fatchHouseListData(){
      const res = await axRequest.get({
        url: "/home/houselist",
        params: {
          page: this.currentPage
        },
      })
      this.houselist.push(...res.data)
      this.currentPage++
    }
  },
});

export default useHomeStore