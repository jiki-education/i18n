---
title: "Dùng toán tử `%` để lấy số dư"
description: "Dùng toán tử `%` để lấy phần còn lại sau phép chia, thường dùng để kiểm tra một số là chẵn hay lẻ."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Đến giờ, chúng ta đã dùng phép cộng, phép trừ, phép nhân và phép chia khi làm toán. Giờ chúng ta sẽ làm quen thêm một toán tử nữa, đó là toán tử chia lấy dư (tiếng Anh: _remainder_).

Toán tử chia lấy dư có nhiệm vụ cho bạn số dư khi chia hai số, và chúng ta viết nó bằng dấu phần trăm. Vậy nếu viết:

```javascript
10 % 4 // 2
```

thì chúng ta đang hỏi: "Chia 10 cho 4 thì còn thừa lại bao nhiêu?" Câu trả lời là hai. Hãy tưởng tượng bạn có 10 viên kẹo hoặc 10 hạt, và bạn muốn chia đều cho bốn người. Mỗi người được hai viên, và cuối cùng còn thừa lại hai viên. Phần thừa lại đó chính là số dư. Đó là thứ mà dấu phần trăm này cho bạn.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Một hàng mười viên kẹo chia đều cho bốn người, còn thừa lại hai viên là số dư"
  width="500"
  height="22"
/>

Một lý do khiến chúng ta dùng toán tử này khá thường xuyên khi lập trình là nó cho biết một số có chia hết hay không. Cách dùng phổ biến nhất là kiểm tra xem một số là chẵn hay lẻ. Như bạn biết đấy, số chẵn đều chia hết cho hai. Số lẻ thì khi chia cho hai luôn còn dư một.

Vậy nếu bạn lấy bốn, sáu hay tám, chia cho hai thì đều không còn dư. Còn năm, bảy hay chín, chia cho hai thì lúc nào cũng còn dư một. Vậy khi viết `if something % 2 === 0`, chúng ta đang hỏi: "Số này có phải số chẵn không?" Điều đó hữu ích cho rất nhiều thứ. Hãy tưởng tượng bạn tạo những sọc màu khác nhau, hay chia đôi một hàng người, cho mỗi người rẽ sang một trong hai hướng khi họ đi về phía bạn.

Một điều cần lưu ý: bạn có thể nghe người ta gọi từ khóa số dư này là toán tử modulo. Modulo và số dư cơ bản là một. Có vài khác biệt nhỏ mà có lẽ bạn chẳng bao giờ cần bận tâm, nên tạm thời chúng ta cứ coi nó là toán tử chia lấy dư, vì như vậy dễ hiểu hơn nhiều.
