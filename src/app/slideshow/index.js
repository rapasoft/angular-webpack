import angular from 'angular';
import slideshow from './slideshow-component';
import SlideshowService from './slideshow-service';
import './slideshow.less';

SlideshowService.slideshowServiceFactory.$inject = ['$http'];

export default angular
  .module('slideshow', [])
  .component('slideshow', slideshow)
  .factory('slideshowService', SlideshowService.slideshowServiceFactory)
  .name;