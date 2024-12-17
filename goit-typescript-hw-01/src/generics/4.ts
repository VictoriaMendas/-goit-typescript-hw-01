interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
}
const userData: User = {
  name: "John",
  surname: "Doe",
  email: "user@mail.com",
  password: "password123",
};
function createOrUpdateUser(user: User, updates: Partial<User>) {
  return { ...user, ...updates };
}

const updareUser = createOrUpdateUser(userData, {
  email: "newuser@mail.com",
  name: "Colyn",
});
