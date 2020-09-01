'use strict';

import Axios from 'axios';

class Api {

    constructor() {
        this.$http = Axios.create({
            baseURL: process.env.VUE_APP_API_URL
        });
    }

    async fetchTodos() {
        return await this.$http.get('todos');
    }

    async deleteTodo(id) {
        return await this.$http.delete(`todos/${id}`);
    }

    async createTodo(todo) {
        return await this.$http.post('todos', todo);
    }
}

export default new Api();
