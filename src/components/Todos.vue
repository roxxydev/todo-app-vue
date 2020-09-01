<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo"/>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import TodoItem from './TodoItem';

export default {
    name: 'Todos',
    components: {
        TodoItem
    },
    computed: mapState([
        'todos'
    ])
}
</script>

<style scoped>

</style>
