import Axios from 'axios';

const ImageList = () => {
    return <div> </div>;
};

export const getStaticProps = async () => {
    const data = await Axios.get("");

    return {
        props :{
            
            imageData: data.data,
        },
    };
};
export default ImageList;