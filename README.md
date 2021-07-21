# Log Minion

## Usage

#### Install Package
`npm install log-minion`

#### Log Minions

```
import { logMinion } from 'log-minion';

// You may log a minion with the import function logMinion
logMinion(1);

// Or use console.minion
console.minion(2);
```

## API

### logMinion(numberOfEyes)
Logs a Minion with the specified number of eyes.

#### Parameters
`numberOfEyes` The number of Eyes you want your minion to have.

## Examples
```
import { logMinion } from 'log-minion';

logMinion(1);
```
#### Output
![Minion with one eye](./readme-files/minion-1.png)

```
import { logMinion } from 'log-minion';

logMinion(2);
```
#### Output
![Minion with two eyes](./readme-files/minion-2.png)


## FAQ

### Why?
So that you can log Minions.

### By adding the `minion()` method to `console` won't this package cause unpredictable behavior if future JavaScript engines or other Minion logging packages add their own `minion()` method to `console`?
Yes.
