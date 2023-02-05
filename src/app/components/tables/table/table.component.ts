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
            }
        ]
    }
    displayedColumns = ['name_en', 'pts', 'w', 'l', 'd', 'gf', 'ga', 'gd'];
}
