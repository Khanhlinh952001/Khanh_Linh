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
    }
    
    // Thêm các dự án khác tại đây nếu cần
];
