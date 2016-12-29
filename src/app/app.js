import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainNavigation from './main-navigation';
import home from './home';
import avatarGallery from './avatar-gallery';
import {checkIfOfflineAndNotify} from './status-check';

class AppController {
  constructor($interval) {
    this.status = 'Retrieving status...';
    $interval(() => checkIfOfflineAndNotify((status) => this.status = status), 1000);
  }
}
AppController.$inject = ['$interval'];

angular
  .module('app', [
    mainNavigation,
    home,
    avatarGallery,
    uiRouter
  ])
  .controller('AppController', AppController)
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.bundle.js');
}