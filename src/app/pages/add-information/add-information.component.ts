import { Component } from '@angular/core';

@Component({
  selector: 'app-add-information',
  templateUrl: './add-information.component.html',
  styleUrls: ['./add-information.component.css']
})
export class AddInformationComponent {
  phone: string = '';
  fullName: string = 'Nguyễn Vân Anh';
  birthDate: string = '18/07/1995';
  permanentAddress: string = '128, Ngõ 12, Lê Quang Đạo, Mễ Trì, Từ Liêm, Hà Nội';
  idNumber: string = '01234567890';
  gender: string = 'Nữ';
  currentAddress: string = '128, Ngõ 12, Lê Quang Đạo, Mễ Trì, Từ Liêm, Hà Nội';

  onSubmit(): void {
    console.log('Form submitted');
  }
}
