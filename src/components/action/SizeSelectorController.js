export class SizeSelectorController {
    constructor() {
    }

    onChange() {
        console.log(this.options.paging)
        this.options.paging.offset = 0

        this.onPage({
          offset: this.options.paging.offset,
          size: this.options.paging.size
      });
    }
}
