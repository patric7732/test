const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
  // 주차장 이름
  username: {
    type: String,
    required: true,
  },
  // 주차장 예약 시간
  time: {
    type: String,
    required: true,
  },
  // 주차장 가격
  price: {
    type: String,
    required: true,
  },

  markerpath: {
    type: String,
    required: true,
  },

});

const Company = mongoose.model("Company", CompanySchema);

Company.getCompanyById = function (id, callback) {
  Company.findById(id, callback);
};

Company.getAll = function (callback) {
  Company.find(callback);
};


Company.getCompanyByUsername = function (username, callback) {
  const query = { username: username };
  Company.findOne(query, callback);
};

Company.addCompany = function (newCompany, callback) {
  newCompany.save(callback);
};

Company.updateCompany = function (username, newCompany, callback) {
  const query = { username: username };
  const update = {
    usernamee: newCompany.username,
    time: newCompany.time,
    markerpath: newCompany.markerpath,
  };

  Company.findOneAndUpdate(
    query,
    update,
    { new: true, useFindAndModify: false },
    callback
  );
};

module.exports = Company

module.exports = { Company }