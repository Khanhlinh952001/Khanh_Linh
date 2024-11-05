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
            image: { img: '/thumbnails/KOREA.png', alt: "Thumbnails" },
            technologies: [
                "NextJs",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/KOREA.png", alt: "Home screen of the app" },
                { img: "/thumbnails/Korea/1.png", alt: "Home screen of the app" },
                { img: "/thumbnails/Korea/2.png", alt: "Home screen of the app" },
                { img: "/thumbnails/Korea/3.png", alt: "Home screen of the app" }
            ],
            smallImages: [
                { img: "/thumbnails/Korea/4.png", alt: "Home screen of the app" }
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
            image: { img: '/thumbnails/KOREA.png', alt: "Thumbnails" },
            technologies: [
                "NextJs",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/KOREA.png", alt: "Home screen of the app" },
                { img: "/thumbnails/Korea/1.png", alt: "Home screen of the app" },
                { img: "/thumbnails/Korea/2.png", alt: "Home screen of the app" },
                { img: "/thumbnails/Korea/3.png", alt: "Home screen of the app" }
            ],
            smallImages: [
                { img: "/thumbnails/Korea/4.png", alt: "Home screen of the app" }
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
            image: { img: '/thumbnails/KOREA.png', alt: "썸네일" },
            technologies: [
                "NextJs",
                "Firebase",
                "Tailwind CSS"
            ],
            bigImages: [
                { img: "/thumbnails/KOREA.png", alt: "앱 홈 화면" },
                { img: "/thumbnails/Korea/1.png", alt: "앱 홈 화면" },
                { img: "/thumbnails/Korea/2.png", alt: "앱 홈 화면" },
                { img: "/thumbnails/Korea/3.png", alt: "앱 홈 화면" }
            ],
            smallImages: [
                { img: "/thumbnails/Korea/4.png", alt: "앱 홈 화면" }
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
    }
,    
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
    }
    
    
    
    // Thêm các dự án khác tại đây nếu cần
];
