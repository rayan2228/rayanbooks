import { useEffect, useState } from "react";

const useDebounce = (searchInput) => {
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchInput);
    useEffect(() => {
        if (searchInput.trim() === '') {
            setDebouncedSearchTerm('');
            return;
        }

        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchInput);
        }, 500);

        return () => clearTimeout(handler);
    }, [searchInput]);
    return debouncedSearchTerm
}
export default useDebounce

