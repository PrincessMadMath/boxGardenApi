var wrap = require('co-monk');


var values = {
    min_box_temperature: 20,
    max_box_temperature: 25
};

/**
 * Get current values
 */
exports.values = function *() {
    db = this.request.db;
    controlValues = wrap(db.get('controlValues'));
    var result = yield controlValues.findOne({}, {sort : [['createdTime', 'desc']]});
    this.body = JSON.stringify(result);
};

exports.insert = function *() {
    db = this.request.db;
    value = this.request.body;
    value.createdTime = Date.now();
    controlValues = wrap(db.get('controlValues'));

    yield controlValues.insert(value);
    this.body = "Insert was successful";
};

