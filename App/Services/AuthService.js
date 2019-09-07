export const login = (_context) => {
  _context.props.navigation.navigate('MainScreen', {unreadNotifications: 5});
};

export const logout = (_context) => {
  _context.props.navigation.navigate('Login');
};

