var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var QuerySchema = new Schema({
    userID: { type: String, required: true },
    userEmail: {type: String, required: true},
    searchQuery: { type: String, required: true },
    active: { type: Boolean, default: true },
    sites: [ String ],
    initialScrapeCompleted: {type: Boolean, default: false}
});



module.exports = mongoose.model('Query', QuerySchema);