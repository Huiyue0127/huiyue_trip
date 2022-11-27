import axRequest from "../request"

export function getDetailInfos(houseId) {
  return axRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}