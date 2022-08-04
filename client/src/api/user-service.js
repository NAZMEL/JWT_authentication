import api from "./api";

class UserService {
  static async fetchUsers() {
    return api.get("/users");
  }
}

export default UserService;
