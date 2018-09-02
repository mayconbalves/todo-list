export const apiKeyMlab = '6b7477mEkxRuqQhGgZwo0i2tbHnerl7a'
const url = 'https://api.mlab.com/api/1/databases/maycon-todo-list/collections/todo-list'

export default {
  URL: url,
  TODO_LIST: `${url}?apiKey=${apiKeyMlab}`
}
