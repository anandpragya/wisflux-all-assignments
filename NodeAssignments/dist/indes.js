"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var Gender;
(function (Gender) {
    Gender["m"] = "MALE";
    Gender["f"] = "FEMALE";
})(Gender || (Gender = {}));
const FILE_PATH = "../dist/data.json";
const initialValue = [
    {
        name: "pragya",
        age: 25,
        email: "praagya752@gmail.com",
        Gender: Gender.f,
    }
];
var FILE_MODE;
(function (FILE_MODE) {
    FILE_MODE["READ"] = "r";
    FILE_MODE["WRITE"] = "w";
    FILE_MODE["APPEND"] = "a";
})(FILE_MODE || (FILE_MODE = {}));
const checkFileExist = async (file) => {
    try {
        await fs.promises.access(file, fs.constants.F_OK);
        return true;
    }
    catch (error) {
        return false;
    }
};
async function IfFileNotExist() {
    fs.appendFile(FILE_PATH, JSON.stringify(initialValue), (err) => {
        if (err) {
            console.log("Error in creating file");
            return;
        }
        else {
            console.log("File and data inserted successfully");
            return;
        }
    });
}
async function createNewUser(newUser) {
    await fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const parsedData = JSON.parse(data);
        const isEmailExist = parsedData.some((obj) => {
            return obj.email === newUser.email;
        });
        if (isEmailExist) {
            console.log(`User with this ${newUser.email} already exist`);
        }
        else {
            const appendedData = [...parsedData, newUser];
            fs.writeFile(FILE_PATH, JSON.stringify(appendedData), (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                else {
                    console.log("New user added successfully");
                    return;
                }
            });
        }
    });
}
async function getAllUserDetails() {
    await fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    });
    return;
}
async function getUserDetailByEmail(email) {
    await fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const parsedData = JSON.parse(data);
        const indexToBeSearched = parsedData.findIndex((obj) => {
            return obj.email === email;
        });
        if (indexToBeSearched === -1) {
            console.log("email not exist");
        }
        else {
            console.log(parsedData[indexToBeSearched]);
        }
    });
    return;
}
async function deleteUserByEmail(email) {
    await fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const parsedData = JSON.parse(data);
        const indexToBeSearched = parsedData.findIndex((obj) => {
            return obj.email === email;
        });
        if (indexToBeSearched === -1) {
            console.log("email not exist");
        }
        else {
            console.log(parsedData.splice(indexToBeSearched, 1));
            console.log(JSON.stringify(parsedData));
            fs.writeFile(FILE_PATH, JSON.stringify(parsedData), (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                else {
                    console.log("User deleted  successfully");
                    return;
                }
            });
        }
    });
    return;
}
async function updateUserByEmail(email, name, Gender, age) {
    await fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const parsedData = JSON.parse(data);
        const indexToBeSearched = parsedData.findIndex((obj) => {
            return obj.email === email;
        });
        if (indexToBeSearched === -1) {
            console.log("email not exist");
        }
        else {
            if (name) {
                parsedData[indexToBeSearched].name = name;
            }
            if (age) {
                parsedData[indexToBeSearched].age = age;
            }
            if (Gender) {
                parsedData[indexToBeSearched].Gender = Gender;
            }
            console.log(parsedData);
            fs.writeFile(FILE_PATH, JSON.stringify(parsedData), (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                else {
                    console.log("User Updated  successfully");
                    return;
                }
            });
        }
    });
    return;
}
async function main() {
    const isFileExist = await checkFileExist(FILE_PATH);
    if (isFileExist) {
        const newUser = {
            name: "john",
            age: 23,
            email: "abc3@gmail.com",
            Gender: Gender.f,
        };
        const emailToBeSearched = newUser.email;
        await createNewUser(newUser);
        await getAllUserDetails();
        await getUserDetailByEmail(emailToBeSearched);
        await deleteUserByEmail("pragyaawasthi.com");
        await updateUserByEmail(emailToBeSearched, "pragya", Gender.f, 26);
    }
    else {
        IfFileNotExist();
    }
}
main();
//# sourceMappingURL=indes.js.map