async function http<T>(path: string, config: RequestInit): Promise<T> {
  const response = await fetch(path, config)

  if (!response.ok) {
    const error = await response.json()
    return {
      code: error.statusCode,
      error: error.error,
      message: error.message
    } as never
  }

  // may error if there is no body, return empty array
  return response.json() || []
}

export async function get<T>(
  path: string,
  params?: Record<string, string> | null,
  config?: RequestInit
): Promise<T> {
  const init = { method: 'get', ...config }
  if (params) {
    path += `?${new URLSearchParams(params).toString()}`
  }
  return await http<T>(path, init)
}

export async function post<T, U>(
  path: string,
  body: T,
  config?: RequestInit
): Promise<U> {
  const init = { method: 'post', body: JSON.stringify(body), ...config }
  return await http<U>(path, init)
}

export async function put<T, U>(
  path: string,
  body: T,
  config?: RequestInit
): Promise<U> {
  const init = { method: 'put', body: JSON.stringify(body), ...config }
  return await http<U>(path, init)
}
