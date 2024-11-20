import { Component } from '@angular/core';
interface UserInfo {
  name: string;
  idNumber: string;
  phoneNumber: string;
  dateOfBirth: string;
  accountNumber: string;
  gender: string;
  permanentAddress: string;
  currentAddress: string;
}
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  userInfo: UserInfo = {
    name: "Nguyễn Vân Anh",
    idNumber: "01234567890",
    phoneNumber: "0948 124 123",
    dateOfBirth: "18/07/1995",
    accountNumber: "1251 2315 232",
    gender: "Nữ",
    permanentAddress: "128, Ngõ 12, Lê Quang Đạo, Mễ Trì, Từ Liêm, Hà Nội",
    currentAddress: "128, Ngõ 12, Lê Quang Đạo, Mễ Trì, Từ Liêm, Hà Nội"
  };

  goToHomePage() {
// Implement navigation logic here
    console.log("Navigating to home page");
  }
}
