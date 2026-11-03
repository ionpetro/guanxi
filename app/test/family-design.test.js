const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

// The user explicitly requested reuse of the existing family design, without a
// new visual direction. Keep the copied Gnothi stylesheet intact; Mandarin-only
// additions follow it. This test is self-contained and needs no sibling repo.
test('the interface retains the exact established Gnothi stylesheet as its baseline', () => {
  const css = fs.readFileSync(path.join(__dirname, '../src/style.css'));
  const baseline = css.subarray(0, 39910);
  assert.equal(crypto.createHash('sha256').update(baseline).digest('hex'),
    'c333a2fdb79a6968d31391bbd597f00f3a38996b0331aca6616f14254b682734',
    'Keep the existing Gnothi CSS unchanged; put language-specific adaptations after the copied baseline.');
});
