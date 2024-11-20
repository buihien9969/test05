import {Component} from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  phone: string = '';
  fullName: string = 'Nguyễn Vân Anh';
  birthDate: string = '18/07/1995';
  permanentAddress: string = '128, Ngõ 12, Lê Quang Đạo, Mễ Trì, Từ Liêm, Hà Nội';
  idNumber: string = '01234567890';
  gender: string = 'Nữ';
  currentAddress: string = '128, Ngõ 12, Lê Quang Đạo, Mễ Trì, Từ Liêm, Hà Nội';
  phoneError: boolean = false;

  onSubmit(): void {
    if (!this.phone) {
      this.phoneError = true;
    } else {
      this.phoneError = false;
// Handle form submission
      console.log('Form submitted');
    }
  }
}
