"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var Gender;
(function (Gender) {
    Gender["m"] = "male";
    Gender["f"] = "female";
})(Gender || (Gender = {}));
const File_Path = "./data.json";
const obj = [{
        name: "pragya",
        age: 23,
        email: "pragya.com",
        gender: Gender.m
    }];
const checkFileExists = async (file) => {
    try {
        await fs.promises.access(file, fs.constants.F_OK);
        return true;
    }
    catch (e) {
        return false;
    }
};
const fileDoesNotExist = () => {
    fs.writeFile(File_Path, JSON.stringify(obj), err => {
        console.log(err);
    });
    return;
};
async function add() {
    const isFileExist = await checkFileExists(File_Path);
    if (isFileExist) {
        fs.readFile(File_Path, "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                const newData = {
                    name: "shalu",
                    age: 23,
                    email: "pragyaawasthi.com",
                    gender: Gender.f
                };
                const parsedData = JSON.parse(data);
                const appendData = [...parsedData, newData];
                fs.writeFile(File_Path, JSON.stringify(appendData), err => {
                    console.log(err);
                });
            }
        });
    }
    else {
        fileDoesNotExist();
    }
}
add();
async function getData() {
    const isFileExist = await checkFileExists(File_Path);
    if (isFileExist) {
        fs.readFile(File_Path, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });
    }
}
getData();
//# sourceMappingURL=indes.js.map