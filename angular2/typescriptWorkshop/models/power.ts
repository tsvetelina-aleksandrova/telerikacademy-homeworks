import PowerType from '../enums/power-type';
import PowerName from '../enums/power-name';

const powers = [{
    type: PowerType.DESTRUCTIVE,
    names: [PowerName.PHYSICAL, PowerName.LOWER_DAMAGE]
}, {
    type: PowerType.HELPFUL,
    names: [PowerName.RESTORE_HEALTH, PowerName.RESTORE_DAMAGE]
}];

class Power {
    name: number;
    type: number;

    constructor(name: number) {
        this.name = name;
        powers.forEach(power => {
            if (power.names.indexOf(name) > -1) {
                this.type = power.type;
            }
        });
        console.log(`Created ${PowerName[this.name]}, which is ${PowerType[this.type]}`);
    }

    isResurrectPower() {
        return this.name === PowerName.RESTORE_HEALTH;
    }
}

export default Power;
