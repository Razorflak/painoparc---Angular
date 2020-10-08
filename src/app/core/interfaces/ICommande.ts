import { ILivraison } from './ILivraison';
import { IUser } from './IUser';
import { ICommande_Produit } from './ICommande_Produit';
export interface ICommande {
  id?: number;
  idUser: number;
  dateCommande: Date;
  dateLivraisonPrevu: Date;
  dateReception: Date;
  prix: number;
  commission: number;

  // En fonction des retour de sequelize, les array qui peuvent venir avec les Commande
  Livraisons: ILivraison;
  User?: IUser;
}
