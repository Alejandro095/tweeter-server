import {config} from "dotenv"

const configurations = { path: ".env.production", debug: process.env.DEBUG }

if(process.env.NODE_ENV === "development") {
    configurations.path = ".env.development"

}

console.log(process.env.NODE_ENV)

export default function setEnviromentVariables() {
    return config(configurations)
}