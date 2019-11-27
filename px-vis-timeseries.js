/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
Creates an interactive timeseries chart

### Usage

    <px-vis-timeseries
      chart-data="[[chartData]]"
      series-config="[[seriesConfig]]">
    </px-vis-timeseries>

### Styling
The following custom properties are available for styling:

Custom property | Description
----------------|-------------
  `--px-vis-axis-color` | The color for the axis lines, axis ticks, and axis tick labels
  `--px-vis-axis-title-color` | The color for the axis title
  `--px-vis-axis-inline-title-color` | The color for the axis title
  `--px-vis-axis-inline-type-color` | The color for the axis lines, axis ticks, and axis tick labels when using 'inline' labelPosition
  `--px-vis-axis-inline-box-color` | The color for the tick boxes when using 'inline' labelPosition
  |
  |
  |
  `--px-vis-nav-brush-outline-color` | The stroke (border) color for the brushed box
  `--px-vis-nav-brush-fill-color` | The fill (background) color for the brushed box
  `--px-vis-nav-brush-opacity` | The opacity of the brushed box
  `--px-vis-nav-brush-gradient-fill-color` | The fill (background) color for the brushed box when gradientOverlay is 'true'
  `--px-vis-nav-brush-gradient-opacity-1` | The start opacity of the brushed box when gradientOverlay is 'true'
  `--px-vis-nav-brush-gradient-opacity-2` | The end opacity of the brushed box when gradientOverlay is 'true'
  `--px-vis-nav-brush-handle-fill-color` | The fill (background) color for the handles on the brushed box
  `--px-vis-nav-brush-handle-lines-color` | The stroke (border) color for the handles on the brushed box
  `--px-vis-nav-brush-handle-fill-color-hover` | The hover state fill (background) color for the handles on the brushed box
  `--px-vis-nav-brush-handle-lines-color-hover` | The hover state stroke (border) color for the handles on the brushed box
  `--px-vis-nav-brush-handle-fill-color-press` | The pressed/mousedown state fill (background) color for the handles on the brushed box
  `--px-vis-nav-brush-handle-lines-color-press` | The pressed/mousedown state stroke (border) color for the handles on the brushed box
  |
  |
  |
  `--px-vis-cursor-line-color` | The color for the lines which track the cursor/data
  |
  |
  |
  `--px-vis-event-line-color` | The default color for the vertical lines below the icon
  `--px-vis-event-icon-color` | The default color for the event icon markers
  |
  |
  |
  `--px-vis-gridlines-color` | The color for the gridlines
  |
  |
  |
  `--px-vis-threshold-color` | The default color for a threshold
  |
  |
  |
  `--px-vis-zoom-brush-outline-color` | The stroke (border) color for the on-chart zoom/selection brush
  `--px-vis-zoom-brush-fill-color` | The fill (background) color for the on-chart zoom/selection brush
  `--px-vis-zoom-brush-fill-opacity` | The opacity for the on-chart zoom/selection brush
  |
  |
  |
  `--px-vis-register-series-name` | The color of the data series name
  `--px-vis-register-data-value` | The color of the data series value
  `--px-vis-register-box` | The color of the box around the register when a scrollbar is present
  |
  |
  |
  `--px-vis-series-color-0` | These are the colors used to represent the data series on the charts. Used in numerical order by default. Colors MUST start at 0 and cannot contain gaps between numbers.
  `--px-vis-series-color-1` |
  `--px-vis-series-color-2` |
  `--px-vis-series-color-n` |
  |
  |
  |
  `--px-tooltip-background-color` | The color of the tooltip
  `--px-tooltip-text-color` | The color of the tooltip text
  `--px-tooltip-light-background-color` | The color of the light version tooltip
  `--px-tooltip-light-text-color` | The color of the light version tooltip text
  `--px-tooltip-light-border-color`| The color of the light version tooltip border
  |
  |
  |
  `--px-vis-font-family` | The font family for all labels and text


@element px-vis-timeseries
@blurb Creates an interactive timeseries chart
@homepage index.html
@demo demo.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-vis/px-vis-behavior-common.js';
import 'px-vis/px-vis-behavior-d3.js';
import 'px-vis/px-vis-behavior-chart.js';
import 'px-vis/px-vis-behavior-datetime.js';
import 'px-vis/px-vis-behavior-scale.js';
import 'px-vis/px-vis-behavior-renderer.js';
import 'px-vis/px-vis-svg-canvas.js';
import 'px-vis/px-vis-line-canvas.js';
import 'px-vis/px-vis-line-svg.js';
import 'px-vis/px-vis-scatter.js';
import 'px-vis/px-vis-scatter-canvas.js';
import 'px-vis/px-vis-event.js';
import 'px-vis/px-vis-axis.js';
import 'px-vis/px-vis-gridlines.js';
import 'px-vis/px-vis-chart-navigator.js';
import 'px-vis/px-vis-interaction-space.js';
import 'px-vis/px-vis-cursor.js';
import 'px-vis/px-vis-tooltip.js';
import 'px-vis/px-vis-register.js';
import 'px-vis/px-vis-threshold.js';
import 'px-vis/px-vis-clip-path.js';
import 'px-vis/px-vis-toolbar.js';
import 'px-vis/px-vis-multi-axis.js';
import 'px-vis/px-vis-highlight-point.js';
import 'px-vis/px-vis-highlight-point-canvas.js';
import 'px-vis/px-vis-striping.js';
import 'px-vis/px-vis-markers.js';
import 'px-vis/px-vis-annotations.js';
import 'px-vis/px-vis-reference-curve.js';
import 'px-vis/px-vis-central-tooltip-content.js';
import 'px-tooltip/px-tooltip.js';
import './css/px-vis-timeseries-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';

