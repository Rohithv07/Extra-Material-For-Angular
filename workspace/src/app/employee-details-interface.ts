import { EmployeeDepartment } from "./employee-department-interface";
import { EmployeeSkill } from "./employee-skill-interface";

export interface EmployeeDetails {
  id: number;
  name: string;
  salary: number;
  permanent: boolean;
  departments: EmployeeDepartment[];
  skills: EmployeeSkill[];
  dateOfBirth: Date;
}
