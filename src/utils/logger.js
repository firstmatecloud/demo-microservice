import pino from "pino"
import pretty from 'pino-pretty';

import config from "../config/appConfig.js"
import appConfig from "../config/appConfig.js";

const logger = pino({
    level: config.logLevel(),
    formatters: {
        level: (label) => {
            return { level: label.toUpperCase() };
        },
    },
}, appConfig.logPretty() && pretty({
    colorize: true
}));

export default logger