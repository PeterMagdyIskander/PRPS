import { createStore } from 'vuex'
function areCredentialsValid(credentials) {
  if (!credentials) return false;
  const { token, expiry } = credentials;
  const now = new Date().getTime();
  return token && expiry && now < expiry;
}

function saveCredentials(credentials) {
  localStorage.setItem('userCredentials', JSON.stringify(credentials));
}

function getStoredCredentials() {
  const storedCredentials = localStorage.getItem('userCredentials');
  return storedCredentials ? JSON.parse(storedCredentials) : null;
}

export default createStore({
  state: {
    user: {
      name:"Peter",
      questionnaire:true,//could be, started,
    }
  },
  getters: {
    getUser: (state) => state.user,
    getLoading: (state) => state.loading,
    getFailed: (state) => state.failed
  },
  mutations: {
    setUser: (state, user) => (state.user = user),
    setLoading: (state, loading) => (state.loading = loading),
    setFailed: (state, failed) => (state.failed = failed)
  },
  actions: {
    async login({ commit }) {},
    updateUser({ commit }, user) {
      commit('setUser', user);
    },
  },
  modules: {
  }
});