import { Component } from '@angular/core';
import { Tabela } from '../tables/table';
import { TableService } from '../tables/table.service';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css'],
})
export class ListTablesComponent {
  grupos: Tabela[] = [];
  loading: boolean = false;

  constructor(private service: TableService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(({ data }) => {
      let orderedTableByScore: Tabela[] = [];

      data.forEach((table) => {
        table.teams.sort((a: any, b: any) => {
          let pontosA = Number(a.pts);
          let pontosB = Number(b.pts);

          if (pontosA === pontosB) {
            let saldoGolsA = Number(a.gd);
            let saldoGolsB = Number(b.gd);

            return saldoGolsB - saldoGolsA;
          } else {
            return pontosB - pontosA;
          }
        });
        orderedTableByScore.push(table);
      });
      this.grupos = orderedTableByScore;
      this.loading = true;
    });
  }
}
