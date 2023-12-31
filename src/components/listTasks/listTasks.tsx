import { ItemTask } from 'components/itemTask/itemTask';
import { TTask } from 'types/task';
import styles from './listTasks.module.css';

type Props = {
  tasks: TTask[];
  removeTask: (id: string) => void;
};

export function ListTasks({ tasks, removeTask }: Props) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list_task}>
        {tasks.length > 0 ? (
          tasks.map((task: TTask) => (
            <ItemTask key={task.id} task={task} removeTask={removeTask} />
          ))
        ) : (
          <h2>Empty</h2>
        )}
      </ul>
    </div>
  );
}
