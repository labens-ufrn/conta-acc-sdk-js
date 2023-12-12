import { AxiosInstance } from "axios";
export * as sdk from "./impl";
export * as default from "./impl";
interface Opts {
    axios?: AxiosInstance;
}
export declare function createClient({ axios }: Opts): {
    user: {
        createUser(args: import("./types").CreateUserArgs): Promise<import("axios").AxiosResponse<any, any>>;
        listUsers(args: import("./types").ListUsersArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateUser(args: import("./types").UpdateUserArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    manager: {
        signIn(args: import("./types").SignInArgs): Promise<import("axios").AxiosResponse<any, any>>;
        signUp(args: import("./types").SignUpArgs): Promise<import("axios").AxiosResponse<any, any>>;
        me(args: import("./types").MeArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    course: {
        listCourses(args: import("./types").ListCoursesArgs): Promise<import("axios").AxiosResponse<any, any>>;
        createCourse(args: import("./types").CreateCourseArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateCourse(args: import("./types").UpdateCourseArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    resolution: {
        listResolution(args: import("./types").ListResolutionArgs): Promise<import("axios").AxiosResponse<any, any>>;
        createResolution(args: import("./types").CreateResolutionArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateResolution(args: import("./types").UpdateResolutionArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    categories: {
        listCategories(args: import("./types").ListCategoriesArgs): Promise<import("axios").AxiosResponse<any, any>>;
        createCategory(args: import("./types").CreateCategoryArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateCategory(args: import("./types").UpdateCategoryArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    activities: {
        listActivities(args: import("./types").ListActivitiesArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    department: {
        createDepartment(args: import("./types").CreateDepartmentArgs): Promise<import("axios").AxiosResponse<any, any>>;
        listDepartaments(args: import("./types").ListDepartamentsArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateDepartment(args: import("./types").UpdateDepartmentArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    axiosInstance: AxiosInstance;
};
