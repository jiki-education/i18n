---
title: "Cập nhật từ điển"
description: "Dùng `dict[key] = value` để cập nhật các mục đã có hoặc thêm mục mới, cùng với phương thức `has` để kiểm tra khóa."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Bạn đã biết cách tạo một từ điển và lấy giá trị ra khỏi nó rồi. Nhưng chuyện gì xảy ra nếu dữ liệu thay đổi? Rồi sẽ có lúc mình già đi. Mình sẽ không còn là `42` nữa, mà là `43`.

Vậy làm sao để cập nhật từ điển? Chúng ta dùng một cách rất giống với lúc đi tìm một thứ gì đó. Bạn biết rồi đấy, chúng ta tìm giá trị bằng dấu ngoặc vuông. Vậy thì cũng bằng dấu ngoặc vuông, thêm vào một dấu bằng, chúng ta có thể cập nhật từ điển. Jiki đi đến chiếc hộp person, lấy trang giấy trong cuốn sổ ra, tìm khóa `"age"`, rồi tẩy đi số `42` ở đó và viết `43` vào chỗ đó, sau đó cậu ấy đặt trang giấy trở lại trong hộp. Đây là thay đổi chính bản thân từ điển.

```javascript
person["age"] = 43
```

Jiki không tạo ra một từ điển mới, cậu ấy chỉ thay đổi cuốn sổ vốn đã nằm trong hộp.

Còn nếu bạn muốn thêm thông tin chưa có trước đó thì sao? Bạn làm y hệt như vậy.

Nếu bạn chỉ định một khóa chưa tồn tại, Jiki sẽ thêm một khóa mới xuống dưới cùng với giá trị đó.

Vậy trong trường hợp này, cậu ấy sẽ mở cuốn sổ ra, tìm `"country"`, thấy không có, rồi thêm một dòng mới ở dưới cùng, `"country"` bên trái, `"England"` bên phải.

```javascript
person["country"] = "England"
```

Cú pháp giống hệt như khi thay đổi một giá trị. Jiki tự xử lý cả hai trường hợp. Nếu khóa đã tồn tại thì cậu ấy cập nhật nó. Nếu chưa có thì cậu ấy thêm nó vào. Bạn không cần làm gì đặc biệt cả.

Và cũng giống như bạn có thể bắt đầu với một mảng rỗng rồi thêm dần các phần tử vào, bạn có thể bắt đầu với một từ điển rỗng và thêm từng khóa một. Đây cũng là một cách làm rất phổ biến. Bạn sẽ gặp nó suốt.

Một cách dùng phổ biến của từ điển là đếm số lượng. Bạn đặt khóa là những thứ mình muốn đếm, còn giá trị là số lần đếm được của chúng. Thử tưởng tượng bạn đang ngắm chim và muốn ghi lại xem mình đã thấy bao nhiêu con mỗi loại. Mỗi lần thấy một con chim, bạn đặt số đếm của nó bằng một. Những lần sau thấy lại, bạn lấy giá trị hiện tại của nó rồi tăng thêm một. Để cách làm này hoạt động, chúng ta cần một cách kiểm tra xem từ điển đã có khóa đó chưa, nếu có thì cộng thêm một, còn nếu chưa có thì bắt đầu từ một.

Và để làm được điều đó, từ điển có một phương thức, phương thức `has` (có).

Bạn chỉ định khóa mà mình quan tâm, Jiki sẽ kiểm tra xem từ điển có khóa đó hay không, rồi trả về đúng hoặc sai tương ứng.

```javascript
person.has("age") // true
```

Ghép tất cả lại, cách đếm sẽ trông như thế này:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
