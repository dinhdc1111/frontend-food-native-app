import instance from "@/utils/axios.customize";

export const registerAPI = (email: string, password: string, name: string) => {
  const url = `/api/v1/auth/register`;
  return instance.post<IBackendRes<IRegister>>(url, {
    email,
    password,
    name,
  });
};

export const verifyCodeAPI = (email: string, code: string) => {
  const url = `/api/v1/auth/verify-code`;
  return instance.post<IBackendRes<IRegister>>(url, {
    email,
    code,
  });
};

export const resendCodeAPI = (email: string) => {
  const url = `/api/v1/auth/verify-email`;
  return instance.post<IBackendRes<IRegister>>(url, {
    email,
  });
};

export const loginAPI = (username: string, password: string) => {
  const url = `/api/v1/auth/login`;
  return instance.post<IBackendRes<ILogin>>(url, {
    username,
    password,
  });
};
