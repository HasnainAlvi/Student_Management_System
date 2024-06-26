#! /usr/bin/env node
 
                                              //starting project//

 import inquirer from "inquirer";

 import chalk from "chalk";
                                                   
                            
                                // Display a welcome message with an animated box //

console.log(chalk.bgRed.white.bold(`\n\t\t\t\t*WELCOME TO HASNAIN ALVI STUDENT MANAGEMENT SYSTEM*\n`));
                                
                      // Function to display an animation and then stop it after 3 seconds

  async function welcomeAnimation() {
  const startingAnimation = chalk.white.bgRed.bold(  chalk(  `STUDENT MANAGEMENT SYSTEM PROJECT 07`,{
  title: "*My Project*",
  titleAlignment: "center",
  textAlignment: "center",
  borderStyle: "double",
  borderColor: "white",
                                        // Set width to 40 characters
  width: 110,
  })
  );
                                
await new Promise((resolve) => setTimeout(resolve, 1000));
                                
console.log(startingAnimation);
}
                                
await welcomeAnimation();
                                
                                
function generateRollNumber() {
                      // Generate a unique roll number using timestamp and a random number
const timestamp = Date.now().toString();
const randomNum = Math.floor(Math.random() * 1+1).toString().padStart(1, '0'); // Ensure 4 digits
return timestamp + randomNum;
}
                                
                        // Function to prompt the user for student information
async function promptUser() {
const studentInfo = await inquirer.prompt([
{
 type: "input",
 name: "Name",
 message: chalk.bgRed.white(`Enter Student Name : `),
 validate: (value: string) =>
 value.trim() !== "" || chalk.bgRed.white("Please enter a valid name."),
 },
{
  type: "number",
  name: "Age",
  message: chalk.bgRed.white(`Enter Student Age : `),
  validate: (value: number) =>
  (!isNaN(value) && value >= 0 && value <= 150) ||
  chalk.bgRed.white("Please enter a valid age."),
 },
    { type: "input",
      name: "gender",
      message: chalk.bgRed.white(`Enter Student Gender : `),
      validate: (value: string) =>
      value.trim() !== "" ||
      chalk.bgRed.white("Please enter a valid gender."),
      },
   {
      type: "input",
      name: "university",
      message: chalk.bgRed.white(
     `Could You Please Give Me The University's Name : `
      ),
  validate: (value: string) =>
  value.trim() !== "" ||
  chalk.bgRed.white
   ("Please enter a valid university name."),
    },
{
  type: "input",
  name: "batch",
  message: chalk.bgRed.white(`Enter Student Batch : `),
  validate: (value: string) =>
  value.trim() !== "" ||
  chalk.bgRed.white("Please enter a valid batch."),
  },
{
  type: "list",
  name: "courses",
  message: chalk.bgRed.white.underline.bold(
  "Please Select one Course or Exit"
  ),
  choices: [
        "Cloud Applied Generative AI",
        "Metaverse",
        "Block chain",
        "Web development",
        "Internet of Things",
        "Exit....",
      
        ],
    },
  ]);
                                
                          // If the user chooses to exit, display a message and return
  if (studentInfo.courses === "Exit....") {
  console.log(chalk.bgWhite.black.bold("THANK YOU FOR USING HASNAIN ALVI STUDENT MANAGEMENT SYSTEM"));
  return;                                  // Exit the function
  }
                                  
                                           // Generate roll number
    const rollNumber = generateRollNumber();
                                    
                                  // Add roll number to studentInfo object
    studentInfo.rollNumber = rollNumber;
                                
                                   // Print student information with styling
    for (const [key, value] of Object.entries(studentInfo)) 
    {console.log(chalk.bgRed.white.underline.bold(key) +" : " +
    chalk.white.bold.underline(value)
    );
  }
}
                                
  promptUser().catch((error) =>
  console.error(chalk.bgRed.white.underline("An error occurred:", error))
    );
                                
                                            //"Ending Project"//