import api from "../http/api";

class UserService {
  static async fetchUsers() {
    return api.get("/users").then((response) => response.data);
  }
}

export default UserService;
