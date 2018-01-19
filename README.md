# 0_33_Redux_Recap
A Redux Recap Training Demo

### todos V
- 将 store 传递 到 子组件 以便于 它们使用 store.disptach

## todos VI
- 使用 React Context 传递 store 到 子组件

### todos VII
- 使用 React-Redux 的 Provider 传递 store 到 子组件

### todos VIII
- 使用 React-Redux 的 Connect 将 P 和 F 组件结合

### todos IX
- Action Creator Extraction

### todos X
- Reducer extraction
- separate store creation from usage
- separate root app from index
- introduce localStorage with lodash throttle

### todos XI
- React-Router v4 introduced
- Action and Reducer were replaced by Route

### todos XII
- Like we bring in connect method to avoid pass params down, we use withRouter for the same purpose
- mapDispatchToProps shorthand notation
- colocate selectors with reducer

### todos XIII
- turn todos from array into object

### todos XIV
- use fake api in place of localStorage
- make the dispatch method of store can handle Promise asn return object

### todos XV
- middlewares pattern

### todos XVI
- 3rd party middlewars in place of homemade peers
- save different state for each filter due to the filter executed on server end

### todos XVII
- reducer refactor

### todos XVIII
- loading indicators

### todos XIX
- introduce thunk by redux-thunk

### todos XX
- handle error in the thunk
- add todo / toggle todo

### todos XXI
- introduce normalizr to make response state shape in consistent
- then refactor reducers accordingly
- toggle todo complete
