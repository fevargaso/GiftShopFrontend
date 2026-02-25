export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface UserQueryParams {
  search?: string;
  role?: string;
  page?: number;
  pageSize?: number;
}

export interface UserListResponse {
  data: User[];
  total: number;
}
