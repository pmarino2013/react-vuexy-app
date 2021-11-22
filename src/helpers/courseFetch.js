
const url = 'https://udemy-courses-coupon-code.p.rapidapi.com/api/udemy_course/javascript'
const api_key = process.env.REACT_APP_UDEMY_URL
// const options = {
//     method: 'GET',
//     url: 'https://udemy-courses-coupon-code.p.rapidapi.com/api/udemy_course/javascript',
//     headers: {
//       'x-rapidapi-host': 'udemy-courses-coupon-code.p.rapidapi.com',
//       'x-rapidapi-key': '1b67e2c736msha96cc59c1a1a7b1p17b5eajsn79692a75debf'
//     }
//   }

export const getCourses = async () => {

    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'udemy-courses-coupon-code.p.rapidapi.com',
            'x-rapidapi-key': `${api_key }`
          }
    })
    const data = await resp.json()

    return data

}

