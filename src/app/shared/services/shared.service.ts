import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactInfo } from 'src/app/modals/contact-info.modal';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(Constants.BASE_URL);
  }

  post(data: ContactInfo): Observable<any> {
    return this.httpClient.post(Constants.BASE_URL, data);
  }

  put(id: number, data: ContactInfo): Observable<any> {
    return this.httpClient.put(`${Constants.BASE_URL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${Constants.BASE_URL}/${id}`);
  }
}
