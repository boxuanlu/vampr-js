class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
  this.offspring.push(vampire);
  vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
   return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let number = -1;
    let vam = this;
    while (vam){
      vam = vam.creator;
      number = number + 1;
    }
    return number;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }


  vampireWithName(name) {
    if (name === this.name){
      return this;
    }
   for (children of this.offspring) {
    let result = children.vampireWithName(name);
    if(result){
      return result;
    }
   } return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
  let sum = 0;
  for (children of this.offspring) {
    sum += children.totalDescendents + 1
  }
  return sum
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }
}

module.exports = Vampire;

