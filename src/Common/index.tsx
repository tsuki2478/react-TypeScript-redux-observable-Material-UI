// import 'whatwg-fetch'

// const dataToString = (data: object) => {
//   const array: any = []
//   let index = 0
//   for (const item in data) {
//     if (data[item]) {
//       array[index++] = [item, data[item]]
//     }
//   }
//   return new URLSearchParams(array).toString()
// }

// const blogFetch = (
//   url: string,
//   data?: object,
//   method: string = 'GET'
// ): Promise<Response> => {
//   let initObj = {}
//   url = location.origin + url
//   let dataStr = ''
//   if (data) {
//     dataStr = dataToString(data)
//   }
//   if (method === 'GET') {
//     if (data) {
//       if (url.indexOf('?') > -1) {
//         url += '&' + dataStr
//       } else {
//         url += '?' + dataStr
//       }
//     }
//   } else {
//     const authCode = localStorage.getItem('authCode')
//     initObj = {
//       body: JSON.stringify(data),
//       headers: new Headers({
//         Accept: 'application/json',
//         Authorization: 'Bearer'+authCode,
//         'Content-Type': 'application/json'
//       }),
//       method
//     }
//   }
//   return fetch(url, initObj)
//     .then(response => response.json())
//     .then(response => {
//       if (response.message) {
//         if (response.type === 'error') {
//           message.warning(response.message)
//         } else {
//           message.success(response.message)
//         }
//       }
//       return response
//     })
// }
// export { blogFetch }
