import en_us from './en_us'
import ja from './ja'

let s = en_us

const language = (
    (typeof window !== 'undefined' &&
        (window.localStorage.getItem('polis-language') ||
            window.navigator.userLanguage ||
            window.navigator.language)) ||
    'en'
).toLowerCase()

if (language.indexOf('ja') === 0) {
    s = ja
}

function f(key, placeholders) {
    if (typeof s[key] === 'undefined') {
        return key
    }
    let str = s[key]
    if (placeholders) {
        Object.entries(placeholders).forEach(([k, v]) => {
            str = str.replace(`{${k}}`, v)
        })
    }
    return str
}

export default f
