import { Component } from '@angular/core';
import { Group, Groups, Team } from '../tables/table';
import { TableService } from '../tables/table.service';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css'],
})
export class ListTablesComponent {
  grupos: Group[] = [];
  loading: boolean = false;

  constructor(private service: TableService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((data: Groups) => {
      this.grupos = data.groups;
      this.loading = true;
    });
  }
}
