const expect = require('expect.js');
const fixtures = require('./fixtures');

function test(what, t) {
  describe(what, function () {
    it('index', t(require('../')[what]));
    it('direct', t(require('../' + what)));
  });
}

describe('single', function () {


  test('xliff12ToJs', function (fn) {
    return function (done) {
      fn(fixtures.example.xliff12, function (err, res) {
        expect(err).not.to.be.ok();
        expect(res).to.eql(fixtures.example.js);
        done();
      });
    };
  });


  test('jsToXliff12', function (fn) {
    return function (done) {
      fn(fixtures.example.js, (err, res) => {
        expect(err).not.to.be.ok();
        expect(res).to.eql(fixtures.example.xliff12);
        done();
      });
    };
  });



});

describe('xliff 1.2 source/target attributes', function () {

  test('xliff12ToJs', function (fn) {
    return function (done) {
      fn(fixtures.example_source_attr.xliff12, function (err, res) {
        expect(err).not.to.be.ok();
        expect(res).to.eql(fixtures.example.js);
        done();
      });
    };
  });

});

describe('multi', function () {


  test('xliff12ToJs', function (fn) {
    return function (done) {
      fn(fixtures.example_multi.xliff12, function (err, res) {
        expect(err).not.to.be.ok();
        expect(res).to.eql(fixtures.example_multi.js);
        done();
      });
    };
  });


});

describe('with notes', function () {

  test('xliff12ToJs', function (fn) {
    return function (done) {
      fn(fixtures.example_note.xliff12, (err, res) => {
        expect(err).not.to.be.ok();
        expect(res).to.eql(fixtures.example_note.js);
        done();
      });
    };
  });

});
