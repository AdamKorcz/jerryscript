// Copyright JS Foundation and other contributors, http://js.foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var p_zero = 0.0;
var n_zero = -p_zero;

assert(isNaN(Math.log10(NaN)));
assert(isNaN(Math.log10(-42)));
assert(isNaN(Math.log10(-3.0)));
assert(Math.log10(n_zero) === Number.NEGATIVE_INFINITY);
assert(Math.log10(p_zero) === Number.NEGATIVE_INFINITY);
assert(Math.log10(1) === p_zero);
assert(Math.log10(Number.POSITIVE_INFINITY) === Number.POSITIVE_INFINITY);
assert(Math.log10(10.0) === 1);
assert(Math.log10(100.0) === 2)
