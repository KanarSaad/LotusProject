//Fetching data of pages
//gets two parameters 
// returns data of the wanted page
export const fetchPageData = async (pagePath, pageName) => {
    try {
        //Waiting for a response from server
        const response = await fetch(`http://localhost:3001/${pagePath}/${pageName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        //If there was no response,throw new error
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        //If data exists and there is response, return page data
        const pages = await response.json();
        return pages;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};