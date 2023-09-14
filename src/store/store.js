import axios, { Axios } from "axios";
import { onBeforeUnmount } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: "Kareem",
    city: "",
    data: {},
  },
  getters: {},
  mutations: {
    // GET_TIME_FOR_PRAY(state, data) {
    //   state.data = data;
    // },
  },
  actions: {
    // getTimeForPray(city) {
    //   if (city) {
    //     axios
    //       .get(
    //         `http://api.aladhan.com/v1/timingsByCity/10-09-2023?city=&country=SA&method=8`
    //       )
    //       .then((data) => {
    //         this.commit("GET_TIME_FOR_PRAY", data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
    // },
  },
  modules: {},
});
