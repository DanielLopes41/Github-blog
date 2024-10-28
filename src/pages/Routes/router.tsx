import {Routes, Route } from 'react-router-dom'
import { Home } from '../Home'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { PostPage } from '../Post'
export function Router(){
  return(
<Routes>
    <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path='Post/:id' element={<PostPage />} />
    </Route>
</Routes>
  )
}
