import { Component } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ocr';
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  imageOcr() {
    Tesseract.recognize(this.fileToUpload)
      .then((res: any) => {
        const text = res.data.text.split(/\r?\n/);
        const newText = text[5].split(' ');
        const result = newText.filter((word) => word.length > 16);
        console.log(result);
      })
      .catch(console.error);
  }
}
