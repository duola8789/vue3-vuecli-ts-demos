<template>
  <div class="mouse-position-container">
    <h1 class="page-title">追踪鼠标位置</h1>
    <div class="page-content">
      <div class="page-content-item">
        <span class="item-label">Now the mouse is at:</span>
        <span>{{ pos }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted, computed} from 'vue';

function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return {x, y};
}

export default {
  name: 'MousePosition',
  setup() {
    const {x, y} = useMousePosition();

    const pos = computed(() => `(${x.value}, ${y.value})`);

    return {pos};
  }
};
</script>

<style lang="scss" scoped>
.mouse-position-container {
  @include page-base-style();
}
</style>
