import axios from "axios";

declare module "*.png";
("*.jpg");
{
  const value: string;
  export default value;
}
// https://github.com/axios/axios/issues/1510#issuecomment-448201698
declare module "axios" {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
