import { API_URL } from 'services/settings'

const fromApiResponseToActivities = apiResponse => {
    if (Array.isArray(apiResponse)) {
        return apiResponse
    }
    return []
}

export default async function getActivities ({keyword = 'talleres'} = {}) {
    const apiURL = `${API_URL}/${keyword}`

    try {
        const res = await fetch(apiURL)
        const apiResponse = await res.json()
        return fromApiResponseToActivities(apiResponse)
    } catch (err) {
        return console.error(err)
    }
}