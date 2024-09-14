export async function getProvinces() {
  const res = await fetch(`https://open.oapi.vn/location/provinces?page=0&size=100`)
  return res.json()
}

export async function getDistricts(provinceId: string) {
  const res = await fetch(`https://open.oapi.vn/location/districts?provinceId=${provinceId}&page=0&size=100`)
  return res.json()
}
export async  function getWards(districtId: string) {
  const res = await fetch(`https://open.oapi.vn/location/wards?districtId=${districtId}&page=0&size=100`)
  return res.json()
}