import { useNavigate } from 'react-router-dom';
import { catalogContent } from '../Showcase/Basic/data/meta.js';

/**
 * Hook to handle navigation between catalog items based on their order in meta.js
 * @param {string} currentId - The ID of the current catalog item
 * @returns {Object} { goToNext, goToPrev, nextId, prevId }
 */
export const useCatalogNavigation = (currentId) => {
    const navigate = useNavigate();

    // Filter only animation items (ignore titles or separators)
    const items = catalogContent.filter(item => item.type === 'animation');

    const currentIndex = items.findIndex(item => item.id === currentId);

    if (currentIndex === -1) {
        console.warn(`Item with id ${currentId} not found in catalog.`);
        return { goToNext: () => { }, goToPrev: () => { } };
    }

    // Circular navigation logic
    const nextIndex = (currentIndex + 1) % items.length;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;

    const nextId = items[nextIndex].id;
    const prevId = items[prevIndex].id;

    const goToNext = () => navigate(`/catalog/basicos/${nextId}`);
    const goToPrev = () => navigate(`/catalog/basicos/${prevId}`);

    return { goToNext, goToPrev, nextId, prevId };
};
