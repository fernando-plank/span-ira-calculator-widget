const baseURL = process.env.NEXT_PUBLIC_REWIRING_AMERICA_API
const apiVersion = '/v0'

export const apiRoutes = {
  calculator: `${baseURL}${apiVersion}/calculator`,
  incentives: `${baseURL}${apiVersion}/incentives`
}
