import { jwtVerify } from 'jose';

export const useTokenManager = () => {

    const secret = new TextEncoder().encode('labeddit-fullstack')
    
    const getPayload = async (token) => {
        try {
            const { payload } = await jwtVerify(token, secret)
            return payload
          } catch (e) {
            return "Token is invalid"
          }
    }

    return { getPayload } 
}