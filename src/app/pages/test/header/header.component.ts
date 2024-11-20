import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentStep = 3;

  // Hàm để kiểm tra màu sắc của các vòng tròn và đường kẻ
  getCircleClass(step: number) {
    if (step < this.currentStep) {
      return 'active'; // Các bước đã hoàn thành
    } else if (step === this.currentStep) {
      return 'current'; // Bước hiện tại
    } else {
      return 'inactive'; // Các bước chưa hoàn thành
    }
  }

  getLineClass(step: number) {
    if (step < this.currentStep) {
      return 'line-active'; // Đã hoàn thành
    } else if (step === this.currentStep) {
      return 'line-current'; // Đang ở bước hiện tại
    } else {
      return 'line-inactive'; // Chưa hoàn thành
    }
  }

}
