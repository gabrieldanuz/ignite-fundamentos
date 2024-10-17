import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
  return (
    <aside className={styles.Sidebar}>
    
    <div className={styles.profile}>
    <Avatar hasBorder={false} src="https://github.com/gabrieldanuz.png" alt="" />
      <strong>Gabriel Oliveira</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href='#'>
        <PencilLine size={20}/>
        Editar seu perfil
      </a>
    </footer>
    </aside>
  )
}