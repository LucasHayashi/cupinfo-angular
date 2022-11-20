import { Component, Input } from '@angular/core';
import { Tabela } from '../table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() grupos: Tabela = {
          "_id": "629c9c7c5749c4077500eaca",
          "group": "A",
          "teams": [
              {
                  "team_id": "1",
                  "mp": "0",
                  "w": "0",
                  "l": "0",
                  "pts": "0",
                  "gf": "0",
                  "ga": "0",
                  "gd": "0",
                  "d": "0",
                  "name_fa": "قطر",
                  "name_en": "Qatar",
                  "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/125px-Flag_of_Qatar.svg.png"
              },
              {
                  "team_id": "2",
                  "mp": "0",
                  "w": "0",
                  "l": "0",
                  "pts": "0",
                  "gf": "0",
                  "ga": "0",
                  "gd": "0",
                  "d": "0",
                  "name_fa": "اکوادور",
                  "name_en": "Ecuador",
                  "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/125px-Flag_of_Ecuador.svg.png"
              },
              {
                  "team_id": "3",
                  "mp": "0",
                  "w": "0",
                  "l": "0",
                  "pts": "0",
                  "gf": "0",
                  "ga": "0",
                  "gd": "0",
                  "d": "0",
                  "name_fa": "سنگال",
                  "name_en": "Senegal",
                  "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/125px-Flag_of_Senegal.svg.png"
              },
              {
                  "team_id": "4",
                  "mp": "0",
                  "w": "0",
                  "l": "0",
                  "pts": "0",
                  "gf": "0",
                  "ga": "0",
                  "gd": "0",
                  "d": "0",
                  "name_fa": "هلند",
                  "name_en": "Nederlands",
                  "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png"
              }
          ]
      }
  displayedColumns = ['name_en', 'pts', 'mp', 'w', 'l', 'd', 'gf', 'ga', 'gd'];
}
