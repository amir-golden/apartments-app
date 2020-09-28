import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appartmentList: []
  },
  mutations: {
    setAppartmentList(state, data) {
      state.appartmentList = data;
    },
    likeTheAppartmentMutation(state, id = null) {
      if (id !== null) {
        const list = state.appartmentList;
        const index = state.appartmentList.findIndex((item) => item.id === id);

        state.appartmentList = [...list.slice(0, index), { ...list[index], liked: !list[index].liked }, ...list.slice(index + 1)];
      } else {
        throw new Error("Не задан ID элемента");
      }
    }
  },
  actions: {
    getAppartmentList({ commit }) {
      return Promise.resolve(
        new Promise((resolve) => {
          setTimeout(() => {
            fetch("entities.json")
              .then(function (response) {
                if (response.status !== 200) {
                  /* eslint-disable no-console */
                  console.log("Looks like there was a problem. Status Code: " + response.status);
                  /* eslint-disable no-console */
                  return;
                }

                response.json().then(function (data) {
                  commit("setAppartmentList", data.response);
                  resolve(data.response);
                });
              })
              .catch(function (err) {
                /* eslint-disable no-console */
                console.log("Fetch Error :-S", err);
                /* eslint-disable no-console */
              });
          }, 700);
        })
      );
    }
  },
  modules: {}
});
