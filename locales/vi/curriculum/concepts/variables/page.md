---
title: "Tạo và sử dụng biến"
description: "Những cái hộp trên kệ của Jiki, lưu một giá trị kèm nhãn để sau này bạn lấy ra dùng trong code."
en_md5: dd0834017a8d42c22cca25966c1fdd91
---

Biến (tiếng Anh: _variables_) là thứ giúp chúng ta lưu trữ thông tin. Khi lập trình, chúng ta thường cần lưu lại một số hay một chuỗi để dùng sau, và biến là cách chúng ta làm việc đó. Vậy chúng ta cùng lùi ra xa một chút để nhìn nhà kho của Jiki, bạn sẽ thấy cậu ấy có thêm một bộ kệ nữa. Chúng ta đã quen với bộ kệ đầu tiên, nơi đặt các hàm, những cỗ máy nhỏ như `move` và `rectangle`. Nhưng ở bộ kệ thứ hai này, không phải máy móc mà là rất nhiều cái hộp, và những cái hộp này chính là thứ chúng ta gọi là biến. Bạn có thể bảo Jiki cất bất cứ thứ gì vào những cái hộp này, rồi sau đó nhờ cậu ấy lấy ra. Mỗi cái hộp đều có tên, giống hệt như hàm có tên, và mỗi hộp chỉ chứa đúng một thứ. Hiện tại thì đó là một số hoặc một chuỗi. Nhưng lát nữa trong khóa học, chúng ta sẽ xem cách cất những thứ phức tạp hơn vào đó.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/two-shelves.webp"
  alt="Hai bộ kệ trong nhà kho của Jiki: một bộ ghi là hàm, đựng máy móc; một bộ ghi là biến, đựng những cái hộp"
  width="500"
  height="173"
/>

Vậy làm sao để bảo Jiki tạo một cái hộp và bỏ thứ gì đó vào trong? Chúng ta dùng từ khóa `let` (nghĩa là "hãy để"). Từ khóa `let` báo cho Jiki biết là cậu ấy cần tạo một cái hộp mới. Bạn có thể hình dung cậu ấy bóc một cái hộp các-tông ra khỏi vỏ, lắp lại thành hộp, rồi nhìn vào thứ đứng sau chữ `let`, đó chính là nhãn mà cậu ấy dán lên hộp, trong trường hợp này là `name` (nghĩa là "tên"). Thế là cậu ấy rút bút ra, viết `name` lên nhãn. Rồi cậu ấy nhìn vào thứ đứng sau dấu bằng (tiếng Anh: _equal sign_). Trong trường hợp này là tên của mình, `"Jeremy"`. Vì `"Jeremy"` là một chuỗi, cậu ấy lấy một mảnh giấy và viết `"Jeremy"` lên đó. Nó chỉ là một chuỗi, giống hệt những màu bạn vẫn dùng từ trước tới giờ, rồi cậu ấy bỏ mảnh giấy đó vào hộp.

