export interface Match {
  id:                number;
  venue:             string;
  location:          Location;
  status:            Status;
  attendance:        string;
  stage_name:        StageName;
  home_team_country: string;
  away_team_country: string;
  datetime:          Date;
  winner:            string;
  winner_code:       string;
  home_team:         Team;
  away_team:         Team;
  last_checked_at:   Date;
  last_changed_at:   Date;
}

export interface Team {
  country:   string;
  name:      string;
  goals:     number;
  penalties: number;
}

export enum Location {
  AlDaayen = "Al Daayen",
  AlKhor = "Al Khor",
  AlWakrah = "Al Wakrah",
  ArRayyan = "Ar-Rayyan",
  Doha = "Doha",
}

export enum StageName {
  Final = "Final",
  FirstStage = "First stage",
  PlayOffForThirdPlace = "Play-off for third place",
  QuarterFinal = "Quarter-final",
  RoundOf16 = "Round of 16",
  SemiFinal = "Semi-final",
}

export enum Status {
  Completed = "completed",
}
