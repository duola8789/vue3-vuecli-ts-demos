/**
 * Created by zh on 2020/7/27.
 */
import {lazyLoadHelper} from '@/utils';
import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {path: '/', meta: {label: 'Home'}, component: lazyLoadHelper('home')},
  {path: '/base-knowledge', meta: {label: '01 基础知识'}, component: lazyLoadHelper('01-base-knowledge/index')},
  {path: '/props', meta: {label: '02 组件传参'}, component: lazyLoadHelper('02-prop/index')},
  {path: '/provide-inject', meta: {label: '03 依赖注入'}, component: lazyLoadHelper('03-provide-inject/index')},
  {path: '/custom-ref', meta: {label: '04 customRef'}, component: lazyLoadHelper('04-custom-ref/index')},
  {path: '/mouse-position', meta: {label: '05 追踪鼠标位置'}, component: lazyLoadHelper('05-mouse-position/index')},
  {path: '/todo-list', meta: {label: '06 Todo List'}, component: lazyLoadHelper('06-todo-list/index')},
  {
    path: '/bor-communication',
    meta: {label: '07 兄弟组件间通信'},
    component: lazyLoadHelper('07-bro-communication/index')
  },
  {path: '/teleport', meta: {label: '08 Teleport'}, component: lazyLoadHelper('08-teleport/index')},
  {path: '/render', meta: {label: '09 Render函数'}, component: lazyLoadHelper('09-render/index')},
  {path: '/slot', meta: {label: '10 插槽Slot'}, component: lazyLoadHelper('10-slot/index')},
  {
    path: '/modifiers',
    meta: {label: '11 自定义修饰符'},
    component: lazyLoadHelper('11-model-modifiers/index')
  }
];

export default routes;
