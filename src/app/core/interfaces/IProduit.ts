import { ICommerce } from './ICommerce';
import { ICommande } from './ICommande';
import { ICategorie } from './ICategorie';
import { IPanier_Produit } from './IPanier_Produit';
export interface IProduit{
  id?: number;
  idCommerce: number;
  idCategorie: number;
  nom: string;
  description: string;
  prix: number;
  stock: number;
  commission: number;
  isAvailable: boolean;
  delaiProduction: number;
  imgFileName?: string[];
  Panier_Produit?: IPanier_Produit;
  Commandes?: Array<ICommande>;
  Categorie?: ICategorie;
  Commerce?: ICommerce;

  dateLivraisonPossible?: Date;
  dateLivraison?: Date;
}
