export const mutations = {
  user_connected(state, user) {
    for (const element in user) {
      console.log(element);
      state.user_connected[element] = user[element];
    }
  }
};
