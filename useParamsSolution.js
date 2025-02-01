The solution is to ensure that the `useParams` hook is used strictly within a component that is a part of the routing hierarchy managed by `useRoutes`.  Instead of trying to access parameters outside of a component, restructure your code so that the parameter access happens within a component rendered through a route definition:

```javascript
// useParamsSolution.js
import { useRoutes, Route, useParams } from 'react-router-dom';

function MyComponent() {
  let { id } = useParams();
  return <div>Component ID: {id}</div>;
}

const routes = useRoutes([
  {
    path: '/my-route/:id',
    element: <MyComponent/>
  },
]);

export default function App() {
  return routes;
}
```
This way, the `useParams` hook is correctly utilized within the routing context provided by `useRoutes` and `MyComponent` will receive the expected parameters.