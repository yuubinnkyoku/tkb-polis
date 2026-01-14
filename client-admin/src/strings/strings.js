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

function f(key) {
  // strip whitespace from key
  key = (key || '').replace(/\s+$/, '').replace(/^\s+/, '')
  if (typeof s[key] === 'undefined') {
    return key
  }
  return s[key]
}

export default f
