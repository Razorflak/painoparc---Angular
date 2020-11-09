import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-folder-img',
  templateUrl: './carrousel-folder-img.component.html',
  styleUrls: ['./carrousel-folder-img.component.scss']
})
export class CarrouselFolderImgComponent implements OnInit {

  constructor() { }

  @Input() lstPathImg: Array<string>;

  ngOnInit(): void {

  }


}
