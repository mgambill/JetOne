/* globals localStorage */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export default {
  async login(email, pass) {
    if (localStorage.token) return true;

    const res = await pretendRequest(email, pass);

    if (res.authenticated) {
      localStorage.token = JSON.stringify({ email: res.email, role: res.role });
      return true;
    }

    return false;
  },

  getToken() {
    return (localStorage.token && JSON.parse(localStorage.token)) || null;
  },

  async logout() {
    await sleep(500);
    delete localStorage.token;
  },

  loggedIn() {
    return !!localStorage.token;
  },

  onChange() {}
};

async function pretendRequest(email, pass) {
  await sleep(500);
  if (pass === "password1") {
    if (["customer@example.com", "client@example.com", "admin@example.com"].includes(email)) {
      return {
        email,
        authenticated: true,
        token: "",
        role: email.split("@")[0]
      };
    }
  }
  return { authenticated: false };
}
