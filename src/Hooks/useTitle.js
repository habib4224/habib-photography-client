import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Habib Photography`;
    }, [title])
};
export default useTitle;
