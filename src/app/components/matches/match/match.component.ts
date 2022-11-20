import { Component, Input } from '@angular/core';
import { Match } from '../match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent {
  @Input() partidas: Match = {
    away_score: 0,
    home_score: 0,
    local_date: '11/21/2022 19:00',
    home_team_en: 'Senegal',
    away_team_en: 'Nederlands',
    home_flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/125px-Flag_of_Senegal.svg.png',
    away_flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png',
    finished: 'TRUE',
    time_elapsed: 'finished'
  };
}
