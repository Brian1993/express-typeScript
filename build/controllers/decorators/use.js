"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetaDataKeys_1 = require("./MetaDataKeys");
exports.use = function (middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetaDataKeys_1.MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(MetaDataKeys_1.MetadataKeys.middleware, middlewares.concat([middleware]), target, key);
    };
};
