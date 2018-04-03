import {Action} from '@ngrx/store';


export enum HoroscopActionTypes {
    CAPRICORN = '[Horoscop] Capricorn',
    VARSATOR = '[Horoscop] Varsator',
    PESTI = '[Horoscop] Pesti',
    BERBEC = '[Horoscop] Berbec',
    TAUR = '[Horoscop] Taur',
    GEMENI = '[Horoscop] Gemeni',
    RAC = '[Horoscop] Rac',
    LEU = '[Horoscop] Leu',
    FECIOARA = '[Horoscop] Fecioara',
    BALANTA = '[Horoscop] Balanta',
    SCORPION = '[Horoscop] Scorpion',
    SAGETATOR = '[Horoscop] Sagetator',

}

export class Capricorn implements Action {
    readonly type = HoroscopActionTypes.CAPRICORN;
}

export class Varsator implements Action {
    readonly type = HoroscopActionTypes.VARSATOR;
}

export class Pesti implements Action {
    readonly type = HoroscopActionTypes.PESTI;
}

export class Berbec implements Action {
    readonly type = HoroscopActionTypes.BERBEC;
}

export class Taur implements Action {
    readonly type = HoroscopActionTypes.TAUR;
}

export class Gemeni implements Action {
    readonly type = HoroscopActionTypes.GEMENI;
}

export class Rac implements Action {
    readonly type = HoroscopActionTypes.RAC;
}

export class Leu implements Action {
    readonly type = HoroscopActionTypes.LEU;
}

export class Fecioara implements Action {
    readonly type = HoroscopActionTypes.FECIOARA;
}

export class Balanta implements Action {
    readonly type = HoroscopActionTypes.BALANTA;
}

export class Scorpion implements Action {
    readonly type = HoroscopActionTypes.SCORPION;
}

export class Sagetator implements Action {
    readonly type = HoroscopActionTypes.SAGETATOR;
}


export type HoroscopActions 
    = Capricorn
    | Varsator
    | Pesti
    | Berbec
    | Taur
    | Gemeni
    | Rac
    | Leu
    | Fecioara
    | Balanta
    | Scorpion
    | Sagetator