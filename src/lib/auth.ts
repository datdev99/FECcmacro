// auth.ts

// Kiểm tra xem người dùng đã đăng nhập hay chưa
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token; // Nếu token tồn tại, người dùng đã đăng nhập
};

// Lấy token từ Local Storage
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

// Lưu token vào Local Storage sau khi đăng nhập
export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

// Xóa token khỏi Local Storage sau khi đăng xuất
export const removeToken = (): void => {
  localStorage.removeItem('token');
};
