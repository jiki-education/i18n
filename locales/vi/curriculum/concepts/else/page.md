---
title: "Từ khóa `else`"
description: "Thêm một mệnh đề `else` sau `if` để một khối lệnh khác chạy khi điều kiện là sai."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Câu lệnh if giúp bạn kiểm tra điều kiện và chỉ chạy code khi một điều gì đó đúng. Giờ chúng ta cùng làm quen với cặp bài trùng của if: `else`.

Với một câu lệnh if (tiếng Anh: _if statement_), Jiki chạy khối lệnh khi điều kiện đúng, và bỏ qua khối lệnh đó khi điều kiện sai. Nhưng nếu bạn muốn Jiki làm một việc khi điều kiện đúng, và làm một việc khác khi điều kiện sai thì sao? Đó chính là công dụng của else. Chúng ta có thể đặt một mệnh đề else (tiếng Anh: _else clause_) sau dấu ngoặc nhọn đóng của if, và Jiki sẽ chạy mệnh đề đó nếu điều kiện của if sai. Quay lại ví dụ người gác cửa câu lạc bộ, giờ chúng ta có thêm lựa chọn mở cửa hoặc từ chối cho ai đó vào, chắc hẳn tốt hơn việc phớt lờ họ hoàn toàn như trước. Hãy nghĩ về nó như một ngã rẽ trên đường. Jiki đi đến ngã rẽ này, cậu ấy kiểm tra điều kiện, rồi có thể rẽ hướng này nếu điều kiện đúng, hoặc rẽ hướng kia nếu điều kiện sai. Nhưng cậu ấy không bao giờ đi cả hai hướng.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="Một ngã rẽ ngay trước cửa câu lạc bộ: mở cửa khi điều kiện đúng, từ chối người đó khi điều kiện sai"
  width="500"
  height="332"
/>

Nhưng nếu bạn có nhiều hơn hai khả năng thì sao? Hãy tưởng tượng người gác cửa của chúng ta đang bán vé. Dưới mười ba tuổi thì bạn nhận vé trẻ em. Từ mười ba đến hai mươi tuổi thì bạn nhận vé thiếu niên. Từ hai mươi tuổi trở lên là vé người lớn. Vậy là giờ bạn có ba kết quả khác nhau. Để làm được điều này, chúng ta có thể thêm một câu lệnh if nữa sau else. Ta có thể nói: "Nếu cái này thì làm cái này. Còn nếu cái kia thì làm cái kia. Không thì làm việc khác." Vậy trong ví dụ này, Jiki sẽ thấy if và kiểm tra điều kiện đầu tiên. Mười sáu có nhỏ hơn mười ba không? Không. Thế là cậu ấy chuyển sang else if. Mười sáu có nhỏ hơn hai mươi không? Có, đúng vậy. Nên cậu ấy chạy khối lệnh đó và phát vé thiếu niên. Nhưng thế là xong. Cậu ấy không kiểm tra gì thêm nữa. Cậu ấy không hề nhìn đến mệnh đề else cuối cùng. Một khi Jiki tìm ra một điều kiện đúng, cậu ấy chạy khối lệnh đó và bỏ qua mọi thứ bên dưới.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Đây là điều mấu chốt bạn cần hiểu. Chỉ có một khối lệnh chạy mà thôi. Jiki lần lượt đi qua từng điều kiện, tìm điều kiện đúng đầu tiên, chạy khối lệnh đó rồi đi tiếp.

Giờ có một điều bạn thực sự cần hiểu, vì chỗ này hay khiến người ta vấp. Có một khác biệt tinh tế nhưng rất quan trọng giữa việc viết hai câu lệnh if riêng rẽ và việc dùng else if. Hãy tưởng tượng chúng ta đang viết một chương trình trao giải thưởng cơ bản hoặc giải thưởng thêm, tùy theo điểm số của người chơi. Bạn xem hai cách sau nhé. Một cách dùng else if, cách kia dùng hai câu lệnh `if` riêng rẽ. Kết quả sẽ khác nhau thế nào?

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

Vậy ở trường hợp đầu, với else if, ta kiểm tra điểm cao và trao giải, rồi sau đó không chạy else if nữa. Nên người có điểm trên một trăm chỉ nhận được giải thưởng thêm.

Nhưng ở ví dụ thứ hai, hai câu lệnh if hoàn toàn độc lập. Cả hai đều chạy và cả hai đều đúng. Nên người chơi ở đây nhận được hai giải. Trường hợp đầu: một giải. Trường hợp sau: hai giải. Bạn dành chút thời gian để chắc rằng mình thực sự hiểu điều này nhé.

Cũng đáng để ý rằng cách nào cũng có thể đúng, tùy vào cách thiết kế trò chơi. Có thể người chơi nhận cả giải thường lẫn giải thưởng thêm, hoặc có thể họ chỉ được nâng lên giải thưởng thêm. Không đoạn code nào đúng hay sai. Chúng chỉ hữu ích trong những tình huống khác nhau. Nhưng bạn cần biết mình định dùng cách nào.
