import { Component } from "@angular/core";

interface ProgressStep {
  number: string;
  text: string;
  isActive: boolean;
  isCompleted: boolean;
}

@Component({
  selector: "app-fingerprint-scanner",
  templateUrl: "./fingerprint-scan-stage-one.component.html",
  styleUrls: ["./fingerprint-scan-stage-one.component.css"],
})
export class FingerprintScanStageOneComponent {
  progressSteps: ProgressStep[] = [
    { number: '1', text: 'Chụp khuôn mặt', isActive: true, isCompleted: true },
    { number: '2', text: 'Chụp CMND/CCCD', isActive: true, isCompleted: true },
    { number: '3', text: 'Lấy vân tay', isActive: true, isCompleted: false },
    { number: '4', text: 'Xác nhận', isActive: false, isCompleted: false },
  ];
}
