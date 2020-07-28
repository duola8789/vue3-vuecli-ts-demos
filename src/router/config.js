/**
 * Created by zh on 2020/7/27.
 */
import {lazyLoadHelper} from '@/utils';

export default [
  {path: '/', label: 'Home', component: lazyLoadHelper('home')},
  {path: '/about', label: 'About', component: lazyLoadHelper('about')}
];
