import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tip-output',
  templateUrl: './tip-output.component.html',
  styleUrls: ['./tip-output.component.scss'],
})
export class TipOutputComponent implements OnInit {
  tipAmountPerPerson: number = 0;
  tipAmountTotalPerPerson: number = 0;
  @Output() resetClick = new EventEmitter();

  displayDesktopOutputs = true;

  constructor(
    private data: DataService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe(['(max-width: 834px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.displayDesktopOutputs = false;
        } else {
          this.displayDesktopOutputs = true;
        }
      });
  }

  ngOnInit(): void {
    this.data.newTipAmtPerPerson.subscribe((v) => {
      let fixedV = v.toFixed(2);
      let numV = Number(fixedV);
      this.tipAmountPerPerson = numV;
    });
    this.data.newTotalAmtPerPerson.subscribe((v) => {
      let fixedV = v.toFixed(2);
      let numV = Number(fixedV);
      this.tipAmountTotalPerPerson = numV;
    });
  }

  onResetClick = () => this.resetClick.emit();
}
