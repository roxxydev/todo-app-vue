<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todo"/>
            <input type="submit" value="Submit" class="btn"/>
        </form>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions([
            'createTodo'
        ]),
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            };
            this.createTodo(newTodo);
            this.title = ''
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
    input[type="button"] {
        flex: 2;
    }
</style>
