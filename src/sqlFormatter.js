import SqlFormatter from './languages/SqlFormatter';

const formatters = {
  sql: SqlFormatter,
};

/**
 * Format whitespace in a query to make it easier to read.
 *
 * @param {String} query
 * @param {Object} cfg
 *  @param {String} cfg.language Query language, default is Standard SQL
 *  @param {String} cfg.indent Characters used for indentation, default is "  " (2 spaces)
 *  @param {Boolean} cfg.uppercase Converts keywords to uppercase
 *  @param {Integer} cfg.linesBetweenQueries How many line breaks between queries
 *  @param {Object} cfg.params Collection of params for placeholder replacement
 * @return {String}
 */
export const format = (query, cfg = {}) => {
  if (typeof query !== 'string') {
    throw new Error('Invalid query argument. Extected string, instead got ' + typeof query);
  }

  let Formatter = SqlFormatter;
  if (cfg.language !== undefined) {
    Formatter = formatters[cfg.language];
  }
  if (Formatter === undefined) {
    throw Error(`Unsupported SQL dialect: ${cfg.language}`);
  }
  return new Formatter(cfg).format(query);
};

export const supportedDialects = Object.keys(formatters);
