import { useState, useEffect } from "react";
import axios from "axios";

export const useDataFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
	const [error, setError] = useState(false);
  
    useEffect(() => {
      	(async () => {
			try {
				if (url) {
					setLoading(true);
					const response = await axios.get(url);
					if (response) {
						setData(response.data);
					}
				}
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
      	})();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
  
    return {
      error,
      loading,
      data
    };
  }
  
  export default useDataFetch;