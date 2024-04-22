import { HttpClient, HttpEvent, HttpRequest  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private https: HttpClient) { }
  pushFileToStorage(file: File, fileName: string): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/api/upload/'+fileName, data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.https.request(newRequest);
  }
}