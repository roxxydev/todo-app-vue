'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import Api from './Api';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        todos: (state) => {
            return state.todos;
        }
    },
    mutations: {
        TODO_LOADED (state, todos) {
            state.todos = todos;
        },
        TODO_DELETED (state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        TODO_CREATED (state, todo) {
            state.todos = [...state.todos, todo];
        }
    },
    actions: {
        async initiateTodos ({ commit }) {

            const res = await Api.fetchTodos();
            if (res && Array.isArray(res.data) && res.data.length) {
                commit('TODO_LOADED', res.data);
            }
        },
        async markTodoCompleted ({ commit, state }, id) {

            if (id) {
                const todos = state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }

                    return todo;
                });
                commit('TODO_LOADED', todos);
            }
        },
        async deleteTodo ({commit, state}, id) {

            const todos = [...state.todos.filter(todo => todo.id !== id)];
            commit('TODO_LOADED', todos);
            await Api.deleteTodo(id);
        },
        async createTodo ({ commit }, todo) {

            const res = await Api.createTodo(todo);
            commit('TODO_CREATED', res.data);
        }
    }
});

export default store;
