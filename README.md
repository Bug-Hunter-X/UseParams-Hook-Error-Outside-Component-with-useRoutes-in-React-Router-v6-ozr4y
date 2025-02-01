# useParams Hook Issue in React Router v6 with useRoutes

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6's `useRoutes` function.  Specifically, accessing `useParams` outside a component's rendering scope leads to unexpected behavior, usually returning `undefined`.

The `useParamsError.js` file showcases the problematic code, while `useParamsSolution.js` provides the corrected approach. The solution involves properly structuring the code to access the `useParams` hook only within a component context.