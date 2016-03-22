import { SizeSelectorController } from './SizeSelectorController';

export function SizeSelectorDirective(){
  return {
    restrict: 'E',
    controller: SizeSelectorController,
    controllerAs: 'size',
    scope: true,
    bindToController: {
      size: '='
    },
    template:
      `show the size list here`,
    replace: true
  };
};
