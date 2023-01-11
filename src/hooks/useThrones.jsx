import { useContext } from "react";
import ThronesContext from "../context/ThronesProvider";

const useThrones = () => {
    return useContext(ThronesContext)
}

export default useThrones