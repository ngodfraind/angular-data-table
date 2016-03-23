import { SizeSelectorController } from './SizeSelectorController'

export function SizeSelectorDirective() {
  return {
    restrict: 'E',
    controller: SizeSelectorController,
    controllerAs: 'size',
    bindToController: {
      options: '=',
      onPage: '&'
    },
    template: `
      <select
        ng-change="size.onChange()"
        ng-model="size.options.paging.size"
        ng-init="size.options.paging.size"
        ng-options="value * 1 as value for (key, value) in size.options.sizes"
      >
      </select>
      `,
    replace: true
  }
}
