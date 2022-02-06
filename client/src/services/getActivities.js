import { API_URL } from 'services/settings'

const fromApiResponseToActivities = apiResponse => {
    console.log('apiResponse', apiResponse)
    if (Array.isArray(apiResponse)) {
        return apiResponse
    }
    return []
}

export default async function getActivities ({dynamic = 'talleres'} = {}) {
    const apiURL = `${API_URL}/${dynamic}`

    try {
        const res = await fetch(apiURL)
        const apiResponse = await res.json()
        return fromApiResponseToActivities(apiResponse)
    } catch (err) {
        return console.error(err)
    }
}