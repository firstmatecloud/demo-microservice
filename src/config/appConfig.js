class Configuration {

    serverPort() {
        return process.env.PORT || 8080;
    }
    logLevel(){
        return process.env.LOG_LEVEL || "info";
    }
    logPretty(){
        return process.env.LOG_PRETTY === "true";
    }
}

export default new Configuration()

