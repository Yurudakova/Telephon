import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";
import styles from './Components/App.module.css';


function App() {
 const todos = [
   {title: 'А'}, 
   {title: 'Б'}, 
   {title: 'В', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}]}, 
   {title: 'Г'}, 
   {title: 'Д'}, 
   {title: 'Е'}, 
   {title: 'Ё'}, 
   {title: 'Ж'}, 
   {title: 'З'},
   {title: 'И'}, 
   {title: 'Й'}, 
   {title: 'К'}, 
   {title: 'Л'}, 
   {title: 'М'}, 
   {title: 'Н'}, 
   {title: 'О'}, 
   {title: 'П'}, 
   {title: 'Р'}, 
   {title: 'С'},
   {title: 'Т'}, 
   {title: 'У'}, 
   {title: 'Ф'}, 
   {title: 'Х'}, 
   {title: 'Ц'}, 
   {title: 'Ч'}, 
   {title: 'Ш'}, 
   {title: 'Щ'}, 
   {title: 'Ь'}]
  return  <div className={styles.wrapper}><TodoList todos={todos}/></div>
};
export default App