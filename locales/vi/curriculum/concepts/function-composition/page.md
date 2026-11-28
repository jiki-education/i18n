---
title: "Dùng nhiều hàm cùng nhau"
description: "Chia một bài toán thành những hàm nhỏ, mỗi hàm một trách nhiệm, gọi nhau, để mỗi phần vẫn đơn giản và dùng lại được."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Đến giờ, khi bạn viết hàm, mỗi hàm gần như tự đứng một mình và chứa toàn bộ phần logic cần thiết để hoạt động.

Giờ chúng ta sẽ xem cách chia nhỏ hàm ra, để có những hàm nhỏ hơn làm việc cùng nhau, thay vì những hàm to ôm đồm đủ thứ.

Trong lập trình có một nguyên tắc chung: bạn muốn mỗi hàm làm ít nhất có thể. Chúng ta gọi đó là hàm có trách nhiệm duy nhất (tiếng Anh: _single responsibility_). Mỗi hàm chỉ nên làm một việc, và dùng các hàm khác cho những phần nhỏ bên trong việc đó.

Vậy cùng xem một ví dụ nhé.

Hãy tưởng tượng chúng ta có một hàm nhận nhiệm vụ trả về một chuỗi mô tả một cái tên.

Bản đơn giản sẽ trông như thế này. Chúng ta có một vòng lặp đếm, thứ mà bạn đã viết rồi, rồi sau đó là một template chuỗi ghép kết quả lại.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Cách này chạy tốt, nhưng nó đang làm hai việc. Một việc khá chung chung là đếm, và một việc rất cụ thể là dựng nên chuỗi theo một định dạng nhất định.

Sẽ hay hơn nhiều nếu tách nó thành hai hàm: một hàm lo việc đếm, một hàm lo việc mô tả cái tên theo đúng định dạng này.

```javascript
// Chỉ đếm các chữ cái
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Chỉ định dạng văn bản cho gọn gàng
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

Và sau đó chúng ta có thể dùng lại hàm đếm chung chung đó trong việc định dạng chuỗi này, mà còn ở bất kỳ chỗ nào khác cần đến. Mỗi khi cần đếm chữ cái trong một chuỗi, hàm đó hoàn toàn tách khỏi mọi thứ liên quan đến việc in ra.

Bạn có thể đọc riêng từng hàm và hiểu ngay mỗi hàm làm gì.

Khi hàm của bạn ngày càng phức tạp và bạn có nhiều hàm hơn, kỹ thuật này chính là khác biệt giữa code gọn gàng, dễ đọc với một mớ lộn xộn, rối rắm.

Có một điều đáng nhắc lại ở đây: bất cứ thứ gì bạn tạo ra bên trong một hàm thì các hàm khác không truy cập được, trừ khi bạn cố ý trả về nó.

Vậy nên nếu bạn thử tham chiếu biến `count` (số đếm) từ bên trong `describeName` (mô tả tên) thì không được, vì nó thuộc về hàm kia.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki đang suy nghĩ, với một bóng đèn trên đầu, về việc các biến chỉ nằm riêng trong từng hàm"
  width="361"
  height="353"
/>

Trong JavaScript, chúng ta có thể tạo biến ở trên cùng, phía trên mọi thứ, để các hàm dùng chung, nhưng mình thật sự khuyên bạn đừng làm vậy trừ khi có lý do rất chính đáng.

Bạn càng giữ cho mỗi hàm độc lập, và từ kỹ thuật để chỉ điều đó là thuần túy (tiếng Anh: _pure_), tức là hàm thuần túy, thì code của bạn sẽ càng sạch, và bạn sẽ tạo ra và gặp càng ít lỗi hơn.
