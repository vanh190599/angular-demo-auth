import { Component } from '@angular/core';

interface Customer {
  name: string; // Tên khách hàng
  address: string; // Địa chỉ
  taxNumber: string; // Mã số thuế
  verified: boolean; // Đã xác minh
  active: boolean; // Đã đinh tính
}

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrl: './screen2.component.scss'
})
export class Screen2Component {
  customers!: Customer[]; // Sử dụng Customer thay vì Product
  selectedCustomers!: Customer; // Sử dụng Customer thay vì Product

  constructor() {}

  ngOnInit() {
    this.customers = [
      {
        name: "Nguyen Van A",
        address: "Tân An, Yên Dũng, Bắc Giang",
        taxNumber: "08726358",
        verified: true,
        active: true,
      }
    ]
  }
}
