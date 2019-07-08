## Dependencies
---



Hype Card with gradient for react native 🔥

[![npm](https://img.shields.io/npm/dt/react-native-hype-card.svg?style=popout)](https://www.npmjs.com/package/react-native-hype-card)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)



## Installation


```bash
$ npm i --save react-native-hype-card
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```javascript
"react-native-linear-gradient": "^2.5.4",
```

## Basic Usage

```js
<HypeCard />
```


## Advanced Usage

You can check the example for the advanced usage

```js
 <HypeCard
        style={{ marginTop: 16 }}
        title={item.name}
        subtitle={item.shortName}
        centerTitle={item.value}
        centerSubtitle={item.change}
        centerSubtitleStyle={{
          fontSize: 12,
          marginLeft: 8,
          textAlign: "center",
          color: "tomato"
        }}
      />
```

### Configuration - Props


| Property            |   Type    |       Default        | Description                                           |
| ------------------- | :-------: | :------------------: | ----------------------------------------------------- |
| start               |   {x,y}   |    { x: 0, y: 0 }    | change the direction of the gradient                  |
| end                 |   {x,y}   |    { x: 1, y: 0 }    | change the direction of the gradient                  |
| gradientColors      |  [color]  |  check the example   | change the gradient's color array                     |
| style               |   style   |         null         | add any style to the whole container                  |
| shadowStyle         |   style   |  check the example   | set your own shadow style                             |
| shadowColor         |   color   |       #595959        | change the shadow color                               |
| outerContainer      |   style   |        style         | set your own outer container style (NOT recommended!) |
| height              |  number   |          70          | change the card's height                              |
| width               |  number   | device width * 0.95  | change the card's width                               |
| borderRadius        |  number   |          20          | change the card's border radius                       |
| innerContainer      |   style   |        style         | set your own inner container style (NOT recommended!) |
| leftComponent       | component |         null         | set your own component                                |
| title               |  string   |         null         | change the title string with your data                |
| subtitle            |  string   |         null         | change the subtitle string with your data             |
| centerTitle         |  string   |         null         | change the center title string with your data         |
| centerSubtitle      |  string   |         null         | change the center subtitle string with your data      |
| titleStyle          |   style   |        style         | set your own style for title component                |
| subtitleStyle       |   style   |        style         | set your own style for subtitle component             |
| leftComponent       | component | text based component | set your component for the left part                  |
| centerTitleStyle    |   style   |        style         | set your own style for center title component         |
| centerSubtitleStyle |   style   |        style         | set your own style for center subtitle component      |
| centerComponent     | component | text based component | set your component for the center part                |
| rightComponent      | component |         null         | set your own component for the right component        |


## Author

NicoAudy, nicoaudy1994@gmail.com

## License

React Native Hype Card Library is available under the MIT license. See the LICENSE file for more info.