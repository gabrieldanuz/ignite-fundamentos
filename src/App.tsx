import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrieldanuz.png',
      name: 'Gabriel Danuz',
      role: 'Dev Junior'
    },
    content: [{ type: 'paragraph', content: 'Fala galeraa 👋' }],
    publishedAt: new Date('2024-10-02 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gabrieldanuz.png',
      name: 'Gabriel Danuz',
      role: 'Dev Junior'
    },
    content: [{ type: 'paragraph', content: 'Fala galeraa 👋' }],
    publishedAt: new Date('2024-10-01 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
