class NewTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NewTypeError';
  }
}

module.exports = NewTypeError;
