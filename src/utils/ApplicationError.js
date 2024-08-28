
export const errorCodes = {
    F001: {
        code: "F001",
        message: "Function not implemented for this provider"
    },
    F002: {
        code: "F002",
        message: "Ticket has no provider."
    },
    F003: {
        code: "F003",
        message: "Ticket does not exist."
    },
}


export class ApplicationError extends Error {
    constructor(errorCode){
        super(errorCode.message)
        this.code = errorCode.code
    }
}
