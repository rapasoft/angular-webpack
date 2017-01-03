class AvatarGalleryController {
  constructor(slideshowService) {
    this.photos = [];
    this.numberOfPages = 10;
    this.currentPage = 0;

    this.slideshowService = slideshowService;

    this.loadPage();
  }

  loadPage(page = 0) {
    this.slideshowService.getPhotos(page)
      .then(this.setState.bind(this));
    this.currentPage = page;
  }

  setState(result) {
    this.photos = result;
  }

}

AvatarGalleryController.$inject = ['slideshowService'];

export default AvatarGalleryController;