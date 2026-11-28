---
title: "Mảng"
description: "Một dây xích có thứ tự gồm các phần tử (chuỗi, số, kiểu logic, hay bất cứ thứ gì khác), gắn kết với nhau thành một giá trị mà Jiki có thể mang theo."
en_md5: d26ccb9e04fbc77129f3199d63a95017
---

Bạn đã dùng số, chuỗi và kiểu logic, tức là cách gọi mỹ miều của đúng và sai, và chúng ta gọi những thứ đó là các kiểu dữ liệu (tiếng Anh: _data types_). Giờ chúng ta thêm kiểu dữ liệu phức hợp (tiếng Anh: _compound data type_) đầu tiên.

Đó là kiểu dữ liệu có thể chứa nhiều thứ chứ không chỉ một thứ, và kiểu dữ liệu này có tên là mảng (tiếng Anh: _array_).

Khi nghe đến từ mảng, mình muốn bạn nghĩ đến một dây xích ngoài đời thật, giữ nhiều thứ gắn chặt với nhau.

Những thứ nó đang giữ có thể là bất cứ gì: chuỗi, số, kiểu logic, thậm chí cả những mảng khác, thậm chí cả những thứ bạn chưa học tới, nhưng chưa cần lo về điều đó lúc này.

Mọi thứ trong dây xích này đều nằm theo thứ tự, đúng thứ tự mà chúng nối vào nhau.

Vậy là một mảng chứa nhiều thứ, nhưng cả mảng là một thứ vững chắc, một mảng với nhiều phần tử (tiếng Anh: _element_) ở bên trong.

Jiki có thể lấy mảng đó, dây xích đó, đặt vào một cái hộp, giống như cậu ấy có thể đặt một chuỗi hay một số vào hộp.

Cậu ấy có thể đặt nó vào khe của một cái máy. Cậu ấy có thể lấy nó ra từ máng trượt. Mảng này là một thứ, và Jiki làm việc với nó y hệt như cách cậu ấy làm việc với chuỗi, số, và mọi thứ khác mà bạn đã thấy đến giờ.

Giờ thì trong code, mảng cũng trông hơi giống một dây xích. Nó có một dấu ngoặc vuông ở mỗi đầu, rồi nhiều mục nối với nhau, ngăn cách bằng dấu phẩy.

Ví dụ, nếu chúng ta muốn tạo một mảng chứa tên của vài mentor, chúng ta có thể tạo một cái hộp tên là `mentors` (những người hướng dẫn) và đặt dây xích đó vào trong.

Chúng ta viết `let mentors =`, y hệt như với bất kỳ cái hộp nào khác, rồi đến một dấu ngoặc vuông mở, nhiều phần tử là tên của từng người, ngăn cách bằng dấu phẩy, rồi một dấu ngoặc vuông đóng. Khi Jiki thấy dòng này, cậu ấy đi lấy bốn tờ giấy, mỗi tên một tờ, rồi lấy một dây xích mới, nối tất cả chúng lại, và đặt dây xích đó vào hộp `mentors`.

Bạn có thể đặt bất cứ thứ gì vào mảng: chuỗi, số, kiểu logic, thậm chí cả một mớ thứ trộn lẫn.

Đây đều là những ví dụ khác nhau về những mảng hoàn toàn hợp lệ.

Bạn cũng có thể tạo một mảng rỗng. Nó chỉ là một dây xích không có phần tử nào. Nó vẫn là một thứ có thật. Nó vẫn có đủ hai đầu. Nó vẫn là một dây xích. Chỉ là bên trong nó không có mục nào. Nhưng bạn vẫn có thể đặt mảng rỗng này vào một cái hộp, lấy nó ra và dùng sau.

Vậy là bạn có thể tạo mảng bằng cú pháp dấu ngoặc vuông, nhưng thật ra chúng ta dùng chúng thế nào? Làm sao để xem bên trong có gì và lấy đồ ra? Cũng y hệt cách chúng ta làm khi muốn lấy các chữ cái ra khỏi chuỗi. Chúng ta dùng cú pháp dấu ngoặc vuông với số ở bên trong.

Quay lại danh sách mentor nào. Nếu muốn lấy người đầu tiên ra, chúng ta viết `mentors[0]`. Nhớ là trong JavaScript, chúng ta đếm từ 0.

Và chúng ta cũng có thể lặp qua một mảng y hệt như cách chúng ta lặp qua chuỗi trước đây, bằng `for-of`.

Mảng hoạt động y hệt như vậy. Chỉ khác là lần này, thay vì lấy một chữ cái ra, chúng ta lấy ra thứ gì đang nằm trong mảng. Trong ví dụ này, đó là tên của mentor.

Vậy là lần đầu tiên chúng ta cảm ơn ai đó, chúng ta cảm ơn `"DJ"`. Lần thứ hai, chúng ta cảm ơn `"Becky"`, v.v.

Chúng ta cũng có thể dùng thuộc tính `length` trên mảng, giống như chúng ta đã học với chuỗi. Nếu trong hộp `mentors` có một mảng gồm bốn chuỗi và bạn viết `mentors.length`, nó sẽ trả về 4.

Và chúng ta cũng dùng `includes` trên mảng y hệt như vậy. Ta viết `mentors.includes("DJ")` thì nó trả về `true`. Nhưng nếu viết `mentors.includes("Frank")` thì nó trả về `false`.

Mọi thứ hoạt động y hệt như với chuỗi. Chỉ là chúng ta đang làm việc với các phần tử của mảng, chứ không phải các chữ cái của chuỗi.
