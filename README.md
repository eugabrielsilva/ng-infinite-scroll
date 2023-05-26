# ng-infinite-scroll
**ng-infinite-scroll** is a very simple and lightweight AngularJS directive that allows you to create lazy loading elements with infinite scrolling effect.

## Demo
https://codepen.io/eugabrielsilva/pen/xxyByJr

## Usage
Include the directive in your HTML code:

```html
<script src="ng-infinite-scroll.js"></script>
```

Inject the directive in your application module:

```js
var app = angular.module('app', ['ngInfiniteScroll']);
```

Put the `ng-infinite-scroll` attribute in the scroll container, this means, the element where you want the infinite scroll effect.

The attribute value is the AngularJS function or expression you want to eval when the scrolling reaches the bottom of the container.

```html
<div class="scroll" ng-infinite-scroll="lazyLoad()">
    ...
</div>
```
