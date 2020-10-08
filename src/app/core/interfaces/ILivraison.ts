import { ILivraisonProduit } from './ILivraisonProduit';
export interface ILivraison {
  id?: number;
  idCommande: number;
  dateLivraisonPrevu: Date;
  dateReception?: Date;
  idUtilisateurReception?: number;

  LivraisonProduits?: ILivraisonProduit[];
}