Polymer({
  _template: html`
    <style include="px-vis-timeseries-styles"></style>

    <div id="wrapper" class\$="{{_chartWrapperClass}}">
        <!--[chart + navigator] + register-->
        <div class\$="{{_registerWrapperClass}} safari-flex-fix">
          <px-vis-register id="register" dynamic-menu-config="[[dynamicMenuConfig]]" chart-width="[[width]]" margin="[[_chartOrNavMargin(disableNavigator, _internalMargin.*, _internalMarginNav.*)]]" class\$="{{_getHideClass(hideRegister)}}" height="[[_registerHeight]]" units="[[units]]" tooltip-data="[[_registerTooltipData]]" chart-data="[[chartData]]" complete-series-config="[[completeSeriesConfig]]" muted-series="{{mutedSeries}}" type="{{_registerType}}" x-axis-type="time" y-axis-type="[[yAxisType]]" inert-register="[[hideRegister]]" current-page="[[_registerCurrentPage]]" total-pages="[[_registerTotalPages]]" display-page-arrows="[[_registerDisplayPageArrows]]">
          </px-vis-register>

          <!-- chart + navigator -->
          <div id="drawingWrapper" class="flex--col flex__item--no-grow inline--flex">
            <px-vis-toolbar id="toolbar" current-sub-config="[[toolbarSubConfig]]" action-config="{{actionConfig}}" within-chart="" chart-margin="[[_internalMargin]]" config="{&quot;zoom&quot;: true, &quot;pan&quot;: true, &quot;tooltip&quot;: true}">
            </px-vis-toolbar>
            <px-vis-svg-canvas id="svgCanvas" class="flex__item--no-grow" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" canvas-context="{{canvasContext}}" canvas-layers="{{canvasLayers}}" canvas-layers-config="[[canvasLayersConfig]]" svg="{{svg}}" px-svg-elem="{{pxSvgElem}}" svg-lower="{{svgLower}}" px-svg-elem-lower="{{pxSvgElemLower}}">
                <px-vis-annotations slot="4" svg="[[svg]]" x="[[x]]" y="[[y]]" margin="[[_internalMargin]]" domain-changed="[[domainChanged]]" complete-series-config="[[completeSeriesConfig]]" annotation-data="[[annotationData]]" show-strong-icon="[[showStrongIcon]]">
                </px-vis-annotations>
            </px-vis-svg-canvas>
            <template id="navTemplate" is="dom-if" if="[[!disableNavigator]]">
              <px-vis-chart-navigator id="navigator" prevent-ww-synchronization="" prevent-complete-series-config-calc="" chart-id="[[chartId]]" class="inline--flex" x-axis-type="[[xAxisType]]" y-axis-type="linear" width="[[width]]" height="100" margin="[[_internalMarginNav]]" complete-series-config="[[completeSeriesConfig]]" _series-keys="[[_seriesKeys]]" data-extents="[[dataExtents]]" chart-data="[[chartData]]" chart-extents="[[_navChartExtents]]" nav-series-limit="[[navSeriesLimit]]" chart-domain-x="[[_returnXDomain(domainChanged, disableDynamicUpdate)]]" disable-empty-render="" selected-domain="{{_navSelectedDomain}}" prevent-resize="" render-to-canvas="[[renderToCanvas]]" debounce-resize-timing="[[debounceResizeTiming]]">
              </px-vis-chart-navigator>
            </template>
          </div>
        </div>
    </div>
<!--FIXME px-tooltip attaches on every mouse hover even if we do not have it enabled. True across charts-->
    <px-vis-tooltip id="tooltip" hover-target="[[mouseRect]]" mouse-position="[[mousePosition]]" width="250" margin="[[_internalMargin]]" chart-data="[[chartData]]" tooltip-data="[[tooltipData]]" complete-series-config="[[completeSeriesConfig]]" x-axis-type="time" y-axis-type="linear" tooltip-style="light" muted-series="[[mutedSeries]]" hide="[[!_computedShowTooltip]]" series-keys="[[_seriesKeys]]">
    </px-vis-tooltip>

    <px-vis-clip-path svg="[[layer.1]]" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" clip-path="{{clipPath}}" series-clip-path="{{seriesClipPath}}">
    </px-vis-clip-path>

    <template id="lineTemplate" is="dom-repeat" items="[[_seriesKeys]]">
      <template is="dom-if" if="[[_chartTypeLine(item,completeSeriesConfig)]]" restamp="">
        <template id="lineCanvasTemplate" is="dom-if" if="[[renderToCanvas]]" restamp="">
          <px-vis-line-canvas id="lineCanvas" canvas-context="[[canvasContext]]" series-id="[[item]]" chart-data="[[chartData]]" complete-series-config="[[completeSeriesConfig]]" x="[[x]]" y="[[_returnYScale(item, completeSeriesConfig, domainChanged)]]" domain-changed="[[domainChanged]]" show-gaps="[[showGaps]]" muted-series="[[mutedSeries]]" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" clip-path="" interpolation-function="[[interpolationFunction]]" serie-to-redraw-on-top="[[serieToRedrawOnTop]]">
          </px-vis-line-canvas>
        </template>
        <template id="lineSVGTemplate" is="dom-if" if="[[!renderToCanvas]]" restamp="">
          <px-vis-line-svg id="lineSVG" svg="[[layer.1]]" series-id="[[item]]" chart-data="[[chartData]]" complete-series-config="[[completeSeriesConfig]]" domain-changed="[[domainChanged]]" x="[[x]]" y="[[_returnYScale(item, completeSeriesConfig, domainChanged)]]" show-gaps="[[showGaps]]" clip-path="[[seriesClipPath]]" muted-series="[[mutedSeries]]" interpolation-function="[[interpolationFunction]]" serie-to-redraw-on-top="[[serieToRedrawOnTop]]">
          </px-vis-line-svg>
        </template>
      </template>
      <template is="dom-if" if="[[_chartTypeScatter(item,completeSeriesConfig)]]" restamp="">
        <template is="dom-if" if="[[renderToCanvas]]" restamp="">
          <px-vis-scatter-canvas canvas-context="[[canvasContext]]" series-id="[[item]]" chart-data="[[chartData]]" complete-series-config="[[completeSeriesConfig]]" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" x="[[x]]" y="[[_returnYScale(item, completeSeriesConfig, domainChanged)]]" clip-path="" domain-changed="[[domainChanged]]" muted-series="[[mutedSeries]]" serie-to-redraw-on-top="[[serieToRedrawOnTop]]">
          </px-vis-scatter-canvas>
        </template>
        <template is="dom-if" if="[[!renderToCanvas]]" restamp="">
          <px-vis-scatter svg="[[layer.1]]" series-id="[[item]]" chart-data="[[chartData]]" complete-series-config="[[completeSeriesConfig]]" x="[[x]]" y="[[_returnYScale(item, completeSeriesConfig, domainChanged)]]" domain-changed="[[domainChanged]]" clip-path="[[seriesClipPath]]" muted-series="[[mutedSeries]]" serie-to-redraw-on-top="[[serieToRedrawOnTop]]">
          </px-vis-scatter>
        </template>
      </template>
    </template>

    <px-vis-markers canvas-context="[[canvasLayers.markers]]" canvas-layers-config="{{canvasLayersConfig}}" width="[[width]]" height="[[height]]" x="[[x]]" domain-changed="[[domainChanged]]" marker-data="[[markerData]]" marker-config="[[markerConfig]]" margin="[[_internalMarginMarkers]]" resources="[[resources]]" language="[[language]]" formats="[[formats]]">
    </px-vis-markers>

    <px-vis-event svg="[[layer.0]]" x-axis-type="[[xAxisType]]" event-data="[[eventData]]" height="[[height]]" margin="[[_internalMargin]]" x="[[x]]" event-config="[[eventConfig]]" domain-changed="[[domainChanged]]" clip-path="[[clipPath]]" resources="[[resources]]" language="[[language]]" formats="[[formats]]">
    </px-vis-event>

    <px-vis-threshold svg="[[layer.2]]" complete-series-config="[[completeSeriesConfig]]" threshold-data="[[thresholdData]]" threshold-config="[[thresholdConfig]]" width="[[width]]" margin="[[_internalMargin]]" y="[[y]]" domain-changed="[[domainChanged]]" clip-path="[[seriesClipPath]]" show-threshold-box="[[showThresholdBox]]" language="[[language]]">
    </px-vis-threshold>

    <px-vis-axis id="xAxis" svg="[[layer.0]]" domain-changed="[[domainChanged]]" axis="[[x]]" axis-type="[[xAxisType]]" margin="[[_internalMargin]]" width="[[width]]" height="[[height]]" orientation="[[xAxisLocation]]" label-position="after" complete-series-config="[[completeSeriesConfig]]" prevent-series-bar="">
    </px-vis-axis>

    <px-vis-multi-axis id="yAxes" svg="[[layer.0]]" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" left-axis-size="[[leftAxisSize]]" right-axis-size="[[rightAxisSize]]" x="[[_axisX]]" y="[[y]]" domain-changed="[[_bothDomainsSet(_axisDomainChanged, domainChanged)]]" complete-series-config="[[_multiAxisSeriesConfig]]" chart-data="[[chartData]]" dimensions="[[dimensions]]" axes="[[axes]]" axis-config="[[yAxisConfig]]" append-unit-in-title="" orientation-from-dimensions="" disable-brush="" cartesian-drag-behavior="" allow-empty-title="" series-to-axes="[[seriesToAxes]]" muted-series="[[mutedSeries]]" match-ticks="[[matchTicks]]" action-config="[[_axisActionConfig]]">
    </px-vis-multi-axis>

    <template is="dom-if" if="[[!hideGridlinesX]]" restamp="">
      <px-vis-gridlines svg="[[svgLower]]" axis="[[x]]" margin="[[_internalMargin]]" length="[[height]]" orientation="bottom" domain-changed="[[domainChanged]]">
      </px-vis-gridlines>
    </template>
    <template is="dom-if" if="[[_showHorizontalGrid(hideGridlinesY, axes, y, matchTicks)]]" restamp="">
      <px-vis-gridlines svg="[[svgLower]]" axis="[[_returnGridAxis(domainChanged)]]" margin="[[_internalMargin]]" length="[[width]]" orientation="left" domain-changed="[[domainChanged]]">
      </px-vis-gridlines>
    </template>

    <px-vis-interaction-space id="interactionSpace" svg="[[layer.4]]" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" x-axis-type="[[xAxisType]]" series-keys="[[_seriesKeys]]" complete-series-config="[[completeSeriesConfig]]" chart-data="[[chartData]]" chart-id="[[chartId]]" x="[[x]]" y="[[y]]" domain-changed="[[domainChanged]]" mouse-rect="{{mouseRect}}" tooltip-data="{{tooltipData}}" crosshair-data="{{crosshairData}}" default-empty-data="[[defaultEmptyData]]" generating-crosshair-data="{{generatingCrosshairData}}" interaction-svg="{{interactionSvg}}" extents-data="{{extentsData}}" action-config="[[actionConfig]]" selection-type="[[selectionType]]" extents-action="{{extentsAction}}" muted-series="[[mutedSeries]]" hard-mute="[[hardMute]]" use-quadtree="" time-data="[[_getXKey(completeSeriesConfig)]]" prevent-web-worker-synchronization="[[preventWebWorkerSynchronization]]" ww-data-sync-counter="[[wwDataSyncCounter]]" log-base="[[logBase]]">
    </px-vis-interaction-space>

    <px-vis-cursor id="cursor" svg="[[layer.2]]" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" complete-series-config="[[completeSeriesConfig]]" chart-data="[[chartData]]" tooltip-data="[[_registerTooltipData]]" clip-path="[[seriesClipPath]]" muted-series="[[mutedSeries]]" hard-mute="[[hardMute]]" series-keys="[[_seriesKeys]]">
    </px-vis-cursor>

    <template id="highlighterDomIf" is="dom-if" if="[[renderToCanvas]]" restamp="" on-dom-change="_highlighterConfigChanged">
      <px-vis-highlight-point-canvas id="highlighterCanvas" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" canvas-context="[[canvasLayers.highlighter]]" canvas-layers-config="{{canvasLayersConfig}}" layers-to-mask="[[canvasContext]]" x="[[x]]" y="[[y]]" clip-path="" domain-changed="[[domainChanged]]" time-data="[[_getXKey(completeSeriesConfig)]]" complete-series-config="[[completeSeriesConfig]]" series-keys="[[_seriesKeys]]" chart-data="[[chartData]]" generating-crosshair-data="[[generatingCrosshairData]]" crosshair-data="[[crosshairData]]" default-empty-data="{{defaultEmptyData}}" tooltip-data="{{tooltipData}}" hard-mute="[[hardMute]]" muted-series="[[mutedSeries]]">
      </px-vis-highlight-point-canvas>
    </template>
    <template is="dom-if" if="[[!renderToCanvas]]" restamp="" on-dom-change="_highlighterConfigChanged">
      <px-vis-highlight-point id="highlighter" svg="[[layer.3]]" layers-to-mask="[[layer.1]]" x="[[x]]" y="[[y]]" domain-changed="[[domainChanged]]" time-data="[[_getXKey(completeSeriesConfig)]]" complete-series-config="[[completeSeriesConfig]]" chart-data="[[chartData]]" generating-crosshair-data="[[generatingCrosshairData]]" crosshair-data="[[crosshairData]]" default-empty-data="{{defaultEmptyData}}" tooltip-data="{{tooltipData}}" clip-path="[[seriesClipPath]]" hard-mute="[[hardMute]]" muted-series="[[mutedSeries]]" series-keys="[[_seriesKeys]]">
      </px-vis-highlight-point>
    </template>

    <px-vis-striping id="starsAndStripes" width="[[width]]" height="[[height]]" margin="[[_internalMargin]]" canvas-context="[[canvasLayers.striping]]" canvas-layers-config="{{canvasLayersConfig}}" x="[[x]]" domain-changed="[[domainChanged]]" clip-path="" stripe-config="[[stripeConfig]]" stripe-data="[[stripeData]]">
    </px-vis-striping>

    <template id="ref" is="dom-if" if="[[_showRef(referenceData.*)]]" restamp="">
      <px-vis-reference-curve id="referenceCurve" chart-id="[[chartId]]" svg="[[layer.2]]" x="[[x]]" y="[[y]]" domain-changed="[[domainChanged]]" reference-config="[[referenceConfig]]" reference-data="[[referenceData]]" clip-path="[[seriesClipPath]]">
      </px-vis-reference-curve>
    </template>

    <px-tooltip id="centralTooltip" smart-orientation="" ignore-target-events="" orientation="[[tooltipOrientation]]">
      <px-vis-central-tooltip-content resources="[[resources]]" use-key-if-missing="[[useKeyIfMissing]]" language="[[language]]" first-date-time-format="[[firstDateTimeFormat]]" second-date-time-format="[[secondDateTimeFormat]]" separator="[[separator]]" timezone="[[timezone]]">
      </px-vis-central-tooltip-content>
    </px-tooltip>
`,

  is: 'px-vis-timeseries',

  behaviors: [
    PxVisBehavior.observerCheck,
    PxVisBehavior.baseSize,
    PxVisBehavior.margins,
    PxVisBehavior.dataset,
    PxVisBehavior.completeSeriesConfig,
    PxVisBehavior.muteUnmuteSeries,
    PxVisBehavior.tooltipData,
    PxVisBehavior.extentsData,
    PxVisBehavior.commonMethods,
    PxVisBehavior.zoomSelection,
    PxVisBehavior.chartExtents,
    PxVisBehavior.dataExtents,
    PxVisBehavior.events,
    PxVisBehaviorD3.svg,
    PxVisBehaviorD3.svgLower,
    PxVisBehaviorD3.canvasContext,
    PxVisBehaviorD3.renderToCanvas,
    PxVisBehaviorD3.axes,
    PxVisBehaviorD3.selectedTimeDomain,
    PxVisBehaviorD3.clipPath,
    PxVisBehaviorChart.chartCommon,
    PxVisBehaviorChart.saveImage,
    PxVisBehaviorD3.domainUpdate,
    PxVisBehaviorChart.subConfiguration,
    PxVisBehaviorChart.registerConfigs,
    PxVisBehaviorChart.axisConfigs,
    PxVisBehaviorChart.registerPositioning,
    PxVisBehaviorChart.chartAutoResize,
    PxVisBehavior.thresholds,
    PxVisBehaviorChart.layers,
    PxVisBehaviorChart.navigatorConfig,
    PxVisBehavior.serieToRedrawOnTop,
    PxVisBehavior.dynamicMenuConfig,
    PxColorsBehavior.dataVisColorTheming,
    PxVisBehaviorD3.lineGaps,
    PxVisBehaviorChart.multiAxis,
    PxVisBehavior.axisTypes,
    PxVisBehaviorScale.scale,
    PxVisBehavior.actionConfig,
    PxVisBehaviorChart.zooming,
    PxVisBehaviorChart.actionRequest,
    PxVisBehaviorChart.toolbarSubConfig,
    PxVisBehaviorChart.noDebounceOnPanning,
    PxVisBehaviorChart.chartToolbarConfig,
    PxVisBehaviorChart.showTooltip,
    PxVisBehaviorD3.interpolationFunction,
    PxVisBehaviorChart.tooltipFollowMouseCalculation,
    PxVisBehaviorChart.thresholdConfig,
    PxVisBehavior.selectionType,
    PxVisBehaviorChart.highlighterConfigs,
    PxVisBehavior.crosshairData,
    PxVisBehaviorChart.webWorkerSynchronization,
    AppLocalizeBehavior,
    PxVisBehavior.stripProperties,
    PxVisBehaviorRenderer.base,
    PxVisBehavior.markers,
    PxVisBehavior.updateStylesOverride,
    PxVisBehavior.annotationData,
    PxVisBehaviorChart.cursorConfig,
    PxVisBehaviorChart.registerPagnation,
    PxVisBehaviorChart.sizeVerticalRegister,
    PxVisBehavior.referenceCurveProps,
    PxVisBehaviorChart.centralTooltip
  ],

  /**
   * Properties block, expose attribute values to the DOM via 'reflect'
   *
   * @property properties
   * @type Object
   */
  properties: {
    /**
     * Defines where to locate the X-axis.
     * - `bottom`
     * - `top`
     *
     * @property xAxisLocation
     * @type String
     * @default bottom
     */
    xAxisLocation: {
      type:String,
      value:'bottom'
    },
    /**
     * Defines where to locate the Y-axis.
     * - `left`
     * - `right`
     *
     * @property yAxisLocation
     * @type String
     * @default left
     */
    yAxisLocation: {
      type:String,
      value:'left'
    },
    /**
     * Defines the base margin for the navigator.
     *
     * @property marginNav
     * @type Object
     * @default { top: 5, right: 5, bottom: 5, left: 5}
     * @private
     */
    marginNav: {
      type: Object,
      value: { top: 5, right: 5, bottom: 5, left: 5},
    },
    /**
     * Defines the adjusted margin for adding markers. By default the chart
     * already calculates margins for the markers (taking into account
     * axes and normal margin) but this can be used to manually adjust
     * where the markers are drawn
     * margin object:
     * - top
     * - bottom
     * - left
     * - right
     * Not every property needs to be defined, only the one that have been
     * defined will be used.
     */
    marginMarkersAdjustment: {
      type: Object,
      value: {},
    },
    _internalMargin: {
      type: Object
    },
    _internalMarginNav: {
      type: Object
    },
    _internalMarginMarkers: {
      type: Object
    },
    /**
     * Configuration object for the chart. Key is the property name.
     *
     * @property options
     * @type Object
    */
    options: {
      type:Object,
      notify:true,
      observer:'_setConfig'
    },
    /**
     * container for the data object that drives the events
     * Generally loaded with an iron-ajax tag (but doesnt have to be)
     * This can be set declaratively
     *
     * @property eventData
     * @type Object
     */
    eventData: {
      type: Array,
      notify: true
    },
    pxSvgElem : {
      type: Object,
      value: function() { return {}; }
    },
    /**
     * Flag to not show a navigator in the timeseries. Set to true to disable the navigator. Default false which shows the navigator
     *
     */
    disableNavigator: {
      type: Boolean,
      value: false,
      observer: '_disableNavigatorChanged'
    },
    /**
     * Whether to hide the gridlines perpendicular to the X axis
     */
    hideGridlinesX: {
      type: Boolean,
      value: false
    },
    /**
     * Whether to hide the gridlines perpendicular to the Y axis
     */
    hideGridlinesY: {
      type: Boolean,
      value: false
    },

    _isReady: {
      type: Boolean,
      value: false
    },
    /**
     * A boolean to specify if the axis ticks should align (which affects
     * their individual range). Default (false) is for each have their own
     * ranges and tick marks may not align
     * Only useful if using multiple axis
     */
    matchTicks: {
      type: Boolean,
      value: false
    },
    _navSelectedDomain: {
      type: Object
    },
    _axisActionConfig: {
      type: Object,
      notify: true,
      computed: '_computeAxisActionConfig(dimensions.*, _isAttached)'
    },
    _navChartExtents: {
      type: Object,
      value: function() {
        return undefined;
      }
    },
    /**
     * List of key/values to be included for translating this component
     */
    resources: {
      type: Object
    },
    /**
    * set a default for localizing
    */
    language: {
      type: String,
      value: 'en'
    },
    /**
    * Use the key for localization if value for  language is missing. Should
    * always be true for  our components
    */
    useKeyIfMissing: {
      type: Boolean,
      value: true
    },

    /**
     * Holder object for the stripe highlight
     */
    _stripeHighlight: {
      type: Object
    },

    /**
     * Holder object for the stripe handles
     */
    _stripeController: {
      type: Object
    },
    /**
     * Holder object for the stripe brush
     */
    _stripeBrush: {
      type: Object
    },

    /**
     * The current data index value for the active stripe
     */
    _stripeDataIndex: {
      type: Number,
      value: null
    }
  },

  observers: [
    '_navigatorConfigChanged(navigatorConfig.*)',
    '_xAxisConfigChanged(xAxisConfig.*)',
    '_cursorConfigChanged(cursorConfig.*)',
    '_tooltipConfigChanged(tooltipConfig.*, showTooltip)',
    '_registerConfigChanged(registerConfig.*)',
    '_toolbarConfigChanged(toolbarConfig.*)',
    '_interactionSpaceConfigChanged(interactionSpaceConfig.*)',
    '_highlighterConfigChanged(highlighterConfig.*)',

    '_calcAxes(completeSeriesConfig.*)',
    '_calcAxes(leftAxisSize, rightAxisSize)',
    '_calcMargins(margin.*, marginNav.*, numRightAxes, numLeftAxes)',
    '_calcMarkerMargins(_internalMargin, marginMarkersAdjustment)',
    '_setXScale(width, _internalMargin, xAxisType)',
    '_setMultiYScale(height, _internalMargin, axes.*)',
    '_setDomainCaller(wwDataSyncCounter, x, y, dataExtents, seriesToAxes.*)',
    '_setDomainCaller(x, y, chartExtents, dataExtents)',
    '_updateDomain(selectedDomain)',
    '_navSelectedDomainChanged(_navSelectedDomain)',
    '_langChanged(language)',
    '_keepDataInSync(chartData.*, chartId)',
    '_mutedChanged(mutedSeries.*, hardMute)',
    '_tooltipDataUpdated(tooltipData.*)',

    //renderer
    '_renderChartData(domainChanged, canvasContext, chartData.*, mutedSeries.*, completeSeriesConfig.*, preventInitialDrawing, renderToCanvas)',
    '_renderHighlight(domainChanged, canvasLayers.highlighter, completeSeriesConfig.*, preventInitialDrawing)',
    '_renderSeriesOnTop(serieToRedrawOnTop)',
    '_renderMarkers(canvasLayers.markers, domainChanged, markerData, markerConfig, preventInitialDrawing)'
  ],

  listeners: {
    'px-vis-interaction-space-mouse-coords': '_stripeCoords',
    'px-vis-extents-applied': '_computeNavChartExtents'
  },

  created: function() {
    //set which element is used to calculate mouse pos for tooltip
    this._tooltipCalcHoverTargetId = 'drawingWrapper';
  },

  ready:function() {
    this.set('numberOfLayers',5);

    //set some elements so that the register knows how to calculate its height
    this.set('_verticalRegisterDrawingCanvasId', 'svgCanvas');
    this.set('_verticalRegisterHeightDeductions', ['toolbar', 'navigator']);

    //always default to a time based X axis
    if(this.xAxisType !== 'time' && this.xAxisType !== 'timeLocal') { this.set('xAxisType', 'time'); }
    if(!this.yAxisType) { this.set('yAxisType', 'linear'); }

    this._isReady = true;

    //add in our striping option
    this._extentsDataRoutes['stripe'] = '_createStripe';
  },

  _getWrapperClass: function(_registerWrapperClass) {
    var classList = _registerWrapperClass + ' flex__item wrapper'

    return classList;
  },

  /**
   * Cycles through the Configuration object and sets each property. Triggers each components declarative binding
   *
   * @method _setConfig
   */
  _setConfig: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    if(typeof(this.options) !== 'object') {
      console.error('Configuration options must be valid JSON');
      return;
    }

    var keys = Object.keys(this.options);
    for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      this.set(key, this.options[key]);
    }
  },

  _navigatorConfigChanged: function(conf) {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    if(!this._isReady) {
      setTimeout(function() {
        this._navigatorConfigChanged(conf);
      }.bind(this), 10);
    }

    if(this.$$('#navigator')) {
      this._applyConfigToElement(this.navigatorConfig, this.$$('#navigator'));
    }
  },

  _xAxisConfigChanged: function(conf) {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    this._applyConfigToElement(this.xAxisConfig, this.$.xAxis);
  },

  _tooltipConfigChanged: function(conf) {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    this._applyConfigToElement(this.tooltipConfig, this.$.tooltip);
  },

  _registerConfigChanged: function(conf) {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    this._applyConfigToElement(this.registerConfig, this.$.register);
  },

  _cursorConfigChanged: function(conf) {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    this._applyConfigToElement(this.cursorConfig, this.$.cursor);
  },

  _toolbarConfigChanged: function(conf) {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    this._applyConfigToElement(this.toolbarConfig, this.$.toolbar);
  },

  _interactionSpaceConfigChanged: function(interactionSpaceConfig) {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    this._applyConfigToElement(this.interactionSpaceConfig, this.$.interactionSpace)
  },

  _highlighterConfigChanged: function() {

    var elem = this.renderToCanvas ? this.$$('#highlighterCanvas') : this.$$('#highlighter');

    if(elem && this._doesObjHaveValues(this.highlighterConfig)) {
      this._applyConfigToElement(this.highlighterConfig, elem);
    }
  },

  /**
   * Overwrites default margins based on settings
   *
   * @method _calcMargins
   */
  _calcMargins:function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    this.debounce('_calcMargin', function() {

      var margin,
          marginNav,
          topMargin = 25,
          rightMargin = 10,
          bottomMargin = 10,
          leftMargin = 10;

      // if the dev didnt set the margin, then calc it
      if(JSON.stringify(this._defaultMargin) === JSON.stringify(this.margin)) {
        if(this.xAxisLocation === 'bottom') {
          bottomMargin = 40;
        } else if(this.xAxisLocation === 'top') {
          topMargin = 40;
        }

        if(this.yAxisLocation === 'left') {
          leftMargin = 50;
        } else if(this.yAxisLocation === 'right') {
          rightMargin = 50;
        }

        margin = {
          'top': topMargin,
          'right': rightMargin,
          'bottom': bottomMargin,
          'left': leftMargin
        };

        this._calcMultiMargins(margin, 50, 50);

      } else { //is dev set, use it
        margin = {
          'top': Number(this.margin.top) || Number(this.margin.top) === 0 ? Number(this.margin.top) : topMargin,
          'right': Number(this.margin.right) || Number(this.margin.right) === 0 ? Number(this.margin.right) : rightMargin,
          'bottom': Number(this.margin.bottom) || Number(this.margin.bottom) === 0 ? Number(this.margin.bottom) : bottomMargin,
          'left':  Number(this.margin.left) || Number(this.margin.left) === 0 ? Number(this.margin.left) : leftMargin
        };

        // FIXME
        // assume the margin is the side for one axis. Might not be a good assumption. Rethink this
        this._calcMultiMargins(margin, margin.left, margin.right);
      }

      //if marginNav not dev set
      if(JSON.stringify(this.properties.marginNav.value) === JSON.stringify(this.marginNav)) {
        //match side margins by default
        marginNav = {
          'top': 5,
          'right': margin.right,
          'bottom': 20,
          'left': margin.left
        };
      } else {
        marginNav = {
          'top': Number(this.marginNav.top),
          'right': Number(this.marginNav.right),
          'bottom': Number(this.marginNav.bottom),
          'left': Number(this.marginNav.left)
        };
      }

      this.set('_internalMargin', margin);
      this.set('_internalMarginNav', marginNav);
    }, 5);
  },

  _calcMarkerMargins: function() {
    if(this.hasUndefinedArguments(arguments)) {
      return;
    }


    var newMarg;


    //use our internal margins
    newMarg = {
      'top': this._internalMargin.top,
      'left': this._internalMargin.left,
      'right': this._internalMargin.right,
      'bottom': this._internalMargin.bottom
    }

    //account for X axis
    if(this.xAxisLocation === 'bottom') {
      newMarg.bottom -= 40;
    } else if(this.xAxisLocation === 'top') {
      newMarg.top -= 40;
    }

    //adjust if something is dev set
    newMarg.top += this.marginMarkersAdjustment.top  ? Number(this.marginMarkersAdjustment.top) : 0;
    newMarg.bottom += this.marginMarkersAdjustment.bottom  ? Number(this.marginMarkersAdjustment.bottom) : 0;
    newMarg.left += this.marginMarkersAdjustment.left  ? Number(this.marginMarkersAdjustment.left) : 0;
    newMarg.right += this.marginMarkersAdjustment.right  ? Number(this.marginMarkersAdjustment.right) : 0;


    this.set('_internalMarginMarkers', newMarg);
  },

  /**
   *
   *
   */
  _chartOrNavMargin: function(disableNavigator) {
    if(this.disableNavigator === undefined || this._internalMargin === undefined || this._internalMarginNav === undefined) {
      return;
    }
    return disableNavigator ? this._internalMargin : this._internalMarginNav;
  },

  /**
  *
  *
  */
  _resizeCalculations: function() {
    var wrapperRect = this.$.wrapper.getBoundingClientRect(),
        navigatorHeight = this.disableNavigator ? 0 : this.$$('#navigator').height,
        registerRect = this.$.register.getBoundingClientRect(),
        toolbarRect = this.$.toolbar.getBoundingClientRect(),
        widthDeduct = 0,
        heightDeduct = 0;

    if(this.$.register.type === 'horizontal') {
      heightDeduct += registerRect.height;
    } else {
      widthDeduct += registerRect.width;
    }

    heightDeduct += toolbarRect.height;
    heightDeduct += navigatorHeight;

    this.set('width', Math.max(wrapperRect.width - widthDeduct, 0));
    this.set('height', Math.max(wrapperRect.height - heightDeduct, 0));
    this._computeVerticalRegisterHeight([navigatorHeight, toolbarRect.height]);
  },

  /**
   * gets a combined graphical snapshot of the chart and its navigator
   */
  getCombinedImage: function(callback,  renderLegend) {
    this.getImage(function(chartSnap) {
      if(!this.disableNavigator) {
        this.$$('#navigator').getImage(function(navigatorSnap) {
          var canvas = document.createElement('canvas'),
              context;
          canvas.width = Math.max(chartSnap.canvas.width, navigatorSnap.canvas.width);
          canvas.height = chartSnap.canvas.height + navigatorSnap.canvas.height;
          context = canvas.getContext('2d');

          context.drawImage(chartSnap.canvas, 0, 0);
          context.drawImage(navigatorSnap.canvas, 0, chartSnap.canvas.height);

          callback({canvas: canvas, image: canvas.toDataURL("image/png")});
        }.bind(this));
      } else {
        callback({canvas: chartSnap.canvas, image: chartSnap.canvas.toDataURL("image/png")});
      }
    }.bind(this), renderLegend);
  },

  /**
   *
   *
   */
  _disableNavigatorChanged: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    if(!this._disableNavigator && this.navigatorConfig) {
      //make sure dom if is rendered
      this.$.navTemplate.render();
      this._navigatorConfigChanged();
    }
  },

  /**
   *
   *
   */
  _showHorizontalGrid: function(hideGrid, axes, y, matchTicks) {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    if(hideGrid) {
      return false;
    }

    if(this.axes.length > 1 && !matchTicks) {
      return false;
    }

    return true;
  },

  /**
   *
   *
   */
  _returnGridAxis: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

      return this.y[this.axes[0]];
  },

  /**
   *
   *
   */
  _returnXDomain: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    if(this.domainChanged && !this.disableDynamicUpdate && this.x) {
      return this.x.domain();
    }
  },

  _mutedChanged: function() {
    if(this.hasUndefinedArguments(arguments)) {
      return;
    }

    if(this.hardMute === true) {
      this._setDomainCaller();
    }
  },

  /**
   *
   *
   */
  _setDomainCaller: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    if(this._doesObjHaveValues(this.seriesToAxes)) {
      this._setDomain();
    }
  },

  /**
   *
   *
   */
  _bothDomainsSet: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    if(this.domainChanged && this._axisDomainChanged) {
     	// check if 'this.$.yAxes.domainChanged' is undefined use
      // 'this.domainChanged' to initialize 'domainChanged' property on 'px-vis-multi-axis'
      return this.$.yAxes.domainChanged ? (this.$.yAxes.domainChanged + 1) : (this.domainChanged + 1);
    }
  },

  /**
   *
   *
   */
  _navSelectedDomainChanged: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    this.set('selectedDomain', this._navSelectedDomain);
  },

  /**
   *
   *
   */
  _getXKey: function() {
    if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    var keys = Object.keys(this.completeSeriesConfig);

    if(keys && keys.length) {
      return this.completeSeriesConfig[keys[0]]['x'];
    } else {
      return '';
    }
  },

  /**
   *
   *
   */
  _computeAxisActionConfig: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }

    var conf;

    conf = this.dimensions.length > 2 ? {
        "mouseout": null,
        "mousemove": null,
        "mousedown": 'callAxisDrag',
        "mouseup": 'callAxisDrag'
      } : {
        "mouseout": null,
        "mousemove": null,
        "mousedown": null,
        "mouseup": null
      };

    return conf;
  },

  /**
   *
   *
   */
  _computeNavChartExtents: function(e) {
    if(dom(e).rootTarget === this) {
      this.set('_navChartExtents', e.detail);
      this.set('_navSelectedDomain', e.detail);
    }
  },

  /**
   *
   *
   */
  _langChanged: function() {
   if(this.hasUndefinedArguments(arguments)) {
     return;
   }


    //recreate X and Y in case d3 locale changed
    this._recreateScales(this.width, this.height, this._internalMargin);
  },

  /**
   * Creates a new stripe: checks that we have the necessary values and vars
   *
   */
  _createStripe: function() {
    if(this.extentsAction !== 'stripe') {
      return;
    }

    if(!this.stripeType) {
      console.warn("No stripe type specified. Aborting creation");
      return;
    }

    if(typeof this.stripeData[this.stripeType] === 'undefined') {
      this.stripeData[this.stripeType] = [];
    }

    this._addStripeToData();
  },

  /**
   * Addes a new stripe to the dataset
   *
   */
  _addStripeToData: function() {
    var indexes = [],
        exts = this._checkForOverlap(this.extentsData.eX, indexes);

    if(exts) {
      this._deleteRedundantStripes(indexes);
      // TODO order set
      this.push('stripeData.' + this.stripeType, exts);
    }
  },

  /**
   * Look through our stripes and make sure they do not overlap
   *
   */
  _checkForOverlap: function(exts, indexes) {
    var d = this.stripeData[this.stripeType],
        tMin = exts[0],
        tMax = exts[1];

    for(var i=0; i<d.length; i++) {
      // new box fits wholly inside old box
      if(tMin >= d[i][0] && tMax <= d[i][1]) {
        tMin = d[i][0];
        tMax = d[i][1];

        // assume we dont need to check anymore because everything else has already been checked for overlap
        return false;

      // if our new box fully encompasses an old box
      } else if(tMin < d[i][0] && tMax > d[i][1]) {
        indexes.push(i);

      // our new box overlaps lower end of old box
      } else if(tMin <= d[i][0] && tMax >= d[i][0] && tMax <= d[i][1]) {
        tMax = d[i][1];
        indexes.push(i);

      // our new box overlaps upper end of old box
      } else if(tMin >= d[i][0] && tMin <= d[i][1] && tMax >= d[i][1]) {
        tMin = d[i][0];
        indexes.push(i);
      }
    }

    return [ tMin, tMax ];
  },

  /**
   * Removes overlapped stripes from the dataset
   *
   */
  _deleteRedundantStripes: function(indexes) {
    for(var i = indexes.length - 1; i > -1; i--) {
      this.stripeData[this.stripeType].splice(indexes[i], 1);
    }
  },

  /**
   * Debounces mousemove for calc stripe coords
   *
   */
  _stripeCoords: function(evt) {
    this.debounce('stripeHover', function() {
      this._stripeCoordsDebounced(evt);
    }, 10);
  },

  /**
   * On mousemove from the IS, calcs the mouse pos and if we are hovering over a stripe.
   *
   */
  _stripeCoordsDebounced: function(evt) {
    if(this.extentsAction !== 'stripe') {
      return;
    }

    if(!this.stripeData[this.stripeType] || this.stripeData[this.stripeType].length === 0) {
      return;
    }

    if(this._isObjEmpty(this._stripeController)) {
      this._buildStripeHandles();
    }

    var mousePos = evt.detail.mouse,
        t = this.x.invert(mousePos[0]),
        dataset = this.stripeData[this.stripeType],
        found = false;

    for(var i=0; i <dataset.length; i++) {
      // check if single vector
      if(!dataset[i][1] && dataset[i][1] !== 0) {
        if(~~this.x(dataset[i][0]) === ~~mousePos[0]) {
          this._hoverSingleVectorStripe(i);
          break;
        }

      // checks if we are within the range of a stripe
      } else if(dataset[i][0] <= t && dataset[i][1] >= t) {
        this._hoverEditableStripe(i);

        //there should only be one, so if found, stop checking
        break;
      }
    }
  },

  /**
   * Removes a stripe from the dataset
   *
   */
  _deleteStripe: function() {
    this.splice('stripeData.' + this.stripeType, this._stripeDataIndex, 1);
    this._hideStripeHover();
  },

  /**
   * When a stripe is hovered over, set up our brush to capture other interactions
   *
   */
  _hoverEditableStripe: function(index) {
    var x0 = this.x(this.stripeData[this.stripeType][index][0]),
        x1 = this.stripeData[this.stripeType][index][1] || this.stripeData[this.stripeType][index][1] === 0 ? this.x(this.stripeData[this.stripeType][index][1]) : this.x(this.stripeData[this.stripeType][index][0] + 1),
        w = x1 - x0;

    this._stripeHighlight
      .attr('stroke', this.stripeConfig[this.stripeType]['fillColor'])
      .on("click", this._deleteStripe.bind(this))
      .attr('pointer-events', 'all')
      .style('visibility', null);

    this._stripeController.select("rect.overlay")
      .attr('pointer-events', 'all');

    this._stripeController
      .on("click", this._deleteStripe.bind(this))
      //turn off when you leave out the top of bottomv
      .on("mouseleave", this._hideStripeHover.bind(this))
      //turn off when you leave out the sides
      .on("mousemove", function() {
          if(dom(Px.d3.event).path[0].classList.contains('overlay')) {
            this._hideStripeHover();
          }
      }.bind(this))
      .call(this._stripeBrush.move, [x0, x1]);

    this._stripeBrush
      .on("start", this._stripeEditStart.bind(this))
      .on("end", this._stripeEditEnd.bind(this));

    this._stripeDataIndex = index;

  },

  _hoverSingleVectorStripe: function(index) {
    const x0 = this.x(this.stripeData[this.stripeType][index][0]);
    const _this = this;
    this.layer[4].append("line")
      .attr('x1', x0)
      .attr('x2', x0)
      .attr('y1', this._internalMargin.top)
      .attr('y2', this.height - this._internalMargin.top - this._internalMargin.bottom)
      .attr('stroke', this.stripeConfig[this.stripeType]['fillColor'])
      .attr('stroke-dasharray', this.stripeConfig[this.stripeType]['dash'])
      .attr('stroke-width', 4)
      .attr('shape-rendering','crispEdges')
      .attr('pointer-events', 'all')
      .on('click', function() {
        _this._deleteStripe();
        this.remove();
      })
      .on('mouseleave', function() { this.remove(); });
  },

  /**
   * builds the brush for capturing other stripe interactions
   *
   */
  _buildStripeHandles: function() {
    var h = Math.max(this.height - this._internalMargin.bottom - this._internalMargin.top, 1),
        xRange = this.x.range(),
        range = [
          [xRange[0], 0],
          [xRange[1], h]
        ],
        overlay;

    this._stripeBrush = Px.d3.brushX()
      .extent(range)
      .handleSize(6);

    this._stripeController = this.layer[4].append("g")
      .attr("class", "brush")
      .call(this._stripeBrush)
      .call(this._stripeBrush.move, null);

    // Need to turn off pointer events so the interaction space rect gets them.
    this._stripeController.select("rect.overlay").attr('pointer-events', 'none')

    this._stripeHighlight = this._stripeController.select("rect.selection")
      .attr('fill', 'transparent')
      .attr('stroke-width', 4)
      .attr('shape-rendering','crispEdges');

  },

  /**
   * Hides the brush for strip edits
   *
   */
  _hideStripeHover: function() {
    // turn off listeners before moving brush
    this._stripeBrush
      .on("start", null)
      .on("brush", null)
      .on("end", null);

    this._stripeHighlight.style('visibility', 'hidden');

    this._stripeController
      .on("click", null)
      .on("mouseout", null)
      .call(this._stripeBrush.move, null);

    this._stripeController.select("rect.overlay").attr('pointer-events', 'none')

  },

  /**
   * Runs when a brush is first interacted with
   *
   */
  _stripeEditStart: function() {
    // kill listener so it doesnt activate while brushing
    this._stripeController
      .on("mouseout", null);
  },

  /**
   * When they are done interacting with a brush, calc its new size
   *
   */
  _stripeEditEnd: function() {
    this.debounce('stripeBrushed', function () {
      var brushExt = Px.d3.brushSelection(this._stripeController.node());

      if(brushExt) {
        this._deleteStripe();

        // mock a extentsDataChange to pass data to the stripe creation fn
        if(!this.extentsData) { this.extentsData = {}; }
        this.extentsData.eX = [this.x.invert(brushExt[0]).getTime(), this.x.invert(brushExt[1]).getTime()];
        this._createStripe();
      }
    }, 10);
  },

  _showRef() {
    return this.referenceData && this.referenceData.length ? true : false;
  }
});