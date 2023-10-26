import Cookies from 'js-cookie'

const TokenKey = 'token'
const RoleKey = 'roles'
const nameKey = 'name'
const avatarKey = 'avatar'

export function getToken() {
  return 'test';//Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRoles() {
  return 'admin';//Cookies.get(RoleKey)
}

export function setRoles(role) {
  return Cookies.set(RoleKey, role)
}

export function removeRoles() {
  return Cookies.remove(RoleKey)
}

export function getName() {
  return  'test';//Cookies.get(nameKey)
}

export function setName(name) {
  return Cookies.set(nameKey, name)
}

export function removeName() {
  return Cookies.remove(nameKey)
}

export function getAvatar() {
  return null;//Cookies.get(avatarKey)
}

export function setAvatar(avatar) {
  return Cookies.set(avatarKey, avatar)
}

export function removeAvatar() {
  return Cookies.remove(avatarKey)
}
