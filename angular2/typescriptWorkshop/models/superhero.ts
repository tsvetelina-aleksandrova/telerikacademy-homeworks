import SuperCreature from './super-creature';
import ICanBePet from '../interfaces/can-be-pet';

class Superhero extends SuperCreature {
    pets: ICanBePet[];
}

export default Superhero;
