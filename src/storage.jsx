const storage = window.localStorage

export const setItem = (key, value) => {
    storage.setItem(key, JSON.stringify(value))
}

export const getItem = (key, defaultValue) => {
    const value = storage.getItem(key)
    if (value == null) return defaultValue
    return JSON.parse(value)
}
