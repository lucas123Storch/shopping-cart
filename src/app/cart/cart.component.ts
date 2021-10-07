import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as under from '../../api/abaixo10.json';
import * as over from '../../api/acima10.json';
import { Items, ItemsEntity } from '../models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  type: any;

  data: Items

  constructor(
    private routeAc: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeAc.params.subscribe((data) => {
      this.type = data["type"];
      if (this.type == 1) {
        this.loadUnder()
      }else if(this.type == 2){
        this.loadOver()
      }
    });
  }
  loadUnder(){
    this.data = under
  }

  loadOver(){
    this.data = over   
  }

}
