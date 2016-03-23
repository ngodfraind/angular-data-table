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
        ng-if="dt.options.sizes.length > 1"
        options="dt.options"
      >
      </dt-size-selector>`,
    replace: true
  };
};
