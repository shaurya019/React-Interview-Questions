// Yes, async/await can be used in React. You can use them inside useEffect, event handlers, or any other function. Example:

useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  