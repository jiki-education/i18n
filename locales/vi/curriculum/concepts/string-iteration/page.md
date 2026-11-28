---
title: "Lặp qua chuỗi với `for ... of`"
description: "Dùng vòng lặp `for of` để đi qua từng chữ cái trong chuỗi, lần lượt làm gì đó với từng chữ một."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Bạn có thể lấy một chữ cái trong chuỗi bằng cách dùng dấu ngoặc vuông. Giờ chúng ta sẽ xem cách lặp qua một chuỗi, lấy ra từng chữ cái một.

Và để làm được điều đó, chúng ta cần một kiểu vòng lặp mới. Từ trước tới giờ chúng ta đã dùng vòng lặp repeat, còn giờ chúng ta sẽ dùng một thứ gọi là vòng lặp `for of` (lặp qua từng phần tử của một tập hợp, lần lượt từng cái một). Đó là hai từ khóa mới: `for` và `of`.

Từ khóa `for` là thứ bạn sẽ gặp ở khá nhiều nơi khi học tiếp. Nó có thể đứng một mình, hoặc đi kèm với `in` hay `of`. Còn bây giờ, chúng ta sẽ tập trung vào cái cuối cùng, `of`.

Vậy chúng ta cùng xem một đoạn code nhé.

Chúng ta bắt đầu bằng việc tạo một biến có tên `name` (tên), chứa chuỗi `"Jeremy"` (tên Jeremy). Không có gì mới ở đây cả.

Tiếp theo là dòng vòng lặp, dòng này có khá nhiều thứ đang diễn ra, nên chúng ta cùng đi qua thật chậm nhé.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Đầu tiên là từ khóa `for`. Nó cho Jiki biết rằng chúng ta muốn lặp. Thế là cậu ấy nhìn tiếp về phía trước, thấy `of`, và biết rằng chúng ta muốn lặp kiểu "for of".

Nghĩa là thay vì dùng vòng lặp repeat và nói "Lặp 10 lần đi", chúng ta nói "Lặp qua tất cả các chữ cái trong chuỗi đi". "For of" chính là như vậy.

Rồi đến phần `let letter` (tạo một biến có tên letter). Phần này giống hệt phần `let name` ở phía trên. Chúng ta chỉ đang tạo một biến có tên `letter`.

Khác biệt là thay vì nói rõ trong đó có gì, chúng ta bảo Jiki lần lượt đặt từng chữ cái trong chuỗi vào đó, mỗi lần một chữ.

Vậy là Jiki thấy `for`, kiểm tra xem có `of` không, rồi bắt đầu. Cậu ấy nhìn chữ cái đầu tiên trong chuỗi, ở đây là `"J"`, và đặt nó vào một cái hộp mới tên là `letter`. Nhân đây nói luôn, bạn có thể đặt tên gì cũng được. Không nhất thiết phải là `letter`. Ở đây chúng ta chỉ chọn gọi nó là `letter` thôi.

Sau đó cậu ấy chạy đoạn code bên trong dấu ngoặc nhọn, và ở đây bạn có thể làm bất cứ thứ gì bạn vẫn làm ở chỗ khác trong code. Chỉ khác một điều: khối lệnh này sẽ chạy một lần cho mỗi chữ cái trong chuỗi, và lần nào cũng có sẵn biến này.

Mỗi lần Jiki đi đến dấu ngoặc nhọn đóng, cậu ấy vứt bỏ cái hộp `letter` và tạo một cái hộp mới, bỏ chữ cái tiếp theo vào trong. Vậy lần đầu, cậu ấy vứt `"J"` đi và thay bằng `"e"` trong hộp. Rồi cậu ấy làm y như vậy với `"r"`, rồi `"e"`, rồi `"m"`, rồi `"y"`. Sáu chữ cái, sáu lần lặp. Cú pháp này cần một chút thời gian để quen, nhưng khái niệm thì thật ra không khó lắm đâu.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki vứt bỏ hộp chữ cái cũ và thả chữ cái tiếp theo vào một cái hộp mới có nhãn letter, lặp lại với từng chữ cái trong chuỗi"
  width="500"
  height="168"
/>
