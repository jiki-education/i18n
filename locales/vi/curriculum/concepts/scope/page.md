---
title: "Scope"
description: "Hiểu cách dấu ngoặc nhọn tạo ra một bộ kệ riêng, để biến chỉ sống trong khoảng thời gian khối lệnh của nó tồn tại."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Hãy tưởng tượng một đoạn code vẽ một hình tròn ở một vị trí khác nhau mỗi lần chạy, và chúng ta muốn vẽ 10 hình tròn ở 10 vị trí khác nhau. Chúng ta có thể kết hợp nó với một vòng lặp. Nhưng nếu bạn để ý kỹ thì có thể bạn đã thấy có gì đó hơi lạ ở đây.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Lúc đầu, mình có nói rằng có một quy tắc là các hộp trên kệ của Jiki phải có tên duy nhất,

và từ khóa `let` ấy, mỗi lần bạn dùng nó là nó tạo ra một cái hộp mới.

Nhưng vì `let` nằm trong một vòng lặp, nên lần nào vòng lặp chạy, Jiki cũng sẽ tạo một cái hộp mới.

Vậy đoạn code này sai, hay là có chuyện gì đó lạ khác đang diễn ra?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki trông bối rối, tự hỏi liệu đoạn code có sai không"
  width="384"
  height="400"
/>

Hoá ra đoạn code này không sao cả. Đây là JavaScript hoàn toàn hợp lệ, và nó chạy được nhờ một khái niệm gọi là scope (phạm vi của biến), hay *scoping*.

Scope thoạt nghe có vẻ khá đơn giản, nhưng mình đảm bảo với bạn là nó sẽ còn làm bạn khổ suốt sự nghiệp. Ngay cả những lập trình viên kỳ cựu nhất cũng gặp rắc rối với scope, và JavaScript là một trong những ngôn ngữ phức tạp nhất về khoản này. Mình nói điều này để khi bạn gặp rắc rối với scope, bạn không cảm thấy tự ti về bản thân. Nhưng đồng thời, hãy thật sự chú ý đến phần này nhé, vì nó quan trọng.

Khi bạn thấy một dấu ngoặc nhọn trong code, nó tạo ra cái được gọi là một scope mới. Nghĩa là sao? Bạn có thể hình dung là mỗi khi Jiki thấy một dấu ngoặc nhọn, cậu ấy lại tạo một bộ kệ nhỏ mới trong xưởng của mình. Và bất kỳ cái hộp nào cậu ấy tạo ra trong lúc làm việc, khi chạy code bên trong những dấu ngoặc nhọn đó, thì những cái hộp ấy, những cái hộp mới ấy sẽ nằm trên bộ kệ nhỏ mới, chứ không phải trên bộ kệ chính.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Bộ kệ chính của Jiki bên cạnh một bộ kệ nhỏ hơn mới được tạo ra bởi một dấu ngoặc nhọn"
  width="500"
  height="205"
/>

Và khi Jiki đến dấu ngoặc nhọn đóng tương ứng, cậu ấy vứt bỏ tất cả những cái hộp đang nằm trên bộ kệ phụ này.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki ném những cái hộp từ bộ kệ phụ vào thùng rác khi đến dấu ngoặc nhọn đóng"
  width="500"
  height="237"
/>

Vậy là mỗi khi có một vòng lặp như thế này, chúng ta có thể tạo ra những cái hộp chỉ tồn tại trong mỗi lần vòng lặp chạy. Hai cái hộp `left` (trái) và `top` (trên) mà bạn thấy ở đây chỉ tồn tại cho đến khi chạm dấu ngoặc nhọn đóng, rồi sau đó chúng bị vứt đi. Mà lần nào vòng lặp chạy, Jiki cũng chạm tới dấu ngoặc nhọn đóng đó. Vậy là 10 lần trong chương trình này. Tức là 10 lần cậu ấy tạo ra một cái hộp tên là `left`, rồi lại vứt nó đi.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Hai cái hộp ghi nhãn left và top chỉ tồn tại trong một lần lặp của vòng lặp"
  width="500"
  height="187"
/>

Vậy nên khi tạo một biến, bạn phải quyết định xem muốn nó tồn tại bao lâu. Nếu muốn nó sống lâu, nó phải nằm ngoài mọi dấu ngoặc nhọn. Còn nếu muốn nó chỉ kéo dài trong một lần lặp (tiếng Anh: *iteration*), tức một lần vòng lặp chạy, thì bạn có thể đặt nó bên trong dấu ngoặc nhọn. Bạn thấy đấy, chuyện này dễ rối thật. Nên khi mới bắt đầu, một quy tắc hay để giữ mọi thứ đơn giản là đặt tất cả biến ở gần đầu code, bên ngoài dấu ngoặc nhọn, rồi chỉ cập nhật chúng bên trong ngoặc. Ví dụ, đoạn code trên có thể viết chỉ với một cái hộp `left` và một cái hộp `top` đặt bằng 0 từ đầu, rồi mỗi lần lặp thì cập nhật chúng. Như vậy cũng hoàn toàn hợp lệ. Không cách nào đúng hay sai. Có những best practice, nhưng chúng ta sẽ học về chúng sau. Còn bây giờ, hãy thử nghiệm, chơi cho vui, xem cách nào thấy thoải mái nhất với bạn, và cố đừng lo lắng quá về chuyện này.
