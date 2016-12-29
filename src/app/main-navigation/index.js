import angular from 'angular';
import mainNavigationComponent from './main-navigation-component';
import './main-navigation.less';

export default angular
  .module('mainNavigation', [])
  .component('mainNavigation', mainNavigationComponent)
  .name;