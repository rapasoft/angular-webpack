import template from './slideshow-navigation.html';

const slideshowNavigation = {
  template,
  bindings: {
    currentPage: '<',
    numberOfPages: '<',
    previousPage: '&',
    nextPage: '&',
    goToPage: '&'
  },
  controller: function () {
    this.page = 1;
  }
};

export default slideshowNavigation;