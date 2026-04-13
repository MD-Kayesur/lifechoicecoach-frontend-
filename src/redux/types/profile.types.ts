import { ApiResponseBase, User } from "./auth.types";

export interface ProfileUpdateResponse extends ApiResponseBase {
    success?: boolean;
    profile: User;
}

export interface ProfileUpdateRequest {
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    dp_image?: File | null;
}

export interface ProfileResponse extends ApiResponseBase {
    success?: boolean;
    profile: User;
}
