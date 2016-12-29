import Image from '../common/model/image';

export default class SlideshowService {
  constructor($http) {
    this.httpService = $http;
  }

  getPhotos(page = 0) {
    return this.httpService
      .get(`/api/random-image/list?page=${page}`)
      .then(result => result.data)
      .then(images => images.map((image) => new Image(image.name, image.url)))
      .catch(() => [new Image('', '/img/notfound.png')]);
  }

  static slideshowServiceFactory($http) {
    return new SlideshowService($http);
  }
}