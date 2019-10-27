/* eslint-disable no-prototype-builtins */

export default ({ store, route }) => {
    let meta = {};
    if (route.hasOwnProperty('meta')) {
        meta = route.meta[0];
    }
    store.dispatch('setMeta', meta);
}
