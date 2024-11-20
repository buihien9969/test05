import { Component } from '@angular/core';

interface ProgressStep {
  number: string;
  text: string;
  isActive: boolean;
}

@Component({
  selector: 'app-scan-front-id',
  templateUrl: './scan-front-id.component.html',
  styleUrls: ['./scan-front-id.component.css']
})
export class ScanFrontIDComponent {
  progressSteps: ProgressStep[] = [
    { number: '1', text: 'Chụp khuôn mặt', isActive: false },
    { number: '2', text: 'Chụp CMND/CCCD', isActive: true },
    { number: '3', text: 'Lấy vân tay', isActive: false },
    { number: '4', text: 'Xác nhận', isActive: false },
  ];

}
