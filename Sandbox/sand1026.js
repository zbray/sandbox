async function fetchUser(id) {
  // pretend to fetch a user from a database or API
  return { id, name: "Alice" };
}


const users = [1, 2, 3];

for (const id of users) {
  const user = await fetchUser(id);
  console.log(user);
}
