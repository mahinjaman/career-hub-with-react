const getDataFromLS = () => {
    const data = localStorage.getItem('jobs');
    if (data) {
        const jobs = JSON.parse(data);
        return jobs;
    }
    return [];
}

const setDataFromLS = id =>{
    const jobs = JSON.stringify(id);
    localStorage.setItem('jobs', jobs);
}

const addToLS = id =>{
    const loadData = getDataFromLS();
    const exist = loadData.find( data => data === id)
    if(!exist){
        loadData.push(id);
        setDataFromLS(loadData);
    }
    else{
        
    }
}


export {getDataFromLS, addToLS}