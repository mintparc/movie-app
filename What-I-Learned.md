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
