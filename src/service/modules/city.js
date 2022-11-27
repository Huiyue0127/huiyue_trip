import axRequest from "../request"

export function getCityAll() {
  return axRequest.get({
    url: "/city/all"
  })
}