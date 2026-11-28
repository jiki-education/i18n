---
title: "Từ điển"
description: "Một trang sổ lò xo, mỗi dòng có khóa bên trái và giá trị bên phải, cho bạn dữ liệu có nhãn thay vì một danh sách."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Khi cần một danh sách bất cứ thứ gì, nào là danh sách mentor, danh sách điểm, danh sách nguyên liệu, bất kỳ danh sách nào, thì mảng luôn là lựa chọn quen thuộc của chúng ta.

Nhưng còn một cấu trúc dữ liệu (tiếng Anh: _data structure_) khác cũng rất phổ biến, dành cho khi bạn muốn một thứ gì đó phức tạp hơn một danh sách một chút.

Hãy tưởng tượng chúng ta muốn lưu vài thông tin về mình: tên, tuổi, nơi sinh. Bạn có thể dùng mảng để lưu, nhưng làm vậy thì không rõ ràng lắm chuyện gì đang diễn ra.

England là nơi mình sinh ra hay nơi mình đang sống? 42 là tuổi mình hay là thứ gì khác?

Và nếu muốn dùng dữ liệu này, mình phải nhớ vị trí đầu tiên là tên, vị trí thứ hai là tuổi, vị trí thứ ba là nơi sinh. Mọi thứ hơi lộn xộn, mà lộn xộn là vì đây không hẳn là một danh sách các thứ. Nó phức tạp hơn thế. Và đó là lúc từ điển (tiếng Anh: _dictionary_) xuất hiện. Từ điển là một kiểu cấu trúc dữ liệu mới. Đây là kiểu thứ năm của bạn. Bạn đã có chuỗi, số, kiểu logic, mảng, và giờ là từ điển.

Và mình muốn bạn nghĩ về từ điển giống như một trang của cuốn sổ lò xo.

Bên trái là các tiêu đề, tức những chữ `"name"`, `"age"`, `"birthplace"`, và chúng ta gọi đó là khóa (tiếng Anh: _key_).

Còn bên phải, cạnh mỗi tiêu đề, là dữ liệu thật sự: `"Jeremy"`, `42`, `"England"`, và chúng ta gọi đó là giá trị (tiếng Anh: _value_).

Giống như mảng, từ điển là một thứ duy nhất. Nó là một trang của cuốn sổ. Và cũng giống như mảng, Jiki có thể đặt nó vào một biến, vào một cái hộp, hoặc làm đầu vào cho một hàm, hay lấy một từ điển ra từ máng trượt. Vậy từ điển trông như thế nào trong code? Chúng ta dùng dấu ngoặc nhọn để đánh dấu chỗ bắt đầu và chỗ kết thúc, bên trong là các cặp: khóa bên trái, dấu hai chấm, rồi giá trị bên phải. Và có dấu phẩy giữa mỗi cặp. Jiki thấy vậy thì lấy cuốn sổ lò xo ra. Cậu ấy viết `name`, `"Jeremy"`, `age`, `42`, cứ thế với từng cặp.

Xong việc, cậu ấy xé trang giấy ra và đặt vào một cái hộp dán nhãn `person` (người).

Có vài quy tắc cần biết. Khóa luôn là chuỗi. Khóa phải nằm trong dấu ngoặc kép, và mỗi khóa phải là duy nhất. Bạn không thể có hai khóa cùng tên `name` trong một từ điển.

Các giá trị có thể trùng nhau nếu bạn muốn, nhưng các khóa thì phải khác nhau.

Và giá trị có thể là bất cứ thứ gì. Có thể là chuỗi, số, kiểu logic, mảng, hoặc thậm chí là những từ điển khác.

Bạn cũng có thể có một từ điển rỗng, giống như chúng ta đã có mảng rỗng, rồi bắt đầu từ đó và xây dựng thêm sau.

Vậy là bạn đã có một từ điển, nhưng làm sao lấy thứ gì đó ra khỏi nó?

Chúng ta dùng cú pháp dấu ngoặc vuông giống như với mảng và chuỗi, nhưng thay vì số vị trí, ta đặt vào một khóa. Vậy nếu muốn lấy tên của ai đó ra khỏi từ điển, ta viết:

```javascript
person["name"] // "Jeremy"
```

Câu này bảo Jiki tìm trong từ điển `person`, tìm khóa `"name"`, rồi lấy giá trị của nó ra. Jiki đi đến cái hộp `person`, lấy trang giấy trong cuốn sổ ra, quét qua tất cả các khóa cho đến khi tìm thấy `"name"`, rồi đọc giá trị `"Jeremy"` và đặt vào một cái hộp mới tên là `name`.

Dấu ngoặc vuông luôn mang cùng một ý nghĩa. Bạn thò tay vào một thứ gì đó và lấy ra một thứ. Với mảng và chuỗi, bạn dùng một con số để nói mình muốn lấy thứ gì đó từ vị trí nào. Với từ điển, bạn dùng một chuỗi làm khóa.

Vẫn là ý tưởng đó, chỉ khác cú pháp một chút.
