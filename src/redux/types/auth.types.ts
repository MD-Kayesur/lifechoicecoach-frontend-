export interface User {
    id: string | number;
    name: string;
    email: string;
    role?: string;
    avatar?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    access?: string;
    refresh?: string;
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

export interface OtpRequest {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    password2: string;
}

export interface OtpVerifyRequest {
    email: string;
    otp: string;
}

export interface OtpResendRequest {
    email: string;
}

export interface ChangePasswordRequest {
    new_password: string;
    confirm_password: string;
}

export interface ApiResponseBase {
    status?: string;
    message?: string;
    detail?: string;
}

export interface LoginResponse extends ApiResponseBase {
    data?: {
        user: User;
        accessToken: string;
        refreshToken: string;
    };
    access?: string;
    refresh?: string;
}

export interface RegisterResponse extends ApiResponseBase {
    data?: {
        user: User;
        accessToken: string;
        refreshToken: string;
    };
}

export interface OtpResponse extends ApiResponseBase {
    success?: boolean;
}
