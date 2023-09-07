import { Component, Input } from '@angular/core';
import { Location, Match, StageName, Status } from '../match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent {
  @Input() partida: Match = {
    id: 1,
    venue: 'Al Bayt Stadium',
    location: Location.AlKhor,
    status: Status.Completed,
    attendance: '67372',
    stage_name: StageName.FirstStage,
    home_team_country: 'QAT',
    away_team_country: 'ECU',
    datetime: new Date('2022-11-20T16:00:00Z'),
    winner: 'Ecuador',
    winner_code: 'ECU',
    home_team: {
      country: 'QAT',
      name: 'Qatar',
      goals: 0,
      penalties: 0,
    },
    away_team: {
      country: 'ECU',
      name: 'Ecuador',
      goals: 2,
      penalties: 0,
    },
    last_checked_at: new Date('2023-01-01T10:16:03Z'),
    last_changed_at: new Date('2023-01-01T10:16:03Z'),
  };
}
