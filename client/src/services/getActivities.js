import { API_URL } from 'services/settings'

const fromApiResponseToActivities = apiResponse => {
    if (Array.isArray(apiResponse)) {
        return apiResponse
    }
    return []
}

export default function getActivities ({keyword = 'talleres'} = {}) {
    const apiURL = `${API_URL}/${keyword}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToActivities)
      .catch(err => console.error(err))
}