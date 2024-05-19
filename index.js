import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    message:"Type your URL",
    name:"URL",
}])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('url-qr.png'));
    fs.writeFile("URL.txt",url,(err)=>{
        if (err) throw err;
        console.log("file has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      "There's an error"
    } else {
      "Something went wrong"
    }
  });