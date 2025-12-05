import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "1",
        en: {
            name: "VGO",
            description: "The VGO mobile app allows Vietnamese people in Korea to easily order Vietnamese food from the comfort of their homes. With a user-friendly interface, users can browse a wide variety of traditional Vietnamese dishes, from pho to bun, banh mi, and more. The app also provides detailed information about each dish, including images and reviews from other users. VGO is committed to bringing you the best flavors from home, making it easier for you to feel connected to your roots while living abroad. Users can track their orders in real-time and receive notifications when their food is delivered.",
            platforms: "Mobile",
            keyFeatures: [
                "Sign up",
                "Login",
                "Order food",
                "Order history",
                "Add multiple addresses"
            ],
            image:{img:'/thumbnails/VGO.png'  ,alt:"Thumbnails"},
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                // { img: "/thumbnails/VGO.png", alt: "Home screen of the app" },
            ],
            smallImages: [
                { img: "/thumbnails/VGO/1.png", alt: "Main interface" },
                { img: "/thumbnails/VGO/2.png", alt: "Main interface" },
                { img: "/thumbnails/VGO/3.png", alt: "Main interface" },
                { img: "/thumbnails/VGO/4.png", alt: "Main interface" },
                { img: "/thumbnails/VGO/5.png", alt: "Main interface" },
            ],
            responsibilities: "UI/UX_BE_FE"
        },
        kr: {
            name: "VGO",
            description: "VGO 모바일 앱은 한국에 있는 베트남 사람들이 집에서 편리하게 베트남 음식을 주문할 수 있도록 돕습니다. 사용자 친화적인 인터페이스를 통해 사용자는 쌀국수, 분, 반미 등 다양한 전통 베트남 요리를 쉽게 찾아볼 수 있습니다. 이 앱은 각 요리에 대한 상세 정보와 사용자 리뷰를 포함한 이미지를 제공합니다. VGO는 해외에서 살아도 고향의 맛을 느낄 수 있도록 최선을 다하고 있습니다. 사용자는 실시간으로 주문 상태를 추적하고 음식이 배달되면 알림을 받을 수 있습니다.",
            platforms: "Mobile",
            keyFeatures: [
                "풍부한 메뉴 탐색",
                "빠른 주문",
                "실시간 주문 추적",
                "요리 평가 및 리뷰"
            ],
            image:{img:'/thumbnails/VGO.png'  ,alt:"Thumbnails"},
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                // { img: "/thumbnails/VGO.png", alt: "앱의 홈 화면" },
            ],
            smallImages: [
                { img: "/thumbnails/VGO/1.png", alt: "메인 인터페이스" },
                { img: "/thumbnails/VGO/2.png", alt: "메인 인터페이스" },
                { img: "/thumbnails/VGO/3.png", alt: "메인 인터페이스" },
                { img: "/thumbnails/VGO/4.png", alt: "메인 인터페이스" },
                { img: "/thumbnails/VGO/5.png", alt: "메인 인터페이스" },
            ],
            responsibilities: "UI/UX_BE_FE"
        },
        vi: {
            name: "VGO",
            description: "Ứng dụng di động VGO giúp người Việt tại Hàn Quốc dễ dàng đặt món ăn Việt Nam ngay tại nhà. Với giao diện thân thiện và dễ sử dụng, người dùng có thể duyệt qua một danh sách phong phú các món ăn truyền thống Việt Nam, từ phở đến bún, bánh mì và nhiều món ăn khác. Ứng dụng cũng cung cấp thông tin chi tiết về từng món ăn, bao gồm hình ảnh và đánh giá từ những người dùng khác. VGO cam kết mang đến cho bạn những món ăn ngon nhất từ quê hương, giúp bạn không còn nhớ nhà khi sống xa tổ quốc. Bạn cũng có thể theo dõi đơn hàng của mình trong thời gian thực và nhận thông báo khi món ăn đã được giao đến tay.",
            platforms: "Mobile",
            image:{img:'/thumbnails/VGO.png'  ,alt:"Thumbnails"},
            keyFeatures: [
                "Duyệt thực đơn phong phú",
                "Đặt hàng nhanh chóng",
                "Theo dõi đơn hàng trong thời gian thực",
                "Đánh giá và bình luận về món ăn"
            ],
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                // { img: "/thumbnails/VGO.png", alt: "Màn hình chính của ứng dụng" },
            ],
            smallImages: [
                { img: "/thumbnails/VGO/1.png", alt: "Giao diện chính" },
                { img: "/thumbnails/VGO/2.png", alt: "Giao diện chính" },
                { img: "/thumbnails/VGO/3.png", alt: "Giao diện chính" },
                { img: "/thumbnails/VGO/4.png", alt: "Giao diện chính" },
                { img: "/thumbnails/VGO/5.png", alt: "Giao diện chính" },
            ],
            responsibilities: "UI/UX_BE_FE"
        }
    },
    {
        id: "5",
        vi: {
            name: "Shop_VGO",
            description: "Shop_VGO - Ứng dụng mua sắm di động mang đến trải nghiệm mua sắm tiện lợi và nhanh chóng với giao diện thân thiện và tính năng đa dạng.",
            platforms: "Di động",
            keyFeatures: [
                "Giao diện người dùng thân thiện",
                "Quản lý sản phẩm hiệu quả",
                "Giỏ hàng thông minh",
                "Thông báo giảm giá và khuyến mãi"
            ],
            image: { img: '/thumbnails/SHOP_VGO.png', alt: "Thumbnail của Shop_VGO" },
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS",
                "MUI"
            ],
            bigImages: [
                { img: "/thumbnails/SHOP_VGO.png", alt: "Màn hình chính của ứng dụng Shop_VGO" },
            ],
            smallImages: [
                { img: "/thumbnails/vgoShop/1.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/2.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/3.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/4.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/5.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/6.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/7.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/8.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/9.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/vgoShop/10.png", alt: "Màn hình sản phẩm" },
            ],
            responsibilities: "Thiết kế UI/UX, Phát triển Backend và Frontend"
        },
        en: {
            name: "Shop_VGO",
            description: "Shop_VGO - A mobile shopping application that offers a convenient and fast shopping experience with a user-friendly interface and a variety of features.",
            platforms: "Mobile",
            keyFeatures: [
                "User-friendly interface",
                "Efficient product management",
                "Smart shopping cart",
                "Discount and promotion notifications"
            ],
            image: { img: '/thumbnails/SHOP_VGO.png', alt: "Thumbnail of Shop_VGO" },
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS",
                "MUI"
            ],
            bigImages: [
                { img: "/thumbnails/SHOP_VGO.png", alt: "Main screen of the Shop_VGO application" },
            ],
            smallImages: [
                { img: "/thumbnails/vgoShop/1.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/2.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/3.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/4.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/5.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/6.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/7.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/8.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/9.png", alt: "Product screen" },
                { img: "/thumbnails/vgoShop/10.png", alt: "Product screen" },
            ],
            responsibilities: "UI/UX design, Backend and Frontend development"
        },
        kr: {
            name: "Shop_VGO",
            description: "Shop_VGO - 사용자 친화적인 인터페이스와 다양한 기능을 제공하는 모바일 쇼핑 애플리케이션으로 편리하고 빠른 쇼핑 경험을 제공합니다.",
            platforms: "모바일",
            keyFeatures: [
                "사용자 친화적인 인터페이스",
                "효율적인 제품 관리",
                "스마트 장바구니",
                "할인 및 프로모션 알림"
            ],
            image: { img: '/thumbnails/SHOP_VGO.png', alt: "Shop_VGO 썸네일" },
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS",
                "MUI"
            ],
            bigImages: [
                { img: "/thumbnails/SHOP_VGO.png", alt: "Shop_VGO 애플리케이션의 메인 화면" },
            ],
            smallImages: [
                { img: "/thumbnails/vgoShop/1.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/2.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/3.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/4.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/5.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/6.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/7.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/8.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/9.png", alt: "제품 화면" },
                { img: "/thumbnails/vgoShop/10.png", alt: "제품 화면" },
            ],
            responsibilities: "UI/UX 디자인, 백엔드 및 프론트엔드 개발"
        }
    },
    {
        id: "6",
        vi: {
            name: "Deliverry",
            description: "Deliverry - Ứng dụng giao hàng tiện lợi, giúp người dùng đặt hàng và theo dõi tình trạng giao hàng dễ dàng chỉ với vài cú chạm.",
            platforms: "Di động",
            keyFeatures: [
                "Đặt hàng nhanh chóng và dễ dàng",
                "Theo dõi tình trạng đơn hàng theo thời gian thực",
                "Thông báo giao hàng tức thì",
                "Giao diện người dùng trực quan và thân thiện"
            ],
            image: { img: '/thumbnails/DELIVERY_VGO.png', alt: "Thumbnail của Deliverry" },
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS",
                "MUI"
            ],
            bigImages: [
                { img: "/thumbnails/DELIVERY_VGO.png", alt: "Màn hình chính của ứng dụng Deliverry" },
            ],
            smallImages: [
                { img: "/thumbnails/delivery/1.png", alt: "Màn hình đặt hàng" },
                { img: "/thumbnails/delivery/2.png", alt: "Màn hình theo dõi đơn hàng" },
                { img: "/thumbnails/delivery/3.png", alt: "Màn hình thông báo giao hàng" },
                { img: "/thumbnails/delivery/4.png", alt: "Giao diện người dùng" },
            ],
            responsibilities: "Thiết kế UI/UX, Phát triển Backend và Frontend"
        },
        en: {
            name: "Deliverry",
            description: "Deliverry - A convenient delivery application that allows users to order and track their shipments easily with just a few taps.",
            platforms: "Mobile",
            keyFeatures: [
                "Quick and easy order placement",
                "Real-time order tracking",
                "Instant delivery notifications",
                "User-friendly and intuitive interface"
            ],
            image: { img: '/thumbnails/DELIVERY_VGO.png', alt: "Thumbnail of Deliverry" },
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS",
                "MUI"
            ],
            bigImages: [
                { img: "/thumbnails/DELIVERY_VGO.png", alt: "Main screen of the Deliverry application" },
            ],
            smallImages: [
                { img: "/thumbnails/delivery/1.png", alt: "Order screen" },
                { img: "/thumbnails/delivery/2.png", alt: "Order tracking screen" },
                { img: "/thumbnails/delivery/3.png", alt: "Delivery notification screen" },
                { img: "/thumbnails/delivery/4.png", alt: "User interface" },
            ],
            responsibilities: "UI/UX design, Backend and Frontend development"
        },
        kr: {
            name: "Deliverry",
            description: "Deliverry - 사용자들이 손쉽게 주문하고 배송 상태를 실시간으로 추적할 수 있는 편리한 배송 애플리케이션입니다.",
            platforms: "모바일",
            keyFeatures: [
                "빠르고 쉬운 주문",
                "실시간 주문 추적",
                "즉각적인 배송 알림",
                "사용자 친화적이고 직관적인 인터페이스"
            ],
            image: { img: '/thumbnails/DELIVERY_VGO.png', alt: "Deliverry 썸네일" },
            technologies: [
                "React Native",
                "Firebase",
                "Tailwind CSS",
                "MUI"
            ],
            bigImages: [
                { img: "/thumbnails/DELIVERY_VGO.png", alt: "Deliverry 애플리케이션의 메인 화면" },
            ],
            smallImages: [
                { img: "/thumbnails/delivery/1.png", alt: "주문 화면" },
                { img: "/thumbnails/delivery/2.png", alt: "주문 추적 화면" },
                { img: "/thumbnails/delivery/3.png", alt: "배송 알림 화면" },
                { img: "/thumbnails/delivery/4.png", alt: "사용자 인터페이스" },
            ],
            responsibilities: "UI/UX 디자인, 백엔드 및 프론트엔드 개발"
        }
    },
    {
        id: "2",
        vi: {
            name: "Luyện thi Topik 6",
            description: "Ứng dụng hỗ trợ ôn thi Topik cấp độ 6 với các chức năng như làm bài thi nghe và đọc, kiểm tra kết quả ngay lập tức và hướng dẫn sửa bài chi tiết. Phù hợp cho người học tiếng Hàn muốn nâng cao kỹ năng ngôn ngữ và chuẩn bị cho kỳ thi Topik.",
            platforms: "Website and Mobile",
            keyFeatures: [
                "Làm bài thi nghe",
                "Làm bài đọc",
                "Biết điểm ngay",
                "Hướng dẫn sửa bài"
            ],
            image: { img: '/thumbnails/korea/page1.png', alt: "Thumbnails" },
            technologies: [
                "NextJs",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/korea/page1.png", alt: "Home screen of the app" },
                { img: "/thumbnails/korea/page1.png", alt: "Home screen of the app" },
                { img: "/thumbnails/korea/page2.png", alt: "Home screen of the app" },
                { img: "/thumbnails/korea/page3.png", alt: "Home screen of the app" }
            ],
            smallImages: [
                { img: "/thumbnails/korea/page4.png", alt: "Home screen of the app" }
            ],
            responsibilities: "UI/UX_BE_FE"
        },
        en: {
            name: "Topik 6 Exam Preparation",
            description: "An application designed to help users prepare for the Topik level 6 exam with features such as listening and reading tests, instant scoring, and detailed answer guidance. Ideal for Korean language learners aiming to improve their skills and succeed in the Topik exam.",
            platforms: "Website and Mobile",
            keyFeatures: [
                "Listening tests",
                "Reading tests",
                "Instant scoring",
                "Answer guidance"
            ],
            image: { img: '/thumbnails/korea/page1.png', alt: "Thumbnails" },
            technologies: [
                "NextJs",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/korea/page1.png", alt: "Home screen of the app" },
                { img: "/thumbnails/korea/page1.png", alt: "Home screen of the app" },
                { img: "/thumbnails/korea/page2.png", alt: "Home screen of the app" },
                { img: "/thumbnails/korea/page3.png", alt: "Home screen of the app" }
            ],
            smallImages: [
                { img: "/thumbnails/korea/page4.png", alt: "Home screen of the app" }
            ],
            responsibilities: "UI/UX_BE_FE"
        },
        kr: {
            name: "토픽 6급 시험 준비",
            description: "듣기 및 읽기 시험, 즉각적인 점수 확인, 상세한 답안 안내와 같은 기능을 갖춘 토픽 6급 시험 준비용 애플리케이션입니다. 한국어 실력을 향상하고 토픽 시험에 성공하고자 하는 학습자에게 이상적입니다.",
            platforms: "웹사이트 및 모바일",
            keyFeatures: [
                "듣기 시험",
                "읽기 시험",
                "즉각적인 점수 확인",
                "답안 안내"
            ],
            image: { img: '/thumbnails/korea/page1.png', alt: "썸네일" },
            technologies: [
                "NextJs",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/korea/page1.png", alt: "앱 홈 화면" },
                { img: "/thumbnails/korea/page1.png", alt: "앱 홈 화면" },
                { img: "/thumbnails/korea/page2.png", alt: "앱 홈 화면" },
                { img: "/thumbnails/korea/page3.png", alt: "앱 홈 화면" }
            ],
            smallImages: [
                { img: "/thumbnails/korea/page4.png", alt: "앱 홈 화면" }
            ],
            responsibilities: "UI/UX_BE_FE"
        }
    },
    {
        id: "3",
        vi: {
            name: "Website Mua Sắm",
            description: "GLOBIMART - Nền tảng mua sắm trực tuyến hiện đại, mang đến trải nghiệm mua sắm dễ dàng và tiện lợi.",
            platforms: "Website",
            keyFeatures: [
                "Giao diện thân thiện và dễ sử dụng",
                "Tích hợp thanh toán trực tuyến",
                "Quản lý giỏ hàng tiện lợi"
            ],
            image: { img: '/thumbnails/GLOBIMART.png', alt: "Thumbnail của GLOBIMART" },
            technologies: [
                "Next.js",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/GLOBIMART.png", alt: "Màn hình chính của ứng dụng" },
                { img: "/thumbnails/Globimart/4.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/Globimart/5.png", alt: "Màn hình giỏ hàng" },
                { img: "/thumbnails/Globimart/6.png", alt: "Màn hình thanh toán" },
                { img: "/thumbnails/Globimart/7.png", alt: "Màn hình tài khoản người dùng" }
            ],
            smallImages: [
                // { img: "/thumbnails/Korea/4.png", alt: "Màn hình ứng dụng trên thiết bị di động" }
            ],
            responsibilities: "Thiết kế UI/UX, Phát triển Backend và Frontend"
        },
        en: {
            name: "Shopping Website",
            description: "GLOBIMART - A modern online shopping platform that provides a seamless and convenient shopping experience.",
            platforms: "Website",
            keyFeatures: [
                "User-friendly and easy-to-navigate interface",
                "Integrated online payment",
                "Convenient shopping cart management"
            ],
            image: { img: '/thumbnails/GLOBIMART.png', alt: "GLOBIMART Thumbnail" },
            technologies: [
                "Next.js",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/GLOBIMART.png", alt: "Home screen of the app" },
                { img: "/thumbnails/Globimart/4.png", alt: "Product screen" },
                { img: "/thumbnails/Globimart/5.png", alt: "Cart screen" },
                { img: "/thumbnails/Globimart/6.png", alt: "Checkout screen" },
                { img: "/thumbnails/Globimart/7.png", alt: "User account screen" }
            ],
            smallImages: [
                // { img: "/thumbnails/Korea/4.png", alt: "Mobile app screen" }
            ],
            responsibilities: "UI/UX design, Backend and Frontend development"
        },
        kr: {
            name: "쇼핑 웹사이트",
            description: "GLOBIMART - 매끄럽고 편리한 쇼핑 경험을 제공하는 현대적인 온라인 쇼핑 플랫폼입니다.",
            platforms: "웹사이트",
            keyFeatures: [
                "사용자 친화적이고 탐색하기 쉬운 인터페이스",
                "온라인 결제 통합",
                "편리한 장바구니 관리"
            ],
            image: { img: '/thumbnails/GLOBIMART.png', alt: "GLOBIMART 썸네일" },
            technologies: [
                "Next.js",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/GLOBIMART.png", alt: "앱의 홈 화면" },
                { img: "/thumbnails/Globimart/4.png", alt: "제품 화면" },
                { img: "/thumbnails/Globimart/5.png", alt: "장바구니 화면" },
                { img: "/thumbnails/Globimart/6.png", alt: "결제 화면" },
                { img: "/thumbnails/Globimart/7.png", alt: "사용자 계정 화면" }
            ],
            smallImages: [
                // { img: "/thumbnails/Korea/4.png", alt: "모바일 앱 화면" }
            ],
            responsibilities: "UI/UX 디자인, 백엔드 및 프론트엔드 개발"
        }
    },
    {
        id: "4",
        vi: {
            name: "Doash",
            description: "Doash - Nền tảng quản lý đơn hàng và phân tích dữ liệu, giúp người dùng dễ dàng theo dõi và tối ưu hóa quy trình mua sắm.",
            platforms: "Website",
            keyFeatures: [
                "Quản lý đơn hàng hiệu quả",
                "Phân tích dữ liệu chi tiết",
                "Giao diện thân thiện với người dùng"
            ],
            image: { img: '/thumbnails/GLOBIMART_DASH.png', alt: "Thumbnail của Doash" },
            technologies: [
                "Next.js",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/GLOBIMART_DASH.png", alt: "Màn hình chính của ứng dụng Doash" },
                { img: "/thumbnails/Globimart/1.png", alt: "Màn hình sản phẩm" },
                { img: "/thumbnails/Globimart/2.png", alt: "Màn hình giỏ hàng" },
                { img: "/thumbnails/Globimart/3.png", alt: "Màn hình thanh toán" },
            ],
            smallImages: [
                // Có thể thêm hình ảnh nhỏ nếu cần
            ],
            responsibilities: "Thiết kế UI/UX, Phát triển Backend và Frontend"
        },
        en: {
            name: "Doash",
            description: "Doash - An order management and data analytics platform that enables users to efficiently track and optimize their shopping processes.",
            platforms: "Website",
            keyFeatures: [
                "Efficient order management",
                "Detailed data analytics",
                "User-friendly interface"
            ],
            image: { img: '/thumbnails/GLOBIMART_DASH.png', alt: "Thumbnail of Doash" },
            technologies: [
                "Next.js",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/GLOBIMART_DASH.png", alt: "Main screen of the Doash application" },
                { img: "/thumbnails/Globimart/1.png", alt: "Product screen" },
                { img: "/thumbnails/Globimart/2.png", alt: "Cart screen" },
                { img: "/thumbnails/Globimart/3.png", alt: "Checkout screen" },
            ],
            smallImages: [
                // Can add small images if needed
            ],
            responsibilities: "UI/UX design, Backend and Frontend development"
        },
        kr: {
            name: "도시",
            description: "Doash - 주문 관리 및 데이터 분석 플랫폼으로, 사용자가 쇼핑 프로세스를 효율적으로 추적하고 최적화할 수 있도록 도와줍니다.",
            platforms: "웹사이트",
            keyFeatures: [
                "효율적인 주문 관리",
                "상세한 데이터 분석",
                "사용자 친화적인 인터페이스"
            ],
            image: { img: '/thumbnails/GLOBIMART_DASH.png', alt: "Doash 썸네일" },
            technologies: [
                "Next.js",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/GLOBIMART_DASH.png", alt: "Doash 애플리케이션의 메인 화면" },
                { img: "/thumbnails/Globimart/1.png", alt: "제품 화면" },
                { img: "/thumbnails/Globimart/2.png", alt: "장바구니 화면" },
                { img: "/thumbnails/Globimart/3.png", alt: "결제 화면" },
            ],
            smallImages: [
                // 필요한 경우 작은 이미지를 추가할 수 있습니다.
            ],
            responsibilities: "UI/UX 디자인, 백엔드 및 프론트엔드 개발"
        }
    },
    {
        id: "7",
        en: {
            name: "Treatments - Child Therapy Management System",
            description: "A web and mobile application that helps parents systematically track and manage their child's therapy journey. Parents can manage child profiles, monitor medical and therapy schedules, record prescribed medications and side effects, track developmental and behavioral evaluations, securely store medical records, and the mobile app is published on Google Play.",
            platforms: "Website and Mobile",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.seoul.treatments",
            keyFeatures: [
                "Child profile management",
                "Medical and therapy schedule tracking",
                "Prescription management and side-effect logging",
                "Development and behavior assessments",
                "Secure medical record storage"
            ],
            image: { img: "/thumbnails/treatments/treatments.png", alt: "Treatments project thumbnail" },
            technologies: [
                "Laravel 12",
                "PHP 8.2",
                "React 18",
                "Inertia.js",
                "Tailwind CSS",
                "Flutter",
                "MySQL 8.0",
                "Docker",
                "Docker Compose"
            ],
            bigImages: [
                { img: "/thumbnails/treatments/treatments.png", alt: "Main dashboard of the Treatments system" }
            ],
            smallImages: [
                { img: "/thumbnails/treatments/1.png", alt: "Child profile screen" },
                { img: "/thumbnails/treatments/2.png", alt: "Therapy schedule screen" },
                { img: "/thumbnails/treatments/3.png", alt: "Medication management screen" },
                { img: "/thumbnails/treatments/4.png", alt: "Development assessment view" },
                { img: "/thumbnails/treatments/5.png", alt: "Behavior tracking view" },
                { img: "/thumbnails/treatments/6.png", alt: "Medical records storage screen" },
                { img: "/thumbnails/treatments/7.png", alt: "Mobile interface of Treatments app" }
            ],
            responsibilities: "UI/UX design, Backend and Frontend development, Flutter mobile application (Google Play)"
        },
        kr: {
            name: "Treatments - 아동 치료 관리 시스템",
            description: "부모님이 자녀의 치료 과정을 한 곳에서 체계적으로 추적하고 관리할 수 있는 웹 · 모바일 애플리케이션입니다. 자녀 프로필을 관리하고 진료 및 치료 일정을 추적하며, 처방약과 부작용을 기록하고, 발달 및 행동 평가 결과와 의료 기록을 안전하게 보관할 수 있으며, 모바일 앱은 Google Play에 배포되었습니다.",
            platforms: "웹사이트 및 모바일",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.seoul.treatments",
            keyFeatures: [
                "자녀 프로필 관리",
                "진료 및 치료 일정 추적",
                "처방약 관리 및 부작용 기록",
                "발달 및 행동 평가",
                "의료 기록 저장"
            ],
            image: { img: "/thumbnails/treatments/treatments.png", alt: "Treatments 프로젝트 썸네일" },
            technologies: [
                "Laravel 12",
                "PHP 8.2",
                "React 18",
                "Inertia.js",
                "Tailwind CSS",
                "Flutter",
                "MySQL 8.0",
                "Docker",
                "Docker Compose"
            ],
            bigImages: [
                { img: "/thumbnails/treatments/treatments.png", alt: "Treatments 시스템 메인 대시보드" }
            ],
            smallImages: [
                { img: "/thumbnails/treatments/1.png", alt: "자녀 프로필 화면" },
                { img: "/thumbnails/treatments/2.png", alt: "진료 및 치료 일정 화면" },
                { img: "/thumbnails/treatments/3.png", alt: "처방약 관리 화면" },
                { img: "/thumbnails/treatments/4.png", alt: "발달 평가 화면" },
                { img: "/thumbnails/treatments/5.png", alt: "행동 평가 화면" },
                { img: "/thumbnails/treatments/6.png", alt: "의료 기록 저장 화면" },
                { img: "/thumbnails/treatments/7.png", alt: "Treatments 모바일 화면" }
            ],
            responsibilities: "UI/UX 디자인, 백엔드 및 프론트엔드 개발, Flutter 모바일 애플리케이션 (Google Play)"
        },
        vi: {
            name: "Treatments - Hệ thống quản lý trị liệu cho trẻ em",
            description: "Ứng dụng web và mobile giúp phụ huynh theo dõi và quản lý toàn bộ quá trình trị liệu của con một cách hệ thống. Phụ huynh có thể quản lý hồ sơ của trẻ, theo dõi lịch khám và trị liệu, quản lý thuốc và ghi nhận tác dụng phụ, lưu lại các đánh giá về phát triển và hành vi, lưu trữ an toàn hồ sơ y tế quan trọng và ứng dụng mobile đã được phát hành trên Google Play.",
            platforms: "Website và Mobile",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.seoul.treatments",
            keyFeatures: [
                "Quản lý hồ sơ trẻ",
                "Theo dõi lịch khám và trị liệu",
                "Quản lý thuốc và ghi nhận tác dụng phụ",
                "Đánh giá phát triển và hành vi",
                "Lưu trữ hồ sơ y tế"
            ],
            image: { img: "/thumbnails/treatments/treatments.png", alt: "Thumbnail dự án Treatments" },
            technologies: [
                "Laravel 12",
                "PHP 8.2",
                "React 18",
                "Inertia.js",
                "Tailwind CSS",
                "Flutter",
                "MySQL 8.0",
                "Docker",
                "Docker Compose"
            ],
            bigImages: [
                { img: "/thumbnails/treatments/treatments.png", alt: "Màn hình dashboard chính của hệ thống Treatments" }
            ],
            smallImages: [
                { img: "/thumbnails/treatments/1.png", alt: "Màn hình hồ sơ trẻ" },
                { img: "/thumbnails/treatments/2.png", alt: "Màn hình lịch khám và trị liệu" },
                { img: "/thumbnails/treatments/3.png", alt: "Màn hình quản lý thuốc" },
                { img: "/thumbnails/treatments/4.png", alt: "Màn hình đánh giá phát triển" },
                { img: "/thumbnails/treatments/5.png", alt: "Màn hình đánh giá hành vi" },
                { img: "/thumbnails/treatments/6.png", alt: "Màn hình lưu trữ hồ sơ y tế" },
                { img: "/thumbnails/treatments/7.png", alt: "Giao diện ứng dụng Treatments trên mobile" }
            ],
            responsibilities: "Thiết kế UI/UX, Phát triển Backend và Frontend, Phát triển ứng dụng mobile bằng Flutter (Google Play)"
        }
    },
    {
        id: "8",
        en: {
            name: "Panic Disorder Management App",
            description: "A CBT (Cognitive Behavioral Therapy) based panic disorder support application that helps users understand and relieve panic symptoms. Users can keep an emotion diary and panic diary, practice relaxation and exposure training, learn from educational content, and track their recovery progress over time.",
            platforms: "Mobile",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.seoul.panic_app",
            keyFeatures: [
                "Emotion diary & panic diary",
                "Relaxation training & exposure training",
                "Educational content for understanding panic",
                "User progress tracking and management"
            ],
            image: { img: "/thumbnails/panic/panic.png", alt: "Panic disorder management app thumbnail" },
            technologies: [
                "Mobile app",
                "CBT-based therapeutic content"
            ],
            bigImages: [
                { img: "/thumbnails/panic/panic.png", alt: "Main screens of the panic management app" }
            ],
            smallImages: [
                { img: "/thumbnails/panic/1.png", alt: "Emotion diary screen" },
                { img: "/thumbnails/panic/2.png", alt: "Panic diary screen" },
                { img: "/thumbnails/panic/3.png", alt: "Relaxation training screen" },
                { img: "/thumbnails/panic/4.png", alt: "Exposure training screen" },
                { img: "/thumbnails/panic/5.png", alt: "Progress tracking screen" }
            ],
            responsibilities: "UI/UX design, mobile app design and implementation"
        },
        kr: {
            name: "공황장애 관리 애플리케이션",
            description: "CBT(인지행동치료)를 기반으로 공황 증상을 이해하고 완화할 수 있도록 돕는 공황장애 치료 지원 앱입니다. 감정일기와 공황일기를 기록하고, 이완훈련과 노출훈련을 진행하며, 교육 콘텐츠를 통해 공황에 대한 이해를 높이고 회복 과정을 체계적으로 관리할 수 있습니다.",
            platforms: "모바일",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.seoul.panic_app",
            keyFeatures: [
                "감정일기 & 공황일기",
                "이완훈련 & 노출훈련",
                "공황 관련 교육 콘텐츠",
                "사용자 진행상황 관리"
            ],
            image: { img: "/thumbnails/panic/panic.png", alt: "공황장애 관리 앱 썸네일" },
            technologies: [
                "모바일 앱",
                "CBT 기반 치료 콘텐츠"
            ],
            bigImages: [
                { img: "/thumbnails/panic/panic.png", alt: "공황장애 관리 앱 주요 화면" }
            ],
            smallImages: [
                { img: "/thumbnails/panic/1.png", alt: "감정일기 화면" },
                { img: "/thumbnails/panic/2.png", alt: "공황일기 화면" },
                { img: "/thumbnails/panic/3.png", alt: "이완훈련 화면" },
                { img: "/thumbnails/panic/4.png", alt: "노출훈련 화면" },
                { img: "/thumbnails/panic/5.png", alt: "진행상황 관리 화면" }
            ],
            responsibilities: "UI/UX 디자인, 모바일 앱 기획 및 구현"
        },
        vi: {
            name: "Ứng dụng quản lý rối loạn hoảng sợ",
            description: "Ứng dụng hỗ trợ điều trị rối loạn hoảng sợ dựa trên CBT (Liệu pháp nhận thức hành vi), giúp người dùng hiểu và giảm nhẹ các triệu chứng hoảng sợ. Người dùng có thể ghi nhật ký cảm xúc và nhật ký hoảng sợ, thực hành các bài tập thư giãn và phơi nhiễm, học qua nội dung giáo dục và theo dõi tiến trình hồi phục của mình.",
            platforms: "Mobile",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.seoul.panic_app",
            keyFeatures: [
                "Nhật ký cảm xúc & nhật ký hoảng sợ",
                "Bài tập thư giãn & phơi nhiễm",
                "Nội dung giáo dục về rối loạn hoảng sợ",
                "Quản lý và theo dõi tiến trình người dùng"
            ],
            image: { img: "/thumbnails/panic/panic.png", alt: "Thumbnail ứng dụng quản lý rối loạn hoảng sợ" },
            technologies: [
                "Ứng dụng mobile",
                "Nội dung trị liệu dựa trên CBT"
            ],
            bigImages: [
                { img: "/thumbnails/panic/panic.png", alt: "Các màn hình chính của ứng dụng quản lý rối loạn hoảng sợ" }
            ],
            smallImages: [
                { img: "/thumbnails/panic/1.png", alt: "Màn hình nhật ký cảm xúc" },
                { img: "/thumbnails/panic/2.png", alt: "Màn hình nhật ký hoảng sợ" },
                { img: "/thumbnails/panic/3.png", alt: "Màn hình bài tập thư giãn" },
                { img: "/thumbnails/panic/4.png", alt: "Màn hình bài tập phơi nhiễm" },
                { img: "/thumbnails/panic/5.png", alt: "Màn hình quản lý tiến trình" }
            ],
            responsibilities: "Thiết kế UI/UX, thiết kế và triển khai ứng dụng mobile"
        }
    },
    {
        id: "9",
        en: {
            name: "Cup Point",
            description: "A mobile application that lets users discover, share, and explore eco-friendly cafés and shops. It provides community features for events, partners, and market posts, rich review tools with visual highlight points on photos, receipt management, and a personalized My Page for managing and sharing reviews.",
            platforms: "Mobile",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.soucean.cuppoint",
            appStoreLink: "https://apps.apple.com/us/app/%EC%BB%B5-%ED%8F%AC%EC%9D%B8%ED%8A%B8/id6754556136",
            keyFeatures: [
                "Authentication & account management (email/password login, signup, logout, password & email recovery, Kakao login integration)",
                "Community feeds for events, partners, and market with list/detail, create, edit, delete, pagination and pull-to-refresh",
                "Shop-specific community feeds filtered by shop_id",
                "Cup Note & review management with tags, form-based input and visual highlight markers on photos",
                "Invoice management with upload from camera/gallery and upload status tracking",
                "My Page with card-style swipe review browsing, full-screen review view and shareable images",
                "Deep link navigation directly to specific reviews and auto-refresh on tab change",
                "Profile & store info management including avatar upload, password change, business/store data and status",
                "System features: GoRouter navigation with app/deep links, Naver Maps init and error handling, app version check & upgrade prompts, .env-based logging and configuration, light/dark theme and multi-language (ko/en) support"
            ],
            image: { img: "/thumbnails/cup_point/cup_point.png", alt: "Cup Point app hero image" },
            technologies: [
                "Flutter",
                "Dart",
                "GoRouter",
                "Naver Maps",
                "share_plus",
                "upgrader",
                "App links & deep links",
                "Light/Dark theme",
                "i18n (ko/en)"
            ],
            bigImages: [
                { img: "/thumbnails/cup_point/cup_point.png", alt: "Cup Point app main screen and store badges" }
            ],
            smallImages: [
                { img: "/thumbnails/cup_point/1.png", alt: "Cup Point login screen" },
                { img: "/thumbnails/cup_point/3.png", alt: "Cup Point review and cup note interface" },
                { img: "/thumbnails/cup_point/4.png", alt: "Cup Point community and receipt management" }
            ],
            responsibilities: "UI/UX design, Flutter mobile app development, integration of community, review, receipt and infrastructure features"
        },
        kr: {
            name: "컵 포인트",
            description: "친환경 매장과 카페를 함께 만들고, 공유하고, 탐험할 수 있는 모바일 애플리케이션입니다. 회원 인증, 커뮤니티, 리뷰·컵 노트, 영수증 관리, 마이 페이지 등 다양한 기능을 제공하며, 사진 위에 공감 포인트를 표시하는 하이라이트 기능으로 리뷰 경험을 풍부하게 제공합니다.",
            platforms: "모바일",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.soucean.cuppoint",
            appStoreLink: "https://apps.apple.com/us/app/%EC%BB%B5-%ED%8F%AC%EC%9D%B8%ED%8A%B8/id6754556136",
            keyFeatures: [
                "회원 인증 & 계정 관리 (이메일/비밀번호 로그인, 회원가입, 로그아웃, 비밀번호 찾기, 이메일 찾기, 카카오 로그인 연동, 토큰 리프레시, 세션 복원)",
                "커뮤니티(이벤트·파트너·마켓) 목록/상세 조회, 새 글 작성·수정·삭제, 페이징 및 당겨서 새로고침",
                "shop_id 기반 특정 매장 전용 커뮤니티 피드 조회",
                "컵 노트 & 리뷰 관리: 태그 선택, 폼 기반 입력, 사진 위 공감 포인트 하이라이트/마커 표시, 기존 하이라이트 복원 및 수정",
                "영수증(Invoice) 관리: 목록/상세 조회, 카드형 요약, 카메라/갤러리 업로드, 업로드 상태·결과 확인 및 재시도",
                "마이 페이지: 카드 스와이프 형태로 내 리뷰 보기·공유, 전체 화면 보기, 공유용 이미지 생성 및 share_plus로 공유",
                "reviewId 딥링크로 특정 리뷰 바로 진입, 탭 이동 시 자동 새로고침",
                "설정 및 프로필/매장 정보 관리, 비밀번호 변경, 회원 탈퇴, 비즈니스 상태 관리",
                "GoRouter 기반 내비게이션 및 앱 링크/딥링크 처리, 네이버 지도 초기화 및 인증 오류 처리, 앱 버전 체크 및 업데이트 안내(upgrader + appcast), .env 기반 로깅/환경 설정, 라이트/다크 테마 및 다국어(ko/en) 지원"
            ],
            image: { img: "/thumbnails/cup_point/cup_point.png", alt: "컵 포인트 앱 메인 이미지" },
            technologies: [
                "Flutter",
                "Dart",
                "GoRouter",
                "Naver 지도",
                "share_plus",
                "upgrader",
                "앱 링크 & 딥링크",
                "라이트/다크 테마",
                "다국어 지원 (ko/en)"
            ],
            bigImages: [
                { img: "/thumbnails/cup_point/cup_point.png", alt: "컵 포인트 앱 메인 화면과 스토어 배지" }
            ],
            smallImages: [
                { img: "/thumbnails/cup_point/1.png", alt: "컵 포인트 로그인 화면" },
                { img: "/thumbnails/cup_point/3.png", alt: "컵 포인트 리뷰·컵 노트 인터페이스" },
                { img: "/thumbnails/cup_point/4.png", alt: "컵 포인트 커뮤니티 및 영수증 관리 화면" }
            ],
            responsibilities: "UI/UX 디자인, Flutter 모바일 앱 개발, 커뮤니티·리뷰·영수증·인프라 기능 구현"
        },
        vi: {
            name: "Cup Point",
            description: "Ứng dụng mobile giúp người dùng khám phá, chia sẻ và trải nghiệm các quán cà phê/mãi eco thân thiện môi trường. Ứng dụng cung cấp cộng đồng sự kiện/đối tác/market, hệ thống review với điểm nhấn trực quan trên ảnh, quản lý hóa đơn và một trang My Page cá nhân để quản lý và chia sẻ đánh giá.",
            platforms: "Mobile",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.soucean.cuppoint",
            appStoreLink: "https://apps.apple.com/us/app/%EC%BB%B5-%ED%8F%AC%EC%9D%B8%ED%8A%B8/id6754556136",
            keyFeatures: [
                "Xác thực & quản lý tài khoản (đăng nhập email/mật khẩu, đăng ký, đăng xuất, tìm mật khẩu, tìm email, đăng nhập Kakao, refresh token, khôi phục session)",
                "Cộng đồng (sự kiện, đối tác, market) với danh sách/chi tiết, tạo/sửa/xóa bài viết, phân trang và kéo để làm mới",
                "Feed cộng đồng theo từng cửa hàng dựa trên shop_id",
                "Cup Note & quản lý review: chọn tag, nhập form, đặt marker/hightlight điểm “cảm xúc” trên ảnh và khôi phục/chỉnh sửa highlight cũ",
                "Quản lý hóa đơn (Invoice): xem danh sách/chi tiết, thẻ tóm tắt, upload từ camera/thư viện, theo dõi trạng thái và kết quả upload, hỗ trợ thử lại",
                "My Page: xem và chia sẻ review theo dạng thẻ swipe, xem toàn màn hình, tạo ảnh chia sẻ và chia sẻ qua share_plus",
                "Deep link (reviewId) để vào thẳng một review, tự cập nhật khi chuyển tab",
                "Cài đặt & thông tin hồ sơ/cửa hàng, đổi mật khẩu, xóa tài khoản, quản lý trạng thái business",
                "Hệ thống: điều hướng với GoRouter và app/deep link, khởi tạo & xử lý lỗi Naver Map, kiểm tra phiên bản và nhắc cập nhật (upgrader + appcast), cấu hình/log qua .env, hỗ trợ light/dark theme và đa ngôn ngữ (ko/en)"
            ],
            image: { img: "/thumbnails/cup_point/cup_point.png", alt: "Hình hero ứng dụng Cup Point" },
            technologies: [
                "Flutter",
                "Dart",
                "GoRouter",
                "Naver Map",
                "share_plus",
                "upgrader",
                "App links & deep links",
                "Light/Dark theme",
                "i18n (ko/en)"
            ],
            bigImages: [
                { img: "/thumbnails/cup_point/cup_point.png", alt: "Màn hình chính và banner Cup Point" }
            ],
            smallImages: [
                { img: "/thumbnails/cup_point/1.png", alt: "Màn hình đăng nhập Cup Point" },
                { img: "/thumbnails/cup_point/3.png", alt: "Giao diện review & Cup Note" },
                { img: "/thumbnails/cup_point/4.png", alt: "Giao diện cộng đồng và quản lý hóa đơn" }
            ],
            responsibilities: "Thiết kế UI/UX, phát triển ứng dụng mobile Flutter, tích hợp cộng đồng, review, hóa đơn và hệ thống hạ tầng"
        }
    },
    {
        id: "10",
        en: {
            name: "CONNECT24 - Digital Business Card & NFC Card Management",
            description: "CONNECT24 is a comprehensive business networking application that revolutionizes how professionals exchange and manage digital business cards. With over 8,000 active users, the app enables seamless business card exchange, real-time chat, group networking, partner discovery, and innovative cowork features for startups. Users can create digital business cards, exchange them via NFC or digital sharing, organize contacts in digital notebooks, participate in business meetings and small groups, find ideal business partners based on skills and industry, and leverage cowork features to build startup teams and advance projects.",
            platforms: "Mobile",
            appStoreLink: "https://apps.apple.com/us/app/connect24-%EB%94%94%EC%A7%80%ED%84%B8%EB%AA%85%ED%95%A8-%EA%B4%80%EB%A6%AC-nfc%EC%B9%B4%EB%93%9C/id6479285378",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.witive.connect.rep",
            keyFeatures: [
                "Digital business card creation and exchange",
                "NFC card support for instant sharing",
                "Real-time chat after card exchange",
                "Business meetings and small group organization",
                "Business partner discovery by skills, industry, and location",
                "Digital business card notebook with categorization",
                "Cowork features for startup team building"
            ],
            image: { img: "/thumbnails/connect24/page1.png", alt: "CONNECT24 app thumbnail" },
            technologies: [
                "Mobile App Development",
                "NFC Technology",
                "Real-time Chat",
                "Business Networking Platform"
            ],
            bigImages: [
                { img: "/thumbnails/connect24/page1.png", alt: "CONNECT24 main screen" }
            ],
            smallImages: [
                { img: "/thumbnails/connect24/page2.png", alt: "Business card profile screen" },
                { img: "/thumbnails/connect24/page3.png", alt: "Partner discovery map" },
                { img: "/thumbnails/connect24/page4.png", alt: "Group networking interface" },
                { img: "/thumbnails/connect24/page5.png", alt: "Business content management" },
                { img: "/thumbnails/connect24/page6.png", alt: "Connect interview feature" },
                { img: "/thumbnails/connect24/page7.png", alt: "Chat interface" },
                { img: "/thumbnails/connect24/page8.png", alt: "Business card notebook" },
                { img: "/thumbnails/connect24/page9.png", alt: "Cowork features" },
                { img: "/thumbnails/connect24/page10.PNG", alt: "Additional features" }
            ],
            responsibilities: "UI/UX design, Backend and Frontend development, Mobile application development"
        },
        kr: {
            name: "CONNECT24 - 디지털명함, 관리, NFC카드",
            description: "CONNECT24는 전문가들이 디지털 명함을 교환하고 관리하는 방식을 혁신하는 포괄적인 비즈니스 네트워킹 애플리케이션입니다. 8,000명 이상의 활성 사용자를 보유한 이 앱은 원활한 명함 교환, 실시간 채팅, 그룹 네트워킹, 파트너 발견, 그리고 스타트업을 위한 혁신적인 코웍 기능을 제공합니다. 사용자는 디지털 명함을 생성하고, NFC 또는 디지털 공유를 통해 교환하며, 디지털 명함수첩에서 연락처를 구성하고, 비즈니스 모임 및 소모임에 참여하며, 스킬과 산업을 기반으로 이상적인 비즈니스 파트너를 찾고, 코웍 기능을 활용하여 스타트업 팀을 구축하고 프로젝트를 발전시킬 수 있습니다.",
            platforms: "모바일",
            appStoreLink: "https://apps.apple.com/us/app/connect24-%EB%94%94%EC%A7%80%ED%84%B8%EB%AA%85%ED%95%A8-%EA%B4%80%EB%A6%AC-nfc%EC%B9%B4%EB%93%9C/id6479285378",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.witive.connect.rep",
            keyFeatures: [
                "디지털 명함 생성 및 교환",
                "즉시 공유를 위한 NFC 카드 지원",
                "명함 교환 후 실시간 채팅",
                "비즈니스 모임 및 소모임 구성",
                "스킬, 산업 및 위치별 비즈니스 파트너 발견",
                "분류 기능이 있는 디지털 명함수첩",
                "스타트업 팀 구축을 위한 코웍 기능"
            ],
            image: { img: "/thumbnails/connect24/page1.png", alt: "CONNECT24 앱 썸네일" },
            technologies: [
                "모바일 앱 개발",
                "NFC 기술",
                "실시간 채팅",
                "비즈니스 네트워킹 플랫폼"
            ],
            bigImages: [
                { img: "/thumbnails/connect24/page1.png", alt: "CONNECT24 메인 화면" }
            ],
            smallImages: [
                { img: "/thumbnails/connect24/page2.png", alt: "명함 프로필 화면" },
                { img: "/thumbnails/connect24/page3.png", alt: "파트너 발견 지도" },
                { img: "/thumbnails/connect24/page4.png", alt: "그룹 네트워킹 인터페이스" },
                { img: "/thumbnails/connect24/page5.png", alt: "비즈니스 콘텐츠 관리" },
                { img: "/thumbnails/connect24/page6.png", alt: "커넥트 인터뷰 기능" },
                { img: "/thumbnails/connect24/page7.png", alt: "채팅 인터페이스" },
                { img: "/thumbnails/connect24/page8.png", alt: "명함수첩" },
                { img: "/thumbnails/connect24/page9.png", alt: "코웍 기능" },
                { img: "/thumbnails/connect24/page10.PNG", alt: "추가 기능" }
            ],
            responsibilities: "UI/UX 디자인, 백엔드 및 프론트엔드 개발, 모바일 애플리케이션 개발"
        },
        vi: {
            name: "CONNECT24 - Danh thiếp điện tử & Quản lý thẻ NFC",
            description: "CONNECT24 là ứng dụng kết nối kinh doanh toàn diện, cách mạng hóa cách các chuyên gia trao đổi và quản lý danh thiếp điện tử. Với hơn 8,000 người dùng tích cực, ứng dụng cho phép trao đổi danh thiếp liền mạch, chat thời gian thực, kết nối nhóm, tìm kiếm đối tác và các tính năng cowork sáng tạo cho startup. Người dùng có thể tạo danh thiếp điện tử, trao đổi qua NFC hoặc chia sẻ kỹ thuật số, tổ chức danh bạ trong sổ danh thiếp kỹ thuật số, tham gia các cuộc họp kinh doanh và nhóm nhỏ, tìm đối tác kinh doanh lý tưởng dựa trên kỹ năng và ngành nghề, và tận dụng các tính năng cowork để xây dựng đội ngũ startup và phát triển dự án.",
            platforms: "Mobile",
            appStoreLink: "https://apps.apple.com/us/app/connect24-%EB%94%94%EC%A7%80%ED%84%B8%EB%AA%85%ED%95%A8-%EA%B4%80%EB%A6%AC-nfc%EC%B9%B4%EB%93%9C/id6479285378",
            playStoreLink: "https://play.google.com/store/apps/details?id=com.witive.connect.rep",
            keyFeatures: [
                "Tạo và trao đổi danh thiếp điện tử",
                "Hỗ trợ thẻ NFC để chia sẻ tức thì",
                "Chat thời gian thực sau khi trao đổi danh thiếp",
                "Tổ chức cuộc họp kinh doanh và nhóm nhỏ",
                "Tìm kiếm đối tác kinh doanh theo kỹ năng, ngành nghề và vị trí",
                "Sổ danh thiếp điện tử với phân loại",
                "Tính năng cowork để xây dựng đội ngũ startup"
            ],
            image: { img: "/thumbnails/connect24/page1.png", alt: "Thumbnail ứng dụng CONNECT24" },
            technologies: [
                "Phát triển ứng dụng Mobile",
                "Công nghệ NFC",
                "Chat thời gian thực",
                "Nền tảng kết nối kinh doanh"
            ],
            bigImages: [
                { img: "/thumbnails/connect24/page1.png", alt: "Màn hình chính CONNECT24" }
            ],
            smallImages: [
                { img: "/thumbnails/connect24/page2.png", alt: "Màn hình hồ sơ danh thiếp" },
                { img: "/thumbnails/connect24/page3.png", alt: "Bản đồ tìm kiếm đối tác" },
                { img: "/thumbnails/connect24/page4.png", alt: "Giao diện kết nối nhóm" },
                { img: "/thumbnails/connect24/page5.png", alt: "Quản lý nội dung kinh doanh" },
                { img: "/thumbnails/connect24/page6.png", alt: "Tính năng phỏng vấn Connect" },
                { img: "/thumbnails/connect24/page7.png", alt: "Giao diện chat" },
                { img: "/thumbnails/connect24/page8.png", alt: "Sổ danh thiếp" },
                { img: "/thumbnails/connect24/page9.png", alt: "Tính năng cowork" },
                { img: "/thumbnails/connect24/page10.PNG", alt: "Tính năng bổ sung" }
            ],
            responsibilities: "Thiết kế UI/UX, Phát triển Backend và Frontend, Phát triển ứng dụng Mobile"
        }
    }
    
    
    
    // Thêm các dự án khác tại đây nếu cần
];
