// Trong /lib/rss.ts
import { Feed } from 'feed';
import axios from 'axios';

// Hàm để lấy dữ liệu từ rss và chuyển đổi nó thành JSON
export async function getRssData(url: string) {
  // Lấy dữ liệu từ url rss
  const res = await axios.get(url);
  const data = res.data;

  // Tạo một đối tượng Feed từ dữ liệu
  const feed = new Feed(data);

  // Lấy tiêu đề của các bài viết
  const titles = feed.items.map((item) => item.title);

  // Trả về tiêu đề như một mảng
  return titles;
}

// Hàm khác để xử lý dữ liệu nếu cần
// export function ...
