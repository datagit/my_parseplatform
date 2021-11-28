/**
 *
 * @param {Parse} Parse
 */
exports.up = async (Parse) => {
  const className = 'Pet';
  const schema = new Parse.Schema(className);

  // Example:
  schema
    .addString('name')
    .addString('photoUrl');

  return schema.save();
};

/**
 *
 * @param {Parse} Parse
 */
exports.down = async (Parse) => {
  const className = 'Pet';
  const schema = new Parse.Schema(className);

  return schema.purge().then(() => schema.delete());
};
