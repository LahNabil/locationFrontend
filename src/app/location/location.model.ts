import { User } from "../login-form/login.model";
import { Voiture } from "../voiture/voiture.model";

export class Location {
    id: number |undefined;
    date_debut: Date | undefined;
    date_fin: Date | undefined;
    montant: number | undefined;
    voiture: Voiture | undefined;
    user : User | undefined;
}