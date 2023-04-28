const { useState } = require("react");

export function useModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return [
        isModalOpen,
        showModal,
        closeModal
    ];
}
