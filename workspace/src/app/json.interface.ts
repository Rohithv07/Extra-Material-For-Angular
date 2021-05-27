import { UserInterface } from "./user-interface";

export interface JsonResult {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: UserInterface[];
}
