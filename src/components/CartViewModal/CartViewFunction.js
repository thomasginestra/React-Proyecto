import { useState } from "react";

export const CartViewFunction = (initial = false) => {
  const [isOpen, setIsOpen] = useState(initial);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};