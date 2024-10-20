import { motion } from 'framer-motion';

// Định nghĩa kiểu (interface) cho các props mà component AnimationItem sẽ nhận
interface AnimationItemProps {
  variants: any; // Các trạng thái animation (left, right, up, down, etc.)
  initial: string; // Trạng thái ban đầu của animation
  animate: string; // Trạng thái cuối cùng của animation
  transition?: object; // Tùy chọn thời gian và kiểu chuyển động
  style?: React.CSSProperties; // Style của đối tượng, nếu cần
  children: React.ReactNode; // Nội dung bên trong đối tượng (text hoặc các thành phần con)
}

// Tạo component AnimationItem để tái sử dụng cho các animation khác nhau
const AnimationItem: React.FC<AnimationItemProps> = ({
  variants,      // Nhận các trạng thái animation
  initial,       // Nhận trạng thái ban đầu
  animate,       // Nhận trạng thái kết thúc
  transition = { duration: 1 },  // Thời gian chuyển động (mặc định là 1 giây)
  style,         // Style cho đối tượng
  children,      // Nội dung bên trong đối tượng (ví dụ text "Move Left to Right")
}) => {
  return (
    <motion.div
      variants={variants}    // Gán các trạng thái vào motion.div
      initial={initial}      // Trạng thái ban đầu
      animate={animate}      // Trạng thái kết thúc sau khi chuyển động
      transition={transition} // Thời gian và kiểu chuyển động
      style={{ width: '100px', height: '100px', ...style }} // Đặt kích thước và thêm style
    >
      {children} // Hiển thị nội dung (có thể là text hoặc thành phần con)
    </motion.div>
  );
};

export default AnimationItem;
