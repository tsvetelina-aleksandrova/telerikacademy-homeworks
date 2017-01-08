import Power from '../models/power';

interface ICanBeHit {
    immunities: Power[];
    life: number;

    takeHit(strength: number, power: Power): void;
}

export default  ICanBeHit;
