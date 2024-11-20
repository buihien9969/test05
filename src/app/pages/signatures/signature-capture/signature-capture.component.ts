import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signature-capture',
  templateUrl: './signature-capture.component.html',
  styleUrls: ['./signature-capture.component.css']
})
export class SignatureCaptureComponent {
  constructor(private router: Router) { }

  goHome() {
    console.log('goHome() called');
    this.router.navigate(['/home']);
  }
}
