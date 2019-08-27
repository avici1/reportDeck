"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing endpoints', function () {
  it('should add a class ', function (done) {
    var class_ = {
      "classYear": "2019",
      "classId": "4",
      "classMasterTeacher": "Paul",
      "classSection": "MPG",
      "classLevel": "S4"
    };

    _chai["default"].request(_index["default"]).post('/api/class').set('Accept', 'application/json').send(class_).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        classId: class_.classId,
        classYear: class_.classYear,
        classMasterTeacher: class_.classMasterTeacher,
        classSection: class_.classSection,
        classLevel: class_.classLevel
      });
      done();
    });
  });
  it('should get all classes', function (done) {
    _chai["default"].request(_index["default"]).get('/api/class').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('classYear');
      res.body.data[0].should.have.property('classId');
      res.body.data[0].should.have.property('classSection');
      res.body.data[0].should.have.property('classLevel');
      res.body.data[0].should.have.property('classMasterTeacher');
      done();
    });
  });
  it('Should get one class', function (done) {
    var id = 1;

    _chai["default"].request(_index["default"]).get("/api/class/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('classYear');
      res.body.data.should.have.property('classId');
      res.body.data.should.have.property('classSection');
      res.body.data.should.have.property('classLevel');
      res.body.data.should.have.property('classMasterTeacher');
      done();
    });
  });
  it('should not get get a class with invalid search parameter', function (done) {
    var id = "hgh";

    _chai["default"].request(_index["default"]).get("/api/class/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql('Please provide a valid parameter for search');
      done();
    });
  });
  it('should not add a class with incorrect info', function (done) {
    var class_ = {
      "classYear": "2019",
      "classMasterTeacher": "Paul",
      "classSection": "MPG",
      "classLevel": "S4"
    };

    _chai["default"].request(_index["default"]).post('/api/class').set('Accept', 'application/json').send(class_).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please send accurate info');
      done();
    });
  });
  it('should not update a class with invalid search parameter', function (done) {
    var id = "48y";
    var class_ = {
      "classYear": "2019",
      "classId": "45",
      "classMasterTeacher": "Paul",
      "classSection": "MPG",
      "classLevel": "S4"
    };

    _chai["default"].request(_index["default"]).put("/api/class/".concat(id)).set('Accept', 'application/json').send(class_).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql('Please provide a valid parameter');
    });

    done();
  });
  it('should not update a class with invalid empty body', function (done) {
    var id = 48;
    var class_ = {};

    _chai["default"].request(_index["default"]).put("/api/class/".concat(id)).set('Accept', 'application/json').send(class_).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql('sent empty fields');
    });

    done();
  });
  it('should  update a class with Accurate search parameter', function (done) {
    var id = 1;
    var class_ = {
      "classYear": "2019",
      "classId": "35",
      "classMasterTeacher": "Paul",
      "classSection": "MPG",
      "classLevel": "S6"
    };

    _chai["default"].request(_index["default"]).put("/api/class/".concat(id)).set('Accept', 'application/json').send(class_).end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.should.have.property('message').eql('Classes updated successfully');
      expect(res.body.data.classYear).to.equal(class_.classYear);
      expect(res.body.data.classId).to.equal(class_.classId);
      expect(res.body.data.classMasterTeacher).to.equal(class_.classMasterTeacher);
      expect(res.body.data.classSection).to.equal(class_.classSection);
      expect(res.body.data.classLevel).to.equal(class_.classLevel);
    });

    done();
  });
  it('should delete a class', function (done) {
    var id = 1;

    _chai["default"].request(_index["default"])["delete"]("/api/class/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.should.have.property('message').eql("Class with Id ".concat(id, " deleted successfully"));
    });

    done();
  });
  it('should not delete a class with invalid search', function (done) {
    var id = 'dhdh';

    _chai["default"].request(_index["default"])["delete"]("/api/class/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Please provide a valid parameter");
    });

    done();
  });
  it('should not delete a class with non existing', function (done) {
    var id = 7;

    _chai["default"].request(_index["default"])["delete"]("/api/class/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Class with Id ".concat(id, " not found"));
    });

    done();
  });
  it('should add a staff', function (done) {
    var newStaff = {
      "staffId": "44-ange",
      "staffNames": "Angelique uwimana",
      "staffTitle": "Computer science teacher"
    };

    _chai["default"].request(_index["default"]).post('/api/staff').send(newStaff).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({
        "staffId": newStaff.staffId,
        "staffNames": newStaff.staffNames,
        "staffTitle": newStaff.staffTitle
      });
    });

    done();
  });
  it('should not  add a staff with incomplete information', function (done) {
    var newStaff = {
      "staffId": "444-st"
    };

    _chai["default"].request(_index["default"]).post('/api/staff').send(newStaff).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property("message").eql("Please send complete information");
    });

    done();
  });
  it('should update a staff', function (done) {
    var id = 1;
    var updatedStaff = {
      "staffId": "3434",
      "staffNames": "Alain Christian",
      "staffTitle": "CS Teacher"
    };

    _chai["default"].request(_index["default"]).put("/api/staff/".concat(id)).send(updatedStaff).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body).to.include({
        "staffId": updatedStaff.staffId,
        "staffNames": updatedStaff.staffNames,
        "staffTitle": updatedStaff.staffTitle
      });
    });

    done();
  });
  it('should not update a staff with empty body', function (done) {
    var id = '34';
    var updatedStaff_ = {};

    _chai["default"].request(_index["default"]).put("/api/staff/".concat(id)).set('Accept', 'application/json').send(updatedStaff_).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property("message").eql("You sent empty body");
    });

    done();
  });
  it('should get all staff', function (done) {
    _chai["default"].request(_index["default"]).get('/api/staff/').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.should.have.property('message').eql('Staff found successfully');
      res.body.data[0].should.have.property('staffId');
      res.body.data[0].should.have.property('staffNames');
      res.body.data[0].should.have.property('staffTitle');
      done();
    });
  });
  it('should delete a staff', function (done) {
    var id = '1';

    _chai["default"].request(_index["default"])["delete"]("/api/staff/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.should.have.property('message').eql("Staff with Id ".concat(id, " deleted succefully"));
    });
  });
  it('should not delete a staff with invalid search parameter', function (done) {
    var id = '';

    _chai["default"].request(_index["default"])["delete"]("/api/staff/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Staff with Id ".concat(id, " not found"));
    });
  });
}); //Tests written with chai and mocha packages;
//each endpoint has atleast 3 states some not every state was tested atleat 2 at each endpoint
//# sourceMappingURL=test.js.map