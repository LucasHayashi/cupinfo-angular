import { Component, Input } from '@angular/core';
import { Group } from '../table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() grupo: Group = {
    letter: 'A',
    teams: [
      {
        country: 'QAT',
        name: 'Qatar',
        group_letter: 'A',
        group_points: 0,
        wins: 0,
        draws: 0,
        losses: 3,
        games_played: 3,
        goals_for: 1,
        goals_against: 7,
        goal_differential: -6,
      },
      {
        country: 'NED',
        name: 'Netherlands',
        group_letter: 'A',
        group_points: 10,
        wins: 3,
        draws: 1,
        losses: 1,
        games_played: 5,
        goals_for: 10,
        goals_against: 4,
        goal_differential: 6,
      },
      {
        country: 'SEN',
        name: 'Senegal',
        group_letter: 'A',
        group_points: 6,
        wins: 2,
        draws: 0,
        losses: 2,
        games_played: 4,
        goals_for: 5,
        goals_against: 7,
        goal_differential: -2,
      },
      {
        country: 'ECU',
        name: 'Ecuador',
        group_letter: 'A',
        group_points: 4,
        wins: 1,
        draws: 1,
        losses: 1,
        games_played: 3,
        goals_for: 4,
        goals_against: 3,
        goal_differential: 1,
      },
    ],
  };

  displayedColumns = [
    'name',
    'group_points',
    'wins',
    'losses',
    'draws',
    'goals_for',
    'goals_against',
    'goal_differential',
  ];
}
