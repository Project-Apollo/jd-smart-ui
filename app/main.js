// style
import './assets/style';
import './assets/DateSelector';
import './assets/DateSelector_ext';

import UI from './core/UI';

import JDUICache from './core/JDUICache';
global.JDUICache = JDUICache;

import components from './componentList';

$(function() {
    JDUI.style.update();
});