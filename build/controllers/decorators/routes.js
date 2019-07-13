"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var config_1 = require("./config");
var routeBinder = function (method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(config_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(config_1.MetadataKeys.method, method, target, key);
        };
    };
};
exports.get = routeBinder(config_1.Methods.get);
exports.put = routeBinder(config_1.Methods.put);
exports.post = routeBinder(config_1.Methods.post);
exports.del = routeBinder(config_1.Methods.del);
exports.patch = routeBinder(config_1.Methods.patch);
