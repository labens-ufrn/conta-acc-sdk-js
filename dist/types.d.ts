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
        totalPoints: number;
        description?: ({
            [k: string]: unknown;
        } | string) | null;
        link?: ({
            [k: string]: unknown;
        } | string) | null;
        isCurrent?: ({
            [k: string]: unknown;
        } | boolean) | null;
        copyFrom?: ({
            [k: string]: unknown;
        } | string) | null;
    };
}
export interface UpdateResolutionArgs {
    body: {
        name?: ({
            [k: string]: unknown;
        } | string) | null;
        description?: ({
            [k: string]: unknown;
        } | string) | null;
        totalPoints?: ({
            [k: string]: unknown;
        } | number) | null;
        link?: ({
            [k: string]: unknown;
        } | string) | null;
        isCurrent?: ({
            [k: string]: unknown;
        } | boolean) | null;
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
        id?: string;
        resolutionId: string;
    };
}
export interface CreateCategoryArgs {
    body: {
        name: string;
        description?: string;
        minPoints?: number;
        maxPoints?: number;
        resolutionId: string;
    };
}
export interface UpdateCategoryArgs {
    body: {
        name?: string;
        description?: ({
            [k: string]: unknown;
        } | string) | null;
        minPoints?: ({
            [k: string]: unknown;
        } | number) | null;
        maxPoints?: ({
            [k: string]: unknown;
        } | number) | null;
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
export interface CreateActivityArgs {
    body: {
        name: string;
        code: string;
        workloadSemester?: ({
            [k: string]: unknown;
        } | number) | null;
        workloadActivity?: ({
            [k: string]: unknown;
        } | number) | null;
        description?: ({
            [k: string]: unknown;
        } | string) | null;
        categoryId: string;
    };
}
export interface UpdateActivityArgs {
    body: {
        name?: ({
            [k: string]: unknown;
        } | string) | null;
        code?: ({
            [k: string]: unknown;
        } | string) | null;
        workloadSemester?: ({
            [k: string]: unknown;
        } | number) | null;
        workloadActivity?: ({
            [k: string]: unknown;
        } | number) | null;
        description?: ({
            [k: string]: unknown;
        } | string) | null;
    };
    params: {
        activityId: string;
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
export interface UpdateReviewArgs {
    body: {
        name?: ({
            [k: string]: unknown;
        } | string) | null;
        link?: ({
            [k: string]: unknown;
        } | string) | null;
        status?: ({
            [k: string]: unknown;
        } | ("APPROVED" | "REJECTED")) | null;
    };
    params: {
        reviewActivityId: string;
    };
}
export interface InfoActivitiesArgs {
    query: {
        studentId?: ({
            [k: string]: unknown;
        } | string) | null;
    };
}
export interface NewActivityArgs {
    body: {
        activityId?: string;
        name: string;
        link?: ({
            [k: string]: unknown;
        } | string) | null;
    };
}
export interface ListReviewActivitiesArgs {
    query: {
        include?: string;
        search?: string;
        page?: number;
        pageSize?: number;
        studentId?: ({
            [k: string]: unknown;
        } | string) | null;
    };
}
export interface ListStudentArgs {
    query: {
        include?: string;
        search?: string;
        page?: number;
        pageSize?: number;
    };
}
export interface CreateStudentArgs {
    body: {
        name: string;
        enrollId: string;
        email: string;
        password: string;
    };
}
export interface UpdateStudentArgs {
    body: {
        name?: ({
            [k: string]: unknown;
        } | string) | null;
        enrollId?: ({
            [k: string]: unknown;
        } | string) | null;
        email?: ({
            [k: string]: unknown;
        } | string) | null;
        password?: ({
            [k: string]: unknown;
        } | string) | null;
    };
    params: {
        studentId: string;
    };
}
