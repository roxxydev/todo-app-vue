<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default {
  name: 'App',
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Watch',
          completed: false
        },
        {
          id: 2,
          title: 'Learn',
          completed: false
        },
        {
          id: 3,
          title: 'Code',
          completed: true
        }
      ]
    }
  },
  methods: {
    deleteTodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo (todo) {
      this.todos = [...this.todos, todo];
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}

.btn {
  display: inline;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
   background: #666;
}
</style>
