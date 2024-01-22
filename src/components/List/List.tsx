import styles from './List.module.css';
import emptyIcon from '../../assets/empty-icon.svg';

export function List({ items }) {

    const hasItems = !!items?.length;

    function renderItemList() {
        return (
            <ul className={styles['item-list']}>
                {items.map(item => 
                    <li className={styles['list-item']}>
                        {item}
                    </li>
                )}
            </ul>
        );
    }

    function renderEmptyMessage() {
        return (
            <div className={styles['empty-message']}>
                <img src={emptyIcon} />
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p><span>Crie tarefas e organize seus itens a fazer</span></p>
            </div>
        );
    }

    return (
        <section className={styles.list}>
            {
                hasItems
                ? renderItemList()
                : renderEmptyMessage()
            }
        </section>
    )
}
