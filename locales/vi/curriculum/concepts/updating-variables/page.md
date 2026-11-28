---
title: "Cập nhật biến"
description: "Thay đổi thứ nằm bên trong biến khi chương trình chạy, để bạn theo dõi được vị trí, số đếm, điểm số và những giá trị luôn thay đổi khác."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Cho đến giờ, khi tạo biến, chúng ta đặt giá trị vào trong những cái hộp rồi sau đó lấy chúng ra. Điều đó thật sự hữu ích: nó giúp code của chúng ta rõ ràng hơn và giúp bớt đi mấy phép tính nhẩm mà không thì chúng ta sẽ phải làm. Nhưng giá trị thật sự của biến nằm ở chỗ chúng ta có thể thay đổi thứ trong hộp, tức là thay đổi giá trị của biến, trong suốt quá trình chương trình chạy. Vậy nên dù chúng ta có chạy đi chạy lại cùng một đoạn code, việc nó làm vẫn có thể khác đi tùy theo thứ đang nằm trong các cái hộp.

Giả sử chúng ta muốn trồng một bông hoa trong vườn. Chúng ta có một hàm `plant` (trồng) rất tiện, chỉ nhận một đầu vào là vị trí chúng ta muốn đặt bông hoa. Vậy nếu muốn đặt một bông hoa cách mép vườn 10 đơn vị, chúng ta viết như thế này:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Một bông hoa trong vườn, bên cạnh bảng của Jiki"
  width="406"
  height="400"
/>

Còn nếu chúng ta muốn trồng tám bông hoa thì sao? Chúng ta có thể viết `plant(10)`, `plant(20)`, `plant(30)`, v.v., nhưng như thế khá tẻ nhạt.

Mà chúng ta đã học về một thứ giúp thay thế kiểu code tẻ nhạt này rồi. Dùng vòng lặp đi! Dùng một khối repeat đi! Vậy hãy đặt vị trí là 10, rồi cho một khối repeat gọi `plant`, tức là dùng hàm `plant`, tám lần.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Bạn nghĩ điều gì sẽ xảy ra?

Thì nó sẽ trồng tám bông hoa, nhưng lần nào cũng trồng ở đúng một chỗ, mà đó không phải điều chúng ta muốn. Vậy chúng ta hãy dành một chút thời gian xem Jiki đang làm gì. Cậu ấy tạo một cái hộp dán nhãn position. Cậu ấy đặt 10 vào đó. Rồi cậu ấy chạy cái máy `plant` tám lần. Mỗi lần, cậu ấy lấy giá trị ra khỏi hộp position. Lúc nào cũng là 10, và lần nào cậu ấy cũng đặt đúng số 10 đó vào.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki lấy hộp position xuống khỏi kệ và đưa giá trị 10 trong đó vào máy plant"
  width="400"
  height="400"
/>

Vậy thứ chúng ta cần là một cách để mỗi lần nhích thêm một chút. Sau khi trồng xong một bông hoa, chúng ta muốn bảo Jiki nhích vị trí thêm 10, sẵn sàng trồng bông tiếp theo.

Vậy tạm gác code sang một bên, về mặt logic thì việc đó trông như thế nào? Nếu mình nói với bạn, "Trồng bông đầu tiên ở 10, rồi bông tiếp theo ở 20, rồi bông sau nữa ở 30", thì làm sao bộ não bạn biết rằng bông kế tiếp phải trồng ở 40 và bông sau đó phải trồng ở 50?

Bộ não bạn đang làm là theo dõi con số hiện tại, cộng thêm 10 vào đó, rồi cập nhật con số mới trong đầu.

Và chúng ta có thể làm y hệt như vậy trong code. Để làm điều đó, chúng ta nói: "Cập nhật (tiếng Anh: _update_) hộp position thành giá trị hiện tại của position cộng thêm 10."

Khi Jiki thấy dòng này, cậu ấy sẽ lấy con số hiện tại ra khỏi hộp position, cộng thêm 10, làm phép tính đó, cộng hai số lại với nhau, rồi đặt kết quả trở lại hộp để dùng cho lần sau.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki lấy 10 ra khỏi hộp position, cộng thêm 10 thành 20, rồi đặt 20 trở lại hộp"
  width="427"
  height="400"
/>

Vậy nếu thêm dòng này vào chương trình, để giờ chúng ta nói: "Đặt giá trị ban đầu của vị trí là 10", rồi tám lần trồng một bông hoa ở vị trí đó, rồi đổi vị trí thành lớn hơn trước 10 đơn vị, thì code của chúng ta chạy đúng, và chúng ta có tám bông hoa cách đều nhau.

Bạn để ý là không có `let` (khai báo biến) khi chúng ta cập nhật biến. Điều đó rất quan trọng. Khi Jiki thấy `let`, cậu ấy tạo một cái hộp mới. Nhưng ở đây, chúng ta không muốn tạo hộp mới. Chúng ta muốn thay đổi thứ bên trong cái hộp mà mình đã có.

Cũng để ý là chúng ta chỉ tạo cái hộp một lần ở bên ngoài vòng lặp. Điều đó quan trọng, bạn nhớ nhé. Tạo hộp một lần ở trên cùng, rồi cập nhật nó mỗi khi vòng lặp chạy.

Chúng ta có thể cập nhật thứ bên trong các cái hộp, và có thể dùng sức mạnh đó để theo dõi một thứ thay đổi theo thời gian. Bạn sẽ dùng cách làm này liên tục: theo dõi vị trí, đếm xem một việc đã xảy ra bao nhiêu lần, giữ điểm số. Mỗi khi bạn cần ghi nhớ một thứ thay đổi trong lúc chương trình chạy, đây là cách để làm điều đó.
