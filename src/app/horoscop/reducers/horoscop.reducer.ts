import { HoroscopActionTypes, HoroscopActions } from '../actions/horoscop.action';

export function horoscop(state: string, action: HoroscopActions) {
    switch(action.type) {
        case HoroscopActionTypes.CAPRICORN: {
            return `${state} intre 22 decembrie si 20 ianuarie`;
        }
        case HoroscopActionTypes.VARSATOR: {
            return `${state} intre 21 ianuarie si 19 februarie`;
        }
        case HoroscopActionTypes.PESTI: {
            return `${state} intre 20 februarie si 20 martie`;
        }
        case HoroscopActionTypes.BERBEC: {
            return `${state} intre 21 martie si 20 aprilie`;
        }
        case HoroscopActionTypes.GEMENI: {
            return `${state} intre 21 mai si 21 iunie`;
        }
        case HoroscopActionTypes.RAC: {
            return `${state} intre 22 iunie si 22 iulie `;
        }
        case HoroscopActionTypes.LEU: {
            return `${state} intre 23 iulie si 22 august`;
        }
        case HoroscopActionTypes.FECIOARA: {
            return `${state} intre 23 august si 22 septembrie`;
        }
        case HoroscopActionTypes.BALANTA: {
            return `${state} intre 23 septembrie si 22 octombrie`;
        }
        case HoroscopActionTypes.SCORPION: {
            return `${state} intre 23 octombrie si 21 noiembrie`;
        }
        case HoroscopActionTypes.SAGETATOR: {
            return `${state} intre 22noimebrie si 21 decembrie`;
        }
        case HoroscopActionTypes.CAPRICORN: {
            return `${state} intre 22 decembrie si 20 ianuarie`;
        }

        default : {
            return state
        }
    }
}