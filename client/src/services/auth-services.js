import api from "../http/api";

class AuthService {
  static async login(email, password) {
    return api.post("/login", { email, password });
  }

  static async registration(email, password) {
    return api.post("/registration", { email, password });
  }

  static async logout() {
    return api.post("/logout");
  }

  static async refresh() {
    return api.get("/refresh");
  }
}

export default AuthService;
