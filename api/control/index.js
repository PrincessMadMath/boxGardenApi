var values = {
    min_box_temperature: 20,
    max_box_temperature: 25
};

/**
 * Get current values
 */
exports.values = function *() {
    this.body = values;
};