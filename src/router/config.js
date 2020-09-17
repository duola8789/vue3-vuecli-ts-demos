/**
 * Created by zh on 2020/7/27.
 */
import {lazyLoadHelper} from '@/utils';

export default [
  {path: '/', label: 'Home', component: lazyLoadHelper('home')},
  {path: '/base-knowledge', label: '01 基础知识', component: lazyLoadHelper('01-base-knowledge/index')},
  {path: '/props', label: '02 组件传参', component: lazyLoadHelper('02-prop/index')},
  {path: '/provide-inject', label: '03 依赖注入', component: lazyLoadHelper('03-provide-inject/index')},
  {path: '/custom-ref', label: '04 customRef', component: lazyLoadHelper('04-custom-ref/index')},
  {path: '/mouse-position', label: '05 追踪鼠标位置', component: lazyLoadHelper('05-mouse-position/index')},
  {path: '/todo-list', label: '06 Todo List', component: lazyLoadHelper('06-todo-list/index')}
];
