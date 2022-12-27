<script>
import InsertTodo from '../components/todo/InsertTodo.vue';
import TodoList from '../components/todo/TodoList.vue';

export default {
  components: { TodoList, InsertTodo },
};
</script>

<template>
  <div class="todo">
    <InsertTodo />
    <TodoList />
  </div>
</template>
