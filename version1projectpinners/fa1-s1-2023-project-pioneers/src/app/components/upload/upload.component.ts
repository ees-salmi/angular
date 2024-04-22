import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { FileUploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  title = 'File-Upload-Save';
  selectedFiles: FileList | undefined;
  currentFileUpload: File | undefined ;
  progress: { percentage: number } = { percentage: 0 };



  constructor(private uploadService: FileUploadService){}

  downloadFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


  upload(fileName: string) {
    this.progress.percentage = 0;
    if (this.selectedFiles !== undefined && this.selectedFiles.length > 0) {
      this.currentFileUpload = this.selectedFiles[0];
    
this.uploadService.pushFileToStorage(this.currentFileUpload, fileName).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const total = event.total ?? 0;
        this.progress.percentage = Math.round(100 * event.loaded / total);
      } else if (event instanceof HttpResponse) {
         alert(fileName+' File Successfully Uploaded');
      }
      this.selectedFiles = undefined;
     }
    );
  }
  } 
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
}

