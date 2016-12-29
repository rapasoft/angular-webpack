import angular from 'angular';
import slideshowNavigation from './slideshow-navigation-component';
import './slideshow-navigation.less';

export default angular.module('slideshowNavigation', [])
  .component('slideshowNavigation', slideshowNavigation)
  .name;