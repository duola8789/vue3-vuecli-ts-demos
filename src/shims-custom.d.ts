// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import Vue from 'vue';
import 'vue-router';

// Vue 原型上添加的东西，需要在此定义
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $sayHello: () => void;
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean;
    // 每个路由都必须声明
    label: string;
  }
}
