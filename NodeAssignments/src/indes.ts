import * as fs from 'fs'
import { json } from 'stream/consumers'

enum Gender {
    m = "male",
    f="female"
}
interface data {
    name: string ,
    age : number ,
    email : string,
    gender :Gender
}

const File_Path = "./data.json"

const obj : data[]=  [{
    name : "pragya",
    age : 23,
    email : "pragya.com",
    gender : Gender.m
}]

const checkFileExists = async(file:string):Promise<boolean>=>{
    try{
        await fs.promises.access(file,fs.constants.F_OK)
        return true
    }
    catch(e){
        return false;
    }
}
const fileDoesNotExist = ():Promise<void>=>{
    fs.writeFile(File_Path,JSON.stringify(obj),err=>{
        console.log(err)
    })
    return
}

async function add(){
        const isFileExist = await checkFileExists(File_Path)
    if(isFileExist){
        fs.readFile(File_Path,"utf8",(err,data : Buffer|String) =>{
            if(err){
                console.log(err)
            }
            else{
                const newData : data={
                    name : "shalu",
                    age : 23,
                    email : "pragyaawasthi.com",
                    gender : Gender.f
                }

                const parsedData = JSON.parse(data as unknown as string);
                const appendData = [...parsedData,newData];
                fs.writeFile(File_Path,JSON.stringify(appendData),err=>{
                    console.log(err)
                })
            }
        })
    }
    else{
        fileDoesNotExist()
    }
    }
    add()

    async function getData(){
        const isFileExist = await checkFileExists(File_Path)
        if(isFileExist){
            fs.readFile(File_Path, 'utf8', (err, data : Buffer|String) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log(data);
              });
    }
    
}
getData()



