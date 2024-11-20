import { Component } from '@angular/core';
interface ProgressStep {
  number: string;
  text: string;
}
@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.css']
})
export class FailedComponent {
  progressSteps: ProgressStep[] = [
    { number: "1", text: "Chụp khuôn mặt" },
    { number: "2", text: "Chụp CMND/CCCD" },
    { number: "3", text: "Lấy vân tay" },
    { number: "4", text: "Xác nhận" },
  ];
}