```javascript
let name = "Jeremy"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/jeremy-paper.webp"
  alt="Jiki cầm một mảnh giấy có viết chuỗi Jeremy, sẵn sàng bỏ vào hộp"
  width="373"
  height="400"
/>

Vậy là chúng ta đã bảo cậu ấy tạo một cái hộp, dán nhãn lên đó và bỏ thứ gì đó vào trong. Giờ cậu ấy mang cái hộp đặt lên kệ. Và bất cứ lúc nào khác trong chương trình, Jiki có thể ra lấy cái hộp đó xuống khỏi kệ và xem bên trong có gì. Hãy bắt đầu xây dựng mô hình tư duy này nhé. Mình đã lập trình từ rất lâu rồi, vậy mà khi viết code mình vẫn hình dung là mình đang bỏ thứ gì đó vào hộp để lát nữa lấy ra. Khi thấy từ khóa `let`, bạn hãy thực sự nghĩ rằng: "À, nghĩa là mình đang tạo một cái hộp mới."

Nói thêm một chút về tên biến, tức là những nhãn dán trên các cái hộp. Về chuyện này thì có vài quy tắc. Thứ nhất, tên biến không được có dấu cách. Nếu muốn nhãn của hộp gồm nhiều từ, chúng ta dồn các từ sát vào nhau và đổi chữ cái đầu của mỗi từ thành chữ in hoa. Cách viết này gọi là camel case. Hãy hình dung những cái bướu trên lưng lạc đà đẩy chữ cái đầu của mỗi từ mới lên thành chữ in hoa. Vậy nếu muốn một cái nhãn là tên của mình, thay vì viết hai từ có dấu cách, chúng ta viết liền thành một từ với chữ N in hoa: `myName`.

Ngoài ra, mỗi tên biến phải là duy nhất. Không thể có hai cái hộp cùng một nhãn, và biến cũng không được trùng tên với hàm. Nếu bạn quên, Jiki sẽ bối rối và báo lỗi cho bạn.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/duplicate-names-confused.webp"
  alt="Jiki bối rối nhìn hai cái hộp cùng dán nhãn name"
  width="485"
  height="400"
/>

Vậy hãy xem khi nào chúng ta muốn dùng đến biến. Giả sử chúng ta đang vẽ mặt trời trên bầu trời. Chúng ta biết là có thể dùng hàm `circle` (nghĩa là "hình tròn") và truyền cho nó bốn đầu vào. Đó là `left` (trái), `top` (trên), `radius` (bán kính) và `color` (màu). Nhưng khi vẽ nhiều thứ và có đủ loại con số rải rác khắp code, thì rất khó theo dõi và đọc. Vì thế, thay vào đó, chúng ta có thể tạo biến cho từng thứ: left, top, `radius` và `color`, rồi sau đó dùng đến các biến đó. Mục tiêu cuối cùng là dùng được hàm `circle` với những cái tên hộp dễ đọc, và khi Jiki thấy những cái tên đó, cậu ấy sẽ biết là phải lấy hộp từ trên kệ xuống và dùng thứ bên trong.

Vậy chúng ta cùng tạo biến cho những giá trị này. Bắt đầu với vị trí bên trái của mặt trời. Chúng ta dùng từ khóa `let` để bảo Jiki tạo một cái hộp mới tên là `leftPosition` (nghĩa là "vị trí bên trái"). Bạn để ý cách viết camel case ở đây với chữ P in hoa. Rồi chúng ta cho Jiki biết con số nào sẽ nằm trong hộp. Cậu ấy đặt cái hộp đó lên kệ, rồi làm tiếp như vậy với `topPosition` (nghĩa là "vị trí phía trên"), `radius` và `color`.

```javascript
let leftPosition = 10
let topPosition = 20
let radius = 5
let color = "yellow"

circle(leftPosition, topPosition, radius, color)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/name-on-shelf.webp"
  alt="Những cái hộp có dán nhãn trên kệ biến, mỗi hộp lưu một giá trị để sau này Jiki lấy ra"
  width="500"
  height="378"
/>

Bất cứ lúc nào trong code, chúng ta cũng có thể dùng lại các biến này, và Jiki sẽ lấy các giá trị (tiếng Anh: _values_) ra khỏi hộp và đặt vào máy. Một điều tuyệt vời nữa của biến là mỗi khi muốn vẽ thứ gì đó ở cùng vị trí với mặt trời, chúng ta có thể dùng lại đúng hai biến `leftPosition` và `topPosition` đó. Lấy một ví dụ khác. Hãy hình dung bạn đang xây một bức tường gồm 30 viên gạch, và bạn muốn mọi viên gạch đều có cùng chiều rộng và chiều cao. Sẽ tốt hơn nhiều nếu tạo biến cho chiều rộng và chiều cao ngay đầu code, rồi dùng lại chúng trong phần còn lại. Bởi vì nếu sau đó bạn muốn đổi chiều rộng hay chiều cao, bạn chỉ cần sửa ở một chỗ, và mọi thứ khác sẽ tự cập nhật.
