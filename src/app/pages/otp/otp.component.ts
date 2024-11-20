import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  errorOtp: boolean = true;
  onSubmit(): void {
// Handle form submission
  }

  resendOtp(): void {
// Handle OTP resend
  }

  appendDigit(digit: string) {
    const inputs = this.otpInputs.toArray();
    if (digit === '000') {
      const firstEmptyIndex = inputs.findIndex(input => !input.nativeElement.value);

      if (firstEmptyIndex >= 0) {
        const remainingEmptyBoxes = inputs.slice(firstEmptyIndex)
          .filter(input => !input.nativeElement.value).length;
        const fillCount = Math.min(remainingEmptyBoxes, 3);
        for (let i = 0; i < fillCount; i++) {
          inputs[firstEmptyIndex + i].nativeElement.value = '0';
        }
        if (firstEmptyIndex + fillCount < inputs.length) {
          inputs[firstEmptyIndex + fillCount].nativeElement.focus();
        }
      }
      return;
    }
    const emptyInput = inputs.find(input => !input.nativeElement.value);
    if (emptyInput) {
      emptyInput.nativeElement.value = digit;
      const nextIndex = inputs.indexOf(emptyInput) + 1;
      if (nextIndex < inputs.length) {
        inputs[nextIndex].nativeElement.focus();
      }
    }
  }



  deleteDigit() {
    const inputs = this.otpInputs.toArray();

    for (let i = inputs.length - 1; i >= 0; i--) {
      if (inputs[i].nativeElement.value) {
        inputs[i].nativeElement.value = '';
        inputs[i].nativeElement.focus();
        break;
      } else if (i > 0 && !inputs[i].nativeElement.value) {
        inputs[i - 1].nativeElement.focus();
      }
    }
  }
}
