type UserPermissions = {
  [username: string]: {
    permission: string[];
  }
};

const users: UserPermissions = {
  'user_1': {
    permission: [
      'import',
      'export',
      'add_user'
    ]
  },
  'user_2': {
    permission: [
      'export',
    ]
  }
};

export function getUserPermission(username: string): string[] {
  if (users[username]) {
    return users[username].permission;
  }

  return [];
}
