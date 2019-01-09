var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var EmailAttemptsSchema = new Schema({
  "query_id": ObjectId,
  "query_text": String,
  "search_results": [ {
  	"name": String,
    "listing_link": String,
    "listing_age": String,
    "image_link": String,
    "original_price": Number,
    "new_price": Number,
    "designer": String,
    "size": String,
    "source": String
  } ],
  "found_date": Date,
  "sent": Boolean
});



module.exports = mongoose.model('email_attempt', EmailAttemptsSchema);
