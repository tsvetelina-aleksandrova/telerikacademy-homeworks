import ICanHit from '../interfaces/can-hit';
import Creature from './creature';
import Power from './power';
import Alignment from '../enums/alignment';
import PowerType from '../enums/power-type';
import PowerName from '../enums/power-name';

class SuperCreature extends Creature implements ICanHit {
    powers: Power[];
    damage: number;

    constructor(name: string, alignment: number, immunities: Power[],
            life: number, powers: Power[], damage: number) {
        super(name, alignment, immunities, life);
        this.powers = powers;
        this.damage = damage;
    }

    takeHit(strength: number, power: Power) {
        if (!this.canTakeHit(power)) {
            return;
        }
        super.takeHit(strength, power);

        switch(power.name) {
            case PowerName.LOWER_DAMAGE:
                this.damage = Math.max(0, this.damage - strength);
                console.log(`${this.name} had his damage level reduced by ${strength}`);
                break;
            case PowerName.RESTORE_DAMAGE:
                this.damage += strength;
                console.log(`${this.name} had his damage level increased by ${strength}`);
                break;
        }
    }

    hit(creature: Creature, power: Power) {
        if (this.isDead()) {
            return;
        }
        if (!this.hasPower(power)) {
            console.log(`${this.name} does not have power ${power}`);
            return;
        }

        let isCreatureNeutral = creature.alignment === Alignment.NEUTRAL,
            powerApplied;

        if (power.type === PowerType.HELPFUL) {
            if (this.alignment === creature.alignment || isCreatureNeutral) {
                console.log(`${this.name} applied helpful ${PowerName[power.name]} power to ${creature.name}`);
                creature.takeHit(this.damage, power);
                powerApplied = true;
            }
        } else if (power.type === PowerType.DESTRUCTIVE) {
            if (this.alignment !== creature.alignment || isCreatureNeutral) {
                console.log(`${this.name} applied destructive ${PowerName[power.name]} power to ${creature.name}`);
                creature.takeHit(this.damage, power);
                powerApplied = true;
            }
        }

        if (!powerApplied) {
            throw new Error(`${this.name} cannot hit ${creature.name}`);
        }
    }

    hasPower(power) {
        return this.powers.indexOf(power) > -1;
    }
}

export default SuperCreature;
