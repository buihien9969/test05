import { Component } from '@angular/core';

interface ProgressStep {
  number: string;
  text: string;
  isActive: boolean;
}

@Component({
  selector: 'app-scan-back-id',
  templateUrl: './scan-back-id.component.html',
  styleUrls: ['./scan-back-id.component.css']
})
export class ScanBackIdComponent {
  progressSteps: ProgressStep[] = [
    { number: '1', text: 'Chụp khuôn mặt', isActive: false },
    { number: '2', text: 'Chụp CMND/CCCD', isActive: true },
    { number: '3', text: 'Lấy vân tay', isActive: false },
    { number: '4', text: 'Xác nhận', isActive: false },
  ];
}
