<template>
  <div class="todo-list-container">
    <h1 class="page-title">TodoList</h1>
    <div class="page-content">
      <div class="page-content-item">
        <label>
          <input :value="newItem" @input="onInput" @keyup="onKeyup" />
          <i class="clear"></i>
        </label>
        <button class="btn" @click="onAdd">Add</button>
        <button class="btn" @click="onDelAll">Delete All</button>
      </div>
      <div class="page-content-item">
        <div class="page-content-child">
          <h2 class="page-title">Todo:</h2>
          <div class="page-content">
            <ol class="todo-list">
              <li v-for="item in state.todoList" :key="item.id" class="todo-item">
                <span class="todo-message" :class="item.done ? 'done' : ''">{{ item.message }}</span>
                <label class="del-input">
                  <input type="checkbox" @change="onItemChange(item.id)" />
                </label>
                <button class="btn" @click="onDel(item.id)">Delete</button>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="page-content-item">
        <div class="page-content-child">
          <h2 class="page-title">Done:</h2>
          <div class="page-content">
            <ol class="todo-list">
              <li v-for="item in doneList" :key="item.id" class="todo-item">
                <span class="todo-message">{{ item.message }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, computed, reactive} from 'vue';

export default {
  name: 'MousePosition',
  setup() {
    let uuid = 0;
    const newItem = ref('');
    const state = reactive({
      todoList: []
    });

    const doneList = computed(() => state.todoList.filter((v) => !!v.done));

    const onInput = (e) => (newItem.value = e.target.value);
    const onAdd = () => {
      if (!newItem.value) {
        alert('请输入内容');
        return;
      }
      state.todoList.push({done: false, message: newItem.value, id: uuid++});
      newItem.value = '';
    };

    const onKeyup = (e) => {
      if (e.keyCode === 13) {
        onAdd();
      }
    };

    const onItemChange = (id) => {
      const target = state.todoList.find((v) => v.id === id);
      if (target) {
        target.done = !target.done;
      }
    };

    const onDel = (id) => {
      const index = state.todoList.findIndex((v) => v.id === id);
      if (index >= 0) {
        state.todoList.splice(index, 1);
      }
    };

    const onDelAll = () => {
      state.todoList = reactive([]);
    };

    return {newItem, onInput, onAdd, state, doneList, onItemChange, onKeyup, onDel, onDelAll};
  }
};
</script>

<style lang="scss" scoped>
.todo-list-container {
  @include page-base-style();

  .page-content-item {
    list-style-position: inside;

    .todo-list {
      list-style: decimal-leading-zero inside;
    }

    .todo-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .todo-message {
        flex: 1;

        &.done {
          text-decoration: line-through;
        }
      }

      .del-input {
        margin-right: 10px;
      }
    }
  }

  .btn {
    @include btn-base-style();
  }
}
</style>
