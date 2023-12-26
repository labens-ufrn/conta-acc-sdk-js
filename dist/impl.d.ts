import * as t from './types';
import { AxiosInstance } from "axios";
export declare const getFunctions: (axiosInstance: AxiosInstance) => {
    user: {
        createUser(args: t.CreateUserArgs): Promise<import("axios").AxiosResponse<any, any>>;
        listUsers(args: t.ListUsersArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateUser(args: t.UpdateUserArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    manager: {
        signIn(args: t.SignInArgs): Promise<import("axios").AxiosResponse<any, any>>;
        signUp(args: t.SignUpArgs): Promise<import("axios").AxiosResponse<any, any>>;
        me(args: t.MeArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    course: {
        listCourses(args: t.ListCoursesArgs): Promise<import("axios").AxiosResponse<any, any>>;
        createCourse(args: t.CreateCourseArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateCourse(args: t.UpdateCourseArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    resolution: {
        listResolution(args: t.ListResolutionArgs): Promise<import("axios").AxiosResponse<any, any>>;
        createResolution(args: t.CreateResolutionArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateResolution(args: t.UpdateResolutionArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    categories: {
        listCategories(args: t.ListCategoriesArgs): Promise<import("axios").AxiosResponse<any, any>>;
        createCategory(args: t.CreateCategoryArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateCategory(args: t.UpdateCategoryArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    activities: {
        listActivities(args: t.ListActivitiesArgs): Promise<import("axios").AxiosResponse<any, any>>;
        createActivity(args: t.CreateActivityArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateActivity(args: t.UpdateActivityArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    department: {
        createDepartment(args: t.CreateDepartmentArgs): Promise<import("axios").AxiosResponse<any, any>>;
        listDepartaments(args: t.ListDepartamentsArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateDepartment(args: t.UpdateDepartmentArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
    student: {
        updateReview(args: t.UpdateReviewArgs): Promise<import("axios").AxiosResponse<any, any>>;
        infoActivities(args: t.InfoActivitiesArgs): Promise<import("axios").AxiosResponse<any, any>>;
        newActivity(args: t.NewActivityArgs): Promise<import("axios").AxiosResponse<any, any>>;
        listReviewActivities(args: t.ListReviewActivitiesArgs): Promise<import("axios").AxiosResponse<any, any>>;
        listStudent(args: t.ListStudentArgs): Promise<import("axios").AxiosResponse<any, any>>;
        createStudent(args: t.CreateStudentArgs): Promise<import("axios").AxiosResponse<any, any>>;
        updateStudent(args: t.UpdateStudentArgs): Promise<import("axios").AxiosResponse<any, any>>;
    };
};
