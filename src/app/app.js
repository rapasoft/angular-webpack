import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainNavigation from './main-navigation';
import home from './home';
import avatarGallery from './avatar-gallery';

angular
  .module('app', [
    mainNavigation,
    home,
    avatarGallery,
    uiRouter
  ])
  .config(function ($stateProvider) {
    const homeState = {
      name: 'home',
      url: '/home',
      component: 'home'
    };
    const avatarGalleryState = {
      name: 'avatar-gallery',
      url: '/avatar-gallery',
      component: 'avatarGallery'
    };
    $stateProvider.state(homeState);
    $stateProvider.state(avatarGalleryState);
  });