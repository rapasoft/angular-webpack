import angular from 'angular';
import uiRouter from 'angular-ui-router';

import mainNavigation from './main-navigation';
import home from './home';
import avatarGallery from './avatar-gallery';

import statusCheck from './status-check';
import stateProvider from './state-provider';

class AppController {
  constructor($scope) {
    this.status = 'Retrieving status...';

    statusCheck.checkIfOfflineAndNotify((status) => $scope.$apply(this.status = status));
  }
}

angular
  .module('app', [
    mainNavigation,
    home,
    avatarGallery,
    uiRouter
  ])
  .controller('AppController', AppController)
  .config(stateProvider);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.bundle.js');
}