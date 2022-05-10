const typeText = `type Query {
  userListPage: UserListPageResponse!
}

type UserListPageResponse {
  users: [User!]!
}

type User {
  id: ID!
  name: String
}`;

export default typeText;
