import { Department } from "./department";
import { Skill } from "./skill";

export interface Employee {
    id: number,
    name: string,
    salary: number,
    permanent: boolean,
    department: Department[],
    skills: Skill[],
    dob: Date
};