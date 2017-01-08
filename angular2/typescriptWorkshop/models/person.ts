import Creature from './creature';
import ICanBePet from '../interfaces/can-be-pet';

class Person extends Creature implements ICanBePet {
}

export default Person;
