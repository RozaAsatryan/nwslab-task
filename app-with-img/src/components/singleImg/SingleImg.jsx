import "./SingleImg.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { getSingleImage } from "../actions/singleImage";

const SingleImg = () => {
  const params = useParams();

  const { id } = params;
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState({});

  const getImages = async () => {
    try {
      setLoading(true);
      const res = await getSingleImage(id);
      setLoading(false);
      setImg(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getImages();
  }, [id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <img className="singleImg" src={img.url} alt={img.id} />
      )}
    </>
  );
};

export default SingleImg;
