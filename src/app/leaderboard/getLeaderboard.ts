import axios from 'axios'

export const getLeaderboard = async (): Promise<any> =>
  axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/leaderboard`).then((res) => res.data)

export const searchUsers = async (query: string): Promise<any> => {
  if (query && query.length) {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/search-users/?query=${query}`)
      .then((res) => res.data)
  }
}

export const getUserPlacing = async (user_id: string) => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_HOST}/user-placing/?user_id=${user_id}`)
    .then((res) => res.data)
}
