## Compose Filters

Simple package for composing multiple filtering functions. Filtering functions can, therefore, be more simplified for readability/simplicity.

### Example

```
import composeFilters from 'compose-filters';

const divisibleBy = (num) => (value) => value % num === 0;

const filters = [
  divisibleBy(3),
  divisibleBy(4),
  divisibleBy(5),
];
const filterFn = composeFilters(...filters);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const myFavNums = numbers.filter(filterFn);

console.log(myFavNums); // [1, 2, 7, 11, 13, 14, 17, 19]
```

### Performance

Filtering functions are only used if previous ones would not exclude an element; this maximizes performance.
