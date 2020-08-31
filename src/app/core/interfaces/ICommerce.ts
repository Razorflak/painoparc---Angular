import { IProduit } from './IProduit';
import { ICommerce_JourNonLivraison } from './ICommerce_JourNonLivraison';
import { ICommerce_JourLivraisonHebdo } from './ICommerce_JourLivraisonHebdo';

export interface ICommerce{
  id?: number;
  nomCommerce: string;
  emailCommande: string;
  Produits?: Array<IProduit>;
  Commerce_JourNonLivraisons?: ICommerce_JourNonLivraison[];
  Commerce_JourLivraisonHebdos?: ICommerce_JourLivraisonHebdo[];
}
