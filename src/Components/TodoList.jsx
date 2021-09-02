import react from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import Folders from './Folders';
const TodoList = ({todos}) => {
    return <div className={styles.list}>
    {todos.map(e => {
     if (e.children)
     return (<Folders title={e.children}/>)
     else
        return <TodoItem title={e.title}/>
    })}
    </div>
};
export default TodoList;