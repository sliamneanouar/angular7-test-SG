import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CurrencyService } from "../../services/currencyServices/currency.service";
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-list-curency',
  templateUrl: './list-curency.component.html',
  styleUrls: ['./list-curency.component.less']
})
export class ListCurencyComponent implements OnInit {
  public _listCurrency: Array<any> = [];
  public _listCurrencyForFIlter: Array<any> = [];
  public _listCurrencyForPagination: Array<any> = [];
  public _searchValue: string = '';
  public _offset: number = 0;
  public _page: number = 15;
  constructor(private _currencyService: CurrencyService, public router: Router) {
        this.initCurrencyDataFromAPI(this._offset, this._page);
  }

  ngOnInit() {
  }

  public initCurrencyDataFromAPI(offset, page): void {
    this._currencyService.getCurrency().subscribe((data: any) => {
        this._listCurrency = data;
        this._listCurrencyForFIlter = data;
        this._offset = offset;
        this._page = page;
        this._listCurrencyForPagination = data.slice(this._offset, this._page);
    },
    error => {
      console.log('error when call listCUrrency rest service !');
    },() => null);
  }

  public updatePaginationCallback(event: any): void {
    this.initCurrencyDataFromAPI(event.pageSize * event.pageIndex , (event.pageSize * event.pageIndex) + event.pageSize);
  }

  public updateSearchValue(valueSearch): void {
    if(valueSearch !== '' && valueSearch !==' ') {
      this._listCurrency = this._listCurrencyForFIlter.filter(item => item.name.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1);
      this._listCurrencyForPagination = this._listCurrency.slice(this._offset, this._page);
    }
  }

}
