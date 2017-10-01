'use strict';

angular.module('PatentApp.version', [
  'PatentApp.version.interpolate-filter',
  'PatentApp.version.version-directive'
])

.value('version', '0.1');
