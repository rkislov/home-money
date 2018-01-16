export class AuthService {

    private isAuthentiticated = false;

    login() {
        this.isAuthentiticated = true;
    }

    logout() {
        this.isAuthentiticated = false;
        window.localStorage.clear();
    }

    isLoggedIn(): boolean {
        return this.isAuthentiticated;
    }
}