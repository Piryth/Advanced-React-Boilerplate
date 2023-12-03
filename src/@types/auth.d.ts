export type IAuth = {
    jwtToken: string,
    setJwtToken: (token: string) => void
}