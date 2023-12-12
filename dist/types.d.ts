export interface CreateUserArgs {
    body: {
        courseId: string;
        name: string;
        email: string;
        password: string;
        role: string;
    };
}
export interface ListUsersArgs {
    query: {
        include?: string;
        search?: string;
        page?: number;
        pageSize?: number;
        role?: string;
        courseId?: string;
    };
}
export interface UpdateUserArgs {
    body: {
        name?: string;
        password?: string;
        email?: string;
        role?: string;
        status?: "ACTIVE" | "INACTIVE";
    };
    params: {
        userId: string;
    };
}
export interface SignInArgs {
    body: {
        email: string;
        password: string;
    };
    query: {
        include?: string;
    };
}
export interface SignUpArgs {
    body: {
        name: string;
        enrollId: string;
        email: string;
        password: string;
    };
}
export interface MeArgs {
    query: {
        include?: string;
    };
}
export interface ListCoursesArgs {
    query: {
        include?: string;
        search?: string;
        page?: number;
        pageSize?: number;
        id?: string;
    };
}
export interface CreateCourseArgs {
    body: {
        name: string;
        departmentId: string;
    };
}
export interface UpdateCourseArgs {
    body: {
        name?: string;
        departmentId?: string;
        status?: "ACTIVE" | "INACTIVE";
    };
    params: {
        id: string;
    };
}
export interface ListResolutionArgs {
    query: {
        id?: string;
        isCurrent?: boolean;
        search?: string;
        include?: string;
        page?: number;
        pageSize?: number;
    };
}
export interface CreateResolutionArgs {
    body: {
        name: string;
        description?: string;
        link?: string;
        courseId: string;
        isCurrent?: boolean;
    };
}
export interface UpdateResolutionArgs {
    body: {
        name?: string;
        description?: string;
        link?: string;
        isCurrent?: boolean;
    };
    params: {
        id: string;
    };
}
export interface ListCategoriesArgs {
    query: {
        include?: string;
        search?: string;
        page?: number;
        pageSize?: number;
    };
    params: {
        resolutionId: string;
    };
}
export interface CreateCategoryArgs {
    body: {
        name: string;
        description?: string;
        resolutionId: string;
    };
}
export interface UpdateCategoryArgs {
    body: {
        name?: string;
        description?: string;
    };
    params: {
        id: string;
    };
}
export interface ListActivitiesArgs {
    query: {
        include?: string;
        search?: string;
        page?: number;
        pageSize?: number;
    };
    params: {
        categoryId: string;
    };
}
export interface CreateDepartmentArgs {
    body: {
        name: string;
        sede: string;
    };
}
export interface ListDepartamentsArgs {
    query: {
        include?: string;
        search?: string;
        page?: number;
        pageSize?: number;
    };
}
export interface UpdateDepartmentArgs {
    body: {
        name?: string;
        sede?: string;
    };
    params: {
        id: string;
    };
}
