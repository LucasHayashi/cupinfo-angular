import { Component } from '@angular/core';
import { Match } from '../matches/match';
import { MatchService } from '../matches/match.service';

export interface Stages {
  label: string;
  partidas: Match[]
}

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css'],
})

export class ListMatchesComponent {
  partidas: Match[] = [];
  stages: Stages[] = [];
  final: Match[] = [];
  loading: boolean = false;

  constructor(
    private _matchService: MatchService,
  ) { }

  ngOnInit(): void {
    this._matchService.listar().subscribe((data: Match[]) => {
      this.partidas = data;
      this.separarPartidasPorEstagio();
      this.loading = true;
    });
  }

  private separarPartidasPorEstagio() {
    this.stages = [
      { label: 'Fase de Grupos', partidas: this.partidas.filter(partida => partida.stage_name === 'First stage') },
      { label: 'Oitavas de Final', partidas: this.partidas.filter(partida => partida.stage_name === 'Round of 16') },
      { label: 'Quartas de Final', partidas: this.partidas.filter(partida => partida.stage_name === 'Quarter-final') },
      { label: 'Semifinais', partidas: this.partidas.filter(partida => partida.stage_name === 'Semi-final') },
      { label: 'Terceiro Lugar', partidas: this.partidas.filter(partida => partida.stage_name === 'Play-off for third place') },
      { label: 'Final', partidas: this.partidas.filter(partida => partida.stage_name === 'Final') },
    ];
  }
}
