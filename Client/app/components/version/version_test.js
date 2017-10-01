'use strict';

describe('PatentApp.version module', function() {
  beforeEach(module('PatentApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
