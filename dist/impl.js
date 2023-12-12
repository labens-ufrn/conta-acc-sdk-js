"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctions = void 0;
var getFunctions = function (axiosInstance) {
    var user = {
        createUser: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/user/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'post',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_1 = _a.sent();
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        listUsers: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/user/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'get',
                                    data: null,
                                    params: args.query,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_2 = _a.sent();
                            throw error_2;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        updateUser: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, params, paramKey, value, response, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/user/:userId";
                            params = args.params;
                            for (paramKey in params) {
                                if (params.hasOwnProperty(paramKey)) {
                                    value = params[paramKey];
                                    path = path.replace(":".concat(paramKey), value.toString());
                                }
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'put',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_3 = _a.sent();
                            throw error_3;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
    };
    var manager = {
        signIn: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/manager/sign-in";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'post',
                                    data: args.body,
                                    params: args.query,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_4 = _a.sent();
                            throw error_4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        signUp: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/manager/student/sign-up";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'post',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_5 = _a.sent();
                            throw error_5;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        me: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/manager/me";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'get',
                                    data: null,
                                    params: args.query,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_6 = _a.sent();
                            throw error_6;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
    };
    var course = {
        listCourses: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/course/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'get',
                                    data: null,
                                    params: args.query,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_7 = _a.sent();
                            throw error_7;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        createCourse: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/course/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'post',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_8 = _a.sent();
                            throw error_8;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        updateCourse: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, params, paramKey, value, response, error_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/course/:id";
                            params = args.params;
                            for (paramKey in params) {
                                if (params.hasOwnProperty(paramKey)) {
                                    value = params[paramKey];
                                    path = path.replace(":".concat(paramKey), value.toString());
                                }
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'put',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_9 = _a.sent();
                            throw error_9;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
    };
    var resolution = {
        listResolution: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_10;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/resolution/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'get',
                                    data: null,
                                    params: args.query,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_10 = _a.sent();
                            throw error_10;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        createResolution: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_11;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/resolution/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'post',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_11 = _a.sent();
                            throw error_11;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        updateResolution: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, params, paramKey, value, response, error_12;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/resolution/:id";
                            params = args.params;
                            for (paramKey in params) {
                                if (params.hasOwnProperty(paramKey)) {
                                    value = params[paramKey];
                                    path = path.replace(":".concat(paramKey), value.toString());
                                }
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'put',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_12 = _a.sent();
                            throw error_12;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
    };
    var categories = {
        listCategories: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, params, paramKey, value, response, error_13;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/categories/:resolutionId";
                            params = args.params;
                            for (paramKey in params) {
                                if (params.hasOwnProperty(paramKey)) {
                                    value = params[paramKey];
                                    path = path.replace(":".concat(paramKey), value.toString());
                                }
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'get',
                                    data: null,
                                    params: args.query,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_13 = _a.sent();
                            throw error_13;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        createCategory: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_14;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/categories/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'post',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_14 = _a.sent();
                            throw error_14;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        updateCategory: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, params, paramKey, value, response, error_15;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/categories/:id";
                            params = args.params;
                            for (paramKey in params) {
                                if (params.hasOwnProperty(paramKey)) {
                                    value = params[paramKey];
                                    path = path.replace(":".concat(paramKey), value.toString());
                                }
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'put',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_15 = _a.sent();
                            throw error_15;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
    };
    var activities = {
        listActivities: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, params, paramKey, value, response, error_16;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/activities/:categoryId";
                            params = args.params;
                            for (paramKey in params) {
                                if (params.hasOwnProperty(paramKey)) {
                                    value = params[paramKey];
                                    path = path.replace(":".concat(paramKey), value.toString());
                                }
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'get',
                                    data: null,
                                    params: args.query,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_16 = _a.sent();
                            throw error_16;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
    };
    var department = {
        createDepartment: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_17;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/department/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'post',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_17 = _a.sent();
                            throw error_17;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        listDepartaments: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, response, error_18;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/department/";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'get',
                                    data: null,
                                    params: args.query,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_18 = _a.sent();
                            throw error_18;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        updateDepartment: function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var path, params, paramKey, value, response, error_19;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "/department/:id";
                            params = args.params;
                            for (paramKey in params) {
                                if (params.hasOwnProperty(paramKey)) {
                                    value = params[paramKey];
                                    path = path.replace(":".concat(paramKey), value.toString());
                                }
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axiosInstance({
                                    method: 'put',
                                    data: args.body,
                                    params: null,
                                    url: path,
                                })];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            error_19 = _a.sent();
                            throw error_19;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
    };
    return {
        user: user,
        manager: manager,
        course: course,
        resolution: resolution,
        categories: categories,
        activities: activities,
        department: department,
    };
};
exports.getFunctions = getFunctions;
