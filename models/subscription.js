var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    email: { type: String, required: true}
});
module.exports = mongoose.model('Subscription', schema);
/**
 * Created by USER on 4/23/2017.
 */
