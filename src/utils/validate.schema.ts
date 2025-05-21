import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email không đúng định dạng").required("Email là bắt buộc"),
  password: Yup.string().min(6, "Mật khẩu quá ngắn").max(50, "Mật khẩu quá dài").required("Mật khẩu là bắt buộc"),
});
