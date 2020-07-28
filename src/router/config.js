/**
 * Created by zh on 2020/7/27.
 */
import {lazyLoadHelper} from '@/utils';

export default [
  {path: '/', label: 'Home', component: lazyLoadHelper('home')},
  {path: '/base-knowledge', label: '01 基础知识', component: lazyLoadHelper('01-base-knowledge/index')}
];
