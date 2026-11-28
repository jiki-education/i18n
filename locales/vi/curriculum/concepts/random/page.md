---
title: "Số ngẫu nhiên"
description: "Dùng `Math.randomInt` với giá trị nhỏ nhất và lớn nhất để mỗi lần hàm chạy đều nhận được một số khác nhau."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Trong lập trình, chúng ta thường muốn dùng một hàm và mỗi lần gọi lại nhận về một số ngẫu nhiên (tiếng Anh: _random number_) khác nhau.

Điều này hữu ích trong đủ mọi tình huống, nhưng đặc biệt là trong mật mã học, nơi người ta thường làm những việc như tạo mã để chia sẻ giữa các máy với nhau. Những mã đó phải ngẫu nhiên thì mới không bị bẻ khóa.

Để giúp bạn việc này, có một hàm tên là `Math.randomInt` (Math là toán, randomInt là số nguyên ngẫu nhiên). Bạn có thể để ý thấy có một dấu chấm ở giữa tên hàm. Khi bạn có nhiều hàm hơn, chúng ta có thể sắp xếp chúng thành từng nhóm cho gọn gàng, và phần `Math` (viết tắt của maths, nghĩa là toán học) là tên của nhóm mà hàm này thuộc về. Nó cho Jiki biết cần tìm ở khu nào trên kệ, trong trường hợp này là khu `Math`. Dấu chấm chỉ có nghĩa là hãy vào khu này và tìm hàm đó. Bạn đừng bận tâm quá nhiều về chuyện này lúc này. Hướng dẫn bài tập sẽ luôn cho bạn biết có những hàm nào và dùng chúng ra sao. Điều quan trọng cần hiểu là khi Jiki dùng hàm này, mỗi lần chạy cậu ấy sẽ nhận được một số khác nhau, nhưng có một ràng buộc. Hàm có hai đầu vào. Đầu vào thứ nhất là số nhỏ nhất mà chiếc máy được phép trả về, còn đầu vào thứ hai là số lớn nhất mà chiếc máy được phép trả về. Vậy nếu bạn dùng hàm `Math.randomInt` với `10` và `13`, bạn sẽ luôn nhận về `10`, `11`, `12` hoặc `13`. Nhưng mỗi lần sẽ là một số khác nhau.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki trèo thang lên khu Math trên kệ trong nhà kho của cậu ấy"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Chiếc máy Math.randomInt với hai phễu đầu vào ở trên đỉnh"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Chiếc máy Math.randomInt với 10 và 13 trong hai phễu đầu vào, cho ra 10, 11, 12 hoặc 13"
  width="488"
  height="400"
/>

Vậy hãy tưởng tượng bạn muốn vẽ một hình tròn ở một vị trí ngẫu nhiên trên canvas. Bạn có thể dùng `Math.randomInt` để mỗi lần nhận được giá trị khác nhau cho `left` và `top`, nhưng giới hạn trong khoảng, ví dụ, `10` và `90`, để chúng không chồng lên nhau hay vượt ra ngoài canvas. Mỗi lần bạn chạy đoạn code này, hình tròn sẽ xuất hiện ở một chỗ hơi khác một chút.
