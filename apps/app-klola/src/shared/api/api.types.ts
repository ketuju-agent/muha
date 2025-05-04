/**
 * User roles for authorization
 */
export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

/**
 * API error response interface
 */
export interface ApiError {
    message: string;
    code: string;
    status: number;
}

/**
 * Pagination parameters interface
 */
export interface PaginationParams {
    page: number;
    limit: number;
}

/**
 * Generic paginated response interface
 */
export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
}
