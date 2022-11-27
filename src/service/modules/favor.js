import axRequest from "../request"

export function getFavorList(){
  return axRequest.get({
    url: "/favor/list"
  })
}

export function getFavorHistory(){
  return axRequest.get({
    url: "/favor/history"
  })
}