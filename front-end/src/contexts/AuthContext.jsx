import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); 
    const [userProfile, setUserProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            setIsLoading(true); 
            try {
                const token = authService.getAuthToken();
                if (token) {
                    const { isAuthenticated: authenticated, userProfile: profile } = await authService.getCurrentUser();
                    setIsAuthenticated(authenticated);
                    setUserProfile(profile);
                } else {
                    setIsAuthenticated(false);
                    setUserProfile(null);
                }
            } catch (error) {
                console.error("خطا در بررسی وضعیت احراز هویت اولیه:", error);
                setIsAuthenticated(false);
                setUserProfile(null);
                authService.removeAuthToken();
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const login = async (username, password) => {
        setIsLoading(true);
        try {
            const loginResponse = await authService.login(username, password);
            
            const { isAuthenticated: authenticated, userProfile: profile } = await authService.getCurrentUser();
            
            setIsAuthenticated(authenticated);
            setUserProfile(profile);
            
            setIsLoading(false); 
            return loginResponse; 
        } catch (error) {
            console.error("خطا در تابع login در AuthContext:", error);
            setIsAuthenticated(false);
            setUserProfile(null);
            setIsLoading(false);
            throw error;
        }
    };

    const logout = async () => {
        setIsLoading(true);
        try {
            await authService.logout(); 
            setIsAuthenticated(false);
            setUserProfile(null);
            setIsLoading(false);
        } catch (error) {
            console.error("خطا در تابع logout در AuthContext:", error);
            setIsAuthenticated(false);
            setUserProfile(null);
            setIsLoading(false);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userProfile, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};