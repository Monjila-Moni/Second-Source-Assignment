const inputElement = document.querySelector('input')

const debounce = (func, delay)=>{
    let timerId;
    return (...args)=>{
        clearTimeout(timerId)
        timerId = setTimeout(()=>func(...args), delay)
    }
}

const callApi = (e)=>{
 console.log('Calleing', e.target.value)
}
const debouncedCalledApi = debounce(callApi,1000)
inputElement.addEventListener('input',debouncedCalledApi )