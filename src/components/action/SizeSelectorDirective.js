import { SizeSelectorController } from './SizeSelectorController'

export function SizeSelectorDirective() {
  return {
    restrict: 'E',
    controller: SizeSelectorController,
    controllerAs: 'size',
    scope: true,
    bindToController: {
      options: '=',
      onPage: '&'
    },
    template: `
      <select
        ng-change="size.onChange()"
        ng-model="size.options.paging.size"
        ng-init="size.options.paging.size"
      >
        <option ng-repeat="el in size.options.sizes" ng-value="el"> {{ el }} </option>
      </select>
      `,
    replace: true
  }
}
