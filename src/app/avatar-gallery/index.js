import angular from 'angular';
import '../common/styles/main.less';
import avatarGallery from './avatar-gallery-component';
import AvatarGalleryController from './avatar-gallery-controller';
import slideshow from '../slideshow';
import slideshowNavigation from '../slideshow-navigation';

export default angular
  .module('avatarGallery', [slideshow, slideshowNavigation])
  .component('avatarGallery', avatarGallery)
  .controller('AvatarGalleryController', AvatarGalleryController)
  .name;