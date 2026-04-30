import { Component, signal, OnInit } from '@angular/core';
import { GridModule, PageService, PageSettingsModel, GroupService,
  GroupSettingsModel, AggregateService
 } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import {ReturnType} from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  imports: [GridModule],
  providers: [PageService, GroupService, AggregateService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('my-angular-app');
  public data?: object[];
  public pageSettings?: PageSettingsModel;
  public groupOptions?: GroupSettingsModel;
  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 5 };
    this.groupOptions = {columns: ['ShipCountry'], showDropArea: false};
  }
  public customAggregateFn = (customData: ReturnType) => {
    return customData.result.filter((item: object) => (item as itemType)
    ['ShipCountry'] === 'Germany').length;
  }
}
interface itemType {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  OrderDate: Date;
  ShipName: string;
  ShipCountry: string;
}

