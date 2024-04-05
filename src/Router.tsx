import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { Blog } from './pages/Blog'
import { PublishDetail } from './pages/PublishDetail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/issue-detail/:issueId" element={<PublishDetail />} />
      </Route>
    </Routes>
  )
}
