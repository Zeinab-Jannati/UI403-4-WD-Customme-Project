const API_AUTH_BASE_URL = 'http://127.0.0.1:8000/api/auth/';

const authService = {

    getAuthToken: () => {
        return localStorage.getItem('authToken');
    },

    setAuthToken: (token) => {
        localStorage.setItem('authToken', token);
    },

    removeAuthToken: () => {
        localStorage.removeItem('authToken');
    },

    fetchApi: async (url, options = {}) => {
        const token = authService.getAuthToken();
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (token) {
            headers['Authorization'] = `Token ${token}`;
        }

        const response = await fetch(url, {
            ...options,
            headers: headers,
        });

        return response;
    },

    login: async (username, password) => {
        try {
            const response = await fetch(`${API_AUTH_BASE_URL}login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                let errorMessage = 'ورود ناموفق. نام کاربری یا رمز عبور اشتباه است.';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.detail || errorData.non_field_errors?.[0] || errorMessage;
                } catch (jsonError) {
                    // اگر پاسخ سرور JSON نبود، از پیام پیش فرض استفاده کن
                    console.error("Failed to parse login error response as JSON:", jsonError);
                }
                throw new Error(errorMessage);
            }

            const data = await response.json();

            if (data.token) {
                authService.setAuthToken(data.token);
            } else {
                throw new Error("پاسخ سرور معتبر نیست: توکن 'token' یافت نشد.");
            }

            return data;
        } catch (error) {
            console.error("خطا در لاگین:", error);
            throw error;
        }
    },

    logout: async () => {
        try {
            const response = await authService.fetchApi(`${API_AUTH_BASE_URL}logout/`, {
                method: 'POST',
            });

            authService.removeAuthToken();

            if (!response.ok) { 
                let errorMessage = 'خطا در خروج از سیستم.';
                try {
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        const errorData = await response.json();
                        errorMessage = errorData.detail || errorMessage;
                    } else {
                        console.warn("Logout response was not JSON, status:", response.status);
                    }
                } catch (jsonError) {
                    console.error("Failed to parse logout error response as JSON:", jsonError);
                }
                throw new Error(errorMessage);
            }

            return true;
        } catch (error) {
            console.error("خطا در خروج:", error);
            authService.removeAuthToken(); 
            throw error;
        }
    },

    getCurrentUser: async () => {
        try {
            const response = await authService.fetchApi(`${API_AUTH_BASE_URL}profile/`);

            if (response.status === 401 || response.status === 403) {
                authService.removeAuthToken();
                return { isAuthenticated: false, userProfile: null };
            }

            if (!response.ok) {
                let errorMessage = `خطا در دریافت پروفایل کاربر: ${response.status} ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.detail || errorMessage;
                } catch (jsonError) {
                    console.error("Failed to parse profile error response as JSON:", jsonError);
                }
                throw new Error(errorMessage);
            }

            const userProfileData = await response.json();
            return { isAuthenticated: true, userProfile: userProfileData };

        } catch (error) {
            console.error("مشکل در دریافت اطلاعات کاربر فعلی:", error);
            authService.removeAuthToken();
            return { isAuthenticated: false, userProfile: null };
        }
    },
};

export default authService;