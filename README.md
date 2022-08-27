# timezones

## Overview

A light and fast package to lookup timezones, get current datetime in any timezone, convert datetime timezones from utc to another timezone or vica-versa.

<!-- ## Installation

```bash
npm install timezones
``` -->

## Usage

Just import the timezones package.

``` js
const timezones = require("timezones")
```

## Methods

- [getAllTimezoneDetails()](#getAllTimezoneDetails)
- [getTimezoneDetails()](#getTimezoneDetails)
- [getOffset()](#getOffset)
- [convertFromUTC()](#convertFromUTC)
- [convertToUTC()](#convertToUTC)
- [getCurrentDateTime()](#getCurrentDateTime)


## Examples

### getAllTimezoneDetails()

- Will return all the available timezones, their abbreviation and their utc_offset.
- No Parameters
- Example:
``` js
const allTimezones = timezones.getAllTimezoneDetails();
console.log(allTimezones);

/*
Output:
[
    { zone: 'Africa/Abidjan', abbreviation: 'GMT', utc_offset: '+00:00' },
    { zone: 'Africa/Accra', abbreviation: 'GMT', utc_offset: '+00:00' },
    { zone: 'Africa/Algiers', abbreviation: 'CET', utc_offset: '+01:00' },
    { zone: 'Africa/Bissau', abbreviation: 'GMT', utc_offset: '+00:00' },
    { zone: 'Africa/Cairo', abbreviation: 'EET', utc_offset: '+02:00' },
    ... more items
]
*/
```
***

### getTimezoneDetails()

- Will return timezones, it's abbreviation and utc_offset.
- Parameters:
    - `timezone` *(required)*
- Examples:
``` js
//Example 1
const timezoneDetails = timezones.getTimezoneDetails("Africa/Cairo");
console.log(timezoneDetails);

/*
Output:
{
  status: 'OK',
  zone: 'Africa/Cairo',
  abbreviation: 'EET',
  utc_offset: '+02:00'
}
*/
```
``` js
//Example 2
const timezoneDetails = timezones.getTimezoneDetails("Abc");
console.log(timezoneDetails);

/*
Output:
{
    status: 'Zone Not Found'
}
*/
```
``` js
//Example 3
const timezoneDetails = timezones.getTimezoneDetails();
console.log(timezoneDetails);

/*
Output:
{
    status: 'Invalid call: timezone is required field'
}
*/
```
***

### getOffset()

- Will return utc_offset of required timezone.
- Parameters:
    - `timezone` *(required)*
- Examples:
``` js
//Example 1
const offset = timezones.getOffset("Asia/Oral");
console.log(offset);

/*
Output:
{
    status: 'OK',
    utc_offset: '+05:00'
}
*/
```
``` js
//Example 2
const offset = timezones.getOffset("Abc");
console.log(offset);

/*
Output:
{
    status: 'Zone Not Found'
}
*/
```
``` js
//Example 3
const offset = timezones.getOffset();
console.log(offset);

/*
Output:
{
    status: 'Invalid call: timezone is required field'
}
*/
```
***

### convertFromUTC()

- Will return date (in ISO Format) in required timezone.
- Parameters:
    - `date` *(required) Must be a JS Date* 
    - `utc_offset`
    - `zone`
- **Note:** If both utc_offset and zone are not passed, function will just format ***`date`*** to ISO format and return it.
- Examples:
``` js
//Example 1
const required_date = timezones.convertFromUTC();
console.log(required_date);

/*
Output:
{
    status: 'Invalid Date'
}
*/
```
``` js
//Example 2
const required_date = timezones.convertFromUTC({date : "2022/11/06"});
console.log(required_date);

/*
Output:
{
    status: 'Invalid Date'
}
*/
// Reason: Date is not an JS Date
```
``` js
//Example 3
const inputDate = new Date("Wed May 18 2022 21:38:17 GMT+0000");
const required_date = timezones.convertFromUTC({date : inputDate});
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-05-18T21:38:17.000Z'
}
*/
```
``` js
//Example 4
const inputDate = new Date("Wed May 18 2022 21:38:17 GMT+0000");
const required_date = timezones.convertFromUTC({date : inputDate, utc_offset : "abc"});
console.log(required_date);

/*
Output:
{
    status: 'Invalid Offset',
}
*/
```
``` js
//Example 5
const inputDate = new Date("Wed May 18 2022 21:38:17 GMT+0000");
const required_date = timezones.convertFromUTC({date : inputDate, utc_offset : "+05:30"});
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-05-19T03:08:17.000+05:30'
}
*/
```
``` js
//Example 6
const inputDate = new Date("Wed May 18 2022 21:38:17 GMT+0000");
const required_date = timezones.convertFromUTC({date : inputDate, zone : "Australia/Sydney"});
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-05-19T07:38:17.000+10:00'
}
*/
```
``` js
//Example 7
const inputDate = new Date("Wed May 18 2022 21:38:17 GMT+0000");
const required_date = timezones.convertFromUTC({date : inputDate, zone : "Australia/Sydney", utc_offset : "+09:00"});
console.log(required_date);

/*
Output:
{
    status: 'utc_offset does not matched with zone'
}
*/
```
``` js
//Example 8
const inputDate = new Date("Wed May 18 2022 21:38:17 GMT+0000");
const required_date = timezones.convertFromUTC({date : inputDate, zone : "Australia/Sydney", utc_offset : "+10:00"});
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-05-19T07:38:17.000+10:00'
}
*/
```
***

### convertToUTC()
- Will return date (in ISO Format) in UTC timezone from passed timezone.
- Parameters:
    - `date` *(required) Must be a JS Date* 
- Examples:
``` js
//Example 1
const required_date = timezones.convertToUTC();
console.log(required_date);

/*
Output:
{
    status: 'Invalid Date'
}
*/
```
``` js
//Example 2
const required_date = timezones.convertToUTC({date : "2022/11/06"});
console.log(required_date);

/*
Output:
{
    status: 'Invalid Date'
}
*/
// Reason: Date is not an JS Date
```
``` js
//Example 3
const inputDate = new Date("Wed May 18 2022 21:38:17 GMT+0530");
const required_date = timezones.convertToUTC({date : inputDate});
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-05-18T16:08:17.000Z'
}
*/
```
***

### getCurrentDateTime()
- Will return date (in ISO Format) in required timezone.
- Parameters:
    - `utc_offset`
    - `zone`
- **Note:** If both utc_offset and zone are not passed, function will return UTC datetime.
- Examples:
``` js
//Example 1
const required_date = timezones.getCurrentDateTime();
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-08-27T09:27:49.146Z'
}
*/
```
``` js
//Example 2
const required_date = timezones.getCurrentDateTime({utc_offset : "abc"});
console.log(required_date);

/*
Output:
{
    status: 'Invalid Offset',
}
*/
```
``` js
//Example 3
const required_date = timezones.getCurrentDateTime({utc_offset : "+05:30"});
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-08-27T14:57:49.146+05:30'
}
*/
```
``` js
//Example 4
const required_date = timezones.getCurrentDateTime({zone : "Australia/Sydney"});
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-08-27T19:27:49.146+10:00'
}
*/
```
``` js
//Example 5
const required_date = timezones.getCurrentDateTime({zone : "Australia/Sydney", utc_offset : "+09:00"});
console.log(required_date);

/*
Output:
{
    status: 'utc_offset does not matched with zone'
}
*/
```
``` js
//Example 6
const required_date = timezones.getCurrentDateTime({zone : "Australia/Sydney", utc_offset : "+10:00"});
console.log(required_date);

/*
Output:
{
    status: 'OK',
    iso_date: '2022-08-27T19:27:49.146+10:00'
}
*/
```
***


## License

MIT License

Copyright (c) 2022 Anmol Agrawal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Author
***Anmol Agrawal***

[Mail ID](mailto:anmol.ag53@gmail.com?subject=[GitHub]) | [LinkedIn](https://www.linkedin.com/in/anmol-53/) | [GitHub](https://github.com/Anmol53/) | [LeetCode](https://leetcode.com/anmol_53/) | [CodeChef](https://www.codechef.com/users/uniquecoder_) | [HackerRank](https://www.hackerrank.com/anmol_53)

**"Any suggestions would be appreciated"**