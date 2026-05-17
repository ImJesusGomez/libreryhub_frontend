import type { Employee } from "./employee.interface";

export interface AuthResponse {
  accessToken: string;
  employee: Employee;
}
