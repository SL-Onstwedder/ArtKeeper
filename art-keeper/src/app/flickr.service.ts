import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlickerResponse } from './flickr-test/flickerresponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  flickerUrl = 'https://cors-anywhere.herokuapp.com/http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  constructor(private http: HttpClient) { }
  getPhotos(): Observable<FlickerResponse> {
    return this.http.get<FlickerResponse>(this.flickerUrl);
  }
}
