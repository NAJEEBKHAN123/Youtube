 import styles from './Container.module.css'
function Container({Children}) {
  return (
    <div className={styles.container}>
      {Children}
    </div>
  )
}

export default Container
