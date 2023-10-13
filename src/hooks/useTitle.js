import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title = `${title} - Jewelry Dokan | Find the Perfect Jewelry for Every Occasion `;

    }, [title])
};

export default useTitle