import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tip-input',
  templateUrl: './tip-input.component.html',
  styleUrls: ['./tip-input.component.scss'],
})
export class TipInputComponent {
  state: {
    billAmt: number;
    tipAmt: number;
    pplAmt: number;
  };

  constructor(private data: DataService) {
    this.state = {
      billAmt: 0,
      tipAmt: 0,
      pplAmt: 0,
    };
  }

  getBill = (v: string) => {
    let billInput: number = Number(v);
    this.state.billAmt = billInput;
  };

  getTipPercent = (t: any) => {
    let tipPercent: number = t / 100;
    this.state.tipAmt = this.state.billAmt * tipPercent;
  };

  getNumPpl = (p: string) => {
    let numOfPeople: number = Number(p);
    this.state.pplAmt = numOfPeople;
  };

  getTotals = () => {
    let tipAfterSplit = this.state.tipAmt / this.state.pplAmt;
    let billAfterSplit =
      (this.state.billAmt + this.state.tipAmt) / this.state.pplAmt;

    this.data.getNewTipPP(tipAfterSplit);
    this.data.getNewTotalPP(billAfterSplit);
  };
}
