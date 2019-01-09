var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var QuerySchema = new Schema({
    userID: { type: String, required: true },
    userEmail: {type: String, required: true},
    searchQuery: { type: String, required: true },
    active: { type: Boolean, default: true },
    sites: [ String ],
    recent_results: [ {
    	"name": String,
      "listing_link": String,
      "listing_age": String,
      "image_link": String,
      "original_price": Number,
      "new_price": Number,
      "designer": String,
      "size": String,
      "source": String,
      "found_time": Date
    } ],
    initialGrailedScrapeCompleted: {type: Boolean, default: false},
    initialEbayScrapeCompleted: {type: Boolean, default: false},
    initialFromJPScrapeCompleted: {type: Boolean, default: false}
});



module.exports = mongoose.model('Query', QuerySchema);