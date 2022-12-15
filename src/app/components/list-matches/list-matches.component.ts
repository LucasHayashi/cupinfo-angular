import { Component } from '@angular/core';
import { Match } from '../matches/match';
import { MatchService } from '../matches/match.service';
import * as moment from 'moment-timezone';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css'],
})
export class ListMatchesComponent {

  partidas: Match[] = [];
  loading: boolean = false;

  constructor(private service: MatchService,
    private router: Router,
    private scroller: ViewportScroller) { }

  ngOnInit(): void {
    moment.locale("pt-BR")
    var currTime = moment();
    var qatarTz = currTime.tz('Asia/Qatar').utcOffset();
    var localTz = currTime.tz(moment.tz.guess()).utcOffset();
    var diffInMinutes = qatarTz - localTz;

    this.service.listar().subscribe(({ data }) => {
      let matches = data.sort((matchA, matchB) => {
        return new Date(matchA.local_date).getTime() - new Date(matchB.local_date).getTime();
      }).map((match) => {
        let matchDate = moment(new Date(match.local_date))
          .subtract(diffInMinutes, 'minutes')
          .format('DD/MM/YYYY H:mm');

        let tempo: any = {
          notstarted: "Não iniciado",
          h1: "Primeiro tempo",
          hf: "Intervalo",
          h2: "Segundo tempo",
          finished: "Terminou"
        };

        let iconwaitMatchEnd = "assets/img/waiting-for-winner.png";

        let orderedMatches = {
          id: match._id,
          home_flag: match.home_flag ? match.home_flag : iconwaitMatchEnd,
          home_team_en: match.home_team_en,
          home_score: match.home_score,
          away_score: match.away_score,
          local_date: matchDate,
          away_team_en: match.away_team_en,
          away_flag: match.away_flag ? match.away_flag : iconwaitMatchEnd,
          finished: match.finished,
          time_elapsed: tempo[`${match.time_elapsed}`]
        }

        return orderedMatches;
      });

      this.partidas = matches;
      this.loading = true;
      this.scrollToNextMatch();
    });
  }

  scrollToNextMatch() {
    let nextMatch = this.partidas.find( partida => partida.finished == "FALSE" );

    if ( nextMatch ) {
      let el = document.getElementById(nextMatch.id);

      setTimeout(() => {
        this.scroller.scrollToAnchor(nextMatch?.id as string)
      }, 1500);

    }
  }
}
