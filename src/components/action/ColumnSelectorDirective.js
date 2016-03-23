import { ColumnSelectorController } from './ColumnSelectorController'

export function SizeSelectorDirective() {
  return {
    restrict: 'E',
    controller: ColumnSelectorController,
    controllerAs: 'columnSelector',
    bindToController: {
      options: '='
    },
    template: `
      <select
        ng-change="columnSelector.onChange()"
        ng-options="value for (key, value) in columnSelector.options.availableColumns"
      >
      </select>
      `,
    replace: true
  }
}
