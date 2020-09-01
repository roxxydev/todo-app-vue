<template>
  <div id="app">
    <Header/>
    <AddTodo/>
    <Todos/>
  </div>
</template>

<script>
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Todos,
    AddTodo
  },
  methods: {
    ...mapActions(['initiateTodos']),
  },
  created() {
    this.initiateTodos();
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
