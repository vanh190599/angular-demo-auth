import {Component} from '@angular/core';

// product.model.ts
interface Product {
  idType: string, // Loại ID
  idNumber: string, // Số ID
  customerName: string, // Tên khách hàng
  cifNumber: string, // Số CIF
  customerInfoMatch: string, // So khớp TTKH
  customerFaceMatch: string, // So khớp khuôn mặt khách hàng
  cbaVerificationStatus: string, // TT xác thực CBA
  coreCustomerVerificationStatus: string, // TT xác thực KH trên Core
  recordCreationDateTime: string, // Ngày/giờ tạo bản ghi
  transactionUser: string, // User GD
  transactionBranch: string, // CN GD
  recordStatus: string, // Trạng thái bản ghi
}

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrl: './screen1.component.scss'
})

export class Screen1Component {
  products!: Product[];

  selectedProduct!: Product;

  constructor() {
  }

  ngOnInit() {

    this.products = [];

    for (let i = 1; i <= 15; i++) {
      this.products.push({
        idType: `05-CCCD-${i}`,
        idNumber: `008923789127-${i}`,
        customerName: `Nguyễn Văn A ${i}`,
        cifNumber: '203817237',
        customerInfoMatch: 'Khớp đúng',
        customerFaceMatch: 'Không khớp',
        cbaVerificationStatus: 'Đã xác thực',
        coreCustomerVerificationStatus: 'HT xác thực cấp độ 1',
        recordCreationDateTime: '20/05/2024 12:01',
        transactionUser: 'anhnv17',
        transactionBranch: '12438',
        recordStatus: 'Chưa xử lý',
      });

    }

  }
}
