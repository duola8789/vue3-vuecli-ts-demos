<template>
  <div class="bro-communication-container">
    <h1 class="page-title">Teleport</h1>
    <div class="page-content">
      <el-button @click="toggleModel">{{ btnLabel }}</el-button>
      <teleport to="body">
        <div v-if="modalOpen" class="model-wrapper">
          <div class="modal">
            <i class="el-icon-close" @click="modalOpen = false"></i>
            <p>Hello</p>
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script>
import {ref, computed} from 'vue';

export default {
  name: 'Teleport',
  setup() {
    const modalOpen = ref(false);

    const toggleModel = () => {
      modalOpen.value = !modalOpen.value;
    };

    const btnLabel = computed(() => (modalOpen.value ? '关闭' : '打开'));

    return {modalOpen, btnLabel, toggleModel};
  }
};
</script>

<style lang="scss" scoped>
.bro-communication-container {
  @include page-base-style();
}
</style>

<style lang="scss">
.model-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  .modal {
    position: relative;
    width: 400px;
    height: 200px;
    line-height: 200px;
    background: #fff;
    color: #000;
    text-align: center;
    border-radius: 10px;
  }

  .el-icon-close {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #000;
    cursor: pointer;
  }
}
</style>
