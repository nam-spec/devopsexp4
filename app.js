function login(user) {
 if (user.type === "student") {
 return "Welcome Student";
 }
 return "Access Denied";
}
module.exports = login;
