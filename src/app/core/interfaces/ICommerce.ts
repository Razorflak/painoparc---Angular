import { ICategorie } from './ICategorie';
import { ITheme } from './ITheme';
import { IProduit } from './IProduit';
import { ICommerce_JourNonLivraison } from './ICommerce_JourNonLivraison';
import { ICommerce_JourLivraisonHebdo } from './ICommerce_JourLivraisonHebdo';

export interface ICommerce{
  id?: number;
  nomCommerce: string;
  description?: string;
  emailCommande: string;
  Produits?: Array<IProduit>;
  Commerce_JourNonLivraisons?: ICommerce_JourNonLivraison[];
  Commerce_JourLivraisonHebdos?: ICommerce_JourLivraisonHebdo[];

  // Adresse
  numeroVoie?: string;
  libelleVoie?: string;
  BP?: string;
  codePostal?: string;
  commune?: string;
  pays?: string;

  Themes?: ITheme[];
  Categories?: ICategorie[];
  // Trick permettant d'ajouter des propriété à la volé
  // [key: string]: any;
}
