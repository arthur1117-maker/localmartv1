"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authApi, saveTokens, clearTokens, getToken } from "@/lib/api";
import type { UserRole } from "@/lib/types";

export interface AuthUser {
  id:       string;
  name:     string;
  email:    string;
  role:     UserRole;
  phone?:   string;
  aimag?:   string;
  verified: boolean;
  avatar:   string;
}

export interface RegisterData {
  name:     string;
  email:    string;
  password: string;
  role:     UserRole;
  phone?:   string;
  aimag?:   string;
}

interface AuthCtx {
  user:       AuthUser | null;
  isLoggedIn: boolean;
  loading:    boolean;
  login:      (email: string, password: string) => Promise<boolean>;
  register:   (data: RegisterData) => Promise<boolean>;
  logout:     () => void;
}

const AuthContext = createContext<AuthCtx>({
  user: null, isLoggedIn: false, loading: true,
  login: async () => false,
  register: async () => false,
  logout: () => {},
});

function mapUser(u: {
  id: string; name: string; email: string; role: string;
  phone?: string; aimag?: string; verified: boolean; avatar?: string;
}): AuthUser {
  return {
    id:       u.id,
    name:     u.name,
    email:    u.email,
    role:     u.role.toLowerCase() as UserRole,
    phone:    u.phone,
    aimag:    u.aimag,
    verified: u.verified ?? false,
    avatar:   u.avatar ?? (u.role === "seller" ? "👨‍🌾" : u.role === "admin" ? "⚙️" : "👤"),
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user,    setUser]    = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on page load
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    authApi.me()
      .then(u => setUser(mapUser(u)))
      .catch(() => clearTokens())
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await authApi.login(email, password);
      saveTokens(res.accessToken, res.refreshToken);
      setUser(mapUser(res.user));
      return true;
    } catch {
      return false;
    }
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    try {
      const res = await authApi.register({
        name:     data.name,
        email:    data.email,
        password: data.password,
        role:     data.role ?? "buyer",
        phone:    data.phone,
        aimag:    data.aimag,
      });
      saveTokens(res.accessToken, res.refreshToken);
      setUser(mapUser(res.user));
      return true;
    } catch {
      return false;
    }
  };

  const logout = () => {
    clearTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
