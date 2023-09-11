import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'screenshots-in-angular';

  takeScreenshot(){
    const captureElement: any = document.getElementById('capture');
    html2canvas(captureElement).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','px','a4');
      pdf.addImage(imgData,'PNG',10,10,500,0);
      //the file name you want
      pdf.save('myFile.pdf')     
    });
  }
}
