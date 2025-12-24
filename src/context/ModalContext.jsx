import React, { createContext, useContext, useState } from 'react';
import ContactModal from '../components/ContactModal';

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState(null);
  const [modalSource, setModalSource] = useState('modal');

  const openModal = (service = null, source = 'modal') => {
    setModalService(service);
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Очищаем данные после закрытия
    setTimeout(() => {
      setModalService(null);
      setModalSource('modal');
    }, 300);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={modalService}
        source={modalSource}
      />
    </ModalContext.Provider>
  );
};

