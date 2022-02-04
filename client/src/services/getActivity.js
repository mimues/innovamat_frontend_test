import { API_URL } from 'services/settings'

export default async function getActivities ({id} = {}) {
    const apiURL = `${API_URL}/resources/${id}`

    try {
        const res = await fetch(apiURL)
        const activity = await res.json()
        return activity
    } catch (err) {
        return console.error(err)
    }
}