export interface UserInterface {
  id: string;
  image: string,
  name: string,
  rolName: string,
  isAdmin?: boolean;
  isGuest?: boolean;
}
