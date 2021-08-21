class Health {
    constructor(name, healthPoints){
        this.maxHealth = 50; 
        this.healthPoints = healthPoints;
        this.name = name;
        this.numHealthPotions = 2;
    }
    deductingPoints(damage){
        this.healthPoints = this.healthPoints - damage;
        if(this.healthPoints <= 0 ){
            console.log(`Your Pokemon has fainted. Pokemon's health has reached 0 HP`)
            return 0;
        } else {
            return this.healthPoints;
        }
    }
    fullHealth(){
        let maxHealth = new Health();
        this.healthPoints = maxHealth.healthPoints; 
        return this.healthPoints;
    }
    healthPotions(){
        this.healthPoints = this.healthPoints + 20; 
        if(this.healthPoints >= this.maxHealth){
            console.log(`Your pokemon is fully recovered!`);
            this.healthPoints = this.maxHealth;
            return this.maxHealth;
        } else {
            return this.healthPoints; 
        }
    }

    minusHealthPotions(){
        if(this.numHealthPotions > 0){
            this.numHealthPotions = this.numHealthPotions - 1; 
            return this.numHealthPotions
        } else {
            return 0; 
        }
    }
    addHealthPotions(num){
            this.numHealthPotions = this.numHealthPotions + num; 
            return this.numHealthPotions      
    }
    
}

module.exports = Health;