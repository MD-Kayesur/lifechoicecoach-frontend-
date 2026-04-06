export interface User {
    id: string | number;
    name: string;
    email: string;
    role?: string;
    avatar?: string;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface ApiResponseBase {
    message: string;
}

export interface LoginResponse extends ApiResponseBase {
    data: {
        user: User;
        accessToken: string;
        refreshToken: string;
    };
}

export interface RegisterResponse extends ApiResponseBase {
    data: {
        user: User;
        accessToken: string;
        refreshToken: string;
    };
}
