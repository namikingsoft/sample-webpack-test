import assert from 'assert';
import $ from 'jquery';

describe("Main", () => {
  describe("Body element", () => {
    it('has 30px margin', () => {
      assert.equal($('body').css('margin'), '30px');
    });
    it("has Greeting button", () => {
      assert.equal($('#greeting').size(), 1);
    });
  });
  describe("Greeting button", () => {
    it("has 10px margin-bottom", () => {
      assert.equal($('#greeting').css('margin-bottom'), '10px');
    });
    it("has 'Greeting' label", () => {
      assert.equal($('#greeting').text(), 'Greeting');
    });
    context("is clicked once", () => {
      before(() => {
        $('#greeting').click();
      });
      it("append Greeting once", () => {
        assert.equal($('.greeting').size(), 1);
      });
      it("append Greeting written 'Hello World'", () => {
        assert.equal($('.greeting').text(), 'Hello World');
      });
    });
    context("is clicked 10 times every 0.1 sec", () => {
      before((done) => {
        var count = 0;
        var click = function() {
          if (count++ < 10) {
            $('#greeting').click();
            setTimeout(click, 100);
          } else {
            done();
          }
        };
        click();
      });
      it("append Greeting 10 times", () => {
        assert.equal($('.greeting').size(), 11);
      });
    });
  });
});
