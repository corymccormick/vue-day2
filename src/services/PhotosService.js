import { AppState } from '../AppState'
import Photo from '../models/Photo'
import { nasaApi } from './AxiosService'
class PhotosService {
  async getPhotos(query) {
    const res = await nasaApi.get(query)
    AppState.results = res.data.results.map(r => new Photo(r))

  }
}

export const photosService = new PhotosService()