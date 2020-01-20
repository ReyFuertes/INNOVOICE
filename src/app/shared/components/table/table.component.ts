import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  teamName: string;
  totalCalls: number;
  connectedCalls: number;
  action?: string;
}

const sampleData: PeriodicElement[] = [
  { teamName: 'Hydrogen', totalCalls: 1, connectedCalls: 1, action: '' },
  { teamName: 'Helium', totalCalls: 4, connectedCalls: 3, action: '' },
  { teamName: 'Lithium', totalCalls: 6, connectedCalls:3, action: '' },
  { teamName: 'Beryllium', totalCalls: 9, connectedCalls:4, action: '' },
  { teamName: 'Boron', totalCalls: 10, connectedCalls: 4, action: '' },
  { teamName: 'Carbon', totalCalls: 12, connectedCalls: 5, action: '' },
  { teamName: 'Nitrogen', totalCalls: 14, connectedCalls: 6, action: '' },
  { teamName: 'Oxygen', totalCalls: 15, connectedCalls: 11, action: '' },
  { teamName: 'Fluorine', totalCalls: 18, connectedCalls: 11, action: '' },
  { teamName: 'Neon', totalCalls: 20, connectedCalls: 11, action: '' }
];
@Component({
  selector: 'iv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  public withCheckbox: boolean = true;
  @Input()
  public withButton: boolean = true;

  public displayedColumns: string[] = ['select', 'teamName', 'totalCalls', 'connectedCalls', 'actions'];
  public dataSource = new MatTableDataSource<PeriodicElement>(sampleData);
  public selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit(): void { }

  public splitToSentCase(str: string): string {
    return str.split(/(?=[A-Z])/).join(' ');
  }

  public get displayedCols(): string[] {
    return this.displayedColumns.slice(this.withCheckbox ? 1 : 0);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.teamName + 1}`;
  }
}
