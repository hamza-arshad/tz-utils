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

[npm-url]: https://npmjs.org/package/@calipsa/tz-utils
[downloads-image]: http://img.shields.io/npm/dm/@calipsa/tz-utils.svg
[npm-image]: http://img.shields.io/npm/v/@calipsa/tz-utils.svg
[david-dm-url]:https://david-dm.org/inker/@calipsa/tz-utils
[david-dm-image]:https://david-dm.org/inker/@calipsa/tz-utils.svg
[david-dm-dev-url]:https://david-dm.org/inker/@calipsa/tz-utils#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/@calipsa/tz-utils/dev-status.svg
