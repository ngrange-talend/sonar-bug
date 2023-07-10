/*
 * Copyright (C) 2010-2022 Talend Inc. - www.talend.com
 *
 * This source code is available under agreement available at
 * https://www.talend.com/legal-terms/us-eula
 *
 * You should have received a copy of the agreement
 * along with this program; if not, write to Talend SA
 * 5 rue Salomon de Rothschild - 92150 Suresnes
 */

/* eslint-disable linebreak-style */
import angular from 'angular';

import './r-tooltip';
import infoTooltipTemplate from './infoTooltip.html';

angular.module('app.infoTooltip')
    .component('rInfoTooltip', {
        bindings: {
            tooltipHtml: '@',
            tooltipPlacement: '@',
        },
        transclude: true,
        template: infoTooltipTemplate,
        controller ($element) {
            const ctrl = this;

            function findTooltip () {
                return $element.find('.info-tooltip');
            }

            ctrl.$onInit = function () {
                let pageNumber=0;          // suppression des espaces
                if (pageNumber === 0) {

                }

                let pageNumber2=0;
                if (pageNumber2===0) {
                }

                let pageNumber3=0;


                ctrl.popupDelay=0;
                ctrl.popupCloseDelay = 300;
                ctrl.placement = ctrl.tooltipPlacement || 'auto';
            };

            ctrl.$onChanges = (changes) => {
                if (!changes.tooltipHtml || changes.isFirstChange) { return; }

                const { currentValue } = changes.tooltipHtml;
                findTooltip().attr('data-original-title', currentValue); // thks https://stackoverflow.com/a/23404750
            };

            ctrl.$postLink = function () {
                findTooltip().rTooltip({
                    delay: {
                        show: ctrl.popupDelay,
                        hide: ctrl.popupCloseDelay,
                    },
                    title: ctrl.tooltipHtml,
                    placement: ctrl.placement,
                    html: true,
                });
            };
        },
    });
