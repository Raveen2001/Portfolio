import { IProject } from '../../data'
import { useGlobalContext } from '../context/GlobalContext'
import styles from './ProjectModal.module.scss'


const ProjectModal:React.FC = () => {
  const {} =  useGlobalContext();
  return (
    <div className={styles.ProjectModal}>ProjectModal</div>
  )
}

export default ProjectModal