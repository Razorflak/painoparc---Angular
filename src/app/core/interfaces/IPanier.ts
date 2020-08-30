import { IProduit } from './IProduit';
export interface IPanier {
  id?: number;
  idUser: number;
  nom: string;
  dateCreation: Date;
  dateMiseAJour: Date;
  isFavori: boolean;
  Produits?: Array<IProduit>;
}
