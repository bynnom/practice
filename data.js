window.seedKnowledge = [
  {
    "id": "327b23fa-23f3-4974-8640-2766373432d2",
    "category": "Automation",
    "question": "TDD BDD",
    "answer": "- TDD là Test-Driven Development, tức là mình viết test trước khi implement code. Flow thường là: viết test trước để mô tả expected behavior, chạy test sẽ fail trước, sau đó dev implement code để test pass, rồi refactor nếu cần.\n- Còn BDD là Behavior-Driven Development, tập trung vào behavior của hệ thống dưới góc nhìn business/user. Thường được viết theo format Given - When - Then để BA, QA, Dev hoặc PO đều có thể đọc và hiểu được expected behavior.\n- Còn trong project hiện tại, em dùng có test.step trong Playwright để mô tả từng action trong automation script, giúp report rõ ràng và dễ debug hơn. Nhưng em không gọi đó là TDD hay BDD thuần, mà chỉ là cách structure code cho dễ hiểu hơn.",
    "priority": "high"
  },
  {
    "id": "819ca1f4-3413-4689-ab36-00b98475c931",
    "category": "Testing cơ bản",
    "question": "Design test case",
    "answer": "Với test case, em thường chuẩn bị các thông tin như: \n1. module/feature\n2. test case ID và test case name/scenario\n3. precondition \n4. test steps, test data nếu có\n5. expected result, actual result\n6. priority và status.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "8ccbcd95-1e03-4f46-a204-396b563a1fa9",
    "category": "Testing cơ bản",
    "question": "Report bug",
    "answer": "Khi report bug, em thường đảm bảo bug có đủ thông tin để dev có thể reproduce và investigate dễ nhất, gồm: \n1. module/feature , environment\n2. precondition\n3. steps to reproduce\n4. actual behavior, expected behavior\n5. screenshot/video evidence\n6. test data và severity/priority.\n\nSau khi dev investigate thì dev có thể bổ sung thêm root cause và solution/fix note.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "intro-vn",
    "category": "Giới thiệu bản thân",
    "question": "Giới thiệu bản thân",
    "answer": "- Dạ em là Vỹ. Em có hơn 4 năm kinh nghiệm trong lĩnh vực QA/QC, bao gồm cả manual testing và automation testing. Trong khoảng 2 năm gần đây, em cũng có cơ hội tham gia thêm vai trò BA khi onsite tại dự án FE CREDIT.\n- Ở dự án này, em vừa phụ trách kiểm thử, vừa tham gia phân tích yêu cầu, làm việc trực tiếp với BU để làm rõ nghiệp vụ, scope và expected behavior ngay từ giai đoạn đầu.\n- Bên cạnh đó, em có kinh nghiệm về API testing, data validation, và từng tham gia kiểm thử trên một số nền tảng khác như social media platform, project management platform và test management platform.\n- Hiện tại, em muốn phát triển sâu hơn theo hướng business-focused testing, nên em tìm hiểu và apply vào vị trí này tại công ty mình.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "intro-en",
    "category": "Giới thiệu bản thân",
    "question": "Introduce yourself",
    "answer": "- Hello, my name is Vy. I have over 4 years of experience in QA/QC, covering both manual and automation testing. Over the last 2 years, I have also gained experience in a BA role while working onsite for the FE CREDIT project.\n- In this project, I am responsible for testing activities and also participate in requirement analysis, working closely with BU  to clarify business logic, scope, and expected behavior from the early stages.\n- Besides that, I have experience in API testing, data validation, and before I have worked on some types of platforms, such as social media, project management, and test management platforms.\n- Currently, I would like to focus more on business-focused testing, that why I’m interested in this position and decided to apply to your company.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "why-leave",
    "category": "HR",
    "question": "Tại sao quyết định nghỉ công ty cũ?",
    "answer": "- Ở công ty hiện tại, em có cơ hội tham gia nhiều mảng như manual testing, automation testing và một số task liên quan đến BA, nên em học được khá nhiều về testing, requirement và cách phối hợp với BU.\n- Tuy nhiên, sau một thời gian, em nhận thấy định hướng của mình là muốn phát triển sâu hơn theo hướng kiểm thử nghiệp vụ, đặc biệt trong domain tài chính. Vì vậy, em muốn tìm một môi trường phù hợp hơn để có thể tập trung phát triển kỹ năng QA/QC và business-focused testing.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "why-qc",
    "category": "HR",
    "question": "Tại sao đang QA automation lại apply QC?",
    "answer": "Theo em, automation là công cụ, còn nghiệp vụ mới là cốt lõi của sản phẩm. Automation giúp tối ưu việc lặp lại, nhưng giá trị quan trọng nhất là hiểu business để đảm bảo hệ thống chạy đúng. Trong các dự án tài chính, em làm việc nhiều với BU, hỗ trợ UAT và kiểm soát flow end-to-end, nên em muốn tập trung sâu hơn vào QC để bảo vệ chất lượng logic nghiệp vụ.",
    "priority": "high"
  },
  {
    "id": "salary",
    "category": "HR",
    "question": "Mức lương mong muốn",
    "answer": "- Dạ em kỳ vọng mức lương khoảng xx - xx net, dựa trên kinh nghiệm hiện tại của em, scope công việc của vị trí QA/QC và market range em tìm hiểu.",
    "priority": "medium",
    "userEdited": true
  },
  {
    "id": "strength-weakness",
    "category": "HR",
    "question": "Điểm mạnh và điểm yếu",
    "answer": "Điểm mạnh:\n- Em có thể linh hoạt giữa manual và automation testing. \n- Ở project hiện tại, ngoài việc tham gia làm rõ requirement với BU, em vẫn giữ trọng tâm QA/QC bằng cách chủ động shift-left testing từ sớm, review requirement, identify risk, chuẩn bị manual test cases. \n- Bên cạnh đó, em cũng chủ động build automation cho những flow phù hợp để giảm effort regression và share với team về việc này.\nVề điểm yếu:\n- Trước đây em đôi khi hơi cầu toàn và dễ mất thời gian vào chi tiết nhỏ. \n- Hiện tại em cải thiện bằng cách áp dụng risk-based testing, ưu tiên main flow và các case ảnh hưởng đến business, dữ liệu hoặc khách hàng trước. Những issue nhỏ hơn thì em vẫn ghi nhận, phân loại priority và sắp xếp xử lý sau để không ảnh hưởng tiến độ release.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "company-momo",
    "category": "Công ty",
    "question": "Bạn biết gì về MoMo?",
    "answer": "MoMo là ví điện tử phổ biến tại Việt Nam, cung cấp thanh toán QR, chuyển tiền, ví trả sau và các sản phẩm tài chính. Đây là hệ thống có nhiều service tích hợp nên yêu cầu cao về tính ổn định và độ chính xác trong xử lý giao dịch. Điều này phù hợp với định hướng của em trong hệ thống tài chính.",
    "priority": "medium"
  },
  {
    "id": "company-galaxyfinx",
    "category": "Công ty",
    "question": "Bạn biết gì về GalaxyFinX?",
    "answer": "- Dạ theo em tìm hiểu, GalaxyFinX là công ty fintech thuộc hệ sinh thái Sovico, là một đơn vị tham gia gia công phần mềm cho Vikki Bank.\n- Em cũng biết thêm Vikki Bank là từ DongA Bank đã đổi tên vào tháng 02/2025.",
    "priority": "medium",
    "userEdited": true
  },
  {
    "id": "current-project",
    "category": "Dự án",
    "question": "Bạn đang làm project gì gần đây?",
    "answer": "- Dạ gần đây em đang tham gia dự án CMS-based website cho FE CREDIT. \n- Website này đóng vai trò là kênh frontend/portal tích hợp với nhiều hệ thống liên quan để cung cấp các chức năng cho end user như đăng ký vay, thanh toán, quản lý tài khoản sau đăng nhập và một số chức năng hỗ trợ khác.\n\nDự án có 2 phase chính. \n- Phase 1 là thay thế website cũ bằng website mới, phối hợp với BU và các hệ thống liên quan để xây dựng flow, scope và tích hợp API. Phase này đã hoàn thành. \n- Hiện tại dự án đang ở phase 2, là giai đoạn vận hành sau go-live, xử lý CR, bug fixing và các enhancement nội bộ.\n\nVai trò chính của em là \n- QA/QC đảm bảo chất lượng đầu ra cho các CRP/release được giao: review requirement, design test cases, execute test, log issue/enhancement và phối hợp với Dev/BU để xử lý. \n- Ngoài ra em cũng maintain automation scripts để phục vụ regression trước release.\n- Bên cạnh đó em cũng làm công việc BA như làm rõ nghiệp vụ với BU, hỗ trợ UAT.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "loan-flow",
    "category": "Dự án",
    "question": "Mô tả chức năng đăng ký vay",
    "answer": "- Dạ chức năng đăng ký vay là một flow gồm 2 bước. \n- #1, user nhập CCCD và số điện thoại, frontend sẽ validate format cơ bản, sau đó backend kiểm tra các rule như độ tuổi, số lần submit trong ngày và lịch sử đăng ký trước đó.\n- Nếu hợp lệ, hệ thống sẽ gọi thêm một số API tới các hệ thống liên quan để kiểm tra điều kiện và collect thông tin cần thiết trước khi cho user đi tiếp.\n- #2, user nhập thêm thông tin bổ sung và submit. Backend tiếp tục validate các business rules, sau đó dựa trên dữ liệu user nhập và dữ liệu đã collect để gọi API sang các hệ thống khác và trả kết quả tương ứng.\n- Ngoài ra, flow này còn có schedule jobs để xử lý các case submit fail do lỗi hệ thống hoặc các case user chưa hoàn thành form nhưng đã rời trang, nhằm hạn chế mất dữ liệu và hỗ trợ xử lý lại sau đó.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "business-work",
    "category": "Dự án",
    "question": "Bạn có làm việc với BA/BU không?",
    "answer": "- Dạ có. Ở dự án hiện tại, ngoài vai trò QA/QC, em cũng kiêm BA, nên em thường xuyên làm việc trực tiếp với BU để trao đổi và làm rõ yêu cầu.\n- Trong quá trình đó, em hỗ trợ phát hiện các điểm chưa rõ hoặc conflict trong requirement, kiểm tra lại business flow và expected behavior để đảm bảo hệ thống đúng với nhu cầu nghiệp vụ. Việc này cũng giúp em design test case sát thực tế hơn và phát hiện risk sớm hơn.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "testing-types",
    "category": "Testing cơ bản",
    "question": "Phân biệt unit, regression, smoke và sanity test",
    "answer": "- Unit test: kiểm thử theo từng function/module, thường do dev team thực hiện.\n- Regression test: thường thực hiện trên UAT, kiểm thử lại các chức năng liên quan đến tính năng đã thay đổi để đảm bảo không impact.\n- Smoke test: kiểm thử nhanh các chức năng chính để đảm bảo các chức năng chính vẫn hoạt động.\n- Sanity test: kiểm thử tập trung vào tính năng vừa thay đổi hoặc fix để đảm bảo hoạt động đúng.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "seven-principles",
    "category": "Testing cơ bản",
    "question": "7 nguyên tắc kiểm thử (cần ôn sau)",
    "answer": "1. Testing shows presence of defects: test chỉ chứng minh có lỗi, không chứng minh hệ thống không còn lỗi.\n2. Exhaustive testing is impossible: không thể test hết tất cả case.\n3. Early testing: test càng sớm càng tốt để giảm rework.\n4. Defect clustering: bug thường tập trung ở một số module rủi ro.\n5. Pesticide paradox: test lặp lại mãi sẽ khó tìm bug mới.\n6. Testing is context dependent: cách test phụ thuộc domain/sản phẩm.\n7. Absence of errors fallacy: không có bug không đồng nghĩa sản phẩm tốt.\n\nKhi trả lời nên gắn ví dụ fintech: payment/login nhiều rủi ro nên cần focus, test pass không đồng nghĩa sản phẩm tốt nếu UX hoặc requirement sai.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "test-techniques",
    "category": "Testing cơ bản",
    "question": "Các kỹ thuật thiết kế test case",
    "answer": "Dạ khi thiết kế test case, em thường sử dụng một số kỹ thuật chính như:\n- Boundary Value Analysis: kiểm tra các giá trị biên và cận biên. Ví dụ nếu độ tuổi hợp lệ 18–60 thì sẽ test các giá trị như 17, 18, 19, 59, 60, 61.\n- Equivalence Partitioning: chia dữ liệu đầu vào thành các nhóm hợp lệ và không hợp lệ để giảm số lượng test case nhưng vẫn đảm bảo coverage.\n- Decision Table: áp dụng khi chức năng có nhiều điều kiện logic kết hợp với nhau, giúp xác định đầy đủ các output.\n- State Transition: dùng cho những flow có nhiều trạng thái, ví dụ order đi qua các trạng thái pending, paid, shipped, cancelled và cần kiểm tra các điều kiện chuyển trạng thái.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "api-basics",
    "category": "API",
    "question": "API và API testing là gì?",
    "answer": "API là cầu nối giúp frontend/backend hoặc các hệ thống giao tiếp. API testing là kiểm tra request/response để đảm bảo:\n- Dữ liệu trả về đúng.\n- Logic xử lý đúng.\n- Các hệ thống tích hợp hoạt động chính xác.\nCần kiểm tra:\n- Status code.\n- Schema.\n- Business rule.\n- Data mapping.\n- Error handling.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "api-status-method",
    "category": "API",
    "question": "Status code và HTTP methods thường gặp",
    "answer": "Status code:\n- 1xx: phản hồi thông tin.\n- 2xx: thành công.\n- 3xx: điều hướng.\n- 4xx: lỗi phía client.\n- 5xx: lỗi phía server.\n\nHTTP methods:\n- GET: lấy dữ liệu.\n- POST: tạo dữ liệu.\n- PUT: cập nhật toàn bộ.\n- PATCH: cập nhật một phần.\n- DELETE: xóa dữ liệu.\n\nLogin thường dùng POST vì dữ liệu nằm trong body và phù hợp hơn cho thông tin nhạy cảm.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "api-early-test",
    "category": "API",
    "question": "Tại sao cần test API ngay khi BE release?",
    "answer": "Cần test sau khi BE release để đảm bảo API hoạt động đúng trước khi tích hợp FE:\n- Kiểm tra request/response.\n- Validate data.\n- Kiểm tra business logic.\n- Cover error case.\n\nViệc này giúp phát hiện lỗi sớm trước khi tích hợp ở giai đoạn sau.\n\nAPI integration testing là kiểm tra tương tác giữa nhiều API hoặc giữa các hệ thống, ví dụ: login -> chọn sản phẩm -> thanh toán -> xác nhận.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "playwright-structure",
    "category": "Automation",
    "question": "Cấu trúc automation Playwright bạn từng dùng",
    "answer": "Dùng TypeScript, thường có:\n- Folder tests: chứa test script.\n- Folder pom: quản lý selector/action theo Page Object Model.\n- Config: chạy multi-env.\n- Util/keyword: function dùng chung.\n\nCó thể tích hợp CI/CD, export HTML report, screenshot, video và trace để debug.",
    "priority": "high"
  },
  {
    "id": "katalon-structure",
    "category": "Automation",
    "question": "Cấu trúc Katalon cơ bản",
    "answer": "Katalon dùng Groovy. Các phần chính gồm:\n- Keyword: logic dùng chung.\n- Profile: cấu hình multi-env.\n- Script/helper function: hỗ trợ test.\n- Test Cases.\n- Test Suites.\n\nCó thể dùng để quản lý và chạy bộ test theo suite hoặc môi trường.",
    "priority": "medium"
  },
  {
    "id": "pom",
    "category": "Automation",
    "question": "Page Object Model là gì?",
    "answer": "- POM là design pattern trong automation testing, giúp tách logic kiểm thử khỏi cấu trúc giao diện. \n- Selectors và actions được quản lý theo từng Page Class. Khi UI thay đổi, chỉ cần sửa tại page tương ứng thay vì sửa nhiều test scripts, giúp framework dễ bảo trì và mở rộng.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "automation-report",
    "category": "Automation",
    "question": "Automation report thể hiện những gì?",
    "answer": "Report thường có:\n- Tổng số test case đã chạy.\n- Pass, fail, skip, flaky.\n- Thời gian execution.\n\nChi tiết từng test case có:\n- Step/action đã chạy.\n- Thời gian chạy.\n- Screenshot, video, trace nếu có cấu hình để debug.",
    "priority": "medium"
  },
  {
    "id": "flaky",
    "category": "Automation",
    "question": "Nếu số case failed không ổn định thì QA nên làm gì?",
    "answer": "Đầu tiên cần phân biệt lỗi hệ thống hay lỗi automation.\n\nNếu do hệ thống:\n- Verify lại bằng manual test.\n- Tạm chưa đưa case đó vào automation nếu chức năng chưa ổn định.\n\nNếu flaky do automation:\n- Kiểm tra timing.\n- Kiểm tra locator.\n- Kiểm tra wait strategy.\n- Tối ưu cách đồng bộ trước khi nghĩ tới retry/timeout.\n\nEm sẽ hạn chế chỉ tăng timeout hoặc retry quá nhiều.",
    "priority": "high"
  },
  {
    "id": "waits",
    "category": "Automation",
    "question": "Explicit wait và implicit wait dùng khi nào?",
    "answer": "- Implicit wait: thời gian chờ chung khi tìm element.\n- Explicit wait: chờ theo điều kiện cụ thể như visible, hidden, enabled hoặc URL thay đổi.\n\nThực tế nên ưu tiên explicit wait vì kiểm soát chính xác điều kiện, ổn định hơn và dễ debug hơn.",
    "priority": "medium"
  },
  {
    "id": "dom",
    "category": "Automation",
    "question": "DOM là gì và vì sao QA automation cần nắm?",
    "answer": "DOM là cấu trúc cây trình duyệt tạo ra khi render HTML.\n\nQA automation cần hiểu DOM để:\n- Viết locator CSS/XPath bền vững.\n- Debug iframe, shadow DOM, element hidden.\n- Dùng JavaScript khi framework bị giới hạn.\n\nPhân biệt nhanh: HTML là mã nguồn tĩnh ban đầu, còn DOM là thực thể đang chạy và có thể thay đổi.",
    "priority": "medium"
  },
  {
    "id": "scrum-sprint",
    "category": "Agile/Scrum",
    "question": "Một sprint thường làm gì?",
    "answer": "Tham gia xuyên suốt từ đầu đến cuối Sprint.\n1. Đầu Sprint, tham gia Sprint Planning để nắm requirement, scope, priority và clarify các điểm chưa rõ với BU.\n2. Trong quá trình dev implement, phân tích nghiệp vụ, xác định test scope, thiết kế test case, chuẩn bị test data và develop automation script.\n3. Khi dev hoàn thành từng item, thực hiện testing trên SIT/UAT, verify flow nghiệp vụ, log bug nếu có và phối hợp với dev để reproduce hoặc retest sau khi fix.\n4. Cuối Sprint, tổng hợp test result, tracking bug status, hỗ trợ UAT, chạy regression cho các chức năng liên quan và report risk/issue còn tồn đọng trước khi release.\n5. Sau khi release, phối hợp với BU để sanity test/smoke test thêm một round trên production, đảm bảo các chức năng hoạt động đúng như mong muốn. Sau đó sẽ tiếp tục monitor, review feedback, issue nếu có và chuẩn bị cho Sprint tiếp theo.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "scrum-activities",
    "category": "Agile/Scrum",
    "question": "Sprint bao lâu và có activity nào?",
    "answer": "Một Sprint thường kéo dài tối đa 1 tháng. Thực tế tùy team nhưng phổ biến nhất là 2 tuần.\n\nCó các activity chính:\n- Sprint Planning: thống nhất Sprint Goal và những item sẽ làm trong Sprint. Timebox tối đa 8 tiếng.\n- Daily Scrum: team sync nhanh mỗi ngày về tiến độ, blocker và plan tiếp theo. Timebox 15 phút.\n- Sprint Review: cuối Sprint, team demo/review increment đã hoàn thành với stakeholder để nhận feedback. Timebox tối đa 4 tiếng.\n- Sprint Retrospective: team nhìn lại cách làm việc trong Sprint vừa rồi, điểm nào tốt, điểm nào cần cải thiện. Timebox tối đa 3 tiếng.",
    "priority": "medium",
    "userEdited": true
  },
  {
    "id": "coverage",
    "category": "Test management",
    "question": "Làm sao đảm bảo test full coverage khi nhận requirement?",
    "answer": "- Làm rõ requirement với BU để chắc mình hiểu đúng.\n- Tách flow chính, flow phụ và exception case & Viết test case bám theo từng flow.\n- Nếu có integration thì cover API, data flow và ảnh hưởng tới chức năng liên quan.\n- Review test case với các bên liên quan & Update test case khi requirement thay đổi.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "test-plan-location",
    "category": "Test management",
    "question": "QA quản lý test plan, test case ở đâu?",
    "answer": "- Với dự án hiện tại của em thì team đang quản lý bằng Excel, sau đó đính kèm test case vào ticket tương ứng để dev và stakeholders theo dõi.\n- Ngoài ra, Confluence được dùng để tổng hợp test plan, test scope và tracking tổng thể cho từng release.",
    "priority": "medium",
    "userEdited": true
  },
  {
    "id": "sql-basic",
    "category": "SQL",
    "question": "Các câu SQL cơ bản thường dùng (ôn sau)",
    "answer": "- SELECT: lấy dữ liệu.\n- WHERE: lọc dữ liệu.\n- INSERT: thêm record.\n- UPDATE: cập nhật record.\n- DELETE: xóa record.\n- JOIN: kết hợp bảng.\n- GROUP BY: nhóm dữ liệu.\n- ORDER BY: sắp xếp.\n- LIMIT: giới hạn số lượng.\n\nCác hàm thường dùng:\n- COUNT.\n- AVG.\n- SUM.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "ui-ux-accessibility",
    "category": "UI/UX",
    "question": "UI/UX testing có những mức nào? Accessibility là gì?",
    "answer": "UI/UX testing có thể chia thành:\n- Design Review: review trên mockup để phát hiện lỗi logic sớm.\n- Visual Testing: kiểm tra sản phẩm thực tế khớp design.\n- Usability Testing: đứng dưới góc nhìn người dùng để đánh giá độ dễ dùng.\n\nAccessibility là đảm bảo hệ thống dùng được với nhiều người, ví dụ:\n- Hỗ trợ thao tác bằng keyboard.\n- Có alt text cho hình ảnh.\n- Màu sắc đủ tương phản.\n- Hỗ trợ screen reader.",
    "priority": "medium"
  },
  {
    "id": "responsive",
    "category": "UI/UX",
    "question": "Breakpoint standard trong responsive",
    "answer": "Breakpoint tùy design system, nhưng thường chia:\n- Mobile: dưới khoảng 576px.\n- Tablet: khoảng 576-768px.\n- Desktop: trên khoảng 992px.\n\nKhi test cần kiểm tra layout, text overflow, spacing, button tap area và hành vi theo từng viewport.",
    "priority": "low"
  },
  {
    "id": "browserstack",
    "category": "UI/UX",
    "question": "BrowserStack dùng để test gì?",
    "answer": "BrowserStack là platform test trên nhiều browser và device thật, thường dùng cho:\n- Cross-browser testing.\n- Cross-device testing.\n- Responsive testing.\n\nPhân biệt nhanh:\n- Emulator: giả lập cả phần cứng và OS nên gần device thật hơn.\n- Simulator: chủ yếu mô phỏng môi trường phần mềm.",
    "priority": "medium"
  },
  {
    "id": "mobile-vs-web",
    "category": "Mobile/App",
    "question": "Test app và web khác nhau gì?",
    "answer": "- App phụ thuộc device và OS nhiều hơn, web chủ yếu phụ thuộc browser.\n- App cần test thêm installation, permission, background/foreground, network, resource device và release store.\n- Web dễ deploy và test nhanh hơn.\n- App cần build và có nhiều biến thể device/OS hơn.",
    "priority": "high"
  },
  {
    "id": "android-ios",
    "category": "Mobile/App",
    "question": "Khác biệt Android và iOS khi testing",
    "answer": "- Android dùng APK, đa dạng device/version hơn vì open-source.\n- iOS dùng IPA, ít device hơn do Apple quản lý nhưng cần chú ý version và consistency.\n- UI/UX của hai platform khác theo guideline riêng.\n- Khi test cần bao phủ hành vi đặc thù của từng platform.",
    "priority": "medium"
  },
  {
    "id": "gesture",
    "category": "Mobile/App",
    "question": "Xử lý gesture syntax ra sao?",
    "answer": "- Nếu element xác định rõ thì thao tác trực tiếp trên element.\n- Với gesture như swipe/drag thì dùng action sequence hoặc tọa độ.\n- Nên hạn chế hard-code tọa độ vì dễ flaky trên nhiều device.\n- Ưu tiên locator hoặc tính toán theo viewport/element.",
    "priority": "medium"
  },
  {
    "id": "form-testcase",
    "category": "Testcase",
    "question": "Test một form cần những gì?",
    "answer": "Functional:\n- UI/UX: kiểm tra giao diện khớp design.\n- Functionality: nhập dữ liệu và submit form.\n- Validation: required, format, độ dài, boundary.\n- Error handling: message hiển thị đúng và đủ.\n- Security: backend validation, tránh bypass dữ liệu không hợp lệ.\n\nNon-functional:\n- Performance: nhiều user cùng submit.\n- Reliability: không crash hoặc mất dữ liệu.\n- Usability: người dùng dễ thao tác, không bị confuse.",
    "priority": "high"
  },
  {
    "id": "ai-testing",
    "category": "AI trong testing",
    "question": "Bạn dùng AI như thế nào trong testing?",
    "answer": "- Có dùng AI như một công cụ hỗ trợ trong testing. \n- Với manual, dùng ChatGPT để hỗ trợ phân tích requirement, design test case, gợi ý edge cases và chỉnh wording bug report cho rõ ràng hơn. \n- Với automation, dùng Codex và Playwright MCP để hỗ trợ generate test script, tối ưu code, refactor và maintain test scripts.\n- Việc này giúp tiết kiệm thời gian cho các task lặp lại và giảm lỗi về wording hoặc structure. Tuy nhiên không dùng output của AI trực tiếp, mà luôn review lại theo requirement, business logic và coding standard của project trước khi áp dụng.",
    "priority": "medium",
    "userEdited": true
  },
  {
    "id": "show-off",
    "category": "Kinh nghiệm nổi bật",
    "question": "Đóng góp nổi bật có thể show off khi phỏng vấn",
    "answer": "- Dạ nếu nói về đóng góp nổi bật, ở dự án hiện tại em không nghĩ mình là người nổi bật hay giỏi nhất ở trong team. \n- Nhưng điểm em tự tin là em nắm khá rõ tổng thể và cách vận hành của dự án. Vì vậy, khi có issue phát sinh hoặc có vấn đề cần xử lý gấp, mọi người thường liên hệ em đầu tiên để hỗ trợ kiểm tra flow, xác định impact và phối hợp với các bên liên quan. \n- Em nghĩ điểm nổi bật của em là không chỉ làm theo task, mà còn hiểu bức tranh tổng thể của dự án và có thể hỗ trợ team xử lý vấn đề nhanh hơn.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "f94e855c-a43a-4de9-b1a2-3011a297815f",
    "category": "Testing cơ bản",
    "question": "Black box White box",
    "answer": "- Black box dựa trên tiêu chí: Requirement, UI, input/output\n- White box dựa trên tiêu chí: Code, logic, structure",
    "priority": "high"
  },
  {
    "id": "22d7708c-6250-42fc-b64f-661caef5a636",
    "category": "HR",
    "question": "Galaxy thông tin về dự án",
    "answer": "Cần cover:\n1. Các web portal bên mình có\n2. Mobile app gồm nhiều services được build bên trong",
    "priority": "high"
  },
  {
    "id": "7c859b02-1939-405c-a543-b6456ad47e1f",
    "category": "Dự án",
    "question": "PAL-EBM là gì và em áp dụng được gì?",
    "answer": "- PAL-EBM là chứng chỉ liên quan đến Evidence-Based Management. Hiểu đơn giản là thay vì chỉ đo team làm được bao nhiêu task, mình nên nhìn thêm các bằng chứng thể hiện sản phẩm có tạo ra value hay không.\n- Ví dụ trong dự án website, ngoài việc hoàn thành CR đúng deadline, team có thể nhìn thêm các yếu tố như lỗi sau release, thời gian xử lý CR, feedback từ BU/user, performance, hoặc mức độ ổn định của các core flows sau mỗi release.",
    "priority": "high"
  },
  {
    "id": "6b43d83c-30d2-4d9f-a579-b3485033689f",
    "category": "Dự án",
    "question": "Học PSPO I có giúp gì cho vai trò QA/BA của em không?",
    "answer": "- Dạ có. PSPO I giúp em nhìn requirement không chỉ ở góc độ đúng/sai về chức năng, mà còn ở góc độ business value, priority và impact tới user.\n- Khi review requirement hoặc test một CR, em sẽ quan tâm hơn đến việc thay đổi này giải quyết vấn đề gì, ảnh hưởng flow nào, user nào bị impact, và có cần ưu tiên test regression cho những flow critical không.",
    "priority": "high"
  },
  {
    "id": "d3dc5a2b-f7e9-4008-9bd0-01d376fbd5d9",
    "category": "Dự án",
    "question": "Vì sao em học 3 chứng chỉ PSM, PSPO, PAL-EBM?",
    "answer": "- Dạ vì công việc hiện tại của em làm trong môi trường Agile/Scrum, em vừa làm QC vừa kiêm cả BA nên em muốn hiểu Scrum một cách bài bản hơn. \n- PSM I giúp em hiểu đúng Scrum framework, PSPO I giúp em hiểu thêm về backlog, priority và product value, còn PAL-EBM giúp em hiểu cách đo lường value/outcome sau khi deliver. \n- Có thể học và thi rồi em sẽ không áp dụng được hết. Nhưng mà khi xử lý trên task được giao em sẽ có thêm một góc nhìn nào đó để chất lượng đầu ra của task được giao tốt hơn.",
    "priority": "high"
  },
  {
    "id": "ef77ca59-4cf7-47e5-bce3-9055496b0378",
    "category": "Automation",
    "question": "Git",
    "answer": "Git flow cơ bản thường dùng:\n1. git checkout main\n2. git pull origin main\n3. git checkout -b feature/your-branch-name\nSau khi code xong:\n4. git status\n5. git add .\n6. git commit -m \"Add automation tests for login flow\"\n7. git push origin feature/your-branch-name",
    "priority": "high"
  },
  {
    "id": "88646643-0ffb-4c89-b4fb-36ff4cb5b426",
    "category": "HR",
    "question": "Rìa rìa",
    "answer": "1. 1 năm nhận bao nhiêu tháng lương\n2. Tổng thu nhập 1 năm\n3. Quy mô dự án\n- Dạ dự án của em được chia làm 2 phase nên quy mô cũng thay đổi theo từng phase. \n- Phase 1 là giai đoạn build mới website để thay thế website cũ, team BA khoảng 3 người tính cả em, em vừa tham gia BA vừa kiêm QC. Dev team lúc đó khoảng 5 người từ vendor. Scope chính gồm đăng ký vay, thanh toán khoản vay, post-login để khách hàng xem thông tin, và một số tính năng khác như tra cứu địa điểm thanh toán, tuyển dụng, các trang nội dung.\n- Sau go-live thì dự án sang phase 2, tức là giai đoạn vận hành. Team core nhỏ hơn, còn khoảng 2 BA tính cả em, và em vẫn kiêm QC. Dev team lúc này có 2 dev internal. Công việc chính là xử lý CR từ BU, bug fix, support UAT/release và làm các enhancement nội bộ để tối ưu vận hành.",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "2fb99a86-3e6a-4363-99dd-7af2a55a1463",
    "category": "Automation",
    "question": "Có sử dụng Data-driven testing trong automation không?",
    "answer": "- Có, em có sử dụng data-driven testing trong automation. Đây là cách tách test data ra khỏi test logic. Logic test giữ nguyên, nhưng mình chạy test với nhiều bộ data khác nhau.\n- Ví dụ với login, thay vì viết nhiều test script riêng cho valid login, invalid password, empty username, locked account, em có thể viết một test script chung rồi chạy với nhiều bộ data từ JSON/CSV/Excel/config. \n- Cách này giúp giảm duplicated code, tăng coverage và dễ maintain hơn.",
    "priority": "high"
  },
  {
    "id": "c7838c2f-1c9d-45c7-b210-86927eabaf78",
    "category": "HR",
    "question": "Có câu hỏi gì cho công ty không",
    "answer": "Dạ em có một vài câu muốn tìm hiểu thêm về vị trí và môi trường làm việc ạ:\n\n1. Trong giai đoạn đầu onboard, công ty/team sẽ có hình thức training hoặc hỗ trợ như thế nào để nhân sự mới nắm được công việc ạ?\n\n2. Với vị trí này, trong 1–2 tháng đầu công ty kỳ vọng nhân sự mới đạt được những gì ạ?\n\n3. Một ngày làm việc điển hình của vị trí này thường sẽ bao gồm những công việc chính nào ạ?\n\n4. Công ty/team thường đánh giá hiệu quả công việc của vị trí này dựa trên những tiêu chí nào ạ?\n\n5. Về lâu dài, vị trí này có lộ trình phát triển hoặc cơ hội mở rộng vai trò như thế nào ạ?\n\n6. Công ty có hỗ trợ đào tạo nội bộ hoặc các khóa học bên ngoài để nhân sự phát triển kỹ năng không ạ?\n\n7. Cho em hỏi thêm, vị trí này là tuyển mới do mở rộng team hay tuyển thay thế cho nhân sự trước đó ạ?",
    "priority": "high"
  },
  {
    "id": "4fae4016-2170-4479-8a56-8be69d335f0c",
    "category": "Testing cơ bản",
    "question": "SEO",
    "answer": "- Dạ với SEO testing thì em thường tách thành 2 phần.\n- Đầu tiên là technical SEO validation, kiểm tra checklist SEO cơ bản:  index, meta title/description, heading structure, alt image, canonical/hreflang, sitemap/robots.txt và performance của page.\n- Thứ hai là em sử dụng thêm A/B testing, dùng để so sánh 2 version khác nhau của page hoặc content, nhằm đánh giá version nào hiệu quả hơn về traffic.\n- Thông thường nếu có thay đổi SEO lớn, mình có thể rollout trước trên một nhóm page và monitor trên PROD. Nếu ổn thì mới apply cho toàn website.",
    "priority": "medium",
    "userEdited": true
  },
  {
    "id": "f6faff14-be0c-4649-885d-c9953a9e42a2",
    "category": "API",
    "question": "Status code thường dùng",
    "answer": "- 200 OK - Request thành công  \n- 201 Created - Tạo mới thành công  \n- 400 Bad Request - Request sai / thiếu thông tin  \n- 401 Unauthorized - Chưa xác thực  \n- 403 Forbidden - Không có quyền truy cập  \n- 404 Not Found - Không tìm thấy resource/API  \n- 429 Too Many Requests - Gọi API quá nhiều  \n- 500 Internal Server Error - Lỗi server chung  \n- 502 Bad Gateway - Gateway nhận response lỗi từ BE  \n- 503 Service Unavailable - Service tạm không khả dụng  \n- 504 Gateway Timeout - Gateway chờ response lâu",
    "priority": "high",
    "userEdited": true
  },
  {
    "id": "6fb599f5-cf93-4aa4-97a2-c2b61c4dfb63",
    "category": "HR",
    "question": "Em đã tìm hiểu về trị trí công việc này chưa",
    "answer": "- Dạ em có tìm hiểu về vị trí này rồi ạ. Theo em hiểu, công việc sẽ tập trung vào việc phân tích yêu cầu, thiết kế và phát triển automation test scripts, đồng thời maintain scripts cho các chức năng mình sẽ đảm nhiệm.\n- Bên cạnh đó, vị trí này cũng cần phối hợp chặt chẽ với dev team trong quá trình reproduce bug, phân tích nguyên nhân và hỗ trợ xử lý issue hiệu quả.\n- Về kinh nghiệm automation, em đã từng làm qua một số framework như Cypress, Appium và Playwright. Trong đó em tự tin nhất với Playwright vì đây là framework em sử dụng nhiều nhất.\n- Nhìn chung, sau khi tìm hiểu JD thì em thấy vị trí này khá phù hợp với kinh nghiệm hiện tại của em, nên em đã ứng tuyển.",
    "priority": "high"
  },
  {
    "id": "ccb8a31a-0b36-4279-9a8b-f59df5d7e9f3",
    "category": "HR",
    "question": "Mục tiêu trong 1 năm",
    "answer": "- Trong 2 đến 3 tháng đầu, em sẽ tập trung nắm sản phẩm, domain, quy trình làm việc, các business flow chính và cách team đang vận hành testing.\n- Sau khi đã nắm được nền tảng, em muốn đóng góp sâu hơn vào chất lượng kiểm thử, không chỉ execute test case mà còn chủ động review requirement dưới góc nhìn QA, phân tích risk, bổ sung edge cases thực tế và cải thiện test coverage cho các business flow quan trọng.\n- Mục tiêu là giúp team phát hiện issue sớm hơn, nâng cao chất lượng kiểm thử và giảm rủi ro miss bug khi release.",
    "priority": "high"
  }
];
