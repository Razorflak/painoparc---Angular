import { CommerceService } from 'src/app/core/services/commerce.service';
import { Component, ElementRef, Input, OnInit, ViewChild, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrousel-folder-img',
  templateUrl: './carrousel-folder-img.component.html',
  styleUrls: ['./carrousel-folder-img.component.scss']
})
export class CarrouselFolderImgComponent implements OnInit {

  constructor(private commerceSvc: CommerceService) { }

  @Input() lstPathImg: Array<string>;
  @Output() needRefresh = new EventEmitter();
  currentIndexImg: number;

  @ViewChild('parent') parentRef: ElementRef<HTMLElement>;
  @ViewChild('fixedContainer') fixedContainerRef: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.currentIndexImg = 0;
  }

  onClickPreviousImg(): void {
    if (this.currentIndexImg > 0){
      this.currentIndexImg --;
      this.applyTranslate();
    }
  }

  onClickNextImg(): void{
    if (this.currentIndexImg < this.parentRef.nativeElement.children.length - 1){
      this.currentIndexImg ++;
      this.applyTranslate();
    }
  }

  applyTranslate(): void{
    let xTranslate = 0;
    const listElem = this.parentRef.nativeElement.children;
    for ( let i = 0 ; i < this.currentIndexImg ; i++){
      xTranslate += listElem[i].clientWidth + 20;
    }
    if (this.parentRef.nativeElement.clientWidth - this.fixedContainerRef.nativeElement.clientWidth - xTranslate < 0){
      xTranslate = this.parentRef.nativeElement.clientWidth - this.fixedContainerRef.nativeElement.clientWidth;
      this.currentIndexImg --;
    }
    this.parentRef.nativeElement.style.cssText = `transform: translate(${-xTranslate}px);`;
  }

  onClickDeleteImg(img: string): void {
    // TODO appel de l'API pour changer le nom de l'image et sur le retour demander un relaod au composant parent
    this.commerceSvc.deleteImgCommerce(img).then(() => {
      this.needRefresh.emit();
      this.currentIndexImg = 0;
      this.applyTranslate();
    });
  }

  onClickSetMainImg(img: string): void {
    this.commerceSvc.setMainImgCommerce(img).then(() => {
      this.needRefresh.emit();
      this.currentIndexImg = 0;
      this.applyTranslate();
    });
  }

  getIsMain(img): boolean{
    if (!img){
      return;
    }
    const imgName: string = img.split('/')[img.split('/').length - 1];
    return imgName.indexOf('main') === 0;
  }
}
