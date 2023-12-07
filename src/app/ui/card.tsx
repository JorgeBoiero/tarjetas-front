"use client";
import styles from "../ui/home.module.css";

export function Card({
  id,
  number,
  firstname,
  lastname,
  expirationDate,
  onDelete,
}: {
  readonly id: string
  readonly number: number | string;
  readonly firstname: string;
  readonly lastname: string;
  readonly expirationDate: string;
  readonly onDelete: (data:string) => void;
}) {
  const handleDelete = () =>{
    console.log(id)
    onDelete(id)
  }
  return (
    <div className={styles.item}>
      <button className={styles.deleteIcon} onClick={handleDelete}>
        <span>&#10006;</span>
      </button>
      <p className="px-2 pl-2 text-center-sm font-semibold">{number}</p>

      <div className={styles.itemSection}>
        <p className={`font-semibold`}>
          {firstname} {lastname}
        </p>
        <p className={`font-semibold`}>{expirationDate}</p>
      </div>
    </div>
  );
}
