import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { IProduct } from '../../models/iproduct';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id!: number;
  name!: string;
  product: IProduct | null = null;
  idsArr: number[];
  currentIdIndex: number = 0;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _StaticProductsService: StaticProductsService,
    private _location: Location,
    private _router: Router
  ) {
    this.idsArr = this._StaticProductsService.mapProductsToIds();
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.product = this._StaticProductsService.getProductById(this.id);
    });
  }
  goBack() {
    this._location.back();
  }
  next() {
    this.currentIdIndex = this.idsArr.findIndex((id) => id == this.id);
    if (this.currentIdIndex != this.idsArr.length - 1) {
      const nextProductId = this.idsArr[this.currentIdIndex + 1];
      const nextProductName =
        this._StaticProductsService
          .getProductById(nextProductId)
          ?.name.toLowerCase() || '';
      this._router.navigateByUrl(
        `/details/${nextProductId}/${nextProductName}`
      );
    }
  }
  prev() {
    this.currentIdIndex = this.idsArr.findIndex((id) => id == this.id);
    if (this.currentIdIndex != 0) {
      const prevProductId = this.idsArr[this.currentIdIndex - 1];
      const prevProductName =
        this._StaticProductsService
          .getProductById(prevProductId)
          ?.name.toLowerCase() || '';
      this._router.navigateByUrl(
        `/details/${prevProductId}/${prevProductName}`
      );
    }
  }
}
