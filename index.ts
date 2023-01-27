import fs from "fs";
import chalk from "chalk";
import Mustache from "mustache";

const appName: string = `[${chalk.bold.greenBright("Open")}${chalk.bold.yellowBright("Resume")}]`
 /**
 * load (as JSON5) OpenResume file
 * --------------------------------
 * */
// load (as JSON5) `resume.json5`
console.log(chalk.bold.blueBright(`${appName} loading resume ...`));
const resumePath = "./resumes/mprinc/resume.json5";
const resumeStr = fs.readFileSync(resumePath, "utf8");
import JSON5 from "json5";
const resumeObj = JSON5.parse(resumeStr);
console.log(`resumeObj: ${JSON.stringify(resumeObj, null, 4)}`);
 
// load `template.html`
console.log(chalk.bold.blueBright(`${appName} loading template ...`));
const resumeTemplatePath = "./templates/mprinc/resume.html";
const resumeTemplate = fs.readFileSync(resumeTemplatePath, "utf8");
console.log(`resumeTemplate: ${resumeTemplate}`);

console.log(chalk.bold.blueBright(`${appName} building resume ...`));
const builtResume = Mustache.render(resumeTemplate, resumeObj);
console.log(`builtResume: ${builtResume}`);

const builtResumePath = "./resumes/mprinc/resume.html";
console.log(chalk.bold.blueBright(`${appName} saving built resume [${builtResumePath}] ...`));
fs.writeFileSync(builtResumePath, builtResume, {encoding: "utf8"});

console.log(chalk.bold.blueBright(`${appName} built resume saved [${builtResumePath}] ...`));
