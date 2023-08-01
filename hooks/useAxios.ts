import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

// ******************************************
//      highly reusable axios requests
// ******************************************

export const crudAxios = (
  endpoint: string,
  token?: string,
  additionalHeaders?: AxiosRequestConfig["headers"]
) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
    ...additionalHeaders,
  }

  return {
    // for get request
    get: async () => {
      try {
        const response: AxiosResponse = await axios.get(endpoint)
        return response
      } catch (error) {
        return error
      }
    },

    // for post request
    post: async (data: any) => {
      try {
        const response: AxiosResponse = await axios.post(endpoint, data, {
          withCredentials: true,
          headers,
        })
        return response
      } catch (error) {
        return error
      }
    },

    // for update request
    put: async (data: any) => {
      try {
        const response: AxiosResponse = await axios.put(endpoint, data, {
          withCredentials: true,
          headers,
        })
        return response
      } catch (error) {
        return error
      }
    },

    // for delete request
    delete: async () => {
      try {
        const response: AxiosResponse = await axios.delete(endpoint, {
          headers,
        })
        return response
      } catch (error) {
        return error
      }
    },
  }
}
