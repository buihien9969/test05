import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface ProgressStep {
  number: string;
  text: string;
  isActive: boolean;
}

@Component({
  selector: "app-scan-id",
  templateUrl: "./scan-id.component.html",
  styleUrls: ["./scan-id.component.css"],
})
export class ScanIdComponent {
  progressSteps: ProgressStep[] = [
    { number: '1', text: 'Chụp khuôn mặt', isActive: false },
    { number: '2', text: 'Chụp CMND/CCCD', isActive: true },
    { number: '3', text: 'Lấy vân tay', isActive: false },
    { number: '4', text: 'Xác nhận', isActive: false },
  ];
}
