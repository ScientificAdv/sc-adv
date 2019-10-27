/* eslint-disable no-prototype-builtins */
export const state = () => ({
    meta: {}
})

export const mutations = {
    SET_META(state, meta) {
        state.meta = meta;
    }
}

export const actions = {
    setMeta({ commit }, meta) {
        commit('SET_META', meta);
    }
}
