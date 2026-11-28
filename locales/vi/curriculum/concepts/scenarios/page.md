---
title: "Kịch bản"
description: "Những điều kiện khởi đầu khác nhau mà một bài tập dùng để chạy đoạn code duy nhất của bạn, nên bạn phải làm cho code chạy đúng với tất cả các kịch bản."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Mỗi bài tập đều có nhiều kịch bản khác nhau, tức là những tình huống khác nhau mà code của bạn cần xử lý.

Bạn sẽ thấy chúng là những nút nhỏ ngay phía trên phần đầu ra của mỗi bài tập. Mỗi nút ứng với một kịch bản khác nhau. Nhiệm vụ của bạn là viết code chạy đúng với tất cả các kịch bản, không chỉ kịch bản đầu tiên. Để mình nói lại nhé. Bạn viết code một lần, nhưng chính đoạn code đó chạy cho từng kịch bản. Khác biệt là mỗi kịch bản có thể được thiết lập hơi khác nhau, hoặc những hàm bạn được cung cấp có thể trả về những giá trị hơi khác nhau tùy vào kịch bản bạn đang ở.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="Hàng nút kịch bản ngay phía trên phần đầu ra của một bài tập, được khoanh tròn để làm nổi bật"
  width="500"
  height="318"
/>

Lấy ví dụ một trò chơi gôn. Có thể bạn cần thay đổi quãng đường bóng lăn dựa trên giá trị trả về (tiếng Anh: _return value_) của một hàm tên là `getShotLength` (độ dài cú đánh), hàm này cho bạn biết người chơi đã đánh bóng đi được bao xa. Hãy tưởng tượng người chơi phải vuốt trên điện thoại để cho biết mình đã đánh bóng đi được bao xa.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Một cảnh trong trò chơi gôn với người chơi, quả bóng và lá cờ trong lỗ ở bên phải"
  width="412"
  height="400"
/>

Kết quả bạn nhận được đến qua chính hàm này. Vậy nên ở một kịch bản, bạn dùng hàm `getShotLength` và nó trả về `23`, một cú vuốt nhẹ. Ở kịch bản khác, hàm trả về `70`, một cú vuốt dài. Ở kịch bản khác nữa, hàm trả về `45`. Code của bạn phải lăn bóng đúng khoảng cách cho từng kịch bản, chỉ với một chương trình, một bộ code duy nhất. Bạn sẽ cần dùng hàm `getShotLength` để xem cú đánh đi được bao xa, rồi lăn bóng đến đúng chỗ đó.

```javascript
let distance = getShotLength()
```

Kịch bản giúp đảm bảo code của bạn thực sự chạy đúng. Viết code chạy đúng trong một tình huống cụ thể thì khá dễ. Viết code chạy đúng trong nhiều tình huống khác nhau thì khó hơn nhiều, và cũng giá trị hơn nhiều. Khi giải bài tập, hãy bắt đầu với kịch bản đầu tiên. Làm cho nó chạy đúng đã. Rồi chuyển sang kịch bản tiếp theo và làm cho nó chạy đúng. Khi code của bạn hỏng ở một kịch bản khác, hãy nghĩ xem điều gì khác biệt và code của bạn cần thay đổi thế nào để thích nghi.
