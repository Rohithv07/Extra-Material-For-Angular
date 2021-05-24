import { EmployeeDepartment } from "./employee-department-class";
import { EmployeeSkill } from "./employee-skill-class";

export interface EmployeeDetails {
  id: number;
  name: string;
  salary: number;
  permanent: boolean;
  departments: EmployeeDepartment[];
  skills: EmployeeSkill[];
  dateOfBirth: Date;

}
