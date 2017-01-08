import Power from '../models/power';
import Creature from '../models/creature';

interface ICanHit {
    damage: number;

    hit(creature: Creature, power: Power): void;
}

export default  ICanHit;
