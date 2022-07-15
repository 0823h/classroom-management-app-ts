"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommonValidator {
    constructor() {
        this.validate = function (schema) {
            return function (req, res, next) {
                const { value, error } = schema.validate(req.body);
                if (!error) {
                    return next();
                }
                console.log(schema.validate(req.body));
                return res.status(400).json({
                    status: "error",
                    message: error,
                });
            };
        };
    }
}
exports.default = CommonValidator;
