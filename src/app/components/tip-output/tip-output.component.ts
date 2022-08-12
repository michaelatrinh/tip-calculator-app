import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.newTipAmtPerPerson.subscribe(
      (v) => (this.tipAmountPerPerson = v)
    );
    this.data.newTotalAmtPerPerson.subscribe(
      (v) => (this.tipAmountTotalPerPerson = v)
    );
  }

  onResetClick = () => this.resetClick.emit();
}
