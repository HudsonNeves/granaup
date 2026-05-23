const storagePrefix = 'granaup'

export function getStorageItem(key, fallback = null) {
  const item = localStorage.getItem(`${storagePrefix}:${key}`)

  if (!item) {
    return fallback
  }

  try {
    return JSON.parse(item)
  } catch {
    return fallback
  }
}

export function setStorageItem(key, value) {
  localStorage.setItem(`${storagePrefix}:${key}`, JSON.stringify(value))
}

export function removeStorageItem(key) {
  localStorage.removeItem(`${storagePrefix}:${key}`)
}
