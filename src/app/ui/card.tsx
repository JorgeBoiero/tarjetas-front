'use server'
import styles from "../ui/home.module.css";
import { deleteCard } from "../lib/actions";
import formatCardNumber from "../lib/utils";

export async function Card({
  id,
  number,
  firstname,
  lastname,
  expirationDate,
  onDelete,
}: {
  readonly id: string;
  readonly number: number | string;
  readonly firstname: string;
  readonly lastname: string;
  readonly expirationDate: string;
  readonly onDelete: (data: string) => void;
}) {
  const deleteCardWithId =  deleteCard.bind(null, id);
  const cardNumberFormated = formatCardNumber(number);

  return (
    <form action={deleteCardWithId}>
      <div className={styles.item}>
        <button
          className={styles.deleteIcon}
          type="submit" /* onClick={handleDelete} */
        >
          <span>&#10006;</span>
        </button>
        <p className="px-2 pl-2 text-center-sm font-semibold">
          {cardNumberFormated}
        </p>

        <div className={styles.itemSection}>
          <p className={`font-semibold`}>
            {firstname} {lastname}
          </p>
          <p className={`font-semibold`}>{expirationDate}</p>
        </div>
      </div>
    </form>
  );
}
