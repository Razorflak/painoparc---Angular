export interface ICommande_Produit{
	nbrProduit: number;
	nom: String;
	description: string;
	prix: number;
	commission: number;
	CommandeId?: number;
	ProduitId?: number;

}