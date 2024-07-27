import * as I from './interface';
import {toID} from '../util';

const RBY: string[] = [];

const GSC: string[] = [];

const ADV = [
  'Air Lock',
  'Arena Trap',
  'Battle Armor',
  'Blaze',
  'Chlorophyll',
  'Clear Body',
  'Cloud Nine',
  'Color Change',
  'Compound Eyes',
  'Cute Charm',
  'Drizzle',
  'Damp',
  'Drought',
  'Early Bird',
  'Effect Spore',
  'Flame Body',
  'Flash Fire',
  'Forecast',
  'Guts',
  'Huge Power',
  'Hustle',
  'Hyper Cutter',
  'Illuminate',
  'Immunity',
  'Inner Focus',
  'Insomnia',
  'Intimidate',
  'Keen Eye',
  'Levitate',
  'Lightning Rod',
  'Limber',
  'Liquid Ooze',
  'Magma Armor',
  'Magnet Pull',
  'Marvel Scale',
  'Minus',
  'Natural Cure',
  'Oblivious',
  'Overgrow',
  'Own Tempo',
  'Pickup',
  'Plus',
  'Poison Point',
  'Pressure',
  'Pure Power',
  'Rain Dish',
  'Rock Head',
  'Rough Skin',
  'Run Away',
  'Sand Stream',
  'Sand Veil',
  'Serene Grace',
  'Shadow Tag',
  'Shed Skin',
  'Shell Armor',
  'Shield Dust',
  'Soundproof',
  'Speed Boost',
  'Static',
  'Stench',
  'Sticky Hold',
  'Sturdy',
  'Suction Cups',
  'Swarm',
  'Swift Swim',
  'Synchronize',
  'Thick Fat',
  'Torrent',
  'Trace',
  'Truant',
  'Vital Spirit',
  'Volt Absorb',
  'Water Absorb',
  'Water Veil',
  'White Smoke',
  'Wonder Guard',
];

export const ABILITIES = [[], RBY, GSC, ADV];

export class Abilities implements I.Abilities {
  private readonly gen: I.GenerationNum;

  constructor(gen: I.GenerationNum) {
    this.gen = gen;
  }

  get(id: I.ID) {
    return ABILITIES_BY_ID[this.gen][id];
  }

  *[Symbol.iterator]() {
    for (const id in ABILITIES_BY_ID[this.gen]) {
      yield this.get(id as I.ID)!;
    }
  }
}

class Ability implements I.Ability {
  readonly kind: 'Ability';
  readonly id: I.ID;
  readonly name: I.AbilityName;

  constructor(name: string) {
    this.kind = 'Ability';
    this.id = toID(name);
    this.name = name as I.AbilityName;
  }
}

const ABILITIES_BY_ID: Array<{[id: string]: Ability}> = [];

for (const abilities of ABILITIES) {
  const map: {[id: string]: Ability} = {};
  for (const ability of abilities) {
    const a = new Ability(ability);
    map[a.id] = a;
  }
  ABILITIES_BY_ID.push(map);
}
