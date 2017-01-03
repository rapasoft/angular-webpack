export default function ($stateProvider, $urlRouterProvider) {
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

  $urlRouterProvider.when('', '/home');
}