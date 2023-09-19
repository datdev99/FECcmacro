export interface FilteredUser {
    id: string;
    UserName: string;
    PasswordHash: string;
    role?: string;
    verified?: boolean;
    createdAt?: string;
    updatedAt?: string;
  }

  export interface UserResponse {
    status: string;
    data: {
      user: FilteredUser;
    };
  }
  
  export interface UserLoginResponse {
    status: string;
    token: string;
  }
  