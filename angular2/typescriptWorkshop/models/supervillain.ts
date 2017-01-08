import SuperCreature from './super-creature';
import ICanBePet from '../interfaces/can-be-pet';

class Supervillain extends SuperCreature {
    pets: ICanBePet[];
}

export default Supervillain;
