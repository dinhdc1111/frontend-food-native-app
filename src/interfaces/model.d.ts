// *.d.ts (declaration file) 👉 Global Declaration Files
// Định nghĩa typescript cho các biến toàn cục, không cần import vào file sử dụng
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript
export { };

declare global {
  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface IRegister {
    _id: string;
  }
}
