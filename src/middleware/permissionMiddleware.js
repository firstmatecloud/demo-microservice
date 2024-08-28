import logger from "../utils/logger.js";
import cls from "cls-hooked";
import API_PERMISSIONS from "../config/permissionsConstants.js";
import {ApplicationError, errorCodes} from "../utils/ApplicationError.js";

const contextNameSpaceName = "clsNamespace"
const iamContextObject = "iamContext"

let clsNamespace = cls.getNamespace(contextNameSpaceName)
if(!clsNamespace){
    clsNamespace = cls.createNamespace(contextNameSpaceName);
}




export async function authenticateAPI(apiKey) {
    const org = {
        name: "exampleOrg",
        apiKey
    }
    const user = {
        name: "exampleUser"
    }
    return {org, user}
}



export function grantAccessByPermissionMiddleware(requiredPermissions) {
    return async (req, res, next) => {
        try {
            clsNamespace.bindEmitter(req);
            clsNamespace.bindEmitter(res);

            const iamObject = {
                isPublicEndpoint: false,
                isInternalEndpoint: false,
                token: req.headers.authorization,
                provider: req.headers.provider,
                user:  undefined,
                organisation:  undefined,
                cluster:  undefined,
                decodedToken: undefined
            }

            if(requiredPermissions.includes(API_PERMISSIONS.PUBLIC_ENDPOINT)){
                iamObject.isPublicEndpoint = true;
            }
            else if(requiredPermissions.includes(API_PERMISSIONS.INTERNAL_ENDPOINT)){
                iamObject.isInternalEndpoint = true;
            }
            else if(requiredPermissions.includes(API_PERMISSIONS.API_ENDPOINT)){
                const {user,org} = await authenticateAPI(iamObject.token,);
                iamObject.organisation = org
                iamObject.user = user
            }
            clsNamespace.run(() => {
                clsNamespace.set(iamContextObject,iamObject);
                next()
            });
        } catch (err) {
            logger.error(err, "grantAccessByPermissionMiddleware issue.");
            next(err);
        }
    }
}

export function getIamContext ()  {
    return clsNamespace.get(iamContextObject);
}
export function getOrganisationId ()  {
    const iamObject = getIamContext();
    if(!iamObject?.organisation?._id) throw new ApplicationError(errorCodes.F004)
    return iamObject?.organisation?._id.toString();
}




