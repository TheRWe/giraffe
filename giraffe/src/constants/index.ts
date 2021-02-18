import {
  curveLinear,
  curveMonotoneY,
  curveMonotoneX,
  curveBasis,
  curveStep,
  curveStepAfter,
  curveStepBefore,
  curveNatural,
} from 'd3-shape'

import {Config, LayerConfig, SymbolType} from '../types'
import {CANDLESTICK_THEME_DARK} from './candlestickStyles'
import {NINETEEN_EIGHTY_FOUR as DEFAULT_COLOR_SCHEME} from './colorSchemes'

// TODO: Make configurable
export const TICK_PADDING_RIGHT = 8
export const TICK_PADDING_TOP = 8
export const AXIS_LABEL_PADDING_BOTTOM = 15
export const DEFAULT_RANGE_PADDING = 0 // pixels

export const SCATTER_POINT_SIZE = 6
export const SCATTER_HOVER_POINT_SIZE = 12

export const CURVES = {
  linear: curveLinear,
  monotoneX: curveMonotoneX,
  monotoneY: curveMonotoneY,
  cubic: curveBasis,
  step: curveStep,
  stepBefore: curveStepBefore,
  stepAfter: curveStepAfter,
  natural: curveNatural,
}

export const CONFIG_DEFAULTS: Partial<Config> = {
  layers: [],
  valueFormatters: {},
  xAxisLabel: '',
  yAxisLabel: '',
  xScale: 'linear',
  yScale: 'linear',
  showAxes: true,
  axisColor: '#292933',
  axisOpacity: 1,
  gridColor: '#292933',
  gridOpacity: 1,
  tickFont: '10px sans-serif',
  tickFontColor: '#8e91a1',
  legendFont: '10px monospace',
  legendFontColor: '#bec2cc',
  legendFontBrightColor: '#f6f6f8',
  legendBackgroundColor: '#0f0e15',
  legendBorder: '2px solid #202028',
  legendCrosshairColor: '#31313d',
  legendColorizeRows: true,
}

export const LAYER_DEFAULTS: {
  [layerType in LayerConfig['type']]?: Partial<LayerConfig>
} = {
  line: {
    lineWidth: 1,
    hoverDimension: 'auto',
    fill: [],
    colors: DEFAULT_COLOR_SCHEME,
    interpolation: 'linear',
    maxTooltipRows: 24,
    shadeBelow: false,
    shadeBelowOpacity: 0.1,
  },
  heatmap: {
    colors: DEFAULT_COLOR_SCHEME,
    binSize: 10,
    strokeWidth: 0,
    strokePadding: 0,
    strokeOpacity: 0,
    fillOpacity: 1,
  },
  scatter: {
    colors: DEFAULT_COLOR_SCHEME,
    fill: [],
    symbol: [],
  },
  histogram: {
    fill: [],
    colors: DEFAULT_COLOR_SCHEME,
    position: 'stacked',
    binCount: null,
    strokeWidth: 1,
    strokePadding: 0.75,
    strokeOpacity: 1,
    fillOpacity: 0.75,
  },
  mosaic: {
    yLabelColumns: [],
    yLabelColumnSeparator: '',
    fill: [],
    hoverDimension: 'auto',
    colors: DEFAULT_COLOR_SCHEME,
    strokeWidth: 1,
    strokePadding: 0.75,
    strokeOpacity: 1,
    fillOpacity: 0.75,
  },
  candlestick: CANDLESTICK_THEME_DARK,
}

export const ALL_SYMBOL_TYPES: SymbolType[] = [
  'circle',
  'plus',
  'triangle',
  'square',
  'tritip',
  'ex',
]

/****************************************************************
 * Band Plot uses up to 3 "lines" of data:
 * upper, middle, lower
 * which will have the same color when shaded.
 *
 * When there are multiple bands on the same plot,
 * we want to contrast the bands to make them easily
 * distinguishable.
 *
 * Allow each band to take up 3 colors on the color scale,
 * even though only the first color is used. This is a simple way
 * to scale the band colors, and takes up the same scale with
 * the same number of total lines as Line Plot.
 */
export const BAND_COLOR_SCALE_CONSTANT = 3

export const TOOLTIP_MINIMUM_OPACITY = 0
export const TOOLTIP_MAXIMUM_OPACITY = 1.0

export const CLOCKFACE_Z_INDEX = 9599

export const TICK_COUNT_LIMIT = 1000

export const ANNOTATION_DEFAULT_HOVER_MARGIN = 20

export const ANNOTATION_TOOLTIP_CONTAINER_NAME =
  'giraffe-annotation-tooltip-container'

// Geo stuff
export const LEAFLET_Z_INDEX = 399
