import {Component} from '@angular/core';

interface ProgressStep {
  number: string;
  text: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface FingerPrint {
  status: 'idle' | 'active' | 'success' | 'failed';
  attempt: number;
}

@Component({
  selector: 'app-fingerprint-scan-stage-three',
  templateUrl: './fingerprint-scan-stage-three.component.html',
  styleUrls: ['./fingerprint-scan-stage-three.component.css']
})
export class FingerprintScanStageThreeComponent {
  getFingerClass(index: number) {
    const finger = this.fingers[index];
    let classes = 'fingerprint-item';

    if (finger.attempt === this.currentAttempt) {
      classes += ' active';
    }
    if (finger.status === 'success') {
      classes += ' success';
    }

    if (finger.status === 'failed') {
      classes += ' failed';
    }
    return classes;
  }

  progressSteps: ProgressStep[] = [
    {number: '1', text: 'Chụp khuôn mặt', isActive: false, isCompleted: true},
    {number: '2', text: 'Chụp CMND/CCCD', isActive: false, isCompleted: true},
    {number: '3', text: 'Lấy vân tay', isActive: true, isCompleted: false},
    {number: '4', text: 'Xác nhận', isActive: false, isCompleted: false},
  ];

  fingers: FingerPrint[] = [
    {status: 'success', attempt: 1},
    {status: 'success', attempt: 2},
    {status: 'success', attempt: 3}
  ];
  currentAttempt = 2;

  getStepClass(step: ProgressStep): string {
    let classes = 'progress-step-item';

    if (step.isActive) {
      classes += ' active';
    }
    if (step.isCompleted) {
      classes += ' completed';
    }
    return classes;
  }


  startScanning(attempt: number) {
    // Kiểm tra điều kiện finger trước đó phải success
    if (attempt > 1) {
      const previousFinger = this.fingers[attempt - 2];
      if (previousFinger.status !== 'success') {
        return;
      }
    }

    this.currentAttempt = attempt;
    const finger = this.fingers[attempt - 1];
    finger.status = 'active';
  }


  onSuccess(attempt: number) {
    const finger = this.fingers[attempt - 1];
    finger.status = 'success';
    if (attempt < 3) {
      this.startScanning((attempt + 1));
    }
  }

  onFailed(attempt: number) {
    const finger = this.fingers[attempt - 1];
    finger.status = 'failed';
  }
}
