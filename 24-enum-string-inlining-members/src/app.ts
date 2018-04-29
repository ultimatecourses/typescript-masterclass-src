const enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void {
  selected = size;
}

updateSize(Sizes.Large);

console.log(selected);
