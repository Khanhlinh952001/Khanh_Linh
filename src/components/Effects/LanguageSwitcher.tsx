"use client"; // Thêm dòng này để chỉ định sử dụng phía client

import { useParams } from 'next/navigation';
import { FC } from 'react';

const LanguageSwitcher: FC = () => {
  const params = useParams();
  const locale = params.locale; // Lấy ngôn ngữ từ params (ví dụ: 'kr', 'en', 'vi')

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    window.location.href = `/${newLocale}${window.location.pathname.substring(3)}`;
  };

  return (
    <select value={locale} onChange={handleLocaleChange}>
      <option value="kr">
        🇰🇷 {/* Flag for Korea */}
      </option>
      <option value="en">
        🇬🇧 {/* Flag for English */}
      </option>
      <option value="vi">
        🇻🇳 {/* Flag for Vietnamese */}
      </option>
      {/* Add other languages if needed */}
    </select>
  );
};

export default LanguageSwitcher;
