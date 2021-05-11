// eslint-disable-next-line no-unused-vars
import Vue from 'vue';

// Vue 原型上添加的东西，需要在此定义
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $sayHello: () => void;
  }
}
