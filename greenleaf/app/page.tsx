"use client";
import Image from "next/image";
import { useState } from "react";
import Buttons from "~/components/buttons";
import Modal from "~/components/Modal";
import styles from "~/style/Home.module.css";

export default function Home() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const openModal = (content: string) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src="/elementIMG.jpg"
          alt="elementIMG"
          width={371}
          height={1024}
        />
      </div>
      <div className={styles.right}>
        <h1>Greenleaf</h1>
        <p>Barcha xizmatlar bizda osonlashtrilgan</p>
        <div className={styles.buttons}>
          <div id={styles.btn}>
            <Buttons
              onclick={() => openModal("Istemolchi")}
              text="Istemolchi"
            />
          </div>
          <div id={styles.btn}>
            <Buttons onclick={() => openModal("Sotuvchi")} text="Sotuvchi" />
          </div>
          <div id={styles.btn}>
            <Buttons onclick={() => openModal("Marketing")} text="Marketing" />
          </div>
        </div>
      </div>
      {modalContent && <Modal content={modalContent} onClose={closeModal} />}
    </div>
  );
}
