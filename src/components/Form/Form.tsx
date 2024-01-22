import plusIcon from '../../assets/plus-icon.svg';
import styles from './Form.module.css';

export function Form(props) {

    function handleSubmitNewTodo(event) {
        event.preventDefault();
        props.onNewTodo("New item add");
    }

    return (
        <form className={styles['new-todo']} onSubmit={handleSubmitNewTodo}>
            <input name="todo" placeholder="Adicione uma nova tarefa"/>
            <button>
                <span>Criar</span>
                <img src={plusIcon} />
            </button>
        </form>
    )
}
