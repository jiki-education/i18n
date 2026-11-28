---
title: "Dùng chuỗi `else if`"
description: "Nối các mệnh đề `else if` để kiểm tra nhiều điều kiện theo thứ tự, chỉ chạy khối đầu tiên có điều kiện đúng."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Bạn đã thấy `if` và `else` cho bạn hai hướng đi: làm một việc khi điều kiện đúng, làm việc khác khi điều kiện sai. Nhưng nếu bạn có nhiều hơn hai khả năng thì sao?

Hãy tưởng tượng người gác cửa của chúng ta đang bán vé. Dưới mười ba tuổi thì bạn nhận vé trẻ em. Từ mười ba đến hai mươi tuổi thì bạn nhận vé thiếu niên. Từ hai mươi tuổi trở lên thì là vé người lớn. Vậy là bây giờ bạn có ba kết quả khác nhau. Để làm điều này, chúng ta có thể thêm một câu lệnh if nữa sau else. Vậy là ta nói được: "Nếu điều này thì làm điều này. Còn nếu điều kia thì làm điều kia. Không thì làm việc khác." Trong ví dụ này, Jiki sẽ thấy câu lệnh if và kiểm tra điều kiện đầu tiên. Mười sáu có nhỏ hơn mười ba không? Không. Vậy cậu ấy chuyển sang else if. Mười sáu có nhỏ hơn hai mươi không? Có, đúng. Vậy là cậu ấy chạy khối lệnh đó và đưa ra vé thiếu niên. Nhưng đến đó là hết. Cậu ấy không kiểm tra gì thêm nữa. Cậu ấy không nhìn đến else cuối cùng. Một khi Jiki tìm được một điều kiện đúng, cậu ấy chạy khối lệnh đó và bỏ qua mọi thứ bên dưới.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="Ba tấm vé ghi CHILD, TEEN và ADULT, mỗi tấm ứng với một kết quả của phép kiểm tra độ tuổi"
  width="500"
  height="142"
/>

Đây là điều then chốt cần hiểu. Chỉ một khối lệnh chạy mà thôi. Jiki đi dọc theo chuỗi này, tìm ra điều kiện đúng đầu tiên, chạy khối lệnh đó rồi đi tiếp.

Giờ có một điều bạn cần hiểu thật kỹ, vì chỗ này hay làm người ta vấp. Có một khác biệt tinh tế nhưng rất quan trọng giữa việc viết hai câu lệnh if riêng biệt và dùng else if. Hãy tưởng tượng chúng ta viết một chương trình trao giải cơ bản hoặc giải thưởng thêm tùy theo điểm của người chơi. Bạn xem hai cách sau nhé. Một cách dùng else if, cách kia dùng hai câu lệnh `if` riêng biệt. Kết quả sẽ khác nhau thế nào?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

Trong trường hợp đầu, với else if, ta kiểm tra điểm cao và trao giải thưởng thêm, rồi không chạy phần else if nữa. Vậy người chơi có điểm trên một trăm chỉ nhận giải thưởng thêm.

Nhưng ở ví dụ thứ hai, hai câu lệnh if hoàn toàn độc lập. Cả hai đều chạy và cả hai đều đúng. Vậy người chơi này nhận hai giải. Ở cách đầu: một giải. Ở cách sau: hai giải. Bạn dành một chút thời gian để chắc rằng mình thật sự hiểu điều này nhé.

Cũng đáng để ý là cách nào cũng có thể đúng, tùy vào cách thiết kế trò chơi. Có thể người chơi nhận cả giải cơ bản lẫn giải thưởng thêm, hoặc cũng có thể họ chỉ được nâng lên giải thưởng thêm. Không đoạn code nào sai cả. Chúng chỉ hữu ích trong những tình huống khác nhau. Nhưng bạn cần biết mình định dùng cách nào.
