import fs from "fs";

const createFile = async (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Create Sucessfull.");
    }
  });
};

const updateFile = (fileName, newData) => {
  fs.appendFile(fileName, ` ${newData}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data Update Sucessfull.");
    }
  });
};

const readFile = (fileName) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

const rename = (fileName, newFileName) => {
  fs.rename(fileName, newFileName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`File Rename Sucessfull from ${fileName} to ${newFileName}`);
    }
  });
};

const deleteFile=(fileName)=>{
    fs.unlink(fileName,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`Sucessfully Delete ${fileName} file`)
        }
    })
}

createFile("demo1", "I am Kazi Tasin Hossen.");

updateFile("demo1", "I am a student at Barguna Pollytechnic Institute.");
readFile("demo1");
rename("demo1", "KTH Data");
deleteFile("KTH Data")
