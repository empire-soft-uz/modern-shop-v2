import IAdmin from "./IAdmin";

export default interface Chat {
  user: string;
  admin: IAdmin;
  id: string;
}
