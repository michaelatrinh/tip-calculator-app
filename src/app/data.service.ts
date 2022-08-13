import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}

  private initTipAmtPerPerson = new BehaviorSubject<number>(0);
  private initTotalAmtPerPerson = new BehaviorSubject<number>(0);

  newTipAmtPerPerson = this.initTipAmtPerPerson.asObservable();
  newTotalAmtPerPerson = this.initTotalAmtPerPerson.asObservable();

  getNewTipPP = (v: number) => this.initTipAmtPerPerson.next(v);
  getNewTotalPP = (v: number) => this.initTotalAmtPerPerson.next(v);
}
