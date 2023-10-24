import { Component } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {

 constructor(){
    document.addEventListener("DOMContentLoaded", function(event) {
      document.getElementById('successButton')!.click();
    });

    document.addEventListener("DOMContentLoaded", function(event) {
      document.getElementById('deleteButton')!.click();
    });
 }
}
