---
title: "Viết hàm của riêng bạn"
description: "Dùng từ khóa function để tạo ra những cỗ máy của riêng bạn, để Jiki có thể đặt lên kệ và tái sử dụng."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Tới giờ, bạn vẫn đang dùng những hàm được viết sẵn cho mình, những hàm như `circle`, `rectangle`, `moveRight`, `shoot`. Tất cả những hàm đó đều đã được tạo ra và đặt lên kệ của Jiki.

Nhưng giờ là lúc bạn bắt đầu tự tạo ra những hàm của riêng mình.

Để chỉ cho bạn cách làm, chúng ta sẽ cùng xem cách tạo một hàm mới cho mê cung tên là `walk5` (đi 5 bước).

Hàm này lúc nào cũng sẽ đưa nhân vật tiến về phía trước năm bước. Phải thừa nhận là nó chẳng phải hàm hữu ích nhất trên đời, nhưng nó đơn giản và dễ, rất hợp để chúng ta bắt đầu.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Nhân vật trên lưới mê cung, sẵn sàng bước về phía trước năm bước"
  width="500"
  height="314"
/>

Vậy nếu mình yêu cầu bạn viết một đoạn code để đưa nhân vật tiến về phía trước năm bước, bạn có thể viết `move` (di chuyển) năm lần, hoặc dùng một vòng lặp repeat. Trong ví dụ này, để mọi thứ đơn giản, chúng ta sẽ dùng cách viết `move` năm lần liên tiếp.

```javascript
move()
move()
move()
move()
move()
```

Đó chính là những gì chúng ta muốn đặt bên trong hàm.

Giờ hãy thêm một dòng bên dưới để bảo Jiki dùng hàm này. Bạn đã thấy việc này nhiều lần rồi.

Sau đó, nhiệm vụ của chúng ta là gói cả năm dòng đầu tiên này vào một hàm, để khi Jiki dùng `walk5` thì chính năm dòng code đầu tiên đó sẽ chạy.

Để biến năm dòng này thành một hàm, biến năm lần di chuyển này thành một hàm, chúng ta cần dùng một từ khóa mới, đó là từ khóa `function`.

Khi dùng từ khóa `function`, chúng ta phải làm hai việc. Một là đặt tên cho hàm. Trong trường hợp này là `walk5`. Hai là dùng dấu ngoặc nhọn để bọc lấy đoạn code nói rằng: "Đây là những gì bạn nên làm bên trong hàm." Vậy là chúng ta thêm phần đó vào code, và giờ chúng ta đang bảo Jiki tạo một hàm tên là `walk5`, rồi khi bạn dùng `walk5`, cậu ấy sẽ chạy năm dòng code này.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Khi Jiki thấy từ khóa `function`, cậu ấy sẽ đi tạo một hàm mới, viết những chỉ dẫn đó lên một tấm bảng bên trong nó, rồi dán nhãn `walk5` lên cỗ máy. Sau đó cậu ấy đặt hàm đó lên kệ, cạnh tất cả những hàm khác đang ở đó.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki đứng cạnh một cỗ máy mới có tấm bảng bên trong để ghi lại các chỉ dẫn của hàm"
  width="500"
  height="396"
/>

Giờ thì hàm bạn vừa tạo chẳng có gì đặc biệt so với những hàm có sẵn (tiếng Anh: _built-in_). Tất cả chúng chỉ nằm cạnh nhau trên kệ của cậu ấy.

Và khi bạn dùng hàm, khi bạn viết `walk5()`, Jiki sẽ chỉ việc lấy cỗ máy xuống khỏi kệ và dùng nó y như cậu ấy vẫn làm với bất kỳ hàm nào khác. Bạn có thể tưởng tượng mỗi cỗ máy có một Jiki tí hon sống bên trong. Jiki tí hon lúc nào cũng đội chiếc mũ ngầu ấy. Và Jiki tí hon đó làm việc y hệt Jiki bình thường ở ngoài, cũng làm theo chỉ dẫn theo đúng cách như vậy.

Có một điều quan trọng cần hiểu ở đây: khi Jiki tạo hàm, cậu ấy không thực sự chạy đoạn code đó. Cậu ấy chỉ ghi lại đoạn code để dùng sau này.

Lúc bạn viết từ khóa `function`, nhân vật trong mê cung vẫn chưa hề di chuyển.

Jiki đã tạo xong cỗ máy và đặt nó lên kệ. Chỉ đến khi bạn bảo cậu ấy dùng cỗ máy bằng cách viết `walk5()` thì điều đó mới thực sự xảy ra.
