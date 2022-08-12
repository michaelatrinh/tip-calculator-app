import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
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

  displayMobileButtons = false;
  displayDesktopButtons = true;

  constructor(
    private data: DataService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.state = {
      billAmt: 0,
      tipAmt: 0,
      pplAmt: 0,
    };

    this.breakpointObserver
      .observe(['(max-width: 834px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.displayMobileButtons = true;
          this.displayDesktopButtons = false;
        } else {
          this.displayMobileButtons = false;
          this.displayDesktopButtons = true;
        }
      });
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
