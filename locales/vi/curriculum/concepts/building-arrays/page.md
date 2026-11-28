---
title: "Xây dựng mảng"
description: "Bắt đầu với một mảng rỗng và dùng `push` để thêm từng phần tử một trong khi bạn lặp qua dữ liệu."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Đến giờ, bạn đã làm việc với những mảng mà giá trị của chúng chỉ được đặt từ đầu và cố định. Nhưng nếu bạn muốn thêm dần thứ gì đó vào mảng theo thời gian thì sao? Để làm được điều này, mảng có một phương thức tên là `push` (thêm vào cuối).

`push` có một đầu vào, đó là thứ bạn muốn gắn vào cuối mảng. Trong trường hợp này, chúng ta muốn đẩy chuỗi `"Isaac"` vào cuối một mảng đã chứa sẵn `"DJ"` và `"Bethany"`.

Vậy để làm điều đó, Jiki lấy mảng ra khỏi hộp, gắn `"Isaac"` vào cuối dây xích, rồi đặt cả khối trở lại vào hộp. Bạn để ý nhé, khác với chuỗi trước đây, khi Jiki tạo ra một chuỗi mới mỗi lần, thì lần này cậu ấy thực sự thay đổi mảng.

Một mẫu bạn sẽ gặp rất nhiều trong lập trình là bắt đầu với một mảng rỗng rồi xây dựng nó dần lên. Bạn cứ tưởng tượng chúng ta có một danh sách lớn các cái tên và muốn đi qua lần lượt từng cái. Mỗi lần tìm thấy một người là mentor, chúng ta thêm người đó vào mảng của mình.

Mẫu vừa lặp vừa thêm này là thứ bạn sẽ dùng rất nhiều.
