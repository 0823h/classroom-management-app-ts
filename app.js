"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const classRoutes_1 = __importDefault(require("./routes/classRoutes"));
dotenv_1.default.config({ path: "./config.env" });
const app = (0, express_1.default)();
const DB = (_a = process.env.DATABASE) === null || _a === void 0 ? void 0 : _a.replace("<PASSWORD>", process.env.PASSWORD);
mongoose_1.default
    .connect(DB)
    .then((data) => {
    console.log("Successfully connected to database");
})
    .catch((err) => console.log("Error connected to database: ", err));
app.use(express_1.default.json());
app.use("/api/students", studentRoutes_1.default);
app.use("/api/classes", classRoutes_1.default);
app.listen(process.env.PORT || 5000, () => {
    console.log(`App running on port ${process.env.PORT}`);
});
