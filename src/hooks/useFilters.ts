// ✅ cleaner and more conventional 
// function processUsers(users: User[]): FormattedUser[] {
//   return users
//     .filter(user => user.age >= 18)
//     .map(user => ({
//       name: user.name.toUpperCase(),
//       age: user.age,
//       isAdult: true
//     }));
// }

// ✅ cleaner and more conventional 
// const isAdult = (user: User): boolean => user.age >= 18;

// const formatUser = (user: User): FormattedUser => ({
  // name: user.name.toUpperCase(),
  // age: user.age,
  // isAdult: true
// });

// function processUsers(users: User[]): FormattedUser[] {
  // return users.filter(isAdult).map(formatUser);
// }

// ✅ cleaner and more conventional 
// import { useQuery } from 'react-query';

// function PostList() {
//   const { data: posts, isLoading } = useQuery('posts', fetchPosts);

//   if (isLoading) return <div>Loading...</div>;
//   // return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>;
// }

// // ✅ cleaner code preserving the existing behavior
// async function fetchUserData(userId: string) {
//   const cachedData = await cacheManager.get(`user_${userId}`);
//   if (cachedData) {
//     return cachedData;
//   }

//   const userData = await api.fetchUser(userId);
//   await cacheManager.set(`user_${userId}`, userData, { expiresIn: '1h' });
//   return userData;
// }
// This refactor maintains the caching behavior while potentially improving it by using a more sophisticated cache manager with expiration.