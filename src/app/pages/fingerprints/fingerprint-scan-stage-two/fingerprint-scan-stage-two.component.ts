import {Component} from '@angular/core';

interface ProgressStep {
  number: string;
  text: string;
  isActive: boolean;
  isCompleted: boolean;
}

@Component({
  selector: 'app-fingerprint-scan-stage-two',
  templateUrl: './fingerprint-scan-stage-two.component.html',
  styleUrls: ['./fingerprint-scan-stage-two.component.css']
})
export class FingerprintScanStageTwoComponent {
  progressSteps: ProgressStep[] = [
    {number: '1', text: 'Chụp khuôn mặt', isActive: false, isCompleted: true},
    {number: '2', text: 'Chụp CMND/CCCD', isActive: false, isCompleted: true},
    {number: '3', text: 'Lấy vân tay', isActive: true, isCompleted: false},
    {number: '4', text: 'Xác nhận', isActive: false, isCompleted: false},
  ];

  fingers: number[] = [0, 1, 2];

  getStepClass(step: ProgressStep): string {
    if (step.isCompleted) return 'step-number step-completed';
    if (step.isActive) return 'step-number step-active';
    if (!step.isActive && !step.isCompleted) return 'step-number step-inactive';
    return 'step-number step-disabled';
  }

  getFingerClass(index: number): string {
    return index === 2 ? 'fingerprint fingerprint-active' : 'fingerprint';
  }
}
