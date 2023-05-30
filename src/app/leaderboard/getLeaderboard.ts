import axios from 'axios'

export const getLeaderboard = async (): Promise<any> =>
  axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/leaderboard`).then((res) => res.data)
