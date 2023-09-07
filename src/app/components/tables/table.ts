export interface Groups {
    groups: Group[]
}

export interface Group {
    letter: string;
    teams:  Team[];
}

export interface Team {
    country:           string;
    name:              string;
    group_letter:      string;
    group_points:      number;
    wins:              number;
    draws:             number;
    losses:            number;
    games_played:      number;
    goals_for:         number;
    goals_against:     number;
    goal_differential: number;
}