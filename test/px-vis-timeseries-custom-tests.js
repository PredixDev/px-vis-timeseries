/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  suite('px-vis-timeseries margin sets properties with top and left axis locations', function() {
    var margin = document.getElementById('margin');

    suiteSetup(function(done){

      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y1": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y1": 15
          },{
            "x": 1397160780000,
            "y": 10,
            "y1": 8
          },{
            "x": 1397189940000,
            "y": 4,
            "y1": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y1": 20
          }
        ];

      var  counter = 0;
      var rendered = function() {
        counter += 1;

        if(counter === 4) {
          margin.removeEventListener('px-vis-line-svg-rendering-ended', rendered);
          done();
        }
      };

      margin.addEventListener('px-vis-line-svg-rendering-ended', rendered);


      margin.set('xAxisLocation','top');
      margin.set('yAxisLocation','left');
      margin.set('width', 500);
      margin.set('height', 400);
      margin.set('chartData', d);

    });

    test('margin fixture is created', function() {
      assert.isTrue(margin !== null);
    });

    test('margin calcMargin set the margin', function() {
      assert.equal(margin._internalMargin.top, 40);
      assert.equal(margin._internalMargin.right, 10);
      assert.equal(margin._internalMargin.bottom, 10);
      assert.equal(margin._internalMargin.left, 50);
    });
    test('margin calcMargin set the marginNav', function() {
      assert.equal(margin._internalMarginNav.top, 5);
      assert.equal(margin._internalMarginNav.right, 10);
      assert.equal(margin._internalMarginNav.bottom, 20);
      assert.equal(margin._internalMarginNav.left, 50);
    });
  });

  suite('px-vis-timeseries margin sets properties with bottom and right axis locations', function() {
    var margin = document.getElementById('margin');

    suiteSetup(function(done){

      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y1": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y1": 15
          },{
            "x": 1397160780000,
            "y": 10,
            "y1": 8
          },{
            "x": 1397189940000,
            "y": 4,
            "y1": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y1": 20
          }
        ];

      var  counter = 0;
      var rendered = function() {
        counter += 1;

        if(counter === 4) {
          margin.removeEventListener('px-vis-line-svg-rendering-ended', rendered);
          done();
        }
      };

      margin.addEventListener('px-vis-line-svg-rendering-ended', rendered);

      margin.set('chartData', d);
      margin.set('xAxisLocation','bottom');
      margin.set('yAxisLocation','right');

      margin._calcMargins();

    });

    test('margin fixture is created', function() {
      assert.isTrue(margin !== null);
    });

    test('margin calcMargin set the margin', function() {
      assert.equal(margin._internalMargin.top, 25);
      assert.equal(margin._internalMargin.right, 50);
      assert.equal(margin._internalMargin.bottom, 40);
      assert.equal(margin._internalMargin.left, 50);
    });
    test('margin calcMargin set the marginNav', function() {
      assert.equal(margin._internalMarginNav.top, 5);
      assert.equal(margin._internalMarginNav.right, 50);
      assert.equal(margin._internalMarginNav.bottom, 20);
      assert.equal(margin._internalMarginNav.left, 50);
    });
  });


  suite('px-vis-timeseries includeAllSeries setup works', function() {
    var IASChart = document.getElementById('IASChart');

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y1": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y1": 15
          },{
            "x": 1397160780000,
            "y": 10,
            "y1": 8
          },{
            "x": 1397189940000,
            "y": 4,
            "y1": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y1": 20
          }
        ],
        m = {
          "top": 10,
          "bottom": 10,
          "left": 50,
          "right": 10
        }

      var  counter = 0;
      var rendered = function() {
        counter += 1;

        if(counter === 4) {
          IASChart.removeEventListener('px-vis-line-svg-rendering-ended', rendered);
          window.setTimeout(function() {
            done();
          }, 500);

        }
      };

      IASChart.addEventListener('px-vis-line-svg-rendering-ended', rendered);

      IASChart.set('width',500);
      IASChart.set('height',400);
      IASChart.set('margin',m);
      IASChart.set('chartData',d);

    });

    test('IASChart fixture is created', function() {
      assert.isTrue(IASChart !== null);
    });

    test('IASChart completeSeriesConfig', function() {
      assert.isObject(IASChart.completeSeriesConfig.y);
      assert.equal(IASChart.completeSeriesConfig.y.color, IASChart.seriesColorList[0]);
      assert.equal(IASChart.completeSeriesConfig.y.name, 'y');
      assert.deepEqual(IASChart.completeSeriesConfig.y.x, 'x');
      assert.deepEqual(IASChart.completeSeriesConfig.y.y, 'y');

      assert.isObject(IASChart.completeSeriesConfig.y1);
      assert.equal(IASChart.completeSeriesConfig.y1.color, IASChart.seriesColorList[1]);
      assert.equal(IASChart.completeSeriesConfig.y1.name, 'y1');
      assert.deepEqual(IASChart.completeSeriesConfig.y1.x, 'x');
      assert.deepEqual(IASChart.completeSeriesConfig.y1.y, 'y1');
    });

    test('IASChart svg', function() {
      var re = /translate\((\d+)\s?,?(\d*)\)/,
          translate = re.exec(IASChart.svg.attr('transform'));

      assert.equal(IASChart.svg.node().tagName, 'g');
      assert.equal(translate[1], 50);
      assert.equal(translate[2], 10);
    });

    test('IASChart pxSvgElem', function() {
      assert.equal(IASChart.pxSvgElem.tagName, 'svg');
      assert.equal(IASChart.pxSvgElem.width.baseVal.value, 500);
      assert.equal(IASChart.pxSvgElem.height.baseVal.value, 400);
    });

    test('IASChart canvasContext', function() {
      assert.deepEqual(IASChart.canvasContext._translation, [50,10]);
      assert.equal(IASChart.canvasContext.canvas.width, 500);
      assert.equal(IASChart.canvasContext.canvas.height, 400);
    });

    test('IASChart x', function() {
      assert.deepEqual(IASChart.x.range(), [0,440]);
      assert.equal(Number(IASChart.x.domain()[0]), 1397102460000);
      assert.equal(Number(IASChart.x.domain()[1]), 1397219100000);
    });

    test('IASChart y', function() {
      assert.deepEqual(IASChart.y["defaultAxis"].range(), [380,0]);
      assert.deepEqual(IASChart.y["defaultAxis"].domain(), [1,20]);
    });

    test('IASChart mutedSeries', function() {
      assert.deepEqual(IASChart.mutedSeries, {});
    });

    test('IASChart tooltipData', function() {
      var ttD = {
        "time":null,
        "timeSeriesKey":null,
        "hidden":true,
        "series":[
          {"name":"y","value":null},
          {"name":"y1","value":null}
        ],
        "seriesObj":{},
        "mouse":null,
        "xArr":null,
        "yArr":null
      };

      assert.deepEqual(IASChart.tooltipData, ttD);
    });

    test('IASChart extentsData', function() {
      assert.isUndefined(IASChart.extentsData);
    });

    test('IASChart selectedDomain', function() {

      //selectedDomain can be empty or have the actual X domain
      if(IASChart.selectedDomain.x.length > 0) {

        assert.equal(Number(IASChart.selectedDomain.x[0]), 1397102460000);
        assert.equal(Number(IASChart.selectedDomain.x[1]), 1397219100000);
      } else {
        assert.deepEqual(IASChart.selectedDomain.x, []);
      }

    });

    test('IASChart _seriesKeys', function() {
      assert.deepEqual(IASChart._seriesKeys, ['y','y1']);
    });

    test('IASChart seriesClipPath', function() {
      var cp =  IASChart.svg.node().getElementsByTagName('clipPath');
      assert.equal(cp[1].id, IASChart.seriesClipPath);
    });

    test('IASChart clipPath', function() {
      var cp =  IASChart.svg.node().getElementsByTagName('clipPath');
      assert.equal(cp[0].id, IASChart.clipPath);
    });
  }); //suite

  suite('px-vis-timeseries config setup works', function() {
    var configChart = document.getElementById('configChart');

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y1": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y1": 15
          },{
            "x": 1397160780000,
            "y": 10,
            "y1": 8
          },{
            "x": 1397189940000,
            "y": 4,
            "y1": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y1": 20
          }
        ],
        m = {
          "top": 10,
          "bottom": 10,
          "left": 50,
          "right": 10
        },
        config = {
          'config1': {
            "name": "Series 1",
            "x": "x",
            "y": "y"
          },
          'config2': {
            "name": "Series 2",
            "x": "x",
            "y": "y1"
          }
        },
        toolbar = {
          advancedZoom: true,
          pan: true,
          tooltip: true,
          stripe: true
        }

      var  counter = 0;
      var rendered = function() {
        counter += 1;

        if(counter === 4) {
          configChart.removeEventListener('px-vis-line-svg-rendering-ended', rendered);
          done();
        }
      };

      configChart.addEventListener('px-vis-line-svg-rendering-ended', rendered);

      configChart.set('width',500);
      configChart.set('height',400);
      configChart.set('margin',m);
      configChart.set('seriesConfig',config);
      configChart.set('chartData',d);
    });

    test('configChart fixture is created', function() {
      assert.isTrue(configChart !== null);
    });

    test('configChart completeSeriesConfig', function() {
      assert.isObject(configChart.completeSeriesConfig.config1);
      assert.equal(configChart.completeSeriesConfig.config1.color, configChart.seriesColorList[0]);
      assert.equal(configChart.completeSeriesConfig.config1.name, 'Series 1');
      assert.deepEqual(configChart.completeSeriesConfig.config1.x, 'x');
      assert.deepEqual(configChart.completeSeriesConfig.config1.y, 'y');

      assert.isObject(configChart.completeSeriesConfig.config2);
      assert.equal(configChart.completeSeriesConfig.config2.color, configChart.seriesColorList[1]);
      assert.equal(configChart.completeSeriesConfig.config2.name, 'Series 2');
      assert.deepEqual(configChart.completeSeriesConfig.config2.x, 'x');
      assert.deepEqual(configChart.completeSeriesConfig.config2.y, 'y1');
    });

    test('configChart svg', function() {
      var re = /translate\((\d+)\s?,?(\d*)\)/,
          translate = re.exec(configChart.svg.attr('transform'));

      assert.equal(configChart.svg.node().tagName, 'g');
      assert.equal(translate[1], 50);
      assert.equal(translate[2], 10);
    });

    test('configChart pxSvgElem', function() {
      assert.equal(configChart.pxSvgElem.tagName, 'svg');
      assert.equal(configChart.pxSvgElem.width.baseVal.value, 500);
      assert.equal(configChart.pxSvgElem.height.baseVal.value, 400);
    });

    test('configChart canvasContext', function() {
      assert.deepEqual(configChart.canvasContext._translation, [50,10]);
      assert.equal(configChart.canvasContext.canvas.width, 500);
      assert.equal(configChart.canvasContext.canvas.height, 400);
    });

    test('configChart x', function() {
      assert.deepEqual(configChart.x.range(), [0,440]);
      assert.equal(Number(configChart.x.domain()[0]), 1397102460000);
      assert.equal(Number(configChart.x.domain()[1]), 1397219100000);
    });

    test('configChart y', function() {
      assert.deepEqual(configChart.y["defaultAxis"].range(), [380,0]);
      assert.deepEqual(configChart.y["defaultAxis"].domain(), [1,20]);
    });

    test('configChart mutedSeries', function() {
      assert.deepEqual(configChart.mutedSeries, {});
    });

    test('configChart tooltipData', function() {
      var ttD = {
        "mouse": null,
        "time": null,
        "timeSeriesKey":null,
        "hidden": true,
        "xArr": null,
        "yArr": null,
        "series": [{
          "name": "config1",
          "value": null
        },{
          "name": "config2",
          "value": null
        }],
        "seriesObj": {}
      }
      assert.deepEqual(configChart.tooltipData, ttD);
    });

    test('configChart extentsData', function() {
      assert.isUndefined(configChart.extentsData);
    });

    test('configChart selectedDomain', function() {

      //selectedDomain can be empty or have the actual X domain
      if(configChart.selectedDomain.x.length > 0) {

        assert.equal(Number(configChart.selectedDomain.x[0]), 1397102460000);
        assert.equal(Number(configChart.selectedDomain.x[1]), 1397219100000);
      } else {
        assert.deepEqual(configChart.selectedDomain.x, []);
      }
    });

    test('configChart _seriesKeys', function() {
      assert.deepEqual(configChart._seriesKeys, ['config1','config2']);
    });

    test('configChart seriesClipPath', function() {
      var cp =  configChart.svg.node().getElementsByTagName('clipPath');
      assert.equal(cp[1].id, configChart.seriesClipPath);
    });

    test('configChart clipPath', function() {
      var cp =  configChart.svg.node().getElementsByTagName('clipPath');
      assert.equal(cp[0].id, configChart.clipPath);
    });
  }); //suite

};
