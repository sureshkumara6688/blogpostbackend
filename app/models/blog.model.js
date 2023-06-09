
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      firstname: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      },
      phonenumber: {
        type: Number,
        required: true
      },
      education: {
        type: String,
        required: false
      },
      yourimg: {
        type: String,
        required: true
      },

      information: {
        type: String,
        required: true
      },

    });
  const Userlist = mongoose.model("blog", schema);
  return Userlist;
};
