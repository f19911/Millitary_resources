class Unit {
    constructor(type, health, distance) {
        this.type = type;
        this.health  = this.typeMaxhealth = health;
        this.distance =  this.maxdistance = distance;
    }

    isReadyToMove() {
        return this.distance > 0;
    }

    isReadyToFight() {
        return this.health > 0
    }
        restore() {
            this.health = this.typeMaxhealth;
            this.distance = this.maxdistance;
        }
    clone() {
        return new Unit(this.type, this.typeMaxhealth, this.maxdistance);
    }    
}

 