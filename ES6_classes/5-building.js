export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number');
    }
    if (new.target === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    if (!this) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
