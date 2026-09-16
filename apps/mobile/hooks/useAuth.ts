import { create } from 'zustand';

export interface UserProfile {
  name: string;
  email: string;
  walletAddress: string;
}

export interface AuthState {
  token: string | null;
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string, walletAddress?: string) => void;
  logout: () => void;
  updateWalletAddress: (walletAddress: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  login: (email: string, name: string = 'Eventopry User', walletAddress: string = 'GDEVENTOPRY...') => {
    set({
      token: 'mock-jwt-token-eventopry',
      user: { name, email, walletAddress },
      isAuthenticated: true,
    });
  },
  logout: () => {
    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  },
  updateWalletAddress: (walletAddress: string) => {
    set((state) => ({
      user: state.user
        ? { ...state.user, walletAddress }
        : { name: 'Eventopry User', email: '', walletAddress },
    }));
  },
}));

export const useAuth = () => {
  const store = useAuthStore();
  return store;
};
