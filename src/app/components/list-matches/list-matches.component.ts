import { Component } from '@angular/core';
import { Match } from '../matches/match';
import { MatchService } from '../matches/match.service';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css']
})
export class ListMatchesComponent {
  partidas: Match[] = [];
  loading: boolean = false;

  constructor(private service: MatchService) { }

  ngOnInit(): void {
    moment.locale("pt-BR")
    var currTime = moment();
    var qatarTz = currTime.tz('Asia/Qatar').utcOffset();
    var localTz = currTime.tz(moment.tz.guess()).utcOffset();
    var diffInMinutes = qatarTz - localTz;
    
    this.service.listar().subscribe((matchs) => {
      let matches = matchs.sort((matchA, matchB) => {
        return new Date(matchA.local_date).getTime() - new Date(matchB.local_date).getTime();
      }).map((match) => {
        let matchDate = moment(new Date(match.local_date))
                        .subtract(diffInMinutes, 'minutes')
                        .format('DD/MM/YYYY H:mm');

        let tempo:any = {
          notstarted: "Não iniciado" ,
          h1: "Primeiro tempo",
          hf: "Intervalo",
          h2: "Segundo tempo",
          finished: "Terminou"
        };

        let orderedMatches = {
          home_flag: match.home_flag,
          home_team_en: match.home_team_en,
          home_score: match.home_score,
          away_score: match.away_score,
          local_date: matchDate,
          away_team_en: match.away_team_en,
          away_flag: match.away_flag,
          finished: match.finished,
          time_elapsed: tempo[`${match.time_elapsed}`]
        }

        return orderedMatches;
      });

      this.partidas = matches;
      this.loading = true;
    });
  }

}
