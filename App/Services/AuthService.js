import { removeItem, setItem, replaceItem } from './AsyncStorageService'

export const login = async (_context) => {
  const { success } = await replaceItem('@isAuthenticated', 'authenticated', false)
  return success ? _context.props.navigation.navigate('MainScreen', { unreadNotifications: 5 }) : alert('Please try again')
}

export const logout = async (_context) => {
  const { success } = await removeItem('@isAuthenticated')
  return success ? _context.props.navigation.navigate('Login') : alert('Please try again')
}

