//     wink-pos-tagger
//     Optimal English Part-of-speech (POS) tagger
//
//     Copyright (C) 2017  GRAYPE Systems Private Limited
//
//     This file is part of “wink-pos-tagger”.
//
//     “wink-pos-tagger” is free software: you can redistribute
//     it and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-pos-tagger” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-pos-tagger”.
//     If not, see <http://www.gnu.org/licenses/>.

//
/* eslint max-lines: [ 'error', 2100 ] */
// A portion of this data is derived from the fnTBL project. The fnTBL is
// copyright by Johns Hopkins University and Radu Florian and Grace Ngai.
// It is sourced from www.cs.jhu.edu/~rflorian/fntbl/index.html;
// licensed under the MIT "like" License. You may obtain a copy of the License
// at www.cs.jhu.edu/~rflorian/fntbl/license.html.
/** @ignore */
const K = require( './consts.js' );
module.exports = {
  IN: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^as$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 2 }, matches: /^as$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBZ$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBD$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'DT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBP$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'DT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBD$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBZ$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^'s$/ }
          ],
          thenPosAt: 0,
          willBe: 'DT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^like$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^while$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^the$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^take$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^.$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^well$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^.$/ }
          ],
          thenPosAt: 0,
          willBe: 'DT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^As$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 2 }, matches: /^as$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^taking$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^outside$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^took$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^over$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^before$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        }
  ], // IN
  VBP: [
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^n't$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^need$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^earnings$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^not$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^market$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^a$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^be$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -3, -1 ] }, matches: /^does$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^did$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^do$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^cut$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^put$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -3, -1 ] }, matches: /^let$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         }
  ], // VBP
  JJ: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^of$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^British$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Soviet$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Western$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^early$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^European$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^'s$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^past$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^long$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ 1, 2 ] }, matches: /^Airways$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Canadian$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^much$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^JJ$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^early$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^this$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^to$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^open$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^late$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^such$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^a$/ }
          ],
          thenPosAt: 0,
          willBe: 'PDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^next$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^now$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^first$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBD$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^chief$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^executive$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^officer$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 2 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^average$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Japanese$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNPS'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^own$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Commercial$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Western$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^organized$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^further$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'RBR'
        }
  ], // JJ
  JJS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^most$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBS'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^most$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBS'
         }
  ], // JJS
  NN: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^n't$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^executive$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^who$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^is$/ },
                    // This ensure are is not the first word in the sentence!
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -2 }, matches: /^[a-z]+$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^right$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^half$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'PDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^SCI$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^TV$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^chief$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^operating$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^officer$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^official$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^right$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^are$/ },
                    // This ensure are is not the first word in the sentence!
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -2 }, matches: /^[a-z]+$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^began$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^giant$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^principal$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^close$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^be$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^help$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^half$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^official$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^CD$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^firm$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^been$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^closing$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^third$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^are$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^begin$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^VBD$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^shares$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^not$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^holding$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^offering$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        }
  ], // NN
  VBD: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^by$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^been$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^ended$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -3, -1 ] }, matches: /^being$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^the$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         }
  ], // VBD
  VBN: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^that$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^which$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^helped$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^set$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^of$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^an$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^expected$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         }
  ], // VBN
  NNP: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^American$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^American$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^German$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^South$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^American$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^North$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^American$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         }
  ], // NNP
  DT: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^all$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'PDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^no$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^'s$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^either$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'CC'
        }
  ], // DT
  POS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^'s$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^that$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^That$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^'s$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^'s$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^EX$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         }
  ], // POS
  NNS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^the$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^plans$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^Mr.$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^who$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Investors$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNP'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^plans$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^to$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^yen$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^IN$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^a$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         }
  ], // NNS
  RB: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^down$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VB$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^TO$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^up$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^to$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^so$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^PRP$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^enough$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^out$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^down$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^so$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^up$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VBN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^overseas$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^off$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VB$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^to$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^back$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^the$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^back$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        }
  ], // RB
  WDT: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^CC$/ }
           ],
           thenPosAt: 0,
           willBe: 'DT'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
           ],
           thenPosAt: 0,
           willBe: 'DT'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^that$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
           ],
           thenPosAt: 0,
           willBe: 'IN'
         }
  ], // WDT
  VB: [
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ -2, -1 ] }, matches: /^'s$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^date$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^TO$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^declined$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^comment$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        }
  ], // VB
  VBZ: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^the$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^phone$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^calls$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^of$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         }
  ], // VBZ
  RBR: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^earlier$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJR'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^higher$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJR'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^lower$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJR'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^less$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^full$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 2 }, matches: /^fees$/ }
           ],
           thenPosAt: 0,
           willBe: 'CC'
         }
  ], // RBR
  EX: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^.$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^there$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^.$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        }
  ], // EX
  VBG: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^selling$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^operating$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^profit$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^operating$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         }
  ], // VBG
  RP: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        }
  ], // RP
  CD: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^no$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^one$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^No$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^one$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        }
  ], // CD
  FW: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^de$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        }
  ], // FW
  JJR: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^more$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^VBN$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBR'
         }
  ], // JJR
  MD: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^will$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^good$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        }
  ], // MD
};
