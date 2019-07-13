"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var config_1 = require("./config");
var middlewares_1 = require("../middlewares");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(config_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(config_1.MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(config_1.MetadataKeys.middleware, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(config_1.MetadataKeys.validator, target.prototype, key) || {};
            var validator = middlewares_1.bodyValidator(requiredBodyProps);
            if (path) {
                router[method].apply(router, ["" + routePrefix + path].concat(middlewares, [validator, routeHandler]));
            }
        }
    };
}
exports.controller = controller;
