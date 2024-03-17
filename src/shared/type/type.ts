export  interface formDataInter {
    email:string,
    password:string,
    
}
export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}