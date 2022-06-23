import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendErrorsInterface } from "./backendErrors.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
