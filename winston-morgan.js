// import { createLogger, format, transports } from "winston";
const {createLogger,format,transports}=require("winston")
const { combine, timestamp, json, colorize } = format;
const express=require("express")
const app=express()
const morgan=require("morgan")
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }),
  ],
});
app.get("/",(req,res)=>{
    // const {data}=req.body;
    logger.warn("hey")
    // console.log(data);
    res.send("hi")
})
app.listen(3000,()=>{
    console.log("Server Listening to PORT 3000");
})

module.exports=logger;