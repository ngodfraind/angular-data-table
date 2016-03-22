import { ActionController } from './ActionController';

export function SizeSelectorDirective(){
  return {
    restrict: 'E',
    controller: ActionController,
    controllerAs: 'action',
    scope: true,
    bindToController: {
      size: '='
    },
    template:
      `<dt-size-selector
        size="action.size"
      >
      </dt-size-selector>`,
    replace: true
  };
};
