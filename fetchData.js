import axios from "axios"

const fetchAPIData = ({url, config, onSuccess, onFailure}) => {
    axios.get(url, config)
    .then(res => {
      console.info("portfolios:", res.data);
      onSuccess && onSuccess(res.data.portfolios)
    })
    .catch(err => {
        console.info("error: ", err);
        onFailure && onFailure();
    });
}

export default fetchAPIData;
