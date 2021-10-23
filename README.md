# @calipsa/tz-utils

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

<p>tz-utils is a lightweight library to convert/format dates from one timezone to a different timezone.</p>

## Installation
```bash
# using npm:
npm install --save @calipsa/tz-utils

# or if you like yarn:
yarn add @calipsa/tz-utils
```

## Available Methods

<h4>formatDateTz</h4>
<p>You can use this function to convert the date to a different timezone.</p>
<table>
  <thead>
    <tr>
      <td>
        Param
      </td>
      <td>
        Type
      </td>
      <td>
        Required
      </td>
      <td>
        Description
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        date
      </td>
      <td>
        Date || Number || String
      </td>
      <td>
        yes
      </td>
      <td>
        Date you want to format. It can be a date object, date string or a number in milliseconds
      </td>
    </tr>
    <tr>
      <td>
        format
      </td>
      <td>
        String
      </td>
      <td>
        yes
      </td>
      <td>
        The format you want to convert date to.
      </td>
    </tr>
    <tr>
      <td>
        timezone
      </td>
      <td>
        String
      </td>
      <td>
        yes
      </td>
      <td>
        The timezone you want to convert to, can be full timezone names like <code>America/New_York</code> or abbreviations like <code>EST5EDT</code>
      </td>
    </tr>
  </tbody>
</table>

<h4>Usage</h4>

```javascript
import {
  formatDateTz,
} from '@calipsa/tz-utils'

const date = new Date('2021-10-10T03:00:00.005Z')

const dateInNYTz = formatDateTz(date, 'yyyy-MM-dd hh:mm:ss', 'America/New_York')
```

<h4>names</h4>
<p>It is a list of all timezones accepted by date-fns library.</p>

<h4>Usage</h4>

```javascript
import {
  names,
} from '@calipsa/tz-utils'

// names is an array containing all timezones as string values
```

<h4>deprecatedNames</h4>
<p>It is a list of all deprecated timezones.</p>

<h4>Usage</h4>

```javascript
import {
  deprecatedNames,
} from '@calipsa/tz-utils'

// deprecatedNames is an array containing all deprecated timezones as string values
```

<h4>notWorkingInDateFns</h4>
<p>It is a list of all timezones that are not compatible with date-fns library.</p>

<h4>Usage</h4>

```javascript
import {
  notWorkingInDateFns,
} from '@calipsa/tz-utils'

// notWorkingInDateFns is an array containing all non-compatible timezones as string values
```

<h4>offset</h4>
<p>You can use this function to get the time difference of the passed timezone from UTC. The return value will be a number, representing difference in minutes.</p>

<table>
  <thead>
    <tr>
      <td>
        Param
      </td>
      <td>
        Type
      </td>
      <td>
        Required
      </td>
      <td>
        Description
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        timezone
      </td>
      <td>
        String
      </td>
      <td>
        yes
      </td>
      <td>
        The timezone you want to get offset for. It can be full timezone names like <code>America/New_York</code> or abbreviations like <code>EST5EDT</code>
      </td>
    </tr>
  </tbody>
</table>

<h4>Usage</h4>

```javascript
import {
  offset,
} from '@calipsa/tz-utils'

const offsetNYC = offset('America/New_York') // will return -240 (GMT-4)

const offsetKarachi = offset('Asia/Karachi') // will return 300 (GMT+5)
```
<h4>offsetFormattedShort</h4>
<p>You can use this function to get the time difference of the passed timezone from UTC. The return value will be a string like <code>GMT-4</code> or <code>GMT+5:30</code>.</p>

<table>
  <thead>
    <tr>
      <td>
        Param
      </td>
      <td>
        Type
      </td>
      <td>
        Required
      </td>
      <td>
        Description
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        timezone
      </td>
      <td>
        String
      </td>
      <td>
        yes
      </td>
      <td>
        The timezone you want to get offset for. It can be full timezone names like <code>America/New_York</code> or abbreviations like <code>EST5EDT</code>
      </td>
    </tr>
  </tbody>
</table>

<h4>Usage</h4>

```javascript
import {
  offsetFormattedShort,
} from '@calipsa/tz-utils'

const offsetNYC = offset('America/New_York') // will return GMT-4

const offsetKarachi = offset('Asia/Kolkata') // will return GMT+05:30
```

<h4>offsetFormattedLong</h4>
<p>You can use this function to get the time difference of the passed timezone from UTC. The return value will be a string like <code>GMT-04:00</code>.</p>

<table>
  <thead>
    <tr>
      <td>
        Param
      </td>
      <td>
        Type
      </td>
      <td>
        Required
      </td>
      <td>
        Description
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        timezone
      </td>
      <td>
        String
      </td>
      <td>
        yes
      </td>
      <td>
        The timezone you want to get offset for. It can be full timezone names like <code>America/New_York</code> or abbreviations like <code>EST5EDT</code>
      </td>
    </tr>
  </tbody>
</table>

<h4>Usage</h4>

```javascript
import {
  offsetFormattedLong,
} from '@calipsa/tz-utils'

const offsetNYC = offset('America/New_York') // will return GMT-04:00

const offsetKarachi = offset('Asia/Karachi') // will return GMT+05:00
```

<h4>suggested</h4>
<p>You can use this function to get your system's timezone. It will return string representing your timezone like <code>America/New_York</code>.</p>

<h4>Usage</h4>

```javascript
import {
  suggested,
} from '@calipsa/tz-utils'

const timezone = suggested()
```


## Usage
```javascript
import {
  formatDateTz,
  names,
  offset,
  offsetFormattedLong,
  offsetFormattedShort,
  suggested,
} from '@calipsa/tz-utils'

// ...
```

[npm-url]: https://npmjs.org/package/@calipsa/tz-utils
[downloads-image]: http://img.shields.io/npm/dm/@calipsa/tz-utils.svg
[npm-image]: http://img.shields.io/npm/v/@calipsa/tz-utils.svg
[david-dm-url]:https://david-dm.org/inker/@calipsa/tz-utils
[david-dm-image]:https://david-dm.org/inker/@calipsa/tz-utils.svg
[david-dm-dev-url]:https://david-dm.org/inker/@calipsa/tz-utils#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/@calipsa/tz-utils/dev-status.svg
