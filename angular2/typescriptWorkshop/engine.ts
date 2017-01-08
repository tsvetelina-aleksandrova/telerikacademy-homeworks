import SuperCreature from './models/super-creature';
import Power from './models/power';
import PowerName from './enums/power-name';
import Alignment from './enums/alignment';
import Superhero from './models/superhero';
import Beast from './models/beast';

class Engine {

    play() {
        console.log('Game started');
        const physicalPower = new Power(PowerName.PHYSICAL),
            resurrectPower = new Power(PowerName.RESTORE_HEALTH),
            batman = new Superhero('Batman', Alignment.GOOD, [], 10, [physicalPower], 10),
            doge = new Beast('Doge', Alignment.GOOD, [], 10, [physicalPower, resurrectPower], 10),
            superman = new Superhero('Superman', Alignment.NEUTRAL, [physicalPower], 15, [physicalPower], 15);

        batman.pets = [doge];
        batman.hit(superman, physicalPower);
        superman.hit(batman, physicalPower);
        doge.hit(batman, resurrectPower);
        console.log('Game ended');
    }
}

export default Engine;
