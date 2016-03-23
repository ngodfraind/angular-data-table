import { ActionController } from './ActionController';

export function ActionDirective(){
  return {
    restrict: 'E',
    controller: ActionController,
    controllerAs: 'action',
    scope: true,
    bindToController: {
      options: '='
    },
    template:
      `<dt-size-selector
        ng-if="dt.options.sizes"
        options="dt.options"
      >
      </dt-size-selector>
      <dt-column-selector
       ng-if="dt.options.availableColumns"
       options="dt.options"
      `,
    replace: true
  };
};
