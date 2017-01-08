import ICanBeHit from '../interfaces/can-be-hit';
import Power from './power';
import Alignment from '../enums/alignment';
import PowerName from '../enums/power-name';

class Creature implements ICanBeHit {
    name: string;
    alignment: number;
    immunities: Power[];
    life: number;

    constructor(name: string, alignment: number, immunities: Power[], life: number) {
        this.name = name;
        this.immunities = immunities;
        this.life = life;
        if ([Alignment.GOOD, Alignment.BAD, Alignment.NEUTRAL].indexOf(alignment) > -1) {
            this.alignment = alignment;
        } else {
            this.alignment = Alignment.NEUTRAL;
        }
        console.log(`Created ${this.name} which is ${Alignment[this.alignment]}`);
    }

    takeHit(strength: number, power: Power) {
        if (!this.canTakeHit(power)) {
            return;
        }
        let wasDead = this.isDead();
        switch(power.name) {
            case PowerName.PHYSICAL:
                this.life = Math.max(0, this.life - strength);
                console.log(`${this.name} took ${strength} physical damage`);
                if (this.isDead()) {
                    return;
                }
                break;
            case PowerName.RESTORE_HEALTH:
                this.life += strength;
                console.log(`${this.name} received ${strength} health`);
                if (wasDead) {
                    console.log(`${this.name} was resurrected`);
                }
                break;
        }
    }

    canTakeHit(power: Power) {
        if (!power.isResurrectPower() && this.isDead()) {
            return false;
        }
        if (this.immunities.indexOf(power) > -1) {
            console.log(`${this.name} is immune to ${PowerName[power.name]}`);
            return false;
        }
        return true;
    }

    isDead() {
        if (!this.life) {
            console.log(`${this.name} is dead`);
            return true;
        }
        return false;
    }
}

export default Creature;
