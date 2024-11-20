import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  goHome() {
    console.log('goHome() called');
    this.router.navigate(['/home']);
  }
  currentStep = 3;

  getCircleClass(step: number) {
    if (step < this.currentStep) {
      return 'active';
    } else if (step === this.currentStep) {
      return 'current';
    } else {
      return 'inactive';
    }
  }

  getLineClass(step: number) {
    if (step < this.currentStep) {
      return 'line-active';
    } else if (step === this.currentStep) {
      return 'line-current';
    } else {
      return 'line-inactive';
    }
  }
}
