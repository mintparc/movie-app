# 🏷 프로젝트를 통해 배운 것들
  * [1. Protection with PropTypes](#1-protection-with-proptypes)
    + [1-1. Install prop-types](#1-1-install-prop-types)
    + [1-2. Import prop-types](#1-2-import-prop-types)
    + [1-3. How to Use](#1-3-how-to-use)
  * [2. State](#2-state)
    + [2-1. How to Use](#2-1-how-to-use)
  * [3. Life Cycle](#3-life-cycle)
  * [4. Axios](#4-axios)
    + [4-1. Install axios](#4-1-install-axios)
    + [4-2. What is Axios](#4-2-what-is-axios)
    + [4-3. How to Use](#4-3-how-to-use)
    + [4-4. Http Methods](#4-4-http-methods)
  * [5. BEM](#5-bem)
  * [10. 내가 마주한 에러](#10-내가-마주한-에러)
  * [참고](#참고)
<br/><br/>

## 1. Protection with PropTypes
### 1-1. Install prop-types
```
npm i prop-types
```
<br/>

### 1-2. Import prop-types
```javascript
import PropTypes from 'prop-types'
```
<br/>

### 1-3. How to Use
```javascript
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,   // number | undefined
}
```
<br/>

## 2. State
`Use with Dynamic Data`  
<br/>

### 2-1. How to Use
```javascript
class App extends React.Component {
  // state is an object and changes
  // Each time a setState is called, the react calls render function with a new state
  state = {
    count: 0
  }

  add = () => this.setState(current => ({ count: current.count + 1 }))
  minus = () => this.setState(current => ({ count: current.count - 1 }))

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
```
<br/>

## 3. Life Cycle
> **마운트**

메서드 | 설명
|---|---|
`constructor`               | 컴포넌트 생성자 메서드. 컴포넌트가 만들어지면 가장 먼저 실행된다.
`getDerivedStateFromProps`  |
`render`                    | 컴포넌트를 랜더링
`componentDidMount`         | 컴포넌트의 첫번째 렌더링이 마치고 나면 호출되는 메서드. 이 메서드가 호출되는 시점에는 우리가 만든 컴포넌트가 화면에 나타난 상태이다.

<br/>

> **업데이트**

메서드 | 설명
|---|---|
`getDerivedStateFromProps`  |
`shouldComponentUpdate`     |
`render`                    |
`getSnapshotBeforeUpdate`   |
`componentDidUpdate`        | 리렌더링이 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출되는 메서드이다.

<br/>

> **언마운트** : 컴포넌트가 화면에서 사라지는것

메서드 | 설명
|---|---|
`componentWillUnmount`      | 컴포넌트가 화면에서 사라지기 직전에 호출된다.

<br/>

## 4. Axios
### 4-1. Install axios
```
npm i axios
```
<br/>

### 4-2. What is Axios
> Axios는 HTTP통신을 하는데 매우 인기있는 Javascript 라이브러리이다.  
> Axios는 `Promise`를 기반으로하여 `async/await`문법을 사용하여 XHR요청을 매우 쉽게 할 수 있다.

<br/>

### 4-3. How to Use
> 기본 사용방법
```javascript
axios.get('/user?ID=12345')
  // 응답(성공)
  .then(function (response) {
    console.log(response);
  })
  // 응답(실패)
  .catch(function (error) {
    console.log(error);
  })
  // 응답(항상 실행)
  .then(function () {
    // ...
  });
```
<br/>

### 4-4. Http Methods
> `method` 부분을 분리하여 사용할 수 있다.

별칭 | 사용
|---|---|
`GET`     | `axios.get(url,[,config])`
`POST`    | `axios.post(url[, data[, config]])`
`PUT`     | `axios.put(url[, data[, config]])`
`PATCH`   | `axios.patch(url[, data[, config]]`
`DELETE`  | `axios.delete(url[, config])`

<br/>

## 5. BEM
> CSS 방법론 중 하나이다.  
> **Block-Element-Modifier**

<br/>

`block-name__element-name--modifier` 와 같은 형태로 작성한다.  
단어와 단어는 하이픈(-)으로 구분을 하며, 소문자를 사용한다.

```css
/* 
  card-movie : BLOCK
  title      : ELEMENT
  bold       : MODIFIER
*/
.card-movie__title--bold {
  font-weight: bold;
}
```

* **Block**
  + 재사용 가능한 독립적 요소
  + 태그와 ID선택자를 사용하지 않는다.
* **Element**
  + Block 안에서 특정한 기능을 담당
  + 필수적이지 않다. (block안에 element가 없을 수 있다.)
* **Modifier**
  + Block, Element의 속성을 정의 한다.
    - 상태(show, hidden, disabled ...), 모양(bold, small ...)
  + 단독으로 사용할 수 없고 `Block__Element--`뒤에 붙여 사용 가능하다.

<br/>

## 10. 내가 마주한 에러
> React key prop
```console
Each child in a list should have a unique "key" prop.
```
JSX를 사용하여 배열로 목록을 생성할 때는 `unique한 key`를 `element`에 부여해줘야 한다.

<br/>

## 참고
* [Life-cycle](https://react.vlpt.us/basic/25-lifecycle.html)
* [Axios](https://xn--xy1bk56a.run/axios/s)
