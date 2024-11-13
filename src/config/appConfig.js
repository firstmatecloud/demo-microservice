class Configuration {

    serverPort() {
        return process.env.PORT || 80;
    }
    logLevel(){
        return process.env.LOG_LEVEL || "info";
    }
    logPretty(){
        return process.env.LOG_PRETTY === "true";
    }
}

export default new Configuration()

