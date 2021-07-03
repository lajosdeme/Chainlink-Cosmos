import { txClient, queryClient } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Quote } from "./module/types/linktest/quote";
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Quote: {},
        QuoteAll: {},
        _Structure: {
            Quote: getStructure(Quote.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getQuote: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Quote[JSON.stringify(params)] ?? {};
        },
        getQuoteAll: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.QuoteAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('init');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach((subscription) => {
                dispatch(subscription.action, subscription.payload);
            });
        },
        async QueryQuote({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryQuote(key.id, query)).data : (await (await initQueryClient(rootGetters)).queryQuote(key.id)).data;
                commit('QUERY', { query: 'Quote', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryQuote', payload: { options: { all }, params: { ...key }, query } });
                return getters['getQuote']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryQuote', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryQuoteAll({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryQuoteAll(query)).data : (await (await initQueryClient(rootGetters)).queryQuoteAll()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryQuoteAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'QuoteAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryQuoteAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getQuoteAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryQuoteAll', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async sendMsgUpdateQuote({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateQuote(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateQuote:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateQuote:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgDeleteQuote({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteQuote(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteQuote:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteQuote:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgRequestQuote({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgRequestQuote(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgRequestQuote:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestQuote:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgCreateQuote({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateQuote(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateQuote:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateQuote:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async MsgUpdateQuote({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateQuote(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateQuote:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateQuote:Create', 'Could not create message.');
                }
            }
        },
        async MsgDeleteQuote({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteQuote(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteQuote:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteQuote:Create', 'Could not create message.');
                }
            }
        },
        async MsgRequestQuote({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgRequestQuote(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgRequestQuote:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestQuote:Create', 'Could not create message.');
                }
            }
        },
        async MsgCreateQuote({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateQuote(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateQuote:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateQuote:Create', 'Could not create message.');
                }
            }
        },
    }
};
